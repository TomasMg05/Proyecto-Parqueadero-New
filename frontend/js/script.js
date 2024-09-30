
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            // Se puede añadir lógica para gestionar permisos según el rol.
        } else {
            alert('Credenciales incorrectas');
        }
    });
}

function addApartment() {
    const apartmentNumber = document.getElementById('apartmentNumber').value;
    const residentName = document.getElementById('residentName').value;

    fetch('/api/apartments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apartmentNumber, residentName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Apartamento agregado con éxito');
        }
    });
}

function cerrar(){
    document.getElementById("dashboard-content").style.display="none";
}

function abrir(){
    document.getElementById("dashboard-content").style.display="block";
}

function eliminar(){
    document.getElementById("fila").style.display="none";
}