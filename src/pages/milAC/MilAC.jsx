import React from 'react';
import styles from './MilAC.module.css';
import { photoSets } from '../../../data/photoSets.js';
import PhotoGrid from '../../components/PhotoGrid.jsx';

function MilAC() {
  return (
    <div className={styles.wrapper}>
      <PhotoGrid photos={photoSets.milAC} />
    </div>
  );
}

export default MilAC;
