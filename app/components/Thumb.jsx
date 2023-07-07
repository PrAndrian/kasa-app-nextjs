import PropTypes from 'prop-types';
import React from 'react';
import styles from '../css/Thumb.module.css';
import Link from 'next/link';

function Thumb({ id, title, cover }) {
  return (
    <Link
      href={`/fiche-logement/${id}`}
      className={styles.thumb}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
          url(${cover})`,
      }}
    >
      <p>{title}</p>
    </Link>
  );
}

Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Thumb;
