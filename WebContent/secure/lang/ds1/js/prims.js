var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = index = SPANNINGTREE_SIZE = usedColorsCount = tooltipCount = 0; 

var circleCount = 0;

var vis = {};
var testingArr = [];
var testingMap = {};
var finalTree = [];
var primsArr = [];
var checking = [];
var edgesMap = {};
var edgeWeight = {};
var visitedVertices = {};
var flag = false;
var total_min_cost = 0;
var source;
var count = 0;
var visitEdgeCount = 0;
var visitedVerTexCount = 0;

var edgeVal = "";
var edgeValue = "";

var VERTICES_FIXID_X_POS = [ 220, 145, 295, 70, 370, 145, 295, 220 ];
var VERTICES_FIXID_Y_POS = [ 50, 150, 150, 250, 250, 350, 350, 450 ];
var SPANNING_TREE_X_POS = [ 750, 675, 825, 600, 900, 675, 825, 750 ];

var HIGHLIGHT_LABEL_COLOR = "#FF0000"
var HIGHLIGHT_LINK_COLOR = "#FF0000"
var HIGHLIGHT_COLOR = "#f962f3"
var HEIGHT_LABEL_COLOR = "#007700"

var LINK_COLOR = "#f962f3";
var HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
var visitedEdgeColor = "#6e00ff";
var colorsArr = ["#4cef83", "#3acde0", "#e039dd", "#8d96ba", "#e8b068", "#e8d668", "#ed368d"];
var addVertext = false;

var ADJACENT_TABLE_HORIZONTAL_X_POS = 725;
var ADJACENT_TABLE_HORIZONTAL_Y_POS = 100;
var ADJACENT_TABLE_VERTICAL_X_POS = 700;
var ADJACENT_TABLE_VERTICAL_Y_POS = 125;
var ADJACENT_TABLE_LINE_FLAG = false;

var VISITED_VERTEX_X_POS = 150;
var adjacentTableMap = {};

function Prims(am, w, h) {
	this.init(am, w, h);
}

Prims.prototype = new Algorithm();
Prims.prototype.constructor = Prims;
Prims.superclass = Algorithm.prototype;

Prims.prototype.init = function(am, w, h) {
	Prims.superclass.init.call(this, am, w, h); 
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

Prims.prototype.addControls = function() {
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
	
	this.startButton = document.getElementById("startBtn");
	this.startButton.onclick = this.startCallback.bind(this);
	this.controls.push(this.startButton);
	
	this.testButton = document.getElementById("testBtn");
	this.testButton.onclick = this.testCallback.bind(this);
	this.controls.push(this.testButton);
}

Prims.prototype.setup = function() {
	var fromEdge, toEdge, key;
	this.vertices = new Array(MAX_VERTICES_SIZE);
	this.spanningTreeVertices = new Array(MAX_VERTICES_SIZE);
	this.verticesEdges = new Array(MAX_VERTICES_SIZE);
	this.edgeWeight = new Array(MAX_VERTICES_SIZE * 5);
	this.edgeLine = new Array(MAX_VERTICES_SIZE * 5);
	this.edgeRect = new Array(MAX_VERTICES_SIZE * 5);
	this.WeightRect = new Array(MAX_VERTICES_SIZE * 5);
	this.edgeStatus = new Array(MAX_VERTICES_SIZE * 5);
	this.visitedVertices = new Array(MAX_VERTICES_SIZE);
	this.vertexVisited = new Array(MAX_VERTICES_SIZE);
	
	for (var i = 0; i < MAX_VERTICES_SIZE * 5; i++) {
		this.vertices[i] = this.nextIndex++;
		this.edgeLine[i] = this.nextIndex++;
		this.edgeWeight[i] = this.nextIndex++;
		this.edgeRect[i] = this.nextIndex++;
		this.WeightRect[i] = this.nextIndex++;
		this.edgeStatus[i] = this.nextIndex++;
		this.spanningTreeVertices[i] = this.nextIndex++;
		this.visitedVertices[i] = this.nextIndex++;
		this.vertexVisited[i] = this.nextIndex++;
	}
	
	this.ADJACENT_TABLE_HORIZONTAL_LINE = this.nextIndex++;
	this.ADJACENT_TABLE_VERTICAL_LINE = this.nextIndex++;
	this.CURRENT_INDEX_LABEL = this.nextIndex++;
	this.CURRENT_INDEX_POINTER = this.nextIndex++;
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

Prims.prototype.vertexCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	if (VERTICES_SIZE < MAX_VERTICES_SIZE) {
		this.implementAction(this.vertex.bind(this), "");
	} else {
		alertify.alert("Here we are restricted to allow only <b>8</b> vertices.");
	}
}

Prims.prototype.edgeCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	if ($("#fromID .active").text() != "" && $("#toID .active").text() != "" && $("#edgeWeight").val() != "") {
		if (Number.isInteger(parseInt($("#edgeWeight").val()))) {
			if (parseInt($("#edgeWeight").val()) < 0) {
				alertify.alert('<b>Please enter <r>positive</r> values only (greater than <b>0</b>).</b>');
			} else {
				this.implementAction(this.edge.bind(this), "");
			}
		} else {
			alertify.alert('<b>Please enter <r>integers</r> values only.</b>');
		}
	} else {
		$(".alertify").css({"left": "50%", "top": "200px"});
		if (!addVertext) {
			alertify.alert('<b>First you have to <r>add</r> the <r>vertex</r> then create an <r>edge</r> between <r>two Vertices</r></b>');
		} else {
			if($("#fromID .active").text() == "" || $("#toID .active").text() == "") {
				alertify.alert("Please select the <r>vertex</r>.");
			} else if ($("#edgeWeight").val() == "") {
				alertify.alert("Please enter the <r>edge weight</r>.");
			} else {
				alertify.alert('<b>Please select <r>from Vertex</r>, <r>to Vertex</r> and enter the <r>weight</r> of the <r>two vertex</r></b>');
			}
		}
	}
}

