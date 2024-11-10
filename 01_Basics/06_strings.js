const n = "Isheta"
const num = 22
console.log(n + num + "val");// This syntax not awesome don't prefer for variable and string concatenation
console.log("\n")


//now we use backticks``, more readable syntax

console.log(`Greetings fellow js enthusiasts, my name is ${n}`)

//this is called STRING INTERPOLATION


//another method of declaration using classes
const gameName = new String('Raven')

console.log(gameName[0]);
console.log(gameName.__proto__);//to see object

console.log("\n");

//string has lots of methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);//we will see that it does not change the original string bec. we know primitive-stack-copy

console.log(gameName.charAt(3));//find what character at this position
console.log(gameName.indexOf('e'));//find position of char in string

const newStr = gameName.substring(0,4)
console.log(newStr);//last idx not included basically length picked

const anotherStr = gameName.slice(1,4)
console.log(anotherStr);
const anotherStr1 = gameName.slice(-8, 4) // slice can take negative values it starts from back
console.log(anotherStr1);

//substrings ignore negative values turn them to 0

const newStr1 = "   Isheta    ";
console.log(newStr1);
console.log(newStr1.trim());//remove whitespaces and newline char in beginning and end

const url = "https://isheta.in/isheta%20aggarwal"

console.log(url.replace('%20', '-'));//find the item and repl   

console.log(url.includes('aggarwal'));
console.log(url.includes('bane'));


console.log(url.split('/'))//giving the separator to split the string there is another arg - limitor






