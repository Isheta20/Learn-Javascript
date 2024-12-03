const clock = document.querySelector("#clock");



setInterval(function(){

    let d = new Date();
    // console.log(d.toLocaleTimeString());
    
    clock.innerHTML = d.toLocaleTimeString()
}, 1000)


