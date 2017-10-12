var currentAlg;

var LL_START_X = 0;
var LL_START_Y = 210;
var LL_ELEM_WIDTH = 50;
var LL_ELEM_HEIGHT = 30;
var LL_NEXT_WIDTH = 40;
var LL_NEXT_HEIGHT = 30;

//FRONT field & label Height and width
var head1_LABLE_X = 30;
var head1_LABLE_Y = 60;
var head1_WIDTH = 50;
var head1_HEIGHT = 30;
var head1_POS_X = 75;
var head1_POS_Y = 60;

//DATA field height and width x and Y position
var POLYLL_ELE_WIDTH = 50;
var POLYLL_ELE_HEIGHT = 30;
var POLYLL_ELE_POS_X = 180;
var POLYLL_ELE_POS_Y = 120;

//NEXT field height and width
var POLYLL_NEXT_WIDTH = 45;
var POLYLL_NEXT_POS_X = 225;

var LL_ELEMS_PER_LINE = 5;
var LL_ELEM_SPACING = 150;
var LL_LINE_SPACING = 70;

//size of the linked list
var SIZE = 20;
var outputSpanCount = 1;
var randomAdd, firstAdd;
var address = [];
var head1 = head2 = head3 = null;


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
	this.cmd("CreateLabel", this.head1Id, head1, head1_POS_X + 5, head1_POS_Y);
	//Head2 Label	
	this.cmd("CreateLabel", this.head2Label, "head2 : ", head1_LABLE_X + 125, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head2RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 130, head1_POS_Y);
	this.cmd("CreateLabel", this.head2Id, head2, head1_POS_X + 130, head1_POS_Y);
	//Head3 Label
	this.cmd("CreateLabel", this.head3Label, "head3 : ", head1_LABLE_X + 250, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head3RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 255, head1_POS_Y);
	this.cmd("CreateLabel", this.head3Id, head3, head1_POS_X + 255, head1_POS_Y);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

