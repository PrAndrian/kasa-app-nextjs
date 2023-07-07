import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Banner.module.css';

function Banner({ type, image }) {
  return (
    <div
      className={type === 'base' ? `${styles.banner} ${styles.banner_v1}` : styles.banner}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      { type !== 'base'
          && (
          <h2 className={styles.banner_title}>
            <span className={styles.banner_text_1}>Chez vous,</span>
            <span className={styles.banner_text_2}> partout et ailleurs</span>
          </h2>
          )}
    </div>
  );
}

Banner.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string.isRequired,
};
Banner.defaultProps = {
  type: undefined,
};

export default Banner;
