var game = new Phaser.Game(1, 1, Phaser.AUTO, 'gameDiv');
var playeroneortwo = 0;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var a2 = 0;
var a1 = 0;
var a3 = 0;
var a4 = 0;
var team1 = 0;
var team2 = 0;
var team3 = 0;
var team4 = 0;
var clicked = false;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var underattack = 0;
var recentbox;
var recentboxstr;
var choosentogive = [127];
var choosentogive1 = [127];
var img = [127];
var imgteams = [127];
var hastower = [127];
var point0 = [127];
var point1 = [127];
var point2 = [127];
var point3 = [127];
var point4 = [127];
var dene;
var p1lost ,p2lost, p3lost, p4lost = false;
var raho ;
var randbot1,randbot2,randbot3,randbot4;
var towerchoosen = false;

//These represents which countries has border with which countries.
var borders = []; 

var border1 = [1,2,3,25];
var border2 = [1,2];
var border3 = [1,4,5,7];
var border4 = [3,4,5,7,8,9,17,18,19];
var border5 = [3,4,5,9];
var border6 = [6,7,92];
var border7 = [3,4,6,7,92];
var border8 = [4,8,9,14,15,16];
var border9 = [4,5,8,9,10,13,14];
var border10 = [9,10,11,12,13];
var border11 = [10,11,12,13,20];
var border12 = [10,11,12,20];
var border13 = [9,10,11,13,14];
var border14 = [8,9,13,14,15,21];
var border15 = [8,14,15,16,21,23];
var border16 = [8,15,16,23];
var border17 = [4,17,18,19];
var border18 = [4,17,18,19,23];
var border19 = [17,18,19,23];
var border20 = [11,12,20,22,24,30];
var border21 = [14,15,16,21,22,23,31,32];
var border22 = [20,21,22,30];
var border23 = [15,16,18,19,21,23,31];
var border24 = [20,24,29,30,64];
var border25 = [1,25,26,75];
var border26 = [25,26,27,28,73,74,75,76];
var border27 = [26,27,28];
var border28 = [26,27,28,29,68,72,73];
var border29 = [24,28,29,64,68];
var border30 = [20,22,24,30,34,36,37];
var border31 = [21,23,31,32,38,42];
var border32 = [21,31,32,33,34,35,42,47,48];
var border33 = [32,33,34,35,36];
var border34 = [30,32,33,34,35,36];
var border35 = [32,33,34,35,36,37,44,47];
var border36 = [30,33,34,35,36,37,];
var border37 = [30,35,36,37,44,45];
var border38 = [31,38,39,42];
var border39 = [38,39,40,41,42,43,49,62];
var border40 = [39,40,41];
var border41 = [39,40,41];
var border42 = [31,32,38,39,42,43,47,48];
var border43 = [39,42,43,44,47,48,49,50];
var border44 = [35,37,43,45,47,50];
var border45 = [37,44,45,46,50];
var border46 = [45,46,50,51];
var border47 = [32,35,42,43,44,47,48];
var border48 = [32,42,43,47,48,];
var border49 = [39,43,49,50,62];
var border50 = [43,44,45,46,49,50,51];
var border51 = [46,50,51,53];
var border52 = [52,53,54];
var border53 = [51,52,53];
var border54 = [52,54,55];
var border55 = [54,55,60];
var border56 = [56,57];
var border57 = [56,57,58,60];
var border58 = [56,57,58,59,60];
var border59 = [58,59,60,61];
var border60 = [55,57,58,59,60];
var border61 = [59,61];
var border62 = [49,62,63];
var border63 = [62,63];
var border64 = [24,29,64,65,66,67];
var border65 = [64,65,66];
var border66 = [64,65,66,67];
var border67 = [64,66,67];
var border68 = [28,29,68,69,71,72,78,83];
var border69 = [68,69,70,71];
var border70 = [69,70,71];
var border71 = [68,69,70,71,83,87,89];
var border72 = [28,68,72,73,78,80,81];
var border73 = [26,28,72,73,74,79,80];
var border74 = [26,73,74,76,77,79];
var border75 = [25,26,75,76];
var border76 = [26,74,75,76,77];
var border77 = [74,76,77,79,121];
var border78 = [68,72,78,81,82,83];
var border79 = [73,74,77,79,80];
var border80 = [72,73,79,80,81];
var border81 = [72,78,80,81,82,];
var border82 = [78,81,82,83];
var border83 = [68,71,78,82,83,84,87];
var border84 = [83,84,85,87];
var border85 = [84,85,86,87,88,91];
var border86 = [84,85,86,88,91];
var border87 = [71,83,84,87,88,89];
var border88 = [85,86,87,88,89,91];
var border89 = [71,87,88,89,90,91];
var border90 = [89,90];
var border91 = [85,86,88,89,91];
var border92 = [7,92,93];
var border93 = [92,93,94];
var border94 = [93,94,95];
var border95 = [94,95,96,100,102];
var border96 = [95,96,97,98,99,100];
var border97 = [96,97,98,101];
var border98 = [96,97,98,99,101,103,104];
var border99 = [96,98,99,100,104,105];
var border100 = [95,96,99,100,102,105,106];
var border101 = [97,98,101,103];
var border102 = [95,100,102,106,107];
var border103 = [98,101,103,104,110];
var border104 = [98,99,103,104,105,110,111];
var border105 = [99,100,104,105,106,111];
var border106 = [100,102,105,106,107,108,111];
var border107 = [102,106,107];
var border108 = [111,106,108,109];
var border109 = [108,109,112];
var border110 = [103,104,110,111,112];
var border111 = [104,105,106,108,110,112];
var border112 = [109,110,111,112,113];
var border113 = [112,113,114];
var border114 = [113,114,115];
var border115 = [114,115,116,117,119,120];
var border116 = [115,116,120];
var border117 = [115,117,118,119];
var border118 = [117,118,119,121];
var border119 = [115,116,117,118,119,120,121,123];
var border120 = [115,116,119,120,123,126];
var border121 = [77,118,119,121,122,123];
var border122 = [121,122,123,124,125];
var border123 = [119,120,121,122,123,124,125,126];
var border124 = [122,123,124,125];
var border125 = [122,123,124,125,126];
var border126 = [120,123,125,126];
var border127 = [];