PolynomialLL.prototype.create = function(head) {
	temp = {};

	//var ch, c, e;
	temp["coeff"] = arr[0];
	temp["exp"] = arr[1];
	temp["next"] = null;
	
	this.llCoeff = new Array(SIZE);
	this.llExp = new Array(SIZE);
	this.llNext = new Array(SIZE);
	this.addVal = new Array(SIZE);
	
	this.llCoeffVal = new Array();
	this.llExpVal = new Array();
	this.llNextVal = new Array();
	
	this.tempLabel = this.nextIndex++;
	this.headLable = this.nextIndex++;
	this.headRectID = this.nextIndex++;
	this.headId = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.llCoeff[i] = this.nextIndex++;
		this.llExp[i] = this.nextIndex++;
		this.llNext[i] = this.nextIndex++;
		this.addVal[i] = this.nextIndex++;
		
		this.llCoeffVal[i] = this.nextIndex++;
		this.llExpVal[i] = this.nextIndex++;
		this.llNextVal[i] = this.nextIndex++;
	}
	if (this.nodeCount == 1) {
		firstAdd = head;
		this.cmd("CreateLabel", this.headLable, "head : ", head1_LABLE_X, POLYLL_ELE_POS_Y);
		this.cmd("CreateRectangle", this.headRectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("CreateLabel", this.headId, "", head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("Step");
		
		this.moveValueFromOnePositionToAnother(this.headId, head, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 5, POLYLL_ELE_POS_Y);
	} else {
		firstAdd = randomAdd;
	}
	
	this.cmd("Step");
	this.cmd("CreateLabel", this.tempLabel, "temp", 225, 100);
	this.cmd("CreateRectangle", this.llCoeff[this.nodeCount], "", POLYLL_ELE_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llCoeffVal[this.nodeCount], "Coeff", POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llExp[this.nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llExpVal[this.nodeCount], "Exp", POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llNext[this.nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llNextVal[this.nodeCount], "Next", POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
	randomAdd = getRandomInt(1000, 5000);
	address[this.nodeCount] = randomAdd;
	this.cmd("CreateLabel", this.addVal[this.nodeCount], randomAdd, 225, 150);
	 
	this.cmd("Step");
	
	//Coefficient & exponents 
	this.cmd("CreateLabel", this.coefficient, "coefficient : ", 40, 20);
	this.cmd("CreateLabel", this.coefficientValue, temp["coeff"], 80, 20);
	this.cmd("CreateLabel", this.exponent, "exponent : ", 150, 20);
	this.cmd("CreateLabel", this.exponentValue, temp["exp"], 190, 20);
	
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.llCoeffVal[this.nodeCount], temp["coeff"], 80, 20, POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.llCoeff[this.nodeCount], temp["coeff"]);
	this.cmd("Delete", this.llCoeffVal[this.nodeCount]);
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.llExpVal[this.nodeCount], temp["exp"], 190, 20, POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.llExp[this.nodeCount], temp["exp"]);
	this.cmd("Delete", this.llExpVal[this.nodeCount]);
	this.cmd("Step");
	this.cmd("SetText", this.llNext[this.nodeCount], temp["next"]);
	this.cmd("Delete", this.llNextVal[this.nodeCount]);
	this.cmd("Step");
	head = this.addTerm(head, temp);
		
	return head;
} 

PolynomialLL.prototype.addTerm = function(head, t) {
	
	this.p1 = this.nextIndex++;
	this.p1RectID = this.nextIndex++;
	this.p1Id = this.nextIndex++;
	
	this.p2 = this.nextIndex++;
	this.p2RectID = this.nextIndex++;
	this.p2Id = this.nextIndex++;
	
	p1 = p2 = head;
	
	this.cmd("Step");
	this.cmd("CreateLabel", this.p1, "p1 :", 330, 120);
	this.cmd("CreateRectangle", this.p1RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 300, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.p1Id, "", head1_POS_X + 300, POLYLL_ELE_POS_Y);
	
	this.cmd("CreateLabel", this.p2, "p2 : ", 450, 120);
	this.cmd("CreateRectangle", this.p2RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 420, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.p2Id, "", head1_POS_X + 420, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	
	this.moveValueFromOnePositionToAnother(this.p1Id, firstAdd, head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 300, POLYLL_ELE_POS_Y, true);
	this.cmd("Step");
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.p2Id, firstAdd, head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 420, POLYLL_ELE_POS_Y, true);
	this.cmd("Step");
	
	if(p1 == null) {
		head = t;
		this.cmd("Step");
		this.moveValueFromOnePositionToAnother(this.headId, randomAdd, 225, 150, head1_POS_X + 5, POLYLL_ELE_POS_Y, true);
		this.cmd("Step");
		this.cmd("Connect", this.headId, this.llCoeff[this.nodeCount]);
		this.cmd("Step");
		this.resetLinkedListPositions();
		this.cmd("Step");
		this.cmd("Delete", this.tempLabel);
		this.cmd("Step");
		this.nodeCount++;
		
		this.cmd("Delete", this.coefficient);
		this.cmd("Delete", this.coefficientValue);
		this.cmd("Delete", this.exponent);
		this.cmd("Delete", this.exponentValue);
		this.cmd("Delete", this.p1);
		this.cmd("Delete", this.p1RectID);
		this.cmd("Delete", this.p1Id);
		this.cmd("Delete", this.p2);
		this.cmd("Delete", this.p2RectID);
		this.cmd("Delete", this.p2Id);
		
	} else {
		while(p1 != null && parseInt(p1["exp"]) > parseInt(t["exp"])) {
			
			p2 = p1;
			p1 = p1["next"];
		}
		if(p1 == null) {
			p2["next"] = t;
		} else if(parseInt(p1["exp"]) == parseInt(t["exp"])) {
			p1["coeff"] = parseInt(p1["coeff"]) + parseInt(t["coeff"]);
		} else if(parseInt(p1["exp"]) < parseInt(t["exp"]))	{
			if(p2 == p1){
				t["next"]= p1;
				head = t;
			} else {
				t["next"] = p1;
				p2["next"] = t;
			}
		}
	}
	
	return head;
} 

PolynomialLL.prototype.print = function(head) {
    t = head;
    while(t != null) {
              console.log("%d X^ %d --->", t["coeff"], t["exp"]);
              t = t["next"];
    }
}

PolynomialLL.prototype.resetLinkedListPositions = function(flag) {
			let nextX = (this.nodeCount) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
			let nextY = Math.floor((this.nodeCount) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
			this.cmd("Move", this.tempLabel, nextX + 25, nextY - 25);
			this.cmd("Move", this.llCoeff[this.nodeCount], nextX - 22, nextY);
			this.cmd("Move", this.llExp[this.nodeCount], nextX + LL_ELEM_WIDTH - 25, nextY);
			this.cmd("Move", this.llNext[this.nodeCount], nextX + LL_ELEM_WIDTH + 20, nextY);
			this.cmd("Move", this.addVal[this.nodeCount], nextX + 25, nextY + 25);
}

PolynomialLL.prototype.createNode = function() {
	this.commands = new Array();
	head1 = this.create(head1);
	this.print(head1);
	
	return this.commands;
}


PolynomialLL.prototype.moveValueFromOnePositionToAnother = function(id, val, pos1, pos2, pos3, pos4) {
	this.cmd("SetPosition", id, pos1, pos2);
	this.cmd("SetText", id, val);
	this.cmd("Move", id, pos3, pos4);
}


PolynomialLL.prototype.createCallBack = function(event) {
	this.implementAction(this.createNode.bind(this), "");
	console.log("Create");
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

