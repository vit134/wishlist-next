import React, { Component, useState } from 'react';
import { Layout, PageHeader } from 'antd';
// import { Container } from 'react-bootstrap';
// import { Header } from '../header';
import { loginRequest, logoutRequest, registrationRequest, addWishRequest } from '../../requests';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;

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

class PageLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Layout className="layout">
        <Header>
          <a href="/" className={styles.logo}>My Wishlist</a>
        </Header>
        <PageHeader
          style={{
            marginBottom: '20px',
            background: '#fff',
          }}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
        >
          asdasd
        </PageHeader>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            { children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }

  handleLogin = (e) => {
    e.preventDefault();

    const data = getFormFields(e.target);

    loginRequest(JSON.stringify(data))
      .then(({ data }) => {
        setUser(data);
        togglePopup(false);
      })
      .catch(e => console.warn(e));
  };

  handleLogout = () => (
    logoutRequest().then(() => {
      setUser({
        isLogin: false,
        data: null
      });
    })
  );

  handleRegistration = (e) => {
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

  handleAddWish = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data);

    addWishRequest(data)
      .then(() => {
        toggleAddWishPopup(false);
      })
      .catch(err => console.log(err));
  };

  handleAddWishPopupOpen = () => toggleAddWishPopup(true);
  handleAddWishPopupClose = () => toggleAddWishPopup(false);
}

export default PageLayout;


// <Fragment>
//   <Header
//     isPopupOpen={isPopupOpen}
//     isAddWishPopupOpen={isAddWishPopupOpen}
//     togglePopup={togglePopup}
//     user={userInfo}
//     onLogin={handleLogin}
//     onRegistration={handleRegistration}
//     onLogout={handleLogout}
//     onAddWish={handleAddWish}
//     onAddWishPopupClose={handleAddWishPopupClose}
//     onAddWishPopupOpen={handleAddWishPopupOpen}
//     formErorrs={formErorrs}
//   />
//   <Container>
//     <div className={styles['root-container']}>
//       { children }
//     </div>
//   </Container>
// </Fragment>
