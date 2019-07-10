const apiUrl = "http://localhost:3000"

const $powerContainer = document.querySelector(".power")
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")

fetch(`${apiUrl}/powers/${id}`)
    .then(response => response.json())
    .then(power => displayPower(createPower(power)))

function createPower(power){
    const $power = document.createElement("div")
    $power.innerHTML = `
<p><strong>${power.name}</strong> - ${power.description}</p>
    `
    return $power
}

function displayPower($power){
    $powerContainer.append($power)
}


