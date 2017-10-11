<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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

<title>Servlet life cycle</title>

<style type="text/css">
#titleDiv {
	margin-top: 25px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px  !important;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

#totalDiv {
	border: 1px solid grey;
	margin-top: 30px;
	background-color: #fff6ea;
	border-radius: 4px;
}

#totalServletContainerDiv {
	border: 1px solid grey;
	background-color: #efe5d9;
	border-radius: 4px;
	margin-top: 10px;
	min-height: 126px;
}

.browser-client {
	font-weight: bold; 
	color: #008080; 
	font-size: 12px;
	text-align: center;
}

.browser-style {
	display: inline-block; 
	text-align: center;
}

#servletClassFile {
	border: 1px solid grey;
	border-radius: 4px;
	background: #dde0cd;
}

#servletContainer {
	border: 1px solid grey;
	border-radius: 4px;
	background: #dfe2db;
	border-top: none;
	margin-top: 120px;
}

.bg-color-white {
	background: #f0f0f0;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-top40 {
	margin-top: 40px;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.padding0 {
	padding: 0;
}

.border-grey {
	border: 1px solid grey;
}

.font-weight {
	font-weight: bold;
}

.font-size {
	font-size: 12px;	
}

#containerTitle {
	background: #856941;
	color: white;
}

#servletInstance {
	background: #ddd4bc;
	font-weight: bold;
	font-size: 12px;
}

.servletinstance-box {
	border-radius: 32px; 
	background-color: #634271;
    box-shadow: 0 0 2px;
    display: inline-block;
    padding: 10px !important;
}

.servletinstance-text-style {
	color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 0;
    text-align: center;
}

.servletinit-box  {
	background-color: #409c95;
	border-radius: 5px;
    box-shadow: 0 0 2px;
    display: inline-block;
    padding: 10px !important;
}

.servletinit-text-style {
	color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 0;
    text-align: center;
}

.service-text-style {
	color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 0;
    text-align: center;
}

.eclipse-shape {
    background-color: #8a0651;
    box-shadow: 0 0 2px;
    display: inline-block;
    padding: 10px !important;
}

.destroy-box {
	position: relative;
	border-radius: 50%;
	width: 12% !important;
	padding: 24px !important;
	background: #b81d18;
	box-shadow: 0 0 2px;
}

.destroy-text-style {
	color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 0;
    text-align: center;
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
	stroke:	#ff523b;
	stroke-width: 2;	
}

.user-btn {
	background-color: green !important;
}

.response-color {
	stroke: #149900 !important;
}

.margin-top60 {
	margin-top: 60px;
}

.popover {
	width: 180px !important;
}

/* browser style  */

.container {
	padding: 0px;
	margin-top: 30px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

.padding00 {
	padding: 0;
}

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
  height:25px;
  padding: 0;
  overflow:visible;
}

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	height: 60px;
	border-top: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}

</style>

</head>
<body>

