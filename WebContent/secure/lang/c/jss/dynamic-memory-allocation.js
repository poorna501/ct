/**
 * 
 */
var typingInterval = 10;
var dynamicMemoryAllocationReady = function() {
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
			element :'#preCode',
			intro : '',
		}, {
			element :'#line1',
			intro : '',
		}, {
			element : '#cBox',
			intro : '',
		}, {
			element :'#line2',
			intro : '',
		}, {
			element : '#kBox',
			intro : '',
			animateStep : 'kBoxZooming',
		}, {
			element :'#line3',
			intro : '',
		}, {
			element : '#kBox',
			intro : '',
			animateStep : 'kBoxAddressing',
		}, {
			element : '#memoryDiv',
			intro : '',
			animateStep : 'accessVariable',
		}, {
			element :'#line4',
			intro : '',
		}, {
			element : '#memoryDiv',
			intro : '',
			animateStep : 'bounceEffect',
		}, {
			element : '#exampleTwo',
			intro : '',
		}, {
			element : '#secondExLine1',
			intro : '',
			animateStep : 'introduction',
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'memoryAnimate'
		}, {
			element : '#secondExLine1',
			intro : '',
			animateStep : 'valuesInitilization',
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'initializingValues'
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
		}, {
			element : '#secondExLine3',
			intro : '',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'svgAnimate',
		}, {
			element : '#secondExLine4',
			intro : '',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'arraySizeError',
		}, {
			element : '#finalDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
			$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
			var elementId = targetElement.id;
			switch(elementId) {
			case 'preCode':
				typing('.introjs-tooltiptext', "Let us consider a sample example.", function() {
					$(".introjs-nextbutton").show();
					$("#preCode").removeClass("opacity00");
				});
				break;
			case 'line1':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here the <span class='ct-code-b-yellow'>int</span> variable <span class='ct-code-b-yellow'>" +
							"c</span> which is initialized " +
							"with value <span class='ct-code-b-yellow'>10</span>.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'line2':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "The pointer variable <span class='ct-code-b-yellow'>k</span> occupies " +
							"<span class='ct-color-lime'>2 bytes</span> of memory since it is a pointer " +
							"variable and it is declared with <span class='ct-code-b-yellow'>int datatype</span> so it " +
							"refer to <span class='ct-code-b-yellow'>int</span> variable.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'line3':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>k</span> is " +
							"assign with <span class='ct-code-b-yellow'>&c</span> i.e. the address of " +
							"<span class='ct-code-b-yellow'>c</span> is copied in <span class='ct-code-b-yellow'>k</span>.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'line4':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>*k</span> is assign with " +
							"value <span class='ct-code-b-yellow'>50</span>.<br>" +
							"In this case pointer variable <span class='ct-code-b-yellow'>k</span> is pointed to " +
							"<span class='ct-code-b-yellow'>c</span> so that it changes <span class='ct-code-b-yellow'>c</span> " +
							"value to <span class='ct-code-b-yellow'>50</span>.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'cBox':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "let the variable <span class='ct-code-b-yellow'>c</span> is of type " +
								"<span class='ct-code-b-yellow'>int</span> it occupies <span class='ct-color-lime'>2 bytes</span> of memory " +
								"with some address (i.e. location of memory), lets its address be as <span class='ct-code-b-yellow'>1024</span>." +
								"<br><br>" +
								"Then the value <span class='ct-code-b-yellow'>10</span> is initialized."
					typing('.introjs-tooltiptext', text, function() {
						cBoxAnimation();
					});
				});
				break;
			case 'kBox':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'kBoxZooming':
					$('.introjs-helperLayer').one('transitionend', function() {
						typing('.introjs-tooltiptext', "let the variable <span class='ct-code-b-yellow'>k</span> is of type " +
								"<span class='ct-code-b-yellow'>int</span> it occupies <span class='ct-color-lime'>2 bytes</span> of memory " +
								"with some address (i.e. location of memory), lets its address be as " +
								"<span class='ct-code-b-yellow'>1054</span>.", function() {
							kBoxAnimation();
						});
					});
					break;
				 case 'kBoxAddressing':
					$('.introjs-helperLayer').one('transitionend', function() {
						typing('.introjs-tooltiptext', "Here the address of <span class='ct-code-b-yellow'>c</span> is copied to " +
								"<span class='ct-code-b-yellow'>k</span> i.e. <span class='ct-code-b-yellow'>1024</span> is copied to " +
								"<span class='ct-code-b-yellow'>k</span>.", function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								tweenmaxAnimation("#cBoxAddress", "#kValue", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
					break;
				}
				break; 
			case 'memoryDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'accessVariable':
					$('.introjs-helperLayer').one('transitionend', function() {
						typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>k</span> has the " +
								"address of <span class='ct-code-b-yellow'>c</span> so it can access the " +
								"variable <span class='ct-code-b-yellow'>c</span>.", function() {
								//	animationPointerStraightArrow();
							svgAppend($('#memoryDiv'), 'svg1');
							svgMarkerAppend($('#svg1'), 'marker1');
							svgAnimatingLineSelector1LeftSideToSelector2RightSide($('#memoryDiv'), $('#memoryBox2'), $('#memoryBox1'), $('#svg1'), 'svgLine1', 'marker1', function() {	
								$(".introjs-nextbutton").show();
							});
						});
					});
					break;
				case 'bounceEffect':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "The pointer variable <span class='ct-code-b-yellow'>k</span> is pointed to <span class='ct-code-b-yellow'>c</span>" +
						" so <span class='ct-code-b-yellow'>*k</span> means the value of <span class='ct-code-b-yellow'>c</span>.<br><br> " +
						"Hence the value of <span class='ct-code-b-yellow'>c</span> is changed to <span class='ct-code-b-yellow'>50</span>."
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								bounceFromEffectWithTimelineMax("#kInputValue", "#cValue", function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
									$(".user-btn").click(function() {
										$(".user-btn").remove();
										var text = "Here this is a controversy, <br>" +
													"Without knowing the variable <span class='ct-code-b-yellow'>c</span>, the pointer " +
													"<span class='ct-code-b-yellow'>k</span> has changed the value of " +
													"<span class='ct-code-b-yellow'>c</span>."
													/* "This can be solved by this <b>DMA</b> <span class='ct-code-b-yellow'>" +
													"(Dynamic memory allocation)</span> with <span class='ct-code-b-yellow'>heap memeory</span>." */
										typing('.introjs-tooltiptext', text, function() {
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
					break;
				}
				break;
			case 'exampleTwo':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Let us consider another example.", function() {
						$("#exampleTwo, #secondExDiv").removeClass("opacity00");
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'secondExLine1':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'introduction':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "Here the int variable <span class='ct-code-b-yellow'>a</span> with size of the " +
									"array <span class='ct-code-b-yellow'>5</span> is declared."
						typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton").show();
						});
					});
					break;
				case 'valuesInitilization':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "The values within the braces are <span class='ct-code-b-yellow'>three</span> but the memory alloted in " +
									"<span class='ct-code-b-yellow'>five</span> regions so after initializing the values into memory " +
									"the remaining regions filled with the <span class='ct-code-b-yellow'>zero's</span>."
						typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton").show();
						});
					});
					break;
				}
				break;
			case 'secondExLine2':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "The pointer variable <span class='ct-code-b-yellow'>p</span> occupies " +
							"<span class='ct-color-lime'>2 bytes</span> of memory since it is a pointer " +
							"variable and it is declared with <span class='ct-code-b-yellow'>int datatype</span> so it " +
							"refer to <span class='ct-code-b-yellow'>int</span> variable.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'secondExLine3':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>p</span> is " +
							"assign with <span class='ct-code-b-yellow'>&a</span> i.e. the address of " +
							"<span class='ct-code-b-yellow'>a</span> is copied in <span class='ct-code-b-yellow'>p</span>.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'arrayDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'memoryAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "Based on the array size the memory can be allocated. Here size of the array is " +
									"<span class='ct-code-b-yellow'>5</span> " +
									"so the memory allocated for <span class='ct-code-b-yellow'>5</span> regions."
						typing('.introjs-tooltiptext', text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								$(".small-box").css("visibility", "visible");
								$("#arrayDiv").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$("#arrayDiv").removeClass("animated zoomIn");
								$("#smallBox").effect("transfer", { to: $("#addressId")}, 1000).addClass(".ui-effects-transfer", function() {
									$("#addressId").removeClass("opacity00", function() {
										$("#elementId").removeClass("opacity00");
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											var text = "Here <span class='ct-code-b-yellow'>1112</span> is the base address and everytime " +
														"the address increased by <span class='ct-color-lime'>2 bytes</span> because it is " +
														"an <span class='ct-code-b-yellow'>int datatype</span>."
											typing('.introjs-tooltiptext', text, function() {
												$(".introjs-nextbutton").show();
											});
										});
									});
									});
								});
							});
						});
					});
					break;
				case 'initializingValues':
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#inputArray").effect("transfer", { to: $("#smallBox")}, 1000).addClass(".ui-effects-transfer", function() {
							$("#smallBox").removeClass("opacity00");
							$("#valuesId1, #valuesId2, #valuesId3").removeClass("opacity00");
							typing('.introjs-tooltiptext', "The remaining regions filled with " +
									"<span class='ct-code-b-yellow'>zero's</span>.", function() {
								$("#valuesId4").removeClass("opacity00").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
									$("#valuesId5").removeClass("opacity00").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
					break;
				}
				break;
			case 'pBox':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "let <span class='ct-code-b-yellow'>p</span> is a " +
							"<span class='ct-code-b-yellow'>pointer</span> variable it occupies <span class='ct-color-lime'>2 bytes</span> of memory " +
							"with some address (i.e. location of memory), lets its address be as " +
							"<span class='ct-code-b-yellow'>1044</span>.", function() {
						pBoxAnimation();
					});
				});
				break;
			case 'secondExDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'svgAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						typing('.introjs-tooltiptext', "Here the base address of <span class='ct-code-b-yellow'>a</span> is copied to " +
								"<span class='ct-code-b-yellow'>p</span> i.e. <span class='ct-code-b-yellow'>1112</span> is copied to " +
								"<span class='ct-code-b-yellow'>p</span>.", function() {
							tweenmaxAnimation("#firstAddressId", "#pValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									$('.svg-line-cross').hide();
									typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>p</span> has the " +
											"address of <span class='ct-code-b-yellow'>a</span> so it can access the " +
											"variable <span class='ct-code-b-yellow'>a</span>.", function() {
										svgAppend($('#secondExDiv'), 'svg2');
										svgMarkerAppend($('#svg2'), 'marker2');
										svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#secondExDiv'), $('#memoryBox3'), $('#variableA'), $('#svg2'), 'svgLine2', 'marker2', function() {	
											$(".introjs-nextbutton").show();
									});
									});
								});
							});
						});
					});
					break;
				case 'arraySizeError':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "But here the size of the array <span class='ct-code-b-yellow'>a</span> is already declared with "+
						"<span class='ct-code-b-yellow'>5</span>. Once the memory is allocated at compile time or run time we can't modify "+
						"the memory. So it gives an <span class='ct-color-red'><b>error</b></span>."
						typing('.introjs-tooltiptext', text, function() {
									$("#secondExLine4").addClass("ct-color-red");
							$(".introjs-nextbutton").show();
						});
					});
					break;
				}
				break;
			case 'secondExLine4':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#secondExLine4").removeClass("opacity00");
					typing('.introjs-tooltiptext', "Now I want to increase the size of array <span class='ct-code-b-yellow'>5</span> " +
							"to <span class='ct-code-b-yellow'>10.</span>", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'finalDiv':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#finalDiv").removeClass("opacity00").css({height: $("#finalDiv").outerHeight()});
				//	var text = $("#finalDiv").html();
				//	typing('.final-div', text, function() {
					$("#finalLine1").fadeTo(300, 1, function() {
						$("#list1").fadeTo(300, 1, function() {
							$("#list2").fadeTo(300, 1, function() {
								$("#finalLine2").fadeTo(300, 1, function() {
									$("#finalDiv").addClass('z-index9999999');
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
							});
						});	
					});	
					
			//		});
				});
				break;
			case 'restart':
				$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
				$(".introjs-tooltip").css("min-width", "-moz-max-content");
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

function cBoxAnimation() {
	$("#cBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#cBox").removeClass("animated zoomIn");
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$(".introjs-duplicate-nextbutton").remove();
			tweenmaxAnimation("#cInputValue", "#cValue", function() {
				$(".introjs-nextbutton").show();	
			});
		});
	});
}

function kBoxAnimation() {
	$("#kBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#kBox").removeClass("animated zoomIn");
		$(".introjs-nextbutton").show();
	});
}

function pBoxAnimation() {
	$("#pBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#pBox").removeClass("animated zoomIn");
		$(".introjs-nextbutton").show();
	});
}

function animationPointerStraightArrow() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '42%'}, onComplete: function() {
		$('.introjs-nextbutton').show();
	}});
}

function animationPointerArrow() {
	TweenMax.to($('.svg-line-cross').show(), 2, {attr: {x2: '35%', y2: '52%'}, onComplete: function() {
		$("#pValue").removeClass("opacity00");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
		$(".user-btn").click(function() {
			$(".user-btn").remove();
			$('.svg-line-cross').hide();
			typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>p</span> has the " +
					"address of <span class='ct-code-b-yellow'>a</span> so it can access the " +
					"variable <span class='ct-code-b-yellow'>a</span>.", function() {
				TweenMax.to($('.svg-line-right').show(), 1, {attr: {x2: '50%'}, onComplete: function() {
					$(".introjs-nextbutton").show();
				}});
			});
		});
	}});
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function bounceFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}