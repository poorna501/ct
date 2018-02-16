var typingSpeed = 0.2;
var count = 1;

var crudDatabaseReadyFunction = function() {
	
	introJsFunction();	
	var text = "In the heading...";
	typing(".introjs-tooltiptext", text, function() {
		$("line").hide();
		$(".introjs-nextbutton").show();
	})
	
	
	$("#empAge, #updateAge").on("keydown", function(e) {
		//console.log("This is the emp age...");
		introjs.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		
		
		if ($(this).text() !== "" && $(this).text().length > 0) {
			$(".introjs-nextbutton").show();
		} else {
			console.log("in the empage notempty ...");
			$(".introjs-nextbutton").hide();
		}
		
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (((e.shiftKey) || (e.keyCode < 8 || e.keyCode > 8 && e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/>row number should be two digit.</div>");
			e.preventDefault();
		}
	});

	
	$("#empName").on("keydown", function(e) {
		//console.log("This is the emp age...");
		introjs.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 106))) {
			e.preventDefault();
		}

		if ($(this).text() !== "") {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
		}		
		
		
		if ($(this).text().length > max) {
			console.log( $(this).text().length );
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/>row number should be two digit.</div>");
			e.preventDefault();
		}
		
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"//description
		},{
			element : "#preCode",
			intro : "",
			position : "bottom",
		}
		]});
	
	
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var action = introjs._introItems[introjs._currentStep].action;
			switch (elementId) {
			
			case "preCode":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#preCode").removeClass("opacity00");
					var text = "This is the pre code...";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("dbUrl", "", "bottom", ""));
						$(".introjs-nextbutton").show();
					})
				})
			break;
				
				
			case "dbUrl":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is dbUrl...";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("connection", "", "bottom", ""));
						
						$(".introjs-nextbutton").show();
					})
				})
			break;
				
			case "connection":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the connection...";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "hide", "conn"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("stmt", "", "bottom", ""));
						
						$(".introjs-nextbutton").show();
					})
				})
			break;
				
			case "stmt":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the stmt...";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "hide", "stmt"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("insert", "", "bottom", ""));
						$(".introjs-nextbutton").show();
					})
				})
			break;	
			
			case "insert":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (count == 1) {
						
						var text = "This is the insert...";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("eu", "", "bottom", ""));
							introjs.insertOption(introjs._currentStep + 2, insertionIntro("animate", "", "bottom", "hide", "eu"));
							$(".introjs-nextbutton").show();
						})
						
					} else {
						
						var text = "you can change the values of name and age of the table.";
							typing(".introjs-tooltiptext", text,  function() {
								$("#empName, #empAge").addClass("editBackgd")
								charAtEnd("empName");
								$("#empNo").text(count);
								$("#empName, #empAge").attr("contenteditable", "true");
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("eu", "", "bottom", ""));
								$(".introjs-nextbutton").show();
							})
							
					}
				})
			break;
				
			case "eu":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
					$("#eu").removeClass("opacity00");
					var text = "you can change the values of name and age of the table.";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", ""));
							$(".introjs-nextbutton").show();
						})
				})
			break;	
				
			case "animate":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					if (action == "conn" || action == "stmt" || action == "eu") {
						
						$("." + action).fadeIn("slow", function() {
							introjs.nextStep();
						});
						
					} else if (action === "update") {
						var text = "This is updating the record <y>emp_Age = <span id='replace' class=' displayInline'>25</span></y>.";
						typing(".introjs-tooltiptext", text,  function() {
							$("tbody tr:eq(2)").addClass("blinking-border-background-blue");
							setTimeout(function() {
								updateFunction();
							}, 1000)
						})
					} else {
						
						/*var text = "This is the animate...";
						typing(".introjs-tooltiptext", text,  function() {
							rowInsert();
						})*/
						
					}
				})
			break;	
				
			case "update":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".editBackgd").removeClass("editBackgd");
					$("#insert").removeClass("zIndex");
					$("#update").removeClass("opacity00");
					var text = "This is the update query you can change the value of age...";
					typing(".introjs-tooltiptext", text,  function() {
						$("#updateAge").addClass("blinking-border-background-blue");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "left", "", "update"));
						$(".introjs-nextbutton").show();
					})
				})
			break;
				
			case "retrive":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#retrive").removeClass("opacity00");
					var text = "This query is to retrive the records from table.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("eq", "", "bottom", "", "update"));
						$(".introjs-nextbutton").show();
					})
				})
			break;	
				
			case "eq":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#eq").removeClass("opacity00");
					var text = "This query is to retrive the records from table.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "", ""));
						$(".introjs-nextbutton").show();
					})
				})
			break;	
			}
	})
	introjs.start();
}


