import React from 'react';
import NextHead from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Head = () => {
  return (
    <div>
      <NextHead>
        <title>Wishlist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
    </div>
  );
};
