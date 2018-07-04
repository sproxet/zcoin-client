const zmq = require('zeromq')

const requester = zmq.socket('req')
requester.connect('tcp://127.0.0.1:25557')

// log out replies
requester.on('message', (msg) => {
    console.log('received message')
    console.log(JSON.parse(msg.toString()))
})

// send stringified json
requester.send(JSON.stringify({
    type: 'create',
    collection: 'send-zcoin',
    data: {
        addresses: {
            "TUAJcpmNqpg4gX4RC2ZuUN6eA34MYpgjNE": 3.5,
            "TV3f8WhYuMyMLGJuwhdU7psvmCS63yuy3t": 10                
        },
        feeperkb: 0.001
    }
}))
