var nestedStructuresReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		 window.location.search = "?restart=1";
	});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
		  }
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#title',
			intro :'',
			position:"bottom"
		},{
			element :'#informationdiv',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{
			element :'#tableDiv',
			intro :'',
			position:"bottom" 
		},{
			element :'#structDate',
			intro :'',
			position:"bottom" 
		},{
			element :'#structAccount',
			intro :'',
			position:"bottom"
		},{
			element :'#accountVar',
			intro :'',
			position:"bottom"
		},{
			element :'#accountVariableTable',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#acctno',
			intro :'',
			position:"bottom"
		},{
			element :'#accttype',
			intro :'',
			position:"bottom"
		},{
			element :'#lastpayment',
			intro :'',
			position:"bottom"
		},{
			element :'#structEmployee',
			intro :'',
			position:"bottom"
		},{
			element :'#structEmployeeE',
			intro :'',
			position:"bottom"
		},{
			element :'#subStructOfEmployee',
			intro :'',
			position:"bottom"
		},{
			element :'#structEmployeeE',
			intro :'',
			position:"bottom"
		},{
			element :'#printf1',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			position:"bottom"
		},{
			element :'#scanf1',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#nameBox',
			intro :'',
			tooltipClass:'hidden',
			position:"right"
		},{
			element :'#printf2',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			position:"bottom"
		},{
			element :'#scanf2',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#cityBox',
			intro :'',
			tooltipClass:'hidden',
			position:"right"
		},{
			element :'#printf3',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			position:"bottom"
		},{
			element :'#scanf3',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#phoneNoBox',
			intro :'',
			tooltipClass:'hidden',
			position:"right"
		},{
			element :'#printf4',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			position:"bottom"
		},{
			element :'#scanf4',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#pinNoBox',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#printf5',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#embeddedFormat',
			intro :'',
			position:"right"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#informationdiv").removeClass("visibility-hidden");
			  	typing('#informationdiv',"<ul><li>Nested structure with in <span class='color-green'>C</span> language is a <span class='color-green'>structure with in structure</span> i.e., one structure can be declared inside the other structure as we declare the structure members inside a structure (or) one structure variable can be defined with in another structure variable.</li></ul>" ,function() {
		  			typing('.introjs-tooltiptext', "defining nested structure.", function() {  
		  				setTimeout(function(){
							intro.nextStep();
							}, 800);
				  		});
					});
				});
		break;
		case "tableDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
		  		typing('.introjs-tooltiptext',"Let us consider an example on how to use structure with in another structure." ,function() { 
					$('.introjs-nextbutton').show();	
				    });
				});
		break;
		case "structDate" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#structDate').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"<ul><li><span class='color-yellow'>date</span> is a new user defined datatype created by the user by using <span class='color-yellow'>struct .</span></li><li>Three members are declared with in <span class='color-yellow'>date</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show(); 
				  });
				});
		break;
		case "structAccount" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$('#structAccount').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"This is another structure.<ul><li><span class='color-yellow'>account</span> is a new user defined data type which contains three fields <span class='color-yellow'>int</span>, "+
	  					"<span class='color-yellow'>char</span>, and <span class='color-yellow'>struct date</span> variables.</li>"+
	  					"<li>Here <span class='color-yellow'>lastpayment</span> is a variable of type <span class='color-yellow'>struct date</span> is declared with in <span class='color-yellow'>account</span> structure.</li></ul>" ,function() { 
						$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "accountVar" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#accountVar').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"<ul><li>It is structure variable of account datatype.</li>"+
		  				"<li>The memory is allocated for the structure variable <span class='color-yellow'>obj</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show();	
				  });
				});
		break; 
		case "accountVariableTable" :
			$('.introjs-nextbutton').hide();
			$('#ob1').removeClass('opacity00');
			$('#accountVariableTable').removeClass('visibility-hidden');
			if(intro._currentStep == 6) {
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
					intro.nextStep();
					}, 300);
				});
			}
		break;
		case "acctno" :
			$('.introjs-nextbutton').hide();
			$('#accountNumber0').addClass('accountNumber');
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is the first field of <span class='color-yellow'>obj</span>, this can be accessed as <span class='color-yellow'>obj.accno</span> ." ,function() { 
					$('.introjs-nextbutton').show();
				});
			  });
		break; 
		case "accttype" :
			$('#accountNumber0').removeClass('accountNumber');
			$('.introjs-nextbutton').hide();
			$('#accountNumber1').addClass('accountNumber');
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is the second field of <span class='color-yellow'>obj</span>, this can be accessed as <span class='color-yellow'>obj.acctype</span>." ,function() { 
					intro.refresh();
					$('.introjs-nextbutton').show();	
					});
			  });
		break;
		case "lastpayment" :
			$('.introjs-nextbutton').hide();
			$('#accountNumber1').removeClass('accountNumber');
			$('#accountNumber2').addClass('accountNumber');
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"<ul><li>Here <span class='color-yellow'>lastpayment</span> is a member of type <span class='color-yellow'>struct date</span>, which contains three inner fields.</li>"+
						"<li>The members can be accessed as <span class='color-yellow'>obj.lastpayment.day</span>, <span class='color-yellow'>obj.lastpayment.month</span> and <span class='color-yellow'>obj.lastpayment.year</span> .</li></ul>" ,function() { 
					intro.refresh();
					$('.introjs-nextbutton').show();
					});
			  });
		break;
		case "structEmployee" :
			$('#accountNumber2').removeClass('accountNumber');
			$('#tableDiv1').removeClass('visibility-hidden');
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"Let us consider a simple code on nested structure." ,function() { 
					$('.introjs-nextbutton').show();
					});
			  });
		break; 
		case "structEmployeeE" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 11) {
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"Here we are declaring a new user defined type <span class='color-yellow'>employee</span>." ,function() { 
					$('.introjs-nextbutton').show();
					});
			  });
			} else if(intro._currentStep == 13) {
				$('#TableBox').removeClass('visibility-hidden');
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext',"<ul><li><span class='color-yellow'>e</span> is the structure variable of user defined data type <span class='color-yellow'>employee</span>.</li>"+
							"<li>The memory is allocated for structure variable <span class='color-yellow'>e</span>.</li></ul>" ,function() { 
						$('.introjs-nextbutton').show();
						});
				  });
			}
			
		break; 
		case "subStructOfEmployee" :
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$('#consoleAndTableBox').removeClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"<ul><li>The first field is <span class='color-yellow'>name</span> of the employee.</li><li>The second field of employee is another structure <span class='color-yellow'>address</span>.</li>"+
						"<li>The members <span class='color-yellow'>city</span>, <span class='color-yellow'>phone</span> and <span class='color-yellow'>pin</span> are declared with in the structure <span class='color-yellow'>address</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show();
					});
			  });
		break; 
		case "printf1" :
			$('.introjs-nextbutton').hide();
			$('#consoleId').removeClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				 setTimeout(function(){
					intro.nextStep();
					}, 300); 
			  });
		break; 
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			console.log("consoleId");
			if(intro._currentStep == 15) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#nameSpan').removeClass('opacity00');
					$('#nameInput').focus();
					typing('.introjs-tooltiptext',"Enter name." ,function() {
					});
				 });
			} else if (intro._currentStep == 19) {
				 $(".introjs-helperLayer").one("transitionend", function() {
						$('#citySpan').removeClass('opacity00');
						$('#cityInput').focus();
						typing('.introjs-tooltiptext',"Enter city." ,function() { 
						}); 
					  });
					} else if (intro._currentStep == 23) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#phoneNumberSpan').removeClass('opacity00');
							$('#phoneNumberInput').focus();
							typing('.introjs-tooltiptext',"Enter phone number." ,function() { 
							});
						 });
					} else if (intro._currentStep == 27) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#pinNumberSpan').removeClass('opacity00');
							$('#pinNumberInput').focus();
							typing('.introjs-tooltiptext',"Enter pin number." ,function() { 
							});
						});
					} else if (intro._currentStep == 31) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$("#outPut").removeClass("opacity00");
							var text = $("#nameInput").val() + " " + $("#cityInput").val() + " " + $("#phoneNumberInput").val() + " " + $("#pinNumberInput").val();
							typing('#outPut', "<span class=''>" + text + "</span>", function() { 
								typing('.introjs-tooltiptext',"Output." ,function() { 
									setTimeout(function(){
										intro.nextStep();
										}, 600);
								});
							});
						 });
					}
		break; 
		case "scanf1" :
			$('.introjs-nextbutton').hide();
			$('#divE').removeClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#percentiles1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#name1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#divE").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
							$("#divName").effect("highlight", {color: '#FFDC00'}, 1000, function() {
								setTimeout(function(){
									intro.nextStep();
									}, 300);
								});
							});
						});
					});
			  });
		break; 
		case "nameBox" :
			$('.introjs-nextbutton').hide();
			$("#nameInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#nameInput").offset();
				$("#nameBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#nameBox", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#nameBox').removeClass('opacity00');
					typing('.introjs-tooltiptext',"." ,function() { 
						setTimeout(function(){
							intro.nextStep();
							}, 300);
						});
	            	}});
			  });
		break; 
		case "printf2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"." ,function() { 
					setTimeout(function(){
						intro.nextStep();
						}, 300);
				});
			  });
		break; 
		case "scanf2" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#percentiles2").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#city1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#divE").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
							$("#divA").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
								$("#subcity").effect("highlight", {color: '#FFDC00'}, 1000, function() {
									setTimeout(function(){
										intro.nextStep();
										}, 300);
									});
								});
							});
						});
					});
			  });
		break; 
		case "cityBox" :
			$("#cityInput").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#cityInput").offset();
				$("#cityBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#cityBox", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#cityBox').removeClass('opacity00');
					typing('.introjs-tooltiptext',"." ,function() { 
						setTimeout(function(){
							intro.nextStep();
							}, 300);
						});
	           		}});
			  });
		break; 
		
		case "printf3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"." ,function() { 
					 setTimeout(function(){
						intro.nextStep();
						}, 300); 
				});
			  });
		break; 
		case "scanf3" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#percentiles3").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#phone1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#divE").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
							$("#divA").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
								$("#subphone").effect("highlight", {color: '#FFDC00'}, 1000, function() {
									setTimeout(function(){
										intro.nextStep();
										}, 300);
									});
								});
							});
						});
					});
			  });
		break; 
 		case "phoneNoBox" :
			$('.introjs-nextbutton').hide();
			$("#phoneNumberInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#phoneNumberInput").offset();
				$("#phoneNoBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#phoneNoBox", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#phoneNoBox').removeClass('opacity00');
					typing('.introjs-tooltiptext',"." ,function() { 
						setTimeout(function(){
							intro.nextStep();
							}, 300);
						});
	            	}});
			  });
		break; 
		case "printf4" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"." ,function() { 
					setTimeout(function(){
						intro.nextStep();
						}, 300); 
				});
			  });
		break; 
		case "scanf4" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#percentiled").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#pin").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#divE").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
							$("#divA").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
								$("#subpin").effect("highlight", {color: '#FFDC00'}, 1000, function() {
									setTimeout(function(){
										intro.nextStep();
										}, 300);
									});
								});
							});
						});
					});
			  });
		break; 
		case "pinNoBox" :
			$('.introjs-nextbutton').hide();
			$("#pinNumberInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#pinNumberInput").offset();
				$("#pinNoBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#pinNoBox", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#phoneNoBox').removeClass('opacity00');
					typing('.introjs-tooltiptext',"." ,function() { 
						setTimeout(function(){
							intro.nextStep();
							}, 300);
						});
	            	}});
			  });
		break; 
		case "printf5" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					intro.nextStep();
					}, 700);	
				});
		break;
		
		case "embeddedFormat" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#embeddedFormat').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"The members of <span class='color-yellow'>embedded structure</span> (or) <span class='color-yellow'>nested structure</span> can be accessed by using this format." ,function() { 
					$('.introjs-nextbutton').show();	
				  });
				});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					$("#nameInput").attr("disabled", false);
					$("#cityInput").attr("disabled", false);
					$("#phoneNumberInput").attr("disabled", false);
					$("#pinNumberInput").attr("disabled", false);
				});
				$('#nameInput').val("");
				$('#cityInput').val("");
				$('#phoneNumberInput').val("");
				$('#pinNumberInput').val("");
			});
		break;
		}
	});

intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();
typing('.introjs-tooltiptext',"This is one of the features of structure.",function() {
	$('.introjs-nextbutton').show();
	});	
}

$('#nameInput').keyup(function() {
	  if($('#nameInput').val().length > 0) {
		  var name = $('#nameInput').val();
		  $('#nameBox').text(name);
		  $('.introjs-nextbutton').show();
	  } else {
		  $('.introjs-nextbutton').hide();
	  }
	  
	});
	
$('#cityInput').keyup(function() {
	  if($('#cityInput').val().length > 0) {
		  intro.refresh();
		  var city = $('#cityInput').val();
		  $('#cityBox').text(city);
		  $('.introjs-nextbutton').show();
	  } else {
		  $('.introjs-nextbutton').hide();
	  }
	  
	});
	
$('#phoneNumberInput').keyup(function() {
	  if($('#phoneNumberInput').val().length > 0) {
		  var phone = $('#phoneNumberInput').val();
		  $('#phoneNoBox').text(phone);
		  $('.introjs-nextbutton').show();
	  } else {
		  $('.introjs-nextbutton').hide();
	  }
	  
	});
$('#pinNumberInput').keyup(function() {
	  if($('#pinNumberInput').val().length > 0) {
		  var pin = $('#pinNumberInput').val();
		  $('#pinNoBox').text(pin);
		  $('.introjs-nextbutton').show();
	  } else {
		  $('.introjs-nextbutton').hide();
	  }
	  
	});

$("#nameInput, #cityInput").keydown(function(e) {
	if ((e.which >= 65 && e.which <= 90) || e.which == 8 || e.which == 37 || e.which == 32 || e.which == 39) {
		return true;
	} else {
		e.preventDefault();
		}
	});
	
$("#phoneNumberInput, #pinNumberInput").keyup(function() {
	var yourInput = $(this).val();
	re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
	var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
	});

$("#phoneNumberInput, #pinNumberInput").keydown(function(e) {
	if ((e.which >= 48 && e.which <= 57) ||(e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 37 || e.which == 39) {
		return true;
	} else {
		e.preventDefault();
		}
	});

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