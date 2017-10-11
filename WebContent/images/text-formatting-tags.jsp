<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Text Formatting tags</title>
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
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.border {
	border: 1px solid #ccc;
	padding: 8px;
	border-radius: 8px;
}

.padding0 {
	padding: 0;
}

.margin0 {
	margin: 0;
}

#strongText {
	width: 154px;
}

#emText {
	width: 186px;
}

#insText {
	width: 170px;
}

.usr-text {
	background-color: #f5f5f5;
}

img {
	width: 100%;
}

#browser {
	height: 306px;
	border-radius: 0px;
}

p {
	margin: 0 0 5px;
}

#explanation {
	height: 179px;
}

.z-index {
	z-index: 9999999; 
	position: relative;
	background-color: white;
}

.blink {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blinking {
	50% {background: rgb(204, 204, 255);}
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

mark {
	background-color: yellow;
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
	initIntroJs();
	
	$('#restart').click(function() {
		location.reload();
		$("#strongText, #emText, #insText").val('');
	});
	

	$(".usr-text").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		
		if ($.inArray(e.keyCode, [DELETE_CODE, BACKSPACE_KEY_CODE, ESC_KEY_CODE]) !== -1 || (e.keyCode >= LEFT_KEY_CODE && e.keyCode <= RIGHT_KEY_CODE)) {
			return;
		}
		
		if (e.keyCode == ENTER_KEY_CODE || e.keyCode === TAB_KEY_CODE) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			e.preventDefault();
		}
	});
});

