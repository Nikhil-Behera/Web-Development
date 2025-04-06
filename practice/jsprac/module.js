console.log("This is the file of maths module...");
function addit(arr){
    let sum =0;
    arr.forEach(element => {
       sum += element ; 
    });
    return sum ;
} 
function subit(arr){
    let diff =0;
    arr.forEach(element => {
        diff -= element ;
    });
    return diff;
}
function multit(arr){
    let prod =1;
    arr.forEach(element =>{
        prod = prod * element ;
    });
    return prod;
}
function divit(a,b){            // added division function later.
    let c = a/b;
    return c;
}
function modulo(a,b){
    let c = a%b ;
    return c;
}

module.exports ={
    add:addit,
    sub:subit,
    multiply:multit,
    divide:divit,
    modulus : modulo
};