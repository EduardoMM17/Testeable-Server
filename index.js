const createServer = require('./server');

const server = createServer();
const port = 5000;

server.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`);
})