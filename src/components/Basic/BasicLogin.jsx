/*
 * Componente BasicForms
 * 
 * Este componente demuestra:
 * 1. Manejo de formularios en React
 * 2. Uso del hook useState para estado local
 * 3. Control de inputs controlados
 * 4. Manejo de eventos del formulario
 */

import './BasicLogin.css';
// useState es un Hook de React que permite añadir estado a componentes funcionales
import { useState } from 'react';

export default function BasicLogin() {
  // === Estado del formulario ===
  /*
   * useState devuelve un array con dos elementos:
   * 1. La variable de estado actual (email)
   * 2. La función para actualizar ese estado (setEmail)
   * 
   * El argumento de useState es el valor inicial del estado
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
   * handleSubmit maneja el envío del formulario
   * @param {Event} e - Evento del formulario
   * 
   * e.preventDefault() evita que el formulario recargue la página
   * al ser enviado (comportamiento por defecto de HTML)
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos a un servidor
    console.log({email, password});
  };

  return (
    <div className="container">
      {/* 
       * Formulario controlado en React
       * - onSubmit se ejecuta cuando el formulario es enviado
       * - className para estilos CSS
       */}
      <form className="basic-login-form" onSubmit={handleSubmit}>
        <h2>Your App Name</h2>

        {/* 
         * Label + Input para Email
         * - htmlFor conecta la etiqueta con el input (accesibilidad)
         * - value mantiene el input sincronizado con el estado
         * - onChange actualiza el estado cuando el usuario escribe
         */}
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        {/* 
         * Label + Input para Password
         * - type="password" oculta los caracteres ingresados
         * - value y onChange crean un input controlado
         */}
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* 
         * Botón de envío
         * - type="submit" permite enviar el form con Enter
         * - Al hacer click, se ejecutará handleSubmit
         */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

/*
 * === Conceptos clave ===
 * 
 * 1. Inputs Controlados:
 *    - El valor del input está controlado por el estado de React
 *    - Cada cambio en el input actualiza el estado
 *    - El estado es la "fuente única de verdad"
 * 
 * 2. useState:
 *    - Hook básico para manejar estado en componentes funcionales
 *    - Permite que el componente "recuerde" información entre renderizados
 *    - Cada useState es independiente
 * 
 * 3. Eventos:
 *    - onChange: se ejecuta cada vez que el usuario modifica el input
 *    - onSubmit: se ejecuta cuando se envía el formulario
 *    - e.preventDefault(): evita comportamientos por defecto del navegador
 * 
 * 4. Buenas prácticas:
 *    - Usar labels con htmlFor para accesibilidad
 *    - Manejar el envío del formulario con onSubmit
 *    - Mantener el estado local para los datos del formulario
 */
