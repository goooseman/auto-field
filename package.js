Package.describe({
  name: 'auto-field',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/goooseman/auto-field',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('mongo');
  api.use('tracker');
  api.use('matb33:collection-hooks@0.7.15');
  api.addFiles('auto-field.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('auto-field');
  api.addFiles('auto-field-tests.js');
});
