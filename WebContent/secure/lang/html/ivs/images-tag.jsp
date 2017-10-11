<!-- =============================================================
TOC-Reference-Name: images-1
Objective: img syntax 
Coverage: image syntax, source, alternate text, title, height, width
Developed By: Padmaja
Developed Date: 28-11-2016
Reviewed by:
Reviewed Date:
Modified Date:  
============================================================= -->



<!DOCTYPE html PUBLIC
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>images</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.padding0 {
	padding: 0;
}

pre {
	-moz-tab-size: 3;
	padding : 6px !important;
	font-size : 13px !important; 
}

.introjs-helperLayer {
	min-height : 22px !important;
}

#browserImage {
	width: 100%;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
#linking {
	min-width: 15px;
	min-height: 15px;
	display: inline-block;
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

#linkEnter, #hrefEnter, #urlEnter, #textEnter ,#altEnter ,#titleEnter,#titletextEnter {
	outline: none;
}
#widthEnter, #widthtextEnter, #heightEnter, #heighttextEnter {
	outline: none;
}
#altText {
	position : relative;
}

.usr-btn {
	background-color: green;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

 #browserText {
 	border: 1px solid black; 
 	height: 200px;
} 

.ui-effects-transfer {
	z-index: 9999999;
	border: 1px solid #003399;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	position: relative;
}

.usr-text {
	border-width: 0px;
	background-color: #f5f5f5;
}

#docType {
	width: 123px;
}

.width-50 {
	width: 50px;
}

.width-59 {
	width: 59px;
}

#titleClose {
	width: 66px;
}

#titleText {
	width: 52px;
}

#withoutLink {
	width: 83px;
}

.marginleft20 {
	margin-left : 20px !important;
}

</style>
<script>
var introjs;

var DELETE = 46;
var BACKSPACE = 8;
var ESC = 27;
var LEFTARROW = 37;
var RIGHTARROW = 39;
var ENTER = 13;
var TAB = 9;
var CTRL = 17;

$(document).ready(function() {
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
		$('.usr-text').val('');
		$('.usr-text1').val('');
		$('.usr-text2').val('');
	})
	//drag option disabled
	window.ondragstart = function() {
		return false; 
	}
	
	$("[contenteditable = true]").on('keydown', function(e) {
		var max = $(this).attr("maxlength");
		introjs.refresh();
		
		if ($.inArray(e.keyCode, [DELETE, BACKSPACE, ESC, LEFTARROW, RIGHTARROW, ENTER, TAB, CTRL]) !== -1) {
			return;
		}
		 
		if ($(id).text().length >= max) {
			e.preventDefault();
		}
	});
});

