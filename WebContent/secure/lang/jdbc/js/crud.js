var typingSpeed = 0.2;
var count, outputCount;
count = outputCount = 1;
t1 = new TimelineLite();
var j = 0; 
var k = 1;
var row = 1;
var rowprint = 1;
var selectCount = 1;
var optioncount = 1;
var tdCount= 1;

var crudDatabaseReadyFunction = function() {
	$('#restartBtn').click(function() {
		location.reload();
	});
	introJsFunction();	
	var text = "In the heading...";
	typing(".introjs-tooltiptext", text, function() {
		$("line").hide();
		$(".introjs-nextbutton").show();
	})
	
	
	$("#empAge").on("keypress keyup", function(e) {
		introjs.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		var length = $(this).text().length
		if (length >= 1 && length <= 2) {
			$(".introjs-nextbutton").show();
		} else if (length == 0){
			$(".introjs-nextbutton").hide();
		}
		
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (((e.shiftKey) || (e.keyCode < 8 || e.keyCode > 8 && e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			//$('.introjs-tooltiptext').append("<div class='error-msg'><br/><r>age should be two digit.</</div>");
			e.preventDefault();
		}
	});
	$("#updateAge").on("keydown", function(e) {
		introjs.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text() !== "" && $(this).text().length > 0) {
		
		} else {
			
			$(".introjs-nextbutton").hide();
		}
		
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (((e.shiftKey) || (e.keyCode < 8 || e.keyCode > 8 && e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/><r>age should be two digit.</r></div>");
			e.preventDefault();
		}

	});
	
	$("#empName").on("keydown", function(e) {
		introjs.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		
		if ($.inArray(e.keyCode, [46, 8 ,9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (((e.shiftKey) || (e.keyCode < 57 || e.keyCode >= 93))) {
			e.preventDefault();
		}

		if ($(this).text() !== "") {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").hide();
		}		
		
		
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/><r><b>Youdhould enter 5 charcters only</b></r></div>");
			e.preventDefault();
		}
		
	});
	$("#empid, #deleteage").on("keypress keyup", function(e) {
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text() !== "" && ($(this).text().length > 0)) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 8 || e.keyCode > 8 && e.keyCode <49|| e.keyCode > 52)) && ((e.keyCode < 97) || (e.keyCode > 100))) {
			e.preventDefault();
			console.log("am enter")
		}
		
		if ($(this).text().length > max) {
			//$('.introjs-tooltiptext').append("<div class='error-msg'><br/><r><b>emp_id should be 1 to 4 only .</r></b></div>");
			e.preventDefault();
		}
	})
	
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
			element : "#basicode",
			intro : "",
			position : "bottom",
		} 
			
		]});
		introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var action = introjs._introItems[introjs._currentStep].action;
			switch (elementId) {
			case "basicode":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#preCode").removeClass("opacity00");
					var text = "This is the pre code...";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("loop", "", "bottom", ""));
							$(".introjs-nextbutton").show();
						})
				})
			break;
				
			case "loop":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "forloop";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("insertquery", "", "bottom", ""));
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
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("stmt", "", "bottom", "", ""));
						
						
						$(".introjs-nextbutton").show();
					})
				})
			break;
				
			case "stmt":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the stmt...";
					typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("buttons", "", "right", "", ""));
						
						$(".introjs-nextbutton").show();
					})
				})
			break;	
			case "buttons" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "click any button"
						typing(".introjs-tooltiptext", text);
					clickMe("#update", "updatequery", "bottom"); 
					clickMe("#delete", "deletequery", "bottom");
					clickMe("#select", "retrive", "bottom");
					clickMe("#insert", "insertquery", "right");
				})
			break;
			case "update":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "click update button "
						typing(".introjs-tooltiptext", text)
						clickMe("#update", "updatequery", "bottom");
				})
				break;
			case  "delete":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "click delete button "
						typing(".introjs-tooltiptext", text)
						clickMe("#delete", "deletequery", "bottom");
						
				})
				break;
				
				case  "select":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "click select button "
						typing(".introjs-tooltiptext", text)
						clickMe("#select", "retrive", "bottom");
				})
				break;
			
				case "insertquery":
					$(".introjs-helperLayer").one("transitionend", function() {
						if (count == 1) {
							tdCount = 1;
							var text = "This is the insert...";
							typing(".introjs-tooltiptext", text,  function() {
								$("#empNo").text(count);
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("eu", "", "bottom", "",""));
								$(".introjs-nextbutton").show();
							})
						
						} else {
							var text = "you want <y>Insert</y> more data into table employe id is unique you can chage <y>name</y> and <y>age</y> .";
								typing(".introjs-tooltiptext", text,  function() {
									$("#empName, #empAge").addClass("editBackgd")
									
									$("#empName, #empAge").addClass("blinking-orange");
									var empNameDiv = document.getElementById("empName");
										setTimeout(function() {
											empNameDiv.focus();
											$("#empName, #empAge").text("");
										}, 0)
										charAtEnd("empName");
										$("#empNo").text(count);
										$("#forinit").text(count)
										$("#empName, #empAge").attr("contenteditable", "true");
										introjs.insertOption(introjs._currentStep + 1, insertionIntro("eu", "", "bottom", ""));
										$(".introjs-nextbutton").hide();
								})
							}
						});
			break;
				
			case "eu":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
					$("#eu").removeClass("opacity00");
					$("#empName, #empAge").attr("contenteditable", "false");
					$("#empName, #empAge").removeClass("editBackgd")
					var text = "this the query to insert data into table.";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "hide"));
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
						
					} else if (action === "updatequery") {
						 introjs.insertOption(introjs._currentStep + 1, insertionIntro("printf2", "", "bottom", "hide",""));
						 	setTimeout(function() {
						 		j = 0;
						 		
						 		update(1)
						 		}, 500)
				
					} else if(action === "deletequery") {
						 introjs.insertOption(introjs._currentStep + 1, insertionIntro("printf3", "", "bottom", "hide",""));
						setTimeout(function() {
							k = 0;
							deletedata(1)
						}, 1000)
						
					} else if(action === "selectquery") {
						var text = "select query"
						typing(".introjs-tooltiptext", text,  function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("printf4", "", "bottom", "hide",""));
						 $(".introjs-nextbutton").show();	
						})
					
					} else {
						$(".introjs-tooltip").removeClass("hide")
						var text = "This is the animate...";
						typing(".introjs-tooltiptext", text,  function() {
							$("#tablel").fadeIn("slow", function() {
								rowInsert();
							})
						})
						
					}
				})
			break;	
				
			case "updatequery":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".editBackgd").removeClass("editBackgd");
					$("#update").removeClass("opacity00");
					var text = "This is the <y>update</y> query you can change the value of age... where <y>emp_id</y> in between <y>1 to 4 only</y> ";
						typing(".introjs-tooltiptext", text,  function() {
							$("#updateAge, #empid").addClass("editBackgd")
							$("#updateAge, #empid").attr("contenteditable", "true");
							
							$("#updateAge, #empid").addClass("blinking-orange");
							var updateAgeDiv = document.getElementById("updateAge");
										setTimeout(function() {
											updateAgeDiv.focus()
											$("#updateAge, #empid").text("")
										}, 0)
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("eu1", "", "bottom", "", ""));
						})
					})
			break;
			case "deletequery":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the <y>delete</y> query you can delete un wanted data where you  can select <y>emp_id</y> in between  <y>1 to 4</y>   ...";
					typing(".introjs-tooltiptext", text,  function() {
						$("#deleteage").addClass("editBackgd")
						$("#deleteage").attr("contenteditable", "true");
						
						$("#deleteage").addClass("blinking-orange");
						var deleteageDiv = document.getElementById("deleteage");
										setTimeout(function() {
											deleteageDiv.focus()
											$("#deleteage").text("")
										}, 0)
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("excutedelete", "", "bottom", "", ""));
					});
				});
			break;
			
			case "eu1":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#updateAge, #empid").removeClass("editBackgd")
					$("#eu1").removeClass("opacity00");
					var text = "this the quary update the  data into table.";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "hide", "updatequery"));
							$(".introjs-nextbutton").show();
						})
				})
			break;	
			case "excutedelete":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#deleteage").removeClass("editBackgd")
					$("#eu1").removeClass("opacity00");
					var text = "this the quary delete the  data into table.";
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "hide", "deletequery"));
							$(".introjs-nextbutton").show();
						})
				})
			break;	
				
			case "retrive":
				$(".introjs-helperLayer").one("transitionend", function() {
				$("#retrive").removeClass("opacity00");
					var text = "This query is to retrive the records from table.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("exute", "", "bottom", "", ""));
						$(".introjs-nextbutton").show();
					})
				})
			break;	
				
			case "exute":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#exute").removeClass("opacity00");
					var text = "This query is to retrive the records from table.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "bottom", "", "selectquery"));
						$(".introjs-nextbutton").show();
					})
				})
			break;	
			case "printf1":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".output-console-body:last").append("<div class = 'opacity00' id='outputText"+outputCount+"'> <span> <y>1 row(s) inserted </y></span> </div> ");
					$(".output-console-body").scrollTo("#outputText"+outputCount, 500);
					outputCount++;
					transferEffect('#sop1', '.output-console-body div span:last', function() {
						if (rowprint < 4) {
							rowprint++
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("insertquery", "", "bottom", ""));
							introjs.nextStep();
						} else {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("buttons", "", "bottom", ""));
							introjs.nextStep();
						}
					});
				});
			break;
			
			case "printf2":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (j == 1) {
					$(".output-console-body:last").append("<div class = 'opacity00' id='outputText"+outputCount+"'> <span> <y>1 row(s) are updated </y></span> </div> ");
					$(".output-console-body").scrollTo("#outputText"+outputCount, 500);
					outputCount++;
					} else {
						$(".output-console-body:last").append("<div class = 'opacity00' id='outputText"+outputCount+"'> <span> <y>0 row(s) are updated </y></span> </div> ");
						$(".output-console-body").scrollTo("#outputText"+outputCount, 500);
						outputCount++;
					}
					transferEffect('#sop2', '.output-console-body div span:last', function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("buttons", "", "bottom", ""));
						nextstep()	
					})
				});
			break;
			
			case "printf3":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (k == 1) {
						$(".output-console-body:last").append("<div class = 'opacity00' id = 'outputText"+outputCount+"'> <span> <y> 1 row(s) are deleted </y></span> </div> ");
						$(".output-console-body").scrollTo("#outputText"+outputCount, 500);
						outputCount++;
					} else {
						$(".output-console-body:last").append("<div class = 'opacity00' id = 'outputText"+outputCount+"'> <span> <y> 0 row(s) are deleted </y></span> </div> ");
						$(".output-console-body").scrollTo("#outputText"+outputCount, 500);
						outputCount++;
					}
					transferEffect('#sop3', '.output-console-body div span:last', function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("buttons", "", "bottom", ""));
						nextstep()	
					});
				});
				break;
				
			case "printf4":
					$(".introjs-helperLayer").one("transitionend", function() {
						var length = $("tr").length - 1;
						$(".output-console-body >div:last span:eq(1)").text(length);
						$(".output-console-body").scrollTo("#outputText"+outputCount, 500);
						$(".output-console-body:last").append("<div class = 'opacity00' id = outputText"+outputCount+" '> <span> <y> <span id = 'no'>"+ length +" </span>records in the table </y></span> </div> ");
						outputCount++;
						transferEffect('#sop4', '.output-console-body div :last', function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("close", "", "bottom", ""));
							nextstep()
						});
					});
			break;
			
			case "close":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "conncetion close"
						typing(".introjs-tooltiptext", text,  function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("restartBtn", "Click to Restart", "right", ""));
							$(".introjs-nextbutton").show();
						})
					})
			break;
			case "restartBtn":  
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltip').css({'min-width' : '120px'});
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	})
	introjs.start();
	
}

