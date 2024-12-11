import "./ejercicio2.css";
import { useState } from "react";

export default function ValidatedLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const validateForm = (id, value) => {
    const errors = formErrors;

    if (!value) {
      errors[id] = `${
        id.toString().charAt(0).toUpperCase() + id.slice(1)
      } is required`;
    } else {
      delete errors[id];
    }
    return errors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormErrors(validateForm(id, value));
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  return (
    <div className="container">
      <form className="basic-login-form" onSubmit={handleSubmit}>
        <h2>Your App Name</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="example@example.com"
          className={formErrors.email ? "input-error" : ""}
          required
        />
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="********"
          onChange={handleChange}
          required
          className={formErrors.password ? "input-error" : ""}
        />
        {formErrors.password && (
          <p className="error-message">{formErrors.password}</p>
        )}
        <button disabled={!email || !password} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