function updateFunction() {
	var l = $("tbody tr:eq(2) td:eq(2) span").offset();
	var age = $("#updateAge").text();
	
	$("tbody tr:eq(2) td:eq(2) span").removeAttr("style");
	$("#replace").offset({
	  top: l.top,
	  left: l.left
	});
	
	TweenMax.to("#replace", 2, {top:0, left:0, onComplete: function() {
	  TweenMax.to("#replace", 1, {rotationX: 90, onComplete: function() {
	  $("#replace").text(age);
	    TweenMax.to("#replace", 1, {rotationX: 0, onComplete: function() {
	    	
	    	$("#replace").removeAttr("style");
	    	var m = $("#replace").offset();
	    	$("tbody tr:eq(2) td:eq(2) span").offset({
		        top : m.top,
		        left : m.left
	    	})
	     $("tbody tr:eq(2) td:eq(2) span").text(age);
        $("tbody tr:eq(2) td:eq(2) span").addClass("zIndex");
	      TweenMax.to($("tbody tr:eq(2) td:eq(2) span"), 1, {top:0, left:0, onComplete: function() {
	    	  $("tbody tr:eq(2) td:eq(2) span").removeClass("zIndex");
	    	  introjs.insertOption(introjs._currentStep + 1, insertionIntro("retrive", "", "bottom", "", ""));
	    	  $(".introjs-nextbutton").show();
	      }})
	}})
	}})
	}})

}




function tableRowOffset() {
	$("body").append("<span id='arrow'><i class='fa fa-arrow-right' aria-hidden='true'></i></span>");
	var a = $("#arrow").offset();
	var b = $("tbody tr:eq(0)").offset();
	
	
	
	/*var tr0 = $().offset();
	var tr1 = $("tbody tr:eq(1)").offset();
	var tr2 = $("tbody tr:eq(2)").offset();
	
	var arrow = $("#arrow").offset();
	
	TweenMax.to("#arrow", 1, {top:tr0.top - arrow.top , left: (tr0.left - arrow.left) - 15, onComplete: function() {
		
		var l = 
		
		TweenMax.to("#arrow", 1, {top:tr1.top + $(""), left: tr1.left, onComplete: function() {
			TweenMax.to("#arrow", 1, {top:tr2.top, left: tr2.left, onComplete: function() {
				
				$("tbody tr:eq(2)").addClass('blinking-border-background-blue');
				
			}})
		}})
	}})*/
}



function arrow(fromId, toId, callBackFunction) {
	
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth() * 2)
	});
	
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	  
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	  
	TweenMax.to(".arrow", 1, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
	
}



function rowInsert() {
	
	$("#insert").addClass("zIndex");
	$("tbody").append("<tr  id='' class='opacity00'><td><span>"+ $("#empNo").text() +"</span></td>"+
						"<td><span>"+ $("#empName").text() +"</span></td>"+
						"<td><span class='displayInline position-relative'>"+ $("#empAge").text() +"</span></td></tr>");
	var l1 = $("#empNo").offset();
	var l2 = $("#empName").offset();
	var l3 = $("#empAge").offset();
	
	$("tbody tr:last span:eq(0)").offset({
		'top': l1.top,
		'left':l1.left
	})
	
	$("tbody tr:last span:eq(1)").offset({
		'top': l2.top,
		'left':l2.left
	})
	
	$("tbody tr:last span:eq(2)").offset({
		'top': l3.top,
		'left':l3.left
	})

	$("#empNo, #empName, #empAge").addClass("blinking-border-background-blue");
	$("tbody tr:last").removeClass("opacity00");
	TweenMax.to($("tbody tr:last span"), 1, {top:0, left: 0, function() {
		
	}})

	
	setTimeout(function() {
		
		if (count < 4) {
			count++;
			console.log("Row variable is increased...");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("insert", "", "bottom", ""));
			$(".introjs-nextbutton").show();
		} else {
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("update", "", "bottom", ""));
			$(".introjs-nextbutton").show();
		}
		
	}, 1500);
	
	console.log(count);
		/*setTimeout(function() {
			if (row <= 5) {
				console.log("Row variable is increased...");
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("insert", "", "bottom", ""));
				$(".introjs-nextbutton").show();
			}
		}, 1500);*/
}



function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 800);
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 800);
	}
}

function revealArrow(selector, callBackFunction) {
	let x2 = $(selector).attr("x2");	
	let y2 = $(selector).attr("y2");
	$(selector).attr("x2",  $(selector).attr("x1"));
	$(selector).attr("y2",  $(selector).attr("y1"));
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow4Marker);");
	TweenMax.to($(selector), 1, {attr: {x2 : x2, y2: y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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




function insertionIntro(element, msg, position, tooltip, action) {
	
	var insert = {}; 
	if (typeof element != undefined) {
		insert["element"] = "#"+ element;
	} 
	if (typeof msg != undefined) {
		insert["intro"] = msg;
	}
	if (typeof position != undefined) {
		insert["position"] = position;
	}
	if (typeof tooltip != undefined) {
		insert["tooltipClass"] = tooltip;
	}
	if (typeof action != undefined) {
		insert["action"] = action;
	}
	return insert;

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




