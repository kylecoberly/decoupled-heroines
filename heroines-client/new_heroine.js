const apiUrl = "http://localhost:3000"

const $form = document.querySelector(".new-heroine")
const $powers = document.querySelector(".powers")

fetch(`${apiUrl}/powers`)
    .then(response => response.json())
    .then(powers => powers.map(createPower).forEach(displayPower))

$form.addEventListener("submit", event => {
    event.preventDefault()

    const heroine = {
        name: event.target["name"].value,
        super_name: event.target["super_name"].value,
        power_id: event.target["power_id"].value,
    }

    addNewHeroine(heroine)
})

function addNewHeroine(heroine){
    fetch(`${apiUrl}/heroines`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(heroine)
    }).then(() => {
        window.location = "/"
    })
}

function createPower(power){
    const $power = document.createElement("option")
    $power.value = power.id
    $power.textContent = power.name
    return $power
}

function displayPower($power){
    $powers.append($power)
}
