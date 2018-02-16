var typingSpeed = 0.1;

var statementReadyFunction = function() {
	
	introJsFunction();	
	var text = "In the heading..."
	typing(".introjs-tooltiptext", text, function() {
		$("line, rect, text, circle").hide();
		$(".introjs-nextbutton").show();
	})
	
}


function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"//description
		},{
			element : "#preCode",
			intro : "",
			position : "bottom",
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var action = introjs._introItems[introjs._currentStep].action;
			switch (elementId) {
			
				case "preCode":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#preCode").removeClass("opacity00");
						
						if (action == "second") {
							var text = "This is the second preCode";
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("query2", "", "bottom", ""));
						} else {
							var text = "This is the preCode";
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("dbUrl", "", "bottom", ""));
						}
						typing(".introjs-tooltiptext", text,  function() {
							$(".introjs-nextbutton").show();
						})
					})
				break;
					
				case "dbUrl":
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "The dbUrl is required to get the connection from the database to the java application.";
						typing(".introjs-tooltiptext", text,  function() {
							//introjs.insertOption(introjs._currentStep + 1, insertionIntro("animation", "", "bottom", "hide", "first"));
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("connection", "", "bottom", ""));
							$(".introjs-nextbutton").show();
						})
					})
				break;
				
					
				case "query1":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#query1").removeClass("opacity00");
						var text = "The query used to retrive the emp details from database."
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("eq", "", "bottom", ""));
							$(".introjs-nextbutton").show();
						})
					})
				break;
					
				case "connection":
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "Getting the  connection from the db...";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animation", "", "bottom", "hide", "second"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("stmt", "", "bottom", ""));
							$(".introjs-nextbutton").show();
						})
					})
				break;
					
				case "animation":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#animation").removeClass("opacity00");
						
						if (action == "first") {
							
						} else if (action == "second") {
							visibleElement($("rect:eq(0)"), function() {
								visibleElement($("rect:eq(1)"), function() {
									visibleElement($("rect:eq(2)"), function() {
										$("#oracleDB").removeClass("opacity00");
										//$("line:eq(12)").show();//change the number as u add new line
										revealArrow($("line:eq(0)") , function() {
											revealArrow($("line:eq(1)") , function() {
												var text ="This is the first tooltip...";
												toolTipPopOverToSVG($("line:eq(0)"), "left", "1", text);
											})
										})
									})
								})
							})
							
							
							/*$("#jApp").removeClass("opacity00");
							$("#driverMng").removeClass("opacity00");
							revealArrow($("line:eq(0)") , function() {
								$("#oracleDB").removeClass("opacity00");
								//revealArrow($("line:eq(2)") , function() {
								$("line:eq(2)").show();
								//toolTipPopOver("line:eq(1)", "line tool", "1");
								
								toolTipPopOverToSVG("line:eq(1)", "line tool", "1");
								
								revealArrow($("line:eq(1)") , function() {
									revealArrow($("line:eq(3)"), function() {
										TweenMax.to("#conObj", 0.5, {opacity: 1, onComplete: function() {
											setTimeout(function() {
												//$(".context").removeClass("opacity00");
												$(".context").css({'background-color': 'rgba(255, 143, 11, 0.15)', 'border': '2px dashed green'})
												revealArrow($("line:eq(4)") , function() {
													revealArrow($("line:eq(5)") , function() {
														stepNext();
													})
												})
											}, 1000)
										}})
									})
								})
								})*/
							///})
							
							
						} else if (action == "third") {
							$("line:eq(4)").hide();//3, 2
							revealArrow($("line:eq(5)"), function() {
								visibleElement($("circle:eq(1), text:eq(1)"), function() {
									revealArrow($("line:eq(6)"), function() {
										revealArrow($("line:eq(7)"), function() {
											$("line:eq(7)").removeAttr("style");
											revealArrow($("line:eq(8)"), function() {
												var text ="This is the third tooltip...";
												toolTipPopOverToSVG($("line:eq(8)"), "right", "3", text);
											})
										})
									})
								})
							})
						} else if (action == "fourth") {
							$("line:eq(7), line:eq(8), line:eq(5)").hide();
							revealArrow($("line:eq(9)"), function() {
								$("line:eq(9)").removeAttr("style");
								revealArrow($("line:eq(10)"), function() {
									$("line:eq(8), line:eq(6)").hide();
									revealArrow($("line:eq(11)"), function() {
										$("line:eq(3), line:eq(2)").hide();
										revealArrow($("line:eq(12)"), function() {
											revealArrow($("line:eq(13)"), function() {
												var text ="This is the fourth tooltip...";
												toolTipPopOverToSVG($("line:eq(13)"), "right", "4", text);
											})
										})
									})
								})
							})	
							
						}
						
						
						/*else if (action == "third") {
							//$("line:eq(6)").hide();
							revealArrow($("line:eq(6)") , function() {
								TweenMax.to("#stmtObj", 1, {opacity: 1, onComplete: function() {
									revealArrow($("line:eq(7)") , function() {
										//revealArrow($("line:eq(8)") , function() {
											$("line:eq(5)").hide();
											revealArrow($("line:eq(9)") , function() {
												$("line:eq(9)").removeAttr("style");
												revealArrow($("line:eq(10)") , function() {
													$("line:eq(6)").hide();
													//revealArrow($("line:eq(12)") , function() {
														stepNext();
													//})
												})
											})
										//})
									})	
								}})
							})
						} else if (action == "fourth") {
							
							$("line:eq(9), line:eq(10), line:eq(3), line:eq(4)").hide();
							//revealArrow($("line:eq(6)") , function() {
								//revealArrow($("line:eq(7)") , function() {
							revealArrow($("line:eq(16)") , function() {
								$("line:eq(16)").removeAttr("style");
								revealArrow($("line:eq(17)") , function() {
									revealArrow($("line:eq(8)") , function() {
										revealArrow($("line:eq(11)") , function() {
											revealArrow($("line:eq(12)") , function() {
												$("line:eq(11), line:eq(12)").hide();
												revealArrow($("line:eq(3)") , function() {
													revealArrow($("line:eq(4)") , function() {
														TweenMax.to("#rsObj", 1, {opacity: 1, onComplete: function() {
															revealArrow($("line:eq(13)") , function() {
																$("line:eq(16), line:eq(17)").hide();
																revealArrow($("line:eq(14)") , function() {
																	$("line:eq(14)").removeAttr("style");
																	revealArrow($("line:eq(15)") , function() {
																		
																		$("#rsObj").removeAttr("style");
																		$("line:eq(13)").hide();
																		stepNext();
																	})
																})
															})
														}})
													})
												})
											})
										})
									})
								})
							})
								//})	
							//})
						} else if (action == "fifth") {
							$("line:eq(11), line:eq(12), line:eq(14), line:eq(15)").hide();
								revealArrow($("line:eq(16)"), function() {
									$("line:eq(16)").removeAttr('style');
									revealArrow($("line:eq(17)"), function() {
										$("line:eq(3), line:eq(4)").hide();
										revealArrow($("line:eq(11)"), function() {
											revealArrow($("line:eq(12)"), function() {
												revealArrow($("line:eq(3)"), function() {
													revealArrow($("line:eq(4)"), function() {
														$("line:eq(16), line:eq(17)").hide();
														$("#rs").text("int");
														$("#rsObj").removeClass("opacity00");
														revealArrow($("line:eq(13)"), function() {
															$("line:eq(6)").hide();
															revealArrow($("line:eq(14)"), function() {
																$("line:eq(14)").removeAttr("style");
																revealArrow($("line:eq(15)"), function() {
																	$("#rsObj").addClass("opacity00");
																	$("line:eq(13)").hide();
																	stepNext();
																})
															})
														})
													})
												})
											})
										})
									})
								})
						} else {
							var text = "Closing the connection...";
							typing(".introjs-tooltiptext", text,  function() {
								setTimeout(function() {
									$(".context").addClass("opacity00");
									$("line:eq(1), line:eq(3), line:eq(4), line:eq(7), line:eq(8), line:eq(11), line:eq(12), line:eq(14), line:eq(15)").hide();
									$(".introjs-nextbutton").show();
								}, 1000);
							})
						}*/
					})
				break;
					
				case "stmt":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#ifCond, #stmt").removeClass("opacity00");
						var text = "This is statement obj.."
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animation", "", "bottom", "hide", "third"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("query1", "", "bottom", "", ""));
							$(".introjs-nextbutton").show();
						})
					})
				break;
					
				case "eq":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#eq").removeClass("opacity00");
						var text = "This is the execute query."
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animation", "", "bottom", "hide", "fourth"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("preCode", "", "bottom", "", "second"));
							$(".introjs-nextbutton").show();
						})
					})
				break;
					
				case "query2":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#query2").removeClass("opacity00");
						var text = "The query2 ..."
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("eu", "", "bottom", "", ""));
							$(".introjs-nextbutton").show();
						})
					})
				break;	
					
				case "eu":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#eu").removeClass("opacity00");
						var text = "The query2 ..."
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animation", "", "bottom", "hide", "fifth"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("close", "", "bottom", ""));
							$(".introjs-nextbutton").show();
						})
					})
				break;	
					
				case "close":
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "In the close..";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animation", "", "left", ""));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("restartBtn", "", "bottom", "hide"));
							$(".introjs-nextbutton").show();
						})
					})
				break;
					
				case "restartBtn":
					
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#restartBtn").removeClass("opacity00");
						var text = "click to restart";
						typing(".introjs-tooltiptext", text,  function() {
							$("#restartBtn").click(function() {
								location.reload();
							})
						})
					})
					
				break;	
					
			}	
	});
	introjs.start();
}

