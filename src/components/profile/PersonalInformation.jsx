import { useState } from "react";
import { Form } from "react-router-dom";

export default function PersonalInformation({ personalInfo, handleSubmit }) {
  const [isReadonly, setIsReadOnly] = useState(true);

  const [formData, setFormData] = useState(personalInfo);

  const handleToggle = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!isReadonly) {
      // Logic to save data would go here
      const personalInfo = {
        personalInfo: formData,
      };
      await handleSubmit(personalInfo);
    }
    setIsReadOnly(!isReadonly);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form className="profile-section">
      <div className="section-header">
        <h3 className="section-title">Personal Information</h3>
        <button className="btn-edit-section" onClick={handleToggle}>
          {isReadonly ? "Edit" : "Save"}
        </button>
      </div>
      <div className="profile-grid">
        <div className="profile-field">
          <label className="field-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="field-input"
            value={formData.firstName}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="field-input"
            value={formData.lastName}
            readOnly={isReadonly}
            onChange={handleChange}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Email</label>
          <input
            type="email"
            name="email"
            className="field-input"
            value={formData.email}
            readOnly={isReadonly}
            onChange={handleChange}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="field-input"
            value={formData.phone}
            readOnly={isReadonly}
            onChange={handleChange}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            className="field-input"
            value={formData.dateOfBirth}
            readOnly={isReadonly}
            onChange={handleChange}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Gender</label>
          <input
            type="text"
            name="gender"
            className="field-input"
            value={formData.gender}
            readOnly={isReadonly}
            onChange={handleChange}
          />
        </div>
      </div>
    </Form>
  );
}
