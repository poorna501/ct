var intro;
var typingInterval = 5;
var tl = new TimelineLite();
var typingSpeed = 10;
var count = 1;
var popoverCount = 0;

var getConnectionDriver = function() {
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
			position:"right"
			},{
			element :"#restartBtn",
		    intro :"Click to Restart",
		    position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
			case "mainBox":
				var text = "<ol><li>A <y>connection</y> object in jdbc is used to connect to a database."+
				"Let us understand how we get a connection object.</li>";
				typing(".introjs-tooltiptext", text,  function() {
					$('.introjs-tooltipbuttons').append('<a class="user-btn introjs-button" onClick="animation2()">Next &#8594;</a>');
					intro.insertOption(intro._currentStep + 1, insertionIntro("animationDiv", "", "right", "", ""));
				});
			break;	
					case "animationDiv":
						$(".introjs-helperLayer").one("transitionend", function() {
						$('.introjs-nextbutton').hide();
						animation1();
							intro.insertOption(intro._currentStep + 1, insertionIntro("restartBtn", "", "right", "", ""));
						})
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
	$('.introjs-prevbutton, .introjs-skipbutton,.introjs-bullets').hide();
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

function firstAnimation() {
	toAndFromToEffect("#line2","#query2" , "81%", function() {
		toAndFromToEffect("#line3","#query3" , "69%", function() {
		$("#line4").show();
			TweenMax.to($("#line4"), 1, {attr:{y2: "73%" },onComplete:function() {
				$("#line5").show();
					TweenMax.to($("#line5"), 1, {attr:{x2: "51.5%" },onComplete:function() {
					$("#query4").show();
					tl.fromTo("#query4", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
						$("#circle").removeClass("opacity00").hide().fadeIn(2000,function() {
						var text = "A connection object is created by the driver manager after making a connection witha database "
									+ " and this connection object is returned to the Client Application.";
						textappend('#circle', 'right', '5', text, function() {
							appendBtn(5, function() {
								popoverGrayOut();
								$("#line6").show();
								TweenMax.to($("#line6"), 1, {attr:{y1: "47%" },onComplete:function() {
									$("#line7").show();
									TweenMax.to($("#line7"), 1, {attr:{x2: "47%" },onComplete:function() {
										$("#line8").show();
										TweenMax.to($("#line8"), 1, {attr:{x2: "48%" },onComplete:function() {
											$("#line9").show();
											TweenMax.to($("#line9"), 1, {attr:{y2: "58%" },onComplete:function() {
												appendBtn(5, function() {
													transferAnimation1();
													//$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="transferAnimation1()"><span>Next &#8594;</span></a>');
												});
											}});
										}});
									}});
								}});
							});
						});
					});
				}});
			}});
		});
	});
}

function animation1() { 
	count++
	$("text").hide();
	$("#animation1").removeClass("display");
	$(".user-btn").remove();
	$("#javaBox").removeClass("opacity00").hide().fadeIn(2000,function() {
		var text = "<span class='start-text'>A client application to get data from the database needs a connection to the database.</span>"
					+"<span class='end-text'>So it asks the driver manager to give a connection object."
			textappend('#javaBox', 'left', '2', text, function() {
			appendBtn(2, function() {
				popoverGrayOut();
				$("#driver").removeClass("opacity00").hide().fadeIn(2000,function() {
					var text = "The Driver Manager using the driver tries to establish a connection with the underlying database.";
					textappend('#driver', 'left', '3', text, function() {
						appendBtn(3, function() {
							popoverGrayOut();
							toAndFromToEffect("#line1","#query1" , "57%", function() {
								$("#databaseBox1").removeClass("opacity00").hide().fadeIn(2000,function() {
									var text = "A connection if established with the database,is returned to the driver manager. ";
									textappend('#databaseBox1', 'left', '4', text, function() {
										appendBtn(4, function() {
											firstAnimation();
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}
function textappend(selector, position, val, text,callBackFunction ) {
	$(selector).popover({
				placement: position,
				viewport: selector,
				html: true,
				trigger: "focus",
				content: '<div id="popover' + val +'"><div id="dispText"></div><div class="showBtn"></div></div>',
			});
			$(selector).popover('show');
			$(".popover").css("top" , "0");
			typing("#popover" + val + " #dispText", text, function(){
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
				
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
function transferAnimation1() {
	$(".user-btn").remove()
	$(".ct-btn-next, .tooltip-height").remove();
	$("#animation1").effect("transfer",{ to: $("#invisableDiv1"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv1").removeClass("opacity00");
		$("#invisableDiv1, .svg-line1,.ani2 ").show();
		$("#animation1").addClass("display");
		$(".svg-line, .ani").hide();
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="point2()"><span>Next &#8594;</span></a>');
	});
}
function point2() {
	$(".user-btn").remove()
	$(".tooltip-height").remove();
	$(".introjs-tooltiptext").append("<div></div>")
	var text = "<y>2</y>. Once a connection is established with the database a connection object is returned to the"+
	" application,the application now needs a staement object that can be used to write a query and send it over"+
	"the connection object.";
	typing(".introjs-tooltiptext div:last", text, function(){
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="animation2()"><span>Next &#8594;</span></a>');
	});
}
function animation2() {
	$(".user-btn").remove()
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
													$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="animation3()"><span>Next &#8594;</span></a>');
													}})
												}})
											});
										})
									}})
								}})
							}})
						}})
					})
				}})
			})
		})
	})
}
function animation3() {	
	$(".user-btn").remove()
	$(".introjs-tooltiptext").append("<div></div>")
	var text = "<y>3</y>.The connection established from ja to db.</br>";
	typing(".introjs-tooltiptext div:last", text, function(){
	$("#line42").show();
		TweenMax.to($("#line42"), 1, {attr:{x1: "60%" },onComplete:function() {
			$("#line43").show();
			TweenMax.to($("#line43"), 1, {attr:{y2: "15%" },onComplete:function() {
				$("#line44").show();
				TweenMax.to($("#line44"), 1, {attr:{x2: "65.5%" },onComplete:function() {
					$("#statment").removeClass("opacity00").hide().fadeIn(2000,function() {
						$(".introjs-tooltiptext").append("<div></div>")
						var text = "<y>4</y>.sataement object.";
						typing(".introjs-tooltiptext div:last", text, function() {
							$("#line40, #line41, #line42, #line43").fadeOut(1000)
							$("#line45").show();
							TweenMax.to($("#line45"), 1, {attr:{y2: "6%" },onComplete:function() {
								$("#line46").show();
								TweenMax.to($("#line46"), 1, {attr:{x2: "51%" },onComplete:function() {
									$("#line47").show();
									TweenMax.to($("#line47"), 1, {attr:{x2: "72%" },onComplete:function() {
										$("#line48").show();
										TweenMax.to($("#line48"), 1, {attr:{y2: "15%" },onComplete:function() {
											$(".introjs-tooltiptext").append("<div></div>")
											var text = "<y>5</y>.statment object goes to java aplication and back .";
											typing(".introjs-tooltiptext div:last", text, function() {
												$("#line44").hide();
												$("#line49").show();
												TweenMax.to($("#line49"), 1, {attr:{x2: "63%" },onComplete:function() {
													$(".introjs-tooltiptext").append("<div></div>")
													var text = "<y>6</y>.statment object to connection .";
													typing(".introjs-tooltiptext div:last", text, function() {
														$("#line38, #line39").fadeOut(200)
														TweenMax.to($("#line38"), 1, {attr:{x2: "49.5%" },onComplete:function() {
															TweenMax.to($("#line39"), 1, {attr:{y2: "48%" },onComplete:function() {
																$("#line50").show();
																TweenMax.to($("#line50"), 1, {attr:{y2: "50%" },onComplete:function() {
																	$("#line51").show();
																	TweenMax.to($("#line51"), 1, {attr:{x2: "50%" },onComplete:function() {
																		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="animation4()"><span>Next &#8594;</span></a>');
																	}})
																}})
															}})
														}})
													})
												}})
											})
										}})
									}})
								}})
							}})
						})
					})
				}})
			}})
		}})
	})

}
function animation4() {	
$(".user-btn").remove()
$(".introjs-tooltiptext").append("<div></div>")
var text = "<y>7</y>.connection to driver manager .";
	typing(".introjs-tooltiptext div:last", text, function() {
	$("#line52").show();
		TweenMax.to($("#line52"), 1, {attr:{y2: "64%" },onComplete:function() {
			$(".introjs-tooltiptext").append("<div></div>")
		var text = "<y>8</y>.driver manager to data base .";
			typing(".introjs-tooltiptext div:last", text, function() {
			$("#line50, #line51, #line52").fadeOut(1000)
			$("#line37").fadeOut(100)
				TweenMax.to($("#line37"), 1, {attr:{y2: "64%" },onComplete:function() {
				$("#line37").show();
					TweenMax.to($("#line37"), 1, {attr:{y2: "53%" },onComplete:function() {
					$("#line38").show();
						TweenMax.to($("#line38"), 1, {attr:{x2: "58.5%" },onComplete:function() {
						$("#line39").show();
							TweenMax.to($("#line39"), 1, {attr:{y2: "33%" },onComplete:function() {
								$(".introjs-tooltiptext").append("<div></div>")
								var text = "<y>9</y>.driver manager to connection .";
								typing(".introjs-tooltiptext div:last", text, function() {
									$("#line49").fadeOut(1000)
										TweenMax.to($("#line44"), 1, {attr:{x2: "64%" },onComplete:function() {
											$("#line44").show();
											TweenMax.to($("#line44"), 1, {attr:{x2: "65.5%" },onComplete:function() {
												$(".introjs-tooltiptext").append("<div></div>")
												var text = "<y>10</y>.------------ .";
												typing(".introjs-tooltiptext div:last", text, function() {
												$("#line45, #line46, #line47, #line48").fadeOut(1000)
												$("#line53").show();
													TweenMax.to($("#line53"), 1, {attr:{x2: "78.5%" },onComplete:function() {
														$(".introjs-tooltiptext").append("<div></div>")
														var text = "<y>11</y>.result set object created .";
														typing(".introjs-tooltiptext div:last", text, function() {
														$("#resultset").removeClass("opacity00").hide().fadeIn(2000,function() {
															$("#line54").show();
																TweenMax.to($("#line54"), 1, {attr:{y2: "6%" },onComplete:function() {
																	$("#line55").show();
																	TweenMax.to($("#line55"), 1, {attr:{x2: "51%" },onComplete:function() {
																		$(".introjs-tooltiptext").append("<div></div>")
																	var text = "<y>12</y>.result set to java application .";
																		typing(".introjs-tooltiptext div:last", text, function() {
																		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="transfer2()"><span>Next &#8594;</span></a>');
																			})
																		}})
																	}})
																})
															})
														}})
													})
												}})
											}})
										})
									}})
								}})
							}})
						}})
					})
				}})
			})
		
	}
