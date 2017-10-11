var introcode;
var typingSpeed = 10;
var buttonNames = ["Add Nodes", "Count", "Insert At Begin", "Insert At End", "Inser At position",
                   "Traverse List", "Search", "Delete At Begin", "Delete At End", "Delete At Position"];
var arr = ["l1", "l2", "l3", "x", "t3"];
var buttonName, lastnodeCount = printfCount = outPutCount = nodeCount = lineCount = searchCount = preCount = i = 1, iVal = count = 0;
var flag = false;

function documentCallFunctin() {
	preStructTypeList();
	appendButtons();
	svgAppend("#animatinDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

//dynamically append list node
function createDynamicNodes(nodeCount) {
	console.log("Hai");
	var randomAddress = getRandomInt(1000, 5000);
	$("#dynamicNodes").append('<div class="opacity00 col-xs-2 nodes node list-nodes" id="node' + nodeCount 
					+ '" style="top: 0px; width: auto;">'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color ct-fonts padding00 text-center">'
					+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
					+ ' <div class ="data-nodes" id="nodedata' + nodeCount + '"><div id="dataDiv' + nodeCount + '"'
					+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeCount +'"'
					+ ' class="data-span opacity00 ct-blue-color ct-fonts" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeCount +'" class="position div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeCount +'" class="position next-span ct-green-color ct-fonts inline-style"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
					+ ' <span id="dataAddress' + nodeCount + '" class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress 
					+ '</span></div></div></div>');
}

//declare structure type and first node to null
function preStructTypeList() {
	$("#structTypelist").append('<span id="strcutSpan">struct listNode {\n'
					+ '\tint data;\n'
					+ '\tstruct listNode *next;\n'
					+ '};</span>\n'
					+ '<span id="typeDefDec">typedef struct listNode* nodeptr;</span>\n'
					+ '<span id="declareFirstNode">node first = NULL;</span>\n');
}

//addMthod() Call in main method
function preAddMethodInMain() {
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="iniFstToNull">first = NULL, int x;</span>\n'
					+ '<span id="printf1">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf1">scanf("%d", &x);</span>\n'
					+ '<span id="addWhileCon">while (<span id="whileCon">x != -1</span>) {</span>\n'
					+ '\t<span id="addNodeMethod">first = addNodes(first, x);</span>\n'
					+ '\t<span id="printf2">printf("Enter an element : ");</span>\n'
					+ '\t<span id="scanf2">scanf("%d", &x);</span>\n'
					+'}');
}

//traverse() call in main method
function preTraverseMainMethod() {
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+'<span id="travrseIfCond">if (<span id="travrseFrstToNul">first == NULL</span>) {</span>\n'
					+ '\t<span id="printf8">printf("Circular Singly Linked List is empty\\n);</span>\n'
					+ '} else {\n'
					+ '\t<span id="printf9">The elements in Circular Singly Linked List are: ");</span>\n'
					+ '\t<span id="calToTravrseMethd">traverseList(first);</span>\n'
					+ '}');
}

//search() call in main method
function preSearchMethodInMain() {
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="declareXAndPos">int x, pos;</span>\n'
					+'<span id="printf1">printf("Enter a search element : ");</span>\n'
			 		+ '<span id="scanf1">scanf("%d", &x);</span>\n'
			 		+ '<span id="callToSearchMethod">pos = searchPosOfEle(first, x);</span>\n'
			 		+ '<span id="checkIfCondition">if (<span id="posEqlZero">pos == 0</span>) {</span>\n'
			 		+ '\t<span id="printf2">printf("The given element %d is not found in "\n'
			 		+ '\t\t"the given Circular Linked List", x);</span>\n'
			 		+ '} else {\n'
			 		+ '\t<spna id="printf3">printf("The given element %d is "\n'
			 		+ '\t\t"found at position : %d", x, pos);</span>\n'
			 		+ '}'); 
}

//count() call in main method
function preCountMainMethod() {
	$("#inMain").append('<div id="printf12" style="display: inline-block;">printf("The number of nodes in a Circular Singly\n'
								+ '\t\t\t\t\t\tLinked List are : %d\\n", <span id="callToCntMtd">count(first)</span>);</span>');
}

//deleteAtEnd() call in main method
function preDeleteAtEndMethodInMain() {
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main</div>'
					+ '<span id="IfFirstNotEqToNull">if (first == NULL) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty "\n'
					+'\t\t"so Deletion is not possible");\n</span>'
					+ '} else {\n'
					+ '\t<span id="callToDeleteAtEndMethod">first = '+ buttonName+'(first);</span>\n'
					+ '}\n');
}

//deleteAtPosition() call in main method
function preDeleteAtPositionMethodInMain() {
	$("#inMain").append('<div class="text-center ct-bluecolor ct-fonts padding00">In Main</div>'
					+ '<span id="decPos">int pos;</span>\n'
					+ '<span id="IfFirstNotEqToNull">if (first == NULL) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty "\n'
					+'\t\t"so Deletion is not possible");\n</span>'
					+ '} else {\n'
					+ '\t<span id="printf2">printf("Enter a position : ");</span>\n'
					+ '\t<span id="scanf2">scanf("%d", &pos);</span>\n'
					+ '\t<span id="ifPosEqZero">if (pos <= 0) {</span>\n'
					+ '\t\t<span id="printf3">printf("No such position in Circular "\n'
					+ '\t\t\t"Linked List so deletion is not possible");</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="callToDeleteAtEndMethod">first = deleteAtPosition(first, pos);</span>\n'
					+ '\t}\n}\n');
}


//pre addMethod() logic
function addNodesMethod() {
	$("#csllMethodOperations").append('<div class="addNodesDiv"><span id="addMethodDec">'
					+'node addNodes(<span id="decFstVar">node first</span>, <span id="decXVal">int x</span>) {</span>\n'
					+ '\t<span id="decTmpNdLstNd">node temp, lastNode = first;</span>\n'
					+ '\t<span id="callTocreateMethod">temp = createNode();</span>\n'
					+ '\t<span id="stroreXValInTmpDt">temp->data = x;</span>\n'
					+ '\t<span id="ifFstEqNull">if (first == NULL) {</span>\n'
					+ '\t\t<span id="streTmpToFst">first = temp;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNxtNeqFst">while (lastNode->next != first) {</span>\n'	
					+ '\t\t\t<span id="streLstNxtToLst">lastNode = lastNode->next;</span>\n'
					+ '\t\t}\n'	
					+ '\t\t<span id="streTmpToLstNxt">lastNode->next = temp;</span>\n'
					+ '\t}\n'
					+ '\t<span  id="streFstToTmpNxt">temp->next = first;</span>\n'
					+ '\t<span id="retrnFst">return first;</span>\n'	
					+ '}</div>\n');
}

//pre search() logic 
function searchPositionOfEle() {
	$("#csllMethodOperations").append('<div class="searchElement"><span id="searchPassValDecl">'
					+ 'int searchPosOfEle(<span id="decKeyAndFstNode">node first, int key</span>) {</span>\n'
					+ '\t<span id="declCurrNodeNdQNode">node currentNode = first, q = first;</span>\n'
					+ '\t<span id="decCount">int count = 0;</span>\n'
					+ '\t<span id="crntNtEqNull">if (currentNode == NULL) {</span>\n'
					+ '\t\t<spna id="rtnCountIfNull">return count;</spna>\n'
					+ '\t} else {\n'
					+ '\t\tdo {\n'
					+ '\t\t\t<span id="countInc">count++;</span>\n'
					+ '\t\t\t<span id="assgnToQtoCrrNode">q = currentNode;</span>\n'
					+ '\t\t\t<span id="ifkeyNtEqNull">if (currentNode->next == first && currentNode->data != key) {</span>\n'
					+ '\t\t\t\t<span id="returnzero">return 0;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t\t<span id="currToCurrNodeNext">currentNode = currentNode->next;</span>\n'
					+ '\t\t<span id="whileLoopCkeck">} while (q->next != first && q -> data != key);</span>\n'
					+ '\t\t\t<span id="returnCountIfNotNull">return count;</span>\n'
					+ '\t}\n'
					+ '}</div>\n\n');
}

//pre deleteAtEnd() method
function deleteAtEnd() {
	$("#csllMethodOperations").append('<div class="deleteAtEndElement"><span id="deleteAtEndDec">'
					+ 'node deleteAtEnd(<span id="decFirstNode">node first</span>) {</span>\n'
					+ '\t<span id="decPrevAndLastNode">node prev, lastNode = first;</span>\n'
					+ '\t<span id="iflstNtEqFst">if (lastNode -> next == first) {</span>\n'
					+ '\t\t<span id="assnNullTofst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNotEqFst">while (lastNode -> next != first) {</span>\n'
					+ '\t\t\t<span id="assnlstToPrev">prev = lastNode;</span>\n'
					+ '\t\t\t<span id="assnLstNxtTolst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="assnFstToPrevNxt">prev -> next = first;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Circular Linked List : %d", lastNode -> data);</span>\n'
					+ '\t<span id="freeNode">free(lastNode);</span>\n'
					+ '\t<span id="rtnFst">return first;</span>\n'
					+ '}</div>');
}

//pre deleteAtBegin() method
function deleteAtBegin() {
	$("#csllMethodOperations").append('<div class="deleteAtEndElement"><span id="deleteAtEndDec">'
					+ 'node deleteAtBegin(<span id="decFirstNode">node first</span>) {</span>\n'
					+ '\t<span id="decPrevAndLastNode">node prev = first, lastNode = first;</span>\n'
					+ '\t<span id="iflstNtEqFst">if (prev->next == first) {</span>\n'
					+ '\t\t<span id="assnNullTofst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNotEqFst">while (lastNode -> next != first) {</span>\n'
					+ '\t\t\t<span id="assnlstToPrev">lastNode = lastNode->next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t\t<span id="assnLstNxtTolst">first = prev->next;</span>\n'
					+ '\t\t<span id="assnFstToPrevNxt">lastNode->next = first;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Circular Linked List : %d", prev -> data);</span>\n'
					+ '\t<span id="freeNode">free(prev);</span>\n'
					+ '\t<span id="rtnFst">return first;</span>\n'
					+ '}</div>');
}

//pre deleteAtPosition() method
function deleteAtPosition() {
	$("#csllMethodOperations").append('<div class="deleteAtEndElement"><span id="deleteAtEndDec">'
					+ 'node deleteAtPosition(<span id="decFirstNode">node first</span>, <span id="declarePosVar">int pos</span>) {</span>\n'
					+ '\t<span id="decPrevAndLastNode">node prev = first, lastNode = first;</span>\n'
					+ '\t<span id="declareiVar">int i;</span>\n'
					+ '\t<span id="ifPosEqOne">if (pos == 1) {</span>\n'
					+ '\t\t<span id="iflstNtEqFst">if (prev -> next == first) {</span>\n'
					+ '\t\t\t<span id="assnNullTofst">first = NULL;</span>\n'
					+ '\t\t} else {\n'
					+ '\t\t\t<span id="whileLstNotEqFst">while (lastNode -> next != first) {</span>\n'
					+ '\t\t\t\t<span id="assnlstToPrev">lastNode = lastNode->next;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t\t<span id="assnLstNxtTolst">first = prev -> next;</span>\n'
					+ '\t\t\t<span id="assnFstToPrevNxt">lastNode -> next = first;</span>\n'
					+ '\t\t}\n'
					+ '\t} else {\n'
					+ '\t\t<span id="forLoop">for (<span id="iDec">i = 1</span>; <span id="iCon">i < pos</span>; <span id="iInc">i++</span>) {</span>\n'
					+ '\t\t\t<span id="ifLastNodeNextEqFirst">if (lastNode -> next == first) {</span>\n'
					+ '\t\t\t\t<span id="printf4">printf("No such position in Circular Linked List "\n ' 
					+ '\t\t\t\t\t"so Deletion is not possible");</span>\n'
					+ '\t\t\t\t<span id="returnFirst">return first;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t\t<span id="prevEqLastNode">prev = lastNode;</span>\n'
					+ '\t\t\t<span id="lstNodeEqLstNxt">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="prevNxtEqLstNext">prev -> next = lastNode->next;</span>\n'
					+ '\t}\n'
					+ '\t\t<span id="printf5">printf("The deleted item from Circular Linked List : %d", prev -> data);</span>\n'
					+ '\t\t<span id="freeNode">free(prev);</span>\n'
					+ '\t\t<span id="rtnFst">return first;</span>\n'
					+ '\t}\n'
					+ '}</div>');
}


//pre create Node method
function preCreateNodeFunction() {
	$("#csllOperations").append('node createNode() {\n'
					+' \t<span id="tmpCreate">node temp;</span>\n'
					+' \t<span id="allocateMem">temp = (node) <span id="mallocMemoryAllocation">malloc(sizeof(struct list))</span>;</span>\n'
					+' \t<span id="asgnToNlToTmp">temp -> next = NULL;</span>\n'
					+' \t<span id="returnTmp">return temp;</span>\n'
					+'}\n');
}

//pre traverse() method
function preTraverseLstMtd() {
	$("#csllMethodOperations").append('<div id="travrseLstDiv"><span id="trvrseLstMtdDec">void traverseList'
					+ '(<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="travrsrTmpDec">node temp = first;</span>\n'
					+ '\t<span id="travrseDoWle"><span id="doLoop">do {</span>\n'
					+ '\t\t<span id="printf10">printf("%d --> ", temp -> data);</span>\n'
					+ '\t\t<span id="travrseTmpnxtToTmp">temp = temp -> next;</span>\n'
					+ '\t<span id="travrseWleTmpEqlToFrst">} while (<span id="trvrsTmpToFrst">temp != first</span>);</span></span>\n'
					+ '\t<span id="printf11">printf("\\n");</span>\n'
					+ '}</div>');
}

