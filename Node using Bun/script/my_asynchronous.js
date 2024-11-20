import { resolve } from "bun";


export function showResult(oper1, oper2, mathFunc) {
    const sum = plus(oper1, oper2);
    const diff = minus(oper1, oper2);
    const prod = multiply(oper1, oper2);
    const quot = divide(oper1, oper2);
    mathFunc(sum, diff, prod, quot);
  }
  
  export function execMathOps(sum, diff, prod, quot) {
      console.log('Sum:', sum);
      console.log('Difference:', diff);
      console.log('Product:', prod);
      console.log('Quotient:', quot);
  }
  
  export function plus(operator1, operator2) {
      return operator1 + operator2;
  }
  
  export function minus(operator1, operator2) {
      return operator1 - operator2;
  }
  
  export function multiply(operator1, operator2) {
      return operator1 * operator2;
  }
  
  export function divide(operator1, operator2) {
      if (operator2 === 0) {
          console.log("Cannot divide by zero!");
          return 0; 
      }
      return operator1 / operator2;
  }
  

  //Promise
export function execMathOps2(oper1,oper2, addFunc, minusFunc, divFunc, multiplyFunc) {
  
    return new Promise((resolve, reject)=>{
        try {
            let sum = addFunc(oper1, oper2);
            let diff = minusFunc(oper1,oper2);
            let prod = multiplyFunc(oper1,oper2);
            let quotient = divFunc(oper1,oper2);
            let state = {sum: sum, diff: diff, prod: prod , quotient: quotient};
            resolve(state)   
        } catch (error) {
            reject("No Result!!!", error);
        }
    });
}

  //Async/Await (Async IO) --Observer Design Pattern

  export async function execMathOps3(oper1,oper2, addFunc, minusFunc, divFunc, multiplyFunc) 
  {
    try {
        let sum = addFunc(oper1, oper2);
        let diff = minusFunc(oper1,oper2);
        let prod = multiplyFunc(oper1,oper2);
        let quotient = divFunc(oper1,oper2);
        let state = {sum: sum, diff: diff, prod: prod , quotient: quotient};
        return state;
    } catch (error) {
        console.log(error);
    }

  }