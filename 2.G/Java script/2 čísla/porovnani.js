let cislo = prompt("Napiště vaše číslo")
cislo = parseInt(cislo)
console.log(cislo)

let cislo2 = prompt("Napiště vaše druhé číslo")
cislo2 = parseInt(cislo2)
console.log(cislo2)

if (cislo >= cislo2) {
    console.log("Číslo, které jste si tipnul je větší")
} else if (cislo <= cislo2) {
    console.log("Číslo, které jste si tipnul je menší")
} else {
    console.log("Čísla, která jste si tipnul jsou stejná")
}
