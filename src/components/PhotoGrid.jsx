import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';
import './PhotoGrid.css';

function PhotoGrid({ photos }) {
  const [selected, setSelected] = useState(null);
  const open = (p) => setSelected(p);
  const close = () => setSelected(null);
  return (
    <>
      <div className="photo-grid">
        {photos.map(p => (
          <div key={p.photo} className="photo-item" onClick={() => open(p)}>
            <img src={`/${p.photo}`} alt={p.displayName} />
          </div>
        ))}
      </div>
      <PhotoModal photo={selected?.photo} displayName={selected?.displayName} onClose={close} />
    </>
  );
}

export default PhotoGrid;
