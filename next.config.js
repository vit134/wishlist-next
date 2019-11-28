const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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

    defaultLoaders.css = cssLoaderConfig(config, {
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

    return config;
  },
});
