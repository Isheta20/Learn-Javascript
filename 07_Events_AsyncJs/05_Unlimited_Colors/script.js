// function randomCol(){
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     let color = "#"+randomColor
//     document.querySelector('body').style.backgroundColor = color;
// }

const randomCol = function(){

    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]//generating the idx, concatenating 6 digits to create hex code
    }
    return color;
}

let intervalId;
function startChangingColor(){


    /*PREVENT MULTIPLE INTERVALS: If the startChangingColor function is called repeatedly without clearing the previous interval (e.g., by mistake), multiple intervals could run simultaneously, causing performance issues or erratic behavior.

    Example (without the check):

    javascript
    Copy code
    startChangingColor(); // Starts one interval
    startChangingColor(); // Starts another interval */



    if(!intervalId){//chk if it is null or does not exist then i.e. it has started first time or has been stopped then only will start

        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor(){
        document.querySelector('body').style.backgroundColor = randomCol();
    }
}
document.querySelector("#start").addEventListener('click', startChangingColor, false)

document.querySelector("#stop").addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null;//dereferncing, clearing out etc
}, false)