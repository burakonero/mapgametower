jQuery(function()
                            {
             jQuery('#ImageMap1').maphilight();
          });
		  
	var a = 0;
	var b = 0;
	var bb = 0;var ax;var ay;var usercode;var room = 0;
	var ran1,ran2,ran3,ran4;
	var roomorglobal = 1;
	var isp1left = 0;
	var isp2left = 0;
	var isp3left = 0;
	var isp4left = 0;	
	
	jQuery(function($){
		
			var socket = io.connect();
			var $hone1 = $('#onlineplayertext');
			var $butondene1 = $('#butondene1');
	
			var check1 = document.getElementById("che");
			var check2 = document.getElementById("che2");
			var check3 = document.getElementById("che3");
			var check4 = document.getElementById("che4");
			
			document.getElementById("player1").style.visibility='hidden';
			document.getElementById("player2").style.visibility='hidden';
			document.getElementById("player3").style.visibility='hidden';
			document.getElementById("player4").style.visibility='hidden';
			
			document.getElementById("attackbutton").style.visibility='hidden';
			
			document.getElementById("arrow1").style.visibility='hidden';
			document.getElementById("arrow2").style.visibility='hidden';
			document.getElementById("arrow3").style.visibility='hidden';
			document.getElementById("arrow4").style.visibility='hidden';
			
			document.getElementById("divreg").style.visibility = "hidden";
			
			
			
			// TODO
			// **************************************** HATA BURADA ==================================================================
			// cok hizli girildiginde "usercode" larin hepsi 4 oluyor
			
			setTimeout(function(){
				socket.emit('getbrowser1',{});
				usercode = ax;
				var usera = usercode;
				for(;usera>0;usera--){
					if(usera%4-1 == 0){room++;}
				}
				document.getElementById("h11").innerHTML = "You are Player "+usercode%4+"";
									
			}, 1000); 
					
			
					
			socket.emit('getbrowser1',{});
			socket.on('getbrowser1f', function(data){
				ax = data;
				
				});
			
			// ========================================================================================
			socket.on('getroomf', function(data){
				if(data == room){document.getElementById("playerwho").innerHTML = "room is :"+data+"--"+usercode;}else{}
				
				});
				
			socket.on('disconnuser', function(data){
				if(data.ro == room){
					//document.getElementById("h11").innerHTML = ""+data.u1+"-"+data.ro;
					
					if(data.u1 % 4 == 1){isp1left = 1;}
					else if(data.u1 % 4 == 2){isp2left = 1;}
					else if(data.u1 % 4 == 3){isp3left = 1;}
					else if(data.u1 % 4 == 0){isp4left = 1;}
					
					// BURADAKI ZAMAN KAYNAKLI BUG OLUSABILIR
					// SERVERDA FARKLI HIZLARDA CALISACAGI ICIN BUG OLMA IHTIMALI VAR
					setTimeout(function(){
					if(data.u1 % 4 == 1 && check1.checked == true){socket.emit('attackbuttonsocket',room);}
					else if(data.u1 % 4 == 2 && check2.checked == true){socket.emit('attackbuttonsocket',room);}
					else if(data.u1 % 4 == 3 && check3.checked == true){socket.emit('attackbuttonsocket',room);}
					else if(data.u1 % 4 == 0 && check4.checked == true){socket.emit('attackbuttonsocket',room);}
					}, 900); 
					
					
					document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML+ "\n^^Player "+data.u1%4+" has left the game^^";
					
					}else{}
				
				});
			
			socket.on('button1f', function(data){
				buton11();
				if(document.getElementById("che").checked == true && data == 1 ){
					b = 1;
					document.getElementById("playerwho").innerHTML = "player 1 played and the browser number is "+data;
				}else if(document.getElementById("che2").checked == true && data == 2){
					b = 2;
					document.getElementById("playerwho").innerHTML = "player 2 played and the browser number is "+data;}
				else{
					b=data;
					document.getElementById("playerwho").innerHTML = "player unknown played and the browser number is "+data;}
					
					//------
						if(usercode == 1 && check1.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else if(usercode == 2 && check2.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else if(usercode == 3 && check3.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else if(usercode == 4 && check4.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else{document.getElementById("attackbutton").style.visibility='hidden';}
						
					//------
					
						if(check1.checked == true){
							document.getElementById("arrow1").style.visibility='visible';
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';}
						else if(check2.checked == true){
							document.getElementById("arrow2").style.visibility='visible';
							document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';}
						else if(check3.checked == true){
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='visible';}
						else if(check4.checked == true){
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='visible';}
						else{document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';}

			});
			
				
			var buton1 = document.getElementById("buton1");
			buton1.addEventListener('click',function(){
				socket.emit('button1socket',{});
			
				if(b == 1){}
				else if(b == 2){}
				else{}
				
			});
			
			var butondene1 = document.getElementById("butondene1");
			butondene1.addEventListener('click',function(){
			
				socket.emit('getroom',room);
				
			});
			
			var attackbutton = document.getElementById("attackbutton");
			attackbutton.addEventListener('click',function(){
						if (team1 == 0){isp1left = 1;}else{}
						if(team2 == 0){isp2left = 1;}else{}
						if(team3 == 0){isp3left = 1;}else{}
						if(team4 == 0){isp4left = 1;}else{}
			if( (usercode%4 == 1 && check1.checked == true) ||(usercode%4 == 2 && check2.checked == true) || (usercode%4 == 3 && check3.checked == true) || (usercode%4 == 0 && check4.checked == true) ){
				socket.emit('attackbuttonsocket',room);
						
				
				setTimeout(function(){
						if(check1.checked == true && isp1left == 1 ){socket.emit('attackbuttonsocket',room);}
						
						if(check2.checked == true && isp2left == 1 ){socket.emit('attackbuttonsocket',room);}
						
						if(check3.checked == true && isp3left == 1 ){socket.emit('attackbuttonsocket',room);}
						
						if(check4.checked == true && isp4left == 1 ){socket.emit('attackbuttonsocket',room);}
				}, 300); 		
				
			}else{
				errortext.className = "errortext";document.getElementById("errortext").innerHTML = "It is not your turn !";
				errortext.className = "errortextop";}	
				
				
						
				
			});
			
			var globaltext = document.getElementById("globaltext");
			globaltext.addEventListener('click',function(){
					
				roomorglobal = 1;
				document.getElementById("messagesg").style.visibility = "visible";
				document.getElementById("messagesr").style.visibility = "hidden";
				document.getElementById("globaltext").src = "countries/global3.png";
				
			});
			
			var roomtext = document.getElementById("roomtext");
			roomtext.addEventListener('click',function(){
					
				roomorglobal = 2;
				document.getElementById("messagesg").style.visibility = "hidden";
				document.getElementById("messagesr").style.visibility = "visible";
				document.getElementById("roomtext").src = "countries/room3.png";
			});
			
			var sendbutton = document.getElementById("sendbutton");
			sendbutton.addEventListener('click',function(){
			
					var input = $("input[name='checkListItem']").val();
					if(input == "/c"){document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML + "\nTo make ally: \tally <player number>\nTo make asd: \t asd some code";}
					else if(input == "/console"){document.getElementById("divdene").style.visibility = "visible";}
					else{}
					$("input[name='checkListItem']").val('');
					if(roomorglobal==1){
					socket.emit('sendmessageg1',{input1: input, user1: usercode});}
					else{socket.emit('sendmessager',{input2: input, user2: usercode, room2: room});}
					
					setTimeout(function(){
					document.getElementById("messagesg").scrollTop = document.getElementById("messagesg").scrollHeight;
					document.getElementById("messagesr").scrollTop = document.getElementById("messagesr").scrollHeight;
					}, 10); 
					
			});
			
			var closedivreg = document.getElementById("closedivreg");
			closedivreg.addEventListener('click',function(){
			
				 document.getElementById("divreg").style.visibility = "hidden";
					
			});
			
			var hideconsole = document.getElementById("hideconsole");
			hideconsole.addEventListener('click',function(){
			
				 document.getElementById("divdene").style.visibility = "hidden";
					
			});
			
			document.getElementById("player1").addEventListener('click',function(){
			
				document.getElementById("usercard1").style.visibility = "visible";
				
			});
			/*
			var player2c = document.getElementById("player2");
			player2c.addEventListener('click',function(){
			
				if(document.getElementById("usercard2").style.visibility == "hidden"){document.getElementById("usercard2").style.visibility = "visible";}
				else(){document.getElementById("usercard2").style.visibility = "hidden";}
				
			});
			
			var player3c = document.getElementById("player3");
			player3c.addEventListener('click',function(){
			
				if(document.getElementById("usercard3").style.visibility == "hidden"){document.getElementById("usercard3").style.visibility = "visible";}
				else(){document.getElementById("usercard3").style.visibility = "hidden";}
				
			});
			
			var player4c = document.getElementById("player4");
			player4c.addEventListener('click',function(){
			
				if(document.getElementById("usercard4").style.visibility == "hidden"){document.getElementById("usercard4").style.visibility = "visible";}
				else(){document.getElementById("usercard4").style.visibility = "hidden";}
				
			});
			
			*/
			socket.on('sendmessagegf', function(data){
			
				var roomreal4 = 0;
				var usera4 = data.user1;
				for(;usera4 > 0;usera4--){
				if(usera4%4 - 1 == 0){roomreal4++;}}
				
				if(data.user1%4 == 1){
				document.getElementById("playertool").innerHTML = "PLAYER1(r"+roomreal4+") : ";
				document.getElementById("playertool").style.color = "red";
				}else if(data.user1%4 == 2){
				document.getElementById("playertool").innerHTML = "PLAYER2(r"+roomreal4+") : ";
				document.getElementById("playertool").style.color = "blue";}
				else if(data.user1%4 == 3){
				document.getElementById("playertool").innerHTML = "PLAYER3(r"+roomreal4+") : ";
				document.getElementById("playertool").style.color = "blue";}
				else if(data.user1%4 == 0){
				document.getElementById("playertool").innerHTML = "PLAYER4(r"+roomreal4+") : ";
				document.getElementById("playertool").style.color = "blue";}
				else{}
				document.getElementById("messagesg").innerHTML = document.getElementById("messagesg").innerHTML+ "\n"+document.getElementById("playertool").innerHTML;
				document.getElementById("messagesg").innerHTML = document.getElementById("messagesg").innerHTML+ " "+data.input1;
				});
				
			socket.on('sendmessagerf', function(data){
				if(data.room2 == room){
				if(data.user2%4 == 1){
				document.getElementById("playertool").innerHTML = "PLAYER1 : ";
				document.getElementById("playertool").style.color = "red";
				}else if(data.user2%4 == 2){
				document.getElementById("playertool").innerHTML = "PLAYER2 : ";
				document.getElementById("playertool").style.color = "blue";}
				else if(data.user2%4 == 3){
				document.getElementById("playertool").innerHTML = "PLAYER3 : ";
				document.getElementById("playertool").style.color = "blue";}
				else if(data.user2%4 == 0){
				document.getElementById("playertool").innerHTML = "PLAYER4 : ";
				document.getElementById("playertool").style.color = "blue";}
				else{}
				
				document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML+ "\n"+document.getElementById("playertool").innerHTML;
				document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML+ " "+data.input2;
				
				
				}else{}
				});
			
			
			document.getElementById("area1").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 1, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 1, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 1, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 1, numroom: room});}else{}
			});
			document.getElementById("area2").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 2, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 2, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 2, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 2, numroom: room});}else{}
			});
			document.getElementById("area3").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 3, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 3, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 3, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 3, numroom: room});}else{}
			});
			document.getElementById("area4").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 4, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 4, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 4, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 4, numroom: room});}else{}
			});
			document.getElementById("area5").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 5, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 5, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 5, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 5, numroom: room});}else{}
			});
			document.getElementById("area6").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 6, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 6, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 6, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 6, numroom: room});}else{}
			});
			document.getElementById("area7").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 7, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 7, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 7, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 7, numroom: room});}else{}
			});
			document.getElementById("area8").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 8, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 8, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 8, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 8, numroom: room});}else{}
			});
			document.getElementById("area9").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 9, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 9, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 9, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 9, numroom: room});}else{}
			});
			document.getElementById("area10").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 10, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 10, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 10, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 10, numroom: room});}else{}
});
document.getElementById("area11").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 11, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 11, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 11, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 11, numroom: room});}else{}
});
document.getElementById("area12").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 12, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 12, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 12, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 12, numroom: room});}else{}
});
document.getElementById("area13").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 13, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 13, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 13, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 13, numroom: room});}else{}
});
document.getElementById("area14").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 14, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 14, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 14, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 14, numroom: room});}else{}
});
document.getElementById("area15").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 15, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 15, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 15, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 15, numroom: room});}else{}
});
document.getElementById("area16").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 16, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 16, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 16, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 16, numroom: room});}else{}
});
document.getElementById("area17").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 17, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 17, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 17, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 17, numroom: room});}else{}
});
document.getElementById("area18").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 18, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 18, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 18, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 18, numroom: room});}else{}
});
document.getElementById("area19").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 19, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 19, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 19, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 19, numroom: room});}else{}
});
document.getElementById("area20").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 20, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 20, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 20, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 20, numroom: room});}else{}
});
document.getElementById("area21").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 21, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 21, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 21, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 21, numroom: room});}else{}
});
document.getElementById("area22").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 22, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 22, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 22, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 22, numroom: room});}else{}
});
document.getElementById("area23").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 23, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 23, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 23, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 23, numroom: room});}else{}
});
document.getElementById("area24").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 24, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 24, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 24, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 24, numroom: room});}else{}
});
document.getElementById("area25").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 25, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 25, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 25, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 25, numroom: room});}else{}
});
document.getElementById("area26").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 26, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 26, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 26, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 26, numroom: room});}else{}
});
document.getElementById("area27").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 27, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 27, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 27, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 27, numroom: room});}else{}
});
document.getElementById("area28").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 28, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 28, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 28, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 28, numroom: room});}else{}
});
document.getElementById("area29").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 29, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 29, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 29, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 29, numroom: room});}else{}
});
document.getElementById("area30").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 30, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 30, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 30, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 30, numroom: room});}else{}
});
document.getElementById("area31").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 31, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 31, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 31, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 31, numroom: room});}else{}
});
document.getElementById("area32").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 32, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 32, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 32, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 32, numroom: room});}else{}
});
document.getElementById("area33").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 33, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 33, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 33, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 33, numroom: room});}else{}
});
document.getElementById("area34").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 34, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 34, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 34, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 34, numroom: room});}else{}
});
document.getElementById("area35").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 35, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 35, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 35, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 35, numroom: room});}else{}
});
document.getElementById("area36").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 36, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 36, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 36, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 36, numroom: room});}else{}
});
document.getElementById("area37").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 37, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 37, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 37, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 37, numroom: room});}else{}
});
document.getElementById("area38").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 38, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 38, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 38, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 38, numroom: room});}else{}
});
document.getElementById("area39").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 39, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 39, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 39, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 39, numroom: room});}else{}
});
document.getElementById("area40").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 40, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 40, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 40, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 40, numroom: room});}else{}
});
document.getElementById("area41").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 41, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 41, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 41, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 41, numroom: room});}else{}
});
document.getElementById("area42").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 42, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 42, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 42, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 42, numroom: room});}else{}
});
document.getElementById("area43").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 43, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 43, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 43, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 43, numroom: room});}else{}
});
document.getElementById("area44").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 44, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 44, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 44, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 44, numroom: room});}else{}
});
document.getElementById("area45").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 45, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 45, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 45, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 45, numroom: room});}else{}
});
document.getElementById("area46").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 46, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 46, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 46, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 46, numroom: room});}else{}
});
document.getElementById("area47").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 47, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 47, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 47, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 47, numroom: room});}else{}
});
document.getElementById("area48").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 48, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 48, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 48, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 48, numroom: room});}else{}
});
document.getElementById("area49").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 49, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 49, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 49, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 49, numroom: room});}else{}
});
document.getElementById("area50").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 50, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 50, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 50, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 50, numroom: room});}else{}
});
document.getElementById("area51").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 51, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 51, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 51, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 51, numroom: room});}else{}
});
document.getElementById("area52").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 52, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 52, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 52, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 52, numroom: room});}else{}
});
document.getElementById("area53").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 53, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 53, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 53, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 53, numroom: room});}else{}
});
document.getElementById("area54").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 54, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 54, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 54, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 54, numroom: room});}else{}
});
document.getElementById("area55").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 55, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 55, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 55, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 55, numroom: room});}else{}
});
document.getElementById("area56").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 56, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 56, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 56, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 56, numroom: room});}else{}
});
document.getElementById("area57").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 57, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 57, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 57, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 57, numroom: room});}else{}
});
document.getElementById("area58").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 58, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 58, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 58, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 58, numroom: room});}else{}
});
document.getElementById("area59").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 59, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 59, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 59, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 59, numroom: room});}else{}
});
document.getElementById("area60").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 60, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 60, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 60, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 60, numroom: room});}else{}
});
document.getElementById("area61").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 61, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 61, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 61, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 61, numroom: room});}else{}
});
document.getElementById("area62").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 62, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 62, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 62, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 62, numroom: room});}else{}
});
document.getElementById("area63").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 63, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 63, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 63, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 63, numroom: room});}else{}
});
document.getElementById("area64").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 64, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 64, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 64, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 64, numroom: room});}else{}
});
document.getElementById("area65").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 65, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 65, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 65, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 65, numroom: room});}else{}
});
document.getElementById("area66").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 66, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 66, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 66, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 66, numroom: room});}else{}
});
document.getElementById("area67").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 67, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 67, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 67, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 67, numroom: room});}else{}
});
document.getElementById("area68").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 68, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 68, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 68, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 68, numroom: room});}else{}
});
document.getElementById("area69").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 69, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 69, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 69, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 69, numroom: room});}else{}
});
document.getElementById("area70").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 70, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 70, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 70, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 70, numroom: room});}else{}
});
document.getElementById("area71").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 71, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 71, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 71, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 71, numroom: room});}else{}
});
document.getElementById("area72").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 72, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 72, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 72, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 72, numroom: room});}else{}
});
document.getElementById("area73").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 73, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 73, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 73, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 73, numroom: room});}else{}
});
document.getElementById("area74").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 74, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 74, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 74, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 74, numroom: room});}else{}
});
document.getElementById("area75").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 75, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 75, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 75, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 75, numroom: room});}else{}
});
document.getElementById("area76").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 76, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 76, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 76, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 76, numroom: room});}else{}
});
document.getElementById("area77").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 77, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 77, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 77, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 77, numroom: room});}else{}
});
document.getElementById("area78").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 78, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 78, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 78, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 78, numroom: room});}else{}
});
document.getElementById("area79").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 79, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 79, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 79, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 79, numroom: room});}else{}
});
document.getElementById("area80").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 80, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 80, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 80, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 80, numroom: room});}else{}
});
document.getElementById("area81").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 81, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 81, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 81, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 81, numroom: room});}else{}
});
document.getElementById("area82").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 82, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 82, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 82, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 82, numroom: room});}else{}
});
document.getElementById("area83").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 83, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 83, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 83, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 83, numroom: room});}else{}
});
document.getElementById("area84").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 84, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 84, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 84, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 84, numroom: room});}else{}
});
document.getElementById("area85").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 85, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 85, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 85, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 85, numroom: room});}else{}
});
document.getElementById("area86").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 86, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 86, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 86, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 86, numroom: room});}else{}
});
document.getElementById("area87").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 87, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 87, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 87, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 87, numroom: room});}else{}
});
document.getElementById("area88").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 88, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 88, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 88, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 88, numroom: room});}else{}
});
document.getElementById("area89").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 89, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 89, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 89, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 89, numroom: room});}else{}
});
document.getElementById("area90").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 90, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 90, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 90, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 90, numroom: room});}else{}
});
document.getElementById("area91").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 91, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 91, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 91, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 91, numroom: room});}else{}
});
document.getElementById("area92").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 92, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 92, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 92, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 92, numroom: room});}else{}
});
document.getElementById("area93").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 93, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 93, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 93, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 93, numroom: room});}else{}
});
document.getElementById("area94").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 94, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 94, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 94, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 94, numroom: room});}else{}
});
document.getElementById("area95").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 95, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 95, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 95, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 95, numroom: room});}else{}
});
document.getElementById("area96").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 96, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 96, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 96, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 96, numroom: room});}else{}
});
document.getElementById("area97").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 97, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 97, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 97, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 97, numroom: room});}else{}
});
document.getElementById("area98").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 98, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 98, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 98, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 98, numroom: room});}else{}
});
document.getElementById("area99").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 99, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 99, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 99, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 99, numroom: room});}else{}
});
document.getElementById("area100").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 100, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 100, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 100, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 100, numroom: room});}else{}
});
document.getElementById("area101").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 101, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 101, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 101, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 101, numroom: room});}else{}
});
document.getElementById("area102").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 102, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 102, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 102, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 102, numroom: room});}else{}
});
document.getElementById("area103").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 103, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 103, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 103, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 103, numroom: room});}else{}
});
document.getElementById("area104").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 104, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 104, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 104, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 104, numroom: room});}else{}
});
document.getElementById("area105").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 105, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 105, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 105, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 105, numroom: room});}else{}
});
document.getElementById("area106").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 106, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 106, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 106, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 106, numroom: room});}else{}
});
document.getElementById("area107").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 107, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 107, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 107, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 107, numroom: room});}else{}
});
document.getElementById("area108").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 108, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 108, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 108, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 108, numroom: room});}else{}
});
document.getElementById("area109").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 109, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 109, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 109, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 109, numroom: room});}else{}
});
document.getElementById("area110").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 110, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 110, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 110, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 110, numroom: room});}else{}
});
document.getElementById("area111").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 111, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 111, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 111, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 111, numroom: room});}else{}
});
document.getElementById("area112").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 112, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 112, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 112, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 112, numroom: room});}else{}
});
document.getElementById("area113").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 113, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 113, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 113, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 113, numroom: room});}else{}
});
document.getElementById("area114").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 114, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 114, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 114, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 114, numroom: room});}else{}
});
document.getElementById("area115").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 115, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 115, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 115, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 115, numroom: room});}else{}
});
document.getElementById("area116").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 116, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 116, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 116, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 116, numroom: room});}else{}
});
document.getElementById("area117").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 117, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 117, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 117, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 117, numroom: room});}else{}
});
document.getElementById("area118").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 118, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 118, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 118, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 118, numroom: room});}else{}
});
document.getElementById("area119").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 119, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 119, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 119, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 119, numroom: room});}else{}
});
document.getElementById("area120").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 120, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 120, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 120, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 120, numroom: room});}else{}
});
document.getElementById("area121").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 121, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 121, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 121, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 121, numroom: room});}else{}
});
document.getElementById("area122").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 122, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 122, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 122, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 122, numroom: room});}else{}
});
document.getElementById("area123").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 123, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 123, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 123, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 123, numroom: room});}else{}
});
document.getElementById("area124").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 124, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 124, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 124, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 124, numroom: room});}else{}
});
document.getElementById("area125").addEventListener('click',function(){
if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 125, numroom: room});
}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 125, numroom: room});}
else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 125, numroom: room});}
else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 125, numroom: room});}else{}
});
			document.getElementById("area126").addEventListener('click',function(){
				if(document.getElementById("che").checked == true && usercode%4 == 1 ){socket.emit('imgclick',{num: 126, numroom: room});
				}else if(document.getElementById("che2").checked == true && usercode%4 == 2){socket.emit('imgclick',{num: 126, numroom: room});}
				else if(document.getElementById("che3").checked == true && usercode%4 == 3){socket.emit('imgclick',{num: 126, numroom: room});}
				else if(document.getElementById("che4").checked == true && usercode%4 == 0){socket.emit('imgclick',{num: 126, numroom: room});}else{}
			});
			
			socket.on('imgclickf', function(data){
				if(data.realroom2 == room){
					imgX(data.numa);}
				else{}
				
				
				});
				
			socket.on('attackbuttonsocketf', function(data){
				
				
				// ????????????????? HATA VAR DATA ROOM SAYISI DEGIL KI ?????????????????????
				if(data.realroom == room){
					
					if (data.winorloose == 1){buton11();document.getElementById("playerwho").innerHTML = data;
							}
					else if(data.winorloose == 2){buton22();document.getElementById("playerwho").innerHTML = data;}
					else{document.getElementById("playerwho").innerHTML = data.winorloose;}
					//------
					
						if(usercode%4 == 1 && check1.checked == true){
						document.getElementById("h16").innerHTML = "IT IS YOUR TURN!";
						document.getElementById("attackbutton").style.visibility='visible';
							
							}
						else if(usercode%4 == 2 && check2.checked == true){
						document.getElementById("h16").innerHTML = "IT IS YOUR TURN!";
						document.getElementById("attackbutton").style.visibility='visible';}
							
						else if(usercode%4 == 3 && check3.checked == true){
						document.getElementById("h16").innerHTML = "IT IS YOUR TURN!";
						document.getElementById("attackbutton").style.visibility='visible';}
							
						else if(usercode%4 == 0 && check4.checked == true){
						document.getElementById("h16").innerHTML = "IT IS YOUR TURN!";
						document.getElementById("attackbutton").style.visibility='visible';}
						
						
						else{document.getElementById("attackbutton").style.visibility='hidden';
							 document.getElementById("h16").innerHTML = "";}
						
					//------
					
						if(check1.checked == true){
							setTimeout(function(){
							document.getElementById("h15").scrollTop = document.getElementById("h15").scrollHeight;
							}, 10); 
							
							
							
							if (data.winorloose == 1){document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 4 Won!";}
							else{document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 4 lost!";}
							document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Waiting for Player1's move";
							document.getElementById("arrow1").style.visibility='visible';
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';
							
							
								}
						else if(check2.checked == true){
							setTimeout(function(){
							document.getElementById("h15").scrollTop = document.getElementById("h15").scrollHeight;
							}, 10); 
							
							
							
							if (data.winorloose == 1){document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 1 Won!";}
							else{document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 1 lost!";}
							document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Waiting for Player2's move";
							document.getElementById("arrow2").style.visibility='visible';
							document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';
							
							
							
							}
						else if(check3.checked == true){
							setTimeout(function(){
							document.getElementById("h15").scrollTop = document.getElementById("h15").scrollHeight;
							}, 10); 
							
						
							
							if (data.winorloose == 1){document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 2 Won!";}
							else{document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 2 lost!";}
							document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Waiting for Player3's move";
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='visible';
							document.getElementById("arrow4").style.visibility='hidden';
							
							
							
							}
						else if(check4.checked == true){
							setTimeout(function(){
							document.getElementById("h15").scrollTop = document.getElementById("h15").scrollHeight;
							}, 10); 
							
							
							
							if (data.winorloose == 1){document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 3 Won!";}
							else{document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Player 3 lost!";}
							document.getElementById("h15").innerHTML = document.getElementById("h15").innerHTML+"&#13;&#10;Waiting for Player4's move";
							document.getElementById("arrow4").style.visibility='visible';
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';
							
							
							
							}
							
							else{document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';}
							
							setTimeout(function(){
								if(check1.checked == true && isp1left == 1 ){socket.emit('attackbuttonsocket',room);}
						
								if(check2.checked == true && isp2left == 1 ){socket.emit('attackbuttonsocket',room);}
						
								if(check3.checked == true && isp3left == 1 ){socket.emit('attackbuttonsocket',room);}
						
								if(check4.checked == true && isp4left == 1 ){socket.emit('attackbuttonsocket',room);}
							}, 300); 
							
					}
				});

			//This is only for making inputtext sent when enter is pressed
				$("#input").keyup(function(event){
						if(event.keyCode == 13){
							$("#sendbutton").click();
						}
				});	
			//This is just for being able to type space in input section
				$("#input").keyup(function(event){
						if(event.keyCode == 32){
							$("input[name='checkListItem']").val($("input[name='checkListItem']").val()+' ');
						}
				});	
				
				
		function getbrowser(){
			var i;
			socket.emit('getbrowser1',{});
			
			socket.on('getbrowser1f', function(data){
				i = data;
				
				});
				return i;
			}
		//This function works as soon as client is connected 
		socket.on('usernum', function(data){
			
					
				document.getElementById("onlineplayertext").innerHTML = "";
				$hone1.append("Online players = "+data.uo);
				if(data.u1%4 == 1){
				document.getElementById("player1").style.visibility='visible';
				}
				else if(data.u1%4 == 2){
				document.getElementById("player1").style.visibility='visible';
				document.getElementById("player2").style.visibility='visible';}
				else if(data.u1%4 == 3){
				document.getElementById("player1").style.visibility='visible';
				document.getElementById("player2").style.visibility='visible';
				document.getElementById("player3").style.visibility='visible';}
				else if(data.u1%4 == 0){
				document.getElementById("player1").style.visibility='visible';
				document.getElementById("player2").style.visibility='visible';
				document.getElementById("player3").style.visibility='visible';
				document.getElementById("player4").style.visibility='visible';
				document.getElementById("waitmap1").style.visibility='hidden';
				document.getElementById("roomtext").click();
				//************************************* OYUNUN BASLADIGI YER BURASI **********************************************************
						
						if(usercode%4 == 1 && check1.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';
						if(isp1left == true){document.getElementById("attackbutton").click();}}
						else if(usercode%4 == 2 && check2.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else if(usercode%4 == 3 && check3.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else if(usercode%4 == 0 && check4.checked == true){
						document.getElementById("attackbutton").style.visibility='visible';}
						else{document.getElementById("attackbutton").style.visibility='hidden';
						}
				
				//------------ aktivasyon------------
						setTimeout(function(){
						if(check1.checked == true){
							document.getElementById("h15").innerHTML = "Waiting for Player1's move";
							document.getElementById("arrow1").style.visibility='visible';}
						else if(check2.checked == true){
							document.getElementById("h15").innerHTML = "Waiting for Player2's move";
							document.getElementById("arrow2").style.visibility='visible';}
						else if(check3.checked == true){
							document.getElementById("h15").innerHTML = "Waiting for Player3's move";
							document.getElementById("arrow3").style.visibility='visible';}
						else if(check4.checked == true){
							document.getElementById("h15").innerHTML = "Waiting for Player4's move";
							document.getElementById("arrow4").style.visibility='visible';}
						else{document.getElementById("arrow1").style.visibility='hidden';
							document.getElementById("arrow2").style.visibility='hidden';
							document.getElementById("arrow3").style.visibility='hidden';
							document.getElementById("arrow4").style.visibility='hidden';}
						}, 100); 
						
						setTimeout(function(){
						document.getElementById("h15").scrollTop = document.getElementById("h15").scrollHeight;
						}, 10); 
				
				}
				else{document.getElementById("playerwho").innerHTML = "error101/make player5 card visible ";}


			});

		});