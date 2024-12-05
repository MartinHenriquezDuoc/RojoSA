// Función para abrir el modal con la información del curso
function openCourseModal(courseId) {
    // Obtener el curso seleccionado
    const course = coursesData[courseId];
    if (!course) return;

    // Obtener elementos del modal
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('courseDescription');
    const videoContainer = document.querySelector('.video-container'); // Cambiado a clase si aplica
    const modulesList = document.getElementById('courseModules');

    // Actualizar el contenido del modal
    title.textContent = course.title;
    description.textContent = course.description;

    // Inserta el video en el contenedor del modal
    videoContainer.innerHTML = `
        <iframe 
            src="${course.video}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;

    // Actualizar los módulos del curso
    modulesList.innerHTML = course.modules
        .map((module, index) => `
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    ${index + 1}
                </span>
                <span class="text-gray-700">${module}</span>
            </div>
        `)
        .join('');

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

// Base de datos de preguntas por tema
const quizData = {
    frontend: {
        title: "Quiz de Frontend Development",
        questions: [
            {
                id: 1,
                question: "¿Cuál es el propósito principal de CSS en el desarrollo web?",
                options: [
                    { value: "a", text: "Estructurar el contenido web" },
                    { value: "b", text: "Estilizar y dar formato visual a las páginas web" },
                    { value: "c", text: "Manejar la lógica del cliente" }
                ],
                correctAnswer: "b",
                feedback: {
                    correct: "¡Correcto! CSS (Cascading Style Sheets) es el lenguaje utilizado para dar estilo y formato visual a las páginas web. Permite controlar el diseño, los colores, las fuentes y la disposición de los elementos.",
                    incorrect: "CSS se utiliza específicamente para estilizar y dar formato visual a las páginas web. HTML se encarga de la estructura y JavaScript de la lógica."
                }
            },
            {
                id: 2,
                question: "¿Qué es un evento en JavaScript?",
                options: [
                    { value: "a", text: "Una función que se ejecuta automáticamente" },
                    { value: "b", text: "Un error en el código" },
                    { value: "c", text: "Una acción que ocurre en la página web, como un clic o tecla presionada" }
                ],
                correctAnswer: "c",
                feedback: {
                    correct: "¡Excelente! Los eventos en JavaScript son acciones que ocurren en una página web, como clics, teclas presionadas o movimientos del mouse. Son fundamentales para crear interactividad.",
                    incorrect: "Los eventos son acciones que ocurren en una página web, como cuando un usuario hace clic o presiona una tecla. Son esenciales para la interactividad web."
                }
            }
        ]
    },
    backend: {
        title: "Quiz de Backend Development",
        questions: [
            {
                id: 1,
                question: "¿Qué es una API REST?",
                options: [
                    { value: "a", text: "Un tipo de base de datos" },
                    { value: "b", text: "Una interfaz para comunicación entre sistemas usando HTTP" },
                    { value: "c", text: "Un lenguaje de programación" }
                ],
                correctAnswer: "b",
                feedback: {
                    correct: "¡Correcto! Una API REST es una interfaz que permite la comunicación entre sistemas utilizando el protocolo HTTP. Define un conjunto de reglas para crear servicios web.",
                    incorrect: "Una API REST es una interfaz que permite la comunicación entre sistemas. Utiliza HTTP y es fundamental en el desarrollo web moderno."
                }
            },
            {
                id: 2,
                question: "¿Qué significa CRUD en desarrollo backend?",
                options: [
                    { value: "a", text: "Create, Read, Update, Delete" },
                    { value: "b", text: "Complex, Random, Unique, Data" },
                    { value: "c", text: "Custom, Regular, Unified, Development" }
                ],
                correctAnswer: "a",
                feedback: {
                    correct: "¡Exacto! CRUD representa las cuatro operaciones básicas de persistencia: Create (Crear), Read (Leer), Update (Actualizar) y Delete (Eliminar).",
                    incorrect: "CRUD significa Create (Crear), Read (Leer), Update (Actualizar) y Delete (Eliminar). Son las operaciones fundamentales en la gestión de datos."
                }
            }
        ]
    },
    database: {
        title: "Quiz de Bases de Datos",
        questions: [
            {
                id: 1,
                question: "¿Qué es una llave primaria (Primary Key)?",
                options: [
                    { value: "a", text: "Un campo opcional en una tabla" },
                    { value: "b", text: "Un identificador único para cada registro en una tabla" },
                    { value: "c", text: "Una contraseña para acceder a la base de datos" }
                ],
                correctAnswer: "b",
                feedback: {
                    correct: "¡Correcto! Una llave primaria es un campo o conjunto de campos que identifica de manera única cada registro en una tabla. Es fundamental para la integridad de los datos.",
                    incorrect: "Una llave primaria es un identificador único para cada registro en una tabla. Es esencial para mantener la integridad y relaciones en la base de datos."
                }
            },
            {
                id: 2,
                question: "¿Qué tipo de base de datos es MongoDB?",
                options: [
                    { value: "a", text: "Relacional (SQL)" },
                    { value: "b", text: "No Relacional (NoSQL)" },
                    { value: "c", text: "Una base de datos de grafos" }
                ],
                correctAnswer: "b",
                feedback: {
                    correct: "¡Exacto! MongoDB es una base de datos NoSQL orientada a documentos. Esto significa que almacena datos en documentos tipo JSON en lugar de tablas relacionales.",
                    incorrect: "MongoDB es una base de datos NoSQL (No Relacional). Está diseñada para almacenar datos en formato de documentos, ofreciendo mayor flexibilidad que las bases de datos relacionales."
                }
            }
        ]
    }
};

// Variables de estado
let currentTopic = null;
let currentQuestion = 1;
let userAnswers = {};

// Función para seleccionar tema
function selectTopic(topic) {
    currentTopic = topic;
    currentQuestion = 1;
    userAnswers = {};
    
    document.getElementById('topicSelector').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('quizTitle').textContent = quizData[topic].title;
    
    showQuestion(1);
}

// Función para mostrar el selector de temas
function showTopicSelector() {
    document.getElementById('topicSelector').classList.remove('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.add('hidden');
}

// Función para mostrar pregunta
function showQuestion(questionNumber) {
    const quiz = quizData[currentTopic];
    const question = quiz.questions[questionNumber - 1];
    
    // Actualizar progreso
    document.getElementById('progressText').textContent = `Pregunta ${questionNumber} de ${quiz.questions.length}`;
    document.getElementById('progressBar').style.width = `${(questionNumber / quiz.questions.length) * 100}%`;
    
    // Generar HTML de la pregunta
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `
        <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">${question.question}</h3>
            <div class="space-y-3">
                ${question.options.map(option => `
                    <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200
                           ${userAnswers[question.id] === option.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}">
                        <input type="radio" name="q${question.id}" value="${option.value}" 
                               class="h-4 w-4 text-blue-600" 
                               ${userAnswers[question.id] === option.value ? 'checked' : ''}>
                        <span class="ml-3">${option.text}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    // Actualizar botones
    document.getElementById('prevButton').classList.toggle('hidden', questionNumber === 1);
    document.getElementById('nextButton').textContent = 
        questionNumber === quiz.questions.length ? 'Finalizar' : 'Siguiente';
    
    // Ocultar feedback anterior
    document.getElementById('feedbackBox').classList.add('hidden');

    // Añadir listeners a los radio buttons
    document.querySelectorAll(`input[name="q${question.id}"]`).forEach(radio => {
        radio.addEventListener('change', () => checkAnswer(questionNumber));
    });
}

// Función para verificar respuesta
function checkAnswer(questionNumber) {
    const quiz = quizData[currentTopic];
    const question = quiz.questions[questionNumber - 1];
    const selectedAnswer = document.querySelector(`input[name="q${question.id}"]:checked`)?.value;
    
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    userAnswers[question.id] = selectedAnswer;

    // Mostrar feedback inmediato
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    
    feedbackBox.classList.remove('hidden');
    feedbackBox.className = `mb-8 p-6 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`;
    feedbackTitle.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
    feedbackTitle.className = `text-lg font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'} mb-2`;
    feedbackText.textContent = isCorrect ? question.feedback.correct : question.feedback.incorrect;
}

// Función para navegar entre preguntas
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    const quiz = quizData[currentTopic];
    const selectedAnswer = document.querySelector(`input[name="q${quiz.questions[currentQuestion - 1].id}"]:checked`);
    
    if (!selectedAnswer) {
        alert('Por favor, selecciona una respuesta antes de continuar.');
        return;
    }

    if (currentQuestion < quiz.questions.length) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
});

