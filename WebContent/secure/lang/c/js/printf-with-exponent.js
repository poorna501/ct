var introcode;
var typingInterval = 10;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;
var floatValue;

function introFunction() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#printfDefinition',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#program',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#VariableDeclararion',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printFloatValue"
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide",
			},{
				element :'#sopLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printfStatement"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printFloatValue"
			},{
				element : "#restartBtn",
				intro : "Click to restart.",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
			case "printfDefinition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
					TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
						$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
							$('.introjs-duplicate-nextbutton').click(function() {
								$("#contentOfPage").removeClass('opacity00');
								$(".introjs-duplicate-nextbutton").remove();
								introcode.nextStep();
							});
						});
					}});
				}});
			break;
			
			case "program" :
				$("#codeDiv, #outputDiv").removeClass("opacity00");
				$("#printfDefinition").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we learn how the <span class = "ct-code-b-yellow">printf()</span> '+
							'function uses the <span class = "ct-code-b-yellow">%e</span> format'+
							' character along with <span class = "ct-code-b-yellow">field width</span>'+
							' to print the given <span class = "ct-code-b-yellow">float</span> number.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "VariableDeclararion" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				text = 'Here, we are declaring and initializing a float variable '+
						'<span class = "ct-code-b-yellow">a</span> to '+
						'<span class = "ct-code-b-yellow">98.7654</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "sopLine" + sopLineCount  :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printFloatValue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">%10.2e</span> format character specifies that '+
									'the total of <span class="ct-code-b-yellow">10</span> spaces will be used'+
									' while printing in which the <span class="ct-code-b-yellow">2</span> '+
									' spaces will be reserved for the fractional digits.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "printfStatement":
							setTimeout(function(){
								introcode.nextStep();
							},800);	
						break;
					}
				});
			break;
			
			case "animationDiv" :
				$('#animationDiv').removeClass('opacity00');
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li>The given number <span class = "ct-code-b-green">98.7654</span> is divided by'+
							' <span class = "ct-code-b-green">10<sup>1</sup></span>. &nbsp;<span id="buttonSpan"></span>'+
							'<br><span id="appendSpan"></span>';
					typing('#exponentSteps', text, typingInterval, 'white', function() {
						$('#appendSpan').append('<span class = "ct-code-b-green"><span id="calValue">'+
							'<span class="number opacity00">98.7654</span>'+
						'<span class="divide visibility-hidden">/</span>'+
						'<span class="exponent visibility-hidden">10<sup>1</sup></span></span></span><br>'+
						'<span class = "ct-code-b-green"><span id="result" class="position visibility-hidden">'+
						'98.7654/10<sup>1</sup></span></span>'+
						'</li></ul><span id="appendSpan1"></span>');
						$('#buttonSpan').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick='divisionAnimation()'>Next &#8594;</a>");
					});
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printFloatValue" :
							$('#appendDiv1').removeClass('visibility-hidden');
								setTimeout(function() {
									introcode.nextStep();
								},800);
						break;	
					}
				});
			break;
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#printfDefinition").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}


function introNextStep() {
	setTimeout(function() {
		introcode.nextStep();
	},800);
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function divisionAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$('#number1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
		$(".number").removeClass("opacity00");
		$('#number1').removeClass('circle-css');
		fromEffectWithTweenMax('#number1', '.number', function() {
			zoomInDownEffect('.divide', function() {
				zoomInDownEffect('.exponent', function() {
					$('#calValue').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
						$('#calValue').removeClass('circle-css');
						$("#result").removeClass("visibility-hidden");
						fromEffectWithTweenMax('#calValue', '#result', function() {
							setTimeout(function() {
								flipEffectWithTweenMax('#result', '9.87654', function() {
									$('#appendSpan1').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=addExponentText()>Next &#8594;</a>");
								});
							},400);
						});
					});
				});
			});
		});
	});
}

