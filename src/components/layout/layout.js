import React, { Component } from 'react';
import { Layout, PageHeader } from 'antd';
import UserInfo from 'containers/user-info';
import LoginDialog from 'containers/login-dialog';
import AddWishDialog from '../add-wish-dialog';
import { addWishRequest } from 'requests';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;

class PageLayout extends Component {
  state = {
    user: this.props.user,
    isAddWishPopupOpen: false,
  }

  render () {
    const {
      children,
      pageHeader,
    } = this.props;
    const { isAddWishPopupOpen } = this.state;

    return (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.container}>
            <a href="/" className={styles.logo}>My Wishlist</a>
            <UserInfo onAddWishPopupOpen={this.handleAddWishPopupOpen} />
          </div>
        </Header>
        {pageHeader && (
          <PageHeader
            className={styles['page-header']}
            title={pageHeader.title}
            subTitle={pageHeader.subtitle}
            avatar={{ src: pageHeader.avatar }}
          >
          </PageHeader>
        )}
        <Content className={styles.content}>
          <div className={styles.body}>
            { children }
          </div>
        </Content>
        <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
        <LoginDialog />
        <AddWishDialog
          isOpen={isAddWishPopupOpen}
          onClose={this.handleAddWishPopupClose}
          onSubmit={this.handleAddWish}
        />
      </Layout>
    );
  }

  handleAddWish = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    addWishRequest(data)
      .then(this.handleAddWishPopupClose)
      .catch(err => console.log(err));
  };

  handleAddWishPopupOpen = () => this.setState({ isAddWishPopupOpen: true });
  handleAddWishPopupClose = () => this.setState({ isAddWishPopupOpen: false });
}

export default PageLayout;
