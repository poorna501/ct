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
			tooltipClass: "hide",
			animate : "withoutFinalKeyword"
		},{
			element : "#outputDiv",
			intro: "",
			position: "left",
			tooltipClass: "hide",
			animate : "printWithoutFinalKeyWord"
		},{
			element : "#finalKeywordCodeDiv",
			intro : "",
			position: "right",
			tooltipClass: "hide",
			animate : "finalKeyWithError"
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		$(".introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton").hide();
		switch(element) {
			case "finalKeywordCodeDiv" :
				var animate = introjs._introItems[introjs._currentStep].animate;
				switch (animate) {
					case "withoutFinalKeyword":
						$("#finalKeywordCodeDiv").removeClass("opacity00");
						zoomInEffect("#preFinalCode", function() {
							$(".introjs-tooltip").removeClass("hide");
							var text = "This is the sample program.";
							typing(".introjs-tooltiptext", text, function() {
								appendNextBtn('.introjs-tooltipbuttons', function() {
									explainWithoutFinalKeyword();
								});
							});
						});
					break;
					case "finalKeyWithError":
						$('.introjs-helperLayer').one('transitionend', function() {
							$(".arrow").remove();
							$(".introjs-tooltip").removeClass("hide");
							var text = 'Now put a <y>final</y> keyword in front of a <y>String subject = "\Java\"</y> and see what will '
										+ 'happeness.';
							typing(".introjs-tooltiptext", text, function() {
								appendNextBtn('.introjs-tooltipbuttons', function() {
									appendFinalKeyword();
								});
							});
						});
					break;
				}
			break;
			case "outputDiv" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					var animate = introjs._introItems[introjs._currentStep].animate;
					switch (animate) {
					case "printWithoutFinalKeyWord" :
							$(".output").html('<div id="outputLine1"><span id="outSubText1" class="opacity00">subject = </span> '
									+ '<span id="outSubVal1" class="position opacity00">Java</span> '
									+ '<span id="outMarksText1" class="opacity00"> , marks = </span> '
									+ '<span id="outMarks1" class="opacity00">80</span></div>');
							$("")
							
							//arrow("#printBeforeChange", "#printBeforeChange");
							/*displayOutputText("#printBeforeChange", "#subjBfre", "#outSubText1", "#subjVarBfre", "#strSubject", "#javaText", "#outSubVal1", function() {
								displayOutputText("#printBeforeChange", "#markBfre", "#outMarksText1", "#markVarBfre", "#intmarks", "#eighty", "#outMarks1", function() {
									$("#printBeforeChange").removeClass("z-index1000000");
									$("#outputLine1").after('<div id="outputLine2"><span id="outSubText2" class="opacity00">subject = </span> '
											+ '<span id="outSubVal2" class="position opacity00">C</span> '
											+ '<span id="outMarksText2" class="opacity00"> , marks = </span> '
											+ '<span id="outMarks2" class="opacity00">85</span></div>');
									arrow("#printBeforeChange", "#printAfterChange", function() {
										displayOutputText("#printAfterChange", "#subjaftr", "#outSubText2", "#subjVarAftr", "#strSubject2", "#CText", "#outSubVal2", function(){
											displayOutputText("#printAfterChange", "#markAftr", "#outMarksText2", "#markVarAftr", "#intMarks2", "#eightyFive", "#outMarks2", function(){
												$("#reInitOfSub, #reInitOfMarks").removeClass("lightgreen");
												$("#printAfterChange").removeClass("z-index1000000");
												setTimeout(function() {
													introjs.nextStep();
												}, 800);
											});
										});
									});
								});
							});*/
						break;
					}
				});
			break;
		}
	});
	introjs.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
}

function explainWithoutFinalKeyword() {
	var text = "<ul><li>Here, we are declare and initialize a <y>String</y> variable <y>subject</y> to <y>\"Java\"</y> and an "
				+ "<y>int</y> variable <y>marks</y> to <y>\"80\"</y>.</li></ul>";
	typing(".introjs-tooltiptext", text, function() {
		arrow("#subInit", "#marksInit", function() {
			appendNextBtn('.introjs-tooltipbuttons', function() {
				$(".introjs-tooltiptext ul >li").append("<li></li>");
				var text = "Print <y>subject</y> = <y>Java</y> , <y>marks</y> = <y>80</y>. on to the console.";
				typing(".introjs-tooltiptext ul li:last", text, function() {
					arrow("#marksInit", "#printBeforeChange", function() {
						appendNextBtn('.introjs-tooltipbuttons', function() {
							changeSubjectAndMarksValues();
						});
					});
				});
			});
		});
	});
}

function changeSubjectAndMarksValues() {
	$(".introjs-tooltiptext ul >li").append("<li></li>");
	var text = "Here, we are re-initialize the <y>subject</y> value from <y>Java</y> to <y>C</y> and <y>marks</y> from "
				+ " <y>80</y> to <y>85</y>.";
	typing(".introjs-tooltiptext ul li:last", text, function() {
		$("#reInitOfSub, #reInitOfMarks").addClass("lightgreen");
		arrow("#printBeforeChange", "#reInitOfSub", function() {
			arrow("#reInitOfSub", "#reInitOfMarks", function() {
				appendNextBtn('.introjs-tooltipbuttons', function() {
					$(".introjs-tooltiptext ul >li").append("<li></li>");
					var text = "Print <y>subject</y> = <y>C</y> , <y>marks</y> = <y>85</y>. on to the console.";
					typing(".introjs-tooltiptext ul li:last", text, function() {
						arrow("#reInitOfMarks", "#printAfterChange", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function appendFinalKeyword() {
	typing("#appendFinalKey", '<span class="fontWeight darkPink lightgreen">final</span>', function() {
		$(".darkPink").removeClass("lightgreen");
		
	});
}

function displayOutputText(selector1, selector2, selector3, selector4, selector5, selector6, selector7, callBackFunction) {
	$(selector1).addClass('z-index1000000');
	$(selector2).effect( "highlight",{color: 'blue'}, 500, function() {
		zoomInEffect(selector3, function() {
			$(selector4).effect( "highlight",{color: 'blue'}, 500, function() {
				$(selector5).effect( "highlight",{color: 'blue'}, 500, function() {
					$(selector6).addClass("z-index1000000").effect( "highlight",{color: 'blue'}, 500, function() {
						fromEffectWithTweenMax(selector6, selector7, function() {
							if (typeof callBackFunction === "function") {
								callBackFunction();
							}
						});
					});
				});
			});
		});
	});
}

function appendNextBtn(selector, callBackFunction) {
	$(selector).append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("body").append("<span id='dummy' class='opacity00' style='position: relative; z-index: 9999999;'>" + $(selector2).text() + "</span>");
	$("#dummy").offset({
		"top" : l2.top,
		"left" : l2.left
	});
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$(toId).effect( "highlight",{color: 'blue'}, 800);
	$('body').append("<i class='fa fa-arrow-right arrow animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth())
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	TweenMax.to(".arrow", 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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