//pre count() method
function preCountMtd() {
	$("#csllMethodOperations").append('<span id="cntMtdDec">int count(<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="travrsrTmpDec">node temp = first;</span>\n'
					+ '\t<span id="cntSumDec">int sum = <span id="sumValue">0</span>;</span>\n'
					+ '\t<span id="cntIfCond">if (<span id="frstToNulCond">first == NULL</span>) {</span>\n'
					+ '\t\t<span id="cntIfRetnSm1">return sum;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="cntDoCond">do {\n'
					+ '\t\t\t<span id="cntElseSmInc">sum++;</span>\n'
					+ '\t\t\t<span id="cntTmpNxtToTmp">temp = temp -> next;</span>\n'
					+ '\t\t<span id="cntWleTmpEqlToFst">} while (<span id="cntTmpToFrst">temp != first</span>);</span></span>\n'
					+ '\t\t<span id="cntIfRetnSm2">return sum;</span>\n'
					+ '\t}\n'
					+ '}');
}

//append circular linked list operation (buttons)
function appendButtons() {
	for (var i = 0; i < 10; i++) {
		if (i == 5) {
			$("#buttonDiv").append('<br>');
		}
		var buttonId = buttonNames[i].charAt(0).toLowerCase() + buttonNames[i].substring(1, buttonNames[i].length);
		$('#buttonDiv').append('<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
							+ buttonId.split(" ").join("") +'">'+ buttonNames[i] +' </span></div>');
	}
}

