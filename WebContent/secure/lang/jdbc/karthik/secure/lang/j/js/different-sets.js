var putElement;
var intro;
var timelineLite = new TimelineLite();
var countValueBox = 0;
var valueArr = [];
var sortArr = [];
var value;
var typing_interval = 0.1;
var y = 1;
var recursionCount = 0;

var differentSetsReady = function() {

	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 element : "#heading",
			intro : "",
			position : "right"
		},
		{
			element : "#addMethod",
			intro : "",
			position : "bottom"
		},
		{
			element : "#hashSet",
			tooltipClass:"hide",
			intro : "",
			position : "bottom"
		},
		{
			element : "#linkedHashSet",
			intro : "",
			position : "bottom"
		},
		{
			element : "#treeSet",
			tooltipClass:"hide",
			intro : "",
			position : "bottom"
		}
		]});
		
	intro.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		  case "heading":
			
		break;
		
		case "addMethod":
			
		break;
		
		case "hashSet":
			
			if (intro._direction == "backward") {
				
				$(".hashSet" + countValueBox).remove();
				$("#lHashSet").empty();
				$(".lset"+ countValueBox).remove();
				
				var top = parseInt($("#linkedHashSetAnimationJar").height() - $("#linkedHashSetAnimationJar > div").height() - 6);
				if (top < 0) {
					$("#linkedHashSetAnimationJar > div").css("top" , "0");
				} else {
					$("#linkedHashSetAnimationJar > div").css({
						"top" : top,
					});
				}
			}
			
		break;
		
		case "linkedHashSet":
			
			if (intro._direction == "backward") {
				
				$(".lset"+ countValueBox).remove();
				$("#tSet").empty();
				$(".tSetAnimate" + countValueBox).remove();
				
				var top = parseInt($("#linkedHashSetAnimationJar").height() - $("#linkedHashSetAnimationJar > div").height() - 6);
				if (top < 0) {
					$("#linkedHashSetAnimationJar > div").css("top" , "0");
				} else {
					$("#linkedHashSetAnimationJar > div").css({
						"top" : top,
					});
				}
				
				y--;
				var top = parseInt($("#treeSetAnimationJar").height() - $("#treeSetAnimationJar > div").height() - 6);
				if($('#treeSetAnimationJar .value-append-box').length < 5) {
					$("#treeSetAnimationJar > div").css({
						"top" : top,
					});
				} else {
					$("#treeSetAnimationJar > div").css({
						"top" : top - (28 * y)
					});
				}
			}
		break;
		
		case "treeSet":
			
		break;
		}
	});
	
	
		intro.onafterchange(function(targetElement) {
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			var elementId = targetElement.id;
			switch (elementId) {
			  case "heading":
				$('.introjs-nextbutton').hide();
				var text = "In this live demo we will learn how "
    				+ "<b class ='ct-code-b-yellow'>HashSet, LinkedHashSet</b> and</b>"
    				+ " <b class ='ct-code-b-yellow'>TreeSet</b> store the elements internally.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			case "addMethod":
				$('.introjs-nextbutton').hide();
				$("[contenteditable=false]").attr("contenteditable", "true");
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._currentStep == 1) {
						var text = "Enter the <b class ='ct-code-b-yellow'>element</b> to be inserted.";
						typing(".introjs-tooltiptext", text);
					}
					charAtEnd("addByElementMethodValue");
				});
				break;
			case "hashSet":
				$('.introjs-nextbutton').hide();
				$('#setHash').append('<span id="valueSpan' + countValueBox + '"class="value-append-box"><span id="value' + countValueBox 
						+ '" class="visibility-hidden ct-pink-color">'
						+ $('#addByElementMethodValue').text() + '</span></span>');
				$(".introjs-helperLayer").one("transitionend", function() {
					
					
					var l1 = $('#addByElementMethodValue').offset();
					var l2 = $('#value' + countValueBox).offset();
					var topLength = l1.top-l2.top;
					var leftLength = l1.left-l2.left;
					
					$("#hashSet .value-append-div #value" + countValueBox).removeClass("visibility-hidden");
					
					$('#addByElementMethodValue').addClass("zIndex").effect("highlight", {color : '#FFFFFF'}, 1000, function(){
						$(this).removeClass("zIndex");
					});
					
					timelineLite.from('#value' + countValueBox, 1, {top: topLength, left: leftLength, onComplete: function() {
						timelineLite.to($("#hashSet .value-append-box"), 1, {borderColor: "gray", onComplete:function() {
							$(this).css("border-color", "gray");
							checkElementForHashSet();
						}});
					}});
				});
			break;
			
			case "linkedHashSet":
				$('.introjs-nextbutton').hide();
				$('.user-btn').remove();
				$('#lHashSet').append('<span id="valueSpan' + countValueBox + '"class="value-append-box"><span id="value' + countValueBox 
						+ '" class="visibility-hidden ct-pink-color">'
						+ $('#addByElementMethodValue').text() + '</span></span>');
				
				$(".introjs-helperLayer").one("transitionend", function() {
					var l1 = $('#addByElementMethodValue').offset();
					$("#linkedHashSet .value-append-div #value" + (countValueBox) ).offset({
						"top" : l1.top,
						"left" : l1.left
					}).removeClass("visibility-hidden");
					
					$('#addByElementMethodValue').addClass("zIndex").effect("highlight", {color : '#FFFFFF'}, 1000, function(){
						$(this).removeClass("zIndex");
					});
					TweenMax.to("#linkedHashSet .value-append-div #value" + (countValueBox), 1, {top: 0, left : 0, onComplete:function() {
						timelineLite.to($("#linkedHashSet .value-append-box"), 1, {borderColor: "gray", onComplete:function() {
							$(this).css("border-color", "gray");
							checkElementOfLinkedHashSet();
						}});
					}});
				});
			break;
				
			case "treeSet":
				$('.introjs-nextbutton').hide();
				$('#arrow').addClass('visibility-hidden');
				
				$('#tSet').append('<span id="valueSpan' + countValueBox + '"class="value-append-box"><span id="value' + countValueBox 
						+ '" class="visibility-hidden ct-pink-color">'
						+ $('#addByElementMethodValue').text() + '</span></span>');
				
				
				$(".introjs-helperLayer").one("transitionend", function() {
					var l1 = $('#addByElementMethodValue').offset();
					$("#treeSet .value-append-div #value" + (countValueBox)).offset({
						"top" : l1.top,
						"left" : l1.left
					}).removeClass("visibility-hidden");
					
					$('#addByElementMethodValue').addClass("zIndex").effect("highlight", {color : '#FFFFFF'}, 1000, function(){
						$(this).removeClass("zIndex");
					});
					TweenMax.to("#treeSet .value-append-div #value" + (countValueBox), 1, { top : 0, left : 0, onComplete : function() {
						timelineLite.to($("#treeSet .value-append-box"), 1, {borderColor: "gray", onComplete:function() {
							$(this).css("border-color", "gray");
							checkElementOfTreeSet();
						}});
					}});
				});
				break;
			}
		});
		 
		intro.start();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
		
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
			
	$("[contenteditable=true]").keydown(function(e) {
		if (e.which === 13 || e.which === 32) {
			e.preventDefault();
		}
		
		$("#addElementBtn").removeClass('disabled');
		
		var max = $(this).attr("maxlength");
		$(".error-msg").remove();
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
			$(".introjs-tooltiptext").append("<div class='error-msg'>Max length was restricted to only 4 characters.</div>");
	    	e.preventDefault();
	    }
	});
		 
	 $(".input-box").mousedown(function() {
		var methodId = $(this).attr("methodId");
		$('.input-box').text('');
		$('.go-button').addClass('disabled').addClass('opacity40');
		$('.go-button[methodId=' + methodId + ']').removeClass('disabled').removeClass('opacity40');
	});
		 
	$('#addElementBtn').click(function() {
		recursionCount = 0;
		$(".error-msg").remove();
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(this).addClass('disabled').addClass('opacity40');
		
		value = $('#addByElementMethodValue').text();
		
		if (value == "") {
			$(".introjs-tooltiptext").append("<div class='error-msg'>Please enter a string value.</div>");
			return;
		}
		
		/*$('.value-append-div').append('<span id="valueSpan' + countValueBox + '"class="value-append-box"><span id="value' + countValueBox 
										+ '" class="visibility-hidden ct-pink-color">'
										+ $('#addByElementMethodValue').text() + '</span></span>');*/
		$("[contenteditable=true]").attr("contenteditable", "false");
		intro.nextStep();
	});
}

