var lang, intro, sum = 0, nodeCount = stepCount = 1;

function traverseInDcll() {
	declareNodesWhenFunctionCall("temp", "tempVal", "tempInDelMtd", "temp");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
	var toolTopText = "This is a tempary node to store the address of node.";
	tooltipDisplay("#temp", "bottom", toolTopText);
}


function introFunction() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#headingDiv',
						intro :'',
					},{
						element :'#animationDiv',
						intro :'',
						animateStep: 'tempNodeNull',
						tooltipClass : "hide",
					}]
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.zindex').removeClass('zindex');
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				$('.tooltopClass').addClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'tempNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>Doubly Circular linked List is an empty</y>. i.e <y>first</y> is <y>equal</y> to "
								+ " <y>NULL</y>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							var toolTopText = "first Nodes which stores the starting address of the list";
							tooltipDisplay("#firstDiv", "bottom", toolTopText);
							zoomInEffect('#firstNode', function() {
								appendNextBtn('.introjs-tooltipbuttons', 'ifTempValueIsNull');
							});
						});
					break;
					case "tempNotEqNull" :
						$('#sumVar, #temp').addClass('opacity00');
						$('#ifTempEqNull').removeClass('y')
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>Doubly Circular linked list</y> can contains <y>more than one node</y>."
							+ "</li><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
						
					break;
				}
			break;
			case "algorithmStepsDiv" :
				$('.introjs-tooltip').css('height','');
				$('#algorithmStepsDiv').removeClass('opacity00');
				$('.tooltopClass').addClass('zindex');
				$('.zindex').removeClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'Step1':
					$('#s1').addClass('opacity00');
					appendSteps(1);
					var text = '<ul><li>Check the conditin <g>first</g> is equal to <g>NULL</g> or not.</li>'
								+ '<li>If it is <brown>TRUE</brown>, then display <brown>List is Empty</brown>.<span id="btn"></span></li></ul>';
					$('#stepDes1').html(text);
					stepCount++;
					zoomInEffect('#s1', function() {
						introNextSteps('#mainDiv', 'first');
						appendNextBtn('#btn', 'moveStep');
					});
				break;
				case "Step2" :
					$('#s2').addClass('opacity00');
					appendSteps(2);
					var text = '<ul><li>If it is <brown>FALSE</brown>, then take one tempary node <g>temp</g> and initialize with <g>first</g>'
								+ ' value.</li> <li>Repeat the loop until <g>temp</g> is equal to <g>NULL</g>.</li>'
								+ ' <li>If it is <g>not NULL</g> then print the <g>data</g> field of <g>temp</g> and assign <g>next</g> field of '
								+ ' <g>temp</g> to <g>temp</g>, otherwise print <g>NULL</g>.<span id="btn"></span></li></ul>';
					$('#stepDes2').html(text);
					stepCount++;
					zoomInEffect('#s2', function() {
						introNextSteps('#mainDiv', 'second');
						appendNextBtn('#btn', 'moveStep');
					});
				break;
				}
			break;
			case "mainDiv" :
				$('#parentPre').removeClass('opacity00');
				$('.zindex').removeClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'first':
						$('#parentPre').append('<span id="funName">node <g>traverse()</g> { '
								+ '<span id="ifTempEqNull" class="opacity00">'
								+ '\n\tif (<brown>first == NULL</brown>) {'
								+ '\n\t\tprintf("<brown>List is Empty.</brown>");'
								+ '\n\t} <span id="whileBody"></span>'
								+'\n}</span>');
						$('#parentPre').removeClass('opacity00');
						$('#algorithmStepsDiv ul:first').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:first','#ifTempEqNull', function() {
								$('#ifTempEqNull').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'tempNotEqNull');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "second" :
						$('#whileBody').append('<span id="whileBodyDec"> else {'
								+ '\n\t\tnode temp = first;'
								+ '\n\t\twhile (temp != NULL) {'
								+ '\n\t\t\tprintf("%d", temp -> data);'
								+ '\n\t\t\ttemp = temp -> next;'
								+ '\n\t\t}</span>\n\t\tprintf("NULL");\n\t}');
						$('#whileBody').addClass('opacity00');
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:last','#whileBody', function() {
								$('#whileBody').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#restartBtn');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
				}
			break;
			case "restartBtn":
				$('.introjs-tooltip').css('min-width','');
				$('#mainDiv').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				$('#whileBody').removeClass('y');
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn how to <y>display</y> nodes data in <y>Doubly Circular Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
}

