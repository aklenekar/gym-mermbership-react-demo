import { useState } from "react";
import { Form } from "react-router-dom";

export default function ProfileAddress({ address, handleSubmit }) {
  const [isReadonly, setIsReadOnly] = useState(true);

  const [formData, setFormData] = useState(address);

  const handleToggle = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!isReadonly) {
      // Logic to save data would go here
      const address = {
        address: formData,
      };
      await handleSubmit(address);
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
        <h3 className="section-title">Address</h3>
        <button className="btn-edit-section" onClick={handleToggle}>
          {isReadonly ? "Edit" : "Save"}
        </button>
      </div>
      <div className="profile-grid">
        <div className="profile-field full-width">
          <label className="field-label">Street Address</label>
          <input
            type="text"
            name="street"
            className="field-input"
            value={formData.street}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">City</label>
          <input
            type="text"
            name="city"
            className="field-input"
            value={formData.city}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">State</label>
          <input
            type="text"
            name="state"
            className="field-input"
            value={formData.state}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">ZIP Code</label>
          <input
            type="text"
            name="zipCode"
            className="field-input"
            value={formData.zipCode}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
        <div className="profile-field">
          <label className="field-label">Country</label>
          <input
            type="text"
            name="country"
            className="field-input"
            value={formData.country}
            onChange={handleChange}
            readOnly={isReadonly}
          />
        </div>
      </div>
    </Form>
  );
}
