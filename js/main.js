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
        btn.classList.add("full");
        square.addEventListener("click", function(){
            if (square.classList.contains("red"))
            square.append(contenuto);
            square.classList.add("white");
            square.classList.remove("red");
        } )
        return square
    }


    btn.addEventListener("click", function(){
        if (btn.classList.contains("full")){   
        document.querySelector(".container").innerHTML = "";
        btn.classList.remove("full");      
        }
        else {
            for (let i = 1; i <= 100; i++) {
                // let casella = document.createElement("div");
                // casella.classList.add("square", "red");
                let casella = quadrato(i)
                griglia.append(casella);
            }
        }
    })

    
})


