import React from 'react';
import { Modal, Tabs } from 'antd';
import LoginContent from './components/login';
import RegContent from './components/registration';

const { TabPane } = Tabs;

export const LoginDialog = (props) => {
  const { isOpen, onClose, userLogin } = props;
  if (!isOpen) {
    return null;
  }

  console.log('loginDialog', props);

  return (
    <Modal
      bodyStyle={{ paddingRight: '60px' }}
      visible
      footer={null}
      onCancel={onClose}
    >
      <Tabs tabPosition='left'>
        <TabPane tab="Вход" key="1">
          <LoginContent onSubmit={userLogin} />
        </TabPane>
        <TabPane tab="Регистрация" key="2">
          <RegContent onSubmit={() => console.log('write me')} />
        </TabPane>
      </Tabs>
    </Modal>
  );
};
