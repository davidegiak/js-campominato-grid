let griglia = document.querySelectorAll(".container");

for (let i = 1; i <= 100; i++) {
    let casella = quadrato(i);
    document.append(casella)
}

function quadrato(contenuto) {
    let quadrato = document.createElement("div");
    quadrato.classList.add("square");
    // quadrato.innerText = contenuto;
    return quadrato;
}

