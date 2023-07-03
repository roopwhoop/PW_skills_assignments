// Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

const person = {
    name: "roop",
    age: 23,
    address: {
      street: "subhash colony",
      city: "bhopal",
      state: "Madhya Pradesh",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));