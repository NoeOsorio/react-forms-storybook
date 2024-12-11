import "./inputs.css";

/**
 * Componente reutilizable para campos de entrada de texto.
 * 
 * @component
 * @example
 * // Uso básico:
 * <TextInput
 *   id="email"
 *   label="Correo Electrónico"
 *   type="email"
 *   value={email}
 *   onChange={handleChange}
 *   required
 * />
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.id - Identificador único del campo
 * @param {string} props.label - Etiqueta descriptiva del campo
 * @param {string} props.placeholder - Texto de ayuda dentro del campo
 * @param {string} props.value - Valor actual del campo
 * @param {function} props.onChange - Función que maneja los cambios en el campo
 * @param {string} props.type - Tipo de input (text, email, password, etc.)
 * @param {boolean} props.required - Indica si el campo es obligatorio
 * @param {string} props.error - Mensaje de error a mostrar
 * @param {function} props.renderFieldIcon - Función que renderiza el ícono de estado
 * @returns {JSX.Element} Componente de input con label y manejo de errores
 */
export default function TextInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  type,
  required,
  error,
  renderFieldIcon
}) {
    // Renderiza un grupo de formulario que incluye:
    // - Label con indicador de requerido si aplica
    // - Contenedor de input con el campo y su ícono
    // - Mensaje de error si existe
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