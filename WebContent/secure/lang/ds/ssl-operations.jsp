<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>

<title>Single Linked List</title>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.margin-top-15 {
	margin-top: 15px;
}

.margin-5 {
	margin: 5px;
}

.margin-7 {
	margin-top: 9px;
	margin-bottom: 12px;
}

.padding0 {
	padding: 0;
}

.margin0 {
	margin: 0;
}

.position {
	position: relative;
	display: inline-block;
}

pre {
	tab-size: 3;
	padding: 6.5px;
	margin: 3px 0px;
	-moz-tab-size: 3;
	font-family: monospace;
}

.border-css {
	border-radius: 4px;
	border: 1px solid grey;
}

.main-css {
	font-weight: bold;
	display: inline-block;
}

.buttons {
	color: black;
	letter-spacing: 1px;
	font-family: monospace;
	box-shadow: 1px 2px 4px 0;
}

.btn:hover {
	color: white;
	background-color: #4CAF50 !important;
}

.btn:active{
	color: white;
	background-color: #2E8B57 !important;
}

.inline-css {
	margin: 0 10px;
	position: relative;
	display: inline-block;
}

.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.user-text {
	width: 82px;
	height: 27px;
	border: none;
	background: black;
}

.output-console-title-bar {
	font-weight: bold;
}

.output-console-body {
	height: 65px;
	padding: 5px;
	font-size: 14px;
	white-space: initial;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 45px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
}

.left-radius {
	border-right: none;
	border-color: blue;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}

.right-radius {
	border-color: green;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}

.ct-blue-color {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color {
	color: green;
	font-weight: bold;
	font-family: monospace;
}

.ct-brown-color {
	color: brown;
	font-weight: bold;
	font-family: monospace;
}

.error-text {
	color :red;
	font-weight: bold;
}

.introjs-fixParent {
	position: relative !important;
}

.zindex {
	z-index: 9999999;
	background: white;
	border-radius: 4px;
}

.ui-effects-transfer {
	z-index: 9999999;
	border-radius: 5px;
	border: 1px solid #003399;
}

.blinking-blue {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  blue;
	}
}

.user-btn {
	background: green;
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	marker-end: url("#arrowEnd"); 
}

.inline-style {
	position: relative;
	display: inline-block;
}

