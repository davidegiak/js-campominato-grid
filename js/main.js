const griglia = document.querySelectorAll("container");

for (let i = 1; i <= 100; i++) {
    let casella = document.createElement("div");
    casella.classList.add("square")
    griglia.append(casella);
}

// function quadrato(contenuto) {
//     let quadrato = document.createElement("div");
//     quadrato.classList.add("square");
//     quadrato.innerText = contenuto;
//     return quadrato;
// }

