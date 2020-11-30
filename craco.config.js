const CracoLessPlugin = require('craco-less');

// 定制主题
// 所有可定义配置 https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
