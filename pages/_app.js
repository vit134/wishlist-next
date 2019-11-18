import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { userLoginInfoRequst } from '../src/requests';
import PageLayout from '../src/components/layout/layout';

const protectedRoutes = [
  '/profile',
  '/profile/settings'
];

export default class MyApp extends App {
  static async getInitialProps (appContext) {
    const appProps = await App.getInitialProps(appContext);

    try {
      const res = await userLoginInfoRequst(appContext.req);
      appProps.user = res.data;
    } catch (e) {
      appProps.err = e;
    }

    return { ...appProps };
  }

  render () {
    const { Component, pageProps, router } = this.props;
    const { user, pageHeader = false } = pageProps.data;

    const accessDenied = protectedRoutes.includes(router.route) && !user.isLogin;

    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <PageLayout user={pageProps.user} pageHeader={pageHeader}>
          {accessDenied ? (
            <div>Доступ запрещен</div>
          ) : (
            <Component {...pageProps} />
          )}
        </PageLayout>
      </>
    );
  }
}
