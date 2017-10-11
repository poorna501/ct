<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/jquery.scrollTo.js" type="text/javascript"></script> 
<title>only three</title>

<style type="text/css">

#styleDiv {
	height: 160px;
}
.margin-top-20 {
	margin-top: 20px;
}

pre {
    tab-size:4;
    -moz-tab-size: 4;
    -o-tab-size:  4;
 	white-space: pre-wrap;
 	border : 2px solid black;
 	font-size: 10px;
}

img {
	width: 100%;
}

.box-border {
	min-height: 552px;
	border : 2px solid black;
}
.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.input-css {
	width : 100px;
	border: medium none;
}

.user-btn {
	background-color: green;
}

.color-blue {
	color: blue;
}

.underline-text {
	text-decoration: underline peru;
}

.descendant-css {
	margin-left: 100px;
	transition: 2s;
}

.descendant-css1 {
	background: yellow;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.text-align-center {
	text-align: center;
}

.button-css {
	background: thistle;
	border: 2px solid red;
	color : navy;
	z-index: 10000001 !important;
}

.padding0 {
	padding: 0px;
}

.visited {
	background: green;
}

.bg-black-color-white {
	background: black;
	color: white;
}

.visited {
	background: green;
}

input:focus {
	background:#fff85a;
}

/* *********************** starting of the browser styles ********************* */
.container {
	padding: 0px;
	margin-top: 30px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 0px;
}

#browser1 {
	padding-bottom: 6px;
	padding-top: 6px;
} 

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

.padding00 {
	padding: 0;
}

ul.tabs > li.active {
  background: #efefef;
}

ul.tabs > li{
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
  height:25px;
  padding: 0;
  overflow:visible;
}

#browser .usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}

p {
	margin: 0 !important;
}

/* *********************** Ending of the browser styles ********************* */

</style>
<script type="text/javascript">
$(document).ready(function() {
	$('.input-css').parent().addClass('opacity00');
	$('#htmlCode span:not([id*="ChapterDiv"])').addClass('opacity00');
	$('button').attr('disabled','disabled');
	initIntroJS();
	$('input').val('');
	$('button').attr('disabled','disabled');
	$('#restart').click(function() {
		location.reload();
	});
	$("body").attr({ondragstart :"return false"});
  	$('*').bind("cut copy paste",function(e) { 
    	e.preventDefault();
  	}); 
  	$('input').attr('disabled','disabled');
});

