const Koa = require('koa');
const koaBody = require('koa-body');
const dbHelper = require('./db-helper');
const apiRouter = require('./api-router');

class App {
  constructor() {
    this._app = new Koa();
    this._init();
  }

  static async tryInitial() {
    await dbHelper.tryConnect('mongodb://localhost:27017/ccrc_test');
  }

  static async tryUnload() {
    await dbHelper.close();
  }

  get app() {
    return this._app.callback();
  }

  _init() {
    this._app.use(koaBody({ jsonLimit: '10mb' }));
    this._app.use(apiRouter.routes());
  }

}

module.exports = App;