// We're using the hapi.js server framework
const Hapi = require('hapi');

// Always start server on 127.0.0.1, default port to 3000 unless env set
const server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ host: '0.0.0.0', port: process.env.PORT || 3000 });

require('dotenv').config();

// Required to setup views
//  js and css get written in uncompiled/{respective_folder} first, then run `gulp` to compile into public
//  views are in the views/ folder, all view folders should have a corresponding controller, except for
//  special folders like shared.

require('babel-core/register')({
  plugins: ['transform-react-jsx']
});

server.register(require('inert'), () => { });
server.register(require('vision'), (err) => {
  server.views({
    engines: {
      jsx: require('hapi-react-views')
    },
    compileOptions: {}, // optional
    relativeTo: __dirname,
    path: 'views'
  });
});

server.register({
  register: require('good'),
  options: {
    reporters: {
      console: [{
            module: 'good-console',
            args: [{ log: '*', response: '*' }]
        },
      ]
    }
  }
}, function (err) { });

// Configure routes
const routes = require('./routes')(server);

// Start the server
server.start(() => {
  console.log('Server running at:', server.info.uri);
});