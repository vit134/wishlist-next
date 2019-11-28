import React from 'react';
import App from 'next/app';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { setUserLogin } from '../domains/root/actions/user-login';
import PageLayout from '../src/containers/layout';

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

    return { pageProps };
  }

  render () {
    console.log(process.env.HEROKU_APP_NAME);
    console.log(process.env.APP_URL);
    const { Component, pageProps, router, store } = this.props;
    const { user = {}, pageHeader = false } = pageProps;

    const accessDenied = protectedRoutes.includes(router.route) && !user.isLogin;

    return (
      <Provider store={store}>
        <PageLayout user={user} pageHeader={pageHeader}>
          {accessDenied ? (
            <div>Доступ запрещен</div>
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
