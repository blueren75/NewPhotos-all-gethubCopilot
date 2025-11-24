import React, { useEffect } from 'react';
import './PhotoModal.css';

function PhotoModal({ photo, displayName, onClose }) {
  if (!photo) return null;

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="return-btn" onClick={onClose}>Return</button>
        <img src={`/${photo}`} alt={displayName} className="modal-img" onClick={onClose} />
        <div className="modal-caption">{displayName}</div>
      </div>
    </div>
  );
}

export default PhotoModal;
