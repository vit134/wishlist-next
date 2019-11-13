import React from 'react';
import Link from 'next/link';
import { Button, NavDropdown } from 'react-bootstrap';
import { getUserName } from '../../utils';

export const UserInfo = ({ user = {}, onOpen, onAddWishPopupOpen, onLogout }) => {
  const { isLogin, data: userInfo } = user;

  if (!isLogin) {
    return (
      <Button variant="outline-light" onClick={onOpen}>Войти</Button>
    );
  }

  const userName = getUserName(userInfo);

  return (
    <NavDropdown title={userName} id="user-nav">
      <NavDropdown.Item as='div'><a onClick={onAddWishPopupOpen}>Новое желание</a></NavDropdown.Item>
      <NavDropdown.Item as='div'>
        <Link href="/profile">Мои желания</Link>
      </NavDropdown.Item>
      <NavDropdown.Item as='div'><a href="/profile/settings">Настройки</a></NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={onLogout}>Выйти</NavDropdown.Item>
    </NavDropdown>
  );
};
