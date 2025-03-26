let a = {
    f_name : "hi",
    l_name : "hey",
    id : 6978,
    greet(){console.log( "Good Day " + this.f_name + " "+ this.l_name)},
};

a.greet();


// better utilisation

let person ={
    f_name : "firstname",
    l_name : "lastName" ,
    id : 69420,
    fullName : function() {
        console.log("Good Day " + this.f_name + " " + this.l_name );
    },
    getId : function(){
        console.log("The id is : "  + this.id);
    }
};

person.fullName();
person.getId();
