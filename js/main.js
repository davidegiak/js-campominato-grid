const griglia = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
    // let casella = document.createElement("div");
    // casella.classList.add("square", "red");
    let casella = quadrato(i)
    griglia.append(casella);

    casella.addEventListener("click", function() {
        casella.classList.add("white");
        casella.classList.remove("red");
        casella.append(i);

    })

}

function quadrato(contenuto) {
    let casella = document.createElement("div");
    casella.classList.add("square", "red");
}

let square = quadrato(i)