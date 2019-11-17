import React, { Component } from 'react';
import { Layout } from 'antd';
import { UserInfo } from '../user-info';
import { LoginDialog } from '../login-dialog';
import { AddWishDialog } from '../add-wish-dialog';
import { loginRequest, logoutRequest, registrationRequest, addWishRequest } from '../../requests';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;

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

  handleLogin = (data) => loginRequest(JSON.stringify(data))
    .then(({ data }) => {
      if (!data.error) {
        this.setUser(data, this.handleLoginPopupClose);
        return data;
      }

      return { error: data.error };
    })
    .catch(e => {
      throw new Error(e);
    });

  handleLogout = () => logoutRequest()
    .then(() => {
      this.setUser({
        isLogin: false,
        data: null
      });
    })

  handleRegistration = data => registrationRequest(JSON.stringify(data))
    .then(({ data }) => {
      if (!data.error) {
        this.setUser({
          isLogin: true,
          data: data.user
        }, this.handleLoginPopupClose);
        return data;
      }
      return { error: data.error };
    })
    .catch((error) => {
      throw new Error(error);
    });

  handleAddWish = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    addWishRequest(data)
      .then(this.handleAddWishPopupClose)
      .catch(err => console.log(err));
  };

  setUser = (data, cb) => this.setState({ user: data }, cb && cb);

  handleAddWishPopupOpen = () => this.setState({ isAddWishPopupOpen: true });
  handleAddWishPopupClose = () => this.setState({ isAddWishPopupOpen: false });
  handleLoginPopupShow = () => this.setState({ isLoginPopupOpen: true });
  handleLoginPopupClose = () => this.setState({ isLoginPopupOpen: false });
}

export default PageLayout;
