const request = require('supertest');
const mongodb = require('mongodb');
const BackendApp = require('../app');

describe.skip('Add message api spec', () => {
  /** @type {request.SuperAgentTest} */
  let client;
  /** @type {mongodb.MongoClient} */
  let mClient;
  /** @type {mongodb.Db} */
  let db;
  beforeAll(async () => {
    mClient = new mongodb.MongoClient('mongodb://localhost:27017/ccrc_test');
    await mClient.connect();
    db = mClient.db('ccrc_test');
    await db.collection('messages').deleteMany({});
    await BackendApp.tryInitial();
    client = request.agent(new BackendApp().app);
  });
  afterAll(async () => {
    await db.collection('messages').deleteMany({});
    await mClient.close();
    await BackendApp.tryUnload();
  });
  test('should get response success', async () => {
    const res = await client
      .post('/api/messages')
      .send({
        message: 'I am xxxhand',
        type: 'text',
      })

    expect(res.status).toBe(200)
    const col = db.collection('messages');
    const docs = await col.find().toArray();
    expect(docs.length).toBe(1);
    const [nMsg] = docs;
    expect(nMsg.message).toBe('I am xxxhand');
    expect(nMsg.type).toBe('text');

  });
});