function changeElementId() {
	$('.set-value').each(function(index) {
		$(this).attr('id','valueSpan' + index);
	});
}



function checkElementForHashSet() {
	$(".introjs-prevbutton").hide();
	$(".user-btn").remove();
	var noDuplicate = true;
	
	for (var index = 0; index < countValueBox; index++) {
		if ($('#valueSpan' + countValueBox).text() == $('#valueSpan' + index).text()) {
			 
			$('#linkedHashSetAnimationJar').scrollTo('.moveto',{duration:'slow', offset :{left:'left', top:-30 }});
			
			$(".introjs-tooltip").removeClass("hide");
			var value = $('#valueSpan' + countValueBox).text();
			
			$(".introjs-tooltiptext").append("Since the <b class ='ct-code-b-yellow'>HashSet</b> already contains an element(<b class ='ct-code-b-yellow'>"+value+"</b>)"
					+ " it is not included.");	
			$(".user-btn").remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next &#8594;</a>');
		
			noDuplicate = false;
			$(".blinking-border-background-red").css("animation-iteration-count" , "infinite");
			$('#valueSpan' + index).addClass('blinking-border-background-red');
			$('#valueSpan' + countValueBox).addClass('blinking-border-background-red').one("animationend", function() {
				timelineLite.to('#valueSpan' + countValueBox, 1, {opacity:0, left: 250, onComplete: function() {
					$('#valueSpan' + index).removeClass('blinking-border-background-red');
					$('#valueSpan' + countValueBox).remove();
					intro.nextStep();
				}});
			});
			break;
		}
	}


	if (noDuplicate) {
		$(".introjs-tooltip").removeClass("hide");
		if ($("#hashSetAnimationJar .value-append-box").length == 0) {
			$(".user-btn").remove();
			var text = "A <b class ='ct-code-b-yellow'>HashSet</b> does not allow duplicates and does not guarantee any particular order for its entries.<br/>" 
						+ " The order in which the elements are stored internally might dynamically change while adding new elements.";
			
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="checkPositionOfValue()">Next &#8594;</a>');
			});
			
		} else {
			$(".user-btn").remove();
			$(".introjs-tooltiptext").append("A <b class ='ct-code-b-yellow'>HashSet</b> does not allow duplicates and does not guarantee any particular order for its entries.<br/>" 
												+ " The order in which the elements are stored internally might dynamically change while adding new elements.");	
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="checkPositionOfValue()">Next &#8594;</a>');
			$(".introjs-tooltip").removeClass("hide");
		}
	}
	
}

  function pauseBlinkEffect() {
	$(".user-btn").remove();
	$(".blinking-border-background-red").css("animation-iteration-count", "1");
}  

