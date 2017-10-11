var structureWithFunctionsReady = function() {
	intro = introJs();
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
			element :'#programExp',
			intro :'',
			position:"bottom"  
		},{
			element :'#errorVoidDisplay',
			intro :'',
			position:"bottom"  
		},{
			element :'#structBook',
			intro :'',
			position:"bottom"  
	 	},{
			element :'#voidMain',
			intro :'',
			position:"bottom" 
	 	},{
			element :'#mainFunction',
			intro :'',
			position:"bottom" 
		},{
			element :'#memoryBookB',
			intro :'',
			position:"bottom"
		},{
			element :'#memoryStoreB',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#displayOfB',
			intro :'',
			position:"bottom"
		},{
			element :'#voidPrintFunction',
			intro :'',
			position:"bottom" 
		},{
			element :'#voidDispalyX',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#memoryStoreX',
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
				$("#informationdiv").fadeIn().removeClass("visibility-hidden");
			  		typing('.introjs-tooltiptext',"Let us consider an example on how to use structure with functions." ,function() { 
			  			$('.introjs-nextbutton').show();
				  });
			});
		break;
		case "programExp" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
				text = "Here, we will learn how the <span class='ct-code-b-yellow'>functions</span> are work"
						+" in a <span class='ct-code-b-yellow'>structure</span>.";
				typing('.introjs-tooltiptext',text ,function() { 
		  			$('.introjs-nextbutton').show();
				});
			});
		break; 
		case "errorVoidDisplay" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "This is the function declaration of <span class='ct-code-b-yellow'>display()</span>."+
			  	"<ul><li>But <span class='ct-code-b-yellow'>struct book</span> is unknown to the "
			  			+"<span class='ct-code-b-yellow'>compiler</span> because <span class='ct-code-b-yellow'>struct book</span>"
			  			+" was not declared. So, it gives an <span class='ct-code-b-yellow'>error</span>.</li>"+
			  	"<li>Now change the place of declaration.</li></ul>", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "structBook" :
			$('#errorVoidDisplay').addClass('opacity00')
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structBook").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This is the structure declaration of new user defined data type <span class='ct-code-b-yellow'>book</span> which continious three members <span class='ct-code-b-yellow'>name</span>, <span class='ct-code-b-yellow'>price</span> and <span class='ct-code-b-yellow'>page</span>.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "voidMain" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidDisplay").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This is a <span class='ct-code-b-yellow'>void</span> function declaration.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break; 
		case "mainFunction" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any c program.</li></ul>", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "memoryBookB" :
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "Here structure variable <span class='ct-code-b-yellow'>b</span> is defined for <span class='ct-code-b-yellow'>book</span> and initialized.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break; 
		case "memoryStoreB" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#bArrow").removeClass("opacity00");
				$("#memoryStoreB").removeClass("opacity00");
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
			        	$('#memory1').append('00000');
			        	$('#price').removeClass('circle-css');
			        	$('#pages').addClass('circle-css');
			        	var l = $("#pages").offset();
						$("#memory2").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory2", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
							$('#pages').removeClass('circle-css');
			  				typing('.introjs-tooltiptext', "", function() {  
			  					intro.nextStep();
								});
		       				 }});
		       		 	}});
		        	}});
				});
		break;
		case "displayOfB" : 
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#voidDispalyX").removeClass("opacity00");
		  	typing('.introjs-tooltiptext', "It is a function call which sends the entire structure variable.", function() {  
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "voidPrintFunction" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidDispalyX").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This is function defination and which receives the entire structure variable.", function() {  
					$('.introjs-nextbutton').show();
					});
				});
		break;
		case "voidDispalyX" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					intro.nextStep();
					}, 500); 	
			});
		break;
		case "memoryStoreX" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#xArrow").removeClass("opacity00");
				$("#memoryStoreX").removeClass("opacity00");
				var l = $("#memory0").offset();
				$("#memory01").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#memory01", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		        	var l = $("#memory1").offset();
					$("#memory11").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#memory11", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	var l = $("#memory2").offset();
						$("#memory21").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory21", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			  				typing('.introjs-tooltiptext', "", function() { 
			  					intro.nextStep();
								});
		       				 }});
		       		 	}});
		        	}});
				});
		break; 
		case "printF" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#printF").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', ".", function() {  
			  		 setTimeout(function(){
						intro.nextStep();
						}, 800); 
					});
				});
		break;
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#consoleId").removeClass("opacity00");
			  	typing('#outPut', "NAME: " + "<span class='color-palegreen'>C LANGUAGE</span> <span style='margin-left: 20px;'></span>" + "price: " + "<span class='color-palegreen'>125.500000</span> <span style='margin-left: 20px;'></span>" + "page: " + "<span class='color-palegreen'>315</span>",  function() { 
			  		setTimeout(function(){
						intro.nextStep();
						}, 1000); 
					});
				});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					$('#restartBtn').click(function() {
						location.reload();
					});
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