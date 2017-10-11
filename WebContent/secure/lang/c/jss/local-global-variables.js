var introjs;
var typingSpeed = 5;
var tl;

var localGlobalVariablesReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("#address1").text(Math.floor((Math.random() * 1024) + 1986));
	$("#address2").text(Math.floor((Math.random() * 1024) + 1996));
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
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
			element : "#funcDec",
			intro : "",
			position : "right"
		}, {
			element : "#globalVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainFunc",
			intro : "",
			position : "right"
		}, {
			element : "#funcDef",
			intro : "",
			position : "right"
		}, {
			element : "#startMain",
			intro : "",
			position : "right"
		}, {
			element : "#localVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainPf1",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#functionCall",
			intro : "",
			position : "right"
		}, {
			element : "#valRes",
			intro : "",
			position : "right"
		}, {
			element : "#valDec",
			intro : ""
		}, {
			element : "#valAddition",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#userPrintf",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endFunc",
			intro : "",
			position : "right"
		}, {
			element : "#mainPf2",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endMain",
			intro : "",
			position : "right"
		}, {
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass : "introjs-tooltip-min-width",
			position : "right"
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Here we are going to discuss about different types of function " 
						+ " <span class='ct-code-b-yellow'>argument variables</span> (parameters).";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "codeAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#codeAnimation").removeClass("opacity00");
				var text = "This is the code to understand <span class='ct-code-b-yellow'>local</span> " 
							+ " and <span class='ct-code-b-yellow'>global</span> varibales in functions.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funcDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are declaring a function with name <span class='ct-code-b-yellow'>display()</span> with " 
							+ " <span class='ct-code-b-yellow'>no</span> return value and with <span class='ct-code-b-yellow'>no</span> arguments.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are declaring the variable <span class='ct-code-b-yellow'>value</span> out side " 
							+ "<span class='ct-code-b-yellow'>main()</span>. so that it can be used anywhere in the program. " 
							+ " This type of variables are called <span class='ct-code-b-yellow'>global variables</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainFunc":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <span class='ct-code-b-yellow'>main()</span> function";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funcDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>display()</span>.";
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
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "addressDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#addressDiv').removeClass("opacity00");
				if(introjs._currentStep == 4) {
					$("#gVal").text(50);
					var l1 = $("#tweenVal1").offset();
					$("#gVal").offset({"top": l1.top, "left": l1.left});
					$("#globalVar").addClass("blinking-white");
					tl.to("#globalVal", 1, {opacity: 1, onComplete: function() {
						$("#globalVar").removeClass("opacity00, blinking-white");
						$("#tweenVal1, gVal").addClass("blinking-white");
						$("#gVal").removeClass("opacity00");
						tl.to("#gVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal1, #gVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>value</span> has stored in the memory location at the " 
										+ " respected <span class='ct-code-b-yellow'>address</span> with value <b>50</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
					
				} else if(introjs._currentStep == 9) {
					$("#lVal").text(20);
					var l1 = $("#tweenVal2").offset();
					$("#lVal").offset({"top": l1.top, "left": l1.left});
					$("#localVar").addClass("blinking-white");
					tl.to("#boxHeading, #varBox", 1, {opacity: 1, onComplete: function() {
						$("#localVar").removeClass("opacity00, blinking-white");
						$("#tweenVal2, #lVal").addClass("blinking-white");
						$("#lVal").removeClass("opacity00");
						tl.to("#lVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal2, #lVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>value</span> has store in the memory location " 
										+ " at the respected <span class='ct-code-b-yellow'>address</span> " 
										+ " with value <b>20</b> in <span class='ct-code-b-yellow'>main()</span> function.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else {
					$("#valRes").effect( "transfer", { to: $("#gVal"), className: "ui-effects-transfer" }, 1000 , function() {
						tl.to("#gVal", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#gVal").text(70);
							tl.to("#gVal", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "Now <span class='ct-code-b-yellow'>global</span> variable value has changed to <b>70</b>.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						}});
					});
				}
			});
			break;
			
		case "functionCall":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "Now we are calling function <span class='ct-code-b-yellow'>display()</span> without any arguments and return type.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are decalring an integer variable with same name as <span class='ct-code-b-yellow'>global</span> " 
							+ " variable i.e., <span class='ct-code-b-yellow'>value</span> which is initialized to <b>20</b>."
							+ "  This is called as <span class='ct-code-b-yellow'>local</span> variable to the " 
							+ " <span class='ct-code-b-yellow'>main()</span> function, which can be used only in this function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPf1":
		case "mainPf2":
		case "userPrintf":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "valRes":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are adding <b>20</b> to the <span class='ct-code-b-yellow'>value</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "valDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = " At first function will search for the <span class='ct-code-b-yellow'>local variable</span> <b>value</b>, " 
							+ " if it is not declared in the function then it will search for <span class='ct-code-b-yellow'>global variable</span>."
							+ " Here <span class='ct-code-b-yellow'>value</span>, is not present locally. " 
							+ " It has declared as <span class='ct-code-b-yellow'>global variable</span> in above.";
				typing(".introjs-tooltiptext", text, function() {
					$("#globalVar").addClass("blinking-white");
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "valAddition":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "Here we are declaring the value to the addition of <b>20</b> and itself " 
							+ "i.e., <span class='ct-code-b-yellow'>value + 20</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "After completing all statements in called function control goes to the " 
							+ " <span class='ct-code-b-yellow'>main()</span> function and executes next " 
							+ " statement which is after this function call.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "function <span class='ct-code-b-yellow'>main()</span> ended here.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#consoleId').removeClass("opacity00");
				if(introjs._currentStep == 11) {
					$("#runEditor1").append("value in main() before call : 20");
					nextStep();
				} else if(introjs._currentStep == 18) {
					$("#runEditor2").append("value in display() : 70");
					nextStep();
				} else {
					$("#runEditor3").append("value in main() after call : 20");
					nextStep();
				} 
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

function nextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}