<div id ='titleDiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>ServletLife Cycle</span>
</div>
<div class='col-xs-12 padding0'>
	<div class='col-xs-10 col-xs-offset-1 padding0' id='totalDiv'>
		<svg class="svg-css">
			<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #970f0f;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
				
			<line x1="33%" y1="14%" x2="52%" y2="14%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow1"/>
			<!-- <line x1="84%" y1="11%" x2="50%" y2="11%" stroke-dasharray="1, 30" stroke-width="30" stroke-linecap='round' style="display: inline;" class="svg-line response-color" id="arrow2"/> -->
			<line stroke-linecap="round" x1="84%" y1="40%" x2="55%" y2="56%" stroke-dasharray="1, 35" stroke-width="30" style="display: inline;" class="response-color" id="arrow2"/>
			<line x1="50%" y1="11%" x2="50%" y2="30%" stroke-dasharray="9, 5" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line response-color" id="arrow3"/>
			
			<line x1="56%" y1="34%" x2="58%" y2="34%" stroke-dasharray="9, 5" style="display: inline;" class="svg-line response-color" id="arrow4"/>
			<line x1="58%" y1="34%" x2="58%" y2="44%" stroke-dasharray="9, 5" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line response-color" id="arrow5"/>
			
			<line x1="58%" y1="51%" x2="58%" y2="65%" stroke-dasharray="9, 5" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line response-color" id="arrow6"/>
			<line x1="33%" y1="49%" x2="41%" y2="49%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow7"/>
			
			
			
			<line x1="84%" y1="16%" x2="67%" y2="16%" stroke-dasharray="9, 5" style="display: inline;" class="svg-line response-color" id="arrow8"/>
			<line x1="67%" y1="16%" x2="67%" y2="31%" stroke-dasharray="9, 5" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line response-color" id="arrow9"/>
			<line x1="72%" y1="35%" x2="75%" y2="35%" stroke-dasharray="9, 5" style="display: inline;" class="svg-line response-color" id="arrow10"/>
			<line x1="75%" y1="35%" x2="75%" y2="44%" stroke-dasharray="9, 5" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line response-color" id="arrow11"/>
			<line x1="75%" y1="51%" x2="75%" y2="65%" stroke-dasharray="9, 5" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line response-color" id="arrow12"/>
			
			<line x1="33%" y1="82%" x2="75%" y2="82%" style=" display: inline;" class="svg-line" id="arrow13"/>
			<line x1="75%" y1="82%" x2="75%" y2="72%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow14"/>
			
			<line x1="83%" y1="83%" x2="83%" y2="69%" style="display: inline;" class="svg-line" id="arrow15"/>
			<line x1="83%" y1="69%" x2="80%" y2="69%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow16"/>
			
			<text id="text1" fill="grey" y="17%" x="34%">request a</text>
			<text id="text2" fill="grey" y="48%" x="34%">request b</text>
			<text id="text3" fill="grey" y="81%" x="34%">request c</text>
		</svg>
		<div class='col-xs-12'>
			<div class='col-xs-4 padding0' id='totalBrowserDiv'>
					
				<!-- browser-1 -->
				<div class='col-xs-12 opacity00' id='browser1'>
					<div class='container col-xs-12 padding0'>
						<div class='tab-container'>
							<ul class="tabs clearfix" >
								<li class="active">
									<div class="col-xs-10 margin-top20">insert title</div>
									<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
								</li>
							</ul>
							<span id ="plus"><i class="fa fa-plus"></i></span>
						</div>
						<div id='browser' class='col-xs-12 padding00'>
							<div class='col-xs-2 padding00 text-center'>
								<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
								<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
								<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
							</div>
							<div class='col-xs-8 padding00 text-center url'>
								<input type="text" maxlength="100" class="usr-text" class="padding00">
								<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
							</div>
							<div class='col-xs-2 padding00 fa-display text-center'>	
								<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
								<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
							</div>
						</div>
						<div class ="col-xs-12 html-body" id = "htmlBody">
							<span id = "content"></span>
						</div>
					</div>
					<div class='browser-client'>Browser/Client</div>
				</div>
				
				<!-- browser-2 -->
				<div class='col-xs-12 opacity00' id='browser2'>
					<div class='container col-xs-12 padding0'>
						<div class='tab-container'>
							<ul class="tabs clearfix" >
								<li class="active">
									<div class="col-xs-10 margin-top20">insert title</div>
									<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
								</li>
							</ul>
							<span id ="plus"><i class="fa fa-plus"></i></span>
						</div>
						<div id='browser' class='col-xs-12 padding00'>
							<div class='col-xs-2 padding00 text-center'>
								<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
								<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
								<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
							</div>
							<div class='col-xs-8 padding00 text-center url'>
								<input type="text" maxlength="100" class="usr-text" class="padding00">
								<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
							</div>
							<div class='col-xs-2 padding00 fa-display text-center'>	
								<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
								<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
							</div>
						</div>
						<div class ="col-xs-12 html-body" id = "htmlBody">
							<span id = "content"></span>
						</div>
					</div>
					<div class='browser-client'>Browser/Client</div>
				</div>
				
				<!-- browser-3 -->
				<div class='col-xs-12 opacity00' id='browser3'>
					<div class='container col-xs-12 padding0'>
						<div class='tab-container'>
							<ul class="tabs clearfix" >
								<li class="active">
									<div class="col-xs-10 margin-top20">insert title</div>
									<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
								</li>
							</ul>
							<span id ="plus"><i class="fa fa-plus"></i></span>
						</div>
						<div id='browser' class='col-xs-12 padding00'>
							<div class='col-xs-2 padding00 text-center'>
								<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
								<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
								<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
							</div>
							<div class='col-xs-8 padding00 text-center url'>
								<input type="text" maxlength="100" class="usr-text" class="padding00">
								<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
							</div>
							<div class='col-xs-2 padding00 fa-display text-center'>	
								<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
								<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
							</div>
						</div>
						<div class ="col-xs-12 html-body" id = "htmlBody">
							<span id = "content"></span>
						</div>
					</div>
					<div class='browser-client'>Browser/Client</div>
				</div>
			</div>
			
			<div class='col-xs-7 col-xs-offset-1 padding0 margin-bottom10' id='totalServletContainerDiv'>
				<div class='text-center font-weight' id='containerTitle'>ServletContainer</div>
				<div class='col-xs-12 margin-top10'>
				
					<div class='col-xs-12 margin-top40 margin-bottom20'>
						<div class='col-xs-2 col-xs-offset-2 eclipse-shape ' id='serverA'><div class='service-text-style'>service</div></div>
					</div>
					<div class='col-xs-12 margin-top60'>
						<div class='col-xs-2 col-xs-offset-2 eclipse-shape '  id='serverB'><div class='service-text-style'>service</div></div>
					</div>
					
					<div class='col-xs-8 padding0 margin-bottom10 opacity00' id='servletContainer'>
						<div class='col-xs-12 margin-top10'>
							<div class='col-xs-4 servletinstance-box opacity00' id='servletInstanceA'><div class='servletinstance-text-style'>ServletInstance</div></div>
							<div class='col-xs-4 col-xs-offset-2 servletinstance-box opacity00' id='servletInstanceB'><div class='servletinstance-text-style'>ServletInstance</div></div>
						</div>
						
						<div class='col-xs-12 margin-top40 margin-bottom10'>
							<div class='col-xs-3 col-xs-offset-3 servletinit-box opacity00' id='initMethodA'><div class='servletinit-text-style'>init method</div></div>
							<div class='col-xs-3 col-xs-offset-3 servletinit-box opacity00' id='initMethodB'><div class='servletinit-text-style'>init method</div></div>
						</div>
						
						<div class='col-xs-12 padding0'>
							<div class='text-center' id='servletInstance'>ServletInstantance</div>
						</div>
					</div>
					
					<div class='col-xs-3 col-xs-offset-1 margin-bottom10 opacity00' id='servletClassFile'>
						<div class='col-xs-12 text-center border-grey margin-top10 bg-color-white'>
	            			<div class='text-center font-size' id='servletAClass'>servlet a.class</div>
						</div>
						<div class='col-xs-12 text-center border-grey margin-top10 margin-bottom10 bg-color-white'>
	            			<div class='text-center font-size'>servlet b.class</div>
						</div>
						<div class='col-xs-12 text-center border-grey margin-top10 margin-bottom10 bg-color-white'>
	            			<div class='text-center font-size'>servlet c.class</div>
						</div>
						<div class='col-xs-12 text-center'>
							<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
						</div>
						<div class='col-xs-12 text-center'>
							<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
						</div>
						<div class='col-xs-12 text-center'>
							<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
						</div>
						<div class='col-xs-12 text-center border-grey margin-top10 margin-bottom10 bg-color-white'>
							<div class='text-center font-size'>servlet z.class</div>
						</div>
					</div>
				</div>
				<!-- <div class='col-xs-12 margin-top40 margin-bottom20'>
					<div class='col-xs-2 col-xs-offset-2 eclipse-shape opacity00' id='serverA'><div class='service-text-style'>service</div></div>
					<div class='col-xs-2 col-xs-offset-2 eclipse-shape opacity00'  id='serverB'><div class='service-text-style'>service</div></div>
				</div> -->
				<div class='col-xs-12 margin-top40 margin-bottom20'>
					<div class='col-xs-2 col-xs-offset-8 destroy-box opacity00' id='destroy'><div class='destroy-text-style'>destroy</div></div>
					<div class="col-xs-2"> <i id="clock" class="fa fa-spin fa-clock-o fa-3x opacity00" aria-hidden="true"></i> </div>
				</div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script>
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
			element :'#totalDiv',
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
		case "totalDiv" :
			$('.introjs-nextbutton').hide();
			$('#architecture').removeClass('opacity00');
			$('#singleThreadModelBox').removeClass('opacity00');
			popover('#totalDiv', 'bottom');
			typing('#popover' + count, "servletlifecycle.", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
			 	});
			break;
	
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
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
	$("#browser1").fadeTo(1000, 1, function() {
		arrowReveal("#arrow1", function() {
			
			$("#text1").fadeTo(1000, 1, function() {
				
				popover('#browser1', 'bottom');
				typing('#popover' + count, "browser1", function() { 
					$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep01()">Next →</a>');
				});
			});
		});
	});
}

