const app = require('http').createServer(requestHandler);
const io = require('socket.io')(app);

const api = require('./utils/api');

const layout = require('./index.html');

const port = 3000;

function requestHandler(req, res) {
  res.setHeader('Content-Type', 'text/html');

  res.write(
    layout()
  )
  res.end();
}

io.on('connection', (socket) => {
  socket.on('new_message', (msj) => {
    console.log(msj)
    api.getRest(msj.message).then((res) => {
      console.log(res);
      socket.emit('message', {message: res});
    })
  })
})

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
})
