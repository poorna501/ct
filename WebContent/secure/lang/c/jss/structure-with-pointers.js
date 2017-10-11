var structureWithPointersReady = function() {
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
			element :'#informationdiv',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableDiv',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
	 	},{
			element :'#voidFunction',
			intro :'',
			position:"bottom" 
		},{
			element :'#membersOfStructBook',
			intro :'',
			position:"bottom" 
		},{
			element :'#memorySend',
			intro :'',
			position:"bottom"  
		},{
			element :'#memoryStoreB',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#bookPointer',
			intro :'',
			position:"bottom" 
		},{ 
			element :'#boxOfP',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{ 
			element :'#pEquals',
			intro :'',
			position:"bottom"
		},{ 
			element :'#printF',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{ 
			element :'#printF',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{ 
			element :'#printF',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#consoleId',
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
		
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#informationdiv").removeClass("visibility-hidden");
			  	typing('#informationdiv',"<ul><li>A pointer pointing to a structure is known as <b class='color-green'>structure pointer</b>.</li><li>Rememeber that left hand side of dot operator there must always be a structure variable, where as on the left hand side of the arrow operator there must be always be a pointer to a structure.</li></ul>" ,function() {
			  		typing('.introjs-tooltiptext',"Let us consider an example on how to use structure with pointers." ,function() { 
			  			$('.introjs-nextbutton').show();
				  		});
					});
				});
		break;
		case "tableDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
	  			setTimeout(function(){
					intro.nextStep();
					}, 700); 	
				});
		break;
		case "voidFunction" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidDisplay").removeClass("opacity00");
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any c program.</li></ul>", function() {
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "membersOfStructBook" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#membersOfStructBook").removeClass("opacity00");
				typing('.introjs-tooltiptext', "This is the structure declaration of new user defined data type <span class='color-yellow'>book</span> which continious three members <span class='color-yellow'>name</span>, <span class='color-yellow'>price</span> and <span class='color-yellow'>page</span>.", function() {
					$('.introjs-nextbutton').show();
					});
				});
		break;
	 	case "memorySend" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structBook").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Here structure variable <span class='color-yellow'>b</span> is defined for <span class='color-yellow'>book</span> and initialized.", function() {
			  		$('.introjs-nextbutton').show();
					});
				});
		break; 
		case "memoryStoreB" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#bArrow').removeClass("opacity00");
				$("#memoryStoreB").removeClass("opacity00");
				$("#bArrow").removeClass("opacity00");
				intro.refresh();
				$('#name').addClass('circle-css');
				var l = $("#name").offset();
				$("#memory0").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#memory0", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		        	$('#name').removeClass('circle-css');
		        	$('#price').addClass('circle-css');
		        	var l = $("#price").offset();
					$("#memory1").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#memory1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	$('#zeros').removeClass('opacity00');
			        	$('#price').removeClass('circle-css');
			        	$('#pages').addClass('circle-css');
			        	var l = $("#pages").offset();
						$("#memory2").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory2", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
							$('#pages').removeClass('circle-css');
			  				typing('.introjs-tooltiptext', "", function() {  
			  					setTimeout(function(){
			  						intro.nextStep();
			  						}, 800); 
								});
	       				 	}});
	       		 		}});
	        		}});
				});
		break;
		case "bookPointer" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pointerP").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "Here <span class='color-yellow'>p</span> is a pointer variable to the structure book i.e., it allocates only <span class='color-yellow'>2 bytes</span> of memory to store the address of any variable of <span class='color-yellow'>struct book</span>.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break; 
		case "boxOfP" :
			$('#boxOfP').removeClass('opacity00');
			$('#arrow').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#address1").removeClass("opacity00");
				var l = $("#address").offset();
				$("#address1").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#address1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			  		setTimeout(function(){
						intro.nextStep();
						}, 900); 
	       			}});
				});
		break;
		case "pEquals" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pointerP").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "The address of structure variable <span class='color-yellow'>b</span> is stored into the pointer variable of struct book.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break; 
		case "printF" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 10) {
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pName").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#pId").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#address").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
							$("#name1").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
								$("#memory0").effect("highlight", {color: '#FFDC00'}, 1000, function() {
									setTimeout(function(){
										intro.nextStep();
										}, 300);
									});
								});
							});
						});
					});
				});
			} else if(intro._currentStep == 12) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#pprice").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#pId").effect("highlight", {color: '#FFDC00'}, 1000, function() {
							$("#address").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
								$("#price1").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
									$("#memory1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
										setTimeout(function(){
											intro.nextStep();
											}, 300);
										});
									});
								});
							});
						});
					});
				} else if(intro._currentStep == 14) {
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#pPage").effect("highlight", {color: '#FFDC00'}, 1000, function() {
							$("#pId").effect("highlight", {color: '#FFDC00'}, 1000, function() {
								$("#address").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
									$("#pages1").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
										$("#memory2").effect("highlight", {color: '#FFDC00'}, 1000, function() {
											setTimeout(function(){
												intro.nextStep();
												}, 300);
											});
										});
									});
								});
							});
						});
					}
		break;
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 11) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#consoleId").removeClass("opacity00");
				  	typing('#nameOutPut', "NAME: " + "<span class='color-palegreen'>C LANGUAGE</span>",  function() { 
				  		setTimeout(function(){
							intro.nextStep();
							}, 800); 
						});
					});
			} else if(intro._currentStep == 13) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('#priceOutPut', "price: " + "<span class='color-palegreen'>125.500000</span>",  function() { 
				  		setTimeout(function(){
							intro.nextStep();
							}, 800); 
					});
				});
			} else if(intro._currentStep == 15) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('#pageOutPut',  "page: " + "<span class='color-palegreen'>315</span></span>",  function() { 
				  		setTimeout(function(){
							intro.nextStep();
							}, 800); 
					});
				});
			}
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
	typing('.introjs-tooltiptext',"This is one of the features of structure.",function() {
		$('.introjs-nextbutton').show();
		});	
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 20;
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