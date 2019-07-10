const apiUrl = "http://localhost:3000"

const $heroines = document.querySelector(".heroines")
const $filterForm = document.querySelector(".filter")
const urlParams = new URLSearchParams(window.location.search)
const filterText = urlParams.get("filter")

let heroinesUrl = `${apiUrl}/heroines`
if (filterText){
    heroinesUrl = `${heroinesUrl}?filter=${filterText}`
}

fetch(heroinesUrl)
    .then(response => response.json())
    .then(heroines => {
        heroines
            .map(createHeroine)
            .forEach(displayHeroine)
    })

$filterForm.addEventListener("submit", event => {
    event.preventDefault()
    const filterText = event.target["filter"].value
    window.location = `?filter=${filterText}`
})

function createHeroine(heroine){
    const $heroine = document.createElement("li")
    $heroine.innerHTML = `
<p><strong><a href="/show_heroine.html?id=${heroine.id}">${heroine.super_name}</a></strong> - ${heroine.name}</p>
<p>Superpower: ${heroine.power.name}</p>
    `
    return $heroine
}

function displayHeroine($heroine){
    $heroines.append($heroine)
}
