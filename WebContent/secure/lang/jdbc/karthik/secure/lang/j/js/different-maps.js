var differentMapsReady = function() {

	tl = new TimelineLite();
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#heading",
			 intro : "", 
			position : "bottom"
		},
		{
			element : "#input",
			intro :"",
			position : "bottom"
		},
		{
			element : "#hashmapdiv",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},
		{
			element : "#linkedhashmapdiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		},
		{	
			element : "#treemapdiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		},
	]});
   
	intro.onbeforechange(function(targetElement) {
        var elementId = targetElement.id;
        switch (elementId) {
        
        case "heading":
       	break;
        
        case "input":
       	break;
  
        case "hashmapdiv":
        	
        	if (intro._direction == "backward") {
        		$("#hasharea").empty();
        		$("#hmap" + countBox).remove();
        		$("#lmap" + countBox).remove();
        		$("#linkedarea").empty();
        		
        		var top = $("#linkedhashmapJar").height() - $("#linkedhashmapJar > div").height() - 5;
        		x--;
        		if($('#linkedhashmapJar .val-box-width').length < 5) {
        			$("#linkedDivs").css({
        				"top" : top 
        			});
        		} else {
        			$("#linkedDivs").css({
        				"top" : top - (28 * x)
        			});
        		}
        	}
        	
       	break;
        	
        case "linkedhashmapdiv":
        	
        	if (intro._direction == "backward") {
        		$("#treearea").empty();
        		$("#lmap" + countBox).remove();
        		$("#tmap" + countBox).remove();
        		var top = $("#linkedhashmapJar").height() - $("#linkedhashmapJar > div").height() - 5;
        		x--;
        		if($('#linkedhashmapJar .val-box-width').length < 5) {
        			$("#linkedDivs").css({
        				"top" : top 
        			});
        		} else {
        			$("#linkedDivs").css({
        				"top" : top - (28 * x)
        			});
        			
        		}
        		
        		
        		y--;
        		
        		var top = $("#treemapJar").height() - $("#treemapJar > div").height() - 5;
        		
        		if($('#treemapJar .val-box-width').length < 5) {
        			$("#treeDivs").css({
        				"top" : top 
        			});
        		} else {
        			$("#treeDivs").css({
        				"top" : top - (28 * y)
        			});
        		}
        	}
        	
      	break;
        
        case "treemapdiv" :
       	break;
        }
    });
	
    intro.onafterchange(function(targetElement) {
    	
    	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
    	
        var elementId = targetElement.id;
        switch (elementId) {
        
        case "heading":
        	
        	$(".introjs-nextbutton").hide();
        	var text = "In this live demo we will learn how "
        				+ "<b class ='ct-code-b-yellow'>HashMap, LinkedHashMap</b> and</b>"
        				+ " <b class ='ct-code-b-yellow'>TreeMap</b> store the elements internally.";
        	
        	typing(".introjs-tooltiptext", text, function() {
        		$(".introjs-nextbutton").show();
        	});
        	
        	break;
        
        case "input":
        	$(".introjs-nextbutton").hide();
        	if($('#linkedhashmapJar .val-box-width').length == 0) {
	        	$('.introjs-helperLayer ').one('transitionend', function() {
	        		var text = "Enter the <b class ='ct-code-b-yellow'>key</b> and <b class ='ct-code-b-yellow'>value</b> to be inserted.";
	        		typing(".introjs-tooltiptext", text,function(){
	        			charAtEnd("putKey");
	        		});
	        	});
        	} else {
        		$('.introjs-helperLayer ').one('transitionend', function() {
        		$(".introjs-tooltiptext").append("Enter the <b class ='ct-code-b-yellow'>key</b> and <b class ='ct-code-b-yellow'>value</b> to be inserted.");
        		charAtEnd("putKey");
        		});
        	}
       	break;

        case "hashmapdiv":
        	$('.introjs-helperLayer ').one('transitionend', function() {
        		
        		//if (intro._direction == "forward") {
        			hashMapAniamtion();
        		//}
        		
        	});
        break;
        	
        case "linkedhashmapdiv":
        	$('.introjs-helperLayer ').one('transitionend', function() {
        			linkedHashMapAnimation();
        	});
        break;
        
        case "treemapdiv" :
        	$('.introjs-helperLayer ').one('transitionend', function() {
        		treeMapAnimation();
        	});
        	break;
        }
    });
    
   intro.start();
	$('.introjs-skipbutton').hide();
    $('.introjs-prevbutton').hide();
    
	$("#putKey, #putVal").on("keyup",function() {
		if (($("#putKey").text()).length > 0 && ($("#putVal").text()).length > 0) {
			$("#putBtn").removeClass("disabled");
		} else {
			$("#putBtn").addClass("disabled");
		}
	});
	
	$("#putKey, #putVal").keydown(function(e) {
		var max = $(this).attr("maxlength");
		$(".error-msg").remove();
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (e.keyCode == 32) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max || e.keyCode == 13) {
			if($(this).attr("id") == "putKey") {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 2.</div>");
			} else {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 5.</div>");
			}
			e.preventDefault();
		}
		
	});
	
	$("#putBtn").on("click", function() {
		$(".error-msg").remove();
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(".content-area").empty();
		key = $("#putKey").text();
		value = $("#putVal").text();
		if(key == "" && value == "") {
			$(".introjs-tooltiptext").append("<div class='error-msg'>Please enter a string value.</div>");
			return;
		}
		intro.nextStep();
		$("#putBtn").addClass("disabled");
	});
	
	$("[contenteditable=true]").on("click keypress", function() {
		$(".go-btn").removeClass("disabled");
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



function hashMapAniamtion() {
	
	$("#hasharea").append("<span class='val-box-width'>" 
		+ "<div class='keyDiv'><span class='key set-key'>" + key + "</span></div>"
		+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x opacity00'></span></div>" 
		+ "<div class='opacity00 valDiv'><span class='value set-value'>" + value + "</span></div></span>");
	 
	var l1 = $("#putKey").offset();
	$("#hasharea .set-key").offset({
		"top" : l1.top,
		"left" : l1.left
	});
	
	TweenMax.to("#hasharea .set-key", 2, {top : 0, left : 0});
	
	var l1 = $("#putVal").offset();
	$("#hasharea .valDiv").removeClass("opacity00");
	$("#hasharea .set-value").offset({
		"top" : l1.top,
		"left" : l1.left
	});
	tl.to("#hasharea .set-value", 2, {top : 0, left : 0, onComplete : function() {
		setTimeout(function(){
			$('#hasharea .keyDiv').addClass('fade-in');
			$('#hasharea .valDiv').addClass('fade-in');
		}, 100); 
	}});
	tl.to("#hasharea .arrow", 0.5, {delay: 0.1, onComplete : function() {
		$("#hasharea .arrow").removeClass("opacity00").addClass("reveal-left")
		.one("animationend", function() {
				$("hasharea .arrow").removeClass("reveal-left");
				checkElementPresent();
		}); 
	}});
}

function treeMapAnimation() {
	
	$("#treemapJar").animate({
        scrollTop: 0
    }, 600);
	
	$("#treearea").append("<span class='val-box-width'>"
			+ "<div class='keyDiv opacity00'><span class='key set-key'>" + key + "</span></div>"
			+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x opacity00'></span></div>" 
			+ "<div class='opacity00 valDiv'><span class='value set-value'>" + value + "</span></div></span>");

	if (key == "") {
		alert("key value must not be null for treemap");
		$("#putKey").text("");
		$("#putVal").text("");
		return false;
	} else {
		var l1 = $("#putKey").offset();
		$("#treearea .keyDiv").removeClass("opacity00");
		
		$("#treearea .set-key").offset({
			"top" : l1.top,
			"left" : l1.left
		});
		
		TweenMax.to("#treearea .set-key", 2, {top : 0, left : 0});
		
		var l1 = $("#putVal").offset();
		$("#treearea .valDiv").removeClass("opacity00");
		$("#treearea .set-value").offset({
			"top" : l1.top,
			"left" : l1.left
		});
		
		tl.to("#treearea .set-value", 2, {top : 0, left : 0, onComplete : function() {
			setTimeout(function() {
				$('#treearea .keyDiv').addClass('fade-in');
				$('#treearea .valDiv').addClass('fade-in');
			}, 100); 
		}});
		
		tl.to("#treearea .arrow", 0.5, {delay: 0.1, onComplete : function() {
			$("#treearea .arrow").removeClass("opacity00").addClass("reveal-left")
				.one("animationend", function() {
				$("treearea .arrow").removeClass("reveal-left");
				$("#putKey").text("");
				$("#putVal").text("");
				checkTreeElementPresent();
			});
		}});
	}
	
}
	
function linkedHashMapAnimation() {
	$("#linkedarea").append("<span class='val-box-width'>"
			+ "<div class='keyDiv'><span class='key set-key'>" + key + "</span></div>" 
			+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x fa-2x opacity00'></span></div>" 
			+ "<div class='opacity00 valDiv'><span class='value set-value'>" + value + "</span></div></span>");
	var l1 = $("#putKey").offset();
	$("#linkedarea .set-key").offset({
		"top" : l1.top,
		"left" : l1.left
	});
	TweenMax.to("#linkedarea .set-key", 2, {top : 0, left : 0});
	var l1 = $("#putVal").offset();
	$("#linkedarea .valDiv").removeClass("opacity00");
	$("#linkedarea .set-value").offset({
		"top" : l1.top,
		"left" : l1.left
	});
	tl.to("#linkedarea .set-value", 2, {top : 0, left : 0, onComplete : function() {
	 	setTimeout(function(){
			$('#linkedarea .keyDiv').addClass('fade-in');
			$('#linkedarea .valDiv').addClass('fade-in');
		}, 100); 
	}});
	tl.to("#linkedarea .arrow", 0.5, {delay: 0.1, onComplete : function() {
		$("#linkedarea .arrow").removeClass("opacity00").addClass("reveal-left")
			.one("animationend", function() {
		$("hasharea .arrow").removeClass("reveal-left");
		checkLinkedElementPresent();
		
		}); 
	}});
}

function checkLinkedElementPresent() {
	$(".user-btn").remove();
	var noDuplicate = true;
	$('#linkedhashmapJar .set-key').each(function(index) {
		if ($(this).text() == key ) {
			$(this).parent().addClass('moveto');
			$('#linkedhashmapJar').scrollTo('.moveto',{duration:'slow', offset :{left:'left', top:-30 }});
						
			$('#linkedarea .keyDiv').removeClass('fade-in');
			$('#linkedarea .keyDiv').addClass('border');
			$(".introjs-tooltip").removeClass("hide");
			var key1 = $('.keyDiv .set-key').text();
			
			if (repeat2 == 1) {
				
			var text = "Since an entry with the same key(<b class='ct-code-b-yellow'>"+ key1 +"</b>)"
						+ " is already present in the map, its oldvalue is replaced with the new value.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next →</a>');
			});
			repeat2++;
			} else {
				$(".introjs-tooltiptext").append("Since an entry with the same key(<b class='ct-code-b-yellow'>"+ key1 +"</b>)"
						+ " is already present in the map, its oldvalue is replaced with the new value.");
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next →</a>');
			}
			
			$("#linkedarea .keyDiv").addClass('blinking-border-background-blue');
			$(this).parent().addClass('blinking-border-background-blue').one("animationend", function() {
				$(".blinking-border-background-blue").removeAttr("style");
				$("#linkedhashmapdiv").append("<span class='duplicateKeyVal3 border'>" + value + "</span>");
				var l1 = $("#linkedarea .valDiv").offset();
				$(".duplicateKeyVal3").offset({
					"top" : l1.top,
					"left" : l1.left
				});
				var l2 = $(".duplicateKeyVal3").offset();
				var l3 = $(this).parent().find('.valDiv1').offset();
				var topLength = l3.top-l2.top;
				var leftLength = l3.left-l2.left;
				var replacedElmt = $(this).parent().find('.set-value');
				TweenMax.to(".duplicateKeyVal3", 3, { ease: Bounce.easeOut, top: "+=" + topLength, left: "+=" + leftLength, delay :1.3});
				TweenMax.to($(this).parent().find('.valDiv1'), 1.5, { ease: Sine.easeOut, top:100 , delay : 2.4, opacity:0 , onComplete: function() {
					$(".duplicateKeyVal3").remove();
					$(replacedElmt).text(value).parent().css({
						"opacity" : 1,
						"top" : "0"
					});
					$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
					$(".moveto").removeClass("moveto");
					$("#linkedarea .keyDiv").addClass('keyDiv1');
					TweenMax.to("#linkedarea .val-box-width", 1, {left:50, opacity:0, onComplete:function() {
						$("#linkedarea .val-box-width").remove();
						intro.nextStep();
					}});
				}});
			});
			noDuplicate = false;
			return;
		}
	});
	if (noDuplicate) {
		$(".introjs-tooltip").removeClass("hide");
		if($('#linkedhashmapJar .val-box-width').length == 0) {
		var text = "<b class='ct-code-b-yellow'>LinkedHashMap</b> strores the entries in the order in which they are inserted.";
		$(".user-btn").remove();
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="setElementPositionOfLinked()">Next →</a>');
			$(".introjs-prevbutton").show();
		});
		} else {
			$(".user-btn").remove();
			$(".introjs-tooltiptext").append("<b class='ct-code-b-yellow'>LinkedHashMap</b> strores the entries in the order in which they are inserted.");
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="setElementPositionOfLinked()">Next →</a>');
			$(".introjs-prevbutton").show();
		}
	}
}
	

