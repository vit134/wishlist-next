import React from 'react';
import { Modal, Tabs } from 'antd';
import LoginContent from './components/login';
import RegContent from './components/registration';

const { TabPane } = Tabs;

export const LoginDialog = ({ isOpen, onLogin, onRegistration, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const submitActions = { onLogin, onRegistration };
  return (
    <Modal
      bodyStyle={{ paddingRight: '60px' }}
      visible
      footer={null}
      onCancel={onClose}
    >
      <Tabs tabPosition='left'>
        <TabPane tab="Вход" key="1">
          <LoginContent onSubmit={submitActions.onLogin} />
        </TabPane>
        <TabPane tab="Регистрация" key="2">
          <RegContent onSubmit={submitActions.onRegistration} />
        </TabPane>
      </Tabs>
    </Modal>
  );
};
