var valuelength;
var numberlength;
var p;
var z = 0;
var input;
var lenOfInput;

var automaticVarReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#codeDiv',
			intro :'',
			position:"right",
		},
		{
			element :'#mainDeclaration',
			intro :'',
			position:"right",
		},
		{
			element :'#automainDeclaration',
			intro :'',
			position:"right" 
		},
		{
			element :'#animationDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#numberDiv1',
			intro :'',
			position:"right" 
		},
		{
			element :'#numberDiv2',
			intro :'',
			position:"right" 
		},
		{
			element :'#mainMemory',
			intro :'',
			position:"right" 
		},
		{
			element :'#variableDeclaration1',
			intro :'',
			position:"right" 
		},
		{
			element :'#addressDiv1',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#functionDeclaration1',
			intro :'',
			position:"right" 
		},
		{
			element :'#mainfunctionDeclaration',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#variableDeclaration2',
			intro :'',
			position:"right" 
		},
		{
			element :'#numberDiv3',
			intro :'',
			position:"right" 
		},
		{
			element :'#sopLine2',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#outputDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#closeBrace1',
			intro :'',
			position:"right" 
		},
		{
			element :'#sopLine1',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#outputDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "codeDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			});
		break;
		
		case "automainDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"An <span class='color-yellow'>automatic</span> or <span class='color-yellow'>local</span> variable is declared with the keyword <span class='color-yellow'>auto</span> which is not mandatory." ,function() { 
					$('#animationDiv').css({'opacity':'1'});
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		
		case "mainDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "<ul><li><span class='color-yellow'>main()</span> function is called by the operating system.</li>"
						+"<li><span class='color-yellow'>main()</span> function is the execution starting point for a C program.</li></ul>"
				typing('.introjs-tooltiptext',text ,function() { 
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		
		case "animationDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#mainmemoryheading').css({'opacity':'1'});
				$('#mainMemory').removeClass("visibility-hidden");
		  		$('#mainMemory').addClass('box-border');
		  		setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break; 
		
		case "numberDiv1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"Memory is allocated to the variable <span class = 'color-yellow'>a</span>." ,function() { 
		  			$('#aValueAnimation').removeClass('visibility-hidden');
					$('#addressDiv1').removeClass('visibility-hidden');
					$('#address1').removeClass('visibility-hidden');
					$('.introjs-nextbutton').show();
		  		});
			});
		break;
		
		case "numberDiv2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"Memory is allocated to the variable <span class = 'color-yellow'>b</span>." ,function() { 
		  			$('#addressDiv2').removeClass('visibility-hidden');
		  			$('#address2').removeClass('visibility-hidden');
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break; 
		
		case "variableDeclaration1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"Here, the variable <span class = 'color-yellow'>a</span> is initialized to <span class = 'color-yellow'>10</span>." ,function() { 
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "addressDiv1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to('#numberDiv1', 1, {opacity: 1, onComplete: function() {
					$('#number1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
						$('#number1').removeClass('circle-css');
						$("#addressValue1").text($("#number1").text());
						fromEffectWithTweenMax('#number1', '#addressValue1', function() {
							$('.introjs-tooltip').removeClass("hide");
							typing('.introjs-tooltiptext',"The value <span class = 'color-yellow'>10</span> is stored in the memory of the variable <span class = 'color-yellow'>a</span>." ,function() { 
								$('.introjs-nextbutton').show();	
							});	
						});
					});
				}});
			});
		break;
		
		case "mainMemory" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"The default values of the variables <span class = 'color-yellow'>a</span> and <span class = 'color-yellow'>b</span> are garbage values." ,function() { 
					$('.introjs-nextbutton').show();
	  		 	});
			});
		break;
		
		case "functionDeclaration1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"The function <span class = 'color-yellow'>ganga()</span> is called and the control is transferred from main() to ganga()." ,function() { 
					$('.introjs-nextbutton').show();
	  		 	});
			});
		break;
		case "mainfunctionDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "variableDeclaration2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The variable <span class = 'color-yellow'>a</span> is declared and initialized within the scope of the function <span class = 'color-yellow'>ganga()</span>, so it is treated as local or automatic variable."
						+"<br><br>Note: Here, <b>keyword </b><span class = 'color-yellow'>auto</span> is not used."
				typing('.introjs-tooltiptext',text ,function() { 
					$('.introjs-nextbutton').show();
		  		 });
			});
		break; 
		
		case "numberDiv3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberDiv3').addClass('box-border');
				$('#functionMemory').removeClass('visibility-hidden');
	  			$('#addressDiv3').removeClass('visibility-hidden');
	  			$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"Memory is allocated to the variable <span class = 'color-yellow'>a</span> which works within the scope of <span class = 'color-yellow'>ganga()</span> function." ,function() { 
		  			TweenMax.to('#numberDiv3', 1, {opacity: 1, onComplete: function() {
						$('#number3').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
							$('#number3').removeClass('circle-css');
							$("#addressValue3").text($("#number3").text());
							fromEffectWithTweenMax('#number3', '#addressValue3', function() {
								$('.introjs-nextbutton').show();
							});
						});
					}}); 
				});
			});
		break; 
		
		case "sopLine2" :
			$('#outputDiv').css({'opacity':'1'});
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "outputDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				 if (intro._currentStep == 14) {
					printDecimalValue();
				 }
				 else if (intro._currentStep == 17) {
					printDecimalValue2();
				} 
			});
		break;
		
		case "closeBrace1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is the end of the function definition <span class = 'color-yellow'>ganga()</span>, so the local variables are destroyed whenever the function execution is completed." ,function() { 
					$('.introjs-nextbutton').show();
				});
			});
		break; 
		
		case "sopLine1" :
			$('#functionMemory').addClass('visibility-hidden');
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "printDefinition" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#line1').fadeTo(1000,1,function() {
				  $('#line2').fadeTo(1000,1,function() {
				    $('#line3').fadeTo(1000,1,function() {
				    });
				  });
				});
			});
		break; 
		
		case "restartBtn":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$("#printDefinition").removeClass("z-index1000000");
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
		break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	text = "Let us consider a sample code on <span class = 'color-yellow'>local variables</span>."	
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});	
};

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":10,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 1, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printDecimalValue() {
  	$("#outputAValue1").text("The local variable value within ganga() = ");
  	$("#percentage2").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  		$("#percentage2").removeClass("z-index1000000");
  		$("#aValue2").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  			$("#aValue2").removeClass("z-index1000000")
  			$("#aheading").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  				$("#aheading").removeClass("z-index1000000")
  				$('#addressValue3').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 500, function() {
  					$('#addressValue3').removeClass('circle-css z-index1000000');
  					$("#outputAValue1").append("<span id = 'output1'>"+ $("#addressValue3").text()+"</span>");
  					fromEffectWithTweenMax("#addressValue3", "#output1", function() { 
			  			setTimeout(function () {
			  				intro.nextStep();
						}, 1000);
				   });  
  				});
	  		}); 
	  	});
	});
}

function printDecimalValue2() {
	$("#outputAValue2").text("The local variable value within main() = ");
	$("#percentage1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#percentage1").removeClass("z-index1000000")
		$("#aValue1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
			$("#aValue1").removeClass("z-index1000000")
			$("#aheading1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
				$("#aheading1").removeClass("z-index1000000")
		  		$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 500, function() {
	  				$('#addressValue1').removeClass('circle-css z-index1000000');
	  				$("#outputAValue2").append("<span id = 'output2'>"+ $("#addressValue1").text()+"</span>");
			  	 	fromEffectWithTweenMax("#addressValue1", "#output2", function() {
			  			setTimeout(function () {
							$('#printDefinition').removeClass('visibility-hidden');
							intro.nextStep();
						},1000);
				  	});  
	 			});
	  		}); 
	  	});
	});
}

function animate1() {
	$('.animation-btn').remove();	
	intro.nextStep();
}