var buttonNames = ["CREATE", "DISPLAY", "ADDITION", "SUBTRACTION", "MULTIPLICATION"];
var buttonName;
var arr = [];
var createMethodCallCount = outputCount = nodeCount = p1Count = p2Count = 1;
var introjs;

function polyAnimationFunction() {
	lang = getURLParameter("lang");
	appendButtons();
	createDynamicNodes("#temparyPolyNode", nodeCount);
	createDynamicNodes("#temparyPolyNodeForAddSunAndMull", 2000);
	preStructTypeList();
	introFunction();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	
	//$(".opacity00").removeClass("opacity00");
}

function preStructTypeList() {
	var structCode = '<span id="strcutSpan">struct polynomial {\n'
		+ '\tint coeff;\n'
		+ '\tint exp;\n'
		+ '\tstruct polynomial *next;\n'
		+ '};</span>\n'
		+ '<span id="typeDefDec">typedef struct polynomial *poly;</span>\n'
		+ '<span id="nodeDec">poly head1, head2, result;</span>\n'
	$("#structTypelist").addClass("opacity00").text('').append(structCode);
}

function preMain() {
	var mainCodeForCreate = '<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
		+ '<span id="printf1">printf("Enter 1st polynomial: \\n");</span>\n'
		+ '<span id="assignHead1ToNull">head1 = NULL;</span>\n'
		+ '<span id="callCreateMethos1">head1 = create(head1);</span>\n'
		+ '<span id="printf2">printf("Enter 2nd polynomial: \\n");</span>\n'
		+ '<span id="assignHead2ToNull">head2 = NULL;</span>\n'
		+ '<span id="callCreateMethos2">head2 = create(head2);</span>'
	$("#inMain").addClass("opacity00").text('').append(mainCodeForCreate);
}

function preCreateMethodCodeDisplay() {
	var preCodeForCreateMethod = '<div id="createMethodDef">'
		+ '<span id="nameOfCreateMthd">poly create(poly head) {</span>\n'
        + '\t<span id="varDecInCreate"><span id="tempNodeInCreateMthd">poly temp;</span>\n'
        + '\t<span id="decChInCreateMthd">char ch;</span>\n'
        + '\t<span id="decCoeffExpInCreateMthd">int coeff, exp;</span></span>\n'
        + '\t<span id="doWhileInCreate">do {\n'
                + '\t\t<span id="MemoryAllocateInCreateMthd">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
                + '\t\t<span id="printNdReadCoeffNdExpInCreateMthd"><span id="printCoeffNdExpVal">printf("Enter coeff, exp of node : ");'
                + '</span>\n'
                + '\t\t<span id="readCoeffNdExpVal">scanf("%d %d\\n", &coeff, &exp);</span></span>\n'
                + '\t\t<span id="fillCoeffExpNextFieldsInCreateMthd"><span id="storeCoeffValToTempCoeff">temp -> coeff = coeff;</span>\n'
                + '\t\t<span id="storeExpValToTempExp">temp -> exp = exp;</span>\n'
                + '\t\t<span id="storeNullToTemoNext">temp -> next = NULL;</span></span>\n'
                + '\t\t<span id="callAddTermMethod">head = addTerm(head, temp);</span>\n'
                + '\t\t<span id="wantToInsertAnotherNode"><span id="printChconformationMsg">printf("Do u want another node(y/n) : ");</span>\n'
                + '\t\t<span id="readChVal">scanf("%c\\n", &ch);</span></span>\n'
        + '\t}<span id="whileLoopToInsertAnotherNode"> while(ch != \'n\');</span></span>\n'
        + '\t<span id="returnHeadInCreateMthd">return head;</span>\n'
		+ '}</div>';
	$("#polyOperationsDivPre").addClass("opacity00").empty("").append(preCodeForCreateMethod);
}

function preAddTermMethodCodeDisplay() {
	var preCodeforAddtermMethod = '<div id="addTermMethodDef">'
		+ '\t<span id="nameOfAddTermMthd">poly addTerm(poly head, poly temp) {</span>\n'
		+ '\t<span id="varDecInAddTerm">poly p1,p2;</span>\n'
		+ '\t<span id="p1P2InitializeInAddTerm">p1 = p2 = head;</span>\n'
		+ '\t<span id="ifp1EqualToNullInAddTermFirstIf">if(p1 == NULL) {</span>\n'
			+'\t\t<span id="tempToHeadIfP1EqNullInAddTerm">head = temp;</span>\n'
		+ '\t} else {\n'
			+ '\t\t<span id="whileLoopInAddTerm">while(p1 != NULL && p1 -> exp > temp -> exp) {</span>\n'
				+ '\t\t\t<span id="p1ToP2InAddTermWhileLoop">p2 = p1;</span>\n'
				+ '\t\t\t<span id="p1NxtTop1InAddTermWhile">p1 = p1 -> next;</span>\n'
			+'\t\t}\n'
			+ '\t\t<span id="ifp1EqualToNullInAddTerm">if(p1 == NULL) {</span>\n'
				+ '\t\t\t<span id="tempToP2NxtInAddTerm">p2 -> next = temp;</span>\n'
			+ '\t\t<span id="ifP1ExpEqToTempExpInAddTerm">} else if(p1 -> exp == temp -> exp) {</span>\n'
				+ '\t\t\t<span id="addp1CoeffTempCoeffNdStoreP1CoeffInAddTerm">p1 -> coeff = p1 -> coeff + temp -> coeff;</span>\n'
			+ '\t\t<span id="ifP1ExpLessThanTempExpInAddTerm">} else if(p1 -> exp < temp -> exp) {</span>\n'
				+ '\t\t\t<span id="ifP2EqP2InAddTerm">if(p2 == p1) {</span>\n'
					+ '\t\t\t\t<span id="p1ToTempNextInAddTerm">temp -> next = p1;</span>\n'
					+ '\t\t\t\t<span id="tempToHeadInAddTerm">head = temp;</span>\n'
				+'\t\t\t} else {\n'
					+ '\t\t\t\t<span id="p1ToTempNextInAddTerm">temp -> next = p1;</span>\n'
					+ '\t\t\t\t<span id="tempToP2NextInAddTerm">p2 -> next = temp;</span>\n'
				+ '\t\t\t}\n'
			+ '\t\t}\n'
		+ '\t}\n'
		+ '\t<span id="returnHeadInAddTerm">return head;</span>\n'
	+'}\n</div>';
	$("#polyOperationsPre").empty().addClass("opacity00").append(preCodeforAddtermMethod);
}

function introFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		showBullets : false,
		steps : [{
			element: '#headdingSection',
			intro: '',
		},{
			element:'#structTypelist',
			intro: '',
			tooltipClass : "hide",
		},{
			element:'#strcutSpan',
			intro: '',
			tooltipClass : "hide",
		}]
	});
	introjs.onafterchange(function (targetElement) {
			introjs.refresh();
			$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			var elementId = targetElement.id;
			switch (elementId) {
				case "structTypelist" :
					$("#structTypelist").removeClass("opacity00");
					introjs.refresh();
					$("#structTypelist, #explanationDiv").removeClass("opacity00");
					setTimeToIntroGoNextStep();
				break;
				case "strcutSpan":
					$('.introjs-tooltip').removeClass('hide');
					var text = "This is the declaration of a new <y>struct</y> type <y>polynomial</y>.<br><br>"
								+ "<ul><li><y>coeff</y> field is used to hold the <y>coefficient</y> inside the linked list.</li>"
								+ "<li><y>exp</y> field is used to hold the <y>Exponent </y> inside the linked list.</li>"
								+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#typeDefDec");
						$('.introjs-nextbutton').show();
					});
				break;
				case "typeDefDec" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>poly</y> to the '
							+ '<y>struct polynomial</y> which is a <y>pointer</y>.'
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#nodeDec");
						$('.introjs-nextbutton').show();
					});
				break;
				case "nodeDec" :
					$(".introjs-tooltip").removeClass("hide");
					var text = "Declare <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and <y>result</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#animationDiv", "headsDeclaration")
						$(".introjs-nextbutton").show();
					});
				break;
				case "animationDiv" :
					$("#animationParent").removeClass("opacity00");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "headsDeclaration" :
							zoomInEffect("#head1", function() {
								zoomInEffect("#head2", function() {
									zoomInEffect("#result", function() {
										customIntroNxtStep("#buttonsDiv");
									});
								});
							});
						break;
						case "initializeHead"+ createMethodCallCount +"ToNull" :
							$("#head"+ createMethodCallCount  +"Val").parent().effect( "highlight",{color: 'blue'}, 500);
							$("#head"+ createMethodCallCount +"Val").text("NULL").addClass("opacity00");
							zoomInEffect("#head"+ createMethodCallCount  +"Val", function() {
								customIntroNxtStep("#callCreateMethos"+ createMethodCallCount, "callCreateMethod");
							});
						break;
						case "variableDecInCreateMthd" :
							$(".background-color-yellow").addClass("z-index1000000");
							zoomInEffect("#head", function() {
								$("#headVal").text($("#head"+ createMethodCallCount +"Val").text());
								fromEffectWithTweenMax("#head"+ createMethodCallCount +"Val", "#headVal", false, function() {
									zoomInEffect("#temp", function() {
										zoomInEffect("#chValeDec", function() {
											zoomInEffect("#coeffValeDec", function() {
												zoomInEffect("#expValeDec", function() {
													$(".background-color-yellow").removeClass("z-index1000000 background-color-yellow");
													customIntroNxtStep("#polyOperationsDivPre", "callDoWhileLoop", "right")
												});
											});
										});
									});
								});
							});
						break;
						case "memoryAllocationAndPrintReadCoeffAndExpVal" :
							$("#MemoryAllocateInCreateMthd").addClass("z-index1000000");
							$("#temparyPolyNode, #temparyPolyNode .nodes").removeClass("opacity00")
							$("#tempVal").text($("#temparyPolyNode #dataAddress"+ nodeCount).text());
							fromEffectWithTweenMax("#temparyPolyNode #dataAddress"+ nodeCount, "#tempVal", false, function() {
								$("#tempLine").remove();
								svgAnimatingLineRightToLeft("#animationDiv", "#tempDiv", "#temparyPolyNode #coeffDiv" + nodeCount, "#svgId", "tempLine", "arrow", function() {
									customIntroNxtStep("#consoleId", "printAndReadCoeffNdExpValues", "left");
								});
							});
						break;
						case "storeCoeffAndExpsValues" :
							$("#val" + outputCount).remove();
							$("#outputCoeffAndExpValue" + outputCount).append("<span id='outputCoeff"+ outputCount +"' class='position'>"+ arr[0] 
									+"</span>  <span id='outputExp"+ outputCount +"' class='position'>"+ arr[1] +"</span>");
							$("#coeffVal").text(arr[0]).removeClass("opacity00");
							fromEffectWithTweenMax("#outputCoeff"+ outputCount, "#coeffVal", false, function() {
								$("#expVal").text(arr[1]).removeClass("opacity00");
								fromEffectWithTweenMax("#outputExp"+ outputCount, "#expVal", false, function() {
									customIntroNxtStep("#polyOperationsDivPre", "codeForStoreCoeffExpAndNext", "right");
								});
							});
						break;
						case "fillTheTempNodeWithCoeffExpAndNextField":
							$(".background-color-yellow").addClass("z-index1000000");
							$("#temparyPolyNode #coeff" + nodeCount).text(arr[0]);
							$("#temparyPolyNode #exp" + nodeCount).text(arr[1]);
							$("#temparyPolyNode #next" + nodeCount).text("NULL");
							fromEffectWithTweenMax("#coeffVal", "#temparyPolyNode #coeff" + nodeCount, false, function() {
								fromEffectWithTweenMax("#expVal", "#temparyPolyNode #exp" + nodeCount, false, function() {
									zoomInEffect("#temparyPolyNode #next" + nodeCount, function() {
										customIntroNxtStep("#polyOperationsDivPre", "callToAddTermMethod", "right");
										
									});
								});
							});
						break;
						case "variableDecInAddTermMthd":
							$(".background-color-yellow").addClass("z-index1000000");
							zoomInEffect("#p1", function() {
								zoomInEffect("#p2", function() {
									addTermP1AndP2PointerVarDec();
								});
							});
						break;
						case "addTermP1EqNullFirstIf" :
							$(".background-color-yellow").addClass("z-index1000000");
							$("#tempDiv").effect( "highlight",{color: 'blue'}, 500);
							fadeInBounceEffectWithTimelineMax("#tempDiv", "#headVal", "left", function() {
								nodeCount++;
								orderingNodes(nodeCount - 1, (createMethodCallCount == 1) ? "#firstList" : "#secondList");
							});
						break;
						case "storeChValue" :
							var val = $("#yesOrNoVal" + outputCount).val();
							$("#chVal").text(val).removeClass("opacity00");
							fromEffectWithTweenMax("#yesOrNoVal"+ outputCount, "#chVal", false, function() {
								customIntroNxtStep("#polyOperationsDivPre", "checkWhileChIsYOrNo", "right");
							});
						break;
						case "returnHeadVal":
							var selector = (createMethodCallCount == 1) ? "#firstList #coeffDiv1" : "#secondList #coeffDiv1"; 
							var pos = (createMethodCallCount == 1) ? "top" : "bottom"; 
							fadeInBounceEffectWithTimelineMax("#headVal", "#head"+ createMethodCallCount +"Val", pos, function() {
								svgAnimatingLineRightToLeft("#animationDiv", "#head"+ createMethodCallCount +"Div", selector, "#svgId", "head"
										+ createMethodCallCount +"Line", "arrow", function() {
									$("#headVal, #head").addClass("opacity00");
									$("#headLine").remove();
									nodeCount = p1Count = p2Count = 1;
									createMethodCallCount++;
									customIntroNxtStep((createMethodCallCount == 2) ? "#printf2" : "#buttonsDiv");
									/*if (createMethodCallCount == 2) {
										customIntroNxtStep("#printf2");
									} else {
										customIntroNxtStep("#buttonsDiv");
									}*/
								});
							});
						break;
						case "p1AndTempCoeffSame" :
							$(".background-color-yellow").addClass("z-index1000000");
							var selector = (createMethodCallCount == 1) ? "#firstList #coeff"+ p1Count : "#secondList #coeff" + p1Count;
							var value  = parseInt($("#temparyPolyNode #coeff"+ nodeCount).text());
							$("#p1Div").effect( "highlight",{color: 'blue'}, 500, function() {
								var parentSelector = (createMethodCallCount == 1) ? "#firstList" : "#secondList"
								if (createMethodCallCount == 1) {
									svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", parentSelector +" #nextDiv" 
											+ p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
										$("#p1LineDuplicate").remove();
										$(parentSelector + " #coeff" + p1Count).effect( "highlight",{color: 'blue'}, 500, function() {
											addTermAdditionAnimation(selector, value);
										});
									});
								} else {
									svgAnimatingLineBottomToTop("#animationDiv", "#p1Div", parentSelector +" #nextDiv" 
											+ p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
										$("#p1LineDuplicate").remove();
										$(selector + " #coeff" + p1Count).effect( "highlight",{color: 'blue'}, 500, function() {
											addTermAdditionAnimation(selector, value);
										});
									});
								}
							});
						break;
						case "addTermWhileLoopAnimation" :
							$(".background-color-yellow").addClass("z-index1000000");
							p1Count = p2Count = 1;
							var selector = (createMethodCallCount == 1) ? "#firstList" : "#secondList"
							whileLoopAnimationFunction(selector);
						break;
						case "storeTempToP2NextAnimation" :
							var selector = (createMethodCallCount == 1) ? "#firstList" : "#secondList"
							$("#tempDiv").effect( "highlight",{color: 'blue'}, 500, function() {
								if (createMethodCallCount == 1) {
									svgAnimatingLineTopToBottom("#animationDiv", "#p2Div", selector +" #nextDiv" 
											+ p2Count, "#svgId", "p2LineDuplicate", "arrow", function() {
										$("#p2LineDuplicate").remove();
										fadeInBounceEffectWithTimelineMax("#tempVal", selector + " #next" + p2Count, "top", function() {
											console.log("nodeCount in while after : " + nodeCount);
											nodeCount++;
											orderingNodes(nodeCount - 1, selector);
										});
									});
								} else {
									svgAnimatingLineBottomToTop("#animationDiv", "#p2Div", selector +" #nextDiv" 
											+ p2Count, "#svgId", "p2LineDuplicate", "arrow", function() {
										$("#p2LineDuplicate").remove();
										fadeInBounceEffectWithTimelineMax("#tempVal", selector + " #next" + p2Count, "top", function() {
											console.log("nodeCount in while after : " + nodeCount);
											nodeCount++;
											orderingNodes(nodeCount - 1, selector);
										});
									});
								}
							});
						break;
					}
				break;
				case "buttonsDiv" :
					buttonsClick();
				break;
				case "inMain" :
					$("#inMain").removeClass("opacity00");
					if (buttonName == "create") {
						customIntroNxtStep("#printf1");
					}
				break;
				case "printf" + createMethodCallCount :
					customIntroNxtStep("#consoleId", "print"+ createMethodCallCount +"PolyText", "left");
				break;
				case "consoleId" :
					$("#consoleId").removeClass("opacity00");
					$("#structTypelist").addClass("hide");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "print"+ createMethodCallCount +"PolyText":
							var printText;
							if (createMethodCallCount == 1) {
								printText = "<div id='outputText"+ createMethodCallCount +"'>Enter 1st polynomial: </div>";
							} else {
								printText = "<span id='outputText"+ createMethodCallCount +"'>Enter 2nd polynomial: </span>";
							}
							$("#consoleBodyDiv").append(printText);
							$("#consoleBodyDiv").scrollTo("#outputText"+ createMethodCallCount);
							customIntroNxtStep("#assignHead"+ createMethodCallCount +"ToNull");
						break;
						case "printAndReadCoeffNdExpValues" :
							$('.introjs-tooltip').removeClass("hide");
							$("#MemoryAllocateInCreateMthd").removeClass("z-index1000000");
							$("#printCoeffNdExpVal, #readCoeffNdExpVal").addClass("z-index1000000");
							$('.output-console-body').append('<div id="outputCoeffAndExpValue'+ outputCount + '">Enter coeff, exp of node : '
									+ ' <span id="input'+ outputCount+ '"><input class="output-scanf-line input" '
									+ 'id="val'+ outputCount+ '" size="15" maxlength="6"/></span></div>');
							$('#val' + outputCount).focus();
							var text = "Enter <y>coefficient</y> and <y>exponent</y> of the <y>polynomial</y> each separated number "
									+ "by a <y>space</y>.";
							typing(".introjs-tooltiptext",text,function() {
								$("#consoleBodyDiv").scrollTo("#outputCoeffAndExpValue"+ outputCount);
								introNextSteps("#animationDiv","storeCoeffAndExpsValues");
								readCoeffAndExpValuesFromConsole("#val" + outputCount);
							});
						break;
						case "printAndReadChValues" :
							$('.introjs-tooltip').removeClass("hide");
							$('.output-console-body').append('<div id="yesOrNoText'+ outputCount+ '">Do u want another node(y/n): '
									+ ' <div class="position" id="yesOrNoDiv'+ outputCount+ '"><input class="output-scanf-line input" '
									+ 'id="yesOrNoVal'+ outputCount+ '" size="15" maxlength="2"/></div></div>');
							$('#yesOrNoVal' + outputCount).focus();
							if (nodeCount < 5) {
								var text = "Enter <y>y/n</y> (or) <y>Y/N</y> to continue to insert node into the list.";
							} else {
								var text = "Enter <y>n</y> (or) <y>N</y> to exit the node insertion becauses here we restricted to allow only "
											+ " <y>4</y> nodes in the list).";
							}
							$("#consoleBodyDiv").scrollTo("#yesOrNoText"+ outputCount);
							$('.introjs-tooltip').removeClass("hide");
							typing(".introjs-tooltiptext",text,function() {
								introNextSteps("#animationDiv","storeChValue");
								readYesOrNoFromConsole('#yesOrNoVal' + outputCount);
							});
						break;
					}
				break;
				case "assignHead"+ createMethodCallCount +"ToNull" :
					$(".introjs-tooltip").removeClass("hide");
					if (buttonName == "create") {
						var text = "Initialize <y>head"+ createMethodCallCount +"</y> to <y>NULL</y>.";
						typing(".introjs-tooltiptext", text, function() {
							introNextSteps("#animationDiv", "initializeHead"+ createMethodCallCount +"ToNull");
							$(".introjs-nextbutton").show();
						});
					}
				break;
				case "callCreateMethos"+ createMethodCallCount :
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "callCreateMethod" :
							$(".introjs-tooltip").removeClass("hide");
							var text = "<ul><li>Call the <y>create()</y> method with argument <y>head"+ createMethodCallCount +"</y> "
										+ "(<y>NULL</y>).</li><li>The <y>return</y> value of the <y>create(</y>) method will be stored in "
										+ "<y>head"+ createMethodCallCount +"</y>.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#polyOperationsDivPre", "createMethodVarDec", "right");
								$(".introjs-nextbutton").show();
							});
						break;
						case "returnHead" :
							$("#polyOperationsDivPre").empty().addClass("opacity00");
							$(".arrow, #tempLine").remove();
							$(".intValues, .intVariables, #tempVal, #temp").addClass("opacity00");
							p1Count = p2Count = 1;
							customIntroNxtStep("#animationDiv", "returnHeadVal");
						break;
					}
					
				break;
				case "polyOperationsDivPre" :
					$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "createMethodVarDec":
							preCreateMethodCodeDisplay();
							$("#polyOperationsDivPre").removeClass("opacity00");
							introjs.refresh();
							$(".introjs-tooltip").removeClass("hide");
							createMethodAnimationFunction();
						break;
						case "callDoWhileLoop":
							$(".background-color-yellow").removeClass("z-index1000000 background-color-yellow");
							memoryAllocationOfTemp("ul");
						break;
						case "codeForStoreCoeffExpAndNext":
							var text = "Store the <y>coeff</y> value (<y>"+ arr[0] +"</y>) to the <y>coeff</y> field of <y>temp</y>.";
							tooltipBooletsAppendAndTypeText("#readCoeffNdExpVal", "#storeCoeffValToTempCoeff", text, "ul", function() {
								var text = "Store the <y>exp</y> value (<y>"+ arr[1] +"</y>) to the <y>exp</y> field of <y>temp</y>.";
								tooltipBooletsAppendAndTypeText("#storeCoeffValToTempCoeff", "#storeExpValToTempExp", text, "li", function() {
									var text = "Store <y>NULL</y> to the <y>next</y> field of <y>temp</y>.";
									tooltipBooletsAppendAndTypeText("#storeExpValToTempExp", "#storeNullToTemoNext", text, "li", function() {
										introNextSteps("#animationDiv", "fillTheTempNodeWithCoeffExpAndNextField");
										$(".introjs-nextbutton").show();
									});
								});
							});
						break;
						case "callToAddTermMethod":
							$("#callAddTermMethod").addClass("background-color-yellow");
							var text = "The <y>addTerm()</y> method is used to arrange the <y>polynomial</y> in an <y>order</y>.";
							tooltipBooletsAppendAndTypeText("#storeNullToTemoNext", "#callAddTermMethod", text, "ul", function() {
								var text = "Call the <y>addTerm()</y> method with arguments <y>head</y> (<y>"+ $("#head"
										+ createMethodCallCount +"Val").text() + "</y>) and <y>temp</y> (<y>"+ $("#tempVal").text() +"</y>)."
								tooltipBooletsAppendAndTypeText("#callAddTermMethod", "#callAddTermMethod", text, "li", function() {
									introNextSteps("#polyOperationsPre", "addTermVariablesDec", "right");
									$(".introjs-nextbutton").show();
								});
							});
						break;
						case "storeRtnValueOfAddTerm" :
							$("#polyOperationsPre").empty();
							$("#p1, #p1Val, #p2, #p2Val, #polyOperationsPre").addClass("opacity00");
							$("#p1Line, #p2Line").remove();
							p1Count = p2Count = 1;
							introjs.refresh();
							$("#callAddTermMethod").addClass("background-color-yellow");
							arrow("#callAddTermMethod", "#callAddTermMethod", function() {
								$("#callAddTermMethod").removeClass("background-color-yellow");
								var text = "Print <y>Do u want another node(y/n) : </y> text into the console.";
								tooltipBooletsAppendAndTypeText("#callAddTermMethod", "#printChconformationMsg", text, "ul", function() {
									var text = "Read the <y>ch</y> values from the keyboard.";
									tooltipBooletsAppendAndTypeText("#printChconformationMsg", "#readChVal", text, "li", function() {
										outputCount++;
										introNextSteps("#consoleId", "printAndReadChValues", "left");
										$(".introjs-nextbutton").show();
									});
								});
							});
						break;
						case "checkWhileChIsYOrNo" :
							var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
								+ '<span class="position" id="tooltipChVal">ch</span> != \'n\'</span>';
							$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
							arrow("#readChVal", "#whileLoopToInsertAnotherNode", function() {
								$("#whileLoopToInsertAnotherNode").addClass("background-color-yellow");
								$(".introjs-tooltip").removeClass("hide");
								travel("#whileLoopToInsertAnotherNode", "#tooltipCndtn", function() {
									flipEffectWithTweenMax("#tooltipChVal", $("#chVal").text(), function() {
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										if ($("#chVal").text() != "n") {
											var text = "Since it evaluates to <y>true</y>."
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												appendDuplicateNextBtnUsingClickFunction("", false, function() {
													$("#whileLoopToInsertAnotherNode").removeClass("background-color-yellow");
													memoryAllocationOfTemp("li");
												});
											});
										} else {
											text = "Since it evaluates to <r>false</r>."
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												$("#whileLoopToInsertAnotherNode").removeClass("background-color-yellow");
												var text = "Return <y>head</y> value <y>"+ $("#headVal").text() +"</y>";
												tooltipBooletsAppendAndTypeText("#whileLoopToInsertAnotherNode", "#returnHeadInCreateMthd", text, "li", function() {
													introNextSteps("#callCreateMethos"+ createMethodCallCount, "returnHead");
													$(".introjs-nextbutton").show();
												});
											});
										}
									});
								});
							});
					
						break;
					}
				break;
				case "polyOperationsPre" :
					$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "addTermVariablesDec":
							preAddTermMethodCodeDisplay();
							$("#polyOperationsPre").removeClass("opacity00");
							introjs.refresh();
							$(".introjs-tooltip").removeClass("hide");
							addTermMethodAnimationFunction();
						break;
						case "addTermIfConditions":
							var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
										+ '<span class="position" id="tooltipP1Val">p1</span> == NULL</span>';
							$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
							arrow("#p1P2InitializeInAddTerm", "#ifp1EqualToNullInAddTermFirstIf", function() {
								$("#ifp1EqualToNullInAddTermFirstIf").addClass("background-color-yellow");
								$(".introjs-tooltip").removeClass("hide");
								travel("#ifp1EqualToNullInAddTermFirstIf", "#tooltipCndtn", function() {
									flipEffectWithTweenMax("#tooltipP1Val", $("#p1Val").text(), function() {
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										if ($("#p1Val").text() == "NULL") {
											var text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												appendDuplicateNextBtnUsingClickFunction("", false, function() {
													$(".background-color-yellow").removeClass("background-color-yellow");
													var text = "Store the <y>temp</y> value (<y>"+ $("#tempVal").text() 
															+"</y>) into <y>head</y>.";
													tooltipBooletsAppendAndTypeText("#ifp1EqualToNullInAddTermFirstIf", "#tempToHeadIfP1EqNullInAddTerm", text, "li", function() {
														introNextSteps("#animationDiv", "addTermP1EqNullFirstIf", "");
														$(".introjs-nextbutton").show();
													});
												});
											});
										} else {
											var text = "Since it evaluates to <r>false</r>."
											$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												appendDuplicateNextBtnUsingClickFunction("", false, function() {
													ifP1NotEqNullAnimation() 
												});
											});
										}
									})
								});
							});
						break;
						case "retutnHead" :
							var arrowParentId;
							if ($("#head"+ createMethodCallCount +"Val").text() == "NULL") {
								arrowParentId = "#tempToHeadIfP1EqNullInAddTerm"
							}
							var text = "Return the <y>head</y> value <y>"+ $("#headVal").text() +"</y>.";
							tooltipBooletsAppendAndTypeText(arrowParentId, "#returnHeadInAddTerm", text, "ul", function() {
								introNextSteps("#polyOperationsDivPre", "storeRtnValueOfAddTerm", "right");
								$(".introjs-nextbutton").show();
							});
						break;
						case "afterWhileLoop" :
							$(".introjs-tooltiptext").append("<ul></ul>");
							addTermWhileConFalseAnimation();
						break;
					}
				break;
			}
		});
	});
	introjs.start();
	$(".introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton").hide();
	var text = "In this <y>live demo</y> we will learn the implementation of <y>Polynomial</y> operations using <y>Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-nextbutton").show();
	})
}

