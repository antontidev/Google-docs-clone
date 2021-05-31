const io = require('socket.io')(3001, {
    cors: {
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    socket.on('send-changes', delta => {
        socket.broadcast.emit('receive-changes', delta)
        console.log(delta)
    })
})
