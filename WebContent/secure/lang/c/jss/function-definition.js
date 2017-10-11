var functionDefinitionReady = function() {
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
		/* 	element :'#title',
			intro :'',
			position:"bottom"
		},{ */
			element :'#informationdiv',
			intro :'',
			position:"bottom"
		},{
			element :'#format',
			intro :'',
			tooltipClass: "hide",
			position:"bottom"
		},{
			element :'#returnType1',
			intro :'',
			position:"bottom"
		},{
			element :'#functionName1',
			intro :'',
			position:"bottom"
		},{
			element :'#argument1',
			intro :'',
			position:"bottom"
		},{
			element :'#functionBody',
			intro :'',
			position:"bottom"
		},{
			element :'#returnValue',
			intro :'',
			position:"bottom"
		},{
			element :'#declaration1',
			intro :'',
			position:"bottom"
		},{
			element :'#functionDeclaration',
			intro :'',
			position:"bottom"
		},{
			element :'#functionBody3',
			intro :'',
			position:"bottom"
		},{
			element :'#returnS',
			intro :'',
			position:"bottom"
	 	},{
			element :'#restartBtn',
			intro :'',
			position:"bottom"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "format" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#format").removeClass("opacity00");
		  		typing('.introjs-tooltiptext', "let us consider the syntax of function definition.", function() {  
		  			intro.nextStep();
				});
			});
		break;
		case "returnType1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "<ul><li><span class='color-yellow'>return_type</span> is type of value returned by function.</li><li>Function is not going to return a value then the <span class='color-yellow'>return_type</span> is <span class='color-yellow'>void</span>.</li></ul>", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "functionName1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "<ul><li>Any valid identifier is placed as a <span class='color-yellow'>function_name</span>.</li><li>Key words are not used for user defined <span class='color-yellow'>function_names</span>.</li></ul>", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "argument1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Parameters contains different variables with those data types.", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "functionBody" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "The function body contains a collection of statements that define what the function does.", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "returnValue" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "<ul><li>A <span class='color-yellow'>return</span> statement that return the value evaluated by the function.</li><li>Function will not return a value if  <span class='color-yellow'>return</span> type is <span class='color-yellow'>void</span>.</li></ul>", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "declaration1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "Let us consider the example of function definition.", function() {  
				$("#declaration1").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "functionDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Here the name of the function is <span class='color-yellow'>sum</span>, it takes two <span class='color-yellow'>int</span> arguments and it will return a specified datatype <span class='color-yellow'>int</span>.", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "functionBody3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Function body contains declaration and statements.", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "returnS" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Finally returns the value.", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			typing('.introjs-tooltiptext', "Click to restart.", function() {
				$("#restartBtn").removeClass("opacity00");
				});
			});
		break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$("#informationdiv").removeClass("opacity00");
  	typing('#informationdiv', "<ul><li>A function definition specifies the name of the function, the types and number of parameters it expects to receive, and its return type.</li><li>A function definition includes a function body with the declarations of its local variables, and the statements that determine what the function does.</li>", function() {  
	  	typing('.introjs-tooltiptext',"Let us consider the format of function definition." ,function() {
			$('.introjs-nextbutton').show();
		});
	});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 20;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}