function buttonsClick() {
	$("#buttonsDiv").removeClass("opacity00");
	$(".buttons").removeClass("disabled");
	createMethodCallCount = 1;
	nodeCount = 1;
	
	$("#create").click(function() {
		$("#firstList, #secondList").empty();
		$("#head1Line, #head2Line").remove();
		$("#head1Val, #head2Val, #resultVal").text("");
		preMain();
		buttonName = "create";
		customIntroNxtStep("#inMain");
	}) 
}

function createMethodAnimationFunction() {
	var text = "The value (<y>NULL</y>) of <y>head"+ createMethodCallCount +"</y> is passed into the formal argument <y>head</y>.";
	tooltipBooletsAppendAndTypeText("#nameOfCreateMthd", "#nameOfCreateMthd", text, "ul", function() {
		appendDuplicateNextBtnUsingClickFunction("", false, function() {
			var text = "Declare a temporary pointer variable <y>temp</y>.";
			tooltipBooletsAppendAndTypeText("#nameOfCreateMthd", "#tempNodeInCreateMthd", text, "li", function() {
				var text = "Declare a character variable <y>ch</y>.";
				tooltipBooletsAppendAndTypeText("#tempNodeInCreateMthd", "#decChInCreateMthd", text, "li", function() {
					var text = "Declare two integer variables <y>coeff</y> and <y>exp</y>.";
					tooltipBooletsAppendAndTypeText("#decChInCreateMthd", "#decCoeffExpInCreateMthd", text, "li", function() {
						introNextSteps("#animationDiv", "variableDecInCreateMthd");
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function memoryAllocationOfTemp(selector) {
	var text = "The control enters into the body of <y>do-while</y> loop.";
	tooltipBooletsAppendAndTypeText("#decCoeffExpInCreateMthd", "#MemoryAllocateInCreateMthd", text, selector, function() {
		var text = "Allocate the polynomial <y>memory</y> to the <y>struct</y> variable <y>temp</y>.";
		tooltipBooletsAppendAndTypeText("#MemoryAllocateInCreateMthd", "#MemoryAllocateInCreateMthd", text, "li", function() {
			var text = "Print <y>Enter coeff, exp of node : </y> text into the console.";
			tooltipBooletsAppendAndTypeText("#MemoryAllocateInCreateMthd", "#printCoeffNdExpVal", text, "li", function() {
				var text = "Read the <y>coeff</y> and <y>exp</y> values from the keyboard.";
				tooltipBooletsAppendAndTypeText("#printCoeffNdExpVal", "#readCoeffNdExpVal", text, "li", function() {
					$("#temparyPolyNode").empty();
					createDynamicNodes("#temparyPolyNode", nodeCount);
					introNextSteps("#animationDiv", "memoryAllocationAndPrintReadCoeffAndExpVal");
					$(".introjs-nextbutton").show();
				});
			});
		});
	});
}

function addTermMethodAnimationFunction() {
	var text = "The values (<y>"+ $("#head"+ createMethodCallCount +"Val").text() +"</y> and <y>"+ $("#tempVal").text() 
				+"</y>) is passed into the formal argument <y>head</y> and <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#nameOfAddTermMthd", "#nameOfAddTermMthd", text, "ul", function() {
		var text = "Declare two temporary pointer variable <y>p1</y> and <y>p2</y>.";
		tooltipBooletsAppendAndTypeText("#nameOfAddTermMthd", "#varDecInAddTerm", text, "li", function() {
			var text = "Initialize the <y>p1</y> and <y>p2</y> to <y>head</y> value (<y>"+ $("#headVal").text() +"</y>).";
			tooltipBooletsAppendAndTypeText("#varDecInAddTerm", "#p1P2InitializeInAddTerm", text, "li", function() {
				introNextSteps("#animationDiv", "variableDecInAddTermMthd");
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function addTermP1AndP2PointerVarDec() {
	$("#p1Val, #p2Val").text($("#headVal").text()).addClass("opacity00");
	fromEffectWithTweenMax("#headVal", "#p1Val", false, function() {
		commonCodeForP1AndP2InAddTerm("#p1Val", "p1Line", function() {
			fromEffectWithTweenMax("#headVal", "#p2Val", false, function() {
				commonCodeForP1AndP2InAddTerm("#p2Val", "p2Line", function() {
					customIntroNxtStep("#polyOperationsPre", "addTermIfConditions", "right");
				});
			});
		});
	});
}

function ifP1NotEqNullAnimation() {
	var text = '<span id="tooltipWhileCndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="firstCon"><span class="position" id="tooltipP1Value">p1</span> != NULL</span> && '
				+ '<span id="secondCon" class="position"><span id="p1Exp" class="position">p1 -> exp</span> &gt; <span class="position"'
				+ ' id="tempExp">temp -> exp</span></span></span>';
	$("#ifp1EqualToNullInAddTermFirstIf").removeClass("background-color-yellow");
	arrow("#ifp1EqualToNullInAddTermFirstIf", "#whileLoopInAddTerm", function() {
		$("#whileLoopInAddTerm").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#whileLoopInAddTerm", "#tooltipWhileCndn", function() {
			flipEffectWithTweenMax("#tooltipP1Value", $("#p1Val").text().trim(), function() {
				//flipEffectWithTweenMax("#firstCon", $("#p1Val").text().trim() != "NULL", function() {
					if ($("#p1Val").text().trim() != "NULL") {
						var selector = (createMethodCallCount == 1) ? "#firstList" : "#secondList";
						var val1 = parseInt($(selector + " #exp" + p1Count).text().trim());
						var val2 = parseInt($("#temparyPolyNode #exp" + nodeCount).text().trim());
						flipEffectWithTweenMax("#p1Exp", val1, function() {
							flipEffectWithTweenMax("#tempExp", val2, function() {
								//flipEffectWithTweenMax("#secondCon", val1 > val2, function() {
									if (val1 > val2) {
										var text = "Since it evaluates to <y>true</y>, so the control enters into the body of <y>while-loop</y>.";
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
											appendDuplicateNextBtnUsingClickFunction("", false, function() {
												whileLoopTrueConditionAnimation(); 
											});
										});
									} else {
										var text = "Since it evaluates to <r>false</r>."
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
											appendDuplicateNextBtnUsingClickFunction("", false, function() {
												addTermWhileConFalseAnimation() 
											});
										});
									}
								//});
							});
						});
					} else {
						var text = "Since it evaluates to <r>false</r>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								addTermWhileConFalseAnimation() 
							});
						});
					}
				//});
			});
		});
	});
}

function whileLoopTrueConditionAnimation() {
	var text = "Store the <y>p1</y> value into <y>p2</y>.";
	tooltipBooletsAppendAndTypeText("#whileLoopInAddTerm", "#p1ToP2InAddTermWhileLoop", text, "li", function() {
		var text = "Store the <y>next</y> field of <y>p1</y> to <y>p1</y>.";
		tooltipBooletsAppendAndTypeText("#p1ToP2InAddTermWhileLoop", "#p1NxtTop1InAddTermWhile", text, "li", function() {
			var text = "Repeat the loop until the condition <y>p1 != NULL && p1 -> exp > temp -> exp</y> is evaluates to <r>false</r>.";
			tooltipBooletsAppendAndTypeText("#p1NxtTop1InAddTermWhile", "#whileLoopInAddTerm", text, "li", function() {
				introNextSteps("#animationDiv", "addTermWhileLoopAnimation");
				$(".introjs-nextbutton").show();
			});
		});
	});
}

function addTermWhileConFalseAnimation() {
	var text = '<span id="tooltipP1Cndn" class="position" style="font-family: monospace; font-weight: bold;">'
			+ '<span class="position" id="tooltipP1Valu">p1</span> != NULL</span>';
	$("#whileLoopInAddTerm").removeClass("background-color-yellow");
	arrow("#whileLoopInAddTerm", "#ifp1EqualToNullInAddTerm", function() {
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#ifp1EqualToNullInAddTerm", "#tooltipP1Cndn", function() {
			$("#ifp1EqualToNullInAddTerm").addClass("background-color-yellow");
			flipEffectWithTweenMax("#tooltipP1Valu", $("#p1Val").text().trim(), function() {
				if ($("#p1Val").text().trim() == "NULL") {
					var text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							ifP1EqNullAfterWhileLoopAnimation(); 
						});
					});
				} else {
					var text = "Since it evaluates to <r>false</r>."
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							ifP1ExpAndTempExpAreSame() 
						});
					});
				}
			});
		});
	});
}

