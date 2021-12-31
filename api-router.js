const Router = require('@koa/router');
const dbHelper = require('./db-helper');

const _router = new Router();
_router.prefix('/api');

_router.all('/', async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    result: 'Hello world'
  };
});

_router.post('/messages', async (ctx) => {
  const col = dbHelper.getCollection('messages')
  await col.insertOne(ctx.request.body);
  ctx.status = 200;
  ctx.body = {};
});

module.exports = _router;
