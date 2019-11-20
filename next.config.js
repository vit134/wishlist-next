const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

module.exports = (nextConfig = {}) => {
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
  );

  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      // fix: prevents error when .less files are required by node
      if (typeof require !== 'undefined') {
        require.extensions['.less'] = file => {}; // eslint-disable-line node/no-deprecated-api
      }

      const {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions
      } = nextConfig;

      const { dev, isServer } = options;

      options.defaultLoaders.less = cssLoaderConfig(config, {
        extensions: ['less'],
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariables
            }
          }
        ]
      });

      config.module.rules.push({
        test: /\.less$/,
        use: options.defaultLoaders.less
      });

      options.defaultLoaders.css = cssLoaderConfig(config, {
        extensions: ['css'],
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '_[local]--[hash:base64:5]'
        },
        postcssLoaderOptions,
        dev,
        isServer
      });

      config.module.rules.push({
        test: /\.css$/,
        include: /\.module\.css$/,
        use: options.defaultLoaders.css
      });

      return config;
    }
  });
};
