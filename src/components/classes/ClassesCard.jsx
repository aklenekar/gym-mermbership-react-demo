import { useRef, useState } from "react";

export default function ClassesCard({ fitnessClass, bookClass, cancelClass }) {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  function handleCancel() {
    closeModal();
    cancelClass(fitnessClass.bookingId);
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Cancel Booking?</h3>
            <p>
              Are you sure you want to cancel your booking for{" "}
              <strong>{fitnessClass.name}</strong>?
            </p>
            <div className="modal-actions">
              <button onClick={handleCancel} className="btn-cancel-confirm">
                Yes, Cancel Booking
              </button>
              <button onClick={closeModal} className="btn-cancel-close">
                No, Keep Booking
              </button>
            </div>
          </div>
        </div>
      </dialog>

      <div className="class-card">
        <div className="class-header">
          <div className="class-category">{fitnessClass.category}</div>
          <div className="class-spots">{fitnessClass.spotsInfo}</div>
        </div>
        <h3 className="class-name">{fitnessClass.name}</h3>
        <div className="class-info">
          <div className="info-item">
            <span className="info-icon">👤</span>
            <span>{fitnessClass.instructor}</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <span>{fitnessClass.location}</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📅</span>
            <span>Today, 6:00 PM</span>
          </div>
          <div className="info-item">
            <span className="info-icon">⏱️</span>
            <span>{fitnessClass.durationMin} min</span>
          </div>
        </div>
        {fitnessClass.isBooked ? (
          <button onClick={openModal} className="btn-booked">
            ✓ Booked
          </button>
        ) : (
          <button
            className="btn-book"
            onClick={() => bookClass(fitnessClass.id)}
          >
            Book Class
          </button>
        )}
      </div>
    </>
  );
}
