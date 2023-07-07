import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Tag.module.css';

function Tag({ tag }) {
  return (
    <span className={styles.tag}>{tag}</span>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
