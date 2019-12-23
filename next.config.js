const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
);

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer, dev, defaultLoaders }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }

    defaultLoaders.cssModules = cssLoaderConfig(config, {
      extensions: ['css'],
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '_[local]--[hash:base64:5]',
      },
      dev,
      isServer,
    });

    config.module.rules.push({
      test: /\.css$/,
      include: /\.module\.css$/,
      use: defaultLoaders.cssModules,
    });

    defaultLoaders.css = cssLoaderConfig(config, {
      extensions: ['css'],
      dev,
      isServer,
    });

    config.module.rules.push({
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: defaultLoaders.css,
    });

    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer
            ? '../analyze/server.html'
            : './analyze/client.html',
        })
      );
    }

    config.plugins.push(
      new MomentLocalesPlugin({
        localesToKeep: ['ru'],
      })
    );

    /* eslint-disable dot-notation */
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['containers'] = path.join(__dirname, 'src/containers');
    config.resolve.alias['requests'] = path.join(__dirname, 'src/requests');
    config.resolve.alias['domains'] = path.join(__dirname, 'domains');
    config.resolve.alias['helpers'] = path.join(__dirname, 'src/helpers');
    /* eslint-enable dot-notation */

    return config;
  },
  env: {
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    APP_URL: process.env.APP_URL,
    BLA: process.env.BLA,
  },
});
