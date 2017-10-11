var typingInterval = 5;
var arr = [];
var iVal = 1;
var usageOfGetcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#inputChar, #inputChar2").val("");
		location.reload();
	});
	
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			position : 'right',
		}, {
			element : '#main',
			intro : '',
			position : "right"
		}, {
			element : '#sampleinit',
			intro : "",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'addressAnimationDiv',
		}, {
			element : '#s1GetData',
			intro : '',
		}, {
			element : '#getData',
			intro : "",
		}, {
			element : '#print',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			tooltipClass : 'hide'
		}, {
			element :"#get",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			position : 'bottom',
			animateStep : 'checking',
		}, {
			element : '#s2GetData',
			intro : '',
		}, {
			element : '#getData',
			intro : "",
		}, {
			element : '#print',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar1',
			tooltipClass : 'hide'
		}, {
			element :"#get",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			position : 'bottom',
			animateStep : 'checking1',
		}, {
			element : '#s3Sum',
			intro : '',
			animateStep : 's3Sum1',
			position : "right"
		}, {
			element : '#memberFunction',
			intro : "",
		}, {
			element : '#s3Sum',
			intro : '',
			animateStep : 's3Sum2',
			position : "right"
		}, {
			element : '#memFunAdd',
			intro : '',
		}, {
			element :"#s3Temp",
			intro : "",
		}, {
			element : '#s3Real',
			intro : '',
		}, {
			element :"#s3Imag",
			intro : "",
		}, {
			element : '#return',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : '',
			tooltipClass : 'hide'
		}, {
			element : '#printSum',
			intro : '',
		}, {
			element : '#s3PutData',
			intro : '',
		}, {
			element : '#putData',
			intro : '',
		}, {
			element : '#print1',
			intro : "",
		}, {
			element :"#consoleId2",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element : '#s3Sub',
			intro : '',
		
		}, {
			element : '#friendFunction',
			intro : '',
		}, {
			element : '#frndFunSub',
			intro : '',
		}, {
			element :"#s3Temp1",
			intro : "",
		}, {
			element : '#s3Real1',
			intro : '',
		}, {
			element :"#s3Imag1",
			intro : "",
		}, {
			element : '#return1',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : '',
			tooltipClass : 'hide'
		}, {
			element : '#printSub',
			intro : '',
		}, {
			element : '#s3PutData1',
			intro : '',
		}, {
			element : '#putData',
			intro : '',
		}, {
			element : '#print1',
			intro : "",
		}, {
			element :"#consoleId2",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$('#nextButton1').removeClass("opacity00");
					$('.user-btn').click(function() {
						$('#nextButton1').remove();
						$("#list1").fadeTo(300, 1, function() {
							$("#list11").fadeTo(300, 1, function() {
								$("#list12").fadeTo(300, 1, function() {
									$("#list13").fadeTo(300, 1, function() {
										$('#nextButton').removeClass("opacity00");
										$('.user-btn').click(function() {
											$('#nextButton').remove();
												$("#list2").fadeTo(300, 1, function() {
													$("#list21").fadeTo(300, 1, function() {
														$("#list22").fadeTo(300, 1, function() {
															$("#list23").fadeTo(300, 1, function() { 
																$("#list24").fadeTo(300, 1, function() { 
																	$("#list25").fadeTo(300, 1, function() {
																		$("#list26").fadeTo(300, 1, function() { 
																			$('#nextButton2').removeClass("opacity00");
																				$('.user-btn').click(function() {
																					$('#nextButton2').remove();
																					setTimeout(function () {
																						introjs.nextStep();
																					}, 1000);
																			});
																		});
																	});
																});
															});
														});
													});
												});
										});
									});
								});
							});
						});
					});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us understand <span class='ct-code-b-yellow'>Operator"+
						" overloading</span> in binary operators.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#main").removeClass("opacity00");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is"+
						" the operating system call.<ul><li><span class='ct-code-b-yellow'>main()"+
						"</span> is execution starting point for any C++ program.</li></ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sampleinit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 's1GetData':
			$('.introjs-helperLayer').one("transitionend", function() {
				//typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			//});
			break;
		case 'getData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'><span class='ct-code-b-yellow'>read()</span>"+
				"</span> reads 10 characters and stored in <span class='ct-code-b-yellow'>ch</span>. "
				typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'print':
			$('.introjs-helperLayer').one("transitionend", function() {
				//var text = "This statement prints the characters stored in <span class='ct-code-b-yellow'>ch</span>. "
				//typing(".introjs-tooltiptext", text, function() {
					$("#inputChar1").removeClass("blinking");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				//});
			});
			break;
		case 'get':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>gcount()</span> returns"+
						" the number of characters extracted by the last unformatted input operation"+
						" (<b><span class='ct-code-b-yellow'>read()</span></b>) performed"+
						" on the object.", function() {
					$("#s" + iVal + "AnimationDiv").removeClass("opacity00");
						iVal++;
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's2GetData':
			$("#s1Box").removeClass("z-index1000000");
			$('.introjs-helperLayer').one("transitionend", function() {
				//typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			//});
			break;
		case 's3Sum':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s3Sum1" :
			$("#s2Box").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				/*var text = "Here s1, s2, s3 are objects of sample class and also not"+
						" primitive datatypes like <span class='ct-code-b-yellow'>int</span>,"+
						" <span class='ct-code-b-yellow'>float</span>,<span class='ct-code-b-yellow'>"+
						" double</span>. <br>We cannot simply add two objects and assume that the compiler"+
						" will add up the corresponding member data.<br>Objects are user-defined data types"+
						" and the operators will operate only on in-built data types.<br>Thus to operate on"+
						" user-defined data types, we overload the operator and tell the compiler"+
						" as to what it should do. On seeing the two operands, the compiler knows"+
						" that + is overloaded and so it goes to the definition of the operator function. ";*/
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			case "s3Sum2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					/*var text = "<span class='ct-code-b-yellow'>s3 = s1 + s2;</span><br>"+
					" Member function can be called by using class of that object."+
					" Hence, the called member function is always preceded by the object."+
					" <br>Here, in the above statement, the object s1 invokes the function operator()"+
					" and the object s2 is used as an argument for the function. <br>The above"+
					" statement can also be written as follows."+
					" (The compiler, recognizing the operands as belonging to the"+
					" <b class='ct-code-b-yellow'>sample</b> class, replaces the operator with the"+
					" corresponding operator function:)<br><span class='ct-code-b-yellow'>s3 = s1.operator+(s2)</span> <br>"+
					" Here, the data members of s1 are passed directly and data members of s2 are passed as an argument.";*/
					typing(".introjs-tooltiptext"," ", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
			
		case 'memberFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				/*var text = "To overload an operator, we use a special"+
				" function, <b>operator function</b>.operator functions are called"+
				" when the corresponding operator i.e '+'  is used."+
				" <br>For example, when we overload '+' : " +
				" <span class='ct-code-b-yellow'>operator+(argument_list)</span>."+
				" <br>Here we have a <span class='ct-code-b-yellow'>sample</span>"+
				" class for which we define an operator+() member function to overload"+
				" the + operator so"+
				" that it adds one complex number to another complex number.";*/
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'memFunAdd':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's3Temp':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3Real':
			
			$('.introjs-helperLayer ').one('transitionend', function() {
				/*('#s3AnimationDiv').removeClass('opacity00');*/
				/*('#s3RealBox').removeClass('opacity00');
				('#s3ImagBox').removeClass('opacity00');*/
				 $("#s3Real").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow  opacity00" id="s3Re">s3.real = <span id="s1Re">real<span> + <span id="s2Re">s2.real</span>;</span>');
					 $('.introjs-tooltip').removeClass("hide");
					 $('#s3Re').removeClass('opacity00');
					 $('#s3Re').removeClass('ct-code-b-yellow');
					 fromEffectWithTweenMax("#s3Real", "#s3Re", function() {
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#s3Re").append('<br>This statement can also be written as '+
										'<br><span id = "s3Re2" class = " opacity00">s3.real = <span id="tot"><span id="s1Re2" class="displayBlock">this.real</span> <span>+</span> '+
										'<span id="s2Re2">s2.real</span></span>;</span>');
								$('#s3Re2').removeClass('opacity00');
								fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
									$('.user-btn').click(function() { 
										$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1RealVal", "#s1Re2", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												fadeInBounceEffectWithTimelineMax("#s2RealVal", "#s2Re2", function() {
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
													$('.user-btn').click(function() { 
														$('.user-btn').remove(); 
														$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
															rotation('#s1Re2', parseInt($("#s1Re2").text()), function() {
																rotation('#s2Re2', parseInt($("#s2Re2").text()), function() {
																	var t = parseInt($("#s1Re2").text()) + parseInt($("#s2Re2").text());
																	rotation('#tot', t, function() {
																		$('#s3Div').removeClass('opacity00');
																		$("#s3RealVal").text($("#tot").text());
																		fromEffectWithTweenMax("#tot", "#s3RealVal", function() {
																			$('.introjs-nextbutton').show();
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
						 });
					 });
				 });
			});
				
				
			break;
		case 's3Imag':
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#s3Imag").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow  opacity00" id="s3Re">s3.imag = <span id="s1Re">imag<span> + <span id="s2Re">s2.imag</span>;</span>');
					 $('.introjs-tooltip').removeClass("hide");
					 $('#s3Re').removeClass('opacity00');
					 $('#s3Re').removeClass('ct-code-b-yellow');
					 fromEffectWithTweenMax("#s3Imag", "#s3Re", function() {
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#s3Re").append('<br>This statement can also be written as '+
										'<br><span id = "s3Re2" class = " opacity00">s3.imag = <span id="tot"><span id="s1Re2" class="displayBlock">this.imag</span> <span>+</span> '+
										'<span id="s2Re2">s2.real</span>;</span></span>');
								$('#s3Re2').removeClass('opacity00');
								fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
									$('.user-btn').click(function() { 
										$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1ImagVal", "#s1Re2", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												fadeInBounceEffectWithTimelineMax("#s2ImagVal", "#s2Re2", function() {
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
													$('.user-btn').click(function() { 
														$('.user-btn').remove(); 
														$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
															$("#tot").text(parseInt($("#s1Re2").text()) + parseInt($("#s2Re2").text()));
															fromEffectWithTweenMax("#tot", "#s3RealVal", function() {
																$('.introjs-nextbutton').show();
															});
														});
													});
												});
											});
										});
									});
								});
						 });
					 });
				 });
				
			});
			break;
		case 'return':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'printSum':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3PutData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'print1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3Sub':
			$("#s2Box").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here s1, s2, s3 are objects of sample class and also not"+
						" primitive datatypes like <span class='ct-code-b-yellow'>int</span>,"+
						" <span class='ct-code-b-yellow'>float</span>,<span class='ct-code-b-yellow'>"+
						" double</span>. <br>We cannot simply add two objects and assume that the compiler"+
						" will add up the corresponding member data.<br>Objects are user-defined data types"+
						" and the operators will operate only on in-built data types.<br>Thus to operate on"+
						" user-defined data types, we overload the operator and tell the compiler"+
						" as to what it should do. On seeing the two operands, the compiler knows"+
						" that + is overloaded and so it goes to the definition of the operator function. ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'friendFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'frndFunSub':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's3Temp1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3Real1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s3Real1").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow  opacity00" id="s3Re">s3.imag = <span id="s1Re">s1.real<span> + <span id="s2Re">s2.real</span>;</span>');
					 $('.introjs-tooltip').removeClass("hide");
					 $('#s3Re').removeClass('opacity00');
					 $('#s3Re').removeClass('ct-code-b-yellow');
					 fromEffectWithTweenMax("#s3Real1", "#s3Re", function() {
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#s3Re").append('<br>This statement can also be written as '+
										'<br><span id = "s3Re2" class = " opacity00">s3.imag = <span id="tot"><span id="s1Re2" class="displayBlock">this.real</span> <span>+</span> '+
										'<span id="s2Re2">s2.real;</span></span></span>');
								$('#s3Re2').removeClass('opacity00');
								fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
									$('.user-btn').click(function() { 
										$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1RealVal", "#s1Re2", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												fadeInBounceEffectWithTimelineMax("#s2RealVal", "#s2Re2", function() {
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
													$('.user-btn').click(function() { 
														$('.user-btn').remove(); 
														$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
															$("#tot").text(parseInt($("#s1Re2").text()) + parseInt($("#s2Re2").text()));
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										});
									});
								});
						 });
					 });
				 });
			});
			break;
		case 's3Imag1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s3Imag1").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow  opacity00" id="s3Re">s3.imag = <span id="s1Re">s1.imag<span> + <span id="s2Re">s2.imag</span>;</span>');
					 $('.introjs-tooltip').removeClass("hide");
					 $('#s3Re').removeClass('opacity00');
					 $('#s3Re').removeClass('ct-code-b-yellow');
					 fromEffectWithTweenMax("#s3Imag1", "#s3Re", function() {
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#s3Re").append('<br>This statement can also be written as '+
										'<br><span id = "s3Re2" class = " opacity00">s3.imag = <span id="tot"><span id="s1Re2" class="displayBlock">this.imag</span> <span>+</span> '+
										'<span id="s2Re2">s2.real</span>;</span></span>');
								$('#s3Re2').removeClass('opacity00');
								fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
									$('.user-btn').click(function() { 
										$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1ImagVal", "#s1Re2", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												fadeInBounceEffectWithTimelineMax("#s2ImagVal", "#s2Re2", function() {
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
													$('.user-btn').click(function() { 
														$('.user-btn').remove(); 
														$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
															$("#tot").text(parseInt($("#s1Re2").text()) + parseInt($("#s2Re2").text()));
															fromEffectWithTweenMax("#tot", "#s3RealVal", function() {
																$('.introjs-nextbutton').show();
															});
														});
													});
												});
											});
										});
									});
								});
						 });
					 });
				 });
			});
			break;
		case 'return1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'printSum1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3PutData1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'print1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
					
				});
				break;
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext', " ", function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
					});
				});
				break;
			case "typeChar1" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#hiddenTypingChar1").removeClass("opacity00");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
					
				});
			case 'checking1':
				$("#inputChar1").attr("contenteditable", true);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext', " ", function() {
						$("#inputChar1").addClass("blinking");
						$("#inputChar1").focus();
						checking1("#inputChar1");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					
				});
				break;
			case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					
				});
				break;
			case 'printPreline3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					
				});
				break;
			case 'inputChar3':
				$('.introjs-helperLayer ').one('transitionend', function() {
				
				});
				break;
			}
			break;
		case "addressDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "addressAnimationDiv" :
				$("#addressDiv").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressAnimationDiv").removeClass("opacity00");
					/*TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", function() {*/
					$(".box-Heading").removeClass("opacity00");
					$("#s1Box").removeClass("opacity00");
					$("#s2Box").removeClass("opacity00");
					$("#s3Box").removeClass("opacity00");
					$("#s3Box").removeClass("opacity00");
					$('.introjs-nextbutton').show();
						/*});
					}});*/
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-nextbutton').show();
				});
				break;
			}
			break;
		
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}
function checking(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		
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
	
	
	$(selector).on("keyup", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 2;
		$('.error-text').remove();
		if ($(this).text() == "") {
			$('.user-btn').remove();
			$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with space.</span>");
		}
		
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '' && val != ' ') {
				arr.push(val);
			}
		});
		
		if (arr.length < maxNumberOfInputs) {
			$('.user-btn').remove();
		} else if (arr.length == maxNumberOfInputs) {
			$('.user-btn').remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal3()">Next&rarr;</a>');
		}
		
		$.each(arr, function(idx, val) {
			if (val == ' ') {
				val.trim();
				alert(val);
				$('.user-btn').remove();
			}
			if ((val > 9 || val < 0)) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 9 .</span>");
				$('.user-btn').remove();
			}
		});
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
function storeVal3() {
	$('.user-btn').remove();
	var splittedText = $('#inputChar').text().split(" ");
	$('#inputChar').html('');
	$.each(splittedText, function(idx, val) {
		if (val != '') {
			$('#inputChar').append('<span class="scanfValue">' + val + '</span> ');
			$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
			//if ((idx % n) == (n - 1)) {
				$('#outputPrintfLine').append('<br/>');
			//}
		} else {
			$('#inputChar').append(' ');
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
				$("#s1Box").addClass("z-index1000000");
				fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i), function() {
					$('.introjs-nextbutton').show();
				});
			}
		}
	}});
}
function checking1(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		
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
	
	
	$(selector).on("keyup", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 2;
		$('.error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with space.</span>");
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
			$('.user-btn').remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal4()">Next&rarr;</a>');
		}
		
		$.each(arr, function(idx, val) {
			if ((val > 9 || val < 0)) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 9 .</span>");
				$('.user-btn').remove();
			}
		});
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
function storeVal4() {
	$('.user-btn').remove();
	var splittedText = $('#inputChar1').text().split(" ");
	$('#inputChar1').html('');
	$.each(splittedText, function(idx, val) {
		if (val != '') {
			$('#inputChar1').append('<span class="scanfValue1">' + val + '</span> ');
			$('#outputPrintfLine1').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
			//if ((idx % n) == (n - 1)) {
				$('#outputPrintfLine1').append('<br/>');
			//}
		} else {
			$('#inputChar1').append(' ');
		}
	});
	
	$('.scanfValue1').addClass('output-value-circle circle-css');
	
	TweenMax.fromTo($('.scanfValue1'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'inherit', onComplete: function() {
		$('.scanfValue1').removeClass('output-value-circle circle-css');
		$.each(arr, function(idx, val) {
			$('.arrayValue1').eq(idx).text(parseInt(val));
		});
		for (var i = 0; i < $('.scanfValue1').length; i++) {
			if (i == ($('.scanfValue1').length - 1)) {
				$("#s2Box").addClass("z-index1000000");
				fromEffectWithTweenMax($('.scanfValue1').eq(i), $('.arrayValue1').eq(i), function() {
					$('.introjs-nextbutton').show();
				});
			}
		}
	}});
}

function rotation(selector1, val, callBackFunction) {
	$(selector1).effect( "highlight",{color: '#ffff33'}, 1000);
	TweenMax.to($(selector1), 1, {rotationX : -90, onComplete:function() {
		$(selector1).text(val);
		TweenMax.to($(selector1), 1, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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
	}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}
function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		
		$('#codeDiv').append("<span id='dummy' class='ct-green-color ct-fonts' style='position: relative; z-index: 99999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).css('width', $('#dummy').width())
    /*if (flag) {
			val = $(selector2).text($(selector1).val());
	} else {
	}*/
   val = $(selector2).text($(selector1).text());
    TweenLite.from($(selector2), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :0.5});
	    TweenLite.to($("#dummy"), 0.8, { ease: Sine.easeOut, left:-150 , delay :1.8, opacity:0 , onComplete: function() {
	    	$(selector2).css('width', 'auto')
	    	introjs.refresh();
	    	$("#dummy").remove();
	    	if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	    }});
}