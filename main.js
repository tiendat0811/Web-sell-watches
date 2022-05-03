//khai báo căn bản
const express = require('express')
const path = require('path');
const session = require('express-session')
const bodyParser = require('body-parser')
//socket
const app = express();


//set view và session
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.resolve('./public')));
app.use(session({
    secret: "test",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


//routes
app.use('/', require('./routes/index'))


const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('notification', (msg) => {
        io.emit('notification', msg);
    });
});

//run server
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))