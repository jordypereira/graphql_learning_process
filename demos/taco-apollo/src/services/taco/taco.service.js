// Initializes the `taco` service on path `/taco`
const createService = require('feathers-nedb');
const createModel = require('../../models/taco.model');
const hooks = require('./taco.hooks');

module.exports = function(app) {
  const Model = createModel(app);

  const options = {
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/taco', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('taco');

  service.hooks(hooks);
};
