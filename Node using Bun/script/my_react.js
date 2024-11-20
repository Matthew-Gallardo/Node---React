import rxjs from "rxjs";
import rxjs_ops from "rxjs/operators";
import fs from "fs";

//observable
export var createNames = new rxjs.Observable((observer) => {
  observer.next("Kai Sotto");
  observer.next("Calvin Abueva");
  observer.next("Jordan Clarkson");
  observer.next("Casio");
  observer.complete;
});

let grades = [100, 90, 80, 70];
export var createGrades = rxjs.from(grades)
.pipe(
    rxjs_ops.filter((g)=>{return g>=80},
    rxjs_ops.map((g)=>{return g +10})
)
);

var projDir = process.cwd();
var filename = projDir + "\\files\\data.txt";
/*
export let createContent = rxjs.of(fs.readFileSync(filename))
.pipe(
  rxjs_ops.map((content)=>{content.toUpperCase()})
);
*/
let profile = {
  profiles: [
    { id: 101, name: "lebbron", age: 55 },
    { id: 102, name: "james", age: 25 },
    { id: 103, name: "matt", age: 22 },
  ],
};

export let createRecords = rxjs.of(profile).pipe(
  rxjs_ops.switchMap((data) => {
    let records = data["profiles"];
    return rxjs.from(records);
  })
);
