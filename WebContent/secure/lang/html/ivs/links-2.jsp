 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
<script src="/js/gs/TweenMax.min.js"></script>
<title>Links</title>
<style>
.margin-top-15 {
	margin-top: 15px;
}

.margin-top-20 {
	margin-top: 20px;
}

pre {
	-moz-tab-size: 3;
}

.padding0 {
	padding: 0;
}

.editing {
	display: inline-block;
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

.margin0 {
	margin: 0;
}

img {
	width: 100%;
}

.browser {
	border: 1px solid black;
	padding: 8px;
	height: 190px;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	position: relative;
	padding: 4px;
	border-radius: 4px;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.usr-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 9999999;
}

b {
	background-color: #ccc;
	padding: 0 4px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

a {
	text-decoration: underline;
}

a.link-linker:link {
	color: red !important;
}


a.link-visited:visited {
	color: hotpink !important;
}

a.link-hover:hover {
	background-color: yellow;
}


a.link-active:active {
	color: green !important;
}
</style>
<script>
var introjs;
$(document).ready(function() {
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
	});
	
	//drag option disabled
	$("body").attr({ondragstart : "return false"});
	
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		steps : [ {
					element: '#homeProgram',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#pTagDiv',
					intro: ''
				}, {
					element: '#browser1',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#pOpen',
					intro: ''
				}, {
					element: '#pClose',
					intro: ''
				}, {
					element: '#backGroundDiv',
					intro: ''
				}, {
					element: '#alignmentDiv',
					intro: ''
				}, {
					element: '#selectorDiv',
					intro: ''
				}, {
					element: '#browser1',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#aboutProgram',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#linkingAbout',
					intro: '',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'withoutLink',
					position: 'top'
				}, {
					element: '#linkingAbout',
					intro: '',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'clickLink',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'visitBrowser',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'hoverBrowser',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'activeBrowser',
					position: 'top'
				}, {
					element: '#browser2',
					intro: '',
					animateStep: 'linkerBrowser',
					position: 'top'
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		
			case "homeProgram":
				$('.introjs-nextbutton').hide();
				$("#homeProgram").removeClass("opacity00");
				TweenMax.to($("#docType1"), 1, {opacity: 1, onComplete: function() {
					TweenMax.to($("#htmlOpen1, #htmlClose1"), 1, {opacity: 1, onComplete: function() {
						TweenMax.to($("#headOpen1, #headClose1"), 1, {opacity: 1, onComplete: function() {
							TweenMax.to($("#title1"), 1, {opacity: 1, onComplete: function() {
								$("#browser1").addClass("z-index").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$(this).removeClass("opacity00");
									setTimeout(function() {
										$("#browser1").removeClass("z-index")
										TweenMax.to($("#styleOpen1, #styleClose1"), 1, {opacity: 1, onComplete: function() {
											TweenMax.to($("#bodyOpen1, #bodyClose1"), 1, {opacity: 1, onComplete: function() {
												$('.introjs-tooltip').removeClass("hide");
												var text = "Basic html page";
												typing('.introjs-tooltiptext', text, function() {
													$('.introjs-nextbutton').show();
												});
											}});
										}});
									}, 800);
								});
							}})
						}});
					}});
				}});
				break;
				
			case "pTagDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter <span class='ct-code-b-yellow'>&lt;p&gt;Home page&lt;/p&gt;</span>";
					typing('.introjs-tooltiptext', text, function() {
						validation("#pTag", "<p>Home page</p>", 0, 1);
					});
				});
				break;
				
			case "browser1":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 2) {
						$('.introjs-tooltip').css({'min-width' : '200px'});
						transferEffect("#pTag", "#withoutLinkText", function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 800);
						});
					} else if (introjs._currentStep == 8) {
						$("#backGroundText").addClass("z-index");
						transferEffect("#backGroundText", "#withoutLinkText", function() {
							$("#withoutLinkText").css({"background-color" : "yellow"});
							$("#backGroundText").removeClass("z-index");
							$("#alignmentText").addClass("z-index");
							transferEffect("#alignmentText", "#withoutLinkText", function() {
								$("#withoutLinkText").parent().addClass('text-center');
								$("#alignmentText").removeClass("z-index");
								setTimeout(function() {
									introjs.nextStep();
								}, 800);
							});
						});
					}
				});
				break;
				
			case "selectorDiv":
				stepTyping("#pSelector", "p");
				break;
				
			case "pOpen":
				introjs.refresh();
				stepTyping("#pOpenBrace", "{");
				break;
				
			case "pClose":
				stepTyping("#pCloseBrace", "}");
				break;
				
			case "backGroundDiv":
				customStepsText("#backGroundText", "background-color: yellow;");
				break;
				
			case "alignmentDiv":
				$("#browser1").removeClass("z-index");
				customStepsText("#alignmentText", "text-align: center;");
				break;
				
			case "aboutProgram":
				$("#browser1").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					aboutPageTags();
				});
				break;
				
			case "linkingAbout":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				if (introjs._currentStep == 10) {
					stepTyping("#pText", "About us page");
				} else if (introjs._currentStep == 12) {
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').css({'min-width' : '320px'});
						$("#linkTag").removeAttr("contenteditable maxlength spellcheck");
						$("#linkTag").off();
						$('.introjs-tooltiptext').append('<ul><li></li></ul>');
						var text = "Enter <span class='ct-code-b-yellow'>&lt;a&gt;</span> tag for link Open i.e., <span class='ct-code-b-yellow'>&lt;a&gt;</span>";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							$('#linkingAbout').text('');
							$('#linkingAbout').append('<span id="linkTag"> <span id="aOpenTag" contenteditable="false" maxlength="3" spellcheck="false"></span>'
									+ 'About us page</span>');
							validation("#aOpenTag", "<a>", 1, 0);
						});
					});
				} else {
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#linkTag").removeAttr("contenteditable maxlength spellcheck");
						$("#linkTag").off();
						var text = "Enter url as <span class='ct-code-b-yellow'>hom.html</span>";
						typing('.introjs-tooltiptext', text, function() {
							$("#linkingAbout").text('');
							$("#linkingAbout").append('&lt;a href=\"<span id="wrongUrl" contenteditable="false" spellcheck="false" maxlength="8"></span>\"&gt;About us page&lt;a&gt;');
							introjs.refresh();
							validation("#wrongUrl", "hom.html", 0, 1);
						});
					});
				}
				break;
				
			case "browser2":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				
					case "withoutLink":
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer').one('transitionend', function() {
							transferEffect("#pText", "#browser2Text", function() {
								var text = "Text <span class='ct-code-b-yellow'>without link</span>";
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
						
					case "clickLink":
						$("#urlEnter").removeAttr("style");
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer').one('transitionend', function() {
							transferEffect("#linkingAbout", "#browser2Text", function() {
								$("#browser2Text").text('');
								$("#browser2Text").append('<a href="#" id="aTag">About us page</a>');
								var text = "Click on <span class='ct-code-b-yellow'>link text</span>";
								typing('.introjs-tooltiptext', text, function() {
									$("#styling").append('<span id="firstStyle" class="editing"></span>');
									$("#firstStyle").append('<span id="visitLink"> <span id="visitSelector" contenteditable="false" spellcheck="false" maxlength="9"></span> </span>'
														+ '<span id="visitOpen"> <span id="visitOpenBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>'
														+ '<br>\t<span id="visitStyle"> <span id="visitProperty" contenteditable="false" spellcheck="false" maxlength="15"></span> </span>'
														+ '<br><span id="visitClose"> <span id="visitCloseBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>');
									var newStep = getStep('#visitOpen', '', '', '');
									introjs.insertOption(introjs._currentStep + 1, newStep);
									$("#aTag").click(function() {
										$('#aboutBrowser').hide();
										$('#aboutBrowser2').append($('#homeBrowser').html());
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
						break;
						
					case "visitBrowser":
							$("#aboutBrowser2").text('');
							$("#aboutBrowser").show();
							$('.introjs-nextbutton').hide();
							$('.introjs-helperLayer').one('transitionend', function() {
								$("#firstStyle").addClass("z-index");
								transferEffect("#visitProperty", "#aTag", function() {
									clickBrowser();
									$("#aTag").addClass("link-visited");
									$("#firstStyle").removeClass("z-index");
									var text = "We changed the text color";
									typing('.introjs-tooltiptext', text, function() {
										clickBrowser();
										$("#styling").append('<br><span id="secondStyle" class="editing"></span>');
										$("#secondStyle").append('<span id="hoverLink"> <span id="hoverSelector" contenteditable="false" spellcheck="false" maxlength="7"></span> </span>'
															+ '<span id="hoverOpen"> <span id="hoverOpenBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>'
															+ '<br>\t<span id="hoverStyle"> <span id="hoverProperty" contenteditable="false" spellcheck="false" maxlength="26"></span> </span>'
															+ '<br><span id="hoverClose"> <span id="hoverCloseBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>');
										nextStep('#hoverOpen');
										$('.introjs-nextbutton').show();
									});
								});
							});
							break;
							
					case "hoverBrowser":
						$('#aboutBrowser2').text('');
						$('#aboutBrowser').show();
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#secondStyle").addClass("z-index");
							transferEffect("#hoverProperty", "#aTag", function() {
								clickBrowser();
								$("#aTag").addClass("link-hover");
								$("#secondStyle").removeClass("z-index");
								var text = "<span class='ct-code-b-yellow'>Mouse over</span> on the text";
								typing('.introjs-tooltiptext', text, function() {
									$("#styling").append('<br><span id="thirdStyle" class="editing"></span>');
									$("#thirdStyle").append('<span id="activeLink"> <span id="activeSelector" contenteditable="false" spellcheck="false" maxlength="8"></span> </span>' 
														+ '<span id="activeOpen"> <span id="activeOpenBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>'
														+ '<br>\t<span id="activeStyle"> <span id="activeProperty" contenteditable="false" spellcheck="false" maxlength="13"></span> </span>'
														+ '<br><span id="activeClose"> <span id="activeCloseBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>');
									nextStep('#activeOpen');
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
						
					case "activeBrowser":
						$("#aboutBrowser2").text('');
						$("#aboutBrowser").show();
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#thirdStyle").addClass("z-index");
							transferEffect("#activeProperty", "#aTag", function() {
								clickBrowser();
								$("#aTag").addClass("link-active");
								$("#thirdStyle").removeClass("z-index");
								var text = "Click on link.";
								typing('.introjs-tooltiptext', text, function() {
									$("#styling").append('<br><span id="fourthStyle" class="editing"></span>');
									$("#fourthStyle").append('<span id="linkerLink"> <span id="linkSelector" contenteditable="false" spellcheck="false" maxlength="6"></span> </span>'
														+ '<span id="linkOpen"> <span id="linkOpenBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>'
														+ '<br>\t<span id="linkStyle"> <span id="linkProperty" contenteditable="false" spellcheck="false" maxlength="11"></span> </span>'
														+ '<br><span id="linkClose"> <span id="linkCloseBrace" contenteditable="false" spellcheck="false" maxlength="1"></span> </span>');
									nextStep('#linkOpen');
								});
							});
						});
						break;
						
					case "linkerBrowser":
						$("#aboutBrowser2").text('');
						$("#aboutBrowser").show();
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer').one('transitionend', function() {
							$("#fourthStyle").addClass("z-index");
							transferEffect("#linkProperty", "#aTag", function() {
								$("#browser2Text").text('');
								$("#browser2Text").append('<a href="hom.html" id="anchorTag" target="targetDiv">About us page</a>');
								$("#anchorTag").addClass("link-linker link-hover link-active");
								$("#anchorTag").css({'color' : 'red'});
								$("#fourthStyle").removeClass("z-index");
								var text = "Click on link";
								typing('.introjs-tooltiptext', text, function() {
									$("#anchorTag").click(function() {
									  $("#browser2Text").hide();
									  $('.introjs-nextbutton').show();
									});
								});
							});
						});
						break;
				}
				break;
				
				
			case "visitOpen":
				nextStep("#visitClose");
				stepTyping("#visitOpenBrace", "{");
				break;
				
			case "visitClose":
				nextStep("#visitStyle");
				stepTyping("#visitCloseBrace", "}");
				break;
				
			case "visitStyle":
				nextStep("#visitLink");
				stepTyping("#visitProperty", "color: hotpink;");
				break;
				
			case "visitLink":
				stepTyping("#visitSelector", "a:visited");
				break;
				
			case "hoverOpen":
				introjs.refresh();
				nextStep("#hoverClose");
				stepTyping("#hoverOpenBrace", "{");
				break;
				
			case "hoverClose":
				nextStep("#hoverStyle");
				stepTyping("#hoverCloseBrace", "}");
				break;
				
			case "hoverStyle":
				nextStep("#hoverLink");
				customStepsText("#hoverProperty", "background-color: yellow;");
				break;
				
			case "hoverLink":
				stepTyping("#hoverSelector", "a:hover");
				break;
				
			case "activeOpen":
				introjs.refresh();
				nextStep("#activeClose");
				stepTyping("#activeOpenBrace", "{");
				break;
				
			case "activeClose":
				nextStep("#activeStyle");
				stepTyping("#activeCloseBrace", "}");
				break;
				
			case "activeStyle":
				nextStep("#activeLink");
				stepTyping("#activeProperty", "color: green;");
				break;
				
			case "activeLink":
				stepTyping("#activeSelector", "a:active");
				break;
				
			case "linkOpen":
				nextStep("#linkClose");
				stepTyping("#linkOpenBrace", "{");
				break;
				
			case "linkClose":
				nextStep("#linkStyle");
				stepTyping("#linkCloseBrace", "}");
				break;
				
			case "linkStyle":
				nextStep("#linkerLink");
				stepTyping("#linkProperty", "color: red;");
				break;
				
			case "linkerLink":
				nextStep("#fourthStyle");
				stepTyping("#linkSelector", "a:link");
				break;
				
			case "fourthStyle":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "When we enter wrong url then only red color appears to the text";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#linkingAbout");
						$('.introjs-nextbutton').show();
					});
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
		"typing_interval": "15",
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//=====typing funciton for similar text=====
function stepTyping(id, tag) {
	$('.introjs-tooltip').css({"width" : "200px"});
	$('.introjs-nextbutton').hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		var text = "Enter <span class='ct-code-b-yellow'>" + tag + "</span>";
		typing('.introjs-tooltiptext', text, function() {
			validation(id, tag, 0, 1);
		});
	});
}

function customStepsText(id, tag) {
	$('.introjs-tooltip').css({"width" : "225px"});
	$('.introjs-nextbutton').hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		var text = "Enter <br><span class='ct-code-b-yellow'>" + tag + "</span>";
		typing('.introjs-tooltiptext', text, function() {
			validation(id, tag, 0, 1);
		});
	});
}
//=========================================

//dynamic nextStep
function nextStep(id) {
	var newStep = getStep(id, '', '', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

//validation for entered tag / text
function validation(id, tag, count, val) {
	$("[contenteditable = false]").attr("contenteditable", "true");
	$(id).css({"outline" : "none"});
	$(id).focus();
	introjs.refresh();
	
	//paste option disabled
	$(id).off("paste");
	$(id).on("paste", function(e) {
		e.preventDefault();
	});
	
	$(id).parent().click(function() {
		$(id).focus();
	});
	
	$(id).off("keydown");
	$(id).on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		introjs.refresh();
		
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
	
	$(id).on("keyup", function(e) {
		$(".ct-red").remove();
		$(".usr-btn").remove();
		introjs.refresh();
		if ($(id).text() == tag) {
			$("[contenteditable = true]").attr("contenteditable", "false");
			if (val == 1) {
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
			}
		} else {
			$('.introjs-nextbutton, .usr-btn').hide();
			$('.introjs-tooltiptext').append('<div class="ct-red">Properly write above text</div>');
		}
	});
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
	})
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 1) {
		$("#aOpenTag").removeAttr("style");
		$("#linkTag").removeAttr("contenteditable maxlength spellcheck");
		$("#linkTag").off();
		$('.introjs-tooltiptext > ul li:last-child').append('<div class="a-closing"></div>');
		var text = "Close a tag i.e., <span class='ct-code-b-yellow'>&lt;/a&gt;</span>";
		typing('.a-closing', text, function() {
			$("#linkTag").text('');
			$("#linkTag").append('&lt;a&gt;About us page<span id="aCloseTag" contenteditable="false" maxlength="4" spellcheck="false"></span>')
			validation("#aCloseTag", "</a>", 2, 0);
		});
	} else if (count == 2) {
		$("#aCloseTag").removeAttr("style");
		$("#linkTag").removeAttr("contenteditable maxlength spellcheck");
		$("#linkTag").off();
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "For linking we add an attribute i.e., <span class='ct-code-b-yellow'>href=\"\"</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$('#linkTag').text('');
			$("#linkTag").append('&lt;a <span id="hrefEnter" contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;About us page&lt;/a&gt;');
			introjs.refresh();
			validation("#hrefEnter", "href=\"\"", 3, 0);
		});
	} else if (count == 3) {
		$("#linkTag").removeAttr("contenteditable maxlength spellcheck");
		$('.introjs-tooltiptext > ul').append('<li></li>');
		var text = "Enter url as i.e., <span class='ct-code-b-yellow'>home.html</span>";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			$('#linkTag').text('');
			$("#linkTag").append('&lt;a href=\"<span id="urlEnter" contenteditable="false" spellcheck="false" maxlength="9"></span>\"&gt;About us page&lt;/a&gt;');
			introjs.refresh();
			validation("#urlEnter", "home.html", 0, 1);
		});
	}
}