function initIntroJS() {
	introjs=introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps : [{
					element: '#heading',
					intro: '',
					position: 'right'
				}, {
					element: '#docTypeDiv',
					intro: ''
				}, {
					element: '#htmlOpenDiv',
					intro: ''
				}, {
					element: '#htmlCloseDiv',
					intro: ''
				}, {
					element: '#headOpenDiv',
					intro: ''
				}, {
					element: '#headCloseDiv',
					intro: ''
				},
				{
					element: '#titleOpenDiv',
					intro: ''
				}, 
				{
					element: '#titleCloseDiv',
					intro: ''
				}, 
				{
					element: '#titletextDiv',
					intro: ''
				}, 
				{
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#bodyOpen',
					intro: ''
				}, {
					element: '#bodyClose',
					intro: ''
				},
				{
					element: '#linking',
					intro: ''
				},
				{
					element: '#browser',
					intro: '',
					position: 'left'
				}, 
				{
					element: '#linking',
					intro: ''
				},
				{
					element: '#browser',
					intro: '',
					position: 'left'
				}, 
				{
					element: '#linking',
					intro: ''
				},
				{
					element: '#browser',
					intro: '',
					position: 'left'
				},
				{
					element: '#linking',
					intro: ''
				},
				{
					element: '#browser',
					intro: '',
					position: 'left'
				}, 
				{
					element: '#linking',
					intro: ''
				},
				{
					element: '#browser',
					intro: '',
					position: 'left'
				},
				{
					element: '#linking',
					intro: ''
				},
				{
					element: '#browser',
					intro: '',
					position: 'left'
				}, 
				{
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		
			case "heading":
				$('.usr-text').attr("disable", true);
				$('.introjs-nextbutton').hide();
					var text = "Let us learn to insert an image in a webpage using the self closing <span class='ct-code-b-yellow'>&lt;img&gt;</span> tag.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
		
			case "docTypeDiv":
				$(".program").removeClass("opacity00");
				$('.introjs-nextbutton').hide();
				setTimeout(function() {
					var text = "Enter Doctype declaration.<br>Hint: <span class='ct-code-b-yellow'>&lt;!DOCTYPE html&gt;</span>"
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#docType", "<!DOCTYPE html>", 0, 1);
					});
				},1500);
				break;
				
			case "htmlOpenDiv":
				$('.introjs-nextbutton').hide();
				setTimeout(function() {
					var text = "Open html tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#htmlOpen", "<html>", 0, 1);
					});
				},1500);
				break;
				
			case "htmlCloseDiv":
				$('.introjs-nextbutton').hide();
				setTimeout(function() {
					var text = "Close the html tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#htmlClose", "</html>", 0, 1);
					});
				},1500);
				break;
				
			case "headOpenDiv":
				$('.introjs-nextbutton').hide();
				setTimeout(function() {
					var text = "Open head tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#headOpen", "<head>", 0, 1);
					});
				},1500);
				break;
				
			case "headCloseDiv":
				$('.introjs-nextbutton').hide();
				setTimeout(function() {
					var text = "Close the head tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#headClose", "</head>", 0, 1);
					});
				},1500);
				break;
		
			case "titleOpenDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Open title tag";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						inputsValidation("#titleOpen", "<title>", 0, 1);
					})
				});
			break;
			case "titleCloseDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Close title tag";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						inputsValidation("#titleClose", "</title>", 0, 1);
					})
				});
			break;	
			case "titleTextDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Enter the text as <span class='ct-code-b-yellow'>images</span>";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						inputsValidation("#titleText", "images", 0, 1);
					})
				});
			break;	
			case "browser":
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 9) {
						$("#browser").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$(this).removeClass("animated zoomIn");
							var text = "<span class='ct-code-b-yellow'>Title</span> displays here in the browser.";
							typing('.introjs-tooltiptext', text, function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 500);
							});
						})
					} else if (introjs._currentStep == 13) {
						$('#natureDiv').addClass('opacity00');
						$('#browserText').removeClass('opacity00');
						$("#urlEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
							$('#natureDiv').removeClass('opacity00');							
							$('.introjs-tooltip').removeClass("hide");
							var text = "The image is displayed in the browser";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						}); 
					} else if (introjs._currentStep == 15) {	
						setTimeout(function() { 
							typingContent = 'As the image is displaying properly, text in <span class="ct-code-b-yellow">alt</span> does not appear.';
							typing('.introjs-tooltiptext', typingContent,function() {
								$('.introjs-nextbutton').show();
							});
						},500);
					} else if (introjs._currentStep == 17) {
						typingContent = 'The text in the <span class="ct-code-b-yellow">alt</span> attribute is displayed as the browser could not find the image.';
						typing('.introjs-tooltiptext', typingContent,function() {
							$('#browserText').append('<span id = altText class = "opacity00 position">'+$("#altEnter").text()+'</span>');
							$("#altEnter").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},1000, function() {
								$("#altEnter").removeClass("z-index1000000");
								$('#altText').removeClass('opacity00');
								fromEffectWithTweenMax("#altEnter", "#altText", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					} else if (introjs._currentStep == 19) {
						setTimeout(function() { 
							typingContent = 'To see the <span class="ct-code-b-yellow">title</span> of the image, move the mouse over to the image in the browser.';
							typing('.introjs-tooltiptext', typingContent,function() {
								$('.introjs-nextbutton').show();
							});
						},500);
					} else if (introjs._currentStep == 21) {
						setTimeout(function() { 
							typingContent = 'Notice the change in <span class=ct-code-b-yellow>image height</span>';
							typing('.introjs-tooltiptext', typingContent,function() {
								setTimeout(function() { 
									$("#heighttextEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
										heightvalue = $('#heighttextEnter').text();
										$('#natureDiv').css({'height': heightvalue});
										$('.introjs-nextbutton').show();
									});
								}, 800);
							});
						},500);
					} else if (introjs._currentStep == 23) {
						setTimeout(function() { 
							typingContent = 'Notice the change in <span class = "color-yellow">image width</span>';
							typing('.introjs-tooltiptext', typingContent,function() {
								setTimeout(function() { 
									$("#widthtextEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
										widthvalue = $('#widthtextEnter').text(); 
										$('#natureDiv').css({'width': widthvalue}); 
										$('.introjs-nextbutton').show();
									});
								}, 800);
							});
						},500);
					}
				});
				break;
				
			case "bodyOpen":
				$('.introjs-nextbutton').hide();
				setTimeout(function() { 
					var text = "Open body tag.";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyOpen", "<body>", 0, 1);
					});
				},1500);
				break;
				
			case "bodyClose":
				$('.introjs-nextbutton').hide();
				setTimeout(function() { 
					var text = "Close body tag.";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyClose", "</body>", 0, 1);
					});
				},1500);
				break;
				
			case "linking":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 12) {
						var text = "Enter an image tag.</br>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span><br/><ul><li>&lt;img&gt; is a self-closing tag.</li><li>Closing tag doesn't exist for <span class='ct-code-b-yellow'>&lt;img&gt;</span></li></ul>";
						typing('.introjs-tooltiptext', text, function() {
							spanValidation("#linkEnter", "<img>", 2, 0);
						});
					} else if (introjs._currentStep == 14) {
						$('.introjs-tooltiptext').append('<ul><li>');
						var text = "Enter <span class='ct-code-b-yellow'>alt=\"\"</span><br/>The text in alt displays in the browser instead of image, if the image is not loaded properly.";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							userButton(4);
						});
					} else if (introjs._currentStep == 16) {
						$('.introjs-tooltiptext').append('<ul><li>');
						var text = "Enter <span class='ct-code-b-yellow'>nnature.png</span>.";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							userButton(6);
						});
					} else if (introjs._currentStep == 18) {
						userButton(7);
					} else if (introjs._currentStep == 20) {
						userButton(9);
					} else if (introjs._currentStep == 22) {
						userButton(11);
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
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": "20",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//text for intro steps
function typingText(elementId, tag, callBackFunction) {
	$('.introjs-nextbutton').hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		var text = "Enter <span class='ct-code-b-yellow'>" + tag +"</span>";
		typing('.introjs-tooltiptext', text, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	});
}

