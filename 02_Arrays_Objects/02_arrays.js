const animals = ["bunny", "cheetah", "snake"]
const seaAnimals = ["otter", "dolphin", "whale"]

animals.push(seaAnimals);//the second array gets added as the last element
console.log(animals)

console.log(animals[3][0]);

console.log("\n");
const allAnimals = animals.concat(seaAnimals);//returns a new array 
console.log(allAnimals);


//SPREAD operator is the best way 
//kaanch ka glass, drop, bikhar gya -_<

const all_new_heros = [...animals, ...seaAnimals];
console.log(all_new_heros);


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const d_remove = anotherArr.flat(Infinity);//will see depth on it's own but prefer to give exact depth

console.log(d_remove);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));//convert to array
console.log(Array.from({name: "hitesh"}))//can't convert this too array
//INTERSTING interview case, will hv to specify here whether to make all keys array or all values


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
