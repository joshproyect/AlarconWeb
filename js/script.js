/* Javascript relacionado con el formulario */
document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactFormContainer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const data = {
        nombre: nombre,
        dni: dni,
        email: email,
        mensaje: mensaje
    };

    // Aquí debes colocar la URL de tu servidor o servicio de envío de correos
    fetch('https://your-server-url/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').textContent = 'Correo enviado exitosamente!';
            document.getElementById('contactForm').reset(); // Limpiar el formulario
        } else {
            document.getElementById('responseMessage').textContent = 'Error al enviar el correo.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Error de red.';
    });
});

