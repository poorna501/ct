var flowchartSymbolsReady = function() {
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
					{
						element : "#mainTitle",
						intro : 'In the mainTitle..',
						position : 'right',
						tooltipClass: 'hide'
					} ,
					{
						element : "#flowChart",
						intro : 'In the flowChart.. ',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#terminal",
						intro : 'In the terminal..',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#process",
						intro : 'In the process..',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#ioLine",
						intro : 'In the ioLIne..',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#decision",
						intro : 'In the decision..',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#flowLines",
						intro : 'In the flowLines..',
						position : 'right',
						tooltipClass: 'hide'
					},
					{
						element : "#restart",
						intro : 'restart the demo',
						position : 'right',
						tooltipClass: 'hide'
					} 
				]
	})
	
	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		var text = intro._introItems[intro._currentStep].intro;
		console.log(ElementId);
		$('.introjs-nextbutton').hide();
		switch (ElementId) {

			case 'mainTitle' :
				$('.introjs-nextbutton').hide();
					$(".introjs-tooltip").removeClass("hide");
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
			break;
				
			case 'flowChart' :
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					 typing(".introjs-tooltiptext", text, function() {
						 $("#flowChart").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							 $("#flowChart").removeClass("animated zoomIn");	
							 $('.introjs-nextbutton').show();
						 });
					}); 
				});	 
			break;
			
			case 'restart':
				$("#restart").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", text, function() {
					})
				});
			break;
			 case ElementId:
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					 typing(".introjs-tooltiptext", text, function() {
						 animateTR(0);
					 });
					
				});
				break; 
			
		/* 	case 'flowChart' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "this is table..";
					 typing(".introjs-tooltiptext", text, function() {
						 $("#flowChart").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$('.introjs-nextbutton').show();
						 });
					}); 
				});	 
			break;*/
			
			/* case 'terminal' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the termianl line..";
					 typing(".introjs-tooltiptext", text, function() {
						 $("#terminal td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							 $("#terminal td:eq(1)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								 $("#terminal td:eq(2)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
										$('.introjs-nextbutton').show();
								 })
							 })
						 });
					}); 
				});
			break;
			
			case 'process' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the process...";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;
			
			case 'ioLine' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the ioLine...";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;
			
			case 'decision' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In the decision..";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;
			
			case 'flowLines' :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "We are initializing array with two elements and converting array to arraylist.";
					 typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			break;  */
			
		}
	})
	
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
	$("#restart").click(function() {
		location.reload(true);
	})
	 /* function animateTR(id) {
		 $("#"+ id + "td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			 $("#"+ id +" td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				 $("#terminal td:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					 
				 })
			 })
		 })
		 
	 } */
}

function animateTR(index) {
	var selector = $('.introjs-showElement.introjs-relativePosition > td > *');
	selector.eq(index).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		selector.eq(index).removeClass("animated zoomIn");
		++index;
		if (index < selector.length) {
			animateTR(index);
		} else {
			$('.introjs-nextbutton').show();
		}
	 });
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(".introjs-nextbutton").addClass("opacity00");
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