var count = 1;

function animation1() {
	$(".ct-btn-next").remove();
	$(".popover").last().remove();
	if (count == 1) {
		revealArrow($("line:eq(2)") , function() {
			visibleElement($("circle:eq(0), text:eq(0)"), function() {
				setTimeout(function() {
					visibleElement($("rect:eq(3)"), function() {
						revealArrow($("line:eq(3)"), function() {
							revealArrow($("line:eq(4)"), function() {
								var text = "This is the tool tipSecond..";
								toolTipPopOverToSVG($("line:eq(4)"), "left", "2", text);
								count++;
							})
						})
					})
				}, 1000);
			})	
		})
	} else if (count == 2 || count == 3 || count == 5) {
		if (count == 5) {
			$("circle:eq(2), text:eq(2), line:eq(14)").hide();
			setTimeout(function() {
				introjs.nextStep();
				count++;
			}, 1200)
		} else {
			
			introjs.nextStep();
			count++;
		}
	} else if (count == 4) {
		$("line:eq(12), line:eq(13)").hide();
		revealArrow($("line:eq(2)") , function() {
			revealArrow($("line:eq(3)") , function() {
				$("line:eq(11)").hide();
				$("line:eq(6)").show();
				visibleElement($("circle:eq(2), text:eq(2)"), function() {
					$("line:eq(9), line:eq(10)").hide();
					revealArrow($("line:eq(14)"), function() {
						revealArrow($("line:eq(15)"), function() {
							$("line:eq(15)").removeAttr("style");
							revealArrow($("line:eq(16)"), function() {
								
								var text = "This is the tooltip fifth..";
								toolTipPopOverToSVG($("line:eq(15)"), "left", "5", text);
								count++;
								
							})
						})
					})
				})
			})
		})
	}
}



function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 800);
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 800);
	}
}


function visibleElement(selector, callFunction) {
	$(selector).show();
	if (typeof callFunction === "function") {
		callFunction();
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



function insertionIntro(element, msg, position, tooltip, action) {
	
	var insert = {}; 
	if (typeof element != undefined) {
		insert["element"] = "#"+ element;
	} 
	if (typeof msg != undefined) {
		insert["intro"] = msg;
	}
	if (typeof position != undefined) {
		insert["position"] = position;
	}
	if (typeof tooltip != undefined) {
		insert["tooltipClass"] = tooltip;
	}
	if (typeof action != undefined) {
		insert["action"] = action;
	}
	return insert;

}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
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


function toolTipPopOverToSVG(id, side, number, text) {
	
	$(id).popover({
		placement: side,
		html: true,
		trigger: "focus",
		container: $("svg").parent(),
		content: '<div id="popover'+ number +'"></div>',
	}).popover('show');
	//$(".popover").css("top" , "0");
	
	typing("#popover" + number, text, function(){
		$('#popover' + number).parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation1();">Next &#8594;</span></div>');
	});
	
}


