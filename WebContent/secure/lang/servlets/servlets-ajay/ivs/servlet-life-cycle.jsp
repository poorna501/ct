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

<!-- <script type="text/javascript" src="js/servlet-life-cycle.js"></script> -->

<title>ServletLifeCycle</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
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
	stroke:	#556B2F;
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
	background-color: #983232;
    border-radius: 12px;
    box-shadow: 0 0 2px;
    display: inline-block;
    padding: 2px;
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
	background-color: #e3e0cf; 
	border-top: none; 
	padding: 3px; 
	min-height: 66px; 
	display: flex; 
	justify-content: center; 
	align-items: baseline;
}

.eclipse-shape {
	height: 32px; 
	border-radius: 100px / 33px; 
	box-shadow: 0px 0px 5px; 
	width: 12%;
}

.bg-color-top-1 {
	background-color: #f3acac;
}

.box-text {
	justify-content: center;
	display: flex; 
	margin-top: 5px;"
}

.eclipse-shape-small {
	height: 32px; 
	border-radius: 100px / 32px; 
	box-shadow: 0px 0px 5px; 
	background-color: rgb(250, 139, 96); 
	opacity: 1; 
	transform: matrix(1, 0, 0, 1, 0, 0);" 
}

.response-empty {
	background-color: white;
    border-radius: 100px / 46px;
    box-shadow: 0 0 5px;
    height: 30px;
    width: 8%;
}

.request-top-box {
	border-radius: 100px / 45px;
    box-shadow: 0 0 5px;
    height: 31px;
    width: 8%;
}

.new-servlet-box {
	border-radius: 100px / 29px;
    box-shadow: 0 0 2px;
    display: inline-block;
    padding: 13px;
    width: 17%;
}

.bg-color-top-2 {
	background-color: #89aeef;
}

.bg-color-top-3 {
	background-color: #f9b0ed;
}

.bg-color-model-second {
	 background-color: #004687; 
}

.bg-color-model-third {
	background-color: #7f2b82;
}

.margin-left30 {
	margin-left: 44.333%;
}

.popover {
	width: 180px !important;
}

