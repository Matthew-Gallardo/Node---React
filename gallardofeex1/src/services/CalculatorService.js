export const CalculateService = (operand1, operand2, operator) => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return 'Error: Invalid operands';
    }
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      default:
        result = 'Error: Invalid operator';
    }
  
    return result;
  };
  