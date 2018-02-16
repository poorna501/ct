var typingSpeed = 10;
var flag1 = false;
var virtualDestructorFunction = function() {
	introJsFunction();
	$("line").hide();
	$(".introjs-prevbutton").hide();
	var text = "Here we will learn about the <y>virtual</y> destructor.";
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
		}]

	})
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		switch (elementId) {
			case "pre":
				
			break;
			
			case "baseShow":
				
					if (animateStep == "print") {
						
					} else {
						
					}
				
			break;
				
			case "parentShow":
				
			break;	
			
			case "deriveDes":
				
			break;
			
			case "baseDes":
				
			break;	
				
			case "restart":
				
			break;	
				
			case "memoryRemove":
				
			break;
			
			case "baseClass":	
				
					if (animateStep == "check") {
						
					} else {
						
					}
					
				
			break;
				
			case "deriveClass":	
				
					var text;
					if (animateStep == "check") {
				
						
					} else {
						
					}
					
			break;
				
			case "main":	
					
			break;
				
			case "objCreation":	
				$("#animate, #obj, #derive").addClass("opacity00");
				$("#addr1").empty();
				flag1 = false;
			break;	
			
			case "invokeFirst":
			case "invokeSecond":
			case "baseCon":
			case "deriveCon":
				
			break;	
				
			case "removeMemory":
				
			break;
			
			case "animate":
				$("#" + animateStep).addClass("opacity00");
				$("line").hide();
			break;
			
			case "outputBox":
				
			break;	
		}
	})
	
	
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0) {
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
		switch (elementId) {
			case "pre":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#pre").removeClass("opacity00");
					var text = "Let us consider a sample program to understand the <y>virtual destructor</y> concept.";
					
					typing($(".introjs-tooltiptext"), text, function() {
						
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("baseClass", "", "right"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("deriveClass", "", "right"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("main", "", "right"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("objCreation", "", "right"));
						
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("animate", "", "top", "hide", "obj"));
						
						introjs.insertOption(introjs._currentStep + 6, insertionIntro("deriveClass", "", "top", "", "check"));
						introjs.insertOption(introjs._currentStep + 7, insertionIntro("baseClass", "", "right","", "check"));
						introjs.insertOption(introjs._currentStep + 8, insertionIntro("invokeSecond", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 9, insertionIntro("baseCon", "", "top", "hide"));
						/*introjs.insertOption(introjs._currentStep + 10,insertionIntro("animate", "", "top", "hide", "baseCon"));*/
						introjs.insertOption(introjs._currentStep + 10,insertionIntro("outputBox", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 11,insertionIntro("invokeFirst", "", "top", "hide"));
						/*introjs.insertOption(introjs._currentStep + 12,insertionIntro("animate", "", "top", "hide", "val2"));*/
						introjs.insertOption(introjs._currentStep + 12,insertionIntro("deriveCon", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 13,insertionIntro("outputBox", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 14,insertionIntro("memoryRemove", "", "top"));
						introjs.insertOption(introjs._currentStep + 15,insertionIntro("baseShow", "", "top"));
						introjs.insertOption(introjs._currentStep + 16,insertionIntro("parentShow", "", "top"));
						/*introjs.insertOption(introjs._currentStep + 17,insertionIntro("animate", "", "top", "hide", "k"));*/
						introjs.insertOption(introjs._currentStep + 17,insertionIntro("deriveDes", "", "top", "hide"));
						//introjs.insertOption(introjs._currentStep + 19,insertionIntro("animate", "", "top", "hide", "desderive"));
						//introjs.insertOption(introjs._currentStep + 18,insertionIntro("baseShow", "", "top", "","print"));//deriveDes
						$(".introjs-nextbutton, .introjs-prevbutton").show();
						
						
					});
					
				});
			break;
			
			case "baseShow":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (animateStep == "print") {
						setTimeout(function() {
							introjs.nextStep();
						}, 600)
					} else {
						var text = "Here the <y>Base</y> class destructor is <y>virtual</y>. so, the <y>Base</y> "
									+"or <y>Derived</y> destructor will be executed by depending on the address "
									+"contained in pointer.";
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}
				})
			break;
				
			case "parentShow":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "After the completion of execution of <y>Derived</y> "
							+"destructor it execute the <y>Base</y> destructor.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
			break;	
			
			case "deriveDes":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					introjs.insertOption(introjs._currentStep + 1,insertionIntro("outputBox", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 2,insertionIntro("baseShow", "", "top", "hide","print"));
					introjs.insertOption(introjs._currentStep + 3,insertionIntro("baseDes", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 4,insertionIntro("outputBox", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 5,insertionIntro("restart", "click to restart.", "right"));
					
					setTimeout(function() {
						introjs.nextStep();
					}, 900);
					
				})
			break;
			
			case "baseDes":
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 600);
				})
			break;	
				
			case "restart":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload(true);
					});
				})
			break;	
				
			case "memoryRemove":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					var text = "<ul><li>The <y>delete</y> operator is used to remove the memory allocated by a "
								+"<y>new</y> operator.</li><li>When ever an object is no longer used, the destructor"
								+" will be called automatically.</li><li>If <y>Base</y> class destructor is <y>virtual</y>"
								+" then destructor of derived class will be executed when the pointer contains address of "
								+"<y>Derived</y> object.</li></ul>";
					
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
			break;
			
			case "baseClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#baseClass").removeClass("opacity00");
					var text;
					if (animateStep == "check") {
						text = "The <y>Base</y> class default constructor will be executed first "
								+"and next the <y>derived</y> class default constructor will be executed.";
					} else {
						/*text = "The base class contains the constructor <y>Base()</y> and destructor <y>~Base()</y>.";*/
						text = "This is a class <y>Base</y> which contains the constructor <y>Base()</y> and the destructor <y>~Base()</y>.";
					}
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
			break;
				
			case "deriveClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#deriveClass").removeClass("opacity00");
					var text;
					if (animateStep == "check") {
						text = "Befor calling the constructor of the <y>derived</y> class "
								+"it will call default constructor of the <y>Base</y> class.";
					} else {
						text = "<ul><li>This is a class <y>Derived</y> which inherits the class <y>Base</y> publicly.</li><li>The class <y>Derived</y>"
								+" contains the constuctor <y>Derived()</y> and the destructor <y>~Derived()</y>.</li></ul>";
					}
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				})	
			break;
				
			case "main":	
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#main").removeClass("opacity00");
					var text = "The program execution starts from <y>main()</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})	
			break;
				
			case "objCreation":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>A pointer <y>p</y> is created to the class <y>Base</y>.</li><li>The keyword <y>new</y>"
								+" will allocate dynamic memory of the <y>derived</y> class and returns the address of that memory.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})	
			break;	
			
			case "invokeFirst":
			case "invokeSecond":
			case "baseCon":
			case "deriveCon":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					if (introjs._direction == "forward") {
						stepNext();
					} else {
						stepNext();
					}
				})
			break;	
				
			case "removeMemory":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here the <y>memory</y> is removed by using the <y>delete</y> using a pointer <y>p</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})	
			break;
			
			case "animate":
				
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						$("#animate").removeClass("opacity00");
						$("#" + animateStep).removeClass("opacity00");
						$("#derive").removeClass("opacity00");
						if (animateStep == "obj") {
							var l1 = $("#addr1").offset();
							var l2 = $("#addr2").offset();
							var topLength = l2.top - l1.top;
							var leftLength = l2.left - l1.left;
							setTimeout(function() {
								$("#addr1").append("<b>1274</b>");
								$("#p, #addr2").removeClass("opacity00");
								TweenMax.from("#addr1", 2, {top : topLength, left : leftLength, onComplete:function() {
									revealArrow("line", function() {
										setTimeout(function() {
											introjs.nextStep();
											flag1 = true;
										}, 1000);
									});
								}})
							}, 500);
						}
						
						if(flag1) {
							stepNext();
						}
					} else {
						stepNext();
					}
				});
				
			break;
			
			case "outputBox":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					if (introjs._direction == "forward") {
						$("#outputBox").removeClass("opacity00");
						$(".output-console-body div").eq(index).removeClass("opacity00");
						index++;
						stepNext();
					} else {
						$(".output-console-body div:not(.opacity00)").last().addClass("opacity00");
						index--;
						stepNext();
					}
					
				})
			break;	
		}
	})
	var index = 0;
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


function revealArrow(selector, callBackFunction) {
	let x2 = $(selector).attr("x2");	
	let y2 = $(selector).attr("y2");
	$(selector).attr("x2",  $(selector).attr("x1"));
	$(selector).attr("y2",  $(selector).attr("y1"));
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow4Marker);");
	TweenMax.to($(selector), 1, {attr: {x2 : x2, y2: y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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


function abValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><li><div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div>p = <div id='tooltipXVal' class='display-inline-block relative'>1274</div>;</div>"
			+ " </div></li></ul>");
	
	var l1 = $("#aToX").offset();
	var l2 = $("#pCurrent").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffectWithTweenMax("#tooltipXVal", "1264", function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
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