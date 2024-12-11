import { useMemo, useState } from "react";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { TextInput, Select, Checkbox } from "../../components/Inputs";
import "./ejercicio5.css";

// Estado inicial del formulario - todos los campos comienzan vacíos
const initialFormData = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "male", // Valor por defecto para género
  interests: {
    // Objeto para manejar múltiples intereses como booleanos
    sports: false,
    music: false,
    art: false,
    technology: false,
  },
  birthDate: "",
};

// Mensajes de error personalizados para cada tipo de validación
const formErrorsMessages = {
  name: "Name is required",
  lastName: "Last name is required",
  email: {
    required: "Email is required",
    invalid: "Invalid email format", // Mensaje específico para formato inválido
  },
  password: {
    required: "Password is required",
    invalid:
      "Password must be at least 8 characters long and contain letters and numbers",
  },
  confirmPassword: "Passwords must match",
  birthDate: "Birth date is required",
  age: "You must be at least 18 years old",
  interests: "At least one interest is required",
};

// Lista de campos que son obligatorios en el formulario
const requiredFields = [
  "name",
  "lastName",
  "email",
  "password",
  "confirmPassword",
  "birthDate",
  "interests",
];

export default function SignUpWithCustomInputs() {
  // Estados principales del formulario
  const [formData, setFormData] = useState(initialFormData); // Datos del formulario
  const [formErrors, setFormErrors] = useState({}); // Errores de validación
  const [touchedFields, setTouchedFields] = useState({}); // Campos que el usuario ha tocado

  // Verifica si todos los campos requeridos han sido tocados
  const allFieldsTouched = useMemo(
    () => requiredFields.every((field) => touchedFields[field]),
    [touchedFields]
  );

  // Determina si el formulario es válido para ser enviado
  const isValidForm = useMemo(() => {
    return (
      Object.values(formErrors).every((error) => error === "") && // No hay errores
      allFieldsTouched // Todos los campos fueron tocados
    );
  }, [formErrors, allFieldsTouched]);

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
  };

  // Función principal de validación que maneja todos los tipos de campos
  const validateForm = (id, value, subFormData) => {
    const errors = { ...formErrors };
    // Serie de validaciones específicas para cada tipo de campo
    if (id === "email") {
      if (!value) {
        errors[id] = formErrorsMessages[id].required;
      } else if (!validateEmail(value)) {
        errors[id] = formErrorsMessages[id].invalid;
      } else {
        delete errors[id];
      }
    } else if (id === "password") {
      if (!value) {
        errors[id] = formErrorsMessages[id].required;
      } else if (!validatePassword(value)) {
        errors[id] = formErrorsMessages[id].invalid;
      } else {
        delete errors[id];
      }
    } else if (id !== "interests" && !value) {
      errors[id] = formErrorsMessages[id];
    } else if (id === "confirmPassword" && value !== formData.password) {
      errors[id] = formErrorsMessages[id];
    } else if (id === "birthDate" && value) {
      const age = new Date().getFullYear() - new Date(value).getFullYear();
      if (age < 18) {
        errors[id] = formErrorsMessages["age"];
      } else {
        delete errors[id];
      }
    } else if (id === "interests" && !value) {
      if (!Object.values(subFormData).some((interest) => interest)) {
        errors[id] = formErrorsMessages[id];
      } else {
        delete errors[id];
      }
    } else {
      delete errors[id];
    }
    return errors;
  };

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    // Marca el campo como tocado
    setTouchedFields((prev) => ({
      ...prev,
      [type === "checkbox" ? "interests" : id]: true,
    }));

    // Manejo especial para checkboxes (intereses)
    if (type === "checkbox") {
      const _formData = {
        ...formData,
        interests: {
          ...formData.interests,
          [id]: checked,
        },
      };
      setFormErrors(validateForm("interests", checked, _formData.interests));
      setFormData(_formData);
    } else {
      // Manejo para campos de texto normales
      setFormErrors(validateForm(id, value));
      setFormData({ ...formData, [id]: value });
    }
  };

  // Función para renderizar los iconos de validación
  const renderFieldIcon = (fieldName) => {
    if (!touchedFields[fieldName]) return null;
    return formErrors[fieldName] ? (
      <CloseCircleFilled className="input-icon" style={{ color: "#ff4d4f" }} />
    ) : (
      <CheckCircleFilled className="input-icon" style={{ color: "#52c41a" }} />
    );
  };

  // Validación de formato de email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validación de requisitos de contraseña
  const validatePassword = (password) => {
    const minLength = 8;
    const hasAtLeastOneUppercase = /[A-Z]/.test(password);
    const hasAtLeastOneLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    return (
      password.length >= minLength &&
      hasNumbers &&
      hasAtLeastOneUppercase &&
      hasAtLeastOneLowercase
    );
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <TextInput
          id="name"
          label="Name"
          placeholder="John"
          value={formData.name}
          onChange={handleChange}
          type="text"
          required={true}
          error={formErrors.name}
          renderFieldIcon={renderFieldIcon}
        />

        <TextInput
          id="lastName"
          label="Last Name"
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          required={true}
          error={formErrors.lastName}
          renderFieldIcon={renderFieldIcon}
        />

        <TextInput
          id="email"
          label="Email"
          placeholder="example@example.com"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required={true}
          error={formErrors.email}
          renderFieldIcon={renderFieldIcon}
        />

        <TextInput
          id="password"
          label="Password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          type="password"
          required={true}
          error={formErrors.password}
          renderFieldIcon={renderFieldIcon}
        />

        <TextInput
          id="confirmPassword"
          label="Confirm Password"
          placeholder="********"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          required={true}
          error={formErrors.confirmPassword}
          renderFieldIcon={renderFieldIcon}
        />

        <Select
          id="gender"
          label="Gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
            { value: "preferNotToSay", label: "Prefer not to say" },
          ]}
        />

        <Checkbox
          id="interests"
          label="Interests"
          value={formData.interests}
          onChange={handleChange}
          required={true}
          error={formErrors.interests}
        />

          <TextInput
          id="birthDate"
          label="Birth Date"
          placeholder="DD/MM/YYYY"
          value={formData.birthDate}
          onChange={handleChange}
          type="date"
          required={true}
          error={formErrors.birthDate || formErrors.age}
          renderFieldIcon={renderFieldIcon}
        />

        <button disabled={!isValidForm} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

