var introjs, popoverCount = 0;


function appletLifeCycleIntro() {
	introFunction();
	svgAppend("#mainDiv", "svgId", "markerId", "gray");
}

function introFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [{
			element: "#headingSection",
			intro: "",
		},{
			element: "#mainDiv",
			intro: "",
			position: "left"
		}, {
			element: "#restartBtn",
			intro: "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
		}]
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton").hide();
		var element = targetElement.id;
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(element) {
				case "mainDiv":
					$("#mainDiv").removeClass("opacity00");
					var text = "In <y>applet</y> we have various <y>states</y>, each state have different <y>methods</y>." 
								+ " <ul><li><y>Initial</y> State</y></li>"
								+ "<li><y>Running</y> State</y></li>"
								+ " <li><y>Stopped</y> State</y></li>"
								+ " <li><y>Destroy</y> State</y></li></ul>"
								+ " The <y>java.applet.Applet</y> class defines these <y>call-back methods</y> for managing the "
								+ " <y>life-cycle</y> of the <y>applets</y>."
								+ " <ul><li><y>init()</y> method</li>"
								+ " <li><y>start()</y> method</li>"
								+ " <li><y>stop()</y> method</li>"
								+ " <li><y>destroy()</y> method</li>"
								+ " <li><y>paint()</y> method</li></ul>";
					typing('.introjs-tooltiptext', text, function() {
						appendNextBtn('.introjs-tooltiptext', false, function() {
							revilStates();
						});
					});
				break;
				case "restartBtn" :
					$('#restartBtn').removeClass('opacity00');
					$('#restartBtn').click(function() {
						location.reload();
					});
				break;
			}
		});
	});
	introjs.start();
	var text = "An <y>applet</y> is a small <y>application</y> that performs one specific task that runs within the scope of a "
				+ " dedicated widget engine.<br/><br/>Here, we will learn the working of the <y>Applet Life Cycle</y>.";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-nextbutton").show();
	});
}

function revilStates() {
	zoomInEffect("#newState", function() {
		zoomInEffect("#runningState", function() {
			zoomInEffect("#stopState", function() {
				zoomInEffect("#destroyState", function() {
					initalStateExplanation();
				});
			})
		});
	});
}

function initalStateExplanation() {
	svgLineRightAndLeft("#mainDiv", "#dummyState", "#newState", "line1", "", "right", "left", "", "", "", function() {
		svgText("#line1", "init()", "blue", false, function() {
			var text = "The <y>init()</y> method call <y>only once</y> when the <y>applet</y> is <y>first</y> loaded to "
				+ " initialize variables, resize the applet, setting up <y>GUI</y> components, and etc.<br/><div id='btn1'></div><br/>";
			displayPopover("#initText", "bottom", text, function() {
				appendNextBtn('#btn1', true, function() {
					runningStateExplanation();
				});
			});
		});
	});
}

function runningStateExplanation() {
	svgLineRightAndLeft("#mainDiv", "#newState", "#runningState", "line2", "", "right", "left", "", "", "", function() {
		svgText("#line2", "start()", "green", true, function() {
			var text = "The <y>start()</y> method call by the <y>browser</y> after the <y>init()</y> to <y>start</y> the "
						+ " <y>applet</y> running (similar to main() in Java application). The <y>start()</y> method is run every time "
						+ " the applet becomes active after it has been inactive.<br/><div id='btn2'></div><br/>";
			displayPopover("#runningState", "top", text, function() {
				appendNextBtn('#btn2', true, function() {
					stoppedStateExplanation();
				});
			});
		});
	});
}