function ifP1EqNullAfterWhileLoopAnimation() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = "Store the <y>temp</y> value <y>"+ $("#tempVal").text() +"</y> into the <y>next</y> field of <y>p2</y>.";
	tooltipBooletsAppendAndTypeText("#ifp1EqualToNullInAddTerm", "#tempToP2NxtInAddTerm", text, "li", function() {
		introNextSteps("#animationDiv", "storeTempToP2NextAnimation");
		$(".introjs-nextbutton").show();
	});
}

function ifP1ExpAndTempExpAreSame() {
	var text = '<span id="tooltipP1TempEqCndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipP1ExpValue">p1 -> exp</span> == <span id="tooltiptempExpValue" class="position">'
				+ ' temp -> exp</span></span>';
	$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
	$("#ifp1EqualToNullInAddTerm").removeClass("background-color-yellow");
	arrow("#ifp1EqualToNullInAddTerm", "#ifP1ExpEqToTempExpInAddTerm", function() {
		$(".introjs-tooltip").removeClass("hide");
		travel("#ifP1ExpEqToTempExpInAddTerm", "#tooltipP1TempEqCndn", function() {
			var selector = (createMethodCallCount == 1) ? "#firstList" : "#secondList";
			var val1 = parseInt($(selector + " #exp" + p1Count).text().trim());
			var val2 = parseInt($("#temparyPolyNode #exp" + nodeCount).text().trim());
			flipEffectWithTweenMax("#tooltipP1ExpValue", val1, function() {
				flipEffectWithTweenMax("#tooltiptempExpValue", val2, function() {
					if (val1 == val2) {
						text = "Since it evaluates to <y>true</y>, so the control enters into <y>else if-block</y>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifP1ExpAndTempExpSameAnimation() 
							});
						});
					} else {
						var text = "Since it evaluates to <r>false</r>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifP1ExpAndTempExpLessThan() 
							});
						});
					}
				});
			});
		});
	});
}

