import React from 'react';
import styles from './MyAC.module.css';
import { photoSets } from '../../../data/photoSets.js';
import PhotoGrid from '../../components/PhotoGrid.jsx';

function MyAC() {
  return (
    <div className={styles.wrapper}>
      <PhotoGrid photos={photoSets.myAC} />
    </div>
  );
}

export default MyAC;
