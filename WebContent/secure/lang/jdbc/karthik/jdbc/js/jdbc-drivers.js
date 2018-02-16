
var typingInterval = 0.1;

var javaDriversReadyFunction = function() {
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
		},{
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
				toolTipPopOver("animationDiv", "right", "1");
				var text = "All JDBC drivers";
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
				typing(".introjs-tooltiptext", text,  function() {
					$("#restartBtn").click(function() {
						location.reload(true);
					})
				})
			});
		break;	
		}
	})
	
	
	introjs.start();
	$('.introjs-nextbutton').show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}






/*var index = 1;
function javaDriverStep() {
		$(".ct-btn-next").remove();
		if (index == 1) {
			$("#jApp").addClass("blinking-border-background-blue");
			TweenMax.to("#jApp", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("jApp", "left", "2");
				var text = "Java Application...";
				typing("#popover2", text, function(){
					$('#popover2').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}});
		} else if (index == 2) {
			
			$("#jdbcApi").addClass("blinking-border-background-blue");
			TweenMax.to("#jdbcApi", 1, {"opacity" : "1", onComplete:function() {
				revealArrow("line:eq(0)", function() {
					
					toolTipPopOver("jdbcApi", "left", "3");
					var text = "Java partial...";
					typing("#popover3", text, function(){
						$('#popover3').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
						index++;
					});
				})
			}})
		} else if (index == 3) {
			$("#bridge").addClass("blinking-border-background-blue");
			TweenMax.to("#bridge", 1, {"opacity" : "1", onComplete:function() {
				revealArrow("line:eq(1)", function() {
					$("line:eq(1)").removeAttr("style");
					revealArrow("line:eq(2)", function() {
						$("line:eq(2)").removeAttr("style");
						revealArrow("line:eq(3)", function() {
							$("line:eq(3)").removeAttr("style");
							revealArrow("line:eq(4)", function() {
								revealArrow("line:eq(5)", function() {
									toolTipPopOver("bridge", "left", "4");
									var text = "Java vendorOracle...";
									typing("#popover4", text, function(){
										$('#popover4').parents(".popover-content").append('<div class = "tooltip-height">'
													+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
										index++;
									});
								})
							})
						})
					})
				})
			}})
		} else if (index == 4) {
			$("#odbcLib").addClass("blinking-border-background-blue");
			TweenMax.to("#odbcLib", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("odbcLib", "left", "5");
				var text = "Java oracleDB...";
				typing("#popover5", text, function(){
					$('#popover5').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 5) {
			$("#driver1").addClass("blinking-border-background-blue");
			TweenMax.to("#driver1", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver1", "left", "6");
				var text = "Java vendorMySql...";
				typing("#popover6", text, function(){
					$('#popover6').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 6) {
			$("#nativeDriver").addClass("blinking-border-background-blue");
			TweenMax.to("#nativeDriver", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("nativeDriver", "right", "7");
				var text = "Java sqlDB...";
				typing("#popover7", text, function(){
					$('#popover7').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 7) {
			$("#nativeLib").addClass("blinking-border-background-blue");
			TweenMax.to("#nativeLib", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("nativeLib", "right", "8");
				var text = "Java sqlDB...";
				typing("#popover8", text, function(){
					$('#popover8').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 8) {
			$("#driver2").addClass("blinking-border-background-blue");
			TweenMax.to("#driver2", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver2", "right", "9");
				var text = "Java vendorMySql...";
				typing("#popover9", text, function(){
					$('#popover9').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 9) {
			$("#middleLayer").addClass("blinking-border-background-blue");
			TweenMax.to("#middleLayer", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("middleLayer", "right", "10");
				var text = "Java vendorMySql...";
				typing("#popover10", text, function(){
					$('#popover10').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 10) {
			$("#driver3").addClass("blinking-border-background-blue");
			TweenMax.to("#driver3", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver3", "right", "11");
				var text = "Java vendorMySql...";
				typing("#popover11", text, function(){
					$('#popover11').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 11) {
			$("#thinDriver").addClass("blinking-border-background-blue");
			TweenMax.to("#thinDriver", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("thinDriver", "right", "12");
				var text = "Java vendorMySql...";
				typing("#popover12", text, function(){
					$('#popover12').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 12) {
			$("#driver4").addClass("blinking-border-background-blue");
			TweenMax.to("#driver4", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver4", "right", "13");
				var text = "Java vendorMySql...";
				typing("#popover13", text, function(){
					$('#popover13').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		}
}*/

