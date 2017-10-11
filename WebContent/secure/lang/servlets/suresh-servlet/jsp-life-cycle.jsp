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

<title>JavaServerpage</title>
</head>
<style>
.margin-top30 {
	margin-top: 30px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
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
	stroke:	#25b6f9;
	stroke-width: 2;	
}

.z-index {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.user-btn {
	background-color: green;
}

.padding0 {
	padding: 0px;
}

.color {
	color: seagreen;
}

.border-radius5 {
	border-radius: 5px;
}


.font-size {
	font-size: 11px;
}

.progress {
	height: 12px;
}

.margin-top25 {
	margin-top: 22px;
}

.background-color-palegreen {
	background-color: #8a0651;
	border-radius: 12px;
    box-shadow: 0 0 2px;
 	padding: 10px;
 	display: inline-block;
}

.browser-client {
	font-weight: bold; 
	color: #008080; 
	font-size: 11px;"
}

.color-aquamarine {
	color: #008080; 
}

.transform {
	transform: rotate(90deg); 
	width: 60px;
}

.width {
	width: 100%;
}

.thread-pool-box {
	border: 1px solid grey; 
	background-color: #dfe2db; 
	border-top: none; 
	padding: 3px; 
	min-height: 66px; 
	display: flex; 
	justify-content: center; 
	align-items: baseline;
}

.eclipse-shape {
	border-radius: 60%;
    box-shadow: 0 0 5px;
    display: inline-block;
    padding: 5px;
    background-color: #d7679e;
}

.bg-color-top-1 {
	background-color: #E9E581;
}

.box-text {
	justify-content: center;
	display: flex; 
	margin-top: 5px;"
}

.eclipse-shape-small {
	background-color: #d7679e;
    border-radius: 100px / 45px;
    box-shadow: 0 0 5px;
    display: inline-block;
    padding: 5px;
}

.response-empty {
	box-shadow: 0px 0px 5px;
	width: 12%;
	height: 30px;
	border-radius: 100px / 46px; 
	background-color: white;"
}

.request-top-box {
	box-shadow: 0px 0px 5px; 
	border-radius: 100px / 53px; 
	height: 31px; 
	width: 10%;"
}

.new-servlet-box {
	background-color: #8a0651;
    border-radius: 52%;
    box-shadow: 0 0 2px;
    display: inline-block;
    padding: 10px 30px;
    transform: rotateY(30deg);
}

.bg-color-top-2 {
	background-color: #EEAF40;
}


.bg-color-model-second {
	 background-color: #004687; 
}

.bg-color-model-third {
	background-color: #7f2b82;
}

.margin-left30 {
	margin-left: 30.333%;
}

.border-grey {
	border: 1px solid grey
}

.bg-color-white {
	background-color: white;
}

.color-font-weight {
	color: white;
	font-weight: bold;
}

.color-font-weight-1 {
	font-size: 12px;
	color: black;
}
.margin-top10 {
	margin-top: 19px;
}

.popover {
	width: 180px !important;
}

.margin-top58 {
	margin-top: 162px;
}

.response-color {
	stroke: #3c19ff !important;
}
</style>
<body>

<script type="text/javascript">
var count = 0;
$(document).ready(function() {
	$("line").hide();
	$("text").hide();
	intro = introJs();
	$('#restartBtn').click(function() {
		window.location.search = "?restart = 1";
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
			element :'#architecture',
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
		case "architecture" :
			$('.introjs-nextbutton').hide();
			$('#architecture').removeClass('opacity00');
			$('#singleThreadModelBox').removeClass('opacity00');
			popover('#architecture', 'bottom');
			typing('#popover' + count, "1.<br>"+
						"", function() { 
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
	$("#webServer").fadeTo(1000, 1, function() {
		popover('#threadPool1', 'right');
		typing('#popover' + count, "free pool.", function() { 
			$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep1()">Next →</a>');
		});
	});
}

function firstStep1() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#browser1").fadeTo(1000, 1, function() {
		arrowReveal("#arrow1", function() {
			$("#text1").fadeTo(1000, 1, function() {
				popover('#browser1', 'bottom');
				typing('#popover' + count, "req1.", function() {  
					$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
				});
			});
		});
	});
}

function firstStep2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#usedPool").fadeTo(1000, 1, function() {
		$("#threadPool2").removeClass('opacity00');
		$("#thread5").addClass("opacity00");
		usingPool("#thread5");
		$('#threadModel').removeClass('opacity00');	
		popover('#threadPool2', 'right');
		typing('#popover' + count, "used pool.", function() {  
			$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
		});
	});
}

