var introjs;

function finalKeywordAnimation() {
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
			element : "#finalKeywordCodeDiv",
			intro : "",
			position: "right",
			tooltipClass: "hide"
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		switch(element) {
			case "finalKeywordCodeDiv" :
					$("#finalKeywordCodeDiv").removeClass("opacity00");
					zoomInEffect("#preFinalCode", function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "The normal program execution.";
						typing(".introjs-tooltiptext", text, function() {
						
					});
				});
			break;
		
		}
	});
	introjs.start();
	$(".introjs-nextbutton, .introjs-skipbutton, .introjs.backbutton").hide();
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
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