function checkPositionOfValue() {
	$(".user-btn").remove();
	var elementOffset = $('#valueSpan' + countValueBox).offset();
	var elementHeight = $('#valueSpan' + countValueBox).outerHeight();
	var elementWidth = $('#valueSpan' + countValueBox).outerWidth();
	var animationJarOffset = $('#hashSetAnimationJar').offset();
	var animationJarHeight = $('#hashSetAnimationJar').height();
	var animationJarWidth = $('#hashSetAnimationJar').width();
	var topPosition = Math.floor((Math.random() * (animationJarHeight - elementHeight)) + animationJarOffset.top);
	var leftPosition = Math.floor((Math.random() * (animationJarWidth - elementWidth)) + animationJarOffset.left);
	valueArr[countValueBox] = {left: leftPosition, leftWidth: leftPosition + elementWidth,
												top: topPosition, topHeight: topPosition + elementHeight};
	var flag = true;
	for (var i = 0; i < valueArr.length-1; i++) {
		var p1, p2, p3, p4;
		p1 = [valueArr[countValueBox].left, valueArr[countValueBox].leftWidth];
		p2 = [valueArr[i].left, valueArr[i].leftWidth];
		p3 = [valueArr[countValueBox].top, valueArr[countValueBox].topHeight];
		p4 = [valueArr[i].top, valueArr[i].topHeight];
		if (comparePositions(p1, p2) && comparePositions(p3, p4) && recursionCount < 20) {
			recursionCount++;
			checkPositionOfValue();
			flag = false;
			break;
		}
	}
	if (flag) {
		setPositionOfValue(elementOffset, topPosition, leftPosition);
		return;
	}
}

