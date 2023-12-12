function plusminus(n) {
    if (n > 0) {
        console.log("+")
    } else if (n < 0) {
        console.log("-")
    } else {
        console.log("nic")
    }
}
plusminus(0)

function plusJedna(x) {
    let neco = x + 1
    console.log(x, "Plus jedna je ", neco)
}

plusJedna(6)

function person_info(name, height, money) {
    if (height < 150) {
        x = "je malý"
    } else {
        x = "je vysoký"
    }
    if (money < 1000) {
        y = "a chudý"
    } else {
        y = "a bohatý"
    }
    console.log(name, x, y)
}
person_info("Bob", 120, 2000)
