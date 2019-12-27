import React from 'react';
import { getUserName } from '../../utils';
import { Avatar, Icon, Menu, Dropdown, Button } from 'antd';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

const AvatarDropdown = ({ currentUser = {}, actions }) => {
  const { name, avatar } = currentUser;

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]}>
      <Menu.Item key="center" className={styles['menu-item']} onClick={actions.onAddWishPopupOpen}>
        <Icon type="plus-circle" />
        <span className={styles['menu-item-name']}>Новое желание</span>
      </Menu.Item>
      <Menu.Item key="profile" className={styles['menu-item']}>
        <a href="/profile">
          <Icon type="profile" />
          <span className={styles['menu-item-name']}>Мои желания</span>
        </a>
      </Menu.Item>
      <Menu.Item key="settings" className={styles['menu-item']}>
        <a href="/profile?activeTab=2">
          <Icon type="setting" />
          <span className={styles['menu-item-name']}>Настройки</span>
        </a>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="logout" className={styles['menu-item']} onClick={actions.onLogout}>
        <Icon type="logout" />
        <span className={styles['menu-item-name']}>Выход</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuHeaderDropdown} trigger={['click']}>
      <span className={cx('action', 'account')}>
        <Avatar size="small" className={styles.avatar} src={avatar} alt="avatar" />
        <span className={styles.name}>{name}</span>
      </span>
    </Dropdown>
  );
};

export const UserInfo = ({
  isLogin,
  userData,
  openLoginPopup,
  userLogout,
  openAddWishPopup,
}) => {
  if (!isLogin) {
    return (
      <Button variant="outline-light" onClick={openLoginPopup}>Войти</Button>
    );
  }

  const name = getUserName(userData);

  return (
    <AvatarDropdown currentUser={{ ...userData, name }} actions={{ onAddWishPopupOpen: openAddWishPopup, onLogout: userLogout }}/>
  );
};
