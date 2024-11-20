import { error } from "console";

import { Employee, askUser, message } from "./script/keyboard";
/*
const kb = require("./script/keyboard");
const path = require("path");
const process = require("process");
const os = require("os");
const file = require("fs");
*/
import path from "path";
import process from "process";
import os from "os";
import file from "fs";
import EventEmitter from "events";

console.log("Welcome to Node.js app!");
import { printMessage , printProfile ,addNum} from "./script/myEvents";


var emitter = new EventEmitter()
emitter.on("welcomeEventsz", printMessage);
emitter.emit("welcomeEventsz");
emitter.on("profilePrintEvent", printProfile);
emitter.emit("profilePrintEvent",101,"lebronjames", 89);
emitter.on("addNumEvent", addNum);
var stateObj = {total: 0, status: "Not OK"};
emitter.emit("addNumEvent",100,200 ,stateObj);
console.log(addNum);
//console.log(kb.message);
/*
kb.askUser();

var emp1 = new kb.Employee();
emp1.Id = 1;
emp1.FirstName = "John";
emp1.LastName = "Doe";
emp1.Age = 30;
emp1.Salary = 50000;

console.log(`Employee ID: ${emp1.Id}`);
console.log(`Employee Name: ${emp1.FirstName} ${emp1.LastName}`);
console.log(`Employee Age: ${emp1.Age}`);
console.log(`Employee Salary: ${emp1.Salary}`);

*/
//Default process

var projDir = process.cwd();
console.log(projDir);

try {
  var scriptName = process.argv[0];
  var fileName = process.argv[1];
  var username = process.argv[2];
  var password = process.argv[3];
  console.log(scriptName, fileName, username, password);
} catch (error) {
  console.log(error);
}

process.stdout.write(process.env.USER + "\n");
process.stdout.write(process.env.PASSWORD + "\n");
process.stdout.write(process.env.DB + "\n");
process.stdout.write(process.env.PORT + "\n");
process.stdout.write(process.env.HOST + "\n");

/*

//I/O
process.stdout.write("Input a data: ");
process.stdin.on("data", (data) => {
 
    console.log(`Input is: ${data.toString().trim()}`);
  //  process.exit(); 
});

process.on("SIGINT", ()=>{
    process.stdout.write("PAAAAALAM\N");
    process.exit();
})

*/

var filanameData = projDir + "\\files\\data.txt";

var dirName = path.dirname(filanameData);
console.log(dirName);

var fileName = path.basename(filanameData);
console.log(fileName);

var fileExtention = path.extname(filanameData);
console.log(fileExtention);

var anotherPath = path.join(projDir, "files", "data.txt");
console.log(anotherPath);

var pathFormat = path.format({
  root: projDir,
  base: "\\files\\data.txt",
  ext: ".txt",
  name: "data",
});

console.log(pathFormat);
/*
console.log(os.version);
console.log(os.constants);
console.log(os.platform);
*/
/*
try {
  //file.writeFileSync(filanameData, "\nwahahaha")
  file.appendFileSync(filanameData, "\nwahahahawerw");

  var contentBuffer = file.readFileSync(filanameData);
  console.log(contentBuffer.toString());
} catch (error) {
  console.log(error);
}
  */

await file.write(filanameData,"This is another content.\n",(error) => {
  if (error) {
    console.log("appended content..");
  }
  console.log("Error: ", error);
});


await file.readFile(filanameData,(error,data) => {
    if (!error) {
      console.log(data.toString());
    }
    console.log("Error: ", error);
  });
  