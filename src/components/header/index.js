import React from 'react';
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
  isAddWishPopupOpen,
  togglePopup,
  user,
  onLogin,
  onRegistration,
  onAddWishPopupClose,
  onAddWishPopupOpen,
  onLogout,
  onAddWish,
  formErorrs
}) => {
  const handleClose = () => togglePopup(false);
  const handleShow = () => togglePopup(true);

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
              onAddWishPopupOpen={onAddWishPopupOpen}
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
        onClose={onAddWishPopupClose}
        onSubmit={onAddWish}
      />
    </Navbar>
  );
};
