// Función para abrir los cursos en el modal
function openCourseModal(courseId) {
    // Obtener el curso seleccionado
    const course = coursesData[courseId];
    if (!course) return;

    // Obtener elementos del modal
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('courseDescription');
    const videoContainer = document.getElementById('courseModules');

    // Actualizar el contenido del modal
    title.textContent = course.title;
    description.textContent = course.description;

    // Inserta el video en el contenedor del modal
    const video = `<iframe src="${course.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoContainer.innerHTML = video;

    // Mostrar el modal
    modal.classList.remove('hidden');
}

// Función para cerrar el modal de cursos
function closeCourseModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.add('hidden');
}

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

// Navegar entre secciones
function navigateTo(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Inicializar en Dashboard
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('dashboard');
});