function firstStep01() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#servletClassFile").fadeTo(1000, 1, function() {
		popover('#servletClassFile', 'bottom');
		typing('#popover' + count, "servletClassFile", function() { 
			$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep1()">Next →</a>');
		});
	});
}

function firstStep1() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowRevealVertical("#arrow2", function() {
		arrowRevealVertical("#arrow3", function() {
			$("#servletContainer").removeClass("opacity00");
			$("#servletInstanceA").removeClass("opacity00");
			popover('#servletInstanceA', 'bottom');
			typing('#popover' + count, "servletinstance", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
			});
		});
	});
}
	
function firstStep2() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow4", function() {
		arrowRevealVertical("#arrow5", function() {
			$("#initMethodA").removeClass("opacity00");
			popover('#initMethodA', 'bottom');
			typing('#popover' + count, "servletinstance", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
			});
		});
	});
}

function firstStep3() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowRevealVertical("#arrow6", function() {
		$("#serverA").removeClass("opacity00");
		popover('#serverA', 'bottom');
		typing('#popover' + count, "servletinstance", function() { 
			$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
		});
	});
}
	
function firstStep4() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#browser2").fadeTo(1000, 1, function() {
		arrowReveal("#arrow7", function() {
			$("#text2").fadeTo(1000, 1, function() {
				popover('#browser2', 'bottom');
				typing('#popover' + count, "browser2", function() { 
					$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep5()">Next →</a>');
				});
			});
		});
	});
}

