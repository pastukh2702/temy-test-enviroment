
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./json-server/db.json');
const middlewares = jsonServer.defaults();


server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }

    next();
});

server.use(middlewares);
server.use(router);


server.listen(7000, () => {
    console.log('JSON Server is running')
});





