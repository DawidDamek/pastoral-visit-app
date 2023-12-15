'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: ['node_modules/bootstrap/scss'],
    },

    'ember-simple-auth': {
      useSessionSetupMethod: true,
    },
  });

  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
  return app.toTree();
};