.color-response {
	stroke: #0288ad !important;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>ServletLifeCycle</span>
</div>
<div class='container' style='width: 99%;'>
<div id="architecture" class="col-xs-12 z-index padding0" 
		style="border: 1px solid grey; margin-top: 30px;">

<div style="background-color: #e2da99; min-height: 350px;" class="col-xs-12 padding0" id='totalDiv'>
	<div class="col-xs-2 padding0" id="browser" style=''>
		<div class='col-xs-12'>
			<div id="browser1" class="opacity00" style='margin-top: 201px; display: inline-block; text-align: 
				center;'>
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div>
			</div>
		</div>
	</div>
	<div id='singleThreadModelBox' class='col-xs-10 opacity00 border-radius5 opacity00' 
			style='border: 2px solid green; margin-top: 23px; min-height: 300px; background-color: #d9d594;'>
		
		<div class="col-xs-3 padding0">
			<div class="col-xs-12 padding0 text-center opacity00" id="webServer" style="min-height: 300px;">
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
				
				<div class="col-xs-12 padding0" style="margin-top: 30px;">
				  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-1" style='width: 33% !important;' id="response1"><span class='box-text'>response</span></div>
				</div>
			</div>
		</div>
	
	<div id="threadModel" style="margin-top: 72px;" class="padding0 col-xs-9 border-radius5">
				 
		 <div class="col-xs-12 padding0">
		  	<div class="margin-left30 col-xs-1 eclipse-shape bg-color-top-1 opacity00" id="servletConfig"><span class='box-text'>ServletConfig</span></div>
		  	
			  <div class="col-xs-offset-1 col-xs-1 request-top-box bg-color-top-1 opacity00" style='margin-left: 90px;'  id="request">
				  <span class='box-text'>request</span></div>
			  <div class="col-xs-1 response-empty opacity00" id="emptyResponse" style='margin-left: 2px;'><span class='box-text'>response</span></div>
		</div>
		<div style="margin-top: 57px;" class="col-xs-12 padding0 font-size" id="model1">
		<div class="background-color-palegreen col-xs-1 padding0 text-center width18 opacity00" id="model100">
	     		<span style="color: white; font-weight: bold;">Loads the servlet class</span></div>
	    	
	    	<div class="col-xs-offset-1 col-xs-2 padding0 text-center new-servlet-box opacity00" style="background-color:  #983232;" id="model10">
	    		<span style="color: white; font-weight: bold;">New servlet instance</span></div>
	     	
	     	<div class="background-color-palegreen col-xs-offset-1 col-xs-2 padding0 text-center opacity00 width18" id="model11">
	     		<span style="color: white; font-weight: bold;">Invoke init(<span class='configColor'>ServletConfig</span>) method</span></div>
			
			<div class="background-color-palegreen col-xs-offset-1  col-xs-2 padding0 text-center opacity00" id="model12">
	    		<span style="color: white; font-weight: bold; justify-content: center; padding: 9px;">
	    		Invoke service(<span class='reqColor'>request</span>, <span class='resColor'>response</span>)</span></div>
			
			<div class="background-color-palegreen col-xs-1 padding0 text-center opacity00" style='margin-left: 10px;' id="model13">
	    		<span style="margin-top: 9px; display: flex; justify-content: center; color: white; font-weight: bold;">Invoke destroy</span></div>
	    </div>
	    <div class="col-xs-12 padding0" style="margin-top: 0px;">
				<div class="opacity00 col-xs-offset-7 col-xs-2 padding0 eclipse-shape bg-color-top-1 opacity00" id="responseMove">
				<span class='box-text'>response</span></div>
			</div>
		</div>
	</div>
</div>


<svg class="svg-css">
	<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
		
	<line x1="8%" y1="60%" x2="16%" y2="60%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow1"/>
	<line x1="17%" y1="60%" x2="38%" y2="60%" stroke-dasharray="9, 5" style="display: inline; opacity: 1; marker-end: url(&quot;#myMarker&quot;);" class="svg-line" id="arrow2"/>
	<line id="arrow3" class="svg-line" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" y2="60%" x2="63%" y1="60%" x1="59%"/>
	<line id="arrow4" class="svg-line" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" y2="60%" x2="79%" y1="60%" x1="74%"/>
	
	
	<line x1="91%" y1="21%" x2="39%" y2="21%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow5"/>

	<line id="arrow6" class="svg-line color-response" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" stroke-dasharray="9, 5" y2="70%" x2="8%" y1="70%" x1="16%"/>
	<line style="marker-end: none;" x1="91%" y1="54%" x2="91%" y2="54%" class="svg-line" id="arrow9"/>
	<line x1="95%" y1="7%" x2="46%" y2="7%" style="marker-end: url(&quot;#myMarker&quot;); display: none;" class="svg-line color-response" id="arrow10"/>
	
	<line id="arrow11" class="svg-line color-response" y2="70%" x2="84%" y1="68%" x1="84%" style="marker-end: none;" stroke-dasharray="9, 5"/>
	<line id="arrow110" class="svg-line color-response" y2="70%" x2="79%" y1="70%" x1="84%" style="marker-end: none; display: inline;" stroke-dasharray="9, 5"/>

	<line x1="79%" y1="70%" x2="25%" y2="70%" stroke-dasharray="9, 5" style="opacity: 1; marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line color-response" id="arrow12"/>

	
	<line style="marker-end: url(&quot;#myMarker&quot;);" x1="43%" y1="60%" x2="48%" y2="60%" class="svg-line" id="arrow14"/>
	
	
	<line x1="69%" y1="37%" x2="69%" y2="37%" class="svg-line" id="arrow15" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line id="arrow16" class="svg-line" y2="36%" x2="80%" y1="36%" x1="80%" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line id="arrow17" class="svg-line" y2="36%" x2="85%" y1="36%" x1="85%" style="marker-end: url(&quot;#myMarker&quot;);"/>
	
	<text id="text1" fill="brown" y="59%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">first request</text>
	<text id="text2" fill="brown" y="69%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
</svg>
</div>
</div>
	<div class="button col-xs-12 text-center " id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</body>

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
	$('#browser1').removeClass('opacity00');
	arrowReveal("#arrow1", function() {
		$("#text1").fadeTo(1000, 1, function() {
			popover('#browser1', 'bottom');
			typing('#popover' + count, "req1.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
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
		popover('#threadPool2', 'right');
		typing('#popover' + count, "used pool.", function() {  
			$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
		});
	});
}
function firstStep3() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow2", function() {
		$('#threadModel').removeClass('opacity00');	
		$("#model100").removeClass('opacity00');
		arrowReveal("#arrow14", function() {
			$("#model10").removeClass('opacity00');
			arrowReveal("#arrow3", function() {
				$("#model11").removeClass('opacity00');
				popover('#model10', 'bottom');
				typing('#popover' + count, "servlet instance and config.", function() {  
					$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
				});
			});
		});
	});
}