function ifP1ExpAndTempExpLessThan() {
	
}

function ifP1ExpAndTempExpSameAnimation() {
	var text = "Store the addition result of <y>coeff</y> field of <y>p1</y> and the <y>coeff</y> field of <y>temp</y> "
				+ " to the <y>coeff</y> field of <y>p1</y>.";
	tooltipBooletsAppendAndTypeText("#ifP1ExpEqToTempExpInAddTerm", "#addp1CoeffTempCoeffNdStoreP1CoeffInAddTerm", text, "ul", function() {
		introNextSteps("#animationDiv", "p1AndTempCoeffSame");
		$(".introjs-nextbutton").show();
	});
}

function whileLoopAnimationFunction(selector) {
	var val1 = parseInt($(selector + " #exp" + p1Count).text());
	var val2 = parseInt($("#temparyPolyNode #exp" + nodeCount).text());
	
	if ($("#p1Val").text() != "NULL" &&  val1 > val2) {
		p2Count = p1Count;
		fadeInBounceEffectWithTimelineMax("#p1Val", "#p2Val", "right", function() {
			$("#p2Line").remove();
			addTermWhileLoopP1AndP2ValuesAnimation(selector, function() {
				$(selector + " #nextDiv" + p1Count).effect( "highlight",{color: 'blue'}, 500, function() {
					fadeInBounceEffectWithTimelineMax(selector + " #next" + p1Count, "#p1Val", "right", function() {
						$("#p1Line").remove();
						p1Count++;
						if ($("#p1Val").text() != "NULL") {
							if (createMethodCallCount == 1) {
								svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", selector + " #nextDiv" + p1Count, "#svgId", "p1Line", "arrow", function() {
									whileLoopAnimationFunction(selector);
								});
							} else {
								svgAnimatingLineBottomToTop("#animationDiv", "#p1Div", selector + " #nextDiv" + p1Count, "#svgId", "p1Line", "arrow", function() {
									whileLoopAnimationFunction(selector);
								});
							}
						} else {
							whileLoopAnimationFunction(selector);
						}
					});
				});
			});
		});
	} else {
		customIntroNxtStep("#polyOperationsPre", "afterWhileLoop", "right");
	}
}

