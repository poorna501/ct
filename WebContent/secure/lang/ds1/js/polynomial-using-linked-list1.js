var lang;
var printCount = outputCount = 1;
var polynomialUsingLinkedList = function() {
	lang = getURLParameter("lang");
	initIntroJS();
}


function getURLParameter(sParam) { // choose the language like c or cpp...etc
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#title",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#polyInit",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#strcutSpan",
			intro : "",
		},{
			element : "#typeDefDec",
			intro : "",
		},{
			element : "#preMain",
			intro : "",
		},{
			element : "#animationDiv",
			introjs : "",
			position : "left",
			animateStep : "headDec",
			tooltipClass : "hide"
		}]
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "title":
			$(".introjs-tooltip").removeClass('hide');
			var text = "Here, in this demo we will learn the working of <y>Polynomial</y> using <y>Linked List</y>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
		break;
		case "polyInit":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeToIntroGoesNextStep();
			});
		break;
		case "strcutSpan":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the declaration of a new <y>struct</y> type <y>polynomial</y>.<br><br>"
						+ "<ul><li><y>coeff</y> field is used to hold the <y>coefficient</y> inside the linked list.</li>"
						+ "<li><y>exp</y> field is used to hold the <y>Exponent </y> inside the linked list.</li>"
						+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "typeDefDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>node</y> to the '
						+ '<y>struct poly</y> which is a <y>pointer</y>'
				typing(".introjs-tooltiptext", text,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "preMain":
			$('#preMain').removeClass("hide").append('<span id="headsDex">poly head1 = NULL, head2 = NULL,<br/> head3 = NULL;</span>'
					+'\n<span id="headsDes"></span>');
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, we are declaring <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and "
							+ "<y>head3</y> and initialize it to <y>NULL</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "animationDiv":
			$("#canvas").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				if (animateStep == "headDec") {
					introNextSteps("#btnsDiv", "", "left");
					setTimeToIntroGoesNextStep();
				} else if (animateStep == "readCoeffAndExpValues") {
						$("#testBtn").click();
					doPlayPause();
				} else if (animateStep == "allocateMemory") {
					console.log("hello Poorna click node createBtn");
					$("#nodeCreateBtn").click();
					doPlayPause();
				} else if (animateStep == "enterNoInConsole") {
					printCount++;
					$("#yesOrNoBtn").click();
					doPlayPause();
				} else {
					doPlayPause();
				}
			});
		break;
		case "btnsDiv":
			$("#btnsDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".btn").removeAttr("disabled");
			});
		break;
		case "createInMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#createInMain").removeClass("opacity00");
				introNextSteps("#print1", "", "left");
				setTimeToIntroGoesNextStep();
			});
		break;
		case "print" + printCount :
			$(".introjs-helperLayer").one("transitionend", function() {
				introNextSteps("#outputDiv", "text" + printCount, "");
				setTimeToIntroGoesNextStep();
			});
		break;
		case "outputDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case "text" + printCount:
						$(".output-console-body").append('<div id="text'+ printCount +'">Enter '+ printCount +'st polynomial: </div>');
						$('.output-console-body').scrollTo($('.output-console-body div:last'), 500);
						introNextSteps("#head"+ printCount +"Null", "call"+ printCount, "");
						setTimeToIntroGoesNextStep();
					break;
					case "readValuesFromKeyboard" :
						$('.output-console-body').append('<div id="output'+ outputCount + '">Enter coefficient, exponent'
								+ ' of node :  <span id="input'+ outputCount+ '"><input class="output-scanf-line input" '
								+ 'id="val'+ outputCount+ '" size="15" maxlength="6"/></span></div>');
						$('#val' + outputCount).focus();
						$('.introjs-tooltip').removeClass("hide");
						var text = "Enter <y>coefficient</y> and <y>exponent</y> of the <y>list</y> each separated number "
								+ "by a <y>space</y>.";
						typing(".introjs-tooltiptext",text,function() {
							introNextSteps("#storeCoeffNdExp","", "right");
							readCoeffAndExpValuesFromConsole("#val" + outputCount);
						});
					break;
					case "enterYesOrNoToContinue" :
						$('.output-console-body').append('<div id="yesOrNoText'+ outputCount+ '">Do u want another node(y/n): '
								+ ' <div class="position" id="yesOrNotDiv'+ outputCount+ '"><input class="output-scanf-line input" '
								+ 'id="yesOrNoVal'+ outputCount+ '" size="15" maxlength="2"/></div></div>');
						$('#yesOrNoVal' + outputCount).focus();
						$(".introjs-tooltip").removeClass('hide');
						if (nodeCount < SIZE - 1) {
							var text = "Enter <y>y/n</y> (or) <y>Y/N</y> to continue to insert node into the list.";
							introNextSteps("#doWhileLoop","", "right");
						} else {
							var text = "Enter <y>n</y> (or) <y>N</y> to exit the node insertion (Here, we are restricted to allow only "
										+ " <y>5</y> nodes in the list).";
							introNextSteps("#whileChNotEqN","", "right");
						}
						typing(".introjs-tooltiptext",text,function() {
							readYesOrNoFromConsole('#yesOrNoVal' + outputCount);
							outputCount++;
						});
					break;
					
				}
			});
		break;
		case "whileChNotEqN" :
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = '<span id="tooltipCndtn" style="font-family: monospace; font-weight: bold;">'
							+ '<span  id="tooltipFront1">ch</span> != "y"</span></li>';
				tooltipBooletsAppendAndTypeText("#whileChNotEqN", "#whileChNotEqN", text, "ul", function() {
					trueOrFalseCondition("#whileChNotEqN", "#tooltipFront1", ch == "n", ch , ch, function() {
						$("#tooltipFront1").removeAttr("style");
						introNextSteps("#animationDiv", "enterNoInConsole", "");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "head"+ printCount +"Null":
			$(".introjs-helperLayer").one("transitionend", function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case "call"+printCount:
						$("#head" + printCount + "Name").effect("highlight", {color: 'blue'}, 500, function() {
							flip("#head" + printCount + "Name","NULL",function() {
								$(".introjs-tooltip").removeClass('hide');
								var text = "Here, we initialize the <y>head"+ printCount +"</y> to <y>NULL</y>.<br/><br/> After initialization call the"
										+ " <y>create</y> method and pass an argument <y>head"+ printCount +"</y> (<y>NULL</y>) to <y>create</y> method, "
										+ "the <y>return</y> value of the <y>create</y> method will be stored in <y>head"+ printCount +"</y>.";
								typing(".introjs-tooltiptext",text,function() {
									buttonName = "createBtn";
									introNextSteps("#animationDiv", "head"+ printCount +"Null", "");
									$('.introjs-nextbutton').show();
								});
							});
						});
					break;
				}
			});
		break;
		case "preTemp" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (buttonName == "createBtn") {
					createMethodDef();
					introjs.refresh();
					$("#createCall" + printCount).addClass("z-index1000000");
					createNodeAnimation()
				}
			});
		break;
		case "doWhileLoop" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#createHead, #ch, #coeffExp").removeClass("background-color-yellow");
					if (ch == "n") {
						introNextSteps("#whileChNotEqN","", "right");
						introjs.refresh();
						setTimeToIntroGoesNextStep();
					} else {
						$("#temp, #createinitTemp").addClass("background-color-yellow");
						$("#createinitTemp , #temp").addClass("background-color-yellow");
						var text = "Control enters into <y>do-while</y> body\n Allocate memory for <y>struct</y> variable <y>temp</y>.";
						tooltipBooletsAppendAndTypeText("#coeffExp", "#createinitTemp", text, "ul", function() {
							introNextSteps("#animationDiv", "allocateMemory", "");
							$('.introjs-nextbutton').show();
						});
					}
			});
		break;
		case "readValuesFromKeyBord":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#temp, #createinitTemp").removeClass("background-color-yellow");
				arrow("#createinitTemp", "#console1", function() {
					$("#console1, #readConsole1").addClass("background-color-yellow");
					arrow("#console1", "#readConsole1", function() {
						introNextSteps("#outputDiv", "readValuesFromKeyboard", "right");
						setTimeToIntroGoesNextStep();
					});
				});
			});
		break;
		case "storeCoeffNdExp" :
			$("#console1, #readConsole1").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#tCoeff").addClass("background-color-yellow");
				$(".introjs-tooltip").removeClass("hide");
				var text = "The user given <y>coefficient</y> value <y>"+ arr[0] +"</y> is stored in the <y>coeff</y> field of <y>temp</y>.";
				tooltipBooletsAppendAndTypeText("#readConsole1", "#tCoeff", text, "ul", function() {
					$("#tExp").addClass("background-color-yellow");
					var text = "The user given <y>exponent</y> value <y>"+ arr[1] +"</y> is stored in <y>exp</y> field of <y>temp</y>.";
					tooltipBooletsAppendAndTypeText("#tCoeff", "#tExp", text, "li", function() {
						$("#tNext").addClass("background-color-yellow");
						var text = "The <y>NULL</y> is stored in the <y>next</y> field of <y>temp</y>.";
						tooltipBooletsAppendAndTypeText("#tExp", "#tNext", text, "li", function() {
							introNextSteps("#animationDiv", "readCoeffAndExpValues", "");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "callAddTerm":
			$("#tCoeff, #tExp, #tNext").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#callAddTerm").addClass("background-color-yellow");
				$(".introjs-tooltip").removeClass("hide");
				var text = "Here, we are calling <y>addTerm()</y> method and pass two arguments (i.e. <y>"+ firstAdd 
							+ "</y> and <y>"+ randomAdd +"</y>) in <y>addTerm()</y>.";
				tooltipBooletsAppendAndTypeText("#tNext", "#callAddTerm", text, "ul", function() {
					flip("#aHead", firstAdd, function() {
						flip("#aTemp", randomAdd, function() {
							$("#preAddTerm").removeClass("hide");
							arrow("#tNext", "#callAddTerm");
							introNextSteps("#preAddTerm", "", "right");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "preAddTerm" :
			$("#createCall1").removeClass("z-index1000000");
			$("#callAddTerm").addClass("z-index1000000");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structDiv, #mainDiv").addClass("hide");
				$(".arrow").remove()
				addTermMethodDefinition();
				introjs.refresh();
				addTermFunctionAnimation();
			});
		break;
		case "addTermLogic" :
			$("#aCallHndT, #p1ndp2Dec, #p1NdP2Init").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
							+ "<span  id='tooltipFront'>p1</span> == NULL</span></li>";
				tooltipBooletsAppendAndTypeText("#p1NdP2Init", "#ifp1EqNullBefore", text, "ul", function() {
					trueOrFalseCondition("#ifp1EqNullBefore", "#tooltipFront", address.length == 1, "NULL", firstAdd, function() {
						if (address.length == 1) {
							$("#tmpToHead").addClass("background-color-yellow");
							var text = 'Now, store <y>temp</y> value (i.e. <y>'+ randomAdd +'</y>) to <y>head</y>.';
							tooltipBooletsAppendAndTypeText("#ifp1EqNullBefore", "#tmpToHead", text, "li", function() {
								introNextSteps("#animationDiv", "storeTempToHead", "");
								$('.introjs-nextbutton').show();
							});
						} else {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
									+ "onclick='addTermElseCondition()'>Next &#8594;</a>");
						}
					});
				});
			});
		break;
		case "rtnHead" :
			$(".y").removeClass("y");
			$("#ifp1EqNullBefore, #tmpToHead").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				introNextSteps("#yesOrNoQus", "", "");
				setTimeToIntroGoesNextStep();
			});
		break;
		case "yesOrNoQus" :
			$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
			$("#preAddTerm").addClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
				introNextSteps("#outputDiv", "enterYesOrNoToContinue", "right");
				setTimeToIntroGoesNextStep();
			});
		break;
		case "addTermIfLogic":
			$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				ifWhileFalse();
			});
		break;
		}
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$(".introjs-nextbutton").hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function addTermElseCondition() {
	$('.user-btn').remove();
	$("#ifp1EqNullBefore").removeClass("background-color-yellow").removeAttr('style');;
	$("#whileP1NotNull").addClass("background-color-yellow");
	var text = "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='pOneVal'>p1</span> != NULL && <span id='p1ExpVal'>p1 -> exp</span> &gt; "
				+ "<span id='tempExpVal'>temp -> exp</span></span></li>";
	tooltipBooletsAppendAndTypeText("#ifp1EqNullBefore", "#whileP1NotNull", text, "li", function() {
		travel('#whileP1NotNull', $(".introjs-tooltiptext ul li:last-child span"), function() {
			flip("#pOneVal", firstAdd, function() {
				flip("#p1ExpVal", firstExpVal, function() {
					flip("#tempExpVal", arr[1], function() {
						var text = "";
						if (firstAdd != "null" && firstExpVal > parseInt(arr[1])) {
							text = "Since it evaluates to <y>true</y>, so the control enters into <y>while-block</y>" 
								+ " and repeat the loop until the while loop will evaluates to <y>false</y>."
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								introNextSteps("#animationDiv", "repeatWhileLoop", "");
								$('.introjs-nextbutton').show();
							});
						} else {
							text = "Since it evaluates to <r>false</r>.";
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
										+ "onclick='ifWhileFalse()'>Next &#8594;</a>");
							});
						}
					});	
				});
			});
		});
	});
}