Prims.prototype.startCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	console.log("Click Start Btn");
	this.implementAction(this.start.bind(this), "");
}

Prims.prototype.testCallback = function(event) {
	if ($(".btn").is(":disabled")) {
		return;
	}
	console.log("Click test Btn");
	this.implementAction(this.testing.bind(this), "");
} 

Prims.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

Prims.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

Prims.prototype.vertex = function() {
	this.commands = new Array();
	this.cmd("CreateCircle", this.vertices[VERTICES_SIZE], VERTICES_SIZE, VERTICES_FIXID_X_POS[VERTICES_SIZE], VERTICES_FIXID_Y_POS[VERTICES_SIZE]);
	$("#fromID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#toID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#primsVal ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	visitedVertices[VERTICES_SIZE] = "-1";
	addVertext = true;
	SPANNINGTREE_SIZE++;
	VERTICES_SIZE++;
	return this.commands;
}
 
Prims.prototype.edge = function() {
	this.commands = new Array();
	this.weightRect = new Array();
	this.edgeRect = new Array();
	for (var i = 0; i < MAX_VERTICES_SIZE * 5; i++) {
		this.weightRect[i] = this.nextIndex++;
		this.edgeRect[i] = this.nextIndex++;
	}
	// $("#addEdgeBtn").attr("disabled", "disabled");
	fromEdgeAndToEdgeValues();
	
	if (edgesMap[fromEdge + "-" + toEdge] == undefined) {
		if (fromEdge == toEdge) {
			alertify.alert("You gave Same vertices, please give different vertices!");
		} else {
			this.setCirclehighlight();
			this.connect_vertices();
			this.cmd("Step");
			this.removeCircleColor();
			edgeWeight[fromEdge + "-" + toEdge] = parseInt($("#edgeWeight").val());
			primsArr.push({key: fromEdge + "-" + toEdge, val: parseInt($("#edgeWeight").val())});
			edgesMap[fromEdge + "-" + toEdge] = true;
			edgeAndWeightTable();
			index++;
		}
	} else {
		display_Prompt();
	}
	return this.commands;
}

function edgeAndWeightTable() {
	var dummyArr = []
	if(testingMap[fromEdge] != undefined) {
		dummyArr = testingMap[fromEdge];
	}
	dummyArr.push({key: fromEdge + "-" + toEdge, val: parseInt($("#edgeWeight").val()), visit: -1});	
	testingMap[fromEdge] = dummyArr;
	
	var dummyArr = []
	if(testingMap[toEdge] != undefined) {
		dummyArr = testingMap[toEdge];
	}
	dummyArr.push({key: toEdge + "-" + fromEdge, val: parseInt($("#edgeWeight").val()), visit: -1});
	testingMap[toEdge] = dummyArr;
}

function display_Prompt() {
	alertify.confirm("The <r>edge</r> between <r>"+ $("#fromID .active").text() +"</r> and <r>"+ $("#toID .active").text() 
			+ "</r> is already exists. <br/>Do u Want to <r>chage the weight of the Edge</r>.");
	$("#alertify-ok").text("Yes");
	$("#alertify-text").attr("maxlength", "3");
	$(".alertify").css({"left": "45%", "top": "50px"});
	$("#alertify-ok").click(function() {
		$("#testBtn").click();
	});
}

Prims.prototype.testing = function() {
	this.commands = new Array();
	fromEdgeAndToEdgeValues();
	this.cmd("Step");
	this.setCirclehighlight()
	this.cmd("SETEDGEHIGHLIGHT", this.vertices[fromEdge], this.vertices[toEdge], "#e62e00");
	this.cmd("DisConnect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.4, false, "", 0, true);
	this.connect_vertices();
	edgeWeight[fromEdge + "-" + toEdge] = parseInt($("#edgeWeight").val());
	for (let i = 0; i < Object.keys(edgeWeight).length; i++) {
		if (primsArr[i].key == fromEdge + "-" + toEdge ) {
			primsArr[i].val = parseInt($("#edgeWeight").val());
		}
	}
	for (let i = 0; i < Object.keys(testingMap).length; i++) {
		for (let j = 0; j < testingMap[i].length; j++) {
			if (testingMap[i][j].key == fromEdge + "-" + toEdge || testingMap[i][j].key == toEdge + "-" + fromEdge) {
				testingMap[i][j].val = parseInt($("#edgeWeight").val());
			}
		}
	}
	this.removeCircleColor();
	return this.commands;
}

function fromEdgeAndToEdgeValues() {
	fromEdge = parseInt($("#fromID .active").text());
	toEdge = parseInt($("#toID .active").text());
	key = fromEdge + "-" + toEdge;
	var val1 = (fromEdge < toEdge) ? fromEdge : toEdge; 
	var val2 = (fromEdge > toEdge) ? fromEdge : toEdge;
	fromEdge = val1;
	toEdge = val2;
}

Prims.prototype.setCirclehighlight = function() {
	this.cmd("SetBackgroundColor", this.vertices[fromEdge], colorsArr[usedColorsCount]);
	this.cmd("SetBackgroundColor", this.vertices[toEdge], colorsArr[usedColorsCount]);
	this.cmd("Step");
	this.cmd("Sethighlight", this.vertices[fromEdge], 1);
	this.cmd("Sethighlight", this.vertices[toEdge], 1);
	this.cmd("Step");
}

Prims.prototype.removeCircleColor = function() {
	this.cmd("SetBackgroundColor", this.vertices[fromEdge], "#fff");
	this.cmd("SetBackgroundColor", this.vertices[toEdge], "#fff");
	this.cmd("SetHighlight", this.vertices[fromEdge], "");
	this.cmd("SetHighlight", this.vertices[toEdge], "");
}

Prims.prototype.connect_vertices = function() {
	if ((key == "0-3" || key == "3-0") || (key == "3-7" || key == "7-3")) {
		this.cmd("connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.4, false, parseInt($("#edgeWeight").val()), 0, true);
	} else if ((key == "0-4" || key == "4-0") || (key == "4-7" || key == "7-4")) {
		this.cmd("connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", -0.4, false, parseInt($("#edgeWeight").val()), 0, true);
	} else {
		this.cmd("connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0, false, parseInt($("#edgeWeight").val()), 0, true);
	}
	this.cmd("SETEDGEHIGHLIGHT", this.vertices[fromEdge], this.vertices[toEdge], colorsArr[usedColorsCount + 1]);
	this.cmd("Step");
	this.cmd("SETEDGEHIGHLIGHT", this.vertices[fromEdge], this.vertices[toEdge], "");
}

Prims.prototype.start = function() {
	this.commands = new Array();
	var visit = {};
	if (primsArr.length != 0) {
		for (var i = 0; i < primsArr.length; i++) {
			var val = primsArr[i].key.split("-");
			fromEdge = val[0];
			toEdge = val[1];
			visit[fromEdge] = "1";
			visit[toEdge] = "1";
		}
	}
	if (VERTICES_SIZE == 0) { 
		alertify.alert("Graph is empty!!");
	} else if (VERTICES_SIZE != Object.keys(visit).length) {
		alertify.alert("Please Connect all vertices");
	} else {
		if ($("#primsVal .btn").text().trim() == "vertex") {
			alertify.alert("Please select the <r>Source Vertex</r>.");
		} else {
			source = parseInt($("#primsVal .btn").text().trim());
			this.cmd("CreateLabel", this.nextIndex++, "Source", VERTICES_FIXID_X_POS[source], VERTICES_FIXID_Y_POS[source] - 40);
			this.cmd("CreateLabel", this.nextIndex++, "Vertex", VERTICES_FIXID_X_POS[source], VERTICES_FIXID_Y_POS[source] - 28);
			this.cmd("SETTEXTCOLOR", this.nextIndex - 1, "#660000");
			this.cmd("SETTEXTCOLOR", this.nextIndex - 2, "#660000");
			this.cmd("SetBackgroundColor", this.vertices[source], colorsArr[1]);
			this.cmd("Step");
			this.cmd("Sethighlight", this.vertices[source], 1);
			this.cmd("Step");
			var text = "This is the <y>source</y> vertex of the <y>Graph</y>.";
			this.tooltipShow(VERTICES_FIXID_X_POS[source] + 25, VERTICES_FIXID_Y_POS[source] - 10, text);
			this.setAllVerticesToZero();
			this.cmd("Step");
			this.primsTableCreation();
			this.cmd("Step");
		}
	}
	return this.commands;
}

Prims.prototype.tooltipShow = function(xPos, yPos, text) {
	this.cmd("show", ".canvas-tooltip");
	this.cmd("BFSTooltipPos", xPos, yPos);
	this.cmd("BFSStep");
	this.cmd("Step");
	this.cmd("BFSTEXT", text);
	this.cmd("Step");
	this.cmd("BFSButton", "play");
	this.cmd("Step");
	this.cmd("hide", ".canvas-tooltip");
}

Prims.prototype.setAllVerticesToZero = function() {
	this.cmd("CreateRectangle", this.nextIndex++, "Vertex", 40, 25, 350, 40);
	this.cmd("CreateRectangle", this.nextIndex++, "Visited", 40, 25, 350, 65);
	this.cmd("SetBackgroundColor", this.nextIndex - 2, colorsArr[usedColorsCount]);
	this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
	
	this.cmd("CreateLabel", this.nextIndex++, "Note :", 350, 86);
	this.cmd("SetTextColor", this.nextIndex - 1, "#24248f");
	this.cmd("CreateLabel", this.nextIndex++, "1", 375, 86);
	this.cmd("SetTextColor", this.nextIndex -1, "#660000");
	this.cmd("CreateLabel", this.nextIndex++, "-->Visited", 410, 86);
	this.cmd("SetTextColor", this.nextIndex - 1, "#006600");
	this.cmd("CreateLabel", this.nextIndex++, "-1", 376, 100);
	this.cmd("SetTextColor", this.nextIndex -1, "#660000");
	this.cmd("CreateLabel", this.nextIndex++, "--> Not Visited", 426, 100);
	this.cmd("SetTextColor", this.nextIndex - 1, "#ff0000");
	this.cmd("Step");
	var text = "This table is used to store the <y>vertices</y> and it's corresponding visited <y>status</y> of the <y>vertex</y><br/>"
				+ " Note: By default all <y>vertices</y> are set it to <y>-1</y>, once the <y>vertex</y> is <y>visited</y> then set"
				+ " to <y>1</y>.";
	this.tooltipShow(380, 40, text);
	this.cmd("Step");
	for (let i = 0; i < VERTICES_SIZE; i++) {
		this.cmd("CreateRectangle", this.visitedVertices[i], i, 40, 25, (350 + (i + 1) * 40), 40);
		this.cmd("CreateRectangle", this.vertexVisited[i], "-1", 40, 25, (350 + (i + 1) * 40), 65);
	}
	this.cmd("Step");
}

Prims.prototype.primsTableCreation = function() {
	this.cmd("CreateLabel", this.nextIndex++, "Edge and it's corresponding Edge weight", 470, 140);
	this.cmd("CreateRectangle", this.nextIndex++, "Edge", 40, 25, 430, 160);
	this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
	this.cmd("CreateRectangle", this.nextIndex++, "Weight", 40, 25, 471, 160);
	this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
	this.cmd("CreateRectangle", this.nextIndex++, "Status", 60, 25, 522, 160);
	this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
	this.cmd("Step");
	var text = "This table is used to store the <y>edge</y> and it's corresponding <y>edge weight</y> and <y>status</y> of the edge.";
	this.tooltipShow(545, 155, text);
	this.cmd("Step");
	var text = "The adjacent vertices of the vertex <y>"+ source +"</y> and it's corresponding <y>edge weight(s)</y> "
				+ "<y><div id='edgeNdEdgeWeight'>";
	testingMap[source].sort(function(a, b) { return a.val - b.val});
	for (var i = 0; i < testingMap[source].length; i++) {
		text = text + "<div>"+ testingMap[source][i].key +" -->  "+  testingMap[source][i].val + "</div>";
	}
	text = text + "</div></y>";
	this.tooltipShow(VERTICES_FIXID_X_POS[source] + 25, VERTICES_FIXID_Y_POS[source] - 10, text);
	this.cmd("Step");
	this.edgeAndWeightTableCreation();
	this.edgeSelection(0);
}

Prims.prototype.edgeAndWeightTableCreation = function() {
	testingMap[source].sort(function(a, b) { return a.val - b.val});
	this.edgeHighlightFun(1);
	this.cmd("Step");
	for (var i = 0; i < testingMap[source].length; i++) {
		fromEdge = testingMap[source][i].key.split("-")[0];
		toEdge = testingMap[source][i].key.split("-")[1];
		if (visitedVertices[fromEdge] == "-1" || visitedVertices[toEdge] == "-1") {
			testingArr.push({key: testingMap[source][i].key, key1 :toEdge + "-" + fromEdge,  val: testingMap[source][i].val, idx: count, visit: -1});
			this.cmd("CreateRectangle", this.edgeRect[count], testingMap[source][i].key, 40, 25, 430, 185 + (count * 20));
			this.cmd("CreateRectangle", this.WeightRect[count], testingMap[source][i].val, 40, 25, 471, 185 + (count * 20));
			this.cmd("CreateRectangle", this.edgeStatus[count], "Not Visited", 60, 25, 522, 185 + (count * 20));
			this.cmd("SetBackgroundColor", this.edgeRect[count], colorsArr[usedColorsCount + 1]);
			this.cmd("SetBackgroundColor",this.WeightRect[count], colorsArr[usedColorsCount + 1]);
			this.cmd("SetBackgroundColor", this.edgeStatus[count], colorsArr[usedColorsCount + 1]);
			this.cmd("SetHighlight", this.edgeRect[count], colorsArr[usedColorsCount + 1]);
			this.cmd("SetHighlight", this.WeightRect[count], colorsArr[usedColorsCount + 1]);
			this.cmd("SetHighlight", this.edgeStatus[count], colorsArr[usedColorsCount + 1]);
			this.cmd("Step");
			this.cmd("SetHighlight", this.edgeRect[count], "");
			this.cmd("SetHighlight", this.WeightRect[count], "");
			this.cmd("SetHighlight", this.edgeStatus[count], "");
			this.cmd("Step");
			count++;
		} else {
			console.log("Already visited");
		}
	}
	this.edgeHighlightFun("");
}

Prims.prototype.edgeHighlightFun = function(color) {
	for (var i = 0; i < testingMap[source].length; i++) {
		var val = testingMap[source][i].key.split("-");
		fromEdge = parseInt(val[0]);
		toEdge = parseInt(val[1]);
		if (visitedVertices[fromEdge] == "-1" || visitedVertices[toEdge] == "-1") {
			this.cmd("SETEDGEHIGHLIGHT", this.vertices[fromEdge], this.vertices[toEdge], color);
			this.cmd("SETEDGEHIGHLIGHT", this.vertices[toEdge], this.vertices[fromEdge], color);
		}
	}
}

Prims.prototype.edgeSelection = function(idxVal) {
	this.cmd("SetHighlight", this.edgeRect[idxVal], colorsArr[usedColorsCount + 1]);
	this.cmd("SetHighlight", this.WeightRect[idxVal], colorsArr[usedColorsCount + 1]);
	testingArr.sort(function(a, b) { return a.val - b.val});
	var text = "Here, we consider the <y>mininum</y> weigth of the edge (<y>"+ testingArr[0].key +"</y>) having the weight <y>"+ 
				testingArr[0].val +"</y>."; 
	this.tooltipShow(545, 185 + (idxVal * 40) - 20, text);
	this.cmd("SetHighlight", this.edgeRect[idxVal], "");
	this.cmd("SetHighlight", this.WeightRect[idxVal], "");
	this.cmd("SetHighlight", this.edgeRect[idxVal], colorsArr[usedColorsCount + 1]);
	this.cmd("SetHighlight", this.WeightRect[idxVal], colorsArr[usedColorsCount + 1]);
	fromEdge = testingArr[0].key.split("-")[0];
	toEdge = testingArr[0].key.split("-")[1];
	if (visitedVertices[fromEdge] == "-1" && visitedVertices[toEdge] == "-1") {
		var text = "Set the two vertices i.e <y>"+ fromEdge +"</y> and <y>"+ toEdge +"</y> from <y>-1</y> to <y>1</y>.";
		this.tooltipShow((350 + (VERTICES_SIZE) * 40) + 25, 40, text);
		this.vertexVisitHighlite(fromEdge);
		this.vertexVisitHighlite(toEdge);
	} else if ((visitedVertices[fromEdge] != "-1" && visitedVertices[toEdge] == "-1")) {
		var text = "Here the vertex <y>"+ fromEdge +"</y> is already visited, So set the vertex <y>"+ toEdge +"</y> from <y>-1</y> to <y>1</y>.";
		this.tooltipShow((350 + (VERTICES_SIZE) * 40) + 25, 40, text);
		this.vertexVisitHighlite(toEdge);
	} else if ((visitedVertices[toEdge] != "-1" && visitedVertices[fromEdge]== "-1")) {
		var text = "Here the vertex <y>"+ toEdge +"</y> is already visited, So set the vertex <y>"+ fromEdge +"</y> from <y>-1</y> to <y>1</y>.";
		this.tooltipShow((350 + (VERTICES_SIZE) * 40) + 25, 40, text);
		this.vertexVisitHighlite(fromEdge);
	} else if ((visitedVertices[toEdge] != "-1" && visitedVertices[fromEdge] != "-1")) {
		var text = "The given vertivces <y>"+ fromEdge +"</y> and <y>"+ toEdge +"</y> are already visited";
		this.tooltipShow((350 + (VERTICES_SIZE) * 40) + 25, 40, text);
	}
	this.cmd("Step");
	this.drawSpanningTree(idxVal);
}

Prims.prototype.drawSpanningTree = function(idxVal) {
	if (primsArr.length != 0) {
		var val = testingArr[0].key.split("-");
		var key = testingArr[0].key;
		fromEdge = parseInt(val[0]);
		toEdge = parseInt(val[1]);
		var value = testingArr[0].val;
		if  (visitedVertices[fromEdge] == "-1") {
			this.cmd("CreateCircle", this.spanningTreeVertices[fromEdge], fromEdge, SPANNING_TREE_X_POS[fromEdge], VERTICES_FIXID_Y_POS[fromEdge]);
		}
		if (visitedVertices[toEdge] == "-1") { 
			this.cmd("CreateCircle", this.spanningTreeVertices[toEdge], toEdge, SPANNING_TREE_X_POS[toEdge], VERTICES_FIXID_Y_POS[toEdge]);
		}
		if (circleCount == 0) {
			this.cmd("CreateLabel", this.nextIndex++, "Source", SPANNING_TREE_X_POS[source], VERTICES_FIXID_Y_POS[source] - 40);
			this.cmd("CreateLabel", this.nextIndex++, "Vertex", SPANNING_TREE_X_POS[source], VERTICES_FIXID_Y_POS[source] - 28);
			this.cmd("SETTEXTCOLOR", this.nextIndex - 1, "#660000");
			this.cmd("SETTEXTCOLOR", this.nextIndex - 2, "#660000");
			this.cmd("Step");
			circleCount++;
		} 
		if (visitedVertices[fromEdge] == "-1" || visitedVertices[toEdge] == "-1") {
			visitedVertices[fromEdge] = "1";
			visitedVertices[toEdge] = "1";
			this.cmd("SETEDGECOLOR", this.vertices[fromEdge], this.vertices[toEdge], colorsArr[4]);
			this.cmd("SETEDGECOLOR", this.vertices[toEdge], this.vertices[fromEdge], colorsArr[4]);
			if ((key == "0-3" || key == "3-0") || (key == "3-7" || key == "7-3")) {
				this.cmd("connect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "#000000", 0.4, false, value, 0, true);
			} else if ((key == "0-4" || key == "4-0") || (key == "4-7" || key == "7-4")) {
				this.cmd("connect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "#000000", -0.4, false, value, 0, true);
			} else {
				this.cmd("connect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "#000000", 0, false, value, 0, true);
			}
			total_min_cost += parseInt(value);
			this.cmd("SETEDGEHIGHLIGHT", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], colorsArr[usedColorsCount + 1]);
			this.cmd("Step");
			this.cmd("SETEDGEHIGHLIGHT", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "");
			this.cmd("Step");
			for (let i = 0; i < testingArr.length; i++) {
				if (testingArr[i].key == fromEdge + "-" + toEdge || testingArr[i].key1 == toEdge + "-" + fromEdge) {
					testingArr[i].visit = "1";
				}
			}
			for (let i = 0; i < testingMap[fromEdge].length; i++) {
				if (testingMap[fromEdge][i].key == fromEdge + "-" + toEdge || testingMap[fromEdge][i].key == toEdge + "-" + fromEdge) {
					testingMap[fromEdge][i].visit = "1";
				} 
			}
			for (let i = 0; i < testingMap[toEdge].length; i++) {
				if (testingMap[toEdge][i].key == fromEdge + "-" + toEdge || testingMap[toEdge][i].key == toEdge + "-" + fromEdge) {
					testingMap[toEdge][i].visit = "1";
				} 
			}
			this.cmd("SetBackgroundColor", this.spanningTreeVertices[toEdge], colorsArr[2]);
			this.cmd("Sethighlight", this.spanningTreeVertices[toEdge], 1);
			if (visitedVertices[fromEdge] == "-1" || visitedVertices[toEdge] == "-1") {
				source = toEdge;
			} else if (visitedVertices[fromEdge] != "-1" || visitedVertices[toEdge] == "-1") {
				source = toEdge;
			} else if (visitedVertices[fromEdge] == "-1" || visitedVertices[toEdge] != "-1") {
				source = fromEdge;
			}
			visitedVerTexCount = 0;
			for (let i = 0; i < VERTICES_SIZE; i++) {
				if (visitedVertices[i] == "1") {
					visitedVerTexCount++;
				}
			}
			if (visitedVerTexCount < VERTICES_SIZE) {
				var text = "Newly visited vertex is <y>"+ source+"</y>.<li>The adjacent vertex of the vertex <y>"+ source +"</y> is.</li>";
				this.tooltipShow(SPANNING_TREE_X_POS[toEdge] + 25, VERTICES_FIXID_Y_POS[toEdge], text);
				this.cmd("Step");
				this.cmd("SetBackgroundColor", this.spanningTreeVertices[toEdge], "#fff");
				this.cmd("Sethighlight", this.spanningTreeVertices[toEdge], "");
				this.cmd("Step");
				this.cmd("SetText", this.edgeStatus[idxVal], "Visited");
				this.cmd("SetBackgroundColor", this.edgeRect[idxVal], colorsArr[3]);
				this.cmd("SetBackgroundColor", this.WeightRect[idxVal], colorsArr[3]);
				this.cmd("SetBackgroundColor", this.edgeStatus[idxVal], colorsArr[3]);
				this.cmd("SetHighlight", this.edgeRect[idxVal], "");
				this.cmd("SetHighlight", this.WeightRect[idxVal], "");
				this.cmd("Step");
				this.cmd("SetBackgroundColor", this.vertices[source], colorsArr[2]);
				var text = "Here the vertex <y>"+ source +"</y> have <y>"+ testingMap[toEdge].length +"</y> edge(s) "
							+" and it's corresponding edge weight(s) <y><div id='edgeNdEdgeWeight'>";
				testingMap[source].sort(function(a, b) { return a.val - b.val});
				for (var i = 0; i < testingMap[source].length; i++) {
					text = text + "<div>"+ testingMap[source][i].key +" -->  "+  testingMap[source][i].val + "</div>";
				}
				text = text + "</div></y><li>Here the Edge(s) <y>"; 
				testingMap[source].sort(function(a, b) { return a.val - b.val});
				for (let i = 0; i < testingMap[source].length; i++) {
					if (testingMap[source][i].visit == "1") {
							text = text + "<div>"+ testingMap[source][i].key +" -->  "+  testingMap[source][i].val + "</div>";
					} 
				}
				text = text + "</y> already visited so omit the edge.</li>";
				this.tooltipShow(VERTICES_FIXID_X_POS[toEdge] + 25, VERTICES_FIXID_Y_POS[toEdge] - 10, text);
				this.edgeAndWeightTableCreation();
				this.cmd("Step");
				finalTree.push(testingArr[0]);
				testingArr.shift();
				testingArr.sort(function(a, b) { return a.val - b.val});
				this.edgeSelection(testingArr[0].idx);
			} else {
				finalTree.push(testingArr[0]);
				testingArr.shift();
				var text = "Newly visited vertex is <y>"+ source+"</y>.<li>The adjacent vertex of the vertex <y>"+ source +"</y> is.</li>";
				this.tooltipShow(SPANNING_TREE_X_POS[toEdge] + 25, VERTICES_FIXID_Y_POS[toEdge], text);
				this.cmd("SetBackgroundColor", this.spanningTreeVertices[toEdge], "#fff");
				this.cmd("Sethighlight", this.spanningTreeVertices[toEdge], "");
				this.cmd("Step");
				this.cmd("SetBackgroundColor", this.edgeRect[idxVal], colorsArr[3]);
				this.cmd("SetBackgroundColor", this.WeightRect[idxVal], colorsArr[3]);
				this.cmd("SetText", this.edgeStatus[idxVal], "Visited");
				this.cmd("SetHighlight", this.edgeStatus[idxVal], 1);
				this.cmd("Step");
				this.cmd("SetBackgroundColor", this.edgeStatus[idxVal], colorsArr[3]);
				this.cmd("SetHighlight", this.edgeRect[idxVal], "");
				this.cmd("SetHighlight", this.WeightRect[idxVal], "");
				this.cmd("SetHighlight", this.edgeStatus[idxVal], "");
				this.cmd("SetBackgroundColor", this.vertices[source], colorsArr[2]);
				this.cmd("Sethighlight", this.vertices[source], 1);
				this.cmd("show", ".canvas-tooltip");
				var text = "All <y>vertices</y> are <y>visited</y> there is no more nodes to <y>visit</y>.";
				this.tooltipShow(VERTICES_FIXID_X_POS[source] + 25, VERTICES_FIXID_Y_POS[source] - 10, text);
				this.cmd("Sethighlight", this.vertices[source], "");
				this.cmd("Step");
				this.cmd("show", ".canvas-tooltip");
				this.cmd("BFSTooltipPos", SPANNING_TREE_X_POS[0] + 25, VERTICES_FIXID_Y_POS[0] - 15);
				this.cmd("BFSStep");
				var text = "The final <y>Minimum</y> Spanning Tree is :"
					+ "<y><div id='edgeNdEdgeWeight'>";
				for (var i = 0; i < finalTree.length; i++) {
					text = text + "<div><span id='treeEdges"+ i +"'>"+ finalTree[i].key +"</span> -->  <span id='value"+ i +"'>"
							+ finalTree[i].val + "</span></div>";
				}
				text = text + "</div></y>";
				this.cmd("BFSTEXT", text);
				this.cmd("Step");
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				var text = "The Minimum cost of the tree is : <div><y><div class='position' id='minCosrt'>";
					for (var i = 0; i < finalTree.length; i++) {
						if (i < (finalTree.length - 1)) {
							text = text + "<span id='costVal"+ i +"'></span> <span class='opacity00' id='plus"+ i +"'> + </span>";
						} else {
							text = text + "<span id='costVal"+ i +"'></span>";
						}
					}
					text = text + "</div></y></div>";
				this.cmd("BFSTEXT", text);
				this.cmd("Step");
				this.cmd("BFSButton", "calMinCost");
				this.cmd("Step");
				this.cmd("RESTARTBUTTON", "restart");
				this.cmd("Step");
				this.cmd("hide", ".canvas-tooltip");
				this.cmd("Step");
			}
		} else {
			var status;
			if ((key == "0-3" || key == "3-0") || (key == "3-7" || key == "7-3")) {
				this.cmd("connect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "#e62e00", 0.4, false, value, 0, true);
			} else if ((key == "0-4" || key == "4-0") || (key == "4-7" || key == "7-4")) {
				this.cmd("connect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "#e62e00", -0.4, false, value, 0, true);
			} else {
				this.cmd("connect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge], "#e62e00", 0, false, value, 0, true);
			}
			var text = "Here form a <y>circle</y>.";
			this.tooltipShow(SPANNING_TREE_X_POS[toEdge] + 25, VERTICES_FIXID_Y_POS[toEdge], text);
			this.cmd("DisConnect", this.spanningTreeVertices[fromEdge], this.spanningTreeVertices[toEdge]);
			this.cmd("SetBackgroundColor", this.edgeRect[idxVal], "#ff0000");
			this.cmd("SetBackgroundColor", this.WeightRect[idxVal], "#ff0000");
			this.cmd("SetBackgroundColor", this.edgeStatus[idxVal], "#ff0000");
			this.cmd("SetHighlight", this.edgeStatus[idxVal], 1);
			this.cmd("setText", this.edgeStatus[idxVal], "Circle");
			this.cmd("SetHighlight", this.edgeRect[idxVal], "");
			this.cmd("SetHighlight", this.WeightRect[idxVal], "");
			this.cmd("SetHighlight", this.edgeStatus[idxVal], "");
			testingArr.shift();
			testingArr.sort(function(a, b) { return a.val - b.val});
			this.edgeSelection(testingArr[0].idx);
		}
	} else {
		console.log("There is no Graph");
	}
}

Prims.prototype.vertexVisitHighlite = function(selector) {
	this.cmd("SetBackgroundColor", this.visitedVertices[selector], colorsArr[1]);
	this.cmd("Sethighlight", this.visitedVertices[selector], 1);
	this.cmd("SetText", this.vertexVisited[selector], 1);
	this.cmd("Step");
	this.cmd("Sethighlight", this.visitedVertices[selector], "");
	this.cmd("Step");
}

function play() {
	$(".user-btn").remove();
	doPlayPause();
}

function restart() {
	$(".user-btn").remove();
	location.reload();
}

function calMinCost() {
	$(".user-btn").remove();
	console.log("In Calculate Min Cost");
	if (finalTree.length == 1) {
		$("#costVal0").text(finalTree[0].val);
		travel("#value0", "#costVal0", function() {
			doPlayPause();
		});
	} else {
		minCostAnimation(0);
		
	}
}

function minCostAnimation(costIdx) {
	if (costIdx == finalTree.length - 1) {
		$("#costVal" + costIdx).text(finalTree[costIdx].val);
		travel("#value" + costIdx, "#costVal" + costIdx, function() {
			setTimeout(function() {
				flip("#minCosrt", total_min_cost, function() {
					doPlayPause();
				});
			}, 800);
		});
	} else if (costIdx < finalTree.length - 1) {
		$("#costVal" + costIdx).text(finalTree[costIdx].val);
		travel("#value" + costIdx, "#costVal" + costIdx, function() {
			$("#plus" + costIdx).removeClass("opacity00");
			costIdx++;
			minCostAnimation(costIdx);
		});
	} 
}


function primsLogic() {
	var nodes = VERTICES_SIZE;
	var infinity = 32767;
	var selected = {};
	var i, j, k, min, total = 0, v1, v2, start;
	for (i = 0; i < nodes; i++) {
		selected[i] = 0;
	} 
	console.log("Minimum Spanning Tree : \n"); 
	selected[source] = 1;
	for (k = 1; k < nodes; k++) {
		min = infinity;
		for (i = 0; i < nodes; i++) {
			for (j = 0; j < nodes; j++) {
				if (edgeWeight[""+ i + "-" + j+""] != "undefined" && ((selected[i] && !selected[j]) || (selected[j] && !selected[i]))) {
					if (min > parseInt(edgeWeight[""+ i + "-" + j+""])) {
						min = parseInt(edgeWeight[""+ i + "-" + j+""]);
						v1 = i;
						v2 = j;
					}
				}
			}
		}
		console.log("Edge (%d %d) weight %d\n", +  v1, v2, min);
		selected[v1] = selected[v2] = 1;
		total = total + min;
	}
	console.log("Total weight of Minimum Spanning Tree \n" + total);
}

var currentAlg;
function init() {
	var animManag = initCanvas();
	currentAlg = new Prims(animManag, canvas.width, canvas.height);
}

function flip(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).effect("highlight", {color: 'yellow'}, 500);
	//$(fromSelector).css("background-color", "yellow");
	var l = $(fromSelector).offset();
	$(toSelector).offset({
		top : l.top,
		left : l.left
	});
	TweenMax.to(toSelector, 1, { top : 0, left : 0, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}




