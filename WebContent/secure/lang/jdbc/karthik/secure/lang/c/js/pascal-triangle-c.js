var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var number;
var index = 0;
var col = 0;
var spaces;
var pascalTriangleCReady = function() {
	introGuide();
	$(".line").hide();
	$('#restart').click(function() {
		location.reload();
	});
	
	tl = new TimelineLite();
	$('#rowValue').attr('contenteditable','false');
	
	$("#rowValue").on("keydown", function(e) {
		introjs.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/>row number should be single digit.</div>");
			e.preventDefault();
		}
	});
	
	$("#rowValue").on("keyup", function(e) {
		introjs.refresh();
		if ($(this).text() == "") {
			$('.error-msg').remove();
	       	$('.introjs-tooltiptext').append("<div class='error-msg'><br/>Empty value is not allowed.</div>");
	       	$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$("#rowValue").empty();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#topDiv",
					intro : "",
				 	position : "bottom",
				 	tooltipClass: "hide"
				},  {
			 		element : "#codeDiv",
					intro : "",
					position : "right",
					tooltipClass: "hide"
				},  {
					element : "#variableDeclaration",
					intro : "",
					position : "right"
				},  {
					element : "#getPrintf",
					intro : "",
					tooltipClass : "hide" 
				}, {
					element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
					action : "printfText"
				}, {
					element : "#getScanf",
					intro : "",
					position : "right"
				}, {
					element : "#outputDiv",
					intro : "",
					position : "left",
					action : "printfValue",
					tooltipClass: "hide"
				}, {
					element : "#totalForLoop",
					intro : "",
					position : "top",
					action : "beforeExecutionStarts",
					tooltipClass: "hide"
				}, {
					element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
					action : "outputPrintingStart"
				}, {
					element : "#restart",
					intro : "",
					position : "right"
				}]});
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "topDiv":
			/*$("#starDisplay").addClass("opacity00");*/
			$("#codeDiv").addClass("opacity00");
			$("#firstDiv, #secondDiv, #thirdDiv").addClass("opacity00")
			$("#arrow1").attr("x2","28%").hide();
			$("#arrow2").attr("x2","57%").hide();
			
		break;
		case "leftDiv":
		break;
		
		case "codeDiv":
			
        	break;
        	
		case "variableDeclaration":
			
        	break;
        	
		case "totalForLoop":
			
        	break; 
        	
		case "restart":
			
        	break;
        	
		case "getPrintf":
			$('#consoleId1').addClass('opacity00');
        	break;
        	
		case "getScanf":
			$('#rowValue').removeAttr('contenteditable');
			$('.matrix').addClass('opacity00');
        	break;
        	
		case "outputDiv":
		
			$('.introjs-helperLayer ').one('transitionend', function() {
				var action = introjs._introItems[introjs._currentStep].action;
				switch(action) {
				case "printfText":
					$('#animationDivText').addClass('opacity00');
					/*if (introjs._direction == "forward") {
						$('#animationDivText').removeClass('opacity00');
					} 
					stepNext();*/
					
					break;
					
				case "printfValue":
					$('#rowValue').removeAttr('contenteditable');
					$('.matrix').addClass('opacity00');
					$("#rowValue").text('');
					$(".outer").removeClass("background-color-green");
					$(".inner-one").removeClass("background-color-yellow");
					$(".inner-two").removeClass("background-color-blue");
					break;
					
				case "outputPrintingStart":
					
					break;
				}
			});
        	break;
		}
	});
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0 && targetElement.id !== "codeDiv") {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		case "topDiv":
			console.log("In the topDiv...");
			$('.introjs-nextbutton').hide();
			if (introjs._direction == "backward") {
				setTimeout(function() {
					console.log("Inthe reveal arrow..");
					revealArrow();
				}, 1000)
			} else  {
				$("#li1").removeClass("opacity00").addClass("animated fadeIn").one("animationend", function() {
					$("#li2").removeClass("opacity00").addClass("animated fadeIn").one("animationend", function() {
						
					});
				});
			}
			
		break;
		case "leftDiv":
			$('.introjs-nextbutton').hide();
			$("#leftDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});
		break;
		
		case "codeDiv":
			$('#codeDiv').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
					var text = "This is the sample <b class='ct-code-b-yellow'>C</b> program.";
		        	typing(".introjs-tooltiptext", text, function() {
		        		$(".introjs-nextbutton, .introjs-prevbutton").show();
		        	}); 
			});
        	break;
        	
		case "variableDeclaration":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "integer variables <b class ='ct-code-b-yellow'>rows, index, spaces, col</b> are declared.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton, .introjs-prevbutton").show();
	        	});
			});
        	break;
        	
		case "totalForLoop":
			$('#rowValue').attr('contenteditable','false');
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
					var text="Here you have one outer <b class='ct-code-b-yellow'>for-loop</b> and two inner <b class='ct-code-b-yellow'>for-loops</b>.";
		        	typing(".introjs-tooltiptext", text, function() {
		        		$('.introjs-tooltiptext').append("<ul><li></li></ul>");
		        		var text="The outer <b class='ct-code-b-yellow'>for-loop</b> is used to  print number of lines of pyramid.(Green color)";
		        		typing(".introjs-tooltiptext ul li:last-child", text, function() {
		        			$('.outer').addClass('background-color-green');
		        			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="innerLoopOne()">Next &#8594;</a>');
		        			$(".introjs-prevbutton").show();
		        		});
		        	});
			});
        	break; 
        	
		case "restart":
			$('.user-btn').remove();
			$('.introjs-tooltip').css("min-width","200px");
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#restart').removeClass('opacity00');
				var text = "Click to restart.";
	        	typing(".introjs-tooltiptext", text, function() {
	        	});
			});
        	break;
        	
		case "getPrintf":
			$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					stepNext();
					/*	setTimeout(function() {
						introjs.nextStep();
				}, 500);*/
			});
        	break;
        	
		case "getScanf":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here <b class ='ct-code-b-yellow'>scanf()</b> function reads one integer value as row size.";
	        	typing(".introjs-tooltiptext", text, function() {
	        		$(".introjs-nextbutton, .introjs-prevbutton").show();
	        	});
			});
        	break;
        	
		case "outputDiv":
			$('#consoleId1').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('.user-btn').remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var action = introjs._introItems[introjs._currentStep].action;
				switch(action) {
				case "printfText":
					if (introjs._direction == "forward") {
						$('#animationDivText').removeClass('opacity00');
					} 
						stepNext();
					/*$('#animationDivText').removeClass('opacity00');
						setTimeout(function() {
							introjs.nextStep();
					}, 1000);*/
					break;
					
				case "printfValue":
					$('#rowValue').attr('contenteditable','true');
					$('.introjs-nextbutton').hide();
						$('.matrix').removeClass('opacity00');
						charAtEnd('rowValue');
						$(".introjs-tooltip").removeClass("hide");
						 var text ="Enter a value for number of rows.";
						typing(".introjs-tooltiptext", text, function() {
		 				});
					break;
					
				case "outputPrintingStart":
					$('#codeDiv').addClass('z-index');
					arrow(".outer", ".outer", function() {
						setTimeout(function() {
							$("#consoleBodyDiv1").append("<div id='row0'></div>");
							mainForLoop();
						}, 200);
					});
					break;
				}
			});
        	break;
		}
	});
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function revealArrow() {
	console.log("In teh reveal arrow..");
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	$("#firstDiv").removeClass("opacity00");
	arrowReveal("#arrow1", "42%", "50%", function() {
		$("#secondDiv").removeClass("opacity00");
		arrowReveal("#arrow2", "70%", "50%", function() {
			$("#thirdDiv").removeClass("opacity00");
			$(".introjs-tooltip").removeClass("hide");
			var text = "Let us consider  sample <b class ='ct-code-b-yellow'>C</b> program to print pascal triangle.";
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
		});
	});
}


