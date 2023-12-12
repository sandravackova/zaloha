let tlacitko = document.querySelector("#tlacitko")
let input = document.querySelector("#input")
let podnadpis = document.querySelector("#podnadpis")
let nadpis = document.querySelector("#nadpis")
let body = document.querySelector("body")

tlacitko.addEventListener("click", zmenNadpis)
function zmenNadpis() {
    let textInputu = input.value
    if (input === "liška") {
        podnadpis.innerText = "What does the fox say"
        body.style.BackgroundColor = "orange"
    } else if (input.value === "želva") {
        body.style.backgroundColor = "green"
        podnadpis.innerText = "I like turtles"
    } else if (input.value === "plameňák") {
        body.style.backgroundColor = "pink"
        podnadpis.innerText = "🦩"
    } else {
        body.style.backgroundColor = "black"
        podnadpis.innerText = "Toto zvíře neznám"
    }
}
