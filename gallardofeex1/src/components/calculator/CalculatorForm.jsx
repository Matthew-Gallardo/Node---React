import React, { useState } from "react";
import { CalculateService } from "../../services/CalculatorService";
import './Calculator.css';

const CalculatorForm = () => {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleOperand1Change = (event) => setOperand1(event.target.value);
  const handleOperand2Change = (event) => setOperand2(event.target.value);
  const handleOperatorChange = (event) => setOperator(event.target.value);

  const handleCalculation = () => {
    const calcResult = CalculateService(operand1, operand2, operator);
    setResult(calcResult);
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={operand1}
          onChange={handleOperand1Change}
          placeholder="Operand 1"
          required
        />
      </div>
      <div>
        <input
          type="number"
          value={operand2}
          onChange={handleOperand2Change}
          placeholder="Operand 2"
          required
        />
      </div>
      <div>
        <select value={operator} onChange={handleOperatorChange} required>
          <option value="" disabled>
            Select operator
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <div>
        <button onClick={handleCalculation}>Calculate</button>
      </div>
      {result !== null && (
        <div>
          <h3>Result: {result}</h3>
        </div>
      )}
    </>
  );
};

export default CalculatorForm;
