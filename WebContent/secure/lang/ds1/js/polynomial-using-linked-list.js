var lang;
var callCount = buttonName = outputCount = 1; 

var polynomialUsingLinkedList = function() {
	lang = getURLParameter("lang");
	initIntroJS();
	
}



function getURLParameter(sParam) { //choose the language like c or cpp...etc 
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
			tooltipClass: "hide"
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
			case "polyInit" :
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
			break;
			case "strcutSpan" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the declaration of a new <y>struct</y> type <y>polynomial</y>.<br><br>"
								+ "<ul><li><y>coeff</y> field is used to hold the <y>coefficient</y> inside the linked list.</li>"
								+ "<li><y>exp</y> field is used to hold the <y>Exponent </y> inside the linked list.</li>"
								+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				})
			break;
			case "typeDefDec" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass('hide');
					text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>node</y> to the '
							+'<y>struct poly</y> which is a <y>pointer</y>'
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "preMain" :
				$('#preMain').removeClass("hide").append('<div class="text-center b">In Main()</div>'+
							'<span id="headsDex">poly head1 = NULL, head2 = NULL,<br/> head3 = NULL;</span>');
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, we are declaring <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and "
								+"<y>head3</y> and initialize it to <y>NULL</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv" :
				$("#btnsDiv, .btn").attr("disabled", "disabled");
				$("#inMain").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "headDec":
								$('#canvas').removeClass("opacity00");
								setTimeout(function() {
									introjs.nextStep();
								},1500);
								introNextSteps("#btnsDiv", "", "");
						break;
						case "head1Null" :
						case "memoryAllocation" :
						case "StoreValues" :
						case "addTermMethod" :
							$("#createinitTemp , #temp, #console1, #readConsole1").removeClass("background-color-yellow");
							if (ch != 'n' && animateStep == "StoreValues") {
								$('#testBtn').click();
							} 
							doPlayPause();
						break;
						
					}
				});
			break;
			case "btnsDiv" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#btnsDiv').removeClass("opacity00");
					$("#btnsDiv, .btn").removeAttr("disabled");
				});
			break;
			case "createInMain" :
				$(".introjs-helperLayer").one("transitionend", function() {
					doPlayPause();
				});
			break;
			case "print1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					introNextSteps("#outputDiv", "text1", "");
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
			break;
			case "outputDiv" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "text" + callCount :
							$('#text' + callCount).removeClass("opacity00");
							introNextSteps("#head1Null", "call"+ callCount, "");
							setTimeout(function() {
								introjs.nextStep();
							},1500);
						break;
						case "readValues" :
							$('.output-console-body').append('<div id="output'+ outputCount +'">Enter coefficient, exponent'
									+ ' of node :  <div id="input'+ outputCount +'"><input class="output-scanf-line input" '
									+ 'id="val'+ outputCount +'" size="15" maxlength="6"/></div></div>');
							$('#val' + outputCount).focus();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Enter <y>coefficient</y> and <y>exponent</y> of the <y>list</y> each separated nnumber "
										+ "by a <y>space</y>.";
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#storeCoeffNdExp", "", "");
								readCoeffAndExpValuesFromConsole();
							});
						break;
					}
				});
			break;
			case "head" + callCount + "Null" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "call" + callCount :
							flip("#head"+ callCount +"Name", "NULL", function() {
								$(".introjs-tooltip").removeClass('hide');
								var text = "Here, we initialize the <y>head1</y> to <y>NULL</y>.<br/><br/> After initialization call "
									+ "<y>create</y> method and pass an argument <y>head1</y> (<y>NULL</y>) to <y>create</y> method, "
									+ "the <y>return</y> value of the <y>create</y> method will be stored in <y>head1</y>.";
								typing(".introjs-tooltiptext", text, function() {
									buttonName = "createBtn";
									introNextSteps("#animationDiv", "head1Null", "");
									$('.introjs-nextbutton').show();
								});
							});
						break;
					}
				});
			break;
			case "preTemp" :
				$(".introjs-helperLayer").one("transitionend", function() {
					if (buttonName == "createBtn") {
						$("#preTemp").removeClass("opacity00");
						createMethodDef();
						introjs.refresh();
						$("#createHead").addClass("background-color-yellow");
						arrow("#methodName", "#methodName", function() {
							$(".introjs-tooltip").removeClass("hide");
							$('.introjs-tooltiptext').append('<ul><li></li></ul>');
							var text = "Here, store, the <y>head1</y> value (<y>NULL</y>) to the <y>head</y>.";
							typing(".introjs-tooltiptext ul li:last", text, function() {
								arrow("#methodName", "#coeffExp", function() {
									$("#ch, #coeffExp").addClass("background-color-yellow");
									$('.introjs-tooltiptext ul ').append('<li></li>');
									var text = "Here, we are declaring a <y>character</y> variable <y>ch</y> and"
										+" <y>two</y> integer variables <y>coeff</y> and <y>exp</y>. ";
									typing(".introjs-tooltiptext ul li:last", text, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='allocateMemory()'>Next &#8594;</a>");
									});
								});
							});
						});
					}
				});
			break;
			case "storeCoeffNdExp" :
				$('.introjs-nextbutton').hide();
				$('.input' + outputCount).attr("disabled", "disabled");
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					arrow("#readConsole1", "#tCoeff", function() {
						$("#tCoeff").addClass("background-color-yellow");
						$('.introjs-tooltiptext').append("<ul><li></li></ul>");
						var text = "The <y>coeff</y> value (<y>"+ arr[0] +"</y>) is stored in the <y>coeff</y> field of <y>temp</y>.";
						typing(".introjs-tooltiptext ul li:last", text, function() {
							arrow("#tCoeff", "#tExp", function() {
								$("#tExp").addClass("background-color-yellow");
								$('.introjs-tooltiptext ul').append("<li></li>");
								var text = "The <y>exp</y> value (<y>"+ arr[1] +"</y>) is stored in the <y>exp</y> field of <y>temp</y>.";
								typing(".introjs-tooltiptext ul li:last", text, function() {
									arrow("#tExp", "#tNext", function() {
										$("#tNext").addClass("background-color-yellow");
										$('.introjs-tooltiptext ul').append("<li></li>");
										var text = "The (<y>null</y>) is stored in the <y>next</y> field of <y>temp</y>.";
										typing(".introjs-tooltiptext ul li:last", text, function() {
											introNextSteps("#animationDiv", "StoreValues", "");
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
				});
			break;
			case "callAddTerm" :
				$("#tCoeff, #tExp, #tNext").removeClass("background-color-yellow");
				$(".introjs-helperLayer").one("transitionend", function() {
					flip("#aHead", (address.length != 1) ? address[0] : "null", function() {
						flip("#aTemp", address[0], function() {
							arrow("#tNext", "#callAddTerm", function() {
								$(".introjs-tooltip").removeClass("hide");
								$("#callAddTerm").addClass("background-color-yellow");
								$('.introjs-tooltiptext').append("<ul><li></li></ul>");
								if (address.length != 1) {
									var text = "Here, we are calling <y>addTrem()</y> method and passing <y>two</y> variables <y>head</y> (<y>"
												+ address[0] +"</y>) and <y>temp</y> (<y>"+ address[0] +"</y>)";
								} else {
									var text = "Here, we are calling <y>addTrem()</y> method and passing <y>two</y> variables <y>head</y> (<y>"
										+ "null" +"</y>) and <y>temp</y> (<y>"+ address[0] +"</y>)";
								}
								typing(".introjs-tooltiptext ul li:last", text, function() {
									
									//introNextSteps("#animationDiv", "addTermMethod", "");
									
									$('.introjs-nextbutton').show();
								});
							});
						});
					})
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

function introNextSteps(stepName, animatedStep, position) {
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

function createMethodDef() {
	$('#preTemp').append('<span id="methodName">poly create(<span id="createHead">poly head</span>) {</span>\n'
	         + '\t<span id="ch">char ch;</span>\n'
	         + '\t<span id="coeffExp">int coeff, exp;</span>\n'
	         + '\t<span id="doWhileLoop">do {\n'
	         + '\t\t<span id="temp">poly temp;</span>\n'
	         + '\t\t<span id="createinitTemp">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
	         + '\t\t<span id="console1">printf("Enter coeff, exp of node : \\n");</span>\n'
	         + '\t\t<span id="readConsole1">scanf("%d %d", &coeff, &exp);</span>\n'
	         + '\t\t<span id="storeCoeffNdExp"><span id="tCoeff">temp -> coeff = coeff;</span>\n'
	         + '\t\t<span id="tExp">temp -> exp = exp;</span>\n'
	         + '\t\t<span id="tNext">temp -> next = NULL;</span></span>\n'
	         + '\t\t<span id="callAddTerm">head = addterm(<span id="aHead" class="position">head</span>, '
	         + '<Span id="aTemp" class="position">temp</span>);</span>\n'
	         + '\t\t<span id="console1">printf("Do u want another node(y/n): \\n");</span>\n'
	         + '\t\t<span id="readConsole2">scanf("  %c", &ch);</span>\n'
	         + '\t} while(ch != \'n\');</span>\n'
	         + '\treturn head;\n'
	         + '}\n');
}

function addTermMethodFun() {
	$("#preAddTerm").append('<span id="addTermFunName">poly addterm(<span id="aCallHndT">poly head, poly temp</span>) {</span>\n'
			+ '\t<span id="p1ndp2Dec">poly p1,p2;</span>\n'
			+ '\t<Span id="p1NdP2Init">p1 = p2 = head;</span>\n'
			+ '\t<span id="ifp1EqNull">if(p1 == NULL) {</span>\n'
			+ '\t\t<span id="tmpToHead">head = temp;</span>\n'
			+ '\t} else {\n'
			+ '\t\twhile(p1 != NULL && p1 -> exp > t -> exp) {\n'
			+ '\t\t\tp2 = p1;\n'
			+ '\t\t\tp1 = p1 -> next;\n'
			+ '\t\t}\n'
			+ '\t\tif(p1 == NULL) {\n'
			+ '\t\t\tp2 -> next = t;\n'
			+ '\t\t} else if(p1 -> exp == t -> exp) {\n'
			+ '\t\t\tp1 -> coeff = p1 -> coeff + t -> coeff;\n'
			+ '\t\t} else if(p1 -> exp < t -> exp) {\n'
			+ '\t\t\tif(p2 == p1) {\n'
			+ '\t\t\tt -> next = p1;\n'
			+ '\t\t\thead = t;\n'
			+ '\t\t} else {\n'
			+ '\t\t\tt -> next = p1;\n'
			+ '\t\t\tp2 -> next = t;\n'
			+ '\t\t}\n'
			+ '\t\t}\n'
			+ '\t}\n'
			+ '\treturn head;\n'
			+ '}\n')
}

function allocateMemory() {
	$(".user-btn").remove();
	$("#createHead, #ch, #coeffExp").removeClass("background-color-yellow");
	arrow("#coeffExp", "#createinitTemp", function() {
		$("#createinitTemp , #temp").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("\n<li></li>");
		var text = "Allocate memory for <y>struct</y> variable <y>temp</y>.";
		typing(".introjs-tooltiptext ul li:last", text, function() {
			$(".introjs-tooltiptext ul").append("\n<li></li>");
			arrow("#createinitTemp", "#console1", function() {
				$("#console1").addClass("background-color-yellow");
				var text = "Print <y>Enter coeff, exp of node :</y> on to the console.";
				typing(".introjs-tooltiptext ul li:last", text, function() {
					arrow("#console1", "#readConsole1", function() {
						$("#readConsole1").addClass("background-color-yellow");
						$(".introjs-tooltiptext ul").append("\n<li></li>");
						var text = "Read the <y>coeff</y> and <y>exp</y> value from the keyboard.";
						typing(".introjs-tooltiptext ul li:last", text, function() {
							introNextSteps("#animationDiv", "memoryAllocation", "");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}








