import { useRef } from "react";

export default function AddMember({dialogRef, closeModal}) {

  return (
    <dialog ref={dialogRef}>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Add Member</h3>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
