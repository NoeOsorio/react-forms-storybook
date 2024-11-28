import "./ejercicio3.css";
import { useMemo, useState } from "react";
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

const initialFormData = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "male",
  interests: {
    sports: false,
    music: false,
    art: false,
    technology: false,
  },
  birthDate: "",
};

const formErrorsMessages = {
  name: "Name is required",
  lastName: "Last name is required",
  email: "Email is required",
  password: "Password is required",
  confirmPassword: "Passwords must match",
  birthDate: "Birth date is required",
  age: "You must be at least 18 years old",
  interests: "At least one interest is required",
};

const requiredFields = [
  "name",
  "lastName",
  "email",
  "password",
  "confirmPassword",
  "birthDate",
  "interests",
];

export default function BasicSignUp() {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const allFieldsTouched = useMemo(
    () => requiredFields.every((field) => touchedFields[field]),
    [touchedFields]
  );
  const isValidForm = useMemo(() => {
    return (
      Object.values(formErrors).every((error) => error === "") &&
      allFieldsTouched
    );
  }, [formErrors, allFieldsTouched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
  };

  const validateForm = (id, value, subFormData) => {
    const errors = { ...formErrors };

    if (id !== "interests" && !value) {
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

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setTouchedFields((prev) => ({
      ...prev,
      [type === "checkbox" ? "interests" : id]: true,
    }));

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
      setFormErrors(validateForm(id, value));
      setFormData({ ...formData, [id]: value });
    }
  };

  const renderFieldIcon = (fieldName) => {
    if (!touchedFields[fieldName]) return null;
    
    return formErrors[fieldName] ? (
      <CloseCircleFilled className="input-icon" style={{ color: '#ff4d4f' }} />
    ) : (
      <CheckCircleFilled className="input-icon" style={{ color: '#52c41a' }} />
    );
  };

  return (
    <div className="container">
      <form className="basic-login-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div className="form-group">
          <label htmlFor="name" className="required-label">Name</label>
          <div className="input-container">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John"
              className={formErrors.name ? "input-error" : ""}
              required
            />
            {renderFieldIcon("name")}
          </div>
          {formErrors.name && (
            <p className="error-message">{formErrors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="required-label">Last Name</label>
          <div className="input-container">
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={formErrors.lastName ? "input-error" : ""}
              required
            />
            {renderFieldIcon("lastName")}
          </div>
          {formErrors.lastName && (
            <p className="error-message">{formErrors.lastName}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="required-label">Email</label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              className={formErrors.email ? "input-error" : ""}
              required
            />
            {renderFieldIcon("email")}
          </div>
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="required-label">Password</label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={formData.password}
              placeholder="********"
              onChange={handleChange}
              required
              className={formErrors.password ? "input-error" : ""}
            />
            {renderFieldIcon("password")}
          </div>
          {formErrors.password && (
            <p className="error-message">{formErrors.password}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="required-label">Confirm Password</label>
          <div className="input-container">
            <input
              type="password"
              id="confirmPassword"
              required
              className={formErrors.confirmPassword ? "input-error" : ""}
              onChange={handleChange}
            />
            {renderFieldIcon("confirmPassword")}
          </div>
          {formErrors.confirmPassword && (
            <p className="error-message">{formErrors.confirmPassword}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="interests-section">
          <label className="required-label">Interests</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="sports"
                checked={formData.interests.sports}
                onChange={handleChange}
              />
              <label htmlFor="sports">Sports</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="music"
                checked={formData.interests.music}
                onChange={handleChange}
              />
              <label htmlFor="music">Music</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="art"
                checked={formData.interests.art}
                onChange={handleChange}
              />
              <label htmlFor="art">Art</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="technology"
                checked={formData.interests.technology}
                onChange={handleChange}
              />
              <label htmlFor="technology">Technology</label>
            </div>
          </div>
          {formErrors.interests && (
            <p className="error-message">{formErrors.interests}</p>
          )}
          {touchedFields.interests && !formErrors.interests && (
            <CheckCircleFilled style={{ color: '#52c41a', marginLeft: '10px' }} />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="birthDate" className="required-label">Birth Date</label>
          <div className="input-container">
            <input
              type="date"
              id="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className={formErrors.birthDate ? "input-error" : ""}
            />
            {renderFieldIcon("birthDate")}
          </div>
          {formErrors.birthDate && (
            <p className="error-message">{formErrors.birthDate}</p>
          )}
          {formErrors.age && <p className="error-message">{formErrors.age}</p>}
        </div>

        <button disabled={!isValidForm} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
