var introjs;
var typingInterval = 10;

var pointersIntroductionReady = function() {
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
			intro : "",
			animateStep : "xBoxAnimate"
		},
		{
			element : "#line2",
			intro : ""
		},
		{
			element : "#yBox",
			intro : "",
			animateStep : "yBoxAnimate"
		},
		{
			element : "#animationDiv",
			intro : "",
			animateStep : "1"
		},
		{
			element : "#line3",
			intro : ""
		},
		{
			element : "#line4",
			intro : ""
		},
		{
			element : "#zBox",
			intro : "",
			animateStep : "zBoxAnimate"
		},
		{
			element : "#animationDiv",
			intro : "",
			animateStep : "2"
		},
		{
			element : "#printf1",
			intro : ""
		},
		{
			element : "#xBox",
			intro : "",
			animateStep : "xValuePrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#printf2",
			intro : ""
		},
		{
			element : "#xBox",
			intro : "",
			animateStep : "xAddressPrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#printf3",
			intro : ""
		},
		{
			element : "#yBox",
			intro : "",
			animateStep : "yValuePrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#printf4",
			intro : ""
		},
		{
			element : "#yBox",
			intro : "",
			animateStep : "yAddressPrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#printf5",
			intro : ""
		},
		{
			element : "#zBox",
			intro : "",
			animateStep : "zValuePrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#printf6",
			intro : ""
		},
		{
			element : "#zBox",
			intro : "",
			animateStep : "zAddressPrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#printf7",
			intro : ""
		},
		{
			element : "#animationDiv",
			intro : "",
			animateStep : "*zValuePrint"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
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
			var typingContent = 'Let us learn why we want <span class="ct-code-b-yellow">Pointers</span> in ' +
								'<span class="ct-code-b-yellow">C</span> using this sample code.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">x</span> which is ' +
									'initialized with value <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "xBoxAnimate":
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">x</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory with some address (i.e. location of memory), lets its address be as ' +
										'<span class="ct-code-b-yellow">1111</span>.</br>Then the value <span class="ct-code-b-yellow">3</span> is ' +
										'initialized.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationXBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "xValuePrint":
					$('#xValue').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the value return by <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "xAddressPrint":
					$('#xAddress').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the address return by <span class="ct-code-b-yellow">&x</span>, since ' +
										'<span class="ct-code-b-yellow">&</span> (ampersand) return address of variable.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Now <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">y</span> which is ' +
									'initialized with value of <span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "yBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "yBoxAnimate":
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">y</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory with some address (i.e. location of memory), lets its address be as ' +
										'<span class="ct-code-b-yellow">1234</span>.</br>Then the value of <span class="ct-code-b-yellow">x</span> is ' +
										'initialized to <span class="ct-code-b-yellow">y</span> (i.e. <span class="ct-code-b-yellow">3</span>).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationYBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "yValuePrint":
					$('#yValue').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the value return by <span class="ct-code-b-yellow">y</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "yAddressPrint":
					$('#yAddress').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the address return by <span class="ct-code-b-yellow">&y</span>, since ' +
										'<span class="ct-code-b-yellow">&</span> (ampersand) return address of variable.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "1":
					var typingContent = 'In the above two variables <span class="ct-code-b-yellow">x</span> and <span class="ct-code-b-yellow">y</span> occupying ' +
										'memories at different location with same value <span class="ct-code-b-yellow">3</span>, but if we want to access one ' +
										'memory with two variables ' +
										'then we use <span class="ct-code-b-yellow">pointers</span>.</br> In pointers we have two unary operators. They are' +
										'<ul><li><span class="ct-code-b-yellow">&</span> (ampersand) returns address of variable</li>' +
										'<li><span class="ct-code-b-yellow">*</span> (asterisk) returns value at that address</li></ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "2":
					var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span> has the address of ' +
										'variable <span class="ct-code-b-yellow">x</span>, so that if we want the value at <span class="ct-code-b-yellow">x</span> we ' +
										'can get by <span class="ct-code-b-yellow">*z</span> (i.e asterisk returns value at that address), since ' +
										'<span class="ct-code-b-yellow">z</span> have the address of <span class="ct-code-b-yellow">x</span> by using ' +
										'<span class="ct-code-b-yellow">*z</span> it is pointed to <span class="ct-code-b-yellow">x</span> and returns value of ' +
										'<span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "*zValuePrint":
					TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '32.5%', y2: '41%'}, onComplete: function() {
						$('#xValue').addClass('blinking-border-background-blue');
						var typingContent = 'Since <span class="ct-code-b-yellow">*</span> (asterisk) return the value at that address, ' +
											'<span class="ct-code-b-yellow">*z</span> means the value at <span class="ct-code-b-yellow">z</span> ' +
											'values (i.e. the value at <span class="ct-code-b-yellow">1111</span>).</br>' +
											'Hence the blinking value is the value return by <span class="ct-code-b-yellow">*z</span>';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					}});
					break;
				}
			});
			break;
		case "line3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here we are declaring a <span class="ct-code-b-yellow">pointer</span> variable ' +
									'<span class="ct-code-b-yellow">*z</span> with type <span class="ct-code-b-yellow">int</span>.</br>' +
									'In \'<span class="ct-code-b-yellow">C</span>\' we can declare a pointer with <span class="ct-code-b-yellow">*</span> (asterisk).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});				
			break;
		case "line4":
			var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span> is ' +
								'assigned with <span class="ct-code-b-yellow">&x</span> (i.e address of <span class="ct-code-b-yellow">x</span>).';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "zBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "zBoxAnimate":
					var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span> ' +
										'is of type <span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes' +
										'</span> of memory with some address (i.e. location of memory), lets its address be as ' +
										'<span class="ct-code-b-yellow">2222</span>.</br>Then the value of <span class="ct-code-b-yellow">z</span> is ' +
										'assigned with <span class="ct-code-b-yellow">&x</span> (i.e. ampersand returns the address of ' +
										'<span class="ct-code-b-yellow">x</span>).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationZBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "zValuePrint":
					$('#zValue').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the value return by <span class="ct-code-b-yellow">z</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "zAddressPrint":
					$('#zAddress').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the address return by <span class="ct-code-b-yellow">&z</span>, since ' +
										'<span class="ct-code-b-yellow">&</span> (ampersand) return address of variable.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "printf1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf4":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf5":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">z</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf6":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">z</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf7":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">*z</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
				$('.svg-line').hide();
				var selector = $('.output-console-body > .visibility-hidden').eq(0);
				var typingContent = selector.removeClass('visibility-hidden').html();
				typing(selector, typingContent, 30, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
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

function animationYBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#yBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#xValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#xValue').removeClass('circle-css');
			$('#yValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#xValue', '#yValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationZBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#zBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#zBox').removeClass('animated zoomIn');
		$('#xAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#xAddress').removeClass('circle-css');
			$('#zValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#xAddress', '#zValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}