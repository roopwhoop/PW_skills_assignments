//Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

class Employee{
    constructor(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
    }
   getSalary() {
    return this.salary;
     }
}

const Employee1 = new Employee("Mithun", "Web Developer", 80000);

console.log(Employee1.getSalary());
