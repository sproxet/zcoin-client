const zmq = require('zeromq')

const subscriber = zmq.socket('sub')
subscriber.connect('tcp://127.0.0.1:28332')

subscriber.subscribe('address')

subscriber.on('message', (topic, message) => {
    console.log('received message from address publisher')
    console.log('topic', topic.toString())
    console.log('message', message ? JSON.parse(message.toString()) : message)
})