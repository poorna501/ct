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
var LL_ELEM_SPACING = 180;
var LL_LINE_SPACING = 70;

//size of the linked list
var SIZE = 6;
var outputSpanCount = 0;
var randomAdd, firstAdd;

var address = [], listCoeff = [], listExp = [];
var address1 = [], listCoeff1 = [], listExp1 = [];
var address2 = [], listCoeff2 = [], listExp2 = [];

var head1 = head2 = head3 = null;
var nodeCount = nodeCount1 = nodeCount2 = 0;

var flag = true, ch = "y"; 
var headPos = 1;

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
	
	this.displayButton = document.getElementById('displayBtn');
	this.displayButton.onclick = this.displayCallBack.bind(this);
	this.ButtonArr.push(this.displayButton);
}

PolynomialLL.prototype.varDec = function() {
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
	
	this.tempLabel = this.nextIndex++;
	this.headLable = this.nextIndex++;
	this.headRectID = this.nextIndex++;
	this.headId = this.nextIndex++;
	
	this.llCoeff1 = new Array(SIZE);
	this.llExp1 = new Array(SIZE);
	this.llNext1 = new Array(SIZE);
	this.addVal1 = new Array(SIZE);
	this.llCoeffVal1 = new Array();
	this.llExpVal1 = new Array();
	this.llNextVal1 = new Array();
	
	this.llCoeff2 = new Array(SIZE);
	this.llExp2 = new Array(SIZE);
	this.llNext2 = new Array(SIZE);
	this.addVal2 = new Array(SIZE);
	this.llCoeffVal2 = new Array();
	this.llExpVal2 = new Array();
	this.llNextVal2 = new Array();
	
	this.llCoeff = new Array(SIZE);
	this.llExp = new Array(SIZE);
	this.llNext = new Array(SIZE);
	this.addVal = new Array(SIZE);
	this.llCoeffVal = new Array();
	this.llExpVal = new Array();
	this.llNextVal = new Array();
	//display variable
	this.displayVal1 = new Array();
	this.displayVal2 = new Array();
	
	for (var i = 0; i < SIZE; i++) {
		this.llCoeff1[i] = this.nextIndex++;
		this.llExp1[i] = this.nextIndex++;
		this.llNext1[i] = this.nextIndex++;
		this.addVal1[i] = this.nextIndex++;
		this.llCoeffVal1[i] = this.nextIndex++;
		this.llExpVal1[i] = this.nextIndex++;
		this.llNextVal1[i] = this.nextIndex++;
		
		this.llCoeff2[i] = this.nextIndex++;
		this.llExp2[i] = this.nextIndex++;
		this.llNext2[i] = this.nextIndex++;
		this.addVal2[i] = this.nextIndex++;
		this.llCoeffVal2[i] = this.nextIndex++;
		this.llExpVal2[i] = this.nextIndex++;
		this.llNextVal2[i] = this.nextIndex++;
		
		//display array initialization
		this.displayVal1[i] = this.nextIndex++;
		this.displayVal2[i] = this.nextIndex++;
	}
	
	console.log("Display === " + this.displayVal1);
}