function transfer2() {
	$(".user-btn").remove()
	$(".svg-line3").hide();
	$(".tooltip-height").remove();
	$("#invisableDiv2").removeClass("display");
	$("#invisableDiv2").removeClass("opacity00");
	$("#invisableDiv2").show();
	$("#animation2").addClass("display");
	$(".svg-line2").show();
	$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="restart()"><span>Next &#8594;</span></a>');
	
}
function restart() {
	$(".user-btn").remove()
	intro.nextStep();
}
function mouseEvents() {
	$('.popover-gray-out > div').mouseover(function () {
		var t = this.id;
		$('#' + t + ' .more').css({'display': 'none'});
		$('#' + t + ' .end-text').css({'display': 'inline'});
		$(this).parents('.popover').addClass('z-index');
	});
	
	$('.popover-gray-out > div').mouseout(function () {
		var t = this.id;
		$('#' + t + ' .end-text').not('#popover' + count).css({'display': 'none'});
		$('#' + t + ' .more').not('#popover' + count).css({'display': 'inline'});
		$(this).parents('.popover').removeClass('z-index');
	});
}

function popoverGrayOut() {
	$('.text-right').remove();
	$("#popover"+ count).parent().addClass("popover-gray-out");
	$('#popover' + count + ' .end-text').css({'display' : 'none'});
	$('#popover' + count + ' .start-text').after('<span class="more" style="display: inline">.....</span>');
	mouseEvents();
	count++;
} 

function appendBtn(count, callBackFunction) {
	$('#popover' + count + ' .showBtn').append('<div class="introjs-button user-btn">Next &#8594;</div>');
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