//dynamic steps
function getStep(element, intro, tooltipClass, position) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}

//when a tag clicks then only browser changes
function clickBrowser() {
	$("#aTag").click(function() {
		$("#aboutBrowser2").show();
		$("#aboutBrowser").hide();
		$('.introjs-nextbutton').show();
	});
}

function aboutPageTags() {
	$("#aboutProgram").removeClass("opacity00");
	TweenMax.to($("#docType2"), 1, {opacity: 1, onComplete: function() {
		TweenMax.to($("#htmlOpen2, #htmlClose2"), 1, {opacity: 1, onComplete: function() {
			TweenMax.to($("#headOpen2, #headClose2"), 1, {opacity: 1, onComplete: function() {
				TweenMax.to($("#title2"), 1, {opacity: 1, onComplete: function() {
					$("#browser2").addClass("z-index").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function() {
							$("#browser2").removeClass("z-index");
							TweenMax.to($("#styleOpen2, #styleClose2"), 1, {opacity: 1, onComplete: function() {
								TweenMax.to($("#bodyOpen2, #bodyClose2"), 1, {opacity: 1, onComplete: function() {
									$(".introjs-tooltip").removeClass("hide");
									var text = "Another html page with the name <span class='ct-code-b-yellow'>about-us.html</span>";
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
							}});
						}, 800);
					});
				}});
			}});
		}});
	}});
}
</script>
</head>
<body>
	<div class="text-center margin-top-15">
		<h4 class="label ct-demo-heading">Links</h4>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12 padding0">
			<div class="col-xs-5 padding0 opacity00" id="homeProgram">
				<b class="ct-blue-color page1">home.html</b>
