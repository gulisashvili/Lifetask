var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'begining'
    },
    port: 3000,
    db: 'mongodb://localhost/begining-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'begining'
    },
    port: 3000,
    db: 'mongodb://localhost/begining-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'begining'
    },
    port: 3000,
    db: 'mongodb://localhost/begining-production'
  }
};

module.exports = config[env];
