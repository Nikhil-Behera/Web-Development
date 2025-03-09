let employee = {
    name : "xyz" ,
    age : 56 ,
    sal : 56666 ,
    role : "tester"
};
 console.log(employee.name);    //these are examples of dot notation.
 console.log(employee.age);
 console.log(employee.role);
 console.log(employee.sal);

 //to change the values of any members: 

 employee['sal'] = 67000;
 console.log(employee.sal);

 employee['name'] = "abc";
 console.log(employee.name); 