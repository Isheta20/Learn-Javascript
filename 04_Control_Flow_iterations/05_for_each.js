const coding = ["js", "ruby", "java", "cpp", "python"]

//FOR EACH - asks for callback function
/*CALLBACK FUNCITON
 - no funciton name 
 - bec. already in funcn so comes with value
 */

coding.forEach( function (item){
    console.log(item);
    
})
console.log();
coding.forEach(  (val) => {
    console.log(val);
    
})
console.log();

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe) // only give REFERENCE of the function, don't call, I think d function is called by for each on it's own

console.log();

coding.forEach( (item,idx, arr) => {
    console.log(item, idx, arr);  
})

console.log();

//Dealing with array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

console.log();

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
})
