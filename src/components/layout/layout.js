import React, { Component } from 'react';
import { Layout, PageHeader } from 'antd';
import { UserInfo } from '../user-info';
import { LoginDialog } from '../login-dialog';
import { AddWishDialog } from '../add-wish-dialog';
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
  state = {
    user: this.props.user,
    isLoginPopupOpen: false,
    isAddWishPopupOpen: false
  }

  render () {
    const { children } = this.props;
    const { isLoginPopupOpen, isAddWishPopupOpen, user } = this.state;

    return (
      <Layout className="layout">
        <Header className={styles.header}>
          <a href="/" className={styles.logo}>My Wishlist</a>
          <UserInfo
            user={user}
            onOpen={this.handleLoginPopupShow}
            onAddWishPopupOpen={this.handleAddWishPopupOpen}
            onLogout={this.handleLogout}
          />
        </Header>
        {/* <PageHeader
          style={{
            marginBottom: '20px',
            background: '#fff'
          }}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
        >
          asdasd
        </PageHeader> */}
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            { children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        <LoginDialog
          isOpen={isLoginPopupOpen}
          onLogin={this.handleLogin}
          onRegistration={this.handleRegistration}
          onClose={this.handleLoginPopupClose}
        />
        <AddWishDialog
          isOpen={isAddWishPopupOpen}
          onClose={this.handleAddWishPopupClose}
          onSubmit={this.handleAddWish}
        />
      </Layout>
    );
  }

  handleLogin = (e) => {
    e.preventDefault();

    const data = getFormFields(e.target);

    loginRequest(JSON.stringify(data))
      .then(({ data }) => {
        this.setUser(data);
        this.handleLoginPopupClose();
      })
      .catch(e => console.warn(e));
  };

  handleLogout = () => (
    logoutRequest().then(() => {
      this.setUser({
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
          this.setUser({
            isLogin: true,
            data: user
          });
        } else {
          console.log(error);
          // setFormErrors({
          //   [error.name]: error.message
          // });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleAddWish = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    addWishRequest(data)
      .then(this.handleAddWishPopupClose)
      .catch(err => console.log(err));
  };

  setUser = data => this.setState({ user: data })

  handleAddWishPopupOpen = () => this.setState({ isAddWishPopupOpen: true });
  handleAddWishPopupClose = () => this.setState({ isAddWishPopupOpen: false });
  handleLoginPopupShow = () => this.setState({ isLoginPopupOpen: true });
  handleLoginPopupClose = () => this.setState({ isLoginPopupOpen: false });
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
