import React from 'react';
import { LoginContent } from './login';
import { RegContent } from './registration';
import styles from './styles.less';

export const TabContent = ({ selectedtab, submitActions, formErorrs }) => (
  <div className={styles.content}>
    {
      selectedtab === 'login' ? (
        <LoginContent onSubmit={submitActions.onLogin} />
      ) : (
        <RegContent onSubmit={submitActions.onRegistration} formErorrs={formErorrs} />
      )
    }
  </div>
);