.disabled {
	pointer-events: none;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

</style>
</head>
<body>
	<div class="margin-top-25 text-center">
		<h4 class="label ct-demo-heading">Single Linked List</h4>
	</div>
	<div class="col-xs-12 margin-top-15">
		<div class="col-xs-12 padding0">
			<div class="col-xs-4">
				<pre class="margin0">
<span id="strcutSpan">struct list {
	int data;
	struct list *next;
};</span>
<span id="typeDefDec">typedef struct list *node;</span>
<span id="nodeDec">node first = NULL;</span>
<pre>
<span id="nodeCreation">node createNode() {
	node temp;
	<span id="createNodeSpan">temp = (node)malloc(sizeof(struct list));</span>
	<span id="tempNext">temp->next = NULL;</span>
	<span id="returnTemp">return temp;</span>
}</span></pre><pre class="hide" id="whileCondParent"><span id="mainMethod">				<div class='ct-blue-color text-center main-css'>In main()</div>
<span id="addMain" class="hide"><span id="whilePrintStatmnt">printf("Enter elements up to -1 : ");</span>
<span id="whileScan">scanf("%d", &x);</span>
<span id="addWhile">while (x != -1)</span> {
	<span id="trueCond">first = addNodes(first, x);</span>
	scanf("%d", &x);
}</span><span id="displayMain" class="hide">if (<span id="displayIfMain">first == NULL</span>) {
	<span id="displayIfTrue">printf("Single Linked List is empty\n");</span>
} else {
	<span id="displayIfElse">printf("The elements in SLL are : ");</span>
	<span id="callTraverseList">traverseList(first);</span>
}</span><span id="searchElement" class="hide"><span id="initVar">int x, pos;</span>
	<span id="printf1">printf("Enter search element : ");</span>
	<span id="scanf1">scanf("%d", &x);</span>
	<span id="calSrhMethod">pos = <span id="callSearchMethod">searchPosOfEle(first, x);</span></span>
<span id="ifConForSearch">if (<span id="IfPos">pos == 0</span>) {</span>
		<span id="printf2">printf("The given element %d is "
		"not found in the given SLL\n", x);</span>
	<span>} else {</span>
		<span id="printf3">printf("The given element %d is"
		"found at position : %d\n", x, pos);</span>
	}</span><span id="deleteAtEndElement"class="hide">
<span id="delIfCon">if (first == NULL) {</span>
	<span id="printfdelAtEnd1">printf("Single Linked List is empty"
			" so Deletion is not possible\n");</span>
} else {
	<span id="callDelAtEndMethod">first = deleteAtEnd(first);</span>
}</span><span id="deleteAtBeginElement" class="hide">
<span id="delBegIfCon">if (first == NULL) {</span>
	<span id="printfdelAtBeg1">printf("Single Linked List is empty"
			" so Deletion is not possible\n");</span>
} else {
	<span id="callDelAtBeginMethod">first = deleteAtBegin(first);</span>
}</span><span id="deleteAtPositionElement" class="hide">
<span id="delPosIfCon">if (first == NULL) {</span>
	<span id="printfPos1">printf("Single Linked List is empty"
	" so Deletion is not possible\n");</span>
} else {
	<span id="printfPos2">printf("Enter position : ");</span>
	<span id="scanfPos2">scanf("%d", &pos);</span>
	<span id="callToPosDeleteFunction">first = deleteAtPosition(first, pos);</span>
}
</span></pre><pre class="hide" id="addNodeParent">
<span id="addNodeSpan">node addNodes(node first, int x) {
	node <span id="tempDec">temp</span>, <span id="lastNodeDec">lastNode = first;</span>
	<span id="createCall">temp = createNode();</span>
	<span id="tempData">temp->data = x;</span>
	<span id="addNodeIf">if (first == NULL) {</span>
		<span id="tempValAssign">first = temp;</span>
	} else {
		<span id="addElseWhile">while (lastNode->next != NULL) {</span>	
			<span id="lastNodeVal">lastNode = lastNode->next;</span>
		}
		<span id="lastNodeTemp">lastNode->next = temp;</span>
	}
	<span id="returnFrst">return first;</span>
}</span></pre><pre class="hide" id="traverseParent">
<span id="traverseListSpan">void traverseList(node first) {
	<span id="traverseTemp">node temp = first;</span>
	<span id="traverseWhileCond">while (<span id="traverseWhileLoop">temp != NULL</span>) {</span>
		<span id="traverseWhileTrue">printf("%d --> ", temp->data);</span>
		<span id="traverseTempInc">temp = temp->next;</span>
	}
	<span id="traverseWhileFalse">printf("<span id="nullPrint">NULL</span>\n");</span>
}</span></pre><pre class="hide" id="searchParent">
<span id="searchLogic">int searchPosOfEle(node first, int key) {
	<span id="firstEqlToCurr">node currentNode = first;</span>
	<span id="countToZero">int count = 0;</span>
	<span id="checkIfCon">if (<span id="ifCon">currentNode == NULL</span>) {</span>
		<span id="returnCount">return count;</span>
	}
	<span id="checkWhileLoop">while (<span id="checkWhile">currentNode != NULL &&
	 currentNode -> data != key</span>) {</span>
		<span id="checkCurrNext">if (currentNode -> next == NULL) {</span>
			<span id="returnZero">return 0;</span>
		}
		<span id="countInc">count++;</span>
		<span id="currEqlCurrPlus">currentNode = currentNode -> next;</span>
	}
	<span id="returnCountPlsOne">return(count + 1);</span>
}</span></pre><pre class="hide" id="deleteAtEndParent">
<span id="deleteAtEndLogic">node deleteAtEnd(node first) {
	<span id="assignFirstToLastNode">node prev, lastNode = first</span>;
	<span id="checkLastNodeNull">if (lastNode -> next == NULL) {</span>
		<span id="firstEQlTofirstNext">first = first -> next;</span>
	} else {
		<span id="checkLastNodeNotEqlToNull">while (lastNode -> next != NULL) {</span>
			<span id="lastEqlPrev">prev = lastNode;</span>
			<span id="lastNextEqlLast">lastNode = lastNode -> next;</span>
		}
		<span id="preNextToNull">prev -> next = NULL;</span>
	}
	<span id="printfdelAtEnd2">printf("The deleted item from SLL"
		" : %d\n", lastNode -> data);</span>
	<span id="freeLastNode">free(lastNode);</span>
	<span id="returnFirstNode">return first;</span>
}</span></pre><pre class="hide" id="deleteAtBeginParent">
<span id="deleteAtBeginLogic">node deleteAtEnd(node first) {
	<span id="firstToTemp">node temp = first;</span>
	<span id="firstNextToFirst">first = first -> next;</span>
	<span id="printfdelAtBeg2">printf("The deleted element from"
		" SLL : %d\n" , temp -> data);</span>
	<span id="freeNode">free(temp);</span>
	<span id="returnFirstVal">return first;</span>
}</span></pre><pre class="hide" id="deleteAtPositionParent">
<span id="deleteAtPositionLogic">node deleteAtPosition(node first, int pos) {
	<span id="previousAndLastNode">node prevPos = first, lastNode = first;</span>
	<span id="iValInit">int i;</span>
	<span id="ifPosEqlToOne">if (pos == 1) {</span>
		<span id="fstnxtToFst">first = first -> next;</span>
	} else {
		<span id="forLoop">for (i = 1; i &lt; pos; i++) {</span>
			<span id="ifLastNodeEqToNull">if (lastNode == NULL) {</span>
				<span id="printfPos3">printf("No such position in SLL"
				" so deletion is not possible\n");</span>
				<span id="retnFst1">return first;</span>
			}
			<span id="lastNodeIsPrevNode">prevPos = lastNode;</span>
			<span id="lastNextIsLast">lastNode = lastNode -> next;</span>
		}
		<span id="lastNullAndPosZero">if (lastNode == NULL || pos < 0) {</span>
			<span id="printfPos5">printf("No such position in SLL"
			" so deletion is not possible\n");</span>
			<span id="retnFst3">return first;</span>
		} else {
			<span id="lastNextIsPrevNext">prevPos -> next = lastNode -> next;</span>
		} 
	}
	<span id="printfPos4">printf("The deleted element from SLL :"
	" %d\n" , lastNode -> data);</span>
	<span id="freeLstNode">free(lastNode);</span>
	<span id="retnFst2">return first;</span>
}
</span></pre></pre>
			</div>
			<div class="col-xs-8">
				<div class="col-xs-12 border-css padding0 opacity00" id="animationDiv" style="min-height: 180px;">
					<div class="col-xs-12 margin-top-15">
						<div class="col-xs-12 border-css opacity00" id="buttonsDiv">
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="addNodesBtn">
									ADD NODES</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="traverseListBtn">
									TRAVERSE LIST</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="insertAtBegin">
									INSERT AT BEGIN</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="insertAtEnd">
									INSERT AT END</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="insertAtPosition">
									INSERT AT POSITION</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="searchNodesBtn">
									SEARCH</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="deleteAtBeginBtn">
									DELETE AT BEGIN</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="deleteAtEndBtn">
									DELETE AT End</span></div>
							<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="deleteAtPositionBtn">
									DELETE AT POSITION</span></div>
							<!-- <div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="countNodes">
									COUNT</span></div> -->
						</div>
					</div>
					<div class="col-xs-12 margin-top-15" id="arrowDiv">
						<div class="col-xs-12 padding0">
							<div class="col-xs-1 padding0 opacity00 opacity00" id="firstNode">
								<div class="text-center col-xs-12 padding0 ct-green-color">first</div>
								<div class="col-xs-12 box padding0" id="firstDiv">
									<span  id="firstVal" class="ct-green-color inline-style">NULL</span>
								</div>
							</div>
							<div class="col-xs-11" id="dynamicNodes"></div>
						</div>
						<div class="col-xs-12 margin-top-25 padding0" style="margin-bottom: 7px;" id="nodeAddress">
							<div class="col-xs-1 opacity00 padding0" id="lastNodeMemory">
								<div class="col-xs-12 box padding0"><span id="lastNodeMemoryVal" class='ct-brown-color inline-style'></span></div>
								<div class="text-center col-xs-12 padding0 ct-green-color" id="nodeName">lastNode</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top-15">
					<div class="col-xs-6 col-xs-offset-3 padding0 opacity00" id="consoleId">
						<div class="output-console-title-bar">Output</div>
						<div class="output-console-body margin0">
						<div id="consoleEnter" class="outputCount1"></div>
						<div id="consoleOutput" class="outputCount2"></div>
						<div id="addElementOutputPrint"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<script>
var introjs;
var iVal = 0;
var lineVal = 0;
var rVal = 0;
var tl = TweenMax;
var printfCount = 1;
var count = 0;
var lineCount = 11;
var tmpLine = 20;
var prevPosLine = 30;
var lastNodeLine = 40;
var i = 1;
var extraLine = 100;
var arrowFlag = false;
var deleteEnd = 0;


$(document).ready(function() {
	initIntroJS();
	
	svgAppend("#arrowDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	
	addNodeClick();
	traverseClick();
	searchButtonClick();
	deleteAtEndButtonClick();
	deleteAtBeginButtonClick();
	deleteAtPositionButtonClick();
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		showBullets : false,
		steps : [ {
			element: '#strcutSpan',
			intro: '',
			position: 'right'
		}, {
			element:'#typeDefDec',
			intro: ''
		}, {
			element: '#nodeDec',
			intro: ''
		}, {
			element: '#buttonsDiv',
			intro: '',
			position: 'left'
		}, {
			element : "#restart",
			intro : "",
			position: "right"
		} ]
	});
	
	introjs.onafterchange(function (targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		introjs.refresh();
		var elementId = targetElement.id
		switch (elementId) {
			case "strcutSpan":
				var text = "This is the declaration of a new <span class='ct-code-b-yellow'>struct</span>"
							+ " type <span class='ct-code-b-yellow'>"
							+ " list</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "typeDefDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>typedef</span> "
								+ "creates a <span class='ct-code-b-yellow'>node</span> as a"
								+ " new type <span class='ct-code-b-yellow'>pointer</span> to "
								+ "<span class='ct-code-b-yellow'>struct list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "nodeDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Here we are declaring a variable <span class='ct-code-b-yellow'>first</span> "
								+ "to the <span class='ct-code-b-yellow'>node</span> type and initializing it"
								+ " to <span class='ct-code-b-yellow'>NULL</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#animationDiv").removeClass("opacity00").addClass("zindex");
						transferEffect('#nodeDec', '#firstNode', function() {
							setTimeout(function() {
								$("#animationDiv").removeClass("zindex");
								$('.introjs-nextbutton').show();
							}, 800);
						});
					});
				});
				break;

			case "buttonsDiv":
				$("#whileCondParent, #addMain, #addNodeParent, #traverseParent, .temp-nodes, #displayMain").addClass("hide");
				$("#searchParent, #addNodeParent, #searchElement, #deleteAtPositionParent, #deleteAtPositionElement").addClass("hide");
				$("#deleteAtEndElement, #deleteAtEndParent, #deleteAtBeginElement, #deleteAtBeginParent").addClass("hide");
				$("#lastNodeMemory").addClass("opacity00");
				$(".btn").addClass('disabled');
				$("#consoleOutput").empty('');
				$("#lines"+ lineCount +", #lines" + prevPosLine + ", #lines" + lastNodeLine).remove();
				$("#buttonsDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Choose any button.";
					typing('.introjs-tooltiptext', text, function() {
						$(".btn").removeClass('disabled');
						count = 0; printfCount = 1; i = 1;deleteEnd = 0;
						
					});
				});
				break;
				
			case "addMain":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#addMain").removeClass("opacity00");
					nextStep('#whilePrintStatmnt', 'hide');
					timeOut();
				});
				break;
				
			case "whilePrintStatmnt":
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep('#consoleId', 'hide', 'left', 'whilePrinting');
					timeOut();
				});
				break;
				
			case "consoleId":
				$('.introjs-helperLayer').one('transitionend', function() {
					var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
					$("#consoleId").removeClass("opacity00");
					switch(dynamicStep) {
						case "whilePrinting":
							$('.temp-nodes').removeClass("hide");
							$("#consoleEnter").append('<span id="print1">Enter elements up to -1 : ' 
										+ '<input class="user-text visibility-hidden"'
										+ ' id="whileVal" placeholder="number" maxlength="3"></span>');
							if (iVal > 0) {
								$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
								var text = "If you want to exit from <span class='ct-code-b-yellow'>addNodes()</span> method enter -1";
								typing("#appendText", text);
							}
							nextStep('#whileScan', 'hide');
							timeOut();
						break;
							
						case "whileEnter":
							var text = "Enter any number up to -1.";
								typing('.introjs-tooltiptext', text, function() {
									$('#whileVal').removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
									nextStep('#addWhile', 'show');
									events("#whileVal");
								});
							break;
							
						case "displayTrue":
							$("#consoleOutput").append('Single Linked List is empty');
							nextStep("#buttonsDiv", 'hide', 'left');
							timeOut();
							break;
							
						case "displayFalse":
							$("#consoleOutput").append('The elements in SLL are : <span id="outPutLine"></span><span id="emptySpan">'
													+ '<span class="opacity00">555 --></span></span>');
							nextStep("#callTraverseList", 'hide');
							timeOut();
							break;
							
						case "printWhileTrue":
							$("#arrowDiv").addClass("zindex");
							transferEffect("#data" + rVal, "#emptySpan", function() {
								$("#outPutLine").append($("#data" + rVal).text() + " --> ");
								$("#arrowDiv").removeClass("zindex");
								nextStep("#traverseTempInc", 'show');
								timeOut();
							});
							break;
							
						case "printWhileFalse":
							$("#nullPrint").addClass("zindex");
							transferEffect("#nullPrint", "#nullSpan", function() {
								$("#nullPrint").removeClass("zindex");
								$(".temp-nodes, #tempNodeParent" + iVal).remove();
								nextStep("#buttonsDiv", 'hide', 'left');
								timeOut();
							});
						break;
						
						case "printScrhEleText" :
							$("#addElementOutputPrint").append('<span id="print">Enter search elemet : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="searchVal" placeholder="number" maxlength="3"></span>');
							nextStep('#scanf1', 'hide', '', 'readSearchVal');
							timeOut();
						break;
						
						case "entScrhEle" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter which element you want to search.";
							typing('.introjs-tooltiptext', text, function() {
								$("#searchVal").removeClass("visibility-hidden").focus();
								nextStep('#calSrhMethod', 'hide', 'bottom', 'searchMethodCall');
								events("#searchVal");
							});
						break;
						
						case "printDelValue" :
							$("#addElementOutputPrint").append('<span id="print">Enter position : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="delVal" placeholder="number" maxlength="3"></span>');
							nextStep('#scanfPos2', 'hide', '', 'readDelVal');
							timeOut();
						break;
						
						case "entrDelVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter which node you want to delete.";
							typing('.introjs-tooltiptext', text, function() {
								$("#delVal").removeClass("visibility-hidden").focus();
								nextStep('#callToPosDeleteFunction', 'hide');
								events("#delVal");
							});
						break;
						
						case "printPosValue" :
							if (count == 0) {
								$("#addElementOutputPrint").append('<br/><span id="print">The given element '
										+ $("#searchVal").val() +' is not found in the given SLL</span>');	
							} else {
								$("#addElementOutputPrint").append('<br/><span id="print">The given element '
										+ $("#searchVal").val() +' is found at position '
										+ count +'</span>');
							}
							nextStep("#buttonsDiv", 'hide', 'left');
							setTimeout(function() {
								introjs.nextStep();								
							},2000);
						break;
							
						case "printDeleteNotPossible" :
							var delAtEndCon = ($("#firstVal").text()).trim() == "NULL";
							if (delAtEndCon) {
								$("#addElementOutputPrint").append('<br/><span id="print">Single Linked List is empty'
										+ ' so Deletion is not possible</span>');	
								nextStep("#buttonsDiv", 'hide', 'left');
								setTimeout(function() {
									introjs.nextStep();								
								},2000);	
							}
						break;
						
						case "printDeletePossible" :
							$("#addElementOutputPrint").append('<br/><span id="print">The deleted item from SLL '
									+ $('#dataDiv' + deleteEnd).text() +'');
							if (flag == "delEnd") {
								nextStep("#freeLastNode", 'hide', 'left');
							} else  if (flag == "delBegin") {
								nextStep("#freeNode", 'hide', 'left');
							} else {
								nextStep("#freeLstNode", 'hide', 'left');
							}
							setTimeout(function() {
								introjs.nextStep();								
							},2000);	
						break;
						case "nosuchElement" :
							$("#addElementOutputPrint").append('<br/><span id="print">No such position in SLL'
									+ ' so Deletion is not possible</span>');	
							nextStep("#buttonsDiv", 'hide', 'left');
							setTimeout(function() {
								introjs.nextStep();								
							},2000);
						break;
					}
				});
				break;
				
			case "whileScan":
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep('#consoleId', 'show', 'left', 'whileEnter');
					timeOut();
				});
				break; 
				
			case "addWhile":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span id='whileLoop' class='inline-style opacity00 ct-code-b-yellow'>"
								+ "<span id='xVal' class='inline-style'>x</span> != -1 </span><br><div id='condText'></div>";
					typing('.introjs-tooltiptext', text, function() {
						var l1 = $("#addWhile").offset();
						$("#whileLoop").offset({top:l1.top, left:l1.left});
						$("#whileLoop").removeClass("opacity00");
						tl.to("#whileLoop", 0.5, {top:0, left:0, onComplete: function() {
							rotationEffect("#xVal", parseInt($("#whileVal").val()), function() {
								if (parseInt($("#whileVal").val()) != -1) {
									var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>."
												+ " Hence control enters into the loop.";
									nextStep('#trueCond', 'hide');
								} else {
									nextStep('#buttonsDiv', "", "left");
									var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>. "
												+ "Hence control comes out of the loop.";
									$('#consoleId').addClass("opacity00");
									$("#consoleEnter").empty();
								}
								typing('#condText', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						}});
					});
				});
				break;
				
			case "trueCond":
				$("#whileLoop").remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep('#addNodeSpan', 'hide', 'right');
					$("#addNodeParent").removeClass("hide").addClass('opacity00');
					timeOut();
				});
				break;
				
			case "addNodeSpan":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#addNodeParent").removeClass("opacity00");
					$("#arrowDiv").addClass("zindex");
					if ($('.temp-nodes').length < 5) {
						$("#nodeAddress").append('<div class="col-xs-1 col-xs-offset-1 padding0 opacity00 '
								+ 'temp-nodes" id="tempNodeParent' + iVal + '">'
								+ ' <div class="col-xs-12 box padding0"><span id="tempNode' + iVal
								+ '" class="ct-brown-color opacity00 inline-style">'
								+ ' 1111</span></div><div class="text-center col-xs-12 padding0 ct-green-color" id="temp">'
								+ ' temp</div></div>');
						transferEffect("#tempDec", "#tempNodeParent" + iVal, function() {
							$("#lastNodeMemoryVal").text($("#firstVal").text()).addClass("opacity00");
							transferEffect("#lastNodeDec", "#lastNodeMemoryVal", function() {
								$("#lastNodeMemoryVal, #lastNodeMemory").removeClass("opacity00");
								$("#arrowDiv").removeClass("zindex");
								nextStep('#createCall', 'hide');
								timeOut();
							});
						});
					} else {
						$("#tempDec").effect("highlight", {color : 'yellow'}, 500);
						transferEffect("#tempDec", "#tempNodeParent" + (iVal - 1), function() {
							$("#lastNodeDec").effect("highlight", {color : 'yellow'}, 500);
							$("#lastNodeMemoryVal").text($("#firstVal").text()).addClass("opacity00");
							transferEffect("#lastNodeDec", "#lastNodeMemoryVal", function() {
								$("#lastNodeMemoryVal, #lastNodeMemory").removeClass("opacity00");
								$("#arrowDiv").removeClass("zindex");
								nextStep('#createCall', 'hide');
								timeOut();
							});
						});
					}
				});
				break;
				
			case "nodeCreation":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>createNode()</span> function is used to"
								+ " <span class='ct-code-b-yellow'>create a new node</span>.";
					typing('.introjs-tooltiptext', text, function() {
						nextStep('#createNodeSpan');
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "createNodeSpan":
				$('.introjs-tooltip').css({'min-width': '300px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					var text = "<li><span class='ct-code-b-yellow'>malloc()</span> creates a "
								+ "<span class='ct-code-b-yellow'>dynamic memory</span>"
								+ " to the <span class='ct-code-b-yellow'>struct list</span> which"
								+ " contains <span class='ct-code-b-yellow'>two</span>"
								+ " fields <span class='ct-code-b-yellow'>data</span> and "
								+ "<span class='ct-code-b-yellow'>next</span>.</li>"
								+ " <li><span class='ct-code-b-yellow'>malloc()</span> function returns"
								+ " the <span class='ct-code-b-yellow'>"
								+ " address</span> of the allocated memory that will be stored in "
								+ "<span class='ct-code-b-yellow'>temp</span>.</li></ul>";
					typing('.introjs-tooltiptext > ul', text, function() {
						var randomAddress = getRandomInt(1000, 5000);
						$("#dynamicNodes").append('<div class="col-xs-2 nodes opacity00" id="node' + iVal 
								+ '" style="top: 0px; width: auto;">'
								+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 ct-blue-color padding0 text-center">'
								+ ' data</div><div class="ct-green-color text-center">next</div></div>'
								+ ' <div id="nodedata' + iVal + '"><div id="dataDiv' + iVal + '"'
								+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + iVal +'"'
								+ ' class="data-span opacity00 ct-blue-color" style="top: 0px; left: 0px;"></span></div>'
								+ ' <div id="nextDiv' + iVal +'" class="position div-border right-radius col-xs-6 next-div">'
								+ ' <span id="next' + iVal +'" class="position next-span ct-green-color inline-style"></span></div></div>'
								+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 padding0 text-center">'
								+ ' <span id="dataAddress' + iVal + '" class="data-address padding0 ct-brown-color">'+ randomAddress 
								+ '</span></div></div></div>');
						$("#arrowDiv").addClass("zindex");
						transferEffect("#createNodeSpan", "#node" + iVal, function() {
							setTimeout(function() {
								var t = $(".nodes").length % 6;
								if (t == 0) {
									transferEffect("#dataAddress" + iVal, "#tempNode" + (iVal - 1), function() {
										$("#tempNode" + (iVal - 1)).text($("#dataAddress" + iVal).text());
										svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + (iVal - 1), "#nextDiv" + iVal, "#svgId", "line" 
														+ iVal, "arrow", function() {
											nextStep('#tempNext');
											$('.introjs-nextbutton').show();
										});
									});
								} else {
									transferEffect("#dataAddress" + iVal, "#tempNode" + iVal, function() {
										$("#tempNode" + iVal).text($("#dataAddress" + iVal).text());
										svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + iVal, "#nextDiv" + iVal, "#svgId", "line" + iVal, 
													"arrow", function() {
											nextStep('#tempNext');
											$('.introjs-nextbutton').show();
										});
									});
								}
							}, 500);
						});
					});
				});
				break;
				
			case "tempNext":
				$('.introjs-tooltip').css({'min-width': '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Here, <span class='ct-code-b-yellow'>NULL</span> is assign to"
								+ " next field of <span class='ct-code-b-yellow'>temp</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#arrowDiv").addClass("zindex");
						$("#next" + iVal).addClass("opacity00").text('NULL');
						transferEffect("#tempNext", "#next" + iVal, function() {
							$("#arrowDiv").removeClass("zindex");
							nextStep('#returnTemp', 'hide');
							$('.introjs-tooltip').removeClass("hide");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "returnTemp":
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep('#tempData');
					timeOut();
				});
				break;
				
			case "createCall":
				$('.introjs-tooltip').css({'min-width': '300px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append('<ul></ul');
					var text = "<li>Here, first call is made to the function "
							+ "<span class='ct-code-b-yellow'>createNode()</span>.</li>"
						 	+ " <li>The <span class='ct-code-b-yellow'>return</span> value"
						 	+ " is stored into the <span class='ct-code-b-yellow'>"
						 	+ " node</span> type variable <span class='ct-code-b-yellow'>first</span>.</li>";
					typing('.introjs-tooltiptext > ul', text, function() {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" '
								+ 'onclick="createNodeMethod()">Next &#8594;</a>');
					});
				});
				break;
				
			case "tempData":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>x</span> value <span class='ct-code-b-yellow'>" + $("#whileVal").val() 
								+ "</span> is stored in the <span class='ct-code-b-yellow'>data</span> field of"
								+ " <span class='ct-code-b-yellow'>temp</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#consoleId, #arrowDiv").addClass("zindex");
						$("#whileVal").effect("highlight", {color: 'blue'}, 600);
						$("#data" + iVal).text(parseInt($("#whileVal").val()));
						$("#whileVal").effect( "transfer", { to: $("#data" + iVal), className: "ui-effects-transfer" }, 500 , function() {
							$("#data" + iVal).removeClass("opacity00");
							$("#consoleId").removeClass("zindex");
							$("#data" + iVal).removeClass("opacity00");
							$("#arrowDiv").removeClass("zindex");
							nextStep("#addNodeIf");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
				case "addNodeIf":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='addIfCond' class='inline-style opacity00 ct-code-b-yellow'>"
								+ "<span id='firstNodeVal' class='inline-style'>"
								+ " first</span> == NULL</span><br><div id='condText'></div>";
						typing('.introjs-tooltiptext', text, function() {
							var l1 = $("#addNodeIf").offset();
							$("#addIfCond").offset({top:l1.top, left:l1.left});
							$("#addIfCond").removeClass("opacity00");
							tl.to("#addIfCond", 0.5, {top:0, left:0, onComplete: function() {
								rotationEffect("#firstNodeVal", $("#firstVal").text(), function() {
									if ($("#firstVal").text() == "NULL") {
										nextStep("#tempValAssign");
										var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>."
											+" Hence control enters into the <span class='ct-code-b-yellow'>if-block</span>.";
									} else {
										nextStep("#addElseWhile");
										var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>. Hence control enters"
											+ " into the <span class='ct-code-b-yellow'>else-block</span>.";
									}
									typing('#condText', text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							}});
						});
					});
					break;
					
				case "tempValAssign":
					$("#condText").remove();
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span class='ct-code-b-yellow'>first = <span id='tempVal' class='inline-style'>temp</span></span>";
						typing('.introjs-tooltiptext', text, function() {
							rotationEffect("#tempVal", $("#tempNode" + iVal).text(), function() {
								$("#arrowDiv").addClass("zindex");
								transferEffect("#tempNode" + iVal, "#firstVal", function() {
									$("#firstVal").text($("#tempNode" + iVal).text());
									nextStep("#returnFrst", 'hide');
									if (iVal == 0) { 
										svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + iVal, "#svgId", "lines" + lineVal, 
													"arrow", function() {
											$("#lines" + lineVal).attr("class", "svg-line lines");
											lineVal++;
											$("#line" + iVal).remove();
											$("#tempNodeParent" + iVal).addClass("opacity00");
											$("#arrowDiv").removeClass("zindex");
											$('.introjs-nextbutton').show();
										});
									}
								});
							});
						});
					});
					break;
					
				case "returnFrst":
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#consoleEnter").empty();
						var t = $(".nodes").length % 6;
						if (t == 0) {
							$('.temp-nodes').remove();
						}
						iVal++;
						addNodeDynamicSteps();
						timeOut();
					});
					break;
					
				case "addElseWhile":
					$("#condText").remove();
						var text = "<span class='ct-code-b-yellow'><span id='lastNodeNext' class='inline-style'>lastNode->next</span>"
									+ " != NULL</span><br>";
						typing('.introjs-tooltiptext', text, function() {
							rotationEffect("#lastNodeNext", $("#next" + rVal).text(), function() {
								whileConditionChecking(rVal);
							});
						});
					break;
					
				case "lastNodeVal":
					$('.introjs-tooltip').css({'min-width' : '250px'});
					$("#conditionText").remove();
					$('.introjs-helperLayer').one('transitionend', function() {
						if (iVal > 1 && rVal < iVal) {
							$('.introjs-tooltip').removeClass("hide");
							var text = "<span id='lastNode1' class='inline-style ct-code-b-yellow opacity00'>lastNode = "
										+ "<span id='lastNodeNextVal' class='inline-style'>lastNode->next</span></span>";
							typing('.introjs-tooltiptext', text, function() {
								var l1 = $("#lastNodeVal").offset();
								$("#lastNode1").offset({top: l1.top, left: l1.left});
								$("#lastNode1").removeClass("opacity00");
								tl.to("#lastNode1", 0.5, {top: 0, left: 0, onComplete: function() {
									rotationEffect("#lastNodeNextVal", $("#next" + rVal).text(), function() {
										nextStep("#arrowDiv", 'hide', '', "changeLastNodeVal");
										$('.introjs-nextbutton').show();
									});
								}});
							});
						} else {
							nextStep("#arrowDiv", 'hide', '', 'firstStep');
							timeOut();
						}
					});
					break;
					
				case "lastNodeTemp":
					$("#conditionText").remove();
					rVal = 0;
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep("#arrowDiv", 'hide', '', 'secondStep');
						timeOut();
					});
					break;
					
				case "arrowDiv":
					$('.introjs-tooltip').css({'min-width' : '200px'});
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
						
							case "changeLastNodeVal":
								transferEffect("#next" + rVal, "#lastNodeMemoryVal", function() {
									nextStep("#addElseWhile");
									rotationEffect("#lastNodeMemoryVal", $("#next" + rVal).text(), function() {
										rVal++;
										timeOut();
									});
								});
								break;
						
							case "firstStep":
								nextStep("#returnFrst", 'hide');
								svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + iVal, "#svgId", "lines" + lineVal, 
										"arrow", function() {
									$("#lines" + lineVal).attr("class", "svg-line lines");
									lineVal++;
									$("#line" + iVal).remove();
									var t = $('.nodes').length % 6;
									if (t == 0) {
										$(".temp-nodes").remove();
									} else {
										$("#tempNodeParent" + iVal).addClass("opacity00");
									}
									timeOut();
								});
								break;
								
							case "secondStep":
								var t = $(".nodes").length % 6;
								if (t == 0) {
									transferEffect("#tempNode" + (iVal - 1), "#nextDiv" + (iVal - 1), function() {
										rotationEffect("#next" + (iVal - 1), $("#tempNode" + (iVal - 1)).text(), function() {
											nextStep("#returnFrst", 'hide');
											svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + (iVal - 1), "#dataDiv" + iVal, "#svgId", "lines" 
														+ lineVal, "arrow", function() {
												$("#lines" + lineVal).attr("class", "svg-line lines");
												lineVal++;
												$("#line" + iVal).remove();
												$("#tempNodeParent" + (iVal - 1)).addClass("opacity00");
												timeOut();
											});
										});
									});
								} else {
									transferEffect("#tempNode" + iVal, "#nextDiv" + (iVal - 1), function() {
										rotationEffect("#next" + (iVal - 1), $("#tempNode" + iVal).text(), function() {
											nextStep("#returnFrst", 'hide');
											svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + (iVal - 1), "#dataDiv" + iVal, "#svgId", "lines" 
														+ lineVal, "arrow", function() {
												$("#lines" + lineVal).attr("class", "svg-line lines");
												lineVal++;
												$("#line" + iVal).remove();
												$("#tempNodeParent" + iVal).addClass("opacity00");
												timeOut();
											});
										});
									});
								}
							break;
							
							case "copyFirstToCurrent" :
								$("#nodeName").text("currentNode");
								transferEffect("#firstEqlToCurr", "#lastNodeMemory", function() {
									fromEffectWithTweenMax("#lastNodeMemoryVal", "#firstVal", $("#firstVal").text(), function() {
										if ($("#firstVal").text() != "NULL") {
											svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "lines" + lineCount, 
													"arrow");
										}
										nextStep("#countToZero", '','', 'initializeCount');
										timeOut();
									});									
								});
							break;
							
							case "whileLoopExpl" :
								var text = '<span id="whileCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="firstCon" class="position"><span id="curNode1" class="position">currentNode</span>'
									+ ' != NULL</span> && <span id="secondCon" class="position"><span id="curNodeData" class="position">'
									+ 'currentNode -> data</span> != <span id="keyVal" class="position">key</span></span></span>'
									+ '<br/><div id="appendText"></div>';
								$('.introjs-tooltip').removeClass("hide");
								typing('.introjs-tooltiptext', text, function() {
									searchFunction();
								});
							break;
							
							case "currNextNull" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'currentNode -> next</span> == NULL</span></span><br/><div id="appendText"></div>';
								$('.introjs-tooltip').removeClass("hide");
								typing('.introjs-tooltiptext', text, function() {
									checkIfCurrNaxtNull();
								});
							break;
							
							case "currNextIsCurr" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">currentNode = <span id="curNodeNext" class="position">'
									+ 'currentNode -> next</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									currentNotIsEqualToCurrent();
								});
							break;
							
							case "delIfCon" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'first</span> == NULL</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									deleteAtEndInMainMethod("delIfCon");
								});
							break;
							
							case "delBeginIfCon" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'first</span> == NULL</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									deleteAtEndInMainMethod("delBegIfCon");
								});
							break;
							
							case "delPosinIfCon" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'first</span> == NULL</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									deleteAtEndInMainMethod("delPosIfCon");
								});
							break;
							
							case "firstValStoredInLargest" :
							var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
								+ '<span id="ifConditionChek" class="position">lastNode = <span id="curNodeNext" class="position">'
								+ 'first</span></span></span><br/><div id="appendText"></div>';
							typing('.introjs-tooltiptext', text, function() {
								firstStoredInLastNode();
							});
							break;
							
							case "firstToTemp" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">temp = <span id="curNodeNext" class="position">'
									+ 'first</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									$("#nodeName").text("temp");
									firstStoredInTemp();
								});
							break;
							
							case "prevAndLastNode" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">prevPos = <span id="curNodeNext" class="position">'
									+ 'first, lastNode = first</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									$("#temp").text("lastNode");
									$("#nodeName").text("prevPos");
									prevsAndLastNode();
								});
							break;
							
							case "checkLastNodeIsNull" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'lastNode -> next</span> == NULL</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									checkIfLastNodeIsNull();
								});
							break;
							
							case "firstEQlTofirstNext" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">first = <span id="curNodeNext" class="position">'
									+ 'first -> next</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									firstEqualToFirstNext("firstEQlTofirstNext");
								});
							break;
							
							case "deleteAtPosition" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">first = <span id="curNodeNext" class="position">'
									+ 'first -> next</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									firstEqualToFirstNext("deleteAtPosition");
								});
							break;
							
							case "freeLastNode" :
								nextStep("#returnFirstNode", 'hide');
								TweenMax.to("#node" + deleteEnd, 0.5, { top : -80, onComplete: function() {
									$("#node" + deleteEnd).addClass("opacity00");
									$("#lines" + lastNodeLine).remove();
								  	$("#lastNodeMemory, #tempNodeParent0").addClass("opacity00");
								  	iVal--;
									introjs.refresh();
									 setTimeout(function(){
										introjs.nextStep();
									},2100);
								}});
							break;
							case "freePosNode" :
								nextStep("#retnFst2", 'hide');
								posVal = $("#delVal").val();
								if (posVal == 1) {
									console.log("In one")
									if (($("#nextDiv" + posVal).text()).trim() == "NULL") {
										setTimeout(function() {
											TweenMax.to("#node0", 0.5, { top : -80, onComplete: function() {
												$("#lines" + count +", #lines" + prevPosLine + ", #lines" + lastNodeLine).remove();
												$("#lastNodeMemory, #node0, #tempNodeParent0").addClass("opacity00");
												$("#node" + count).css("top","0");
												iVal--;
												setTimeout(function() {
													introjs.nextStep();
												},2100);
											}});
										}, 1000);
									} else {
										$("#lines" + count).remove();
										$("#lines"+ (count + 1)).remove();
										TweenMax.to("#node" + count, 0.5, { top : -80, onComplete: function() {
											$("#lines" + count +", #lines" + prevPosLine + ", #lines" + lastNodeLine).remove();
											$("#lastNodeMemory, #node" + count).addClass("opacity00");
											$("#node" + count).css("top","0");
											deleteAtFirstNode(0, "#node0", function() {
												setTimeout (function() {
													svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + (posVal), "#svgId", "lines0", 
															"arrow", function() {
														$.each($("#dynamicNodes > div"), function(i) {
															$(this).css("left", "120");
														});
														setTimeout(function() {
															changePosIds();
															introjs.nextStep();
														},2100);
													});
												},1000);
											})
										}});
									}
								} else {
									console.log("In not one else")
									if (($("#nextDiv" + (i - 1)).text()).trim() == "NULL") {
										console.log("In i next equal to null");
										TweenMax.to("#node" + (i - 1), 0.5, { top : -80, onComplete: function() {
											$("#lastNodeMemory, #node"+ (i - 1) +", #tempNodeParent0").addClass("opacity00");
											$("#node" + count).css("top","0");
											iVal--;
											setTimeout(function() {
												introjs.nextStep();
											},2100);
										}});
									} else {
										
										console.log("In i next not equal to null");
										TweenMax.to("#node" + (i - 1), 0.5, { top : -80, onComplete: function() {
											$("#lastNodeMemory, #node" + (i - 1)).addClass("opacity00");
											$("#node" + (i - 1)).css("top","0");
											deleteAtFirstNode((i - 1), "#node" + (i - 1), function() {
												setTimeout (function() {
													if ($(".nodes").length == 1) {
														svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" 
																+ (posVal), "#svgId", "lines"+ (i - 1), "arrow", function() {
															$.each($("#dynamicNodes > div"), function(i) {
																$(this).css("left", "120");
															});
															setTimeout(function() {
																introjs.nextStep();
															},2100);															
														});
													} else {
														svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + (posVal - 2), "#dataDiv" 
																+ (posVal), "#svgId", "lines"+ (i - 1), "arrow", function() {
															$.each($("#dynamicNodes > div"), function(i) {
																$(this).css("left", "120");
															});
															setTimeout(function() {
																introjs.nextStep();
																changePosIds();
															},2100);
														});
													}
												},1000);
											});
										}});
									}
								}
							break;
							case "freeFirstNode" :
								nextStep("#returnFirstVal", 'hide');
								if (($("#nextDiv" + count).text()).trim() == "NULL") {
									$("#lines" + count).remove();
									TweenMax.to("#node0", 0.5, { top : -80, onComplete: function() {
										$("#lastNodeMemory, #node0").addClass("opacity00");
										$("#node0").css("opacity", "0");
										$("#node" + count).css("top","0");
										iVal--;
										setTimeout(function() {
											introjs.nextStep();
										},2100);
									}});
								} else {
									$("#lines" + count).remove();
									$("#lines"+ (count + 1)).remove();
									TweenMax.to("#node" + count, 0.5, { top : -80, onComplete: function() {
										$("#lastNodeMemory, #node" + count).addClass("opacity00");
										$("#node" + count).css("top","0");
										iVal--;
										
										deleteAtFirstNode(0, "#node0", function() {
											setTimeout (function() {
												changeIds();
												svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv0", "#svgId", "lines0", 
														"arrow", function() {
													$.each($("#dynamicNodes > div"), function(i) {
														$(this).css("left", "120");
													});
													setTimeout(function() {
														introjs.nextStep();
													},2100);
												});
											},1000);
										})
									}});
								}
								
							break;
							
							case "whileLastNotEqualToNull":
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'last -> next</span> != Null</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									WhileLastNodeNotEqualToNull();
								});
							break;
							case "lastNodeStoreInPre" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">prev = <span id="curNodeNext" class="position">'
									+ 'lastNode</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									lastNodeStoredINPrev();
								});
							break;
							case "lastNextEqlLastNode" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">lastNode = <span id="curNodeNext" class="position">'
									+ 'lastNode -> next</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									lastNextEqlLastNode();
								});
							break;
							case "preNextToEqlNull" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">prev -> next = <span id="curNodeNext" class="position">'
									+ 'NULL</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									preNextToEqualToNull();
								});
							break;
							case "firstNextToFirst" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">first = <span id="curNodeNext" class="position">'
									+ 'first -> next</span></span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									firstEqualToFirstNext("firstNextToFirst");
								});
							break;
							
							case "ChechLastNodeNullOrNot" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position"><span id="curNodeNext" class="position">'
									+ 'lastNode</span> == NULL</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									setTimeout(function() {
									
									var l1 = $("#ifLastNodeEqToNull").offset();
									$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
									$("#IfCurNextCon").removeClass("opacity00");
									tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												rotationEffect("#curNodeNext", $("#tempNode0").text(), function() {
													if (($("#tempNode0").text()).trim() == "NULL") {
														nextStep("#printfPos3", 'hide', "", "noSuchElementFound");
														var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>.";
													} else {
														nextStep("#lastNodeIsPrevNode", 'hide');
														var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>.";
													} 
													typing("#appendText", text, function() {
														$('.introjs-nextbutton').show();
														
													});
												});
											});
										});
									}});
								},500);
									
								});
							break;
							case "lastNextPrevNext" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">prevPos = <span id="curNodeNext" class="position">'
									+ 'lastNode</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									setTimeout(function() {
									var l1 = $("#lastNodeIsPrevNode").offset();
									$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
									$("#IfCurNextCon").removeClass("opacity00");
									tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												rotationEffect("#curNodeNext", $("#tempNode0").text(), function() {
													fadeInFromEffectWithTimelineMax( '#tempNode0','#lastNodeMemoryVal', function() {
														if ($("#delVal").val() != 1 && arrowFlag == true) {
															$("#lines" + prevPosLine).remove();
															svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + (i - 1), "#svgId", "lines" + prevPosLine, 
																"arrow", function() {
															});
														}
														console.log('lastNodeIsPrevNode');
														nextStep("#lastNextIsLast", 'hide');
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									}});
								},500);
									
								});
							break;
							case "lastNodeIsLast" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">lastNode = <span id="curNodeNext" class="position">'
									+ 'lastNode -> next</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									var id;
									var l1 = $("#lastNextIsLast").offset();
									$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
									$("#IfCurNextCon").removeClass("opacity00");
									tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												if (arrowFlag == false) {
													arrowFlag = true;
													id = $("#nextDiv" + (i - 1));
												} else {
													id = $("#dataDiv" + (i - 1));
												}
										    	svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", id, "#svgId", "lines" + extraLine,  
													"arrow", function() {
										      		$("#lines" + extraLine).remove();
										       		$("#nextDiv" + (i - 1)).effect("highlight", {color: 'blue'}, 500, function() {
														rotationEffect("#curNodeNext", $("#nextDiv" + (i - 1)).text(), function() {
										                	fadeInFromEffectWithTimelineMax( '#nextDiv'+(i - 1),'#tempNode0', function() {
										                  		
									                    		if (($("#tempNode0").text()).trim() == "NULL") {
										                    		console.log("HAi....Null.");
										                    		nextStep("#forLoop", 'hide',"", "iIncrement");
																	$('.introjs-nextbutton').show();
									                    		} else {
									                    			console.log("HAi...NOT.Null.");
									                    			$("#lines"+ lastNodeLine).remove();
									                    			svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#dataDiv" + (i), "#svgId", "lines" + lastNodeLine, 
																			"arrow", function() {
																			nextStep("#forLoop", 'hide',"", "iIncrement");
																			$('.introjs-nextbutton').show();
																	});
									                    		}
										                	});
										              	});
										            });
										    	});
										    });
										});
                    				}});
								});
							break;
							case "lastNodeIsPrevNext" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="position">prevPos -> next = <span id="curNodeNext" class="position">'
									+ 'lastNode -> next</span></span><br/><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									setTimeout(function() {
									var l1 = $("#lastNextIsPrevNext").offset();
									$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
									$("#IfCurNextCon").removeClass("opacity00");
									tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#dataDiv" + (i - 1), "#svgId", "lines" + extraLine, 
														"arrow", function() {
								       				$("#lines" + extraLine).remove();
													$("#nextDiv" + (i - 1)).effect("highlight", {color: 'blue'}, 500, function() {
														console.log("Hai...");
														$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
														svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + (i - 2), "#svgId", "lines" + extraLine, 
															"arrow", function() {
															$("#lines" + extraLine).remove();
															$("#nextDiv" + (i - 2)).effect("highlight", {color: 'blue'}, 500, function() {
																fadeInFromEffectWithTimelineMax('#next' + (i - 1), '#next' + (i - 2), function() {
																	$("#lines" + (i - 1) +", #lines" + (i) + ", #lines" + lastNodeLine + ", #lines" + prevPosLine).remove();
																	printfCount = 4;
																	nextStep("#printfPos4", 'hide',"", "deleteAtEnd");
																	$('.introjs-nextbutton').show();
																}); 
													        });
												        });
													});
									              });
									            });
											});
										});
									}});
								},500);
								});								
							break;
							case "lastNullAndPosToZero" :
								$('.introjs-tooltip').removeClass('hide');
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek"><spna id="checkFirstCon" class="position">'
									+ '<span id="curNodeNext" class="position">'
									+ 'lastNode</span> == NULL</span> || <span id="checkSecondCon" class="position">'
									+ ' <span id="posCheck" class="position">pos</span> &lt; 0</span></span></span></span>'
									+ '<br/><div id="appendText"></div><br/><div id="appendButton"></div>';
								typing('.introjs-tooltiptext', text, function() {
									setTimeout(function() {
										var l1 = $("#lastNextIsPrevNext").offset();
										$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
										$("#IfCurNextCon").removeClass("opacity00");
										tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
											$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
												$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
													rotationEffect("#curNodeNext", $("#tempNode0").text(), function() {
														var firstCon = (($("#tempNode0").text()).trim() == "NULL");
														rotationEffect("#checkFirstCon", firstCon, function() {
															if (firstCon) {
																text = 'The first condition (<span class="ct-code-b-yellow">lastNode == NULL</span>)'
																	+' is evaluates to <span class="ct-code-b-yellow">true</span> so no need to check the'
																	+ ' second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>).'
																typing('#appendText', text, function() {
																	nextStep("#printfPos5", 'hide', "", "noSuchElementFound");
																	$('.introjs-nextbutton').show();
																});
															} else {
																text = 'The first condition (<span class="ct-code-b-yellow">lastNode == NULL</span>)'
																	+' is evaluates to <span class="ct-code-b-yellow">false</span> so check the'
																	+ ' second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>).'
																typing('#appendText', text, function() {
																	$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
																	$('.introjs-duplicate-nextbutton').click(function() {
																		$('.introjs-duplicate-nextbutton').remove();
																		$("#appendText").text("");
																		$("#posCheck").effect("highlight", {color: 'yellow'}, 500, function() {
																			rotationEffect("#posCheck", i, function() {
																				var secCon = (i < 0);
																				rotationEffect("#checkSecondCon", secCon, function() {
																					if (secCon) {
																						text = 'The second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>)'
																							+' is evaluates to <span class="ct-code-b-yellow">true</span> so control'
																							+'enters into the <span class="ct-code-b-yellow">if_block</span>.'
																						typing('#appendText', text, function() {
																							nextStep("#printfPos5", 'hide', "", "noSuchElementFound");
																							$('.introjs-nextbutton').show();
																						});
																					} else {
																						text = 'The second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>)'
																							+' is evaluates to <span class="ct-code-b-yellow">false</span> so control'
																							+'enters into the <span class="ct-code-b-yellow">else_block</span>.'
																						typing('#appendText', text, function() {
																							nextStep("#lastNextIsPrevNext", 'hide', "", "lastNodeIsPrevNext");
																							$('.introjs-nextbutton').show();
																						});
																					}
																				});
																			});
																		});
																	});
																});
															}
														});
													});
	                      						});
											});
										}});
									},800);
								});
							break;
							
						}
					});
					break;
					
				case "displayMain":
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "show" :
								$("#displayMain").removeClass("opacity00");
								var text = "<span id='displayLine' class='inline-sytle ct-code-b-yellow opacity00'>"
										+ "<span id='displayIf' class='inline-style'>"
										+ " first</span> == NULL</span><br><div id='ifText'></div>";
								typing('.introjs-tooltiptext', text, function() {
									var l1 = $("#displayIfMain").offset();
									$("#displayLine").offset({top: l1.top, left: l1.left});
									$("#displayLine").removeClass("opacity00");
									tl.to("#displayLine", 0.5, {top: 0, left: 0, onComplete: function() {
										$("#arrowDiv").addClass('z-index');
										$("#firstVal").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#arrowDiv").removeClass('z-index');
											rotationEffect("#displayIf", $("#firstVal").text(), function() {
												if ($("#firstVal").text() == "NULL") {
													nextStep("#displayIfTrue", 'hide');
													var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>."
															+ " Hence control enters"
															+ " into <span class='ct-code-b-yellow'>if-block</span>.";
												} else {
													nextStep("#displayIfElse", 'hide');
													var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>."
														+ " Hence control enters into the <span class='ct-code-b-yellow'>else-block</span>.";
												}
												typing('#ifText', text, function() {
													$('.introjs-nextbutton').show();
												});
											});
										});
									}});
								});
							break;
						}
					});
					break;
					
				case "displayIfTrue":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep("#consoleId", 'hide', '', 'displayTrue');
						timeOut();
					});
					break;
					
				case "displayIfElse":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#consoleId', 'hide', '', 'displayFalse');
						timeOut();
					});
					break;
					
				case "callTraverseList":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep("#traverseListSpan", 'show', 'right');
						$("#traverseParent").removeClass('hide').addClass('opacity00');
						timeOut();
					});
					break;
					
				case "traverseListSpan":
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#traverseParent").removeClass("opacity00");
						$("#traverseTemp").effect("highlight", {color: 'yellow'}, 500, function() {
							$("#arrowDiv").addClass("zindex");
							$("#nodeAddress").append('<div class="col-xs-1 col-xs-offset-1 padding0 opacity00'
										+' temp-nodes" id="tempNodeParent' + iVal
										+ '"><div class="col-xs-12 box padding0"><span id="tempNode' + iVal 
										+ '" class="ct-brown-color opacity00 inline-style">'
										+  $("#firstVal").text() + '</span></div>'
										+ ' <div class="text-center col-xs-12 padding0 ct-green-color">temp</div></div>');
							transferEffect("#traverseTemp", "#tempNodeParent" + iVal, function() {
								transferEffect("#firstVal", "#tempNode" + iVal, function() {
								$("#tempNodeParent" + iVal, "#tempNode" + iVal).removeClass("opacity00");
									nextStep("#traverseWhileCond", 'show', 'right');
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
					break;
					
				case "traverseWhileCond":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='traverseWhile' class='inline-style ct-code-b-yellow opacity00'><span id='traverseLine1'"
									+ " class='inline-style'>temp</span> != NULL</span><br><div id='whileText'></div>";
						typing('.introjs-tooltiptext', text, function() {
							var l1 = $("#traverseWhileLoop").offset();
							$("#traverseWhile").offset({top: l1.top, left: l1.left});
							$("#traverseWhile").removeClass("opacity00");
							tl.to("#traverseWhile", 0.5, {top: 0, left: 0, onComplete: function() {
								rotationEffect("#traverseLine1", $("#tempNode" + iVal).text(), function() {
									if ($("#tempNode" + iVal).text() != "NULL") {
										nextStep("#traverseWhileTrue", 'hide');
										var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>."
											+" Hence control enters into the loop.";
									} else {
										nextStep("#traverseWhileFalse", 'hide');
										var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>."
											+ " Hence control comes out of the loop.";
									}
									typing('#whileText', text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							}});
						});
					});
					break;
					
				case "traverseWhileTrue":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep("#consoleId", 'hide', '', 'printWhileTrue');
						timeOut();
					});
					break;
					
				case "traverseWhileFalse":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep("#consoleId", 'hide', '', 'printWhileFalse');
						$("#emptySpan").remove();
						$("#consoleOutput").append('<span id="nullSpan" class="opacity00">NULL</span>');
						timeOut();
					});
					break;
					
				case "traverseTempInc":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='traverseTempVal' class='inline-style ct-code-b-yellow opacity00'>temp ="
									+ " <span id='traverseTempLine' class=inline-style>temp->next</span></span>";
						typing('.introjs-tooltiptext', text, function() {
							var l1 = $("#traverseTempInc").offset();
							$("#traverseTempVal").offset({top: l1.top, left: l1.left});
							$("#traverseTempVal").removeClass("opacity00");
							tl.to("#traverseTempVal", 0.5, {left: 0, top: 0, onComplete: function() {
								$("#arrowDiv").addClass("zindex");
								transferEffect("#next" + rVal, "#tempNode" + iVal, function() {
									rotationEffect("#tempNode" + iVal, $("#next" + rVal).text(), function() {
										rotationEffect("#traverseTempLine", $("#next" + rVal).text(), function() {
											rVal++;
											$("#arrowDiv").removeClass("zindex");
											nextStep("#traverseWhileCond", 'show', 'right');
											$('.introjs-nextbutton').show();
										});
									});
								});
							}});
						});
					});
				break;
				
				case "searchElement":
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#searchElement").removeClass("opacity00");
						$('.introjs-nextbutton').removeClass("hide");
						nextStep("#printf1", 'hide', 'right', 'enterSearchEle');
						timeOut();
					});
				break;
				
				case "deleteAtEndElement" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtEndElement").removeClass("opacity00");
						nextStep("#delIfCon", 'hide', 'right', 'enterSearchEle');
						timeOut();
					});
				break;
				
				case "deleteAtBeginElement" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtBeginElement").removeClass("opacity00");
						nextStep("#delBegIfCon", 'hide');
						timeOut();
					});
				break;
				case "deleteAtPositionElement" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtPositionElement").removeClass("opacity00");
						nextStep("#delPosIfCon", 'hide');
						timeOut();
					});
				break;
				
				case "delIfCon" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtEndElement").removeClass("opacity00");
						nextStep("#arrowDiv", '', '', 'delIfCon');
						timeOut();
					});
				break;
				
				case "delBegIfCon" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtEndElement").removeClass("opacity00");
						nextStep("#arrowDiv", '', '', 'delBeginIfCon');
						timeOut();
					});
				break;
				
				case "delPosIfCon" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtEndElement").removeClass("opacity00");
						nextStep("#arrowDiv", '', '', 'delPosinIfCon');
						timeOut();
					});
				break;
				
				
				//case "printfdelAtEnd1" :
				case "printfdelAtEnd" + printfCount :
					var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
					switch(dynamicStep) {
						case "deleteNotPosible":
							nextStep('#consoleId', 'hide', 'left', 'printDeleteNotPossible');
							setTimeout(function() {
								introjs.nextStep();
							},1200);
						break;
						case "deleteAtEnd" :
							nextStep('#consoleId', 'hide', 'left', 'printDeletePossible');
							flag = "delEnd";
							introjs.refresh();
							setTimeout(function() {
								introjs.nextStep();
							},1200);
						break;
					}
				break;
				
				case "printfdelAtBeg" + printfCount :
					var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
					switch(dynamicStep) {
						case "deleteNotPosible":
							nextStep('#consoleId', 'hide', 'left', 'printDeleteNotPossible');
							setTimeout(function() {
								introjs.nextStep();
							},1200);
						break;
						case "deleteAtEnd" :
							flag = "delBegin";
							nextStep('#consoleId', 'hide', 'left', 'printDeletePossible');
							introjs.refresh();
							setTimeout(function() {
								introjs.nextStep();
							},1200);
						break;
					}
				break;
				
				case "printfPos" + printfCount :
					var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
					switch(dynamicStep) {
						case "deleteNotPosible":
							nextStep('#consoleId', 'hide', 'left', 'printDeleteNotPossible');
							setTimeout(function() {
								introjs.nextStep();
							},1200);
						break;
						case "enterDeletePosition" :
							nextStep('#consoleId', 'hide', 'left', 'printDelValue');
							setTimeout(function() {
								introjs.nextStep();
							},1000);
						break;
						case "deleteAtEnd" :
							flag = "delPosition";
							deleteEnd = (i - 1);
							nextStep('#consoleId', 'hide', 'left', 'printDeletePossible');
							introjs.refresh();
							setTimeout(function() {
								introjs.nextStep();
							},1200);
						break;
						case "noSuchElementFound" :
							flag = "delPosition";
							nextStep('#consoleId', 'hide', 'left', 'nosuchElement');
							introjs.refresh();
							setTimeout(function() {
								introjs.nextStep();
							},1200)
						break;
					}
				break;
				
				case "printf" + printfCount :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "enterSearchEle" :
								nextStep('#consoleId', 'hide', 'left', 'printScrhEleText');
								timeOut();
							break;
							case "printTrueVal" :
								nextStep('#consoleId', 'hide', 'left', 'printPosValue');
								timeOut();
							break;
						}
					});
				break;
				
				case "scanf"+ printfCount :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "readSearchVal" :
								nextStep('#consoleId', 'hide', 'left', 'entScrhEle');
								timeOut();
							break;
						}
					});
				break;
				

				case "scanfPos2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "readDelVal" :
								nextStep('#consoleId', 'hide', 'left', 'entrDelVal');
								timeOut();
							break;
						}
					});
				break;
				
				case "calSrhMethod" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "searchMethodCall" :
								var text = '<ul><li>Here, first call is made to the function '
									+ '<span class="ct-code-b-yellow">searchPosOfEle(first, x)</span>'
									+ 'then the <span class="ct-code-b-yellow">return</span> value'
									+ ' is stored into the <span class="ct-code-b-yellow">node</span> '
									+ 'type variable <span class="ct-code-b-yellow">pos</span>.</li></ul>'
								typing('.introjs-tooltiptext' , text, function() {
									$("#searchParent").removeClass("hide");
									nextStep('#searchLogic', 'hide', 'right', 'callToScrhMeth');
									$(".introjs-nextbutton").show();
								});
							break;
							case "returnVal" :
								nextStep('#ifConForSearch', '', 'right', 'ifConForSearch');
								timeOut();
							break;
						}
					});	
				break;
				
				case "searchLogic" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#firstEqlToCurr', 'hide', 'right', 'calScrhMethod');
						timeOut();
					});
				break;
				
				case "firstEqlToCurr" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass("hide");
						text ='The <span class="ct-code-b-yellow">first</span> value will be stored '
								+ 'in the variable <span class="ct-code-b-yellow">currentNode</span>.'
						typing('.introjs-tooltiptext', text, function() {
							nextStep('#arrowDiv', 'hide', 'left', 'copyFirstToCurrent');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "countToZero" :
					$('.introjs-helperLayer').one('transitionend', function() {
						text ='Here, we are declaring and initializing an integer variable <span class="ct-code-b-yellow">count</span> '
							+ 'to <span class="ct-code-b-yellow">0</span>.';
						typing('.introjs-tooltiptext', text, function() {
							nextStep('#checkIfCon', '', 'right', 'checkIfCon');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "checkIfCon" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifCondition' class='inline-style opacity00 ct-code-b-yellow'>"
							+ "<span id='currentNode' class='inline-style'>currentNode</span> == NULL </span><br><div id='condText'></div>";
						typing('.introjs-tooltiptext', text, function() {
							var l1 = $("#ifCon").offset();
							$("#ifCondition").offset({top:l1.top, left:l1.left});
							$("#ifCondition").removeClass("opacity00");
							tl.to("#ifCondition", 0.5, {top:0, left:0, onComplete: function() {
								rotationEffect("#currentNode", $("#firstVal").text(), function() {
									if ($("#firstVal").text() == "NULL") {
										nextStep('#returnCount', '', 'bottom', 'returnCount');
										var text = 'condition evaluates to <span class="ct-code-b-yellow">true</span>.';
									} else {
										nextStep('#checkWhileLoop', '', 'bottom', 'checkWhileLoop');
										var text = 'condition evaluates to <span class="ct-code-b-yellow">false</span>.';										
									}
									typing('#condText', text, function() {
										$('.introjs-nextbutton').show();
									}); 
								});
							}});
						});
					});
				break;
				
				case "returnCount" :
					$('.introjs-helperLayer').one('transitionend', function() {
						text = 'Here, the <span class="ct-code-b-yellow">count</span> value '
								+ '(i.e. <span class="ct-code-b-yellow">'+ count + ')</span>'
								+ ' will be <span class="ct-code-b-yellow">return</span>.';
						typing('.introjs-tooltiptext', text, function() {
							nextStep('#calSrhMethod', 'hide', 'bottom', 'returnVal');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "ifConForSearch" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifPosCon' class='inline-style opacity00 ct-code-b-yellow'>"
							+ "<span id='posVal' class='inline-style'>pos</span> == 0 </span><br><div id='condText'></div>";
						typing('.introjs-tooltiptext', text, function() {
							var l1 = $("#IfPos").offset();
							$("#ifPosCon").offset({top:l1.top, left:l1.left});
							$("#ifPosCon").removeClass("opacity00");
							tl.to("#ifPosCon", 0.5, {top:0, left:0, onComplete: function() {
								rotationEffect("#posVal", count, function() {
									if (count == 0) {
										printfCount++;
										var text = 'condition evaluates to <span class="ct-code-b-yellow">true</span>.';
									} else {
										printfCount = 3;
										var text = 'condition evaluates to <span class="ct-code-b-yellow">false</span>.';										
									}
									nextStep('#printf' +printfCount , 'hide', 'bottom', 'printTrueVal');
									typing('#condText', text, function() {
										$('.introjs-nextbutton').show();
									}); 
								});
							}});
						});
					});
				break;
				
				case "checkWhileLoop" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').addClass("hide");
						nextStep('#arrowDiv', 'hide', 'bottom', 'whileLoopExpl');
						timeOut();
					});
				break;
				
				case "returnCountPlsOne" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass("hide");
						text = 'Here, the <span class="ct-code-b-yellow">count</span> value '
								+ '(i.e. <span class="ct-code-b-yellow">'+ count + ')</span>'
								+ ' will be increment by <span class="ct-code-b-yellow">one</span>'
								+ ' then <span class="ct-code-b-yellow">return</span>'
								+ ' the incremented <span class="ct-code-b-yellow">count</span> value '
								+ '(i.e. <span class="ct-code-b-yellow">'+ (count + 1) +'</span>).';
						typing('.introjs-tooltiptext', text, function() {
							++count;
							nextStep('#calSrhMethod', 'hide', 'bottom', 'returnVal');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "checkCurrNext" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', 'bottom', 'currNextNull');
						timeOut();
					});
				break;
				
				case "returnZero" :
					$('.introjs-helperLayer').one('transitionend', function() {
						count = 0;
						nextStep('#calSrhMethod', 'hide', 'bottom', 'returnVal');
						timeOut();
					});
				break;
				
				case "countInc" :
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep('#currEqlCurrPlus', 'hide', '', 'currEqlCurrPlus');
					$('.introjs-tooltip').removeClass("hide");
					var text = 'Now the <span class="ct-code-b-yellow">count</span> value is'
							+ '<span class="ct-code-b-yellow">'+ count+'</span> that will be '
							+ 'increment by <span class="ct-code-b-yellow">one</span> (now count value is '
							+ ' <span class="ct-code-b-yellow">'+ (count + 1)+'</span>)';
					typing('.introjs-tooltiptext', text, function() {
						count++;
						$('.introjs-nextbutton').show();
						
					});
				});
				break;
				
				case "currEqlCurrPlus" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', '', '', 'currNextIsCurr');
						timeOut();
					});
				break;
			
				case "callDelAtEndMethod" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtEndParent").removeClass("hide");
						nextStep('#deleteAtEndLogic', 'hide', 'right', 'callTodeleteAtEndMethod');
						timeOut();
					});
				break;
				
				case "callDelAtBeginMethod" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtBeginParent").removeClass("hide"); 
						nextStep('#deleteAtBeginLogic', 'hide', 'right', 'callTodeleteAtBeginMethod');
						timeOut();
					});
				break;
				
				case "callToPosDeleteFunction" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#deleteAtPositionParent").removeClass("hide"); 
						nextStep('#deleteAtPositionLogic', 'hide', 'right', 'callTodeleteAtPosMethod');
						timeOut();
					});
				break;
				
				case "deleteAtEndLogic" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#assignFirstToLastNode', 'hide');
						timeOut();
					});
				break;
				
				case "deleteAtBeginLogic" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#firstToTemp', 'hide');
						timeOut();
					});
				break;
				
				case "deleteAtPositionLogic" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#previousAndLastNode', 'hide');
						timeOut();
					});
				break;
				
				case "assignFirstToLastNode" :
					$("#nodeName").text("lastNode");
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', '', '', 'firstValStoredInLargest');
						timeOut();
					});
				break;
				
				case "firstToTemp" :
					$("#nodeName").text("lastNode");
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', '', '', 'firstToTemp');
						timeOut();
					});
				break;
				
				case "previousAndLastNode" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', '', '', 'prevAndLastNode');
						timeOut();
					});
				break;
				
				case "checkLastNodeNull":
					$("#nodeName").text("lastNode");
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', '', '', 'checkLastNodeIsNull');
						timeOut();
					});
				break;
				case "firstEQlTofirstNext" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', '', '', 'firstEQlTofirstNext');
						timeOut();
					});
				break;
				case"freeLastNode":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'freeLastNode');
						timeOut();
					});
				break;
				case"freeNode":
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'freeFirstNode');
						timeOut();
					});
				break;
				case "freeLstNode" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'freePosNode');
						timeOut();
					});
				break;
				
				case "returnFirstNode" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#buttonsDiv', "", "left");
						timeOut();
					});
				break;
				case "returnFirstVal" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#buttonsDiv', "", "left");
						timeOut();
					});
				break;
				case "retnFst2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#buttonsDiv', "", "left");
						timeOut();
					});
				break;
				
				case "checkLastNodeNotEqlToNull" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'whileLastNotEqualToNull');
						timeOut();
					});
				break;
				case "lastEqlPrev" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'lastNodeStoreInPre');
						timeOut();
					});
				break;
				case "lastNextEqlLast" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'lastNextEqlLastNode');
						timeOut();
					});
				break;
				case "preNextToNull" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'preNextToEqlNull');
						timeOut();
					});
				break;
				case "firstNextToFirst" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'firstNextToFirst');
						timeOut();
					});
				break;
				case "iValInit" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = 'Here, we are declaring an integer variable <span class="ct-code-b-yellow">i</span>.';
						typing('.introjs-tooltiptext', text, function() {
							nextStep('#ifPosEqlToOne', 'show');
							$('.introjs-nextbutton').show();
							
						});
					});
				break;
				case "ifPosEqlToOne" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifPosCon' class='inline-style opacity00 ct-code-b-yellow'>"
							+ "<span id='posVal' class='inline-style'>pos</span> == 1 </span><br><div id='condText'></div>";
						typing('.introjs-tooltiptext', text, function() {
							var l1 = $("#ifPosEqlToOne").offset();
							$("#ifPosCon").offset({top:l1.top, left:l1.left});
							$("#ifPosCon").removeClass("opacity00");
							tl.to("#ifPosCon", 0.5, {top:0, left:0, onComplete: function() {
								posVal = $("#delVal").val();	
								rotationEffect("#posVal", posVal, function() {
									if (posVal == 1) {
										printfCount = 4;
										nextStep('#fstnxtToFst', 'hide');
										var text = 'condition evaluates to <span class="ct-code-b-yellow">true</span>'
											+' so control enters into the if-bolock.';
									} else {
										printfCount = 3;
										nextStep('#forLoop', 'hide', "", "initialize");
										var text = 'condition evaluates to <span class="ct-code-b-yellow">false</span>.'
											+' So control enters into the else-block';										
									}
									typing('#condText', text, function() {
										$('.introjs-nextbutton').show();
									}); 
								});
							}});
						});
					});
				break;
				
				case "fstnxtToFst" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'show', '', 'deleteAtPosition');
						timeOut();
					});
				break;
				
				case "forLoop" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "initialize" :
								forLoopCondition("initialize");
							break;
							case "iIncrement" :
								forLoopCondition("iIncrement");
							break;
						}
					});
				break;
				
				case "ifLastNodeEqToNull":
					console.log("ChechLastNodeNullOrNot");
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'ChechLastNodeNullOrNot');
						timeOut();
					});
				break;
				case "lastNodeIsPrevNode" : 
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'lastNextPrevNext');
						timeOut();
					});
				break;
				case "lastNextIsLast" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'lastNodeIsLast');
						timeOut();
					});
				break;
				case "lastNextIsPrevNext" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'lastNodeIsPrevNext');
						timeOut();
					});
				break;
				case "lastNullAndPosZero" :
					$('.introjs-helperLayer').one('transitionend', function() {
						nextStep('#arrowDiv', 'hide', '', 'lastNullAndPosToZero');
						timeOut();
					});
				break;
		}
	});
	introjs.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
}

	
function forLoopCondition(selector) {
	$('.introjs-tooltip').removeClass('hide');
	if (selector == "initialize") {
		var text = 'The <span class="ct-code-b-yellow">i</span> value will be initialize to'
			+' <span class="ct-code-b-yellow">1</span><br/><div id="appendDiv"></div>'
			+'<div id="appendButton"></div>';
	} else {
		var text = 'The <span class="ct-code-b-yellow">i</span> value will be incremented by one'
			+' Now the <span class="ct-code-b-yellow">i</span> value is '
			+' <span class="ct-code-b-yellow">'+ (++i) + '</span><br/><div id="appendDiv"></div>'
			+'<div id="appendButton"></div> ';
	}
	typing(".introjs-tooltiptext", text, function() {
		$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
		$('.introjs-duplicate-nextbutton').click(function() {
			$('.introjs-duplicate-nextbutton').remove();
			var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
				+ '<span id="ifConditionChek" class="position"><span id="iValue" class="position">'
				+ 'i</span> &lt; <span id="aDelVal" class="position">pos</span></span>'
				+ '</span><br/><div id="appendText"></div>';
			typing('.introjs-tooltiptext', text, function() {
					var l1 = $("#forLoop").offset();
					$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
					$("#IfCurNextCon").removeClass("opacity00");
					tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
						$("#nextDiv" + (count + 1)).effect("highlight", {color: 'blue'}, 500, function() {
							setTimeout(function() {
								var delVal = $("#delVal").val(); 
								rotationEffect("#aDelVal", delVal, function() {
									rotationEffect("#iValue", i, function() {
										if (i < delVal) {
											nextStep('#ifLastNodeEqToNull', 'hide');
											var text = 'The condition evaluated to <span class="ct-code-b-yellow">true</span>'
												+' so control enters into the <span class="ct-code-b-yellow">if-block</span>.';
											
										} else {
											lastNullAndPosZero
											nextStep("#lastNullAndPosZero", "hide");
											var text = 'The condition evaluated to <span class="ct-code-b-yellow">false</span>'
												+' so control enters into the <span class="ct-code-b-yellow">else-block</span>.';
										}
										typing("#appendText", text, function() {
											
											$('.introjs-nextbutton').show();
										});
									});
								})
						},500);
					});
				}});
			});
		});
	});
}
	
