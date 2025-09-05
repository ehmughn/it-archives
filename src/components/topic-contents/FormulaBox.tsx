import { useState, useCallback } from "react";
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
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = useCallback((key: string, value: string) => {
    const num = parseFloat(value);
    if (isNaN(num) && value !== "") {
      setError(`Invalid input for ${key}`);
      return;
    }
    setError(null);
    setValues((prev) => ({ ...prev, [key]: num || 0 }));
  }, []);

  const result = error ? NaN : calculate(values);

  return (
    <div
      className="formula-box"
      role="region"
      aria-labelledby={`formula-${title}`}
    >
      <h2 className="formula-title" id={`formula-${title}`}>
        {title}
      </h2>
      <p className="formula-expression">{formula}</p>
      <div className="formula-inputs">
        {inputs.map(({ label, key }) => (
          <div key={key} className="formula-input-group">
            <label htmlFor={key}>{label}</label>
            <input
              id={key}
              type="number"
              value={values[key] ?? ""}
              onChange={(e) => handleInputChange(key, e.target.value)}
              aria-invalid={!!error}
              aria-describedby={error ? `error-${key}` : undefined}
            />
            {error && error.includes(key) && (
              <p id={`error-${key}`} className="formula-error">
                {error}
              </p>
            )}
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
