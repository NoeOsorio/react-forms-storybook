import "./inputs.css";

/**
 * Componente de grupo de checkboxes.
 * 
 * @component
 * @example
 * // Uso básico:
 * <Checkbox
 *   id="interests"
 *   label="Intereses"
 *   value={{
 *     sports: false,
 *     music: true,
 *     art: false
 *   }}
 *   onChange={handleInterestsChange}
 *   required
 * />
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.id - Identificador único del grupo
 * @param {string} props.label - Etiqueta del grupo de checkboxes
 * @param {Object} props.value - Objeto con el estado de cada checkbox
 * @param {function} props.onChange - Manejador de cambios
 * @param {boolean} props.required - Indica si al menos uno debe estar seleccionado
 * @param {string} props.error - Mensaje de error a mostrar
 * @returns {JSX.Element} Grupo de checkboxes con label y manejo de errores
 */
export default function Checkbox({
  id,
  label,
  value,
  onChange,
  required,
  error,
}) {
  // Renderiza una sección de checkboxes que incluye:
  // - Label principal con indicador de requerido si aplica
  // - Grupo de checkboxes generados dinámicamente desde el objeto value
  // - Mensaje de error si existe
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
