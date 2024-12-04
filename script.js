// Existing Navigation Function
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Initialize on Dashboard
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('dashboard');
});

// Existing Courses Data
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

// Profile Page Functions
function changePassword() {
    const newPassword = prompt('Ingrese su nueva contraseña:');
    const confirmPassword = prompt('Confirme su nueva contraseña:');

    if (newPassword && confirmPassword && newPassword === confirmPassword) {
        alert('Contraseña cambiada exitosamente');
    } else if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
    }
}

// Profile Form Submission
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cambios guardados exitosamente');
});

// Toggle switches
document.getElementById('notificationsToggle').addEventListener('change', function(e) {
    e.preventDefault();
    alert('Cambios guardados exitosamente');
});
