function ukazka(pozdrav) {
    console.log(pozdrav)
    console.log("Nazdar")
}
ukazka("Dobrý den")
ukazka("Ahoj")

function scitani(cisloA, cisloB) {
    let vysledek = cisloA + cisloB
    console.log(vysledek)
}
scitani(3, 8)

function prevod(km) {
    let mile = km * 0.613
    return mile
}
prevod(10)
console.log(prevod(50))
let vysledekPrevodu = prevod(30)

// kdyz vytvorim promennou uvnitr funkce plati jen pro tu funkci nejnikde jinde
// function prevod(km) {
//     let mile = km * 0.613
//     console.log(mile)
// }

// let vysldekPrevodu30 = prevod(30)
// let vysldekPrevodu50 = prevod(50)