function tempEqNull() {
	$('.user-btn, #btn').remove();
	$('.introjs-tooltiptext ul li:last').after('<li></li>');
	text = 'Let us take one tempary node (<y>temp</y>) and store the <y>first</y> value (i.e <y> '
		+ $('#firstVal').text() +'</y>) to <y>temp</y>.';
	typing('.introjs-tooltiptext ul li:last', text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'lastNodeAnimation');
	});
}

function lastNodeAnimation() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	zoomInEffect('#temp', function() {
		$('#tempVal').removeClass('opacity00');
		fromEffectWithTweenMax("#tempVal", "#firstVal", $("#firstVal").text(), function() {
			if ($('#tempVal').text() != 'NULL') {
				svgAnimatingLineTopToBottom("#animationDiv", "#temp", "#dataDiv1",
						"#svgId", "line11", "arrow", false, function() {
					ifTempValueIsNull();	
				});
			} else {
				ifTempValueIsNull();
			}
		});
	});
}

function ifTempValueIsNull() {
	$('.user-btn, #btn').remove();
	$('.introjs-tooltiptext ul li:last').after('<li></li>');
	text = 'Check if <y>first</y> value is <y>NULL</y>.';
	typing('.introjs-tooltiptext ul li:last', text, function() {
		appendNextBtn('.introjs-tooltipbuttons', 'ifTempValueIsNullAnimation');
	});
}

function ifTempValueIsNullAnimation() {
	$('.user-btn, #btn').remove();
	$('.introjs-tooltiptext ul li:last').after('<li></li>');
	if ($('#firstVal').text() == "NULL") {
		text = 'Here, the condition is evaluates to <y>TRUE</y> so, display the <y>List is an Empty.</y>.';
		typing('.introjs-tooltiptext ul li:last', text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
			$('.introjs-nextbutton').show();
		});
	} else {
		text = 'Here, the condition is evaluates to <y>FALSE</y>, so repeat the loop until <y>temp</y> is <y>equal</y> to <y>NULL</y>.<br/>'
				+' It it is <y>TRUE</y> then, print the <y>data</y> filed of the <y>temp</y> and also traverse the '
				+ '<y>next</y> field of <y>temp</y> to <y>temp</y> node. Otherwise print <y>NULL</y>';
		typing('.introjs-tooltiptext ul li:last', text, function() {
			appendNextBtn('.introjs-tooltipbuttons', 'tempNotNull');
			
		});
	}
}

function tempNotNull() {
	$('.user-btn, #btn').remove();
	if ($('#tempVal').text() == "NULL") {
		introNextSteps('#algorithmStepsDiv', 'Step'+ stepCount);
		$('.introjs-nextbutton').show();
	} else {
		$('#traverseVar').removeClass('opacity00');
		$('#tempVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			svgAnimatingLineTopToBottom("#animationDiv", "#temp", "#dataDiv" + nodeCount,
					"#svgId", "line111", "arrow", false, function() {
				$('#line111').remove();
				$('#data' + nodeCount).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
					fromEffectWithTweenMax("#ndata" + nodeCount, "#data"+ nodeCount +"", $("#data" + nodeCount).text(), function() {
						setTimeout(function() {
							$('#ndata' + nodeCount).append('<c>&nbsp;-->&nbsp;</c>');
							zoomInEffect('#ndata' + nodeCount + ' c:last', function() {
								$('#tempVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
									svgAnimatingLineTopToBottom("#animationDiv", "#temp", "#dataDiv" + nodeCount,
											"#svgId", "line111", "arrow", false, function() {
										$('#line111').remove();
										$('#next' + nodeCount).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
											fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#tempVal", "bottom", function() {
												$('#line11').remove();
												if ($('#next' + nodeCount).text() == "NULL") {
													$('#ndata4').append('<c>NULL</c>').addClass('opacity00');
													zoomInEffect('#ndata4', function() {
														tempNotNull();
													});
												} else {
													svgAnimatingLineTopToBottom("#animationDiv", "#temp", "#dataDiv" + (nodeCount + 1),
															"#svgId", "line11", "arrow", false, function() {
																nodeCount++;
																tempNotNull();
													});
												}
											}); 
										});
									});
								});
							});
						},800);
					});
				});
			});
		});
	}
}

