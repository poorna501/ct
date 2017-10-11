<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/animate.css"/>

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>

<!-- <script type="text/javascript" src="js/servlet-api.js"></script> -->

<title>Servlet-Api</title>

<style>
.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

.border {
	border: 1px solid grey;
}

.margin-top30 {
	margin-top: 30px;
}

.padding0 {
	padding: 0;
}

.border-radius {
	border-radius: 5px;
}

.bg-color-totaldiv {
	background-color: #fff6ea;
}

.min-height-totaldiv {
	min-height: 357px;
}

.servlet-built-in-class {
	background-color: #3b8fbf;
	color: white;
	font-size: 12px;
	font-weight: bold;
	padding: 7px;
	display: inline-block;
	text-align: center;
	border-radius: 5px;
	text-shadow: 0 2px 5px #000000;
	box-shadow: 0 0 2px;
	font-family: Effra;
}

.margin-top60 {
	margin-top: 100px;
}

.servlet-interface {
	border-radius: 60%;
	display: inline-block;
	text-align: center;
	font-size: 12px;
	font-weight: bold;
	padding: 7px;
	background-color: #3b8fbf;
	color: white;
	text-shadow: 0 2px 5px #000000;
	/* transform: rotateY(25deg); */
	box-shadow: 0 0 2px;
	font-family: Effra;
}

.popover {
	width: 180px !important;
}

.user-btn {
	background-color: green;
}

.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
}

.svg-line	{
	position: relative;
	stroke:	#556B2F;
	stroke-width: 2;	
}

.z-index {
	position: relative;
	z-index: 9999999;
}
</style>

</head>
<body>

