<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Memory Allocation</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/custom-styles.css" />

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
.creamPreTab4, pre {
	-moz-tab-size: 2;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	font-family: monospace;
}

.padding00 {
	padding: 0px;
}

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	height: 450px;
}

.memory-box {
	border: 1px solid gray;
	height: 200px;
}

.output-console-body {
	font-size: 11px;
	/* height: 75px; */
	padding: 5px 20px;
	white-space: normal;
}

.elementBorder {
	border: 1px solid gray;
}

.marginTop {
	margin-top: 22%;
	padding : 10px;
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 10000000;
	position: relative;
	background-color: #fffae6;
}

</style>
<script type="text/javascript">
var introjs;
var typingInterval = 10;

$(document).ready(function() {
		introJsFunction();
		var typingContent = 'Here we learn how the memory will allocated in this demo.';
		typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
			$('.introjs-nextbutton').show();
		});
	})


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
			position : "right"
		},{
			element : "#headerFile",
			intro : "",
			position : "right"
		},{
			element : "#classDecl",
			intro : "",
			position : "right"
		},{
			element : "#privateVariable",
			intro : "",
			position : "right"
		},{
			element : "#putData",
			intro : "",
			position : "right"
		},{
			element : "#getData",
			intro : "",
			position : "right"
		},{
			element : "#mainMthd",
			intro : "",
			position : "right"
		},{
			element : "#objDec",
			intro : "",
			position : "right"//
		},{
			element : "#objMemory",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},{
			element : "#putIn1",
			intro : "",
			position : "right"
		},{
			element : "#fullStack",
			intro : "",
			position : "bottom",
			animateStep: "putData1",
			tooltipClass: "hide"
		},{
			element : "#s1",
			intro : "",
			position : "right"
		},{
			element : "#putIn2",
			intro : "",
			position : "right"
		},{
			element : "#s2",
			intro : "",
			position : "right"
		},{
			element : "#getIn1",
			intro : "",
			position : "right"
		},{
			element : "#memoGetData",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},{
			element : "#outputBox",
			intro : "",
			position : "right",
			tooltipClass : "hide",
			animateStep : "getData1"
		},{
			element : "#getIn2",
			intro : "",
			position : "right",
			animateStep : "getIn2"
		},{
			element : "#outputBox",//restartBtn
			intro : "",
			position : "right",
			tooltipClass : "hide",
			animateStep : "getData2"
		},{
			element : "#restartBtn",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		switch (elementId) {
		case "preCode":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'Let us learn <span class="ct-code-b-yellow">Pointers with Two Dimensional Array</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "headerFile":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The preprocessor command <span class="ct-code-b-yellow">#include</span> is used to link header files to our program.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "classDecl":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here we have declared a class with name <span class='ct-code-b-yellow'>Item</span>"
									+" is an organization of <span class='ct-code-b-yellow'>data</span> and "
									+"<span class='ct-code-b-yellow'>functions</span> which operate on them.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "privateVariable":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "These are the variables declared inside the class and outside the methods,"
									+" since it doesn't have any access specifiers like <span class='ct-code-b-yellow'>public</span>,"
									+" <span class='ct-code-b-yellow'>protected</span>. so, by default it takes <span class='ct-code-b-yellow'>private</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "putData":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "This <span class='ct-code-b-yellow'>putData()</span> is used to intitialze "
									+"the values to a declared <span class='ct-code-b-yellow'>private</span> variables.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			})
			break;
			
		case "getData":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The <span class="ct-code-b-yellow">getData()</span> is used to get the initilaized values of variables and print.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "mainMthd":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The program execution starts from the <span class="ct-code-b-yellow">main()</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "objDec":
			$(".border1px").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'Here for the class <span class="ct-code-b-yellow">Item</span> objects are '
									+'declared <span class="ct-code-b-yellow">s1</span> and <span class="ct-code-b-yellow">s2</span>,'
									+' the <span class="ct-code-b-yellow">memory</span> space for objects are allocated.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "objMemory":
			$(".introjs-helperLayer").one("transitionend", function() {
				//var typingContent = '';
				$("#objMemory").removeClass("opacity00");
				//typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//$('.introjs-nextbutton').show();
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				//});
			});
			break;	
		
		case "putIn1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "calling the <span class='ct-code-b-yellow'>putData()</span> with values as a parameter";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#putData").addClass("zIndex");
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "fullStack":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "fullStack";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					if (animateStep == "putData1") {
						$("#memoPutData").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
							//$('.introjs-nextbutton').show();
						}, 800)
					}
				});
			});
			break;
		
		case "s1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "we are calling the putData() by s1 and passing the values as parameter.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//if (animateStep == "s1Obj") {
						//$("#memoPutData").removeClass("opacity00");
						$(".itemNoS1, .priceNoS1").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					//}
				});
			});
			break;
			
		case "putIn2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "we are calling the putData() by s2 and passing the values as parameter.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$("#putData").removeClass("zIndex");//memoPutData
						$("#memoPutData").addClass("zIndex");
						$('.introjs-nextbutton').show();
				})
			});
			break;
			
		case "s2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "The passed parameter values are stored in a memory.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//$("#memoPutData").removeClass("zIndex");
					$(".itemNoS2, .priceNoS2").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				})
			});
			break;
			
		case "getIn1":
		case "getIn2":
			$("#memoPutData").removeClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent;
				if (animateStep == "getIn2") {
					$("#memoGetData").addClass("zIndex");
					typingContent = "This getData() is used to print the values which we passed in putData() of s2 object.";
				} else {
					//$("#memoGetData").removeClass("zIndex");
					typingContent = "This getData() is used to print the values which we passed in putData() of s1 object.";
				}
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					setTimeout(function() {
						$("#getData").addClass("zIndex");
						$('.introjs-nextbutton').show();
					}, 600);
				})
			});
			break;
		
		case "memoGetData":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#memoGetData").removeClass("opacity00");
				setTimeout(function() {
					introjs.nextStep();
				}, 1500);
			})
			break;
			
		case "outputBox":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#memoGetData, #outputBox").removeClass("opacity00");
				if (animateStep == "getData1") {
					$("#getData").removeClass("zIndex");
					$("#s1OutPut").removeClass("opacity00");
				} else {
					$("#memoGetData").removeClass("zIndex");
					$("#getData").addClass("zIndex");
					$("#s2OutPut").removeClass("opacity00");
				}
				setTimeout(function() {
					$("#getData").removeClass("zIndex");
					introjs.nextStep();
				}, 1500);
			})
			break;
			
		case "restartBtn":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("visibility-hidden");
				$("#restartBtn").click(function() {
					location.reload();
				})
			})
			break;
			
			
		}});
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
</script>
</head>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Memory Allocation</span>
	</h3>
	<div class="col-xs-12">
