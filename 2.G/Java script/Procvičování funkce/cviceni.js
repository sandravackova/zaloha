let tlacitko = document.querySelector("#tlacitko")
let input = document.querySelector("#input")
let input1 = document.querySelector("#input1")
let podnadpis = document.querySelector("#podnadpis")

tlacitko.addEventListener("click", prevod)
function prevod() {
    let stupne = (5 / 9) * (input1 - 32)
    return stupne
}
function prevod2() {
    let fahrneit = (9 / 5) * (input1 + 32)
    return fahrneit
    podnadpis.innerText = fahrneit
}
// let textInputu = input.value
// if(input.value === "C"){
//     podnadpis.innerText = stupne
// } else if()
