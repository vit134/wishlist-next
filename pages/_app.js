import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { userInfoRequst } from '../src/requests';
import Layout from '../src/components/layout/layout';

const protectedRoutes = [
  '/profile',
  '/profile/settings'
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await userInfoRequst(ctx.req);
      pageProps.user = res.data;
    } catch (e) {
      pageProps.err = e;
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps, router } = this.props;
    const { user } = pageProps;

    const accessDenied = protectedRoutes.includes(router.route) && !user.isLogin;

    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <Layout user={pageProps.user}>
          {accessDenied ? (
            <div>Доступ запрещен</div>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </Container>
    );
  }
}
