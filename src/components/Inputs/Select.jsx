import { useState, useRef, useEffect } from "react";
import "./inputs.css";
import { DownOutlined } from '@ant-design/icons';

export default function Select({
  id,
  label,
  value,
  onChange,
  options,
  required,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find(opt => opt.value === value) || options[0]
  );
  const selectRef = useRef(null);

  // Cierra el dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange({ target: { id, value: option.value } }); // Mantiene la misma estructura del evento
  };

  return (
    <div className="form-group" ref={selectRef}>
      <label htmlFor={id} className={required ? "required-label" : ""}>
        {label}
      </label>
      <div className={`custom-select ${error ? 'input-error' : ''}`}>
        <div 
          className="select-selected"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOption.label}</span>
          <DownOutlined className={`select-arrow ${isOpen ? 'open' : ''}`} />
        </div>
        {isOpen && (
          <div className="select-options">
            {options.map((option) => (
              <div
                key={option.value}
                className={`select-option ${option.value === selectedOption.value ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
