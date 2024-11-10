//DESTRUCTURING OBJECTS

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor or []

//Syntactic Sugar for accessing
// const {courseInstructor} = course // {value to be extracted} = from where to extract
//further
const {courseInstructor: instructor} = course;
console.log(instructor)//now directly use it

//used in react
/*instead of const navbar = (props.company) =>{
    }
    write in short
    const navbar = ({company}) =>{
    }
*/

//APIS

//APIS return values from backend in the form of JSON earlier xml

//json - JAVASCRIPT OBJECT NOTATION
//both keys and values are string
// {
//     "learner": "Isheta",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//sometimes apis come in array format

[
    {

    },
    {

    },
    {

    }
]