//inputs validation(for basic tags)
function inputsValidation(id, tag, count, val) {
	$(id).removeClass("opacity00");
	$(id).attr("disabled", false);
	$(id).focus();
	
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	$(id).off("keyup");
	$(id).on("keyup", function(e) {
		$(".ct-red").remove();
		if ($(id).val() == tag) {
			$(id).attr({"disabled" : true});
			if (val == 1) {
				$(".introjs-nextbutton").show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
			}
		} else {
			$(".introjs-nextbutton, .usr-btn").hide();
			$('.introjs-tooltiptext').append("<div class='ct-red'>write text</div>");
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 0) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Close <span class='ct-code-b-yellow'>title</span> tag.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			inputsValidation("#titleClose", "</title>", 0,1);
		});
	} else if (count == 1) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter the text in the title as <span class='ct-code-b-yellow'>images</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			inputsValidation("#titleText", "images", 0, 1);
		});
	} else if (count == 2) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		var text = "Type <span class='ct-code-b-yellow'>src=\"\"</span>.<br/>src - source path of an image file";
		typing('.introjs-tooltiptext', text, function() {
			$('#linkEnter').text('');
			$("#linkEnter").append('&lt;img <span id="hrefEnter" contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;');
			introjs.refresh();
			spanValidation("#hrefEnter", "src=\"\"", 3, 0);
		});
	} else if (count == 3) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		var text = "Enter <span class='ct-code-b-yellow'>nature.png</span><br/>value of the image source.";
		typing('.introjs-tooltiptext', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src=\"<span id="urlEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introjs.refresh();
			spanValidation("#urlEnter", "nature.png", 0,1);
		});
	} else if (count == 4) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$("#linkEnter").text('');
		$("#linkEnter").append('&lt;img src="nature.png" <span id="textEnter" contenteditable="false" spellcheck="false" maxlength="10"></span>&gt;');
		introjs.refresh();
		spanValidation("#textEnter", "alt=\"\"", 5,0);
	} else if (count == 5) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Type <span class='ct-code-b-yellow'>alternate text</span>. <br>If the image is not displaying, this text in <span class='ct-code-b-yellow'>alt</span> appears in the browser.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt=\"<span id="altEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introjs.refresh();
			spanValidation("#altEnter", "alternate text", 0,1);
		});
	} else if (count == 6) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "We are giving a wrong value in src to see the alt text.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src=\"<span id="urlEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>" alt="<span id = "altEnter">alternate text</span>"&gt;');
			introjs.refresh();
			spanValidation("#urlEnter", "nnature.png", 0,1);
			$('#natureDiv').remove();
		});
	} else if (count == 7) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li>');
		var text = "Type <span class='ct-code-b-yellow'>title=\"\"</span>.<br>The title is displayed when the mouse hovers over the image.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt="alternate text" <span id="titleEnter" contenteditable="false" spellcheck="false" maxlength="10"></span>&gt;');
			introjs.refresh();
			$('#altText').remove();
			$('#browserText').append('<span><img src = "nature.png" id = natureDiv title = "nature at its best"/></span>');
			spanValidation("#titleEnter", "title=\"\"", 8,0);
		});
	} else if (count == 8) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = " Enter title text as <br><span class='ct-code-b-yellow'>nature at its best</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt="alternate text" title=\"<span id="titletextEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introjs.refresh();
			spanValidation("#titletextEnter", "nature at its best", 0,1);
		});
	} else if (count == 9) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li>');
		var text = "Type <span class='ct-code-b-yellow'>height=\"\"</span><br/>Height attribute specifies the image height.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt="alternate text" title="nature at its best"<br> <span id="heightEnter" contenteditable="false" spellcheck="false" maxlength="10"></span>&gt;');
			introjs.refresh();
			spanValidation("#heightEnter", "height=\"\"" , 10,0);
		});
	} else if (count == 10) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = " Enter height as <span class='ct-code-b-yellow'>128</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt="alternate text" title="nature at its best"<br>height="<span id="heighttextEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introjs.refresh();
			spanValidation("#heighttextEnter", "128", 0,1);
		});
	} else if (count == 11) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext').append('<ul><li></li>');
		var text = "Type <span class='ct-code-b-yellow'>width=\"\"</span><br>Width attribute specifies the image width.";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt="alternate text" title="nature at its best"<br>height="128" <span id="widthEnter" contenteditable="false" spellcheck="false" maxlength="10"></span>&gt;');
			introjs.refresh();
			spanValidation("#widthEnter", "width=\"\"" , 12,0);
		});
	} else if (count == 12) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter width as <span class='ct-code-b-yellow'>128</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;img src="nature.png" alt="alternate text" title="nature at its best"<br>height="128" width="<span id="widthtextEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introjs.refresh();
			spanValidation("#widthtextEnter", "128", 0,1);
		});
	}
}

