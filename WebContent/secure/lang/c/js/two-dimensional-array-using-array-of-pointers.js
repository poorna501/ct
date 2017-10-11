var typingSpeed = 5;
	var intro;
	var i = -1;
	var j = 0;
	var valIndex = 0;
	var print = 0;
	var index = 1;
	var size = ["1", "2", "3"];
	var count = 0;
	var arrValueCount = 0;
var twoDimensionalArrayReady = function() {
	$('#secondInput').val("");
	$('#typingDiv ul li').addClass('opacity00');
	$("#restart").click(function() {
		location.reload();
	});
	 
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#typingDiv",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#typingDiv",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#codeDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#variableDeclaraiton",
			intro : "",
			position : "bottom"
		}, {
			element : "#tableDiv",
			intro : "",
			position : "bottom",
			action : "arrayCreation"
			
		}, {
			element : "#getRowColumn",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#scanf",
			intro : "",
			position: "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left"
		}, {
			element : "#getInputValues",
			intro : "",
			position : "bottom"
		}, {
			element : "#animationDiv",
			intro : "",
			position : "left"
		}, {
			element : "#tableDiv",
			intro : "",
			position : "buttom",
			action : "placingValues"
		}, {
			element : "#codePrintf",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#printForLoop",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#restart",
			intro : "",
			position : "left"
		}]});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "typingDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				dynamicSteps();
				setTimeout(function() {
					intro.nextStep();
				}, 500);
			};
			break;
			
			case "codeDiv":
			$('#typingDiv').addClass('bg-info zIndex');
			$('#codeDiv').removeClass('opacity00').addClass('introjs-showElement');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Let us learn <span class='ct-code-b-yellow'>two Dimensional Array</span> in " +
				"<span class='ct-code-b-yellow'>C</span> using this sample code.";
 				typing(".introjs-tooltiptext", text, function() {
 					$('.introjs-nextbutton').show();
 				});
			});
			break;
			
			case "printForLoop":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "For displaying two dimensional array values as matrix we require <b class='ct-code-b-yellow'>2</b> for loops.";
					typing(".introjs-tooltiptext", text, function() {
	 					$('.introjs-nextbutton').show();
	 				});
				});
				break;
				
			case "part1":
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It refers to the <b class='ct-code-b-yellow'>primitive data-type</b> like int,float,long etc."
						typing(".introjs-tooltiptext", text, function() {
		 					$('.introjs-nextbutton').show();
		 				});
				});
				break;
				
			case "part2":
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It refers to the <b class='ct-code-b-yellow'>identifier</b> which represents array name."
						typing(".introjs-tooltiptext", text, function() {
		 					$('.introjs-nextbutton').show();
		 				});
				});
				break;
				
			case "part3":
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It is an integer constant represents <b class='ct-code-b-yellow'>row size</b> of the array."
						typing(".introjs-tooltiptext", text, function() {
		 					$('.introjs-nextbutton').show();
		 				});
				});
				break;
			
			case "part4":
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It is an integer constant represents <b class='ct-code-b-yellow'>column size</b> of the array."
						typing(".introjs-tooltiptext", text, function() {
		 					$('.introjs-nextbutton').show();
		 				});
				});
				break;
			
			
			case "codePrintf":
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
				break;
			
			case "scanf":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>scanf()</b> function reads two integer values as "
					+"<b class='ct-code-b-yellow'>row</b> size and <b class='ct-code-b-yellow'>column</b> size.";
	 				typing(".introjs-tooltiptext", text, function() {
	 					$('.introjs-nextbutton').show();
	 				});
				});
				break;
				
			case "restart":
				$('.zIndex').removeClass('zIndex');
				$('.introjs-nextbutton').hide();
				$("#restart").removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
	 				typing(".introjs-tooltiptext", text, function() {
	 				});
				});
				break;
			
			case "variableDeclaraiton":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#array").effect("highlight", {color: '#008000'}, 1000, function() {
						var text = "Two dimensional integer array <b class='ct-code-b-yellow'>a[3][3]</b> and intiger variable <b "
									+"class='ct-code-b-yellow'>m,n,i,j</b> are declared.";
		 				typing(".introjs-tooltiptext", text, function() {
		 					$('.introjs-nextbutton').show();
		 				});
					});
				});
				break;
				
			case "getRowColumn":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
				break;
				
			case "animationDiv":
				
				if (intro._currentStep == 10) {
					$('#rowValue').focus();
					$('#animationDiv').removeClass('opacity00').addClass('introjs-showElement');
					$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer ').one('transitionend', function() {
						$('#animationDivText').removeClass('opacity00');
						setTimeout(function() {
								intro.nextStep();
						}, 1000);
					});
					
				} else if (intro._currentStep == 12 ) {
					$('#rowValue, #columnValue').attr('contenteditable','true');
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
					$('.matrix').removeClass('opacity00');
						var text ="Enter <b class='ct-code-b-yellow'>row size</b> and <b class='ct-code-b-yellow'>"
						 			+"column size</b> values separated by <b class='ct-code-b-yellow'>space</b>.</br></br>"
						 			+"For example your row size is <b class='ct-code-b-yellow'>2</b>"
						 			+" and column size is <b class='ct-code-b-yellow'>3</b> enter them as <b class='ct-code-b-yellow'>2 3</b>.";
						typing(".introjs-tooltiptext", text, function() {
							arr = [];
							$("#secondInput").addClass("blinking-orange").removeAttr('disabled').focus();;
							$('#secondInput').on("keydown", function(e) {
								if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32) {
									e.preventDefault();
								}
								
								if (arr.length == 1) {
									var flag = false;
									flag = $('#secondInput').val().indexOf(' ')>=0;
									if (e.keyCode == 32 && flag) {
										e.preventDefault();
									}
								}
								
							 	if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
									intro.nextStep();
								}
								
							});
								
							$('#secondInput').on("keyup", function(e) {
								$('.length-error-text,.size-error').remove();
								if ($(this).val() == "") {
									$(".introjs-nextbutton").hide();
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter an row size and column size values each separated by a space.</span>");
								} 
								var givenText = $(this).val();
								var splittedText = givenText.split(" ");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								
								if (arr.length == 1 && e.keyCode == 8 && $('.backspace-error').length == 0 ) {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red backspace-error length-error-text'></br>Enter two numbers separated by space.</span>");
								}
								
								if (arr.length == 2) {
									var a0 = $.isNumeric(parseInt(arr[0]));
									var a1 = $.isNumeric(parseInt(arr[1]));
									var aFirst = parseInt(arr[0]).toString();
									var aSecond = parseInt(arr[1]).toString();
									var dot = arr[1].indexOf(".") == -1;
									var dot1 = arr[0].indexOf(".") == -1;
									if (a0 && a1 && dot && dot1) {
										if ($.inArray(aFirst, size) !== -1 && $.inArray(aSecond, size) !== -1) {
											$(".introjs-nextbutton").show();
										} else {
											if ($('.size-error').length == 0 ) {
												$(".introjs-nextbutton").hide();
												$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'></br>size should be 1 to 3(inclusive)</span>");
											}
										}
									  } else {
									  	$(".introjs-nextbutton").hide();
									  	$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
												+"<br/> Please follow the above format.</br>size must be in numbers.</span>");
									  }
								} else {
									$(".introjs-nextbutton").hide();
								}
							});
		 				});
					});
					
				} else if (intro._currentStep == 17 ) {
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#consoleBodyDiv1").append("<div id='outputTyping'></div>");
					 	typingId = '#outputTyping';
					 	typingContent ="The array elements are :";
					 	typing(typingId, typingContent, function() {
							setTimeout(function() {
								intro.nextStep();
							}, 500);
						});
				 	});
					
				} else if (intro._currentStep == 19) {
					$('.introjs-helperLayer ').one('transitionend', function() {
						$(typingId).removeClass('typingCursor');
							for (var i =0 ; i < parseInt($('#val0').text()) ; i++ ) {
								for (var j = 0; j < parseInt($('#val1').text()); j++ ) {
									$("#consoleBodyDiv1").append("<span  class='final' id='final"+print+"'><span><span>&nbsp;</span>");
								 	if (parseInt($('#blinkCursor'+print+'').text()) == 0) {
										$('#final'+print+'').text("0");
								  	} else {
										$('#final'+print+'').text($('#blinkCursor'+print+'').text());
								  	}
									$('#consoleBodyDiv1').append(' ');
									print++;
							  	}
								$('#consoleBodyDiv1').append('<br/>');
							}
							$('.final').addClass('opacity00');
							finalPrint();
					 });
				} else {
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						var text = "press enter key for next entry.";
						typing(".introjs-tooltiptext", text, function() {
							tableIndex(); 
					 		$("#consoleBodyDiv1").append("<div>Enter the value of a[0][0] &emsp;: <div id='blinkCursor0' style='display:inline-block' class='int input-char outline-none a00' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
					 		$('#blinkCursor0').focus();
					 		keyDownEvent();
					 });
				 });
			}
			break;
				
			case "tableDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "placingValues":
						for (var i = 0; i < parseInt($('#val0').text()) * parseInt($('#val1').text()) ; i++) {
							var l = $("#blinkCursor" + i).offset();
							$("#arrayBox .a" + stackIndex[i]).offset({"top" : l.top,"left" : l.left}).text($("#blinkCursor" + i).text()).addClass('output-value-circle circle-css');
							TweenMax.to($("#arrayBox .a" + stackIndex[i]), 2, {top: 0, left : 0,onComplete : function() {
								$('.arrayValue').removeClass('circle-css');
								var text = "The array values placed into respective memory location of the array.";
							  	typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton').show();
								});
							}});
						}
						$(".table-css tr:eq(1) span").not(".output-value-circle").parent().addClass('background-color');
						$(".table-css tr:eq(1) span").each(function(ind, val) {
							if (!$(this).text().trim().length) {
						    	$(".table-css tr:eq(2) td").eq(ind).find("span").css("opacity", "0.3");
							}
						});
						break;
					case "arrayCreation":
						$('#tableDiv').removeClass('opacity00').addClass('introjs-showElement');
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer ').one('transitionend', function() {
							setTimeout(function() {
								tableCreation();
						}, 1000);
			 				
							setTimeout(function() {
								var text ='<b class="ct-code-b-yellow">a[3][3]</b> this is <b class="ct-code-b-yellow">2</b> dimensional array with '
									+'maximum row size <b class="ct-code-b-yellow">3</b> and maximum column size <b class="ct-code-b-yellow">3</b>.';
								 typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton').show();
								});
						}, 2000);
						});
					}
				});
				break;
			case "getInputValues":
				
				var text = $('#secondInput').val();
				var i = 0;
				$('#inputVal').empty();


				$.each(text.split(' '), function (index, val) {
					$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
					if(i == 1) {
						$("#space1").remove();
					  }
					i++ 
				});
				
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ='<ul><li>The row size is <b class="ct-code-b-yellow">'+parseInt($('#val0').text())+'</b> and column size '
								+'is <b class="ct-code-b-yellow">'+parseInt($('#val1').text())+'</b> so user can access a '
								+ '<b class="ct-code-b-yellow">'+parseInt($('#val0').text())+'</b><b class="ct-code-b-yellow">*</b><b class="ct-code-b-yellow">'
								+''+parseInt($('#val1').text())+'</b> matrix.</li><li> For reading values into '
								+'<b class="ct-code-b-yellow">2</b> dimensional array we require two for loops , <b class="ct-code-b-yellow">outer for</b> loop used for '
								+'rows and <b class="ct-code-b-yellow">inner for</b> loop used for columns. Here m size is <b class="ct-code-b-yellow">'+parseInt($('#val0').text())+'</b>'
								+' and n size is <b class="ct-code-b-yellow">'+parseInt($('#val1').text())+'</b> so the body of the for loops will '
								+'execute <b class="ct-code-b-yellow">'+parseInt($('#val0').text())*parseInt($('#val1').text())+'</b>'
								+' number of times.</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
	 				});
				});
				break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
		TweenMax.to($('#typingDiv > ul > li').eq(0), 0.5, {opacity: 1, onComplete: function() {
			TweenMax.to($('#typingDiv > ul > li').eq(1), 0.5, {opacity: 1, onComplete: function() {
				intro.nextStep();
			}});
		}});
}