<script type="text/javascript">
var count = 0;
$(document).ready(function() {
	$("line").hide();
	$("text").hide();
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
			element :'#totalApi',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden'
		},{
			element :'#restartBtn',
			intro :'',
			position:"right" 
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalApi" :
			$('.introjs-nextbutton').hide();
			$('#totalApi').removeClass('opacity00');
			popover('#totalApi', 'bottom');
			typing('#popover' + count, "1", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
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
});
function firstStep() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#javaXServlet").fadeTo(1000, 1, function() {
		popover('#javaXServlet', 'right');
		typing('#popover' + count, "javaXServlet ", function() { 
			$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep1()">Next →</a>');
		});
	});
}
function firstStep1() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#genericServlet").fadeTo(1000, 1, function() {
		arrowRevealVertical("#arrow1", function() {
			popover('#genericServlet', 'left');
			typing('#popover' + count, "genericServlet", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			});
		});
	});
}
function firstStep2() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#httpServlet").fadeTo(1000, 1, function() {
		arrowRevealVertical("#arrow2", function() {
			popover('#httpServlet', 'left');
			typing('#popover' + count, "httpServlet", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			});
		});
	});
}
function firstStep3() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#javaXServletConfig").fadeTo(1000, 1, function() {
		//arrowRevealVertical("#arrow2", function() {
			popover('#javaXServletConfig', 'right');
			typing('#popover' + count, "javaXServletConfig", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			//});
		});
	});
}
function firstStep4() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#servletReq").fadeTo(1000, 1, function() {
		//arrowRevealVertical("#arrow2", function() {
			popover('#servletReq', 'left');
			typing('#popover' + count, "servletReq", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep5()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			//});
		});
	});
}
function firstStep5() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#httpServletReq").fadeTo(1000, 1, function() {
		arrowRevealVertical("#arrow3", function() {
			popover('#httpServletReq', 'left');
			typing('#popover' + count, "httpServletReq", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep6()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			});
		});
	});
}
function firstStep6() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#servletRes").fadeTo(1000, 1, function() {
		//arrowRevealVertical("#arrow3", function() {
			popover('#servletRes', 'right');
			typing('#popover' + count, "servletRes", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep8()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			//});
		});
	});
}
function firstStep8() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	$("#httpServletRes").fadeTo(1000, 1, function() {
		arrowRevealVertical("#arrow4", function() {
			popover('#httpServletRes', 'right');
			typing('#popover' + count, "httpServletRes", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep9()">Next →</a>');
				$(".popover-content").removeAttr("background-color", "grey");
			});
		});
	});
}
function firstStep9() {
	$(".popover-content").css("background-color", "grey");
	$(".user-btn").remove();
	//$(".popover").hide();
	intro.nextStep();
	$(".popover-content").removeAttr("background-color", "grey");
}
function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr("x2");
	var y2 = $(lineId).attr("y2");
	$(lineId).attr("x2", $(lineId).attr("x1"));
	$(lineId).attr("y2", $(lineId).attr("y1"));
	$(lineId).show();
	TweenMax.to(lineId, 1, {attr:{x2 : x2, y1 : y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
function arrowRevealVertical(lineId, callBackFunction) {
	 var x2 = $(lineId).attr('x2');
	 var y2 = $(lineId).attr('y2');
	 $(lineId).attr('x2', $(lineId).attr('x1'));
	 $(lineId).attr('y2', $(lineId).attr('y1'));
	 $(lineId).show();
	 TweenMax.to(lineId, 1, {
	   attr: {
	     x2: x2,
	     y2: y2
	   },
	   onComplete: function () {
	     if (typeof callBackFunction === 'function') {
	       callBackFunction();
	     }
	   }
	});
}

function popover(selector, position) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'"></div>',
		container: '#totalApi'
	});
	$(selector).popover('show');
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
</script>

<div id ='totaldiv' class='totaldivclass col-xs-12 text-center margin-top30'>
	<span id='title' class='label ct-demo-heading'>ServletApi</span>
</div>

<div class='col-xs-12'>
<div class='col-xs-offset-2 col-xs-8 border border-radius margin-top30 padding0 bg-color-totaldiv z-index' id='totalApi'>
<div class='col-xs-12 padding0 min-height-totaldiv'>

	<div class='col-xs-3'>
		<div class='col-xs-12 padding0  margin-top30 servlet-interface opacity00' id='javaXServlet'>
			<div>javax.servlet.servlet</div>
		</div>
		
		<div class='col-xs-12 padding0  margin-top60  servlet-built-in-class opacity00' id='genericServlet'>
			<div>GenericServlet</div>
		</div>
		
		<div class='col-xs-12 padding0 margin-top60  servlet-built-in-class opacity00' id='httpServlet'>
			<div>HTTPServlet</div>
		</div>
	</div>
	
	<div class='col-xs-offset-2 col-xs-7'>
		<div class='col-xs-12 padding0'>
			<div class='col-xs-offset-3  col-xs-6 margin-top30 servlet-interface opacity00' id='javaXServletConfig'>
				<div>javax.servlet.servletConfig</div>
			</div>
		</div>
		<div class='col-xs-12 padding0 margin-top60'>
			<div class='col-xs-6'>
				<div class='col-xs-12 servlet-interface opacity00' id='servletReq'>ServletRequest</div>
			</div>
			<div class='col-xs-6'>
				<div class='col-xs-12 servlet-interface opacity00' id='servletRes'>ServletResponse</div>
			</div>
		</div>
		<div class='col-xs-12 padding0 margin-top60'>
			<div class='col-xs-6'>
				<div class='col-xs-12 servlet-built-in-class opacity00' id='httpServletReq'>HttpServletRequest</div>
			</div>
			<div class='col-xs-6'>
				<div class='col-xs-12 servlet-built-in-class opacity00' id='httpServletRes'>HttpServletResponse</div>
			</div>
		</div>
	</div>
	
	<svg class="svg-css">
	
	<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;"> 
		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
		
	<line x1="12%" y1="45%" x2="12%" y2="18%" style="marker-end: url(&quot;#myMarker&quot;);" class="svg-line" id="arrow1" stroke-dasharray="9, 5"/>
	<line x1="12%" y1="82%" x2="12%" y2="54%" style="marker-end: url(&quot;#myMarker&quot;);" class="svg-line" id="arrow2"/>
	
	<line x1="57%" y1="82%" x2="57%" y2="54%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow3"/>
	<line x1="85%" y1="82%" x2="85%" y2="54%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow4"/>
	
	</svg>
</div>
</div>
</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>
</html>