function clickMe(selector, nextStep, position) {
	$(selector).click(function() {
		optioncount++;
		if (selector === "#insert"){
			 $("#tablel").find("tr:not(:first)").remove();
			 count = 1;
			 rowprint = 1;
			 row = 1;
		}
			introjs.insertOption(introjs._currentStep + 1, insertionIntro(nextStep, "", position, "", ""));
			introjs.nextStep();
		});
}

function deletedata(i) {
	var deleteage =  parseInt($("#deleteage").text())
	if ( i <= count) {
		if ( parseInt($("tr:eq("+i+") span:eq(0)").text()) == deleteage) {
			  $("tr:eq("+i+")").addClass("editBackgd")
			  $("#deleteage").addClass("editBackgd")
			   $("tr:eq("+i+")").effect("highlight", {color: '#ffff00'}, 500, function() {
				  $("tr:eq("+i+")").remove();
				  $("#deleteage").removeClass("editBackgd")
				  k++;
			   });
			} 
			setTimeout(function() {
				deletedata(++i)
			}, 1000);
		} else {
			if ( k == 0) {
				$(".introjs-tooltip").removeClass("hide")
				var text = "no records are found"
				typing(".introjs-tooltiptext", text,  function() {
					 $(".introjs-nextbutton").show();
				 });
			} else {
				$(".introjs-tooltip").removeClass("hide")
				 var text = "deleted according to the query "
					  typing(".introjs-tooltiptext", text,  function() {
						  $(".introjs-nextbutton").show();
					  });
			}
		}
	}


