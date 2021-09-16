var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//GENERAL FUNCTIONS MODULE START**********************************************************************************

//NUMBER SET FUNCTIONS////////////////////////////////////
function findMax(){
	var max = -Infinity;
	for (var i=0; i<arguments.length; i++){
		if (arguments[i] > max)max = arguments[i];
	}
	return max;
}

function findMin(){
	var min = Infinity;
	for (var i=0; i<arguments.length; i++){
		if (arguments[i] < min)min = arguments[i];
	}
	return min;
}

function findMean(){
	var sum = 0;
	for (var i=0; i<arguments.length; i++){
		sum += arguments[i];
	}
	result = sum/arguments.length;
	return result;
}

function findMedian(){
	var mid = Math.floor(arguments.length/2);
	return arguments[mid];
}

function findMode(){
	var counted = [];
	var mode = null;
	
	for (var i=0; i<arguments.length; i++){
		var num = arguments[i];
		if (counted.includes(num) == false){
			var count = arrCount(arguments, num);
			counted.push(num);
			if (mode == null){
				mode = {num: num, count: count};
			}
			else if (mode.count < count){
				mode = {num: num, count: count};
			}
		}
		else{
			continue;
		}
	}
	return mode.num;
}
		


//////////////////////////////////////////////////////



//TRIG FUNCTIONS//////////////////////////////////////

//DISTANCE FUNCTION
function getDist(ax, ay, bx, by){
	var dx = ax - bx;
	var dy = ay - by;
	var d = Math.sqrt(dx*dx + dy*dy);
	return d;
}

//DIRECTION FUNCTION
function getDir(ax, ay, bx, by){
	var dx = bx - ax;
	var dy = by - ay;
	var dir = Math.atan(dy/dx);

	if (dx<0){
		dir += Math.PI;
	}
	else if (dy<0){
		dir += Math.PI*2;
	}
	
	
	return (dir);
}

/////////////////////////////////////////////////////

//ARRAY FUNCTIONS////////////////////////////////////

//FIND INDEX FUNCTION
function arrFindIndex(arr, value){
	for (var i=0; i<arr.length; i++){
		if (arr[i] == value)return i;
	}
	return false;
}

//ARRAY EXECUTE FUNCTION
//executes a function that belongs to objects in array
function arrExecute(arr, foo){
	for (var k in arr){
		arr[k][foo]();
	}
}

//ARRAY CALL FUNCTION
//calls a function on all objects in array, accepts up to 3 arguments
function arrCall(arr, foo, arg1=null, arg2=null, arg3=null, arg4=null){
	for (var k in arr){
		foo.call(arr[k], arg1, arg2, arg3, arg4);
	}
}

//ARRAY ADD MULTIPLE FUNCTION
function arrAdd(arr, value, num){
	for (var i=0; i<num; i++){
		arr.push(value);
	}
}

//ARRAY COUNT VALUE
function arrCount(arr, value){
	var count = 0;
	for (var i=0; i<arr.length; i++){
		if (arr[i] == value)count++;
	}
	return count;
}

/////////////////////////////////////////////////////


//MISC FUNCTIONS/////////////////////////////////////

//REPEAT FUNCTION
function repeat(num, foo){
	for (var i=0; i<num; i++){
		foo();
	}
}

/////////////////////////////////////////////////////

//Collision Detection////////////////////////////////

function collisionCircleObj(a, b){
	dx = (a.x+a.boundX) - (b.x+b.boundX);
	dy = (a.y+a.boundY) - (b.y+b.boundY);
	dist = Math.sqrt(dx*dx + dy*dy)

	if (a.boundR + b.boundR > dist){
		return true;
	}
}

function collisionCircle(x1, y1, r1, x2, y2, r2){
	dx = (x1) - (x2);
	dy = (y1) - (y2);
	dist = Math.sqrt(dx*dx + dy*dy)

	if (r1 + r2 > dist){
		return true;
	}
	return false;
}

function collisionRectObj(a, b){
	if (a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y)return true;
	return false;
}

function collisionRect(x1, y1, w1, h1, x2, y2, w2, h2){
	if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2)return true;
	return false;
}


function collisionLine(x1, y1, x2, y2, objArr){
	var dir = getDir(x1, y1, x2, y2);
	var dist = getDist(x1, y1, x2, y2);

	for (var i=0; i<=dist; i++){
		var x = x1 + Math.cos(dir)*i;
		var y = y1 + Math.sin(dir)*i;
		for (var k in objArr){
			var obj = objArr[k];
			if (collisionRect(x, y, 1, 1, obj.x, obj.y, obj.width, obj.height))return true;
		}
	}
	
	return false;
}
	

function pointInCircle(px, py, cx, cy, cr){
	var d = getDist(px, py, cx, cy);
	if (d < cr)return true;
	return false;
}

