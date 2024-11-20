import {
  execMathOps,
  showResult,
  plus,
  minus,
  multiply,
  divide,
  execMathOps2,
  execMathOps3,
} from "./script/my_asynchronous.js";
import { createNames , createGrades, createContent, createRecords} from "./script/my_react.js";

showResult(100, 200, execMathOps);

execMathOps2(100, 200, plus, minus, multiply, divide)
  .then((data) => {
    console.log(data.sum, data.diff, data.prod, data.quotient);
  })
  .catch((error) => {
    console.elog(error);
  })
  .finally(() => {
    console.log("Done");
  });

execMathOps3(100, 200, plus, minus, multiply, divide)
  .then((data) => {
    console.log(data.sum, data.diff, data.prod, data.quotient);
  })
  .catch((error) => {
    console.elog(error);
  })
  .finally(() => {
    console.log("Done");
  });

let execMt = async function () {
  try {
    let res_state = await execMathOps3(100, 200, plus, minus, multiply, divide);
    console.log(res_state);
  } catch (error) {
    console.log(error);
  }
};

execMt();
try {
  let res_state = await execMathOps3(100, 200, plus, minus, multiply, divide);
  console.log(res_state);
} catch (error) {
  console.log(error);
}

createNames.subscribe({
  next: (data) => {
    console.log(data);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log("Done!!!");
  },
});

createGrades.subscribe({
    next: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log("Done!!!");
    },
  });

  createContent.subscribe({
    next: (data) => {
      console.log(data.toString());
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log("Done!!!");
    },
  });

  createRecords.subscribe({
    next: (data) => {
      console.log(data.id, data.name, data.age);
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log("Done!!!");
    },
  });