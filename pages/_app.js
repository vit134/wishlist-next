import React from 'react';
import App from 'next/app';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { setUserLogin } from 'domains/root/actions/user-login';
import PageLayout from 'containers/layout';
import { AccessDenied } from 'components/access-denied';

const protectedRoutes = [
  '/profile',
  '/profile/settings',
];

class MyApp extends App {
  static async getInitialProps (props) {
    const { Component, ctx } = props;
    const { req, store } = ctx;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    if (!req.user) {
      await store.dispatch(setUserLogin({ isLogin: false, data: null }));
    } else {
      await store.dispatch(setUserLogin({ isLogin: true, data: req.user }));
    }

    return {
      pageProps,
      accessDenied: protectedRoutes.includes(req.url) && !req.user,
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

export default withRedux(makeStore, {
  storeKey: 'Wishlist',
  debug: false,
})(MyApp);
