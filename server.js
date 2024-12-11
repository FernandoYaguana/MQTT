let isPublishing = false;
const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Conectado al broker');
    client.subscribe('test/topic', (err) => {
        if (!err && !isPublishing) {
            isPublishing = true;
            client.publish('test/topic', 'Hola Mundo desde MQTT');
        }
    });
});

client.on('message', (topic, message) => {
    console.log('Mensaje recibido:', message.toString());
});