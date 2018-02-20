var intro;
var typingInterval = 5;
$("#callable").addClass("display");
var callablestatement = function() {
$(".svg-line,.rect,.text").hide();
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
		steps : [ {
			element : "#mainBox",
			intro : "",
			
		}, {
			element:"#JavaBox",
			intro:"",
			position:"right"
		}, {
			element:"#driver",
			intro:"",
			position:"right"
		},{
			element:"#engine",
			intro:"",
			position:"left"
		},{
			element:"#db2",
			intro:"",
			position:"right",
			animateStep:"database1"
		},{
			element:"#context",
			intro:"",
			position:"right",
			animateStep:"connection"
		} , {
			element:"#db2",
			intro:"",
			position:"right",
			animateStep:"database2"
		}, {
			element:"#context",
			intro:"",
			position:"right",
			animateStep:"statement"
			}, {
				element :"#restartBtn",
			    intro :"Click to Restart",
			    position : "right"
		}]
		
		});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "JavaBox":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#JavaBox").removeClass("opacity00");
				var text = "java box."
				typing(".introjs-tooltiptext", text,1,function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "context":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case "connection":
				$("#line11").show();		
				TweenMax.to($("#line11"), 1, {attr:{y1: "6%" },onComplete:function() {
				$("#line12").show();
					TweenMax.to($("#line12"), 1, {attr:{x2: "33%" },onComplete:function() {
					var text = "from the java apllication con object comes to connection and then"
						typing(".introjs-tooltiptext", text,10,function() {
						$("#line13").show();
							TweenMax.to($("#line13"), 1, {attr:{x2: "46%" },onComplete:function() {
							$("#line14").show();
								TweenMax.to($("#line14"), 1, {attr:{y2: "15%" },onComplete:function() {
									var text1= "con obj goest to statment object"
									typing(".introjs-tooltiptext", text1,10,function() {
									$("#line15").show();
							//$(".svg-css").css("z-index", "10000000")
										TweenMax.to($("#line15"), 1, {attr:{x2: "56.5%" },onComplete:function() {
									  	$("#statement").removeClass("opacity00").hide().fadeIn(2000, function() {
											$("#line11").fadeOut(100, function() {
												$("#line12").fadeOut(100, function() {
													$("#line13").fadeOut(100, function() {
														$("#line14").fadeOut(100, function() {
								   						$("#line16").show()
														TweenMax.to($("#line16"), 1, {attr:{y2: "8%" },onComplete:function() {
														$("#line17").show()
															TweenMax.to($("#line17"), 1, {attr:{x2: "34%" },onComplete:function() {
																var text2 = "statement object goes to the java application and back to the statement"
																	typing(".introjs-tooltiptext", text2,10,function() {
																	$("#line18").show()
																		TweenMax.to($("#line18"), 1, {attr:{x2: "64%" },onComplete:function() {
																		$("#line19").show() 
																			TweenMax.to($("#line19"), 1, {attr:{y2: "15%" },onComplete:function() {
																			 var text3 = "statement to connection"
																				typing(".introjs-tooltiptext", text3,10,function() {
																				$("#line15").hide();
																				
																				$("#line20").show() 
																					TweenMax.to($("#line20"), 1, {attr:{x2: "51%" },onComplete:function() {
																					$("#line7,#line8,#line9,#line10").hide();
																					$("#rect1 ,#rect2,#rect3,#rect4").show()
																					$(".g").show()
																					TweenMax.to($(".g").eq(0), 1, {attr:{y: "254" }})
																					TweenMax.to($(".g").eq(1), 2, {attr:{y: "244" }})
																					TweenMax.to($(".g").eq(2), 3, {attr:{y: "234" }})
																					TweenMax.to($(".g").eq(3), 4, {attr:{y: "224" }})
																						TweenMax.to($(".g").eq(4), 5, {attr:{y: "214" },onComplete:function() {
																						$(".g").hide()
																						$(".g1").show()
																						TweenMax.to($(".g1").eq(0), 1, {attr:{x: "230" }});
																						TweenMax.to($(".g1").eq(1), 2, {attr:{x: "235" }});
																						TweenMax.to($(".g1").eq(2), 3, {attr:{x: "240" }});
																						TweenMax.to($(".g1").eq(3), 4, {attr:{x: "245" }});
																						TweenMax.to($(".g1").eq(4), 5, {attr:{x: "250" }});
																							TweenMax.to($(".g1").eq(5), 6, {attr:{x: "255" },onComplete:function() {
																							$(".g1").hide()
																							$(".g2").show()
																							TweenMax.to($(".g2").eq(0), 3, {attr:{y: "517" }});
																							TweenMax.to($(".g2").eq(1), 3, {attr:{y: "507" }});
																							TweenMax.to($(".g2").eq(2), 3, {attr:{y: "497" }});
																							TweenMax.to($(".g2").eq(3), 3, {attr:{y: "487" }});
																							TweenMax.to($(".g2").eq(4), 3, {attr:{y: "477" }});
																								TweenMax.to($(".g2").eq(5), 3, {attr:{y: "467" },onComplete:function() {
																								$('.introjs-nextbutton').show();
																								}});
																							}});
																						}});
																					}});
																				});
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
									}});
								});
							}});
						}});
					});
				}});
			}});
		break;
		case "statement":
		$("#line16,#line17,#line18,#line19,#line20").hide();
		TweenMax.to($("#line15"), 1, {attr:{x2: "41%" },onComplete:function() {
		$("#line15").show();
			TweenMax.to($("#line15"), 1, {attr:{x2: "56.5%" },onComplete:function() {
				TweenMax.to($("#line16"), 1, {attr:{y2: "16%" },onComplete:function() {
				$("#line16").show();
					TweenMax.to($("#line16"), 1, {attr:{y2: "8%" },onComplete:function() {
						TweenMax.to($("#line17"), 1, {attr:{x2: "62%" },onComplete:function() {
						$("#line17").show();
							TweenMax.to($("#line17"), 1, {attr:{x2: "34%" },onComplete:function() {
							var text = "data comes back to the statement trough the conncetion"
								typing(".introjs-tooltiptext", text, 10, function() {
								$(".introjs-nextbutton").show();
								});
							}});
						}});
					}});
				}});
			}});
		}});
		break;
		}
	});
		break;
		case "driver":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#driver").removeClass("opacity00");
				$("#line4").show()
					TweenMax.to($("#line4"), 1, {attr:{y2: "40%" },onComplete:function() {
						var text = "driver manager."
							typing(".introjs-tooltiptext", text,1,function() {
								$('.introjs-nextbutton').show();
							});
					}});
			});
			break;
		case "engine":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#engine").removeClass("opacity00")
				$("#line5").show()
					TweenMax.to($("#line5"), 1, {attr:{y2: "61%" },onComplete:function() {
						var text = "database Engine have group of stored pros."
							typing(".introjs-tooltiptext", text,20,function() {
								$("#line1").show()
								TweenMax.to($("#line1"), 1, {attr:{x2: "45%" },onComplete:function() {
									$("#sp1").removeClass("opacity00");
									$("#line2").show()
									TweenMax.to($("#line2"), 1, {attr:{x2: "45%" },onComplete:function() {
										$("#sp2").removeClass("opacity00");
										$("#line3").show()
										TweenMax.to($("#line3"), 1, {attr:{x2: "45%" },onComplete:function() {
											$("#sp3").removeClass("opacity00");
											$('.introjs-nextbutton').show();
										}});
									}});
								}});
							});
						}});
					});
		
			break;
		case "db2":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "database1":
				$("#db2").removeClass("opacity00");
					var text = "data base engine to data base."
						typing(".introjs-tooltiptext", text,1,function() {
							$("#line6").show();
							TweenMax.to($("#line6"), 1, {attr:{y2: "80%" },onComplete:function() {
							$("#line6,#line5").hide();
							//$("#rect1 ,#rect2,#rect3,#rect4").show()
							$("#rect4").show().fadeIn(1000, function() {
							//var textn = "con between"
							//popover("engine", "left", "1", textn, "abc")
							$("#rect4").addClass("blinking-border-background-green");
							var text1 = "data base to driver engine";
								typing(".introjs-tooltiptext", text1,10,function() {
								var text2 = "driver to connection";
									typing(".introjs-tooltiptext", text2,10,function() {
										$("#connection").removeClass("opacity00").hide().fadeIn(200, function() {
											$("#context").removeClass("opacity00").hide().fadeIn(2000,function() {
											$("#context").css({'background-color':'rgba(255, 143, 11, 0.15)', 'border': '2px dashed green'})
											$("#context").addClass("blinking-border-background-green");
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
							});
						}});
					});
					
			break;
			case "database2":
				var text = "statement queray comes from statemet object to data base and now data base gives the desired" +
							"data accoring to the quary"
			typing(".introjs-tooltiptext", text, 10, function() {
			TweenMax.to($(".g2").eq(0), 3, {attr:{y: "270" }});
			TweenMax.to($(".g2").eq(1), 3, {attr:{y: "260" }});
			TweenMax.to($(".g2").eq(2), 3, {attr:{y: "250" },onComplete:function() {
			$(".g3").show();
			TweenMax.to($(".g3").eq(0), 3, {attr:{x: "345" }});
			TweenMax.to($(".g3").eq(1), 3, {attr:{x: "338" }});
				TweenMax.to($(".g3").eq(2), 3, {attr:{x: "330" },onComplete:function(){
					TweenMax.to($("#19"), 1, {attr:{y: "188" },onComplete : function() {
  					$("#19").hide()
						TweenMax.to($("#20"), 1, {attr:{x: "345" },onComplete : function() {
							TweenMax.to($("#20"), 1, {attr:{y: "188" },onComplete : function() {
							$("#20").hide()
								TweenMax.to($("#21"), 1, {attr:{x: "345" },onComplete : function() {
									TweenMax.to($("#21"), 1, {attr:{y: "188" },onComplete : function() {
 									 $("#21").hide()
									 $('.introjs-nextbutton').show();
									}});
  								}});
 							 }});
 						 }});
 					 }});
				}});
			}});
		});
		break;
		}
	});
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
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	typing(".introjs-tooltiptext", "Callable Statment.",1,function() {
		$('.introjs-nextbutton').show();
	});
}
function typing(typingId, typingContent,typingSpeed,callBackFunction) {
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