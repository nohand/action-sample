const Koa = require('koa');

class App {
  constructor() {
    this._app = new Koa();
    this._init();
  }

  get app() {
    return this._app.callback();
  }

  _init() {
    this._app.use(async (ctx) => {
      ctx.status = 200;
      ctx.body = 'Hello world';
    });

  }

}

module.exports = App;