var count = 1;

var structureIntializationReady = function() {
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
		        	 {
						element : ".ct-demo-heading",
						intro : "",
						position : "left",
					},
					{
						element : "#firstPre",
						intro : "",
						position : "right",
						action : "firstSyntax"
					},
					{
						element : "#structDeclaration",
						intro : "",
						position : "top",
						action : "firstSyntax"
					},{
						element : "#structInitialization",
						intro : "",
						position : "right",
						action : "firstSyntax"
					},{
						element : "#memoryArea",
						intro : "",
						position : "top",
						action : "firstSyntax"
					},{
						element : "#printMethod",
						intro : "",
						tooltipClass: "hide",
						action : "firstSyntax"
					},{
						element : "#outputDiv",
						intro : "",
						position : "right",
						action : "firstSyntax"
					}
				]
})

	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		var action = intro._introItems[intro._currentStep].action;
		switch (ElementId) {
		
		case "firstPre":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#firstPre").removeClass("opacity00");
				
				if (action == "firstSyntax") {
					$("#firstPre").addClass("zoomIn animated");
					setTimeout(function() {
						var text = "Let us consider the <span class='ct-code-b-yellow'>structure</span> example."
						typing(".introjs-tooltiptext",text, function() {
							$("#firstPre").removeClass("zoomIn animated");
						})
					}, 950);
				} else if (action == "secondSyntax") {
					reAnimating();
					$("#arrVal").append("<span id='charVal'>115</span>, <span id='intVal'>1.25</span>, '<span id='floatVal'>a</span>'").addClass("display-none");
					var text = "For example the initialized values are different than the <span class='ct-code-b-yellow'>data types</span>"
								+" of the <span class='ct-code-b-yellow'>members</span>, then see the results.";
						typing(".introjs-tooltiptext", text, function() {
							$("#arrVal").fadeIn("500");
						})
				} else if (action == "thirdSyntax") {
					reAnimating();
					$("#arrVal").append("'<span id='charVal'>s</span>', <span id='intVal'>25</span>").addClass("display-none");
					var text = "Let us consider a <span class='ct-code-b-yellow'>structure</span> with two initialized values."
						typing(".introjs-tooltiptext", text, function() {
							$("#arrVal").fadeIn("500");
						})
				} else if (action == "fourthSyntax") {
					reAnimating();
					$("#arrVal").append("'<span id='charVal'>k</span>', <span id='intVal'>555</span>, <span id='floatVal'>14.45</span>, <span class='discard'>22</span>, <span class='discard'>'M'</span> ").addClass("display-none");
					var text = "Here we are trying to give values more than the declared variable in <span class='ct-code-b-yellow'>structure</span>."
						typing(".introjs-tooltiptext", text, function() {
							$("#arrVal").fadeIn("500");
						})
				}
			});
		break;
		
		case "structDeclaration":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (action == "firstSyntax") {
					var text = "This is <span class='ct-code-b-yellow'>structure</span> declaration for new user"
								+" defined data type <span class='ct-code-b-yellow'>book</span>.";
								typing(".introjs-tooltiptext",text)
				} else if (action == "fourthSyntax") {
					var text = "In this <span class='ct-code-b-yellow'>structure</span> declaration we have declared only two members"
								+" for new user defined data type <span class='ct-code-b-yellow'>book</span>";
								typing(".introjs-tooltiptext",text);
				}
			});
		break;
		
		case "structInitialization":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#structInitialization").removeClass("visibility-hidden");
				
				if (action == "firstSyntax" || action == "secondSyntax") {
					var text = "This is <span class='ct-code-b-yellow'>structure</span> definition which allocates"
								+" memory to the <span class='ct-code-b-yellow'>structure</span> variable <span class='ct-code-b-yellow'>b</span>.";
								typing(".introjs-tooltiptext",text);
				}  else if (action == "thirdSyntax") {
					var text = "In this <span class='ct-code-b-yellow'>structure</span> definition we are initializing only for"
								+" <span class='ct-code-b-yellow'>char</span> and <span class='ct-code-b-yellow'>int</span>.";
					typing(".introjs-tooltiptext",text);
				} else if (action == "fourthSyntax") {
					var text ="In this <span class='ct-code-b-yellow'>structure</span> definition we are initializing more than what we have "
								+" declared in structure <span class='ct-code-b-yellow'>book</span>.";
								typing(".introjs-tooltiptext",text);
				} 
				
			});
		break;	
		
		case "memoryArea":
			$(".introjs-nextbutton").hide();//memoryArea
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#memoryArea").removeClass("opacity00");
				if (action == "firstSyntax"){
					var text = "The members of <span class='ct-code-b-yellow'>b</span> variable can be accessed by using the dot(.)"
								+" operator as  <span class='ct-code-b-yellow'>b.letter</span>, <span class='ct-code-b-yellow'>b.pages</span>,"
								+" <span class='ct-code-b-yellow'>b.price</span>.";
									memoryArea(text);
				} else if (action == "secondSyntax") {
					var text = "<ul><li>Here <span class='ct-code-b-yellow'>115</span> is an <span class='ct-code-b-yellow'>integer</span>"
								+" constant but it is going to stored in <span class='ct-code-b-yellow'>char</span>"
								+" variable <span class='ct-code-b-yellow'>letter</span>, 115 is"
								+" treated as <span class='ct-code-b-yellow'>ASCII</span> value but not an integer.</li><span id='first'></span></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").hide();
						
						var charVal = String.fromCharCode($("#charVal").text());
						var intVal = Math.floor($("#intVal").text());
						var floatVal = ($("#floatVal").text().charCodeAt(0)).toFixed(2);
						
						$("#bLetter").text(charVal);
						$("#bPages").text(intVal);
						$("#bPrice").text(floatVal);
						
						$("#span1, #charVal").addClass("flash");
						$("#bLetter").addClass("flash");
						
						setTimeout(function() {
						$("#bLetter").fadeIn("slow", function() {
							var text = "<li><span class='ct-code-b-yellow'>1.234</span> is a <span class='ct-code-b-yellow'>float</span>"
										+" constant but it will stored in <span class='ct-code-b-yellow'>int</span>"
										+" variable <span class='ct-code-b-yellow'>pages</span>, so it stores"
										+" only value <span class='ct-code-b-yellow'>1</span> i.e, it truncates"
										+" <span class='ct-code-b-yellow'>.234</span> .</li><span id='second'></span>";
										typing("#first", text, function() {
											
											$(".introjs-nextbutton").hide();
											$("#span2, #intVal").addClass("flash");
											$("#bPages").addClass("flash");
											setTimeout(function() {
											$("#bPages").fadeIn("slow", function() {
											var text = "<li><span class='ct-code-b-yellow'>'a'</span> is a <span class='ct-code-b-yellow'>"
														+"character</span> constant, the"
														+" <span class='ct-code-b-yellow'>ASCII</span> value for the character is"
														+" <span class='ct-code-b-yellow'>97</span> so it is"
														+" stored in <span class='ct-code-b-yellow'>float</span> variable"
														+" <span class='ct-code-b-yellow'>price</span> with decimal point.</li>";
														
														typing("#second", text, function() {
															$(".introjs-nextbutton").hide();
															$("#span3, #floatVal").addClass("flash");
															$("#bPrice").addClass("flash");
															setTimeout(function() {
																$("#bPrice").fadeIn("slow", function() {
																	$(".introjs-nextbutton").show();
																});
														},1400);
													});
												});
											},1000);
										});
								});
						},600);
					})
					
				} else if (action == "thirdSyntax") {
					var text = "If we try to access the float value as <span class='ct-code-b-yellow'>b.price</span>"
								+" we get a <span class='ct-code-b-yellow'>garbage</span> value.";
					typing(".introjs-tooltiptext",text,function() {
						$(".introjs-nextbutton").hide();
						$("#bLetter").text($("#charVal").text());
						$("#bPages").text($("#intVal").text());
						$("#bPrice").text("0.00");
						$("#bLetter").fadeIn("slow", function() {
							$("#bPages").fadeIn("slow", function() {
								$("#bPrice").fadeIn("slow", function() {
									$(".introjs-nextbutton").show();
								});
							})
						})
					});
				} else if (action == "fourthSyntax") {
					var text = "Originally in <span class='ct-code-b-yellow'>structure</span> we have three members,"
								+" but initialized with <span class='ct-code-b-yellow'>5</span> values so the"
								+" first three values will be assigned to the members of <span class='ct-code-b-yellow'>"
								+"structure</span> and the remaining two values are discarded.";
					memoryArea(text);
				}
			});
		break;
		
		case "printMethod":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					$(".introjs-nextbutton").click();
				}, 400);
			})
		break;
			
		case "outputDiv":
			$(".introjs-nextbutton").hide();
			$("#printMethod").addClass("zIndex");
						
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputDiv").removeClass("opacity00");				
				if (action === "firstSyntax") {
					/* $("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
							+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
							+" <span class='display-none'>"+ $("#floatVal").text() +"</span>"); */
							commonCode();
					outPutDiv(function() {
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text,function() {
							dynamicSteps("secondSyntax", false, true);
							
						})
					});
				} else if (action == "secondSyntax") {
					
					var charVal = String.fromCharCode($("#charVal").text());
					var intVal = Math.floor($("#intVal").text());
					var floatVal = ($("#floatVal").text().charCodeAt(0)).toFixed(2);
					
					$("#output").append("<span class='display-none'>" + charVal +"</span>"
							+"  <span class='display-none'>"+ intVal +"</span> "
							+" <span class='display-none'>"+ floatVal +"</span>");
					outPutDiv(function() {
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text,function() {
							dynamicSteps("thirdSyntax", false, true);
							
						})
					});
				} else if (action == "thirdSyntax") {
					console.log(" in the third..")
					$("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
							+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
							+" <span class='display-none'>"+ $("#bPrice").text() +"</span>");
					outPutDiv(function() {
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text, function() {
							dynamicSteps("fourthSyntax", false, true);
					});
						
					})
				} else if (action == "fourthSyntax") {
				
					/* $("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
							+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
							+" <span class='display-none'>"+ $("#floatVal").text() +"</span>"); */
							commonCode();
					
					outPutDiv(function() {
						var text = "Click on next button.";
						typing(".introjs-tooltiptext", text,function() {
							var nextStep = {
									element : "#restart",
									intro : "Click on button to start.",
									position : "right",
							}
							intro.insertOption(intro._currentStep + 1, nextStep);
						})
					});
				}
			})
		break;
			
		case "restart":
			$(".introjs-nextbutton").hide();
			$("#restart").removeClass("opacity00");
		break;
		
		}
	})
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$(".introjs-nextbutton").hide();
	var text = "Here we are going to learn the initialization of <span class='ct-code-b-yellow'>structure</span>.click on the next button.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-nextbutton").show();
	})
	
	$("#restart").click(function() {
		 location.reload();
	})
}

