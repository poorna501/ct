
var typingInterval = 0.1;

var typeTwoDriverReadyFunction = function() {
	introFunction();
	$("line, text").hide();
}



function introFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#mainDiv",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#restartBtn",
			intro : "",
			tooltipClass : "hide"
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "mainDiv":
			TweenMax.to("#animationDiv", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("animationDiv", "left", "1");
				var text = "Type-2 driver";
				typing("#popover1", text, function() {
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
				});
			}});
		break;
		
		case "restartBtn":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text, function() {
					
				})
				
				$("#restartBtn").click(function() {
					location.reload(true);
				})
			})
		break;	
		}
	})
	
	
	introjs.start();
	$('.introjs-nextbutton').show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

var index = 1;
function javaDriverStep() {
		$(".ct-btn-next").remove();
		if (index == 1) {
			$("#jApp").addClass("blinking-border-background-blue");
			$(".first").show();
			TweenMax.to("#jApp", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("jApp", "left", "2");
				var text = "Java Application...";
				typing("#popover2", text, function(){
					$('#popover2').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					//$("#jApp").removeClass("blinking-border-background-blue");
					index++;
				});
			}});
		} else if (index == 2) {
			$("#partial").addClass("blinking-border-background-blue");
			TweenMax.to("#partial", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("partial", "left", "3");
				var text = "Java partial...";
				typing("#popover3", text, function(){
					$(".second").show();
					revealArrow($("line:eq(0)") , function() {
						$('#popover3').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
						index++;
					})
					
				});
			}})
		} else if (index == 3) {
			$("#vendorOracle").addClass("blinking-border-background-blue");
			TweenMax.to("#vendorOracle", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("vendorOracle", "left", "4");
				var text = "Java vendorOracle...";
				typing("#popover4", text, function(){
					revealArrow($("line:eq(1)") , function() {
						$('#popover4').parents(".popover-content").append('<div class = "tooltip-height">'
									+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
						index++;
					})
				});
			}})
		} else if (index == 4) {
			$("#oracleDB").addClass("blinking-border-background-blue");
			$("#jApp").removeClass("blinking-border-background-blue");
			$("#partial").removeClass("blinking-border-background-blue");
			TweenMax.to("#oracleDB", 1, {"opacity" : "1", onComplete:function() {
				TweenMax.to("#sqlDB", 1, {"opacity" : "1", onComplete:function() {
					$("#hori").removeClass("opacity00");
					$(".third").show();
				toolTipPopOver("oracleDB", "left", "5");
				var text = "Java oracleDB...";
				typing("#popover5", text, function(){
					$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
					revealArrow($("line:eq(2)") , function() {
						
						/*revealArrow($("line:eq(5)"), function() {
							revealArrow($("line:eq(6)"), function() {
								revealArrow($("line:eq(7)"), function() {*/
									$('#popover5').parents(".popover-content").append('<div class = "tooltip-height">'
											+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
									index++;
								/*})
							})
						});*/
					})
				});
				}})
			}})
		} else if (index == 5) {
			
			
			introjs.nextStep();
			/*$("#restartBtn").click(function() {
				location.reload(true);
			})*/
			/*$("#jApp").addClass("blinking-border-background-blue");
			$("#partial").addClass("blinking-border-background-blue");
				
			$("#vendorMySql").addClass("blinking-border-background-blue");
			TweenMax.to("#vendorMySql", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("vendorMySql", "right", "6");
				var text = "Java vendorMySql...";
				typing("#popover6", text, function(){
					revealArrow($("line:eq(3)") , function() {
						$('#popover6').parents(".popover-content").append('<div class = "tooltip-height">'
									+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
						index++;
					})
				});
			}})*/
		} else if (index == 6) {
			$("#sqlDB").addClass("blinking-border-background-blue");
			TweenMax.to("#sqlDB", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("sqlDB", "right", "7");
				var text = "Java sqlDB...";
				typing("#popover7", text, function(){
					revealArrow($("line:eq(4)") , function() {
						revealArrow($("line:eq(8)"), function() {
							revealArrow($("line:eq(9)"), function() {
								$('#popover7').parents(".popover-content").append('<div class = "tooltip-height">'
											+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
								index++;
							})
						})
					})
				});
			}})
		} 
}

function revealArrow(selector, callBackFunction) {
	let x2 = $(selector).attr("x2");	
	let y2 = $(selector).attr("y2");
	$(selector).attr("x2",  $(selector).attr("x1"));
	$(selector).attr("y2",  $(selector).attr("y1"));
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow4Marker);");
	TweenMax.to($(selector), 1, {attr: {x2 : x2, y2: y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function revealArrowInReverse(selector, callBackFunction) {
	var x1 = $(selector).attr("x1");
	var y1= $(selector).attr("y1");
	
	$(selector).attr("x1", $(selector).attr("x2"));
	$(selector).attr("y1", $(selector).attr("y2"));
	
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow5Marker);");
	TweenMax.to($(selector), 1, {attr: {x1 : x1, y1: y1}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function toolTipPopOver(id, side, number) {
	
	$('#' + id).popover({
		placement: side,
		viewport: '#' + id,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+ number +'"></div>',
	});
	$('#'+ id).popover('show');
	$(".popover").css("top" , "0");
	//$("#" + id).removeClass("blinking-border-background-blue");
	
	
}