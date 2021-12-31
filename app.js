const Koa = require('koa');
const apiRouter = require('./api-router');

class App {
  constructor() {
    this._app = new Koa();
    this._init();
  }

  get app() {
    return this._app.callback();
  }

  _init() {
    this._app.use(apiRouter.routes());
  }

}

module.exports = App;