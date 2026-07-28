import { useState, useEffect } from "react";
import "./AddEquipmentModal.css";

export default function AddEquipmentModal({
  closeModal,
  equipment = {},
  isView = false,
  isEdit = false,
  onSave,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "CARDIO",
    brand: "",
    model: "",
    serialNumber: "",
    location: "Main Gym Floor",
    purchaseDate: "",
    purchasePrice: "",
    status: "OPERATIONAL",
  });

  useEffect(() => {
    if (equipment && (isEdit || isView)) {
      setFormData({
        name: equipment.name || "",
        category: equipment.category || "CARDIO",
        brand: equipment.brand || "",
        model: equipment.model || "",
        serialNumber: equipment.serialNumber || "",
        location: equipment.location || "Main Gym Floor",
        purchaseDate: equipment.purchaseDate || "",
        purchasePrice: equipment.purchasePrice || "",
        status: equipment.status || "OPERATIONAL",
      });
    }
  }, [equipment, isEdit, isView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
    closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {isView
              ? "Equipment Details"
              : isEdit
              ? "Edit Equipment"
              : "Add New Equipment"}
          </h2>
          <button className="btn-close-modal" onClick={closeModal}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-grid">
            <div className="form-group full-width">
              <label className="form-label">Equipment Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Commercial Treadmill T80"
                className="form-input"
                disabled={isView}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
                disabled={isView}
              >
                <option value="CARDIO">Cardio</option>
                <option value="STRENGTH">Strength</option>
                <option value="FREE_WEIGHTS">Free Weights</option>
                <option value="FUNCTIONAL">Functional</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
                disabled={isView}
              >
                <option value="OPERATIONAL">Operational</option>
                <option value="UNDER_MAINTENANCE">Under Maintenance</option>
                <option value="OUT_OF_SERVICE">Out of Service</option>
                <option value="RETIRED">Retired</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g. Life Fitness"
                className="form-input"
                disabled={isView}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. Pro Series 2024"
                className="form-input"
                disabled={isView}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                placeholder="SN-9821038"
                className="form-input"
                disabled={isView}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Floor Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Zone A - Cardio Area"
                className="form-input"
                disabled={isView}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Purchase Date</label>
              <input
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                className="form-input"
                disabled={isView}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Purchase Price ($)</label>
              <input
                type="number"
                name="purchasePrice"
                value={formData.purchasePrice}
                onChange={handleChange}
                placeholder="2499.00"
                className="form-input"
                disabled={isView}
              />
            </div>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={closeModal}
            >
              {isView ? "Close" : "Cancel"}
            </button>
            {!isView && (
              <button type="submit" className="btn-submit">
                {isEdit ? "Update Asset" : "Save Asset"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}