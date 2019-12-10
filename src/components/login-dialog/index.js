import React from 'react';
import { Modal, Tabs, Icon } from 'antd';
import LoginContent from './components/login';
import RegContent from './components/registration';
import styles from './styles.module.css';

const { TabPane } = Tabs;

const socialIconsList = [
  'facebook',
  'twitter',
  'github',
  'google',
];

export const LoginDialog = (props) => {
  const { isOpen, isLoading, error, onClose, userLogin, userRegistration } = props;
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      bodyStyle={{ paddingRight: '60px' }}
      visible
      footer={null}
      onCancel={onClose}
    >
      <Tabs tabPosition='left'>
        <TabPane tab="Вход" key="1">
          <LoginContent
            isLoading={isLoading}
            error={error}
            onSubmit={userLogin} />
        </TabPane>
        <TabPane tab="Регистрация" key="2">
          <RegContent
            isLoading={isLoading}
            error={error}
            onSubmit={userRegistration} />
        </TabPane>
      </Tabs>
      <div className={styles.social}>
        {
          socialIconsList.map(el => <Icon key={el} type={el} className={styles['social-icon']} />)
        }
      </div>
    </Modal>
  );
};
