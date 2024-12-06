class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    
    }

    static createId(){ //Not want to give the access to this method to every obj that got instantiated from this method
        return `123`;
    }
}

const isheta = new User("Isheta")
// console.log(isheta.createId());//with isheta this will not have access to the function


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const starfish = new Teacher("star", "star12@user.com", "2335");
starfish.logMe();
console.log(starfish.createId());

//In JavaScript, the STATIC keyword defines methods or properties on a class itself rather than its instances. They are called directly on the class, not on objects created from the class.