function firstStep3() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow2");
	$("#reqRespTwo").removeClass("opacity00");
	TweenMax.staggerFrom("#reqRespTwo", 0.8, {opacity:1, x: -300, onComplete:function() {
		$("#reqRespTwo").removeAttr("style").addClass("opacity00");
		$("#arrow2").css("marker-end", "none");
		arrowRevealVertical("#arrow3");
		var l = $("#reqRespTwo").offset();
		$("#reqRespOne").offset({"top": l.top,"left": l.left});
		TweenMax.to("#reqRespOne", 0.8, {Color:"blue", opacity:1, top: 0, left:0, onComplete:function() {
			arrowReveal("#arrow4", function() {
				$("#lifeCycleBox1").fadeTo(1000, 1, function() {
					popover('#lifeCycleBox1', 'bottom');
					typing('#popover' + count, "translation.", function() {  
						$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep40()">Next →</a>');
					});
				});
			});
		}});
	}});
}

function firstStep40() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowRevealVertical("#arrow5", function() {
		$("#lifeCycleBox2").fadeTo(1000, 1, function() {
			popover('#lifeCycleBox2', 'bottom');
			typing('#popover' + count, "compilation.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
			});	
		});
	});
}

function firstStep4() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowRevealVertical("#arrow6", function() {
		$("#lifeCycleBox3").fadeTo(1000, 1, function() {
			$("#lifeCycleBox7").removeClass('opacity00');
			TweenMax.staggerTo("#lifeCycleBox7", 1, {opacity:1, x: -180}, 0.5, function() {
				$("#lifeCycleBox7").removeAttr("style");
				arrowReveal("#arrow9", function() {
					popover('#lifeCycleBox3', 'bottom');
					typing('#popover' + count, "load/initialization.", function() {  
						$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep5()">Next →</a>');
					});
				});
			});
		});
	});
}

function firstStep5() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowRevealVertical("#arrow10", function() {
		$("#lifeCycleBox6").fadeTo(1000, 1, function() {
			$(".reqColor").css("background-color", "snow");
			$(".reqColor").css("color", "#004687;");
			$(".resColor").css("background-color", "snow");
			$(".resColor").css("color", "#004687;");
			popover('#lifeCycleBox6', 'bottom');
			typing('#popover' + count, "service method.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep9()">Next →</a>');
			});
		});
	});
}

function firstStep9() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow15").removeAttr("style");
	$('#arrow15').css("marker-end", "url('#myMarker')");
	arrowReveal("#arrow15", function() {
		$('#arrow15').css("marker-end", "none");
		$('#arrow16').css("marker-end", "url('#myMarker')");
		arrowRevealVertical("#arrow16", function() {
			$("#response1").removeClass('opacity00');
			TweenMax.staggerFrom("#response1", 1, {opacity:1, x: 204}, 0.5);
			$('#arrow16').css("marker-end", "none");
			arrowReveal("#arrow17", function() { 
				arrowReveal("#arrow18", function() {
					$("#text2").fadeTo(1000, 1, function() {
						freePool();
						popover('#response1', 'bottom');
						typing('#popover' + count, "response move1.", function() {  
							$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep10()">Next →</a>');
						});
					});
				});
			});
		});
	});
}

function firstStep10() {
	$(".user-btn").remove();
	$(".popover").hide();
	$('#browser2').removeClass('opacity00');
	arrowReveal("#arrow19", function() {
		$("#text3").fadeTo(1000, 1, function() {
			$("#thread3").addClass("opacity00");
			usingPool("#thread3");
			popover('#browser2', 'bottom');
			typing('#popover' + count, "req2.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep11()">Next →</a>');
			});
		});
	});
}

function firstStep11() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow20");
	$('#reqRespThree').removeClass('opacity00');
	TweenMax.staggerFrom("#reqRespThree", 0.8, {opacity:1, x: -300}, 0.5, function() {
		arrowReveal("#arrow200", function() {
			arrowRevealVertical("#arrow22", function() {
				$('#arrow22').css("marker-end", "none");
				$('#response2').removeClass('opacity00');
				TweenMax.staggerFrom("#response2", 1, {opacity:1, x: 204}, 0.5);
				arrowReveal("#arrow21", function() {
					arrowReveal("#arrow23", function() {
						$("#text4").fadeTo(1000, 1, function() {
							freePool();
							popover('#response2', 'bottom');
							typing('#popover' + count, "response move2.", function() {  
								$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep12()">Next →</a>');
							});
						});
					});
				});
			});
		});
	});
}