function preNextToEqualToNull() {
	console.log("NULL....")
	var l1 = $("#lastNextEqlLast").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + (deleteEnd - 1), "#svgId", "line" + tmpLine, 
						"arrow", function() {
					$("#line" + tmpLine).remove();
					$("#nextDiv" + (deleteEnd - 1)).effect("highlight", {color: 'yellow'}, 500, function() {
						$("#next" + (deleteEnd - 1)).text("NULL");
						$("#lines" + prevPosLine +", #lines" + lastNodeLine + ", #lines" + deleteEnd).remove();
						printfCount = 2;
						nextStep("#printfdelAtEnd2", 'hide', '' ,'deleteAtEnd');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	}});
}

function lastNextEqlLastNode() {
	var l1 = $("#lastNextEqlLast").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + deleteEnd, "#svgId", "lines" + extraLine, 
					"arrow", function() {
	             	$("#lines" + lastNodeLine).remove();
					$("#nextDiv" + deleteEnd).parent().effect("highlight", {color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + deleteEnd).text(), function() {
              				fadeInFromEffectWithTimelineMax('#nextDiv' + deleteEnd, '#lastNodeMemoryVal', function() {
                				$("#lines" + extraLine).fadeOut().remove();
                				deleteEnd++;
                				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + deleteEnd, "#svgId", "lines" + lastNodeLine,
					            	"arrow", function() {
                					console.log("Haii...");
                					nextStep("#checkLastNodeNotEqlToNull", 'hide');
									$('.introjs-nextbutton').show();
                     			});
				              });
            				});
            			});
					}); 
				});
			});
		}});
	
	
	/* var l1 = $("#lastNextEqlLast").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				$("#line" + (tmpLine + 1)).remove();
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "line" + tmpLine, 
						"arrow", function() {
					$("#nextDiv" + count).parent().effect("highlight", {color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + count).text(), function() {
							$("#nextDiv" + count).parent().effect("highlight", {color: 'blue'}, 500, function() {			
								fadeInFromEffectWithTimelineMax('#nextDiv' + count, '#lastNodeMemoryVal', function() {
									$("#lines"+ tmpLine).fadeOut();$("#lines"+ tmpLine).remove();
									count++;
									svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "line" + (tmpLine + 1),
					                        "arrow", function() {    
										nextStep("#checkLastNodeNotEqlToNull", 'hide');
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
				}); 
			});
		});
	}}); */
}