var str =[];
function initIntroJS() {
	intro = introJs();
	intro.setOptions({
		steps : [  {
			element :"#heading",
			intro : "",
			position : "left",
		}, {
			element : "#topicsDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#h1Tag",
			intro : "",
			position : "top"
		}, {
			element : "#firstDivOpen",
			intro : "",
			position : "top"
		}, {
			element : "#firstDivClose",
			intro : "",
			position : "top"
		}, {
			element : "#firstH2TagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#firstH4TagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#firstPTagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#firstChapterDiv",
			intro : "",
			position : "top"
		}, {
			element : "#secondDivOpen",
			intro : "",
			position : "top"
		}, {
			element : "#secondDivClose",
			intro : "",
			position : "top"
		}, {
			element : "#secondH2TagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#secondH4TagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#secondPTagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#thirdH4TagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#thirdPTagInDiv",
			intro : "",
			position : "top"
		}, {
			element : "#secondChapterDiv",
			intro : "",
			position : "top"
		}, {
			element : "#summary",
			intro : "",
			position : "top"
		}, {
			element : "#assignment",
			intro : "",
			position : "top"
		}, {
			element : "#end",
			intro : "",
			position : "top"
		}, {
			element : "#thirdChapterDiv",
			intro : "",
			position : "top"
		}, {
			element : "#universal",
			intro : "",
			position : "buttom"
		}, {
			element : "#universalProperty1",
			intro : "",
			position : "top"
		}, {
			element : "#selectorOne",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleOne",
			intro : "",
			position : "right"
		}, {
			element : "#child",
			intro : "",
			position : "buttom"
		}, {
			element : "#childProperty1",
			intro : "",
			position : "top"
		}, {
			element : "#selectorTwo",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleTwo",
			intro : "",
			position : "right"
		}, {
			element : "#descendant",
			intro : "",
			position : "buttom"
		}, {
			element : "#descendantProperty1",
			intro : "",
			position : "top"
		}, {
			element : "#selectorThree",
			intro : "",
			position : "buttom"
		}, {
			element : "#totalStyleThree",
			intro : "",
			position : "right"
		}, {
			element : "#restart",
			intro : "",
			position : "right"
		}]});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			$(".introjs-nextbutton").hide();
			var text = "<b class='ct-code-b-yellow'>selectors</b> are patterns used to select the element(s) you want to style.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
			
		case "topicsDiv":
			$('pre').removeClass('opacity00');
			$(".introjs-nextbutton").hide();
			$('#topicsDiv').removeClass('opacity00');
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#topicsDiv').removeClass('opacity00');
				var text = "We are going to discuss these <b class='ct-code-b-yellow'>combinator  selectors</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "h1Tag":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#h1Tag').removeClass('opacity00')
				var text = "This is the heading of the book in <b class='ct-code-b-yellow'>h1</b> tag element.";
				typing(".introjs-tooltiptext", text, function() {
					$('#browser [maxlength]').prop('value','basic-selector-combinators-part1.jsp');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText()">Next →</a>');
				});
			});
			break;
			
		case "firstDivOpen":
		$(".introjs-nextbutton").hide();
		$('.introjs-helperLayer ').one('transitionend', function() {
			$('#firstDivOpen').removeClass('opacity00');
			var text = "Open a <b class='ct-code-b-yellow'>div</b> element for first chapter ,section and subsections.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		});
		break;
		
		case "firstDivClose":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#firstDivClose').removeClass('opacity00');
				var text = "closing of <b class='ct-code-b-yellow'>div</b> for chapter one content.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "firstH2TagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#firstH2TagInDiv').removeClass('opacity00');
				var text = "Define <b class='ct-code-b-yellow'>h2</b> tag for chapter one.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "firstH4TagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#firstH4TagInDiv').removeClass('opacity00');
				var text = "Define <b class='ct-code-b-yellow'>h4</b> tag for chapter one first section.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "firstPTagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#firstPTagInDiv').removeClass('opacity00');
				var text = "Define a <b class='ct-code-b-yellow'>p</b> element for sub-section of first chapter.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "firstChapterDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the total content in the <b class='ct-code-b-yellow'>first</b> chapter.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText1()">Next →</a>');
				});
			});
			break;
			
		case "secondDivOpen":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#secondDivOpen').removeClass('opacity00');
				var text = "Open a <b class='ct-code-b-yellow'>div</b> element for <b class='ct-code-b-yellow'>second</b> chapter "
							+",section and sub-sections.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "secondDivClose":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#secondDivClose').removeClass('opacity00');
				var text = "Closing of <b class='ct-code-b-yellow'>div</b> for chapter-two content.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "secondH2TagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#secondH2TagInDiv').removeClass('opacity00');
				var text = "Define <b class='ct-code-b-yellow'>h2</b> tag for chapter-two.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "secondH4TagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#secondH4TagInDiv').removeClass('opacity00');
				var text = "Define <b class='ct-code-b-yellow'>h4</b> tag for chaper one first section.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "secondPTagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#secondPTagInDiv').removeClass('opacity00');
				var text = "Define a <b class='ct-code-b-yellow'>p</b> element for sub-section of second chapter first section.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "thirdH4TagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#thirdH4TagInDiv').removeClass('opacity00');
				var text = "Define <b class='ct-code-b-yellow'>h4</b> tag for chapter two first section.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "thirdPTagInDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#thirdPTagInDiv').removeClass('opacity00');
				var text = "Define a <b class='ct-code-b-yellow'>p</b> element for sub-section of second chapter second section.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "secondChapterDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the total content in the <b class='ct-code-b-yellow'>second-chapter</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText2()">Next →</a>');
				});
			});
			break;
			
		case "summary":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#summary').removeClass('opacity00');
				var text = "Define a <b class='ct-code-b-yellow'>p</b> element for summary.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "assignment":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#assignment').removeClass('opacity00');
				var text = "Declare <b class='ct-code-b-yellow'>h4</b> element for assignment text.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "end":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#end').removeClass('opacity00');
				var text = "Define a <b class='ct-code-b-yellow'>p</b> Element for end of the course text.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "thirdChapterDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "These are <b class='ct-code-b-yellow'>siblingElements</b> of div element.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="printText3()">Next →</a>');
				});
			});
			break;
			
		case "universal":
			$('#universal').addClass('z-index');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "This selector targets all the elements in an Element. <b class='ct-code-b-yellow'>&bigstar;</b> symbol can use for universal selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "universalProperty1":
			$('.visited').attr('disabled','disabled');
			$('#universal').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.input-css:eq(0)').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>color</b> property can be used for change the text color of given "
							+"element.Here value of the property is <b class='ct-code-b-yellow'>blue</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
			
		case "selectorOne":
			$('input:eq(0)').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the elements that are placed in the inside of div elements.</br>Hint: <b class='ct-code-b-yellow'>div *</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorOne').focus();
					universalDescendantValidation("#selectorOne"," *");
				});
			});
			break;
			
		case "totalStyleOne":
			$('input').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Apply this css-rules to targated elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="universalAnimation()">Next →</a>');
				});
			});
			break;
			
		case "child":
			$('#htmlCode,#browser').removeClass('z-index');
			$('.user-btn').remove();
			$('.visited').removeAttr('disabled').addClass('z-index');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Child selector can be used to select all child elements of given elements(Not sub-child elemnts).<b class='ct-code-b-yellow'>"
							+" > </b> symbol used for child selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "childProperty1":
			$('.visited').attr('disabled','disabled');
			$('#child').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.input-css:eq(1)').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>text-decoration:underline</b> property value used to underline text of a given elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "selectorTwo":
			$('input:eq(1)').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the elements <b class='ct-code-b-yellow'>h2</b> elements that are inside of "
							+"a <b class='ct-code-b-yellow'>div</b> elements. </br> Hint: <b class='ct-code-b-yellow'>div > h2</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorTwo').focus();
					selectorValidation("#selectorTwo",">","h2");
				});
			});
			break;
			
		case "totalStyleTwo":
			$('input').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Apply this css-rules to targated elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="childAnimation()">Next →</a>');
				});
			});
			break;
			
		case "descendant":
			$('#htmlCode,#browser').removeClass('z-index');
			$('.user-btn').remove();
			$('descendant').addClass('.visited');
			$('.visited').removeAttr('disabled').addClass('z-index');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Child selector can be used to select all child elements of given elements(Not sub-child elemnts).<b class='ct-code-b-yellow'>"
							+" > </b> symbol used for child selector.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "descendantProperty1":
			$('.visited').attr('disabled','disabled');
			$('#child').addClass('visited');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.input-css:eq(2)').parent().removeClass('opacity00');
				var text = "<b class='ct-code-b-yellow'>margin-left:100px</b> property value can be used to element moves towards left side and "
							+"<b class='ct-code-b-yellow'>background:yellow</b> property value change the background color of an elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "selectorThree":
			$('input:eq(2)').removeAttr('disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select all the p elements of div elements irrespective of child or sub-child "
							+"</br> <b class='ct-code-b-yellow'>div p</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('#selectorThree').focus();
					universalDescendantValidation("#selectorThree"," p");
				});
			});
			break;
			
		case "totalStyleThree":
			$('#restart').parent().removeClass('hide');
			$('input').attr('disabled','disabled');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Apply this set of css-rules to targated elements.";
				typing(".introjs-tooltiptext", text, function() {
					$('#htmlCode,#browser').addClass('z-index');
					intro.refresh();
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="descendantAnimation()">Next →</a>');
				});
			});
			break;
			
		case "restart":
			$('.z-index').removeClass('z-index');
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text, function() {
					$('#restart').removeClass('opacity00');
				});
			});
			break;
		}
	});
	intro.setOption('showStepNumbers', false);
	intro.setOption('exitOnOverlayClick', false);
	intro.setOption('exitOnEsc', false);
	intro.setOption('keyboardNavigation', false);
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : 10,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function printText() {
	$('.user-btn').remove();
	var text = "Now this <b class='ct-code-b-yellow'>html code</b> output will be displayed on the <b class='ct-code-b-yellow'>browser</b>.";
	typing(".introjs-tooltiptext", text, function() {
		$("#browser").addClass("z-index").removeClass('opacity00');
		$("#h1Tag").effect("transfer", {to: $("#browserText > h1"), className: "ui-effects-transfer"}, 1500, function() {
			$("#browserText > h1").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function printText1() {
	$('.user-btn').remove();
	var text = "Now this html code output will be displayed on the browser without appling any css-rules this elements.";
	typing(".introjs-tooltiptext", text, function() {
		$("#firstChapterDiv").effect("transfer", {to: $("#browserText > div:eq(0)"), className: "ui-effects-transfer"}, 1500, function() {
			$("#browserText > div:eq(0)").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function printText2() {
	$('.user-btn').remove();
	var text = "Now this html code output will be displayed on the browser without appling any css-rules this elements.";
	typing(".introjs-tooltiptext", text, function() {
		$("#secondChapterDiv").effect("transfer", {to: $("#browserText > div:eq(1)"), className: "ui-effects-transfer"}, 1500, function() {
			$("#browserText > div:eq(1)").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function printText3() {
	$('.user-btn').remove();
	var text = "Now this html code output will be displayed on the browser without appling any css-rules this elements.";
	typing(".introjs-tooltiptext", text, function() {
		$("#thirdChapterDiv").effect("transfer", {to: $("#browserText > div:eq(2)"), className: "ui-effects-transfer"}, 1500, function() {
			$("#browserText > div:eq(2)").removeClass("opacity00");
			$('.introjs-nextbutton').show();
		});
	});
}

function universalAnimation() {
	$('span[id*=TagInDiv]').addClass('bg-black-color-white');
	transfer('#htmlCode span[id*=TagInDiv]:eq(0)','#browserText > div *:eq(0)','color-blue',function() {
		transfer('#htmlCode span[id*=TagInDiv]:eq(1)','#browserText > div *:eq(1)','color-blue',function() {
			transfer('#htmlCode span[id*=TagInDiv]:eq(2)','#browserText > div *:eq(2)','color-blue',function() {
				transfer('#htmlCode span[id*=TagInDiv]:eq(3)','#browserText > div *:eq(3)','color-blue',function() {
					transfer('#htmlCode span[id*=TagInDiv]:eq(4)','#browserText > div *:eq(4)','color-blue',function() {
						transfer('#htmlCode span[id*=TagInDiv]:eq(5)','#browserText > div *:eq(5)','color-blue',function() {
							transfer('#htmlCode span[id*=TagInDiv]:eq(6)','#browserText > div *:eq(6)','color-blue',function() {
								transfer('#htmlCode span[id*=TagInDiv]:eq(7)','#browserText > div *:eq(7)','color-blue',function() {
									$('span[id*=TagInDiv]').removeClass('bg-black-color-white');
									dynamicStepCalling();
								});
							});
						});
					});
				});
			});
		});
	});
}

function childAnimation() {
	$('[id*=H2]').addClass('bg-black-color-white');
	transfer('[id*=H2]:eq(0)','#browserText > div:eq(0) *:eq(0)','underline-text',function() {
		transfer('[id*=H2]:eq(1)','#browserText > div:eq(1) *:eq(0)','underline-text',function() {
			$('[id*=H2]').removeClass('bg-black-color-white');
			dynamicStepCalling();
		});
	});
}

function descendantAnimation() {
	$('.user-btn').remove();
	$('[id*=PTag]').addClass('bg-black-color-white');
	$("[id*=PTag]:eq(0)").effect("transfer", {to: $("#browserText div:eq(0) > p"), className: "ui-effects-transfer"}, 1500, function() {
		$("#browserText div:eq(0) > p").addClass('descendant-css').delay(2000).queue(function(){
			$("#browserText div:eq(0) > p").addClass('descendant-css1').dequeue();
			$("[id*=PTag]:eq(1)").effect("transfer", {to: $("#browserText div:eq(1) > p:eq(0)"), className: "ui-effects-transfer"}, 1500, function() {
				$('#browserText div:eq(1) > p:eq(0)').addClass('descendant-css').delay(2000).queue(function(){
					$('#browserText div:eq(1) > p:eq(0)').addClass('descendant-css1').dequeue();
					$("[id*=PTag]:eq(2)").effect("transfer", {to: $("#browserText div:eq(1) > p:eq(1)"), className: "ui-effects-transfer"}, 1500, function() {
						$('#browserText div:eq(1) > p:eq(1)').addClass('descendant-css').delay(2000).queue(function(){
							$('#browserText div:eq(1) > p:eq(1)').addClass('descendant-css1').dequeue();
							$('[id*=PTag]').removeClass('bg-black-color-white');
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function transfer(selector1,selector2,className,callBackFunction) {
	$('.user-btn').remove();
	$(selector1).effect("transfer", {to: $(selector2), className: "ui-effects-transfer"}, 2500, function() {
		$(selector2).addClass(className);
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function universalDescendantValidation(selector,value) {
	$(selector).off("keyup").focus();
	$(selector).on("keyup", function(e) {
	    var one = $(selector).val();
	    var two = value;
	    var three ="div";
	    if (one.indexOf(two) > -1 && one.indexOf(three) > -1) {
	        var flag = false;
	    $.each(one.split(value), function(index, val) {
	      if ((index == 0 && val.trim() == "div") || (index == 1 && val.trim() == "") ) {
	        flag = !flag;
	        $('.introjs-nextbutton').show();
	      } else {
	    	  $('.introjs-nextbutton').hide();
	      }
	    });
	   } else {
		   $('.introjs-nextbutton').hide();
	   }
	});
}

function selectorValidation(selector,symbol,element) {
	$(selector).off("keyup");
	$(selector).on("keyup", function(e) {
		var b = $(this).val();
		var div1 = b.trim().substring(0,3);
		var vv =b.replace(/\s/g,'');
			if ( div1 ==="div" && vv === "div"+symbol+element) {
				flag = false;
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-nextbutton').hide();
			}
	});
} 

function universalClick() {
	$('input:eq(0)').val(""); 
	$('.color-blue').removeClass('color-blue');
	intro.goToStep(23);
}

function childClick() {
	$('input:eq(1)').val(""); 
	$('.underline-text').removeClass('underline-text');
	intro.goToStep(27);
}

function dynamicStepCalling() {
	$('input').attr('disabled','disabled');
	if ($('.visited').length == 1) {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(26)">Next &#8594;</a>');
	} else if ($('.visited').length == 2) {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(30)">Next &#8594;</a>');
	} 
}
</script>
</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='heading'>Working with
			Selectors</h4>
	</div>
	<div class='col-xs-12 text-center margin-top-20'>
	 <div class='col-xs-offset-1 col-xs-10'>
			<div class='col-xs-offset-1 col-xs-10 opacity00' id='topicsDiv'>
				<div class='col-xs-4 padding0'>
					<button id='universal' onclick="universalClick()" type="button"
						class="btn btn-success">Universal Selector (&starf;)</button>
				</div>
				<div class='col-xs-4 padding0'>
					<button id='child' onclick="childClick()" type="button"
						class="btn btn-success">Child Selector (>)</button>
				</div>
				<div class='col-xs-4 padding0'>
					<button id='descendant' onclick="descendantClick()" type="button"
						class="btn btn-success">Descendant Selector (" ")</button>
				</div>
			</div>
		</div> 
	</div>
	<div class='col-xs-12 margin-top-20'>
		<div class='col-xs-6'>
			<div class='col-xs-12'>
				<pre class='opacity00'>
&lt;html&gt;				
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'><span id='totalStyleOne'><input id="selectorOne" class="input-css" maxlength='10'> {
	<span id='universalProperty1'>color:&nbsp;blue;</span>
}</span>
<span id='totalStyleTwo'><input id="selectorTwo" class="input-css" maxlength='10'> {
	<span id='childProperty1'>text-decoration:&nbsp;underline peru;</span>
}</span>
<span id='totalStyleThree'><input id="selectorThree" class="input-css" maxlength='10'> {
	<span id='descendantProperty1'>margin-left:&nbsp;100px;
	background:&nbsp;yellow;</span>
}</span></div>
&lt;/style&gt;
&lt;body&gt;
<div id='htmlCode'><span id='h1Tag'>	&lt;h1 style="text-align: center; color: red;"&gt;HTML BOOK&lt;/h1&gt;</span>
	<span id='firstChapterDiv'><span id='firstDivOpen'>&lt;div&gt;</span>
		<span id='firstH2TagInDiv'>&lt;h2&gt;1. Chapter 1&lt;/h2&gt;</span>
		<span id="firstH4TagInDiv">&lt;h4&gt;1.1 Section&lt;/h4&gt;</span>
		<span id='firstPTagInDiv'>&lt;p&gt;1.1.1 Introduction Tags and selectors&lt;/p&gt;</span>
	<span id='firstDivClose'>&lt;/div&gt;</span></span>
	<span id='secondChapterDiv'><span id='secondDivOpen'>&lt;div&gt;</span>
		<span id='secondH2TagInDiv'>&lt;h2&gt;2. Chapter 3&lt;/h2&gt;</span>
		<span id='secondH4TagInDiv'>&lt;h4&gt;2.1 Section&lt;/h4&gt;</span>
		<span id='secondPTagInDiv'>&lt;p&gt;2.1.1 Using relative position&lt;/p&gt;</span>
		<span id='thirdH4TagInDiv'>&lt;h4&gt;2.2 Section&lt;/h4&gt;</span>
		<span id='thirdPTagInDiv'>&lt;p&gt;2.2.1 Using absolute position&lt;/p&gt;</span>
	<span id='secondDivClose'>&lt;/div&gt;</span></span>
	<span id='thirdChapterDiv'><span id='summary'>&lt;p&gt;Summary&lt;/p&gt;</span>
	<span id='assignment'>&lt;h4&gt;Assignment&lt;/h4&gt;</span>
	<span id='end'>&lt;p&gt;End of the course&lt;/p&gt;</span></span></div>
&lt;/body&gt;
&lt;/html&gt;</pre>
			</div>
		</div>
		<div class='col-xs-6'>
			<div class='col-xs-12 opacity00 container' id='browser'>
			<div class='tab-container'>
		<ul class="tabs clearfix">
			<li class="active">
				<div class="col-xs-10 margin-top20">insert title</div>
				<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
			</li>
		</ul>
		<span id ="plus"><i class="fa fa-plus"></i></span>
	</div>
	<div id='browser1' class='col-xs-12 padding00'>
		<div class='col-xs-2 padding00 text-center'>
			<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
			<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
			<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
		</div>
		<div class='col-xs-8 padding00 text-center url'>
			<input type="text" maxlength="100" class="usr-text" class="padding00" disabled="disabled" value="basic.jsp">
			<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
		</div>
		<div class='col-xs-2 padding00 fa-display text-center'>	
			<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
			<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
		</div>
	</div>
	<div class ="col-xs-12 html-body padding00" id = "htmlBody">
				<div id='browserText'>
					<h1 class='opacity00' style="text-align: center; color: Red">HTML
						BOOK</h1>
					<div class='opacity00'>
						<h2>1. Chapter 1</h2>
						<h4>1.1 Section</h4>
						<p>1.1.1 Introduction Tags and selectors</p>
					</div>
					<div class='opacity00'>
						<h2>2. Chapter 2</h2>
						<h4>2.1 Section</h4>
						<p>2.1.1 Using relative position</p>
						<h4>2.2 Section</h4>
						<p>2.2.1 Using absolute position</p>
					</div>
					<div class='opacity00'>
						<p>Summary</p>
						<h4>Assignment</h4>
						<p>End of the course</p>
					</div>
				</div>
			</div>
	</div>
	<div class='col-xs-12 text-center margin-top-20 hide'>
		 <span id='restart'
			class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
			&nbsp;<i class='fa fa-refresh'></i>
		</span> 
	</div>
	</div>
</body>
</html>