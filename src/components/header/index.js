import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';
import { LoginDialog } from '../login-dialog';
import { AddWishDialog } from '../add-wish-dialog';
import { UserInfo } from '../user-info';

const { Brand, Toggle, Collapse } = Navbar;

export const Header = ({
  isPopupOpen,
  togglePopup,
  user,
  onLogin,
  onRegistration,
  onLogout,
  onAddWish,
  formErorrs
}) => {
  const handleClose = () => togglePopup(false);
  const handleShow = () => togglePopup(true);
  const addWishPopupClose = () => toggleAddWishPopup(false);
  const addWishPopupShow = () => toggleAddWishPopup(true);

  const [isAddWishPopupOpen, toggleAddWishPopup] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand='sm'>
      <Container>
        <a href='/'>
          <Brand>My Wishlist</Brand>
        </a>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <UserInfo
              user={user}
              onOpen={handleShow}
              onAddWishPopupOpen={addWishPopupShow}
              onLogout={onLogout}
            />
          </Nav>
        </Collapse>
      </Container>
      <LoginDialog
        isOpen={isPopupOpen}
        onLogin={onLogin}
        onRegistration={onRegistration}
        formErorrs={formErorrs}
        onClose={handleClose}
      />
      <AddWishDialog
        isOpen={isAddWishPopupOpen}
        onClose={addWishPopupClose}
        onSubmit={onAddWish}
      />
    </Navbar>
  );
};
