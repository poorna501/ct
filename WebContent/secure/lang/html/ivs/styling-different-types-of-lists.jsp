<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>styling-different-types-of-lists</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
.margin-top-10 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-30 {
	margin-top: 30px;
}

.margin-top-40 {
	margin-top: 40px;
}

#orderList, #unorderList {
	border: 1px solid gray;
	border-radius: 5px;
	height: 210px;
}

.display-flex {
	display: flex;
}

.border {
	border: 2px solid gray;
	border-radius: 50%;
}

.padding {
	padding: 5px;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-green {
	background-color: #90EE90
}

.user-btn {
	background-color: green;
}

.background-color-blue {
	background-color: #87CEFA
}
.padding3 {
	padding: 3px;
}

.creampretab {
    -moz-tab-size: 3;
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 6px;
    color: #333;
    display: block;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 0;
    padding: 5px;
}

.browser-img {
	width: 100%
}

#outputDiv1 {
	border: 1px solid gray;
    height: 150px;
}

#outputDiv2 {
	border: 1px solid gray;
    height: 234px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
	padding: 3px;
	min-width: 60px;
}

[contenteditable=false] {
	outline: none;
	font-family: monospace;
}

.error-text {
	color: red;
	font-weight: bold;
}

.introjs-tooltip {
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    max-width: 300px;
    min-width: 300px;
    padding: 10px;
    position: absolute;
    transition: opacity 1.1s ease-out 0s;
    visibility: visible;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 10000001 !important;
}

.font-style {
	font-family: Times New Roman;
    font-size: medium;
    font-weight: bold;
}
</style>
</head>
<body>
<script type="text/javascript">
var putElement;
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	$("body").attr({ondragstart :"return false"});
	$("*").bind("cut copy paste",function(e) { 
		e.preventDefault();
	});
	
	$("[contenteditable=true]").on("keydown keyup", function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
				return;
			}
			$("body").keypress(function(e) {
				 if (e.which === 13) {
					 e.preventDefault();
			}
		});
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#demoTitle",
					intro : "",
					position : "right"
				},{
			 		element : "#ulCode",
					intro : "",
					position : "bottom"
				},{
			 		element : "#totalUl",
					intro : "",
					position : "right"
				},{
			 		element : "#totalLi",
					intro : "",
					position : "right"
				},{
			 		element : "#ulBrowser",
					intro : "",
					position : "bottom"
				},{
			 		element : "#enterStyleType",
					intro : "",
					position : "bottom"
				},{
			 		element : "#ulBrowser",
					intro : "",
					position : "bottom"
				},{
			 		element : "#enterStyleType",
					intro : "",
					position : "bottom"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var text = "Let us learn how to style different types of <b class ='ct-code-b-yellow'>Lists</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "ulCode":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#ulCode').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#ulHtmlOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#ulHtmlCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#ulBodyOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#ulBodyCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		break;
		case "totalUl":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a <b class ='ct-code-b-yellow'>Unordered List</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#ulOpenTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#ulCloseTag").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		break;
		case "totalLi":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create <b class ='ct-code-b-yellow'>List Items</b> with data inside <b class ='ct-code-b-yellow'>Unordered List</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#ulFirstLi").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#ulSecondLi").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#ulThirdLi").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			});
		break;
		case "ulBrowser":
			if (introjs._currentStep == 4) {
				$('.introjs-nextbutton').hide();
				$("#ulBrowser").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.</li>"
							+ "<li> Now let us change the list <b class ='ct-code-b-yellow'>style</b> by adding <b class ='ct-code-b-yellow'>list-style-type</b>"
							+ " property to the <b class ='ct-code-b-yellow'>Unordered List</b>.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<ul id='appendToUlLi1'><span><li id='firstLi'>" + $("#ulLi1Data").text() + "</li></span>");
						$("#outputDiv1 #appendToUlLi1").append("<span><li id='secondLi'>" + $("#ulLi2Data").text() + "</li></span>");
						$("#outputDiv1 #appendToUlLi1").append("<span><li id='secondLi'>" + $("#ulLi3Data").text() + "</li></span></ul>");
							$('.introjs-nextbutton').show();
					});
				});
			} else if (introjs._currentStep == 6) {
				$('.introjs-nextbutton').hide();
				$("#outputDiv1").empty();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>The output of the <b class ='ct-code-b-yellow'>Unordered List</b>.</li>"
							+ '<li> After set the <b class ="ct-code-b-yellow">style</b> attribute to<br><b class ="ct-code-b-yellow">style="list-style-type:circle"</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						$("#outputDiv1").append("<ul style='list-style-type:circle' id='appendCircle'><span><li id='firstLi'>" + $("#ulLi1Data").text() + "</li></span>");
						$("#outputDiv1 #appendCircle").append("<span><li id='secondLi'>" + $("#ulLi2Data").text() + "</li></span>");
						$("#outputDiv1 #appendCircle").append("<span><li id='secondLi'>" + $("#ulLi3Data").text() + "</li></span></ul>");
							$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "enterStyleType":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterStyleType");
				introjs.refresh();
				var text = "Enter <b class ='ct-code-b-yellow'>style='list-style-type:circle'";
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterStyleType");
					++buttonCount;
				});
			});
		break;
		case "enterStyleType":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				charAtEnd("enterStyleType");
				introjs.refresh();
				var text = 'Enter <b class ="ct-code-b-yellow">style="list-style-type:circle"';
				typing(".introjs-tooltiptext", text, function() {
					textFocus("enterStyleType");
					++buttonCount;
				});
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