// Función para mostrar resultados
function showResults() {
    const quiz = quizData[currentTopic];
    let correctAnswers = 0;
    
    quiz.questions.forEach(question => {
        if (userAnswers[question.id] === question.correctAnswer) {
            correctAnswers++;
        }
    });

    const percentage = (correctAnswers / quiz.questions.length) * 100;

    // Ocultar quiz y mostrar resultados
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');

    // Actualizar puntuación y barra de progreso
    document.getElementById('score').textContent = correctAnswers;
    document.getElementById('scoreBar').style.width = `${percentage}%`;

    // Generar feedback detallado
    const finalFeedback = document.getElementById('finalFeedback');
    finalFeedback.innerHTML = quiz.questions.map((question, index) => {
        const isCorrect = userAnswers[question.id] === question.correctAnswer;
        return `
            <div class="p-6 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}">
                <h4 class="font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'} mb-2">
                    Pregunta ${index + 1}: ${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                </h4>
                <p class="text-gray-700 mb-4">${question.question}</p>
                <p class="text-gray-600">
                    ${isCorrect ? question.feedback.correct : question.feedback.incorrect}
                </p>
            </div>
        `;
    }).join('');
}

// Función para reiniciar el quiz
function restartQuiz() {
    currentQuestion = 1;
    userAnswers = {};
    showQuestion(1);
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
}

// Inicialización del script
document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que el selector de temas esté visible al inicio
    showTopicSelector();
});

function logout() {
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
    }