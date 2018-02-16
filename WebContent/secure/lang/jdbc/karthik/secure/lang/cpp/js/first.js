

var constructorDestructorVirtual = function() {
	introJsFunction();
	$(".introjs-prevbutton").hide();
	var text = "Here we learn how the virtual key works.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-nextbutton").show();
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
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"//baseClass
		},{
			element : "#pre",
			intro : "",
			position : "right"
		},{
			element : "#baseClass",
			intro : "",
			position : "top"
		},{
			element : "#deriveClass",
			intro : "",
			position : "top"
		},{
			element : "#main",
			intro : "",
			position : "top"
		},{
			element : "#objCreation",
			intro : "",
			position : "top"
		},{
			element : "#animate",
			intro : "",
			position : "top"
		},{
			element : "#invokeFirst",
			intro : "",
			position : "top"
		},{
			element : "#invokeSecond",
			intro : "",
			position : "top"
		},{
			element : "#kVal",
			intro : "",
			position : "top"
		},{
			element : "#animate",
			intro : "",
			position : "top",
			tooltipClass: "hide",
			action : "k"	
		},{
			element : "#hVal",
			intro : "",
			position : "top"
		},{
			element : "#animate",
			intro : "",
			position : "top",
			action : "h"	
		},{
			element : "#baseP",
			intro : "",
			position : "top"
		}]
	})
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		/*var visit = introjs._introItems[introjs._currentStep]["visits"];*/
/*		introjs.refresh();
*/		switch (elementId) {
			case "pre":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the sample program of constructor invoking virutal function.";
					typing($(".introjs-tooltiptext"), text, function() {
						
						$(".introjs-nextbutton").show();
					});
				})
			break;
				
			case "baseClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The base class contains the member <y>constructor</y> and member function"
								+" <y>show()</y> with data member <y>k</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("deriveClass", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("main", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("objCreation", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("animate", "", "top", "", "obj"));hide
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("invokeFirst", "", "top","",""));
						introjs.insertOption(introjs._currentStep + 6, insertionIntro("invokeSecond", "", "top"));hide
						introjs.insertOption(introjs._currentStep + 7, insertionIntro("kVal", "", "top"));hide*/
						$(".introjs-nextbutton").show();
					});
				})
			break;
				
			case "deriveClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The derive class contains the member <y>constructor</y> and member function"
								+" <y>show()</y> with data member <y>h</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
					//	introjs.insertOption(introjs._currentStep + 1, insertionIntro("main", "", "top"));
						$(".introjs-nextbutton").show();
					});
				})
			break;	
				
			case "main":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The program execution starts from <y>main()</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						//introjs.insertOption(introjs._currentStep + 1, insertionIntro("objCreation", "", "top"));
						$(".introjs-nextbutton").show();
					});
				})
			break;
			
			case "objCreation":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here creating the <y>derived</y> class <y>obj</y> and passing values as parameter.";
					typing($(".introjs-tooltiptext"), text, function() {
						//introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "obj"));/*hide*/
						$(".introjs-nextbutton").show();
					});
				})
			break;
				
			case "invokeFirst":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>constructor</y> is called at the time of <y>derived</y> class <y>object</y> is creating."
								+"<ul><li>The <y>derived</y> class constructor inherits the <y>base</y> class constuctor with one parameter.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#superConst").addClass("blinking-orange");
						/*var text = "The <y>derived</y> class constructor inherits the <y>base</y> class constuctor with one parameter.";
						typing($("li"), text, function() {
							//introjs.insertOption(introjs._currentStep + 1, insertionIntro("invokeSecond", "", "top","hide"));
							$(".introjs-nextbutton").show();
						});*/
						$(".introjs-nextbutton").show();
					});
				})
			break;	
				
			case "invokeSecond":
				$(".introjs-helperLayer").one("transitionend", function() {
					//introjs.insertOption(introjs._currentStep + 1, insertionIntro("kVal", "", "top", ""));/*hide*/
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				})
			break;
			
			case "kVal":
			/*case "hVal":*/
				$(".introjs-helperLayer").one("transitionend", function() {
					/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "k"));hide*/
					/*if (elementId === "kVal") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "k"));hide
					} else if (elementId === "hVal") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "h"));hide
					}*/
					
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				})
			break;	
			
			case "hVal":
				$(".introjs-helperLayer").one("transitionend", function() {
					/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "h"));hide*/
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				})
			break;	
			
			case "baseP":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Every time the pointer must be created only to <y>base</y> class.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "p"));/*hide*/
						$(".introjs-nextbutton").show();
					})
				})
			break;	
			
			case "pCurrent":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The pointer p holds the current object <y>obj</y>";
					typing(".introjs-tooltiptext", text, function() {
						//$("#val3").removeClass("opacity00");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "top", "", "pVal"));/*hide*/
						$(".introjs-nextbutton").show();
					})
				});
			break;
			
			case "animate":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (animateStep === "obj") {
						$("#obj , #addr").removeClass("opacity00");
						//introjs.insertOption(introjs._currentStep + 1, insertionIntro("invokeFirst", "", "top"));
					} else if (animateStep === "k") {
						console.log("In the animate k...");
						$("#val1, #k").removeClass("opacity00");
						/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("hVal", "", "top", ""));hide*/
					} else if (animateStep === "h") {
						console.log("In the animate h...");
						$("#val2, #h").removeClass("opacity00");
						/*introjs.insertOption(introjs._currentStep + 1, insertionIntro("baseP", "", "top", "", ""));*/
						
					} else if (animateStep === "p") {
						$("#p").removeClass("opacity00");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("pCurrent", "", "top"));
					} else if (animateStep == "pVal") {
						$("#val3").removeClass("opacity00");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("pShowMthd", "", "top"));
					}
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				})
			break;	
		}
	})
	introjs.start();
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


var typingSpeed = 10;
function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

/*function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}*/