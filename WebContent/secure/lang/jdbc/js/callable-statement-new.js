var introjs;
var count = 0;
var dataFlowCount = 0;

function callableStatementAnimation() {
	svgAppend("#mainDiv", "svgId", "markerId", "gray");
	introFunction();
}

function introFunction() {
	
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element: '#headingSection',
			intro: ''
		},{
			element: '#mainDiv',
			intro: '',
			tooltipClass: 'hide'
		},{
			element: "#restartBtn",
			intro :"Click to Restart",
			position: "right",
		}]
	});
	introjs.onafterchange(function(targetElement) {
	var elementId = targetElement.id;
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
			case "mainDiv":
				$("#mainDiv").removeClass("opacity00");
				var text = "End user application........";
				zoomInEffect("#userAplication", function() {
					popover('#userAplication','left', text, function() {
						driverManagerExplanation();
					});
				});
			break;
			case "restartBtn" :
				$("#restartBtn").removeClass("opacity00");
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn the working of <y>Callable Statement</y>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function driverManagerExplanation() { //view and explain driver manager
	zoomInEffect("#driverManager", function() {
		svgLineTopAndBottom("#mainDiv", "#userAplication", "#driverManager", "line0", "", "bottom", "top", "", "", "", function() {
			var text = "Driver manager explanation.....";
			popover('#driverManager','left', text, function() {
				dataBaseExplanation();
			});
		});
	});
}

function dataBaseExplanation() {
	zoomInEffect("#dataBaseDiv", function() {
		svgLineTopAndBottom("#mainDiv", "#driverManager", "#dataBaseOpen", "line1", "", "bottom", "top", "", "", "", function() {
			var text = "About data base............."
						+ "<br/><div id='storeProc'></div>";
			popover("#dataBaseOpen", "left", text, function() {
				var text = "Store proc..........."+
							"<br/><div id='connEstablish'></div>";
				typing("#storeProc", text, function() {
					appendNextBtn(function() {
						zoomInEffect(".box", function() {
							var text = "Connection...........";
							typing("#connEstablish", text, function() {
								$(".text-right, .user-btn").remove();
								appendNextBtn(function() {
									viewPipeLines()
								});
							});
						});
					});
				});
			});
		});
	});
}

function viewPipeLines() {
	$("#yPipeLine").removeClass("opacity00");
	TweenLite.to($('#yPipeLine'), 0.8, {css:{height: "114px", top: "-18px"},  onComplete:function() {
		dataFlow("#yValues", true, function() {
			$("#xPipeLine").removeClass("opacity00");
			zoomInEffect("#contextDiv", function() {
				zoomInEffect("#connection", function() {
					tube1();
					tube2();
					setTimeout(function() {
						$("#contextDiv").addClass("context");
						TweenMax.to("#contextDiv", 1, { css: {border: "2px dashed green"},onComplete:function() { 
							$("#contextDiv").addClass("context").css({border: "2px dashed green"});
							dataFlow("#xValues", false, function() {
								svgDoubleLineTopOrBottomToRightOrLeft("#mainDiv", "#contextDiv", "#userAplication", "line4", "line5", "", "top", "right", "left", "bottom", "", function() {
									svgDoubleLineRightOrLeftToBottomOrTop("#mainDiv", "#userAplication", "#contextDiv", "line6", "line7", "", "right", "top", "top", "", "", function() {
											svgLineRightAndLeft("#mainDiv", "#connection", "#callbleStatmt", "line8", "", "right", "left", "", "", true, function() {
												zoomInEffect("#callbleStatmt", function() {
												var text = "Callable statement............."
															+ "<br/><div id='streProcText'></div>";
												popover("#contextDiv", "right", text, function() {
													dataSendToDataBase();
												});
											});
										});
									});
								});
							});
						}});
					},800);
				});
			});
		});
	}});
}

function dataSendToDataBase() {
	svgDoubleLineTopOrBottomToRightOrLeft("#mainDiv", "#contextDiv", "#userAplication", "line9", "line10", "", "top", "right", "left", "bottom", "", function() {
		$("#line4, #line5").remove();
		svgDoubleLineRightOrLeftToBottomOrTop("#mainDiv", "#userAplication", "#contextDiv", "line11", "line12", "", "right", "top", "top", "", "", function() {
			$("#line6, #line7").remove();
			zoomInEffect("#streProc", function() {
				$("#line8").remove();
				svgLineRightAndLeft("#mainDiv", "#callbleStatmt", "#connection", "line18", "", "left", "right", "", "", true, function() {
					var text = "call to store processor.........";
					typing("#streProcText", text, function() {
						appendNextBtn(function() {
							storeProcessRequestSend();
						});
					});
				});
			});
		});
	});
}

function storeProcessRequestSend() {
	dataFlowCount++;
	dataFlow("#xValues", false, function() {
		dataFlow("#yValues", true, function() {
			var text = "Select storeProcess..........";
			popover("#dataBase", "right", text, function() {
				$(".box").eq(1).css("border-color", "green").effect("highlight", {color: 'blue'}, 500, function() {
					$(".box").eq(1).addClass("blue");
					//$(".box:eq(1) span").css("color", "white");
					$("#run").removeClass("opacity00");
					setTimeout(function() {
						$("#run").removeClass("faa-spin").addClass("opacity00");
						dataFlowCount = 0
						dataFlow("#yValues", true, function() {
							dataFlow("#xValues", false, function() {
								$("#line18").remove();
								svgLineRightAndLeft("#mainDiv", "#connection", "#callbleStatmt", "line8", "", "right", "left", "", "", true, function() {
									$("#streProcText").after("<div id='receiveStreProcText'></div>")
									var text = "receive data ......"
										+ "<div id='appendBtn'></div>";
									typing("#receiveStreProcText", text, function() {
										$('#appendBtn').append('<div class="text-right"><br/><span class="introjs-button user-btn">Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#line9, #line10, #line11, #line12").remove();
											svgDoubleLineTopOrBottomToRightOrLeft("#mainDiv", "#contextDiv", "#userAplication", "line13", "line14", 
													"", "top", "right", "", "bottom", "", function() {
												var text = "Successfully receive data.....";
												popover("#javaAppli", "right", text, function() {
													introjs.nextStep();
												});
											});
										});
									});
								});
							});
						});
					}, 2500);
				});
			});
		});
	});
}

function dataFlow(selector, flag, callBackFunction) {
	var count = 0;
	
	var poornaInterVal = setInterval(function() {
	  if (count == $(selector + " *").length) {
		  $(selector + " *").addClass("opacity00");
	    clearInterval(poornaInterVal);
	    if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	  } 
	  $(selector + " span").eq(count).removeClass("opacity00");
	  if (dataFlowCount == 0) {
		  if (flag) {
			  TweenMax.to( $(selector + " span").eq(count), 1, { top : -20});
		  } else {
			  TweenMax.to( $(selector + " span").eq(count), 1, { left : 165});
		  }
	  } else {
		  if (flag) {
			  TweenMax.to( $(selector + " span").eq(count), 1, { top : 120 });
		  } else {
			  TweenMax.to( $(selector + " span").eq(count), 1, { left : -20 });
		  }
	  }
	  count++;  
	}, 500);
}

function setTimeToIntroGoNextStep() { //set time to Intro goes to next step
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		callBackFunction();
	});
}

