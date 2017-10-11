var introjs;
var typingSpeed = 10;
var tl;
var phaseCount = 1;
var stepCount = 1;

var programDevelopmentStepsReady = function() {
	introGuide();
	tl = new TimelineLite();
	svgAppend("#phaseDiv", "svg");
	svgMarkerAppend("#svg", "arrow");
	
	$("#restart").click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"
		},{
			element : "#phaseDiv",
			intro : "",
			position : "right"
		},{
			element : "#discriptionDiv",
			intro : "",
			tooltipClass: "hide"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			$(".introjs-nextbutton").hide();
				var text = "Let us learn the various steps involved in developing a software program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			
			break;
			
		case "phaseDiv":
			$(".introjs-nextbutton").hide();
			$("#phaseDiv").removeClass("opacity00")
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#phase" + phaseCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					$("#phase" + phaseCount).removeClass("animated zoomIn");
					var text = "In this step we will try to understand the problem statement for which we are trying to design a solution."
					typing(".introjs-tooltiptext", text, function() {
						$("#discriptionDiv").removeClass("opacity00");
						description("descriptionPhase" + phaseCount);
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="programSteps()">Next &#8594;</a>');
					});
				});
			});
			
			break;
			
		case "discriptionDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").addClass("zIndex");
			});
			
			break;
			
		case "problemStep":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#problemStep").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					$("#problemStep").removeClass("opacity00");
					var text = "Let us see the above information in action. ";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='nextStep()'>Next &#8594;</a>");
					});
				});
			});
			
			break;
			
		case "step" + stepCount:
			$(".introjs-nextbutton").hide();
			$(".user-btn").remove();
			$("#problemStep").remove();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(stepCount == 1) {
					tl.to(".des-text", 1, {opacity: 0, onComplete: function() {
						$(".des-text").empty();
						var text = "Requirements of the given problem are hardware and software.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					}});
				} else if(stepCount == 2) {
					var text = "Analyzing the problem to get input and output with formula.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				} else if(stepCount == 3) {
					var text = "In design phase we need algorithm or flowchart.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				} else if(stepCount == 4) {
					var text = "Now, on algorithm we will write code in the c programing language.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				} else if(stepCount == 5) {
					var text = "Here, we can test the result by giving differnent values.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				} else {
					var text = "Now, we will save this document for the future usage.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				}
				
			});
			
			break;
			
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to <span class='ct-code-b-yellow'>restart</span>." 
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload();
					});
				});
			});
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
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

function description(id) {
	phaseCount++;
	tl.to("#" + id, 1, {opacity: 1, onComplete: function() {
		$("#" + id).removeClass("opacity00");
	}});
}

function nextStep() {
	$("#userBtn" + (phaseCount-1)).remove();
	introjs.nextStep();
}

function svgAnimatingBottomToTopLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
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

function programSteps() {
	$(".user-btn").remove();
	svgAnimatingBottomToTopLine("#phaseDiv", "#phase"+(phaseCount-1), "#phase"+phaseCount, "#svg", "line"+phaseCount,"arrow", function() {
		$("#phase" + phaseCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$("#phase" + phaseCount).removeClass("animated zoomIn");
			if(phaseCount == 2) {
				var text = "The <span class='ct-code-b-yellow'>Analysis</span> phase involves identifying in detail the various " 
							+ " inputs that are required by the problem and the output that is expected out of the problem.";
			} else if(phaseCount == 3) {
				var text = "The <span class='ct-code-b-yellow'>Design</span> process involves arriving at a step by step process "
							+ " that will allow us to reach the intended goals. Tools like using a flow chart etc may be employed " 
							+ " to pictorially represent the step by step solution.";
			} else if(phaseCount == 4) {
				var text = "The <span class='ct-code-b-yellow'>coding</span> phase involves translating the steps identified in " 
							+ " the design phase into a machine readable code which is used eventually for the execution, " 
							+ " this is where a <span class='ct-code-b-yellow'>programing language</span> is used to " 
							+ " translate a solution present in the design to the actual programing solution.";
			} else if(phaseCount == 5) {
				var text = "The <span class='ct-code-b-yellow'>testing</span> phase involves verifying if the solution will " 
							+ " arrive at after the coding phase needs the original requirements by producing desired outputs " 
							+ " for the stated inputs.";
			} else {
				var text = "Normally any software program that is developed will have a <span class='ct-code-b-yellow'>maintenance" 
							+ "</span> phase wherein small update to the existing software or changes due to internal or external" 
							+ " policies are put into the software to keep it up to date. Here more often small patches to the " 
							+ " existing software for undetected erros may also be added.";
			}
			
			typing(".introjs-tooltiptext", text, function() {
				$("#discriptionDiv").removeClass("opacity00");
				description("descriptionPhase" + phaseCount);
				if(phaseCount <= 6) {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="programSteps()">Next &#8594;</a>');
				} else {
					$(".introjs-nextbutton").show();
				}
			});
		});
	});
}