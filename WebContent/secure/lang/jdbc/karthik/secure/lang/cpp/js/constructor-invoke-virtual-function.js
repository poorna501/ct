
var constructorInvokeVirtualFunction = function() {
	introJsFunction();
	$(".introjs-prevbutton").hide();
	var text = "Here we will learn how the <y>virtual</y> keyword works for the functions.";
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
			position : "right"//baseClass
		},{
			element : "#pre",
			intro : "",
			position : "right"
		},{
			element : "#baseClass",
			intro : "",
			position : "right"
		}]
	})
	
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		switch (elementId) {
			case "pre":
					
			break;
			
			case "baseClass":	
				
			break;
			
			case "deriveClass":
				
			break;	
			
			case "main":
				
			break;	
			
			case "objCreation":
				$("#animate").addClass("opacity00");
				$("#obj, #addr, #x, #y").addClass("opacity00");
				
			break;	
			
			case "invokeFirst":
				
			break;	
			
			case "invokeSecond":
				
			break;
				
			case "kVal":
			case "hVal":
				
					if (elementId === "kVal") {
						$("#val1").removeAttr("style");
						$("#val1, #k").addClass("opacity00");
						
					} else if (elementId === "hVal") {
						
						$("#val2").removeAttr("style");
						$("#val2, #h").addClass("opacity00");
						
					}
					
			break;
			
			case "baseP":
				
			break;
			
			case "pCurrent":
				
				$("#pVal").addClass("opacity00");
			break;
			
			case "pShowMthd":
				
			break;	
			
			case "baseShow":
				
				if (animateStep == "withVirtual") {
					
					$("#virtual").addClass("displayNone opacity00");
					
				} else {
						
				}
			break;	
			
			case "kDisp":
			case "hDisp":	
			
			break;	
				
			case "outputBox":
				
				if (animateStep == "noVirtual") {
					$("#outputBox").addClass("opacity00");
					$(".output-console-body div").remove();
				} else {
					
				}
				
			break;	
				
			case "parentShow":
				
			break;	
				
			case "restart":
				
			break;	
				
			case "animate":
					$("#ddr").removeClass("opacity00");
				
					if (animateStep === "obj") {
						
						$("#animate").addClass("opacity00");
						$("#obj, #addr, #x, #y").addClass("opacity00");
						
					} else if (animateStep === "h") {
						
						
						$("#val2").removeAttr("style");
						$("#val2, #h").addClass("opacity00");
						
					} else if (animateStep === "k") {
						$("#val1").removeAttr("style");
						$("#val1, #k").addClass("opacity00");
					} else if (animateStep === "p") {
						$("#p ,#pVal").addClass("opacity00");
					}
					
			break;
		}
		
	})
	
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		
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
		
			case "pre":	
				$(".introjs-helperLayer").one("transitionend", function() {
					
					$("#pre").removeClass("opacity00");
					
					var text = "Let us consider a sample program on a <y>virtual</y> function.";
					
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
					
				})	
			break;
			
			case "baseClass":	
				
				$(".introjs-helperLayer").one("transitionend", function() {
					
					$("#baseClass").removeClass("opacity00");
					
					
					var text = "Let us construct a class named <y>Base</y> which contains:<ul>"
								+"<li>One <y>private</y> data member.</li><li>One parametarized <y>constructor</y>."
								+"</li><li>One public member function <y>show()</y>.</li></ul>";
					
					
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("deriveClass", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("main", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("objCreation", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("animate", "", "top", "hide", "obj"));/*hide*/
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("invokeFirst", "", "top", "", ""));
						introjs.insertOption(introjs._currentStep + 6, insertionIntro("invokeSecond", "", "top","hide"));/*hide*/
						introjs.insertOption(introjs._currentStep + 7, insertionIntro("kVal", "", "top", "hide"));/*hide*/
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
					
				});
				
			break;
			
			case "deriveClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#deriveClass").removeClass("opacity00");
					var text = "The class Derived is publically inherited from the class Base and which contains:<ul>"
								+"<li>One <y>private</y> data member.</li><li>One parametarized <y>constructor</y>."
								+"</li><li>One public member function <y>show()</y>.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
				})
			break;	
			
			case "main":
				
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#main").removeClass("opacity00");
					var text = "The program execution starts from <y>main()</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
				})
				
			break;	
			
			case "objCreation":
				$(".blinking-orange").removeClass("blinking-orange");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "An object <y>obj</y> is created for the class <y>Derived</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					});
				})
			break;	
			
			case "invokeFirst":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The constructor <y>Derived()</y> is called after the memory allocated to the object <y>obj</y>."
							+"<ul><li>The <y>derived</y> constructor first calls the <y>Base</y> constructor with an argument value 2.</li></ul>";
					
					typing($(".introjs-tooltiptext"), text, function() {
						$("#superConst").addClass("blinking-orange");
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					})
					
				})
			break;	
			
			case "invokeSecond":
				$(".introjs-helperLayer").one("transitionend", function() {
					stepNext();
				})
			break;
				
			case "kVal":
			case "hVal":
					$(".introjs-helperLayer").one("transitionend", function() {
						$(".blinking-orange").removeClass("blinking-orange");
						if (introjs._direction == "forward") {
							if (elementId === "kVal") {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "hide", "k"));
							} else if (elementId === "hVal") {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "hide", "h"));
							}
							stepNext();
						} else {
							stepNext();
						}
						
					})
			break;
			
			case "baseP":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "A pointer object <y>*p</y>, pointing to the base is created.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "hide", "p"));/*hide*/
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					})
				})
			break;
			
			case "pCurrent":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = "The pointer <y>p</y> holds the current object <y>obj</y>.";
					typing(".introjs-tooltiptext", text, function() {
						//introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "hide", "pVal"));/*hide*/
						$("#val3").removeClass("opacity00");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("pShowMthd", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("baseShow", "", "right", "hide"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("kDisp", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("outputBox", "", "top", "hide", "noVirtual"));
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("baseShow", "", "right", "hide", "withVirtual"));//
						introjs.insertOption(introjs._currentStep + 6, insertionIntro("parentShow", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 7, insertionIntro("hDisp", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 8, insertionIntro("outputBox", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 9, insertionIntro("restart", "click to restart.", "right"));
						abValues();
					})
					
				});
			break;
			
			case "pShowMthd":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>The pointer <y>'p'</y> is called the <y>show()</y> function.</li>"
								+"<li>Since <y>'p'</y> is pointing to the <y>Base</y> class, it will execute the <y>show()</y> function of <y>Base</y> class.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-prevbutton, .introjs-nextbutton").show();
					})
				})
			break;	
			
			case "baseShow":
			
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#virtual").addClass("opacity00 displayNone");
					/*$("#show1").removeClass("opacity00");*/
					$(".introjs-tooltip").removeClass("hide");
					var text;
					
					if (animateStep == "withVirtual") {
						
						
						$(".displayNone").removeClass("opacity00 displayNone");
						
						setTimeout(function() {
							$(".output-console-body").empty();
							text = "Now <y>show()</y> is <y>virtual</y> based on the <y>obj</y> address hold by the pointer variable <y>p</y> of the <y>derived</y>"
									+" class <y>obj</y> i.e, <y>1264</y>.It execute the <y>show()</y> of the <y>derived</y> class.";
							
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-prevbutton, .introjs-nextbutton").show();
							});
							
						},700);
					} else {
							text = "The <y>show()</y> doesn't have a <y>virtual</y> key so it will execute the <y>base</y> class <y>show()</y> "
								+"even though the <y>p</y> variable holds the address of <y>derived</y> class <y>obj</y>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#show1").removeClass("opacity00");
								$(".introjs-prevbutton, .introjs-nextbutton").show();
							})
					}
					
					
				})
			break;	
			
			case "kDisp":
			case "hDisp":
				
				$(".introjs-helperLayer").one("transitionend", function() {
					stepNext();
				})
				
			break;	
				
			case "outputBox":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputBox").removeClass("opacity00");
					
					if (introjs._direction == "forward") {
						if (animateStep == "noVirtual") {
							$(".output-console-body").append("<div>This is base class show: 2</div>");
						} else {
							$(".output-console-body").append("<div>This is derived class show: 3</div>");
						}
						stepNext();
					} else {
						stepNext();
					}
					
				})
			break;	
				
			case "parentShow":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					setTimeout(function() {
						
						$("#show2").removeClass("opacity00");
						introjs.nextStep();
						
					}, 1000);
					
				})
			break;	
				
			case "restart":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload(true);
					})
				})
			break;	
				
			case "animate":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						$("#animate").removeClass("opacity00");
						if (animateStep === "obj") {
							$("#obj, #addr, #x, #y").removeClass("opacity00");
						} else if (animateStep === "k") {
							
							$("#val1, #k").removeClass("opacity00");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("hVal", "", "top", "hide"));/*hide*/
							offsetValue("#xVal", "#val1", function() {
								stepNext();
							});
							
						} else if (animateStep === "h") {
							$("#val2, #h").removeClass("opacity00");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("baseP", "", "top", "", ""));
							offsetValue("#yVal", "#val2", function() {
								stepNext();
							});
						} else if (animateStep === "p") {
							$("#p").removeClass("opacity00");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("pCurrent", "", "top","hide"));
						} else if (animateStep == "pVal") {
							/*$("#val3").removeClass("opacity00");
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("pShowMthd", "", "top"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("baseShow", "", "right", "hide"));
							introjs.insertOption(introjs._currentStep + 3, insertionIntro("kDisp", "", "top", "hide"));
							introjs.insertOption(introjs._currentStep + 4, insertionIntro("outputBox", "", "top", "hide", "noVirtual"));
							introjs.insertOption(introjs._currentStep + 5, insertionIntro("baseShow", "", "right", "hide", "withVirtual"));//
							introjs.insertOption(introjs._currentStep + 6, insertionIntro("parentShow", "", "top", "hide"));
							introjs.insertOption(introjs._currentStep + 7, insertionIntro("hDisp", "", "top", "hide"));
							introjs.insertOption(introjs._currentStep + 8, insertionIntro("outputBox", "", "top", "hide"));
							introjs.insertOption(introjs._currentStep + 9, insertionIntro("restart", "click to restart.", "right"));*/
						}
						
						if (animateStep !== "k" && animateStep !== "h") {
							stepNext();
						}
					} else {
						stepNext();
					}
				})
			break;
		}
		
	})
	introjs.start();
}


function stepNext() {
	if(introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 1000);
	}
}

function offsetValue(from, to, callBackFunction) {
	
	var l = $(from).offset();
	$(to).offset({top: l.top, left: l.left});
	TweenMax.to(to, 1, {top: "0px", left: "0px", onComplete: function() {
		
		if(typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}



function abValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><li><div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div>p = <div id='tooltipXVal' class='display-inline-block relative'>this</div>;</div>"
			+ " </div></li></ul>");
	var l1 = $("#aToX").offset();
	var l2 = $("#pCurrent").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffectWithTweenMax("#tooltipXVal", "1264", function() {
			var l = $("#tooltipXVal").offset();
			$("#pVal").offset({top: l.top, left: l.left});
			$("#pVal").removeClass("opacity00");
			$("#pVal").css({"background-color": "white", "z-index": "10000001"});

			TweenMax.to("#pVal", 1, {top: "0px", left: "0px", onComplete: function() {
				$("#pVal").css({"background-color" : "", "z-index" : ""});
				$("#p").removeClass("zIndex");
				$(".introjs-nextbutton, .introjs-prevbutton").show();
				
			}})
		});
	}});
}



function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
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




var typingSpeed = 10;
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
	})
}

