import React from 'react';
import { Card, Avatar, Typography, Icon, Divider, Tag, Tabs } from 'antd';
import styles from './styles.module.css';

const SocialIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1561142_er3f686dm5t.js',
});

export const SideBar = () => {
  return (
    <Card>
      <div className={styles.avatar}>
        <Avatar size={120} icon="user" />
      </div>
      <div className={styles.username}>
        <Typography.Title level={4}>Муравей Дизайнер</Typography.Title>
      </div>
      <div className={styles.userinfo}>
        <span className={styles['userinfo-row']}>
          <Icon type="calendar" className={styles['userinfo-icon']} />
          <Typography.Text>5 декабря 2019 г.</Typography.Text>
        </span>
        <span className={styles['userinfo-row']}>
          <Icon type="phone" className={styles['userinfo-icon']} />
          <Typography.Text>+7 (123) 456-78-90</Typography.Text>
        </span>
        <span className={styles['userinfo-row']}>
          <Icon type="mail" className={styles['userinfo-icon']} />
          <Typography.Text>keklol@blabla.ru</Typography.Text>
        </span>
      </div>
      <Divider dashed />
      <div className={styles.holidays}>
        <Tag color="magenta" className={styles.tag}>День рождения</Tag>
        <Tag color="red" className={styles.tag} >День программиста</Tag>
        <Tag color="volcano" className={styles.tag} >Именины</Tag>
      </div>
      <Divider dashed />
      <div className={styles.social}>
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<SocialIcon type="icon-Facebook" />} key="1">
            Tab   1
          </Tabs.TabPane>
          <Tabs.TabPane tab={<SocialIcon type="icon-vkontakte" />} key="2">
            Tab 2
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Card>
  );
};
