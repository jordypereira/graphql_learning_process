const graphql = require('./graphql/graphql.service.js');
const taco = require('./taco/taco.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(taco);
  app.configure(graphql);
};
