var iValue = 1;
var incrementCount = 1;
var lenOfInput;
var iCount = 4;

var registerVariableReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#codeDiv',
			intro :'',
			position:"right",
		},
		{
			element :'#mainDeclaration',
			intro :'',
			position:"right",
		},
		{
			element :'#registermainDeclaration',
			intro :'',
			position:"right" 
		},
		{
			element :'#animationDiv',
			tooltipClass : "hide"
		},
		{
			element :'#numberDiv1',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#formainDeclaration',
			tooltipClass : "hide"
		},
		{
			element :'#forDeclaration',
			tooltipClass : "hide"
		},
		{
			element :'#i1',
			intro :'',
			position:"right",
		},
		{
			element :'#addressDiv1',
			tooltipClass : "hide"
		},
		{
			element :'#iCondition',
			intro :'',
			position:"right" 
		},
		{
			element :'#sopLine1',
			tooltipClass : "hide"
		},
		{
			element :'#outputDiv',
			tooltipClass : "hide"
		},
		{
			element :'#iIncrement',
			position:"right"
		},
		{
			element :'#addressDiv1',
			tooltipClass : "hide"
		},
		{
			element :'#iCondition',
			intro :'',
			position:"right" 
		},
		{
			element :'#sopLine1',
			tooltipClass : "hide"
		},
		{
			element :'#outputDiv',
			tooltipClass : "hide"
		},
		{
			element :'#iIncrement',
			intro :'',
			position:"right"
		},
		{
			element :'#addressDiv1',
			tooltipClass : "hide"
		},
		{
			element :'#iCondition',
			intro :'',
			position:"right" 
		},
		{
			element :'#sopLine1',
			tooltipClass : "hide"
		},
		{
			element :'#outputDiv',
			tooltipClass : "hide"
		},
		{
			element :'#closeBrace1',
			tooltipClass : "hide"
		},
		{
			element :'#closeBrace',
			tooltipClass : "hide"
		},
		{
			element :'#printDefinition',
			tooltipClass : "hide"
		},
		{
			element :'#restartBtn',
			intro :'Click to restart',
			position:"right",
		}
		]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "codeDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			});
		break;
		
		case "registermainDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"<ul><li>A <span class='color-yellow'>register</span> variable is declared with the keyword <span class='color-yellow'>register</span>.</li></ul>" ,function() { 
					$('.introjs-tooltiptext').append('<span id = text1></span>')
					typing('#text1',"<ul><li>Register variables do not have any space in the <span class = 'color-yellow'>memory</span>.</li></ul>" ,function() {
						$('#text1').append('<span id = text2></span>')
						typing('#text2',"<ul><li>Register variables are stored at registers for <span class = 'color-yellow'>speed</span> accessing of a variable than compared to a variable stored in memory.</li></ul>" ,function() {
							$('#animationDiv').css({'opacity':'1'});
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break; 
		
		case "mainDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "<ul><li><span class='color-yellow'>main()</span> is called by the operating system.</li>"
						+"<li><span class='color-yellow'>main()</span> is the execution starting point for a C program.</li></ul>"
				typing('.introjs-tooltiptext',text ,function() { 
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		
		case "i1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The value of <span class='color-yellow'>i</span> is initialized to <span class='color-yellow'>1</span>."; 
				typing('.introjs-tooltiptext',text ,function() { 
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		
		case "closeBrace1" :
			nextLine();
		break;
		
		case "closeBrace" :
			nextLine();
			$('#printDefinition').removeClass('visibility-hidden');
		break;
		
		case "animationDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#mainmemoryheading').css({'opacity':'1'});
				$('#mainMemory').removeClass("visibility-hidden");
		  		$('#mainMemory').addClass('box-border');
		  		setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "numberDiv1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep == 4) {
		  			$('#aValueAnimation').removeClass('visibility-hidden');
					$('#addressDiv1').removeClass('visibility-hidden');
					$('#address1').removeClass('visibility-hidden');
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"Space of the variable  <span class = 'color-yellow'>i</span> at register." ,function() { 
						$('.introjs-nextbutton').show();
		  		});
				}
			});
		break; 
		
		case "addressDiv1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep == 8) {
				TweenMax.to('#numberDiv1', 1, {opacity: 1, onComplete: function() {
					$('#one').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
						$('#one').removeClass('circle-css');
						$("#addressValue1").text($("#one").text());
						fromEffectWithTweenMax('#one', '#addressValue1', function() {
							$('.introjs-tooltip').removeClass("hide");
							typing('.introjs-tooltiptext',"The value <span class = 'color-yellow'>1</span> of the variable <span class = 'color-yellow'>i</span> is stored in the register." ,function() { 
								$('.introjs-nextbutton').show();	
							});	
						});
					});
				}});
				} else if(intro._currentStep > 12) {
					$("#addressValue1").text(incrementCount);
					setTimeout(function () {
						intro.nextStep();
					}, 500);
				}
			});
		break; 
		
		case "iIncrement" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep < 20) {
				typing('.introjs-tooltiptext',"The variable <span class = 'color-yellow'>i</span> is <span class = 'color-yellow'>incremented</span> by <span class = 'color-yellow'>1</span>." ,function() { 
					incrementCount++;
					iValue++;
					$('.introjs-nextbutton').show();	
				});
				} else if(intro._currentStep > 20) {
					incrementCount++;
					iValue++;
					setTimeout(function () {
						intro.nextStep();
					}, 100);
				}
			});
		break; 
		
		case "forDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.nextStep();
			});
		break;
		
		case "outputDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				if(intro._currentStep == 11) {
				$('#outputAValue1').text('1');
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
				} else if(intro._currentStep == 16) {
					$('#outputAValue2').text('2');
					setTimeout(function () {
						intro.nextStep();
					}, 1000);
				} else if(intro._currentStep == 21) {
					$('#outputAValue3').text('3');
					dynamicStep("out");
					setTimeout(function () {
						intro.nextStep();
					}, 1000);
				} else {
					var action =  intro._introItems[intro._currentStep].action;
					if (action == 'out') {
					$('#outputAValue' + ival).text(ival);
					dynamicStep("out");
					setTimeout(function () {
						intro.nextStep();
					}, 500);
				}
				}
			});
		break;
		
		case "iCondition" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltiptext').append('<span id = firstDiv class = "opacity00"><ul><li>Condition: <span id = iCount class = "position color-yellow">i</span> <= 10</span></li></ul><span id = itrue class = "mleft position"></span>');
				if(intro._currentStep < 20) {
					$('#firstDiv').removeClass('opacity00');
					fromEffectWithTweenMax('#iCondition','#firstDiv', function() {
						flipEffectWithTweenMax("#iCount", iValue, function() {
							if(iValue <= 10) {
								flipEffectWithTweenMax("#itrue", "returns true", function() {
								$('#itrue').append('<ul><li><span id = gotoloop class = color-white></span></li></ul>');
									typing('#gotoloop',"As the condition returns true, the body of the loop is executed." ,function() { 
										$('.introjs-nextbutton').show();
									});
								});
							}
						});		
					});
				} else if(intro._currentStep > 21) {
					$('#firstDiv').removeClass('opacity00');
					fromEffectWithTweenMax('#iCondition','#firstDiv', function() {
						flipEffectWithTweenMax("#iCount", iValue, function() {
							if(iValue < 11) {
								flipEffectWithTweenMax("#itrue", "returns true", function() {
									ival = iCount - 1;
									$('.output').append('<div id = "appendDiv'+ival + '"><span id = "outputAValue'+ival+'"></span></div>');
									action = "out";
									intro.nextStep();
								});
							} else  {
								flipEffectWithTweenMax("#itrue", "returns false", function() {
								$('#itrue').append('<ul><li><span id = gotoloop class = color-white>As the condition returns false, the control comes out of the loop.</li></ul>');							
								$('.introjs-nextbutton').show();
								});
							}
						});		
					});
				}
			});
		break; 
	 
		case "sopLine1" :
			nextLine();
			$('#outputDiv').removeClass('opacity00');
		break; 
		
		case "formainDeclaration" :
			$('#functionMemory').addClass('visibility-hidden');
			nextLine();
		break; 
		
		case "printDefinition" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#line1').fadeTo(1000,1,function() {
				  $('#line2').fadeTo(1000,1,function() {
				    $('#line3').fadeTo(1000,1,function() {
				    });
				  });
				});
			});
		break; 
		
		case "restartBtn":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$('#restartBtn').click(function() {
					location.reload();
				});
			});
		break;
		}
	});

intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();

text = "Let us consider a sample code on <span class = 'color-yellow'>register</span> variable."	
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
});	

function dynamicStep(action) {
	iCount++;
	if(iCount < 13) {
		var dynamicStep = {
				"element" : '#iIncrement',
			    "position" : "left",
			    "intro" : "",
				"tooltipClass" : "hide"
			}
		intro.insertOption(intro._currentStep + 1, dynamicStep); 
		var dynamicStep = {
				"element" : '#addressDiv1',
			    "position" : "left",
			    "intro" : "",
				"tooltipClass" : "hide"
			}
		intro.insertOption(intro._currentStep + 2, dynamicStep); 
		var dynamicStep = {
				"element" : '#iCondition',
			    "position" : "right",
			    "intro" : "",
			}
		intro.insertOption(intro._currentStep + 3, dynamicStep); 
		if (iCount < 12) {
		var dynamicStep = {
				"element" : '#outputDiv',
			    "position" : "right",
			    "intro" : "",
				"tooltipClass" : "hide",
			    action : action
			}
		intro.insertOption(intro._currentStep + 4, dynamicStep); 
		}
	} 
}
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":10,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
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
function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 1, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.6, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.6, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function animate1() {
	$('.animation-btn').remove();
	intro.nextStep();
}

function nextLine() {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		setTimeout(function () {
			intro.nextStep();
		}, 1000);
	});
}