function checkTreeElementPresent() {
	
	$(".introjs-prevbutton").hide();
	$(".user-btn").remove();
	dynamicSteps();
	var noDuplicate = true;
	
	$('#treemapJar .set-key').each(function(index) {
		
		if ($(this).text() == key ) {
			$(this).parent().addClass('moveto');
 			$('#treemapJar').scrollTo('.moveto',{duration:'slow', offset :{left:'left', top:-30 }});
			$('#treearea .keyDiv').removeClass('fade-in');
			$('#treearea .keyDiv').addClass('border');
			$(".introjs-tooltip").removeClass("hide");
			var key1 = $('.keyDiv .set-key').text();
			if (repeat3 == 1) {
			
			var text = "Since an entry with the same key(<b class='ct-code-b-yellow'>"+ key1 +"</b>)"
						+ " is already present in the map, its oldvalue is replaced with the new value.";
			
			$(".user-btn").remove();
			
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next →</a>');
			});
			
			repeat3++;
			
			} else {
				$(".user-btn").remove();
				$(".introjs-tooltiptext").append("Since an entry with the same key(<b class='ct-code-b-yellow'>"+ key1 +"</b>)"
						+ " is already present in the map, its oldvalue is replaced with the new value.");
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next →</a>');
			}
			$("#treearea .keyDiv").addClass('blinking-border-background-blue');
			$(this).parent().addClass('blinking-border-background-blue').one("animationend", function() {
				$(".blinking-border-background-blue").removeAttr("style");
				$("#treemapdiv").append("<span class='duplicateKeyVal2 border'>" + value + "</span>");
				var l1 = $("#treearea .valDiv").offset();
				$(".duplicateKeyVal2").offset({
					"top" : l1.top,
					"left" : l1.left
				});
				var l2 = $(".duplicateKeyVal2").offset();
				var l3 = $(this).parent().find('.valDiv1').offset();
				var topLength = l3.top-l2.top;
				var leftLength = l3.left-l2.left;
				var replacedElmt = $(this).parent().find('.set-value');
				TweenMax.to(".duplicateKeyVal2", 3, { ease: Bounce.easeOut, top: "+=" + topLength, left: "+=" + leftLength, delay :1.3});
				TweenMax.to($(this).parent().find('.valDiv1'), 1.5, { ease: Sine.easeOut, top:150, delay : 2.4, opacity:0 , onComplete: function() {
					$(".duplicateKeyVal2").remove();
					$(replacedElmt).text(value).parent().css({
						"opacity" : 1,
						"top" : "0"
					});
					$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
					$(".moveto").removeClass("moveto");
					$("#treearea .keyDiv").addClass('keyDiv1');
					TweenMax.to("#treearea .val-box-width", 1, {left:50, opacity:0, onComplete:function() {
						$("#treearea .val-box-width").remove();
						intro.nextStep();
					}});
				}});
			});
			noDuplicate = false;
			return;
		}
	});
	
	if (noDuplicate) {
		keyArr.push(key);
		keyArr.sort();
		$(".introjs-tooltip").removeClass("hide");
		if($('#treemapJar .val-box-width').length == 0) {
			console.log("checkTreeElementPresent() of ifblock ...");
		var text = "A <b class='ct-code-b-yellow'>TreeMap</b> stores its entries in the natural order of their keys."
					+ " For example, if the keys are of type <b class='ct-code-b-yellow'>String</b> the entries are sorted in alphabetical order of the keys.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="setElementPositionOfTreemap()">Next →</a>');
			$(".introjs-prevbutton").show();
		});
		} else {
			console.log("checkTreeElementPresent() of elseblock ...");
				$(".introjs-tooltiptext").append("A <b class='ct-code-b-yellow'>TreeMap</b> stores its entries in the natural order of their keys."
						+ " For example, if the keys are of type <b class='ct-code-b-yellow'>String</b> the entries are sorted in alphabetical order of the keys.");
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="setElementPositionOfTreemap()">Next →</a>');
				$(".introjs-prevbutton").show();
				
		}
	}
}


