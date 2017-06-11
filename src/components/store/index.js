/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store.prod.js');
} else {
  module.exports = require('./store.dev.js');
}
