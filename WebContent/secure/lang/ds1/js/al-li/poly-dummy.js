var currentAlg;

//FRONT field & label Height and width
var head1_LABLE_X = 30;
var head1_LABLE_Y = 150;
var head1_WIDTH = 50;
var head1_HEIGHT = 30;
var head1_POS_X = 75;
var head1_POS_Y = 150;


//DATA field height and width x and Y position
var CQLL_ELE_WIDTH = 50;
var CQLL_ELE_HEIGHT = 30;
var CQLL_ELE_POS_X = 150;
var CQLL_ELE_POS_Y = 80;

//NEXT field height and width
var CQLL_NEXT_WIDTH = 45;
var CQLL_NEXT_POS_X = 195;



//size of the linked list
var SIZE = 19;
var outputSpanCount = 1;

function PolynomialLL(am, w, h) {
	this.init(am, w, h);
}

PolynomialLL.prototype = new Algorithm();
PolynomialLL.prototype.constructor = PolynomialLL;
PolynomialLL.superclass = Algorithm.prototype;

PolynomialLL.prototype.init = function(am, w, h) {
	PolynomialLL.superclass.init.call(this, am, w, h);
	this.nextIndex = 0;
	this.commands = [];
	this.Controls();
	this.setUp();
}

function init() {
	var animManag = initCanvas();
	currentAlg = new PolynomialLL(animManag, canvas.width, canvas.height);
}

PolynomialLL.prototype.Controls = function() {
	this.ButtonArr = [];
	
	this.createButton = document.getElementById('createBtn');
	this.createButton.onclick = this.createCallBack.bind(this);
	this.ButtonArr.push(this.createTextField);
	this.ButtonArr.push(this.createButton);
}

PolynomialLL.prototype.setUp = function() {
	this.nodeCount = 1;
	this.head1Lable = this.nextIndex++;
	this.head1Id = this.nextIndex++;
	this.head2Label = this.nextIndex++;
	this.head2Id = this.nextIndex++;
	this.head3Label = this.nextIndex++;
	this.head3Id = this.nextIndex++;
	this.coefficient = this.nextIndex++;
	this.coefficientValue = this.nextIndex++;
	this.exponent = this.nextIndex++;
	this.exponentValue = this.nextIndex++;
	
	this.head1RectID = this.nextIndex++;
	this.head2RectID = this.nextIndex++;
	this.head3RectID = this.nextIndex++;
	
	//Head1 Label
	this.cmd("CreateLabel", this.head1Lable, "head1 : ", head1_LABLE_X, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head1RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 5, head1_POS_Y);
	this.cmd("CreateLabel", this.head1Id, "NULL", head1_POS_X + 5, head1_POS_Y);
	//Head2 Label	
	this.cmd("CreateLabel", this.head2Label, "head2 : ", head1_LABLE_X + 125, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head2RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 130, head1_POS_Y);
	this.cmd("CreateLabel", this.head2Id, "NULL", head1_POS_X + 130, head1_POS_Y);
	//Head3 Label
	this.cmd("CreateLabel", this.head3Label, "head3 : ", head1_LABLE_X + 250, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head3RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 255, head1_POS_Y);
	this.cmd("CreateLabel", this.head3Id, "NULL", head1_POS_X + 255, head1_POS_Y);
	//Coefficient & exponents 
	this.cmd("CreateLabel", this.coefficient, "coefficient : ", 40, 20);
	this.cmd("CreateLabel", this.coefficientValue, "", 80, 20);
	this.cmd("CreateLabel", this.exponent, "exponent : ", 150, 20);
	this.cmd("CreateLabel", this.exponentValue, "", 190, 20);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

PolynomialLL.prototype.create = function(elemToPush) {
	this.commands = new Array();
	this.llCoeff = new Array(SIZE);
	this.llExp = new Array(SIZE);
	this.llNext = new Array(SIZE);
	
	this.tempLabel = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.llCoeff[i] = this.nextIndex++;
		this.llExp[i] = this.nextIndex++;
		this.llNext[i] = this.nextIndex++;
	}
	
	this.cmd("SetText", this.coefficientValue, arr[0]);
	this.cmd("SetText", this.exponentValue, arr[1]);
	this.cmd("Step");
	this.cmd("CreateLabel", this.tempLabel, "temp", 195, 55);
	
	this.cmd("CreateRectangle", this.llCoeff[this.nodeCount], "", CQLL_ELE_WIDTH, CQLL_ELE_HEIGHT, CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	//this.cmd("SetBackgroundColor", this.llCoeff[this.nodeCount], "#80ff80");
	this.cmd("CreateRectangle", this.llExp[this.nodeCount], "", CQLL_NEXT_WIDTH, CQLL_ELE_HEIGHT, CQLL_NEXT_POS_X, CQLL_ELE_POS_Y);
	//this.cmd("SetBackgroundColor", this.llExp[this.nodeCount], "#ccffcc");
	this.cmd("CreateRectangle", this.llNext[this.nodeCount], "", CQLL_NEXT_WIDTH, CQLL_ELE_HEIGHT, CQLL_NEXT_POS_X + 45 , CQLL_ELE_POS_Y);
	//this.cmd("SetBackgroundColor", this.llNext[this.nodeCount], "#ff704d");
	
	
	return this.commands;
}


/*
PolynomialLL.prototype.resetLinkedListPositions = function(flag) {
		if (flag) {
			let nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
			let nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
			this.cmd("Move", this.cqllData[this.rear - 1], nextX, nextY);
			this.cmd("Move", this.cqllNext[this.rear - 1], nextX + LL_ELEM_WIDTH - 25, nextY);
			this.cmd("Move", this.dataAddress[this.rear - 1], nextX + 25, nextY + 25);
		} else {
			for (let i = this.rear - 1; i >= 1; i--) {
				
				let nextX = (i) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
				let nextY = Math.floor((i) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
				this.cmd("Move", this.cqllData[i], nextX - LL_ELEM_SPACING, nextY);
				this.cmd("Move", this.cqllNext[i], nextX - LL_ELEM_WIDTH - 35, nextY);
				this.cmd("Move", this.dataAddress[i], nextX - LL_ELEM_SPACING , nextY + 25);
			}
		}
}*/
/*
PolynomialLL.prototype.disableBtn = function() {
	for (var i = 0; i < this.Controls.length; i++) {
		this.Controls[i].disabled = true;
	}
}

PolynomialLL.prototype.enableBtn = function() {
	for (var i = 0; i < this.Controls.length; i++) {
		this.Controls[i].enabled = false;
	}
}
*/

PolynomialLL.prototype.createCallBack = function(event) {
	this.implementAction(this.create.bind(this), "");
	console.log("Create");
}

PolynomialLL.prototype.rearAddressChange = function() {
	this.cmd("SetPosition", this.rearId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
	this.cmd("SetText", this.rearId, randomAdd);
	this.cmd("Move", this.rearId, REAR_POS_X, REAR_POS_Y);
	this.cmd("Step");
	if (this.rearId != 0) {
		this.cmd("Disconnect", this.rearRectID, this.cqllData[this.rear - 1]);
	}
	this.cmd("Connect", this.rearRectID, this.cqllData[this.rear]);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