function firstStep5() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow8", function() {
		arrowRevealVertical("#arrow9", function() {
			$("#servletInstanceB").removeClass("opacity00");
			popover('#servletInstanceB', 'bottom');
			typing('#popover' + count, "servletinstance", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep6()">Next →</a>');
			});
		});
	});
}
	
function firstStep6() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow10", function() {
		arrowRevealVertical("#arrow11", function() {
			$("#initMethodB").removeClass("opacity00");
			popover('#initMethodB', 'bottom');
			typing('#popover' + count, "servletinstance", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep7()">Next →</a>');
			});
		});
	});
}

function firstStep7() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowRevealVertical("#arrow12", function() {
		$("#serverB").removeClass("opacity00");
		popover('#serverB', 'bottom');
		typing('#popover' + count, "servletinstance", function() { 
			$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep8()">Next →</a>');
		});
	});
}
	
function firstStep8() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#browser3").fadeTo(1000, 1, function() {
		arrowReveal("#arrow13", function() {
			arrowRevealVertical("#arrow14", function() {
				$("#text3").fadeTo(1000, 1, function() {
					popover('#browser3', 'bottom');
					typing('#popover' + count, "browser3", function() { 
						$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep9()">Next →</a>');
					});
				});
			});
		});
	});
}

function firstStep9() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#clock").removeClass("opacity00");
	$("#destroy").removeClass("opacity00");
	arrowRevealVertical("#arrow15", function() {
		arrowReveal("#arrow16", function() {
			$("#totalBrowserDiv, #servletContainer, #servletClassFile, #serverA, #serverB, .svg-css").fadeTo(1000, 0.2);
			popover('#destroy', 'bottom');
			typing('#popover' + count, "req1.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep10()">Next →</a>');
				$("#clock").removeClass("fa-spin");
			});
		});
	});
} 
	
function firstStep10() {
	$(".user-btn").remove();
	$(".popover").hide();
	intro.nextStep();
} 

function popover(selector, position) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'"></div>',
		container: '#totalDiv'
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
</script>
</html>