function lastNodeStoredINPrev() {
	var l1 = $("#checkLastNodeNotEqlToNull").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				rotationEffect("#curNodeNext", $("#lastNodeMemoryVal").text(), function() {
					$("#tempNode0").text("").css("opacity", "1");
					fadeInFromEffectWithTimelineMax('#lastNodeMemoryVal', '#tempNode0', function() {
						if (arrowFlag == false) {
							arrowFlag == true;
							$("#lines" + prevPosLine).remove();
							svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + deleteEnd, "#svgId", "lines" + prevPosLine, 
									"arrow", function() {
								nextStep('#lastNextEqlLast', 'hide');
								$('.introjs-nextbutton').show();
							});	
						} else {
							$("#lines" + prevPosLine).remove();
							svgAnimatingLineRightToLeft("#arrowDiv", "#tempNodeParent0", "#dataDiv" + deleteEnd, "#svgId", "lines" + extraLine, 
									"arrow", function() {
								nextStep('#lastNextEqlLast', 'hide');
								$('.introjs-nextbutton').show();
			            	})
						}
					});
				});
			});
		});
	}});	 			
}

function WhileLastNodeNotEqualToNull() {
	var l1 = $("#checkLastNodeNotEqlToNull").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + deleteEnd, "#svgId", "lines" + lineCount, 
		             "arrow", function() {
		 			$("#lines" + lineCount).remove();
		 			$("#nextDiv" + deleteEnd).effect("highlight", {color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + deleteEnd).text(), function() {
							var con = ($("#nextDiv" + deleteEnd).text()).trim() != "NULL"
							rotationEffect("#ifConditionChek", con, function() {
								if (con) {
									text = 'Condition evaluates to <span class="ct-code-b-yellow">true</span>'
										+ ' so control enters into the <span class="ct-code-b-yellow">while-block</span>.';
									nextStep("#lastEqlPrev", 'hide');
								} else {
									nextStep("#preNextToNull", 'hide');
									text = 'Condition evaluates to <span class="ct-code-b-yellow">false</span>.'
								}
								typing('#appendText', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
		 			});
				});
			});
		});
	}});
}


