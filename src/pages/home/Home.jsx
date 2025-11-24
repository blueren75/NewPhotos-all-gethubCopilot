import React from 'react';
import styles from './Home.module.css';
import { photoSets } from '../../../data/photoSets.js';

function Home() {
  const photo = photoSets.home[0];
  return (
    <div className={styles.wrapper}>
      <img className={styles.hero} src={`/${photo.photo}`} alt={photo.displayName} />
    </div>
  );
}

export default Home;