function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	for (var i = 1; i < 4; i++ ) {
		createDynamicNodes(i);
	}
	intro.refresh();
	$('#firstNode').removeClass('opacity00');
	
	setTimeout(function() {
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
			$("#prev" + (i + 1)).text($("#dataAddress" + (i)).text()).removeClass("opacity00");			
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		$("#prev1").text($("#dataAddress3").text()).removeClass("opacity00");
		$("#next3").text($("#dataAddress1").text()).removeClass("opacity00");
		//$("#next2").text("NULL").removeClass("opacity00");
		regenerateArrows(true);
		appendNextBtn('.introjs-tooltipbuttons', 'tempEqNull');
		appendNextBtn('.introjs-tooltipbuttons', 'lastNodeAnimation');
	},500);
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineBottomToTop("#animationDiv", "#firstDiv", "#prevDiv1",
					"#svgId", "line"+ i +"", "arrow", flag);
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#prevDiv"+ (i) +"",
					"#svgId", "line"+ i +"", "arrow", flag);
			svgAnimatingLineLeftToRight("#animationDiv", "#prevDiv"+ (i) +"", "#nextDiv"+ (i - 1) +"",
					"#svgId", "line1"+ i +"", "arrow", false);
		}
	}
	svgCurveUpper('#nextDiv' + ($('.nodes').length),  '#prevDiv1', "pUpLine1");
	svgCurveDown('#prevDiv1', '#nextDiv' +  ($('.nodes').length), "pDownLine1");
}

function changeIds1(elementParent, idAttr) {
	$(elementParent).each(function(index) {
      	$(this).attr("id", idAttr + (index + 1));
    	
	});
}

function changeIdsAtBegin(callBackFunction) {
	$('#dynamicNodes .nodes').each(function(index) {
	      $(this).attr("id", "node"+ (index + 1));
	}); 
	changeIds1($("#dynamicNodes .data-nodes"), "nodeData");
	changeIds1($("#dynamicNodes .data-div"), "dataDiv");
	changeIds1($("#dynamicNodes .next-div"), "nextDiv");
	changeIds1($("#dynamicNodes .data-address"), "dataAddress");
	changeIds1($("#dynamicNodes .data-span"), "data");
	changeIds1($("#dynamicNodes .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function appendSteps(i) {
	$('#algorithmStepsDiv').append('<div class="col-xs-12 margin-top-5 padding5" id="s'+ i 
			+ '"><div class="col-xs-12 padding00 position" id="stepDes'+ i +'"></div></div>');
}

function moveStep() {
	$('.user-btn, #btn').remove();
	intro.nextStep();
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

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		intro.nextStep();
	}, 1000);
}

function appendNextBtn(id, value) {
	$(id).append('<a class="introjs-button user-btn" onclick="' + value + '()">Next &#8594;</a>');
}

