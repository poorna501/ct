var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
			steps : [{
						element :'#preBody',
						intro :'',
						position:"bottom"
					},{
						element :'#line2',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"bottom",
						tooltipClass: "hide"
					},{
						element :'#line3',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass: "hide"
					},{
						element :'#line4',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						tooltipClass: "hide"
					},{
						element :'#line5',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#hiddenTotalEnterChar',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#restartBtn',
						intro :'',
						position:"right"
					}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody":
			
		break;	
		
		case "line2" :
			$("#addressBox").addClass("opacity00");
			$("#tableId").removeAttr('style');
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			if(introjs._currentStep == 2) {
				$("#addressBox").addClass("opacity00");
				$("#tableId").removeAttr('style'); 
				console.log('In the before.,..');
			} else if(introjs._currentStep == 6) {
				
			}
			break;
			
		case "line3" :
			$("#hiddenTypingChar").addClass("hidden");
			$("#inputChar").val("");
			$("#consoleId").addClass("opacity00");
			/*"#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>";*/
				//$("#hiddenTypingChar").removeClass("hidden");
				$("#totalBlinkText").addClass("hidden");
		break;
			
		case "line4" :
			$('.filled').text('');
			$('.filled').removeClass('filled');
		break;
		
		case "line5" :
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenTotal").addClass("hidden");
		break;
			
		case "line6" :
			
		break;
			
		case "consoleId" :
			
			if(introjs._currentStep == 4) {
				$("#hiddenTypingChar").addClass("hidden");
					$("#inputChar").val("");
					$("#consoleId").addClass("opacity00");
					/*"#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>";*/
						//$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
			} else if(introjs._currentStep == 8) {
				
			}
			break;
			
		case "hiddenTotalEnterChar" :
			
			break;
			
		case "restartBtn":

			break;
		}
	});
	
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody":
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Let us see a sample program on the usage of the functions <span class='ct-code-b-yellow'>gets()</span> and <span class='ct-code-b-yellow'>puts()</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			})
		break;	
		
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, ch is the <span class='ct-code-b-yellow'>character array varaiable</span>"
						+" which contains 20 characters.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits)"
						+" in the memory.</li></ul> ", 10, "",function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
			if(introjs._currentStep == 2) {
				
					$("#addressBox").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						console.log('In the after.,..');
						typing(".introjs-tooltiptext", "<y>20 bytes</y> are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", 10, "",function() {
							$('.introjs-tooltip').removeClass('hide');
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
			} else if(introjs._currentStep == 6) {
				//$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					TweenMax.to(".td-css", 0.2, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter"
								+" <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span>"
								+" is placed at the end of the string by the system.", 5, "",function() {
							insertCharacters();
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
			}
				});
			
			break;
			
		case "line3" :
			$("#hiddenTypingChar").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if(introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					},500);
				} else {
					introjs.previousStep();
				}
				
			});
			break;
			
		case "line4" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$("table tr:nth-child(2) td:nth-child(n+2)").text("");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>gets()</span> "
						+"is library function it reads a string from the keyboard.</li><li><span class='ct-code-b-yellow'>gets()</span>"
						+" function reads <span class='ct-code-b-yellow'>whitespace</span> characters also.</li></ul>", 10, "",function() {
					insertCharacters();
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if(introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					},500);
				} else {
					setTimeout(function() {
						introjs.previousStep();
					},500);
				}
				
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>puts()</span> is a library function.<br/> which is used to display a string on to the output screen.", 10, "",function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			
			/*if(flag1) {
				$("#inputChar").val("");
				flag1 = false;
			}*/
			
			if(introjs._currentStep == 4) {
				$("#hiddenTypingChar").addClass("hidden");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#inputChar").val("");
					$("#consoleId").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 10, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						typing(".introjs-tooltiptext", "Enter a string.", 10, "",function() {
							$('#inputChar').keyup(function(e) {
								if ($("#inputChar").val().length < 1) {
									console.log("From the keyup");
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								} else {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								}
							});
						});
					});
				});
			} else if(introjs._currentStep == 8) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
						typing("#totalEnterChar", "The entered string is : <span id='putValueId'></span>", 10, "",function() {
							$("#totalEnterChar").addClass("hidden");
							$("#enterHiddenTotal").removeClass("hidden");
							setTimeout(function() {
								introjs.nextStep();
							},500);
						});
					} else {
						introjs.previousStep();
					}
				});
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var totalLength = $("#tableRowId > td:not(:first)").text().length;
				var finalResult = $("#tableRowId > td:not(:first)").text().substring(0,totalLength-2);
				/* var totalLength = $("#tableRowId td").text().length
				var finalResult = $("#tableRowId td:nth-child(-n+" + (totalLength-1) +")").text(); */
				$("#hiddenTotalEnterChar").val(finalResult);
				
			//	$("#hiddenTotalEnterChar").val($("#inputChar").val());
				setTimeout(function() {
					introjs.nextStep();
				},500);
			});
			break;
			
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {

				});
			});
			break;
		}
	});
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "Let us see a sample program on the usage of the functions <span class='ct-code-b-yellow'>gets()</span> and <span class='ct-code-b-yellow'>puts()</span>.", 10, "",function() {
		$('.introjs-nextbutton').show();
	});
}

var flag1 = true;
function insertCharacters() {
	var result = $("#inputChar").val();
	console.log("InputChar : " + result);
	for(var i = 0; i <= result.length; i++) {
		
		if (result.length >= 0 && result.length < 20) {
			if (i == result.length) {
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass('filled').text("\\0");
				console.log("I am in if...")
			} else {
				$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass('filled').text(result[i]);
			}
		}  else {
			if (i == 19) {
				console.log("Hello" + result[i]);
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
				break;
			} else {
				console.log("I am in else" + result[i]);
				$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
			}
		}
		
	}
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}