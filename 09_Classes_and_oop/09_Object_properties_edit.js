console.log(Math.PI);
Math.PI = 5 //couldn't override
console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")//if u want to know a specific property of an object
//Math module , PI - property inside

console.log(descriptor);
//It's hardcoded so it can't be overwritten

//can also define properties like this on our own
const chai = {
    name: 'elaichi chai',
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
        writable: false,
        enumerable: false,
    })
    console.log(Object.getOwnPropertyDescriptor(chai, "name"));
    
    for(let [key, value] of Object.entries(chai)){

        if(typeof value !== 'function'){

            console.log((`${key} : ${value}`));
        }
    }//not iterable after enumerable set to false for name property