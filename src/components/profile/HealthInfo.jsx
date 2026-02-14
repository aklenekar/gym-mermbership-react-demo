import { useState } from "react";
import { Form } from "react-router-dom";

export default function HealthInfo({ healthInfo, handleSubmit }) {
  const [isReadonly, setIsReadOnly] = useState(true);

  const [formData, setFormData] = useState(healthInfo);

  const handleToggle = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!isReadonly) {
      // Logic to save data would go here
      const healthInfo = {
        healthInfo: formData,
      };
      await handleSubmit(healthInfo);
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
        <h3 className="section-title">Health Information</h3>
        <button className="btn-edit-section" onClick={handleToggle}>
          {isReadonly ? "Edit" : "Save"}
        </button>
      </div>
      <div className="profile-grid">
        <div className="profile-field full-width">
          <label className="field-label">Medical Conditions</label>
          <textarea
            className="field-textarea"
            name="medicalConditions"
            rows="3"
            onChange={handleChange}
            readOnly={isReadonly}
          >
            {formData.medicalConditions}
          </textarea>
        </div>
        <div className="profile-field full-width">
          <label className="field-label">Fitness Goals</label>
          <textarea
            className="field-textarea"
            name="fitnessGoals"
            rows="3"
            onChange={handleChange}
            readOnly={isReadonly}
          >
            {formData.fitnessGoals}
          </textarea>
        </div>
      </div>
    </Form>
  );
}
