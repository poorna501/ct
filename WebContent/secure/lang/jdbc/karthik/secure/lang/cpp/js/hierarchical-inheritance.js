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
	var text = "Here we will learn the <y>hierarchical inheritance</y> concept.";
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
		
		case "description":
			
		break;
		
		case "inheritanceFlow":
			
			$(".introjs-prevbutton").hide();
			if (introjs._direction == "backward") {
				if (introjs._introItems.length > 3) {
					$("#code4").addClass("opacity00");
					introjs._introItems.splice(4);
				}
			}
			
		break;
		
		case "code4":
			
		break;
		
		case "firstClass4":
		case "secondClass4":
		case "thirdClass4":	
			
		break;
			
		case "mainMthd4":
			
		break;
		
		case "singleObj4":
			
		break;
			
		case "cout1":
			
		break;
		
		case "cout2" + clickIndex:
			
		break;
		
		case "cout3" + clickIndex:
			
		break;
		
		case "print1":
			
		break;  
		
		case "print2":
			
		break;
		
		case "print3":
			
		break;
		
		case "objB":
			
		break;	
			
		case "callShow" + clickIndex:
			
		break;
			
		case "showMthd4":
			if (introjs._direction == "backward") {
				if (introjs._introItems.length > 22) {
					introjs._introItems.splice(22);
				}
			}
		break;	
			
		case "outputBox":
			
			
			if (introjs._direction == "backward") {
				if (introjs._introItems.length > 17) {
					introjs._introItems.splice(17);
				} else if (introjs._introItems.length > 13) {
					introjs._introItems.splice(13);
				} 
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
				$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>hierarchical inheritance</e> contains one <e>base class</e> and more than one <e>derived class</e>.</li>"
						+"<li>In this type of inheritance, more than one <e>sub class</e> inherits the properties from a single <e>base class</e>.</li>"
						+"</ul></div>");
				$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
				TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
					$(".user-btn").removeClass("opacity00");
				}})
				
			});
		break;
		
		case "inheritanceFlow":
			
			$(".introjs-prevbutton").hide();
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#flow4").removeClass("hide");
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("code4", "", "", "hide"));
				text = "<ul><li>This is how the <y>hierarchical inheritance</y> has been done.</li><li>Click on <y>next</y> button to see the sample code.</li></ul>";
				
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
					var text = "Let us consider this is a <y>" + $("#heading" + clickIndex).text().toLowerCase() +"</y> program.";
					typing($(".introjs-tooltiptext"), text, function() {
						
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("firstClass4", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("secondClass4", "", "left"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("thirdClass4", "", "left"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("mainMthd4", "", "top"));
						setTimeout(function() {
							introjs.nextStep();
						}, 250);
					}); 
				} else {
					stepNext();
				}
			});
		break;
		
		case "firstClass4":
		case "secondClass4":
		case "thirdClass4":	
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				flowSteps(elementId, visit);
			})
		break;
			
		case "mainMthd4":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#mainMthd4").removeClass("opacity00");
				var Inheritance = $("#heading" + clickIndex).text();
				var text = "The program execution starts from <y>main()</y> function.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("singleObj4", "", "right", ""));
					
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;
		
		case "singleObj4":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				text = "<ul><li><y>obj1</y> is an object of class <y>B</y>, it can access the public member functions of "
					+"class <y>B</y> as well as the public members of class <y>A</y>.</li><li><y>obj2</y> is an object of <y>class C,</y> it can access the public"
					+" member functions of class <y>B</y> as well as the public members of class <y>A</y>.</li></ul>";
				
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
						
						if (flag1) {
							introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
							flag1 = false;
						} else {
							introjs._introItems[introjs._currentStep + 1]["visits"] = "A_class";
						}
						
						$(".introjs-prevbutton, .introjs-nextbutton").show();
						
					});
			});
		break;
		
		break;
		
		case "cout3":
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
				
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("display4", "", "right", "hide"));
				introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout1", "", "top", ""));
				
				var text = "Now the <y>obj1</y> can access the publicly inherited class <y>A</y> member"
							+" function <y>display()</y>.";
				
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					})
				})
		break;  
		
		case "print2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now the <y>obj2</y> can access the publicly"
							+" inherited class <y>A</y> member function <y>display()</y>.";
				
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("display4", "", "right", "hide"));
				introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout1", "", "top", ""));
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					})
			})
		break;
			
		case "print4":
		case "display4":
			$(".introjs-helperLayer").one("transitionend", function() {
				stepNext();
			})
		break;	
			
		case "print3":
			$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here <y>obj2</y> calls the member function <y>print()</y> directly.";
						typing($(".introjs-tooltiptext"), text, function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("print4", "", "right", "hide"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("objB", "", "right", ""));
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						})
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
			
		case "callShow4":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var text = "Here <y>objB</y> calls the member function <y>show()</y> of class <y>B</y> with the object <y>objB</y> in class <y>C</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("showMthd4", "", "right", "hide"));
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;
			
		case "showMthd4":
			$(".introjs-helperLayer").one("transitionend", function() {
					
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout3", "", "top", ""));
					}
					stepNext();
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
			
		case "outputBox":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBox").removeClass("opacity00");
				if (introjs._direction == "forward") {
						
						if (visit === "print1_second_visit" || visit === "class_A" || visit === "A_class") {
							$(".output-console-body").html("<div>This is base class A</div>");
							if (visit === "A_class") {
								$(".output-console-body").append("<div>This is base class A</div>");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("print3", "", "right", ""));
							} else {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("print2", "", "right",""));
							}
						} else if (visit === "print2_two") {
							$(".output-console-body").append("<div>This is base class B</div>");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("restartBtn", "", "right", "hide"));
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
	
	if (elementId === "thirdClass4") {
		$("#thirdClass4").removeClass("opacity00");
		text = "The class <y>C</y> inherits the properties of class <y>A</y>, which contains only one member function <y>print()</y>.";
	} else if (elementId === "secondClass4") {
		$("#secondClass4").removeClass("opacity00");
		text = "<ul><li>Here class <y>B</y> inherits the properties of class <y>A</y>, which contains only one member function <y>show()</y>.</li>"
			+"<li>The objects of class <y>B</y> can access the public member function <y>display()</y> of class <y>A</y>.</li></ul>";
	} else if (elementId == "firstClass4") {
		$("#firstClass4").removeClass("opacity00");
		text = "Here class <y>A</y> is the <y>base</y> class <b>(or)</b> <y>parent</y> class, which contains only one member"
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
		descriptionFunction();
}

function descriptionFunction() {
	
	if (clickIndex === "1") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>single inheritance</e> contains one <e>base</e> class and one <e>derived</e> class.</li>"
								+"<li>The <e>derived</e> class inherits all the properties of a <e>base</e> class.</li></ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul li").last().append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00");
		}})
	} else if (clickIndex === "2") {
		
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>multiple inheritance</e> contains more than one <e>base</e> class and one <e>derived</e> class.</li>"
				+"<li>The <e>derived</e> class inherits all the properties of a <e>base</e> classes.</li></ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00")
		}})
	} else if (clickIndex === "3") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>A <e>derived</e> class itself acts as a <e>base</e> class for another class"
				+"is known as <e>multilevel inheritance</e>.</li></ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
			$(".user-btn").removeClass("opacity00");
		}})
	} else if (clickIndex === "4") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>hierarchical inheritance</e> contains one <e>base</e> class and more than one <e>derived</e> class.</li>"
				+"<li>In this type of inheritance, more than one <e>sub class</e> inherits the properties from a single <e>base</e> class.</li>"
				+"</ul></div>");
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn opacity00' id='next' onclick='shiftStep()'>Next &rarr;</span>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
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
