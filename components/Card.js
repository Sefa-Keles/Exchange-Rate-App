import React from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.scss';

const Card = ({ cardImage, text , alt}) => {
  return (
    <div className={styles.cardContainer}>
      <Image src={cardImage} alt={alt} width={80} height={80} className={styles.cardImage} />
      <div className={styles.cardDescription}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