function firstStep12() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#lifeCycleBox12").removeClass("opacity00");
	arrowRevealVertical("#arrow24", function() {
		$('#arrow24').css("marker-end", "none");
		arrowReveal("#arrow25", function() {
			popover('#lifeCycleBox12', 'right');
			typing('#popover' + count, "destroy.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep13()">Next →</a>');
			});
		});
	});
} 

function firstStep13() {
	$(".user-btn").remove();
	$(".popover").hide();
	intro.nextStep();
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

function usingPool(id) {
	$("#threadPool2").css("z-index", "10000000");
	$("#threadPool1").css("z-index", "9999999");
	$("#threadPool2").append("<div id='runningPool' class=' z-index-1 progress margin-top25 thread-pool-1' style='transform: rotate(90deg);  width: 60px;'>"+
			"<div  style='width: 100%;' aria-valuemax='100' aria-valuemin='0' aria-valuenow='45'"+
			"role='progressbar' class=' z-index-1 progress-bar progress-bar-success progress-bar-striped active'></div></div> ");
	var l = $(id).offset();
	$("#runningPool").offset({
		"top" : l.top,
		"left" : l.left
	});
	$(id).addClass("opacity00");
	TweenMax.to($("#runningPool"), 1, {top : 0, left : 0, onComplete:function() {
		$("#runningPool").removeClass("thread-pool-1").addClass("thread-pool-2");
		$("#runningPool > div").addClass("progress-bar-danger");
		TweenMax.to(id, 1, {"width" : "0%", onComplete:function() {
			$(id).remove();
			reArrangeIDs();
		}});
	}});
}

function reArrangeIDs() {
	$(".thread-pool-1").removeAttr("id");
	$.each($(".thread-pool-1"), function(index) {
		$(this).attr("id", "thread" + (index + 1));
	});
}

function freePool() {
	$("#threadPool1").css("z-index", "10000000");
	$("#threadPool2").css("z-index", "9999999");
	$("#threadPool1").prepend("<div id='runningFreePool' class='thread-pool-2  progress margin-top25' style='transform: rotate(90deg);  width: 60px;'>"+
			"<div  style='width: 100%;' aria-valuemax='100' aria-valuemin='0' aria-valuenow='45' "+
			"role='progressbar' class=' progress-bar progress-bar-danger progress-bar-striped active'></div></div>");
	var l = $("#runningPool").addClass("opacity00").offset();
	$("#threadPool1 #runningFreePool").offset({
	  top : l.top,
	  left : l.left
	});
	TweenMax.to($("#threadPool1 #runningFreePool"), 1, {top : 0, left : 0, onComplete:function() {
    	$("#runningPool").remove();
    	$("#threadPool1 .thread-pool-2").addClass("thread-pool-1").removeClass("thread-pool-2");
    	$(".progress-bar-danger").removeClass("progress-bar-danger");
    	$("#runningFreePool > div").addClass("progress-bar-success");
      	reArrangeIDs();
  	}});
}

function popover(selector, position) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'"></div>',
		container: '#architecture'
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
	});
}
</script>

<div id ='totaldiv' class='totaldivclass col-xs-12 text-center margin-top30'>
	<span id='title' class='label ct-demo-heading'>JavaServerPages(jsp)</span>
</div>

<div id="architecture" class="col-xs-offset-1 col-xs-10 z-index padding0 border-grey margin-top30">

