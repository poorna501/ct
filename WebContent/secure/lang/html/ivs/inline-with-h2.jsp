<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Inline with h2</title>
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
<style>
.margin-top-25 {
	margin-top: 25px
}

img {
	width: 100%;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

#browser {
	height: 186px;
}

#colorText {
	width: 82px;
}

.usr-text {
	border: none;
	height: 16px;
}

#h2Text {
	width: 32px;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.blink {
	animation: blinking 1s infinite;
}

@keyframes blinking {
	50% {background: yellow}
}

#pText {
	width: 58px;
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
		$("#pText, #h2Text, #colorText").val();
	});
	
	$(".usr-text").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		
		if ($.inArray(e.keyCode, [DELETE_CODE, BACKSPACE_KEY_CODE, ESC_KEY_CODE] !== -1) || (e.keyCode >= LEFT_KEY_CODE && e.keyCode <= RIGHT_KEY_CODE)) {
			return;
		}
		
		if (e.keyCode == ENTER_KEY_CODE || e.keyCode === TAB_KEY_CODE) {
			e.preventDefault();
		}
		
		if ($(this).val().length >= max) {
			e.preventDefault();
		}
	});
	
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showBullets : false,
		exitOnEsc: false,
		keyboardNavigation : false,
		showStepNumbers : false,
		exitOnOverlayClick : false,
		steps : [ {
					element: '#code',
					intro: ''
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
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#code',
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
		switch(elementId) {
		
			case "code":
				$('.introjs-nextbutton').hide();
				if (introjs._currentStep == 0) {
					$("#code").removeClass("opacity00");
					var text = "Let us learn an example about how to use <span class='ct-code-b-yellow'>background-color</span>, <span class='ct-code-b-yellow'>color</span>, <span class='ct-code-b-yellow'>align</span> properties.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				} else if (introjs._currentStep == 1) {
					//$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#docType", function() {
						zoomInEffect("#htmlOpen", function() {
							zoomInEffect("#htmlClose", function() {
								zoomInEffect("#headOpen", function() {
									zoomInEffect("#headClose", function() {
										zoomInEffect("#title", function() {
											setTimeout(function() {
												$("#browser").addClass("z-index");
												zoomInEffect("#browser", function() {
													setTimeout(function() {
														zoomInEffect("#bodyOpen", function() {
															zoomInEffect("#bodyClose", function() {
																$('.introjs-tooltip').removeClass("hide");
																var text = "We apply a background color to body.<br>So we use <span class='ct-code-b-yellow'>background-color</span> property.";
																typing('.introjs-tooltiptext', text, function() {
																	var text = " \"style=background-color:";
																	typing('#bgColorSpan', text, function() {
																		$("#bgColorSpan").append('<input type="text" class="usr-text" maxlength="10" id="colorText">\"');
																		$("#colorText").css({background:'yellow'});
																		$('.introjs-tooltiptext').append('<div class="color-text"></div>');
																		var text = "Change color to <span class='ct-code-b-yellow'>lightgray</span>";
																		typing('.color-text', text, function() {
																			charAtEnd("colorText");
																			$("#code").addClass("z-index");
																			changeValue("#colorText", 1);
																		});
																	});
																});
															});
														});
													}, 2000);
												})
											}, 1000);
										});
									});
								});
							});
						});
					});
				//	});
				} else if (introjs._currentStep == 3) {
					$('.introjs-helperLayer').one('transitionend', function() {
						zoomInEffect("#h2Tag", function() {
							$("#browser").addClass("z-index");
							zoomInEffect("#h2Browser", function() {
								$("#h2Browser, #h2Tag").addClass("blink");
								var text = "Now we are adding the <span class='ct-code-b-yellow'>color</span> property and enter property value <span class='ct-code-b-yellow'>red</span>";
								typing('.introjs-tooltiptext', text, function() {
									$("#h2Browser, #h2Tag").removeClass("blink");
									var text = " \"style=color:";
									typing('#h2Span', text, function() {
										$("#h2Span").append('<input type="text" class="usr-text" maxlength="6" id="h2Text">\"');
										charAtEnd("h2Text");
										$("#h2Text").css({background:'yellow'});
										changeValue("#h2Text", 2);
									});
								});
							});
						});
					});
				} else {
					zoomInEffect("#pTag", function() {
						$("#browser").addClass("z-index");
						zoomInEffect("#pBrowser", function() {
							$("#pTag, #pBrowser").addClass("blink");
							var text = "Here we learning the text alignment and set the text to <span class='ct-code-b-yellow'>center</span>";
							typing(".introjs-tooltiptext", text, function() {
								$("#pTag, #pBrowser").removeClass("blink");
								var text = " \"style=text-align:";
								typing("#pSpan", text, function() {
									$("#pSpan").append('<input type="text" maxlenght="7" class="usr-text" id="pText">\"');
									charAtEnd("pText");
									$("#pText").css({background:'yellow'});
									changeValue("#pText", 3);
								});
							});
						});
					});
				}
				break;
				
			case "browser":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 2) {
						$("#colorText").removeAttr("style");
						$("#colorText").attr("disabled", true);
						$("#browser").css({background : 'lightgray'});
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					} else if (introjs._currentStep == 4) {
						$("#h2Text").attr("disabled", true);
						$("#h2Text").removeAttr("style");
						$("#h2Browser").css({color : "red"});
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					} else {
						$("#pText").attr("disabled", true);
						$("#pText").removeAttr("style");
						$("#centerTag").addClass("text-center");
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
				
			case "restart":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart";
					typing('.introjs-tooltiptext', text);
				});
				break;
		}
	});
	
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
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
	});pBrowser
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function charAtEnd(id) {
	var element = document.getElementById(id);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false); 
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function changeValue(id, h) {
	$(id).off("keyup"); 
	$(id).on("keyup", function(e) {
		$(".ct-red").remove();
		if (h == 1) {
			if ($(id).val() == "lightgray;") {
				$('.introjs-nextbutton').show();
			} else if ($(id).val() != "lightgray") {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append('<div class="ct-red">Enter "lightgray"</div>');
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append('<div class="ct-red">property value should end with \";\"</div>');
			}
		} else if (h == 2) {
			if ($(id).val() == "red;") {
				$('.introjs-nextbutton').show();
			} else if ($(id).val() != "red") {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append('<div class="ct-red">Enter "red"</div>');
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append('<div class="ct-red">property value should end with \";\"</div>');
			}
		} else if (h == 3) {
			if ($(id).val() == "center;") {
				$('.introjs-nextbutton').show();
			} else if ($(id).val() != "center") {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append('<div class="ct-red">Enter "center"</div>');
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append('<div class="ct-red">property value should end with \";\"</div>');
			}
		}
	});
}
</script>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading text-center" id="heading">Excercise</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 margin-top-25">
<pre id="code" class="col-xs-5">
<span id="docType" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen" class="opacity00">&lt;html&gt;</span>
   <span id="headOpen" class="opacity00">&lt;head&gt;</span>
      <span id="title" class="opacity00"><span id="titleOpen">&lt;title&gt;</span><span id="titleText">Inline example</span><span id="titleClose">&lt;/title&gt;</span></span>
   <span id="headClose" class="opacity00">&lt;/head&gt;</span>
   <span id="bodyOpen" class="opacity00">&lt;body<span id="bgColorSpan"></span>&gt;</span>
      <span id="h2Tag" class="opacity00">&lt;h2<span id="h2Span"></span>&gt;Welcome to Codetantra&lt;/h2&gt;</span>
      <span id="pTag" class="opacity00">&lt;p<span id="pSpan"></span>&gt;Web Development&lt;/p&gt;</span>
   <span id="bodyClose" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose" class="opacity00">&lt;/html&gt;</span>
</pre>
			<div class="col-xs-5 col-xs-offset-2 opacity00" style="border:1px solid gray; padding:0;" id="browser">
				<img src="/images/inline-with-h2.png">
				<div style="border-top: 1px solid gray; padding-left:8px;">
					<h2><span id="h2Browser" class="opacity00">Welcome to Codetantra</span></h2>
					<p id="centerTag"><span id="pBrowser" class="opacity00">Web Development</span></p>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span class="btn btn-warning text-center opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
</html>