function tableRowOffset() {
	$("body").append("<span id='arrow'><i class='fa fa-arrow-right' aria-hidden='true'></i></span>");
	var a = $("#arrow").offset();
	var b = $("tbody tr:eq(0)").offset();
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
	$("tbody").append("<tr  id='coulmn"+tdCount+"' class='opacity00'><td id ='row"+tdCount+"0'><span class='position'>"+ $("#empNo").text() +"</span></td>"+
						"<td><span class='position'>"+ $("#empName").text() +"</span></td>"+
						"<td id = 'row"+tdCount+"2'><span class='displayInline position-relative position'>"+ $("#empAge").text() +"</span></td></tr>");
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
	tdCount++;
	$("#empNo, #empName, #empAge").addClass("blinking-border-background-blue");
	$("tbody tr:last").removeClass("opacity00");
	TweenMax.to($("tbody tr:last span"), 1, {top:0, left: 0, function() {
		
	}})
		setTimeout(function() {
		
		if (count < 4) {
			count++;
			if (row <= 4) {
				row++
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("printf1", "", "bottom", "hide"));
				$(".introjs-nextbutton").show();
			}
		} else {
			setTimeout(function() {
			$("#insertquery").removeClass("zIndex");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("printf1", "", "bottom", "hide"));
			$(".introjs-nextbutton").show();
			}, 500);
		}
		
	}, 1500);
	
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
	console.log("am came to chartat end")
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