// 0 is empty, 1 is red and 2 is blue
var mainState = {
	
    preload: function() { 
    	// Load the bird sprite
		 
	
    },
    create: function() {
	
	
	/*
		document.getElementById("img1").src = "countries/img1.png";
		document.getElementById("img2").src = "countries/img2.png";
		document.getElementById("img3").src = "countries/img3.png";
		document.getElementById("img4").src = "countries/img4.png";
		document.getElementById("img5").src = "countries/img5.png";
		document.getElementById("img6").src = "countries/img6.png";
		document.getElementById("img7").src = "countries/img7.png";
		document.getElementById("img8").src = "countries/img8.png";
		document.getElementById("img9").src = "countries/img9.png";
		document.getElementById("img10").src = "countries/img10.png";
		document.getElementById("img11").src = "countries/img11.png";
		document.getElementById("img12").src = "countries/img12.png";
		document.getElementById("img13").src = "countries/img13.png";
		document.getElementById("img14").src = "countries/img14.png";
		document.getElementById("img15").src = "countries/img15.png";*/
		document.getElementById("img16").src = "countries/img16.png";
		document.getElementById("img17").src = "countries/img17.png";
		document.getElementById("img18").src = "countries/img18.png";
		document.getElementById("img19").src = "countries/img19.png";
		document.getElementById("img20").src = "countries/img20.png";
		document.getElementById("img21").src = "countries/img21.png";
		document.getElementById("img22").src = "countries/img22.png";
		document.getElementById("img23").src = "countries/img23.png";
		document.getElementById("img24").src = "countries/img24.png";
		document.getElementById("img25").src = "countries/img25.png";
		document.getElementById("img26").src = "countries/img26.png";
		document.getElementById("img27").src = "countries/img27.png";
		document.getElementById("img28").src = "countries/img28.png";
		document.getElementById("img29").src = "countries/img29.png";
		document.getElementById("img30").src = "countries/img30.png";
		document.getElementById("img31").src = "countries/img31.png";
		document.getElementById("img32").src = "countries/img32.png";
		document.getElementById("img33").src = "countries/img33.png";
		document.getElementById("img34").src = "countries/img34.png";
		document.getElementById("img35").src = "countries/img35.png";
		document.getElementById("img36").src = "countries/img36.png";
		document.getElementById("img37").src = "countries/img37.png";
		/*document.getElementById("img38").src = "countries/img38.png";
		document.getElementById("img39").src = "countries/img39.png";
		document.getElementById("img40").src = "countries/img40.png";
		document.getElementById("img41").src = "countries/img41.png";
		document.getElementById("img42").src = "countries/img42.png";
		document.getElementById("img43").src = "countries/img43.png";
		document.getElementById("img44").src = "countries/img44.png";
		document.getElementById("img45").src = "countries/img45.png";
		document.getElementById("img46").src = "countries/img46.png";
		document.getElementById("img47").src = "countries/img47.png";
		document.getElementById("img48").src = "countries/img48.png";
		document.getElementById("img49").src = "countries/img49.png"; 
		document.getElementById("img50").src = "countries/img50.png"; */
		document.getElementById("img51").src = "countries/img51.png"; 
		document.getElementById("img52").src = "countries/img52.png"; 
		document.getElementById("img53").src = "countries/img53.png"; 
		document.getElementById("img54").src = "countries/img54.png"; 
		document.getElementById("img55").src = "countries/img55.png"; 
		document.getElementById("img56").src = "countries/img56.png"; 
		document.getElementById("img57").src = "countries/img57.png"; 
		document.getElementById("img58").src = "countries/img58.png"; 
		document.getElementById("img59").src = "countries/img59.png"; 
		document.getElementById("img60").src = "countries/img60.png"; 
		document.getElementById("img61").src = "countries/img61.png"; 
		//document.getElementById("img62").src = "countries/img62.png"; 
		//document.getElementById("img63").src = "countries/img63.png"; 
		document.getElementById("img64").src = "countries/img64.png"; 
		document.getElementById("img65").src = "countries/img65.png"; 
		document.getElementById("img66").src = "countries/img66.png"; 
		document.getElementById("img67").src = "countries/img67.png"; 
		document.getElementById("img68").src = "countries/img68.png"; 
		document.getElementById("img69").src = "countries/img69.png"; 
		document.getElementById("img70").src = "countries/img70.png"; 
		document.getElementById("img71").src = "countries/img71.png"; 
		document.getElementById("img72").src = "countries/img72.png"; 
		/*document.getElementById("img73").src = "countries/img73.png"; 
		document.getElementById("img74").src = "countries/img74.png"; 
		document.getElementById("img75").src = "countries/img75.png"; 
		document.getElementById("img76").src = "countries/img76.png"; 
		document.getElementById("img77").src = "countries/img77.png"; */
		document.getElementById("img78").src = "countries/img78.png"; 
		//document.getElementById("img79").src = "countries/img79.png"; 
		document.getElementById("img80").src = "countries/img80.png"; 
		document.getElementById("img81").src = "countries/img81.png"; 
		document.getElementById("img82").src = "countries/img82.png"; 
		document.getElementById("img83").src = "countries/img83.png"; 
		document.getElementById("img84").src = "countries/img84.png"; 
		document.getElementById("img85").src = "countries/img85.png"; 
		document.getElementById("img86").src = "countries/img86.png"; 
		document.getElementById("img87").src = "countries/img87.png"; 
		document.getElementById("img88").src = "countries/img88.png"; 
		document.getElementById("img89").src = "countries/img89.png"; 
		document.getElementById("img90").src = "countries/img90.png"; 
		document.getElementById("img91").src = "countries/img91.png"; 
		document.getElementById("img92").src = "countries/img92.png"; 
		document.getElementById("img93").src = "countries/img93.png"; 
		document.getElementById("img94").src = "countries/img94.png"; 
		document.getElementById("img95").src = "countries/img95.png"; 
		/*document.getElementById("img96").src = "countries/img96.png"; 
		document.getElementById("img97").src = "countries/img97.png"; 
		document.getElementById("img98").src = "countries/img98.png"; 
		document.getElementById("img99").src = "countries/img99.png"; 
		document.getElementById("img100").src = "countries/img100.png"; 
		document.getElementById("img101").src = "countries/img101.png"; 
		document.getElementById("img102").src = "countries/img102.png"; 
		document.getElementById("img103").src = "countries/img103.png"; 
		document.getElementById("img104").src = "countries/img104.png"; 
		document.getElementById("img105").src = "countries/img105.png"; 
		document.getElementById("img106").src = "countries/img106.png"; 
		document.getElementById("img107").src = "countries/img107.png"; 
		document.getElementById("img108").src = "countries/img108.png"; 
		document.getElementById("img109").src = "countries/img109.png"; 
		document.getElementById("img110").src = "countries/img110.png"; */
		document.getElementById("img111").src = "countries/img111.png"; 
		document.getElementById("img112").src = "countries/img112.png"; 
		document.getElementById("img113").src = "countries/img113.png"; 
		document.getElementById("img114").src = "countries/img114.png"; 
		document.getElementById("img115").src = "countries/img115.png"; 
		//document.getElementById("img116").src = "countries/img116.png"; 
		document.getElementById("img117").src = "countries/img117.png"; 
		document.getElementById("img118").src = "countries/img118.png"; 
		/*document.getElementById("img119").src = "countries/img119.png"; 
		document.getElementById("img120").src = "countries/img120.png"; 
		document.getElementById("img121").src = "countries/img121.png"; 
		document.getElementById("img122").src = "countries/img122.png"; 
		document.getElementById("img123").src = "countries/img123.png"; 
		document.getElementById("img124").src = "countries/img124.png"; 
		document.getElementById("img125").src = "countries/img125.png"; 
		document.getElementById("img126").src = "countries/img126.png"; 
		*/
		document.getElementById('che').checked = true;
		
		var hamle = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
   		hamle.onDown.add(this.hamle, this);
		
		var gred = document.getElementById("gred");
		var gblue = document.getElementById("gblue");
		var ggreen = document.getElementById("ggreen");
		var gyellow = document.getElementById("gyellow");
		var gwhite = document.getElementById("gwhite");
		
		printcounter();
		
		var canvas = document.createElement("canvas");
					canvas.style.position = "absolute";
					canvas.width = 1300;
					canvas.height = 700;
					canvas.style.zIndex = 190;
					canvas.style.top= "0px";
					canvas.style.left= "0px";
					
					document.body.appendChild(canvas);
					//canvas.id = "line"+i;
		
		
		// button random 
		
		
				var x1 = 0;
				var a1 = 0;
				for(var i = 0; i < 127;i++){
						var str = i.toString();
						imgteams[i] = 0;
						img[i] = document.getElementById("img".concat(str));
						point0[i] = 30;
						point1[i] = 0;
						point2[i] = 0;
						point3[i] = 0;
						point4[i] = 0;
					}

 
			
		//********ILK TAKIMLAR BELIRLENIYOR***************
						
						document.getElementById("img1").src = "countries/img1red.png";
						document.getElementById("img2").src = "countries/img2red.png";
						document.getElementById("img3").src = "countries/img3red.png";
						document.getElementById("img4").src = "countries/img4red.png";
						document.getElementById("img5").src = "countries/img5red.png";
						document.getElementById("img6").src = "countries/img6red.png";
						document.getElementById("img7").src = "countries/img7red.png";
						document.getElementById("img8").src = "countries/img8red.png";
						document.getElementById("img9").src = "countries/img9red.png";
						document.getElementById("img10").src = "countries/img10red.png";
						document.getElementById("img12").src = "countries/img12red.png";
						document.getElementById("img13").src = "countries/img13red.png";
						document.getElementById("img14").src = "countries/img14red.png";
						document.getElementById("img15").src = "countries/img15red.png";
						document.getElementById("img11").src = "countries/img11red.png";
						
						document.getElementById("img119").src = "countries/img119blue.png";
						document.getElementById("img120").src = "countries/img120blue.png";
						document.getElementById("img121").src = "countries/img121blue.png";
						document.getElementById("img75").src = "countries/img75blue.png";
						document.getElementById("img77").src = "countries/img77blue.png";
						document.getElementById("img76").src = "countries/img76blue.png";
						document.getElementById("img73").src = "countries/img73blue.png";
						document.getElementById("img79").src = "countries/img79blue.png";
						document.getElementById("img74").src = "countries/img74blue.png";
						document.getElementById("img122").src = "countries/img122blue.png";
						document.getElementById("img123").src = "countries/img123blue.png";
						document.getElementById("img124").src = "countries/img124blue.png";
						document.getElementById("img125").src = "countries/img125blue.png";
						document.getElementById("img126").src = "countries/img126blue.png";
						document.getElementById("img116").src = "countries/img116blue.png";
						
						document.getElementById("img38").src = "countries/img38green.png";
						document.getElementById("img39").src = "countries/img39green.png";
						document.getElementById("img40").src = "countries/img40green.png";
						document.getElementById("img41").src = "countries/img41green.png";
						document.getElementById("img42").src = "countries/img42green.png";
						document.getElementById("img43").src = "countries/img43green.png";
						document.getElementById("img44").src = "countries/img44green.png";
						document.getElementById("img45").src = "countries/img45green.png";
						document.getElementById("img46").src = "countries/img46green.png";
						document.getElementById("img47").src = "countries/img47green.png";
						document.getElementById("img48").src = "countries/img48green.png";
						document.getElementById("img49").src = "countries/img49green.png";
						document.getElementById("img50").src = "countries/img50green.png";
						document.getElementById("img62").src = "countries/img62green.png";
						document.getElementById("img63").src = "countries/img63green.png";
						
						document.getElementById("img99").src = "countries/img99yellow.png";
						document.getElementById("img98").src = "countries/img98yellow.png";
						document.getElementById("img97").src = "countries/img97yellow.png";
						document.getElementById("img96").src = "countries/img96yellow.png";
						document.getElementById("img100").src = "countries/img100yellow.png";
						document.getElementById("img101").src = "countries/img101yellow.png";
						document.getElementById("img102").src = "countries/img102yellow.png";
						document.getElementById("img103").src = "countries/img103yellow.png";
						document.getElementById("img104").src = "countries/img104yellow.png";
						document.getElementById("img105").src = "countries/img105yellow.png";
						document.getElementById("img106").src = "countries/img106yellow.png";
						document.getElementById("img107").src = "countries/img107yellow.png";
						document.getElementById("img108").src = "countries/img108yellow.png";
						document.getElementById("img109").src = "countries/img109yellow.png";
						document.getElementById("img110").src = "countries/img110yellow.png";
						
						imgteams[1] = 1;
						imgteams[2] = 1;
						imgteams[3] = 1;
						imgteams[4] = 1;
						imgteams[5] = 1;
						imgteams[6] = 1;
						imgteams[7] = 1;
						imgteams[8] = 1;
						imgteams[9] = 1;
						imgteams[10] = 1;
						imgteams[11] = 1;
						imgteams[12] = 1;
						imgteams[13] = 1;
						imgteams[14] = 1;
						imgteams[15] = 1;
						
						point1[1] = 30;
						point1[2] = 30;
						point1[3] = 30;
						point1[4] = 30;
						point1[5] = 30;
						point1[6] = 30;
						point1[7] = 30;
						point1[8] = 30;
						point1[9] = 30;
						point1[10] = 30;
						point1[11] = 30;
						point1[12] = 30;
						point1[13] = 30;
						point1[14] = 30;
						point1[15] = 30;
						
						imgteams[119] = 2;
						imgteams[120] = 2;
						imgteams[121] = 2;
						imgteams[75] = 2;
						imgteams[76] = 2;
						imgteams[77] = 2;
						imgteams[73] = 2;
						imgteams[79] = 2;
						imgteams[74] = 2;
						imgteams[122] = 2;
						imgteams[123] = 2;
						imgteams[124] = 2;
						imgteams[125] = 2;
						imgteams[126] = 2;
						imgteams[116] = 2;
						
						point2[119] = 30;
						point2[120] = 30;
						point2[121] = 30;
						point2[75] = 30;
						point2[76] = 30;
						point2[77] = 30;
						point2[73] = 30;
						point2[79] = 30;
						point2[74] = 30;
						point2[122] = 30;
						point2[123] = 30;
						point2[124] = 30;
						point2[125] = 30;
						point2[126] = 30;
						point2[116] = 30;
						
						imgteams[38] = 3;
						imgteams[39] = 3;
						imgteams[40] = 3;
						imgteams[41] = 3;
						imgteams[42] = 3;
						imgteams[43] = 3;
						imgteams[44] = 3;
						imgteams[45] = 3;
						imgteams[46] = 3;
						imgteams[47] = 3;
						imgteams[48] = 3;
						imgteams[49] = 3;
						imgteams[50] = 3;
						imgteams[62] = 3;
						imgteams[63] = 3;
						
						point3[38] = 30;
						point3[39] = 30;
						point3[40] = 30;
						point3[41] = 30;
						point3[42] = 30;
						point3[43] = 30;
						point3[44] = 30;
						point3[45] = 30;
						point3[46] = 30;
						point3[47] = 30;
						point3[48] = 30;
						point3[49] = 30;
						point3[50] = 30;
						point3[62] = 30;
						point3[63] = 30;
						
						imgteams[99] = 4;
						imgteams[100] = 4;
						imgteams[101] = 4;
						imgteams[102] = 4;
						imgteams[103] = 4;
						imgteams[104] = 4;
						imgteams[98] = 4;
						imgteams[97] = 4;
						imgteams[96] = 4;
						imgteams[105] = 4;
						imgteams[106] = 4;
						imgteams[107] = 4;
						imgteams[108] = 4;
						imgteams[109] = 4;
						imgteams[110] = 4;
						
						point4[99] = 30;
						point4[100] = 30;
						point4[101] = 30;
						point4[102] = 30;
						point4[103] = 30;
						point4[104] = 30;
						point4[98] = 30;
						point4[97] = 30;
						point4[96] = 30;
						point4[105] = 30;
						point4[106] = 30;
						point4[107] = 30;
						point4[108] = 30;
						point4[109] = 30;
						point4[110] = 30;
						
						calculateteam();
						printcounter();
						
		
		
		
		
		document.getElementById("galatainven").addEventListener('click', function() {
					towerchoosen = true;
					});
		document.getElementById("galatainven").addEventListener('mouseover', function() {
					
				});
		document.getElementById("galatainven").addEventListener('mouseout', function() {
				});
		
		
		var imgtt  = document.getElementById("galata");

		for(var i = 1;i < 127;i++){
				(function () {
					var str5 = i.toString();
					var int1 = i;
					document.getElementById("area".concat(str5)).addEventListener('click', function() {
					if (document.getElementById("che").checked == true) {
						imgX(int1,0);
					} else {}
					});
					
					var rect1 = document.getElementById("img".concat(str5)).getBoundingClientRect();

		
					var iDiv = document.createElement('div');
					iDiv.style.position = "absolute";
					iDiv.style.border  = "1px solid black";
					iDiv.style.zIndex = 190;
					iDiv.style.opacity = "0.9";
					iDiv.style.visibility = "hidden";
					iDiv.style.width = "60px";
					iDiv.style.height = "5px";
					iDiv.style.left = rect1.left+5+"px";
					iDiv.style.top = rect1.top-5+"px";
					iDiv.style.backgroundColor = "white";
					document.body.appendChild(iDiv);
					iDiv.id = "pointbar"+i;
					
					var iDivred = document.createElement('div');
					iDivred.style.position = "absolute";
					iDivred.style.opacity = "0.9";
					iDivred.style.width = "0px";
					iDivred.style.height = "5px";
					iDivred.style.backgroundColor = "red";
					iDiv.appendChild(iDivred);
					iDivred.id = "redbar"+i;
					
					var iDivblue = document.createElement('div');
					iDivblue.style.position = "absolute";
					iDivblue.style.opacity = "0.9";
					iDivblue.style.width = "0px";
					iDivblue.style.height = "5px";
					iDivblue.style.backgroundColor = "blue";
					iDiv.appendChild(iDivblue);
					iDivblue.id = "bluebar"+i;
					
					var iDivgreen = document.createElement('div');
					iDivgreen.style.position = "absolute";
					iDivgreen.style.opacity = "0.9";
					iDivgreen.style.width = "0px";
					iDivgreen.style.height = "5px";
					iDivgreen.style.backgroundColor = "green";
					iDiv.appendChild(iDivgreen);
					iDivgreen.id = "greenbar"+i;
					
					var iDivyellow = document.createElement('div');
					iDivyellow.style.position = "absolute";
					iDivyellow.style.opacity = "0.9";
					iDivyellow.style.width = "0px";
					iDivyellow.style.height = "5px";
					iDivyellow.style.backgroundColor = "yellow";
					iDiv.appendChild(iDivyellow);
					iDivyellow.id = "yellowbar"+i;
					
					
					
					
					
				
				}());
			}
		//document.getElementById("galatainven").className = "disabled1".toString();
		
		
				
		//------------
		setInterval(function() {
			var rect2,rect3;var ctx;
			for (var i = 1; i < 127; i++) {

				if (hastower[i] == 1) {

					for (var i2 = 0; i2 < eval("border".concat(i)).length; i2++) {
						//if(imgteams[ eval( "border".concat(i) )[i2] ] == 0){

						if (point1[eval("border".concat(i))[i2]] > 0 && imgteams[i] != 1 && eval("border".concat(i))[i2] != i) {
							point1[eval("border".concat(i))[i2]] --;
							if (imgteams[eval("border".concat(i))[i2]] != imgteams[i]) {
								
								//eval("point".concat(i))[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
								rect2 = document.getElementById("img"+i).getBoundingClientRect();	
								rect3 = document.getElementById("img".concat(eval("border".concat(i))[i2].toString())).getBoundingClientRect();								
								ctx = canvas.getContext("2d");
									ctx.lineWidth = 2;
									ctx.strokeStyle = "red";
									ctx.beginPath();
									ctx.moveTo(rect2.left+rect2.width/2,rect2.top+rect2.height/2);
									ctx.lineTo(rect3.left+rect3.width/2,rect3.top+rect3.height/2);
									ctx.stroke();
							}
							
						} else if (point2[eval("border".concat(i))[i2]] > 0 && imgteams[i] != 2 && eval("border".concat(i))[i2] != i) {
							point2[eval("border".concat(i))[i2]] --;if (imgteams[eval("border".concat(i))[i2]] != imgteams[i]) {
								
								//eval("point".concat(i))[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
								rect2 = document.getElementById("img"+i).getBoundingClientRect();	
								rect3 = document.getElementById("img".concat(eval("border".concat(i))[i2].toString())).getBoundingClientRect();								
								ctx = canvas.getContext("2d");
									ctx.lineWidth = 2;
									ctx.strokeStyle = "red";
									ctx.beginPath();
									ctx.moveTo(rect2.left+rect2.width/2,rect2.top+rect2.height/2);
									ctx.lineTo(rect3.left+rect3.width/2,rect3.top+rect3.height/2);
									ctx.stroke();
							}
						} else if (point3[eval("border".concat(i))[i2]] > 0 && imgteams[i] != 3 && eval("border".concat(i))[i2] != i) {
							point3[eval("border".concat(i))[i2]] --;if (imgteams[eval("border".concat(i))[i2]] != imgteams[i]) {
								
								//eval("point".concat(i))[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
								rect2 = document.getElementById("img"+i).getBoundingClientRect();	
								rect3 = document.getElementById("img".concat(eval("border".concat(i))[i2].toString())).getBoundingClientRect();								
								ctx = canvas.getContext("2d");
									ctx.lineWidth = 2;
									ctx.strokeStyle = "red";
									ctx.beginPath();
									ctx.moveTo(rect2.left+rect2.width/2,rect2.top+rect2.height/2);
									ctx.lineTo(rect3.left+rect3.width/2,rect3.top+rect3.height/2);
									ctx.stroke();
							}
						} else if (point4[eval("border".concat(i))[i2]] > 0 && imgteams[i] != 4 && eval("border".concat(i))[i2] != i) {
							point4[eval("border".concat(i))[i2]] --;if (imgteams[eval("border".concat(i))[i2]] != imgteams[i]) {
								
								//eval("point".concat(i))[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
								rect2 = document.getElementById("img"+i).getBoundingClientRect();	
								rect3 = document.getElementById("img".concat(eval("border".concat(i))[i2].toString())).getBoundingClientRect();								
								ctx = canvas.getContext("2d");
									ctx.lineWidth = 2;
									ctx.strokeStyle = "red";
									ctx.beginPath();
									ctx.moveTo(rect2.left+rect2.width/2,rect2.top+rect2.height/2);
									ctx.lineTo(rect3.left+rect3.width/2,rect3.top+rect3.height/2);
									ctx.stroke();
							}
						} else if (point0[eval("border".concat(i))[i2]] > 0 & imgteams[i] != 0 & eval("border".concat(i))[i2] != i) {
							point0[eval("border".concat(i))[i2]] --;if (imgteams[eval("border".concat(i))[i2]] != imgteams[i]) {
								
								//eval("point".concat(i))[eval("border".concat(i))[i2]]++;
								rect2 = document.getElementById("img"+i).getBoundingClientRect();	
								rect3 = document.getElementById("img".concat(eval("border".concat(i))[i2].toString())).getBoundingClientRect();								
								ctx = canvas.getContext("2d");
									ctx.lineWidth = 2;
									ctx.strokeStyle = "red";
									ctx.beginPath();
									ctx.moveTo(rect2.left+rect2.width/2,rect2.top+rect2.height/2);
									ctx.lineTo(rect3.left+rect3.width/2,rect3.top+rect3.height/2);
									ctx.stroke();
							}
						} else {
							
							document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "hidden";
						}

						if (imgteams[i] == 1 & eval("border".concat(i))[i2] != i) {
							if (point1[eval("border".concat(i))[i2]] < 30) {
								point1[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
							}
						} else if (imgteams[i] == 2 & eval("border".concat(i))[i2] != i) {
							if (point2[eval("border".concat(i))[i2]] < 30) {
								point2[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
							}
						} else if (imgteams[i] == 3 & eval("border".concat(i))[i2] != i) {
							if (point3[eval("border".concat(i))[i2]] < 30) {
								point3[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
							}
						} else if (imgteams[i] == 4 & eval("border".concat(i))[i2] != i) {
							if (point4[eval("border".concat(i))[i2]] < 30) {
								point4[eval("border".concat(i))[i2]]++;
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "visible";
							}
						} else {
							document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "hidden";
						}

						if (point1[eval("border".concat(i))[i2]] == 30 || point2[eval("border".concat(i))[i2]] == 30 || point3[eval("border".concat(i))[i2]] == 30 || point4[eval("border".concat(i))[i2]] == 30) {
							imgteams[eval("border".concat(i))[i2]] = imgteams[i];
							if (imgteams[i] == 1) {
								document.getElementById("img".concat(eval("border".concat(i))[i2])).src = "countries/img" + eval("border".concat(i))[i2] + "red.png";
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "hidden";
								
							} else if (imgteams[i] == 2) {
								document.getElementById("img".concat(eval("border".concat(i))[i2])).src = "countries/img" + eval("border".concat(i))[i2] + "blue.png";
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "hidden";
							} else if (imgteams[i] == 3) {
								document.getElementById("img".concat(eval("border".concat(i))[i2])).src = "countries/img" + eval("border".concat(i))[i2] + "green.png";
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "hidden";
							} else if (imgteams[i] == 4) {
								document.getElementById("img".concat(eval("border".concat(i))[i2])).src = "countries/img" + eval("border".concat(i))[i2] + "yellow.png";
								document.getElementById("pointbar".concat(eval("border".concat(i))[i2].toString())).style.visibility = "hidden";
							} else {}

						}
						//}
						
					}
					//ctx.clearRect(0, 0,1300, 700);
				}
				var stra = i.toString();
				document.getElementById("redbar".concat(i)).style.width = point1[i] * 2 + "px";
				document.getElementById("bluebar".concat(i)).style.width = point2[i] * 2 + "px";
				document.getElementById("bluebar".concat(i)).style.left = point1[i] * 2 + "px";
				document.getElementById("greenbar".concat(i)).style.width = point3[i] * 2 + "px";
				document.getElementById("greenbar".concat(i)).style.left = point1[i] * 2 + point2[i] * 2 + "px";
				document.getElementById("yellowbar".concat(i)).style.width = point4[i] * 2 + "px";
				document.getElementById("yellowbar".concat(i)).style.left = point1[i]*2 + point2[i]*2 + point3[i]*2 + "px";
			}

			calculateteam();
			printcounter();
			
			setTimeout(function() {
			canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
			}, 990);
		}, 1000);
		
		
			
		document.getElementById("area1").addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Spain";
		});
		document.getElementById("h3").addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
		});
		
		img[2].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Portugal";
		});
		img[2].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
		});
		
		img[3].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "France";
		});
		img[3].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
		});
		
		img[4].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Germany";
		});
		img[4].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
		});
		
		img[5].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Italy";
		});
		img[5].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
		});;
		
		img[6].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Ireland";
		});
		img[6].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
    	});
		
		img[7].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "United Kingdom";
		});
		img[7].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
    	});
		
		img[8].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Poland";
    	});
		img[8].addEventListener('mouseout',  function() {
		document.getElementById("h3").innerHTML = "";
    	});
		
		img[9].addEventListener('mouseover', function() {
		document.getElementById("h3").innerHTML = "Austuria";
    	});
		img[9].addEventListener('mouseout', function() {
		document.getElementById("h3").innerHTML = "";
		
    	});
		
		
		
		 
    },
	
	ifhasborder: function(obj1, obj2){
		return true;
		
		},
	
	fun: function() {
		document.getElementById("h3").innerHTML = "**Empty**";
		
    	},
	fun2: function(obj) {
	
    	},
		
	 update: function() {
        // This function is called 60 times per second    
        // It contains the game's logic   
    },
	
	hamle: function() {
		
		if(document.getElementById("che").checked == true){
			this.map = this.game.add.sprite(10, 20, 'red'); 
		}
		else{
			this.map = this.game.add.sprite(10, 20, 'blue');
			};	
	},
	
	over: function() {
	
    	},
		
	out: function() {
	
    	},
	
};
	

	function printcounter() {
		document.getElementById('h5').innerHTML =
		"parameter check <br> counter1	= "+counter1+"&nbsp;&nbsp;&nbsp; a1 = "+a1+"&nbsp;&nbsp;&nbsp; team1 = "+
		team1+"<br>counter2 = "+counter2+ "&nbsp;&nbsp;&nbsp; a2 = "+a2+"&nbsp;&nbsp;&nbsp; team2 = "+team2
		+"<br>counter3 = "+counter3+ "&nbsp;&nbsp;&nbsp; a3 = "+a3+"&nbsp;&nbsp;&nbsp; team3 = "+team3
		+"<br>counter4 = "+counter4+ "&nbsp;&nbsp;&nbsp; a4 = "+a4+"&nbsp;&nbsp;&nbsp; team4 = "+team4+"<br>underattack = "+underattack;
		
				document.getElementById('h6').innerHTML = "";
				if(underattack == 0){
					document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + "<br>Place your inferno tower into your countries to start war."
				}
				else if(underattack == 2){document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + "<br>You are attacking blue you have choosen "+counter2+" blue countries<br>To be able to attack, You should choose "+(counter2-counter1-counter3-counter4)+" more of your countries.";}
				else if(underattack == 3){document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + "<br>You are attacking green you have choosen "+counter3+" green countries<br>To be able to attack, You should choose "+(counter3-counter1-counter2-counter4)+" more of your countries.";}
				else if(underattack == 4){document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + "<br>You are attacking yellow you have choosen "+counter4+" yellew countries<br>To be able to attack, You should choose "+(counter4-counter1-counter3-counter2)+" more of your countries.";}
				else if(underattack == 1){document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + "<br>You are attacking red you have choosen "+counter1+" red countries<br>To be able to attack, You should choose "+(counter1-counter2-counter3-counter4)+" more of your countries.";}
				else{}
		
		}

	function calculateteam() {
				team1 = 0; team2 = 0; team3 = 0; team4 = 0;
				for(var i = 1;i<127;i++){
					if(imgteams[i] == 1){team1++;}
					else if(imgteams[i] == 2){team2++;}
					else if(imgteams[i] == 3){team3++;}
					else if(imgteams[i] == 4){team4++;}
					else{}
					}
				if (team1 == 0 && p1lost != true){	errortext.className = "errortext";p1lost = true;
									document.getElementById("errortext").innerHTML = "YOU LOST!";
									errortext.className = "errortextop";isp1left = 1;
									document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML + "\n[SYSTEM] YOU Lost. ";}
				else if(team2 == 0 && p2lost != true){errortext.className = "errortext";p2lost = true;
									document.getElementById("errortext").innerHTML = "BOT 2 LOST!";
									errortext.className = "errortextop";isp2left = 1;
									document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML + "\n[SYSTEM] BOT 2 Lost. ";}
				else if(team3 == 0 && p3lost != true){errortext.className = "errortext";p3lost = true;
									document.getElementById("errortext").innerHTML = "BOT 3 LOST!";
									errortext.className = "errortextop";isp3left = 1;
									document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML + "\n[SYSTEM] BOT 3 Lost. ";}
				else if(team4 == 0 && p4lost != true){errortext.className = "errortext";p4lost = true;
									document.getElementById("errortext").innerHTML = "BOT 4 LOST!";
									errortext.className = "errortextop";isp4left = 1;
									document.getElementById("messagesr").innerHTML = document.getElementById("messagesr").innerHTML + "\n[SYSTEM] BOT 4 Lost. ";}
				else{}
				
					printcounter();
					gred.className = ("gred"+team1).toString();
					gblue.className = ("gblue"+team2).toString();
					ggreen.className = "ggreen"+team3.toString();
					gyellow.className = "gyellow"+team4.toString();
					gwhite.className = ("gwhite"+(126-team1-team2-team3-team4)).toString();
				
						
						
		}
		
	function buton22(){
		
					
	}
	
	function buton11(){
		
							
		
	}
	function buton33(){
			
					
	}

		
	function imgX(data,permision){
		var stra = data.toString();
		var rect = document.getElementById("img".concat(stra)).getBoundingClientRect();

		if(towerchoosen == true && hastower[data] != 1){
			
			var imgr1 = document.createElement('img');
			document.body.appendChild(imgr1);
			imgr1.src = "countries/galata.png";
			imgr1.style.position = "absolute";
			imgr1.style.zIndex = "190";
			imgr1.style.width ="40px";
			imgr1.style.height = "40px";
			imgr1.id = "tower".concat(stra);
			
			imgr1.style.left = -20+rect.left+rect.width/2+"px";
			imgr1.style.top = rect.top+rect.height/2-30+"px";
			
			towerchoosen = false;
			
			hastower[data] = 1;
			
		}
		else if(hastower[data] == 1) {
			document.body.removeChild(document.getElementById( "tower".concat(data.toString()) ) );
			hastower[data] = 0;
			towerchoosen = true;
		}
		else{}
		
		
		//document.body.removeChild(document.getElementById("tower1"));
		
	}
	
	
	function hasborder(data1) {
		borders = [];
		
		if(document.getElementById("che").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 1){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else if(choosentogive[i] == 1 || choosentogive1[i] == 1){ borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
				
		}
		
		else if(document.getElementById("che2").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 2){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else if(choosentogive[i] == 1 || choosentogive1[i] == 1){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
		}
		else if(document.getElementById("che3").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 3){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else if(choosentogive[i] == 1 || choosentogive1[i] == 1){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
		}
		else if(document.getElementById("che4").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 4){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else if(choosentogive[i] == 1 || choosentogive1[i] == 1){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
		}
		else{}
		
		
		
		for(var i = 0;i<borders.length+2;i++){
		
			if(borders[i] == data1){
				
				return true;
			}
			
		}
		
		return false;
	}
	function haspureborder(data2) {
		borders = [];
		
		if(document.getElementById("che").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 1){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
				
		}
		
		else if(document.getElementById("che2").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 2){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
		}
		else if(document.getElementById("che3").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 3){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
		}
		else if(document.getElementById("che4").checked == true){
			for(var i = 1;i<127;i++){
					
					if(imgteams[i] == 4){borders.push.apply(borders,  eval( "border".concat(i) )  );}
					else{}
					}
		}
		else{}
		
		
		
		for(var i = 0;i<borders.length+2;i++){
		
			if(borders[i] == data2){
				
				return true;
			}
			
		}
		return false;
	}
	function hasborderforone(data4,data5){
		for(var i4 = 0;i4<15;i4++){
			if(eval( "border".concat(data4) )[i4] == data5){return true;}
		}
		return false;
		
	}
	function disselectborders(data3){
		//mantik hatasi var. Her seferinde imgx fonksiyonu burayi yenidn cagiriyor. o yuzden butun pureborder olmayanlar gidiyor
		for(var i3 = 0;i3<127;i3++){
		
			if(haspureborder(i3) == false && hasborderforone(data3,i3) == true && (choosentogive[i3] == 1 || choosentogive1[i3] == 1) ){
				imgX(i3,1);
			}
			
		}
	}
	function disselectAll(){
		
		for(var i5 = 0;i5<127;i5++){
		
			if(choosentogive[i5] == 1 || choosentogive1[i5] == 1 ){
				imgX(i5,1);
			}
			
		}
	}
// Add and start the 'main' state to start the game
game.state.add('main1', mainState);  
game.state.start('main1');  