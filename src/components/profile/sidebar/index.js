import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { Card, Avatar, Typography, Icon, Divider, Tag } from 'antd';
import { selectUserData } from 'domains/root/selectors/user-login';
import styles from './styles.module.css';

export const SideBar = ({ user }) => {
  const { avatar, date_of_birth, email, firstname, lastname, phone, username } = user; // eslint-disable-line camelcase
  const fullName = firstname && lastname ? `${firstname} ${lastname}` : username;
  const dateOfBirth = format(date_of_birth, 'dd MMMM yyyy г.');

  return (
    <Card>
      <div className={styles.avatar}>
        <Avatar size={120} src={avatar} icon="user" />
      </div>
      <div className={styles.username}>
        <Typography.Title level={4}>{fullName}</Typography.Title>
      </div>
      <div className={styles.userinfo}>
        <span className={styles['userinfo-row']}>
          <Icon type="calendar" className={styles['userinfo-icon']} />
          <Typography.Text>{dateOfBirth}</Typography.Text>
        </span>
        <span className={styles['userinfo-row']}>
          <Icon type="phone" className={styles['userinfo-icon']} />
          <Typography.Text>{phone}</Typography.Text>
        </span>
        <span className={styles['userinfo-row']}>
          <Icon type="mail" className={styles['userinfo-icon']} />
          <Typography.Text>{email}</Typography.Text>
        </span>
      </div>
      <Divider dashed />
      <div className={styles.holidays}>
        <Tag color="magenta" className={styles.tag}>День рождения</Tag>
        <Tag color="red" className={styles.tag} >День программиста</Tag>
        <Tag color="volcano" className={styles.tag} >Именины</Tag>
      </div>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: selectUserData(state),
});

export default connect(mapStateToProps)(SideBar);