<svg class="svg-css">
	<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #000000;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
		
	<line id="arrow1" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="48%" x2="16%" y1="48%" x1="8%"/>
	<line id="arrow2" class="svg-line" style="display: inline; opacity: 1; marker-end: url('#myMarker');" y2="48%" x2="49%" y1="48%" x1="17%"/>
	<line id="arrow3" class="svg-line" style="display: inline; marker-end: url('#myMarker');" y2="40%" x2="49%" y1="48%" x1="49%"/>
	<line id="arrow4" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="37%" x2="68%" y1="37%" x1="57%"/>
	
	<line x1="72%" y1="42%" x2="72%" y2="48%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow5"/>
	<line id="arrow6" style="marker-end: url('#myMarker'); display: inline;" y2="65%" x2="72%" y1="59%" x1="72%" class="svg-line"/>
	<line id="arrow7" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="76%" x2="65%" y1="70%" x1="65%"/>
	
	<line style="marker-end: url('#myMarker'); display: inline;" x1="88%" y1="70%" x2="80%" y2="70%" class="svg-line" id="arrow9"/>
	
	<line id="arrow10" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="79%" x2="72%" y1="73%" x1="72%"/>
	
	<line id="arrow15" class="svg-line response-color" y2="82%" x2="49%" y1="82%" x1="63%" style="display: inline;" stroke-dasharray="9, 5"/>
	<line style="display: inline;" x1="49%" y1="82%" x2="49%" y2="55%" class="svg-line response-color" id="arrow16" stroke-dasharray="9, 5"/>
	<line x1="49%" y1="55%" x2="27%" y2="55%" stroke-dasharray="9, 5"  style="display: inline; opacity: 1; marker-end: url('#myMarker');" class="svg-line response-color" id="arrow17"/>
	<line id="arrow18" class="svg-line response-color" style="marker-end: url('#myMarker'); display: inline;" y2="55%" x2="8%" y1="55%" x1="16%" stroke-dasharray="9, 5"/>
	
	<line x1="8%" y1="85%" x2="16%" y2="85%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow19"/>
	<line id="arrow20" class="svg-line" style="opacity: 1; marker-end: url('#myMarker'); display: inline;" y2="85%" x2="46%" y1="85%" x1="17%"/>
	<line id="arrow200" class="svg-line" style="opacity: 1; marker-end: url('#myMarker');" y2="85%" x2="63%" y1="85%" x1="57%"/>
	
	<line id="arrow21" class="svg-line response-color" style="opacity: 1; marker-end: url('#myMarker');" stroke-dasharray="9, 5" y2="92%" x2="27%" y1="92%" x1="68%"/>
	<line x1="68%" y1="87%" x2="68%" y2="92%" stroke-dasharray="9, 5" style="opacity: 1; marker-end: url('#myMarker');" class="svg-line response-color" id="arrow22"/>
	<line x1="16%" y1="92%" x2="8%" y2="92%" style="marker-end: url('#myMarker');"  stroke-dasharray="9, 5" class="svg-line response-color" id="arrow23"/>
	
	<line id="arrow24" class="svg-line" style="marker-end: none; display: inline;" y2="15%" x2="92%" y1="55%" x1="92%"/>
	<line x1="92%" y1="15%" x2="45%" y2="15%" style="display: inline; marker-end: url('#myMarker');" class="svg-line" id="arrow25"/>
	
	<text id="text1" fill="brown" y="47%" x="8%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">first request</text>
	<text id="text2" fill="brown" y="54%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
	
	<text style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;" x="8%" y="84%" fill="brown" id="text3">second request</text>
	<text id="text4" fill="brown" y="95%" x="9%" style="opacity: 1; font-weight: bold; font-size: 12px; display: inline;">response</text> 
</svg>

