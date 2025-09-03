import { useState } from "react";
import "../../css/FormulaBox.css";

interface Props {
  title: string;
  formula: string;
  explanation?: string;
  inputs: { label: string; key: string }[];
  calculate: (values: Record<string, number>) => number;
}

function FormulaBox({ title, formula, explanation, inputs, calculate }: Props) {
  const [values, setValues] = useState<Record<string, number>>({});
  const result = calculate(values);

  return (
    <div className="formula-box">
      <h2 className="formula-title">{title}</h2>
      <p className="formula-expression">{formula}</p>

      <div className="formula-inputs">
        {inputs.map(({ label, key }) => (
          <div key={key} className="formula-input-group">
            <label htmlFor={key}>{label}</label>
            <input
              id={key}
              type="number"
              value={values[key] ?? ""}
              onChange={(e) =>
                setValues({ ...values, [key]: parseFloat(e.target.value) || 0 })
              }
            />
          </div>
        ))}
      </div>

      <p className="formula-result">
        <strong>Result:</strong> {isNaN(result) ? "—" : result.toFixed(2)}
      </p>

      {explanation && <p className="formula-explanation">{explanation}</p>}
    </div>
  );
}

export default FormulaBox;
