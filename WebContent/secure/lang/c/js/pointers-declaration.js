var introjs;
var typingInterval = 10;

var pointersDeclarationReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#preCode",
			intro : ""
		},
		{
			element : "#line1",
			intro : ""
		},
		{
			element : "#xBox",
			intro : ""
		},
		{
			element : "#line2",
			intro : "",
			animateStep: 'floatP'
		},
		{
			element : "#pBox",
			intro : "",
			animateStep: 'floatP'
		},
		{
			element : "#line3",
			intro : "",
			animateStep: 'floatP'
		},
		{
			element : "#line2",
			tooltipClass: "hide",
			animateStep: 'intP'
		},
		{
			element : "#pBox",
			intro : "",
			animateStep: 'intP'
		},
		{
			element : "#line3",
			intro : "",
			animateStep: 'intP'
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn how to declare <span class="ct-code-b-yellow">Pointers</span> in ' +
								'<span class="ct-code-b-yellow">C</span> using this code.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here, the <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">x</span> is ' +
									'initialized with the value <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is of type ' +
									'<span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
									'of memory with address <span class="ct-code-b-yellow">1111</span>.</br>Then the value ' +
									'<span class="ct-code-b-yellow">3</span> is ' +
									'initialized.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationXBox()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "floatP":
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> occupies ' +
										'<span class="ct-code-b-yellow">2 bytes</span> of memory since it is a <span class="ct-code-b-yellow">pointer' +
										'</span> variable and it is declared with <span class="ct-code-b-yellow">float</span> datatype so it refers ' +
										'only the address which contains a <span class="ct-code-b-yellow">float</span> value.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "intP":
					TweenMax.to($('#line2'), 1, {opacity: 0, onComplete: function() {
						$('#line2').text('int *p;');
						TweenMax.to($('#line2'), 1, {opacity: 1, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						}});
					}});
					break;
				}
			});
			break;
		case "pBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "floatP":
					var typingContent = 'The variable <span class="ct-code-b-yellow">p</span> is a <span class="ct-code-b-yellow">pointer</span> and ' +
										'it allocates <span class="ct-code-b-yellow">2 bytes</span> of memory to store the address of normal variable.' +
										'</br><span class="ct-code-b-yellow">Note:</span> In this example <span class="ct-code-b-yellow">pointer</span>' +
										' variable is of type <span class="ct-code-b-yellow">float</span> so it refers only the address of a memory ' +
										'location which contains <span class="ct-code-b-yellow">float</span> value.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "intP":
					var typingContent = 'Since, variable <span class="ct-code-b-yellow">p</span> is a <span class="ct-code-b-yellow">pointer</span> ' +
										'it occupies <span class="ct-code-b-yellow">2 bytes</span> of memory to store the address of normal variable.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "line3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "floatP":
					var typingContent = 'Here, the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> is ' +
										'assigned with <span class="ct-code-b-yellow">&x</span> it throws error since ' +
										'<span class="ct-code-b-yellow">x</span> is ' +
										'of type <span class="ct-code-b-yellow">int</span> and <span class="ct-code-b-yellow">p</span> is of type ' +
										'<span class="ct-code-b-yellow">float</span>.</br>' +
										'<span class="ct-code-b-yellow">Note:</span> The <span class="ct-code-b-yellow">pointer</span> variable can ' +
										'refer only to the variable of type it declared, i.e. the <span class="ct-code-b-yellow">pointer</span> variable ' +
										'declared with <span class="ct-code-b-yellow">float</span> can assigned with address of variable of type ' +
										'<span class="ct-code-b-yellow">float</span>.</br>So, ' +
										'change the datatype of <span class="ct-code-b-yellow">p</span> to <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "intP":
					var typingContent = 'Now the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> is ' +
										'assigned with <span class="ct-code-b-yellow">&x</span>, so the address of ' +
										'<span class="ct-code-b-yellow">x</span> is copied to <span class="ct-code-b-yellow">p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Now the address of <span class="ct-code-b-yellow">x</span> is copied to ' +
									'<span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> so that ' +
									'<span class="ct-code-b-yellow">p</span> is pointed to <span class="ct-code-b-yellow">x</span>.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPBoxArrow()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "restartBtn":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	
	introjs.start();
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

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationXBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#valueOfX').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfX').removeClass('circle-css');
			$('#xValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#valueOfX', '#xValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationPBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#pBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#pBox').removeClass('animated zoomIn');
		$('.introjs-nextbutton').show();
	});
}

function animationPBoxArrow() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.from($('#xAddress'), 1, {ease: Power4.easeIn, backgroundColor: 'blue', onComplete: function() {
		$('#pValue').text($('#xAddress').text());
		fromEffectWithTweenMax($('#xAddress'), $('#pValue'), function() {
			svgAppend($('#animationBox'), 'svg');
			svgMarkerAppend($('#svg'), 'markerEnd');
			var parentSelector = $('#animationBox');
			var selector1 = $('#pBox .padding10');
			var selector2 = $('#xBox .border-height-css');
			var svgId =  $('#svg');
			var svgLineId = 'svgLine';
			var markerId = 'markerEnd';
			svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
				$('.introjs-nextbutton').show();
			});
		});
	}});
}
