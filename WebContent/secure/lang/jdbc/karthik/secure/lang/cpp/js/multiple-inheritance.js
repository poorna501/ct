var introjs;
var typingSpeed = 1;
var flag1 = true;
var clickIndex;

var inheritanceConceptReady = function() {
	$("a").on("click", function() {//description
		$(".code").addClass("hide");
		$("#first").removeClass("opacity00");
		$(".output-console-body").empty();
		clickIndex = $(this).attr("index");
		introjs.insertOption(introjs._currentStep + 1, insertionIntro("description", "", "", "hide"));
		introjs.nextStep();
	});
	introJsFunction();
	$(".introjs-prevbutton").hide();
	var text = "Here we will learn the <y>multiple inheritance</y> concept.";
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
			position : "bottom",
			tooltipClass: "hide"
		}
		]});
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		switch (elementId) {
		
		case "defination":
			
		break;
		
		case "description":
			
		break;
		
		case "inheritanceFlow":
			
			$(".introjs-prevbutton").hide();
			
				if (introjs._direction == "backward") {
					if (introjs._introItems.length > 3) {
						$("#code2").addClass("opacity00");
						introjs._introItems.splice(4);
					}
				}
			
		break;
		
		case "code2":
			
		break;
		
		case "headerFiles" + clickIndex:
		case "firstClass2" :
		case "secondClass2":
		case "thirdClass2" :	
			
		break;
			
		case "mainMthd2":
			
		break;
		
		case "singleObj2":
			
		break;
			
		case "cout1":
			
		break;
		
		case "cout2":
			
		break;
		
		case "cout3" + clickIndex:
			
		break;
		
		case "print1":
			
		break;  
		
		case "print2":
			
			
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
			
		break;
		
		case "print3" + clickIndex:
			
		break;
		
		case "objB":
			
		break;	
			
		case "callShow" + clickIndex:
			
		break;
			
		case "showMthd" + clickIndex:
			
		break;	
			
		case "outputBox":
			
				if (introjs._direction == "backward") {
					introjs._introItems.splice(13);
				}
		break;	
		}
	})
	
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		
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
		
		
		switch (elementId) {
		
		case "description":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>multiple inheritance</e> contains more than one <e>base class</e> and one <e>derived class</e>.</li>"
						+"<li>The <e>derived class</e> inherits all the properties of all <e>base</e> classes.</li></ul></div>");
				$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
				TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
					$(".user-btn").removeClass("opacity00")
				}})
				
			});
		break;
		
		case "inheritanceFlow":
			
			$(".introjs-prevbutton").hide();
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#flow2").removeClass("hide");
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("code2", "", "", "hide"));
				text = "<ul><li>This is how the <y>multiple inheritance</y> has been done.</li><li>Click on <y>next</y> button to see the sample code.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				})
				
			});
		break;
		
		case "code2":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#code2").removeClass("opacity00");
				
				if (introjs._direction == "forward") {
					var index = 1;
					var text = "Let us consider this is a <y>" + $("#heading" + clickIndex).text().toLowerCase() +"</y> program.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("firstClass2", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("secondClass2", "", "left"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("thirdClass2", "", "left"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("mainMthd2", "", "left"));
						setTimeout(function() {
							introjs.nextStep();
						}, 250);
					}); 
				} else {
					stepNext();
				}
			});
		break;
		
		case "headerFiles" + clickIndex:
		case "firstClass2":
		case "secondClass2":
		case "thirdClass2":	
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
				flowSteps(elementId, visit);
			})
		break;
			
		case "mainMthd2":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#mainMthd2").removeClass("opacity00");
				var Inheritance = $("#heading" + clickIndex).text();
				var text = "The program execution starts from <y>main()</y> function.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("singleObj2", "", "right", ""));
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;
		
		case "singleObj2":
			$(".introjs-helperLayer").one("transitionend", function() {
				 text = "<ul><li><y>obj1</y> is an object of class <y>C</y>.</li>"
						+"<li>since class <y>C</y> is derived from class <y>A</y>, class <y>B</y> so "
						+"the object of class <y>C</y> can access the public members of class <y>A</y> and class <y>B</y>.</li></ul>"
				
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1", "", "right", ""));
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				})
			})
		break;
			
		case "cout1":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
				
				var text = "<y>cout</y> is used to print the text on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
				introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			});
		break;
		
		case "cout2":
			$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
				var text = "<y>cout</y> is used to print the text on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two";
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			});
		break;
		
		case "cout3" + clickIndex:
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				var text = "<y>cout</y> is used to print the text on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two"; //
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;
		
		case "print1":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var text = "Now the <y>obj1</y> can access the publicly inherited class <y>A</y>"
							+" member function <y>display()</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("display2", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout1", "", "top", ""));
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
				})
		break;  
		
		case "print2":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var text = "Here <y>obj1</y> calls the member function <y>show()</y> directly.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("show2", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout2", "", "top", "hide"));
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				})
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
			
			
		case "print" + clickIndex:
		case "show2":
		case "display2":
			$(".introjs-helperLayer").one("transitionend", function() {
				stepNext();
				
			})
		break;	
			
		case "print3" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				if ("print3" + clickIndex === "print34") {
					var text = "Here <y>obj2</y> calls the member function <y>print()</y> directly.";
						typing($(".introjs-tooltiptext"), text, function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("print4", "", "right", "hide"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("objB", "", "right", ""));
							$(".introjs-nextbutton").show();
						})
				}	
			})
		break;
		
		case "objB":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>object</y> for class <y>B</y> is created in the member function.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("callShow4", "", "right", ""));
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;	
			
		case "callShow" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
					if ("callShow" + clickIndex === "callShow3") {
					var text = "Here calling the method <y>display()</y> of class <y>A</y> from <y>print()</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("showMthd3", "", "right", "hide"));
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
				} else {
					var text = "Here <y>objB</y> calls the member function <y>show()</y> of class <y>B</y> with the object <y>objB</y> in class <y>C</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("showMthd4", "", "right", "hide"));
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
				}
			})
		break;
			
		case "showMthd" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
					if ("showMthd" + clickIndex === "showMthd3") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout13", "", "right", ""));
						stepNext();
					} else {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout34", "", "right", ""));
						stepNext();
					}
			})
		break;	
			
		case "outputBox":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (introjs._direction == "forward") {
					
						$("#outputBox").removeClass("opacity00");
						
						if (visit === "class_A") {
							$(".output-console-body").html("<div>This is base class A</div>");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("print2", "", "right",""));
						} else if (visit === "print2_two") {
							$(".output-console-body").append("<div>This is base class B</div>");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("restartBtn", "", "right","hide"));
						}
						
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
				} else {
					$(".output-console-body").empty();
					stepNext();
					
				}
				
				
				
			})
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
	console.log("flowSteps method ....");
	$(".introjs-tooltip").removeClass("hide");
	var text = "";
	
	if (elementId === "secondClass2") {
		$("#secondClass2").removeClass("opacity00");
		text = "Here class <y>B</y> is the <y>base class</y> <b>(or)</b> <y>parent class</y>, which contains only "
			+"one member function <y>show()</y>.";
	} else if (elementId == "thirdClass2") {
		$("#thirdClass2").removeClass("opacity00");
		text = "The class <y>C</y> is a <y>derived class</y> which inherits the properties of class <y>A</y> and class <y>B</y> publicly.";
	}  else if (elementId == "firstClass2") {
			text = "Here class <y>A</y> is the <y>base class</y> <b>(or)</b> <y>parent class</y>, which contains only one member"
					+" function <y>display()</y>.";
	}
	
	typing($(".introjs-tooltiptext"), text, function() {
		
		if (visit === "second_visit") {
			$("#inheritA").removeClass("hide");
			setTimeout(function() {
				TweenMax.fromTo("#inheritA", 1, {top : "-39px"}, {top: "0px", opacity:1})
			},150);
		}
		
		$(".introjs-prevbutton, .introjs-nextbutton").show();
		
	});
}


