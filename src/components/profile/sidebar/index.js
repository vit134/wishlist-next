import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, Avatar, Typography, Icon, Divider, Tag, Tooltip } from 'antd';
import { selectUserData } from 'domains/root/selectors/user-login';
import { getFormattedPhone } from 'helpers';
import styles from './styles.module.css';

export const SideBar = ({ user }) => {
  const { avatar, date_of_birth, email, firstname, lastname, phone, username, holidays } = user; // eslint-disable-line camelcase
  const fullName = firstname && lastname ? `${firstname} ${lastname}` : username;
  const dateOfBirth = moment(date_of_birth).format('DD MMM YYYY г.');
  const formattedPhone = getFormattedPhone(phone);

  return (
    <Card>
      <div className={styles.avatar}>
        <Avatar size={180} src={avatar} icon="user" shape="square" />
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
          <Typography.Text>{formattedPhone}</Typography.Text>
        </span>
        <span className={styles['userinfo-row']}>
          <Icon type="mail" className={styles['userinfo-icon']} />
          <Typography.Text>{email}</Typography.Text>
        </span>
      </div>
      <Divider dashed />
      <div className={styles.holidays}>
        {
          holidays.map(({ name, date }) => (
            <Tooltip key={name} title={moment(date).format('DD MMM YYYY')}>
              <Tag color="magenta" className={styles.tag}>{name}</Tag>
            </Tooltip>
          ))
        }
      </div>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: selectUserData(state),
});

export default connect(mapStateToProps)(SideBar);