function comparePositions( p1, p2 ) {
	var r1, r2;
	r1 = p1[0] < p2[0] ? p1 : p2;
	r2 = p1[0] < p2[0] ? p2 : p1;
	return r1[1] > r2[0] || r1[0] === r2[0];
}

function setPositionOfValue(elementOffset, topPosition, leftPosition) {
	timelineLite.to('#valueSpan' + countValueBox, 1, {top: (topPosition- elementOffset.top), left: (leftPosition - elementOffset.left), onComplete: function() {
		$('#valueSpan' + countValueBox).remove();
		$('#hashSetAnimationJar').append('<span id="valueSpan' + countValueBox + '" class="value-append-box border-fade hashSet'+ countValueBox +'"><span id="valueSpan' + countValueBox 
									+ '" class="ct-pink-color">'
									+ $('#addByElementMethodValue').text() + '</span></span>');
		$("#hashSetAnimationJar #valueSpan" + countValueBox).css("border-color", "gray");
		$('#valueSpan' + countValueBox).offset({top: topPosition, left: leftPosition}).addClass($('#addByElementMethodValue').text());
		if ($('#addByElementMethodValue').text() == '') {
			$('#valueSpan' + countValueBox).addClass('empty');
		}
		intro.nextStep();
	}});
}

function checkElementOfLinkedHashSet() {
	$(".introjs-prevbutton").hide();
	var noDuplicate = true;
	$(".user-btn").remove();
	for (var index = 0; index < countValueBox; index++) {
		
		if ($('#valueSpan' + countValueBox).text() == $('#valueSpan' + index).text()) {
			$(".introjs-tooltip").removeClass("hide");
			var value = $('#valueSpan' + countValueBox).text();
			
			$(".introjs-tooltiptext").append("Since the <b class ='ct-code-b-yellow'>LinkedHashSet</b> already contains an element(<b class ='ct-code-b-yellow'>"+value+"</b>)"
					+ " it is not included.");			
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next &#8594;</a>');
		
			$(".blinking-border-background-red").css("animation-iteration-count" , "infinite");

			noDuplicate = false;
			$('#linkedHashSetAnimationJar #valueSpan' + (index)).parent().addClass('blinking-border-background-red');
			scrollToBottom("#linkedHashSetAnimationJar", "#linkedHashSetAnimationJar .blinking-border-background-red");
			$('#valueSpan' + countValueBox).addClass('blinking-border-background-red').one("animationend", function() {
				$(".blinking-border-background-red").removeClass("blinking-border-background-red");
				timelineLite.to('#valueSpan' + countValueBox, 1, {opacity:0, left: 250, onComplete: function() {
					$('#valueSpan' + index).removeClass('blinking-border-background-red');
					$('#valueSpan' + countValueBox).remove();
					intro.nextStep();
				}});
			});
		}
	}
	if (noDuplicate) {
		$(".introjs-tooltip").removeClass("hide");
		if ($('#linkedHashSetAnimationJar #textCenter').length == 0) {
		var text = "<b class ='ct-code-b-yellow'>LinkedHashSet</b> does not allow duplicates and strores the entries in the order in which they are inserted.";
		
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" '
			+ ' onclick="setPositionForLinkedHashSet()">Next &#8594;</a>');
			$(".introjs-prevbutton").show();
		});
	
		} else {
		$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>LinkedHashSet</b> does not allow duplicates and strores the entries in the order in which they are inserted.");	
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" '
				+ ' onclick="setPositionForLinkedHashSet()">Next &#8594;</a>');
		$(".introjs-prevbutton").show();
		$(".introjs-tooltip").removeClass("hide");
		}
	  }
	}


