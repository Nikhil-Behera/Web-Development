// for

// for(let i=0;i<5;i++){
//     console.log(i+1);   
// }

// for(let i=0;i<=5;i++){
//     for(j=1;j<6;j++){
//         console.log("*");
//     }
//     console.log("*");
// }

// let index=1;
// while(index<=10){
//     if(index==10){
//         console.log(`Ending the LOOP ${index}`);
//         break;
//     }
//     else{
//         console.log(index); 
//     }
//     index++;
// }

/*Higher Order Array Loops.*/
//1. for of loop
const arr1 = [7,5,8,3,7]
// for (const index of arr1) {
//     console.log(index); 
//}

const str1 = "bdwbdiw dniwbdwid vwydsbaln ciwebfiw"
// for(let char of str1){
//     if(char === ' '){
//         continue;
//     }
//     console.log(char);
// }

//maps 
const map = new Map
map.set('+91',"india")
map.set('+411',"idk")
map.set('+114',"euro")
// console.log(map);

// for(const [index,value] of map){
//     console.log(index,value)
//}

let arr2 = ["cpp","c","java","js","python","ruby"]
// arr2.forEach(function (val){
//     console.log(val);
// })

// arr2.forEach( (val)=>{
//     console.log(val);
// } )

// let arr3 = [{name:"nik",roll:8},{name:"rja",roll:8},{name:"mhs",roll:8}]
// arr3.forEach((val)=>{
//     console.log(val.roll)
// })

const nums = [1,2,3,4,5,6,7,8,9,10]
let newnum = nums.filter( (val)=> val>4 )
// console.log(newnum)

const books = [
  { bookId: 1, bookName: "1984", bookGenre: "Dystopian" },
  { bookId: 2, bookName: "To Kill a Mockingbird", bookGenre: "Classic Fiction" },
  { bookId: 3, bookName: "The Hobbit", bookGenre: "Fantasy" },
  { bookId: 4, bookName: "Sapiens", bookGenre: "Non-fiction" },
  { bookId: 5, bookName: "The Da Vinci Code", bookGenre: "Thriller" },
  { bookId: 6, bookName: "Pride and Prejudice", bookGenre: "Romance" },
  { bookId: 7, bookName: "Dune", bookGenre: "Science Fiction" },
  { bookId: 8, bookName: "The Alchemist", bookGenre: "Philosophical Fiction" }
]

let userbook = books.filter((val)=> val.bookGenre === "Fantasy")
console.log(userbook)

