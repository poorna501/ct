var structureWithAssiagnmentOperator = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
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
			element :'#intVariable',
			intro :'',
			position:"bottom" 
		},{
			element :'#arrayOfaValues',
			intro :'',
			position:"bottom"  
		},{
			element :'#arrayTable1',
			intro :'',
			position:"bottom" 
		},{
			element :'#arrayOfbValues',
			intro :'',
			position:"bottom"
		},{
			element :'#arrayTable2',
			intro :'',
			position:"bottom" 
		},{
			element :'#bEqualsa',
			intro :'',
			position:"bottom" 
		},{
			element :'#forCondition',
			intro :'',
			position:"bottom"
		},{
			element :'#arrayTable2',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#structureConcept',
			intro :'',
			position:"bottom"
		},{
			element :'#structBook',
			intro :'',
			position:"bottom"  
		},{
			element :'#storeBmemory',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{
			element :'#bookB1',
			intro :'',
			position:"bottom"
		},{
			element :'#cLanguage',
			intro :'',
			position:"bottom"
		},{
			element :'#table1',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{
			element :'#bookB2',
			intro :'',
			position:"bottom" 
		},{
			element :'#b2equalsB1',
			intro :'',
			position:"bottom"
		},{
			element :'#table2',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "intVariable" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
				$('#intVariable').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"This is declaration of the variable <span class='ct-code-b-yellow'>i</span>." ,function() { 
					$('.introjs-nextbutton').show();	
			 	 	});
				});
			break;
		case "arrayOfaValues" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#arrayOfaValues').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"Here, the array <span class='ct-code-b-yellow'>a</span> is declared with size "+
	  					"<span class='ct-code-b-yellow'>5</span>." ,function() { 
					$('.introjs-nextbutton').show();	
			  		});
				});
			break;
		case "arrayTable1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#aValue').removeClass('opacity00');
				$('#arrayTable1').removeClass('opacity00');
				$('#array0').addClass('circle-css');
				var l = $("#array0").offset();
				$("#memory0").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#memory0", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		        	$('#array0').removeClass('circle-css');
		        	$('#array1').addClass('circle-css');
		        	var l = $("#array1").offset();
					$("#memory1").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#memory1", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	$('#array1').removeClass('circle-css');
			        	$('#array2').addClass('circle-css');
			        	var l = $("#array2").offset();
						$("#memory2").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory2", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				        	$('#array2').removeClass('circle-css');
				        	$('#array3').addClass('circle-css');
				        	var l = $("#array3").offset();
							$("#memory3").offset({"top": l.top,"left": l.left});
					        TweenMax.to("#memory3", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					        	$('#array3').removeClass('circle-css');
					        	$('#array4').addClass('circle-css');
					        	var l = $("#array4").offset();
								$("#memory4").offset({"top": l.top,"left": l.left});
						        TweenMax.to("#memory4", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						        	$('#array4').removeClass('circle-css');
	  								typing('.introjs-tooltiptext',"<ul><li>The subscript of the array always start from "+
	  										"<span class='ct-code-b-yellow'>0</span>.</li><li>Each elelment of the array can be accessed by using"+
	  										" <span class='ct-code-b-yellow'>subscript</span> (or) <span class='ct-code-b-yellow'>index</span>.</li>"+
	  										"<li>The base address of entire array is <span class='ct-code-b-yellow'>1024</span> the next address is "+
	  										"<span class='ct-code-b-yellow'>1026</span> because <span class='ct-code-b-yellow'>int</span> allocates "+
	  										"<span class='ct-code-b-yellow'>2 bytes</span> of memory.</li></ul>" ,function() { 
										$('.introjs-nextbutton').show();	
	  									});
	  								}});  
								}});  
			 				}});  
						}});  
	  				}});  
				});
			break;
		case "arrayOfbValues" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#arrayOfbValues').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"Here array <span class='ct-code-b-yellow'>b</span> is declared with size "+
	  					"<span class='ct-code-b-yellow'>5</span>." ,function() { 
					$('.introjs-nextbutton').show();	
			  		});
				});
			break;
		case "arrayTable2" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 5) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#bValue').removeClass('opacity00');
					$('#arrayTable2').removeClass('opacity00');
		  			typing('.introjs-tooltiptext',"Memory allocated for array <span class='ct-code-b-yellow'>b</span> "+
		  					"with size <span class='ct-code-b-yellow'>5</span>." ,function() { 
						$('.introjs-nextbutton').show();	
				 		 });
					});
			} else if(intro._currentStep == 8) {
				$(".introjs-helperLayer").one("transitionend", function() {
					var l = $("#memory0").offset();
					$("#memory5").offset({"top": l.top,"left": l.left});
				    TweenMax.to("#memory5", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				        var l = $("#memory1").offset();
						$("#memory6").offset({"top": l.top,"left": l.left});
					    TweenMax.to("#memory6", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					    	var l = $("#memory2").offset();
							$("#memory7").offset({"top": l.top,"left": l.left});
					        TweenMax.to("#memory7", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					        	var l = $("#memory3").offset();
								$("#memory8").offset({"top": l.top,"left": l.left});
						        TweenMax.to("#memory8", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						        	var l = $("#memory4").offset();
									$("#memory9").offset({"top": l.top,"left": l.left});
							        TweenMax.to("#memory9", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
							        	intro.nextStep();
						        		}});
						       		}});
					   		 	}});
				        	}});
				    	}});
					});
				}
			break;
		case "bEqualsa" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#bEqualsa').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"<span id='error'><span id='user'>User wants to assign every element of the array "+
	  					"<span class='ct-code-b-yellow'>a</span> to array <span class='ct-code-b-yellow'>b</span></span></span>" ,function() { 
	  				$("#arrayTable1").effect("highlight", {color: '#76EEC6'}, 2000, function() {
						$("#arrayTable2").effect("highlight",{color: '#76EEC6'}, 2000, function() {
							$('#user').remove();
							typing('#error',"<span id='' class=''>Which is an <span class='color-red'>error</span> because we cannot assign "+
									"directly one array name to another array name.</span>" ,function() {
	  				      		$('.introjs-nextbutton').show();
								});
		  					});
				  		});
					});
				});
			break;
		case "forCondition" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#forCondition').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"<ul>Now solution to this problem is:<li>Each and every element of the array is "+
	  					"individually copied into another array by using their <span class='ct-code-b-yellow'>indices</span> (or) "+
	  					"<span class='ct-code-b-yellow'>subscript</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show();	
			 		});
				});
			break;
		case "structureConcept" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#structureConcept').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"Now let us consider structure concept.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show();	
			 		});
				});
			break; 
		case "structBook" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is a structure declaration which declares a new user defined datatype "+
						"<span class='ct-code-b-yellow'>book</span>." ,function() {
					$('.introjs-nextbutton').show();	
			 		});
				});
			break; 
		case "storeBmemory" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					intro.nextStep();
					}, 1000);	
				});
			break;
		case "bookB1" : 
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is structure definition which allocates memory to the structure variable "+
						"<span class='ct-code-b-yellow'>b1</span>" ,function() {
					$('.introjs-nextbutton').show();	
			 		});
				});
			break;
		case "cLanguage" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"Initialization of values to structure variable." ,function() {
					$('.introjs-nextbutton').show();	
			 		});
				});
			break;
		case "table1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#b1Array").removeClass("opacity00");
				$("#table1").removeClass("opacity00");
				intro.refresh();
				$('#name').addClass('circle-css');
				var l = $("#name").offset();
				$("#mem0").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#mem0", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		        	$('#name').removeClass('circle-css');
		        	$('#price').addClass('circle-css');
		        	var l = $("#price").offset();
					$("#mem1").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#mem1", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	$('#price').removeClass('circle-css');
			        	$('#pages').addClass('circle-css');
			        	var l = $("#pages").offset();
						$("#mem2").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#mem2", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
							$('#pages').removeClass('circle-css');
			  				typing('.introjs-tooltiptext', "", function() {  
								intro.nextStep();
								});
		       				 }});
		       		 		}});
		        		}});
				});
			break;
		case "bookB2" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This is structure definition which allocates memory to the structure variable "+
						"<span class='ct-code-b-yellow'>b2</span>." ,function() {
					$('.introjs-nextbutton').show();	
			 		});
				});
			break;
		case "b2equalsB1" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#b2Arayy").removeClass("opacity00");
				$("#table2").removeClass("opacity00");
				typing('.introjs-tooltiptext',"It is possible to copy an entire structure value in to another structure variable." ,function() {
					$('.introjs-nextbutton').show();	
			 		});
				});
			break;
		case "table2" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#mem0").offset();
				$("#mem30").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#mem30", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		        	var l = $("#mem1").offset();
					$("#mem31").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#mem31", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	var l = $("#mem2").offset();
						$("#mem32").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#mem32", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			  				typing('.introjs-tooltiptext', "", function() {  
								intro.nextStep();
								});
		       				 }});
		       		 	}});
		        	}});
				});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
			break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	typing('.introjs-tooltiptext',"This is one of the feature of structures, let us consider an example how the assignment operator run on arrays "+
			"and structures.",function() {
		$('.introjs-nextbutton').show();
		});	
}
function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
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