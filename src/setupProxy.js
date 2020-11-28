const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/business',
    createProxyMiddleware({
      target: 'http://59.202.39.110:8300',
      changeOrigin: true,
    })
  );
};