<div style="background-color: #fff6ea; min-height: 480px;" class="col-xs-12 padding0" id='totalDiv'>
	<div class="col-xs-2 padding0" id="browser" style=''>
		<div class='col-xs-12'>
			<div id="browser1" class="opacity00" style='margin-top: 217px; display: inline-block; text-align: 
				center;'>
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div>
			</div>
		</div>
		<div class='col-xs-12'>
			<div id="browser2" style="margin-top:107px; display: inline-block; text-align: center;" id="browser2" class="opacity00"> 
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div> 
			</div>
		</div>
	</div>
	<div id='singleThreadModelBox' class='col-xs-10 opacity00 border-radius5 opacity00' 
			style='border: 2px solid grey; margin-top: 20px; background-color: #efe5d9; min-height: 440px;'>
		
		<div class="col-xs-4 padding0">
			<div class="col-xs-12 padding0 text-center opacity00" id="webServer">
				<div class='color-aquamarine'>Free pool</div>
				<div id='threadPool1' class="col-xs-12 padding0 border-radius5 thread-pool-box">
					<div id='thread1' class="progress thread-pool-1 transform">
						<div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread2' class="progress margin-top25 thread-pool-1 transform">
						<div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread3' class="progress margin-top25 thread-pool-1 transform">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread4' class="progress margin-top25 thread-pool-1 transform">
						<div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread5' class="progress margin-top25 thread-pool-1 transform">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div> 
				</div>
				<div style='margin-top: 10px;' class='opacity00 color-aquamarine' id='usedPool'>Used pool</div>
				<div  id='threadPool2' class="col-xs-12 padding0 border-radius5 opacity00 z-index-1 thread-pool-box"></div>
				<div class="col-xs-12 padding0" style="margin-top: 55px;">
					<div class="col-xs-4 padding0  eclipse-shape bg-color-top-1 opacity00" id="response1">response</div>
				</div> 
				<div class="col-xs-12 padding0" style='margin-top: 147px;'>
					<div class="col-xs-4 padding0 eclipse-shape bg-color-top-2 opacity00" id="response2">response</div>
				</div>
				</div>
			</div>
		
		<div class='col-xs-2'>
			<div id='reqRespOne' class="col-xs-12 margin-top10 padding0 text-center opacity00" style='margin-top: 140px;'>
			  	<div class="eclipse-shape-small padding0 text-center" id="lifeCycleBox8">
			     	<div class='color-font-weight-1'>request</div>
			     </div>
			     <div class="eclipse-shape-small padding0 text-center bg-color-white" id="lifeCycleBox9">
					<div class='color-font-weight-1'>response</div>
				</div>
			</div>
			<div id='reqRespTwo' class="col-xs-12 margin-top10 padding0 text-center opacity00" style='margin-top: 28px;'>
			  	<div class="eclipse-shape-small padding0 text-center" id="lifeCycleBox8">
			     	<div class='color-font-weight-1'>request</div>
			     </div>
			     <div class="eclipse-shape-small padding0 text-center bg-color-white" id="lifeCycleBox9">
					<div class='color-font-weight-1'>response</div>
				</div>
			</div>
			<div id='reqRespThree' class="col-xs-12 margin-top58 padding0 text-center opacity00">
			  	<div class="eclipse-shape-small padding0 text-center" id="lifeCycleBox10">
			     	<div class='color-font-weight-1'>request</div>
			     </div>
			     <div class="eclipse-shape-small padding0 text-center bg-color-white" id="lifeCycleBox9">
					<div class='color-font-weight-1'>response</div>
				</div>
			</div>
		</div>
		<div id="threadModel" style="margin-top: 110px;" class="opacity00 col-xs-4 border-radius5 border-grey">
				 
			<div class="col-xs-12 padding0 font-size text-center" id="lifeCycle">
		    	
			    <div class='col-xs-12 padding0' style='background-color: #b2cecf;'>
			    	<div class='col-xs-12 padding0' style='margin-top: 20px'>
				    	<div class="background-color-palegreen padding0 opacity00" id="lifeCycleBox1">
				     		<div class='color-font-weight'>Translation</div>
				     		<div class='bg-color-white'>.java file</div>
				     	</div>
			     	</div>
			     	<div class='col-xs-12 padding0 margin-top30'>
				     	<div class="background-color-palegreen padding0 opacity00" id="lifeCycleBox2">
				     		<div class='color-font-weight'>Compilation</div>
				     		<div class='bg-color-white'>.class file</div>
				     	</div>
			     	</div>
			     </div>
			     <div class='col-xs-12 padding0' style='background-color: #74afad;'>
			     	<div class='col-xs-12 padding0 margin-top30'>
				     	<div class="background-color-palegreen padding0 opacity00" id="lifeCycleBox3">
				     		<div class='color-font-weight'>Load/instantiation/initialization</div>
				     	</div>
			     	</div>
			     	<div class='col-xs-12 padding0 margin-top30' style='margin-bottom: 20px'>
				     	<div class="background-color-palegreen padding0 opacity00" id="lifeCycleBox6">
				     		<div class='color-font-weight'>Invoke service(<span class='reqColor'>request</span>, <span class='resColor'>response</span>)</div>
				     	</div>
			     	</div>
			     </div>
			</div>
		</div>
		<div class='col-xs-2 padding0' style='margin-top: 221px;'>
			<div class='col-xs-12 padding0 margin-top10 text-center'>
		     	<div class="background-color-palegreen padding0 opacity00" id="lifeCycleBox12">
		     		<div class='color-font-weight'>Destroy</div>
		     	</div>
		     </div>
			<div class="col-xs-12 margin-top10 padding0 text-center">
			  	<div class="eclipse-shape padding0 text-center opacity00" id="lifeCycleBox7">
			     	<div class='color-font-weight-1'>ServletConfig</div>
			     </div>
			</div>
		</div>
	</div>
</div>
</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>