function firstEqualToFirstNext(selector) {
	if (selector == "firstNextToFirst") {
		var l1 = $("#firstNextToFirst").offset();
	} else  if (selector == "firstEQlTofirstNext") {
		var l1 = $("#firstEQlTofirstNext").offset();
	} else {
		var l1 = $("#fstnxtToFst").offset();
	}
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#firstDiv").effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + count, "#svgId", "lines" + lineCount, 
		             "arrow", function() {
		 			$("#lines" + lineCount).remove()
		        $("#nextDiv" + count).effect("highlight", {color: 'blue'}, 500, function() {
		        	$("#nextDiv" + count).addClass("blinking-blue");
					rotationEffect("#curNodeNext", $("#nextDiv" + count).text(), function() {
		        		text = 'First next value (<span class="ct-code-b-yellow">'
		        				+ $("#nextDiv" + count).text() + '</span>) is stored in '
		        				+ '<span class="ct-code-b-yellow">first</span>. ';
		        		typing('#appendText', text, function() {
		        			$('.introjs-tooltiptext').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		    				$('.introjs-duplicate-nextbutton').click(function() {
		    					$('.introjs-duplicate-nextbutton').remove();
		    					$("#nextDiv" + count).removeClass("blinking-blue");
		    					if (selector == "firstEQlTofirstNext") {
		    						printfCount = 2;
		    						console.log("DeleteAtEnd")
			    					nextStep("#printfdelAtEnd2", 'hide', '' ,'deleteAtEnd');
		    					} else if (selector == "firstNextToFirst") {
		    						console.log("DeleteAtBegin")
		    						nextStep("#printfdelAtBeg2", 'hide', '' ,'deleteAtEnd');
		    					} else {
		    						console.log("DeleteAtPostin");
		    						nextStep("#printfPos4", 'hide', '' ,'deleteAtEnd');
		    					}
		    					fadeInFromEffectWithTimelineMax('#nextDiv' + count, '#firstVal', function() {
		    						  $("#lines" + count + ", #lines" + (count + 1) + ", lines" + lastNodeLine).fadeOut();
		    						  $('.introjs-nextbutton').show();
		    					});
		    				});
		        		});
		        	});
		        });
		     });
		  });
		});
	}});
}

