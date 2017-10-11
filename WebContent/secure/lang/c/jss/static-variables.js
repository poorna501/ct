var introjs;
var typingSpeed = 5;
var tl;
var i = 1;
var j = 1;
var count = 0;

var staticVariablesReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("#address").text(Math.floor(Math.random() * 1024) + 1024);
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		exitOnOverlayClick: false,
		keyboardNavigation: false,
		exitOnEsc: false,
		showStepNumbers: false,
		showBullets: false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right"
		}, {
			element : "#codeAnimation",
			intro : "",
			position : "right"
		}, {
			element : "#functionDec",
			intro : "",
			position : "right"
		}, {
			element : "#mainFunction",
			intro : "",
			position : "right"
		}, {
			element : "#functionDef",
			intro : "",
			position : "right"
		}, {
			element : "#startMain",
			intro : "",
			position : "right"
		}, {
			element : "#endMain",
			intro : "",
			position : "right"
		}, {
			element : "#restart",
			intro : "",
			tooltipClass : "hide"
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Let us consider an example on working of <span class='ct-code-b-yellow'>static variables</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "codeAnimation":
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 1) {
					$(".console-print").empty();
					var text = "Now we will try the same program by taking the <span class='ct-code-b-yellow'>static variable</span> " 
								+ " in display(). The program will <span class='ct-code-b-yellow'>complie</span> first.";
				} else {
					var text = "This is the program to know the behavior of <span class='ct-code-b-yellow'>static variables</span>.";
				}
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "functionDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a function declaration with name <span class='ct-code-b-yellow'>display()</span> " 
					+ " and <span class='ct-code-b-yellow'>no</span> return type.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainFunction":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <span class='ct-code-b-yellow'>main()</span> function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "functionDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the function definition of <span class='ct-code-b-yellow'>display()</span>. ";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "startMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the operating system call i.e., " 
					+ " <span class='ct-code-b-yellow'>main()</span> is the execution starting point.";
				typing(".introjs-tooltiptext", text, function() {
					if(count == 0) {
						dynamicSteps();
					}
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "functionCall" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 0) {
					$("#address").text((parseInt($("#address").text()) + 50));
				}
				var text = "The function call was made to <span class='ct-code-b-yellow'>display()</span>. So the"
							+ " control is transfered from main() to display().";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 0) {
					var text = "It is a declaration of <b>int</b> variable <b>i</b>. It is declared inside "
						+ " <span class='ct-code-b-yellow'>dispaly()</span>. So we called it as " 
						+ " <span class='ct-code-b-yellow'>local</span> variable to the <span class='ct-code-b-yellow'>display()</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				} else {
					flipEffect("#varDec", "static int i = 1;", function() {
						introjs.refresh();
						$('.introjs-tooltip').removeClass("hide");
						var text = "We are initializing the local variable with <span class='ct-code-b-yellow'>static</span> " 
									+ " keyword with <b>int</b>.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				}
			});
			break;
			
		case "animationBox":
			$("#animationBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if((i < 4) && (count == 0)) {
					$("#address").text(parseInt($("#address").text())+10);
					$("#lVal").text(1);
					if( i == 1) {
						tl.to("#boxHeading, #functionBox", 0.5, {opacity: 1, onComplete: function() {
							$("#varDec").addClass("blinking-white");
							$("#localVal").removeClass("opacity00");
						}});
					}
					tl.to("#localVal", 0.5, {opacity: 1, onComplete: function() {
						$("#localVal").removeClass("opacity00");
					}});
					tl.to("#lVal", 0.5, {opacity: 1, onComplete: function() {
						$("#lVal").removeClass("opacity00");
						$('.introjs-tooltip').removeClass("hide");
						var text = "The value <b>1</b> is stored in the memory of the variable <span class='ct-code-b-yellow'>i</span>"
									+ " at the respected <span class='ct-code-b-yellow'>address</span> in the " 
									+ " <span class='ct-code-b-yellow'>display()</span> function.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					}});
				} else {
					if(i == 1) {
						tl.to("#localVal", 0.5, {opacity: 1, onComplete: function() {
							$("#localVal").removeClass("opacity00");
						}});
					}
					flipEffect("#lVal", i, function() {
						tl.to("#lVal", 0.5, {opacity: 1, onComplete: function() {
							$("#lVal").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							if(i > 1) {
								var text = "The value <b>"+i+"</b> is stored in the memory of the variable " 
								+ " <span class='ct-code-b-yellow'>i</span> in the " 
								+ " <span class='ct-code-b-yellow'>display()</span> function.";
							} else {
								var text = "The memory allocated for i is done at compile time. " 
											+ " <ul><li>The scope of the variable is within the function " 
											+ " <span class='ct-code-b-yellow'>display()</span> " 
											+ " only.</li><li>The life time of the variable <b>i</b> is through out the "
											+ " program.</li><li>Because the memory is allocated for variable <b>i</b> at "
											+ "<span class='ct-code-b-yellow'>compile</span> time, the declaration " 
											+ " is not available at <span class='ct-code-b-yellow'>runtime</span>.</li> " 
											+ " <li>Here the value <b>"+i+"</b> is stored in variable <b>i</b> at the " 
											+ " respected address.</li></ul>"
							}
							typing(".introjs-tooltiptext", text, function() {
								if(i < 4) {
									dynamicSteps();
								}
								$(".introjs-nextbutton").show();
							});
						}});
					});
				}
			});
			break;
			
		case "printf":
			$("#varDec").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 1) {
					var text = " Static variable i was created at the compilation time so it will not run at run time. " 
								+ "This <span class='ct-code-b-yellow'>printf()</span> function will print the message on the standard " 
								+ " output device(monitor).";
				} else {
					var text = "This <span class='ct-code-b-yellow'>printf()</span> function will print the message on the standard " 
								+ " output device(monitor).";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "iInc":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "First <span class='ct-code-b-yellow'>i</span> value printed in the console then it will get incremented "  
							+" in next statement.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 1) {
					var text = "i = " + i;
				} else {
					var text = "i = 1";
				}
				typing("#runEditor" + i, text, function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
			
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() {
				if(i < 4 && count == 0) {
					$("#lVal").text(2);
					$("#localVal").addClass("blinking-white");
					var text = "<span class='ct-code-b-yellow'>display()</span> ended here. The local variable "
						+ " <span class='ct-code-b-yellow'>i</span> will get vanished after control getting out of the function.";
					tl.to("#localVal", 0.5, {opacity: 0, onComplete: function() {
						typing(".introjs-tooltiptext", text, function() {
							$("#localVal").addClass("opacity00");
							$("#lVal").addClass("opacity00");
							$("#lVal").css("opacity", 0);
							$("#localVal").removeClass("blinking-white");
							++i;
							if(i < 4) {
								dynamicSteps();
							}
							$(".introjs-nextbutton").show();
						});
					}});
				} else {
					++i;
					var text = "<span class='ct-code-b-yellow'>display()</span> ended here. The static variable "
						+ " <span class='ct-code-b-yellow'>i</span> will not vanished here  because static variable " 
						+ " was created at compilation time not at run time. So i value is incremented to "+i+".";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				}
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "function <span class='ct-code-b-yellow'>main()</span> ended here.";
				typing(".introjs-tooltiptext", text, function() {
					++count;
					if(count == 1) {
						i = 1;
						staticSteps();
					}
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				});
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(element, value, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$(element).text(value);
	}});
	tl.to(element, 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function getStep(element, intro, tooltipClass, position) {
	var step = {}
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}

function dynamicSteps() {
	var n = 0;
	var dynamicStep = getStep("#functionCall" + i, "", "", "right");
	introjs.insertOption(introjs._currentStep + ++n, dynamicStep);

	if(count != 1) {
		var dynamicStep = getStep("#varDec", "", "", "right");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	
		var dynamicStep = getStep("#animationBox", "", "hide", "left");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	}
	
	var dynamicStep = getStep("#printf", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	
	var dynamicStep = getStep("#iInc", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	
	var dynamicStep = getStep("#consoleId", "", "hide", "");
	introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	
	var dynamicStep = getStep("#endFunc", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	
	if(count == 1) {
		var dynamicStep = getStep("#animationBox", "", "hide", "left");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	}
	
	if(i == 3 && count == 0) {
		var dynamicStep = getStep("#endMain", "", "", "right");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
	}
}

function staticSteps() {
	var step = 0;
	var dynamicStep = getStep("#codeAnimation", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);

	var dynamicStep = getStep("#functionDec", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#mainFunction", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#functionDef", "", "", "right");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#varDec", "", "hide", "top");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#animationBox", "", "hide", "left");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
}