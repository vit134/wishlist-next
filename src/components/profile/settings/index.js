import React from 'react';
import { Collapse } from 'antd';
import ProfilePanelContent from './components/profile-panel';
import styles from './styles.module.css';

const panelTitle = title => (
  <span className={styles.title}>{title}</span>
);

export class ProfileSettings extends React.Component {
  render () {
    return (
      <Collapse defaultActiveKey={1}>
        <Collapse.Panel header={panelTitle('Профиль')} key="1">
          <ProfilePanelContent />
        </Collapse.Panel>
        <Collapse.Panel header={panelTitle('Социльные сети')} key="2">
          dsa
        </Collapse.Panel>
        <Collapse.Panel header={panelTitle('Отображение')} key="3">
          123
        </Collapse.Panel>
      </Collapse>
    );
  }
}
