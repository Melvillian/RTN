// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { gameStart } = require('./controllers/gameStart');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/', [], gameStart);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
