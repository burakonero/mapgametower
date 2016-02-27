
var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var usernumm = 0;
var usernumm1 = 0;
var usernum1 = [];

app.use(express.static(__dirname + '/public'));


server.listen((process.env.OPENSHIFT_NODEJS_PORT || 5000),ip);

//
/*
app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});
*/
io.sockets.on('connection', function(socket){
	
	
	var endpoint = socket.manager.handshaken[socket.id].address;
	console.log('___New connection from ' + endpoint.address + ':' + endpoint.port);
	
	usernumm1++;
	usernumm++;
	usernum1[usernumm1] =  socket.id;
	var xx1 = Math.floor((Math.random() * 36) + 1);
	var xx2 = Math.floor((Math.random() * 30) + 37);
	var xx3 = Math.floor((Math.random() * 26) + 66);
	var xx4 = Math.floor((Math.random() * 35) + 92);
	io.sockets.emit('usernum', {u1: usernumm1, uo:usernumm, ro: findroom(), unu: findusernum(), rand1: xx1, rand2: xx2, rand3: xx3, rand4: xx4});
	
	
	console.log('___User '+usernumm+' "usernum1" = '+usernumm1+' has connected and its usercode is : '+findusernum()+' its id is : '+socket.id);
	
	

	socket.on('button1socket', function(){
		
		io.sockets.emit('button1f', findusernum() );
		console.log('___User '+findusernum()+' pressed a button');
		 
	});
	
	socket.on('buton33', function(data){
		
		io.sockets.emit('buton331', findusernum() );
		 
	});
	
	socket.on('disselectAll1', function(){
		
		io.sockets.emit('disselectAllf', {u1: findusernum(), uo:usernumm, ro: findroom()} );
		 
	});
	
	socket.on('sendmessageg1', function(data){
		
		io.sockets.emit('sendmessagegf', data);
		 
	});
	
	socket.on('sendmessager', function(data){
		
			
		if(data.room2 == findroom()){io.sockets.emit('sendmessagerf', data);}else{}
		
		 
	});
	
	socket.on('attackbuttonsocket', function(data){
		if(data.ua1 == 0){
			var randxs = Math.floor((Math.random() * 10) + 1);
		if(randxs <= 7){xx=1;}else{xx=2;}}
		else{
			var xx = Math.floor((Math.random() * 2) + 1);
		}
			
		if(data.r1 == findroom()){io.sockets.emit('attackbuttonsocketf', {winorloose: xx, realroom: findroom(), user1: findusernum() });}else{}
		
		
		 
	});
	
	
	socket.on('disconnect', function () {
		usernumm--;
		//io.sockets.emit('usernum', {u1: usernumm1, uo:usernumm});
		//USTTEKI SADECE ONLINE SAYISINI DUSURMEYE YARIYORDU , DUSURME ISINI AYARLA
		console.log('___Client disconnected now ' +usernumm+ ' player is online ');
			
			
		io.sockets.emit('disconnuser', {u1: findusernum(), uo:usernumm, ro: findroom()});
		
	});
	
	
	socket.on('getbrowser1', function (data) {
		var a=findusernum();
		io.sockets.emit('getbrowser1f', a );
	});
	
	
	socket.on('getroom', function (data) {
			
		if(data == findroom()){io.sockets.emit('getroomf', findroom() );}else{}
		
	});
	
	
	socket.on('imgclick', function (data) {
		
			
			if(data.numroom == findroom()){
			io.sockets.emit('imgclickf', {numa: data.num, realroom2: findroom()});
			console.log('___IMG '+data.num+' has been clicked at room '+data.numroom);}else{}
		
		
		
	});
	
	io.sockets.emit('buttonsavaible', findusernum() );
	
	
	//finds number of online users
	function findusernum(){
		for(var i = 0; i<parseInt(usernum1.length)+10;i++){
			if(usernum1[i] == socket.id ){return i;}else{}
			}
	}
	
	//finds room number of client
	function findroom(){
			var roomreal2 = 0;
			var usera2 = findusernum();
			for(;usera2 > 0;usera2--){
			if(usera2%4 - 1 == 0){roomreal2++;}else{}}
			return roomreal2;
	}
	
	
});

