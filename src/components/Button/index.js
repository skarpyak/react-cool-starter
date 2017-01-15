import React, { PropTypes } from 'react';

import styles from './styles.scss';

const Button = ({ icon, label, onClick }) => (
  <button type="button" className={`${styles.Button} btn`} onClick={onClick}>
    <div className={styles.icon}>
      <img src={icon} alt="Logo" role="presentation" />
    </div>
    <div className={styles.label}>{label}</div>
  </button>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
