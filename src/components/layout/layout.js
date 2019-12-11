import React, { Component } from 'react';
import { Layout, PageHeader } from 'antd';
import UserInfo from 'containers/user-info';
import LoginDialog from 'containers/login-dialog';
import AddWishDialog from 'containers/add-wish-dialog';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;

class PageLayout extends Component {
  render () {
    const {
      children,
      pageHeader,
    } = this.props;

    return (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.container}>
            <a href="/" className={styles.logo}>My Wishlist</a>
            <UserInfo />
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
        <AddWishDialog />
      </Layout>
    );
  }
}

export default PageLayout;
