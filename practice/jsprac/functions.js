function greet(){
    console.log("Good Morning!!");
}
greet();
console.log();
function greet_name(name){
    console.log("Hey there " + name);
}
greet_name("xyz");


// types of functions:

function square(num){
    let ans=0;
    ans = num*num ;
    return ans;
}

let q = square(45);
console.log(q);
