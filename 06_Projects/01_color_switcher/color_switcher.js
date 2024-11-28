

const buttons = document.querySelectorAll(".button")

// console.log(buttons)
buttons.forEach( (b) => {
    b.addEventListener( "click", (e) => {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id == "grey"){

            document.body.style.backgroundColor="grey";
        }
        else if(e.target.id == "white"){

            document.body.style.backgroundColor="white";
        }
        else if(e.target.id == "purple"){

            document.body.style.backgroundColor="purple";
        }else{
            
            document.body.style.backgroundColor="yellow";
        }
    })
})

