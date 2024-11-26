//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

// const greetings = "Hello world!";
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
    
// }

//Maps
const map = new Map()
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//keys are unique, can't hv duplicate

// console.log(map);

for(const key of map){
    console.log(key); 
}
console.log("\n");
for(const [key, value] of map){//array gets destructured
    console.log(key, ':-', value); 
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for(const [key, value] of myObj){//obj can't be iterated like this
//     console.log(key, ':-', value); 
    
// }



