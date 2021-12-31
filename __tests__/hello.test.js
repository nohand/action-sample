const hello = require('../hello');

describe('hello test', () => {
  test('shoule return world string', () => {
    expect(hello()).toBe('world');
  });
});