var index =1;
function javaDriverStep() {
	$(".ct-btn-next, .tooltip-height").remove();
	if (index == 1) {
		$(".first").show();
		$("#jApp").addClass("blinking-border-background-blue");
		TweenMax.to("#jApp", 1, {"opacity" : "1", onComplete:function() {
			toolTipPopOver("jApp", "left", "2");
			var text = "Java Application...";
			typing("#popover2", text, function(){
				$('#popover2').parents(".popover-content").append('<div class = "tooltip-height">'
							+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
				index++;
			});
		}});
	} else if (index == 2) {
		$(".second").show();
		$("#jdbcApi").addClass("blinking-border-background-blue");
		TweenMax.to("#jdbcApi", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(0)", function() {
				
				toolTipPopOver("jdbcApi", "left", "3");
				var text = "Java partial...";
				typing("#popover3", text, function(){
					$('#popover3').parents(".popover-content").append('<div class = "tooltip-height">'
							+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			})
		}})
	} else if (index == 3) {
		$("#bridge").addClass("blinking-border-background-blue");
		TweenMax.to("#bridge", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(1)", function() {
				$("line:eq(1)").removeAttr("style");
				revealArrow("line:eq(2)", function() {
					$("line:eq(2)").removeAttr("style");
					revealArrow("line:eq(3)", function() {
						TweenMax.to("#odbcLib", 1, {"opacity" : "1", onComplete:function() {
							revealArrow("line:eq(4)", function() {
								TweenMax.to("#driver1", 1, {"opacity" : "1", onComplete:function() {
									//$("line").last().show();
									$("line:eq(19), .third").show();
									revealArrow("line:eq(5)", function() {
									//	revealArrow("line:eq(19)", function() {
											$('#popover1').parents(".popover-content").append('<div id="type1"></div>');
											var text = "Text about the driver1......"
											typing("#type1", text, function() {
												$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
													+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
													index++;
											})
									//	}) 
									})
								}})
							})
						}})
					})
				})
			})	
		}})
	} else if (index == 4) {
		$("#nativeDriver").addClass("blinking-border-background-blue");
		TweenMax.to("#nativeDriver", 1, {"opacity" : "1", onComplete: function() {
			revealArrow("line:eq(6)", function() {
				$("line:eq(6)").removeAttr("style");
				revealArrow("line:eq(7)", function() {
					$("line:eq(7)").removeAttr("style");
					revealArrow("line:eq(8)", function() {
						TweenMax.to("#nativeLib", 1, {"opacity" : "1", onComplete:function() {
							revealArrow("line:eq(9)", function() {
								TweenMax.to("#driver2", 1, {"opacity" : "1", onComplete:function() {
									revealArrow("line:eq(10)", function() {
										$('#popover1').parents(".popover-content").append('<div id="type2"></div>');
										var text = "Text about the driver2......";
										typing("#type2", text, function() {
											$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
												+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
												index++;
										})
									})
								}})
							})
						}})
					})
				})
			})	
		}});
	} else if (index == 5) {
		$("#middleLayer").addClass("blinking-border-background-blue");
		TweenMax.to("#middleLayer", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(11)", function() {
				$("line:eq(11)").removeAttr("style");
				revealArrow("line:eq(12)", function() {
					$("line:eq(12)").removeAttr("style");
					revealArrow("line:eq(13)", function() {
						TweenMax.to("#driver3", 1, {"opacity" : "1", onComplete:function() {
							revealArrow("line:eq(14)", function() {
								$('#popover1').parents(".popover-content").append('<div id="type3"></div>');
								var text = "Text about the driver3......";
								typing("#type3", text, function() {
									$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
										+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
										index++;
								})
							})
						}})
					})
				})
			})	
		}})
	} else if (index == 6) {
		$("#thinDriver").addClass("blinking-border-background-blue");
		TweenMax.to("#thinDriver", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(15)", function() {
				$("line:eq(15)").removeAttr("style");
				revealArrow("line:eq(16)", function() {
					$("line:eq(16)").removeAttr("style");
					revealArrow("line:eq(17)", function() {
							revealArrow("line:eq(18)", function() {
								$('#popover1').parents(".popover-content").append('<div id="type4"></div>');
								var text = "Text about the driver4......";
								typing("#type4", text, function() {
									$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
											+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
										index++;
								})
							})
					})
				})
			})	
		}})
	} else if (index == 7) {
		introjs.nextStep();
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


/*function revealArrowHorizantal(selector, callBackFunction) {
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
}*/



/*function revealArrowInReverse(selector, callBackFunction) {
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
}*/





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
}