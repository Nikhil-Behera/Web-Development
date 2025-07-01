const arr = [1,2,3,4,5]
const arr1 = new Array(6,7,8,9)
// console.log(arr1[3]);

//methods
arr.push(6)
// console.table(arr);

arr.push(7)
// console.table(arr);

arr.pop();
// console.table(arr);

arr.unshift(10)
// console.table(arr);

arr.shift()
// console.table(arr);

const newArr = arr.join()
// console.log(arr)
// console.log(newArr)

// console.log(typeof arr)
// console.log(typeof newArr)

// console.log("A = ",arr)
// console.log(arr.slice(1,4))          // slice and splice

// console.log(arr.splice(1,4))
// console.log(arr)

const a1 = ["name1","name2","name3"]
const a2 = ["name4","name5","name6"]

// a1.push(a2)

// console.log(a1)

// const both = a1.concat(a2)
// console.log(both)

let confusing_arr = [2,3,4,[8,2,1],9,5,[7,6,0,[4,5],7],8]
let not_confusing_arr= confusing_arr.flat(Infinity)
// console.log(not_confusing_arr)


/* Objects */
let obj1 = {
    name : "nikhil",
    id : 17,
    arr : ["monday",90]
}

// console.log(obj1.name)
// console.log(obj1["name"])

obj1["name"] = "xyz"
// console.log(obj1.name)

// Object.freeze(obj1)  // nobody can't change the values in this object.

obj1.id = 89;
// console.log(obj1.id)        // id not got changed.

obj1.greet = function() {
    console.log(`hello ${this.name}`);
}

// console.log(obj1.greet());

let fbuser = {
    id : 36,
    name : "Darren",
    isLoggedin : false
}
// console.table(fbuser)
 let iguser = {
    email : "axba@gmail.com",
    full_name : {
        first_name : "heef",
        last_name : "laso"
    }
 }
//  console.log(iguser.full_name.last_name)

let obj_1 = {1:"a",2:"b"}
let obj_2 = {3:"c",4:"d"}
// let obj_3 = Object.assign({},obj_1,obj_2)

let obj_3 = {...obj_1, ...obj_2}
// console.log(obj_3);

// console.log(fbuser)
// console.log(Object.keys(fbuser));       // returns an array of keys of the obj.
// console.log(Object.values(fbuser));       // returns an array of values of the obj.
// console.log(fbuser.hasOwnProperty('isLogged'))

// JSON api intro
// {
//     "name" : "xyz",
//     "course" : "js",              // <- JSON strcuture
//     "c_id" : 2736,
// }