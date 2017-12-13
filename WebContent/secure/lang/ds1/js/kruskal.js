var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = index = 0;

var kruskalArr= {};
var edgesMap = {};
var visited = {};
var adjMap = {};
var edgeWeight = {};

var VERTICES_FIXID_X_POS = [ 220, 145, 295, 70, 370, 145, 295, 220 ];
var VERTICES_FIXID_Y_POS = [ 50, 150, 150, 250, 250, 350, 350, 450 ];

var HIGHLIGHT_LABEL_COLOR = "#FF0000"
var HIGHLIGHT_LINK_COLOR = "#FF0000"

var HIGHLIGHT_COLOR = "#f962f3"
var HEIGHT_LABEL_COLOR = "#007700"

var LINK_COLOR = "#f962f3";
var HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
var visitedEdgeColor = "#6e00ff";
var colorsArr = ["#4cef83", "#3acde0", "#e039dd", "#8d96ba", "#e8b068", "#e8d668", "#ed368d"];




var ADJACENT_TABLE_HORIZONTAL_X_POS = 725;
var ADJACENT_TABLE_HORIZONTAL_Y_POS = 100;
var ADJACENT_TABLE_VERTICAL_X_POS = 700;
var ADJACENT_TABLE_VERTICAL_Y_POS = 125;
var ADJACENT_TABLE_LINE_FLAG = false;

var VISITED_VERTEX_X_POS = 150;

var adjacentTableMap = {};


function Kruskal(am, w, h) {
	this.init(am, w, h);
}

Kruskal.prototype = new Algorithm();
Kruskal.prototype.constructor = Kruskal;
Kruskal.superclass = Algorithm.prototype;

Kruskal.prototype.init = function(am, w, h) {
	Kruskal.superclass.init.call(this, am, w, h); 
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

Kruskal.prototype.addControls = function() {
	this.controls = [];
	this.vertexButton = document.getElementById("addVertexBtn");
	this.vertexButton.onclick = this.vertexCallback.bind(this);
	this.controls.push(this.vertexButton);
	
	this.edgeTextField = document.getElementById('edgeWeight');
	this.edgeTextField.onkeydown = this.returnSubmit(this.edgeTextField, this.edgeCallback.bind(this),  3);
	this.edgeButton = document.getElementById('addEdgeBtn');
	this.edgeButton.onclick = this.edgeCallback.bind(this);
	this.controls.push(this.edgeTextField);
	this.controls.push(this.edgeButton);
}

Kruskal.prototype.setup = function() {
	this.vertices = new Array(MAX_VERTICES_SIZE);
	this.verticesEdges = new Array(MAX_VERTICES_SIZE);
	this.edgeWeight = new Array(MAX_VERTICES_SIZE * 5);
	this.edgeLine = new Array(MAX_VERTICES_SIZE * 5);
	
	for (var i = 0; i < MAX_VERTICES_SIZE * 5; i++) {
		this.vertices[i] = this.nextIndex++;
		this.edgeLine[i] = this.nextIndex++;
		this.edgeWeight[i] = this.nextIndex++;
	}
	
	this.ADJACENT_TABLE_HORIZONTAL_LINE = this.nextIndex++;
	this.ADJACENT_TABLE_VERTICAL_LINE = this.nextIndex++;
	this.CURRENT_INDEX_LABEL = this.nextIndex++;
	this.CURRENT_INDEX_POINTER = this.nextIndex++;
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

Kruskal.prototype.vertexCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	
	if (VERTICES_SIZE < MAX_VERTICES_SIZE) {
		this.implementAction(this.vertex.bind(this), "");
	}
}

Kruskal.prototype.edgeCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	
	if (!isNaN($("#fromID .active").text()) && !isNaN($("#toID .active").text()) && $("#edgeWeight").val() != "") {
		this.implementAction(this.edge.bind(this), "");
	} else {
		alert("your entered wrong");
	}
}

Kruskal.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

Kruskal.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}


