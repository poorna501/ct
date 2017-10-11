

var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$('#inputChar').val('');
		$('#hiddentotalEnterChar').val();
		location.relaod();
	});
	intro = introJs();
	$('#nextButton').click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
			steps : [{
			element :'#informationDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preBody',
			intro : '',
		}, {
			element :'#line1',
			intro : '',
		}, {
			element : '#line2',
			intro : '',
		},{
			element : '#line3',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "memory"
		},{
			element : '#line4',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "outputBox"
		},{
			element : '#line5',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "animation"
		},{
			element : '#line6',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "outputBox1"
		}, {
			element :'#line10',
			intro :'',
			animateStep : "outputBox1"
		}, {
			element : "#restartBtn",
			intro : "",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preBody':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Let us learn <span class='ct-code-b-yellow'>Inline-functions</span>.</li> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});	
			});
			break;
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line8" :
			$('#line7').removeClass("z-index1000000");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line9" :
			$('#line7').removeClass("z-index1000000");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "animationBox" :
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#animationBox").removeClass("opacity00");
					$(".box").removeClass("opacity00");
					$("#one").removeClass("opacity00");
					TweenMax.to("#box", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "2 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>width</span>.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
				break;
			case "outputBox":
				$('.introjs-helperLayer').one('transitionend', function () {
					$('#inputNumber').removeClass('opacity00');
					$('#inputChar').attr('disabled', 'disabled')
					$('.introjs-nextbutton').show();
					
					/*$("#inputChar" ).keyDown(function() {
						if ($("#inputChar").val().length == '') {
							$('.introjs-nextbutton').hide();
						} else {
						
						}
					});*/
				});
				break;
			case "animation":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#inputChar').removeAttr('disabled').focus();
					/*$('#outputDiv').removeClass('opacity00');*/
					charAtEnd("inputChar");
					keyDown();
					
					
				});
				break;
			case "outputBox1":
				$('.introjs-helperLayer').one('transitionend', function () {
					transferEffect("#line7", "#inputNumber1", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="inlineFunction()">Next →</a>');
						//$('.introjs-nextbutton').show();
					});
					//$('#inputNumber1').removeClass('opacity00');
					
					/*$('#line7').addClass("z-index1000000");
					typingContent = 'The cube of a given number :' + $('.max-value-div').children().val();
					typingInterval = 30;
					$("#").append($("#inputChar1").val());*/
				});
				break;
			
		
			}
			break;
		case "line10" :
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn">Next →</a>');
				$('.user-btn').click(function() {
					$('.user-btn').remove();
					transferEffect("#mul", "#number", function() {
						$('#line8').addClass('z-index1000000');
						  $('#number').text($('#box').text()+'*' +$('#box').text()+'*'+$('#box').text());
						  var mul = parseInt($('#box').text()) * parseInt($('#box').text()) * parseInt($('#box').text())
						  flipEffectWithTweenMax('#number', mul, function() {
							  $('#inputNumber2').text($('#number').text()).addClass('opacity00');
							  $('#outputBox').addClass('z-index1000000');
							  transferEffect("#number", "#inputNumber2", function() {
								  $('#line10, #line8').removeClass('z-index1000000');
								  $('.introjs-nextbutton').show();
							  });
						   });
						});
				});
			});
		break;
	case "restartBtn" :
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer ').one('transitionend', function() {
			$("#restartBtn").removeClass("opacity00");
			typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
				$('#restart').click(function() {
					location.reload();
				});
				$('.introjs-nextbutton').show();
			});
		});
		break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationDiv').removeClass('opacity00');
	TweenMax.to("#infotext", 1, {
		opacity : 1,
		onComplete : function() {
			$("#NextButton").removeClass("opacity00");
			$("#NextButton").click(function() {
				$("#NextButton").remove();
				intro.nextStep();
			});
		}
	});
}

function storeVal() {
	$('#inputChar').attr('disabled', 'disabled');
	$('.user-btn').remove();
	transferEffect("#inputChar", "#box", function() {
		$("#box").append($("#inputChar").val());
		$('.introjs-nextbutton').show();
	});
}

function inlineFunction() {
	$('.user-btn').remove();
	$('#line8').addClass('z-index1000000')
	flipEffectWithTweenMax('#number', $('#box').text(), function() {
		transferEffect("#line8", "#line10", function() {
			  $('#line10').addClass('z-index1000000');
			  flipEffectWithTweenMax('#sVal', $('#box').text(), function() {
				  intro.nextStep();
				  /*transferEffect("#mul", "#number", function() {
					  $('#number').text($('#box').text()+'*' +$('#box').text()+'*'+$('#box').text());
					  var mul = parseInt($('#box').text()) * parseInt($('#box').text()) * parseInt($('#box').text())
					  flipEffectWithTweenMax('#number', mul, function() {
						  $('#inputNumber2').text($('#number').text()).addClass('opacity00');
						  transferEffect("#number", "#inputNumber2", function() {
							  $('#line10, #line8').removeClass('z-index1000000');
							  $('.introjs-nextbutton').show();
						  });
					   });
					});*/
			  });
		});
	});
}

function typing(typingId, typingContent,cursorColor, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
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
	intro.insertOption(intro._currentStep + 1, options);
	intro._options.steps.push({"element" : stepName});
}
function keyDown() {
	$("#inputChar").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).val().length > 0) {
			$('.user-btn').remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal()">Next →</a>');
			//$(".introjs-nextbutton").show();
		} else {
			$('.user-btn').remove();
			//$(".introjs-nextbutton").hide();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 3 digits only</div>")
			e.preventDefault();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	$(selector).effect( "highlight",{color: 'blue'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}
