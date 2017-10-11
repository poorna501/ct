var introjs;
var typingSpeed = 10;
var tl;
var stepCount = 1;
var arr;

var flowchartAreaOfCircleReady = function() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"
		},{
			element : "#description",
			intro : "",
			position : "right"
		},{
			element : "#algorithmBox",
			intro : "",
			position : "right"
		},{
			element : "#flowChartBox",
			intro : "",
			position : "left"
		},{
			element : "#algorithmBox",
			intro : "",
			position : "right"
		},{
			element : "#flowChartBox",
			intro : "",
			position : "left"
		},{
			element : "#algorithmBox",
			intro : "",
			position : "right"
		},{
			element : "#flowChartBox",
			intro : "",
			position : "left"
		},{
			element : "#algorithmBox",
			intro : "",
			position : "right"
		},{
			element : "#flowChartBox",
			intro : "",
			position : "left"
		},{
			element : "#algorithmBox",
			intro : "",
			position : "right"
		},{
			element : "#flowChartBox",
			intro : "",
			position : "left"
		},{
			element : "#consoleId",
			intro : "",
			position : "right"
		},{
			element : "#restart",
			intro : "",
			tooltipClass: "hide"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			$(".introjs-nextbutton").hide();
				var text = "Finding area of a circle.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			
			break;
			
		case "description":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				tl.to("#description", 1, {opacity: 1, onComplete: function() {
					tl.to("#desList1", 1, {opacity: 1, onComplete: function() {
						var text1 = "To find the area of circle we should know the radius of that circle.";
						typing("#desList1", text1, function() {
							tl.to("#desList2", 1, {opacity: 1, onComplete: function() {
								var text2 = "Formula for area of circle is 3.14 * r * r (here r is radius).";
								typing("#desList2", text2, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						});
					}});
				}});
			});
			
			break;
			
		case "algorithmBox":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#algorithmBox, #heading1").removeClass("opacity00");
				if(stepCount == 1) {
					var text = "Start";
				} else if(stepCount == 2) {
					var text = "Read Radius";
				} else if(stepCount == 3) {
					var text = "Area = 3.14 * r * r";
				} else if(stepCount == 4) {
					var text = "Print Area";
				} else {
					var text = "End";
				}
				
				$("#point" + stepCount).removeClass("opacity00");
				typing("#point" + stepCount, text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			
			break;
			
		case "flowChartBox":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flowChartBox, #heading2").removeClass("opacity00");
				if(stepCount == 1) {
					$("#step" + stepCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						stepCount++;
						$(".introjs-nextbutton").show();
					});
				} else {
					arrowAppend();
				}
			});
			
			break;
			
		case "consoleId":
			$(".introjs-nextbutton").hide();
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='printArea()'>Next &#8594;</a>");
			$(".user-btn").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				tl.to("#consoleId", 1, {opacity: 1, onComplete: function() {
					$("#consoleId").removeClass("opacity00");
					var tooltipText = "Enter the radius";
					typing(".introjs-tooltiptext", tooltipText, function() {
						var text = "Enter the radius r = <span id='inputVal'><input id='radius' spellcheck='false' class='int-num'/></span>";
						typing("#runEditor1", text, function() {
							charAtEnd("radius");
							arr = [];
							$('#radius').on("keydown", function(e) {
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
									return;
								}
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
									e.preventDefault();
								}
							});
							
							$('#radius').on("keyup", function(e) {
								$('.length-error-text').remove();
								if ($(this).val() == "") {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																		"Please enter radius.</span>");
								}
								
								if ($(this).val().length == 0) {
									$(".user-btn").hide();
								} else if ($(this).val().length > 0 && $(this).val().length < 4) {
									$(".user-btn").show();
								}
								
								if ($(this).val().length > 3) {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please limit the number length to 3.</span>");
									$(".user-btn").hide();
								}
							});
						});
					});
					
				}});
			});
			
			break;
			
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				});
			});
			
			break;
		}
	});
	
	tl = new TimelineLite();
	svgAppend("#flowChartBox", "svg");
	svgMarkerAppend("#svg", "arrow");
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgAnimatingBottomToTopLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	if(x1 > x2) {
		x2 = x1;
	} else {
		x1 = x2;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
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

function arrowAppend() {
	svgAnimatingBottomToTopLine("#flowChartBox", "#step"+(stepCount-1), "#step"+(stepCount), "#svg", "line"+stepCount,"arrow", function() {
		$("#step" + stepCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			stepCount++;
			$(".introjs-nextbutton").show();
		});
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

function printArea() {
	$(".user-btn").remove();
	var text = "Area = " + ( 3.14 * parseInt( $("#radius").val())  * parseInt($("#radius").val() ) );
	typing("#runEditor2", text, function() {
		$(".introjs-nextbutton").show();
	});
}