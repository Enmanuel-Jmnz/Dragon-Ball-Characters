const $ = (selector) => document.querySelector(selector);
/* Fetching the data from the API and then it is creating the elements and appending them to the DOM. */
const API_ORIGIN = "https://dragon-ball-super-api.herokuapp.com/api/characters";
fetch(API_ORIGIN)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((character) => {
            const h2 = document.createElement("img");
            h2.src = character.imageUrl;
            h2.classList.add("img2");
            h2.setAttribute("name", character.imageUrl);
            h2.innerHTML = character.imageUrl;
            h2.addEventListener("click", function () {
                window.open(`./info.html?name=${character.name}`);
            });
            const personajes = $("#container");

            personajes.appendChild(h2);
        });
    })
    .catch((err) => console.error(err));
