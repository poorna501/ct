var intro;
var typingInterval = 5;
var tl = new TimelineLite();
var getconnectiondriver = function() {
	$(".svg-line,.svg-line1,.svg-line2,.svg-line3,.ani,.ani2").hide();
	$("#animation2, #animation1, #invisableDiv2").addClass("display");
	$('#restartBtn').click(function() {
		location.reload();
	});
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [{
				element : "#mainBox",
				intro : "",
				tooltipClass : "hide"
				}, {
				element :"#restartBtn",
			    intro :"Click to Restart",
			    position : "right"
			}]
		});
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
				case "mainBox":
					$('.introjs-nextbutton').hide();
					var text = "<br>connection</br>";
					popover('#mainBox', 'right', '1', text, 'animation1')
				break;	
				case "restartBtn":  
					$('.introjs-nextbutton').hide();
					$('.introjs-tooltip').css({'min-width' : '120px'});
					$('.introjs-helperLayer').one('transitionend', function () {
						$("#restartBtn").removeClass('visibility-hidden');
					});
					break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton, .introjs-skipbutton,.introjs-bullets').hide();
	}
			
function animation1() { 
	$("text").hide();
	$("#animation1").removeClass("display");
	$(".ct-btn-next").remove();
	$("#javaBox").removeClass("opacity00").hide().fadeIn(2000,function() {
		var text = "This is the java Application nothing but client side application.";
			textappend('#javaBox', 'left', '2', text)
			$("#driver").removeClass("opacity00").hide().fadeIn(2000,function() {
				var text = "This is database which is used to store,captures and analyze data.";
				textappend('#driver', 'left', '3', text)
				toAndFromToEffect("#line1","#query1" , "57%", function() {
					$("#databaseBox1").removeClass("opacity00").hide().fadeIn(2000,function() {
						var text = "This is database which is used to store,captures and analyze data.";
						textappend('#databaseBox1', 'left', '4', text)
						toAndFromToEffect("#line2","#query2" , "81%", function() {
							toAndFromToEffect("#line3","#query3" , "69%", function() {
							$("#line4").show();
								TweenMax.to($("#line4"), 1, {attr:{y2: "73%" },onComplete:function() {
									$("#line5").show();
										TweenMax.to($("#line5"), 1, {attr:{x2: "51.5%" },onComplete:function() {
										$("#query4").show();
										tl.fromTo("#query4", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
											$("#circle").removeClass("opacity00").hide().fadeIn(2000,function() {
											var text = "Connection Object.";
											textappend('#circle', 'right', '5', text)
											$("#line6").show();
												TweenMax.to($("#line6"), 1, {attr:{y1: "47%" },onComplete:function() {
												$("#line7").show();
													TweenMax.to($("#line7"), 1, {attr:{x2: "47%" },onComplete:function() {
													$("#line8").show();
														TweenMax.to($("#line8"), 1, {attr:{x2: "48%" },onComplete:function() {
														$("#line9").show();
															TweenMax.to($("#line9"), 1, {attr:{y2: "58%" },onComplete:function() {
															$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transferAnimation1();">Next &#8594;</span></div>');
															}});
														}});
													}});
												}});
											});
										}});
									}});
								});
							});
						});
					});
				});
			});
		}

function transferAnimation1() {
	$(".ct-btn-next, .tooltip-height").remove();
	$("#animation1").effect("transfer",{ to: $("#invisableDiv1"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv1").removeClass("opacity00");
		$("#invisableDiv1, .svg-line1,.ani2 ").show();
		$("#animation1").addClass("display");
		$(".svg-line, .ani").hide();
		$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="point2();">Next &#8594;</span></div>');
	});
}

function animation2() {
	$("#animation2").removeClass("display");
	$(".ct-btn-next").remove();
	$("#JavaBox2").removeClass("opacity00").hide().fadeIn(2000,function() {
		$("#jdbcApiBox").removeClass("opacity00").hide().fadeIn(2000,function() {
			$("#driver2").removeClass("opacity00").hide().fadeIn(2000,function() {
			$("#line35").show();
				TweenMax.to($("#line35"), 1, {attr:{y2: "45%" },onComplete:function() {
					$("#db2").removeClass("opacity00").hide().fadeIn(2000,function() {
					$("#line36").show();
						TweenMax.to($("#line36"), 1, {attr:{y2: "64%" },onComplete:function() {
						$("#line37").show();
							TweenMax.to($("#line37"), 1, {attr:{y2: "54%" },onComplete:function() {
							$("#line38").show();
								TweenMax.to($("#line38"), 1, {attr:{x2: "58.5%" },onComplete:function() {
								$("#line39").show();
									TweenMax.to($("#line39"), 1, {attr:{y2: "33%" },onComplete:function() {
										$("#connection").removeClass("opacity00").hide().fadeIn(200,function() {
											$("#context").removeClass("opacity00").hide().fadeIn(2000,function() {
											$("#context").css({'background-color':'rgba(255, 143, 11, 0.15)', 'border': '2px dashed green'})
											$("#context").addClass("blinking-border-background-green");
											$("#line40").show();
												TweenMax.to($("#line40"), 1, {attr:{y1: "6%" },onComplete:function() {
												$("#line41").show();
													TweenMax.to($("#line41"), 1, {attr:{x2: "51%" },onComplete:function() {
													var text = "The connection established from ja to db.</br>";
														typing("#popover1", text, function(){
														$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation3();">Next &#8594;</span></div>');	
														});
													}});
												}});
											});
										});
									}});
								}});
							}});
						}});
					});
				}});
			});
		});
	});
}
function point2() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	var text = "2. To connect with individual databases, JDBC (the Java Database Connectivity API) requires drivers for each database.</br>";
	typing("#popover1", text, function(){
		$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation2();">Next &#8594;</span></div>');
	});
}

function transfer2() {
	$(".svg-line3").hide();
	$(".tooltip-height").remove();
	$("#invisableDiv2").removeClass("display");
	$("#invisableDiv2").removeClass("opacity00");
	$("#invisableDiv2").show();
	$("#animation2").addClass("display");
	$(".svg-line2").show();
	$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="restart();">Next &#8594;</span></div>');
	
}

function animation3() {
	$(".ct-btn-next, .tooltip-height").remove();
	$("#line42").show();
		TweenMax.to($("#line42"), 1, {attr:{x1: "60%" },onComplete:function() {
		$("#line43").show();
			TweenMax.to($("#line43"), 1, {attr:{y2: "15%" },onComplete:function() {
			$("#line44").show();
				TweenMax.to($("#line44"), 1, {attr:{x2: "65.5%" },onComplete:function() {
					$("#statment").removeClass("opacity00").hide().fadeIn(2000,function() {
					var text = "sataement object.";
						typing("#popover1", text, function() {
						$('#popover1').parents(".popover-content").append('<div></div>');
						$("#line40, #line41, #line42, #line43").hide();
						$("#line45").show();
							TweenMax.to($("#line45"), 1, {attr:{y2: "6%" },onComplete:function() {
							$("#line46").show();
								TweenMax.to($("#line46"), 1, {attr:{x2: "51%" },onComplete:function() {
								$("#line47").show();
									TweenMax.to($("#line47"), 1, {attr:{x2: "72%" },onComplete:function() {
									$("#line48").show();
										TweenMax.to($("#line48"), 1, {attr:{y2: "15%" },onComplete:function() {
										var text = "statment object goes to java aplication and back .";
											typing("#popover1", text, function() {
											$('#popover1').parents(".popover-content").append('<div></div>');
											$("#line44").hide();
											$("#line49").show();
												TweenMax.to($("#line49"), 1, {attr:{x2: "63%" },onComplete:function() {
												var text = "statment object to connection .";
													typing("#popover1", text, function() {
													$('#popover1').parents(".popover-content").append('<div></div>');
													$("#line38, #line39").hide();
														TweenMax.to($("#line38"), 1, {attr:{x2: "49.5%" },onComplete:function() {
															TweenMax.to($("#line39"), 1, {attr:{y2: "48%" },onComplete:function() {
															$("#line50").show();
																TweenMax.to($("#line50"), 1, {attr:{y2: "50%" },onComplete:function() {
																$("#line51").show();
																	TweenMax.to($("#line51"), 1, {attr:{x2: "50%" },onComplete:function() {
																	var text = "connection to driver manager .";
																		typing("#popover1", text, function() {
																		$('#popover1').parents(".popover-content").append('<div></div>');
																		$("#line52").show();
																			TweenMax.to($("#line52"), 1, {attr:{y2: "64%" },onComplete:function() {
																			var text = "driver manager to data base .";
																				typing("#popover1", text, function() {
																				$('#popover1').parents(".popover-content").append('<div></div>');
																				$("#line50, #line51, #line52, #line37").hide();
																					TweenMax.to($("#line37"), 1, {attr:{y2: "64%" },onComplete:function() {
																					$("#line37").show();
																						TweenMax.to($("#line37"), 1, {attr:{y2: "53%" },onComplete:function() {
																						$("#line38").show();
																						TweenMax.to($("#line38"), 1, {attr:{x2: "58.5%" },onComplete:function() {
																						$("#line39").show();
																							TweenMax.to($("#line39"), 1, {attr:{y2: "33%" },onComplete:function() {
																							var text = "driver manager to connection .";
																								typing("#popover1", text, function() {
																								$('#popover1').parents(".popover-content").append('<div></div>');
																								$("#line49").hide();
																									TweenMax.to($("#line44"), 1, {attr:{x2: "64%" },onComplete:function() {
																									$("#line44").show();
																										TweenMax.to($("#line44"), 1, {attr:{x2: "65.5%" },onComplete:function() {
																										var text = "------------ .";
																											typing("#popover1", text, function() {
																											$('#popover1').parents(".popover-content").append('<div></div>');
																											$("#line45, #line46, #line47, #line48").hide();
																											$("#line53").show();
																												TweenMax.to($("#line53"), 1, {attr:{x2: "78.5%" },onComplete:function() {
																												var text = "result set object created .";
																													typing("#popover1", text, function() {
																													$('#popover1').parents(".popover-content").append('<div></div>');
																														$("#resultset").removeClass("opacity00").hide().fadeIn(2000,function() {
																														$("#line54").show();
																															TweenMax.to($("#line54"), 1, {attr:{y2: "6%" },onComplete:function() {
																															$("#line55").show();
																																TweenMax.to($("#line55"), 1, {attr:{x2: "51%" },onComplete:function() {
																																var text = "result set to java application .";
																																	typing("#popover1", text, function() {
																																	$('#popover1').parents(".popover-content").append('<div></div>');
																																	$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transfer2();">Next &#8594;</span></div>');
																																		}); 
																																	}});
																																}});
																															});
																														});
																													}});
																												});
																											}});
																										}});
																									});
																								}});
																							}});
																						}});
																					}});
																				});
																			}});
																		});
																	}});
																}});
															}});
														}});
													});
												}});
											});
										}});
									}});
								}});
							}});
						});
					});
				}});
			}});
		}});
	}

function popover(selector, position, val, text, funName) {
	$(selector).popover({
				placement: position,
				viewport: selector,
				html: true,
				trigger: "focus",
				content: '<div id="popover' + val +'"></div>',
			});
			$(selector).popover('show');
			$(".popover").css("top" , "0");
			typing("#popover" + val, text, function(){
				$('#popover' + val).parents(".popover-content").append('<div class="tooltip-height"><span class="btn-success ct-btn-next" onclick=' +funName +'();>Next &#8594;</span><div>');
	});
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).append("<div></div>");
	$(typingId + " > div:last-child").typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId + " > div:last-child").removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function textappend(selector, position, val, text) {
	$(selector).popover({
				placement: position,
				viewport: selector,
				html: true,
				trigger: "focus",
				content: '<div id="popover' + val +'"></div>',
			});
			$(selector).popover('show');
			$(".popover").css("top" , "0");
			typing("#popover" + val, text, function(){
				
	});
}
function toAndFromToEffect(selector1, selector2, attrVal ,callBackFunction) {
	$(selector1).show();
TweenMax.to($(selector1), 1, {attr:{y2: attrVal },onComplete:function() {
	$(selector2).show();
	tl.fromTo(selector2, 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
	if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});


} 
function restart() {
	$(".ct-btn-next").remove();
	intro.nextStep();
}
