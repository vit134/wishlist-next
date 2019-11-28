import React from 'react';
import { Result } from 'antd';
import styles from './styles.module.css';

export const AccessDenied = () => (
  <div className={styles.root}>
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  </div>
);