//extra node declaration 
function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {
	$('#declareNodes').append('<div class="col-xs-1  extraNode opacity00 padding00" id='+ id1 +'>'
					+'<div class="col-xs-12 box padding00"><span id='+ id2 +' class="extrNodeVal ct-brown-color inline-style"></span></div>'
					+'<div class="text-center col-xs-12 padding00 ct-green-color" id='+ nodeName +'>'+ nodeNameText +'</div>'
			+'</div> ');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

//intro function
function introFunction() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#headdingSection',
						intro :'',
						tooltipClass : "hide",
					},{
						element :'#structTypelist',
						intro :'',
						position : 'right',
						tooltipClass : "hide",
					}]
	});
	introcode.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "structTypelist" :
					$("#structTypelist").removeClass("opacity00");
						introNextSteps("#strcutSpan", "strcutSpan", 'bottom');
						setTimeToIntroGoNextStep()
				break;
				case "strcutSpan" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a new '
						+ '<span class="ct-code-b-yellow">struct</span> type named '
						+ '<span class="ct-code-b-yellow">listNode</span>.<br/><br/>'
						+' It contains two members : '
						+ '<ul><li><span class="ct-code-b-yellow">data</span> which is of type int.</li>'
						+ '<li><span class="ct-code-b-yellow">*next</span> which is a pointer to the next node.</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#typeDefDec", "typeDefDec","bottom");
						$(".introjs-nextbutton").show();
					});
				break;
				case "typeDefDec" :
					$(".introjs-tooltip").removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">typedef</span> creates a '
						+ '<span class="ct-code-b-yellow">node</span> as a '
						+ ' new type <span class="ct-code-b-yellow">pointer</span> '
						+ 'to <span class="ct-code-b-yellow">struct listNode</span>. '
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#declareFirstNode", "declareFirstNode", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "declareFirstNode" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">first</span> '
							+ ' and initializing it to <span class="ct-code-b-yellow">NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$("#animationParent").removeClass("opacity00");
						introNextSteps("#animatinDiv", "intlFstToNull", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "buttonDiv" :
					$("#extraNode").text("op");
					$("#countName").text("count");
					flag = false;
					buttonName, lastnodeCount = printfCount = outPutCount = nodeCount = lineCount = searchCount = preCount = i = 1, iVal = count = 0;
					$("#buttonDiv").removeClass("opacity00");
					$(".buttons").removeClass("disabled");
					$('.intVariables, .intValues').addClass('opacity00');
					$('#nxtLne, .fa, #line26, #line30, #line17, .extraNode').remove();//traverse
					introcode.refresh();
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "showButtons" :
							$("#addNodes").off().click(function() {
								$('.displayCode').addClass('opacity00').empty();
								$('#line15, polyline, .lines').remove();
								$('#xValeDecInMain, #xValInMain').addClass('opacity00');
								$('#xValInMain').text("NULL");
								$("#dynamicNodes, .outputCount1, #declareNodes").empty();
								buttonCorrespondingText("addNodes");
							});
							$("#traverseList").off().click(function() {
								buttonCorrespondingText("traverseList");
							});
							$("#search").off().click(function() {
								buttonCorrespondingText("search");
							});
							$("#count").off().click(function() {
								buttonCorrespondingText('count');
							});
							$("#deleteAtEnd").off().click(function() {
								buttonCorrespondingText("deleteAtEnd");
							});
							$("#deleteAtBegin").off().click(function() {
								buttonCorrespondingText("deleteAtBegin");
							});
							$("#deleteAtPosition").off().click(function() {
								buttonCorrespondingText("deleteAtPosition");
							});
						break;
					}
				break;
				case"inMain" :
					$("#inMain").removeClass("opacity00");
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "addNodes": 
							preAddMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#iniFstToNull", "initialFistNode", "bottom");
						break;
						case "traverseList":
							preTraverseMainMethod();
							introcode.refresh();
							customIntroNxtStep("#travrseIfCond");
						break;
						case "search" :
							preSearchMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#declareXAndPos");
						break;
						case "count":
							preCountMainMethod();
							introcode.refresh();
							$("#callToCntMtd").effect("highlight", {color: 'blue'}, 500, function() {
								$('.introjs-tooltip').removeClass("hide");
								text = 'The <span class="ct-code-b-yellow">first</span> node is initialize with the address returned by the'
										+ ' <span class="ct-code-b-yellow">count(' + $('#firstVal').text() + ')</span> method.';
								typing('.introjs-tooltiptext', text, function() {
									introNextSteps("#csllMethodOperations", 'countMtdCalng', 'left');
									$('.introjs-nextbutton').show();
								});
							})
						break;
						case "deleteAtBegin" :
						case "deleteAtEnd" :
							preDeleteAtEndMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#IfFirstNotEqToNull");
						break;
						/*case "deleteAtBegin" :
							preDeleteAtEndMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#IfFirstNotEqToNull");
						break;*/
						case "deleteAtPosition" :
							preDeleteAtPositionMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#decPos");
						break;
					}
				break;
				case "decPos" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">pos</span> '
							+ 'of type <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', text, function() {
						appendNextBtn('declarationOfPosVar');
					});
				break;
				case "IfFirstNotEqToNull" : //deleteAtEnd & deleteAtBegin & deleteAtPosition
					ifFrstToNulText('first', 'NULL', function() {
						fromEffectWithTweenMax("#IfFirstNotEqToNull", "#ifCondition", true, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$('.introjs-duplicate-nextbutton').click(function () {
								flipTheCon("#first", $("#firstVal").text(), "NULL")
							});
						});
					});
				break;
				case "callToDeleteAtEndMethod" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "storeReturnValToFirst" :
							$('.introjs-tooltip').removeClass('hide');
							if (buttonName != "deleteAtPosition") {
								text = 'The <span class="ct-code-b-yellow">first</span> is initialize with the'
									+ ' node address returned by the <span class="ct-code-b-yellow">deleteAtEnd("'
									+ $('#firstVal').text() +')</span> method.';
							} else {
								var pos = $("#nodeVal" + (outPutCount - 1)).val();
								text = 'The <span class="ct-code-b-yellow">first</span> is initialize with the'
									+ ' node address returned by the <span class="ct-code-b-yellow">deleteAtPosition("'
									+ $('#firstVal').text() +', "'+ pos +'")</span> method.';
							}
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#csllMethodOperations", "deleteAtEndMethod",  "left");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnFirstVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">'+ buttonName +'()</span> method call '
									+ 'returns the value stored in <span class="ct-code-b-yellow">first</span>('
									+ '<span class="ct-code-b-yellow">'+ $("#firstNodeVal").text() +'</span>) and '
									+ 'stores it in the variable <span class="ct-code-b-yellow">first</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								introNextSteps("#animatinDiv", "storeRtnFirstVal", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
						
					}
				break;
				//end deleteAtEnd
				case "declareXAndPos" ://declare search variables X and POS
					$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we are declaring two variable <span class="ct-code-b-yellow">x</span> '
								+ ' and <span class="ct-code-b-yellow">pos</span> of type '
								+'<span class="ct-code-b-yellow">int</span>.';
						typing('.introjs-tooltiptext', text, function() {
							introNextSteps("#animatinDiv", "declareXAndPosVar", "bottom");
							$('.introjs-nextbutton').show();
					});
				break;
				case "callToSearchMethod" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "storeSearchReturnValToPos" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">pos</span> is initialize with the'
								+ ' node position returned by the <span class="ct-code-b-yellow">searchPosOfEle("'
								+ $('#firstVal').text() +'",'+ $('#xValInAdd').text() +')</span> method.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#csllMethodOperations", "searchMethod",  "left");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnCountVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">searchPosOfEle()</span> method call '
									+ 'returns the value stored in <span class="ct-code-b-yellow">count</span>('
									+ '<span class="ct-code-b-yellow">'+ $("#countVal").text() +'</span>) and '
									+ 'stores it in the variable <span class="ct-code-b-yellow">pos</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								introNextSteps("#animatinDiv", "storeRtnPosVal", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
						
					}
				break;
				case "checkIfCondition" :
					ifFrstToNulText('pos', '0', function() {
						fromEffectWithTweenMax("#posEqlZero", "#ifCondition", true, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$('.introjs-duplicate-nextbutton').click(function () {
								flipTheCon("#first", $("#posVal").text(), "0")
							});
						});
					});
				break;
				//end search
				case "iniFstToNull" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "initialFistNode" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, we are declaring two variable <span class="ct-code-b-yellow">first</span> '
									+ ' and <span class="ct-code-b-yellow">x</span>, the <span class="ct-code-b-yellow">first</span> ' 
									+ ' is of type <span class="ct-code-b-yellow">node</span> and '
									+ 'initializing it to <span class="ct-code-b-yellow">NULL</span>.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "fistNodeToNull", "bottom");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "animatinDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "readPosVal" : 
							$('#posVal').text($('#nodeVal' + (outPutCount - 1)).val());
							$('#nodeVal' + (outPutCount - 1)).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + (outPutCount - 1), "#posVal", false, function() {
								customIntroNxtStep("#ifPosEqZero", "ifPosEqZero", 'bottom');
							});
						break;
						case "storeRtnFirstVal" ://deleteAtEnd method
							introcode.refresh();
							fadeInBounceEffectWithTimelineMax('#firstNodeVal','#firstVal', false, function() {
								$('#line15, #line10, #line16').remove();
								if ($('.node').length != 0) {
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
											"line15", "arrow");
								}
								$('#line12, #line13, .fa, .extraNode').remove();
								introcode.refresh();
								customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
							});
						break;
						case "declareXAndPosVar" ://search method
							$("#subVal").text('');
							transferEffect("#declareXAndPos", "#xValDecInAdd", function() {
								transferEffect("#declareXAndPos", "#posValDec", function() {
									customIntroNxtStep("#printf1", "enterSearchElement", 'bottom');
								});
							});
						break;
						case "readSearchVal" :
							$('#xValInAdd').text($('#nodeVal' + (outPutCount - 1)).val());
							$('#nodeVal' + (outPutCount - 1)).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + (outPutCount - 1), "#xValInAdd", false, function() {
								customIntroNxtStep("#callToSearchMethod", "storeSearchReturnValToPos", 'bottom');
							});
						break;
						case "storeRtnPosVal" :
							var currentNext = $("#next" + (searchCount)).text();
							var first = $("#firstVal").text();
							var currentData = $("#data" + (searchCount)).text();
							var key = $("#opVal").text();
							if (currentNext == first && currentData != key) {
								$("#posVal").text(0).addClass("opacity00");
								zoomInEffect("#posVal", function() {
									$('#opVal, #countVal, #countValDec, #opValDec').addClass('opacity00');
									$('.extraNode, #line16, #line17, #line18').remove();
									introcode.refresh();
									customIntroNxtStep("#checkIfCondition", "checkIfPosEqToNull", 'bottom');
								});
							} else {
								$("#posVal").text($("#countVal").text());
								fromEffectWithTweenMax("#countVal", "#posVal", false, function() {
									$('#opVal, #countVal, #countValDec, #opValDec').addClass('opacity00');
									$('.extraNode, #line16, #line17, #line18').remove();
									introcode.refresh();
									customIntroNxtStep("#checkIfCondition", "checkIfPosEqToNull", 'bottom');
								});
							}
						break;
						//search end
						case "intlFstToNull" :
							transferEffect("#declareFirstNode", "#firstNodeInMain", function() {
								customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
							});
						break;
						case "fistNodeToNull":
							$("#firstVal").text("NULL");
							transferEffect("#iniFstToNull", "#firstNodeInMain", function() {
								transferEffect("#iniFstToNull", "#xValeDecInMain", function() {
									customIntroNxtStep("#printf1", "printText", "bottom");
								});
							});
						break;
						case "tempsDeclar" :
							transferEffect("#tmpCreate", "#tmpNde", function() {
								customIntroNxtStep("#allocateMem", "memoryAllocation", "bottom");
							});
						break;
						case "storeXVal" :
							$('#xValInMain').text($('#nodeVal' + outPutCount).val());
							$('#nodeVal' + outPutCount).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + outPutCount, "#xValInMain", false, function() {
								customIntroNxtStep("#addWhileCon", "checkWhileCon", 'bottom');
							});
						break;
						case "nodeMemAllo" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'Let us assume <span class="ct-code-b-yellow">malloc()</span> allocates a memory '
									+ 'to its members <span class="ct-code-b-yellow">data</span>'
									+ ' and <span class="ct-code-b-yellow">next</span> at an address <span class="ct-code-b-yellow">'
									+ $("#dataAddress" + (nodeCount - 1)).text() +'</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextBtn('displayNodeDataAndNext');
							});
						break;
						case "tempNextToNull" :
							$('#next' + (nodeCount - 1)).text('NULL').addClass('opacity00');
							zoomInEffect("#next" + (nodeCount - 1), function() {
								customIntroNxtStep("#returnTmp", "returnTmp", "bottom");
							});
						break;
						case "storeRtnValStre" :
							introcode.refresh();
							fadeInBounceEffectWithTimelineMax('#firstNodeVal','#firstVal', false, function(){
								$('#line15, #line10, #line16').remove();
								lastnodeCount = 1;
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
										"line15", "arrow", function() {
									$('#line12, #line13, .fa, .extraNode').remove();
									introcode.refresh();
									$('#xValDecInAdd, #xValInAdd').addClass('opacity00');
									printfCount = 2;
									outPutCount++;
									customIntroNxtStep("#printf2", "printText", "bottom");
								});
							});
						break;
					}
				break;
				case "printf" + printfCount:
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printText":
							customIntroNxtStep("#consoleId", "printNodeValText");
						break;
						case "travrsePrntng":
							customIntroNxtStep("#consoleId", "printListEmpty");
						break;
						case "travrseLstPrntng":
							customIntroNxtStep("#consoleId", "printList");
						break;
						case "enterSearchElement" ://search Method
							customIntroNxtStep("#consoleId", "PrintSearchElementText");
						break;
						case "elementNotFound" :
							customIntroNxtStep("#consoleId", "PrintSearchElementNotFoundText");
						break;
						case "elementFound" :
							customIntroNxtStep("#consoleId", "PrintSearchElementFoundText");
						break;
						case "sumPrintng"://count
							customIntroNxtStep("#consoleId", "countPrintng");
						break;
						case "deletetionNotPossible" : //deleteAtEnd
							customIntroNxtStep("#consoleId", "printDeletionNotPossible");
						break;
						case "printPosText" :
							customIntroNxtStep("#consoleId", "printEnterPosText");
						break;
						case "noSuchPosition" :
							customIntroNxtStep("#consoleId", "printNoSuchPosition");
						break;
					}
				break;
				case "consoleId" :
					$("#consoleId, #consoleEnter").removeClass("opacity00");
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printNodeValText"://addMethod
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter an element : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							if (iVal > 0) {
								$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
								var text = "If you want to exit from <span class='ct-code-b-yellow'>addNodes()</span> method enter -1";
								typing("#appendText", text);
							}
							customIntroNxtStep('#scanf' + printfCount, 'scanfReadval', 'bottom');
						break;
						case "enterNodeVal" :
							$('.introjs-tooltip').removeClass('hide');
							var t = $(".nodes").length == 5;
							if (t) {
								addNegativeValuEvent("#nodeVal" + outPutCount)
								var text = "Here, we are restricted to allow only <span class='ct-code-b-yellow'>5</span> nodes. So, "
										+ "please enter the <span class='ct-code-b-yellow'>node data</span> as "
										+ "<span class='ct-code-b-yellow'>-1</span> only.";
							} else {
								events("#nodeVal" + outPutCount);
								var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value";
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + outPutCount).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								introNextSteps("#animatinDiv", "storeXVal", "bottom");
							});
						break;//end addMethod
						case "printListEmpty"://traverse Method
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Circular Singly Linked List is empty</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
						case "printList":
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The elements in Circular Singly Linked List are: </span>');
							customIntroNxtStep("#calToTravrseMethd", "", 'bottom');
						break;
						case "printLstElemnts":
							$('#print' + outPutCount).append('<b><span id="outData' + nodeCount + '"></span></b><span class="opacity00" id="arrow'
										+ nodeCount	+ '"> -->&nbsp;</span></span>');
							$("#tempNodeVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
								svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv" 
											+ nodeCount, "#svgId", "line36", "arrow", function() {
									$("#line36").remove();
									fadeInFromEffectWithTimelineMax("#data" + nodeCount, "#outData" + nodeCount, true, function() {
										$("#outData" + nodeCount).css({"color": "yellow"});
										$("#arrow" + nodeCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											$(this).removeClass("animated zoomIn");
											customIntroNxtStep('#csllMethodOperations', 'trvrsTmpToTmpNxt', 'left');
										});
									})
								});
							});
						break;
						case "printNextLine":
							$('#print1').after('<span id="nxtLne">\n<input id="emptySpan" style="width: 10px; border: none; background: black;">'
											+ '</input></span>');
							$('#emptySpan').effect('highlight', {color: 'yellow'}, 500, function() {
								customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
							});
						break;//end traverse method
						case "PrintSearchElementText" ://search method
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter a search element : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							outPutCount++;
							customIntroNxtStep("#scanf1", "readSearchVal", 'bottom');
						break;
						case "entersearchVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter which element you want to search.";
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + (outPutCount - 1)).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								introNextSteps("#animatinDiv", "readSearchVal", 'bottom');
								events("#nodeVal" + (outPutCount - 1));
							});
						break;
						case "PrintSearchElementNotFoundText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The given element <b>'
									+ $("#xValInAdd").text() +'</b> is not found in the given Circular Linked List.</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
						case "PrintSearchElementFoundText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The given element <b>'
									+ $("#xValInAdd").text() +'</b> is found at position <b>'+ $("#posVal").text() +'</b>.</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
						case "countPrintng"://count
							$('#consoleEnter').append('<span id="print' + outPutCount + '">The number of nodes in a Circular Singly Linked List are : '
										+ '<span id="outData" style="color: yellow;"></span></span>');
							$('#animatinDiv').addClass('z-index1000000');
							fadeInFromEffectWithTimelineMax('#opVal', '#outData', true, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								butnStepWithTime();
							});
						break;
						case "printDeletionNotPossible" ://deleteAtEnd && deleteAtBegin && deleteAtPosition
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty so '
									+ 'Deletion is not possible</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
						case "deletedNoElement" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">No such position in Circular Linked List '
									+ 'so Deletion is not possible</span><br/>');
							outPutCount++;
							customIntroNxtStep("#csllMethodOperations", "freeNoNode", 'left');
							//customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
						case "deletedElement" :
							if (buttonName == "deleteAtBegin") {
								$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted item from Circular Linked List : '
										+$("#data1").text() +'</span><br/>');
							} else if (buttonName == "deleteAtPosition") {
								var pos = $("#posVal").text();
								$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted item from Circular Linked List : '
										+$("#data" + pos).text() +'</span><br/>');
							} else {
								$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted item from Circular Linked List : '
										+$("#data" + lastnodeCount).text() +'</span><br/>');
							}
							outPutCount++;
							customIntroNxtStep("#csllMethodOperations", "freeNode", 'left');
						break;
						case "printEnterPosText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter a position : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							outPutCount++;
							customIntroNxtStep("#scanf2", "readPosVal", 'bottom');
						break;
						case "enterPosVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter a position which element you want to delete.";
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + (outPutCount - 1)).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								introNextSteps("#animatinDiv", "readPosVal", 'bottom');
								events("#nodeVal" + (outPutCount - 1));
							});
						break;
						case "printNoSuchPosition" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">No such position in Circular '
									+ 'Linked List so deletion is not possible</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
					}
				break;
				case "scanf" + printfCount :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "scanfReadval" :// add method
							customIntroNxtStep("#consoleId", "enterNodeVal", "bottom");
						break;
						case "readSearchVal" ://search method
							customIntroNxtStep("#consoleId", "entersearchVal", "bottom");
						break;
						case "readPosVal" :
							customIntroNxtStep("#consoleId", "enterPosVal", "bottom");
						break;
					}
				break;
				case "addWhileCon" ://addMethod
					$("#nodeVal" + outPutCount).attr("disabled", "disabled");
						text = '&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
							+'<span id="xVal" class="position">x</span> != -1</span>'
							+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
					$('.introjs-tooltiptext').append(text);
					$('.introjs-tooltip').removeClass('hide');
					fromEffectWithTweenMax("#whileCon", "#whileCondition",true, function() {
						flipEffectWithTweenMax("#xVal", $("#nodeVal" + outPutCount).val(), function() {
							var con = $("#nodeVal" + outPutCount).val() != -1;
							if (con) {
								$("#trueOrFalse").text("====> True").addClass("green-color");
								introNextSteps("#addNodeMethod", "callToAddNodeMethod", "bottom");	
							} else {
								$("#trueOrFalse").text("====> False").addClass("red-color");
								introNextSteps("#buttonDiv", "showButtons", 'bottom');
								$('#xValeDecInMain, #xValInMain').addClass('opacity00');
							}
							text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
							typing("#appnedSpan", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				break;
				case "addNodeMethod" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "callToAddNodeMethod" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">first</span> node is initialize with the'
								+ ' address returned by the <span class="ct-code-b-yellow">addNodes("'
								+ $('#firstVal').text() +'",'+ $('#xValInMain').text() +')</span> method.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#csllMethodOperations", "addNodeMethos",  "left");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnFirstVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">addNodes()</span> method call '
									+ 'returns the value stored in <span class="ct-code-b-yellow">first</span>('
									+ '<span class="ct-code-b-yellow">'+$("#firstNodeVal").text() +'</span>) and '
									+ 'stores it in the variable <span class="ct-code-b-yellow">first</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								introNextSteps("#animatinDiv", "storeRtnValStre", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "csllMethodOperations": 
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "addNodeMethos" :
							$("#csllMethodOperations").empty().removeClass("opacity00");
							addNodesMethod();
							introcode.refresh();
							arrow("#addMethodDec", "#addMethodDec", function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'The <span class="ct-code-b-yellow">first</span> node and'
										+ ' <span class="ct-code-b-yellow">x</span> variable is initialze'
										+ ' with the address passed by the <span class="ct-code-b-yellow">addNodes()</span> method. i.e.'
										+ '<span class="ct-code-b-yellow">addNodes("'+ $("#firstVal").text() 
										+ '",'+ $('#xValInMain').text() +')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('addNodePassedValuesInize');
								});
							});
						break;
						case "returnTempVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">crateNode()</span> method call '
									+ 'returns the value stored in <span class="ct-code-b-yellow">temp</span>('
									+ '<span class="ct-code-b-yellow">'+$("#dataAddress" + (nodeCount - 1)).text() +'</span>) and '
									+ 'stores it in the variable <span class="ct-code-b-yellow">temp</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#callTocreateMethod').effect( "highlight",{color: 'blue'}, 1000);
								$('#animatinDiv').addClass('z-index1000000');
								appendNextBtn('storeAddAndData');
							});
						break;//traverse Method
						case "traverseList":
							$("#csllMethodOperations").removeClass("opacity00");
							preTraverseLstMtd();
							introcode.refresh();
							arrow("#trvrseLstMtdDec", "#trvrseLstMtdDec", function() {
								$('.introjs-tooltip').removeClass("hide");
								text = 'The <span class="ct-code-b-yellow">first</span> node is initialze with the address '
										+ 'passed by the <span class="ct-code-b-yellow">traverseList()</span>'
										+ ' method.<br> i.e., <span class="ct-code-b-yellow">traverseList('+ $("#firstVal").text() +')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('travrsePassedValInit');
								});
							});
						break;
						case "trvrsTmpToTmpNxt":
							arrow("#printf10", "#travrseTmpnxtToTmp", function() {
								$('.introjs-tooltip').removeClass("hide");
								tmpNxtToTmpText();
							});
						break;//end traverse method
						case "searchMethod" ://search method
							$("#csllMethodOperations").empty().removeClass("opacity00");
							searchPositionOfEle();
							introcode.refresh();
							arrow("#searchPassValDecl", "#searchPassValDecl", function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'The <span class="ct-code-b-yellow">first</span> node and'
										+ ' <span class="ct-code-b-yellow">key</span> variable is initialze'
										+ ' with the values passed by the <span class="ct-code-b-yellow">searchPosOfEle()</span>'
										+' method. i.e. <span class="ct-code-b-yellow">addNodes("'+ $("#firstVal").text() 
										+ '",'+ $('#xValInAdd').text() +')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('searchMethodVariablesDeclaration');
								});
							});
						break;
						case "countMtdCalng"://count method
							preCountMtd();
							introcode.refresh();
							$("#csllMethodOperations").removeClass("opacity00");
							arrow('#cntMtdDec', '#cntMtdDec', function() {
								$('.introjs-tooltip').removeClass("hide");
								text = 'The <span class="ct-code-b-yellow">first</span> node is initialze with the address passed by the'
										+ ' <span class="ct-code-b-yellow">count()</span> method. i.e.<span class="ct-code-b-yellow">count('
										+ $("#firstVal").text() + ')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									appendNextBtn('travrsePassedValInit');
								});
							});
						break;
						case "deleteAtEndMethod" ://deleteAtEnd && deleteAtBegin Method
							$("#csllMethodOperations").empty().removeClass("opacity00");
							var methodDefinitions;
							if (buttonName == "deleteAtEnd") {
								deleteAtEnd();
								methodDefinitions = 'deleteAtEnd("'+ $("#firstVal").text() +'")'
							} else if(buttonName == "deleteAtPosition") {
								deleteAtPosition();
								var pos = $("#nodeVal" + (outPutCount - 1)).val();
								methodDefinitions = 'deleteAtEnd("'+ $("#firstVal").text() 
								+', "'+  pos + '")';
							} else {
								methodDefinitions = 'deleteAtEnd("'+ $("#firstVal").text() +'")'
								deleteAtBegin();
							}
							introcode.refresh();
							arrow("#deleteAtEndDec", "#deleteAtEndDec", function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'The <span class="ct-code-b-yellow">first</span> node is initialze'
										+ ' with the address passed by the <span class="ct-code-b-yellow">'+buttonName +'()</span>'
										+' method. i.e. <span class="ct-code-b-yellow">'+ methodDefinitions +'</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('deleteAtEndMethodVariablesDeclaration');
								});
							});
						break;
						case "freeNode" :
							$('#animatinDiv').addClass('z-index1000000');
							if (buttonName != "deleteAtPosition") {
								arrow("#printf2", "#freeNode");
							} else {
								if (printfCount == 5) {
									arrow("#printf5", "#freeNode");
								} else {
									arrow("#printf4", "#returnFirst");
								}
							}
							$('.introjs-tooltip').removeClass('hide');
							if (buttonName == "deleteAtBegin") {
								text = 'Now delete the node <span class="ct-code-b-yellow">'
									+ $("#data1").text() +'</span>.';
							} else if (buttonName == "deleteAtPosition") {
								var pos = $("#posVal").text();
								text = 'Now delete the node <span class="ct-code-b-yellow">'
									+ $("#data" + pos).text() +'</span>.';
							} else {
								text = 'Now delete the node <span class="ct-code-b-yellow">'
									+ $("#data" + lastnodeCount).text() +'</span>.';
							}
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn('freeNode');
							});
						break;
						case "freeNoNode" : //poorna
							returnFirstNode();
						break;
					}
				break;
				case "csllOperations" :
					$("#csllOperations").empty().removeClass('opacity00');
					preCreateNodeFunction();
					introcode.refresh();
					customIntroNxtStep("#tmpCreate", "createTmpNode", 'bottom');
				break;
				case "tmpCreate" ://addMethod
					$('#animatinDiv').removeClass('z-index1000000');
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">temp</span> '
						+ ' of type <span class="ct-code-b-yellow">node</span>.';
					typing('.introjs-tooltiptext', text, function() {
						declareNodesWhenFunctionCall("tmpNde", "tmpNdeVal", "tmpNdeInCreMtd", "temp<sub>createNode</sub>", function() {
							$('#tmpNde').addClass('margin-left30');
							introNextSteps("#animatinDiv", 'tempsDeclar','bottom');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "allocateMem" :
					$('.introjs-tooltip').removeClass("hide");
					text = '<ul><li class = "opacity00" id="li1">The <span class="ct-code-b-yellow">'
							+ 'sizeof(struct listNode)</span> returns the size '
							+ ' occupied by a list node which contains <span class="ct-code-b-yellow">two</span>'
							+ ' fileds <span class="ct-code-b-yellow">data</span> and <span class="ct-code-b-yellow">next</span>.</li> '
							+ ' <li class = "opacity00" id="li2">The <span class="ct-code-b-yellow">malloc()</span> function allocates memory '
							+ ' <span class="ct-code-b-yellow">dynamically</span> '
							+ ' to the size that is occuiped by the <span class="ct-code-b-yellow">listNode</span>'
							+ ' return by the above statement.</li>'
							+ ' <li class = "opacity00" id="li3">The address return by the <span class="ct-code-b-yellow">malloc()</span> is '
							+ ' stored in <span class="ct-code-b-yellow">temp</span>.</li></ul>'
					$(".introjs-tooltiptext").append(text);
					TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								nodeCount++;
								createDynamicNodes(nodeCount - 1);
								introNextSteps("#animatinDiv", "nodeMemAllo", 'bottom');
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				break;
				case "asgnToNlToTmp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'Since, the <span class="ct-code-b-yellow">next</span> member of the '
							+ '<span class="ct-code-b-yellow">temp</span> node is initialize to '
							+ '<span class="ct-code-b-yellow">NULL</span>.'
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempNextToNull", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "returnTmp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'The <span class="ct-code-b-yellow">return</span> statement returns the'
							+' <span class="ct-code-b-yellow">address</span> (i.e. <span class="ct-code-b-yellow">'
							+ $("#dataAddress" + (nodeCount - 1)).text() +'</span>)'
							+' stored in <span class="ct-code-b-yellow">temp</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#csllMethodOperations", "returnTempVal", 'left');
						$('.introjs-nextbutton').show();
					});
				break;//end addMethod
				case "travrseIfCond"://traverse
					ifFrstToNulText('first', 'NULL', function() {
						fromEffectWithTweenMax("#travrseFrstToNul", "#ifCondition", true, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$('.introjs-duplicate-nextbutton').click(function () {
								flipTheCon("#first", $("#firstVal").text(), "NULL")
							});
						});
					});
					break;
				case "calToTravrseMethd":
					$('.introjs-tooltip').removeClass('hide');
					text = "Here, we are calling <span class='ct-code-b-yellow'>traverseList()</span> method and passing first value (i.e.," 
							+ " <span class='ct-code-b-yellow'>" + $("#firstVal").text() + "</span>) as an argument.";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#csllMethodOperations", "traverseList", "left");
						$('.introjs-nextbutton').show();
					});
				break;//end of traverse
				case "ifPosEqZero" :
					text = 'Now check the conditon : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
						+ '<span id="first" class="position">pos</span> <= <span id="second" class="position">0</span></span>'
						+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
				$('.introjs-tooltiptext').text("").append(text);
				$('.introjs-tooltip').removeClass('hide');
				fromEffectWithTweenMax("#ifPosEqZero", "#ifCondition", true, function() {
					appendNextBtn('ifPosLessThanZero');
				});
				break;
			}
		});
	});
	introcode.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	$('.introjs-tooltip').removeClass('hide');
	text = 'Here, we will learn how to <span class="ct-code-b-yellow">create</span> and '
			+ '<span class="ct-code-b-yellow">add</span> a node in a '
			+ ' <span class="ct-code-b-yellow">Circular Singly Linked List</span>.'
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function ifPosLessThanZero() { 
	var pos = $("#posVal").text();
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", pos, function() {
		var con = pos <= 0;
		if (con) {
			$("#trueOrFalse").text("====> True").addClass("green-color");
			printfCount = 3;
			introNextSteps("#printf3", "noSuchPosition", "bottom");	
		} else {
			$("#trueOrFalse").text("====> False").addClass("red-color");
			introNextSteps("#callToDeleteAtEndMethod",'storeReturnValToFirst', 'bottom');
		}
		text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
		typing("#appnedSpan", text, function() {
			$('.introjs-nextbutton').show();
		});
	});
}