function setPositionForLinkedHashSet() {
	$(".introjs-prevbutton").hide();
	$(".user-btn").remove();
	$('#linkedHashSetAnimationJar > div').prepend('<div class="text-center lset'+ countValueBox +'" id="textCenter"><span class="value-append-box visibility-hidden">'
			+ '<span id="valueSpan' 
			+ countValueBox + '" class="ct-pink-color">'
			+ $('#addByElementMethodValue').text()
			+ '</span></span></div>');		
	$("#linkedHashSetAnimationJar .value-append-box").css("border-color", "gray");
	if ($('.value-append-box').text() == '') {
		$('#valueSpan' + countValueBox).addClass('empty');
	}
	scrollToTop("#linkedHashSetAnimationJar", $("#linkedHashSetAnimationJar #valueSpan" + (countValueBox)).parent(), function() {
		$("#linkedHashSetAnimationJar").css("pointer-events", "none");
	});
	var top = parseInt($("#linkedHashSetAnimationJar").height() - $("#linkedHashSetAnimationJar > div").height() - 6);
	var delay = 0;
	if (top < 0) {
		delay = 1;
		$("#linkedHashSetAnimationJar > div").css("top" , "0");
		timelineLite.to($("#linkedHashSetAnimationJar > div"), 1 , {top: $(".value-append-box").eq(0).outerHeight()});
	} else {
		$("#linkedHashSetAnimationJar > div").css({
			"top" : top,
		});
	}
	
	timelineLite.to($("#linkedHashSetAnimationJar > div"), delay , {onComplete : function() {
		$('#arrow').remove();
		$('body').append('<span class="glyphicon glyphicon-arrow-right faa-passing animated" id="arrow"> </span>');
		valueSpanBoxOffset = $("#linkedHashSetAnimationJar .value-append-box").eq(0).offset();
		var width = $('#arrow').width();
		var height = $('#arrow').height();
		$('#arrow').offset({top:valueSpanBoxOffset.top + height/2 ,left:valueSpanBoxOffset.left - width - 25});
		var l1 = $("#linkedHashSet .value-append-div #valueSpan" + countValueBox).offset();
		var l2 = $('#linkedHashSetAnimationJar .value-append-box').offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		TweenMax.to($("#linkedHashSet .value-append-div #valueSpan" + countValueBox), 1, {top : "+=" + topLength, left : "+=" + leftLength,onComplete:function() {
			$("#linkedHashSet .value-append-div").empty();
			$("#linkedHashSetAnimationJar .value-append-box").removeClass("visibility-hidden");
			$("#linkedHashSetAnimationJar").css("pointer-events", "");
			$('#arrow').addClass('visibility-hidden');
			intro.nextStep();
		}, delay : 1});
	}});
}

