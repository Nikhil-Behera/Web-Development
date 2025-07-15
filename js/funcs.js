let name = ["N","i","k","h","i","l"]
function Greet(name){
    console.log(name)
}
// Greet(name)

let user  = " user_name "
function login(user){
    if(user === undefined){
        console.log("Please enter a username!!")
        return 
    }
    else{
        console.log(`${user} just logged-in.`)
    }
}
// login(user);

function calcCart(... num1){
    return num1
}
// console.log(calcCart(600,700,88))

let obj1 = {
    name : "xyz",
    id : 56
}

function FuncForObj(anyobject){
    console.log(` the username is : ${anyobject.name} \n the id is : ${anyobject.id}`)
}
// FuncForObj(obj1)

/* Scope */
const a = 56;
{
    let b = 69;
}
/*console.log(a);
console.log(b); --> gives error*/

const addone = function(num){
    return num+1;
}
let num = 4;
// console.log(addone(num))   

let obj2 = {
    name : "nikhil",
    id : 6969,
    wel_msg : function(){
        console.log(`${this.name},welcome to this...`);
    }
}
// obj2.wel_msg()
obj2.name="name2"
// obj2.wel_msg()

const obj3 = function(){
    let name = "445"
    // console.log(this.name);
}

const obj4 = () =>{
    let name = "445"
    // console.log(this.name);
}

const addboth = (num1,num2) => (num1+num2)          // implicitly returning.
// console.log(addboth(67,99));

// immediately invoked function expression.

(function pehla(){
    // named iife
    console.log("DB connected one");
})();

( ()=>{
    console.log("DB connected two");
})();

