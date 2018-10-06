const assert = require('assert');
const app = require('../../src/app');

describe('\'taco\' service', () => {
  it('registered the service', () => {
    const service = app.service('taco');

    assert.ok(service, 'Registered the service');
  });
});
