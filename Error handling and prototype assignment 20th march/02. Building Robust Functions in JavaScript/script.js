//Create a function called getPerson that takes an object as a parameter representing a person's name and age.The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.


function getPerson(person){
    try {
        if (
          typeof person !== "object" ||
          person === null ||
          !("name" in person) ||
          !("age" in person)
        ) {
          throw new Error("Invalid parameter type");
        }
    
        return `Name: ${person.name}, Age:${person.age}`;
      } catch (error) {
        return error.message;
      }
}
const person1= { name: "Mithun", age: 20 };
console.log(getPerson(person1));

const person2 = { name: "Mithun"};
console.log(getPerson(person2));

const person3 = ["name", "Mithun" ];
console.log(getPerson(person3));