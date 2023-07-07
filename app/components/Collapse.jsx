'use client'

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Collapse.module.css';
import Image from 'next/image';

function Collapse({ title, text }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const chevronDown = '/images/chevron_down.svg';

  return (
    <div className={styles.collapse}>
      <header onClickCapture={handleClick} className={styles.collapse_header}>
        <span>{title}</span>
        <Image
          className={active ? styles.collapse_icon_active : undefined}
          src={chevronDown}
          width={30} 
          height={30}
          alt="icon dépliant fermé"
        />
      </header>
      <div className={!active ? styles.collapse_content : `${styles.collapse_content} ${styles.collapse_content_active}`}>
        { typeof text === 'string'
          ? (
            <p>
              {text && text}
            </p>
          )
          : (
            <p className={styles.equipement}>
              {text && text.map((equipement) => (equipement))}
            </p>
          )}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]).isRequired,
};

export default Collapse;
