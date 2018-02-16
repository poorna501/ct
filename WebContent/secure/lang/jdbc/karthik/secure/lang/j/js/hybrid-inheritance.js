
var typingSpeed = 0.001;
var flag1 = true;

var hybridInheritanceReady = function() {
	introJsFunction();
	$(".introjs-prevbutton").hide();
	var text = "Here we will learn about how a <y>hybrid inheritance</y> works.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-nextbutton").show();
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"//description
		},{
			element : "#description",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		}
		]});
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		introjs.refresh();
		switch (elementId) {
		
		case "inheritanceFlow":
			if (introjs._direction == "backward") {
				introjs._introItems.splice(4);
				$("#code4").addClass("opacity00");
				$("#secondClass").addClass("opacity00");
				$("#thirdClass").addClass("opacity00");
				$("#fourthClass").addClass("opacity00");
				$("#mainMthd").addClass("opacity00");
			}
		break;
		
		case "outputBox":
			if (introjs._direction == "backward") {
				switch(animateStep) {
				case "cout1":
					introjs._introItems.splice(14);
				break;
				
				case "cout2":
					introjs._introItems.splice(18);
				break;
				
				case "cout3":
					introjs._introItems.splice(22);
				break;
				
				case "cout4":
					introjs._introItems.splice(26);
				break;
				}
			}
		break;
		
		}
	})
	
	
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0 && elementId !== "inheritanceFlow") {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		introjs.refresh();
		switch (elementId) {
			
			case "description":
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					
					$("#textDesc").html("<div class='col-xs-12'><ul><li>A combination of one or more types of inheritance is known as <e>hybrid inheritance</e>.</li>"
							+"<li>Sometimes, it is essential to derive a class using more types of inheritance.</li>"
							+"</ul></div>");
					
					$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
					TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
						$(".user-btn").removeClass("opacity00");
					}});
				});
				
			break;
			
			case "inheritanceFlow":
				
				$(".introjs-prevbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					
					$("#flow4").removeClass("hide");
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("code4", "", "", "hide"));
					text = "<ul><li>This is how the <y>hybrid inheritance</y> has been done.</li><li>Click on <y>next</y> button to see the sample code.</li></ul>";
					
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					})
					
				});
			break;
			
			case "code4":
				
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#code4").removeClass("opacity00");
					
					if (introjs._direction == "forward") {
						
						var index = 1;
							
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("firstClass", "", "top"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("secondClass", "", "left"));
							introjs.insertOption(introjs._currentStep + 3, insertionIntro("thirdClass", "", "top"));
							introjs.insertOption(introjs._currentStep + 4, insertionIntro("fourthClass", "", "left"));
							introjs.insertOption(introjs._currentStep + 5, insertionIntro("mainMthd", "", "top"));
							
							setTimeout(function() {
								introjs.nextStep();
							}, 250);
							
					} else {
						stepNext();
					}
				});
			break;
			
			case "firstClass":
			case "secondClass":
			case "thirdClass":
			case "fourthClass":	
				$(".introjs-tooltip").removeClass("hide");
				$(".introjs-helperLayer").one("transitionend", function() {
					
					flowSteps(elementId, visit);
				})
			break;
				
			case "mainMthd":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#mainMthd").removeClass("opacity00");
					var text = "The program execution starts from <y>main()</y> function.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("singleObj", "", "right", ""));
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
				})
			break;	
				
			case "singleObj":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					text = "<ul><li><y>obj</y> is the object of Derived2 class can access the public member functions"
							+" of <y>Base1</y>, <y>Derived1</y> and <y>Derived2</y> classes.</li></ul>";
					
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1", "", "right", ""));
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					})
				})
			break;
				
			case "print1":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("display1", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout1", "", "top", ""));
					
					var text = "Now the <y>obj</y> can access the publicly inherited class <y>Base1</y> member"
								+" function <y>display1()</y>.";
					
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						})
					})
			break;  
			
			case "print2":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now the <y>obj</y> can access the publicly"
								+" inherited class <y>Derived1</y> member function <y>show1()</y>.";
					
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("show1", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout2", "", "top", ""));
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-prevbutton, .introjs-nextbutton").show();
						})
				})
			break;
				
			case "display1":
			case "show1":
			case "display2":
			case "show2":	
				$(".introjs-helperLayer").one("transitionend", function() {
					stepNext();
				})
			break;	
				
			case "print3":
				$(".introjs-helperLayer").one("transitionend", function() {
						var text = "Now the <y>obj</y> can access the publicly"
									+" inherited class <y>Base2</y> member function <y>display2()</y>.";
							typing($(".introjs-tooltiptext"), text, function() {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("display2", "", "right", "hide"));
								introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout3", "", "top", ""));
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							})
				})
			break;	
			
			case "print4":
				$(".introjs-helperLayer").one("transitionend", function() {
						var text = "Here <y>obj</y> calls the member function <y>show2()</y> directly.";
							typing($(".introjs-tooltiptext"), text, function() {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("show2", "", "right", "hide"));
								introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout4", "", "top", ""));
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							})
				})
			break;	
				
				
			case "cout1":
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide", "cout1"));
					
						var text = "<y>cout</y> is used to print the text on the console.";
						typing($(".introjs-tooltiptext"), text, function() {
							
							$(".introjs-prevbutton, .introjs-nextbutton").show();
							
						});
				});
			break;
			
			case "cout2":
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide", "cout2"));
					
						var text = "<y>cout</y> is used to print the text on the console.";
						typing($(".introjs-tooltiptext"), text, function() {
							
							$(".introjs-prevbutton, .introjs-nextbutton").show();
							
						});
				});
			break;
			
			case "cout3":
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide", "cout3"));
					
						var text = "<y>cout</y> is used to print the text on the console.";
						typing($(".introjs-tooltiptext"), text, function() {
							
							$(".introjs-prevbutton, .introjs-nextbutton").show();
							
						});
				});
			break;
			
			case "cout4":
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					introjs.refresh();
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide", "cout4"));
					
						var text = "<y>cout</y> is used to print the text on the console.";
						typing($(".introjs-tooltiptext"), text, function() {
							
							$(".introjs-prevbutton, .introjs-nextbutton").show();
							
						});
				});
			break;
			
			
			case "outputBox":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputBox").removeClass("opacity00");
					if (introjs._direction == "forward") {
							
							if (animateStep == "cout1") {
								$(".output-console-body").html("<div>This is first base class</div>");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("print2", "", "top",""));
							} else if (animateStep == "cout2") {
								$(".output-console-body").append("<div>This is first derived class</div>");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("print3", "", "top",""));
							} else if (animateStep == "cout3") {
								$(".output-console-body").append("<div>This is second base class</div>");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("print4", "", "top",""));
							} else if (animateStep == "cout4") {
								$(".output-console-body").append("<div>This is second derived class</div>");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("restartBtn", "", "top",""));
							}
							
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
							
					} else {
						$(".output-console-body div").last().remove();
						stepNext();
					}
				})
			break;
				
			case "restartBtn":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					$("#restartBtn").removeClass("opacity00");
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				});	
			break;	
				
		}
	})
	
	introjs.start();
}



