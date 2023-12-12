let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.querySelector("#nadpis")
let input = document.querySelector("#input")
let podnadpis = document.querySelector("#podnadpis")
let cislo = 15

tlacitko.addEventListener("click", zmenNadpis)
function zmenNadpis() {
    let textInputu = input.value
    console.log(input.value)
    console.log(cislo)
    if (input.value === cislo) {
        podnadpis.innerText = "Gratuluji uhádl jsi číslo"
    } else if (cislo < input.value) {
        podnadpis.innerText = "Zkus něco měnšího"
    } else {
        podnadpis.innerText = "Ne ne zkus nějaké větší číslo"
    }
}