function commonCode() {
	$("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
			+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
			+" <span class='display-none'>"+ $("#floatVal").text() +"</span>");
}
function memoryArea(text) {
	typing(".introjs-tooltiptext",text,function() {
		//$("#memoryArea").removeClass("zoomIn animated");
		$(".introjs-nextbutton").hide();
		$("#bLetter").text($("#charVal").text());
		$("#bPages").text($("#intVal").text());
		$("#bPrice").text($("#floatVal").text());
		
		$("#span1, #charVal").addClass("flash");
		$("#bLetter").addClass("flash");
		setTimeout(function() {
		$("#bLetter").fadeIn("slow", function() {
			$("#span2, #intVal").addClass("flash");
			$("#bPages").addClass("flash");
			setTimeout(function() {
			$("#bPages").fadeIn("slow", function() {
				$("#span3, #floatVal").addClass("flash");
				$("#bPrice").addClass("flash");
				setTimeout(function() {
					$("#bPrice").fadeIn("slow", function() {
						$(".introjs-nextbutton").show();
						$(".discard").addClass("discard-red");
					});
				},1400);
			})
			},1000);
		})
		},600);
	});
}

function reAnimating() {
	//$("#structInitialization").addClass("visibility-hidden")
	$("#arrVal").empty();
	$("#bLetter, #bPages, #bPrice").text("");
	$(".flash").removeClass("flash");
	$("#bLetter, #bPages, #bPrice").removeAttr('style');
	$("#output").empty();
}