<pre class="col-xs-4">
<span id="headerFile"><span>#include&lt;iostream&gt;</span>
<span>using namespace std;</span></span>

<div id="classDecl"><span>class Item </span>{

         <span id="privateVariable"><span>int itemno;</span>
         <span>float price;</span></span>
         
         <span id="putData"><span>public: void putData(int i, float j)</span>
         <span>{</span>
          <span>itemno = i;</span>
          <span>price = j;</span>
         <span>}</span></span>
         
         <span id="getData"><span>public: void getData(void)</span>
         <span>{</span>
          <span>cout << "Items : " << itemno;</span>
          <span>cout << "\n" << "Price" << price << "\n"; </span>
         <span>}</span></span>
<span>};</span></div>

<div id="mainMthd"><span>int main() </span>{
        <span id="objDec">Item s1, s2;</span>
        <span id="putIn1">s1.putData(1001, 17.2);</span>
        <span id="putIn2">s2.putData(1002, 18.5);</span>
        <span id="getIn1">s1.getData();</span>
        <span id="getIn2">s2.getData();</span>
<span>}</span></div>         
</pre>
		<div class="col-xs-7 border1px opacity00">
			<div class="col-xs-12" id="fullStack" style="margin-top: 5px;">
				<div class="col-xs-6">
					<div class="col-xs-12 opacity00" id="objMemory">
						<div class="col-xs-6" id="s1">
							<div class="text-center"><b>s1</b>(Object)</div>
							<div class="memory-box">
								<div class="col-xs-12">
									<div  class="col-xs-offset-1 col-xs-11 elementBorder text-center itemNoS1 marginTop opacity00"><span>1001</span></div>
									<div class="col-xs-offset-1 col-xs-11 itemNoS1 opacity00">itemno</div>
									<div class="col-xs-offset-1 col-xs-11 elementBorder text-center priceNoS1 marginTop opacity00"><span>17.2</span></div>
									<div class="col-xs-offset-1 col-xs-11 priceNoS1 opacity00">price</div>
								</div>
							</div>
							<div class="text-center opacity00"><b>s1</b>(Object)</div>
						</div>
						<div class="col-xs-6"  id="s2">
							<div class="text-center"><b>s2</b>(Object)</div>
							<div class="memory-box">
								<div class="col-xs-12">
									<div class="col-xs-offset-1 col-xs-11 elementBorder text-center itemNoS2 marginTop opacity00"><span>1002</span></div>
									<div class="col-xs-offset-1 col-xs-11 itemNoS2 opacity00">itemno</div>
									<div class="col-xs-offset-1 col-xs-11 elementBorder text-center priceNoS2 marginTop opacity00"><span>18.5</span></div>
									<div class="col-xs-offset-1 col-xs-11 priceNoS2 opacity00">price</div>
								</div>
							</div>
							<div class="text-center opacity00"><b>s2</b>(Object)</div>
						</div>
					</div>	
				</div>
				<div class="col-xs-6">
					<div class="col-xs-12" id="metdMemory">
						<div class="col-xs-6 opacity00" id="memoPutData">
							<div class="text-center"><b>putData()</b></div>
							<div class="memory-box">
								<div class="text-center" style="margin-top:70px">
									<b>
										<div>itemno = i;</div>
										<div>price = j;</div>
									</b>
								</div>	
							</div>
							<div class="text-center opacity00"><b>putData()</b></div>
						</div>
						<div class="col-xs-6 opacity00" id="memoGetData">
							<div  class="text-center"><b>getData()</b></div>
							<div class="memory-box">
								<div class="text-center" style="margin-top:70px">
									<div>cout << itemno;</div>
									<div>cout << price ;</div>
								</div>
							</div>
							<div  class="text-center opacity00"><b>getData()</b></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-offset-3 col-xs-7">
					<div id="outputBox" class="output-console center opacity00">
						<div class="output-console-title-bar"><span>Output</span></div>
						<div class="output-console-body">
							<div id="s1OutPut" class="opacity00">
								<div><span>Items : </span><span>1001</span></div>
								<div><span>Price : </span><span>17.2</span></div>
							</div>
							<div id="s2OutPut" class="opacity00">
								<div><span>Items : </span><span>1002</span></div>
								<div><span>Price : </span><span>18.2</span></div>
							</div>
						</div>
					</div>
				</div>		
				</div>	
			</div>
		</div>
		<div class="col-xs-12 text-center">
			<div><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
		</div>
</body>
</html>