const promiseOne = new Promise(function(resolve, reject){

    //Do an async task like
    //DB Calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log(("Promise consumed"));
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    console.log("Async task three");
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;//will throw error msg on true
        if(!error){
            resolve({username: "hitesh", password: "1230"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//CHAINING
const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username;

})
.then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("the promise is either resolve or rejected. (finally will always run at the end)");
    
})
// console.log(username);//this error

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh", password: "1230"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{

        const response = await promiseFive;//promise is an object
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}
consumePromiseFive();


async function getAllUsers(){
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        // we recieve the response but converting it also takes time so again async await
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E: ", error);
        
    }
}

getAllUsers()

//same in .then .catch format
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    
})

//you'll see fetch results gets printed earlier bec. fetch has a high priority queue