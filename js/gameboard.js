"use strict";

var gameboard = $('#gameboard');
var blank = 'img/tile-back.png';
var imageArray = [];

imageArray[0] = new Image();
imageArray[0].src = 'img/tile1.jpg';

imageArray[1] = new Image();
imageArray[1].src = 'img/tile2.jpg';

imageArray[2] = new Image();
imageArray[2].src = 'img/tile3.jpg';

imageArray[3] = new Image();
imageArray[3].src = 'img/tile4.jpg';

imageArray[4] = new Image();
imageArray[4].src = 'img/tile5.jpg';

imageArray[5] = new Image();
imageArray[5].src = 'img/tile6.jpg';

imageArray[6] = new Image();
imageArray[6].src = 'img/tile7.jpg';

imageArray[7] = new Image();
imageArray[7].src = 'img/tile8.jpg';

imageArray[8] = new Image();
imageArray[8].src = 'img/tile9.jpg';

imageArray[9] = new Image();
imageArray[9].src = 'img/tile10.jpg';

imageArray[10] = new Image();
imageArray[10].src = 'img/tile11.jpg';

imageArray[11] = new Image();
imageArray[11].src = 'img/tile12.jpg';

imageArray[12] = new Image();
imageArray[12].src = 'img/tile13.jpg';

imageArray[13] = new Image();
imageArray[13].src = 'img/tile14.jpg';

imageArray[14] = new Image();
imageArray[14].src = 'img/tile15.jpg';

imageArray[15] = new Image();
imageArray[15].src = 'img/tile16.jpg';

imageArray[16] = new Image();
imageArray[16].src = 'img/tile17.jpg';

imageArray[17] = new Image();
imageArray[17].src = 'img/tile18.jpg';

imageArray[18] = new Image();
imageArray[18].src = 'img/tile19.jpg';

imageArray[19] = new Image();
imageArray[19].src = 'img/tile20.jpg';

imageArray[20] = new Image();
imageArray[20].src = 'img/tile21.jpg';

imageArray[21] = new Image();
imageArray[21].src = 'img/tile22.jpg';

imageArray[22] = new Image();
imageArray[22].src = 'img/tile23.jpg';

imageArray[23] = new Image();
imageArray[23].src = 'img/tile24.jpg';

imageArray[24] = new Image();
imageArray[24].src = 'img/tile25.jpg';

imageArray[25] = new Image();
imageArray[25].src = 'img/tile26.jpg';

imageArray[26] = new Image();
imageArray[26].src = 'img/tile27.jpg';

imageArray[27] = new Image();
imageArray[27].src = 'img/tile28.jpg';

imageArray[28] = new Image();
imageArray[28].src = 'img/tile29.jpg';

imageArray[29] = new Image();
imageArray[29].src = 'img/tile30.jpg';

imageArray[30] = new Image();
imageArray[30].src = 'img/tile31.jpg';

imageArray[31] = new Image();
imageArray[31].src = 'img/tile32.jpg';

imageArray = _.shuffle(imageArray).slice(0, 8);
var gameTiles = imageArray.concat(imageArray);
gameTiles = _.shuffle(imageArray);

for (var i = 0; i < 16; i++) {
	var tile = $(document.createElement('img'));
	var picture = gameTiles[i];
	tile.attr('src', blank);
	tile.attr('width', '200');
	tile.attr('height', '200');
	tile.data('i', i);
	tile.data('picture', picture);
	gameboard.append(tile);
}

$("#gameboard").one('click', function() {
	var currentTime = _.now();
	var time = window.setInterval(function(){
		$('#currentTime').html(Math.floor((_.now()-currentTime)/1000));
	}, 1000);
});

$("#reset").click(function() {
	window.location.reload();
});

var matchedPairsCount = 0;
var remainingPairs = 8;
var wrongPairs = 0;

$('#gameboard gameTile').click(function() {
	$(this).attr('src', tilePictures[$(this).data('i')]);
	turnOne = $(this);
	if($(this).attr('src', tilePictures[$(this).data('i')]) != turnOne) {
		wrongPairs++;
		setTimeout(function() {
			turnOne.attr('src', blank);
			$(this).attr('src', blank);
		}, 1000);
	} else {
		matchedPairsCount++;
		remainingPairs--;
	}
});