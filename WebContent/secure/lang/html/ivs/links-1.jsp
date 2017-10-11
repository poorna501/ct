<!-- =============================================================
TOC-Reference-Name: links-1
Objective: link syntax and how to use links
Coverage: link to url
Developed By: Mallika
Developed Date: 26-11-2016
Reviewed by:
Reviewed Date:
Modified Date:  
============================================================= -->


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Links</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
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
	margin: 0;
}

img {
	width: 100%;
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

.usr-btn {
	background-color: green;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.browser {
	border: 1px solid black;
	height: 200px;
	padding: 8px;
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
	width: 43px;
}

#withoutLink {
	width: 83px;
}

a {
	text-decoration: underline;
	font-weight: bold;
}
</style>
<script>
var introjs;
$(document).ready(function() {
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
		$('.usr-text').val('');
	})
	//drag option disabled
	window.ondragstart = function() {
		return false; 
	}
});

function initIntroJS() {
	introjs=introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps : [ {
					element: '#heading',
					intro: '',
					position: 'right'
				}, {
					element: '#program',
					intro: ''
				}, {
					element: '#docType',
					intro: ''
				}, {
					element: '#htmlOpen',
					intro: ''
				}, {
					element: '#htmlClose',
					intro: ''
				}, {
					element: '#headOpen',
					intro: ''
				}, {
					element: '#headClose',
					intro: ''
				}, {
					element: '#titleTag',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#bodyOpen',
					intro: ''
				}, {
					element: '#bodyClose',
					intro: ''
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
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
				var text = "A <span class='ct-code-b-yellow'>Link</span> redirects user directly to a reference data <br/> which can be";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "a whole document or";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						$('.introjs-tooltiptext > ul').append('<li></li>');
						var text = "a specific element within a document <br/> Link can be a text, image or a button";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "program":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#program").removeClass("opacity00");
					var text = "Let us revise a basic HTML Page";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
		
			case "docType":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>Doctype</span> declaration <span class='ct-code-b-yellow'>&lt;!DOCTYPE html&gt;</span>";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#docType", "<!DOCTYPE html>", 0, 1);
					});
				});
				break;
				
			case "htmlOpen":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Open <span class='ct-code-b-yellow'>html</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#htmlOpen", "<html>", 0, 1);
					});
				});
				break;
				
			case "htmlClose":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close the <span class='ct-code-b-yellow'>html</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#htmlClose", "</html>", 0, 1);
					});
				});
				break;
				
			case "headOpen":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Open <span class='ct-code-b-yellow'>head</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#headOpen", "<head>", 0, 1);
					});
				});
				break;
				
			case "headClose":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close the <span class='ct-code-b-yellow'>head</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#headClose", "</head>", 0, 1);
					});
				});
				break;
		
			case "titleTag":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul><li></li></ul>');
					var text = "Open <span class='ct-code-b-yellow'>title</span> tag";
					typing('.introjs-tooltiptext > ul li:last-child', text, function() {
						$("#titleOpen").effect("highlight", {color : "yellow"}, 500);
						inputsValidation("#titleOpen", "<title>", 0, 0);
					})
				});
				break;
				
			case "browser":
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 8) {
						$("#browser").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass("hide");
							var text = "<span class='ct-code-b-yellow'>Title</span> displays here in the browser";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if (introjs._currentStep == 12) {
						transferEffect("#linkEnter", "#textBrowser", function() {
							$('.introjs-tooltip').removeClass("hide");
							var text = "This plain text is about to be modified as link";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else {
						transferEffect("#linkEnter", "#textBrowser", function() {
							$("#textBrowser").text('');
							$('#textBrowser').append('<a href="https://www.codetantra.com" target="targetDiv">Codetantra</a>');
							$('.introjs-tooltip').removeClass("hide");
							var text = "Hover the cursor on the text.<br> Observe that the cursor is changing into hand icon.";
							typing('.introjs-tooltiptext', text, function() {
								$("#textBrowser").click(function() {
									$("#textBrowser").hide();
									$(".browser").css({"height" : "400px", "padding" : "0"});
									introjs.refresh();
									$("#browserImage").hide();
									$("#urlImage").removeClass("hide");
									$(".browser").load("https://www.codetantra.com", function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					}
				});
				break;
				
			case "bodyOpen":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Open <span class='ct-code-b-yellow'>body</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyOpen", "<body>", 0, 1);
					});
				});
				break;
				
			case "bodyClose":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Close the <span class='ct-code-b-yellow'>body</span> tag";
					typing('.introjs-tooltiptext', text, function() {
						inputsValidation("#bodyClose", "</body>", 0, 1);
					});
				});
				break;
				
			case "linking":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 11) {
						var text = "Enter the text <span class='ct-code-b-yellow'>Codetantra</span><br> Observe how this unstyled & plain text appears in the browser";
						typing('.introjs-tooltiptext', text, function() {
							spanValidation("#linkEnter", "Codetantra", 0, 1);
							//$('.introjs-nextbutton').show();
						});
					} else {
						$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
						$("#linkEnter").off();
						var text = "Enter &lt;a&gt; tag to open link.";
						typing('.introjs-tooltiptext', text, function() {
							$('#linkEnter').text('');
							$("#linkEnter").append('<span id="linkOpen" contenteditable="false" spellcheck="false" maxlength="4"></span>Codetantra');
							introjs.refresh();
							spanValidation("#linkOpen", "<a>", 2, 0);
						});
					}
				});
				break;
				
			case "restart":
				$('.introjs-tooltip').css({"min-width": "200px"});
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart";
					typing('.introjs-tooltiptext', text);
				});
				break;
				/* var text = "in url: This is your destination link(take input from ramana sir)" */
		}
	});
	
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": "5",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
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
	
	$(id).off("keydown");
	$(id).on("keydown", function(e) {
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9) {
			e.preventDefault();
		}
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
			$('.introjs-tooltiptext').append("<div class='ct-red'></div>");
			$(".ct-red").text("Please enter " + tag);
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 0) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Close the <span class='ct-code-b-yellow'>title</span> tag";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#titleClose").effect("highlight", {color : "yellow"}, 500);
			inputsValidation("#titleClose", "</title>", 1, 0);
		});
	} else if (count == 1) {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter title as <span class='ct-code-b-yellow'>Links</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$("#titleText").effect("highlight", {color : "yellow"}, 500);
			inputsValidation("#titleText", "Links", 0, 1);
		});
	} else if (count == 2) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		var text = "Close <span class='ct-code-b-yellow'>&lt;a&gt;</span> tag <br/> Hint: <span class='ct-code-b-yellow'>&lt;/a&gt;</span>";
		typing('.introjs-tooltiptext', text, function() {
			$('#linkEnter').text('');
			$("#linkEnter").append('&lt;a&gt;Codetantra<span id="linkClose" contenteditable="false" spellcheck="false" maxlength="4"></span>');
			introjs.refresh();
			spanValidation("#linkClose", "</a>", 3, 0);
		});
	} else if (count == 3) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		var text = "Enter <span class='ct-code-b-yellow'>href=\"\"</span> between a and >. <br/>For linking we add an attribute i.e.,<span class='ct-code-b-yellow'>href</span><br/>"
					+ " <span class='ct-code-b-yellow'>href</span> decides the <span class='ct-code-b-yellow'>link's destination</span>";
		typing('.introjs-tooltiptext', text, function() {
			$('#linkEnter').text('');
			$("#linkEnter").append('&lt;a <span id="hrefEnter" contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;Codetantra&lt;/a&gt;');
			introjs.refresh();
			spanValidation("#hrefEnter", "href=\"\"", 4, 0);
		});
	} else if (count == 4) {
		$("#linkEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#linkEnter").off();
		var text = "Enter <span class='ct-code-b-yellow'>url</span> value \"<span class='ct-code-b-yellow'>https://www.codetantra.com</span>\" between the double quotes";
		typing('.introjs-tooltiptext', text, function() {
			$("#linkEnter").text('');
			$("#linkEnter").append('&lt;a href=\"<span id="urlEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>\"&gt;Codetantra&lt;/a&gt;');
			introjs.refresh();
			spanValidation("#urlEnter", "https://www.codetantra.com", 0, 1);
		});
	}
}