PolynomialLL.prototype.setUp = function() {
	
	this.varDec();
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
	
	if (flag) {
		nodeCount = nodeCount1;
		
		address = address1.slice();
		listCoeff = listCoeff1.slice();
		listExp = listExp1.slice();

		this.llCoeff = this.llCoeff1.slice();
		this.llCoeffVal = this.llCoeffVal1.slice();
		this.llExp = this.llExp1.slice();
		this.llExpVal = this.llExpVal1.slice();
		this.llNext = this.llNext1.slice();
		this.llNextVal = this.llNextVal1.slice();
		this.addVal = this.addVal1.slice();
	} else {
		nodeCount = nodeCount2;
		
		address = address2.slice();
		listCoeff = listCoeff2.slice();
		listExp = listExp2.slice();
		
		this.llCoeff = this.llCoeff2.slice();
		this.llCoeffVal = this.llCoeffVal2.slice();
		this.llExp = this.llExp2.slice();
		this.llExpVal = this.llExpVal2.slice();
		this.llNext = this.llNext2.slice();
		this.llNextVal = this.llNextVal2.slice();
		this.addVal = this.addVal2.slice();
	}
	//var ch, c, e;
	temp["coeff"] = listCoeff[nodeCount] = arr[0];
	temp["exp"] = listExp[nodeCount] = arr[1];
	temp["next"] = null;
	
	if (nodeCount == 0) {
		firstAdd = head;
		this.cmd("CreateLabel", this.headLable, "head : ", head1_LABLE_X, POLYLL_ELE_POS_Y);
		this.cmd("CreateRectangle", this.headRectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("CreateLabel", this.headId, "", head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("Step");
		if (flag) {
			this.moveValueFromOnePositionToAnother(this.headId, head, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		} else {
			this.moveValueFromOnePositionToAnother(this.headId, head, head1_POS_X + 130, head1_POS_Y, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		}
	} else {
		firstAdd = address[0];
	}
	
	this.cmd("Step");
	this.cmd("CreateLabel", this.tempLabel, "temp", 225, 100);
	this.cmd("CreateRectangle", this.llCoeff[nodeCount], "", POLYLL_ELE_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llCoeffVal[nodeCount], "", POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llExp[nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llExpVal[nodeCount], "", POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llNext[nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llNextVal[nodeCount], "", POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
	randomAdd = getRandomInt(1000, 5000);
	address[nodeCount] = randomAdd;
	this.cmd("CreateLabel", this.addVal[nodeCount], randomAdd, 225, 150);
	this.cmd("Step");
	
	//Coefficient & exponents 
	this.cmd("CreateLabel", this.coefficient, "coefficient : ", 40, 20);
	this.cmd("CreateLabel", this.coefficientValue, temp["coeff"], 80, 20);
	this.cmd("CreateLabel", this.exponent, "exponent : ", 150, 20);
	this.cmd("CreateLabel", this.exponentValue, temp["exp"], 190, 20);
	
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.llCoeffVal[nodeCount], temp["coeff"], 80, 20, POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.llCoeff[nodeCount], temp["coeff"]);
	this.cmd("Delete", this.llCoeffVal[nodeCount]);
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.llExpVal[nodeCount], temp["exp"], 190, 20, POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.llExp[nodeCount], temp["exp"]);
	this.cmd("Delete", this.llExpVal[nodeCount]);
	this.cmd("Step");
	this.cmd("SetText", this.llNext[nodeCount], temp["next"]);
	this.cmd("Delete", this.llNextVal[nodeCount]);
	this.cmd("Step");
	head = this.addTerm(head, temp, nodeCount);
		
	return head;
} 

PolynomialLL.prototype.addTerm = function(head, t, nodeCount) {
	p1 = p2 = head;
	
	let index = 0;
	this.p1 = this.nextIndex++;
	this.p1RectID = this.nextIndex++;
	this.p1Id = this.nextIndex++;
	
	this.p2 = this.nextIndex++;
	this.p2RectID = this.nextIndex++;
	this.p2Id = this.nextIndex++;
	
	this.cmd("CreateLabel", this.p1, "p1 :", 330, 120);
	this.cmd("CreateRectangle", this.p1RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 300, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.p1Id, "", head1_POS_X + 300, POLYLL_ELE_POS_Y);
	
	this.cmd("Step");
	this.cmd("CreateLabel", this.p2, "p2 : ", 450, 120);
	this.cmd("CreateRectangle", this.p2RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 420, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.p2Id, "", head1_POS_X + 420, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.p1Id, firstAdd, head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 300, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	
	if (head != null) {
		this.cmd("Connect", this.p1RectID, this.llNext[index])
	}
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.p2Id, firstAdd, head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 420, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	if (head != null) {
		this.cmd("Connect", this.p2RectID, this.llNext[index])
	}
	this.cmd("Step");
	
	if(p1 == null) {
		head = t;
		
		this.moveValueFromOnePositionToAnother(this.headId, randomAdd, 225, 150, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("Step");
		this.cmd("Connect", this.headId, this.llCoeff[index]);
		this.cmd("Step");
		this.resetLinkedListPositions(0, nodeCount);
		this.cmd("Step");
		nodeCount++;
		if (flag) {
			nodeCount1 = nodeCount;
		} else {
			nodeCount2 = nodeCount;
		}
		this.deleteLabels();
		
	} else {
		index;
		while(p1 != null && parseInt(p1["exp"]) > parseInt(t["exp"])) {
			p2 = p1;
			p1 = p1["next"];
			
			this.moveValueFromOnePositionToAnother(this.p2Id, address[index], head1_POS_X + 300, POLYLL_ELE_POS_Y, head1_POS_X + 420, POLYLL_ELE_POS_Y);
			this.cmd("Step");
			if (index >= 1) {
				this.cmd("Disconnect", this.p2RectID, this.llNext[index - 1]);
			}
			
			this.cmd("Disconnect", this.p2RectID, this.llNext[index]);
			this.cmd("Step");
			this.cmd("Connect", this.p2RectID, this.llNext[index]);
			this.cmd("Step");
			let nextX = (index) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
			if (flag) {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
			} else {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;				
			}
			this.cmd("Step");
			
			if (p1 == null) {
				this.moveValueFromOnePositionToAnother(this.p1Id, null, nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 300, POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("Disconnect", this.p1RectID, this.llNext[index]);
				
			} else {
				this.moveValueFromOnePositionToAnother(this.p1Id, address[index + 1], nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 300, POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("Disconnect", this.p1RectID, this.llNext[index]);
				this.cmd("Step");
				this.cmd("Connect", this.p1RectID, this.llNext[index + 1]);
			}
			index++;
		}
		
		if(p1 == null) {
			p2["next"] = t;
			
			let nextX = (index - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
			if (flag) {
				var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
			} else {
				var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
			}
			this.dummyCoeff = this.nextIndex++;
			this.cmd("CreateLabel", this.dummyCoeff, address[index], 225, 150);
			this.cmd("Sethighlight", this.llNext[index - 1], "#ff4d4d");
			this.cmd("Step");
			this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], 225, 150, nextX + LL_ELEM_WIDTH + 20, nextY);
			this.cmd("Step");
			this.cmd("SetText", this.llNext[index - 1], address[index]);
			this.cmd("Sethighlight", this.llNext[index - 1], "");
			this.cmd("Connect", this.llNext[index - 1], this.llCoeff[nodeCount]);
			this.cmd("Step");
			this.resetLinkedListPositions(nodeCount, nodeCount);
			this.cmd("Step");
			nodeCount++;
			if (flag) {
				nodeCount1 = nodeCount;
			} else {
				nodeCount2 = nodeCount;
			}
			this.deleteLabels();
			
		} else if(parseInt(p1["exp"]) == parseInt(t["exp"])) {
			p1["coeff"] = parseInt(p1["coeff"]) + parseInt(t["coeff"]);
			
			this.dummyCoeff = this.nextIndex++;
			this.cmd("CreateLabel", this.dummyCoeff, temp["coeff"], POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
			this.cmd("Sethighlight", this.llExp[index], "#ff4d4d");
			this.cmd("Sethighlight", this.llExp[index], "#ff4d4d");
			this.cmd("Sep");
			this.cmd("Sethighlight", this.llExp[index], "");
			this.cmd("Sethighlight", this.llExp[index], "");
			let nextX = (index) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
			if (flag) {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
			} else {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
			}
			this.moveValueFromOnePositionToAnother(this.dummyCoeff, temp["coeff"], POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y, nextX - 22, nextY);
			this.cmd("Step");
			this.cmd("Delete", this.dummyCoeff);
			this.cmd("SetText", this.llCoeff[index], parseInt(p1["coeff"]));
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("Delete", this.llCoeff[nodeCount]);
			this.cmd("Delete", this.llExp[nodeCount]);
			this.cmd("Delete", this.llNext[nodeCount]);
			this.cmd("Delete", this.addVal[nodeCount]);
			this.deleteLabels();
			this.cmd("Step");
			
			if (flag) {
				address1.splice((nodeCount), 1);
				listCoeff1.splice((nodeCount), 1);
				listExp1.splice((nodeCount), 1);
				
				this.llCoeff1.splice((nodeCount), 1);
				this.llExp1.splice((nodeCount), 1);
				this.llNext1.splice((nodeCount), 1);
				this.addVal1.splice((nodeCount), 1);
				
				this.llCoeffVal1.splice((nodeCount), 1);
				this.llExpVal1.splice((nodeCount), 1);
				this.llNextVal1.splice((nodeCount), 1);
			} else {
				address2.splice((nodeCount), 1);
				listCoeff2.splice((nodeCount), 1);
				listExp2.splice((nodeCount), 1);
				
				this.llCoeff2.splice((nodeCount), 1);
				this.llExp2.splice((nodeCount), 1);
				this.llNext2.splice((nodeCount), 1);
				this.addVal2.splice((nodeCount), 1);
				
				this.llCoeffVal2.splice((nodeCount), 1);
				this.llExpVal2.splice((nodeCount), 1);
				this.llNextVal2.splice((nodeCount), 1);
			}
			//address.splice((nodeCount), 1);
			this.cmd("Step");
			index--;
			
		} else if(parseInt(p1["exp"]) < parseInt(t["exp"]))	{
			if(p2 == p1) {
				t["next"]= p1;
				head = t;
				
				this.dummyCoeff = this.nextIndex++;
				this.cmd("CreateLabel", this.dummyCoeff, address[index], head1_POS_X + 300, POLYLL_ELE_POS_Y);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], head1_POS_X + 300, POLYLL_ELE_POS_Y, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("SetText", this.llNext[nodeCount], address[index]);
				this.cmd("Step");
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Connect", this.llNext[nodeCount], this.llCoeff[index]);
				this.cmd("Step");
				this.cmd("CreateLabel", this.dummyCoeff, address[nodeCount ], 225, 150);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[nodeCount], 225, 150, head1_POS_X + 5, POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("SetText", this.headId, address[nodeCount]);
				this.cmd("Step");
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Disconnect", this.headId, this.llCoeff[index]);
				this.cmd("Step");
				this.cmd("Connect", this.headId, this.llCoeff[nodeCount]);
				this.cmd("Step");
				this.resetLinkedListPositions(index, nodeCount);
			} else {
				t["next"] = p1;
				p2["next"] = t;
				
				this.cmd("CreateLabel", this.dummyCoeff, address[index], head1_POS_X + 300, POLYLL_ELE_POS_Y);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], head1_POS_X + 300, POLYLL_ELE_POS_Y, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("SetText", this.llNext[nodeCount], address[index]);
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Connect", this.llNext[nodeCount], this.llCoeff[index]);
				this.cmd("Step");
				let nextX = (index - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
				if (flag) {
					var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
				} else {
					var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
				}
				this.cmd("CreateLabel", this.dummyCoeff, address[index], 225, 150);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[nodeCount], 225, 150, nextX + LL_ELEM_WIDTH + 20, nextY);
				this.cmd("Step");
				this.cmd("SetText", this.llNext[index - 1], address[nodeCount]);
				this.cmd("Step");
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Disconnect", this.llNext[index - 1], this.llCoeff[index]);
				this.cmd("Step");
				this.cmd("Connect", this.llNext[index - 1],  this.llCoeff[nodeCount]);
				this.cmd("Step");
				this.resetLinkedListPositions(index, nodeCount);
			}
			this.cmd("Step");
			this.changeValues(index, nodeCount);
		}
	}
	return head;
} 

PolynomialLL.prototype.moveHeadToHeadPos = function() {
	
	this.cmd("CreateLabel", this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 5, head1_POS_Y);
	this.cmd("Step");
	if (flag) {
		this.cmd("SetText", this.head1Id, address[0]);
		flag = false;
 	} else {
 		this.cmd("SetText", this.head2Id, address[0]);
 	}
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
}

PolynomialLL.prototype.changeValues = function(index, nodeCount) {
	address.splice(index, 0, address[nodeCount]);
	listCoeff.splice(index, 0, listCoeff[nodeCount]);
	listExp.splice(index, 0, listExp[nodeCount]);
	
	if (flag) {
		
		this.llCoeff1.splice(index, 0, this.llCoeff[nodeCount]);
		this.llExp1.splice(index, 0, this.llExp[nodeCount]);
		this.llNext1.splice(index, 0, this.llNext[nodeCount]);
		this.llExpVal1.splice(index, 0, this.llExpVal[nodeCount]);
		this.llCoeffVal1.splice(index, 0, this.llCoeffVal[nodeCount]);
		this.llNextVal1.splice(index, 0, this.llNextVal[nodeCount]);
		
		this.addVal1.splice(index, 0, this.addVal[nodeCount]);
		
		nodeCount++;
		if (flag) {
			nodeCount1 = nodeCount;
		} else {
			nodeCount2 = nodeCount;
		}
		
		this.llCoeff1.splice((nodeCount), 1);
		this.llExp1.splice((nodeCount), 1);
		this.llNext1.splice((nodeCount), 1);
		this.llExpVal1.splice((nodeCount), 1);
		this.llCoeffVal1.splice((nodeCount), 1);
		this.llNextVal1.splice((nodeCount), 1);
		this.addVal1.splice((nodeCount), 1);
		
	} else {
		
		this.llCoeff2.splice(index, 0, this.llCoeff[nodeCount]);
		this.llExp2.splice(index, 0, this.llExp[nodeCount]);
		this.llNext2.splice(index, 0, this.llNext[nodeCount]);
		this.llExpVal2.splice(index, 0, this.llExpVal[nodeCount]);
		this.llCoeffVal2.splice(index, 0, this.llCoeffVal[nodeCount]);
		this.llNextVal2.splice(index, 0, this.llNextVal[nodeCount]);
		this.addVal2.splice(index, 0, this.addVal[nodeCount]);
		
		nodeCount++;
		if (flag) {
			nodeCount1 = nodeCount;
		} else {
			nodeCount2 = nodeCount;
		}
		
		this.llCoeff2.splice((nodeCount), 1);
		this.llExp2.splice((nodeCount), 1);
		this.llNext2.splice((nodeCount), 1);
		this.llExpVal2.splice((nodeCount), 1);
		this.llCoeffVal2.splice((nodeCount), 1);
		this.llNextVal2.splice((nodeCount), 1);
		this.addVal2.splice((nodeCount), 1);
	}
	
	address.splice((nodeCount), 1);
	listCoeff.splice((nodeCount), 1);
	listExp.splice((nodeCount), 1);
	
	this.cmd("Step");
	this.deleteLabels();
}

PolynomialLL.prototype.deleteLabels = function() {
	if (flag) {
		address1 = address.slice();
		listCoeff1 = listCoeff.slice();
		listExp1 = listExp.slice();
	} else {
		address2 = address.slice();
		listCoeff2 = listCoeff.slice();
		listExp2 = listExp.slice();
	}
	
	this.cmd("Delete", this.tempLabel);
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
}

PolynomialLL.prototype.resetLinkedListPositions = function(count, nodeCount) {
	for (let i = count; i < nodeCount; i++) {
		let nextX = (i + 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
		if (flag) {
			var nextY = Math.floor((i + 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
		} else {
			var nextY = Math.floor((i + 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
		}
		
		this.cmd("Move", this.llCoeff[i], nextX - 22, nextY);
		this.cmd("Move", this.llExp[i], nextX + LL_ELEM_WIDTH - 25, nextY);
		this.cmd("Move", this.llNext[i], nextX + LL_ELEM_WIDTH + 20, nextY);
		this.cmd("Move", this.addVal[i], nextX + 25, nextY + 25);
	}
	
	var nextX = (count) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
	if (flag) {
		var nextY = Math.floor((count) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
	} else {
		var nextY = Math.floor((count) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
	}
	this.cmd("Move", this.tempLabel, nextX + 25, nextY - 25);
	this.cmd("Move", this.llCoeff[nodeCount], nextX - 22, nextY);
	this.cmd("Move", this.llExp[nodeCount], nextX + LL_ELEM_WIDTH - 25, nextY);
	this.cmd("Move", this.llNext[nodeCount], nextX + LL_ELEM_WIDTH + 20, nextY);
	this.cmd("Move", this.addVal[nodeCount], nextX + 25, nextY + 25);
}

PolynomialLL.prototype.print = function(head) {
    temp = head;
    
    this.tempLabel = this.nextIndex++;
    this.tempRectID = this.nextIndex++;
    this.tempId = this.nextIndex++;
    
    let nodeAdd = null;;
    if (nodeCount1 != 0 || nodeCount2 != 0) {
    	(flag) ? nodeAdd = address1[0] : nodeAdd = address2[0];
    } 
    
    this.cmd("CreateLabel", this.tempLabel, "temp : ", head1_LABLE_X + 360, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.tempRectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 365, head1_POS_Y);
	this.cmd("CreateLabel", this.tempId, "", head1_POS_X + 365, head1_POS_Y);
    if (flag) {
    	this.moveValueFromOnePositionToAnother(this.tempId, nodeAdd, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 365, head1_POS_Y);
    	this.cmd("Step");
    } else {
    	this.moveValueFromOnePositionToAnother(this.tempId, nodeAdd, head1_POS_X + 130, head1_POS_Y, head1_POS_X + 365, head1_POS_Y);
    	this.cmd("Step");
    }
    
    let index = xPos = 0;
    var disVal;
    while(temp != null) {
    	console.log("%d X^ %d --->", temp["coeff"], temp["exp"]);
    	temp = temp["next"];
    	
    	this.dummyTmpAdd1 = this.nextIndex++;
    	this.dummyTmpAdd2 = this.nextIndex++;
    	this.dummyCoeff = this.nextIndex++;
    	
    	(flag) ? this.cmd("Connect", this.tempRectID, this.llCoeff1[index]) : this.cmd("Connect", this.tempRectID, this.llCoeff2[index]);
    	let nextX = (index) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
    	if (flag) {
    		var nextY = Math.floor((index) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
    	} else {
    		var nextY = Math.floor((index) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
    	}
    	
    	this.cmd("CreateLabel", (flag) ? this.displayVal1[index] : this.displayVal2[index], "", 50 + xPos, (flag) ? 100 : 120);
    	this.cmd("Sethighlight", (flag) ? this.llCoeff1[index] : this.llCoeff2[index], "#4d4dff");
    	this.cmd("Sethighlight", (flag) ? this.llExp1[index] : this.llExp2[index], "#4d4dff");
    	disVal = (flag) ? listCoeff1[index]+ " X^ " + listExp1[index] : listCoeff2[index] + " X^ " + listExp2[index];
    	this.cmd("CreateLabel", (flag) ? this.dummyTmpAdd1 : this.dummyTmpAdd2, disVal,  nextX + LL_ELEM_WIDTH - 25, nextY);
    	this.cmd("Move", (flag) ? this.dummyTmpAdd1 : this.dummyTmpAdd2, 50 + xPos, (flag) ? 100 : 120);
    	this.cmd("Step");
    	
    	this.dummyarrow1 = this.nextIndex++;
    	this.dummyarrow2 = this.nextIndex++;
		this.cmd("CreateLabel", (flag) ? this.dummyarrow1 : this.dummyarrow2, "",  85 + xPos, (flag) ? 100 : 120);
		this.cmd("Step");
		this.cmd("SetText", (flag) ? this.dummyarrow1 : this.dummyarrow2, " --> ");
    	this.cmd("Step");
    	
    	this.cmd("SetText", (flag) ? this.displayVal1[index] : this.displayVal2[index], disVal);
    	this.cmd("Sethighlight", (flag) ? this.llCoeff1[index] : this.llCoeff2[index], "");
    	this.cmd("Sethighlight", (flag) ? this.llExp1[index] : this.llExp2[index], "");
    	this.cmd("Delete", (flag) ? this.dummyTmpAdd1 : this.dummyTmpAdd2);
    	
    	this.cmd("Step");
    	//this.cmd("SetText", (flag) ? this.displayVal1[index] : this.displayVal2[index], disVal + "-->");
    	this.cmd("Sethighlight", (flag) ? this.llNext1[index] : this.llNext2[index], "#4d4dff");
    	
    	console.log("index = " + index);
    	console.log("nodeCount1 = " + nodeCount1);
    	if ((flag) ? nodeCount1 == (index + 1) : nodeCount2 == (index + 1)) {
    		this.cmd("CreateLabel", this.dummyCoeff, null, head1_POS_X + 365, head1_POS_Y);
        	this.moveValueFromOnePositionToAnother(this.dummyCoeff, null, nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 365, head1_POS_Y);
    		this.cmd("Step")
    		this.cmd("SetText", this.tempId, null);
    	} else {
    		this.cmd("CreateLabel", this.dummyCoeff, (flag) ? address1[index + 1] : address2[index + 1], head1_POS_X + 365, head1_POS_Y);
    		this.moveValueFromOnePositionToAnother(this.dummyCoeff, (flag) ? address1[index + 1] : address2[index + 1], nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 365, head1_POS_Y);
    		this.cmd("Step")
    		this.cmd("SetText", this.tempId, (flag) ? address1[index + 1] : address2[index + 1]);
    	}
		this.cmd("Step");
		this.cmd("Sethighlight", (flag) ? this.llNext1[index] : this.llNext2[index], "");
		this.cmd("Disconnect", this.tempRectID, (flag) ? this.llCoeff1[index] : this.llCoeff2[index]);
		this.cmd("Step");
		if ((flag) ? nodeCount1 != (index + 1) : nodeCount2 != (index + 1)) {
			this.cmd("Connect", this.tempRectID, (flag) ? this.llCoeff1[index + 1] : this.llCoeff2[index])
		} else {
			this.dummyNull1 = this.nextIndex++;
			this.dummyNull2 = this.nextIndex++;
			this.cmd("CreateLabel", (flag) ? this.dummyNull1 : this.dummyNull2, "",  110 + xPos, (flag) ? 100 : 120);
			this.cmd("Step");
			this.cmd("SetText", (flag) ? this.dummyNull1 : this.dummyNull2, "NULL");
		}
		this.cmd("Step");
		index++;
		xPos = index * 65;
		this.cmd("Step");
		this.cmd("Delete", this.dummyCoeff); 
    }
	this.cmd("Step");
    console.log("NULL");
    this.cmd("Step");
    this.cmd("Delete", this.tempLabel);
    this.cmd("Delete", this.tempRectID);
    this.cmd("Delete", this.tempId);
    if (flag) {
    	flag = false;
    } else {
    	flag = true;
    }
}
 
PolynomialLL.prototype.createNode = function() {
	this.commands = new Array();
	this.dummyCoeff = this.nextIndex++;
	
	if (flag) {
		if (ch == "n") {
			//head1 = address[0];
			this.cmd("CreateLabel", this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y);
			this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 5, head1_POS_Y);
			this.cmd("Step");
			this.cmd("SetText", this.head1Id, address[0]);
			this.cmd("Step");
			this.cmd("Delete", this.dummyCoeff);
			this.cmd("Delete", this.headId);
			this.cmd("Delete", this.headRectID);
			this.cmd("Delete", this.headLable);
			this.cmd("Step");
			flag = false;
			ch = "y";
		} else {
			head1 = this.create(head1);
			//this.print(head1);
		}
	} else {
		if (ch == "y") {
			head2 = this.create(head2);
			//this.print(head2);
		} else {
			//head2 = address[0];
			this.cmd("CreateLabel", this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y);
			this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 130, head1_POS_Y);
			this.cmd("Step");
			this.cmd("SetText", this.head2Id, address[0]);
			this.cmd("Step");
			this.cmd("Delete", this.dummyCoeff);
			this.cmd("Delete", this.headId);
			this.cmd("Delete", this.headRectID);
			this.cmd("Delete", this.headLable);
			this.cmd("Step");
			flag = true;
			ch = "y";
		}
	}
	return this.commands;
}

PolynomialLL.prototype.displayNodes = function() {
	this.commands = new Array();
	this.print(head1);
	this.cmd("Step");
	this.print(head2);
	this.cmd("Step");
	//flag = true;
	
    
	return this.commands;
}

PolynomialLL.prototype.moveValueFromOnePositionToAnother = function(id, val, pos1, pos2, pos3, pos4) {
	this.cmd("SetPosition", id, pos1, pos2);
	this.cmd("SetText", id, val);
	this.cmd("Move", id, pos3, pos4);
}

PolynomialLL.prototype.createCallBack = function() {
	this.implementAction(this.createNode.bind(this), "");
	console.log("Create");
}

PolynomialLL.prototype.displayCallBack = function() {
	this.implementAction(this.displayNodes.bind(this), "");
	console.log("Display");
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

