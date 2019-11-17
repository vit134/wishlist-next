import React from 'react';
import { ERROR_MESSAGES } from '../../../../constants';
import styles from './styles.module.css';

export const Error = ({ error }) => {
  if (!error || !ERROR_MESSAGES[name]) {
    return null;
  }

  return <div className={styles.error}>Произошла ошибка, попробуйте позднее</div>;
};
