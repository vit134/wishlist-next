const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const withCss = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// module.exports = () => {
//   /* eslint-disable */
//   const lessToJS = require('less-vars-to-js')
//   const fs = require('fs')
//   const path = require('path')
//   // Where your antd-custom.less file lives
//   const themeVariables = lessToJS(
//     fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
//   )
//   // fix: prevents error when .less files are required by node
//   // if (typeof require !== 'undefined') {
//   //   require.extensions['.less'] = file => {}
//   // }

//   return withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//       modifyVars: themeVariables // make your antd custom effective
//     }
//   })
// };

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

// const withCSS = require('@zeit/next-css');

// // module.exports = withCSS({
// //   cssModules: true
// // });

// const withLess = require('@zeit/next-less')

// module.exports = () => {
//   /* eslint-disable */
//   const lessToJS = require('less-vars-to-js')
//   const fs = require('fs')
//   const path = require('path')
//   // Where your antd-custom.less file lives
//   const themeVariables = lessToJS(
//     fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
//   )
//   // fix: prevents error when .less files are required by node
//   if (typeof require !== 'undefined') {
//     require.extensions['.less'] = file => {}
//   }

//   return withCSS(
//     withLess({
//       cssLoaderOptions: {
//         cssModules: true,
//       },
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//         modifyVars: themeVariables // make your antd custom effective
//       }
//     })
//   )
// };

// const withPlugins = require('next-compose-plugins');
// const withCSS = require('@zeit/next-css');
// const withLess = require('@zeit/next-less');

// module.exports = () => {
//   // Where your antd-custom.less file lives
//   const themeVariables = lessToJS(
//     fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
//   );

//   // fix: prevents error when .less files are required by node
//   if (typeof require !== 'undefined') {
//     require.extensions['.less'] = file => {};
//   }

//   return withPlugins([
//     // [withCSS, {
//     //   cssModules: true
//     // }],
//     [withLess, {
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//         modifyVars: themeVariables // make your antd custom effective
//       }
//     }]
//   ]);
// };