function checkIfLastNodeIsNull() {
	var l1 = $("#checkLastNodeNull").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		rotationEffect("#curNodeNext", $("#nextDiv" + count).text(), function() {
			var con = ($("#nextDiv" + count).text()).trim() == "NULL"
			rotationEffect("#ifConditionChek", con, function() {
				if (con) {
					text = 'Condition evaluates to <span class="ct-code-b-yellow">true</span>'
						+ ' so control enters into the <span class="ct-code-b-yellow">if-block</span>.';
					nextStep("#firstEQlTofirstNext", 'hide');
				} else {
					nextStep("#checkLastNodeNotEqlToNull", 'hide');
					text = 'Condition evaluates to <span class="ct-code-b-yellow">false</span>'
						+ ' so control enters into the <span class="ct-code-b-yellow">else-block</span>.';
				}
				typing('#appendText', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	}});
}

function firstStoredInTemp() {
	$("#lastNodeMemoryVal").addClass("opacity00");
	transferEffect("#firstToTemp", "#lastNodeMemory", function() {
		var l1 = $("#firstToTemp").offset();
		$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
		$("#IfCurNextCon").removeClass("opacity00");
		tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
			$("#firstDiv").effect("highlight", {color: 'blue'}, 500, function() {
				rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
					$("#lastNodeMemoryVal").text("").removeClass("opacity00");
					fadeInFromEffectWithTimelineMax('#firstVal','#lastNodeMemoryVal', function() {
						printfCount = 2;
						nextStep("#firstNextToFirst", 'hide');
						$('.introjs-nextbutton').show();
					});
				});
			});
		}});
	});
}

