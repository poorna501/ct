var typingInterval = 5;
var count = 1;
var result = 1; 
var arrayOfStructure = function() {
	 $("#restart").click(function() {
			location.reload(); 
		});
		introSteps();
 }
function introSteps() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#informationDiv",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#codeDiv",
			intro : "",
			position : "right"
		},{
			element : "#struct",
			intro : "",
			position : "right"
		},{
			element : "#mainMethod",
			intro : "",
			position : "right"
		},{
			element : "#structVariable",
			intro : "",
			position : "right"
		},{
			element : "#animationDiv",
			intro : "",
			position : "bottom"
		},{
			element : "#normalVariable",
			intro : "",
			position : "bottom"
		},{
			element : "#animationDiv",
			intro : "",
			position : "bottom"
		},{
			element : "#printDetailsStmt",
			intro : "",
			position : "bottom"
		},{
			element : "#outputDiv",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#forLoop1",
			intro : "",
			position : "right",
		},{
			element : "#intial1",
			intro : "",
			position : "right",
		},{
			element : "#memoryOfi",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#condition1",
			intro : "",
			position : "right",
		}
	]});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "informationDiv":
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#example-table").removeClass("opacity00");
							$("#informationDiv").css({"z-index": "999999999"});
							setTimeout(function(){
								intro.nextStep();
							}, 1000);
						});
					});
				});
			break;
			case "codeDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to($("#codeDiv"),1, {opacity: 1, onComplete:function() {
						var text="Let us consider an example code.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			break;
			case "struct":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text="This is the declaration of new user defined struct datatype " 
						+ "<span class='ct-code-b-yellow'>book</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "mainMethod":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "main is the operating system <span class='ct-code-b-yellow'>call</span>" 
						+ " which is the starting execution piont of a program.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "structVariable":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of struct variables, it will " 
						+ "<span class='ct-code-b-yellow'>allocate memory</span> to the variables " 
						+ "<span class='ct-code-b-yellow'>S[0],S[1],S[2],S[3]</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 5) {
						$("#animationDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							var text = "This is the <span class='ct-code-b-yellow'>memory</span> allocation of an array in structure.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if (intro._currentStep == 7) {
						$("#memoryOfi").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							var text = "This is the <span class='ct-code-b-yellow'>memory</span> allocation of variable " 
								+ "<span class='ct-code-b-yellow'>i</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
			break;
			case "normalVariable":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of normal variables, it will " 
						+ "<span class='ct-code-b-yellow'>allocate memory</span> to the variable i." 
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "printDetailsStmt":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="detailsOfBook"></span>');
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "outputDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					scrollAtOutput();
					TweenMax.to($("#outputDiv"),1, {opacity: 1, onComplete:function() {
						if (intro._currentStep == 9) {
							var text = "enter details of 4 book : ";
							typing("#detailsOfBook", text, function() {
								intro.nextStep();
							});
						} else if (intro._currentStep == 15 || intro._currentStep == 33 || intro._currentStep == 51 || intro._currentStep == 69) {
							var text = "enter name of book : ";
							typing("#detailsOfBook" + count, text, function() {
								setTimeout(function(){
									intro.nextStep();
								}, 1000);
							});
						} else if (intro._currentStep == 17 || intro._currentStep == 35 || intro._currentStep == 53 || intro._currentStep == 71) {
							$("#editname" + count).effect("highlight",{color: 'yellow'}, 1000);
							$("#editname" + count).focus();
							var text1 = "enter name.";
							typing(".introjs-tooltiptext", text1, function() {
								
							});
						} else if (intro._currentStep == 20 || intro._currentStep == 38 || intro._currentStep == 56 || intro._currentStep == 74) {
							$("#editname" + count).attr("contenteditable", false);
							var text = "enter no. of pages : ";
							typing("#detailsOfpages" + count, text, function() {
								setTimeout(function() {
									intro.nextStep();
								}, 1000);
							});
						} else if (intro._currentStep == 22 || intro._currentStep == 40 || intro._currentStep == 58 || intro._currentStep == 76) {
							$("#editpages" + count).effect( "highlight",{color: 'yellow'}, 1000);
							$("#editpages" + count).focus();
							var text1 = "enter number of pages.";
							typing(".introjs-tooltiptext", text1, function() {
							});
						} else if (intro._currentStep == 25 || intro._currentStep == 43 || intro._currentStep == 61 || intro._currentStep == 79) {
							$("#editpages" + count).attr("contenteditable", false);
							var text = "enter price : ";
							typing("#detailsOfprice" + count, text, function() {
								setTimeout(function() {
									intro.nextStep();
								}, 1000);
							});
						} else if (intro._currentStep == 27 || intro._currentStep == 45 || intro._currentStep == 63 || intro._currentStep == 81) {
							$("#editprice" + count).effect( "highlight",{color: 'yellow'}, 1000);
							$("#editprice" +count).focus();
							var text1 = "enter the price.";
							typing(".introjs-tooltiptext", text1, function() {
							});
						} else if (intro._currentStep == 91 || intro._currentStep == 96 || intro._currentStep == 101 || intro._currentStep == 106) {
							/* var text = "Name : " + $("#name" + result).text() + "&emsp;Price : " 
								+ $("#price" + result).text() + "&emsp;Pages : " + $("#pages" + result).text() + ""; */
								var text = $("#displayResult" + result).html();
								$("#displayResult" + result).removeClass("opacity00");
							typing("#displayResult" + result, text, function() {
								var text1 = "This is the details of book" + result + ".";
								typing(".introjs-tooltiptext", text1, function() {
									$('.introjs-nextbutton').show();
								});
							});
						}
					}});
				});
			break;
			case "forLoop1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This for loop used to read all the information of 4 book details.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "intial1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Initially i value is initialized to 0.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "inc1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will increment i value.";
					typing(".introjs-tooltiptext", text, function() {
						if (count <= 4) {
							count++;
							$('.introjs-nextbutton').show();
						} else {
							$('.introjs-nextbutton').show();
						}
					});
				});
			break;
			case "memoryOfi":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						$("#ivalue").removeClass('opacity00').addClass("animated zoomIn").one("animationend", function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1500);
						});
					} else if (intro._currentStep == 30) {
						$("#ivalue").text(1);
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 48) {
						$("#ivalue").text(2);
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 66) {
						$("#ivalue").text(3);
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 84) {
						$("#ivalue").text(4);
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 88) {
						$("#ivalue").text(0);
						secondDynamicSteps();
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 93) {
						$("#ivalue").text(1);
						secondDynamicSteps();
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 98) {
						$("#ivalue").text(2);
						secondDynamicSteps();
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 103) {
						$("#ivalue").text(3);
						secondDynamicSteps();
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else if (intro._currentStep == 108) {
						$("#ivalue").text(4);
						lastSteps();
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					}
				});
			break;
			case "condition1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (count < 5) {
						var text = "Here the condition is ture so the inner statements will execute.";
						typing(".introjs-tooltiptext", text, function() {
							if (count < 5) {
								 dynamicSteps(true);
							}
							$('.introjs-nextbutton').show();
						});
							} else {
								changeText();
							}
					$('.introjs-nextbutton').show();
				});
			break;
			case "printNameStmt":
				$("#editprice" + (count - 1)).attr("contenteditable", false);
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the statement which is used to print in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<br><span id="detailsOfBook'+ count +'"></span>' 
								+ '<span class="padding3" contenteditable="true" id="editname'+ count +'" maxlength="4"' 
								+ ' spellcheck="false"></span>');
						characters();
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "name" + count:
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#name" + count).text($("#editname" + count).text()).removeClass('opacity00').addClass("animated zoomIn")
																													.one("animationend", function() {
						intro.refresh();
						setTimeout(function(){
							intro.nextStep();
						}, 1500);
					});
				});
			break;
			case "printPage":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the statement which is used to print in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<br><span id="detailsOfpages' + count + '"></span>' 
								+ '<span class="padding3" contenteditable="true" id="editpages'+ count +'" maxlength="3" spellcheck="false">' 
								+ '</span>');
						numbers(); 
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "printPrice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the statement which is used to print in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<br><span id="detailsOfprice' + count + '"></span>' 
								+ '<span class="padding3" contenteditable="true" id="editprice' + count + '" maxlength="3" spellcheck="false">' 
								+ '</span>');
						numbers();
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "price" + count:
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#editprice" + (count - 1)).attr("contenteditable", false);
				$("#price" + count).text($("#editprice" + count).text()).addClass("animated zoomIn").one("animationend", function() {
					intro.refresh();
					setTimeout(function(){
						intro.nextStep();
					}, 1500);
				});
			});
			break;
			case "pages" + count:
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#pages" + count).text($("#editpages" + count).text()).addClass("animated zoomIn").one("animationend", function() {
						intro.refresh();
						setTimeout(function(){
							intro.nextStep();
						}, 1500);
					});
				});
				break;
			case "scanName":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editprice" + count).attr("contenteditable", false);
					var text = "This is the statement which is used to read the value given by user.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "scanPage":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the statement which is used to read the value given by user.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "scanPrice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the statement which is used to read the value given by user.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "forLoop2" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the for loop to print the result.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "intial2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "here i value is initialized to zero.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "condition2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 109) {
						$('.introjs-nextbutton').hide();
						var text = "As the condition fails it will terminate the loop and continue the statements below.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						var text = "Here the condition is ture so the inner statements will execute.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					}
				});
			break;
			case "inc2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will increment the i value.";
					typing(".introjs-tooltiptext", text, function() {
						if (result < 4) {
							result++;
						}
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "display" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<br><span id="displayResult'+ result + '" class="opacity00">Name : ' + $("#name" + result).text() + '&emsp;Price : ' 
						+ $("#price" + result).text() + '&emsp;Pages : ' + $("#pages" + result).text() + '</span>'); 
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "termination" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the termination of main() method.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				})	
			break;
			case "restart" :
				$('.introjs-nextbutton').hide();
				$('#informationDiv').css({"z-index": "0"});
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text);
					}});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
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
	
	function scrollAtOutput() {
		var container = $('.output-console-body');
		scrollTo = $('.output-console-body').find("span").last();
		container.animate({
			scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
		});
	}
	
	function characters() {
		$('.introjs-nextbutton').hide();
		$("[contenteditable=true]").on("keydown keyup", function(e) {
			$(".ct-code-b-red").remove();
			var max = $(this).attr("maxlength");
			if (($(this).text().length) > max) {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 5 characters, " 
							+ "because the array variable size is name[5].</div>");
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				} else {
				e.preventDefault();
				}
			} 
			if ($("[contenteditable=true]").text().length == 0) {
				$('.introjs-nextbutton').hide();
			} else {
				$('.introjs-nextbutton').show();
			}
			
			if (((e.which >= 60 && e.which <= 90))) {
				return true;
			} else {
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				} else {
					e.preventDefault();
				}
			}
		});
	}
	
	function numbers() {
		$('.introjs-nextbutton').hide();
		$("[contenteditable=true]").on("keydown keyup", function(e) {
			$(".ct-code-b-red").remove();
			var max = $(this).attr("maxlength");
			if (($(this).text().length) > max) {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 4 characters.</div>");
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				} else {
					e.preventDefault();
				}
			}
			if ($("[contenteditable=true]").text().length == 0) {
				$('.introjs-nextbutton').hide();
			} else {
				$('.introjs-nextbutton').show();
			}
			
			if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
				return true;
			} else {
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				}  else {
				e.preventDefault();
				}
			}
		});
	}
	
	
	function dynamicSteps(isRequired) {
		var step = 1;
		$('.introjs-nextbutton').hide();
		
		var newStep = {
			element: "#printNameStmt",
			intro : "",
			position: "right",
			
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element: "#outputDiv",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#scanName",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
	
		var newStep = {
			element: "#outputDiv",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#name" + count,
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#printPage",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#scanPage",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#pages" + count,
			tooltipClass: "hide" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#printPrice",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#scanPrice",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			intro : "",
			position: "right"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#price" + count,
			tooltipClass: "hide" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);

		var newStep = {
			element: "#inc1",
			intro : "",
			position: "right" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#memoryOfi",
			tooltipClass: "hide" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#condition1",
			intro : "",
			position: "right" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
			
	}
	
	function changeText() {
		$('.introjs-nextbutton').hide();
		var text = "As the condition fails it will terminate the loop and continue the statements below.";
		typing(".introjs-tooltiptext", text, function() {
			normalSteps();
			$('.introjs-nextbutton').show();
		});
	}
	
	function normalSteps() {
		var newStep = {
			element:"#forLoop2",
			intro : "",
			position:"right",
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element:"#intial2",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 2, newStep);
		
		var newStep = {
			element:"#memoryOfi",
			tooltipClass: 'hide'
		}
		intro.insertOption(intro._currentStep + 3, newStep);
	}
	
	function secondDynamicSteps() {
		var newStep = {
			element:"#condition2",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element:"#display",
			intro : "",
			position:"right",
		}
		intro.insertOption(intro._currentStep + 2, newStep);
		
		var newStep = {
			element:"#outputDiv",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 3, newStep);
		
		var newStep = {
			element:"#inc2",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 4, newStep);
		
		var newStep = {
			element:"#memoryOfi",
			tooltipClass: 'hide'
		}
		intro.insertOption(intro._currentStep + 5, newStep);
	}
	
	function lastSteps() {
		var newStep = {
			element:"#condition2",
			intro : "",
			position:"right",
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element:"#termination",
			intro : "",
			position:"right",
		}
		intro.insertOption(intro._currentStep + 2, newStep);
		
		var newStep = {
			element:"#restart",
			intro : "",
			position:"right",
			tooltipClass: "introjs-tooltip-min-width-custom"
		}
		intro.insertOption(intro._currentStep + 3, newStep);
	}