function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 800)
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 800)
	}
}

function innerLoopOne () {
	$(".introjs-prevbutton").hide();
	$('.user-btn').remove();
	$('.introjs-tooltiptext ul').append("<li></li>");
	var text="This inner <b class='ct-code-b-yellow'>for-loop</b> is used to print spaces in each line.(Yellow color)";
	typing(".introjs-tooltiptext li:last-child", text, function() {
		$('.inner-one').addClass('background-color-yellow').removeClass("background-color-green");
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="innerLoopTwo()">Next &#8594;</a>');
		$(".introjs-prevbutton").show();
	});
	
}

function innerLoopTwo () {
	$(".introjs-prevbutton").hide();
	$('.user-btn').remove();
	$('.introjs-tooltiptext ul').append("<li></li>");
	var text="This inner <b class='ct-code-b-yellow'>for-loop</b> is used to print number of <b class='ct-code-b-yellow'> * </b> on each line.(Blue color)";
	typing(".introjs-tooltiptext li:last-child", text, function() {
		$('.inner-two').addClass('background-color-blue').removeClass("background-color-green");
		$(".introjs-nextbutton, .introjs-prevbutton").show();
	});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth() * 2)
	});
	
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	  
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	  
	TweenMax.to(".arrow", 1, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function mainForLoop() {
	spaces = parseInt($('#rowValue').text());
	if (index < parseInt($("#rowValue").text())) {
		arrow(".outer", ".inner-one", function() {
			$(".next-line-span").remove();
			spaceAnimation(index,spaces, function() {
				arrow(".inner-one","#numberReset", function() {
					arrow("#numberReset",".inner-two", function() {
						number = 1;
						numberAnimation(col,function() {
							arrow(".inner-two","#codeNextLine", function() {
								$(".blinking").removeClass("blinking");
								index++;
								$("#consoleBodyDiv1").append("<div id='row"+index+"'><span class='next-line-span blinking'>&nbsp;</span></div>");
								 setTimeout(function() {
									arrow("#codeNextLine", ".outer", function() {
										mainForLoop();
										console.log("mainForLoop recursion calling");
									});
								}, 100); 
							});
						});
					});
				});
			});
		});
	} else {
		$(".arrow").remove();
		introjs.nextStep();
		$("#consoleBodyDiv1 div:last-child .blinking").remove();
	}
}


function spaceAnimation(index,spaces,callBackFunction) {
	if (spaces > index) {
		arrow(".inner-one", "#printfSpace", function() {
			$(".print").last().removeClass("blinking");
			$("#row" + index).append("<span class='print'>&nbsp;</span>");
			$(".print").last().addClass("blinking");
			spaces--;
			arrow("#printfSpace",".inner-one", function() {
				spaceAnimation(index,spaces, callBackFunction);
			}); 
		}); 
		
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
} 

function numberAnimation(col,callBackFunction) {
	if (col <= index) {
		$(".print").last().removeClass("blinking");
		arrow(".inner-two", "#codeStarPrint", function() {
			$("#row" + index).append("<span class='pascal-value'>"+number+"</span><span class='number-space blinking'>&nbsp;</span>");
			arrow("#codeStarPrint", "#numberSet", function() {
				number = number * (index - col) / (col + 1);
				col++;
				arrow("#numberSet", ".inner-two", function() {
					$('.number-space').removeClass('blinking');
					numberAnimation(col, callBackFunction);
				});
			});
		});
		
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}


function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

 function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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


function arrowReveal(arrowId, x2, y2, callBackFunction) {
	$(arrowId).show();
  	tl.to(arrowId, 1, {attr:{x2: x2, y2: y2}, onComplete:function() {
    if (typeof callBackFunction === "function") {
      callBackFunction()
    }
  }});
}


 function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
} 