// function prictiDva(x) {
//     let plusdva = x + 2
//     console.log(plusdva)
// }

// prictiDva(5)

// function vyhazovac(rocnik, aktualniRok) {
//     if (rocnik >= 2005) {
//         a = "Můžeš vstoupit"
//     } else {
//         a = "Nemůžeš vstoupit"
//     }
// }
// console.log(vyhazovac, aktualniRok)

function doporucFilm(zanr) {
    if (zanr === "akcni filmy") {
        console.log("Die hard")
    } else if (zanr === "komedie") {
        console.log("The Nice Guys")
    } else if (zanr === "pohádky") {
        console.log("Ať žijí duchové")
    } else {
        console.log("Zkuste zadat jiný žánr")
    }
}
doporucFilm("akcni filmy")