function addExponentText() {
	$(".introjs-duplicate-nextbutton").remove();
	text = '<li>By multiplying <span class = "ct-code-b-green">9.87654</span> with '+
			'<span class = "ct-code-b-green">10<sup>1</sup></span> we get the given value'+
			' <span class = "ct-code-b-green">98.7654</span>.<br/>'+
			'Here <span class = "ct-code-b-green">10<sup>1</sup></span> is represented as'+
			' <span class = "ct-code-b-green">E+1</span>.<span id="appendedButton"></span><br><span class = "ct-code-b-green">'+
			'<span class = "value1  visibility-hidden">9.87654</span>'+
			'<span class= "eplus1 visibility-hidden">E+1</span></span><span id="appendedButton2"></span></li>'+
			'<span id="appendSpan2"></span>';
	typing('#appendSpan1', text, typingInterval, 'white', function() {
		introcode.refresh();
		$('#appendedButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() { 
			$(".introjs-duplicate-nextbutton").remove();
			$('#result').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
				$('#result').removeClass('circle-css');
				$(".value1").removeClass("visibility-hidden");
				fromEffectWithTweenMax('#result', '.value1', function() {
					$('.eplus1').removeClass('visibility-hidden')
						$('#appendedButton2').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=removeThreeDigits()>Next &#8594;</a>");
				});
			});
		});
	});
}

function removeThreeDigits() {
	$(".introjs-duplicate-nextbutton").remove();
	text = '<li>Since, only <span class = "ct-code-b-green">2</span> spaces are reserved for the fractional part'+
			' (<span class = "ct-code-b-green">.8<span class="circle-css">7</span>654</span>), the value in the'+
			' <span class = "ct-code-b-green">2<sup>nd</sup></span> position'+
			' <span class = "ct-code-b-green">7</span> will be rounded to '+
			'<span class = "ct-code-b-green">8</span>.<span id="appendedButton3"></span>'+
			'<span id="appendedText1"></span></li><span id="appendSpan3"></span>';
	typing('#appendSpan2', text, typingInterval, 'white', function() {
		$('#appendedText1').after('<br><span class = "ct-code-b-green"><span id = "final" class="visibility-hidden">'+
				'9.8<span id="frac1" class="position">7</span><span id="frac2">6</span><span id="frac3">5</span>'+
				'<span id="frac4">4</span>E+1</span></span><span id="appendedButton4"></span>');
		introcode.refresh();
		$('#appendedButton3').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
		"onclick=truncating()>Next &#8594;</a>");
	});
}

function truncating() {
	$(".introjs-duplicate-nextbutton").remove();
	$('.value1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
		$('.value1').removeClass('circle-css');
		$("#final").removeClass("visibility-hidden");
		fromEffectWithTweenMax('.value1', '#final', function() {
			$("#frac2, #frac3, #frac4").addClass('blinking');
			$("#frac2, #frac3, #frac4").effect( "highlight",{color: 'yellow'},1000, function() {
				$("#frac2, #frac3, #frac4").remove();
				$("#frac2, #frac3, #frac4").removeClass('blinking');
				setTimeout(function() {
					$("#frac1").addClass('blinking');
					flipEffectWithTweenMax('#frac1', '8', function() {
						$("#frac1").removeClass('blinking');
						$('#appendedButton4').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=finalValuePrint()>Next &#8594;</a>");
					});
				},800);
			});
		});
	});
}

function finalValuePrint() {
	$(".introjs-duplicate-nextbutton").remove();
	text = '<li>Finally, we get the output as: '+
			'<span class="ct-code-b-white"><span id="example" style="background: black">_ _ _9.88E+1</span></span>'+
			'<span id="appendedButton5"></span></li>'
	typing('#appendSpan3', text, typingInterval, 'white', function() {
		introcode.refresh();
		$('#appendedButton5').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$('.introjs-duplicate-nextbutton').click(function () {
			$('.introjs-duplicate-nextbutton').remove();	
				introcode.nextStep();
		});
	});
}

//********* Transfer effect function ********* 
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

//********** zoomIn effect function **********
function zoomInDownEffect(selector, callBackFunction) {
	$(selector).removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
} 
