class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)//will do everything that call does behind the scene - take the keyword and this, go to class -> constructor, set value
        this.email = email
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai20@gmail.com", "chhhch");
chai.addCourse()

const adrakchai = new User("adrakChai");
adrakchai.logMe();

console.log(chai === adrakchai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

