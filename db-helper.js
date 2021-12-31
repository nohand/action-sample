const mongodb = require('mongodb');

/** @type {mongodb.MongoClient} */
let _client = undefined;
/** @type {mongodb.Db} */
let _db = undefined;

class DbHelper {

  static async tryConnect(uri, dbName) {
    _client = new mongodb.MongoClient(uri);
    await _client.connect();
    _db = _client.db(dbName);
  }

  /** @returns {mongodb.Collection} */
  static getCollection(name) {
    return _db.collection(name);
  }

  static async close() {
    await _client.close();
  }
}

module.exports = DbHelper;
