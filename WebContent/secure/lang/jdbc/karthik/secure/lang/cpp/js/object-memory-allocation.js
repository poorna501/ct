var introjs;
var typingInterval = 10;

var objectMemoryAllocationReady = function() {
	introJsFunction();
	var typingContent = 'Here we will learn about how the <y>memory</y> is allocated to objects.';
	typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
		$('.introjs-nextbutton').show();
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
			position : "right"
		},{
			element : "#pre",
			intro : "",
			position : "right"
		},{
			element : "#classDecl",
			intro : "",
			position : "right"
		},{
			element : "#privateVariable",
			intro : "",
			position : "right"
		},{
			element : "#putData",
			intro : "",
			position : "right"
		},{
			element : "#getData",
			intro : "",
			position : "right"
		},{
			element : "#mainMthd",
			intro : "",
			position : "right"
		},{
			element : "#objDec",
			intro : "",
			position : "right"//
		},{
			element : "#objMemory",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		},{
			element : "#putIn1",
			intro : "",
			position : "right"
		},/*{
			element : "#fullStack",
			intro : "",
			position : "bottom",
			animateStep: "putData1",
			tooltipClass: "hide"
		},{
			element : "#s1",
			intro : "",
			position : "bottom"
		},*/{
			element : "#putIn2",
			intro : "",
			position : "right"
		},/*{
			element : "#s2",
			intro : "",
			position : "bottom"
		},*/{
			element : "#getIn1",
			intro : "",
			position : "right"
		},/*{
			element : "#memoGetData",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},*/{
			element : "#outputBox",
			intro : "",
			position : "right",
			tooltipClass : "hide",
			animateStep : "getData1"
		},{
			element : "#getIn2",
			intro : "",
			position : "right",
			animateStep : "getIn2"
		},{
			element : "#outputBox",//restartBtn
			intro : "",
			position : "right",
			tooltipClass : "hide",
			animateStep : "getData2"
		},{
			element : "#restartBtn",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}
		]});
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();	
	var elementId = targetElement.id;
	var animateStep = introjs._introItems[introjs._currentStep].animateStep;
	switch (elementId) {
	case "preCode":
		
	break;
		
	case "pre":
		
	break;
		
	case "classDecl":
		
	break;
		
	case "privateVariable":
		
	break;
		
	case "putData":
		
	break;
		
	case "getData":
		
	break;
	
	case "mainMthd":
	
	break;
	
	case "objDec":
		$('.objMemory').addClass('opacity00');
	break;
		
	case "objMemory":
		$('.objMemory').addClass('opacity00');
	break;	
	
	case "putIn1":
		
	break;
		
	case "fullStack":
		
	break;
	
	case "s1":
		
	break;
		
	case "putIn2":
		
	break;
		
	case "s2":
		
	break;
		
	case "getIn1":
	case "getIn2":
			
	break;
	
	case "memoGetData":
		
		break;
		
	case "outputBox":
		if (animateStep == "getData1") {
				
			} else {
			
			}
			
		
		break;
		
	case "restartBtn":
		
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
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'Let us learn <span class="ct-code-b-yellow">Pointers with Two Dimensional Array</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "pre":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pre").removeClass("opacity00");
				var typingContent = "This is the sample program for memory allocation to <y>objects</y>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "classDecl":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here a class is declared with the name <y>Item</y>, which consist of two data members"
									+" <y>itemNo</y>, <y>price</y> and two member functions <y>setData()</y>, <y>display()</y>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
		break;
			
		case "privateVariable":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "<ul><li>The two data members <y>itemNo</y>, <y>price</y> are default <y>private</y>.</li>"
									+"<li>The <y>private</y> data members are only accessed by the member functions of thata class only.</li></ul>";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
		break;
			
		case "putData":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "This <span class='ct-code-b-yellow'>setData()</span> is used to intitialze "
									+"the values to a declared <span class='ct-code-b-yellow'>private</span> variables.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			})
			break;
			
		case "getData":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The <span class="ct-code-b-yellow">display()</span> used to display'
									+' the values of the <y>private</y> data members.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
			break;
		
		case "mainMthd":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The program execution starts from the <span class="ct-code-b-yellow">main()</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
			break;
		
		case "objDec":
			$(".border1px").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = '<ul><li>Here <y>s1</y>, <y>s2</y> are the objects declared to the class <y>Item</y>.</li>'
									+'<li>When ever an object is created, the <y>memory</y> space will be allocated to them.</li></ul>';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
			break;
			
		case "objMemory":
			$(".introjs-fixParent").removeClass('introjs-fixParent');
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				if (introjs._direction == "forward") {
					$(".objMemory").removeClass("opacity00");
					var typingContent = "<y>s1</y> and <y>s2</y> are two different objects to the class <y>Item</y>."
						+" so they allocated memory saperately to the data members but they allocated"
						+"common space to member functions. ";
					
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton,  .introjs-nextbutton').show();
					});
				} else {
					introjs.previousStep();
				}

			});
			break;	
		
		case "putIn1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "<div>The <y>setData()</y> function is called by the object <y>s1</y> with "
									+"values <y>1001</y>, <y>17.2</y>.</div><br><div id='setAnimate'></div>";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('#objMemory').css('border-bottom','1px solid gray');
					$("#setMthd").addClass("zIndex").removeClass('opacity00');
					$("#setMthd").effect( "highlight",{color: 'green'}, 500, function() {
						$('#setAnimate').append('<span class="displayInline"><b>&emsp;&emsp;&emsp;&emsp;void setData(<span id="iVal1">&nbsp;i</span>,&emsp; <span id="jVal1">j</span>&nbsp;) {'
												+'<br>&emsp;&emsp;&emsp;&emsp;&emsp;itemNo = &nbsp;<span id="iVal2" class="displayInline">i</span>;'
												+'<br>&emsp;&emsp;&emsp;&emsp;&emsp;price = &nbsp;<span id="jVal2" class="displayInline">j</span>;'
												+'<br>&emsp;&emsp;&emsp;&emsp;}</b></span>');
						var first = $('#toolTipSet').offset();
						$("#setAnimate > span").offset({'top' : first.top, 'left' : first.left});
						$("#putData").addClass("zIndex");
						$("#putData").effect( "highlight",{color: 'green'}, 1000, function() {
							animationStep("putData", "1001", "17.2", function() {
								$("#s1").addClass("zIndex");
								animateToMemory("iVal2", "s1Item", function() {
									animateToMemory("jVal2", "s1Price", function() {
										$("#s1Item, #s1Price").removeClass("zIndex");
										$("#s1, #putData").removeClass("zIndex");
										$('.introjs-nextbutton').show();
									})
								})
							});
						})
					})
				});
			});
			break;
		
		case "putIn2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "<div>The <y>setData()</y> function is called by the object <y>s2</y> with "
									+"values <y>1002</y>, <y>18.5</y>.</div><br><div id='setAnimate'></div>";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						
						$('#setAnimate').append('<span class="displayInline"><b>&emsp;&emsp;&emsp;&emsp;void setData(<span id="iVal1">&nbsp;i</span>,&emsp; <span id="jVal1">j</span>&nbsp;) {'
								+'<br>&emsp;&emsp;&emsp;&emsp;&emsp;itemNo = &nbsp;<span id="iVal2" class="displayInline">i</span>;'
								+'<br>&emsp;&emsp;&emsp;&emsp;&emsp;price = &nbsp;<span id="jVal2" class="displayInline">j</span>;'
								+'<br>&emsp;&emsp;&emsp;&emsp;}</b></span>');
				var first = $('#toolTipSet').offset();
				$("#setAnimate > span").offset({'top' : first.top, 'left' : first.left});
				$("#putData").addClass("zIndex");
				$("#putData").effect( "highlight",{color: 'green'}, 500, function() {
					animationStep("putData", "1002", "18.5", function() {
						$("#s2").addClass("zIndex");
						animateToMemory("iVal2", "s2Item", function() {
							animateToMemory("jVal2", "s2Price", function() {
								$("#s2Item, #s2Price").removeClass("zIndex");
								$("#s2, #putData").removeClass("zIndex");
								$('.introjs-nextbutton').show();
							})
						})
					});
				})
				})
			});
			break;	
			
			
		case "fullStack":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "fullStack";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					if (animateStep == "putData1") {
						$("#memoPutData").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
						}, 800)
					}
				});
			});
			break;
		
		case "s1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "we are calling the <y>setData()</y> by <y>s1</y> and passing the values as parameter.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".itemNoS1, .priceNoS1").removeClass("opacity00");
						$('.introjs-prevbutton,  .introjs-nextbutton').show();
				});
			});
			break;
			
		
			
		case "s2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "The passed parameter values are stored in a <y>memory</y>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".itemNoS2, .priceNoS2").removeClass("opacity00");
					$('.introjs-prevbutton,  .introjs-nextbutton').show();
				})
			});
		break;
			
		case "getIn1":
		case "getIn2":
			$("#setMthd").removeClass("zIndex");
			$("#dispMthd").addClass("zIndex").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent;
				if (elementId == "getIn1") {
					$("#memoGetData").addClass("zIndex");
					typingContent = "<div>The <y>display()</y> is called by the object <y>s1</y>. so, "
									+"the data members related to <y>s1</y> are accessable.</div><div id='setAnimate'></div>";
				} else {
					typingContent = "<div>The <y>display()</y> is called by the object <y>s2</y>. so, "
									+"the data members related to <y>s2</y> are accessable.</div><div id='setAnimate'></div>";
				}
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					if (elementId == "getIn1") {
						getAnimation("getIn1", "1001", "17.2", "s1")
					} else {
						$("#s1").removeClass("zIndex");
						getAnimation("getIn2", "1002", "18.5", "s2")
					}
				})
			});
			break;
		
		case "memoGetData":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#memoGetData").removeClass("opacity00");
				setTimeout(function() {
					introjs.nextStep();
				}, 1500);
			})
			break;
			
		case "outputBox":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#memoGetData, #outputBox").removeClass("opacity00");
				if (animateStep == "getData1") {
					$("#getData").removeClass("zIndex");
					$("#s1OutPut").removeClass("opacity00");
				} else {
					$("#dispMthd, #s2").removeClass("zIndex");
					$("#getData").addClass("zIndex");
					$("#s2OutPut").removeClass("opacity00");
				}
				setTimeout(function() {
					$("#getData").removeClass("zIndex");
					introjs.nextStep();
				}, 1500);
			})
			break;
			
		case "restartBtn":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("visibility-hidden");
				$("#restartBtn").click(function() {
					location.reload();
				})
			})
			break;
			
			
		}});
	introjs.start();
	}
	
	function getAnimation(elementId, val1, val2, block) {
		$("#dispMthd").effect( "highlight",{color: 'green'}, 500, function() {
			$('#setAnimate').append('<span class="displayInline"><b>&emsp;&emsp;&emsp;&emsp;void display() {'
					+'<br>&emsp;&emsp;&emsp;&emsp;&emsp;cout &nbsp;<<&nbsp;"ItemNo :"&nbsp;<< &nbsp;<span id="iVal2" class="displayInline">itemNo</span>;'
					+'<br>&emsp;&emsp;&emsp;&emsp;&emsp;cout &nbsp;<<&nbsp;"Price :"&nbsp;<< &nbsp;<span id="jVal2" class="displayInline">price</span>;'
					+'<br>&emsp;&emsp;&emsp;&emsp;}</b></span>');
			
			var first = $('#getData').offset();
			$("#setAnimate > span").offset({'top' : first.top, 'left' : first.left});
			$("#getData").addClass("zIndex");
			$("#getData").effect( "highlight",{color: 'green'}, 500, function() {
				animationStep("getData", val1, val2, function() {
					$("#" + block).addClass("zIndex");
					$('.introjs-nextbutton').show();
				})
			})
		})
	}


	function animationStep(method, val1, val2, callBack) {
		
		TweenMax.to($("#setAnimate > span"), 1, {opacity:1, top: 0, left: 0, onComplete: function() {
			flipEffectWithTweenMax("#iVal2", val1, function() {
				flipEffectWithTweenMax("#jVal2", val2, function() {
					if (typeof callBack === "function") {
						callBack();
					}
				})
			});
		}})
		
	}

	function animateToMemory(toolId, currentId,callBack) {
		
		var first = $("#" + toolId).offset();
		$("#" + currentId).offset({'top': first.top, 'left': first.left});
		$("#" + currentId).removeClass('opacity00');
		$("#" + toolId).effect( "highlight",{color: 'green'}, 500, function() {
			TweenMax.to($("#" + currentId), 1, {top:0, left:0, onComplete: function() {
				if (typeof callBack === "function") {
					callBack();
				}
			}})
		})
	}
	
function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
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