/**
 * 
 */

var usageOfcallocFunctionReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restart").click(function() {
		location.reload();
	});

	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCode',
			intro : '',
		}, {
			element : '#firstExLine1',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
		}, {
			element : '#size',
			intro : '',
		}, {
			element : '#memory',
			intro : '',
		}, {
			element : '#callocFunction',
			intro : '',
		}, {
			element : '#firstExLine2',
			intro : '',
		}, {
			element : '#oneDArrayDiv',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmax',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'appendZeros',
		}, {
			element : '#preCodeTwo',
			intro : '',
		}, {
			element : '#secondExLine1',
			intro : '',
		}, {
			element : '#qBox',
			intro : '',
		}, {
			element : '#callocFor2D',
			intro : '',
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#twoDArrayDiv',
			intro : '',
			animateStep : 'boxZooming',
		}, {
			element : '#secondExDiv',
			intro : '',
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			var text = $("#infoDiv").html();
		//	typing($("#infoDiv"), text, function() {
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
			});
		//	});
			break;
		case 'size':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing('.introjs-tooltiptext', "This represents the size of each element.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'memory':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing('.introjs-tooltiptext', "This represents total number of regions to be allocated.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'callocFunction':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing('.introjs-tooltiptext', " <span class='ct-color-springgreen'>calloc( )</span> creates " +
						"<span class='ct-code-b-yellow'>heap memory</span> and " +
						"initializes it with value <span class='ct-code-b-yellow'>0</span>.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preCode':
			introjs.refresh();
			$("#syntax").addClass('z-index9999999');
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#exampleOne").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example on <span class='ct-color-springgreen'>calloc( )</span>, " +
						"how to create a memory for <span class='ct-code-b-yellow'>one dimensional array</span>.", function() {
				TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
					$("#preCode").removeClass("opacity00");
					$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The pointer variable <span class='ct-code-b-yellow'>p</span> occupies " +
				"<span class='ct-color-lime'>2 bytes</span> of memory since it is a pointer " +
				"variable and it is declared with <span class='ct-code-b-yellow'>int datatype</span> so it " +
				"refer to <span class='ct-code-b-yellow'>int</span> variable.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();	
				});
			});
			break;
		case 'pBox':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#firstExDiv").removeClass("opacity00");
				var text = "The <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> " +
				"occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address " +
				"(i.e. location of memory), lets its address be as <span class='ct-code-b-yellow'>1112</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#pBox", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "<span class='ct-color-springgreen'>calloc( )</span> also returns the base address of the " +
				"entire memory and the void type is the reference to that memory.";
				typing('.introjs-tooltiptext', text, function() {
					$("#dataTypeInt1, #dataTypeInt2").addClass("blinking", function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'oneDArrayDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "So the memory alloted into <span class='ct-code-b-yellow'>5</span> regions and each regions occupied " +
				"with <span class='ct-color-lime'>2 bytes</span> and let it base " +
				"address is <span class='ct-code-b-yellow'>1056</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$("#oneDArrayDiv").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$("#oneDArrayDiv").removeClass("animated zoomIn");
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							$("#smallBox").effect("transfer", { to: $("#addressId")}, 1000).addClass(".ui-effects-transfer", function() {
								$("#addressId").removeClass("opacity00", function() {
									$("#elementId").removeClass("opacity00");
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmax':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext', "So the base address copied into <span class='ct-code-b-yellow'>pointer</span> " +
							"variable of <span class='ct-code-b-yellow'>p</span>.", function() {
						tweenmaxAnimation();
					});
				});
				break;
			case 'appendZeros':
				typing('.introjs-tooltiptext', "The memory which allocated by <span class='ct-color-springgreen'>calloc( )</span> " +
						"function by default assigns initial values as " +
						"<span class='ct-code-b-yellow'>zeros</span>.", function() {
					$(".append-zero").removeClass("opacity00");
					TweenMax.staggerFrom(".append-zero", 1, {opacity:1, top:-45, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
				break;
			}
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#exampleTwo").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example on <span class='ct-color-springgreen'>calloc( )</span>, " +
						"how to create a memory for <span class='ct-code-b-yellow'>two dimensional array</span>.", function() {
					TweenMax.to($("#preCodeTwo"), 1, {opacity: 1, onComplete: function(){
						$("#preCodeTwo").removeClass("opacity00");
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'secondExLine1':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The pointer variable <span class='ct-code-b-yellow'>q</span> occupies " +
				"<span class='ct-color-lime'>2 bytes</span> of memory since it is a pointer " +
				"variable and it is declared with <span class='ct-code-b-yellow'>float datatype</span> so it " +
				"refer to <span class='ct-code-b-yellow'>float</span> variable.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();	
				});
			});
			break;
		case 'qBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#secondExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>q</span> " +
				"occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address " +
				"(i.e. location of memory), lets its address be as <span class='ct-code-b-yellow'>1044</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#qBox", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'callocFor2D':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "Here 3 represents as row and 2 represents as column.<br>" +
							"So the memory alloted into 3 rows and 2 columns and each " +
							"region occupied with <span class='ct-color-lime'>4 bytes</span> of memory because " +
							"<span class='ct-code-b-yellow'>size(float)</span> " +
							"represents <span class='ct-code-b-yellow'>float datatype</span>."
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});

			break;
		case 'secondExLine2':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#dataTypeFloat1, #dataTypeFloat2").addClass("blinking");
				var text = "<span class='ct-color-springgreen'>calloc( )</span> also returns the base address of the entire " +
				"memory and the void type is the reference to that memory.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'twoDArrayDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "So the memory alloted with 3 rows and and each row contains 2 columns.<br>" + 
							"Let it base address be <span class='ct-code-b-yellow'>1002</span> and each region occupied with " +
							"<span class='ct-color-lime'>4 bytes</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#twoDArrayDiv", function() {
							$("#smallBoxTwoD").effect("transfer", { to: $("#twoDAddressId")}, 1000).addClass(".ui-effects-transfer", function() {
								$("#twoDAddressId").removeClass("opacity00", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			});
			break;
		case 'secondExDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing('.introjs-tooltiptext', "So the base address copied into <span class='ct-code-b-yellow'>pointer q</span> " +
						"i.e. <span class='ct-code-b-yellow'>1002</span> is copied.", function() {
					tweenmaxTwoDAnimation();
				});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation() {
	var l3 = $("#firstAddressId").offset();
	var l4 = $("#baseAddress").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#firstAddressId").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#baseAddress").removeClass("opacity00");
		TweenMax.from("#baseAddress", 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> has the " +
				"address of <span class='ct-code-b-yellow'>dynamic memory</span> so it can access the " +
				"variable <span class='ct-code-b-yellow'>p</span>.";
				typing('.introjs-tooltiptext', text, function() {
					svgAppend($('#firstExDiv'), 'svg1');
					svgMarkerAppend($('#svg1'), 'marker1');
					svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#firstExDiv'), $('#memoryBox1'), $('#smallBox'), $('#svg1'), 'svgLine1', 'marker1', function() {	
						$(".introjs-nextbutton").show();
					});	
				});
			});
		}});
	});
}

function tweenmaxTwoDAnimation() {
	var l3 = $("#twoDBaseAddress").offset();
	var l4 = $("#qValue").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#twoDBaseAddress").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#qValue").removeClass("opacity00");
		TweenMax.from("#qValue", 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>q</span> has the " +
				"address of <span class='ct-code-b-yellow'>dynamic memory</span> so it can access by the " +
				"variable <span class='ct-code-b-yellow'>q</span>.";
				typing('.introjs-tooltiptext', text, function() {
					svgAppend($('#secondExDiv'), 'svg2');
					svgMarkerAppend($('#svg2'), 'marker2');
					svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#secondExDiv'), $('#memoryBox2'), $('#smallBoxTwoD'), $('#svg2'), 'svgLine2', 'marker2', function() {	
						$(".introjs-nextbutton").show();
					});
				});
			});
		}});
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}