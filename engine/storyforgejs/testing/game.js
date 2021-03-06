//Variables
		tile_size = 32;


		//Audio
		var bgMusic = new Sound("src/audio/bg1.wav");


		var m_x = 0;
		var m_y = 0;

		//Define tiles
		var dirt = new Sprite("src/img/dirt.png", false, 0);
		var woodFrame = new Sprite("src/img/wood_frame.png", false, 1);
		var grass = new Sprite("src/img/grass.png", false, 2);
		var redBlock = new Sprite("src/img/red_block.png)", false, 3);
		var water = new Sprite("src/img/water.png", false, 4);
		var enderTarget = new Sprite("src/img/ender_target.png", false, 5);
		var air = new Sprite("src/img/air.png", false, 7);
		var door = new Sprite("src/img/door.png", false, 8);
		var darkAir = new Sprite("src/img/dark.png", false, 9);

		var fauna = new Sprite("src/img/fauna.png", false);

		//Characters
		var lola = new Sprite("src/img/lola.png", false);
		var mastrometer = new Sprite("src/img/mastrometer_idle.png", false);
		var villager = new Sprite("src/img/Villager_Boy.png", false);

		/*Map*/
		var map = [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
					7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
					7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
					7, 7, 7, 7, 7, 7, 1, 1, 1, 7,
					7, 7, 7, 7, 7, 1, 9, 9, 9, 1,
					7, 7, 7, 7, 7, 1, 9, 9, 9, 1,
					7, 7, 7, 7, 7, 8, 9, 9, 9, 8,
					7, 7, 7, 7, 7, 8, 9, 9, 9, 8,
					4, 4, 4, 2, 2, 2, 2, 2, 2, 2,
					4, 4, 0, 0, 0, 0, 0, 0, 0, 0];


		var tmp = 0;


		// Pre init
		$(document).ready(function(){
			Context = new HTML("game", 720, 720);

			Matrix = new Matrix();
			Matrix.constructor();

			World = new World(10, 10, Matrix, 32);
			World.createMatrix();

			initKeyboard();
		});

		// Begin
		$(window).on('load', function(){

			bgMusic.loop();

		});

		// Update
		setInterval(function(){

			

			//clear the canvas
			cls();
			//console.clear();

			// Variables
			var mapIndex = 0;
			var mapSizeX = 10;
			var mapSizeY = 10;

			//mastrometer.drawAnimated(mastrometer.x, mastrometer.y, [0,1], 1, 32);
			
			

			villager.applyGravity();


			// //Draw map
			// for (var y = 0; y < mapSizeY; y++)
			// {
			// 	for (var x = 0; x < mapSizeX; x++, mapIndex++)
			// 	{
			// 		var tile_x = x * tile_size;
			// 		var tile_y = y * tile_size;
			// 		var tileType = map[mapIndex];

			// 		if(tileType == dirt.id)
			// 			dirt.draw(tile_x, tile_y);
			// 		else if(tileType == woodFrame.id)
			// 			woodFrame.draw(tile_x, tile_y);
			// 		else if(tileType == grass.id)
			// 			grass.draw(tile_x, tile_y);
			// 		else if(tileType == water.id)
			// 			water.draw(tile_x, tile_y);
			// 		else if(tileType == air.id)
			// 			air.draw(tile_x, tile_y);
			// 		else if(tileType == redBlock.id)
			// 			redBlock.draw(tile_x, tile_y);
			// 		else if(tileType == door.id)
			// 			door.draw(tile_x, tile_y);
			// 		else if(tileType == darkAir.id)
			// 			darkAir.draw(tile_x, tile_y);
			// 		else
			// 			enderTarget.draw(tile_x, tile_y);

			// 	}
			// }

			if(villager.x == water.x || villager.y == water.y)
				villager.gravitySpeed = 0;

			if (keyState[0]){
				villager.drawAnimated(villager.x, villager.y, [2], 3, 128);
				villager.accelX(-3);
			}
			else if (keyState[1]){
				villager.drawAnimated(villager.x, villager.y, [1], 3, 128);
				villager.accelX(3);
			} else{
				villager.drawAnimated(villager.x, villager.y, [0], 3, 128);
				villager.accelX(0);
			}

			if (keyState[2]){
				villager.accelY(-0.2);
			} else{
				villager.accelY(0.1);
			}
				
			if (keyState[4]){
				villager.jump(1);
				if(villager.y == villager.rockbottom){
					villager.y -= 5;
					villager.gravitySpeed = 0.5;
				}
			}
			
			

			//fauna.drawAnimated(32*8, 32*7, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 5, 32);




		}, tick_speed);