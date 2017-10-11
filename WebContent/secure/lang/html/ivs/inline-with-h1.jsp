<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<title>Inline with h1</title>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.box {
	border-radius: 8px;
	border: 1px solid gray;
	padding: 8px;
	letter-spacing: 1px;
	height: 96px;
}

#browser {
	padding: 0px;
	border: 1px solid gray;
}

h1 {
	margin-top: 10px;
}

img {
	width: 100%;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

.blink {
	animation: blinking 1s infinite;
}

@keyframes blinking {
	50% {background: rgb(204, 204, 255)}
}

.introjs-fixParent {
	position: relative !important;
}

.usr-btn {
	background-color: green;
}
</style>
</head>
<script>
var introjs;
var typingInterval = 35;
var DELETE_CODE = 46;
var BACKSPACE_KEY_CODE = 8;
var ESC_KEY_CODE = 27;
var LEFT_KEY_CODE = 37;
var RIGHT_KEY_CODE = 39;
var ENTER_KEY_CODE = 13
var TAB_KEY_CODE = 9;

$(document).ready(function() {
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
	});
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#explanation',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#code',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#code',
					intro: '',
					tooltipClass: "hide"
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#heading2',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	})
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "explanation":
				$('.introjs-nextbutton').hide();
				var text = "An <span class='ct-blue-color'>inline</span> CSS is used to apply a unique style to a single HTML element.<br>"
							+ "An inline CSS uses the <span class='ct-blue-color'>style</span> attribute of an HTML element.<br>"
							+ "syntax for inline style sheet is <span id='syntax' class='ct-blue-color'>&lt;tagname style='property:value;'&gt;</span><br>"
							+ "Let us learn an example for how to define style in inline sheet and set the text color";
				typing('#explanation', text, function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 800);
				});
				break;
			
			case "code":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one('transitionend', function() {
					if (introjs._currentStep == 1) {
						$("#code").removeClass("opacity00");
						zoomInEffect("#docType", function() {
							zoomInEffect($("#htmlOpen"), function() {
								zoomInEffect($("#htmlClose"), function() {
									$("#htmlOpen, #htmlClose").effect("highlight", {color : 'yellow'}, 500);
									zoomInEffect("#headOpen", function() {
										zoomInEffect("#headClose", function() {
											$("#headOpen, #headClose").effect("highlight", {color : "yellow"}, 500);
											zoomInEffect("#title", function() {
												$("#titleOpen, #titleClose").effect("highlight", {color : 'yellow'}, 500);
												setTimeout(function() {
													$("#code").addClass("z-index");
													introjs.nextStep();
												}, 800);
											});
										});
									});
								});
							});
						});
					} else {
						$("#titleText").removeAttr("style");
						zoomInEffect($("#bodyOpen"), function() {
							zoomInEffect("#bodyClose", function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "h1 tag";
								typing('.introjs-tooltiptext', text, function() {
									zoomInEffect("#heading1", function() {
										$("#h1Open, #h1Close").effect("highlight", {color : "yellow"}, 800);
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					}
				});
				break;
				
			case "browser":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 2) { 
						$("#titleText").css({background : "yellow"});
						zoomInEffect("#browser", function() {
							setTimeout(function() {
								$("#browser").addClass("z-index");
								introjs.nextStep();
							}, 1000);
						});
					} else if (introjs._currentStep == 4) {
						zoomInEffect("#h1Tag", function() {
							$("#h1Text, #h1Tag").addClass("blink");
							setTimeout(function() {
								introjs.nextStep();
							}, 1500);
						});
					} else {
						zoomInEffect("#h1ColorTag", function() {
							$("#h1ColorTag, #colorText").addClass("blink");
							$('.introjs-tooltip').removeClass("hide");
							var text = "By using style property we changed the text color blue";
							typing('.introjs-tooltiptext', text, function() {
								$("#h1ColorTag, #colorText").removeClass("blink");
								$('.introjs-nextbutton').show();	
							});
						});
					}
				});
				break;
				
			case "heading2":
				$("#h1Text, #h1Tag").removeClass("blink");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect($("#heading2"), function() {
						var text = "Now we define <span class='ct-code-b-yellow'>style</span> attribute for this <span class='ct-code-b-yellow'>h1</span> tag.";
						typing('.introjs-tooltiptext', text, function() {
							$("#colorDefine").append('<span id="styleTag" style="background-color:yellow"></span>');
							var text = " style=\"<span id='colorProperty'></span>\"";
							typing('#styleTag', text, function() {
								introjs.refresh();
								$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="colorBtn()">Next &#8594;</a>')
							});
						});
					});
				});
				break;
				
			case "restart":
				$("#styleTag, #coloring").removeAttr("style");
				$("#syntax").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "click to restart";
					typing('.introjs-tooltiptext', text);
				});
				break;
					
		}
	});
	
	introjs.start();
	$(".introjs-skipbutton").hide();
	$(".introjs-prevbutton").hide();
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

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$(selector).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function colorBtn() {
	$(".usr-btn").remove();
	$('.introjs-tooltiptext').append('<span class="property-text"></span>');
	var text = "Now we apply <span class='ct-code-b-yellow'>color</span> property for example we are applying blue color";
	typing('.property-text', text, function() {
		$("#syntax").addClass("z-index");
		$("#colorProperty").append('<span id="coloring" style="background-color:yellow"></span>');
		var text = "property:blue;";
		typing("#coloring", text, function() {
			introjs.refresh();
			$('.introjs-nextbutton').show();
			$("#code").addClass("z-index");
		});
	});
}
</script>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label text-center ct-demo-heading">Excercise</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
			<div class="col-xs-6 col-xs-offset-3 box" id="explanation"></div>
		</div>
		<div class="col-xs-12 margin-top-25">
<pre id="code" class="col-xs-5 opacity00">
<span id="docType" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen" class="opacity00">&lt;html&gt;</span>
   <span id="headOpen" class="opacity00">&lt;head&gt;</span>
      <span id="title" class="opacity00"><span id="titleOpen">&lt;title&gt;</span><span id="titleText">Inline with h1</span><span id="titleClose">&lt;/title&gt;</span></span>
   <span id="headClose" class="opacity00">&lt;/head&gt;</span>
   <span id="bodyOpen" class="opacity00">&lt;body&gt;</span>
      <span id="heading1" class="opacity00"><span id="h1Open">&lt;h1&gt;</span><span id="h1Text">Welcome to Codetantra</span><span id="h1Close">&lt;/h1&gt;</span></span>
      <span id="heading2" class="opacity00"><span id="colorDefine">&lt;h1</span>&gt;<span id="colorText">Welcome to Codetantra</span>&lt;/h1&gt;</span>
   <span id="bodyClose" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose" class="opacity00">&lt;/html&gt;</span>
</pre>
			<div class="col-xs-6 col-xs-offset-1 opacity00" id="browser">
				<img src="/images/inline-with-h1.png">
				<div style="padding-left:8px; border-top:1px solid gray">
					<h1><span id="h1Tag" class="opacity00">Welcome to Codetantra</span></h1>
					<h1><span id="h1ColorTag" style="color:blue;" class="opacity00">Welcome to Codetantra</span></h1>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span class="text-center btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
</html>