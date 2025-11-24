import React from 'react';
import './PhotoModal.css';

function PhotoModal({ photo, displayName, onClose }) {
  if (!photo) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="return-btn" onClick={onClose}>Return</button>
        <img src={`/${photo}`} alt={displayName} className="modal-img" />
        <div className="modal-caption">{displayName}</div>
      </div>
    </div>
  );
}

export default PhotoModal;
