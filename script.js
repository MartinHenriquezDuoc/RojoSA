// Función para navegar entre secciones
function navigateTo(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Inicializar en la sección Dashboard
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('dashboard');
});

// Datos de los cursos
const coursesData = {
    1: {
        title: "Introducción a Python",
        description: "Curso completo para principiantes en Python.",
        duration: "2h 30min",
        level: "Principiante",
        video: "https://www.youtube.com/embed/rzqjYKyciUM",
        modules: [
            "Introducción a la programación",
            "Variables y tipos de datos",
            "Estructuras de control",
            "Funciones básicas",
            "Trabajando con listas y diccionarios"
        ]
    },
    2: {
        title: "JavaScript Avanzado",
        description: "Curso avanzado de JavaScript.",
        duration: "3h 45min",
        level: "Intermedio",
        video: "https://www.youtube.com/embed/hdI2bqOjy3c",
        modules: [
            "Programación asíncrona",
            "Promesas y async/await",
            "Manipulación del DOM avanzada",
            "Patrones de diseño en JS",
            "ES6+ características modernas"
        ]
    },
    3: {
        title: "React Fundamentals",
        description: "Aprende los fundamentos de React.",
        duration: "4h 15min",
        level: "Avanzado",
        video: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        modules: [
            "Introducción a React",
            "Componentes y Props",
            "Estado y ciclo de vida",
            "Hooks básicos",
            "Manejo de formularios"
        ]
    }
};

// Función para abrir el modal con la información del curso
function openCourseModal(courseId) {
    const course = coursesData[courseId];
    if (!course) return;

    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('courseDescription');
    const videoContainer = document.querySelector('.video-container');
    const modulesList = document.getElementById('courseModules');

    title.textContent = course.title;
    description.textContent = course.description;

    videoContainer.innerHTML = `
        <iframe class="absolute top-0 left-0 w-full h-full"
                src="${course.video}"
                title="${course.title}" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
    `;

    modulesList.innerHTML = course.modules.map((module, index) => `
        <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                ${index + 1}
            </span>
            <span class="text-gray-700">${module}</span>
        </div>
    `).join('');

    modal.classList.remove('hidden');
    modal.classList.add('fade-in');
}

// Función para cerrar el modal
function closeCourseModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('fade-out');
    }, 300);
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCourseModal();
    }
});

// Cerrar modal al hacer clic fuera de él
const modal = document.getElementById('courseModal');
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeCourseModal();
    }
});