function checkElementOfTreeSet() {
	var noDuplicate = true;
	$(".user-btn").remove();
	for (var index = 0; index < countValueBox; index++) {
		if ($('#valueSpan' + countValueBox).text() == $('#valueSpan' + index).text()) {
			$(".introjs-tooltip").removeClass("hide");
			var value = $('#valueSpan' + countValueBox).text();
			
			$(".introjs-tooltiptext").append("Since the <b class ='ct-code-b-yellow'>TreeSet</b> already contains an element(<b class ='ct-code-b-yellow'>"+value+"</b>)"
					+ " it is not included.");			
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next &#8594;</a>');
			
			$(".blinking-border-background-red").css("animation-iteration-count" , "infinite");
			noDuplicate = false;
			$('#treeSetAnimationJar #valueSpan' + (index)).parent().addClass('blinking-border-background-red');
			scrollToBottom("#treeSetAnimationJar", "#treeSetAnimationJar .blinking-border-background-red");
			$('#valueSpan' + countValueBox).addClass('blinking-border-background-red').one("animationend", function() {
				$(".value-append-box").css("animation-iteration-count", "infinite");
				$(".blinking-border-background-red").removeClass("blinking-border-background-red");
				timelineLite.to('#valueSpan' + countValueBox, 1, { opacity : 0, left : 150, onComplete : function() {
					$('#valueSpan' + index).removeClass('blinking-border-background-red');
					$('#valueSpan' + countValueBox).remove();
					$('#addByElementMethodValue').text('');
					dynamicSteps();
					intro.nextStep();
				}});
			});
		}
	}
		
	if (noDuplicate) {
		sortingElements();
		
		$(".introjs-tooltip").removeClass("hide");
		if ($('#treeSetAnimationJar #textCenter').length == 0) {
		var text = "A <b class ='ct-code-b-yellow'>TreeSet</b> does not allow duplicates and stores its elements in their natural order."
					+ " For example, if the elements are of type <b class ='ct-code-b-yellow'>String</b>"
					+ " the elements are sorted in alphabetical order.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="setPositionForTreeSet()">Next &#8594;</a>');
			$(".introjs-prevbutton").show();
		});
		} else {
			$(".introjs-tooltiptext").append("A <b class ='ct-code-b-yellow'>TreeSet</b> does not allow duplicates and stores its elements in their natural order."
					+ " For example, if the elements are of type <b class ='ct-code-b-yellow'>String</b>"
					+ " the elements are sorted in alphabetical order of the values.");
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" '
					+ ' onclick="setPositionForTreeSet()">Next &#8594;</a>');
			$(".introjs-prevbutton").show();
			$(".introjs-tooltip").removeClass("hide");
		}
	}
}

function sortingElements() {
	sortArr.push(value);
	sortArr.sort();
}

