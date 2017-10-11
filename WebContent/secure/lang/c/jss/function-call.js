var putElement;
var introjs = null;
var timelineLite = new TimelineLite();	
var typingSpeed = 5;

var functionCallReady = function() {
	introGuide();
	 $("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
	 	if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only.</div>")
			e.preventDefault();
		}
		if((e.keyCode >= 65 && e.keyCode <= 90)){
			return;
		}
	});
	 $("#restart").click(function(){
		 location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#funName",
					intro : "",
					position : "right"
				},{
			 		element : "#parameters",
					intro : "",
					position : "right"
				},{
			 		element : "#nameFun",
					intro : "",
					position : "right"
				},{
			 		element : "#addFun",
					intro : "",
					position : "right"
				},{
			 		element : "#mulFun",
					intro : "",
					position : "right"
				},{
			 		element : "#leftDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#funDec",
					intro : "",
					position : "right"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right"
				},{
			 		element : "#funDef",
					intro : "",
					position : "right"
				},{
			 		element : "#printf1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#printf2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
				$('.introjs-nextbutton').hide();
				$("#totalDiv").css({"height" : $("#totalDiv").outerHeight()});
				var text = $("#typingDiv1").html();
				typing("#typingDiv1", text, function() {
					$("#syntax").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
		break;
		case "funName":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Name of the function";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "parameters":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "List of variables. And it must be end with a <b>semicolon (;)</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
					setTimeout(function() {
						$("#example").removeClass("opacity00");
					}, 500);
				});
			});
		break;
		case "nameFun":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is calling a function with the name of <b class ='ct-code-b-yellow'>printName()</b> "
					+ " with the return type of void.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "addFun":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is calling a function with the name of <b class ='ct-code-b-yellow'> addition()</b> "
					+ " with the return type of int and the parameters are <b class ='ct-code-b-yellow'> a, b </b>"
					+ " the resultant value will be stored into the variable <b class ='ct-code-b-yellow'>sum</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "mulFun":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is calling a function with the name of <b class ='ct-code-b-yellow'> mul()</b> "
					+ " with the return type of int and the parameters are <b class ='ct-code-b-yellow'> a, b, c </b>"
					+ " the resultant value will be stored into the variable <b class ='ct-code-b-yellow'>total</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "leftDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#leftDiv').removeClass("opacity00");
				var text = "Let's consider a sample 'C' program to demonstrate <b class ='ct-code-b-yellow'>  Function Definition</b>"
					+ ", <b class ='ct-code-b-yellow'> Function Declaration</b> and <b class ='ct-code-b-yellow'>Calling a Function</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "funDec":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the <b class ='ct-code-b-yellow'> Function Declaration</b>."
							+ " It specifies that user creates a new user define function with name <b class ='ct-code-b-yellow'>addition</b>"
							+ " of two integer arguments with the return type of integer.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});
		break;
		case "callingFun":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <b class ='ct-code-b-yellow'>Calling Function</b>. Immediately the control goes to called function i.e "
					+ "<b class ='ct-code-b-yellow'> Function Definition</b>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "funDef":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <b class ='ct-code-b-yellow'> Function Definition</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "printf1":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 11){
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b class='val-color'> Codetantra </b>";
				$("#outputBody").append("<div></div>");
				typing($("#outputBody > div:last-child"), text, function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			});
		 } else if (introjs._currentStep == 13){
			 $('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<b class='val-color'> inside main(), after printName() </b>";
					$("#outputBody").append("<div></div>");
					typing($("#outputBody > div:last-child"), text, function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 1500);
					});
				});
		 }
		break;
		case "printf2":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click restart to see again.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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