var lang;
var callCount = 1; 

var polynomialUsingLinkedList = function() {
	lang = getURLParameter("lang");
	initIntroJS();
	
}



function getURLParameter(sParam) { //choose the language like c or cpp...etc 
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#title",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#polyInit",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#strcutSpan",
			intro : "",
		},{
			element : "#typeDefDec",
			intro : "",
		},{
			element : "#preMain",
			intro : "",
		},{
			element : "#animationDiv",
			introjs : "",
			position : "left",
			animateStep : "headDec",
			tooltipClass : "hide"
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "title":
				$(".introjs-tooltip").removeClass('hide');
				var text = "Here, in this demo we will learn the working of <y>Polynomial</y> using <y>Linked List</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
				break;
			case "polyInit" :
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
				break;
			case "strcutSpan" :
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the declaration of a new <y>struct</y> type <y>polynomial</y>.<br><br>"
								+ "<ul><li><y>coeff</y> field is used to hold the <y>coefficient</y> inside the linked list.</li>"
								+ "<li><y>exp</y> field is used to hold the <y>Exponent </y> inside the linked list.</li>"
								+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				})
				break;
			case "typeDefDec" :
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass('hide');
					text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>node</y> to the '
							+'<y>struct poly</y> which is a <y>pointer</y>'
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "preMain" :
				$(".introjs-nextbutton").hide();
				$('#preMain').removeClass("hide").append('<div class="text-center b">In Main()</div>'+
							'<span id="headsDex">poly head1 = NULL, head2 = NULL,<br/> head3 = NULL;</span>');
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, we are declaring <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and "
								+"<y>head3</y> and initialize it to <y>NULL</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv" :
				$("#inMain").removeClass("opacity00");
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
					case "headDec":
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#canvas').removeClass("opacity00");
							setTimeout(function() {
								introjs.nextStep();
							},1500);
							introNextSteps("#btnsDiv", "", "");
							});
						break;
				}
				break;
			case "btnsDiv" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#btnsDiv').removeClass("opacity00");
				});
			break;
			case "createInMain" :
				$(".introjs-helperLayer").one("transitionend", function() {
					doPlayPause();
				});
				break;
			case "print1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					introNextSteps("#outputDiv", "text1", "");
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
				break;
			case "outputDiv" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "text" + callCount :
							$('#text' + callCount).removeClass("opacity00");
							introNextSteps("#head1Null", "call"+ callCount, "");
							setTimeout(function() {
								introjs.nextStep();
							},1500);
						break;
					}
				});
				break;
			case "head" + callCount + "Null" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "call" + callCount :
							$(".introjs-tooltip").removeClass('hide');
							var text = "Hello poorna";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
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

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}