function setPositionForTreeSet() {
	$(".introjs-prevbutton").hide();
	$('.user-btn').remove();
	var index = sortArr.indexOf(value);
	if (index == 0) {
		$('#treeSetAnimationJar > div').prepend('<div class="text-center tSetAnimate'+ countValueBox +' margin-top-10" id="textCenter"><span class="value-append-box visibility-hidden"><span id="valueSpan' 
				+ countValueBox + '" class="ct-pink-color">'
				+ $('#addByElementMethodValue').text()
				+ '</span></span></div>');
	} else {
		$('<div class="text-center margin-top-10"><span class="value-append-box visibility-hidden"><span id="valueSpan' 
				+ countValueBox + '" class="ct-pink-color">'
				+ $('#addByElementMethodValue').text()
				+ '</span></span></div>').insertAfter('#treeSetAnimationJar > div > div:nth-child(' + index + ')');
	}
	
	$("#treeSetAnimationJar .value-append-box").css("border-color", "gray");
	var top = parseInt($("#treeSetAnimationJar").height() - $("#treeSetAnimationJar > div").height() - 6);
	if($('#treeSetAnimationJar .value-append-box').length < 5) {
		$("#treeSetAnimationJar > div").css({
			"top" : top,
		});
	} else {
		$("#treeSetAnimationJar > div").css({
			"top" : top + (28 * y)
		});
		y++;
	}
	
	$('#treeSetAnimationJar').scrollTo('#valueSpan' + (countValueBox) + '', {duration:'slow', offset : {left : 'left', top : -50}});
	
	$("#treeSetAnimationJar #valueSpan" + (countValueBox)).parents(".margin-top-10").prevAll().css({"top" : "30px"});
	timelineLite.to($("#treeSetAnimationJar #valueSpan" + (countValueBox)).parents(".margin-top-10").prevAll(), 1 ,{top : 0, onComplete:function() {
		
		var l1 = $("#treeSet .value-append-div .value-append-box").offset();
		var l2 = $("#treeSetAnimationJar #valueSpan" + (countValueBox)).parent().offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		if (index == 0) {
			var  valueSpanOffset = $('#treeSetAnimationJar #valueSpan' + (countValueBox)).offset();
			$('#arrow').removeClass('visibility-hidden');
			var width = $('#arrow').width();
			var l1 = $("#treeSet .value-append-div .value-append-box").offset();
			var l2 = $("#treeSetAnimationJar #valueSpan" + (countValueBox)).parent().offset();
			var topLength = l2.top - l1.top;
			var leftLength = l2.left - l1.left;
			$('#arrow').offset({top:valueSpanOffset.top,left:valueSpanOffset.left - width - 15});
				timelineLite.to($("#treeSet .value-append-div .value-append-box"), 1, {top : "+=" + topLength, left: "+=" + leftLength, onComplete:function() {
					$("#treeSet .value-append-div").empty();
					$("#treeSetAnimationJar .value-append-box").removeClass("visibility-hidden");
					$("#treeSetAnimationJar").css("pointer-events", "");
					countValueBox++;
					$('#arrow').remove();
					intro.nextStep();
				}});
		} else {
			timelineLite.to($("#treeSetAnimationJar #valueSpan" + (countValueBox)).parents(".margin-top-10").prevAll(), 1 ,{top : 0, onComplete:function() {
				var  valueSpanOffset = $('#treeSetAnimationJar #valueSpan' + (countValueBox)).offset();
				$('#arrow').removeClass('visibility-hidden');
				var width = $('#arrow').width();
				var l1 = $("#treeSet .value-append-div .value-append-box").offset();
				var l2 = $("#treeSetAnimationJar #valueSpan" + (countValueBox)).parent().offset();
				var topLength = l2.top - l1.top;
				var leftLength = l2.left - l1.left;
				$('#arrow').offset({top:valueSpanOffset.top,left:valueSpanOffset.left - width - 15});
				timelineLite.to($("#treeSet .value-append-div .value-append-box"), 1, {top : "+=" + topLength, left: "+=" + (leftLength + 60), onComplete:function() {
					timelineLite.to($("#treeSet .value-append-div .value-append-box"), 1, {left : leftLength, onComplete:function() {
						$("#treeSetAnimationJar").css("pointer-events", "");
						$("#treeSet .value-append-div").empty();
						$("#treeSetAnimationJar .value-append-box").removeClass("visibility-hidden");
						countValueBox++;
						$('#arrow').remove();
						intro.nextStep();
					}});
				}});
			}});
		}
	}});
	dynamicSteps();
	$('#addByElementMethodValue').text('');
}

function dynamicSteps(action) {
	 var dynamicStep = {
			element : "#addMethod",
			intro : "Enter the <b class ='ct-code-b-yellow'>element</b> to be inserted.",
			position: "bottom"
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
	var dynamicStep = {
			element : "#hashSet",
			intro : "",
			position: "botttom",
			tooltipClass: "hide"
	}
	intro.insertOption(intro._currentStep + 2, dynamicStep);
	var dynamicStep = {
			element : "#linkedHashSet",
			intro : "",
			position: "bottom",
			tooltipClass: "hide"
	}
	intro.insertOption(intro._currentStep + 3, dynamicStep);
	var dynamicStep = {
			element : "#treeSet",
			intro : "",
			position: "bottom",
			tooltipClass: "hide"
	}
	
	intro.insertOption(intro._currentStep + 4, dynamicStep);
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

function typing(selector, text, callbackFunction) {
	$(selector).typewriting(text, {
		"typing_interval": 10,
		"cursor_color": "white"
	}, function() {
		if(typeof callbackFunction === "function") {
			callbackFunction();
		}
	})
}

function scrollToTop(containerId, divId, callBackFunction) {
	var container = $(containerId);
	scrollTo = $(divId);
	container.animate({
	    scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	  }, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function scrollToBottom(containerId, divId, callBackFunction) {
	var container = $(containerId);
	scrollTo = $(divId);
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}