function dynamicSteps(action) {
	var dynamicStep = {
			element : "#input",
			intro : "",
			action: action
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
	
	var dynamicStep = {
			element : "#hashmapdiv",
			intro : "",
			position : "right",
			tooltipClass : "hide",
			action: action
	}
	intro.insertOption(intro._currentStep + 2, dynamicStep);
	
	var dynamicStep = {
			element : "#linkedhashmapdiv",
			tooltipClass : "hide",
			position : "left",
			intro : ""
	}
	intro.insertOption(intro._currentStep + 3, dynamicStep);
	
	var dynamicStep = {
			element : "#treemapdiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
	}
	 intro.insertOption(intro._currentStep + 4, dynamicStep);
	
	var dynamicStep = {
			element : "#methodsBox",
			intro : ""
	}
	intro.insertOption(intro._currentStep + 5, dynamicStep);
	
}


function setElementPositionOfTreemap() {
	
	$(".introjs-prevbutton").hide();
	$(".user-btn").remove();
	var index = keyArr.indexOf(key);
		if (index == 0) {
			$('#treemapJar > div').prepend("<div class='margin-top-5px'><span class='val-box-width opacity00' id='tmap" + countBox + "'>" 
	 				+ "<div class='border keyDiv1'><span class='key set-key'>" + key + "</span></div>" 
	 				+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x'></span></div>" 
	 				+ "<div class='border valDiv1'><span class='value set-value'>" + value + "</span></div></span></div>");
			
			console.log("setElementPositionOfTreemap() if block....");
			
		} else {
			console.log("setElementPositionOfTreemap() else block...");
			$("<div class='margin-top-5px'><span class='val-box-width opacity00' id='tmap" + countBox + "'>"
	 			+ "<div class='border keyDiv1'><span class='key set-key'>" + key + "</span></div>" 
	 			+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x'></span></div>" 
	 			+ "<div class='border valDiv1'><span class='value set-value'>" + value 
	 			+ "</span></div></span></div>").insertAfter('#treemapJar > div > div:nth-child('
	 			+ index + ')');
		}
		
		setTimeout(function() {
			var top = $("#treemapJar").height() - $("#treemapJar > div").height() - 5;
			$("#treemapJar > div").css({
				"top" : top,
			});
			
			if($('#treemapJar .val-box-width').length < 5) {
				$("#treeDivs").css({
					"top" : top 
				});
			} else {
				$("#treeDivs").css({
					"top" : top + (28 * y)
				});
				y++;
			}
			$("#treemapJar").css("pointer-events", "");
			
			console.log("Before settimeout()...");
			console.log("In settimeout()...");
			$("#tmap" + countBox).removeClass("opacity00");
			$("#tmap" + (countBox)).css({
				"left" : $("#treemapJar").width()/2 - $("#tmap" + countBox).width() /2 + (16 - $("#tmap" + countBox + " .keyDiv1").width())
			});
			$('#treearr').remove();
		var  tmap = $('#tmap' + countBox + ' .keyDiv1').offset();
		$('#treemapJar').append('<span class="glyphicon glyphicon-arrow-right faa-passing animated" id="treearr"> </span>');
		var b = $('#treearr').width();
		var l = $("#treearea .val-box-width").offset();
		$("#treemapJar  #tmap" + countBox).addClass("visibility-hidden");
		$('#treearr').offset({top:tmap.top + 8 ,left:tmap.left - b - 15});
		$("#treemapJar #tmap" + countBox).parent().prevAll().css({"top" : "38px"});
		$('#treemapJar').scrollTo('#tmap'+(countBox)+'',{duration:'slow', offset :{left:'left', top:-50 }});
		TweenMax.to($("#treemapJar #tmap" + countBox).parent().prevAll(), 1, {top : 0,onComplete:function() {
			var l1 = $("#treearea .keyDiv").offset();
			var l2 = $("#tmap" + countBox).offset();
			var topLength = l2.top - l1.top - 2;
			var leftLength = l2.left - l1.left;
			if (index == 0) {
				TweenMax.to($("#treearea .val-box-width"), 1, {top : "+=" + topLength,left :"+=" + leftLength, onComplete:function() {
					$("#treearea").empty();
					$('#treearr').remove();
					$("#tmap" + countBox).removeClass("visibility-hidden");
					intro.nextStep();
					countBox++;
							}});
						} else {
							TweenMax.to($("#treearea .val-box-width"), 1, {top : "+=" + topLength,left :"+=" + (leftLength + 100), onComplete:function() {
								TweenMax.to($("#treearea .val-box-width"), 1, {left : leftLength, onComplete:function() {
									$("#treearea").empty();
									$('#treearr').remove();
									$("#tmap" + countBox).removeClass("visibility-hidden");
									intro.nextStep();
										countBox++;
								}});
							}});
						}
					}});
		}, 300);
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
	 
function setElementPositionOfLinked() {
	$(".introjs-prevbutton").hide();
	$(".user-btn").remove();
	$('#linkedhashmapJar > div').prepend("<div class='margin-top-5px'><span class='val-box-width visibility-hidden' id = 'lmap" + countBox + "'>" 
				+ "<div class='border keyDiv1'><span class='key set-key'>" + key + "</span></div>" 
				+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x'></span></div>" 
				+ "<div class='border valDiv1'><span class='value set-value'>" + value + "</span></div></span></div>");
	 var top = $("#linkedhashmapJar").height() - $("#linkedhashmapJar > div").height() - 5;
	
	 if($('#linkedhashmapJar .val-box-width').length < 5) {
		$("#linkedDivs").css({
			"top" : top 
		});
	} else {
		$("#linkedDivs").css({
			"top" : top + (28 * x)
		});
		x++;
	}
	 
	$("#lmap" + (countBox)).css({
		"left" : $("#linkedhashmapJar").width()/2 - $("#lmap" + countBox).width() /2 + (16 - $("#lmap" + countBox + " .keyDiv1").width())
	});
	$('#arr').remove();
	var  lmap = $('#lmap' + countBox + ' .keyDiv1').offset();
	$('body').append('<span class="glyphicon glyphicon-arrow-right faa-passing animated" id="arr"> </span>');
	var a = $('#arr').width();
	$('#arr').offset({top:lmap.top + 8,left:lmap.left - a - 12});
	var l1 = $("#linkedarea .keyDiv").offset();
	var l2 = $("#lmap" + countBox).offset();
	var topLength = l2.top - l1.top - 2;
	var leftLength = l2.left - l1.left;
	TweenMax.to($("#linkedarea .val-box-width"), 1, {top : "+=" + topLength, left : "+=" + leftLength, onComplete:function() {
		$("#linkedarea .val-box-width").remove();
		$("#lmap" + countBox).removeClass("visibility-hidden");
		$('#arr').remove();
		intro.nextStep();
	}});
}

function checkElementPresent() {
	
	console.log(" checkElementPresent()... ");
	$(".introjs-prevbutton").hide();
	var noDuplicate = true;
	$('#hashmapJar .set-key').each(function(index) {
		if ($(this).text() == key ) {
			$('#hasharea .keyDiv').removeClass('fade-in');
			$('#hasharea .keyDiv').addClass('border');
			$(".introjs-tooltip").removeClass("hide");
			
			var key1 = $('.keyDiv .set-key').text();
			
			if(repeat1 == 1){
				$(".user-btn").remove();
			var text = "Since an entry with the same key(<b class='ct-code-b-yellow'>"+ key1 +"</b>) is already"
						+ " present in the map, its oldvalue is replaced with the new value.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next →</a>');
			});
			repeat1++;
			} else {
				$(".user-btn").remove();
				$(".introjs-tooltiptext").append("Since an entry with the same key(<b class='ct-code-b-yellow'>"+ key1 +"</b>) is already"
						+ " present in the map, its oldvalue is replaced with the new value.");
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="pauseBlinkEffect()">Next →</a>');
			}
			
			$("#hasharea .keyDiv").addClass('blinking-border-background-blue');
			$(this).parent().addClass('blinking-border-background-blue').one("animationend", function() {
				$(".blinking-border-background-blue").removeAttr("style");
				$("#hashmapJar").append("<span class='duplicateKeyVal1 border'>" + value + "</span>");
				var l1 = $("#hasharea .valDiv").offset();
				$(".duplicateKeyVal1").offset({
					"top" : l1.top,
					"left" : l1.left
				});
				
				
				var l2 = $(".duplicateKeyVal1").offset();
				var l3 = $(this).parent().find('.valDiv1').offset();
				var topLength = l3.top-l2.top;
				var leftLength = l3.left-l2.left;
				var replacedElmt = $(this).parent().find('.set-value');
				
				
				TweenMax.to(".duplicateKeyVal1", 3, { ease: Bounce.easeOut, top: "+=" + topLength, left: "+=" + leftLength, delay :1.3});
				TweenMax.to($(this).parent().find('.valDiv1'), 1.5, { ease: Sine.easeOut, top:100 , delay : 2.4, opacity:0 , onComplete: function() {
					$(".duplicateKeyVal1").remove();
					$(replacedElmt).text(value).parent().css({
						"opacity" : 1,
						"top" : "0"
					});
					$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
					$("#hasharea .keyDiv").addClass('keyDiv1');
					TweenMax.to("#hasharea .val-box-width", 1, {left:50, opacity:0, onComplete:function() {
						intro.nextStep();
						$("#hasharea .val-box-width").remove();
					}});
				}});
			});
			noDuplicate = false;
			return;
		}
	});
	
	if (noDuplicate) {
		$(".introjs-tooltip").removeClass("hide");
		if($('#hashmapJar .val-box-width').length == 0) {
			var text = "A <b class ='ct-code-b-yellow'>HashMap</b> does not guarantee any particular order for its entries. "
					+ "And it does not guarantee that the order will remain the same "
					+ "after adding/removing entries.";
			$(".user-btn").remove();
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="checkPositionOfValue()">Next →</a>');
			});
		
		} else {
			
			$(".introjs-tooltiptext").append("A <b class ='ct-code-b-yellow'>HashMap</b> does not guarantee any particular order for its entries. "
					+ "And it does not guarantee that the order will remain the same "
					+ "after adding/removing entries.");
			$(".user-btn").remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="checkPositionOfValue()">Next →</a>');
		}
	}
}