//transfer effect
function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("z-index");
	$(id1).effect("highlight", {color : "yellow"}).effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 1500, function() {
		$(id2).removeClass("opacity00");
		$(id1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
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

//contenteditable validation
function spanValidation(id, tag, count, val) {
	$('[contenteditable = false]').attr('contenteditable', 'true');
	$(id).focus();
	
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	$(id).on('keyup', function(e) {
		$(".usr-btn").remove();
		$(".ct-red").remove();
		introjs.refresh();
		if ($(id).text() == tag) {
			$('[contenteditable = true]').attr('contenteditable', 'false');
			if (val == 1) {
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(' + count + ')">Next &#8594;</a>');
			}
		} else {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="ct-red">write above tag / text</div>');
		}
	});
}

</script>
</head>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">images</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
		<div class="col-xs-6 padding0 program opacity00">
<pre>
 <span id = docTypeDiv><input type="text" maxlength="15" class="usr-text opacity00" id="docType"></span>
  <span id = htmlOpenDiv><input type="text" maxlength="6" class="usr-text width-50 opacity00" id="htmlOpen"></span>
     <span id = headOpenDiv><input type="text" maxlength="6" class="usr-text width-50 opacity00" id="headOpen"></span>
		 <span id="titleTag"><span id = titleOpenDiv><input type="text" maxlength="7" class="usr-text width-59 opacity00" id="titleOpen"></span><span id = titleTextDiv><input type="text" maxlength="6" class="usr-text opacity00" id="titleText"></span><span id = titleCloseDiv><input type="text" maxlength="8" class="usr-text opacity00" id="titleClose"></span></span>
     <span id = headCloseDiv><input type="text" maxlength="7" class="usr-text width-59 opacity00" id="headClose"></span>
     <span><input type="text" maxlength="6" class="usr-text width-50 opacity00" id="bodyOpen"></span>
		 <div id="linking"><span id="linkEnter" contenteditable="false" maxlength="7" spellcheck="false"></span></div>
     <span><input type="text" maxlength="7" class="usr-text width-59 opacity00" id="bodyClose"></span>
  <span id = htmlCloseDiv><input type="text" maxlength="7" class="usr-text width-59 opacity00" id="htmlClose"></span>
</pre>
</div>		
			<div class=" col-xs-5 opacity00 marginleft20 margin20 " id="browser" style = 'display : inline-block;'>
			<img src="/images/ct.png" id = 'browserImage'>
			<div class="browser-text opacity00 padding0" id = 'browserText'>
				<img src = "/images/nature.png" id = natureDiv>
			</div>
		</div>
			<div class="col-xs-12 text-center margin-top-25">
				<span class="btn btn-warning opacity00" id="restart">Restart</span>
			</div>
		</div>
	</div>
</body>
</html>