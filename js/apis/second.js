const pro1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task is done.")
        resolve()
    },1500)
})

pro1.then(()=>{
    console.log("promise consumed.")
})


const pro2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"nik",email:"hi@123.gmail.com"})
    },1000)
})

pro2.then((user)=>{
    console.log(user.email)
})

let obj1 = {
    user:"addu",
    email:"addu@gmail.com"
}
const pro3 = new Promise((resolve,reject)=>{
    console.log("Addu's email : ")
    resolve(obj1)
})
pro3.then((user)=>{
    console.log(user.email)
})

const pro4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve(
                {
                    username:"addu",
                    password:162
                }
            )
        }
        else{
            reject("ERROR: WRONG")
        }
    },1000)
})

pro4
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("the promise is resolved or rejected.")
})

const pro5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve(
                {
                    username:"addu",
                    password:162
                }
            )
        }
        else{
            reject("ERROR: WRONG")
        }
    },1000)
})

async function consume_pro5(){
    try{
        const response = await pro5
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consume_pro5()

async function getusers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("E: ",error)
    }
}

getusers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Done fetching.")
})
    
