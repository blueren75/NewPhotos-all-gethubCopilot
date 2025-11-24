import React from 'react';
import styles from './Harmon.module.css';
import { photoSets } from '../../../data/photoSets.js';
import PhotoGrid from '../../components/PhotoGrid.jsx';

function Harmon() {
  return (
    <div className={styles.wrapper}>
      <PhotoGrid photos={photoSets.harmon} />
    </div>
  );
}

export default Harmon;
