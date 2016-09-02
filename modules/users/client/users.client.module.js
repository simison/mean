(function (app) {
  'use strict';

  require('./services/authentication.client.service');
  require('./services/password-validator.client.service');
  require('./services/users.client.service');
  require('./directives/password-validator.client.directive');
  require('./directives/password-verify.client.directive');
  require('./directives/users.client.directive');
  require('./controllers/admin/list-users.client.controller');
  require('./controllers/admin/user.client.controller');
  require('./controllers/settings/change-password.client.controller');
  require('./controllers/settings/change-profile-picture.client.controller');
  require('./controllers/settings/edit-profile.client.controller');
  require('./controllers/settings/manage-social-accounts.client.controller');
  require('./controllers/settings/settings.client.controller');
  require('./controllers/authentication.client.controller');
  require('./controllers/password.client.controller');
  require('./config/users-admin.client.menus');
  require('./config/users-admin.client.routes');
  require('./config/users.client.routes');

  app.registerModule('users');
  app.registerModule('users.admin');
  app.registerModule('users.admin.routes', ['ui.router', 'core.routes', 'users.admin.services']);
  app.registerModule('users.admin.services');
  app.registerModule('users.routes', ['ui.router', 'core.routes']);
  app.registerModule('users.services');
}(ApplicationConfiguration));