//transfer effect
function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("z-index");
	$(id1).effect("highlight", {color : "yellow"}).effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 1200, function() {
		$(id2).removeClass("opacity00");
		$(id1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//contenteditable validation
function spanValidation(id, tag, count, val) {
	$(id).css({"outline": "none"});
	$('[contenteditable = false]').attr('contenteditable', 'true');
	$(id).focus();
	
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	$(id).off('keydown');
	$(id).on('keydown', function(e) {
		var max = $(this).attr("maxlength");
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9) {
			e.preventDefault();
		}
		if ($(id).text().length >= max) {
			e.preventDefault();
		}
	});
	
	$(id).off('keyup');
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
			$('.introjs-tooltiptext').append('<div class="ct-red">Properly write above text</div>');
		}
	});
}

</script>
</head>
<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Links</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
		<div class="col-xs-5">
<pre class="opacity00" id="program">
<input type="text" maxlength="15" class="usr-text opacity00" id="docType">
<input type="text" maxlength="6" class="usr-text width-50 opacity00" id="htmlOpen">
   <input type="text" maxlength="6" class="usr-text width-50 opacity00" id="headOpen">
		<span id="titleTag"><input type="text" maxlength="7" class="usr-text width-59 opacity00" id="titleOpen"><input type="text" maxlength="5" class="usr-text opacity00" id="titleText"><input type="text" maxlength="8" class="usr-text opacity00" id="titleClose"></span>
   <input type="text" maxlength="7" class="usr-text width-59 opacity00" id="headClose">
   <input type="text" maxlength="6" class="usr-text width-50 opacity00" id="bodyOpen">
		<div id="linking"><span id="linkEnter" contenteditable="false" maxlength="10" spellcheck="false"></span></div>
   <input type="text" maxlength="7" class="usr-text width-59 opacity00" id="bodyClose">
<input type="text" maxlength="7" class="usr-text width-59 opacity00" id="htmlClose">
</pre></div>
			<div class="col-xs-6 col-xs-offset-1">
				<div class="col-xs-12 padding0 opacity00" id="browser">
					<img src="/images/links.png" id="browserImage">
					<img src="/images/links-codetantra.png" id="urlImage" class="hide">
					<div class="browser">
						<span id="textBrowser" class="opacity00">Codetantra</span>
						<iframe name="targetDiv" width="100%" height="100%" frameBorder="0"></iframe>
					</div>
				</div>
			</div>
			<div class="col-xs-12 text-center margin-top-25">
				<span class="btn btn-warning opacity00" id="restart">Restart</span>
			</div>
		</div>
	</div>
</body>
</html>