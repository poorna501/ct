var introjs;

function finalKeywordAnimation() {
	introFunction();
}

function introFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,

		steps : [{
			element : "#finalKeywordCodeDiv",
			intro : "",
			position: "right",
			tooltipClass: "hide",
			animate : "withoutFinalKeyword"
		},{
			element : "#outputDiv",
			intro: "",
			tooltipClass: "hide",
			animate : "printWithoutFinalKeyWord"
		},{
			element : "#finalKeywordCodeDiv",
			intro : "",
			position: "right",
			tooltipClass: "hide",
			animate : "finalKeyWithError"
		},{
			element: "#outputDiv",
			intro: "",
			animate: "finalKeywordWithError"
		},{
			element : "#finalKeywordCodeDiv",
			intro : "",
			position: "right",
			tooltipClass: "hide",
			animate : "finalKeyWithoutError"
		},{
			element: "#outputDiv",
			intro: "",
			animate: "finalKeywordWithoutError"
		},{
			element: "#finalTextDiv",
			intro: "",
			tooltipClass: "hide"
		},{
		    element: '#restart',
		    intro: 'Click to restart.',
		    position: 'right'
	  	}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		$(".introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton").hide();
		switch(element) {
			case "finalKeywordCodeDiv" :
				var animate = introjs._introItems[introjs._currentStep].animate;
				switch (animate) {
					case "withoutFinalKeyword":
						$("#finalKeywordCodeDiv").removeClass("opacity00");
						zoomInEffect("#preFinalCode", function() {
							$(".introjs-tooltip").removeClass("hide");
							var text = "This is the sample program.";
							typing(".introjs-tooltiptext", text, function() {
								appendNextBtn('.introjs-tooltipbuttons', function() {
									explainWithoutFinalKeyword();
								});
							});
						});
					break;
					case "finalKeyWithError":
						$('.introjs-helperLayer').one('transitionend', function() {
							$(".arrow").remove();
							$(".introjs-tooltip").removeClass("hide");
							var text = 'Now put a <y>final</y> keyword in front of a <y>String subject = "\Java\"</y> and see what will '
										+ 'happeness.';
							typing(".introjs-tooltiptext", text, function() {
								appendNextBtn('.introjs-tooltipbuttons', function() {
									appendFinalKeyword();
								});
							});
						});
					break;
					case "finalKeyWithoutError":
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#reInitOfSub").removeClass("blinkRed");
							$("#reInitOfSub").css("border-bottom", "");
							$(".arrow").remove();
							$(".introjs-tooltip").removeClass("hide");
							var text = "Now commant the line <y>subject = \"C\"</y> and see what will happend";
							typing(".introjs-tooltiptext", text, function() {
								appendNextBtn('.introjs-tooltipbuttons', function() {
									$("#strSubject2").before("//").removeClass("lightBrown");
									$("#reInitOfSub").css("color", "green");
									$(".introjs-nextbutton").show();
								});
							});
						});
					break
				}
			break;
			case "outputDiv" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					var animate = introjs._introItems[introjs._currentStep].animate;
					switch (animate) {
					case "printWithoutFinalKeyWord" :
						compileFile(".output", "compileCmd", function() {
							runJavaProgram("#compileCmd", "runProg", "outputLine1", "outputLine2");
						});
							/*$(".output").html('<div id="outputLine1"><span id="outSubText1" class="opacity00">subject = </span> '
									+ '<span id="outSubVal1" class="position opacity00">Java</span> '
									+ '<span id="outMarksText1" class="opacity00"> , marks = </span> '
									+ '<span id="outMarks1" class="opacity00">80</span></div>');
							$("")
							
							arrow("#printBeforeChange", "#printBeforeChange");
							displayOutputText("#printBeforeChange", "#subjBfre", "#outSubText1", "#subjVarBfre", "#strSubject", "#javaText", "#outSubVal1", function() {
								displayOutputText("#printBeforeChange", "#markBfre", "#outMarksText1", "#markVarBfre", "#intmarks", "#eighty", "#outMarks1", function() {
									$("#printBeforeChange").removeClass("z-index1000000");
									$("#outputLine1").after('<div id="outputLine2"><span id="outSubText2" class="opacity00">subject = </span> '
											+ '<span id="outSubVal2" class="position opacity00">C</span> '
											+ '<span id="outMarksText2" class="opacity00"> , marks = </span> '
											+ '<span id="outMarks2" class="opacity00">85</span></div>');
									arrow("#printBeforeChange", "#printAfterChange", function() {
										displayOutputText("#printAfterChange", "#subjaftr", "#outSubText2", "#subjVarAftr", "#strSubject2", "#CText", "#outSubVal2", function(){
											displayOutputText("#printAfterChange", "#markAftr", "#outMarksText2", "#markVarAftr", "#intMarks2", "#eightyFive", "#outMarks2", function(){
												$("#reInitOfSub, #reInitOfMarks").removeClass("lightgreen");
												$("#printAfterChange").removeClass("z-index1000000");
												setTimeout(function() {
													introjs.nextStep();
												}, 800);
											});
										});
									});
								});
							});*/
						break;
					case "finalKeywordWithError" :
						$("#outputLine2").after('<div id="compile2"></div><div id="errorMsg"></div>')
						compileFile("#compile2", "compileCmd2", function() {
							$("#preFinalCode").addClass("z-index1000000");
							$(".lightgreen").removeClass("lightgreen");
							arrow("#strSubject2", "#strSubject2", function() {
								$("#reInitOfSub").css("border-bottom", "2px dashed red");
								$("#reInitOfSub").addClass("blinkRed");
								var text = "FinalKeyword.java:6: <r>error: cannot assign a value to final variable subject<br/>"
											+ "\t\t\t\tsubject = \"C\"<br/>^<br/>1 error</r>";
								typing("#errorMsg", text, function() {
									$(".panel-body").scrollTo("#errorMsg", 500, function() {
										var text = "Compilear shows an <r>error</r> at <r>subject = \"C\"</r> because we are reassign "
											+ " <y>subject</y> value from <y>\"java\"</y> to <y>\"C\"</y> "
											$(".introjs-tooltiptext ul li:last").append("<li></li>");
										typing(".introjs-tooltiptext ul li:last", text, function() {
											var text = "In <y>java</y> whenever you declare variable as <y>final</y> the "
												+ "value of the variable is not changed through out the program. "
												$(".introjs-tooltiptext ul li:last").append("<li></li>");
											typing(".introjs-tooltiptext ul li:last", text, function() {
												$(".introjs-nextbutton").show();
											});
										});
									});
								})
							});
						});
					break;
					case "finalKeywordWithoutError" :
						$("#errorMsg").after('<div id="compile3"></div><div id="outputShow"></div>');
						compileFile("#compile3", "compileCmd3", function() {
							runJavaProgram("#compileCmd3", "runProgram", "ouput1", "output2");
						});
					break;
					}
				});
			break;
			case "finalTextDiv" :
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#finalTextDiv", function() {
						appendNextBtn('#btnDiv', function() {
							introjs.nextStep();
						});
					});
				});
			break;
			case "restart":
				$('.introjs-tooltip').css('min-width','125px');
			$('#restartDiv').removeClass('hide introjs-fixParent opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#restart').click(function() {
						location.reload();
					});
				});
			break;
		
		}
	});
	introjs.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
}
function compileFile(selector1, selector2, callBackFunction) {
	$(".introjs-tooltip").removeClass("hide");
	var text = "<ul><li>Now <y>compile</y> the program <y>javac FinalKeyword.java</y></li></ul>";
	typing(".introjs-tooltiptext", text, function() {
		appendNextBtn('.introjs-tooltipbuttons', function() {
			$(selector1).html('<div id="'+ selector2 +'"></div>')
			var text = "<g>&gt;&gt;</g> <y>javac</y> <g>FinalKeyword.java</g>";
			typing("#" + selector2, text, function() {
				$(".panel-body").scrollTo("#" + selector2, 500);
				appendNextBtn('.introjs-tooltipbuttons', function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function runJavaProgram(selector1, selector2, out1, out2) {
	var text = "After <y>compilation</y> run the program <y>java FinalKeyword</y>";
	$(".introjs-tooltiptext ul li:last").append("<li></li>");
	typing(".introjs-tooltiptext ul li:last", text, function() {
		$(selector1).after("<div id='"+ selector2 +"'></div>");
		var text = "<g>&gt;&gt;</g> <y>java</y> <g>FinalKeyword</g>";
		typing("#" + selector2, text, function() {
			$(".panel-body").scrollTo("#" + selector2, 500);
			$("#" + selector2).after('<span id="'+ out1 +'" class="opacity00">subject = Java , marks = 80</span><br/>'
					 		+ '<span id="'+ out2 +'" class="opacity00">subject = C , marks = 85</span> ');
			$(".panel-body").scrollTo("#"+ out1, 500);
			$("#" + out1).removeClass("opacity00").effect( "highlight", {color: 'yellow'}, 800, function() {
				$("#" + out2).removeClass("opacity00").effect( "highlight", {color: 'yellow'}, 800, function() {
					$(".panel-body").scrollTo("#"+ out2, 500);
					var text = "Program run successfully."
					$(".introjs-tooltiptext ul li:last").append("<li></li>");
					typing(".introjs-tooltiptext ul li:last", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
		});
	});
}

function explainWithoutFinalKeyword() {
	var text = "<ul><li>Here, we are declare and initialize a <y>String</y> variable <y>subject</y> to <y>\"Java\"</y> and an "
				+ "<y>int</y> variable <y>marks</y> to <y>\"80\"</y>.</li></ul>";
	typing(".introjs-tooltiptext", text, function() {
		arrow("#subInit", "#marksInit", function() {
			appendNextBtn('.introjs-tooltipbuttons', function() {
				$(".introjs-tooltiptext ul >li").append("<li></li>");
				var text = "Print <y>subject</y> = <y>Java</y> , <y>marks</y> = <y>80</y>. on to the console.";
				typing(".introjs-tooltiptext ul li:last", text, function() {
					arrow("#marksInit", "#printBeforeChange", function() {
						appendNextBtn('.introjs-tooltipbuttons', function() {
							changeSubjectAndMarksValues();
						});
					});
				});
			});
		});
	});
}

function changeSubjectAndMarksValues() {
	$(".introjs-tooltiptext ul >li").append("<li></li>");
	var text = "Here, we are re-initialize the <y>subject</y> value from <y>Java</y> to <y>C</y> and <y>marks</y> from "
				+ " <y>80</y> to <y>85</y>.";
	typing(".introjs-tooltiptext ul li:last", text, function() {
		$("#reInitOfSub, #reInitOfMarks").addClass("lightgreen");
		arrow("#printBeforeChange", "#reInitOfSub", function() {
			arrow("#reInitOfSub", "#reInitOfMarks", function() {
				appendNextBtn('.introjs-tooltipbuttons', function() {
					$(".introjs-tooltiptext ul >li").append("<li></li>");
					var text = "Print <y>subject</y> = <y>C</y> , <y>marks</y> = <y>85</y>. on to the console.";
					typing(".introjs-tooltiptext ul li:last", text, function() {
						arrow("#reInitOfMarks", "#printAfterChange", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function appendFinalKeyword() {
	typing("#appendFinalKey", '<span class="fontWeight darkPink lightgreen">final</span>', function() {
		$(".darkPink").removeClass("lightgreen");
		$("#appendFinalKey").effect( "highlight",{color: 'blue'}, 500, function() {
			$(".introjs-nextbutton").show();
		});
	});
}

function displayOutputText(selector1, selector2, selector3, selector4, selector5, selector6, selector7, callBackFunction) {
	$(selector1).addClass('z-index1000000');
	$(selector2).effect( "highlight",{color: 'blue'}, 800, function() {
		zoomInEffect(selector3, function() {
			$(selector3).effect( "highlight",{color: 'yellow'}, 800, function() {
				$(selector4).effect( "highlight",{color: 'blue'}, 800, function() {	
					$(selector5).effect( "highlight",{color: 'blue'}, 800, function() {
						$(selector6).addClass("z-index1000000").effect( "highlight",{color: 'blue'}, 800, function() {
							fromEffectWithTweenMax(selector6, selector7, function() {
								if (typeof callBackFunction === "function") {
									callBackFunction();
								}
							});
						});
					});
				});
			});
		});
	});
}

function appendNextBtn(selector, callBackFunction) {
	$(selector).append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("body").append("<span id='dummy' class='opacity00' style='position: relative; z-index: 9999999;'>" + $(selector2).text() + "</span>");
	$("#dummy").offset({
		"top" : l2.top,
		"left" : l2.left
	});
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$(toId).effect( "highlight",{color: 'blue'}, 800);
	$('body').append("<i class='fa fa-arrow-right arrow animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth())
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	TweenMax.to(".arrow", 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function zoomInEffect(selector1, callBackFunction) {	//zoom in effect
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
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


