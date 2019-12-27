import React from 'react';
import App from 'next/app';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import { withRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';
import { setUserLogin } from 'domains/root/actions/user';
import PageLayout from 'containers/layout';
import { AccessDenied } from 'components/access-denied';
import './global.css';

const protectedRoutes = [
  '/profile',
  '/profile/settings',
];

class MyApp extends App {
  static async getInitialProps (props) {
    const { Component, ctx, router } = props;
    const { req, store } = ctx;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    if (!req.user) {
      await store.dispatch(setUserLogin({ isLogin: false, data: null }));
    } else {
      await store.dispatch(setUserLogin({ isLogin: true, data: req.user }));
    }

    return {
      pageProps,
      accessDenied: protectedRoutes.includes(router.pathname) && !req.user,
    };
  }

  render () {
    const { Component, pageProps = {}, store, accessDenied } = this.props;
    const { pageHeader = false } = pageProps;

    return (
      <Provider store={store}>
        <PageLayout pageHeader={pageHeader}>
          {accessDenied ? (
            <AccessDenied />
          ) : (
            <Component {...pageProps} />
          )}
        </PageLayout>
      </Provider>
    );
  }
}

export default withRouter(withRedux(makeStore, {
  storeKey: 'Wishlist',
  debug: false,
})(MyApp));
