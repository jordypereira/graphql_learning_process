const assert = require('assert');
const app = require('../../src/app');

describe('\'2222222\' service', () => {
  it('registered the service', () => {
    const service = app.service('2222222');

    assert.ok(service, 'Registered the service');
  });
});
