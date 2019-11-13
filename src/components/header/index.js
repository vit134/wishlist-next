import React, { useState } from 'react';
import {
  Navbar,
  NavDropdown,
  Nav,
  Container
} from 'react-bootstrap';
import { LoginDialog } from './components/login-dialog';
import { AddWishDialog } from '../add-wish-dialog';
import { UserInfo } from './components/user-info';

const { Brand, Toggle, Collapse } = Navbar;
const { Item, Divider } = NavDropdown;
const { Link } = Nav;

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

  const [isAddWishPopupOpen, toggleAddWishPopup] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand='sm'>
      <Container>
        <a href='/'>
          <Brand>My Wishlist</Brand>
        </a>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="#home">Home</Link>
            <Link href="#link">Link</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Item href="#action/3.1">Action</Item>
              <Item href="#action/3.2">Another action</Item>
              <Item href="#action/3.3">Something</Item>
              <Divider />
              <Item href="#action/3.4">Separated link</Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <UserInfo user={user} onOpen={handleShow} onAddWishPopupOpen={() => toggleAddWishPopup(true)} onLogout={onLogout} />
          </Nav>
        </Collapse>
      </Container>
      <LoginDialog
        isOpen={isPopupOpen}
        onLogin={onLogin}
        onRegistration={onRegistration}
        formErorrs={formErorrs}
        onClose={handleClose}/>
      <AddWishDialog
        isOpen={isAddWishPopupOpen}
        onClose={() => toggleAddWishPopup(false)}
        onSubmit={onAddWish}
      />
    </Navbar>
  );
};