function addTermWhileLoopP1AndP2ValuesAnimation(selector, callBackFunction) {
	if (createMethodCallCount == 1) {
		svgAnimatingLineTopToBottom("#animationDiv", "#p2Div", selector + " #nextDiv" + p2Count, "#svgId", "p2Line", "arrow", function() {
			$("#p1Div").effect( "highlight",{color: 'blue'}, 500);
			svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", selector + " #nextDiv" + p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
				$("#p1LineDuplicate").remove();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	} else {
		svgAnimatingLineBottomToTop("#animationDiv", "#p2Div", selector + " #nextDiv" + p2Count, "#svgId", "p2Line", "arrow", function() {
			p2Count = p1Count;
			$("#p1Div").effect( "highlight",{color: 'blue'}, 500);
			svgAnimatingLineBottomToTop("#animationDiv", "#p1Div", selector + " #nextDiv" + p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
				$("#p1LineDuplicate").remove();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	}
} 

function addTermAdditionAnimation(selector, value) {
	fromEffectWithTweenMax("#temparyPolyNode #coeff"+ nodeCount, selector, true, function() {
		$("#temparyPolyNode").addClass("opacity00");
		$("#tempLine").remove();
		$(selector).text(parseInt($(selector).text()) + value);
		//nodeCount--;
		customIntroNxtStep("#polyOperationsPre", "retutnHead", "right");
	});
	
}




























































function commonCodeForP1AndP2InAddTerm(selector, lineId, callBackFunction) {
	var parentSelector = (createMethodCallCount == 1) ? "#firstList" : "#secondList"
	if ($("#headVal").text() != "NULL") {
		if (createMethodCallCount == 1) {
			svgAnimatingLineTopToBottom("#animationDiv", selector, parentSelector + " #nextDiv1", "#svgId", lineId, "arrow", function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		} else {
			svgAnimatingLineBottomToTop("#animationDiv", selector, parentSelector + " #nextDiv1", "#svgId", lineId, "arrow", function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		}
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

function changeIds(val, elemParent, idAttr) {//changing Ids based on situation
	$(elemParent).each(function(index){
		$(this).attr('id', (idAttr + (index + val)));
	});
}

function changeIdsAtBegin(val, selector, callBackFunction) {
	changeIds(val, $(selector+' .nodes'), 'node');
	changeIds(val, $(selector +' .data-nodes'), 'nodedata');
	changeIds(val, $(selector +" .coeff-div"), "coeffDiv");
	changeIds(val, $(selector +" .exp-div"), "expDiv");
	changeIds(val, $(selector +" .next-div"), "nextDiv");
	changeIds(val, $(selector + " .data-address"), "dataAddress");
	
	changeIds(val, $(selector + " .coeff-span"), "coeff");
	changeIds(val, $(selector + " .exp-span"), "exp");
	changeIds(val, $(selector + " .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function orderingNodes(count, selector) {//Changing node position from temparay place to list position
	if (count == 1 || $(selector +" .nodes").length + 1 == (count)) {
		if (count == 1) {
			$(selector).append('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
					+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNode > #node" + (count)).html() + '</div>');
		} else {
			$(selector + " .nodes:last").after('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
					+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNode > #node" + (count)).html() + '</div>');
		}
			setTimeout(function() {
				$('.lines').remove();
				positioningNodes(selector);
			}, 2000);
	} 
	
	/*$('#temparyPolyNode .nodes').attr('id', 'node' + count);
	
	$('#firstList #node' + count).before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1) 
			+ '" style="top: 0px; width: auto;">' + $("#posNodes > #node" + (nodeCount - 1)).html() + '</div>');
	$('#temparyPolyNode .nodes').attr('id', 'node' + count);
	
	if ($('#insertAtPosition').hasClass('insert-position')) {
		
	} else if ($('#insertAtPosition').hasClass('insert-endPos')) {
		$("#firstList .nodes:last").after('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1) 
				+ '" style="top: 0px; width: auto;">' + $("#posNodes > #node" + (nodeCount - 1)).html() + '</div>');
	} else if ($('#insertAtBegin').hasClass('insert-begin')) {
		$("#firstList .nodes:first").before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1) 
				+ '" style="top: 0px; width: auto;">' + $("#posNodes > #node" + (nodeCount - 1)).html() + '</div>');
	}*/
}

function positioningNodes(selector) {
	var l2 = $(selector + " #node" + (nodeCount - 1)).removeClass("hide");
	var l1 = $("#temparyPolyNode #node" + (nodeCount - 1)).offset();
	var l2 = $(selector + " #node" + (nodeCount - 1)).offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenLite.to("#temparyPolyNode > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
		$('#node' + (nodeCount - 1)).removeClass("hide").removeClass("opacity00");
		$(selector + " #node" + (nodeCount - 1)).html($("#temparyPolyNode > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
		$("#temparyPolyNode > #node" + (nodeCount - 1)).css({"top": "0", "left" : "0"}).addClass("opacity00");
		introjs.refresh();
		changeIdsAtBegin(1, selector, function() {
			regenerateArrows(nodeCount - 1, selector);
			
		});
	}});
}

function movingNodes(val, nodeId, callBackFunction) {
	
	if (val <= ($('#firstList .nodes').length)) {
		var l1Val;
		if (val <= 5) {
			l1Val = '120px';
		} else if (val > 6) {
			l1Val = '-120px';
		}
		if (val == 6) {
			TweenMax.to($('#firstList .nodes').not(nodeId).eq(val - 1), 1, {top: '68px', onComplete: function() {
				$(nodeId).removeClass('hide');
				$.each($("#firstList .nodes").not(nodeId), function() {
					if ($('#row1 .nodes').length > 5) {
						$('#row1 .nodes:last').css({'float' : 'right'});
						var t = $('#row1 .nodes:last').detach();
						t.prependTo('#row2');
					} else {
						$('#row2 #node'+ count +'').css({'float' : 'right'});
					}
					$(this).css('top', '0');
				});
			}});
		} else {
			TweenMax.to($('#firstList .nodes').not(nodeId).eq(val - 1), 1, {left: l1Val, onComplete: function() {
				$(nodeId).removeClass('hide');
				$.each($("#firstList .nodes").not(nodeId), function() {
					$(this).css("left", "0");
				});
			}});
		}
		val++;
		movingNodes(val, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}
}

function regenerateArrows(count, selector) {
	if (createMethodCallCount == 1) {
		svgAnimatingLineTopToBottom("#animationDiv", "#headDiv", selector + " #coeffDiv1", "#svgId", "headLine", "arrow");
		svgAnimatingLineTopToBottom("#animationDiv", "#tempDiv", selector + " #coeffDiv" + (nodeCount - 1), "#svgId", "tempLine", "arrow");
	} else {
		svgAnimatingLineBottomToTop("#animationDiv", "#headDiv", selector + " #coeffDiv1", "#svgId", "headLine", "arrow");
		svgAnimatingLineBottomToTop("#animationDiv", "#tempDiv", selector + " #coeffDiv" + (nodeCount - 1), "#svgId", "tempLine", "arrow");
	}
	
	if ($("#firstList .nodes").length != 0 && $("#secondList .nodes").length == 0) {
		for(i = 1; i< $(selector + " .nodes").length; i++) {
			svgAnimatingLineRightToLeft("#animationDiv", selector + " #nextDiv"+ i, selector + " #coeffDiv"+ 
					(i + 1), "#svgId", "line"+ i, "arrow");
		}
	} else {
		svgAnimatingLineRightToLeft("#animationDiv", "#head1Div", "#firstList #coeffDiv1",  "#svgId", "head1Line", "arrow");
		
		for(i = 1; i< $(selector + " .nodes").length; i++) {
			svgAnimatingLineRightToLeft("#animationDiv", selector + " #nextDiv"+ i, selector + " #coeffDiv"+ 
					(i + 1), "#svgId", "line"+ i, "arrow");
		}
		for (i = 1; i < $("#firstList .nodes").length; i++) {
			svgAnimatingLineRightToLeft("#animationDiv", "#firstList #nextDiv"+ i, "#firstList #coeffDiv"+ 
					(i + 1), "#svgId", "line"+ i, "arrow");
		}
	}
	customIntroNxtStep("#polyOperationsPre", "retutnHead", "right");
}

function trueOrFalseCondition(selector1, selector2, condition, value1, value2, callBackFunction) {
	travel(selector1, $(".introjs-tooltiptext ul li:last-child div"), function() {
		flip(selector2, condition ? value1 : value2, function() {
			var text = "";
			if (condition) {
				text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
			} else {
				text = "Since it evaluates to <r>false</r>."
			}
			$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
			typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}

function readCoeffAndExpValuesFromConsole(selector) { //read Coeff and Exp from the keybord;
	$(selector).focus();
	$(selector).attr({placeholder: 'Enter 2 values'});
	$(selector).addClass("blinking-orange").removeAttr('disabled').focus();;
	$(selector).on("keydown", function(e) {
		if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32 ) {
			e.preventDefault();
		}
		if (arr.length == 1) {
			var test = false;
			test = $(selector).val().indexOf(' ') >= 0;
			if (e.keyCode == 32 && test) {
				e.preventDefault();
			}
		}
	});
	$(selector).on("keyup", function(e) {
		$('.length-error-text,.size-error').remove();
		if ($(this).val() == "") {
			$(".introjs-nextbutton").hide();
			$(".size-error").empty();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
													"Please enter 2 values each separated by a space.</span>");
		} 
		var givenText = $(this).val();
		var splittedText = givenText.split(" ");
		arr = [];
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		if (arr.length == 1 && e.keyCode == 8 && $('.backspace-error').length == 0 ) {
			$(".size-error").empty();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red backspace-error length-error-text'>"
					+"</br>Enter two numbers separated by space.</span>");
		}
		var a0 = $.isNumeric(arr[0]);		
		var a1 = $.isNumeric(arr[1]);
		
		if (a0 && a1) {
			if ((arr.length == 2) && (arr[0].length <= 3 && arr[1].length <= 3)) {
				$(".introjs-nextbutton").show();
				
			} else {
				$(".introjs-nextbutton").hide();
				$(".size-error").empty();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'>"
						+"</br>size should be 1 to 3(inclusive)</span>");
			}
		} /*else {
			$(".size-error").empty();
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'>"
					+"</br>Please enter integers only.</span>");
		}*/
	});
}

function readYesOrNoFromConsole(selector) { //Enter Yes or No Function
	$(selector).focus();
	$(selector).attr({placeholder: 'Enter (y/n)'});
	$(selector).addClass("blinking-orange").removeAttr('disabled').focus();;
	$(selector).on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		if (nodeCount < 5) {
			if (($(this).val() != "") && (($(this).val().toLowerCase() == "y") || ($(this).val().toLowerCase() == "n"))) {
				ch = $(this).val().toLowerCase();
				$(".introjs-nextbutton").show();
			} else {
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter (y/n (or) Y/N).</span>");
				$(".introjs-nextbutton").hide();
			}
		} else {
			if (($(this).val() != "") && ($(this).val().toLowerCase() == "n")) {
				ch = $(this).val().toLowerCase();
				$(".introjs-nextbutton").show();
			} else {
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter (n (or) N). because "
							+" we are restricted to allow list size to (<y>4</y> nodes) only</span>");
				$(".introjs-nextbutton").hide();
			}
		} 
		introjs.refresh();
	});
}

function tooltipBooletsAppendAndTypeText(selector1, selector2, text, appendList, callBackFunction) {
	$(selector2).addClass("background-color-yellow");
	arrow(selector1, selector2, function() {
		$(".introjs-tooltip").removeClass("hide");
		if (appendList == "ul") {
			$('.introjs-tooltiptext').append('<ul><li></li></ul>');
		} else {
			$('.introjs-tooltiptext ul').append('<li></li>');
		}
		typing(".introjs-tooltiptext ul li:last", text, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

/*function appendDuplicateNextBtnUsingOnClickMethod(functionName, callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='"+ functionName +"'>Next &#8594;</a>");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}*/

function appendDuplicateNextBtnUsingClickFunction(functionName, flag, callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (flag) {
			functionName;
		} else {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}

function appendButtons() {	//append polynomial operation (buttons)
	for (var i = 0; i < buttonNames.length; i++) {
		var buttonId = buttonNames[i].charAt(0).toLowerCase() + buttonNames[i].substring(1, buttonNames[i].length);
		var appendBtnsDiv = '<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
			+ buttonId.split(" ").join("").toLowerCase() + '">' + buttonNames[i] + ' </span></div>'
		$('#buttonsDiv').append(appendBtnsDiv);
	}
}

function declareNodesWhenFunctionCall(parenetId, id1, id2, nodeName, nodeNameText, callBackFunction) {	//temparary node declaration
	var appendTempararyNodeDec = '<div class="col-xs-1  extraNode opacity00 padding00" id=' + id1 + '>'
	+ '<div class="col-xs-12 box padding00"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts inline-style"></span>'
	+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ' 
	$(parenetId).append(appendTempararyNodeDec);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function getRandomInt(min, max) { //generate random address for node creation
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(selector, val) { //dynamically create an empty new node for polynomial
	var randomAddress = getRandomInt(1000, 5000);
	fixedWidth();
	var t = $('#posVal').text();
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + val + '" style="top: 0px; width: auto;"><div class="col-xs-12 padding00">'
			+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">coeff</div>'
			+ '<div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">exp</div>'
			+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
			+ '<div id="nodedata' + val + '" class="data-nodes"><div id="coeffDiv' + val + '" class="div-border left-radius col-xs-4 coeff-div">'
			+ ' <span id="coeff' + val + '" class="position coeff-span ct-green-color ct-fonts inline-style opacity00">99</span></div>'
			+ '<div id="expDiv' + val + '" class="div-border no-radius col-xs-4 data-div position">'
			+ ' <span id="exp' + val + '" class="exp-span ct-blue-color ct-fonts opacity00 position" style="top: 0px; left: 0px;">88</span></div>'
			+ '<div id="nextDiv' + val + '" class="position div-border right-radius col-xs-6 next-div">'
			+ ' <span id="next' + val + '" class="position next-span ct-green-color ct-fonts inline-style opacity00">8888</span></div></div>'
			+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center"><span id="dataAddress' + val + '"'
			+ ' class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress + '</span></div></div></div>';
	$(selector).append(x);
	
	 /*if (buttonNames == 'insertAtPosition' && $('.nodes').length != 0) {
		$('#declareNodes').after('<div class="col-xs-10 col-xs-offset-1 padding00" id="posNodes"></div>');
		$('#posNodes').append(x);
		$('#insertAtPosition').addClass('insert-position');
		if (buttonName == 'insertAtPosition' && (t != 1 && t < $('.nodes').length)) {
			$('#insertAtPosition').addClass('insert-middle');
		} else {
			$('#insertAtPosition').addClass('insert-endpos');
		}
	} else {
		$('#dynamicNodes').append(x);
		if ($('.nodes').length > 4) {
			$('#node' + val).addClass('pull-right');
		}
		if ($('.nodes').length == 5) {
			$('#line11, #line13').remove();
			svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv" + lastNodeCount, "#svgId", "line11", "arrow");
			svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
		}
	}*/
}

function fixedWidth() { //restricted to allow only 4 nodes in polynomial list 
	/*if ($('.nodes').length == 4) {
		//var x = (($('#node4').offset().left + $('#node4').outerWidth()) - $("#dynamicNodes").offset().left) + $('#node1').width() / 2.5;
		var x = (($('#node4').offset().left + $('#node4').outerWidth()) - $("#dynamicNodes").offset().left);
		$('#dynamicNodes').css({'width' : x + 'px'});
	}*/
}


function getURLParameter(sParam) { //select language for code (c or java)
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function svgAppend(selector, svgId) { // append svg div
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) { //append marker(arrow) for svg line  
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

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) { //Draw a svg line
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

//Draw a svg line for Right to Left
function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) { 
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

//Draw a svg line for Left to Right
function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

//Draw a svg line for Bottom to Top
function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

//Draw a svg line for Top to Bottom
function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function arrow(fromId, toId, callBackFunction) { //arrow is used to show the current position of line in line 
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

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) { //value move form one place to another
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative; z-index: 9999999;'>" 
				+ $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	$(selector2).removeClass('opacity00')
	if (!flag) {
		$(selector1).addClass('z-index1000000').parent().effect( "highlight",{color: 'blue'}, 500);
	} else {
		$(selector2).text($(selector1).text());
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

function flipEffectWithTweenMax(selector, val, callBackFunction) { //Rotate the value from 0 - 90 to deg
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function zoomInEffect(selector1, callBackFunction) { //highlight and zoom the value
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn").removeAttr('style');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) { //move the border form selector1  to selector2
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

function toEffectWithTweenMax(selector1, selector2, callBackFunction) { //value move from selector2 to selector1
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

function setTimeToIntroGoNextStep() { //set time to intro do next Step
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function introNextSteps(stepName, animatedStep, position) { //Dynamic intro Steps
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) { //Intro dynamic step and set time to go the next Step
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}


function appendNextBtn(value) { //append duplicate button using onClick() function
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton" onclick="' + value + '()">Next &#8594;</a>');
}

function appendNextBtnAndBtnClickInternal(callBackFunction) { //Append duplicate button using click() function and remove duplicate btn
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$(this).remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function typing(typingId, typingContent, typingCallbackFunction) { //typing function
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
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
		$("#animatinDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
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
			$("#animatinDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.8");
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, pos, callBackFunction) { //Bounce the value and
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left});
		if (pos == "left") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: -150 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "right") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: 550 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "bottom") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: -650 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		}
	});
}

function bounceCallBack(selector1, selector2, callBackFunction) {
	$(selector2).removeAttr("style")
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$("#animatinDiv").removeAttr("style");			
	$('#dummy').remove();
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).effect( "highlight",{color: 'blue'}, 500);
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



