const fs = require("fs");

const newData =
 "One way this is possible is because Node.js supports microservices architecture. An application built with microservices consists of separate small blocks that perform one function. Each small block receives information, computes it, and delivers the result. If you want to scale up an application, it is easier and faster to add more microservices on top of the existing ones instead of changing the entire application. This is what makes microservice architecture stand out from monolithic architecture, where an application is heavily based on a single database.Node.js supports event-driven programming which is one of its benefits, too.";

fs.appendFileSync("nodejs_architecture.txt", newData);

const data = fs.readFileSync("nodejs_architecture.txt");
console.log(data.toString());