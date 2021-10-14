const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://hero-api-super-hero.vercel.app',
      changeOrigin: true,
    })
  );
};
