var typingSpeed = 10;
typeingSpeed = 100;
var count = 1;	
var BatchUpadateFunction = function() {

	$('#restartBtn').click(function() {
		location.reload();
	});
	introJsFunction();	
	var text = "In the heading...";
	typing(".introjs-tooltiptext", text, function() {
		$(".svg-line").hide();
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
			position : "right"
		}, {
			element : "#basiccode",
			intro : "",
			position : "bottom",
			}]
		});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var action = introjs._introItems[introjs._currentStep].action;
			switch (elementId) {
			
			case "basiccode":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#preCode").removeClass("opacity00");
					$("#animate").removeClass("opacity00");
					$("#outputBox").removeClass("opacity00")
					var text = "This is the pre code...";
					newStepCase("con", text)
					
				})
			break;
			case "con":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "condition...";
					newStepCase("animate", text)
					
				})
			break;
			case "animate":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-nextbutton").hide();
					if (count == 1) {
						createcon()
					} else if (count == 2) {
						context()
					} else if (count == 3) {
						var text = "condition...";
						$("#list").removeClass("opacity00")
						animate("1", "stmt2", text)
						
					} else if (count == 4) {
						var text = "condition...";
						animate("2", "ustmt", text)
						
					} else if (count == 5) {
						var text = "condition...";
						animate("3", "stmt3", text)
						
					} else if (count == 6) {
						var text = "condition...";
						animate("4", "dstmt", text)
						
					} else if (count == 7) {
						var text = "condition...";
						animate("5", "exucte", text)
						
					} else if (count == 8) {
						$("#line8").show();		
						TweenMax.to($("#line8"), 1, {attr:{y2: "20%" },onComplete:function() {
							$("#line9").show();		
							TweenMax.to($("#line9"), 1, {attr:{x2: "54%" },onComplete:function() {
								$("#line10").show();		
								TweenMax.to($("#line10"), 1, {attr:{x2: "70%" },onComplete:function() {
									$("#tablel").removeClass("opacity00")
									$("#tablel").addClass("blinking-border-background-green ")
									rowinsert()
								}})
							}})
						}})
					}
				})
			break;
			case "exucte":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "condition...";
					newStepCase("animate", text)
					
				})
			break;
			case "condition":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "condition...";
					newStepCase("stmt", text)
					
				})
			break;
			case "date":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "date...";
					newStepCase("string1", text)
					
				})
			break;
			case "string1":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#java1").removeClass("opacity00")
					var text = "string...";
					newStepCase("string2", text)
					
				})
			break;
			case "string2":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#java2").removeClass("opacity00")
					var text = "string...";
					newStepCase("update", text)
					
				})
			break;
			case "update":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#java3").removeClass("opacity00")
					var text = "string...";
					newStepCase("string3", text)
					
				})
			break;
			case "string3":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#java4").removeClass("opacity00")
					var text = "string...";
					newStepCase("delete", text)
					
				})
			break;
			case "delete":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#java5").removeClass("opacity00")
					var text = "string...";
					newStepCase("stmt1", text)
					
				})
			break;
			case "stmt":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("animate", text)
					
				})
			case "stmt1":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("animate", text)
					
				})
			break;
			case "stmt2":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("animate", text)
					
				})
			break;
			case "ustmt":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("animate", text)
					
				})
				break;
			case "stmt3":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("animate", text)
					
				})
				break;
			case "dstmt":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("animate", text)
					
				})
			break;
			case "forloop":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "string...";
					newStepCase("sop", text)
					
				})
			break;
			case "sop":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "output...";
					newStepCase("outputBox", text)
					
				})
			break;
			case "outputBox":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#op1").removeClass("opacity00")
					var text = "output...";
					newStepCase("catch", text)
					
				})
			break;
			case "catch":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputBox").removeClass("opacity00")
					$("op1").removeClass("opacity00")
					var text = "output...";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("restartBtn", "", "right", "", ""));
						$(".introjs-nextbutton").show();
					})
				})
			break;
			
			case "restartBtn":  
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltip').css({'min-width' : '120px'});
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
					var text = "Click to Restart";
					typing(".introjs-tooltiptext", text,  function() {
						
					})
				});
			break;
	
	}
})
introjs.start();

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
function createcon() {
	count++;
	$("#jp").removeClass("opacity00").hide().fadeIn(2000,function() {
		var text = "java application...";
		typing(".introjs-tooltiptext", text,  function() {
			$("#line1").show();
			TweenMax.to($("#line1"), 1, {attr:{x2: "54%" },onComplete:function() {
				var text1 = "connection from jp to driver...";
				typing(".introjs-tooltiptext", text1,  function() {
					$("#drivermanager").removeClass("opacity00").hide().fadeIn(2000,function() {
						var text1 = "driver managrt...";
						typing(".introjs-tooltiptext", text1,  function() {
							$("#line2").show();		
							TweenMax.to($("#line2"), 1, {attr:{x2: "70%" },onComplete:function() {
								var text2 = "driver to db...";
								typing(".introjs-tooltiptext", text2,  function() {
									$("#databaseBox").removeClass("opacity00").hide().fadeIn(2000,function() {
										var text2 = "database...";
											typing(".introjs-tooltiptext", text2,  function() {
												tweenmax()
											});
									});
								});
							}})
						})
					});
				})
			}})
		});
	});
}
function tweenmax() {
	$("#line3").show();		
	TweenMax.to($("#line3"), 1, {attr:{x2: "61%" },onComplete:function() {
	var text3 = " db to driver...";
		typing(".introjs-tooltiptext", text3,  function() {
		$("#line4").show();		
			TweenMax.to($("#line4"), 1, {attr:{x2: "42%" },onComplete:function() {
				var text3 = " connection obj formed...";
				typing(".introjs-tooltiptext", text3,  function() {
						$("#conobj").removeClass("opacity00").hide().fadeIn(2000,function() {
						$("#conobj").addClass("blinking-border-background-green ")
						$("#line5").show();		
						TweenMax.to($("#line5"), 1, {attr:{x2: "19%" },onComplete:function() {
							var text3 = " connection obj formed...";
							newStepCase("condition", text3)
							
						}});
					})
				})
			}});
		})
	}});
}
function context() {
	count++;
	$("#line6").show();		
		TweenMax.to($("#line6"), 1, {attr:{x2: "27%" },onComplete:function() {
		$("#line7").show();		
			TweenMax.to($("#line7"), 1, {attr:{y2: "31%" },onComplete:function() {
				$("#context").removeClass("opacity00")
				$("#context").addClass("blinking-border-background-green ")
				var text = "string...";
				newStepCase("date", text)
					
			}});
	}})

}
function rowinsert() {
	$("tbody").append("<tr id = 'row1'><td><span class='position' id = 'i'></span></td>"+
			"<td><span class='position' id = 'i1'></span></td>"+
			"<td><span class='displayInline position-relative position' id = 'i2'></span></td></tr>");
		$("#insert1").addClass("zIndex");		
		typeing("#i", "vishnu",  function() {
			typeing("#i1", "g1504",  function() {
				typeing("#i2", "12-1-2018",  function() {
					$("#insert1").removeClass("zIndex");
				var text1 = "inserted first row"
					
					typing(".introjs-tooltiptext", text1,  function() {
				$("tbody").append("<tr><td><span class='position' id = 'j'></span></td>"+
						"<td><span class='position' id = 'j1'></span></td>"+
						"<td><span class='displayInline position-relative position' id = 'j2'></span></td></tr>");
						$("#insert2").addClass("zIndex");		
					typeing("#j", "lakshmi",  function() {
						typeing("#j1", "d1906",  function() {
							typeing("#j2", "12-1-2018",  function() {
								$("#insert2").removeClass("zIndex");
								$("#name1, #j").addClass("zIndex");
								$("#insert3").addClass("zIndex");		
								var adress = "g1206";
									flipEffect("#j1", adress, function() {
										$("#name1,#j,#j1,#insert3").removeClass("zIndex");
											
										$("tbody").append("<tr><td><span class='position' id = 'k'></span></td>"+
										"<td><span class='position' id = 'k1'></span></td>"+
										"<td><span class='displayInline position-relative position' id = 'k2'></span></td></tr>");	
											$("#insert4").addClass("zIndex");
										typeing("#k", "ganesh",  function() {
											typeing("#k1", "f2906",  function() {
												typeing("#k2", "12-1-2018",  function() {
													$("#insert4").removeClass("zIndex");
														$("#name,#row1,#name2,#insert5").addClass("zIndex");
															setTimeout(function() {
																
															$("#row1").remove();
															$("#name, #name2, #insert5").removeClass("zIndex");
															}, 3000);
															var text = "condition...";
															newStepCase("forloop", text)
															
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		}

function typeing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typeingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).addClass("zIndex")
		$(selector).text(val);
		TweenMax.to($(selector), 1, {css: {top : 1, rotationX : 0,}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}
function newStepCase(selector, text) {
	typing(".introjs-tooltiptext", text,  function() {
		console.log("hiiiiiiii")
		introjs.insertOption(introjs._currentStep + 1, insertionIntro(selector, "", "bottom", "", ""));
		$(".introjs-nextbutton").show();
	})
}
function animate(index, selector1, text) {
	count++;
	$("#line1" + index).show();		
	TweenMax.to($("#line1" + index), 1, {attr:{x2: "29%" },onComplete:function() {
		$("#insert"+index).removeClass("opacity00")
		$("#insert"+index).addClass("blinking-border-background-green");
		newStepCase(selector1, text);
	}});
}