Kruskal.prototype.vertex = function() {
	this.commands = new Array();
	this.cmd("CreateCircle", this.vertices[VERTICES_SIZE], VERTICES_SIZE, VERTICES_FIXID_X_POS[VERTICES_SIZE], VERTICES_FIXID_Y_POS[VERTICES_SIZE]);
	$("#fromID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#toID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	VERTICES_SIZE++;
	return this.commands;
}
 
Kruskal.prototype.edge = function() {
	this.commands = new Array();
	this.weightRect = this.nextIndex++;
	this.edgeRect = this.nextIndex++;
	
	
	var fromEdge = parseInt($("#fromID .active").text());
	var toEdge = parseInt($("#toID .active").text());
	
	if (edgesMap[fromEdge + "-" + toEdge] == undefined) {
		var key = fromEdge + "-" + toEdge;
		if (fromEdge == toEdge) {
			alert("not possible to draw line");
		} else {
			if ((key == "0-3" || key == "3-0")) {
				this.cmd("DrawLine", this.edgeLine[index], VERTICES_FIXID_X_POS[0] - 20, VERTICES_FIXID_Y_POS[0], 
						VERTICES_FIXID_X_POS[3], VERTICES_FIXID_Y_POS[3], "", 0.5);
			} else if ((key == "7-3" || key == "3-7")) {
				this.cmd("DrawLine", this.edgeLine[index], VERTICES_FIXID_X_POS[3], VERTICES_FIXID_Y_POS[3] + 20, 
						VERTICES_FIXID_X_POS[7], VERTICES_FIXID_Y_POS[7], "", 0.5);
			} else if ((key == "0-4" || key == "4-0")) {
				this.cmd("DrawLine", this.edgeLine[index], VERTICES_FIXID_X_POS[0] + 20, VERTICES_FIXID_Y_POS[0], 
						VERTICES_FIXID_X_POS[4] , VERTICES_FIXID_Y_POS[4], "", -0.5);
			} else if ((key == "7-4" || key == "4-7")) {
				this.cmd("DrawLine", this.edgeLine[index], VERTICES_FIXID_X_POS[4], VERTICES_FIXID_Y_POS[4], 
						VERTICES_FIXID_X_POS[7], VERTICES_FIXID_Y_POS[7], "", -0.5);
			} else if ((key == "0-7") || key == "7-0") {
				this.cmd("DrawLine", this.edgeLine[index], VERTICES_FIXID_X_POS[0], VERTICES_FIXID_Y_POS[0] + 20, 
						VERTICES_FIXID_X_POS[7], VERTICES_FIXID_Y_POS[7] + 20);
			} else {
					this.cmd("DrawLine", this.edgeLine[index], VERTICES_FIXID_X_POS[fromEdge], VERTICES_FIXID_Y_POS[fromEdge], 
							VERTICES_FIXID_X_POS[toEdge], VERTICES_FIXID_Y_POS[toEdge]);
			}
			var xPos;
			var yPos = (VERTICES_FIXID_Y_POS[fromEdge] + VERTICES_FIXID_Y_POS[toEdge]) / 2;
			if (key == "0-3" || key == "3-0" || key == "3-7" || key == "7-3") {
				xPos= ((VERTICES_FIXID_X_POS[fromEdge] + VERTICES_FIXID_X_POS[toEdge]) / 2) - 90;
			} else if (key == "0-4" || key == "4-0" || key == "4-7" || key == "7-4") {
				xPos= ((VERTICES_FIXID_X_POS[fromEdge] + VERTICES_FIXID_X_POS[toEdge]) / 2) + 90;
			} else if (key == "1-2" || key == "2-1" || key == "4-3" || key == "3-4" || key == "5-6" || key == "6-5" || key=="1-5" || key=="5-1" ||key=="2-6"|| key=="6-2") {
				xPos= ((VERTICES_FIXID_X_POS[fromEdge] + VERTICES_FIXID_X_POS[toEdge]) / 2) - 20;
				yPos = (VERTICES_FIXID_Y_POS[fromEdge] + VERTICES_FIXID_Y_POS[toEdge]) / 2 + 10;
			} else if (key == "0-7" || key == "7-0") {
				xPos= ((VERTICES_FIXID_X_POS[fromEdge] + VERTICES_FIXID_X_POS[toEdge]) / 2) + 20;
				yPos = (VERTICES_FIXID_Y_POS[fromEdge] + VERTICES_FIXID_Y_POS[toEdge]) / 2 - 20;
			} else if ( key == "0-1" || key == "1-0" || key == "1-3" || key == "3-1" || key == "3-5" || key=="5-3" || key=="5-7" || key=="7-5") {
				xPos= ((VERTICES_FIXID_X_POS[fromEdge] + VERTICES_FIXID_X_POS[toEdge]) / 2) - 20;
			} else {
				xPos= ((VERTICES_FIXID_X_POS[fromEdge] + VERTICES_FIXID_X_POS[toEdge]) / 2) + 20;
			}
			this.cmd("CreateLabel", this.edgeWeight[index], $("#edgeWeight").val(), xPos, yPos);
			if (index == 0) {
				this.cmd("CreateRectangle", this.nextIndex++, "Edge", 25, 25, 105, 105);
			} else {
				
			}
			index++;
			
			
			
		}
		edgesMap[fromEdge + "-" + toEdge] = true;
		edgesMap[toEdge + "-" + fromEdge] = true;
		var connections = [];
		if (kruskalArr[fromEdge] != undefined) {
			connections = kruskalArr[fromEdge]; 
		}
		connections.push(toEdge);
		kruskalArr[fromEdge] = connections.sort();
		adjMap[key] = 1;
		
		//this.cmd("SetText", adjacentTableMap[key], 1);
		//this.cmd("SetForegroundColor", adjacentTableMap[key], "#cd3232");
	}
	return this.commands;
}


































var currentAlg;
function init() {
	var animManag = initCanvas();
	currentAlg = new Kruskal(animManag, canvas.width, canvas.height);
}