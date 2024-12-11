import { useState, useRef, useEffect } from "react";
import "./inputs.css";
import { DownOutlined } from '@ant-design/icons';

/**
 * Componente personalizado de selección desplegable.
 * 
 * @component
 * @example
 * // Uso básico:
 * <Select
 *   id="country"
 *   label="País"
 *   value={selectedCountry}
 *   onChange={handleCountryChange}
 *   options={[
 *     { value: 'mx', label: 'México' },
 *     { value: 'us', label: 'Estados Unidos' }
 *   ]}
 *   required
 * />
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.id - Identificador único del select
 * @param {string} props.label - Etiqueta descriptiva
 * @param {string} props.value - Valor seleccionado actualmente
 * @param {function} props.onChange - Manejador de cambios
 * @param {Array<{value: string, label: string}>} props.options - Opciones disponibles
 * @param {boolean} props.required - Indica si es obligatorio
 * @param {string} props.error - Mensaje de error a mostrar
 * @returns {JSX.Element} Componente de selección personalizado
 */
export default function Select({
  id,
  label,
  value,
  onChange,
  options,
  required,
  error,
}) {
  // Estado para controlar si el dropdown está abierto
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado para mantener la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(
    options.find(opt => opt.value === value) || options[0]
  );
  
  // Referencia al elemento select para detectar clicks fuera
  const selectRef = useRef(null);

  // Efecto para cerrar el dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Manejador de selección de opción
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Simula el evento de cambio para mantener consistencia con inputs normales
    onChange({ target: { id, value: option.value } });
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