function initIntroJs() {
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
					element: '#program',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#bold',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#strongTag',
					intro: '',
					position: 'right'
				}, {
					element: '#italic',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#emTag',
					intro: '',
					position: 'right'
				}, {
					element: '#underline',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#insTag',
					intro: '',
					position: 'right'
				}, {
					element: '#marked',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#deleted',
					intro: '',
					position: 'right'
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				}]
	})
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "explanation":
				$('.introjs-nextbutton').hide();
				var text = $("#explanation").html();
				typing("#explanation", text, function() {
					$("#insText, #strongText, #emText").attr("disabled",  true);
					timeOut();
				});
				break;
				
			case "program":
				$("#explanation").addClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#program").removeClass("opacity00");
					zoomInEffect("#htmlOpen", function() {
						zoomInEffect("#htmlClose", function() {
							$("#htmlOpen, #htmlClose").effect( "highlight",{color: 'yellow'}, 800);
							$(".introjs-tooltiptext").append("<ul><li></li></ul>");
							var text = "html tag";
							typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
								zoomInEffect("#headOpen", function() {
									zoomInEffect("#headClose", function() {
										$("#headOpen, #headClose").effect( "highlight",{color: 'yellow'}, 800);
										$(".introjs-tooltiptext ul").append("<li></li>");
										var text = "head tag";
										typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
											zoomInEffect("#bodyOpen", function() {
												zoomInEffect("#bodyClose", function() {
													$("#bodyOpen, #bodyClose").effect( "highlight",{color: 'yellow'}, 800);
													$(".introjs-tooltiptext ul").append("<li></li>");
													var text = "body tag";
													typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
														zoomInEffect("#title", function() {
															$('.introjs-tooltiptext ul').append('<li></li>');
															var text = "In head section we declared title";
															typing($('.introjs-tooltiptext ul li:last-child'), text, function() {
																$("#titleOpen, #titleClose").effect("highlight", {color: 'yellow'}, 800, function() {
																	$('.introjs-nextbutton').show();
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
				break;
				
			case "browser":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 2) {
						zoomInEffect("#browser", function() {
							timeOut();
						});
					} else if (introjs._currentStep == 4) {
						zoomInEffect("#bBrowser", function() {
							$("#bBrowser").addClass("blink");
							timeOut();
						});
					} else if (introjs._currentStep == 7) {
						zoomInEffect("#iBrowser", function() {
							$("#iBrowser").addClass("blink");
							timeOut();
						});
					} else if (introjs._currentStep == 10) {
						zoomInEffect("#uBrowser", function() {
							$("#uBrowser").addClass("blink");
							timeOut();
						});
					} else if(introjs._currentStep == 13) {
						zoomInEffect("#markBrowser", function() {
							timeOut();
						});
					} else if (introjs._currentStep == 15) {
						zoomInEffect("#delBrowser", function() {
							timeOut();
						});
					}
				});
				break;
				
			case "bold":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#bold", function() {
						$("#bOpen, #bClose").effect( "highlight",{color: 'yellow'}, 800, function() {
							var text = "The text in between the tags will be <b>bold</b>.";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			break;
			
			case "strongTag":
				$("#bBrowser").removeClass("blink");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#strongTag", function() {
						var text = "The HTML &lt;strong&gt; element defines <b>strong</b> text, with added semantic strong importance.<br>Enter text";
						typing('.introjs-tooltiptext', text, function() {
							$("#strongText").attr("disabled", false);
							$("#strongText").effect( "highlight",{color: 'yellow'}, 800);
							charAtEnd("strongText");
							changeValue("#strongText", 19);
						});
					});
				});
				break;
				
			case "italic":
				$("#strongText").attr("disabled", true);
				$("#strongBrowser").removeClass("blink");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#italic", function() {
						$("#iOpen, #iClose").effect("highlight",{color : 'yellow'}, 1500);
						var text = "The HTML &lt;i&gt; element defines <i>italic</i> text, without any extra importance..";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "emTag":
				$("#iBrowser").removeClass("blink");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#emTag", function() {
						var text = "The HTML &lt;em&gt; element defines <i>emphasized</i> text, with added semantic importance.<br>Enter text";
						typing('.introjs-tooltiptext', text, function() {
							$("#emText").attr("disabled", false);
							$("#emText").effect("highlight", {color:'yellow'}, 1000);
							charAtEnd("emText");
							changeValue("#emText", 20);
						})
					})
				});
				break;
				
			case "underline":
				$("#emText").attr("disabled", true);
				$("#emBrowser").removeClass("blink");
				$('.introjs-nextbutton').show();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#underline", function() {
						$("#uOpen, #uClose").effect("highlight",{color : 'yellow'}, 1500);
						var text = "&lt;u&gt; is used for <u>underline</u>.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "insTag":
				$("#uBrowser").removeClass("blink");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#insTag", function() {
						var text = "The HTML &lt;ins&gt; element defines <u>inserted</u> (added) text.<br>Enter text";
						typing('.introjs-tooltiptext', text, function() {
							$("#insText").attr("disabled", false);
							$("#instext").effect("highlight", {color:'yellow'}, 1000);
							charAtEnd("insText");
							changeValue("#insText", 22);
						});
					});
				});
				break;
				
			case "marked":
				$("#insText").attr("disabled", true);
				$("#insBrowser").removeClass("blink");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#marked", function() {
						$("#mOpen, #mClose").effect("highlight", {color : 'yellow'}, 1500);
						var text = "The HTML &lt;mark&gt; element defines <span style='background:yellow; color:black'>marked</span> or <span style='background:yellow; color: black'>highlighted text</span>";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			
			case "deleted":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#deleted", function() {
						$("#delOpen, #delClose").effect("highlight", {color : 'yellow'}, 1500);
						var text = "The HTML &lt;del&gt; element defines <del>deleted</del> (removed) text.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			
			case "restart":
				$("#delBrowser").removeClass("blink");
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

function changeValue(id1, h) {
	$(id1).off("keyup");
	$(id1).on("keyup", function(e) {
		$(".ct-red").remove();
		if (h == 19) {
			$("#strongBrowser").text($("#strongText").val()).addClass("blink");
			if ($("#strongText").val() == "This text is strong") {
				$("#browser").addClass("z-index");
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append("<span class='ct-red'><br/>Please enter \"This text is strong\"</span>");
			}
		} else if (h == 20) {
			$("#emBrowser").text($("#emText").val()).addClass("blink");
			if ($("#emText").val() == "This text is emphasized") {
				$("#emBrowser").addClass("z-index");
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append("<span class='ct-red'><br/>Please enter \"This text is emphasized\"</span>");
			}
		} else if (h == 22) {
			$("#insBrowser").text($("#insText").val()).addClass("blink");
			if ($("#insText").val() == "This is inserted text") {
				$("#insBrowser").addClass("z-index");
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltiptext').append("<span class='ct-red'><br/>Please enter \"This is inserted text\"</span>");
			}
		}
			
	});
}

function timeOut() {
	setTimeout(function() {
		introjs.nextStep()
	}, 1500)
}
</script>
<body>
	<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Text Formatting Tags</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 margin-top-25">
			<div class="col-xs-6 col-xs-offset-3 border" id="explanation" style="letter-spacing:1px;">
				HTML also defines special elements for defining text with a special meaning.<br>
				HTML uses elements like <span class='ct-blue-color'>&lt;b&gt;</span> and <span class='ct-blue-color'>&lt;i&gt;</span> for <span class='ct-blue-color'>formatting</span> output, like <span class='ct-blue-color'>bold</span> or <span class='ct-blue-color'>italic</span> text.<br><br>
				<div style="margin-left: 20px;">Formatting elements were designed to display special types of text:</div>
				<div class="col-xs-4 col-xs-offset-1">
					&lt;b&gt; - <b>Bold text</b><br>
					&lt;i&gt; - <i>Italic text</i><br>
					&lt;u&gt; - <u>Underlined text</u><br>
					&lt;mark&gt; - <mark>Marked text</mark><br>
				</div>
				<div class="col-xs-5 col-xs-offset-1">
					&lt;strong&gt; - <strong>Important text</strong><br>
					&lt;em&gt; - <em>Emphasized text</em><br>
					&lt;ins&gt; - <ins>Inserted text</ins><br>
					&lt;del&gt; - <del>Deleted text</del>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top-25">
			<div class="col-xs-5 padding0">
<pre class="margin0 opacity00" id="program">
<span id="htmlOpen" class="opacity00">&lt;html&gt;</span>
   <span id="headOpen" class="opacity00">&lt;head&gt;</span>
      <span id="title" class="opacity00"><span id="titleOpen">&lt;title&gt;</span>Text Formatting Tags<span id="titleClose">&lt;/title&gt;</span></span>
   <span id="headClose" class="opacity00">&lt;/head&gt;</span>
   <span id="bodyOpen" class="opacity00">&lt;body&gt;</span>
      <span id="bold" class="opacity00"><span id="bOpen">&lt;b&gt;</span>This text is bold<span id="bClose">&lt;/b&gt;</span></span>
      <span id="strongTag" class="opacity00">&lt;strong&gt;<input type="text" maxlength="19" class="usr-text" id="strongText" style="border-width:0px"/>&lt;/strong&gt;</span>
      <span id="italic" class="opacity00"><span id="iOpen">&lt;i&gt;</span>This text is italic<span id="iClose">&lt;/i&gt;</span></span>
      <span id="emTag" class="opacity00">&lt;em&gt;<input type="text" maxlength="23" class="usr-text" id="emText" style="border-width:0px"/>&lt;/em&gt;</span>
      <span id="underline" class="opacity00"><span id="uOpen">&lt;u&gt;</span>This text is underlined<span id="uClose">&lt;/u&gt;</span></span>
      <span id="insTag" class="opacity00">&lt;ins&gt;<input type="text" maxlength="21" class="usr-text" id="insText" style="border-width:0px"/>&lt;/ins&gt;</span>
      <span id="marked" class="opacity00"><span id="mOpen">&lt;mark&gt;</span>This text is marked<span id="mClose">&lt;/mark&gt;</span></span>
      <span id="deleted" class="opacity00"><span id="delOpen">&lt;del&gt;</span>This text is deleted<span id="delClose">&lt;/del&gt;</span></span>
   <span id="bodyClose" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose" class="opacity00">&lt;/html&gt;</span>
</pre>
			</div>
			<div class="col-xs-6 padding0 col-xs-offset-1 border opacity00" id="browser">
				<img id="image1" class="image-custom1" src="/images/text-formatting-tags.png">
				<div style="padding-left: 10px;">
					<p><span id="bBrowser" class="opacity00"><b>This text is bold</b></span><br></p>
					<p><strong><span id="strongBrowser"></strong></p>
					<p><span id="iBrowser" class="opacity00"><i>This text is italic</i></span></p>
					<p><em><span id="emBrowser"></span></em></p>
					<p><span id="uBrowser" class="opacity00"><u>This text is underlined</u></span></p>
					<p><ins><span id="insBrowser"></span></ins></p>
					<p><span id="markBrowser" class="opacity00"><mark>This text is marked</mark></span></p>
					<p><span id="delBrowser" class="opacity00"><del>This text is deleted</del></span></p>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top-25 text-center">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>
</body>
</html>