function ifWhileFalse() {
	$(".user-btn").remove();
	$("#whileP1NotNull").removeClass("background-color-yellow").removeAttr('style');
	$("#ifp1EqNullAfter").addClass("background-color-yellow");
	if(p1 == null || arr[1] != listExp[0]) {
		$('.introjs-tooltiptext').append('<ul></ul>');
	}
	var text = "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='p1Val'>p1</span> == NULL</span>";
	tooltipBooletsAppendAndTypeText("#whileP1NotNull", "#ifp1EqNullAfter", text, "li", function() {
		trueOrFalseCondition("#ifp1EqNullAfter", "#p1Val", (p1 == null), "NULL", address[p1NdP2Val + 1], function() {
			if(p1 == null) {
				$("#tempTpNxtP2").addClass("background-color-yellow");
				$("#ifp1EqNullAfter").removeClass("background-color-yellow").removeAttr("style");
				var text = "Now store the <y>temp</y> value (i.e. <y>"+ randomAdd +"</y>) to the <y>next</y> field of <y>p2</y>.";
				tooltipBooletsAppendAndTypeText("#ifp1EqNullAfter", "#tempTpNxtP2", text, "li", function() {
					introNextSteps("#animationDiv", "storeTempValueToP2Next", "");
					$('.introjs-nextbutton').show();
				});
			} else {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
						+ "onclick='checkIfP1ExpNdTmpExpSame()'>Next &#8594;</a>");
			}
		});
	});
}

