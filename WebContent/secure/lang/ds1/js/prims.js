var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = index = SPANNINGTREE_SIZE = usedColorsCount = tooltipCount = 0; 

var primsArr= [];
var G = [];
var edgesMap = {};
var edgeWeight = {};
var adjMap = {};
var visitedVertices = {};
var flag = false;
var total_min_cost = 0;

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
	
	/*this.testButton = document.getElementById("testBtn");
	this.testButton.onclick = this.testCallback.bind(this);
	this.controls.push(this.testButton);*/
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
	
	for (var i = 0; i < MAX_VERTICES_SIZE * 5; i++) {
		this.vertices[i] = this.nextIndex++;
		this.edgeLine[i] = this.nextIndex++;
		this.edgeWeight[i] = this.nextIndex++;
		this.edgeRect[i] = this.nextIndex++;
		this.WeightRect[i] = this.nextIndex++;
		this.spanningTreeVertices[i] = this.nextIndex++;
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
		this.implementAction(this.edge.bind(this), "");
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
	console.log("Hello Start Btn");
	this.implementAction(this.start.bind(this), "");
}

Prims.prototype.testCallback = function(event) {
	if ($(".btn").is(":disabled")) {
		return;
	}
	console.log("Hello test Btn");
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
	$("#addEdgeBtn").attr("disabled", "disabled");
	fromEdgeAndToEdgeValues();
	if (edgesMap[fromEdge + " - " + toEdge] == undefined) {
		if (fromEdge == toEdge) {
			alertify.alert("You gave Same vertices, please give different vertices!");
		} else {
			this.setCirclehighlight();
			this.connect_vertices();
			this.cmd("Step");
			this.removeCircleColor();
			edgeWeight[fromEdge + " - " + toEdge] = $("#edgeWeight").val();
			/*G.push([fromEdge, toEdge] = $("#edgeWeight").val());*/
			G.push([toEdge, fromEdge]);
			
			//G.push: fromEdge + " - " + toEdge, val: $("#edgeWeight").val()});
			primsArr.push({key: fromEdge + " - " + toEdge, val: $("#edgeWeight").val()});
			edgesMap[fromEdge + " - " + toEdge] = true;
			index++;
		}
	} else {
		display_Prompt();
	}
	return this.commands;
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
	this.cmd("SetEdgeColor", this.vertices[fromEdge], this.vertices[toEdge], "#e62e00");
	this.cmd("DisConnect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.4, false, "", 0, true);
	this.connect_vertices();
	edgeWeight[fromEdge + " - " + toEdge] = $("#edgeWeight").val();
	for (let i = 0; i < Object.keys(edgeWeight).length; i++) {
		if (primsArr[i].key == fromEdge + " - " + toEdge) {
			primsArr[i].val = $("#edgeWeight").val();
		}
	}
	this.removeCircleColor();
	return this.commands;
}

function fromEdgeAndToEdgeValues() {
	fromEdge = parseInt($("#fromID .active").text());
	toEdge = parseInt($("#toID .active").text());
	key = fromEdge + " - " + toEdge;
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

Prims.prototype.connect_vertices = function() {
	if ((key == "0 - 3" || key == "3 - 0") || (key == "3 - 7" || key == "7 - 3")) {
		this.cmd("connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.4, false, $("#edgeWeight").val(), 0, true);
	} else if ((key == "0 - 4" || key == "4 - 0") || (key == "4 - 7" || key == "7 - 4")) {
		this.cmd("connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", -0.4, false, $("#edgeWeight").val(), 0, true);
	} else {
		this.cmd("connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0, false, $("#edgeWeight").val(), 0, true);
	}
	this.cmd("SetEdgeColor", this.vertices[fromEdge], this.vertices[toEdge], colorsArr[usedColorsCount + 1]);
	this.cmd("Step");
	this.cmd("SetEdgeColor", this.vertices[fromEdge], this.vertices[toEdge], "");
	
}

Prims.prototype.removeCircleColor = function() {
	this.cmd("SetBackgroundColor", this.vertices[fromEdge], "#fff");
	this.cmd("SetBackgroundColor", this.vertices[toEdge], "#fff");
	this.cmd("SetHighlight", this.vertices[fromEdge], "");
	this.cmd("SetHighlight", this.vertices[toEdge], "");
}

Prims.prototype.start = function() {
	this.commands = new Array();
	
	var visit = {};
	if (primsArr.length != 0) {
		for (var i = 0; i < primsArr.length; i++) {
			var val = primsArr[i].key.split(" - ");
			fromEdge = val[0];
			toEdge = val[1];
			visit[fromEdge] = "1";
			visit[toEdge] = "1";
		}
	}
	
	console.log(visit);
	console.log(Object.keys(visit));
	if (VERTICES_SIZE == 0) { 
		alertify.alert("Graph is empty!!");
	} else if (VERTICES_SIZE != Object.keys(visit).length) {
		alertify.alert("Please Connect all vertices");
	} else {
		var source = parseInt($("#primsVal .btn").text().trim());
		this.cmd("CreateLabel", this.nextIndex++, "Source Vertex", VERTICES_FIXID_X_POS[source], VERTICES_FIXID_Y_POS[source] + 25);
		this.cmd("SETTEXTCOLOR", this.nextIndex - 1, colorsArr[1]);
		
		prims(G, VERTICES_SIZE);
		//$(".btn, #edgeWeight").attr("disabled", "disabled");
		this.cmd("Step");
		//this.sortTheEdges();
		//edgeWeight[Object.keys(edgeWeight)[0]];
	}
	return this.commands;
}

function play() {
	$(".user-btn").remove();
	doPlayPause();
}

function restat() {
	$(".user-btn").remove();
	location.reload();
}


function prims(G, nodes) {
	var infinity = 32767;
	var selected = {};
	var i, j, k, min, total = 0, v1, v2, start;
	for (i = 0; i < nodes; i++) 
		selected[i] = 0;
	console.log("Minimum Spanning Tree : \n"); 
	/*printf("Enter starting Vertix : ");
	scanf("%d", &start);*/
	var source = parseInt($("#primsVal .btn").text().trim());
	selected[source] = 1;

	for (k = 1; k < nodes; k++) {
		min = infinity;
		for (i = 0; i < nodes; i++) {
			for (j = 0; j < nodes; j++) {
				if (G[i][j] && ((selected[i] && !selected[j]) || (selected[j] && !selected[i]))) {
					if (min > parseInt(edgeWeight[""+ i + " - " +  j +""])) {
						min = parseInt(edgeWeight[""+ i + " - " +  j +""]);
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
	console.log("Total weight of Minimum Spanning Tree %d\n" + total);
}





























var currentAlg;
function init() {
	var animManag = initCanvas();
	currentAlg = new Prims(animManag, canvas.width, canvas.height);
}