function declarationOfPosVar() { 
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect("#decPos", "#posValDec", function() {
		introNextSteps("#IfFirstNotEqToNull", "", "bottom");
		$('.introjs-nextbutton').show();
	});
}

//deleteAtEnd Method Functions
function deleteAtEndMethodVariablesDeclaration() { 
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		introcode.refresh();
		transferEffect("#deleteAtEndDec", "#firstNode", function() {
			$('#firstNodeVal').text($('#firstVal').text());
			fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
				if ($('#firstNodeVal').text() != "NULL") {
					$("#line16").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line16", "arrow");
				}
				if (buttonName == "deleteAtPosition") {
					$("#extraNode").html("pos<sub>del@Pos</sub>");
					transferEffect("#declarePosVar", "#opValDec", function() {
						$('#opVal').text($('#posVal').text());
						fromEffectWithTweenMax('#posVal', '#opVal', false, function() {
							appendNextBtn('declarePrevAndLastNode');
						});
					});
				} else {
					appendNextBtn('declarePrevAndLastNode');
				}
			});
		});
	});
}

function declarePrevAndLastNode() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#deleteAtEndDec", "#decPrevAndLastNode", function() {
		if (buttonName != "deleteAtEnd") {
			text = 'Here, we are declaring <span class="ct-code-b-yellow">prev</span> and <span class="ct-code-b-yellow">'
				+ ' lastNode</span> node and initialize to <span class="ct-code-b-yellow">first</span> node value '
				+ ' <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>.'
		} else {
			text = 'Here, we are declaring <span class="ct-code-b-yellow">prev</span> and <span class="ct-code-b-yellow">'
				+ ' lastNode</span> node and the <span class="ct-code-b-yellow">lastNode</span> is initialize to'
				+ ' <span class="ct-code-b-yellow">first</span> node value '
				+ ' <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>.'
		}
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('declarePrevAndLastNodeAnimation');
		});
	});
}

function declarePrevAndLastNodeAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("prevNode", "prevNodeVal", "prevNodeInSearch", "prev", function() {
		$("#prevNode").addClass("margin-left30");
		transferEffect("#decPrevAndLastNode", "#prevNode", function() {
			if (buttonName != "deleteAtEnd" ) {
				$('#prevNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstNodeVal', '#prevNodeVal', false, function() {
					if ($('#prevNodeVal').text() != "NULL") {
						$("#line17").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#prevNode", "#dataDiv1"
								, "#svgId", "line17", "arrow", function() {
							deleteFunctionVarDeclaration();
						});
					}
				});
			} else {
				deleteFunctionVarDeclaration();
			}
		});
	});
}

function deleteFunctionVarDeclaration() {
	declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInSearch", "lastNode", function() {
		$("#lastNode").addClass("margin-left30");
		transferEffect("#decPrevAndLastNode", "#lastNode", function() {
			$('#lastNodeVal').text($('#firstVal').text());
			fromEffectWithTweenMax('#firstNodeVal', '#lastNodeVal', false, function() {
				if ($('#lastNodeVal').text() != "NULL") {
					$("#line10").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv1", "#svgId", "line10", "arrow");
				}
				if (buttonName == "deleteAtPosition") {
					appendNextBtn('decIVal');
				} else {
					appendNextBtn('ifLastNodeNextEqualToFirst');
				}
			});
		});
	});
}

function decIVal() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#decPrevAndLastNode", "#declareiVar");
	text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">i</span> is of type <span class="ct-code-b-yellow">int</span>.';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('decIValAnimation');
	});
}

function decIValAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countName").text("i");
	transferEffect("#declareiVar", "#countValDec", function() {
		appendNextBtn('ifPosEqOne');
	});
}

function ifPosEqOne() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declareiVar","#ifPosEqOne");
	ifFrstToNulText("pos", "1", function() {
		fromEffectWithTweenMax("#ifPosEqOne", "#ifCondition", true, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function () {
				ifConditionInDelAtPos("#first", $("#posVal").text(), "1", 1);
			});
		});
	});
}

function ifConditionInDelAtPos(selector1, value1, value2) {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax(selector1, value1, function() {
		var con = value1 == value2 ;
		if (con) {
			flag = false;
			$("#trueOrFalse").text("====> True").addClass("green-color");
			appendNextBtn('ifLastNodeNextEqualToFirst');
		} else {
			flag = true;
			appendNextBtn('forLoop');
			$("#trueOrFalse").text("====> False").addClass("red-color");
		}
		text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
		typing("#appnedSpan", text, function() {
			
		});
	});
}

function forLoop() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#ifPosEqOne", "#forLoop", function() {
		text = 'The <span class="ct-code-b-yellow">i</span> value will be initialize to <span class="ct-code-b-yellow">1</span>.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('iValDeclaration');
		});
	});
}

function iValDeclaration() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countName").text("i");
	transferEffect("#iDec", "#countValDec", function() {
	  $("#countVal").text(i);
	  zoomInEffect("#countVal", function() {
		  appendNextBtn("iConText");
	  });
	});
}

function iConText() {
	$(".introjs-duplicate-nextbutton").remove();
	text = 'Now check the conditon : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
		+ '<span id="first" class="position">i</span> < <span id="second" class="position">pos</span></span>'
		+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax("#iCon", "#ifCondition", true, function() {
		appendNextBtn('iConAnimation');
	});
}

function iConAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	var pos = $("#nodeVal" + (outPutCount - 1)).val();
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", i, function() {
		flipEffectWithTweenMax("#second", pos, function() {
			var con = i < pos;
			if (con) {
				flag = true;
				$("#trueOrFalse").text("====> True").addClass("green-color");
				appendNextBtn('ifLastNodeNextEqualToFirst');
			} else {
				$("#trueOrFalse").text("====> False").addClass("red-color");
				$(".introjs-duplicate-nextbutton").remove();
				appendNextBtn('prevNxtEqLstNextText');
			}
			text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
			typing("#appnedSpan", text, function() {
			});
		});
	});
}

function ifLastNodeNextEqualToFirst() {
	var selector, selector1;
	$(".introjs-duplicate-nextbutton").remove();
		if (buttonName == "deleteAtBegin") {
			selector1 = "iflstNtEqFst";
			arrow("#decPrevAndLastNode", "#iflstNtEqFst");
			selector = "prev -> next";
		} else if (buttonName == "deleteAtPosition") {
			if ($("#posVal").text() == 1) {
				selector1 = "iflstNtEqFst";
				arrow("#decPrevAndLastNode", "#iflstNtEqFst");
				selector = "prev -> next";
			} else {
				selector1 = "ifLastNodeNextEqFirst";
				selector = "lastNode -> next";
				arrow("#forLoop", "#ifLastNodeNextEqFirst");
			}
		} else {
			selector1 = "iflstNtEqFst";
			arrow("#ifPosEqOne", "#iflstNtEqFst");
			selector = "lastNode -> next";
		}
		ifFrstToNulText(selector, 'first', function() {
			fromEffectWithTweenMax("#" + selector1, "#ifCondition", true, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
				$('.introjs-duplicate-nextbutton').click(function () {
					ifEqualCondition("#next" + lastnodeCount, '#firstVal');
				});
			});
		});
	//});
}

