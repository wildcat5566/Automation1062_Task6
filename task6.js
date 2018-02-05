var express = require('express');
var app = express();
var mysql = require('mysql');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
require('events').EventEmitter.prototype._maxListeners = 100;

//State variables for led, button and color.
var ledstate = 0;
var buttonstate, colorstate;

//TODO: Create remote connection to mysql on Raspberry Pi.
var conn = mysql.createConnection({

});

conn.connect(function(err){
    console.log('Connection established');
    if(err) throw err;

        setInterval(function () {
            
            call();
            //This is the main function, call & update once per second.
            //Query and update state information in database.

        }, 1000);

    conn.release;
});

function call()
{
    
    // TODO: query from database

    //socket io: enable ACTIVE event handling & UPDATE variables for html page
    io.on('connection', function(client) {

        //update button and color state to html page every iteration.
        io.emit('buttonUpdate', buttonstate);
        io.emit('colorUpdate', colorstate);

        // TODO: when led control buttons are clicked
        client.on('OnClicked', function(data) {

        });
        client.on('OffClicked', function(data) {

        });
    });
}

app.use(express.static(__dirname));
app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/task6.html');
});
server.listen(8080, function(){
    console.log('listening on *:8080');
});
