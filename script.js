// Datos de los cursos
const coursesData = {
    1: {
        title: "Introducción a Python",
        description: "Curso completo para principiantes en Python. Aprenderás desde los conceptos básicos hasta la creación de aplicaciones simples.",
        duration: "2h 30min",
        level: "Principiante",
        video: "https://www.youtube.com/embed/rzqjYKyciUM", // Este es un ejemplo, deberás usar tus propios videos
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
        description: "Profundiza en JavaScript con conceptos avanzados. Ideal para desarrolladores con conocimientos básicos de JS.",
        duration: "3h 45min",
        level: "Intermedio",
        video: "https://www.youtube.com/embed/hdI2bqOjy3c", // Ejemplo
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
        description: "Aprende los fundamentos de React, la biblioteca más popular para construir interfaces de usuario.",
        duration: "4h 15min",
        level: "Avanzado",
        video: "https://www.youtube.com/embed/w7ejDZ8SWv8", // Ejemplo
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
    // Obtener el curso seleccionado
    const course = coursesData[courseId];
    if (!course) return;

    // Obtener elementos del modal
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('courseDescription');
    const videoContainer = document.querySelector('.video-container');
    const modulesList = document.getElementById('courseModules');

    // Actualizar contenido del modal
    title.textContent = course.title;
    description.textContent = course.description;

    // Actualizar video
    videoContainer.innerHTML = `
        <iframe 
            class="absolute top-0 left-0 w-full h-full"
            src="${course.video}"
            title="${course.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;

    // Actualizar módulos
    modulesList.innerHTML = course.modules.map((module, index) => `
        <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                ${index + 1}
            </span>
            <span class="text-gray-700">${module}</span>
        </div>
    `).join('');

    // Mostrar el modal
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

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
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
});