function popover(selector, position, text, callBackFunction) {	//display popover
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover' + count + '">'+ text +'</div>',
		container: '#mainDiv'
	});
	$(selector).popover('show');
	typing('#popover' + count, text, function() {
		appendNextBtn(function() {
			callBackFunction();
		});
	});
}

function appendNextBtn(callBackFunction) {
	$('#popover' + count).append('<div class="text-right"><br/><span class="introjs-button user-btn">Next &#8594;</span></div>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {	//typing function
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}


function svgRectDisplay(selector1, selector2, rectLineId, callBackFunction) {
	var x1 = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width());
	var y1 = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 15);
	
	var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
	rect.setAttribute("class", "svg-rect rect");
	
	rect.setAttribute("x", x1);
	rect.style.height = 150;
	
	rect.setAttribute('id', rectLineId);
	  
	$("#svgId").append(rect);
	TweenMax.to($('#' + rectLineId).show(), 0.8, {attr: {y: y1}, onComplete: function() {
		
	}});
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function tube1() {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	x1 = ($("#driverManager").offset().left - $("svg").offset().left) + $("#driverManager").width(); 
	x2 = ($("#contextDiv").offset().left - $("svg").offset().left);

	line.setAttribute("id", "tube2");
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", "39%");
	line.setAttribute("x2", x1);
	line.setAttribute("y2", "39%");
	line.style.stroke = "skyblue";
	$("#svgId").append(line);
	
	TweenMax.to($('#tube2').show(), 0.8, {attr: {x2: x2}});
	
}

function tube2() {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	x1 = ($("#driverManager").offset().left - $("svg").offset().left) + $("#driverManager").width(); 
	x2 = ($("#contextDiv").offset().left - $("svg").offset().left);

	line.setAttribute("id", "tube3");
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", "36%");
	line.setAttribute("x2", x1);
	line.setAttribute("y2", "36%");
	line.style.stroke = "skyblue";
	$("#svgId").append(line);
	TweenMax.to($('#tube3').show(), 0.8, {attr: {x2: x2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}









