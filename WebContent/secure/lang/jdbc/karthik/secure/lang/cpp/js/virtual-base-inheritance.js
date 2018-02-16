
var typingSpeed = 0.001;
var flag1 = true;

var virtualBaseInheritanceReady = function() {
	introJsFunction();
	
	$(".introjs-prevbutton").hide();
	var text = "Here we will learn about how a <y>virtual</y> keyword works.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-nextbutton").show();
	});
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
		},/*{
			element : "#pre",
			intro : "",
			position : "right",
		},*/{
			element : "#gpCls",
			intro : "",
			position : "right",
		},{
			element : "#Height",
			intro : "",
			position : "left",
			tooltipClass: "hide",
			visits : "gpCls"
			/*visits : "output"*/	
		},{
			element : "#p1Cls",
			intro : "",
			position : "top",
			tooltipClass: "hide"
		},{
			element : "#Height",
			intro : "",
			position : "left",
			tooltipClass: "hide",
			visits: "p1Cls"	
			/*tooltipClass: "hide",*/
			/*visits : "output"*/	
		},{
			element : "#p2Cls",
			intro : "",
			position : "top",
			tooltipClass: "hide"
		},{
			element : "#Height",
			intro : "",
			position : "left",
			tooltipClass: "hide",
			visits: "p2Cls"
			/*tooltipClass: "hide",*/
			/*visits : "output"*/	
		},{
			element : "#childCls",//pre
			intro : "",
			position : "top",
			action : "intro",
			tooltipClass: "hide"
		},{
			element : "#Height",
			intro : "",
			position : "left",
			tooltipClass: "hide",
			visits: "childCls"
		}/*,{
			element : "#animate",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		}*/,{
			element : "#pre",
			intro : "",
			position : "right",
		},{
			element : "#Height",
			intro : "",
			position : "left",
			tooltipClass: "hide",
			visits: "blink"
			/*visits : "output"*/	
		}/*,{
			element : "#mainMthd",
			intro : "",
			position : "right",
		}*/
		]});
	
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		introjs.refresh();
		
		switch (elementId) {
		
		case "gpCls":
		case "p1Cls" :
		case "p2Cls":
		case "mainMthd":	
			
			if (elementId == "gpCls") {
				$("#flow4, #animate").addClass("opacity00");
				$("#gp").addClass("opacity00");
				userNext = 1;
			} else if (elementId == "p1Cls") {
				userNext = 2;
				$("#p1").addClass("opacity00");
				$("#two").removeAttr("style");
				$("svg line").eq(0).attr("y2","23%");
				$("svg line").eq(1).attr("x2","49%");
				$("svg line").eq(2).attr("y2","29%");
				$("svg line").eq(2).css("marker-end", "url('')");
			} else if (elementId == "p2Cls") {
				userNext = 3;
				$("#p2").addClass("opacity00");
				$("#three").removeAttr("style");
				$("svg line").eq(3).attr("x2","49%");
				$("svg line").eq(4).attr("y2","29%");
				$("svg line").eq(4).css("marker-end", "url('')");
			} else if (elementId == "mainMthd") {
				$(".introjs-prevbutton").hide();
				
			}
			
			
			/*$(".introjs-helperLayer").one("transitionend", function() {
				var text = "";
				if (elementId == "gpCls") {
					text = "Here class <y>GrantParent</y> contains a member variable <y>gpAge</y>,"
							+" it is the base class or parent class to <y>parent1, parent2</y> classes.";
				} else if (elementId == "p1Cls") {
					text = "Here the class <y>Parent1</y> is the base class or parent class to a class <y>child</y>,"
					 	+" which contains only one member variable <y>p1Age</y>.";
				} else if (elementId == "p2Cls") {
					text = "Here the class <y>Parent2</y> is also the base class or parent class to a class <y>child</y>,"
					 	+" which contains only one member variable <y>p2Age</y>.";
				} else if (elementId == "mainMthd") {
					text = "The execution starts from <y>main()</y>.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});*/
			
		break;
		
		case "Height":
			
			
			if (visit == "gpCls") {
				$("#p1Cls, #gp").addClass("opacity00");
				userNext = 1;
			} else if (visit === "p1Cls") {
				userNext = 2;
				$("#p1, #p2Cls").addClass("opacity00");
				$("#two").removeAttr("style");
				$("svg line").eq(0).attr("y2","23%");
				$("svg line").eq(1).attr("x2","49%");
				$("svg line").eq(2).attr("y2","29%");
				$("svg line").eq(2).css("marker-end" , "url('')");
			} else if (visit == "p2Cls") {
				userNext = 3;
				$("#p2, #childCls").addClass("opacity00");
				$("#three").removeAttr("style");
				$("svg line").eq(3).attr("x2","49%");
				$("svg line").eq(4).attr("y2","29%");
				$("svg line").eq(4).css("marker-end", "url('')");
			} else if (visit == "childCls") {
				userNext = 4;
				$("#child").addClass("opacity00");
				$("#four, #five").removeAttr("style");
				$("svg line").eq(5).attr("y2","59%");
				$("svg line").eq(6).attr("x2","15%");
				$("svg line").eq(6).css("marker-end", "url('')");
				
				$("svg line").eq(7).attr("y2","59%");
				$("svg line").eq(8).attr("x2","85%");
				$("svg line").eq(8).css("marker-end", "url('')");
			} else if (visit == "blink") {
				userNext = 5;
				$(".introjs-tooltiptext").html('');
			} else if (animateStep == "ext") {
				
				userNext = 6;
				$(".displayNone").removeAttr('style').removeClass("blinking-orange");
				
			} else if (animateStep == "reanimate") {
				$("#two, #three, #four, #five").removeAttr("style");
			}
			
			
		break;
		
		
		case "childCls":
			
				/*$(".displayNone").removeAttr('style');
				$(".displayNone").removeClass('blinking-orange');*/
			
			userNext = 4;
			$("#child").addClass("opacity00");
			$("#four, #five").removeAttr("style");
			$("svg line").eq(5).attr("y2","59%");
			$("svg line").eq(6).attr("x2","15%");
			$("svg line").eq(6).css("marker-end", "url('')");
			
			$("svg line").eq(7).attr("y2","59%");
			$("svg line").eq(8).attr("x2","85%");
			$("svg line").eq(8).css("marker-end", "url('')");
			
			
				
			/*$(".introjs-helperLayer").one("transitionend", function() {
				var text = "";
					if (animateStep == "intro") {
						text = "Here the class <y>Parent2</y> is also the base class or parent class to a class <y>child</y>,"
								+" which contains only one member variable <y>p2Age</y>.";
					} else if (animateStep == "erroExp") {
						text = "Since the child class is trying to access the variable <y>gpAge</y> of <y>GrandParent</y> class,"
								+"<ul><li>It will get the <y>gpAge</y> variable through any one of its parent class of <y>Parent1 or Parent2</y>.</li>"
								+"<li>But there will be a <y>ambiguous</y> to a class <y>child</y> through which parent class it has to access the variable <y>gpAge</y>.</li>"
								+"<li>To resolve this <y>ambiguous</y> we add a key called <y>virtual</y>.</li></ul>";
						insertionIntro("childParent", "", "", "hide", "error");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("childParent", "", "top", "", "error"));
					}
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
			});*/
			
		break;	
		
		case "childParent":
			
			$(".displayNone").removeAttr('style');
			$(".displayNone").removeClass('blinking-orange');
			$("#obj").addClass("opacity00");
			
			/*$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				$(".displayNone").fadeIn(800, function() {
					introjs.refresh();
					$(".displayNone").addClass("blinking-orange");
					var text = "Now the code will compile successfully without any <y>errors</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("obj", "", "right"));
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
			})*/
			
		break;
		
		case "obj":
			
			//$("#obj").addClass("opacity00");
			$("#callRead").addClass("opacity00");
			
			/*$(".displayNone").removeClass("blinking-orange");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#" + elementId).removeClass("opacity00");
				var text = "Here creating the <y>object</y> for the child class.";//callRead
				typing(".introjs-tooltiptext", text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("callRead", "", "top"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("readMthd", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 3, insertionIntro("textPrint", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 4, insertionIntro("outputBox", "", "top", "hide","printText"));
					introjs.insertOption(introjs._currentStep + 5, insertionIntro("textRead", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 6, insertionIntro("outputBox", "", "top", "","textRead"));
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
			})*/
			
		break;	
		
		case "callRead":
			
			$("#callWrite").addClass("opacity00");
			
		break;	
			
		case "callWrite":
			/*$(".introjs-helperLayer").one("transitionend", function() {
				$("#callWrite").removeClass("opacity00");
				var text = "Here calling the <y>printAge()</y> by child class obj.";
				typing(".introjs-tooltiptext", text, function() {//printMthd
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("printMthd", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("result", "", "right", "hide"));
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
			})*/
		break;	
			
		case "readMthd":
		case "textPrint":
		case "textRead":
		case "printMthd":
		/*case "result":*/	
			
			if (elementId !== "printMthd") {
				$("#inputChar1").text('').remove();
			}
			
		break;	
			
		case "result":
			
		/*$(".introjs-helperLayer").one("transitionend", function() {
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide","display"));
			introjs.insertOption(introjs._currentStep + 2, insertionIntro("restart", "", "right", "",""));
			setTimeout(function() {
				introjs.nextStep();
			},800);
		})*/
			
		break;
		
		case "restart":
			
			/*$("#restart").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "click to <y>restart</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").click(function() {
						location.reload(true);
					})
				})
			});*/
			
		break;	
		
		case "pre":
			
			/*if (introjs._currentStep == 1) {
				$("#animate, #flow4").addClass("opacity00");
			}*/
			
			userNext = 5;
			$(".blinking-orange").removeClass("blinking-orange");
			
			/*$("#pre").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (flag1) {
					var text = "This is the sample program of <y>virtual</y> key <y>inheritance</y>.";//animate
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "right", "hide", ""));
					flag1 = false;
				} else {
					var text = "If we compile the entire code it will not compile <y>successfully</y>.";
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide", "error"));
				}
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();//outputBox
				});
			});*/
			
		break;
		
		case "animate":
			$("#animate, #flow4").addClass("opacity00");
			
			
			/*$("#animate").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flow4").removeClass("opacity00");
				setTimeout(function(){
					introjs.nextStep();
				}, 1100);
			})*/
		break;	
		
		case "outputBox":
			
			if (animateStep == "error") {
				userNext = 6;
				$(".output-console-body").empty();
			} else if(animateStep == "printText") {
				$(".output-console-body").empty();
			}
			
			
			
			/*$("#outputBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (animateStep == "error") {
					$(".output-console-body").html("<g>virtual.cpp</g>:In member function 'void child::readAge()':" 
										+"<br><g>virtual.cpp</g>: <r>error</r>: reference to 'gpAge' is ambiguous"
										+"<br>&emsp;&emsp;cin >> <r>gpAge</r> >> p1Age >> p2Age;"
										+"<br><g>virtual.cpp</g>: In member function 'void child::writeAge()':"
										+"<br><g>virtual.cpp</g>: <r>error</r>: reference to 'gpAge' is ambiguous"
										+"<br>&emsp;&emsp;cout << <r>gpAge</r> << p1Age << p2Age;");
					introjs.insertOption(introjs._currentStep + 1,insertionIntro("childCls", "", "top", "", "erroExp"));
				} else if (animateStep == "printText") {
					$(".output-console-body").html("<div><span>Enter gpAge, p1Age, p2Age :</span></div>");
				} else if (animateStep == "textRead") {
					$(".output-console-body div").append("<span  id='inputChar1' contenteditable='true' maxlength='2' class='input-field input-char'></span>");
					var text = "Enter <y>three</y> integer values separated with <y>space</y>.";
					typing(".introjs-tooltiptext", text, function() {//callWrite
						charAtEnd("inputChar1");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("callWrite", "", "right"));
						setTimeout(function() {
							checking("#inputChar1");
						}, 400);
					})
				} else if (animateStep == "display") {
					$(".output-console-body").append("<div>The values are : "+ arr[0]+"&nbsp;"+ arr[1] +"&nbsp;"+ arr[2]+"</div>");
				}
				
				if (animateStep !== "textRead") {
					setTimeout(function() {
						introjs.nextStep();
					}, 800);
				}
			})*/
		break;
		}
	})
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0 && targetElement.id !== "mainMthd") {
				
				$('.introjs-prevbutton').show();
				
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		introjs.refresh();
		
		switch (elementId) {
		
		case "gpCls":
		case "p1Cls" :
		case "p2Cls":
		case "mainMthd":	
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "";
				$("#" + elementId).removeClass("opacity00");
				if (elementId == "gpCls") {
					$("#pre").removeClass("opacity00");
					text = "Here a class <y>GrandParent</y> is declared with one public data member <y>gpAge</y>.";
				} else if (elementId == "p1Cls") {
					text = "<ul><li>Here we have a class <y>Parent1</y> which is publically inherited from <y>GrandParent</y> class.</i>"
							+"<li>The class <y>Parent1</y> contains one public data member <y>p1Age</y>.</li></ul>";
					
				} else if (elementId == "p2Cls") {
					text = "<ul><li>Let us consider another class <y>Parent2</y> which is also publically inherited from <y>GrandParent</y> class.</li>"
							+"<li>The class <y>Parent2</y> contains one public data member <y>p2Age</y>.</li></ul>";
				} else if (elementId == "mainMthd") {
					$(".displayNone").removeClass("blinking-orange");
					$(".blinking-orange").removeClass("blinking-orange");
					text = "The execution starts from <y>main()</y>.";
				}
				
				typing(".introjs-tooltiptext", text, function() {
					if (elementId !== "mainMthd") {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					} else {
						$(".introjs-prevbutton").hide();
						$(".introjs-nextbutton").show();
					}
				});
			});
		break;
		
		
		case "childCls":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#" + elementId).removeClass("opacity00");
				var text = "";
					if (animateStep == "intro") {
						
						text = "<ul><li>Now a class <y>child</y> is defined, which is publically inherited "
								+"from the classes <y>Parent1</y> and <y>Parent2</y>.</li><li>The class <y>child</y> consists of two member functions"
								+" <y>readAge()</y> and <y>printAge()</y>.</li></ul>";
						
					} else if (animateStep == "erroExp") {
						text = "<ul><li>Since the <y>child</y> class will get the variable <y>gpAge</y> through the classes <y>Parent1</y> and <y>Parent2.</li>"
								+"<li>But there will be a <y>ambiguous</y> to a class <y>child</y> through which parent class it has to access the variable <y>gpAge</y>.</li>"
								+"<li>To resolve this <y>ambiguous</y> we add a key called <y>virtual</y>.</li></ul>";
						
						
						/*insertionIntro("childParent", "", "", "hide", "error");*/
						/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("childParent", "", "top", "hide", "error"));*/
						
						
					}
					
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
			});
			
		break;	
		
		
		case "childParent":
			
			console.log("In the childParent...");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#four, #five").removeClass("blinking-orange");
				introjs.refresh();
				$(".displayNone").fadeIn(800, function() {
					introjs.refresh();
					$(".displayNone").addClass("blinking-orange");
					$(".introjs-tooltip").removeClass("hide");
					var text = "The keyword <y>virtual</y> is used for the <y>GrandParent</y> class to resolve the <y>ambiguity</y> occured.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("Height", "", "left", "hide", "reanimate"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("mainMthd", "", "right"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("obj", "", "right"));
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
				
			})
			
		break;
			
			
		case "obj":
			$(".displayNone").removeClass("blinking-orange");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#" + elementId).removeClass("opacity00");
				var text = "obj is an object of the <y>Child</y> class.";//callRead
				typing(".introjs-tooltiptext", text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("callRead", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("readMthd", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 3, insertionIntro("textPrint", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 4, insertionIntro("outputBox", "", "top", "hide","printText"));
					introjs.insertOption(introjs._currentStep + 5, insertionIntro("textRead", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 6, insertionIntro("outputBox", "", "top", "hide", "textRead"));
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
			})
		break;	
		
			
		case "callRead":
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#callRead").removeClass("opacity00");
				var text = "The member function <y>readAge()</y> is invoked by the object <y>obj</y>.";
				typing(".introjs-tooltiptext", text, function() {
					
					/* setTimeout(function() {
						introjs.nextStep();
					},600); */
					
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			})
		break;	
			
		case "callWrite":
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#callWrite").removeClass("opacity00");
				var text = "The member function <y>readAge()</y> is invoked by the object <y>obj</y>.";
				typing(".introjs-tooltiptext", text, function() {//printMthd
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("printMthd", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("result", "", "right", "hide"));
					$(".introjs-nextbutton").show();
				})
			})
		break;	
			
		case "readMthd":
		case "textPrint":
		case "textRead":
		case "printMthd":
		/*case "result":*/	
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (elementId !== "printMthd") {
					$("#inputChar1").text('');
				}
				stepNext();
				
			})
		break;	
			
		case "result":	
		$(".introjs-helperLayer").one("transitionend", function() {
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide","display"));
			introjs.insertOption(introjs._currentStep + 2, insertionIntro("restart", "", "right", "",""));
			setTimeout(function() {
				introjs.nextStep();
			},800);
		})
		break;
		
		case "restart":
			$("#restart").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "click to <y>restart</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").click(function() {
						location.reload(true);
					})
				})
			});
		break;	
		
		case "pre":
			$("#pre").removeClass("opacity00");
			$(".blinking-orange").removeClass("blinking-orange");
			$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>At the time of compilation this code will give an <r>Error</r>.</li>"
								+"<li>Let us consider the blue print of this program.</li></ul>";
					/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide", "error"));*/
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();//outputBox
				});
			});
		break;
		
		case "animate":
			$("#animate").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flow4").removeClass("opacity00");
				/*setTimeout(function(){
					introjs.nextStep();
				}, 1100);*/
				
				if (visit == "output") {
					//introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide", "error"));
				}
				
				/*stepNext();*/
			})
		break;	
			
		case "Height":
			$("#animate").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#flow4").removeClass("opacity00");
					flowSteps();
			})
		break;
		
		case "outputBox":
			$("#outputBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animate").removeClass("opacity00");
				if (introjs._direction == "forward") {
					if (animateStep == "error") {
						
						$(".output-console-body").html("<g>virtual.cpp</g>:In member function 'void child::readAge()':" 
								+"<br><g>virtual.cpp</g>: <r>error</r>: reference to 'gpAge' is ambiguous"
								+"<br>&emsp;&emsp;cin >> <r>gpAge</r> >> p1Age >> p2Age;"
								+"<br><g>virtual.cpp</g>: In member function 'void child::writeAge()':"
								+"<br><g>virtual.cpp</g>: <r>error</r>: reference to 'gpAge' is ambiguous"
								+"<br>&emsp;&emsp;cout << <r>gpAge</r> << p1Age << p2Age;");
						if (introjs._introItems[introjs._currentStep]["visited"] == undefined) {
							introjs._introItems[introjs._currentStep]["visited"] = "true";
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("Height", "", "left", "hide", "ext"));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("childParent", "", "top", "hide", "error"));
							
						}
					} else if (animateStep == "printText") {
						$(".output-console-body").html("<div><span>Enter gpAge, p1Age, p2Age :</span></div>");
					} else if (animateStep == "textRead") {
						$(".introjs-tooltip").removeClass("hide");
						$(".output-console-body div").append("<span  id='inputChar1' contenteditable='true' maxlength='2' class='input-field input-char'></span>");
						var text = "Enter <y>three</y> integer values separated with <y>space</y>.";
						typing(".introjs-tooltiptext", text, function() {//callWrite
							charAtEnd("inputChar1");
							
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("callWrite", "", "right", "hide"));
							
							setTimeout(function() {
								checking("#inputChar1");
							}, 400);
							
						})
					} else if (animateStep == "display") {
						$(".output-console-body").append("<div>The values are : "+ arr[0]+"&nbsp;"+ arr[1] +"&nbsp;"+ arr[2]+"</div>");
					}
					
					if (animateStep !== "textRead") {
						setTimeout(function() {
							introjs.nextStep();
						}, 800);
					}
				} else {
					stepNext();
				}
			})
		break;
		}
	})
	introjs.start();
}
var arr; 
function checking(selector) {
	
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 3;
		maxLengthOfInput = 1;
		
		
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
	});
	
	
	
	
	$(selector).on("keyup", function(e) {
		$(".user-btn").remove();
		$('.error-text').remove();
		maxNumberOfInputs = 3;
		maxLengthOfInput = 1;
		if ($(this).text() == "") {
			$('.user-btn').remove();
			$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with space.</span>");
		}
		var arr1 = $(this).text().split(" ");
		var count = 0;
		arr = [];
		
		$.each(arr1, function(idx, val) {
			if (val > 99 || val < 0) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 99 .</span>");
				$('.user-btn').remove();
				
			} else if (val.trim().length > 0) {
				arr.push(val);
				count++;
			}
		});
		if (count == 3) {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
	});
}


