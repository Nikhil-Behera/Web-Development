//synchronous and asynchrounous 
// blocking and non-blocking
//the code which is executed by line by line is called synchronous and vice versa.

//eg for synchronous:
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log();
//eg for asynchrounous
console.log('1');
console.log('2');
setTimeout(()=>{
    console.log('3');
},1000);
setTimeout(()=>{
    console.log('4');
},2000);
console.log('5');
//in asynchrounous the processes that are taking in background of the code will take place but first the next lines of the code are executed. 