function prevsAndLastNode() {
	$("#lastNodeMemoryVal").addClass("opacity00");
	transferEffect("#previousAndLastNode", "#lastNodeMemory", function() {
		$("#tempNodeParent0").removeClass("opacity00 hide");
		$("#tempNode0").addClass("opacity00");
		var l1 = $("#previousAndLastNode").offset();
		$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
		$("#IfCurNextCon").removeClass("opacity00");
		tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
			$("#firstDiv").effect("highlight", {color: 'blue'}, 500, function() {
				$("#lastNodeMemoryVal").text("").removeClass("opacity00");
				fadeInFromEffectWithTimelineMax('#firstVal','#lastNodeMemoryVal', function() {
					$("#tempNode0").removeClass("opacity00");
					fadeInFromEffectWithTimelineMax('#firstVal','#tempNode0', function() {
						printfCount = 2;
						svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "lines" + prevPosLine, 
							"arrow", function() {
							svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + count, "#svgId", "lines" + lastNodeLine, 
									"arrow", function() {
								nextStep("#iValInit", 'show');
								$('.introjs-nextbutton').show();
							 });		
						});
					});
				});
			});
		}});
	});
}


function firstStoredInLastNode() {
	$("#lastNodeMemoryVal").addClass("opacity00");
	transferEffect("#assignFirstToLastNode", "#lastNodeMemory", function() {
		$("tempNode0").addClass("opacity00");
		$("#temp").text("prev");
		$("#tempNode0").css("opacity", "0");
		$("#tempNodeParent0").removeClass("hide");
		transferEffect("#assignFirstToLastNode", "#tempNodeParent0", function() {
			var l1 = $("#assignFirstToLastNode").offset();
			$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
			$("#IfCurNextCon").removeClass("opacity00");
			tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
				$('#curNodeNext').effect( "highlight",{color: 'yellow'}, 500, function() {
					$('#firstVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
							$("#lastNodeMemoryVal").removeClass("opacity00")
							fromEffectWithTweenMax("#lastNodeMemoryVal", "#firstVal", $("#firstVal").text(), function() {
								 nextStep("#checkLastNodeNull", 'hide');
								 svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "lines" + lastNodeLine, 
											"arrow", function() {
									 $('.introjs-nextbutton').show();
					            });
							});
						});
					});
				});
			}});
		});
	});
}

function deleteAtEndInMainMethod(selector) {
	var l1 = $("#"+ selector).offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$('#curNodeNext').effect( "highlight",{color: 'yellow'}, 500, function() {
			$('#firstVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
					var delAtEndCon = ($("#firstVal").text()).trim() == "NULL";
					rotationEffect("#ifConditionChek", delAtEndCon, function() {
						if (delAtEndCon) {
							printfCount = 1;
							if (selector == "delBegIfCon") {
								nextStep("#printfdelAtBeg1", 'hide','', 'deleteNotPosible');
							} else if(selector == "delPosIfCon") {
								nextStep("#printfPos1", 'hide','', 'deleteNotPosible');
							} else {
								nextStep("#printfdelAtEnd1", 'hide','', 'deleteNotPosible');
							}
							text = "The condition evaluates to <span class='ct-code-b-yellow'>true</span>"
								+ " so control enters into the <span class='ct-code-b-yellow'>if block</span>";
						} else {
							printfCount = 2;
							if (selector == "delBegIfCon") {
								nextStep("#callDelAtBeginMethod", 'hide','', 'callDelAtBeginMethod');
							} else if(selector == "delPosIfCon") {
								nextStep("#printfPos2", 'hide','', 'enterDeletePosition');
							} else {
								nextStep("#callDelAtEndMethod", 'hide','', 'callDelAtEndMethod');
							}
							text = "The condition evaluates to <span class='ct-code-b-yellow'>false</span>"
								+ " so control enters into the <span class='ct-code-b-yellow'>else block</span>";
						} 
						typing("#appendText", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	}});
}

function currentNotIsEqualToCurrent() {
	var l1 = $("#checkWhile").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$('#curNodeNext').effect( "highlight",{color: 'yellow'}, 500, function() {
			$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + (count - 1), "#svgId", "lines" + tmpLine, 
						"arrow", function() {
					$("#lines" + tmpLine).remove();
					$('#nextDiv' + (count - 1)).effect( "highlight",{color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + (count - 1)).text(), function() {
							text = "Now the current node is <span class='ct-code-b-yellow'>"
									+ $("#nextDiv" + (count - 1)).text() + "</span> "
									+ "<br/><span id='repeatWhile'></span>";
							typing("#appendText", text, function() {
								$(".introjs-tooltiptext").append("<br><a class='introjs-button introjs-duplicate-nextbutton'" 
									+ "onclick = currNodeEqlToCurrNaxtNode()>Next &#8594;</a>");
							});
						});
					});
				});
			});
		});
	}});
}


