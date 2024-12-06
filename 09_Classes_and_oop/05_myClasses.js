//ES6 - all syntactic sugar going onnnnn

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capitalize(){
        return this.username.toUpperCase();
    }
}


const chai = new User("chai", "chai@gmai.com", "123");
console.log(chai.encryptPassword());
console.log(chai.capitalize());

//Behind the Scene - done like this earlier now ...
console.log();

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.capitalize = function(){
    return this.username.toUpperCase();
}

const tea = new User1('tea', "tea20@gmail.com", "defg");
console.log(tea.encryptPassword());
console.log(tea.capitalize());