function checkIfP1ExpNdTmpExpSame() {
	$(".user-btn").remove();
	$("#ifp1EqNullAfter").removeClass("background-color-yellow").removeAttr('style');
	$("#p1EqTemp").addClass("background-color-yellow")
	var text = "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='p1ExpVal1'>p1 -> exp</span> == <span id='tempExpVal1'>temp -> exp</span></span></li>";
	tooltipBooletsAppendAndTypeText("#ifp1EqNullAfter", "#p1EqTemp", text, "li", function() {
		flip("#p1ExpVal1", parseInt(p1["exp"]), function() {
			flip("#tempExpVal1", parseInt(temp["exp"]), function() {
				var text = "";
				if (parseInt(p1["exp"]) == parseInt(temp["exp"])) {
					text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
								+ "onclick='ifBothp1ExpAndTempExpAreSame()'>Next &#8594;</a>");
					});
				} else {
					text = "Since it evaluates to <r>false</r>."
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
								+ "onclick='checkIfP1ExpNdTmpExpgreaterThan()'>Next &#8594;</a>");
					});
				}
				
			});
		});
	});
}

function ifBothp1ExpAndTempExpAreSame() {
	$(".user-btn").remove();
	$("#p1EqTemp").removeClass("background-color-yellow").removeAttr('style');
	$("#p1PlsTemp").addClass("background-color-yellow");
	arrow("#p1EqTemp", "#p1PlsTemp", function() {
		var text = "<li>Here, we are adding <y>coeff</y> field of <y>p1</y> and <y>coeff</y> field of <y>temp</y> them store the result into "
					+ " the <y>coeff</y> field of <y>p1</y>.</li>";
		$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
		typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
			introNextSteps("#animationDiv", "addp1CoeffAndTempCoeff", "");
			$('.introjs-nextbutton').show();
		});
	});
}

