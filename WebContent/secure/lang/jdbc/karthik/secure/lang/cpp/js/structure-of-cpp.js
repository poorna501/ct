var introjs;
var typingSpeed = 5;

var structureOfCReady = function() {
	introGuide();
	$('.introjs-nextbutton').keydown(function(e) {
		
		if (e.which == 13) {
			e.preventDefault();
		}
		
	});

	$("#restart").click(function() {
		location.reload();
	});
}

function introGuide() {
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
				position : "right"
			},{
			 	element : "#leftDiv",
				intro : "",
				tooltipClass : "hide"
			},{
			 	element : "#dcmntSection",
				intro : "",
				position : "bottom"
			},{
			 	element : "#comment",
				intro : "",
				position : "right"
			},{
			 	element : "#linkSection",
				intro : "",
				position : "right"
		},{
			 	element : "#links",
				intro : "",
				position : "right"
			},{
			 	element : "#defSection",
				intro : "",
				position : "right"
			},{
			 	element : "#define",
				intro : "",
				position : "right"
			},{
			 	element : "#globalDef",
				intro : "",
				position : "right"
			},{
			 	element : "#globalVariable",
				intro : "",
				position : "right"
			},/*{
			 	element : "#usrDefFun",
				intro : "",
				position : "right"
			},{
			 	element : "#userDefineFun",
				intro : "",
				position : "right"
			},*/{
			 	element : "#totalMainFun",
				intro : "",
				position : "right"
			},{
			 	element : "#totalMain",
				intro : "",
				position : "right"
			},{
			 	element : "#subPro",
				intro : "",
				position : "right"
			},{
			 	element : "#sumFun",
				intro : "",
				position : "right"
			},{
			 	element : "#restart",//sumFun
				intro : "",
				position : "right"
			}
		]});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":	
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var text = "Let us learn the basic structure of a <b class ='ct-code-b-yellow'>C++</b> program.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		break;
		
		case "leftDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#leftDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});	
		break;
		
		case "dcmntSection" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#dcmntSection").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {	
				$("#dcmntSection").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "<b class ='ct-code-b-yellow'>Documentation section:</b><br> This section consists of documentation comments"
							+ " where the developer gives details of the current program and also its author, date of creation etc.."
							+ " We will learn more about comments later.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#dcmntSection").css({"background-color": "white"}).addClass("zIndex");
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		case "comment":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#comment").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#rightCode").removeClass("opacity00");
				$("#comment").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "In the <b class ='ct-code-b-yellow'>Documentation section</b> comment lines can be"
						+ " present at any line in <b class ='ct-code-b-yellow'>C++</b> program.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		case "linkSection":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".color-black").removeClass("color-black");
			$("#dcmntSection").css({"background-color": "black"}).removeClass("zIndex");
			$("#linkSection").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#linkSection").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "<b class ='ct-code-b-yellow'>Link section:</b> This section provides instructions to the compiler, to link pre-defined functions"
							+ " which are available in the header files from the system library to the program.<br>"
							+ " <b class ='color-red'>Example:</b> <br><b class ='ct-code-b-yellow'>#include &lt;iostream&gt;</b><br>"
							+ " <b class ='ct-code-b-yellow'>using namespace std;</b><ul><li>Which grants access to the <y>std</y> "
							+"namespace that includes <y>C++ I/O</y> objects <y>cout</y> and <y>cin</y>.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#linkSection").css({"background-color": "white"}).addClass("zIndex");
						$(".introjs-nextbutton").show();
					});
				});
			});
		break;
		case "links":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#links").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#links").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "#include link the header file<br> <b class ='ct-code-b-yellow'>iostream</b><br>"
						+ "<b class ='ct-code-b-yellow'>using namespace std;</b><br> to the program.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		case "defSection":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".color-black").removeClass("color-black");
			$("#linkSection").css({"background-color": "black"}).removeClass("zIndex");
			$("#defSection").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#defSection").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "<b class ='ct-code-b-yellow'>Definition section:</b> Defines all the symbolic constants. <br><b class ='color-red'>Example:</b><br>"
						+ " <b class ='ct-code-b-yellow'>#define PI 3.14</b><br>"
						+ " <b class ='ct-code-b-yellow'>#define NAME \"Dennis\"</b>"; 
					typing($(".introjs-tooltiptext"), text, function() {
						$("#defSection").css({"background-color": "white"}).addClass("zIndex");
						$(".introjs-nextbutton").show();
					});
				});
			});
		break;
		case "define":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#define").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#define").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "<b class ='ct-code-b-yellow'>#define VALUE 10;</b><br>"
						+ " The symbolic constant <y>VALUE</y> is defined with constatnt value <y>10</y>."
						+ " So <b class ='ct-code-b-yellow'>VALUE</b> is replaced with <b class ='ct-code-b-yellow'>10</b> before compilation process.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		case "globalDef":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".color-black").removeClass("color-black");
			$("#defSection").css({"background-color": "black"}).removeClass("zIndex");
			$("#globalDef").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#globalDef").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "Some variables are used in more than one function, such variables are declared outside of all the functions,  which is called"
						 + " <b class ='ct-code-b-yellow'>global variable declaration</b>. And this takes place in the declaration section.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#globalDef").css({"background-color": "white"}).addClass("zIndex");
						$(".introjs-nextbutton").show();
					});
				});
			});
		break;
		case "globalVariable":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#globalVariable").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#globalVariable").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "The variable <b class ='ct-code-b-yellow'>total</b> is declared outside of the <y>main()</y> function so it is treated as"
						+ "  <b class ='ct-code-b-yellow'>global variable</b> and this variable can be accessed from any part of the program.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		case "usrDefFun":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".color-black").removeClass("color-black");
			$("#globalDef").css({"background-color": "black"}).removeClass("zIndex");
			$("#usrDefFun").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#usrDefFun").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "Whenever user wants to use a user-defined function, that must be declared before main().";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#usrDefFun").css({"background-color": "white"}).addClass("zIndex");
						$(".introjs-nextbutton").show();
					});
				});
			});
		break;
		case "userDefineFun":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#userDefineFun").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#userDefineFun").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = " <b class ='ct-code-b-yellow'>sum(int, int)</b> is a user-defined function, so that functon must be declared before main().";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		case "totalMainFun":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			//$(".color-black").removeClass("color-black");
			$(".color-black").removeClass("color-black");
			$("#globalDef").css({"background-color": "black"}).removeClass("zIndex");
			/*$("#usrDefFun").css({"background-color": "black"}).removeClass("zIndex");*/
			$("#totalMainFun").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#totalMainFun").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					/*var text = "<ul><li>Every <b class ='ct-code-b-yellow'>C</b> program must have one <b class ='ct-code-b-yellow'>main()</b>.</li>"
							+ "<li>Operating System calls the main() And the main() execution starting point.</li>"
							+ "<li>main() function contains <b class ='ct-code-b-yellow'>Declaration part</b> and <b class ='ct-code-b-yellow'>Execution part</b>."
							+ "  These two parts must appear in between the opening and closing braces of main().</li></ul>";*/
					var text = "<ul><li>A class is a combination of <span class ='ct-code-b-yellow'>data</span> and "
								+"<span class ='ct-code-b-yellow'>functions</span>.</li>"
								+" <li>Different variables with data types are called <span class ='ct-code-b-yellow'>data members</span> and the "
								+"functions are called <span class ='ct-code-b-yellow'>member functions</span>.</li><li> The combination of "
								+"<span class ='ct-code-b-yellow'>data members</span> and <span class ='ct-code-b-yellow'>"
								+"member functions</span> constitute a data object or simply an object.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#totalMainFun").css({"background-color": "white"}).addClass("zIndex");
						$(".introjs-nextbutton").show();
					});
				});
			});
		break;
		case "totalMain":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#totalMain").addClass("color-black");
			$("#declPart").addClass("background-color-green");
			$("#exePart1").addClass("background-color-blue");
			$("#exePart2").addClass("background-color-blue");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#totalMain").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					var text = "<ul><li><b class ='ct-code-b-yellow'>int a, b</b> are declared in <b class ='ct-code-b-yellow'>data members part</b>.</li>"
					+ "<li><b class ='ct-code-b-yellow'>void read()</b>; and<br> <b class ='ct-code-b-yellow'>void display()</b>; are in" 
					+ " <b class ='ct-code-b-yellow'>member functions part</b>.</li>"
					+ " </ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});	
			});
		break;
		
		case "subPro" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".background-color-green").removeClass("background-color-green");
			$(".background-color-blue").removeClass("background-color-blue");
			$(".color-black").removeClass("color-black");
			$("#totalMainFun").css({"background-color": "black"}).removeClass("zIndex");
			$("#subPro").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#subPro").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				/*var text = "<b class ='ct-code-b-yellow'>Sub-program section:</b><br>Contains all the user-defined functions that are called in the"
						+ " main(). User-defined functions are generally placed immediately after the main() function.";*/
				var text = "<ul><li>Every <span class ='ct-code-b-yellow'>C++</span> program must have one "
							+"<span class ='ct-code-b-yellow'>main()</span> function section, because it is the starting point of execution.</li>"
							+"<li><span class ='ct-code-b-yellow'>main()</span> section contains two parts, <span class ='ct-code-b-yellow'>"
							+"declaration part</span> and <span class ='ct-code-b-yellow'>executable part</span>.</li> "
							+"<li>The declaration part contains the declaration of <span class ='ct-code-b-yellow'>objects</span>, "
							+"which are used in the executable part.</li></ul>";	
				typing($(".introjs-tooltiptext"), text, function() {
					$("#subPro").css({"background-color": "white"}).addClass("zIndex");
					$(".introjs-nextbutton").show();
				});
				});
			});
		break;
		
		case "sumFun":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#sumFun").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				/*var text = "<b class ='ct-code-b-yellow'>sum(int a, int b)</b> is a user define function. So it placed in the <b class ='ct-code-b-yellow'>Sub-program section</b>.";*/
				var text = "<ul><li>There is at least one statement in the <span class ='ct-code-b-yellow'>executable part</span>.</li> "
							+"<li>These two parts must appear between the opening and closing "
							+"braces of <span class ='ct-code-b-yellow'>main()</span> function.</li><li>All the statements in the declaration "
							+"and executable parts end with a <span class ='ct-code-b-yellow'>semicolon(;)</span>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#sumFun").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(".introjs-nextbutton").show();
				});
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$("#subPro").css({"background-color": "black"}).removeClass("zIndex");
			$(".color-black").removeClass("color-black");
			$(".user-btn").remove();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text)
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
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