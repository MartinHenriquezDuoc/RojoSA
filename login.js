// Funciones para el manejo del formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aquí iría la lógica de autenticación
    authenticateUser(email, password);
});

async function authenticateUser(email, password) {
    try {
        // Simular una llamada a API de autenticación
        const button = document.querySelector('button[type="submit"]');
        button.classList.add('loading');
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // En un caso real, aquí irían las validaciones con el backend
        if (email && password) {
            // Redirigir al dashboard en caso de éxito
            window.location.href = 'index.html';
        } else {
            showError('Credenciales inválidas');
        }
    } catch (error) {
        showError('Error al intentar iniciar sesión');
    } finally {
        button.classList.remove('loading');
    }
}

function loginWithGoogle() {
    // Aquí iría la implementación de la autenticación con Google Meet
    console.log('Iniciando sesión con Google Meet...');
    // Simular autenticación exitosa y redirección
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function loginWithMoodle() {
    // Aquí iría la implementación de la autenticación con Moodle
    console.log('Iniciando sesión con Moodle...');
    // Simular autenticación exitosa y redirección
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function toggleForms() {
    
    const registerForm = document.getElementById('registerForm');
    
    // Toggle formularios
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

// Manejar el envío del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('registerEmail').value,
        password: document.getElementById('registerPassword').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        intereses: Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(cb => cb.value),
        nivelEstudios: document.getElementById('nivelEstudios').value
    };
    
    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Datos de registro:', formData);
    
    // Simular registro exitoso
    alert('Registro exitoso! Por favor, inicia sesión.');
    toggleForms();
});

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const form = document.getElementById('loginForm');
    form.appendChild(errorDiv);
    
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Prevenir múltiples envíos del formulario
let isSubmitting = false;
document.getElementById('loginForm').addEventListener('submit', function(e) {
    if (isSubmitting) {
        e.preventDefault();
        return;
    }
    
    isSubmitting = true;
    setTimeout(() => {
        isSubmitting = false;
    }, 2000);
});