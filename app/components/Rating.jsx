/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Rating.module.css';
import Image from 'next/image';

function Rating({ rating }) {
  const ratingNumber = Number(rating);

  const startUp = '/images/start_up.svg'
  const startDown = '/images/start_down.svg'

  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, i) => {
        if (i < ratingNumber) {
          return <Image key={i} className={styles.star} width={100} height={100} src={startUp} alt="note_étoilé" />;
        }
        return <Image key={i} className={styles.star} width={100} height={100} src={startDown} alt="note_étoilé" />;
      })}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
