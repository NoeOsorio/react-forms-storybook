import "./inputs.css";

export default function TextInput({id, label, placeholder, value, onChange, type, required, error, renderFieldIcon}) {
    return (
        <div className="form-group">
        <label htmlFor={id} className={required ? "required-label" : ""}>
          {label}
        </label>
        <div className="input-container">
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={error ? "input-error" : ""}
            required
          />
          {renderFieldIcon(id)}
        </div>
        {error && (
          <p className="error-message">{error}</p>
        )}
      </div>
    )
}