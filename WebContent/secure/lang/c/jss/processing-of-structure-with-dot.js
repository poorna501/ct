var intro;
var typingInterval = 5;

var processingOfStructureWithDotReady = function() {
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function(){
		location.reload(); 
	});
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#informationDiv",
				tooltipClass:"hide"
			},{
				element : "#codeDiv",
				intro : "",
				position:"right"
			},{
				element : "#declaration",
				intro : "",
				position:"right"
			},{
				element : "#variableDefinition",
				intro : "",
				position:"right"
			},{
				element : "#s1",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv1",
				intro : "",
				position:"bottom",
			},{
				element : "#s2",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv2",
				intro : "",
				position:"bottom",
			},{
				element : "#s3",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv3",
				intro : "",
				position:"bottom",
			},{
				element : "#firstRecord",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#name1",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readName1",
				intro : "",
				position:"bottom",
			},{
				element : "#s1name",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#age1",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readAge1",
				intro : "",
				position:"bottom",
			},{
				element : "#s1age",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#salary1",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readSalary1",
				intro : "",
				position:"bottom",
			},{
				element : "#s1sal",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#secondRecord",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#name2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readName2",
				tooltipClass:"hide"
			},{
				element : "#s2name",
				tooltipClass:"hide"
			},{
				element : "#age2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readAge2",
				tooltipClass:"hide"
			},{
				element : "#s2age",
				tooltipClass:"hide"
			},{
				element : "#salary2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readSalary2",
				tooltipClass:"hide"
			},{
				element : "#s2sal",
				tooltipClass:"hide"
			},{
				element : "#thirdRecord",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#name3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readName3",
				tooltipClass:"hide"
			},{
				element : "#s3name",
				tooltipClass:"hide"
			},{
				element : "#age3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readAge3",
				tooltipClass:"hide"
			},{
				element : "#s3age",
				tooltipClass:"hide"
			},{
				element : "#salary3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#readSalary3",
				tooltipClass:"hide"
			},{
				element : "#s3sal",
				tooltipClass:"hide"
			},{
				element : "#titles",
				intro : "",
				position:"top",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord1",
				intro : "",
				position:"top",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord2",
				intro : "",
				position:"top",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord3",
				intro : "",
				position:"top",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#restart",
				intro : "",
				position:"right",
			}
			
			]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#text").css({"height" : $("#text").outerHeight()});
				var text = $("#text").html();
				typing("#text", text, function() {
					$("#informationDiv").css({"z-index": "999999999"});
					setTimeout(function(){
						intro.nextStep();
					}, 1000);
				});
			break;
			case "codeDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#codeDiv").removeClass("opacity00").hide().fadeIn(1500,function() {
						$("#outputDiv").removeClass("opacity00");
						var text = "Let us consider an example code for accessing member of a structure by using <span class='ct-code-b-yellow'>dot</span> operator.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;	
			case "declaration":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the declaration of new user defined datatype <span class='ct-code-b-yellow'>employeerecord</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "variableDefinition":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of struct variables, it will <span class='ct-code-b-yellow'>allocate memory</span> to the variables S1, S2, S3.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				
			break;	
			case "s1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "It will allocate memory to variable S1 of struct datatype i.e, employeerecord.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "animationDiv1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#animationDiv1").removeClass("opacity00").hide().fadeIn(2000,function() {
						var text = "The members of S1 variable can be accessed by using dot(.) operator as S1.name , S1.age and S1.sal.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			case "s2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "It will allocate memory to variable S2 of struct datatype i.e, employeerecord.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#animationDiv2").removeClass("opacity00").hide().fadeIn(2000,function() {
						var text = "The members of S2 variable can be accessed by using dot(.) operator as S2.name , S2.age and S2.sal.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			case "s3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "It will allocate memory to variable S3 of struct datatype i.e, employeerecord.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#animationDiv3").removeClass("opacity00").hide().fadeIn(2000,function() {
						var text = "The members of S3 variable can be accessed by using dot(.) operator as S3.name , S3.age and S3.sal.";
						typing(".introjs-tooltiptext", text, function() {
							$("#output").append('<span id="stmt1"></span><br>');
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			case "outputDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					scrollAtOutput();
					$('.introjs-nextbutton').hide();
					 if (intro._currentStep == 11) {
						var text = "Enter details of first record name, age and salary :";
						typing("#stmt1", text, function() {
							var text = "Enter first record values.";
							typing(".introjs-tooltiptext", text, function() {
								setTimeout(function(){
									intro.nextStep();
								}, 1000);
							});
						});
					} else if (intro._currentStep == 13) {
						var text = "Enter name:";
						typing("#enterName1", text, function() {
							$("#editname1").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editname1").focus();
							var text="enter the name of first record."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 17) {
						var text = "Enter age:";
						typing("#enterAge1", text, function() {
							$("#editage1").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editage1").focus();
							var text="enter the age of first record."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 21) {
						var text = "Enter salary:";
						typing("#enterSal1", text, function() {
							$("#editsal1").effect("highlight",{color: 'yellow'}, 1500);
							$("#editsal1").focus();
							var text="enter salary of first record."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 25) {
						var text = "Enter details of second record name, age and salary :";
						typing("#stmt2", text, function() {
							var text="enter second record details."
							typing(".introjs-tooltiptext", text, function() {
								intro.nextStep();
							});
						});
					}	
					 
					 //second Record
					 else if (intro._currentStep == 27) {
						var text = "Enter name:";
						typing("#enterName2", text, function() {
							$("#editname2").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editname2").focus();
							var text="enter second record name."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 31) {
						var text = "Enter age:";
						typing("#enterAge2", text, function() {
							$("#editage2").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editage2").focus();
							var text="enter second record age."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 35) {
						var text = "Enter salary:";
						typing("#enterSal2", text, function() {
							$("#editsal2").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editsal2").focus();
							var text="enter second record salary."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					}
					
				 //third Record
				 
					else if (intro._currentStep == 39) {
						var text = "Enter details of third record name, age and salary :";
						typing("#stmt3", text, function() {
							var text="enter third record details."
							typing(".introjs-tooltiptext", text, function() {
								intro.nextStep();
							});
						});
					} else if (intro._currentStep == 41) {
						var text = "Enter name:";
						typing("#enterName3", text, function() {
							$("#editname3").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editname3").focus();
							var text="enter third record name."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 45) {
						var text = "Enter age:";
						typing("#enterAge3", text, function() {
							$("#editage3").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editage3").focus();
							var text="enter third record age."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					} else if (intro._currentStep == 49) {
						var text = "Enter salary:";
						typing("#enterSal3", text, function() {
							$("#editsal3").effect( "highlight",{color: 'yellow'}, 1500);
							$("#editsal3").focus();
							var text="enter third record salary."
							typing(".introjs-tooltiptext", text, function() {
							});
						});
					}
				 
				 
				 //printing
				 
				 else if (intro._currentStep == 53) {
						var text1 = "AGE";
						typing("#printtitlesAge", text1, function() {
							var text2 = "NAME";
							typing("#printtitlesName", text2, function() {
								var text3 = "SALARY";
								typing("#printtitlesSalary", text3, function() {
									setTimeout(function(){
										intro.nextStep();
									}, 1000);
								});
							});
						});
					} else if (intro._currentStep == 55) {
						var text1 = $("#s1age").text();
						typing("#printingStmt1", text1, function() {
							var text2 = $("#s1name").text();
							typing("#printingStmt2", text2, function() {
								var text3 = $("#s1sal").text();
								typing("#printingStmt3", text3, function() {
									setTimeout(function(){
										intro.nextStep();
									}, 1000);
								});
							});
						});
					} else if (intro._currentStep == 57) {
						var text1 = $("#s2age").text();
						typing("#printingStmt4", text1, function() {
							var text2 = $("#s2name").text();
							typing("#printingStmt5", text2, function() {
								var text3 = $("#s2sal").text();
								typing("#printingStmt6", text3, function() {
									setTimeout(function(){
										intro.nextStep();
									}, 1000);
								});
							});
						});
					} else if (intro._currentStep == 59) {
						var text1 = $("#s3age").text();
						typing("#printingStmt7", text1, function() {
							var text2 = $("#s3name").text();
							typing("#printingStmt8", text2, function() {
								var text3 = $("#s3sal").text();
								typing("#printingStmt9", text3, function() {
									setTimeout(function(){
										intro.nextStep();
									}, 1000);
								});
							});
						});
					}
				}); 
					 
			break;
			case "firstRecord":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "name1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterName1"></span><span class="padding3" contenteditable="true" id="editname1" maxlength="18" spellcheck="false"></span><br>');
						characters();
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "readName1":
				$('.introjs-nextbutton').hide();
				$("#editname1").attr("contenteditable", false);
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s1name").addClass("opacity00");
					$("#s1name").text($("#editname1").text());
					var text = "It will get the value of name by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "s1name":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s1name").removeClass("opacity00").hide().fadeIn(2000,function() {
						intro.nextStep();
					});
				});
			break;
			case "age1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterAge1"></span><span class="padding3" contenteditable="true" id="editage1" maxlength="1" spellcheck="false"></span><br>');
						numbers();
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "readAge1":
				$('.introjs-nextbutton').hide();
				$("#editage1").attr("contenteditable", false);
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s1age").addClass("opacity00");
					$("#s1age").text($("#editage1").text());
					var text = "It will get the value of age by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "s1age":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s1age").removeClass("opacity00").hide().fadeIn(2000,function() {
						intro.nextStep();
					});
				});
			break;
			
			
			case "salary1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterSal1"></span><span class="padding3" contenteditable="true" id="editsal1" maxlength="5"></span><br>');
						numbers();
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "readSalary1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editsal1").attr("contenteditable", false);
					$("#s1sal").addClass("opacity00");
					$("#s1sal").text($("#editsal1").text());
					var text = "It will get the value of salary by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "s1sal":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s1sal").removeClass("opacity00").hide().fadeIn(2000,function() {
						intro.nextStep();
					});
				});
			break;
			case "secondRecord":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="stmt2"></span><br>');
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			
			//second Record
			
			
			case "name2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterName2"></span><span class="padding3" contenteditable="true" id="editname2" maxlength="18" spellcheck="false"></span><br>');
						characters();
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			case "readName2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editname2").attr("contenteditable", false);
					$("#s2name").addClass("opacity00");
					$("#s2name").text($("#editname2").text());
					var text = "It will get the value of name by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "s2name":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s2name").removeClass("opacity00").hide().fadeIn(2000,function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			case "age2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterAge2"></span><span class="padding3" contenteditable="true" id="editage2" maxlength="1" spellcheck="false"></span><br>');
						numbers();
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "readAge2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editage2").attr("contenteditable", false);
					$("#s2age").addClass("opacity00");
					$("#s2age").text($("#editage2").text());
					var text = "It will get the value of age by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "s2age":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s2age").removeClass("opacity00").hide().fadeIn(2000,function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			case "salary2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterSal2"></span><span class="padding3" contenteditable="true" id="editsal2" maxlength="5"></span><br>');
						numbers();
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "readSalary2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editsal2").attr("contenteditable", false);
					$("#s2sal").addClass("opacity00");
					$("#s2sal").text($("#editsal2").text());
					var text = "It will get the value of salary by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "s2sal":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s2sal").removeClass("opacity00").hide().fadeIn(2000,function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "thirdRecord":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id = "stmt3"></span><br>');
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
		//third Record
			
			
			case "name3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterName3"></span><span class="padding3" contenteditable="true" id="editname3" maxlength="18" spellcheck="false"></span><br>');
						characters();
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			case "readName3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editname3").attr("contenteditable", false);
					$("#s3name").addClass("opacity00");
					$("#s3name").text($("#editname3").text());
					var text = "It will get the value of name by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "s3name":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s3name").removeClass("opacity00").hide().fadeIn(2000,function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			case "age3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterAge3"></span><span class="padding3" contenteditable="true" id="editage3" maxlength="1" spellcheck="false"></span><br>');
						numbers();
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "readAge3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editage3").attr("contenteditable", false);
					$("#s3age").addClass("opacity00");
					$("#s3age").text($("#editage3").text());
					var text = "It will get the value of age by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "s3age":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s3age").removeClass("opacity00").hide().fadeIn(2000,function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			
			case "salary3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="enterSal3"></span><span class="padding3" contenteditable="true" id="editsal3" maxlength="5"></span><br>');
						numbers();
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "readSalary3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editsal3").attr("contenteditable", false);
					$("#s3sal").addClass("opacity00");
					$("#s3sal").text($("#editsal3").text());
					var text = "It will get the value of salary by standard input device(keyboard).";
					typing(".introjs-tooltiptext", text, function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			case "s3sal":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#s3sal").removeClass("opacity00").hide().fadeIn(2000,function() {
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			
			//printing statments
			
			case "titles":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the string i.e, about the details of the three records in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<table><tr><th class="output-table-border" id="printtitlesAge"></th>' 
								+ '<th class="output-table-border" id="printtitlesName"></th>' 
								+ '<th class="output-table-border" id="printtitlesSalary"></th>' 
								+ '</tr><tr>' 
								+ '<td class="output-table-border" id="printingStmt1"></td>'
								+ '<td class="output-table-border" id="printingStmt2"></td>'
								+ '<td class="output-table-border" id="printingStmt3"></td>'
							+ '</tr>'
							+ '<tr>'
								+ '<td class="output-table-border" id="printingStmt4"></td>'
								+ '<td class="output-table-border" id="printingStmt5"></td>'
								+ '<td class="output-table-border" id="printingStmt6"></td>'
							+ '</tr>'

							+ '<tr>'
								+ '<td class="output-table-border" id="printingStmt7"></td>'
								+ '<td class="output-table-border" id="printingStmt8"></td>'
								+ '<td class="output-table-border" id="printingStmt9"></td>'
							+ '</tr>'
							+ '</table>');
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "printRecord1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the details of first record in console.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "printRecord2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the details of second record in console.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "printRecord3":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will print the details of third record in console.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "restart":
				$('.introjs-nextbutton').hide();
				$('#informationDiv').css({"z-index": "0"});
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to Restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
			break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.introjs-nextbutton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function scrollAtOutput() {
	var container = $('.output-console-body');
	scrollTo = $('.output-console-body').find("span").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}

function characters() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 20 characters, because the array variable size is name[20].</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 60 && e.which <= 90))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
		
	});
}


function numbers() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 2 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
			e.preventDefault();
			}
		}
		
	});
		
}