console.log("This is modeule");
function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum += element ;
    });
    return sum/arr.length ;
}

module.exports = average ;

// we can also export modules in form of objects:

/*module.exports = {
    avg: average ,
    name : "Your_name" ,
    age : 99
};*/

/*it can be further accessed by follwoing:
    module.exports.name = "bruuh" ; // this is possible.
*/