function firstStep4() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#servletConfig").removeClass('opacity00');
	$("#servletConfig").addClass("opacity00");
	TweenMax.staggerTo("#servletConfig", 1.5, {opacity:1, y: 105}, 0.1, function() {
		$("#servletConfig").removeAttr("style");
		$("#servletConfig").removeClass("opacity00");
		$(".configColor").css("background-color", "wheat");
		$(".configColor").css("color", "#004687;");
		$("#arrow15").removeAttr("style");
		$('#arrow15').css("marker-end", "url('#myMarker')");
		TweenMax.to("#arrow15", 1, {attr:{y2 : "53%"}, onComplete:function() {
			
			popover('#model11', 'bottom');
			typing('#popover' + count, "config.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep5()">Next →</a>');
			}); 
		}});
	});
}
function firstStep5() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow4", function() {
		$("#model12").removeClass('opacity00');
		$("#request").removeClass('opacity00');
		$("#request").addClass("opacity00");
		TweenMax.staggerTo("#request", 1.5, {opacity:1, y: 105}, 0.1, function() {
			$("#request").removeAttr("style");
			$("#request").removeClass("opacity00");
			$(".reqColor").css("background-color", "wheat");
			$(".reqColor").css("color", "#004687;");
			
			$('#arrow16').removeAttr('style');
			$("#arrow16").css("marker-end", "url('#myMarker')");
			TweenMax.to("#arrow16", 1, {attr:{y2 : "53%"}, onComplete:function() {
			
				$("#emptyResponse").removeClass('opacity00');
				$("#emptyResponse").addClass("opacity00");
				TweenMax.staggerTo("#emptyResponse", 1.5, {opacity:1, y: 105}, 0.1, function() {
					$("#emptyResponse").removeAttr("style");
					$("#emptyResponse").removeClass("opacity00");
					$(".resColor").css("background-color", "wheat");
					$(".resColor").css("color", "#004687;");
					
					$('#arrow17').removeAttr('style');
					$("#arrow17").css("marker-end", "url('#myMarker')");
					TweenMax.to("#arrow17", 1, {attr:{y2 : "53%"}, onComplete:function() {
					
						popover('#model12', 'bottom');
						typing('#popover' + count, "animation req response.", function() {  
							$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep9()">Next →</a>');
						});
					}});
				});
			}});
		});
	});
}

function firstStep9() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow11").removeAttr("style");
	$('#arrow11').css("marker-end", "url('#myMarker')");
	TweenMax.to("#arrow11", 1, {attr:{y2 : "70%"}, onComplete:function() {
		$('#arrow11').css("marker-end", "none");
		$('#arrow110').css("marker-end", "url('#myMarker')");
		arrowReveal("#arrow110", function() {
			$("#responseMove").removeClass('opacity00');
			$("#response1").css({opacity: 1});
			$("#responseMove").addClass('opacity00');
			TweenMax.staggerFrom("#response1", 2.5, {opacity:1, x: 704}, 0.5, function() {
				$('#arrow110').css("marker-end", "none");
				arrowReveal("#arrow12", function() {
					arrowReveal("#arrow6", function() {
						$("#text2").fadeTo(1000, 1, function() {
							popover('#response1', 'bottom');
							typing('#popover' + count, "response move.", function() {  
								$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep10()">Next →</a>');
							});
						});
					});
				});
			});
		});
	}});
}

function firstStep10() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#model13").removeClass('opacity00');
	$('#arrow9').removeAttr('style');
	$("#arrow9").css("marker-end", "url('#myMarker')");
	TweenMax.to("#arrow9", 1, {attr:{y2 : "21%"}, onComplete:function() {
		$("#arrow9").css("marker-end", "none");
		arrowReveal("#arrow5", function() {
			freePool();
			popover('#model13', 'bottom');
			typing('#popover' + count, "destroy.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep15()">Next →</a>');
			});
		});
	}});
}
function firstStep15() {
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
	})
}

</script>