function dynamicSteps(action) {
	var dynamicStep = {
			element : "#part1",
			intro : "",
			position : "bottom",
			action: action
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
	var dynamicStep = {
			element : "#part2",
			intro : "",
			position : "bottom",
			action: action
	}
	intro.insertOption(intro._currentStep + 2, dynamicStep);
	var dynamicStep = {
			element : "#part3",
			position : "bottom",
			intro : ""
	}
	intro.insertOption(intro._currentStep + 3, dynamicStep);
	var dynamicStep = {
			element : "#part4",
			intro : "",
			position : "bottom"
	}
	intro.insertOption(intro._currentStep + 4, dynamicStep);
}

function tableCreation() {
	$('.user-btn').remove();
	var rows = 3;
	var cols = 3;
	var r = 0;
	var str = ["blue","red","green"];
	var str1 = ["blue-text","red-text","green-text"];
	var str2 = ["first","second","third"];
	for (var i = 0; i < rows; i++) {
		var flag = true;
		for (var j = 0; j < cols; j++) {
			if (flag) {
				$('tr').eq(0).append('<td colspan=' + cols + '><span class="arrayRow">' + str2[i] + ' row</span></td>');
				flag = false;
			}
			$('tr').eq(1).append('<td id="val'+r+'" class="td-value-css '+ str[i] + '"><span id ="arrayVal'+r+'" class="arrayValue a'+i+''+j+'"></span></td>');
			$('tr').eq(2).append('<td><span class='+str1[i]+ ' id="arrIndex'+r+' a'+i+''+j+'">a['+i+']['+j+']<span></td>');
			r++;
		}
	}
	$('#arrayBox').toggleClass('animated zoomIn').one('animationend', function() {
		$('#arrayBox').removeClass('animated zoomIn');
	}); 
}

var stack = [];
var stackIndex = [];
function tableIndex() {
	var rows = parseInt($('#val0').text());
	var cols = parseInt($('#val1').text());
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			stack.push('a['+i+']['+j+']');
			stackIndex.push(i + "" + j);
		}
	}
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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function storingElement(memoryId, inputId,count,callBackFunction) {
	$(memoryId).text($(inputId).eq(count).text()).addClass('circle-css');
	var pos = $(inputId).eq(count).offset();
	$(memoryId).offset({"top":pos.top - 3,"left":pos.left});
	$(memoryId).removeClass('opacity00');
		TweenMax.to(memoryId, 1, {top : 0, left : 0,onComplete : function() {
		$(memoryId).removeClass('circle-css');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	}}); 
}