/*
=============================================================================
DOCUMENTACIÓN DEL COMPONENTE
=============================================================================

DESCRIPCIÓN:
Este componente implementa un formulario de registro (sign up) con validación 
avanzada en tiempo real y feedback visual para el usuario. Es una versión
mejorada del Ejercicio3 que incluye validaciones más específicas.

CARACTERÍSTICAS PRINCIPALES:
1. Validación en tiempo real de los campos
2. Feedback visual con iconos de éxito/error
3. Validaciones específicas para email y contraseña
4. Manejo de campos requeridos con indicador visual
5. Validación de edad mínima
6. Manejo de múltiples intereses
7. Diseño responsive

APRENDIZAJES:
1. Gestión de Estado:
   - Uso efectivo de useState para múltiples estados
   - Optimización con useMemo para cálculos derivados
   - Manejo de estado inmutable

2. Validación de Formularios:
   - Validación en tiempo real
   - Manejo de diferentes tipos de campos
   - Validaciones personalizadas
   - Feedback visual inmediato

3. UX/UI:
   - Importancia del feedback visual
   - Manejo de estados de error
   - Indicadores claros para campos requeridos
   - Diseño accesible y responsive

4. Patrones de React:
   - Componentes controlados
   - Manejo de eventos
   - Renderizado condicional
   - Reutilización de lógica

5. JavaScript:
   - Manipulación de objetos
   - Validaciones con expresiones regulares
   - Manejo de fechas
   - Operaciones con arrays

MEJORES PRÁCTICAS DEMOSTRADAS:
1. Separación de lógica y presentación
2. Validación proactiva vs reactiva
3. Manejo de estado predecible
4. Feedback inmediato al usuario
5. Código mantenible y escalable

Este ejercicio demuestra cómo crear formularios robustos y amigables
para el usuario, implementando validaciones complejas de manera eficiente
y proporcionando una excelente experiencia de usuario.
*/
