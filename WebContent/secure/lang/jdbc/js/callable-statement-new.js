var introjs;
var count = 0;

function callableStatementAnimation() {
	svgAppend("#mainDiv", "svgId", "markerId", "gray");
	introFunction();
}

function introFunction() {
	
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element: '#headingSection',
			intro: ''
		},{
			element: '#mainDiv',
			intro: '',
			tooltipClass: 'hide'
		}]
	});
	introjs.onafterchange(function(targetElement) {
	var elementId = targetElement.id;
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
			case "mainDiv":
				$("#mainDiv").removeClass("opacity00");
				var text = "End user application........";
				zoomInEffect("#userAplication", function() {
					popover('#userAplication','left', text, function() {
						driverManagerExplanation();
					});
				});
			break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn the working of <y>Callable Statement</y>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function driverManagerExplanation() { //view and explain driver manager
	zoomInEffect("#driverManager", function() {
		svgLineTopAndBottom("#mainDiv", "#userAplication", "#driverManager", "line0", "", "bottom", "top", "", "", "", function() {
			var text = "Driver manager explanation.....";
			popover('#driverManager','left', text, function() {
				dataBaseExplanation();
			});
		});
	});
}

function dataBaseExplanation() {
	zoomInEffect("#dataBaseDiv", function() {
		svgLineTopAndBottom("#mainDiv", "#driverManager", "#dataBaseOpen", "line1", "", "bottom", "top", "", "", "", function() {
			var text = "About data base............."
						+ "<br/><div id='storeProc'></div>";
			popover("#dataBaseOpen", "left", text, function() {
				var text = "Store proc..........."+
							"<br/><div id='connEstablish'></div>";
				typing("#storeProc", text, function() {
					appendNextBtn(function() {
						zoomInEffect(".box", function() {
							var text = "Connection...........";
							typing("#connEstablish", text, function() {
								$(".text-right, .user-btn").remove();
								appendNextBtn(function() {
									viewPipeLines()
								});
							});
						});
					});
				});
			});
		});
	});
}

function viewPipeLines() {
	$("#yPipeLine").removeClass("opacity00");
	TweenLite.to($('#yPipeLine'), 0.8, {css:{height: "104px", top: "-10px"},  onComplete:function() {
		dataFlow("#yValues", true, function() {
			console.log("sgdhsgf");
			$("#xPipeLine").removeClass("opacity00");
			TweenLite.to($('#xPipeLine'), 0.8, {css:{width: "137px"}, onComplete:function() {
				zoomInEffect("#contextDiv", function() {
					zoomInEffect("#connection", function() {
						dataFlow("#xValues", false, function() {
							svgDoubleLineTopOrBottomToRightOrLeft("#mainDiv", "#contextDiv", "#userAplication", "line4", "line5", "", "top", "right", "left", "bottom", "", function() {
								svgDoubleLineTopOrBottomToRightOrLeft("#mainDiv", "#userAplication", "#contextDiv", "line6", "line7", "", "right", "", "top", "", "", function() {
									
								});
							});
						});
					});
				});
			}});
		});
	}});
}

function dataFlow(selector, flag, callBackFunction) {
	var count = 0;
	
	var poornaInterVal = setInterval(function() {
	  if (count == $(selector + " *").length) {
		  $(selector + " *").addClass("opacity00");
	    clearInterval(poornaInterVal);
	    if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	  } 
	  //$(selector + " span").eq(count - 1).addClass("opacity00")
	  $(selector + " span").eq(count).removeClass("opacity00");
	  if (flag) {
		  TweenMax.to( $(selector + " span").eq(count), 0.5, { top : 0 });
	  } else {
		  TweenMax.to( $(selector + " span").eq(count), 0.5, { left : 135 });
	  }
		  count++;   
	}, 200);
}

function setTimeToIntroGoNextStep() { //set time to Intro goes to next step
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		callBackFunction();
	});
}

function popover(selector, position, text, callBackFunction) {	//display popover
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover' + count + '">'+ text +'</div>',
		container: '#mainDiv'
	});
	$(selector).popover('show');
	typing('#popover' + count, text, function() {
		appendNextBtn(function() {
			callBackFunction();
		});
	});
}

function appendNextBtn(callBackFunction) {
	$('#popover' + count).append('<div class="text-right"><br/><span class="introjs-button user-btn">Next &#8594;</span></div>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
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











