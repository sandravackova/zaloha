let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.getElementById("nadpis")

let input = document.querySelector("#input")


tlacitko.addEventListener("click", zmenNadpis)
    function zmenNadpis() {
        let textInputu = input.value
        nadpis.style.color = "red"
        nadpis.style.fontSize = "100px"
        nadpis.innerText = textInputu
}



// nadpis.style.fontSize = "100px" => změna velikosti textu
// nadpis.innerText = "Změna textu" => změní text z Stč prst skz krk se staně Změna textu
