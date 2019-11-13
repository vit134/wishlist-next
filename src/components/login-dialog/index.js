import React, { useState } from 'react';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import { TabContent } from './components/content';
import styles from './styles.css';

const tabsLookup = [
  {
    key: 'login',
    title: 'Войти'
  },
  {
    key: 'registration',
    title: 'Зарегистрироваться'
  }
];

export const LoginDialog = ({ isOpen, onLogin, onRegistration, formErorrs, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [key, changeTab] = useState('login');
  const submitActions = { onLogin, onRegistration };
  return (
    <Modal show onHide={onClose} centered>
      <Modal.Body>
        <div className={styles.modal}>
          <Tabs
            className={styles.tabs}
            defaultActiveKey="login"
            activeKey={key}
            onSelect={k => changeTab(k)}>
            {
              tabsLookup.map(({ key, title, onSubmit }) => (
                <Tab key={key} eventKey={key} title={title} className={styles['tab-item']}>
                  <TabContent selectedtab={key} submitActions={submitActions} formErorrs={formErorrs} />
                </Tab>
              ))
            }
          </Tabs>
        </div>
      </Modal.Body>
    </Modal>
  );
};
