let griglia = document.querySelector(".container");

const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    for (let i = 1; i <= 100; i++) {
        // let casella = document.createElement("div");
        // casella.classList.add("square", "red");
        let casella = quadrato(i)
        griglia.append(casella);
    
        // casella.addEventListener("click", function() {
        //     casella.classList.add("white");
        //     casella.classList.remove("red");
        //     casella.append(i);
        // })
    
    }
    
    function quadrato(contenuto) {
        let square = document.createElement("div");
        square.classList.add("square", "red");
        square.addEventListener("click", function(){
            if (square.classList.contains("red"))
            square.append(contenuto);
            square.classList.add("white");
            square.classList.remove("red");
        } )
        return square
    }

    
})



