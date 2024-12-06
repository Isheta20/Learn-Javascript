//for get set class is the most common syntax
//there is an object syntax but not that common

//Function based syntax
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        }
    })
    Object.defineProperty(this, 'password',{
        set: function(value){
            return this._password = value;
        }
    })
}

const chai = new User("chai@chai.com", "3747");
console.log(chai.email);