function stoppedStateExplanation() {
	svgLineTopAndBottom("#mainDiv", "#runningState", "#stopState", "line3", "", "bottom", "top", "right", "right", "", function() {
		svgText("#line3", "stop()", "orange", false, function() {
			var text = "The <y>stop()</y> method call when the user <y>leaves</y> the </y>page</y> on which the <y>applet</y> is "
				       + " <y>running</y>, <y>reloads</y> the page, or <y>minimizes</y> the browser, to <y>terminate</y> the applet's "
				       + "running threads.<br/><div id='btn3'></div></br/>"
			displayPopover("#stopState", "bottom", text, function() {
				appendNextBtn('#btn3', true, function() {
					stopCallAgainRunStateExplanation();
				});
			});
		});
	});
}

function stopCallAgainRunStateExplanation() {
	svgLineTopAndBottom("#mainDiv", "#stopState", "#runningState", "line4", "", "top", "bottom", "left", "left", "", function() {
		svgText("#line4", "start()", "green", false, function() {
			appendNextBtn('#btn3', true, function() {
				destroyStateExplanation();
			});
		});
	});
}

function destroyStateExplanation() {
	svgLineRightAndLeft("#mainDiv", "#stopState", "#destroyState", "line5", "", "right", "left", "", "", "", function() {
		svgText("#line5", "destroy()", "red", false, function() {
			var text = "The <y>destroy()</y> method call when the <y>applet</y> is about to be <y>purged</y> from <y>memory</y>. "
						+ " Multithreaded applets can use the <y>destroy()</y> to <y>stop</y> any <y>live</y> threads. "
						+ "Normally, the <y>Java garbage</y> collector takes care of memory management.<br/><div id='btn4'></div><br/>";
			displayPopover("#destroyState", "bottom", text, function() {
				appendNextBtn('#btn4', true, function() {
					introjs.nextStep();
				});
			});
		});
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {	//typing function
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function displayPopover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: 'focus',
		container: "",
		content: '<div id="popover' + popoverCount + '">'
		+ text + '</div>',
	 });
	$(selector).popover('show');
	if (popoverCount != 1) {
		$("#popover"+ popoverCount).parent().parent().css("width", "185px")
		$("#popover" + popoverCount).parent().parent().css("top", "0")
	} else {
		$("#popover1").parent().parent().css("width", "280px")
	}
	$('#popover' + popoverCount).removeClass('opacity00');
	typing('#popover' + popoverCount, text, function () {
		popoverCount++;
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}); 
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		callBackFunction();
	});
}

function appendNextBtn(selector, apndBtnDiv, callBackFunction) {
	$(selector).append('<a class="introjs-button user-btn pull-right">Next &#8594;</a>');
	if (apndBtnDiv) {
		$(".user-btn").addClass("userbtn");
	}
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function svgText(lineId, textValue, color, textViewpos, callBackFunction) {
	var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	if (lineId == "#line1") {
		text.setAttribute('x', + $(lineId).attr('x1') - 10);
		text.setAttribute('y', + (parseInt($(lineId).attr('y1')) + + $(lineId).attr('y2')) / 2.5);
	} else if (lineId == "#line2" || lineId == "#line5"){
		text.setAttribute('x', + (parseInt($(lineId).attr('x1')) + + $(lineId).attr('x2')) / 2.2);
		text.setAttribute('y', + $(lineId).attr('y1') - 10);
	} else if (lineId == "#line3") {
		text.setAttribute('x', + $(lineId).attr('x1') + 10);
		text.setAttribute('y', + (parseInt($(lineId).attr('y1')) + + $(lineId).attr('y2')) / 2);
	} else if (lineId == "#line4") {
		text.setAttribute('x', + $(lineId).attr('x1') - 25);
		text.setAttribute('y', + (parseInt($(lineId).attr('y1')) + + $(lineId).attr('y2')) / 2);
		//text.setAttribute("transform", "rotate(-90)");
	} 
	text.setAttribute('fill', color);
	text.textContent = textValue;
	text.setAttribute('style', 'font-family: monospace;');
	$('#svgId').append(text);
	TweenMax.to($("text").last(), 1, {opacity : "1", onComplete:function() {
		$("text").last().removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}