function ifEqualCondition(value1, value2) {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", $(value1).text(), function() {
		flipEffectWithTweenMax("#second", $(value2).text(), function() {
			var con = $(value1).text() == $(value2).text();
			if (con) {
				$("#trueOrFalse").text("====> True").addClass("green-color");
			} else {
				$("#trueOrFalse").text("====> False").addClass("red-color");
			}
			text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
			typing("#appnedSpan", text, function() {
				if ( buttonName == "deleteAtPosition") {
					if (con) {
						if (flag) {
							appendNextBtn('printNoSuchElement');
						} else {
							appendNextBtn('assignFirstToNull');
						}
					} else {
						if ($("#posVal").text() == 1) {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$('.introjs-duplicate-nextbutton').click(function () {
								whileConText("deleteAtEnd")
							});
						} else {
							appendNextBtn('assnlstToPrev');	
						}
					}
				} else {
					if (con) {
						appendNextBtn('assignFirstToNull');
					} else {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
						$('.introjs-duplicate-nextbutton').click(function () {
							whileConText("deleteAtEnd")
						});
					}
				}
			});
		});
	});
}

function printNoSuchElement() {
	$(".introjs-duplicate-nextbutton").remove();
	printfCount = 4;
	arrow("#ifLastNodeNextEqFirst", "#printf4");
	text = 'There is no such position to delete the node.';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps("#consoleId",'deletedNoElement', 'bottom');
		$('.introjs-nextbutton').show();
	});
}

function lastNodeToPrevNode() {//poorna
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#ifLastNodeNextEqFirst", "#prevEqLastNode");
	text = 'Here, we are assign <span class="ct-code-b-yellow">lastNode</span> to <span class="ct-code-b-yellow">first</span> node.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn("assignNullValue");
		});
}


function assignFirstToNull() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#iflstNtEqFst", "#assnNullTofst", function() {
		text = 'Here, we are assign <span class="ct-code-b-yellow">NULL</span> to <span class="ct-code-b-yellow">first</span> node.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn("assignNullValue");
		});
	});
}

function assignNullValue() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#firstNodeVal").text("NULL");
	zoomInEffect("#firstNodeVal", function() {
		$("#line16").remove();	
		appendNextBtn("printDeletedElement");
	});
}

function printDeletedElement() {
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == "deleteAtBegin") {
		arrow("#assnFstToPrevNxt", "#printf2");
		text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">'
			+ $("#data1").text() +'</span>.'
	} else if (buttonName == "deleteAtPosition") {
		var pos = $("#posVal").text();
		printfCount = 5;
		if ($("#posVal").text() == 1) {
			arrow("#whileLstNotEqFst", "#printf5");
		} else {
			arrow("#prevNxtEqLstNext", "#printf5");
		}
		text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">'
			+ $("#data" + pos).text() +'</span>.'
	} else {
		arrow("#assnNullTofst", "#printf2");
		text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">'
			+ $("#data" + position).text() +'</span>.'
	}
		typing('.introjs-tooltiptext', text, function() {
			if (buttonName == "deleteAtBegin") {
				$("#node1").addClass("blinking");
			} else {
				$("#node" + lastnodeCount).addClass("blinking");
			}
			introNextSteps("#consoleId",'deletedElement', 'bottom');
			$('.introjs-nextbutton').show();
		});
}

function freeNode() {
	$(".introjs-duplicate-nextbutton").remove();
	$("polyline, #line17, #line16, #line10").remove();
	if (buttonName == "deleteAtBegin" ) {
		$("#line15").remove();
		if ($('.node').length == 1) {
			deleteAtBeginNodeIfLengthIsOne();
		} else {
			deleteAtBeginNodeIfLengthNotEqOne();
		}
	} else if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			if ($('.node').length == 1) {
				deleteAtBeginNodeIfLengthIsOne();
			} else {
				deleteAtBeginNodeIfLengthNotEqOne();
			}
		} else if ($("#posVal").text() == $(".node").length) {
			deleteAtEndNode();
			svgCurve("#next" + (lastnodeCount - 1), "#dataDiv1");
		} else {
		//write the remove code here
			TweenMax.to("#node" + lastnodeCount, 0.5, { top : -80, onComplete: function() {
				$("#node" + lastnodeCount).addClass("opacity00").css("top","0");
				$("#line15").remove();
				$(".line").each(function(index){
					$(this).attr('id', ("line" + (index + lastnodeCount)));
				});
				deleteAtFirstNode(lastnodeCount, "#node" + lastnodeCount, function() {  
					lastnodeCount--;
					changeIdsAtBegin(lastnodeCount);
					$(".line").remove();
					setTimeout(function() {
						svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
								"line15", "arrow");
						var len = $(".node").length
						setTimeout(function() {
							svgCurve("#next" + len, "#dataDiv1");
							appendNextBtn("returnFirstNode");
						},500);
						for (var i = 1; i < len; i++) {
							svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#next" + (i), "#dataDiv" + (i + 1), "#svgId",
									"line" + (i), "arrow");
							$("#line" + i).attr("class", "svg-line line");
						}						
					},1200);
				});
			}});
		}
	} else {
		deleteAtEndNode();
	}
}

function deleteAtEndNode() {
	TweenMax.to("#node" + lastnodeCount, 0.5, { top : -80, onComplete: function() {
		$("#node" + lastnodeCount).remove();
		$("#line10, #line17").remove();
		introcode.refresh();
		if ($('.node').length == 0) {
			$("#line15, polyline").remove();
			appendNextBtn("returnFirstNode");
		} else {
			if (buttonName == "deleteAtEnd") {
				nodeCount--;
			}
			$("#line10, #line" + lastnodeCount).remove();
			appendNextBtn("returnFirstNode");
		}
	}});
}

function deleteAtBeginNodeIfLengthIsOne() {
	$("#line1").remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1").remove();
		$("#line15, polyline").remove();
		appendNextBtn("returnFirstNode");
	}});
}

function deleteAtBeginNodeIfLengthNotEqOne() {
	$("#line1").remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1").addClass("opacity00").css("top","0");
		deleteAtFirstNode(1, "#node1", function() {  
			setTimeout(function() {
				lastnodeCount--;
				changeIdsAtBegin(1);
				svgCurve("#next" + lastnodeCount, "#dataDiv1");
				svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", 
						"#svgId","line16", "arrow");
				svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", 
						"#dataDiv" + (lastnodeCount), "#svgId",
										"line10", "arrow", function() {
					$("#line15").remove();
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
							"line15", "arrow", function() {
						appendNextBtn("returnFirstNode");
					});
				});
			},1200);
		});
	}});
}


function returnFirstNode() {
	if (buttonName == "deleteAtPosition") {
		if (printfCount == 5) {
			arrow("#freeNode", "#rtnFst");	
		} else {
			arrow("#printf4", "#returnFirst");
		}
	} else {
		arrow("#freeNode", "#rtnFst");
	}
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').removeClass("hide");
		text = 'The <span class="ct-code-b-yellow">'+ buttonName+'()</span> method return '
				+'<span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">'
				+ $("#firstNodeVal").text() +'</span>.'
		typing('.introjs-tooltiptext', text, function() {
			introNextSteps("#callToDeleteAtEndMethod", 'returnFirstVal', 'bottom');		
			$('.introjs-nextbutton').show();
		});
}
//end deleteAtEnd

//search method function
function searchMethodVariablesDeclaration() {
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>search</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decKeyAndFstNode", "#firstNode", function() {
				$('#firstNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line16").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line16", "arrow");
					}
					$("#extraNode").text("key");
					transferEffect("#decKeyAndFstNode", "#opValDec", function() {
						$('#opVal').text($('#xValInAdd').text());
						fromEffectWithTweenMax('#xValInAdd', '#opVal', false, function() {
							appendNextBtn('declareCurrentAndQNodeText');
						});
					});
				});
			});
		},800);
	});
}

function declareCurrentAndQNodeText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#searchPassValDecl", "#declCurrNodeNdQNode", function() {
		text = 'Here, we are declaring <span class="ct-code-b-yellow">currentNode</span> and <span class="ct-code-b-yellow">'
			+ ' q</span> node and which is initialize it to <span class="ct-code-b-yellow">first</span> node value '
			+'  <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('declareCurrentAndQNodeAnimation');
		});
	});
}

function declareCurrentAndQNodeAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("currentNode", "currentNodeVal", "currentNodeInSearch", "currentNode", function() {
		$("#currentNode").addClass("margin-left30");
		transferEffect("#declCurrNodeNdQNode", "#currentNode", function() {
			$('#currentNodeVal').text($('#firstVal').text());
			fromEffectWithTweenMax('#firstNodeVal', '#currentNodeVal', false, function() {
				if ($('#currentNodeVal').text() != "NULL") {
					$("#line17").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#currentNode", "#dataDiv1", "#svgId", "line17", "arrow");
				}
				declareNodesWhenFunctionCall("qNode", "qNodeVal", "qNodeInSearch", "q", function() {
					$("#qNode").addClass("margin-left30");
					transferEffect("#declCurrNodeNdQNode", "#qNode", function() {
						$('#qNodeVal').text($('#firstVal').text());
						fromEffectWithTweenMax('#firstNodeVal', '#qNodeVal', false, function() {
							if ($('#currentNodeVal').text() != "NULL") {
								$("#line18").remove();
								svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#qNode", "#dataDiv1", "#svgId", "line18", "arrow");
							}
							appendNextBtn('declareCountText');
						});
					});
				});
			});
		});
	});
}

function declareCountText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declCurrNodeNdQNode", "#decCount", function() {
		text ='Here, we are declaring and initializing a <span class="ct-code-b-yellow">count</span>'
				+' value to <span class="ct-code-b-yellow">0</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('declareCountAnimaion');
		});
	});
}

function declareCountAnimaion() {
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect("#decCount", "#countValDec", function() {
		$("#countVal").text(0);
		zoomInEffect("#countVal", function() {
			appendNextBtn('checkIfCurrentNodeEqToNullOrNotText');
		});
	});	
}

function checkIfCurrentNodeEqToNullOrNotText() {
	arrow("#decCount", "#crntNtEqNull", function() {
		$(".introjs-duplicate-nextbutton").remove();
		ifFrstToNulText('currentNode', 'NULL', function() {
			fromEffectWithTweenMax("#crntNtEqNull", "#ifCondition", true, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
				$('.introjs-duplicate-nextbutton').click(function () {
					flipTheCon("#first", $("#firstVal").text(), "NULL")
				});
			});
		});
	});
}

function returnCountValueText(checkText) {
	$(".introjs-duplicate-nextbutton").remove();
	if (checkText == "returnCountValue1") {
		arrow("#crntNtEqNull", "#rtnCountIfNull");
 	} else if (checkText == "returnCountValue2") {
 		arrow("#whileLoopCkeck", "#returnCountIfNotNull");
 	} else {
 		arrow("#ifkeyNtEqNull", "#returnzero");
 	}
	text = 'The <span class="ct-code-b-yellow">searchPosOfEle()</span> function returns the '
			+' <span class="ct-code-b-yellow">count</span> value i.e.'
			+' <span class="ct-code-b-yellow">'+ count +'</span> ';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#callToSearchMethod', 'returnCountVal','bottom');
		$('.introjs-nextbutton').show();
	});
}

function incrementCountText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#crntNtEqNull", "#countInc", function() {
		text = 'The <span class="ct-code-b-yellow">count</span> value <span class="ct-code-b-yellow">'
				+ count +'</span> will be increment by '
				+' <span class="ct-code-b-yellow">one</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('incrementCountAnimation');
		});
	});
}

function incrementCountAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countVal").parent().effect( "highlight",{color: 'blue'}, 500);
	count++;
	flipEffectWithTweenMax("#countVal", count, function() {
		appendNextBtn('assgnToQtoCrrNodeText');
	});
}

function assgnToQtoCrrNodeText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#countInc", "#assgnToQtoCrrNode", function() {
		text = 'The <span class="ct-code-b-yellow">currentNode</span> value <span class="ct-code-b-yellow">'
				+ $('#currentNodeVal').text() +'</span> is stored in <span class="ct-code-b-yellow">q</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('assgnToQtoCrrNodeAnimation');
		});
	});
}

function assgnToQtoCrrNodeAnimation() {
	var node;
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#currentNodeVal', '#qNodeVal', false, function() {
		if ($("#next1").text() == $("#firstVal").text()) {
			node = $("#dataDiv1");
		} else {
			node = $("#dataDiv" + searchCount);
		}
		$("#line18").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#qNode", node, "#svgId", "line18", "arrow", function() {
			appendNextBtn('ifkeyNtEqNullText');
		});
	});
}

function ifkeyNtEqNullText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#assgnToQtoCrrNode", "#ifkeyNtEqNull", function() {
		text = 'Now check the conditon : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="firstCond" class="position"><span id="currNext" class="position">currentNode -> next</span> == '
			+ '<span id="fstVal" class="position">first</span></span>'
			+ ' && <span id="secondCon" class="position"><span id="currData" class="position">currentNode -> data</span>'
			+ ' != <span id="keyVal" class="position">key</span></span> </span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedText"></div>';
		$('.introjs-tooltiptext').text("").append(text);
		$('.introjs-tooltip').removeClass('hide');
		fromEffectWithTweenMax("#ifkeyNtEqNull", "#ifCondition",true, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function () {
				ifConditionForGivenElemetFoundOrNot("#next" + (searchCount), "#firstVal", "#data" 
					+ (searchCount), "#opVal", ($("#next" + (searchCount)).text() == $("#firstVal").text()) 
						, ($("#data" + searchCount).text() != $("#opVal").text()), "ifCondition");
			});
		});
	});
}

