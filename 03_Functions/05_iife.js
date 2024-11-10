//Immediately Invoked Function Expressions (IIFE)
//Function that runs as soon as it is defined. 

/* 
You might want to invoke certain functions as soon as the file runs or something then IIFE used
for eg. file opened and connection with db established right away
*/

function chai(){
    console.log(`DB CONNECTED`); 
}
chai();

//NAMED IIFE
(function cakeRusk(){
    console.log(`DB CONNECTED by named IIFE`);
})();//invoking immediately

//SEMICOLON - after an IIFE is important to end the context or execution

//()() - first is funciton definition, second is execution call

//global scope ki pollution ko prevent karne ke liye used thiss

//like arrow function
( () => {
    console.log(`DB CONNECTED TWO BY IIFE ARROW FUNCTION`);
})();

//with parameters
//UNNAMED NAMED 
((name) => {
    console.log(`DB CONNECTED TWO BY UNNAMED IIFE ${name}`);
    
})("Isheta")