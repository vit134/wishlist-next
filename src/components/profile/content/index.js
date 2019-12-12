import React from 'react';
import { Card, Tabs } from 'antd';
import { WishesTable } from '../table';

export const Content = ({ wishes }) => {
  return (
    <Card>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Мои желания" key="1">
          <WishesTable data={wishes} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Настройки профиля" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>,
    </Card>
  );
};