function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 800);
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 800);
	}
}



function flowSteps(elementId, visit) {
	$(".introjs-tooltip").removeClass("hide");
	var text = "";
	
	if (elementId === "fourthClass") {
		$("#fourthClass").removeClass("opacity00");
		text = "<ul><li>Here class <y>Derived2</y> inherits the properties of both classes "
				+"<y>Base2</y> and <y>Derived1</y> publicly.</li><li>So, the objects of Derived2 class can access"
				+" the public member functions of <y>Base2</y>, <y>Derived1</y> and <y>Derived2</y> classes.</li></ul>";
	} else if (elementId === "thirdClass") {
		$("#thirdClass").removeClass("opacity00");
		text = "Here class <y>Base2</y> is the <y>base class</y> <b>(or)</b> <y>parent class</y>, which contains only one member"
			+" function <y>display2()</y>.";
	} else if (elementId === "secondClass") {
		$("#secondClass").removeClass("opacity00");
		text = "<ul><li>Here class <y>Derived1</y> inherits the properties of class <y>Base1</y>, which contains only one member function <y>show1()</y>.</li>"
			+"<li>The objects of class <y>Derived1</y> can access the public member function <y>display1()</y> of class <y>Base1</y>.</li></ul>";
	} else if (elementId == "firstClass") {
		text = "Here class <y>Base1</y> is the <y>base class</y> <b>(or)</b> <y>parent class</y>, which contains only one member"
				+" function <y>display1()</y>.";
	}
	
	typing($(".introjs-tooltiptext"), text, function() {
		
		$(".introjs-prevbutton, .introjs-nextbutton").show();
		
	});
}

function shiftStep() {
	$("#inheritanceFlow").removeClass("opacity00");
	$(".user-btn").remove();
	introjs.nextStep();
}

function insertionIntro(element, msg, position, tooltip, action) {
	
	var insert = {}; 
	if (typeof element != undefined) {
		insert["element"] = "#"+ element;
	} 
	if (typeof msg != undefined) {
		insert["intro"] = msg;
	}
	if (typeof position != undefined) {
		insert["position"] = position;
	}
	if (typeof tooltip != undefined) {
		insert["tooltipClass"] = tooltip;
	}
	if (typeof action != undefined) {
		insert["action"] = action;
	}
	return insert;
	
}


function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}