function pauseBlinkEffect() {
	$(".introjs-prevbutton").hide();
	$(".user-btn").remove();
	$(".blinking-border-background-blue").css("animation-iteration-count", "1");
	
}
	
function checkPositionOfValue() {
	$(".user-btn").remove();
	var elementOffset = $("#hasharea .val-box-width").offset();
	var elementHeight = $("#hasharea .val-box-width").height();
	var elementWidth = $("#hasharea .val-box-width").width();
	var animationJarOffset = $("#hashmapJar").offset();
	var animationJarHeight = $("#hashmapJar").height();
	var animationJarWidth = $("#hashmapJar").width();
	var topPosition = Math.floor((Math.random() * (animationJarHeight - elementHeight)) + animationJarOffset.top);
	var leftPosition = Math.floor((Math.random() * (animationJarWidth - elementWidth)) + animationJarOffset.left);
	valueArr[countBox] = {left: leftPosition, leftWidth: leftPosition + elementWidth,
												top: topPosition, topHeight: topPosition + elementHeight};
	var flag = true;
	for (var i = 0; i < valueArr.length-1; i++) {
		var p1, p2, p3, p4;
		p1 = [valueArr[countBox].left, valueArr[countBox].leftWidth];
		p2 = [valueArr[i].left, valueArr[i].leftWidth];
		p3 = [valueArr[countBox].top, valueArr[countBox].topHeight];
		p4 = [valueArr[i].top, valueArr[i].topHeight];
		if (comparePositions(p1, p2) && comparePositions(p3, p4)) {
			if (recursionCount <= 50) {
				recursionCount++;
				checkPositionOfValue();
				flag = false;
			} else {
				flag = true;
				recursionCount = 0;
			}
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
	TweenMax.to("#hasharea .val-box-width", 1, {top: (topPosition- elementOffset.top), left: (leftPosition - elementOffset.left), onComplete: function() {
		$("#hashmapJar").append("<span class='val-box-width'id = 'hmap" + countBox + "'>"
				+ "<div class='border keyDiv1'><span class='key set-key'>" + key + "</span></div>" 
				+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x'></span></div>" 
				+ "<div class='border valDiv1'><span class='value set-value'>" + value + "</span></div></span>");
		
		$('#hashmapJar > span:last-child').offset({top: topPosition, left: leftPosition});
		$("#hasharea .val-box-width").remove();
		   $("#linkedhashmapJar").animate({
	            scrollTop: 0
	        }, 600);
		intro.nextStep();
	}});
}