function checkIfCurrNaxtNull() {
	var l1 = $("#checkWhile").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$('#curNodeNext').effect( "highlight",{color: 'green'}, 500, function() {
			$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "lines" + tmpLine, 
					"arrow", function() {
					$("#lines" + tmpLine).remove();
					$('#nextDiv' + (count)).effect( "highlight",{color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + count).text(), function() {
							var nulCon = ($("#nextDiv" + count).text()).trim() == "NULL";
							rotationEffect("#ifConditionChek", nulCon, function() {
								if (nulCon) {
									nextStep("#returnZero", 'hide');
									var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>."
										+ " Hence control enters into <span class='ct-code-b-yellow'>if-block</span>.";
									
								} else {
									nextStep("#countInc", 'hide');
									var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>."
										+ " Hence control enters into the <span class='ct-code-b-yellow'>else-block</span>.";
								}
								typing('#appendText', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		});
	}});
}


function currNodeEqlToCurrNaxtNode() {
	$('.introjs-duplicate-nextbutton').remove();
	fadeInFromEffectWithTimelineMax('#nextDiv' + (count - 1), '#lastNodeMemoryVal', function() {
		$("#lines"+ lineCount).remove();
		++lineCount;
		$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
			svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "lines" + lineCount, 
			"arrow", function() {
				text ='Again checks the <span class="ct-code-b-yellow">while</span> condition.';
				typing("#repeatWhile", text, function() {
					nextStep('#checkWhileLoop', 'hide');
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}


function fadeInFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass('z-index1000000');
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#programDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 0, onComplete: function() {
			$("#animationDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}


function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": '5',
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function changeIds() {
	//$("#dynamicNodes > div").removeAttr("id");
	$.each($("#dynamicNodes > div"), function(idx) {
	    //$(this).attr("id", "node" + idx);
	    $("#node" + (idx + 1)).removeAttr("id").attr("id", "node" + idx);
	    $("#nodedata" + (idx + 1)).removeAttr("id").attr("id", "nodedata" + idx);
	    $("#dataDiv" + (idx + 1)).removeAttr("id").attr("id", "dataDiv" + idx);
	    $("#data" + (idx + 1)).removeAttr("id").attr("id", "data" + idx);
	    $("#nextDiv" + (idx + 1)).removeAttr("id").attr("id", "nextDiv" + idx);
	    $("#next" + (idx + 1)).removeAttr("id").attr("id", "next" + idx);
	    $("#dataAddress" + (idx + 1)).removeAttr("id").attr("id", "dataAddress" + idx);
	    $("#lines" + (idx + 2)).removeAttr("id").attr("id", "lines" + (idx + 1));
	});
}

function changePosIds() {
	var len = $(".nodes").length
	for (var idx = posVal; idx <= len; idx++ ) {
	      $("#node" + (idx)).removeAttr("id").attr("id", "node" + (idx - 1));
		    $("#nodedata" + (idx)).removeAttr("id").attr("id", "nodedata" + (idx - 1));
		    $("#dataDiv" + (idx)).removeAttr("id").attr("id", "dataDiv" + (idx - 1));
		    $("#data" + (idx)).removeAttr("id").attr("id", "data" + (idx - 1));
		    $("#nextDiv" + (idx)).removeAttr("id").attr("id", "nextDiv" + (idx - 1));
		    $("#next" + (idx)).removeAttr("id").attr("id", "next" + (idx - 1));
		    $("#dataAddress" + (idx)).removeAttr("id").attr("id", "dataAddress" + (idx - 1));
		    $("#lines" + (idx)).removeAttr("id").attr("id", "lines" + (idx - 1));
	}
}


function timeOut() {
	setTimeout(function() {
		introjs.nextStep();
	}, 500);
}

function getStep(element, intro, tooltipClass, position, dynamicStep) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof dynamicStep != 'undefined') {
		step['dynamicStep'] = dynamicStep;
	}
	return step;
}

function nextStep(id, tooltip, val, dynamicStep) {
	var newStep = getStep(id, '', tooltip, val, dynamicStep);
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function toEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	$(selector2).offset({top: l1.top, left: l1.left});
	$(selector1).addClass("opacity00")
	TweenMax.to($(selector2), 0.3, {opacity: 1, top: 0, left: 0, onComplete: function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function events(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).val().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)) {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		if ($(this).val().length > 0 && (!$(this).val().startsWith('-'))) {
			$('.introjs-nextbutton').show();
		} else if ($(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1) {
			$('.introjs-nextbutton').show();
		} else if (!$(this).val().startsWith('-')) {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter number.</div>')
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}

function rotationEffect(selector, val, callBackFunction) {
	tl.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		tl.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	tl.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function nodeFromEffectWithTweenMax(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	tl.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		//$(id1).text("" + val + "");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('zindex').effect( "highlight",{color: 'yellow'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			$(selector1).removeClass('zindex');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	tl.to($('#' + svgLineId).show(), 0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 6;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	tl.to($('#' + svgLineId).show(), 0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function addNodeClick() {
	$("#nodeName").text("lastNode");
	$("#temp").text("temp");
	$('#addNodesBtn').click(function() {
		$("#addElementOutputPrint").empty()
		nextStep("#buttonsDiv", 'hide', 'left');
		$("#addNodesBtn").addClass("addnodes-clicked");
		$("#whileCondParent, #addMain").removeClass("hide");
		$("#addMain").addClass("opacity00");
		addNodeDynamicSteps();
		if ($("#addNodesBtn").hasClass("addnodes-clicked")) {
			$('.nodes, .temp-nodes, .lines').remove();
			$("#lastNodeMemoryVal").text('');
			$("#firstVal").text('NULL');
			$("#lastNodeMemory").addClass("opacity00");
			iVal = lineVal = rVal = 0;
		}
		introjs.nextStep();
	});
}

function traverseClick() {
	$("#temp").text("temp");
	$("#traverseListBtn").click(function() {
		$("#addElementOutputPrint").empty()
		$("#whileCondParent, #displayMain").removeClass('hide');
		$("#displayMain").addClass("opacity00");
		nextStep("#displayMain", 'show', 'right');
		rVal = 0;
		introjs.nextStep();
	});
}

function searchButtonClick() {
	$("#temp").text("temp");
	$("#searchNodesBtn").click(function() {
		$("#addElementOutputPrint").empty()
		$("#addMain").addClass("hide");
		$("#whileCondParent, #searchElement").removeClass('hide');
		$("#searchElement").addClass("opacity00");
		nextStep("#searchElement", 'hide');
		introjs.nextStep();
	});
}

function deleteAtEndButtonClick() {
	$("#temp").text("prev");
	$("#deleteAtEndBtn").click(function() {
		$("#addElementOutputPrint").empty();
		$("#whileCondParent, #deleteAtEndElement").removeClass('hide');
		nextStep("#deleteAtEndElement", 'hide');
		introjs.nextStep();
	});
}

function deleteAtBeginButtonClick() {
	$("#deleteAtBeginBtn").click(function() {
		$("#addElementOutputPrint").empty();
		$("#whileCondParent, #deleteAtBeginElement").removeClass('hide');
		nextStep("#deleteAtBeginElement", 'hide');
		introjs.nextStep();
	});
}

function deleteAtPositionButtonClick() {
	$("#deleteAtPositionBtn").click(function() {
		$("#addElementOutputPrint").empty();
		$("#whileCondParent, #deleteAtPositionElement").removeClass('hide');
		nextStep("#deleteAtPositionElement", 'hide');
		introjs.nextStep();
	});
}

function addNodeDynamicSteps() {
	nextStep("#addMain", 'hide');
}

function createNodeMethod() {
	$('.introjs-tooltip').css({'min-width': '200px'});
	$('.user-btn').remove();
	$("#createCall").removeAttr("style");
	nextStep('#nodeCreation' ,'show', 'right');
	introjs.nextStep();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function whileConditionChecking(rVal) {
	$('.introjs-tooltiptext').append('<div id="conditionText"></div>');
	if ($("#next" + rVal).text() != "NULL" && rVal < iVal) {
		nextStep("#lastNodeVal");
		var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>. Hence control enters into the loop.";
	} else {
		nextStep("#lastNodeTemp", 'hide');
		var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>. Hence control comes out of the loop.";
	}
	typing('#conditionText', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function lastNodeVal(rVal) {
	$('.user-btn').remove();
	inrtojs.nextStep();
}

function searchFunction() {
	var l1 = $("#checkWhile").offset();
	$("#whileCon").offset({top:l1.top, left:l1.left});
	$("#whileCon").removeClass("opacity00");
	tl.to("#whileCon", 0.5, {top:0, left:0, onComplete: function() {
		var firstCon = $("#firstVal").text() != "NULL";
		var secCon = $("#data" + count ).text() != $("#searchVal").val();
		if (firstCon) {
			$('#curNode1').effect( "highlight",{color: 'green'}, 500, function() {
				$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
					rotationEffect("#curNode1", $("#lastNodeMemoryVal").text(), function() {
						rotationEffect("#firstCon", firstCon, function() {
							$('#curNodeData').effect( "highlight",{color: 'green'}, 500, function() {
								$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
									svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + count, "#svgId", "lines" + tmpLine, 
									"arrow", function() {
										$("#lines" + tmpLine).remove();
										$('#dataDiv' + (count)).effect( "highlight",{color: 'blue'}, 500, function() {
											rotationEffect("#curNodeData", $("#data" + count ).text(), function() {
												rotationEffect("#keyVal", $("#searchVal").val(), function() {
													rotationEffect("#secondCon",secCon, function() {
														if (secCon) {
																nextStep('#checkCurrNext', 'hide');
																var text = "condition evaluates to <span class='ct-code-b-yellow'>true</span>."
																	+ " So control enters into the <span class='ct-code-b-yellow'>while</span> loop body. ";
																typing("#appendText", text, function() {
																	$('.introjs-nextbutton').show();
																});
														} else {
															nextStep('#returnCountPlsOne', 'hide', 'bottom', 'returnCountPlsOne');
															var text = "condition evaluates to <span class='ct-code-b-yellow'>false</span>.";
															typing("#appendText", text, function() {
																$('.introjs-nextbutton').show();
															});
														}
													});
												});
											});
										});
									});
								});
							});
						});
					});		
				});
			});
		} else {
			$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				rotationEffect("#curNode1", $("#firstVal").text(), function() {
					rotationEffect("#firstCon", firstCon, function() {
						nextStep('#returnCountPlsOne', 'hide', 'bottom', 'returnCountPlsOne');
						var text = "condition evaluates to <span class='ct-code-b-yellow'>false</span>."
								+ "So the total condition will evaluates <span class='ct-code-b-yellow'>false</span>"
								+ ' there is no need to check <span class="ct-code-b-yellow">currentNode -> data'
								+ " != key condition</span>.";
						typing("#appendText", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		} 
	}}); 
}


function deleteAtFirstNode(count, nodeId, callBackFunction) {
	if (count <= $("line").length) {
		var x1 = (parseFloat($("line").eq(count).attr("x1")) - 120);
		var x2 = (parseFloat($("line").eq(count).attr("x2")) - 120);
		TweenMax.to($("line").eq(count), 1, {attr : {"x1" : x1, "x2" : x2 }});
		TweenMax.to($("#dynamicNodes .nodes").not(nodeId).eq(count), 1, {left : "-120px", onComplete: function() {
			$.each($("#dynamicNodes .nodes").not(nodeId), function() {
				$(this).css("left", "0");
			});
			$(nodeId).remove();
		}});
		count++;
		deleteAtFirstNode(count, nodeId, callBackFunction);
	} else {
		
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

</script>
</body>
</html>