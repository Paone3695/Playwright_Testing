class Student{
    static collegeName="Test PW Batch"

    constructor(name){
        this.name=name;
    }

    static display(){
        console.log(this.name +" are part of the "+Student.collegeName)
    }
}

let test1=new Student("Test Automation");
let test2=new Student("Playwright Automation");
let test3=new Student("Cypress Automation");


console.log(Student.collegeName);
console.log(test1.name);
console.log(test2.name);
console.log(test3.name);

/*Test PW Batch
Test Automation
Playwright Automation
Cypress Automation*/