function checkIfP1ExpNdTmpExpgreaterThan() {
	$(".user-btn").remove();
	$("#p1EqTemp").removeClass("background-color-yellow").removeAttr("style");
	$("#p1LessTemp").addClass("background-color-yellow");
	var text = "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='p1ExpVal2'>p1 -> exp</span> &lt; <span id='tempExpVal2'>temp -> exp</span></span></li>";
	tooltipBooletsAppendAndTypeText("#p1EqTemp", "#p1LessTemp", text, "li", function() {
		flip("#p1ExpVal2", parseInt(p1["exp"]), function() {
			flip("#tempExpVal2", parseInt(temp["exp"]), function() {
				var text = "";
				if (parseInt(p1["exp"]) < parseInt(temp["exp"])) {
					text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
				} else {
					text = "Since it evaluates to <r>false</r>."	
				}
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
							+ "onclick='checkIfP1andP2AreSameOrNot()'>Next &#8594;</a>");
				});
			});
		});
	});
}

function checkIfP1andP2AreSameOrNot() {
	$(".user-btn").remove();
	$("#p1LessTemp").removeClass("background-color-yellow").removeAttr("style");
	$("#p2EqP1").addClass("background-color-yellow");
	var text = "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='p2Value'>p2</span> == <span id='p1Value'>p1</span></span></li>";
	tooltipBooletsAppendAndTypeText("#p1LessTemp", "#p2EqP1", text, "li", function() {
		flip("#p1Value", address[p1NdP2Val + 1], function() {
			flip("#p2Value", (address.length == 2) ? address[p1NdP2Val + 1] : address[p1NdP2Val - 1], function() {
				var text = "";
				if (p2 == p1) {
					text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$("#p2EqP1").removeClass("background-color-yellow").removeAttr("style");
						$("#p1ToTmpNxt, #tmpToHead1").addClass("background-color-yellow");
						arrow("#p2EqP1", "#p1ToTmpNxt", function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
									+ "onclick='storep1ToTmpNdTmpToHead()'>Next &#8594;</a>");
						});
					});
				} else {
					text = "Since it evaluates to <r>false</r>."	
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$("#p2EqP1").removeClass("background-color-yellow").removeAttr("style");
						$("#p1ToTmpNxt1, #tmpToP2Nxt").addClass("background-color-yellow");
						arrow("#p2EqP1", "#p1ToTmpNxt1", function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
									+ "onclick='storep1ToTmpNdTmpToHead()'>Next &#8594;</a>");
						});
					});
				}
			});
		});
	});
}

