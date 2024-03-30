(async function () {
    // Petición a la API
    const respuesta = await fetch("https://randomuser.me/api/?results=5000");
    const datos = await respuesta.json();

    // Obtener el contenedor
    const contenedor = document.querySelector("#contenedor-usuarios");

    // Mostrar la información
    for (const usuario of datos.results) {
        const tarjetaUsuario = document.createElement("div");
        tarjetaUsuario.classList.add("tarjeta-usuario");
        tarjetaUsuario.innerHTML = `
            <img src="${usuario.picture.large}" alt="Foto de ${usuario.name.first} ${usuario.name.last}">
            <h3>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h3>
            <p>Email: ${usuario.email}</p>
            <p>Teléfono: ${usuario.phone}</p>
            <p>Celular: ${usuario.cell}</p>
        `;

        contenedor.appendChild(tarjetaUsuario);
    }
})();