<pre class="margin0">
<span id="docType1" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen1" class="opacity00">&lt;html&gt;</span>
	<span id="headOpen1" class="opacity00">&lt;head&gt;</span>
		<span id="title1" class="opacity00">&lt;title&gt;Home page&lt;/title&gt;</span>
		<span id="styleOpen1" class="opacity00">&lt;style&gt;</span>
			<span id ="selectorDiv" class="editing"> <span id="pSelector" contenteditable="false" maxlength="1" spellcheck="false"></span> </span> <span id="pOpen" class="editing"> <span id="pOpenBrace" contenteditable="false" maxlength="1" spellcheck="false"></span> </span>
				<span id="backGroundDiv" class="editing"> <span id="backGroundText" contenteditable="false" maxlength="25" spellcheck="false"></span> </span>
				<span id="alignmentDiv" class="editing"> <span id="alignmentText" contenteditable="false" maxlength="19" spellcheck="false"></span> </span>
			<span id="pClose" class="editing"> <span id="pCloseBrace" contenteditable="false" maxlength="1" spellcheck="false"></span> </span>
		<span id="styleClose1" class="opacity00">&lt;/style&gt;</span>
	<span id="headClose1" class="opacity00">&lt;/head&gt;</span>
	<span id="bodyOpen1" class="opacity00">&lt;body&gt;</span>
		<span id="pTagDiv" class="editing"> <span id="pTag" contenteditable="false" maxlength="21" spellcheck="false"></span> </span>
	<span id="bodyClose1" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose1" class="opacity00">&lt;/html&gt;</span>
