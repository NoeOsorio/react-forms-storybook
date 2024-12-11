import "./inputs.css";

export default function Checkbox({
  id,
  label,
  value,
  onChange,
  required,
  error,
}) {

  return (
    <div className="checkbox-section">
      <label className={required ? "required-label" : ""}>{label}</label>
      <div className="checkbox-group">
        {Object.keys(value).map((optionName) => (
          <div key={optionName} className="checkbox-item">
            <input
              type="checkbox"
              id={optionName}
              checked={value[optionName]}
              onChange={onChange}
            />
            <label htmlFor={optionName}>{optionName}</label>
          </div>
        ))}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
