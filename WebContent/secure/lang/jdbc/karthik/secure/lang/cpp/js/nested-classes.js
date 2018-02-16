var introjs;
var typingInterval = 10;

var nestedClassesReadyFunction = function() {
	
	introJsFunction();
	
	
$('#description').append('<ul><li>A <g><b>nested</b></g> class is a member of its enclosing class.</li> '
						+'<li>Non-static <g><b>nested</b></g> classes <g><b>(inner classes)</b></g> have access'
						+' to other members of the enclosing class, even if they'
						+' are declared <g><b>private</b></g>.</li><li>Static <g><b>nested classes</b></g> do not have'
						+' access to other members of the enclosing class.<a class="introjs-button user-btn" onclick="clickNext()">Next&rarr;</a></li>'
						+'</ul>');

}

function clickNext() {
	introjs.nextStep();
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
			element : "#description",
			intro : "",
			tooltipClass: "hide",
			position : "bottom"
		},{
			element : "#preCode",
			intro : "",
			position : "right"
		},{
			element : "#outerClass",
			intro : "",
			position : "bottom"
		},{
			element : "#innerClass",
			intro : "",
			position : "bottom"
		},/*{
			element : "#voidSecond",
			intro : "",
			position : "bottom"
		},*/{
			element : "#errOut",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "errOut"
		},{
			element : "#error1",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		},{
			element : "#mainMthd",
			intro : "",
			position : "right"
		},{
			element : "#outerObj",
			intro : "",
			position : "bottom"
		},{
			element : "#memoryBox",
			intro: "",
			position: "bottom",
			tooltipClass: "hide",
			animateStep: "outerClass",//errInner
			animation: "repeat"
		},{
			element : "#errInner",
			intro : "",
			position : "bottom"
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "errInner"//errDisp2
		},/*{ 
			element : "#errDisp2",
			intro : "",
			position : "bottom",
		},*/{ 
			element : "#error2",
			intro : "",
			position : "bottom"//error2
		},{ 
			element : "#otDisp1",
			intro : "",
			position : "bottom",
		},{
			element : "#memoryBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "panel1"//disp2
		},{
			element : "#objInner2",
			intro : "",
			position : "bottom",
			animateStep: "objInner2"
		},{
			element : "#memoryBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "innerBox"//disp2
		},{ 
			element : "#objDisp2",
			intro : "",
			position : "bottom",
		},{
			element : "#memoryBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "subpanel"//disp2
		},{ 
			element : "#disp2",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"//printStmt
		},{ 
			element : "#printStmt",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "disp2"//twoObj
		},{ 
			element : "#twoObj",
			intro : "",
			position : "bottom",
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "twoObj"//restartBtn
		},{ 
			element : "#restartBtn",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		}
		]})
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		switch (elementId) {
				
		case "preCode":
		break;
			
		case "outerClass":
			
		break;
		
		case "memoryBox":
			
			if (animateStep == "outerClass") {
				$("#parentPanel").addClass("visibility-hidden");
				$("#varI").addClass("opacity00");
				$("#errInner").addClass("opacity00");
				/*$("#varI").fadeIn(800, function() {
					setTimeout(function() {
						$("#errInner").removeClass("opacity00");
						introjs.nextStep();
					}, 1000);
				})*/
			} else if (animateStep == "innerBox") {
				$("#childPanelOfOuter").addClass('opacity00');
				$("#childPanel").addClass('opacity00');
				
				/*$("#childPanelOfOuter").fadeIn(800, function() {
					$("#childPanel").fadeIn(800, function() {
					});
				});*/
				
			} else if (animateStep == "panel1") {
				$("#panel1").addClass('opacity00');
			} else if (animateStep == "subpanel") {
				$("#subpanel").addClass('opacity00');
			}
			
			
			/*$("#parentPanel").removeClass("visibility-hidden");
			$("#varI").addClass();*/
			/*$(".introjs-helperLayer").one("transitionend", function() {
				if (animateStep == "outerClass") {
					$("#parentPanel").removeClass("visibility-hidden");
					$("#varI").fadeIn(800, function() {
						setTimeout(function() {
							$("#errInner").removeClass("opacity00");
							introjs.nextStep();
						}, 1000);
					})
				} else if (animateStep == "innerBox") {
					$("#childPanelOfOuter").fadeIn(800, function() {
						$("#childPanel").fadeIn(800, function() {
							introjs.nextStep();
						});
					});
				} else if (animateStep == "panel1") {
					$("#panel1").fadeIn(800, function() {
						introjs.nextStep();
					});
				} else if (animateStep == "subpanel") {
					$("#subpanel").fadeIn(800, function() {
						introjs.nextStep();
					});
				}
			});*/
			
		break;
			
		case "innerClass":
			
		break;	
			
		case "voidSecond":
			
		break;
			
		case "mainMthd":
			
			/*$("#memoryBox").removeClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (animateStep == "innerObj") {
					var typingContent = 'To call the inner class methods, create the inner class object through outer class and call the methods.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$("#innerId").removeClass("opacity00");
							$('.introjs-nextbutton').show();
					});
				} else {
					$("#mainMthd").removeClass("opacity00");
					var typingContent = 'The program execution starts from the <y>main()</y>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				}
				
			});*/
			
		break;
			
		case "outerObj":
			
		break;
			
		case "errInner":
			
		break;
			
		case "errOut":
			
		break;
			
		case "error1":
			$("#iValue").addClass("zIndex");
			$("#error1").removeClass("opacity55");
			$("#comment").addClass("opacity00");
		break;
			
		case "error2":
			
		break;
			
		case "otDisp1":
			
		break;
		
		case "objInner2":
			
		break;
			
		case "objDisp2":
			
		break;
		
		case "disp2":
		case "printStmt":	
			
		break;
		
		case "twoObj":
			
		break;
		
		case "restartBtn":
			
		break;
		
		
		case "outputBox":
			introjs.refresh();
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBox").removeClass("opacity00");
				$(".output-console-body").empty();
				
				if (animateStep == "errInner") {
							
				} else if (animateStep == "errOut") {
					$("#errboxOut").remove();
				} else if (animateStep == "disp2") {
					$(".output-console-body div:nth-child(1)").remove();
				} else if (animateStep == "twoObj") {
					
				}
			});
			break;	
			
		}
	})	
		
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		switch (elementId) {
		
		case "preCode":
			$('.user-btn').remove();
			$("#preCode").removeClass("opacity00");
			$('.introjs-prevbutton').hide();
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var typingContent = 'Here we look at the sample code on <y>inner class</y>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#headers").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
				
			});
			break;
			
		case "outerClass":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#headers").removeClass("opacity00");
				var typingContent = '<ul><li><y>Outer</y> is the class which contains,</li><ul><li>one <y>private</y> data member <y>i</y>.</li>'
									+'<li>one public <y>inner</y> class or <y>nested</y> class.</li><li>one <y>public</y> member function '
									+'<y>display1()</y>.</li></ul></ul>';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".outerProperty").removeClass("opacity00");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			
		break;
		
		case "memoryBox":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
					if (animateStep == "outerClass") {
						$("#parentPanel").removeClass("visibility-hidden");
						$("#errInner, #varI").removeClass("opacity00");
						/*$("#varI").fadeIn(800, function() {
						})*/
					} else if (animateStep == "innerBox") {
						$("#childPanelOfOuter").removeClass("opacity00");
						$("#childPanel").removeClass("opacity00");
					} else if (animateStep == "panel1") {
						$("#panel1").removeClass("opacity00");
					} else if (animateStep == "subpanel") {
						$("#subpanel").removeClass("opacity00");
					}
				}
				
				NextStep();
			});
			break;
			
		case "innerClass":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#innerClass").removeClass("opacity00");
				
				var typingContent = '<ul><li><y>Inner</y> class is a <y>nested</y> class of <y>Outer</y> class and it contains,</li>'
									+'<ul><li>one <y>private</y> data member.</li><li>one <y>public</y> member function.</li></ul></ul>'
									+'<ul><li>The <y>public</y> member function of <y>nested</y> class can access only the <y>private</y> data of '
									+'<y>Inner</y> class and not the <y>private</y> data of <y>Outer</y> class.</li></ul>';
				
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				
			});
			
		break;	
			
		case "voidSecond":
			
			//$("#memoryBox").removeClass("zIndex");
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidSecond").removeClass("opacity00");
				var typingContent = 'The <y>display1()</y> is the member function of <y>outer</y> class.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
			
		case "mainMthd":
			$("#memoryBox").removeClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (animateStep == "innerObj") {
					var typingContent = 'To call the inner class methods, create the inner class object through outer class and call the methods.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$("#innerId").removeClass("opacity00");
							$('.introjs-nextbutton').show();
					});
				} else {
					$("#mainMthd").removeClass("opacity00");
					var typingContent = 'The program execution starts from the <y>main()</y>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				}
			});
		break;
			
		case "outerObj":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outerObj").removeClass('opacity00');
				var typingContent = '<y>out</y> is an object of class <y>Outer</y>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
			
		case "errInner":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here creating the <y>Inner</y> class <y>obj</y>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#errInner").removeClass("opacity00");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});//errDisp2
			break;
			
		/*case "errDisp2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Calling the <y>display2()</y> from the <y>inner</y> class.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//$("#outerId").removeClass("opacity00");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});//errDisp2
			break;*/	
			
		case "errOut":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				if (introjs._direction == "forward") {
					$("#comment").addClass('opacity00');
					var typingContent = "The member function <y>display2()</y> can access only the <y>private</y> data of <y>Inner</y>" 
						+" class so it gives an <y>error</y> message.";
					
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$("#errOut").removeClass("opacity00");
						$("#iValue").addClass("zIndex");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					
				} else {
					introjs.previousStep();
				}
				
			});
		break;
			
		case "error1":
			
			
			$("#memoryBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (introjs._direction == "forward") {
					$(".introjs-tooltip").removeClass('hide');
					var typingContent = "Since it shows the <y>error</y> so we <y>comment</y> the line.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".output-console-body").empty();
						$("b").eq(0).removeClass("opacity00");
						$("#iValue").removeClass("zIndex");
						$("#error1").addClass("opacity55");
						$("#comment").removeClass("opacity00");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					
					introjs.previousStep();
				}
			});
			
			break;
			
		case "error2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "<y>obj</y> is the object of <y>Inner</y> class but it gives an <y>error</y> message "
									+"because <y>Inner</y> class is visible only with in <y>Outer</y> class.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#error2").addClass("opacity55");
					//$("#otDisp1").removeClass("opacity00");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
			
		case "otDisp1":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#otDisp1").removeClass("opacity00");
				var typingContent = "<y>display1()</y> is a <y>public</y> member function of the class "
									+"<y>Outer</y>.so it can be called by using the object <y>out</y> of <y>Outer</y> class.";
				
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#error2").addClass("opacity55");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				
			});
		break;
		
		case "objInner2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "<y>obj</y> is an object of <y>Inner</y> class."
									+" It is created in <y>display1()</y>,"
									+"it can be accessable only with in that function.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
			
		case "objDisp2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "We are calling the <y>display2()</y> of <y>inner</y> class.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;//disp2
		
		case "disp2":
		case "printStmt":	
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 1500);
			});
		break;//twoObj
		
		case "twoObj":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "The another way of creating the <y>inner</y> class"
									+" <y>object</y> and calling its methods.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		
		case "restartBtn":
			$("#restartBtn").removeClass("visibility-hidden");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").click(function() {
					location.reload(true);
				})
			});
		break;
		
		
		case "outputBox":
			introjs.refresh();
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBox").removeClass("opacity00");
				$(".output-console-body").empty();
				if (animateStep == "errInner") {
					
					var typingContent = "<div id='exception'>"
										+"<div><span>Outer.cpp</span>: In function ‘int main()’:</div>"
										+"<div><span>Outer.cpp</span>: <r>error:</r> ‘Inner’ was not declared in this scope</div>"
										+"<div><span>Outer.cpp</span>: <r>error:</r> expected ‘;’ before ‘in’</div>"
										+"</div>"
									typing('.output-console-body', typingContent, typingInterval, 'white', function() {
										setTimeout(function() {
											$("#errDisp2").removeClass("opacity00")
											introjs.nextStep();
										}, 1500);
									});
					
				} /*else if (animateStep == "errDisp2") {
				
				var typingContent = "<div id='dispExcp'>"
									+"<div><span><span>Outer.cpp</span>: <r>error:</r> ‘in’ was not declared in this scope</span></div>"
									+"<div><span>in.display2();</span></div>"
									+"</div>";
									
								typing('.output-console-body', typingContent, typingInterval, 'white', function() {
									setTimeout(function() {
										introjs.nextStep();
									}, 1500);
								});	
				
				}*/ else if (animateStep == "errOut") {
					
					if (introjs._direction == "forward") {
					var typingContent = "<div id='errboxOut'>"
											+"<div><span>Outer.cpp</span>: <span>In member function ‘void Outer::Inner::display2()’:</span></div>"
											+"<div><span>Outer.cpp</span>: <r>error:</r> invalid use of non-static data member ‘Outer::i’ int i;"
											+"<div><span>Outer.cpp</span>: <r>error:</r> from this location cout << \"i = \" << i << endl;" 
										+"</div>"
										typing('.output-console-body', typingContent, typingInterval, 'white', function() {
											setTimeout(function() {
												introjs.nextStep();
											}, 1500);
										});	
					} else {
						introjs.previousStep();
					}
					
				} else if (animateStep == "disp2") {
					$(".output-console-body").append("<div><div>CodeTantra Inner Class</div><div>1</div></div>");
					setTimeout(function() {
						$("#twoObj").removeClass("opacity00");
						introjs.nextStep();
					}, 1500);
				} else if (animateStep == "twoObj") {
					$(".output-console-body").append("<div><div>CodeTantra Inner Class</div><div>1</div></div>");
					$(".output-console-body").append("<div><div>CodeTantra Inner Class</div><div>1</div></div>");
					setTimeout(function() {
						introjs.nextStep();
					}, 1500);
				}
			});
		
			break;	
			
		}
	})
	introjs.start();
}

	
	function NextStep() {
		
		if (introjs._direction == "backward") {
			setTimeout(function() {
				introjs.previousStep();
			}, 1000)
		} else {
			setTimeout(function() {
				introjs.nextStep();
			}, 1000);
		}
		
	}

	function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval": typingInterval,
			"cursor_color": cursorColor
		}, function() {
			$(typingId).removeClass('typingCursor');
			if (typeof typingCallbackFunction === "function") {
				typingCallbackFunction();
				introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
			}
		});
	}
