'use strict';

const mock = require('egg-mock');

describe('test/tencentcloud.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencentcloud-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tencentcloud')
      .expect(200);
  });
});