function descriptionStep() {
	$(".code").addClass("hide");
	$("#code" + clickIndex).removeClass("hide");
	$("#head" + clickIndex).removeClass("hide");
	/* if (clickIndex === "1") { */
		console.log("in the clickIndex...");
		descriptionFunction();
	//}
}

function descriptionFunction() {
	
	if (clickIndex === "1") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>single inheritance</e> contains one <e>base class</e> and one <e>derived class</e>.</li>"
								+"<li>The <e>derived class</e> inherits all the properties of a <e>base class</e>.</li></ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul li").last().append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00");
		}})
	} else if (clickIndex === "2") {
		
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>multiple inheritance</e> contains more than one <e>base class</e> and one <e>derived class</e>.</li>"
				+"<li>The <e>derived class</e> inherits all the properties of a <e>base</e> class.</li></ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00")
		}})
	} else if (clickIndex === "3") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>A <e>derived class</e> itself acts as a <e>base class</e> for another class"
				+"is known as <e>multilevel inheritance</e>.</li></ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00");
		}})
	} else if (clickIndex === "4") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>hierarchical inheritance</e> contains one <e>base class</e> and more than one <e>derived class</e>.</li>"
				+"<li>In this type of inheritance, more than one <e>sub class</e> inherits the properties from a single <e>base class</e>.</li>"
				+"</ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00");
		}})
	}
	
	introjs.refresh();
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
