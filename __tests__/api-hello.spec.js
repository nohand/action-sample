const request = require('supertest');
const BackendApp = require('../app');

describe('Hello api spec', () => {
  /** @type {request.SuperAgentTest} */
  let client;
  beforeAll(async () => {
    client = request.agent(new BackendApp().app);
  });
  afterAll(async () => {

  });
  test('should get response success', async () => {
    const res = await client
      .get('/')

    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello world');

    
      
  });
});
