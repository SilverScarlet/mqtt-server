var mosca = require('mosca');
var mqtt = require('mqtt')
var connectionUtil = require('./controller/connection_controller')
var settings = {
    port: 1845
}

var broker = new mosca.Server(settings)

broker.on('clientConnected', function(client) {
    console.log('client connected', client.id);
    connectionUtil.update_connection(client.id,1)
});

broker.on('clientDisconnected', function(client) {
    console.log('client disconnected', client.id);
    connectionUtil.update_connection(client.id,0)
}); 


broker.on('ready', () => {
    console.log('Broker is Ready.')
})

broker.on('published', function (packet, client) {
    console.log('Published', packet.payload.toString())
})


var mqtt = require('mqtt');

const MQTT_SERVER = "192.168.1.190";
const MQTT_PORT = "1845";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,

});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");

});



client.on('message', function (station_01, message) {
    // message is Buffer
    console.log(message.toString());
});