function pointInRect(px, py, rx, ry, rw, rh){
	if (px>=rx && px<rx+rw && py>=ry && py<ry+rh)return true;
	return false;
}

function placeEmpty(x, y){
	for (var k in instances){
		if (instances[k].x == x && instances[k].y == y)return false;
	}
	return true;
}

function placeMeeting(x, y, objArr){
	for (var k in objArr){
		if (objArr[k].x == x && objArr[k].y == y)return objArr[k];
	}
	return false;
}

/////////////////////////////////////////////////////

//DRAW FUNCTIONS/////////////////////////////////////

//DRAW RECTANGLE FUNCTIONS
function drawRect(x, y, width, height, color="black"){
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function drawRectStroke(x, y, width, height, color="black"){
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.strokeStyle = color;
	ctx.stroke();
	ctx.closePath();
}

//DRAW CIRCLE FUNCTIONS
function drawCircle(x, y, size, color="black"){
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI*2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function drawCircleStroke(x, y, size, color="black"){
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI*2);
	ctx.strokeStyle = color;
	ctx.stroke();
	ctx.closePath();
}

//DRAW POLYGON FUNCTIONS
function drawPoly(x, y, size, sides, angle=0, color="black"){
	var spread = (Math.PI*2)/sides;
	ctx.beginPath();
	ctx.moveTo(x + size*Math.cos(angle), y + size*Math.sin(angle));
	for (var i=0; i<sides; i++){
		ctx.lineTo(x + size*Math.cos(angle + spread*i), y + size*Math.sin(angle + spread*i));
	}
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

//DRAW TEXT FUNCTIONS
function drawText(x, y, str, color="black", align="left", style="16px Arial"){
	ctx.font = style;
	ctx.fillStyle = color;
	ctx.textAlign = align;
	ctx.fillText(str, x, y);
}

function drawTextStroke(x, y, str, color="black", align="left", style="16px Arial"){
	ctx.font = style;
	ctx.strokeStyle = color;
	ctx.textAlign = align;
	ctx.strokeText(str, x, y);
}

function drawMultiLineText(x, y, str, color="black", align="left", style="16px Arial"){
	ctx.font = style;
	ctx.fillStyle = color;
	ctx.textAlign = align;
	var lines = str.split("/n");
	var lineHeight = parseInt(style, 10);
	var strHeight = lines.length*lineHeight;
	for (var i=0; i<lines.length; i++){
		ctx.fillText(lines[i], x, y-(strHeight/2)+(lineHeight*i)+lineHeight);
	}
}
		

////////////////////////////////////////////////////


//STRING FUNCTIONS//////////////////////////////////
function getStrWidth(str){
	var lines = str.split("/n");
	var width = 0;
	for (var i=0; i<lines.length; i++){
		if (ctx.measureText(lines[i]).width > width){
			width = ctx.measureText(lines[i]).width;
		}
	}
	return width;
}


function getStrHeight(str){
	var lines = str.split("/n");
	var lineHeight = parseInt(ctx.font, 10);
	return (lines.length*lineHeight);
}
	

////////////////////////////////////////////////////

//GENERAL FUNCTIONS MODULE END************************************************************************************




//MOUSE INPUT MODULE START****************************************************************************


//Set Listeners///////////////////////////////////

canvas.addEventListener("mousemove", mouseMoveHandler, false);
canvas.addEventListener("mousedown", mouseDownHandler, false);
canvas.addEventListener("mouseup", mouseUpHandler, false);
canvas.addEventListener("wheel", wheelHandler, false);

///////////////////////////////////////////////////


//State Vars///////////////////////////////////////
middlePressed = false;
mouseClicked = false;
mouseUnclicked = false;
mouseScrollUp = false;
mouseScrollDown = false;
///////////////////////////////////////////////////

//Clear States Function////////////////////////////
function clearMouseStates(){
	if (mouseClicked)mouseClicked = false;
	if (mouseUnclicked)mouseUnclicked = false;
	if (mouseScrollUp)mouseScrollUp = false;
	if (mouseScrollDown)mouseScrollDown = false;
}

//this function is called at end of each frame.

///////////////////////////////////////////////////


//Handler Functions/////////////////////////////////

var mousePos = {x: 0, y: 0};			//initialize mouse position

function mouseMoveHandler(e) {				
	//triggers whenever mouse is moved
	mousePos = getMousePos(canvas, e);
}


function mouseDownHandler(e){				
	//triggers anytime mouse is clicked
	mouseClicked = true;
	if (e.which == 2)middlePressed = true;
}


function mouseUpHandler(e){				
	//triggers anytime mouse is released
	mouseUnclicked = true;
	middlePressed = false;
}

function wheelHandler(e){
	if (e.deltaY < 0){
		//scroll up code here
		mouseScrollUp = true;
	}
	else{
		//scroll down code here
		mouseScrollDown = true;
	}
}

///////////////////////////////////////////////////////


//GET MOUSE POSITION FUNCTION/////////////////////////

function getMousePos(canvas, e){
	var rect = canvas.getBoundingClientRect();
	return{
		x: (e.clientX - rect.left),
		y: (e.clientY - rect.top)
	};
}

///////////////////////////////////////////////////////


//DISPLAY MOUSE COORDINATES FUNCTION//////////////////

function dispMouseCoord(){					//used for debugging, put in main function
	ctx.font = "12px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "left";
	ctx.fillText(`x: ${mousePos.x}, y: ${mousePos.y}`, 16, 16);
}

///////////////////////////////////////////////////////

//MOUSE INPUT MODULE END******************************************************************************




//GRID MODULE START***********************************************************************************************


//GRID INITIALIZER///////////////////////			/////need to fix this!!!!!
function newGrid(rows, cols){
	var grid = [];
	for (var r=0; r<rows; r++){
		grid.push([]);
		for (var c=0; c<cols; c++){
			grid[r][c] = 0;
		}
	}
	return grid;
}
/////////////////////////////////////////

//GRID DRAW FUNCTIONS/////////////////////

//this will draw a grid made of squares
function drawGrid(grid, x, y, size=16, gridLines=true){
	for (var r=0; r<grid.length; r++){
		for(var c=0; c<grid[0].length; c++){
			if (gridLines == true)drawRectStroke(x + r*size, y + c*size, size, size);
			if (grid[r][c] != -1)continue;
			drawRect(x + c*size, y + r*size, size, size);
		}
	}
}


//this will draw a gid of the acutal values
function drawGridNum(grid, x, y, size=16, gridLines=true, noShow=[]){
	size /= 2;
	for (var r=0; r<grid.length; r++){
		for(var c=0; c<grid[0].length; c++){
			if (gridLines == true)drawRectStroke(x + c*size*2, y + r*size*2, size*2, size*2);
			if (noShow.includes(grid[r][c]))continue;
			drawText(x + c*size*2, y+size + r*size*2, grid[r][c], "black", "left", `${size}px Arial`);
		}
	}
}

////////////////////////////////////////

//GRID SETTER FUNCTIONS/////////////////
function gridSetColumn(grid, value, c){
	for (var r=0; r<grid.length; r++){
		grid[r][c] = value;
	}
}

function gridSetRow(grid, value, r){
	for (var c=0; c<grid[0].length; c++){
		grid[r][c] = value;
	}
}

function gridSetRect(grid, value, row, col, w, h){
	for (var r=0; r<h; r++){
		for (var c=0; c<w; c++){
			grid[row+r][col+c] = value;
		}
	}
}

function gridSetDisk(grid, value, row, col, rad){
	for (var r=0; r<grid.length; r++){
		for (var c=0; c<grid[0].length; c++){
			var dist = getDist(row, col, r, c);
			if (dist <= rad){
				grid[r][c] = value;
			}
		}
	}
}

function gridSetAll(grid, value){
	for (var r=0; r<grid.length; r++){
		for (var c=0; c<grid[0].length; c++){
			grid[r][c] = value;
		}
	}
}
///////////////////////////////////////////

//RUN FUNCTION FOR ALL GRID VALUES/////////
function gridForAll(grid, foo){
	for (var r=0; r<grid.length; r++){
		for (var c=0; c<grid[0].length; c++){
			foo(r, c, grid);
		}
	}
}
///////////////////////////////////////////


//GRID CHECK FUNCTIONS/////////////////////
function gridIncludes(grid, value){
	for (var r=0; r<grid.length; r++){
		if (grid[r].includes(value))return true;
	}
	return false;
}

function gridFindIndex(grid, value){
	var index = null;
	gridForAll(grid, function(r, c){
		if (grid[r][c] == value && index == null){
			index = {row: r, col: c};
		}
	});
	return index;
}

function gridFindIndexOfAll(grid, value){
	var list = [];
	gridForAll(grid, function(r, c){
		if (grid[r][c] == value)list.push({row: r, col: c});
	});
	return list;
}

function gridCount(grid, value){
	var count = 0;
	gridForAll(grid, function(r, c){
		if (grid[r][c] == value)count++;
	});
	return count;
}


function gridGetAdjacent(grid, row, col, restrict=function(val){return false;}){
	var list = [];
	for (var i=0; i<4; i++){
		var sin = Math.round(Math.sin(i*Math.PI/2));
		var cos = Math.round(Math.cos(i*Math.PI/2));
		if (grid[row+sin] == undefined || grid[row][col+cos] == undefined)continue;
		if (restrict(grid[row+sin][col+cos]) == false)list.push(grid[row+sin][col+cos]);
	}
	return list;
}


function gridFindRand(grid, value){
	if (gridIncludes(grid, value) == false)return false;
	do {
		var r = Math.floor(Math.random()*grid.length);
		var c = Math.floor(Math.random()*grid[0].length);
	}
	while (grid[r][c] != value);

	return {row: r, col: c};
}

///////////////////////////////////////////

//GRID MODULE END*************************************************************************************************









//VIEW MODULE START**********************************************************************************************

var world = {
	x: 0,
	y: 0,
	scale: 1
}

world.draw = function(){
	drawRectStroke(this.x, this.y, canvas.width*this.scale, canvas.height*this.scale);
}


world.zoom = function(){
	worldMouseX = (mousePos.x - world.x)/world.scale;
	worldMouseY = (mousePos.y - world.y)/world.scale;
	drawText(16, 32, `worldX: ${worldMouseX}, worldY: ${worldMouseY}`, "black", "left", "Arial 8px");
	if (mouseScrollUp && world.scale < 3){
		world.scale += .1;
		world.x += ((mousePos.x - world.x)/world.scale - worldMouseX)*world.scale;
		world.y += ((mousePos.y - world.y)/world.scale - worldMouseY)*world.scale;
	}
	if (mouseScrollDown && world.scale > .2){
		world.scale -= .1;
		world.x += ((mousePos.x - world.x)/world.scale - worldMouseX)*world.scale;
		world.y += ((mousePos.y - world.y)/world.scale - worldMouseY)*world.scale;
	}
}

world.pan = function(){
	if (middlePressed){
		if (mouseClicked){
			this.x0 = this.x;
			this.y0 = this.y;
			this.mx0 = mousePos.x;
			this.my0 = mousePos.y;
		}
		else{
			this.x = this.x0 + (mousePos.x-this.mx0);
			this.y = this.y0 + (mousePos.y-this.my0);
		}
	}
}


//VIEW MODULE END************************************************************************************************



//BATTLEFIELD MODULE START***************************************************************************************
var battlefield = {
	x: 32,
	y: 32,
	size: 32,
	grid: newGrid(36, 36)
}

battlefield.grid[3][3] = -1;

battlefield.draw = function(){
	drawGrid(this.grid, world.x + (this.x*world.scale), world.y + (this.y*world.scale), this.size*world.scale);	
}

battlefield.updateGrid = function(){
	gridForAll(battlefield.grid, function(r, c, grid){
		if (grid[r][c].constructor == unit){
			grid[r][c] = 0;
		}
	});
	for (var k in units){
		this.grid[units[k].row][units[k].col] = units[k];
	}
}
//BATTLEFIELD MODULE END****************************************************************************************


//CURSOR MODULE START*******************************************************************************************
var cursor = {
	select: null
}

cursor.draw = function(){
	this.row = Math.floor((worldMouseY-battlefield.y)/battlefield.size);
	this.col = Math.floor((worldMouseX-battlefield.x)/battlefield.size);
	if (pointInRect(this.row, this.col, 0, 0, battlefield.grid.length, battlefield.grid[0].length)){
		drawRect(world.x + (battlefield.x + this.col*battlefield.size)*world.scale, world.y + (battlefield.y + this.row*battlefield.size)*world.scale, battlefield.size*world.scale, battlefield.size*world.scale, "hsla(180, 100%, 50%, 50%)");
	}
}

cursor.step = function(){
	if (mouseClicked){
		if (cursor.select == null){
			if (battlefield.grid[this.row][this.col].constructor == unit){
				this.select = battlefield.grid[this.row][this.col];
			}
		}
		else{
			if (pointInRect(this.row, this.col, 0, 0, battlefield.grid.length, battlefield.grid[0].length)){
				this.select.row = this.row;
				this.select.col = this.col;
				battlefield.updateGrid();
				cursor.select = null;
			}
		}
	}
}


//CURSOR MODULE END*********************************************************************************************




//UNIT MODULE START*********************************************************************************************

var units = [];

function unit(row, col){
	this.row = row;
	this.col = col;
	units.push(this);
	battlefield.grid[row][col] = this;
}

unit.prototype.draw = function(){
	drawRect(world.x + (battlefield.x + this.col*battlefield.size)*world.scale, world.y + (battlefield.y + this.row*battlefield.size)*world.scale, battlefield.size*world.scale, battlefield.size*world.scale, "hsla(0, 100%, 50%, 100%)");
}


//UNIT MODULE END**********************************************************************************************



new unit(5, 5);


function Main(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	/////////////////////////////////////////////////
	dispMouseCoord();
	world.zoom();
	world.pan();

	battlefield.draw();

	for (var k in units){
		units[k].draw();
	}

	cursor.draw();
	cursor.step();

	/////////////////////////////////////////////////
	clearMouseStates();
	requestAnimationFrame(Main);
}

Main();




