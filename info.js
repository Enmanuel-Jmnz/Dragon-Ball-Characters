const $ = (selector) => document.querySelector(selector);
const aplicacion = $("#container");
const getUrl = new URLSearchParams(window.location.search);
info = getUrl.get("name");
/* Fetching the data from the API and then appending it to the HTML. */
const url = "https://dragon-ball-super-api.herokuapp.com/api/characters";
fetch(`${url}/${info}`)
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = document.createElement("img");
        imageUrl.classList.add("imagen");
        imageUrl.src = data.imageUrl;
        imageUrl.innerHTML = data.imageUrl;
        const status = document.createElement("p");
        status.innerHTML = data.status;
        const originPlanet = document.createElement("p");
        originPlanet.innerHTML = data.originplanet;
        const universe = document.createElement("p");
        universe.innerHTML = data.universe;
        const name = document.createElement("h1");
        name.classList.add("name");
        name.innerHTML = data.name;
        const role = document.createElement("p");
        role.innerHTML = data.role;

        const imagen = $(".imagen");
        const nombre = $(".nombre");
        const rol = $(".rol");
        const estado = $(".status");
        const planeta = $(".planeta");
        const universo = $(".universo");

        imagen.appendChild(imageUrl);
        nombre.appendChild(name);
        rol.appendChild(role);
        estado.appendChild(status);
        planeta.appendChild(originPlanet);
        universo.appendChild(universe);
    })
    .catch((err) => console.log(err));