function ifConditionForGivenElemetFoundOrNot(selector1, first, selector2, key, firstCon, secondCon, checkNextStep) {
	$(".introjs-duplicate-nextbutton").remove();
	var currentNext = $(selector1).text();
	var first = $(first).text();
	var currentData = $(selector2).text();
	var key = $(key).text();
	flipEffectWithTweenMax("#currNext", currentNext, function() {
		flipEffectWithTweenMax("#fstVal", first, function() {
			if (firstCon) {
				flipEffectWithTweenMax("#currData", currentData, function() {
					flipEffectWithTweenMax("#keyVal", key, function() {
						if (secondCon) { 
							$("#trueOrFalse").text("====> True").addClass("green-color");
							text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ secondCon +'</span>.';
							typing("#appnedText", text, function() {
								if (checkNextStep == "ifCondition") {
									count = 0;
									$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
									$('.introjs-duplicate-nextbutton').click(function () {
										returnCountValueText("returnZero");
									});
								} else {
									searchCount++;
									appendNextBtn('incrementCountText');
								}
							});
						} else {
							$("#trueOrFalse").text("====> False").addClass("red-color");
							text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ secondCon +'</span>.';
							typing("#appnedText", text, function() {
								if (checkNextStep == "ifCondition") {
									appendNextBtn('currToCurrNodeNextText');
								} else {
									$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
									$('.introjs-duplicate-nextbutton').click(function () {
										returnCountValueText("returnCountValue2");
									});
								}
							});
						}
					});
				});
			} else {
				$("#trueOrFalse").text("====> False").addClass("red-color");
				text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ firstCon +'</span>. So no need '
						+ ' to check the <span class="ct-code-b-yellow">currentNode->data != key</span> condition.';
				typing("#appnedText", text, function() {
					appendNextBtn('currToCurrNodeNextText');
				});
			}
		});
	}); 
} 

function currToCurrNodeNextText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#ifkeyNtEqNull", "#currToCurrNodeNext", function() {
		text = 'The <span class="ct-code-b-yellow">currentNode -> next</span> value <span class="ct-code-b-yellow">'
				+ $("#next" + searchCount).text() + '</span> is stored in <span class="ct-code-b-yellow">currentNode</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('currToCurrNodeNextAnimation');
		});
	});
} 

function currToCurrNodeNextAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#next' + count, '#currentNodeVal', false, function() {
		if ($("#next1").text() == $("#firstVal").text() || $("#next" + count).text() == $("#firstVal").text()) {
			node = $("#dataDiv1");
		} else {
			node = $("#dataDiv" + (count + 1));
		}
		$("#line17").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#currentNode", node, "#svgId", "line17", "arrow", function() {
			appendNextBtn('whileLoopCkeckText');
		});
	});
}

function whileLoopCkeckText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#currToCurrNodeNext", "#whileLoopCkeck", function() {
		text = 'Now check the while conditon : <br/>&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="firstCond" class="position"><span id="currNext" class="position">q -> next</span> != '
			+ '<span id="fstVal" class="position">first</span></span>'
			+ ' && <span id="secondCon" class="position"><span id="currData" class="position">q -> data</span>'
			+ ' != <span id="keyVal" class="position">key</span></span> </span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedText"></div>';
		$('.introjs-tooltiptext').text("").append(text);
		$('.introjs-tooltip').removeClass('hide');
		fromEffectWithTweenMax("#whileLoopCkeck", "#whileCondition",true, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function () {
				ifConditionForGivenElemetFoundOrNot("#next" + searchCount, "#firstVal", "#data" 
						+ searchCount, "#opVal", ($("#next" + searchCount) != $("#firstVal").text()) 
						, ($("#data" + searchCount).text() != $("#opVal").text()), "whileLoop");
			});
		});
	});
}//end search method

// addMethod
function storeAddAndData() {
	$(".introjs-duplicate-nextbutton").remove();
	$('#tempNodeVal').text($('#tmpNdeVal').text());
	fromEffectWithTweenMax('#tmpNdeVal', '#tempNodeVal', false, function() {
		$("#line12").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv"+ (nodeCount - 1), 
				"#svgId", "line12", "arrow", function() {
			$("#tmpNde, #line11").remove();
			appendNextBtn('storeXValText');
		});
	});
}

function storeXValText() {
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">x</span> value (<span class="ct-code-b-yellow">'
			+ $("#xValInAdd").text() +'</span>) is store in <span class="ct-code-b-yellow">data</span> member'
			+' of <span class="ct-code-b-yellow">temp</span> node.'
	typing('.introjs-tooltiptext', text, function() {
		arrow("#callTocreateMethod", "#stroreXValInTmpDt", function() {
			appendNextBtn('storeXValAnim');
		});
	});
}

function storeXValAnim() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#data" + (nodeCount - 1)).text($("#xValInAdd").text());
	fromEffectWithTweenMax("#xValInAdd", "#data" + (nodeCount - 1), false, function() {
		appendNextBtn('ifConText');
	});
}

function ifConText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#stroreXValInTmpDt", "#ifFstEqNull", function() {
		ifFrstToNulText('first', 'NULL', function() {
			fromEffectWithTweenMax("#ifFstEqNull", "#ifCondition",true, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
				$('.introjs-duplicate-nextbutton').click(function () {
					flipTheCon("#first", $("#firstVal").text(), "NULL")
				});
			});
		});
	});
}

function flipTheCon(selector1, value1, value2) {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax(selector1, value1, function() {
		var con = value1 == value2 ;
		if (con) {
			$("#trueOrFalse").text("====> True").addClass("green-color");
		} else {
			$("#trueOrFalse").text("====> False").addClass("red-color");
		}
		text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
		typing("#appnedSpan", text, function() {
			if (buttonName == "traverseList") {
				if (con) {
					printfCount = 8;
					introNextSteps("#printf8", "travrsePrntng");
				} else {
					printfCount = 9;
					introNextSteps("#printf9", "travrseLstPrntng");
				}
				$('.introjs-nextbutton').show();
			} else if (buttonName == "count") {
				if (con) {
					appendNextBtn('cntIfRetnSm');
				} else {
					$('#animatinDiv').removeClass('z-index1000000');
					lastnodeCount = nodeCount = 1;
					appendNextBtn('cntSumIncTxt');
				}
			} else if (buttonName == "search") { 
				if (con) {
					if(value2 != "NULL") {
						printfCount = 2;
						introNextSteps("#printf2",'elementNotFound', 'bottom');
						$('.introjs-nextbutton').show();
					} else {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
						$('.introjs-duplicate-nextbutton').click(function () {
							returnCountValueText("returnCountValue1");
						});
					}
				} else {
					if(value2 != "NULL") {
						printfCount = 3;
						introNextSteps("#printf3", 'elementFound', 'bottom');
						$('.introjs-nextbutton').show();
					} else {
						appendNextBtn('incrementCountText');
					}
				}
			} else if (buttonName == "deleteAtEnd" || buttonName == "deleteAtBegin" || buttonName == "deleteAtPosition") {
				if (con) {
					printfCount = 1;
					introNextSteps("#printf1",'deletetionNotPossible', 'bottom');
					$('.introjs-nextbutton').show();
				} else {
					if (buttonName == "deleteAtPosition") {
						printfCount = 2;
						introNextSteps("#printf2",'printPosText', 'bottom');
					} else {
						introNextSteps("#callToDeleteAtEndMethod",'storeReturnValToFirst', 'bottom');
					}
					$('.introjs-nextbutton').show();
				}
			} else {
				appendNextBtn('ifConTrueOrFalseState');
			}
		});
	});
}

function ifConTrueOrFalseState() {
	$(".introjs-duplicate-nextbutton").remove();
	var con = $("#firstVal").text() == "NULL";
	if (con) {
		arrow("#ifFstEqNull", "#streTmpToFst", function() {
			text = 'The <span class="ct-code-b-yellow">Temp</span> value <span class="ct-code-b-yellow">'
					+ $("#tempNodeVal").text() + '</span> is stored in <span class="ct-code-b-yellow">first</span> node.';
			typing('.introjs-tooltiptext' , text, function() {
				appendNextBtn('streTmpValInFst');
			});
		});
	} else {
		whileConText("afterIf");
	}
}
function whileConText(chech) {
	var selector1, selector2;
	$(".introjs-duplicate-nextbutton").remove();
	if (chech == "afterIf") {
		arrow("#ifFstEqNull", "#whileLstNxtNeqFst");
		selector1 = "#whileLstNxtNeqFst";
	} else if (chech == "deleteAtEnd" || chech == "deleteAtPosition") {
		arrow("#iflstNtEqFst", "#whileLstNotEqFst");
		selector1 = "#whileLstNotEqFst";
	} else {
		selector1 = "#whileLstNxtNeqFst";
		arrow("#streLstNxtToLst", "#whileLstNxtNeqFst");
	}
	if (buttonName == "deleteAtPosition") {
		var pos = $("#posVal").text();
		if (pos == 1) {
			selector2 = "lastnode -> next"
		} else {
			selector2 = "prev -> next";
		}
	} else {
		selector2 = "lastnode -> next"
	}
	text = 'Now check the conditon : <br/>&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
		+'<span id="whileLstNxtVal" class="position">'+ selector2 +'</span> != <span id="whileFstVal" class="position">first</span></span>'
		+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax(selector1, "#whileCondition",true, function() {
		appendNextBtn('whileConditionAnimation');
	});
}

function whileConditionAnimation() {
	var countDiv;
	/*if (buttonName == "deleteAtPosition") {
		countDiv = preCount;
	} else {*/
		countDiv = lastnodeCount;
	//}
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#whileFstVal", $("#firstNodeVal").text(), function() {
		flipEffectWithTweenMax("#whileLstNxtVal", $("#next" + countDiv).text(), function() {
			var con = $("#next" + countDiv).text() != $("#firstNodeVal").text();
			if (con) {
				$("#trueOrFalse").text("====> True").addClass("green-color");
			} else {
				$("#trueOrFalse").text("====> False").addClass("red-color");
			}
			text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
			typing("#appnedSpan", text, function() {
				if (buttonName == "addNodes") {
					appendNextBtn('whileConTrueOrFalseState');
				} else if (buttonName == "traverseList") {
					if (con) {
						nodeCount++;
						appendNextBtn('printTempData');
					} else {
						$('#animatinDiv').removeClass('z-index1000000');
						appendNextBtn('prntNxtLne');
					}
				} else if (buttonName == "count") {
					if (con) {
						nodeCount++;
						lastnodeCount++;
						appendNextBtn('cntSumIncTxt');
					} else {
						appendNextBtn('cntIfRetnSm');
					}
				} else if (buttonName == "deleteAtEnd") {
					appendNextBtn('assnlstToPrev');
				} else if (buttonName == "deleteAtBegin") {
					appendNextBtn('whileConTrueOrFalseState');
				} else if (buttonName == "deleteAtPosition") {
					appendNextBtn('whileConTrueOrFalseState');
				}
			});
		});
	});
}

function assnlstToPrev() { //poorna
	$(".introjs-duplicate-nextbutton").remove();
	var con = $("#next" + lastnodeCount).text() != $("#firstNodeVal").text();
	if (con) {
		if (buttonName == "deleteAtPosition") {
			arrow("#ifLastNodeNextEqFirst", "#prevEqLastNode");
		} else {
			arrow("#whileLstNotEqFst", "#assnlstToPrev");
		}
		text = 'The <span class="ct-code-b-yellow">lastNode</span> value <span class="ct-code-b-yellow">'
				+ $("#lastNodeVal").text() +'</span> is stored in <span class="ct-code-b-yellow">pre</span>.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn("assnlstToPrevAnimation");
		});
	} else {
		appendNextBtn('assnFstToPrevNxt');
	}
}

function assnFstToPrevNxt() {
	$(".introjs-duplicate-nextbutton").remove();
	var selector1, selector2;
	if (buttonName == "deleteAtBegin") {
		selector1 = "lastNode -> next";
		selector2 = "whileLstNotEqFst"
	} else if (buttonName == "deleteAtPosition") {
		selector1 = "lastNode -> next";
		if ($("#posVal").text() == 1) {
			selector2 = "assnLstNxtTolst"
		} else {
			selector2 = "whileLstNotEqFst"
		}
	} else {
		selector2 = "whileLstNotEqFst"
		selector1 = "prev -> next";
	}
	arrow("#" + selector2, "#assnFstToPrevNxt");
	text = 'The <span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">'
		+ $("#firstNodeVal").text() +'</span> is stored in <span class="ct-code-b-yellow">'+ selector1 +'</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		appendNextBtn("assnFstToPrevNxtAnimation");
	});
}

function assnFstToPrevNxtAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	var value;
	if (buttonName == "deleteAtBegin") {
		value = lastnodeCount;
	} else if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			value = lastnodeCount;	
		} else {
			value = preCount;
		}
	} else {
		value = lastnodeCount - 1;
	} 
	fadeInBounceEffectWithTimelineMax("#firstNodeVal", $("#next" + value), false, function() {
		$("#line" + value).remove();
		if (buttonName == "deleteAtBegin") {
			svgCurve("#nextDiv" + value, "#dataDiv2");
		} else if (buttonName == "deleteAtPosition") {
			if ($("#posVal").text() == 1) {
				svgCurve("#nextDiv" + value, "#dataDiv2");
			} else {
				svgCurve("#nextDiv" + value, "#dataDiv1");
			}
		} else {
			svgCurve("#nextDiv" + value, "#dataDiv1");
		}
		appendNextBtn("printDeletedElement");
	});
}

function assnlstToPrevAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#prevNodeVal").text($("#lastNodeVal").text());
	fromEffectWithTweenMax("#lastNodeVal", "#prevNodeVal", false, function() {
		$("#line17").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#prevNode", "#dataDiv"+ (lastnodeCount), "#svgId", "line17",
			"arrow", function() {
			preCount = lastnodeCount;
			//if (buttonName == "deleteAtPosition") {//poorna
				appendNextBtn("whileConTrueOrFalseState");
			/*} else {
				appendNextBtn("whileConTrueOrFalseState");
			}*/
	    });     
	});
}

function whileConTrueOrFalseState() {
	$(".introjs-duplicate-nextbutton").remove();
	var selector1 = "lastNext", coutDiv;
	coutDiv = lastnodeCount;
	var con = $("#next" + coutDiv).text() != $("#firstNodeVal").text();
	if (con) {
		if (buttonName == "deleteAtBegin") {
			arrow("#whileLstNotEqFst", "#assnlstToPrev");
		} else if (buttonName == "deleteAtEnd") {
			arrow("#assnlstToPrev", "#assnLstNxtTolst");
		} else if (buttonName == "deleteAtPosition") { 
			selector1 = "lastNode";
			if ($("#posVal").text() != 1) {
				arrow("#prevEqLastNode", "#lstNodeEqLstNxt");
			} else {
				arrow("#whileLstNotEqFst", "#assnlstToPrev");
			}
		} else {
			arrow("#whileLstNxtNeqFst", "#streLstNxtToLst");
		}
		text = 'The <span class="ct-code-b-yellow">'+ selector1 +' -> next</span> value <span class="ct-code-b-yellow">'
				+ $("#next" + coutDiv).text() + '</span> is stored in <span class="ct-code-b-yellow">'+ selector1 +'</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('lstNxtToLst');
		});
	} else {
		if (buttonName == "deleteAtBegin" || buttonName == "deleteAtPosition" ) { 
			appendNextBtn("assnLstNxtTolst");
		} else {
			tempToLastNextText();
		}
	}
}

function assnLstNxtTolst() {
	var selector1;
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			selector2 = "prev -> next";
			selector1 = "#assnLstNxtTolst"; 
		} else {
			selector1 = "#firstEqLastNodeNext";
			selector2 = "lastNode -> next";
		}
	} else {
		selector2 = "prev -> next";
		selector1 = "#firstEqLastNodeNext";
	}
	arrow("#whileLstNotEqFst", selector1, function() {
		text = 'The <span class="ct-code-b-yellow">'+ selector2 +'</span> value <span class="ct-code-b-yellow">'
				+$("#next1").text() +'</span> is stored in <span class="ct-code-b-yellow">first</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('assnLstNxtTolstAnimation');
		});
	});
}

function assnLstNxtTolstAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax("#next1", "#firstNodeVal", false, function() {
		$("#line16").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode",
				"#dataDiv2", "#svgId", "line16", "arrow", function() {
			appendNextBtn('assnFstToPrevNxt');
		});
	})
}

function changeIds(val, elemParent, idAttr) {//changing Ids based on situation
	$(elemParent).each(function(index){
		$(this).attr('id', (idAttr + (index + val)));
	});
}

function changeIdsAtBegin(val, callBackFunction) {
	changeIds(val, $('#dynamicNodes .nodes'), 'node');
	changeIds(val, $('#dynamicNodes .data-nodes'), 'nodeData');
	changeIds(val, $("#dynamicNodes .data-div"), "dataDiv");
	changeIds(val, $("#dynamicNodes .next-div"), "nextDiv");
	changeIds(val, $("#dynamicNodes .data-address"), "dataAddress");
	changeIds(val, $("#dynamicNodes .data-span"), "data");
	changeIds(val, $("#dynamicNodes .next-span"), "next");
	
	if (buttonNames == 'deleteAtBegin' || buttonNames == 'deleteAtEnd' || buttonNames == 'deleteAtPosition') {
		changeIds(val, $('.lines'), 'line');
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

/*
function changePosIds() {
	var len = $(".nodes").length;
	for (var idx = 1; idx <= len; idx++ ) {
        	$("#node" + (idx + 1)).removeAttr("id").attr("id", "node" + (idx));
		    $("#nodedata" + (idx + 1)).removeAttr("id").attr("id", "nodedata" + (idx));
		    $("#dataDiv" + (idx + 1)).removeAttr("id").attr("id", "dataDiv" + (idx));
		    $("#data" + (idx + 1)).removeAttr("id").attr("id", "data" + (idx));
		    $("#nextDiv" + (idx + 1)).removeAttr("id").attr("id", "nextDiv" + (idx));
		    $("#next" + (idx + 1)).removeAttr("id").attr("id", "next" + (idx));
		    $("#dataAddress" + (idx + 1)).removeAttr("id").attr("id", "dataAddress" + (idx));
		    $("#line" + (idx + 1)).removeAttr("id").attr("id", "line" + (idx));
	}
}
*/


function lstNxtToLst() {
	var selector1, countDiv, line;
	lastnodeCount++;
	countDiv = (lastnodeCount - 1);
	selector1 = "lastNode";
	line = "line10"
	$(".introjs-duplicate-nextbutton").remove();
	$("#"+ selector1 +"Val").parent().effect( "highlight",{color: 'blue'}, 500);
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#" + selector1, "#dataDiv"+ countDiv, "#svgId", "line21",
			"arrow", function() {
	  $('#line21').remove();
	  $("#next" + countDiv).parent().effect( "highlight",{color: 'blue'}, 500);
	  fadeInBounceEffectWithTimelineMax('#next' + countDiv, '#'+ selector1 +'Val', false, function() {
	    $("#" + line).remove()
	    svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#" + selector1, "#dataDiv"+ (countDiv + 1), "#svgId",
	    		line, "arrow", function() {
	    	if (buttonName == "deleteAtEnd" || buttonName == "deleteAtBegin") {
	    		$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
				$('.introjs-duplicate-nextbutton').click(function () {
					whileConText("deleteAtEnd")
				});
	    	} else if (buttonName == "deleteAtPosition") { 
	    		if ($("#posVal").text() != 1) {
	    			appendNextBtn("incrementIValue");
	    		} else {
	    			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
					$('.introjs-duplicate-nextbutton').click(function () {
						whileConText("deleteAtEnd")
					});
	    		}
	    	} else {
	    		appendNextBtn('whileConText');
	    	}
	    });
	  })
	});
}

function incrementIValue() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#lstNodeEqLstNxt", "#forLoop"); 
	text = 'Now increment the <span class="ct-code-b-yellow">i</span> value by <span class="ct-code-b-yellow">one</span>.'
	typing('.introjs-tooltiptext' , text, function() {
		i++;
		flipEffectWithTweenMax("#countVal", i, function() {
			appendNextBtn("iConText");//poorna
			
		});	
	});
}

function prevNxtEqLstNextText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#forLoop", "#prevNxtEqLstNext");
	text = 'The <span class="ct-code-b-yellow">lastNode -> next</span> value <span class="ct-code-b-yellow">'
			+ $("#next" + lastnodeCount).text() +'</span> is stored in <span class="ct-code-b-yellow">prev -> next</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-duplicate-nextbutton").remove();
		appendNextBtn('prevNxtEqLstNextTextAnimation');
	});
}

function prevNxtEqLstNextTextAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv" 
		+ lastnodeCount,"#svgId","line50", "arrow", function() {
		$("#line50").remove();
		fadeInBounceEffectWithTimelineMax("#next" + lastnodeCount, "#next" + preCount, false, function() {
			$("#line" + (lastnodeCount - 1) + ", #line" + (lastnodeCount)).remove();
			appendNextBtn("printDeletedElement");
		});
	});
}


function tempToLastNextText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#whileLstNxtNeqFst", "#streTmpToLstNxt", function() {
		text = 'The <span class="ct-code-b-yellow">Temp</span> value <span class="ct-code-b-yellow">'
			+ $("#tempNodeVal").text() + '</span> is stored in <span class="ct-code-b-yellow">lastNode -> next</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('tempToLastNextAnimation');
		});
	});
}

function tempToLastNextAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv"+ (lastnodeCount), "#svgId",
			"line20", "arrow", function() {
		$("#line20").remove();
		$("#next" + lastnodeCount).parent().effect( "highlight",{color: 'blue'}, 500);
		fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#next'+(lastnodeCount), false, function() {
			$("polyline").remove();
			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#nextDiv" + (lastnodeCount), "#dataDiv"
					+ (lastnodeCount + 1), "#svgId", "line"+lineCount, "arrow", function() {
				$("#line" + lineCount).attr("class", "svg-line line");
				lineCount++;
				appendNextBtn('tmpToTmpNxt');
			});
		});
	});
}


function streTmpValInFst() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#firstNodeVal', false, function(){
		$("#line13").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv"+ (nodeCount - 1), "#svgId", "line13", "arrow", function() {
			appendNextBtn('tmpToTmpNxt');	
		});
	});
}

function tmpToTmpNxt() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow('#streTmpToFst', '#streFstToTmpNxt', function() {
		text = 'The <span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">'
				+ $('#firstNodeVal').text() +'</span> is stored in <span class="ct-code-b-yellow">next</span>'
				+ ' member of <span class="ct-code-b-yellow">temp</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('tmpToTmpNxtAnim');	
		});
	});
}

function tmpToTmpNxtAnim() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#firstNodeVal', '#next' + (nodeCount - 1), false, function() {
		svgCurve("#nextDiv" + (nodeCount - 1), "#dataDiv1");
		appendNextBtn('returnFirstText');
	});
}

function returnFirstText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow('#streFstToTmpNxt','#retrnFst', function() {
		text = 'The <span class="ct-code-b-yellow">return</span> statement returns the'
			+' <span class="ct-code-b-yellow">address</span> (i.e. <span class="ct-code-b-yellow">'
			+ $("#firstNodeVal").text() +'</span>)'
			+' stored in <span class="ct-code-b-yellow">temp</span>.';
		typing('.introjs-tooltiptext' , text, function() {
			introNextSteps('#addNodeMethod','returnFirstVal', 'bottom');
			$('.introjs-nextbutton').show();
		});	
	});
}

function displayNodeDataAndNext() {
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect('#mallocMemoryAllocation', '#node'+(nodeCount - 1), function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$(".introjs-duplicate-nextbutton").remove();
			text = 'Now, The <span class="ct-code-b-yellow">address</span> '
					+'(i.e. <span class="ct-code-b-yellow">'+ $("#dataAddress" + (nodeCount - 1)).text() +')</span>'
					+'of the memory allocated '
					+ 'by the <span class="ct-code-b-yellow">malloc()</span> method is '
					+ 'stored in <span class="ct-code-b-yellow">temp</span>.';
			typing('.introjs-tooltiptext' , text, function() {
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
				$(".introjs-duplicate-nextbutton").click(function() {
					$(".introjs-duplicate-nextbutton").remove();
					$("#tmpNdeVal").text($("#dataAddress" + (nodeCount - 1)).text());
					fromEffectWithTweenMax("#dataAddress" + (nodeCount - 1), "#tmpNdeVal", false, function() {
						$("#line11").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tmpNde", "#dataDiv"+ (nodeCount - 1), "#svgId", "line11", "arrow", function() {
							introNextSteps("#asgnToNlToTmp", "tempNextNUll", 'bottom');
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});	
}


function addNodePassedValuesInize() {
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>addNodes</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decFstVar", "#firstNode", function() {
				$('#firstNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line16").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line16", "arrow");
					}
					$("#subVal").text("(addNode)")
					transferEffect("#decXVal", "#xValDecInAdd", function() {
						$('#xValInAdd').text($('#xValInMain').text());
						fromEffectWithTweenMax('#xValInMain', '#xValInAdd', false, function() {
							appendNextBtn('initTempAndLastNodeText');
						});
					});
				});
			});
		},800);
	});
}

function initTempAndLastNodeText() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow("#addMethodDec", "#decTmpNdLstNd", function() {
		text = 'Here, we are declaring two nodes <span class="ct-code-b-yellow">temp</span> and'
				+ ' <span class="ct-code-b-yellow">laseNode</span>, and  the '
				+ '<span class="ct-code-b-yellow">lastNode</span> will initialize to'
				+ ' <span class="ct-code-b-yellow">first</span> value i.e ('
				+ '<span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>) ';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('initTempAndLastNodeAnim');
		});
	});
}

function initTempAndLastNodeAnim() {
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("tempNode", "tempNodeVal", "tempNodeInAddMtd", "temp<sub>addNodes</sub>", function() {
		declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInAddMtd", "lastNode<sub>addNodes</sub>", function() {
			$("#tempNode, #lastNode").addClass("margin-left30");
			transferEffect("#decTmpNdLstNd", "#tempNode", function() {
				transferEffect("#decTmpNdLstNd", "#lastNode", function() {
					$("#firstNodeVal").parent().effect( "highlight",{color: 'blue'}, 500);
					$('#lastNodeVal').text($('#firstNodeVal').text());
					fromEffectWithTweenMax('#firstNodeVal', '#lastNodeVal', false, function() {
						if ($('#lastNodeVal').text() != "NULL") {
							$("#line10").remove();
							svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv"+ (lastnodeCount), "#svgId", "line10", "arrow");
						}
						appendNextBtn('callToCreateMethod');
					});
				}); 
			});
		});
	});
}

