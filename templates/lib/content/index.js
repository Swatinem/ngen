module.exports = process.env.{{MODULE}}_COV
  ? require('./lib-cov')
  : require('./lib');
