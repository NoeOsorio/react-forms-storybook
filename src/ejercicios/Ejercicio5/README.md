# Ejercicio 5: Creación de Componentes Reutilizables Básicos

**Duración**: 3 días + 1 día para extras

## Requisitos Mínimos (3 días):
- Crear un componente reutilizable de campo de entrada (`InputField`):
  - Props necesarias:
    - `label`: Etiqueta que describe el campo
    - `type`: Tipo de input
    - `name`: Nombre del campo
    - `value`: Valor actual del input
    - `onChange`: Función para manejar cambios
    - `placeholder`: Texto de ayuda (opcional)
    - `required`: Campo obligatorio (opcional)
- Refactorizar el formulario existente para utilizar el componente `InputField`
- Verificación y pruebas del funcionamiento correcto

## Extras (1 día):
- Crear componente reutilizable para casillas de verificación (`CheckboxField`)
  - Props necesarias:
    - `label`: Etiqueta que describe la casilla
    - `name`: Nombre del campo
    - `checked`: Estado actual
    - `onChange`: Función para manejar cambios
- Añadir casilla "Aceptar Términos y Condiciones"
- Estilizar los componentes con CSS 