function finalPrint() {
	arrValueCount = $('.output-value-circle').length;
  if (count < arrValueCount ) {
    storingElement("#final"+count,".output-value-circle", count,function() {
      count++;
      finalPrint()
    });
  } else {
	  intro.nextStep();
  }
}

function keyDownEvent(e) {
	$(".error-msg").remove();
	$("[contenteditable=true]").off("keydown");
	$("[contenteditable=true]").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		var totalElements = parseInt($('#val0').text())*parseInt($('#val1').text());
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (e.keyCode == 13 && $(this).text().length > 0) {	
	    	$(this).attr("contenteditable", false);
			if (totalElements == (valIndex + 1)) {
				e.preventDefault();
				$('.introjs-nextbutton').show();
			} else {
				valIndex++;
				$("#consoleBodyDiv1").append("<div id='value"+valIndex+"'>Enter the value of "+stack[index]+" &emsp;: <div style='display:inline-block;' id='blinkCursor"+valIndex+"' class='int input-char outline-none a" + stackIndex[index] + "' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
				index++;
				charAtEnd('blinkCursor'+valIndex);
				keyDownEvent(e);
		    }
   		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
}




/*var introjs;
var typingInterval = 10;
var arr = [];
var m;
var n;


var twoDimensionalArrayUsingArrayOfPointersReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
	
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$('.output-scanf-line').on("keydown", function(e) {
		var id = $(this).attr('id');
		if (id == 'outputScanfLine1') {
			maxNumberOfInputs = 2;
			maxLengthOfInput = 1;
		} else {
			maxNumberOfInputs = m * n;
			maxLengthOfInput = 1;
		}
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	$('.output-scanf-line').on("keyup", function(e) {
		var id = $(this).attr('id');
		if (id == 'outputScanfLine1') {
			maxNumberOfInputs = 2;
			maxLengthOfInput = 1;
		} else {
			maxNumberOfInputs = m * n;
			maxLengthOfInput = 1;
		}
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " number and separate each with space.</span>");
		}
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		
		if (arr.length < maxNumberOfInputs) {
			$(".introjs-nextbutton").hide();
		} else if (arr.length == maxNumberOfInputs) {
			$(".introjs-nextbutton").show();
		}
		
		$.each(arr, function(idx, val) {
			if ((val > 3 || val == 0) && id == 'outputScanfLine1') {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 1 and 3 .</span>");
				$(".introjs-nextbutton").hide();
			} else if ((val > 9 || val < 0) && id == 'outputScanfLine2') {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 9 .</span>");
				$(".introjs-nextbutton").hide();
			}
		});
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
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
		steps : [ {
			element : "#preCode",
			intro : ""
		},
		{
			element : "#line1",
			intro : ""
		},
		{
			element : "#pArrayBox",
			intro : ""
		},
		{
			element : "#printf1",
			tooltipClass: "hide"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		},
		{
			element : "#scanf1",
			intro : ""
		},
		{
			element : "#outputBox",
			intro : "",
			outputStep: 'scanf'
		},
		{
			element : "#forPLine",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : "",
			animateStep: 'pArrayBoxes'
		},
		{
			element : "#printf2",
			tooltipClass: "hide"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		},
		{
			element : "#forScanf",
			intro : ""
		},
		{
			element : "#outputBox",
			intro : "",
			outputStep: 'forScanf'
		},
		{
			element : "#animationBox",
			intro : "",
			tooltipClass: "hide",
			animateStep: 'arrayBoxValues'
		},
		{
			element : "#printf3",
			tooltipClass: "hide"
		},
		{
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		},
		{
			element : "#forPrintf",
			intro : ""
		},
		{
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'forPrintf'
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn how the <span class="ct-code-b-yellow">Two Dimensional Array using Array of Pointers</span> works in ' +
								'<span class="ct-code-b-yellow">C</span> using the above code.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here, the <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> of size ' +
									'<span class="ct-code-b-yellow">3</span> and <span class="ct-code-b-yellow">int</span> variables ' +
									'<span class="ct-code-b-yellow">m</span>, <span class="ct-code-b-yellow">n</span>, ' +
									'<span class="ct-code-b-yellow">i</span>, <span class="ct-code-b-yellow">j</span> are declared but we are showing ' +
									'only <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> since you know ' +
									'about other variables.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "pArrayBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> of size ' +
									'<span class="ct-code-b-yellow">3</span> is declared.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPArrayBox()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "printf1":
		case "printf2":
		case "printf3":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch (outputStep) {
				case "printf":
					var selector = $('.output-console-body > .visibility-hidden').eq(0);
					var typingContent = selector.removeClass('visibility-hidden').html();
					typing(selector, typingContent, 30, 'white', function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
					break;
				case "scanf":
					var typingContent = 'Here enter <span class="ct-code-b-yellow">2</span> values and separate each with space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#outputScanfLine1').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
						caretAtEnd(document.getElementById('outputScanfLine1'));
					});
					break;
				case "forScanf":
					var typingContent = 'Here enter <span class="ct-code-b-yellow">' + m * n + '</span> values and separate each with space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#outputScanfLine2').attr({contenteditable: 'true', placeholder: 'Enter ' + m * n + ' values'});
						caretAtEnd(document.getElementById('outputScanfLine2'));
					});
					break;
				case "forPrintf":
					$('.arrayValue').addClass('z-index9999999');
					TweenMax.from($('.arrayValue'), 1, {ease: Power4.easeIn, backgroundColor: '#FFFFFF', onComplete: function() {
						$('.arrayValue').removeClass('z-index9999999');
						$('.printfValue').removeClass('visibility-hidden').addClass('opacity00');
						TweenMax.to($('.printfValue'), 1, {opacity: 1, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						}});
					}});
					break;
				}
			});
			break;
		case "scanf1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here <span class="ct-code-b-yellow">scanf()</span> method reads two number ' +
									'<span class="ct-code-b-yellow">m</span>, <span class="ct-code-b-yellow">n</span>.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "forPLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#outputScanfLine1').removeAttr('contenteditable placeholder');
				m = arr[0];
				n = arr[1];
				var typingContent = 'This <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">' + m + '</span> ' +
									'times so each time <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> ' +
									'is assigned with <span class="ct-code-b-yellow">malloc()</span> method so that it created an ' +
									'<span class="ct-code-b-yellow">int</span> array of size <span class="ct-code-b-yellow">n</span> i.e (' +
									'<span class="ct-code-b-yellow">' + n + '</span>) and this dynamic memory is pointed to ' +
									'<span class="ct-code-b-yellow">p</span> respective to its indices.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "pArrayBoxes":
					var typingContent = 'Here <span class="ct-code-b-yellow">(int *)malloc(n * sizeof(int))</span> is assigned to ' +
										'<span class="ct-code-b-yellow">m</span> different <span class="ct-code-b-yellow">p</span> indices i.e. ' + 
										'<span class="ct-code-b-yellow">' + m + '</span> number of indices, ' +  
										' <span class="ct-code-b-yellow">(int *)malloc(' + n + ' * size(int))</span> of a dynamic memory created and ' +
										'assigned to <span class="ct-code-b-yellow">p</span> with respective to indices.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationArrayBoxes()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "arrayBoxValues":
					$('#outputScanfLine2').removeAttr('contenteditable placeholder');
					var splittedText = $('#outputScanfLine2').text().split(" ");
					$('#outputScanfLine2').html('');
					$.each(splittedText, function(idx, val) {
						if (val != '') {
							$('#outputScanfLine2').append('<span class="scanfValue">' + val + '</span> ');
							$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
							if ((idx % n) == (n - 1)) {
								$('#outputPrintfLine').append('<br/>');
							}
						} else {
							$('#outputScanfLine2').append(' ');
						}
					});
					$('.scanfValue').addClass('output-value-circle circle-css');
					TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'inherit', onComplete: function() {
						$('.scanfValue').removeClass('output-value-circle circle-css');
						$.each(arr, function(idx, val) {
							$('.arrayValue').eq(idx).text(parseInt(val));
						});
						for (var i = 0; i < $('.scanfValue').length; i++) {
							if (i == ($('.scanfValue').length - 1)) {
								fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i), function() {
									$('.introjs-tooltip').removeClass('hide');
									var typingContent = 'Here <span class="ct-code-b-yellow">(p[i] + j)</span> returns the address of each ' +
														'element in the array since <span class="ct-code-b-yellow">p</span> has base address of array ' +
														'and <span class="ct-code-b-yellow">Scale Factor</span> is multipled with ' +
														'<span class="ct-code-b-yellow">i</span>, <span class="ct-code-b-yellow">j</span>.' +
														'<br/>For example: <span class="ct-code-b-yellow">(p[i] + j)</span> = (' + 
														'p[i * scale factor] + j * scale factor) = (p[0] + 0) = ' + 
														$('#pValue1').text() + ' and so on.' +
														'<br/><b>Note:</b> <span class="ct-code-b-yellow">Scale factor</span> is the size of the ' +
														'datatype which will be multiplied with ' +
														'index of the array by the system';
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										$('.introjs-nextbutton').show();
									});
								});
							} else {
								fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i));
							}
						}
					}});
					break;
				}
			});
			break;
		case "forScanf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here we have two <span class="ct-code-b-yellow">for</span> loops' +
									'<ul><li>The outer <span class="ct-code-b-yellow">for</span> loop executes ' +
									'<span class="ct-code-b-yellow">' + m + '</span> times that represent number of rows</li>' +
									'<li>The inner <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">'
									+ n + '</span> times that represent number of columns</li>' + 
									'<li>The <span class="ct-code-b-yellow">scanf()</span> with in the for loops executed ' + 
									'<span class="ct-code-b-yellow">' + m * n + '</span> times</li>' +
									'<li><span class="ct-code-b-yellow">(p[i] + j)</span> returns the address of the array index ' +
									'with respective to <span class="ct-code-b-yellow">i</span>, <span class="ct-code-b-yellow">j</span></li></ul>';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "forPrintf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here we have two <span class="ct-code-b-yellow">for</span> loops' +
									'<ul><li>The outer <span class="ct-code-b-yellow">for</span> loop executes ' +
									'<span class="ct-code-b-yellow">' + m + '</span> times that represent number of rows</li>' +
									'<li>The inner <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">'
									+ n + '</span> times that represent number of columns</li>' + 
									'<li>The <span class="ct-code-b-yellow">printf()</span> with in the for loops executed ' + 
									'<span class="ct-code-b-yellow">' + m * n + '</span> times</li>' +
									'<li><span class="ct-code-b-yellow">*(p[i] + j)</span> returns the value of the each element in the array ' +
									'with respective to indices <span class="ct-code-b-yellow">i</span>, <span class="ct-code-b-yellow">j</span></li></ul>' +
									'For example: <span class="ct-code-b-yellow">*(p[i] + j)</span> = ' + 
									'*(p[i * scale factor] + j * scale factor) = *(p[0] + 0) = *(' + 
									$('#pValue1').text() + ') = ' +
									$('#mallocTable0 .td-value-css span').eq(0).text() + ' and so on.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "restartBtn":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	
	introjs.start();
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
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

function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}    	   
}

function tableAppend(selector, tableId, tdAddressValue) {
	var code = '<div class="col-xs-12 padding-top-bottom">' +
					'<table align="center" id="' + tableId + '">' +
						'<tbody>' +
							'<tr></tr>' +
							'<tr></tr>' +
						'</tbody>' +
					'</table>' +
				'</div>';
	$(selector).append(code);
	for (var i = 0; i < n; i++) {
		$('#' + tableId + ' tr').eq(0).append('<td class="td-value-css"><span class="arrayValue"></span></td>');
		$('#' + tableId + ' tr').eq(1).append('<td class="color-gray"><span>' + tdAddressValue + '</span></td>');
		tdAddressValue += 2;
	}
}

function animationPArrayBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#pTable').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#pTable').removeClass('animated zoomIn');
		$('.introjs-nextbutton').show();
	});
}

function animationArrayBoxes() {
	$('.introjs-duplicate-nextbutton').remove();
	var address = 1024;
	for (var i = 0; i < m; i++) {
		tableAppend($('#mallocTablesDiv'), 'mallocTable' + i, address);
		address += 1000;
	}
	$('#mallocTablesDiv').toggleClass('animated zoomIn').one('animationend', function() {
		$('#mallocTablesDiv').removeClass('animated zoomIn');
		svgAppend($('#animationBox'), 'svg');
		svgMarkerAppend($('#svg'), 'arrowEnd');
		for (var i = 0; i < m; i++) {
			if (i == (m - 1)) {
				animatingTableBoxes(i, function() {
					$('.introjs-nextbutton').show();
				});
			} else {
				animatingTableBoxes(i);
			}
		}
	});
}

function animatingTableBoxes(index, callBackFunction) {
	var mallocTableAddress =  $('#mallocTable' + index + ' .color-gray').eq(0);
	var pElement = $('#pValue' + (index + 1));
	TweenMax.from(mallocTableAddress, 1, {backgroundColor: 'blue', onComplete: function() {
		pElement.text(mallocTableAddress.text());
		fromEffectWithTweenMax(mallocTableAddress, pElement, function() {
			svgAnimationBoxLine(index, $('#mallocTable' + index + ' .td-value-css').eq(0), pElement.parent(), callBackFunction);
		});
	}});
}

function svgAnimationBoxLine(index, mallocTableValue, pElementParent, callBackFunction) {
	var parentDiv = $('#animationBox').offset();
	var x1 = pElementParent.offset().left - parentDiv.left + pElementParent.outerWidth();
	var y1 = pElementParent.offset().top - parentDiv.top + pElementParent.outerHeight() / 2;
	var x2 = mallocTableValue.offset().left - parentDiv.left;
	var y2 = mallocTableValue.offset().top - parentDiv.top + mallocTableValue.outerHeight() / 2;
	svgLineAppend($('#svg'), 'svgLine' + index, 'arrowEnd', x1, y1, x1, y1);
	TweenMax.to($('#svgLine' + index).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}*/