function callToCreateMethod() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').removeClass('hide');
	arrow("#decTmpNdLstNd", "#callTocreateMethod", function() {
		text = 'The <span class="ct-code-b-yellow">temp</span> node is initialize with the'
			+ ' address returned by the <span class="ct-code-b-yellow">createNode()</span> method.';
		typing('.introjs-tooltiptext', text, function() {
			introNextSteps("#csllOperations", 'callTocreatMethod', 'right');
			$('.introjs-nextbutton').show();
		});
	});
}//end addMethod
//Traverse
function travrsePassedValInit() {//traverse & count
	$('#animatinDiv').addClass('z-index1000000');
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInTrvrsMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decFstVar", "#firstNode", function() {
				fadeInFromEffectWithTimelineMax("#firstVal", "#firstNodeVal", true, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line26").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line26",
								"arrow", function() {
							appendNextBtn('initTempToFrstText');
						});
					} else {
						appendNextBtn('initTempToFrstText');
					}
				});
			});
		}, 500);
	});
}

function initTempToFrstText() {//traverse & count
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == "traverseList") {
		arrow("#trvrseLstMtdDec", "#travrsrTmpDec", function() {
			travrseCntText();
		});
	} else {
		arrow("#cntMtdDec", "#travrsrTmpDec", function() {
			travrseCntText();
		});
	}
}

function travrseCntText() {//traverse & count
	text = 'Here, we are declaring a <span class="ct-code-b-yellow">temp</span> node and initializing to'
			+ ' <span class="ct-code-b-yellow">first</span> value'
			+ ' (i.e., <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>) ';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('initTempToFrstAnim');
	});
}

function initTempToFrstAnim() {//traverse & count
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("tempNode", "tempNodeVal", "tempNodeInTrvrsMtd", "temp<sub>" + buttonName + "</sub>", function() {
		$("#tempNode").addClass("margin-left30");
		transferEffect("#travrsrTmpDec", "#tempNode", function() {
			fadeInFromEffectWithTimelineMax("#firstNodeVal", "#tempNodeVal", true, function() {
				if ($('#tempNodeVal').text() != "NULL") {
					$("#line30").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv"
							+ (lastnodeCount), "#svgId", "line30", "arrow");
				}
				if (buttonName == "traverseList") {	
					appendNextBtn('doLoopText');
				} else {
					appendNextBtn('cntSumInit');
				}
			});
		});
	});
}

function doLoopText() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow("#travrsrTmpDec", "#doLoop", function() {
		text = 'The <span class="ct-code-b-yellow">do-while loop</span> is an <span class="ct-code-b-yellow">exit-control loop</span>.'
				+ ' This means that the code must always be executed first and then the expression.';
				+ ' is evaluated.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('printTempData');
		});
	});
}

function printTempData() {
	$('.introjs-duplicate-nextbutton').remove();
	if (nodeCount == 1) {
		arrow("#doLoop", "#printf10");
	} else {
		arrow("#travrseWleTmpEqlToFrst", "#printf10");
	}
	text = "Here, we are printing temp(<span class='ct-code-b-yellow'>" + $("#dataAddress" + nodeCount).text() + "</span>) node's data(i.e., "
			+ "<span class='ct-code-b-yellow'>" + $("#data" + nodeCount).text() + "</span>) in console.";
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'printLstElemnts');
		$('.introjs-nextbutton').show();
	});
}

function travrsTmpToTmpNxtAnim() {
	$('.introjs-duplicate-nextbutton').remove();
	$("#tempNodeVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv" 
				+ (nodeCount), "#svgId", "line36", "arrow", function() {
			$("#line36").remove();
			fadeInBounceEffectWithTimelineMax('#next' + (nodeCount), '#tempNodeVal', false, function() {
				$("#line30").remove();
				if ($('#next' + nodeCount).text() != $('#firstVal').text()) {
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv" 
							+ (nodeCount + 1), "#svgId", "line30", "arrow");
				} else {
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv1", 
							 "#svgId", "line30", "arrow");
				}
				if (buttonName == "traverseList") {
					appendNextBtn('travrseWhileCondText');
				} else {
					appendNextBtn('cntWhileCondText');
				}
			});
		});
	});
}

function travrseWhileCondText() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	arrow('#travrseTmpnxtToTmp', '#travrseWleTmpEqlToFrst', function() {
		whileTempEqlFrstTxt(function() {
			lastnodeCount = nodeCount;
			fromEffectWithTweenMax("#trvrsTmpToFrst", "#whileCondition",true, function() {
				appendNextBtn('whileConditionAnimation');
			});
		});
	});
} 

function prntNxtLne() {
	$('.introjs-tooltip').addClass('hide');
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#travrseWleTmpEqlToFrst', '#printf11', function() {
		$("#printf11").effect("highlight", {color: 'blue'}, 500, function() {
			introNextSteps("#consoleId", 'printNextLine');
			introcode.nextStep();
		})
	});
}//End of traverse

function cntSumInit() {//count
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#travrsrTmpDec', '#cntSumDec', function() {
		$("#extraNode").text('sum');
		$("#opVal").text('0').addClass('opacity00');
		var text = 'Here we declare an int variable <span class="ct-code-b-yellow">sum</span> and initialized to'
					+ ' <span class="ct-code-b-yellow">0</span>';
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function() {
				$(this).remove();
				transferEffect('#cntSumDec', '#opValDec', function() {
					zoomInEffect('#opVal', function() {
						appendNextBtn('countIfCondText');
					})
				});
			});
		});
	});
}

function countIfCondText() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	arrow('#cntSumDec', '#cntIfCond', function() {
		ifFrstToNulText('first', 'NULL', function() {
			fromEffectWithTweenMax('#frstToNulCond', '#ifCondition', true, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
				$('.introjs-duplicate-nextbutton').click(function () {
					flipTheCon("#first", $("#firstVal").text(), "NULL")
				});
			});
		});
	});
}

function cntIfRetnSm() {
	$('.introjs-duplicate-nextbutton').remove();
	if ($("#opVal").text() == 0) {
		arrow('#cntIfCond', '#cntIfRetnSm1', function() {
			cntIfRetnSmAnim();
		});
	} else {
		arrow('#cntWleTmpEqlToFst', '#cntIfRetnSm2', function() {
			cntIfRetnSmAnim();
		});
	}
}

function cntIfRetnSmAnim() {
	text = 'The <span class="ct-code-b-yellow">return</span> statement returns <span class="ct-code-b-yellow">sum</span> (i.e. '
		+ '<span class="ct-code-b-yellow">' + $('#opVal').text() +'</span>).';
	typing('.introjs-tooltiptext' , text, function() {
		printfCount = 12;
		introNextSteps('#printf12', 'sumPrintng');
		$("#opVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function() {
				$(this).remove();
				$('#animatinDiv').removeClass('z-index1000000');
				introcode.nextStep();
			});
		});
	});
}

function cntSumIncTxt() {
	$('.introjs-duplicate-nextbutton').remove();
	if ($("#opVal").text() == 0) {
		arrow('#cntIfCond', '#cntElseSmInc', function() {
			cntSumIncremntTxt();
		});
	} else {
		arrow('#cntWleTmpEqlToFst', '#cntElseSmInc', function() {
			cntSumIncremntTxt();
		});
	}
}

function cntSumIncremntTxt() {
	text = 'Now sum value <span class="ct-code-b-yellow">' + (lastnodeCount - 1) + '</span> is incremeted by 1 <span class="ct-code-b-yellow">(i.e., ' 
			+ lastnodeCount + ')</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
		$('.introjs-duplicate-nextbutton').click(function() {
			$(this).remove();
			$('#animatinDiv').addClass('z-index1000000');
			$("#opVal").parent().effect("highlight", {color: 'blue'}, 500);
			flipEffectWithTweenMax('#opVal', lastnodeCount, function() {
				appendNextBtn('cntTmpNxtToTmpAnim');
			});
		})
	});
}

function cntTmpNxtToTmpAnim() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#cntElseSmInc', '#cntTmpNxtToTmp', function() {
		tmpNxtToTmpText();
	});
}

function cntWhileCondText(){//count
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	arrow('#cntTmpNxtToTmp', '#cntWleTmpEqlToFst', function() {
		whileTempEqlFrstTxt(function() {
			fromEffectWithTweenMax("#cntTmpToFrst", "#whileCondition",true, function() {
				appendNextBtn('whileConditionAnimation');
			});
		});
	})
}

function ifFrstToNulText(text1, text2, callBackFunction) {
	text = 'Now check the conditon : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="first" class="position">' + text1 +'</span> == <span id="second" class="position">'+ text2 + '</span></span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	if (typeof  callBackFunction === "function") {
		callBackFunction();
	}
}

function tmpNxtToTmpText() {//travese & count
	text = 'The <span class="ct-code-b-yellow">temp -> next</span> value (i.e., '
		+ '<span class="ct-code-b-yellow">' + $("#next" + lastnodeCount).text() + '</span>) is stored in '
		+ '<span class="ct-code-b-yellow">temp</span> node.';
	typing('.introjs-tooltiptext', text, function() {
		$('#animatinDiv').addClass('z-index1000000');
		appendNextBtn('travrsTmpToTmpNxtAnim');
	});
}

function whileTempEqlFrstTxt(callBackFunction) {//traverse & count
	text = 'Now check the conditon : <br/>&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
		+ '<span id="whileLstNxtVal" class="position">temp</span> != <span id="whileFstVal" class="position">first</span></span>'
		+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function butnStepWithTime() {
	introNextSteps("#buttonDiv", "showButtons", 'bottom');
	setTimeout(function() {
		introcode.nextStep();
	}, 800);
}

function buttonCorrespondingText(nextStepName) {
	$('.displayCode, .outputCount1').addClass('opacity00').empty();
	$('.intValues, .intVariables').addClass('opacity00');
	buttonName = nextStepName;
	introNextSteps("#inMain", nextStepName, "right");
	introcode.nextStep();
}

function addNegativeValuEvent(selector) {
	$(selector).on("keydown keyup", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val() == "-1") {
			$('.introjs-nextbutton').show();
			$("input").attr("disabled", true);
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ($(this).val().length < 1 && (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173)) {
			return;
		}
		if ($(this).val().length >= 1 && (e.keyCode == 49 || e.keyCode == 97))  {
			return;
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Enter -1 only.</div>');
			e.preventDefault();
		}
	});
}


function events(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
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
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		var firstCon = $(this).val().length > 0 && (!$(this).val().startsWith('-'));
		var secondCon = $(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1 
		if (firstCon || secondCon) {
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introcode.nextStep();
			}
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter any integer.</div>');
			$('.introjs-nextbutton').hide();
		}
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
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
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth())
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	TweenMax.to(".arrow", 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	$(selector2).removeClass('opacity00')
	if (!flag) {
		$(selector1).addClass('z-index1000000').parent().effect( "highlight",{color: 'blue'}, 500);
		//$(selector2).text($(selector1).text());
	} else {
		$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500);
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 800 , function() {
			$(selector1).removeClass('z-index1000000');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

function toEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	$(selector2).offset({top: l1.top, left: l1.left});
	$(selector1).addClass("opacity00").removeAttr("style")
	TweenMax.to($(selector2), 0.3, {opacity: 1, top: 0, left: 0, onComplete: function() {
		$(selector2).removeAttr("style").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introcode.nextStep();
	}, 1000);
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introcode.insertOption(introcode._currentStep + 1, options);
	introcode._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}


function appendNextBtn(value) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton" onclick="' + value + '()">Next &#8594;</a>');
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function fadeInFromEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	if (!flag) {
		$(selector1).effect( "highlight",{color: 'blue'}, 500);
	} else {
		$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
	}
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
		if(!flag) {
			$(selector2).text($(selector1).val());
		} else {
			$(selector2).text($(selector1).text());
		}
		timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 1, {opacity: 0, onComplete: function() {
			$("#animationDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.8");
}


function fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#animatinDiv").append("<span id='dummy' class='ct-green-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
    if (flag) {
			val = $(selector2).text($(selector1).val());
	} else {
			val = $(selector2).text($(selector1).text());
	}
    TweenLite.from($(selector2), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :0.5});
	    TweenLite.to($("#dummy"), 0.8, { ease: Sine.easeOut, left:-150 , delay :1.8, opacity:0 , onComplete: function() {
	    	introcode.refresh();
	    	$("#dummy").remove();
	    	if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	    }});
}

function svgCurve(selector1, selector2) {
	$("polyline").remove();
	var x = ($(selector1).offset().left - $("#animatinDiv").offset().left) + $(selector1).width();
	var y = ($(selector1).offset().top - $("#animatinDiv").offset().top) + $(selector1).outerHeight() / 2;
	var x1 = x + ($(selector1).outerWidth() / 2);
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.5);
	var x3 = ($(selector2).offset().left - $("#animatinDiv").offset().left) - ($(selector2).outerWidth() / 2);;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($(selector2).offset().top - $("#animatinDiv").offset().top) + $(selector2).outerHeight() / 2;
	var x5 = ($(selector2).offset().left - $("#animatinDiv").offset().left);
	var y5 = y4; 		
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line");
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	//line.setAttribute("points", points);
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("polyline", 1, {attr: {points : points}});
	},500);
	
}

function deleteAtFirstNode(count, nodeId, callBackFunction) {
	if (count <= ($("line").length + 2)) {
		var x1 = (parseFloat($("line").eq(count - 1).attr("x1")) - 120);
		var x2 = (parseFloat($("line").eq(count - 1).attr("x2")) - 120);
		TweenMax.to($("line").eq(count - 1), 1, {attr : {"x1" : x1, "x2" : x2 }});
		TweenMax.to($("#dynamicNodes .nodes").not(nodeId).eq(count - 1), 1, {left : "-120px", onComplete: function() {
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