function storep1ToTmpNdTmpToHead() {
	$(".user-btn").remove();
	if (p2 == p1) {
		var text = "<li>Here, store the <y>p1</y> value (i.e. <y>"+ address[p1NdP2Val + 1]  +"</y>)into the <y>next</y> "
					+ "field of <y>temp</y> node also assign <y>temp</y> value (i.e. <y>"+ randomAdd +"</y>) to <y>head</y> node.</li>";
	} else {
		var text = "<li>Here, store the <y>p1</y> value (i.e. <y>"+ address[p1NdP2Val + 1]  +"</y>) into the <y>next</y> "
					+ "field of <y>temp</y> node also assign <y>temp</y> value (i.e. <y>"+ randomAdd +"</y>) to the "
					+ " <y>next</y> field of <y>p2</y> node.</li>";
	}
	$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
	typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
		introNextSteps("#animationDiv", "storep1AndTempValue", "");
		$('.introjs-nextbutton').show();
	});
}

function trueOrFalseCondition(selector1, selector2, condition, value1, value2, callBackFunction) {
	travel(selector1, $(".introjs-tooltiptext ul li:last-child span"), function() {
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


function createMethodDef() {
	var createMethodCode = '<span id="methodName">poly create(<span id="createHead">poly head</span>) {</span>\n'
		+ '\t<span id="ch">char ch;</span>\n'
		+ '\t<span id="coeffExp">int coeff, exp;</span>\n'
		+ '\t<span id="doWhileLoop">do {\n'
		+ '\t\t<span id="temp">poly temp;</span>\n'
		+ '\t\t<span id="createinitTemp">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
		+ '\t\t<span id="readValuesFromKeyBord"><span id="console1">printf("Enter coeff, exp of node : \\n");</span>\n'
		+ '\t\t<span id="readConsole1">scanf("%d %d", &coeff, &exp);</span></span>\n'
		+ '\t\t<span id="storeCoeffNdExp"><span id="tCoeff">temp -> coeff = coeff;</span>\n'
		+ '\t\t<span id="tExp">temp -> exp = exp;</span>\n'
		+ '\t\t<span id="tNext">temp -> next = NULL;</span></span>\n'
		+ '\t\t<span id="callAddTerm">head = addterm(<span id="aHead" class="position">head</span>, '
		+ '<span id="aTemp" class="position">temp</span>);</span>\n'
		+ '\t\t<span id="yesOrNoQus"><span id="console2">printf("Do u want another node(y/n): \\n");</span>\n'
		+ '\t\t<span id="readConsole2">scanf("  %c", &ch);</span></span>\n'
		+ '\t} <span id="whileChNotEqN">while(ch != \'n\');</span></span>\n'
		+ '\t<span id="returnHead">return head;</span>\n' + '}\n';
	$('#preTemp').empty().append(createMethodCode);
}

function addTermMethodDefinition() {
	$('.y').removeClass('y');
	var addtermCode = '<span id="addTermFunName">poly addterm(<span id="aCallHndT">poly head, poly temp</span>) {</span>\n'
			+ '\t<span id="p1ndp2Dec">poly p1,p2;</span>\n'
			+ '\t<Span id="p1NdP2Init">p1 = p2 = head;</span>\n'
			+ '\t<span id="addTermLogic"><span id="ifp1EqNullBefore">if(p1 == NULL) {</span>\n'
			+ '\t\t<span id="tmpToHead">head = temp;</span>\n'
			+ '\t} else {\n'
			+ '\t\t<span id="whileP1NotNull">while(p1 != NULL && p1 -> exp > temp -> exp) {</span>\n'
			+ '\t\t\t<span id="p1ToP2">p2 = p1;</span>\n'
			+ '\t\t\t<span id="p1NxtTop1">p1 = p1 -> next;</span>\n'
			+ '\t\t}\n'
			+ '\t\t<span id="addTermIfLogic"><span id="ifp1EqNullAfter">if(p1 == NULL) {</span>\n'
			+ '\t\t\t<span id="tempTpNxtP2">p2 -> next = temp;</span>\n'
			+ '\t\t<span id="p1EqTemp">} else if(p1 -> exp == temp -> exp) {</span>\n'
			+ '\t\t\t<span id="p1PlsTemp">p1 -> coeff = p1 -> coeff + temp -> coeff;</span>\n'
			+ '\t\t<span id="p1LessTemp">} else if(p1 -> exp < temp -> exp) {</span>\n'
			+ '\t\t\t<span id="p2EqP1">if(p2 == p1) {</span>\n'
			+ '\t\t\t\t<span id="p1ToTmpNxt">temp -> next = p1;</span>\n'
			+ '\t\t\t\t<span id="tmpToHead1">head = temp</span>;\n'
			+ '\t\t\t} else {\n'
			+ '\t\t\t\t<span id="p1ToTmpNxt1">temp -> next = p1;</span>\n'
			+ '\t\t\t\t<span id="tmpToP2Nxt">p2 -> next = temp;</span>\n'
			+ '\t\t\t}\n'
			+ '\t\t}</span>\n'
			+ '\t}</span>\n'
			+ '\t<span id="rtnHead">return head;</span>\n' + '}\n';
	$("#preAddTerm").empty().append(addtermCode);
}

function createNodeAnimation() {
	$("#createHead").addClass("background-color-yellow");
	var text = "Here, store, the <y>head"+ printCount +"</y> value (i.e. <y>NULL</y>) to the <y>head</y>.";
	tooltipBooletsAppendAndTypeText("#methodName", "#methodName", text, "ul", function() {
		$("#ch, #coeffExp").addClass("background-color-yellow");
		var text = "Here, we are declaring a <y>character</y> variable <y>ch</y> and"
					+ " <y>two</y> integer variables <y>coeff</y> and <y>exp</y>. ";
		tooltipBooletsAppendAndTypeText("#methodName", "#ch", text, "li", function() {
			arrow("#ch", "#coeffExp", function() {
				introNextSteps("#animationDiv", "variablesDec", "");
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function addTermFunctionAnimation() {
	$("#aCallHndT").addClass("background-color-yellow");
	$(".introjs-tooltip").removeClass("hide");
	var text = "The <y>"+ firstAdd +"</y> value will be stored in <y>head</y> and <y>"+ randomAdd 
				+ "</y> value will be stored in <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#addTermFunName", "#addTermFunName", text, "ul", function() {
		$("#p1ndp2Dec").addClass("background-color-yellow");
		var text = "Here we are declaring two pointer variables <y>p1</y> and <y>p2</y>.";
		tooltipBooletsAppendAndTypeText("#addTermFunName", "#p1ndp2Dec", text, "li", function() {
			$("#p1NdP2Init").addClass("background-color-yellow");
			var text = "Here we are initializing two pointer variables <y>p1</y> and <y>p2</y> to <y>head</y> value (i.e. <y>"+ 
						firstAdd +"</y>).";
			tooltipBooletsAppendAndTypeText("#p1ndp2Dec", "#p1NdP2Init", text, "li", function() {
				introNextSteps("#animationDiv", "addTermVariablesDec", "");
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function tooltipBooletsAppendAndTypeText(selector1, selector2, text, appendText, callBackFunction) {
	arrow(selector1, selector2, function() {
		$(".introjs-tooltip").removeClass("hide");
		if (appendText == "ul") {
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

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
		element : stepName,
		intro : '',
		position : position,
		tooltipClass : "hide",
		animateStep : animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({
		"element" : stepName
	});
}

function setTimeToIntroGoesNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1500);
}

