var firmata = require('firmata');
var cosm = require('cosm');
client = new cosm.Cosm('yourkey'),
        feed = new cosm.Feed(cosm, {id: 90949}),
        stream = new cosm.Datastream(client, feed, {id: "sensor"})

var analogpin = 0;

var board = new firmata.Board('COM6',function(){
  board.pinMode(analogpin, board.MODES.INPUT);
  board.analogRead(analogpin, function(data){
		if(data < 1023){
			console.log(data);
			stream.addPoint(data);
		}
  });
});  



        
    