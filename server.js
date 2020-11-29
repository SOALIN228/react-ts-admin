const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const router = require('koa-router')();
const Mock = require('./mock/index');

// 支持多种传数据格式
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
// 返回数据转成json 格式
app.use(json());

router.get(/\/mock.*/, (ctx, next) => {
  const res = Mock.mockGetApi({ url: ctx.url, body: ctx.query });
  ctx.body = res;
});
router.post(/\/mock.*/, (ctx, next) => {
  const res = Mock.mockPostApi({ url: ctx.url, body: ctx.request.body });
  ctx.body = res.data;
  ctx.status = 404;
});

app.use(router.routes(), router.allowedMethods());

app.listen(3001);
