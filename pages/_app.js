import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { userLoginInfoRequst } from '../src/requests';
import PageLayout from '../src/components/layout/layout';

const protectedRoutes = [
  '/profile',
  '/profile/settings'
];

class MyApp extends App {
  static async getInitialProps (props) {
    const { Component, ctx } = props;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    try {
      const res = await userLoginInfoRequst(ctx.req);
      pageProps.user = res.data;
    } catch (e) {
      pageProps.err = e;
    }
    return { pageProps };
  }

  render () {
    const { Component, pageProps, router, store } = this.props;
    const { user, pageHeader = false } = pageProps;

    const accessDenied = protectedRoutes.includes(router.route) && !user.isLogin;

    return (
      <Provider store={store}>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
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
  debug: true,
  serializeState: state => {
    console.log(state);
    return state;
  }
})(MyApp);
