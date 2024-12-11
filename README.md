<div align="center">
  <img src="public/logo512.png" alt="React Forms Challenge Logo" width="200"/>
  <h1>React Forms Challenge</h1>
  <p>Una colección de ejercicios prácticos para aprender React</p>

  <p>
  Vamos a enfocarnos en el manejo de formularios, validaciones y feedback visual. 
  </p>

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
</div>

## 📋 Acerca del Proyecto

Este proyecto es una colección de ejercicios prácticos diseñados para aprender y mejorar habilidades en React. Cada ejercicio se enfoca en diferentes aspectos fundamentales del desarrollo con React, incluyendo:

- Formularios y manejo de estado
- Routing y navegación
- Componentes y props
- Hooks y ciclo de vida
- Estilos y responsive design

## 🎯 Ejercicio Actual

### Ejercicio 1: Formulario de Inicio de Sesión Básico

**Duración**: 3 días + 1 día para extras

#### Requisitos Mínimos (3 días):
- ✅ Crear una aplicación React con un formulario de login
- ✅ Implementar campos para:
  - Email (con label)
  - Password (con label)
- ✅ Botón de "Iniciar Sesión"
- ✅ Mostrar datos en consola al enviar
- ✅ Usar useState para manejar el estado

#### Extras (1 día):
- ✅ Estilización con CSS
- ✅ Efectos hover en botones
- ✅ Diseño responsive

### Ejercicio 2: Validación Básica de Formularios

**Duración**: 3 días + 1 día para extras

#### Requisitos Mínimos (3 días):
- ✅ Implementar validación de formulario:
  - Verificación de campos vacíos
  - Mensajes de error por campo
  - Botón de submit condicionalmente deshabilitado
- ✅ Gestión de estado para errores:
  - Estado local para mensajes de error
  - Actualización en tiempo real
- ✅ Feedback visual para el usuario:
  - Mensajes claros y específicos
  - Indicadores de estado de validación

#### Extras (1 día):
- ✅ Validación avanzada:
  - Formato de email (regex)
  - Requisitos de contraseña
- ✅ Mejoras visuales:
  - Iconos de estado (✓ / ✗)
  - Indicadores de color
- ✅ Animaciones:
  - Transiciones suaves
  - Feedback visual inmediato

### Ejercicio 3: Formulario de Registro con Diferentes Tipos de Inputs

**Duración**: 3 días + 1 día para extras

#### Requisitos Mínimos (3 días):
- ✅ Crear un formulario de registro que incluya:
  - Campos de texto:
    - Nombre
    - Apellido
    - Correo Electrónico
  - Campos de contraseña:
    - Contraseña
    - Confirmar Contraseña
  - Radio buttons para género:
    - Masculino
    - Femenino
    - Otro
  - Checkboxes para intereses:
    - Deporte
    - Música
    - Arte
    - Tecnología
  - Selector de fecha para nacimiento
- ✅ Implementar validaciones:
  - Campos obligatorios
  - Contraseñas coincidentes
  - Mostrar datos en consola al enviar

#### Extras (1 día):
- ✅ Validaciones adicionales:
  - Verificar mayoría de edad (18 años)
  - Validar selección mínima de intereses
- ✅ Mejoras en la interfaz:
  - Estilización con CSS
  - Organización clara de campos
  - Placeholders informativos

### Ejercicio 4: Validación Avanzada sin Librerías

**Duración**: 3 días + 1 día para extras

#### Requisitos Mínimos (3 días):
- ✅ Implementar validaciones avanzadas:
  - Formato de email con dominio válido
  - Contraseña con requisitos específicos:
    - Mínimo 8 caracteres
    - Combinación de letras y números
  - Mensajes de error por campo
  - Botón de submit condicionalmente deshabilitado
- ✅ Gestión de estado:
  - Estado local para cada campo
  - Actualización en tiempo real
  - Manejo de errores individualizado

#### Extras (1 día):
- ✅ Validaciones mejoradas:
  - Verificación de dominio de email
  - Requisitos adicionales de contraseña
