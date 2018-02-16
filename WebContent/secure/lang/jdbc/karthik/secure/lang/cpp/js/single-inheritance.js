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
	var text = "Here we will learn the <y>single inheritance</y> concept.";
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
			
		break;
		
		case "code1":
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 3);
			}
			
		break;
		
		case "secondClass1":
			
			if (visit === "print1_repeat_visit") {
				if (introjs._direction == "backward") {
					
					introjs._introItems.splice(introjs._introItems.length - 2);
					
				}	
			} else 	if (visit === "third_visit") {
				
			} else if (visit === "second_visit") {
				
				if (introjs._direction == "backward") {
					introjs._introItems.splice(introjs._introItems.length - 2);
				}
				
			} else {
				if (introjs._direction == "backward") {
					introjs._introItems.splice(introjs._introItems.length - 1);
				}
				
			}
			
		break;
		
		
		case "headerFiles" + clickIndex:
		case "firstClass1":
		
		case "thirdClass" + clickIndex:
			
		break;
			
		case "mainMthd1":
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
		break;
		
		case "singleObj1":
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
		break;
			
		case "cout1":
			
		break;
		
		case "cout2" :
			
		break;
		
		case "cout3" :
			
		break;
		
		case "print1":
				
				if (visit === "print1_repeat_visit") {
					if (introjs._direction == "backward") {
						introjs._introItems.splice(introjs._introItems.length - 1);
						
					}	
				} else 	if (visit === "third_visit") {
					
				} else if (visit === "second_visit") {
					
					if (introjs._direction == "backward") {
						introjs._introItems.splice(introjs._introItems.length - 1);
					}
					
				} else {
					if (introjs._direction == "backward") {
						introjs._introItems.splice(introjs._introItems.length - 1);
					}
					
				}
		break;  
		
		case "display1":
		case "show1":	
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
			
		break;	
		
		
		case "print2" + clickIndex:
			
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
				if (visit === "print2_one") {
					
				} else if (visit === "print2_first_visit" || visit === "print2_two") {
					
					if (introjs._direction == "backward") {
						introjs._introItems.splice(introjs._introItems.length - 1);
					}
					
					
				} else if (visit === "print1_second_visit" || visit === "class_A" || visit === "A_class") {
					$(".output-console-body").html('');
					if (introjs._direction == "backward") {
						introjs._introItems.splice(introjs._introItems.length - 3);
					}
					
				} else {
					
					if (introjs._direction == "backward") {
						introjs._introItems.splice(introjs._introItems.length - 1);
					}
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
			
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				
				$("#textDesc").html("<div class='col-xs-12'><ul><li>The <e>single inheritance</e> contains one <e>base class</e> and one <e>derived class</e>.</li>"
						+"<li>The <e>derived class</e> inherits all the properties of a <e>base class</e>.</li></ul></div>");
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
				
				$("#flow1").removeClass("hide");
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("code1" , "", "", "hide"));
				text = "<ul><li>This is how the <y>single inheritance</y> has been done.</li><li>Click on <y>next</y> button to see the sample code.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				})
				
			});
		break;
		
		case "code1": 
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#code1").removeClass("opacity00");
				
				if (introjs._direction == "forward") {
					var index = 1;
					var text = "Let us consider this is a <y>" + $("#heading" + clickIndex).text().toLowerCase() +"</y> program.";
					typing($(".introjs-tooltiptext"), text, function() {
						//introjs.insertOption(introjs._currentStep + 1, insertionIntro("headerFiles1", "", "top"));
						if (introjs._direction == "forward") {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("firstClass1", "", "left"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("secondClass1", "", "left", "hide"));
							introjs.insertOption(introjs._currentStep + 3, insertionIntro("mainMthd1", "", "left", "hide"));
						}
						setTimeout(function() {
							introjs.nextStep();
						}, 250);
					}); 
				} else {
					stepNext();
				}
			});
		break;
		
		case "headerFiles1":
		case "firstClass1":
		case "secondClass1":
		case "thirdClass1":	
			$("#code1").removeClass("opacity00");
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
				flowSteps(elementId, visit);
			})
		break;
			
		case "mainMthd1":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#mainMthd1").removeClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				var text = "The program execution starts from <y>main()</y> function.";
				typing($(".introjs-tooltiptext"), text, function() {
					
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("singleObj1", "", "right", "hide"));
					}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
					
				});
			})
		break;
		
		case "singleObj1":
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				text = "<ul><li><y>obj1</y> is an object of class <y>B</y>.</li>"
					+"<li>since class <y>B</y> is derived from class <y>A</y> so "
					+"the object of class <y>B</y> can access the public members of class <y>A</y>.</li></ul>"
				
				typing($(".introjs-tooltiptext"), text, function() {
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1", "", "right", "hide"));
					}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				})
			})
		break;
			
		case "cout1":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				
				
				var text = "<y>cout</y> is used to print the text on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
				if (introjs._direction == "forward") {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					introjs._introItems[introjs._currentStep + 1]["visits"] = "print1_second_visit";
				}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			});
		break;
		
		case "cout2":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$(".introjs-tooltip").removeClass("hide");
				var text = "<y>cout</y> is used to print the text on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
						introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_first_visit";
					}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			});
		break;
		
		case "print1":
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "";
				
				if (visit === "print1_repeat_visit") {
					
					text = "Now the <y>obj1</y> can access the publicly inherited class <y>A</y> member"
							+" function <y>display()</y>.";
	
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("display1", "", "top", "hide"));
					}	
				} else 	if (visit === "third_visit") {
					
				} else if (visit === "second_visit") {
					$("#inheritA").addClass("hide");
					text = "<ul><li><y>obj1</y> is object of derived class <y>B</y>.</li><li>The <y>obj1</y> can access the"
							+" public member function <y>display()</y> of class <y>A</y>.</li><li>It gives an <r>error</r>"
							+" message, why because class <y>A</y> is <y>privately</y> inherited. So convert it to <y>public</y>.</li></ul>";
					
					
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("secondClass1", "", "left", "hide"));
						introjs._introItems[introjs._currentStep + 1]["visits"] = "second_visit";
					}
					
				} else {
					//obj1.display(): --- first
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					}
					text = "<ul><li><y>obj1</y> is object of derived class <y>B</y>.</li><li>The <y>obj1</y> can access the"
						+" public member function <y>display()</y> of class <y>A</y>.</li></ul>";
				}
				
				
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				})
				})
		break;  
		
		case "print2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text;
				var text = "Here <y>obj1</y> calls the member function <y>show()</y> directly.";
				
				typing($(".introjs-tooltiptext"), text, function() {
					
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("show1", "", "right", "hide"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("cout2", "", "top", "hide"));
					}
					
					$(".introjs-prevbutton, .introjs-nextbutton").show();
					
				})
			})
		break;
			
		case "print" + clickIndex:
		case "show1" :
		case "display1":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (elementId == "display1") {
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout1", "", "top", ""));
					}
				}
				stepNext();
			})
		break;	
			
		case "print3" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				if ("print3" + clickIndex === "print34") {
						/*var text = "Here calling the <y>print()</y> by derived class object <y>obj2</y>.";*/
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
		break;	
			
		case "outputBox":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (introjs._direction == "forward") {
					
						$("#outputBox").removeClass("opacity00");
						if (visit === "print2_one") {
							$(".output-console-body").html("<div>This is base class A</div>");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("print34", "", "right", ""));
						} else if (visit === "print2_first_visit" || visit === "print2_two") {
							
							if (visit === "print2_first_visit") {// required
								$(".output-console-body").append("<div>This is derived class B</div>");
							} else if (visit === "print2_two") {
								$(".output-console-body").append("<div>This is base class B</div>");
							}
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("restartBtn", "", "", "hide"));
							
						} else if (visit === "print1_second_visit" || visit === "class_A" || visit === "A_class") {
							$(".output-console-body").html("<div>This is base class A</div>");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("print2" , "", "right",""));
						} else {
							$(".output-console-body").html("<div><div>singleInh.cpp: error: <go>void</go> A::display() is"
									+" inaccessible <go>public</go>: <go>void</go> display() {</div><div>singleInh.cpp:"
									+" error: within <go>this</go> context obj1.display();</div><div>singleInh.cpp: error:"
									+" 'A' is not an accessible base of 'B'</div></div>");
							
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1", "", "right", "hide"));
							introjs._introItems[introjs._currentStep + 1]["visits"] = "second_visit";
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
	$(".introjs-tooltip").removeClass("hide");
	if (elementId == "firstClass1") {
		text = "Here class <y>A</y> is the <y>base class</y> <b>(or)</b> <y>parent class</y>, which contains only one member"
				+" function <y>display()</y>.";
	} else if (elementId == "secondClass1") {
		$("#secondClass1").removeClass("opacity00");
		var text = "";
		if(visit === "second_visit") {
			text = "Here class <y>A</y> is inherited as <y>private(default)</y> if we specify it as <y>public</y> we can "
					+"access the member of class <y>A</y> in class <y>B</y>.";
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1", "", "right", "hide"));
			introjs._introItems[introjs._currentStep + 1]["visits"] = "print1_repeat_visit";
		} else {
			text = "Here class <y>B</y> is the <y>derived class</y> <b>(or)</b> <y>child class</y> of class <y>A</y>, it inherits the properties of"
					+" <y>base class</y> and also it contains only one member function <y>show()</y>.";
		}
		
		
		typing($(".introjs-tooltiptext"), text, function() {
			$(".introjs-prevbutton, .introjs-nextbutton").show();
		})
		
	}
	
	typing($(".introjs-tooltiptext"), text, function() {
		
		if (visit === "second_visit") {
			setTimeout(function() {
				$("#inheritA").removeClass("hide");
				TweenMax.fromTo("#inheritA", 1, {top : "-39px"}, {top: "0px", opacity:1})
			},150);
		}
		
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
