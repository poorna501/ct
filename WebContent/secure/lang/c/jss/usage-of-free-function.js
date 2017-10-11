/**
 * 
 */
var typingInterval = 10;
var arr = [];
var usageOfFreeFunctionReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	var maxNumberOfInputs = 2;
	var maxLengthOfInput = 2;
	$('.console-input-line').on("keydown", function(e) {
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
	
	$('.console-input-line').on("keyup", function(e) {
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
			if (val.length > maxLengthOfInput) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number length to " + maxLengthOfInput + ".</span>");
				$(".introjs-nextbutton").hide();
			}
		});
	});

	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}/* , {
			element : '#syntax',
			intro : '',
		} */, {
			element : '#preCode',
			intro : '',
		}, {
			element : '#firstExLine1',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
		}, {
			element : '#firstExLine2',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmaxAnimation',
		}, {
			element : '#firstExLine3',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'freeAction',
		}, {
			element : '#preCodeTwo',
			intro : '',
		}, {
			element : '#codeLine1',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'variableZooming'
		}, {
			element : '#codeLine2',
			intro : '',
		}, {
			element : '#heapMemoryBox1',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'pBoxTweenmax'
		}, {
			element : '#codeLine3',
			intro : '',
		}, {
			element : '#heapMemoryBox2',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'qBoxTweenmax'
		}, {
			element : '#codeLine4',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'printText',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine5',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'inputValue',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'scaningValues',
		}, {
			element : '#codeLine6',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'outputPrint',
			tooltipClass: 'hide',
		}/* , {
			element : '#sumCondition',
			intro : '',
			tooltipClass : 'hide',
		} */, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'valueSum',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'sumPrint',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine7',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'pHeapRemove',
		}, {
			element : '#codeLine8',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'qHeapRemove',
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
		//	var typingContent = $("#infoDiv").html();
		//	typing('#infoDiv', typingContent, typingInterval, 'white', function() {
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
						//	$("#infoDiv").addClass('z-index9999999');
							$('#nextButton').fadeTo(500, 1, function() {
								$('.user-btn').click(function() {
									$('.user-btn').remove();
										introjs.nextStep();
								});
							});
						});
					});
				});
			});	
		//	});
			break;
		/* case 'syntax':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The general format of <span class='ct-color-springgreen'>free( )</span> function.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#syntax").removeClass("opacity00").addClass('z-index9999999');
					$(".introjs-nextbutton").show();
				});	
			});
			break;  */     
		case 'preCode':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleOne").removeClass("opacity00");
				var typingContent = "Let us consider a sample example on <span class='ct-color-springgreen'>free( )</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The pointer variable <span class='ct-code-b-yellow'>p</span> occupies " +
				"<span class='ct-color-lime'>2 bytes</span> of memory since it is a pointer " +
				"variable and it is declared with <span class='ct-code-b-yellow'>int datatype</span> so it " +
				"refer to <span class='ct-code-b-yellow'>int</span> variable.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();	
				});
			});
			break;
		case 'pBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#firstExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> " +
							"occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address " +
							"(i.e. location of memory), lets its address be as <span class='ct-code-b-yellow'>1024</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#pBox", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});;
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-color-springgreen'>malloc( )</span> function returns the address of the " +
				"<span class='ct-code-b-yellow'>heap memory</span> allocated " +
				"and it always returns void type <span class='ct-code-b-yellow'>base address</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'arrayDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "So the dynamically memory allocated as follows.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#firstMemoryAllocation", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'firstExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-color-springgreen'>free( )</span> is used to destroy the memory of the address " +
				"which contains in pointer variable <span class='ct-code-b-yellow'>p</span>. i.e. <span class='ct-code-b-yellow'>1924</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxAnimation':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "So the base address copied into pointer variable <span class='ct-code-b-yellow'>p</span>. " +
					"i.e. <span class='ct-code-b-yellow'>1924</span> copied.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#firstAddressId", "#pValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var typingContent = "Here the <span class='ct-code-b-yellow'>pointer</span> variable " 
									+"<span class='ct-code-b-yellow'>p</span> " +
									"has the address of <span class='ct-code-b-yellow'>dynamic memory</span> so it can access by the " +
									"variable <span class='ct-code-b-yellow'>p</span>.";
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										svgAppend($('#firstExDiv'), 'svg1');
										svgMarkerAppend($('#svg1'), 'marker1');
										svgAnimatingLine($('#firstExDiv'), $('#memoryBox1'), $('#trBox1'), $('#svg1'), 'svgLine1', 'marker1', function() {	
											$(".introjs-nextbutton").show();
										});	
									});
								});
							});
						});
					});
				});
				break;
			case 'freeAction':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "So the heap memory destroyed and return <span class='ct-code-b-yellow'>NULL</span> value.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#pValue", function() {
								$("#firstMemoryAllocation").effect( "highlight", {color:"red"}, 1000, function() {
									TweenMax.to($("#svg1, #firstMemoryAllocation"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			}
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#secondDivExample").removeClass("opacity00");
				var typingContent = "Let us learn <span class='ct-color-springgreen'>free( )</span> in " +
				"<span class='ct-code-b-yellow'>C</span> using this sample code.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					TweenMax.to($("#preCodeTwo"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'codeLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The pointer variables <span class='ct-code-b-yellow'>p</span> and <span class='ct-code-b-yellow'>q</span> " +
				"are occupies <span class='ct-color-lime'>2 bytes</span> of memory since they are pointer " +
				"variables and they are declared with <span class='ct-code-b-yellow'>int datatype</span> so these " +
				"refer to <span class='ct-code-b-yellow'>int</span> variables.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'secondExMemory':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'variableZooming':
				$('.introjs-fixParent').removeClass('introjs-fixParent');
				$("#secondExMemory, #consoleId").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The <span class='ct-code-b-yellow'>pointer</span> variables <span class='ct-code-b-yellow'>p</span> " +
								"and <span class='ct-code-b-yellow'>q</span> occupies <span class='ct-color-lime'>2 bytes</span> of memory " +
								"with some address (i.e. location of memory), lets their address be " +
								"<span class='ct-code-b-yellow'>1016</span> and <span class='ct-code-b-yellow'>1024</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							boxAnimation("#pBox2");
							boxAnimation("#qBox", function() {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
				break;
			case 'pBoxTweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The base address copied into pointer variable <span class='ct-code-b-yellow'>p</span>. " +
					"i.e. <span class='ct-code-b-yellow'>1038</span> copied.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#pHeapAddress", "#pSecondExValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var typingContent = "Here the <span class='ct-code-b-yellow'>pointer</span> variable " +
									"<span class='ct-code-b-yellow'>p</span> " +
									"has the address of <span class='ct-code-b-yellow'>dynamic memory</span> so it can access by the " +
									"variable <span class='ct-code-b-yellow'>p</span>.";
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										/* animationPointerArrow('.svg-line-two', '70%', function() {
											$(".introjs-nextbutton").show();
										}); */
										svgAppend($('#secondExMemory'), 'svg2');
										svgMarkerAppend($('#svg2'), 'marker2');
										svgAnimatingLine($('#secondExMemory'), $('#memoryBox2'), $('#memoryBox3'), $('#svg2'), 'svgLine2', 'marker2', function() {	
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
			case 'qBoxTweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The base address copied into pointer variable <span class='ct-code-b-yellow'>q</span>. " +
					"i.e. <span class='ct-code-b-yellow'>1992</span> copied.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#qHeapAddress", "#qValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var typingContent = "Here the <span class='ct-code-b-yellow'>pointer</span> variable " +
									"<span class='ct-code-b-yellow'>q</span> " +
									"has the address of <span class='ct-code-b-yellow'>dynamic memory</span> so it can access by the " +
									"variable <span class='ct-code-b-yellow'>q</span>.";
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										svgAppend($('#secondExMemory'), 'svg3');
										svgMarkerAppend($('#svg3'), 'marker3');
										svgAnimatingLine($('#secondExMemory'), $('#memoryBox4'), $('#memoryBox5'), $('#svg3'), 'svgLine3', 'marker3', function() {	
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
			case 'scaningValues':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "Entered the values copied into the dynamically allocated memory.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#consoleInputLine').removeAttr('contenteditable placeholder');
						var splittedText = $('#consoleInputLine').text().split(" ");
						$('#consoleInputLine').html('');
						$.each(splittedText, function(idx, val) {
							if (val != '') {
								$('#consoleInputLine').append('<span class="scanfValue">' + val + '</span> ');
							} else {
								$('#consoleInputLine').append(' ');
							}
						});
						$('.scanfValue').addClass('output-value-circle circle-css');
						TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'inherit', onComplete: function() {
							$('.scanfValue').removeClass('output-value-circle circle-css');
							$.each(arr, function(idx, val) {
								$('.heap-value').eq(idx).text(parseInt(val));
							});
							TweenMax.to($('.heap-value'), 1, {opacity: 1, onComplete: function() {
								$(".introjs-nextbutton").show();
							}});
						}});
					});
				});
				break;
			case 'valueSum':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#sumCondition").addClass("z-index9999999");
					var typingContent = "<span class='ct-code-b-yellow'>*p</span> & <span class='ct-code-b-yellow'>*q</span> " +
					"returns the value at that address.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'pHeapRemove':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "So the variable <span class='ct-code-b-yellow'>p</span> of dynamic memory destroyed and " +
					"return <span class='ct-code-b-yellow'>NULL</span> value.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#pSecondExValue", function() {
								$("#dynamicDiv1").effect( "highlight", {color:"red"}, 1000, function() {
									TweenMax.to($("#svg2, #dynamicDiv1"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			case 'qHeapRemove':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "So the variable <span class='ct-code-b-yellow'>q</span> of dynamic memory destroyed and " +
					"return <span class='ct-code-b-yellow'>NULL</span> value.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#qValue", function() {
									$("#dynamicDiv2").addClass("blinking", function() {
									TweenMax.to($("#svg3, #dynamicDiv2"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			}
			break;
		case 'codeLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> is " +
							"assigned with <span class='ct-color-springgreen'>malloc( )</span> method.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'heapMemoryBox1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The memory occupies <span class='ct-color-lime'>2 bytes</span> of memory because it is an " +
				"<span class='ct-code-b-yellow'>int data type</span>. Lets its address be as <span class='ct-code-b-yellow'>1038</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#heapMemoryBox1", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'codeLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>q</span> is " +
							"assigned with <span class='ct-color-springgreen'>malloc( )</span> method.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'heapMemoryBox2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The memory occupies <span class='ct-color-lime'>2 bytes</span> of memory because it is an " +
				"<span class='ct-code-b-yellow'>int data type</span>. Lets its address be as <span class='ct-code-b-yellow'>1992</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#heapMemoryBox2", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'codeLine4':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'codeLine5':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'codeLine6':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'codeLine7':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-color-springgreen'>free( )</span> is used to destroy the memory of the address " +
				"which contains in pointer variable <span class='ct-code-b-yellow'>p</span>. i.e. <span class='ct-code-b-yellow'>1038</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'codeLine8':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-color-springgreen'>free( )</span> is used to destroy the memory of the address " +
				"which contains in pointer variable <span class='ct-code-b-yellow'>q</span>. i.e. <span class='ct-code-b-yellow'>1992</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'printText':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText1").removeClass("visibility-hidden");
					var typingContent = $("#printText1").html();
					typing('#printText1', typingContent, '30', 'white', function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
				break;
			case 'inputValue':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = 'Here enter <span class="ct-code-b-yellow">2</span> values and separate each with space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.console-input-line').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
						charAtEnd(document.getElementById('consoleInputLine'));
					});
				});
				break;
			case 'outputPrint':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText2").removeClass("visibility-hidden");
					var typingContent = $("#printText2").html();
					typing('#printText2', typingContent, '30', 'white', function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
				break;
			case 'sumPrint':
				$("#sumCondition").removeClass("z-index9999999");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#result").append(parseInt($("#pHeapValue").text()) + parseInt($("#qHeapValue").text()));
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			}
			break;
		case 'sumCondition':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
			
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

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function charAtEnd(element) {
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

function bounceFromEffectWithTimelineMax(selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l2 = $(selector2).offset();
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text("NULL");
	timelineMax.staggerFrom(selector2, 1, {ease:  Bounce.easeOut, opacity:1, top:-45, onComplete: function() {
	//timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}