function transferEffect(selector1, selector2, callBackFunction) {
	
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(".output-console-body div:last").removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
			if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").effect("highlight", {color:"##FFFAFA"}, 1000).addClass("animated zoomIn").one('animationend', function() {
	$(id).removeClass("animated zoomIn");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 2, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {css: {top : 1, rotationX : 0,}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}
function nextstep() {
	setTimeout(function() {
		introjs.nextStep()
	}, 1000)
}
function restart() {
	$(".ct-btn-next").remove();
	intro.nextStep();
}



function update(i) {
	  var id = parseInt($("#empid").text())
	  var updateage = parseInt($("#updateAge").text())
	  if ( i <= count) {
		  if(parseInt($("tr:eq("+i+") span:eq(0)").text()) == id ) {
			  j++;
			  $("tr:eq("+i+")").addClass("editBackgd")
			  $("#empid").addClass("editBackgd")
			  $("tr:eq("+i+") span:eq(2)").effect("highlight", {color: '#ffff00'}, 500, function() {
			   flipEffect($("tr:eq("+i+") span:eq(2)"), updateage, function() {
				   console.log(i)
				   $("tr:eq("+(i-1)+")").removeClass("editBackgd")
				    $("#empid").removeClass("editBackgd")
				 
			   })
			 })
		  } 
		  setTimeout(function() {
			  
		  update(++i); 
		  }, 1000);
		 } else {
			 if ( j == 0) {
				 	setTimeout(function() {
				 		$(".introjs-tooltip").removeClass("hide")
				 		var text = "no records are found"
				 			typing(".introjs-tooltiptext", text,  function() {
				 				$(".introjs-nextbutton").show();
				 			});
				 	}, 200);
			 } else {
				 $(".introjs-tooltip").removeClass("hide")
				 var text = "values are changed according to the query"
						 typing(".introjs-tooltiptext", text,  function() {
							 $(".introjs-nextbutton").show();
						 });
				
		 	}
	  }
	 
}