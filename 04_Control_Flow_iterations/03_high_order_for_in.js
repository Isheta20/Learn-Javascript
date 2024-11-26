const myObj = {
    js: "javascript",
    cpp: "c++",
    swift: "swift by app",
    py: "python"
}

for(const key in myObj){
    console.log(`${key} is shortcut for ${myObj[key]}`);
    
}
console.log("\n");

//can FOR IN work for array

const lang = ["js", "rb", "cpp", "swift", "java"];
for(const el in lang){
    console.log(el);
}
for(const el in lang){
    console.log(lang[el]);
}
console.log("\n");

//works in array as well but since arrays have indexing so it prints the indexes(number) while in objects the keys can be anything

//Maps
const map = new Map()
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){//maps cannot be iterated like this
    console.log(key);
}
