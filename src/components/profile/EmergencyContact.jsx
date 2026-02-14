import { useState } from "react";
import { Form } from "react-router-dom";

export default function EmergencyContact({ emergencyContact, handleSubmit }) {
  const [isReadonly, setIsReadOnly] = useState(true);

  const [formData, setFormData] = useState(emergencyContact);

  const handleToggle = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!isReadonly) {
      // Logic to save data would go here
      const emergencyContact = {
        emergencyContact: formData,
      };
      await handleSubmit(emergencyContact);
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
        <h3 className="section-title">Emergency Contact</h3>
        <button className="btn-edit-section" onClick={handleToggle}>
          {isReadonly ? "Edit" : "Save"}
        </button>
      </div>
      <div className="profile-grid">
        <div className="profile-field">
          <label className="field-label">Contact Name</label>
          <input
            type="text"
            name="name"
            className="field-input"
            value={formData.name}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Contact Phone</label>
          <input
            type="tel"
            name="phone"
            className="field-input"
            value={formData.phone}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Relationship</label>
          <input
            type="text"
            name="relationship"
            className="field-input"
            value={formData.relationship}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
      </div>
    </Form>
  );
}