</pre>
			</div>
			<div class="col-xs-6 col-xs-offset-1 padding0 opacity00 margin-top-20" id="browser1">
				<div id="homeBrowser">
					<img src="/images/home-html.png">
					<div class="browser">
						<p id="withoutLinkText" class="opacity00">Home page</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 padding0 margin-top-15">
			<div class="col-xs-12 padding0">
				<div  class="col-xs-5 padding0 opacity00" id="aboutProgram">
					<b class="ct-blue-color page2">about-us.html</b>
<pre class="margin0">
<span id="docType2" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen2" class="opacity00">&lt;html&gt;</span>
	<span id="headOpen2" class="opacity00">&lt;head&gt;</span>
		<span id="title2" class="opacity00">&lt;title&gt;About us page&lt;/title&gt;</span>
		<span id="styleOpen2" class="opacity00">&lt;style&gt;</span>
			<span id="styling" class="editing"></span>
		<span id="styleClose2" class="opacity00">&lt;/style&gt;</span>
	<span id="headClose2" class="opacity00">&lt;/head&gt;</span>
	<span id="bodyOpen2" class="opacity00">&lt;body&gt;</span>
		<span id="linkingAbout" class="editing"> <span id="pText" contenteditable="false" maxlength="18" spellcheck="false"></span> </span>
	<span id="bodyClose2" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose2" class="opacity00">&lt;/html&gt;</span>
</pre>
				</div>
				<div class="col-xs-6 col-xs-offset-1 padding0 margin-top-20 opacity00" id="browser2">
					<div id="aboutBrowser2"></div>
					<div id="aboutBrowser">
						<img src="/images/aboutus-html.png">
						<div class="browser">
							<p id="browser2Text" class="opacity00">About us page</p>
							<iframe name="targetDiv" width="100%" height="100%" frameBorder="0"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-15">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
</html>