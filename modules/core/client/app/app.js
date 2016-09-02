(function () {
  'use strict';

  // Load app requirements

  var angular = require('angular');

  require('angular-animate');
  require('angular-bootstrap');
  require('angular-resource');
  require('angular-ui-router');
  require('bootstrap');
  require('ng-file-upload');
  // require('ng-img-crop'); // See https://github.com/meanjs/mean/pull/1443#issuecomment-244402415

  require('./init');
  require('./config');
  require('../../../articles/client/articles.client.module');
  require('../../../chat/client/chat.client.module');
  require('../../../users/client/users.client.module');

});
