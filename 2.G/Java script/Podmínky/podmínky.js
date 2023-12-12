let cislo = 10

// pokud se číslo rovná 10 ...
if (cislo === 10) {
    // ...proved tento příkaz
    console.log("Číslo je 10")

    // nebo pokud se číslo rovná 5...
}else if (cislo === 5) {
// proved tento prikaz
    console.log("Číslo je 5")
}
// v ostatních případech (else)
else {
    // ...proved tento příkaz
    console.log("Číslo není 10 ani 5")
}

let input = prompt("Zadej číslo")
input = parseInt(input)
console.log(input)
// alert("Pozor!!!") 
// parseInt z textu to udela cislo
