//If you define getter you will hv to define setter also and vice versa
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    //Maximum call stack size exceeded  - infinite loop when the property and the setter/getter names are same
    set password(password){//make a kind of new property
        this._password = password.toUpperCase();
    }
    get password(){
        return this._password;
    }

}

const isheta = new User("Ish20@gmail.com", "348729");
console.log(isheta.password);
