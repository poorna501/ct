var functionDeclarationReady = function() {
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
			/* element :'#title',
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
			element :'#returnType3',
			intro :'',
			position:"bottom"
		},{
			element :'#functionName3',
			intro :'',
			position:"bottom"
		},{
			element :'#argument3',
			intro :'',
			position:"bottom"
		},{
			element :'#semicolon3',
			intro :'',
			position:"bottom"
		},{
			element :'#declaration1',
			intro :'',
			position:"bottom"
		},{
			element :'#example1',
			intro :'',
			position:"bottom"
		},{
			element :'#example2',
			intro :'',
			position:"bottom"
		},{
			element :'#example3',
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
		
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  /* 	typing('#informationdiv', "<ul><li><span class=''>function declaration</span> tells the compiler what are the types of arguments that are passed to a function , what type of data type it will return.</li><li><span class=''>function declaration</span> must ended with a semicolon (;).</li><li>user needs to declare a function before usage of function call and function definition, because the compiler knows that this is a user defined function declare by user.</li><li>if a function was not declared but the function was called so it gives an error message, because the compiler doesn't know this is a valid function.</li></ul>", function() {  
		  	typing('.introjs-tooltiptext',"Let us consider the format of function declaration." ,function() {
					$('.introjs-nextbutton').show();
				  		});

					}); */
				});
		break;
		case "format" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#format").removeClass("opacity00");
		  	typing('.introjs-tooltiptext', "Syntax of function declaration.", function() {  
		  			intro.nextStep();
					});
				});
		break;
		case "returnType3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "<ul><li><span class='color-yellow'>return_type</span> is type of value returned by function.</li><li>For example return type is <span class='color-yellow'>void</span> if function is not going to return a value.</li></ul>", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "functionName3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "<ul><li>Any valid identifier is placed as a <span class='color-yellow'>function_name</span>.</li></ul>", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "argument3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "<ul><li><span class='color-yellow'>parameter_types</span> are comma-separated list of data types.</li><li><span class='color-yellow'>parameter_types</span> are <span class='color-yellow'>optional</span> when the function doesn't send any argument.</li></ul>", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "semicolon3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Function declaration must ended with <span class='color-yellow'>semicolon(;)</span>.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "declaration1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Let us consider the different examples of function declaration.", function() {  
			$("#declaration1").removeClass("visibility-hidden");
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "example1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Here the name of the function is <span class='color-yellow'>sum</span>, it takes two <span class='color-yellow'>int</span> arguments and it will return a specified data type <span class='color-yellow'>int</span>.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "example2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Here the name of the function is <span class='color-yellow'>display</span>, it takes <span class='color-yellow'>void</span> argument and it will return a specified data type <span class='color-yellow'>void</span>.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "example3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  	typing('.introjs-tooltiptext', "Here the name of the function is <span class='color-yellow'>gettime</span>, it takes <span class='color-yellow'>void</span> argument and it will return a specified data type <span class='color-yellow'>int</span>.", function() {  
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
	typing('#informationdiv', "<ul><li><span class=''>Function declaration</span> tells the compiler what are the types of arguments that are passed to a function, what type of data type it will return.</li><li><span class=''>Function declaration</span> must ended with a <span class='color-green'>semicolon (;)</span>.</li><li>User needs to declare a function before usage of function call and function definition, because the compiler knows that this is a user defined function declare by <span class='color-green'>user</span>.</li><li>If a function was not declared but the function was called so it gives an <span class='color-green'>error message</span>, because the compiler doesn't know this is a valid function.</li></ul>", function() {  
	  	typing('.introjs-tooltiptext',"Let us consider the format of function declaration." ,function() {
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