- ⬜ Mejoras visuales:
  - Indicadores de fortaleza de contraseña
  - Feedback visual instantáneo
- ✅ Accesibilidad:
  - Mensajes de error para lectores de pantalla
  - Navegación por teclado optimizada

# Ejercicio 5: Creación de Componentes Reutilizables Básicos

### Requisitos Mínimos (3 días):

- **Crear un componente reutilizable de campo de entrada (`InputField`):**

  **Descripción:**
  - Crear un componente que represente un campo de entrada de texto genérico.
  - Debe ser capaz de manejar diferentes tipos de inputs: texto, correo electrónico, contraseña, etc.

  **Características del `InputField`:**
  - **Props necesarias:**
    - `label`: Etiqueta que describe el campo.
    - `type`: Tipo de input (por ejemplo, "text", "email", "password").
    - `name`: Nombre del campo para identificación.
    - `value`: Valor actual del input.
    - `onChange`: Función para manejar cambios en el input.
    - `placeholder` (opcional): Texto de ayuda dentro del input.
    - `required` (opcional): Indica si el campo es obligatorio.

  **Implementación:**
  - El componente debe renderizar una etiqueta (`<label>`) y un input (`<input>`) asociados.
  - Asegurar que los eventos y valores se manejan correctamente a través de las props.

- **Refactorizar el formulario existente para utilizar el componente `InputField`:**
  - Reemplazar los inputs directos en el formulario por el componente `InputField`.
  - Aplicar el componente a los campos:
    - "Nombre"
    - "Apellido"
    - "Correo Electrónico"
    - "Contraseña"
    - "Confirmar Contraseña"

- **Verificación y pruebas:**
  - Asegurarse de que el formulario sigue funcionando correctamente con los nuevos componentes.
  - Las validaciones y el manejo de estados deben permanecer intactos.
  - Al enviar el formulario, los datos deben mostrarse correctamente en la consola.

### Extra (1 día):

- **Crear un componente reutilizable para casillas de verificación (`CheckboxField`):**

  **Descripción:**
  - Crear un componente que represente una casilla de verificación individual.

  **Características del `CheckboxField`:**
  - **Props necesarias:**
    - `label`: Etiqueta que describe la casilla.
    - `name`: Nombre del campo.
    - `checked`: Estado actual de la casilla (true o false).
    - `onChange`: Función para manejar cambios en la casilla.
  
  **Implementación:**
  - El componente debe renderizar una etiqueta y un input de tipo checkbox asociados.

- **Añadir una casilla de verificación al formulario utilizando `CheckboxField`:**
  - **"Aceptar Términos y Condiciones":**
    - Añadir esta casilla al formulario.
    - Hacer que sea un campo obligatorio; el usuario debe aceptarlos para poder enviar el formulario.

- **Estilizar los componentes:**
  - Aplicar estilos básicos para mejorar la apariencia de los componentes y el formulario en general.
  - Asegurarse de que los componentes tengan una apariencia consistente y sean fáciles de usar.

---

### Objetivos del Ejercicio:

- **Introducir la creación de componentes reutilizables básicos:**
  - Comprender cómo encapsular lógica y presentación en componentes que pueden ser usados en diferentes partes de la aplicación.
- **Promover código limpio y mantenible:**
  - Reducir la duplicación de código y facilitar futuras ampliaciones o modificaciones.
- **Practicar el paso de props y manejo de eventos en componentes:**
  - Fortalecer la comprensión de cómo los componentes padres e hijos se comunican en React.

---

## 🎨 Características Añadidas

- ✨ Validación en tiempo real
- 🔒 Seguridad mejorada
- 🎭 Feedback visual intuitivo
- 🌈 Animaciones suaves


## 🚀 Tecnologías Utilizadas

- React 18
- CSS3 (Variables CSS, Flexbox)
- JavaScript ES6+
- Create React App


## 🛠️ Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/NoeOsorio/react-forms-storybook.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación:

```bash
npm start
```

