import React, { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../header';
import { loginRequest, logoutRequest, registrationRequest, addWishRequest } from '../../requests';
import styles from './styles.css';

const getFormFields = (form) => {
  return Array.from(form).reduce((acc, node) => {
    if (node.name) {
      if (node.name === 'image') {
        console.log(node, node.files[0]);
      }
      acc[node.name] = node.value;
    }
    return acc;
  }, {});
};

const Layout = ({ user, children }) => {
  const [userInfo, setUser] = useState(user);
  const [isPopupOpen, togglePopup] = useState(false);
  const [formErorrs, setFormErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const data = getFormFields(e.target);

    loginRequest(JSON.stringify(data))
      .then(({ data }) => {
        setUser(data);
        togglePopup(false);
      })
      .catch(e => console.warn(e));
  };

  const handleLogout = () => (
    logoutRequest().then(() => {
      setUser({
        isLogin: false,
        data: null
      });
    })
  );

  const handleRegistration = (e) => {
    e.preventDefault();

    const data = getFormFields(e.target);

    registrationRequest(data)
      .then(({ data }) => {
        const { status, user, error } = data;
        if (status === 'success') {
          setUser({ isLogin: true, data: user });
        } else {
          setFormErrors({
            [error.name]: error.message
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAddWish = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data);

    addWishRequest(data)
      .then(response => console.log(response))
  };

  return (
    <Fragment>
      <Header
        isPopupOpen={isPopupOpen}
        togglePopup={togglePopup}
        user={userInfo}
        onLogin={handleLogin}
        onRegistration={handleRegistration}
        onLogout={handleLogout}
        onAddWish={handleAddWish}
        formErorrs={formErorrs}
      />
      <Container>
        <div className={styles['root-container']}>
          { children }
        </div>
      </Container>
    </Fragment>
  );
};

export default Layout;