function getURLParameter(sParam) { //choose the language like c or cpp...etc 
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function getRandomInt(min, max) { //generate dynamic memory location (address).
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(val) {
	randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + val + '" style="top: 0px; width: auto;"><div class="col-xs-12 padding00">'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">prev</div>'
					+ '<div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">data</div>'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
					+ '<div id="nodedata' + val + '" class="data-nodes"><div id="prevDiv' + val + '" class="div-border left-radius col-xs-4 prev-div zindex">'
					+ ' <span id="prev' + val + '" class="position prev-span ct-green-color ct-fonts inline-style opacity00"></span></div>'
					+ '<div id="dataDiv' + val + '" class="div-border no-radius col-xs-4 data-div zindex">'
					+ ' <span id="data' + val + '" class="data-span ct-blue-color ct-fonts opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ '<div id="nextDiv' + val + '" class="position div-border right-radius col-xs-6 next-div zindex">'
					+ ' <span id="next' + val + '" class="position next-span ct-green-color ct-fonts inline-style opacity00"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center"><span id="dataAddress' + val + '"'
					+ ' class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress + '</span></div></div></div>';
	$('#dynamicNodes').append(x);
	var toolTopText = "This is an pointer type to hold the address of the previous node";
	tooltipDisplay(".prev-div", "top", toolTopText);
	var toolTopText = "This is an int data type to hold the user data";
	tooltipDisplay(".data-div", "top", toolTopText);
	var toolTopText = "This is an pointer type to hold the address of the next node";
	tooltipDisplay(".next-div", "top", toolTopText);
	var toolTopText = "it indicates the address of the node";
	tooltipDisplay(".data-address", "bottom", toolTopText);
}

function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {	//Temp node div declaration 
	$('#declareNodes').append('<div class="col-xs-2 col-xs-offset-1 extraNode opacity00 padding00 tooltopClass zindex" id=' + id1 + '>'
					+ '<div class="col-xs-12 box padding00 position"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts position"></span>'
					+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass('opacity00');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	setTimeout(function(){
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).html(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				intro.refresh();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	},200);
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text(val);
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, pos, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left});
		if (pos == "left") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "right") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: 350 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		}
	});
}

function bounceCallBack(selector1, selector2, callBackFunction) {
	$(selector2).removeAttr("style")
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$("#animatinDiv").removeAttr("style");			
	$('#dummy').remove();
}

function tooltipDisplay(selector, position, text) {
	$(selector).attr({"data-placement": ""+ position +"", "title": ""+ text +""}).tooltip();
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
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

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2, flag) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	if (flag) {
		line.setAttribute("opacity", 0);
	}
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').scrollTo(typingId, 500);
		$('.introjs-tooltip').show();
	});
}

function svgCurveUpper(selector1, selector2, polyLineId, callBackFunction) {
	$("#" + polyLineId).remove();
	var x = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width());
	var y = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 15);
	var x1 = x + (($(selector1).outerWidth() / 3));
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.2);
	var x3 = ($(selector2).offset().left - $("#svgId").offset().left ) - $(selector1).outerWidth() / 3;
	var y3 = y2;
	var x4 = x3;
	var y4 = (($(selector2).offset().top  + $(selector2).height()) - $('#svgId').offset().top - 15);
	var x5 = x3 + $(selector2).outerWidth() / 3;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line upcurve");
	line.setAttribute('id', polyLineId);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#" +polyLineId, 1, {attr: {points : points}});
	},500);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function svgCurveDown(selector1, selector2, polyLineId, callBackFunction) {
	$("#" + polyLineId).remove();
	var x = $(selector1).offset().left - $("#svgId").offset().left;
	var y = ($(selector1).offset().top + ($(selector1).height())) - $("#svgId").offset().top;
	var x1 = x - $(selector1).width() / 2.1;
	var y1 = y;
	var x2 = x1;
	var y2 = y1 + $(selector1).height() * 1.2 + 2.5;
	var x3 = (($(selector2).offset().left + $(selector2).outerWidth()) - $("#svgId").offset().left) + $(selector1).width() / 2.3;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($(selector2).offset().top + ($(selector2).height())) - $("#svgId").offset().top;
	var x5 = x3 - $(selector2).width() / 2;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line downcurve");
	line.setAttribute('id', polyLineId);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#" + polyLineId, 1, {attr: {points : points}});
	},500);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