function outPutDiv(callBackFunction) {
$(".char").addClass("flash");
$("#output span:eq(0)").fadeIn("slow", function() {
	$("#output span:eq(0)").addClass("flash");
	setTimeout(function() {
		$(".decimal").addClass("flash");
		$("#output span:eq(1)").fadeIn("slow", function() {
			$("#output span:eq(1)").addClass("flash");
			setTimeout(function() {
				$(".float").addClass("flash");
				$("#output span:eq(2)").fadeIn("slow", function() {
					$("#output span:eq(2)").addClass("flash");
					$("#printMethod").removeClass("zIndex");
					$(".introjs-nextbutton").show();
					
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
					
				})
			},400);
		})
	},200);
})
}

function dynamicSteps(action, isRequired, isMemory) {
	var step = 0;
	
		var nextStep = {
			element : "#firstPre",
			intro : "",
			position : "right",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		if (isRequired) {
			var nextStep = {
				element : "#structDeclaration",
				intro : "",
				position : "top",
				action : action
			}
			intro.insertOption(intro._currentStep + ++step, nextStep);
		}
		
		var nextStep = {
			element : "#structInitialization",
			intro : "",
			position : "right",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		if (isMemory) {
			var nextStep = {
				element : "#memoryArea",
				intro : "",
				position : "bottom",
				action : action
			}
			intro.insertOption(intro._currentStep + ++step, nextStep);
		}
		var nextStep = {
			element : "#printMethod",
			intro : "",
			position : "right",
			tooltipClass: "hide",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "right",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
}


function typing(selector, text, callBackFunction) {
	var typingSpeed = 40;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").show();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}
