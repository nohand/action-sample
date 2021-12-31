const Router = require('@koa/router');

const _router = new Router();
_router.prefix('/api');

_router.all('/', async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    result: 'Hello world'
  };
});

module.exports = _router;