function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function(){
			introjs.nextStep();
		}, 1100);
	} else {
		setTimeout(function(){
			introjs.previousStep();
		}, 1100);
	}
}


function fromEffectAnimation(from, to, callBackFunction) {
	var l = $(from).offset();
	$(to).offset({top: l.top, left: l.left});
	//$(to).removeClass("opacity00");
	TweenMax.to(to, 1, {opacity:1, top:"0px", left:"0px", onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}})
}

var userNext = 1;
function flowSteps() {
	$(".introjs-tooltip").addClass("hide");
	$(".user-btn").remove();
	var text;
	$(".introjs-tooltip").removeClass("hide");
	 if (userNext == 1) {
		 text = "The <y>GrandParent</y> class contains one public data member <y>gpAge</y>.";
		 $("#gp").removeClass("opacity00");
		 typing('.introjs-tooltiptext', text, function() {//callWrite
			// $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='flowSteps();'>Next &#8594;</a>")
			 $(".introjs-nextbutton, .introjs-prevbutton").show();
			 userNext++;
		});
	 } else if (userNext == 2) {
		 text = "<ul><li>The <y>Parent1</y> class contains one public data members <y>p1Age</y>.</li>"
			 	+"<li>In the class <y>Patent1 gpAge</y> is also available because <y>Parent1</y> is inherited from <y>GrandParent</y>.</li></ul>";
		 $("#p1").removeClass("opacity00");
		 typing('.introjs-tooltiptext', text, function() {//callWrite
			 fromEffectAnimation("#one", "#two", function() {
				 $("svg line").eq(0).css("marker-end" , "url('#flow4Marker')");
					TweenMax.to($("svg line").eq(0), 1, {attr : {y2 : "29%"}, onComplete: function() {
						$("svg line").eq(0).css("marker-end" , "url('')");
						$("svg line").eq(1).css("marker-end" , "url('#flow4Marker')");
						TweenMax.to($("svg line").eq(1), 1, {attr : {x2 : "15%"}, onComplete: function() {
							$("svg line").eq(1).css("marker-end" , "url('')");
							$("svg line").eq(2).css("marker-end" , "url('#flow4Marker')");
							TweenMax.to($("svg line").eq(2), 1, {attr : {y2 : "34%"}, onComplete: function() {
								//$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='flowSteps();'>Next &#8594;</a>")
								$(".introjs-nextbutton, .introjs-prevbutton").show();
								 userNext++;
							}})
							
						}})
					}})
			 })
		});
	 } else if (userNext == 3) {
		 text = "<ul><li>The <y>Parent2</y> class contains one public data members <y>p2Age</y>.</li>"
			 	+"<li>In the class <y>Patent2 gpAge</y> is also available because <y>Parent2</y> is inherited from <y>GrandParent</y>.</li></ul>";
		 $("#p2").removeClass("opacity00");
		 typing('.introjs-tooltiptext', text, function() {//callWrite
			 fromEffectAnimation("#one", "#three", function() {
				$("svg line").eq(3).css("marker-end" , "url('#flow4Marker')");
					TweenMax.to($("svg line").eq(3), 1, {attr : {x2 : "85%"}, onComplete: function() {
						$("svg line").eq(3).css("marker-end" , "url('')");
						$("svg line").eq(4).css("marker-end" , "url('#flow4Marker')");
						TweenMax.to($("svg line").eq(4), 1, {attr : {y2 : "34%"}, onComplete: function() {
							//$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='flowSteps();'>Next &#8594;</a>")
							$(".introjs-nextbutton, .introjs-prevbutton").show();
							userNext++;
						}})
					}})
				})
		 })
	 } else if (userNext == 4) {
		 text = "<ul><li>The class <y>Child</y> is inherited from <y>Parent1</y> and <y>Parent2</y>.so the public members available at "
			 	+"<y>Parent1</y> and <y>Parent2</y> are also accessable at <y>Child</y> class.</li></ul>"
			 	$("#child").removeClass("opacity00");
		 typing('.introjs-tooltiptext', text, function() {//callWrite
			fromEffectAnimation("#two", "#four", function() {
				$("svg line").eq(5).css("marker-end" , "url('#flow4Marker')");
				TweenMax.to($("svg line").eq(5), 1, {attr : {y2 : "83%"}, onComplete: function() {
					$("svg line").eq(5).css("marker-end" , "url('')");
					$("svg line").eq(6).css("marker-end" , "url('#flow4Marker')");
					TweenMax.to($("svg line").eq(6), 1, {attr : {x2 : "34%"}, onComplete: function() {
						fromEffectAnimation("#three", "#five", function() {
							$("svg line").eq(7).css("marker-end" , "url('#flow4Marker')");
							TweenMax.to($("svg line").eq(7), 1, {attr : {y2 : "83%"}, onComplete: function() {
								$("svg line").eq(7).css("marker-end" , "url('')");
								$("svg line").eq(8).css("marker-end" , "url('#flow4Marker')");
								TweenMax.to($("svg line").eq(8), 1, {attr : {x2 : "66%"}, onComplete: function() {
									//$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='flowSteps();'>Next &#8594;</a>")
									$(".introjs-nextbutton, .introjs-prevbutton").show();
									userNext++;
								}})
							}})
						})
					}})
				}})
			})
		 })	
	 } else if (userNext == 5) {
		 text = "<ul><li>Here there is an <r>ambiguity</r> where the member <y>gpAge</y> is available to <y>child</y> class from "
			 	+"<y>Parent1</y>, <y>Parent2</y>.</li><li>The object of <y>child</y> class has no idea how to access the member "
			 	+"<y>gpAge</y>.so it gives an <y>error</y> message.</li></ul>";
		 typing('.introjs-tooltiptext', text, function() {//callWrite
			 $("#four, #five").addClass("blinking-orange");
			 userNext++;
			 $(".introjs-nextbutton, .introjs-prevbutton").show();
			 if (introjs._introItems[introjs._currentStep]["visited"] == undefined) {
					introjs._introItems[introjs._currentStep]["visited"] = "true";
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide", "error"));
			 }	
		 })
	 } else if (userNext == 6) {

		 $(".introjs-tooltiptext").html('');
		 
		text = "<ul><li>Here there is an <r>ambiguity</r> where the member <y>gpAge</y> is available to <y>child</y> class from "
			 	+"<y>Parent1</y>, <y>Parent2</y>.</li><li>The object of <y>child</y> class has no idea how to access the member "
				+"<y>gpAge</y>.so it gives an <y>error</y> message.</li><li id='text1'></li></ul>";
		$(".introjs-tooltiptext").append(text);
		var text1 = "The solution to this <y>error</y> is make the <y>base</y> class as <y>virtual</y>."
		typing('#text1', text1, function() { //callWrite
			 userNext++;
			 $(".introjs-nextbutton, .introjs-prevbutton").show();
		})
		 
	 } else if (userNext == 7) {
		 $(".blinking-orange").removeClass("blinking-orange");
		text = "<ul><li>When <y>Parent1</y> and <y>Parent2</y> are <y>virtually</y> inherited from "
				+"<y>GrandParent</y>, only one copy of the data member is available at <y>child</y> class.</li><span id='lastStep'></span></ul>";
		 typing('.introjs-tooltiptext', text, function() {//callWrite
			 userNext++;
			 $("#two, #three, #four, #five").removeAttr("style");
			 $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='flowSteps();'>Next &#8594;</a>")
		 })
	 } else {
		 $("#last").html("<div class='displayInline'><div class='gpAge displayInline opacity00' id='four'><b>gpAge</b></div></div>")
		 fromEffectAnimation("#one", "#two", function() {
			 fromEffectAnimation("#one", "#three", function() {
				 fromEffectAnimation("#two", "#four", function() {
					 text = "<li>Since the <y>child</y> class inherits the <y>Parent1</y> and <y>Parent2</y>, it gives more priority to "
						 	+"<y>Parent1</y> then with <y>Parent2</y> to access the data members.</li>";
					 typing('#lastStep', text, function() {
						 $("#supP1").addClass("blinking-orange");
						$(".introjs-nextbutton").show();
					 })
				 })
			 })
		 })
	 }
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}
