var introjs, popoverCount = 0;


function appletLifeCycleIntro() {
	introFunction();
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
			tooltipClass: "hide",
		}]
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton").hide();
		var element = targetElement.id;
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(element) {
				case "mainDiv":
					var text = "In <y>applet</y> we have various <y>states</y>, each state have different <y>methods</y>.<br/><br/>" 
								+ " <ul><li><y>Initial</y> State ==> <y>init()</y></li>"
								+ "<li><y>Running</y> State ==> <y>start()</y></li>"
								+ " <li><y>Stopped</y> State ==> <y>stop()</y></li>"
								+ " <li><y>Destroy</y> State ==> <y>destroy()</y></li></ul>";
					displayPopover("#mainDiv", "left", text, function() {
						appendNextBtn(function() {
							
						});
					});
					//console.log("Hello applet");
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
			zoomInEffect("#")
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

function displayPopover(selector, position, text, callBackFunction) {	//display popover
	popoverCount++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover' + popoverCount +'">'+ text +'</div>',
		container: '#animationDiv'
	});
	$(selector).popover('show');
	$(".popover").css("top", "0");
	typing('#popover' + popoverCount, text, function() {
		callBackFunction();
	});
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		$(selector1).removeAttr('style');
		callBackFunction();
	});
}

function appendNextBtn(callBackFunction) {
	$('#popover' + popoverCount).append('<a class="introjs-button user-btn pull-right">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}
