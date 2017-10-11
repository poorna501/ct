var intro;
var typingInterval = 5;
var differenceBetweenArrayAndStructure = function() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function() {
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
				element : "#heading",
				intro : "",
				position:"right"
			},{
				element : "#declarationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#onlyDeclarationOfStructure",
				intro : "",
				position:"right"
			},{
				element : "#declarationOrInitialization",
				intro : "",
				position:"right"
			},{
				element : "#definitionOfStructure",
				intro : "",
				position:"right"
			},{
				element : "#firstinitializationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#totalInitializationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#initializationOfStructure",
				intro : "",
				position:"right"
			},{
				element : "#totalInitializationOfStructure",
				intro : "",
				position:"right"
		 	},{
				element : "#memoryOfArray",
				intro : "",
				position:"right"
			},{
				element : "#memoryOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#totalInitializationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#memoryOfArray",
				intro : "",
				position:"right"
			},{
				element : "#totalInitializationOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#memoryOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#arrayAccess",
				intro : "",
				position:"right"
			},{
				element : "#structureAccess",
				intro : "",
				position:"top"
			},{
				element : "#restart",
				intro : "",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position:"right"
			}
			]});
		
			intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$('.introjs-nextbutton').hide();
				var text = "Let us understand the difference between arrays and structures.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			
			case "declarationOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#array").addClass("animated zoomIn").removeClass("opacity00").one("animationend", function() {
						$("#array").removeClass("animated zoomIn");
						$("#declarationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#declarationOfArray").removeClass("animated zoomIn");
							var text = "An <span class='ct-code-b-yellow'>array</span> is used to store the " 
										+ "data elements of the same datatype."
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "onlyDeclarationOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structure").addClass("animated zoomIn").removeClass("opacity00").one("animationend", function() {
						$("#structure").removeClass("animated zoomIn");
						$("#onlyDeclarationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#onlyDeclarationOfStructure").removeClass("animated zoomIn");
							var text = "<ul><li>This statement shows how a <span class='ct-code-b-yellow'>structure</span> declared.</li>"
										+ "<li> A <span class='ct-code-b-yellow'>structure</span> is used to store the data of "
										+ "different datatype elements.</li><li>A keyword <span class='ct-code-b-yellow'>"
										+ "struct</span> is used to declare a <span class='ct-code-b-yellow'>structure</span>.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "declarationOrInitialization":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "An <span class='ct-code-b-yellow'>array's</span> declaration and definition is in the same statement. "
								+"The memory allocation of the <span class='ct-code-b-yellow'>array</span> happens in the same statement." 
					typing(".introjs-tooltiptext", text, function() {
						$("#declarationOrInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "firstinitializationOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "The initialization of an <span class='ct-code-b-yellow'>array</span> can be done at declaration time.";
					typing(".introjs-tooltiptext", text, function() {
						$("#initializationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#initializationOfArray").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "definitionOfStructure":
				$('.introjs-nextbutton').hide(); 
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#definitionOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>This statement defines a <span class='ct-code-b-yellow'>structure</span>. The memory  " + 
							"allocation for the <span class='ct-code-b-yellow'>structure</span> happens here.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});	
				break;
			case "totalInitializationOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
						if (intro._currentStep == 11) {
							var text = "The values in an <span class='ct-code-b-yellow'>array</span> will be stored in a"
										+" <span class='ct-code-b-yellow'>sequence</span> order.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						} else {
							$("#totalInitializationOfArray").removeClass("opacity00");
							$("#anotherInitializationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text = "An <span class='ct-code-b-yellow'>array</span> can also be initialized with "
											+"<span class='ct-code-b-yellow'>subscript</span> " 
											+ "or <span class='ct-code-b-yellow'>indices</span>.";
								typing(".introjs-tooltiptext", text, function() {
									$("#anotherInitializationOfArray").removeClass("animated zoomIn");
									$('.introjs-nextbutton').show();
								});
							});
						}
				});
				break;
			case "initializationOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#initializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "The initialization of the <span class='ct-code-b-yellow'>structure</span> variable can be done"
									+" at definition part.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "totalInitializationOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 13) {
						var text = "In a <span class='ct-code-b-yellow'>structure</span>, the order of the values that will be "
									+ "stored in memory is based on the order of the <span class='ct-code-b-yellow'>member</span>"
									+ " declaration.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});				
					} else {
						$("#initializationOfStructure").removeClass("opacity00");
						$("#anotherInitializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "An initialization can also be done with <span class='ct-code-b-yellow'>structure</span>"
										+ " variable, <span class='ct-code-b-yellow'>dot(.)</span> operator and "
										+ "<span class='ct-code-b-yellow'>member</span> of the <span class='ct-code-b-yellow'>structure</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "memoryOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						var text = "Let us see how the values in an <span class='ct-code-b-yellow'>array</span> will be stored in memory.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValues(0);'>Next &#8594;</a>");
						}); 
					} else {
						$("#memoryOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#table1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text = "<ul><li>This is how the memory allocation of an <span class='ct-code-b-yellow'>array</span> variable"
										+" <span class='ct-code-b-yellow'>a[5]</span>.</li><li>The array name"
										+" <span class='ct-code-b-yellow'>a</span>" 
										+ " represents <span class='ct-code-b-yellow'>base address</span> of the entire" 
										+ " array i.e, <span class='ct-code-b-yellow'>2024</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									intro.refresh();
									$("#memoryOfArray").removeClass("animated zoomIn");
									$("#arrayAddress1").effect( "highlight",{color: 'yellow'}, 1500,function(){
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					}
				});
				break;
			case "onlyDeclaration":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "At the time of declaration the memory will not be allocated.";
					typing(".introjs-tooltiptext", text, function() {
						$("#declarationOfArray").removeClass('z-index-class');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "memoryOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one('transitionend', function() {
					if (intro._currentStep == 14) {	
						var text = "Let us understand how the <span class='ct-code-b-yellow'>structure</span> values will be stored in memory.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinStructure();'>Next &#8594;</a>");
						});
					} else {
						$("#memoryOfStructure").removeClass("opacity00");					
						$("#point4").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#a").removeClass("opacity00").addClass("animated zoomIn");
							$("#memory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text = "<ul><li>This is the memory allocation of <span class='ct-code-b-yellow'>structure</span> variable"
									+ " <span class='ct-code-b-yellow'>a</span>.</li><li>The <span class='ct-code-b-yellow'>structure</span>" 
									+ " name <span class='ct-code-b-yellow'>a</span> represents <span class='ct-code-b-yellow'>base address</span> of" 
									+ " the entire <span class='ct-code-b-yellow'>structure</span> i.e, "
									+ "<span class='ct-code-b-yellow'>1024</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									$("#declarationOfArray").removeClass('z-index-class');
									$("#address1").effect( "highlight",{color: 'yellow'}, 1500,function(){
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					}
				});
				break;
			case "arrayAccess":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#arrayAccess").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "An <span class='ct-code-b-yellow'>array</span> elements can be accessed either by "
							+"<span class='ct-code-b-yellow'>index</span> or <span class='ct-code-b-yellow'>subscript</span>."; 
						typing(".introjs-tooltiptext", text, function() {
							$("#index").effect( "highlight",{color: 'yellow'}, 1500,function(){
								$("#arrayAccess").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "structureAccess":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureAccess").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>The members of the <span class='ct-code-b-yellow'>structure</span> variable are accessed by using "
							+"the <span class='ct-code-b-yellow'>dot(.)</span> operator.</li> " 
							+ "<li>To access the <span class='ct-code-b-yellow'>structure pointer</span> variable, an " 
							+ "<span class='ct-code-b-yellow'>arrow(->)</span> operator is used.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#dotOperator, #arrowOperator").effect( "highlight",{color: 'yellow'}, 1500,function(){
								$("#structureAccess").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "restart":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
			break;
			
			}
		});
		intro.start();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.nextButton').hide();
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

function moveValues(i) {
	$('.nextButton').hide();
	if (i <= 4) {
		var l1= $("#value" + i).offset();
		$("#a" + i + "value").text($("#value" + i).text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		$("#value" + i).addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1500, function() {
			TweenMax.to("#a" + i + "value",1,{top:0,left:0, onComplete:function() {
				$("#value" + i).removeClass("z-index-class");
				i++;
				moveValues(i);
			}});
		});
	} else {
		$('.introjs-nextbutton').show();
	}
}

function moveValuesinStructure() {
	$('.nextButton').hide();
	var l1= $("#aName").offset();
	$("#aName").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
		$("#pname").text($("#aName").text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#pname",1,{top:0,left:0, onComplete:function() {
			$("#aName").removeClass("z-index-class");
			var l1= $("#aPages").offset();
			$("#ppages").text($("#aPages").text()).removeClass("opacity00").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#aPages").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
				TweenMax.to("#ppages",1,{top:0,left:0, onComplete:function() {
					$("#aPages").removeClass("z-index-class");
					var l1= $("#aPrice").offset();
					$("#pprice").text($("#aPrice").text()).removeClass("opacity00").offset({
						"top":l1.top,
						"left":l1.left
					});
					$("#aPrice").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
						TweenMax.to("#pprice",1,{top:0,left:0, onComplete:function() {
							$("#aPrice").removeClass("z-index-class");
							$('.introjs-nextbutton').show();
						}});
					});
				}});
			});
		}});
	});
}