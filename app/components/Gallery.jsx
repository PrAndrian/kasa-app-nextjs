'use client'

/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Gallery.module.css';
import Image from 'next/image';

function Gallery({ pictures }) {
  const [positionImage, setPositionImage] = useState(0);

  const [imageShowing, setImageShowing] = useState(pictures[0]);
  
  const VectorRight =  "/images/Vector_right.png"
  const VectorLeft =  "/images/Vector_left.png"

  const nextImageShowing = () => {
    let postitionNextImage = positionImage + 1;
    if (postitionNextImage > pictures.length - 1) {
      postitionNextImage = 0;
      setPositionImage(0);
    } else {
      setPositionImage(postitionNextImage);
    }
    setImageShowing(pictures[postitionNextImage]);
  };

  const prevImageShowing = () => {
    let postitionPrevImage = positionImage - 1;
    if (postitionPrevImage < 0) {
      postitionPrevImage = pictures.length - 1;
      setPositionImage(pictures.length - 1);
    } else {
      setPositionImage(postitionPrevImage);
    }
    setImageShowing(pictures[postitionPrevImage]);
  };

  const selectImageShowing = (i) => {
    setPositionImage(i);
    setImageShowing(pictures[i]);
  };

  return (
    <div
      className={styles.gallery}
      style={{
        backgroundImage: `url(${imageShowing})`,
      }}
    >
      <div className={pictures.length > 1 ? styles.navGallery : styles.navGallery_hidden}>
        <Image
          onClickCapture={prevImageShowing}
          className={styles.arrowGallery}
          src={VectorLeft}
          width={100}
          height={100}
          alt="flèche gauche"
        />

        <Image
          className={styles.arrowGallery}
          onClickCapture={nextImageShowing}
          src={VectorRight}
          width={100}
          height={100}
          alt="flèche droite"
        />
      </div>

      <footer className={pictures.length > 1 ? styles.footerGallery : styles.navGallery_hidden}>
        <div>
          {pictures.map((picture, i) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              id={`dot${i}`}
              onClickCapture={() => selectImageShowing(i)}
              className={positionImage === i ? `${styles.circle} ${styles.active}` : styles.circle}
            />
          ))}
        </div>
        <p>
          {positionImage + 1}
          /
          {pictures.length}
        </p>
      </footer>
    </div>
  );
}

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
