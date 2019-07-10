const apiUrl = "http://localhost:3000"

const $heroineContainer = document.querySelector(".heroine")
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")

fetch(`${apiUrl}/heroines/${id}`)
    .then(response => response.json())
    .then(heroine => displayHeroine(createHeroine(heroine)))

function createHeroine(heroine){
    const $heroine = document.createElement("div")
    $heroine.innerHTML = `
<p><strong>${heroine.super_name}</strong> - ${heroine.name}</p>
<p>Superpower: <a href="/show_power.html?id=${heroine.power.id}">${heroine.power.name}</a></p>
    `
    return $heroine
}

function displayHeroine($heroine){
    $heroineContainer.append($heroine)
}