function editText(selector, buttonCount) {
	console.log(buttonCount);
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max-1) {
			if (buttonCount == 1) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/></span>");
			} else if (buttonCount == 2) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/></span>");
			}
			if ($.inArray(e.keyCode, [delete_key, backspace_key, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			if (e.keyCode == 13 && e.keyCode == 9) {
				e.preventDefault();
			}
			e.preventDefault();
	}		
});
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if (buttonCount == 1) {
			if ($(this).text() == "style='list-style-type:circle'") {
				$('.introjs-nextbutton').show();
				$(this).removeClass("empty");
			} else {
				$('.introjs-nextbutton').hide();
				$(this).addClass("empty");
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter style='list-style-type:circle'.</span>");
			}
		} else if (buttonCount == 2) {
			//$(this).attr('contenteditable', true);
			if ($(this).text() == ";") {
				$('.introjs-nextbutton').show();
				$(this).removeClass("empty");
			} else {
				$('.introjs-nextbutton').hide();
				$(this).addClass("empty");
				$('.introjs-tooltiptext').append('<span class="ct-code-b-red error-text"><br/>Please enter style="list-style-type:circle".</span>');
			}
		}
	});
}

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector, buttonCount);
	
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

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
}
</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Styling Lists</h4>
</div>
<div class="col-xs-12">
	<div class="col-xs-offset-2 col-xs-4 margin-top-20">
		<div id="ulCode" class="opacity00">
		<pre class="creampretab"><span id="ulHtmlOpenTag" class="opacity00">&lt;html&gt;</span>
  <span id="ulBodyOpenTag" class="opacity00">&lt;body&gt;</span>
    <span id="totalUl"><span id="ulOpenTag" class="opacity00">&lt;ul <span id="enterStyleType" contenteditable='true', spellcheck='false', maxlength='30'></span>&gt;</span>
      <span id="totalLi"><span id="ulFirstLi" class="opacity00"><span id="li1OpenTag">&lt;li&gt;</span><span id="ulLi1Data">Java</span><span id="li1CloseTag">&lt;/li&gt;</span></span>
      <span id="ulSecondLi" class="opacity00"><span id="li2OpenTag">&lt;li&gt;</span><span id="ulLi2Data">HTML</span><span id="li2CloseTag">&lt;/li&gt;</span></span>
      <span id="ulThirdLi" class="opacity00"><span id="li3OpenTag">&lt;li&gt;</span><span id="ulLi3Data">CSS</span><span id="li3CloseTag">&lt;/li&gt;</span></span></span>
    <span id="ulCloseTag" class="opacity00">&lt;/ul&gt;</span></span>
  <span id="ulBodyCloseTag" class="opacity00">&lt;/body&gt;</span>
<span id="ulHtmlCloseTag" class="opacity00">&lt;/html&gt;</span></pre>
		</div>
	</div>
	<div class="col-xs-5 margin-top-20">
		<div id="ulBrowser" class="opacity00">
			<img class="browser-img" alt="" src="ct-img.png">
			<div id="outputDiv1" class="output-div">
			</div>
		</div>
	</div>
</div>
<div class="col-xs-10	 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>	
</body>
</html>