let cislo = prompt("Kolik vám je let?")
cislo = parseInt(cislo)
console.log(cislo)

if(cislo >= 18) {
    console.log("Můžete si ojednat pivo")
} else if(cislo < 18) {
    console.log("Pro vás máme pouze kolu")
    }
// } else(vek >= 21) {
//     console.log("Pivo, už se nese i pro Amíka")
// }