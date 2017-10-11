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

<!-- <script type="text/javascript" src="js-min/st.min.js"></script> -->

<title>Single Thread Model</title>
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
    height: 50px;
}

.browser-client {
	font-weight: bold; 
	color: #008080; 
	font-size: 11px;
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
	border-radius: 100px / 32px; 
	box-shadow: 0px 0px 5px; 
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
	box-shadow: 0px 0px 5px;
	width: 12%; height: 30px;
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
	border-radius: 100px / 32px; 
	height: 50px; 
    width: 22%;
    box-shadow: 0px 0px 2px; 
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
	margin-left: 30.333%;
}

.popover {
	width: 180px !important;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Single thread model</span>
</div>
<div id="architecture" class="col-xs-offset-1 col-xs-10 z-index introjs-showElement padding0" style="border: 1px solid grey; margin-top: 30px;">

<svg class="svg-css">
	<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #556b2f;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
		
	<line x1="8%" y1="37%" x2="16%" y2="37%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow1"/>
	<line x1="17%" y1="37%" x2="45%" y2="37%" stroke-dasharray="9, 5" style="display: inline; opacity: 1; marker-end: url('#myMarker');" class="svg-line" id="arrow2"/>
	<line id="arrow3" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="37%" x2="61%" y1="37%" x1="57%"/>
	<line id="arrow4" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="37%" x2="74%" y1="37%" x1="70%"/>
	<line x1="88%" y1="37%" x2="92%" y2="37%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow5"/>
	
	<line id="arrow6" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="43%" x2="8%" y1="43%" x1="16%"/>
	<line x1="81%" y1="41%" x2="81%" y2="43%" class="svg-line" id="arrow7"/>
	<line x1="81%" y1="43%" x2="76%" y2="43%" style="display: inline;" class="svg-line" id="arrow8"/>
	
	<line x1="95%" y1="32%" x2="95%" y2="32%" style="display: inline;" class="svg-line" id="arrow9"/>
	<line id="arrow10" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="14%" x2="46%" y1="14%" x1="95%"/>

	<line x1="76%" y1="43%" x2="27%" y2="43%" stroke-dasharray="9, 5" style="opacity: 1; marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow12"/>
	
	<line x1="67%" y1="27%" x2="67%" y2="27%" class="svg-line" id="arrow13" style="marker-end: url('#myMarker');"/>
	<line id="arrow14" class="svg-line" y2="26%" x2="79%" y1="26%" x1="79%" style="marker-end: url('#myMarker');"/>
	<line id="arrow15" class="svg-line" y2="26%" x2="88%" y1="26%" x1="88%" style="marker-end: url('#myMarker');"/>
	
	<line id="arrow16" class="svg-line" y2="20%" x2="66%" y1="20%" x1="66%" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line x1="78%" y1="19%" x2="78%" y2="19%" class="svg-line" id="arrow17" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line x1="83%" y1="19%" x2="83%" y2="19%" class="svg-line" id="arrow18" style="marker-end: url(&quot;#myMarker&quot;);"/>
	
	<text id="text1" fill="brown" y="36%" x="8%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">first request</text>
	<text id="text2" fill="brown" y="42%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
	
	<line style="marker-end: url('#myMarker');" id="arrow20" class="svg-line" y2="63%" x2="16%" y1="63%" x1="8%"/>
	<line id="arrow21" class="svg-line" style="display: inline; opacity: 1; marker-end: url('#myMarker');" stroke-dasharray="9, 5" y2="63%" x2="45%" y1="63%" x1="17%"/>
	<line x1="57%" y1="63%" x2="61%" y2="63%" class="svg-line" id="arrow22" style="marker-end: url('#myMarker');"/>
	<line style="marker-end: url('#myMarker');" id="arrow25" class="svg-line" y2="53%" x2="67%" y1="53%" x1="67%"/>
	<line x1="70%" y1="63%" x2="74%" y2="63%" class="svg-line" id="arrow23" style="marker-end: url('#myMarker');"/>
	<line style="marker-end: url('#myMarker');" id="arrow26" class="svg-line" y2="53%" x2="80%" y1="53%" x1="80%"/>
	<line id="arrow27" class="svg-line" y2="52%" x2="88%" y1="52%" x1="88%" style="marker-end: url('#myMarker');"/>
	<line style="" id="arrow28" class="svg-line" y2="67%" x2="81%" y1="67%" x1="81%"/>
	<line x1="81%" y1="70%" x2="76%" y2="70%" class="svg-line" id="arrow29" style=""/>
	<line x1="76%" y1="70%" x2="27%" y2="70%" stroke-dasharray="9, 5" style="display: inline; opacity: 1; marker-end: url('#myMarker');" class="svg-line" id="arrow210"/>
	<line x1="16%" y1="70%" x2="8%" y2="70%" class="svg-line" id="arrow211" style="marker-end: url('#myMarker');"/>
	<line style="display: inline; marker-end: url('#myMarker');" id="arrow212" class="svg-line" y2="63%" x2="92%" y1="63%" x1="88%"/>
	<line x1="97%" y1="63%" x2="98%" y2="63%" class="svg-line" id="arrow213" style="display: inline;"/>
	<line style="display: inline;" id="arrow214" class="svg-line" y2="63%" x2="98%" y1="63%" x1="98%"/>
	<line x1="98%" y1="11%" x2="46%" y2="11%" class="svg-line" id="arrow215" style="display: inline; marker-end: url('#myMarker');"/>
	
	<line x1="66%" y1="53%" x2="66%" y2="53%" class="svg-line" id="arrow216" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line x1="78%" y1="53%" x2="78%" y2="53%" class="svg-line" id="arrow217" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line x1="83%" y1="53%" x2="83%" y2="53%" class="svg-line" id="arrow218" style="marker-end: url(&quot;#myMarker&quot;);"/>
	
	<text style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;" x="8%" y="62%" fill="brown" id="text3">second request</text>
	<text id="text4" fill="brown" y="69%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
	
	<line x1="8%" y1="89%" x2="16%" y2="89%" class="svg-line" id="arrow30" style="marker-end: url('#myMarker');"/>
	<line x1="17%" y1="89%" x2="45%" y2="89%" stroke-dasharray="9, 5" style="opacity: 1; marker-end: url('#myMarker');" class="svg-line" id="arrow31"/>
	<line style="marker-end: url('#myMarker');" id="arrow32" class="svg-line" y2="89%" x2="61%" y1="89%" x1="57%"/>
	<line x1="67%" y1="79%" x2="67%" y2="79%" class="svg-line" id="arrow33" style="marker-end: url('#myMarker');"/>
	<line style="marker-end: url('#myMarker');" id="arrow34" class="svg-line" y2="89%" x2="74%" y1="89%" x1="70%"/>
	<line x1="79%" y1="79%" x2="79%" y2="79%" class="svg-line" id="arrow35" style="marker-end: url('#myMarker');"/>
	<line style="marker-end: url('#myMarker');" id="arrow36" class="svg-line" y2="79%" x2="88%" y1="79%" x1="88%"/>
	<line x1="81%" y1="93%" x2="81%" y2="93%" class="svg-line" id="arrow37" style=""/>
	<line style="" id="arrow38" class="svg-line" y2="96%" x2="76%" y1="96%" x1="81%"/>
	
	<line id="arrow39" class="svg-line" style="opacity: 1; marker-end: url('#myMarker');" stroke-dasharray="9, 5" y2="96%" x2="27%" y1="96%" x1="76%"/>
	
	<line style="marker-end: url('#myMarker');" id="arrow310" class="svg-line" y2="96%" x2="8%" y1="96%" x1="16%"/>
	<line x1="88%" y1="89%" x2="92%" y2="89%" class="svg-line" id="arrow311" style="marker-end: url('#myMarker');"/>
	<line style="" id="arrow312" class="svg-line" y2="89%" x2="99%" y1="89%" x1="97%"/>
	<line x1="99%" y1="89%" x2="99%" y2="89%" class="svg-line" id="arrow313" style=""/>
	<line style="marker-end: url('#myMarker');" id="arrow314" class="svg-line" y2="7%" x2="46%" y1="7%" x1="99%"/>
	
	<line id="arrow316" class="svg-line" y2="80%" x2="66%" y1="80%" x1="66%" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line x1="78%" y1="80%" x2="78%" y2="80%" class="svg-line" id="arrow317" style="marker-end: url(&quot;#myMarker&quot;);"/>
	<line x1="83%" y1="80%" x2="83%" y2="80%" class="svg-line" id="arrow318" style="marker-end: url(&quot;#myMarker&quot;);"/>
	
	<text style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;" x="8%" y="88%" fill="brown" id="text5">third request</text>
	<text id="text6" fill="brown" y="95%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
	
</svg>
	
<div style="background-color: #e2da99; min-height: 533px;" class="col-xs-12 padding0" id='totalDiv'>
	<div class="col-xs-2 padding0" id="browser" style=''>
		<div class='col-xs-12'>
			<div id="browser1" class="opacity00" style='margin-top: 185px; display: inline-block; text-align: center;'>
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div>
			</div>
		</div>
		<div class='col-xs-12'>
			<div id="browser2" style="margin-top:69px; display: inline-block; text-align: center;" id="browser2" class="opacity00"> 
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div> 
			</div>
		</div>
		<div class='col-xs-12'>
			<div style="margin-top: 65px; display: inline-block; text-align: center;" id="browser3" class='opacity00'> 
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div> 
			</div>	
		</div>			
	</div>
<div id='singleThreadModelBox' class='col-xs-10 opacity00 border-radius5 opacity00' style='border: 2px solid green; background-color: #d9d594;'>
	<div class="col-xs-4 padding0">
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
			
			<div class="col-xs-12 padding0" style="margin-top: 41px;">
			  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-1" id="response1"><span class='box-text'>response</span></div>
			</div>
			<div class="col-xs-12 padding0" style="margin-top: 110px;">
			  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-2" id="response2"><span class='box-text'>response</span></div>
			</div>
			<div class="col-xs-12 padding0" style="margin-top: 108px;">
			  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-3" id="response3">
			  	<span class='box-text'>response</span></div>
			</div>
		</div>
	</div>
	
<div id="threadModel" style="margin-top: 72px;" class="padding0 col-xs-8 border-radius5">
			 
	 <div class="col-xs-12 padding0">
	  	<div class="margin-left30 col-xs-2 eclipse-shape bg-color-top-1 opacity00" id="servletConfig"><span class='box-text'>ServletConfig</span></div>
	  	
		  <div class="col-xs-offset-1 col-xs-1 request-top-box bg-color-top-1 opacity00"  id="request">
			  <span class='box-text'>request</span></div>
		  <div class="col-xs-2 response-empty opacity00" id="emptyResponse"><span class='box-text'>response</span></div>
	</div>
	<div style="margin-top: 67px;" class="col-xs-12 padding0 font-size" id="model1">
    	<div class="col-xs-2 padding0 text-center new-servlet-box opacity00" style="background-color:  #983232;" id="model10">
    		<span style="display: flex; color: white; font-weight: bold; justify-content: center; margin-top: 17px;">New servlet instance</span></div>
     	<div class="background-color-palegreen col-xs-offset-1 col-xs-2 padding0 text-center opacity00 width18" id="model11">
     		<span style="color: white; font-weight: bold;">Invoke init(<span class='configColor'>ServletConfig</span>) method</span></div>
		<div class="background-color-palegreen col-xs-offset-1  col-xs-3 padding0 text-center opacity00" id="model12">
    		<span style="color: white; font-weight: bold; justify-content: center; padding: 9px;">
    		Invoke service(<span class='reqColor'>request</span>, <span class='resColor'>response</span>)</span></div>
		<div class="background-color-palegreen col-xs-offset-1 col-xs-1 padding0 text-center opacity00" id="model13">
    		<span style="margin-top: 9px; display: flex; justify-content: center; color: white; font-weight: bold;">Invoke destroy</span></div>
    </div>
    <div class="col-xs-12 padding0" style="margin-top: 0px;">
		<div class="opacity00 col-xs-offset-5 col-xs-2 padding0 eclipse-shape bg-color-top-1" id="responseMove"><span class='box-text'>response</span></div>
	</div>
	
	<!-- box2 -->
	
	<div class="col-xs-12 padding0">
	  	<div class="margin-left30 col-xs-2 eclipse-shape bg-color-top-2 opacity00" id="servletConfig1"><span class='box-text'>ServletConfig</span></div>
	  	
		  <div class="col-xs-offset-1 col-xs-1 request-top-box bg-color-top-2 opacity00" id="request1">
			  <span class='box-text'>request</span></div>
		  <div class="col-xs-2 response-empty opacity00" id="emptyResponse1"><span class='box-text'>response</span></div>
	</div>
	<div style="margin-top: 26px;" class="col-xs-12 padding0 font-size" id="modelSecond">
    	<div class="col-xs-2 padding0 text-center new-servlet-box bg-color-model-second opacity00" id="modelSecond1">
    		<span style="display: flex; color: white; font-weight: bold; justify-content: center; margin-top: 17px;">New servlet instance</span></div>
     	<div class="background-color-palegreen col-xs-offset-1 col-xs-2 padding0 text-center bg-color-model-second opacity00 width18" id="modelSecond2">
     		<span style="color: white; font-weight: bold;">Invoke init(<span id='configColor2'>ServletConfig</span>) method</span></div>
		<div class="background-color-palegreen col-xs-offset-1  col-xs-3 padding0 text-center bg-color-model-second opacity00" id="modelSecond3">
    		<span style="color: white; font-weight: bold; justify-content: center; padding: 9px;">
    		Invoke service(<span id='reqColor2'>request</span>, <span id='resColor2'>response</span>)</span></div>
		<div class="background-color-palegreen col-xs-offset-1 col-xs-1 padding0 text-center bg-color-model-second opacity00" id="modelSecond4">
    		<span style="margin-top: 9px; display: flex; justify-content: center; color: white; font-weight: bold;">Invoke destroy</span></div>
    </div>
    <div class="col-xs-12 padding0" style="margin-top: 0px;">
		<div class="opacity00 col-xs-offset-5 col-xs-2 padding0 eclipse-shape bg-color-top-2" id="responseMove1"><span class='box-text'>response</span></div>
	</div>
	
	<!-- box3 -->
	
	<div class="col-xs-12 padding0">
	  	<div class="margin-left30 col-xs-2 eclipse-shape bg-color-top-3 opacity00" id="servletConfig2"><span class='box-text'>ServletConfig</span></div>
	  	
		  <div class="col-xs-offset-1 col-xs-1 request-top-box bg-color-top-3 opacity00" id="request2">
			  <span class='box-text'>request</span></div>
		  <div class="col-xs-2 response-empty opacity00" id="emptyResponse2"><span class='box-text'>response</span></div>
	</div>
	<div style="margin-top: 26px;" class="col-xs-12 padding0 font-size" id="modelThird">
    	<div class="col-xs-2 padding0 text-center new-servlet-box bg-color-model-third opacity00" id="modelThird1">
    		<span style="display: flex; color: white; font-weight: bold; justify-content: center; margin-top: 17px;">New servlet instance</span></div>
     	<div class="background-color-palegreen col-xs-offset-1 col-xs-2 padding0 text-center bg-color-model-third opacity00 width18" id="modelThird2">
     		<span style="color: white; font-weight: bold;">Invoke init(<span id='configColor3'>ServletConfig</span>) method</span></div>
		<div class="background-color-palegreen col-xs-offset-1  col-xs-3 padding0 text-center bg-color-model-third opacity00" id="modelThird3">
    		<span style="color: white; font-weight: bold; justify-content: center; padding: 9px;">
    		Invoke service(<span id='reqColor3'>request</span>, <span id='resColor3'>response</span>)</span></div>
		<div class="background-color-palegreen col-xs-offset-1 col-xs-1 padding0 text-center bg-color-model-third opacity00" id="modelThird4">
    		<span style="margin-top: 9px; display: flex; justify-content: center; color: white; font-weight: bold;">Invoke destroy</span></div>
    </div>
    <div class="col-xs-12 padding0" style="margin-top: 0px;">
		<div class="opacity00 col-xs-offset-5 col-xs-2 padding0 eclipse-shape" id="responseMove2"><span class='box-text'>response</span></div>
	</div>
    
	</div>
</div>
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
			typing('#popover' + count, "req1tyyyyy.", function() {  
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
		$("#model10").removeClass('opacity00');
		arrowReveal("#arrow3", function() {
			$("#model11").removeClass('opacity00');
			popover('#model10', 'bottom');
			typing('#popover' + count, "servlet instance and config.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
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
		$("#servletConfig").removeClass('opacity00');
		$(".configColor").css("background-color", "wheat");
		$(".configColor").css("color", "#004687;");
		
		$("#arrow16").removeAttr("style");
		$('#arrow16').css("marker-end", "url('#myMarker')");
		TweenMax.to("#arrow16", 1, {attr:{y2 : "32%"}, onComplete:function() {
		
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
			$("#request").removeClass('opacity00');
			$(".reqColor").css("background-color", "wheat");
			$(".reqColor").css("color", "#004687;");
			
			$('#arrow17').removeAttr('style');
			$("#arrow17").css("marker-end", "url('#myMarker')");
			TweenMax.to("#arrow17", 1, {attr:{y2 : "32%"}, onComplete:function() {
			
				$("#emptyResponse").removeClass('opacity00');
				$("#emptyResponse").addClass("opacity00");
				TweenMax.staggerTo("#emptyResponse", 1.5, {opacity:1, y: 105}, 0.1, function() {
					$("#emptyResponse").removeAttr("style");
					$("#emptyResponse").removeClass('opacity00');
					$(".resColor").css("background-color", "wheat");
					$(".resColor").css("color", "#004687;");
					
					$('#arrow18').removeAttr('style');
					$("#arrow18").css("marker-end", "url('#myMarker')");
					TweenMax.to("#arrow18", 1, {attr:{y2 : "32%"}, onComplete:function() {
					
					
						popover('#model12', 'right');
						typing('#popover' + count, "animation req response.", function() {  
							$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep7()">Next →</a>');
						});
					}});
				});
			}});
		});
	});
}
function firstStep7() {
	$(".user-btn").remove();
	$(".popover").hide();
	$('#arrow7').removeAttr('style');
	$('#arrow7').css("marker-end", "url('#myMarker')");
	TweenMax.to("#arrow7", 1, {attr:{y2 : "43%"}, onComplete:function() {
		$('#arrow7').css("marker-end", "none");
		$('#arrow8').css("marker-end", "url('#myMarker')");
		arrowReveal("#arrow8", function() {
			$("#responseMove").removeClass('opacity00');
			$("#response1").css({opacity: 1});
			$("#responseMove").addClass('opacity00');
			TweenMax.staggerFrom("#response1", 2.5, {opacity:1, x: 504}, 0.5, function() {
				$('#arrow8').css("marker-end", "none");
				arrowReveal("#arrow12", function() {
					arrowReveal("#arrow6", function() {
						$("#text2").fadeTo(1000, 1, function() {
							popover('#response1', 'bottom');
							typing('#popover' + count, "response move.", function() {  
								$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep8()">Next →</a>');
							});
						});
					});
				});
			});
		});
	}});
}
function firstStep8() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow5", function() {
		$("#model13").removeClass('opacity00');
		$('#arrow9').removeAttr('style');
		$('#arrow9').css("marker-end", "url('#myMarker')");
		TweenMax.to("#arrow9", 1, {attr:{y2 : "14%"}, onComplete:function() {
			$('#arrow9').css("marker-end", "none");
			arrowReveal("#arrow10", function(){
				freePool(1);
				popover('#model13', 'right');
				typing('#popover' + count, "destroy.", function() {  
					$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep20()">Next →</a>');
				});
			});
		}});
	});
}
function firstStep20() {
	$(".user-btn").remove();
	$(".popover").hide();
	$('#browser2').removeClass('opacity00');
	arrowReveal("#arrow20", function() {
		$("#text3").fadeTo(1000, 1, function() {
			$("#thread3").addClass("opacity00");
			usingPool("#thread3");
			
			$('#browser3').removeClass('opacity00');
			arrowReveal("#arrow30", function() {
				$("#text5").fadeTo(1000, 1, function() {
					$("#thread2").addClass("opacity00");
					usingPool("#thread2");
			
					popover('#browser3', 'bottom');
					typing('#popover' + count, "req2.", function() {  
						$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep21()">Next →</a>');
					});
				});
			});
		});
	});
}

function firstStep21() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow21", function() {
		$("#modelSecond1").removeClass('opacity00');
		arrowReveal("#arrow22", function() {
			$("#modelSecond2").removeClass('opacity00');

			$("#servletConfig1").addClass("opacity00");
			TweenMax.staggerTo("#servletConfig1", 1.5, {opacity:1, y: 70}, 0.1, function() {
				$("#servletConfig1").removeAttr("style");
				$("#servletConfig1").removeClass("opacity00");
				
				$("#configColor2").css("background-color", "white");
				$("#configColor2").css("color", "tomato");
				
				$("#arrow216").removeAttr("style");
				$('#arrow216').css("marker-end", "url('#myMarker')");
				TweenMax.to("#arrow216", 1, {attr:{y2 : "58%"}, onComplete:function() {
				
				arrowReveal("#arrow23", function() {
					$("#modelSecond3").removeClass('opacity00');
					$("#request1").addClass("opacity00");
					TweenMax.staggerTo("#request1", 1.5, {opacity:1, y: 70}, 0.1, function() {
						$("#request1").removeAttr("style");
						$("#request1").removeClass('opacity00');
						
						$("#reqColor2").css("background-color", "white");
						$("#reqColor2").css("color", "tomato");
						
						$('#arrow217').removeAttr('style');
						$("#arrow217").css("marker-end", "url('#myMarker')");
						TweenMax.to("#arrow217", 1, {attr:{y2 : "58%"}, onComplete:function() {
						
							$("#emptyResponse1").addClass("opacity00");
						
							TweenMax.staggerTo("#emptyResponse1", 1.5, {opacity:1, y: 70}, 0.1, function() {
								$("#emptyResponse1").removeAttr("style");
								$("#emptyResponse1").removeClass('opacity00');
								
								$("#resColor2").css("background-color", "white");
								$("#resColor2").css("color", "tomato");
								
								$('#arrow218').removeAttr('style');
								$("#arrow218").css("marker-end", "url('#myMarker')");
								TweenMax.to("#arrow218", 1, {attr:{y2 : "58%"}, onComplete:function() {
							
							
									$('#arrow28').removeAttr('style');
									$('#arrow28').css("marker-end", "url('#myMarker')");
									TweenMax.to("#arrow28", 1, {attr:{y2 : "70%"}, onComplete:function() {
										$('#arrow28').css("marker-end", "none");
										$('#arrow29').css("marker-end", "url('#myMarker')");
										arrowReveal("#arrow29", function() {
											$("#responseMove1").removeClass('opacity00');
											$("#response2").css({opacity: 1});
											$("#responseMove1").addClass('opacity00');
											TweenMax.staggerFrom("#response2", 2.5, {opacity:1, x: 504}, 0.5, function() {
												$('#arrow29').css("marker-end", "none");
												arrowReveal("#arrow210", function() {
													arrowReveal("#arrow211", function() {
														$("#text4").fadeTo(1000, 1, function() {
															
															arrowReveal("#arrow212", function() {
																$("#modelSecond4").removeClass('opacity00');
																$('#arrow213').css("marker-end", "url('#myMarker')");
																arrowReveal("#arrow213", function() {
																	$('#arrow213').css("marker-end", "none");
																	$('#arrow214').removeAttr('style');
																	$('#arrow214').css("marker-end", "url('#myMarker')");
																	TweenMax.to("#arrow214", 1, {attr:{y2 : "11%"}, onComplete:function() {
																		$('#arrow214').css("marker-end", "none");
																		arrowReveal("#arrow215", function(){
																			});
																		}});
																	});
																});
															});
														});
													});
												});
											});
										}});
									}});
								});
							}});
						});
					});
				}});
			});
		});
	});
			
	arrowReveal("#arrow31", function() {
		$("#modelThird1").removeClass('opacity00');
		arrowReveal("#arrow32", function() {
			$("#modelThird2").removeClass('opacity00');
	
			$("#servletConfig2").addClass("opacity00");
			TweenMax.staggerTo("#servletConfig2", 1.5, {opacity:1, y: 70}, 0.1, function() {
				$("#servletConfig2").removeAttr("style");
				$("#servletConfig2").removeClass("opacity00");
				
				$("#configColor3").css("background-color", "white");
				$("#configColor3").css("color", "teal");
				
				$("#arrow316").removeAttr("style");
				$('#arrow316').css("marker-end", "url('#myMarker')");
				TweenMax.to("#arrow316", 1, {attr:{y2 : "84%"}, onComplete:function() {
				
				
				
				arrowReveal("#arrow34", function() {
					$("#modelThird3").removeClass('opacity00');
					$("#request2").addClass("opacity00");
					TweenMax.staggerTo("#request2", 1.5, {opacity:1, y: 70}, 0.1, function() {
						$("#request2").removeAttr("style");
						$("#request2").removeClass('opacity00');

						$("#reqColor3").css("background-color", "white");
						$("#reqColor3").css("color", "teal");
						
						$('#arrow317').removeAttr('style');
						$("#arrow317").css("marker-end", "url('#myMarker')");
						TweenMax.to("#arrow317", 1, {attr:{y2 : "84%"}, onComplete:function() {
						
						
							$("#emptyResponse2").addClass("opacity00");
							TweenMax.staggerTo("#emptyResponse2", 1.5, {opacity:1, y: 70}, 0.1, function() {
								$("#emptyResponse2").removeAttr("style");
								$("#emptyResponse2").removeClass('opacity00');
								
								$("#resColor3").css("background-color", "white");
								$("#resColor3").css("color", "teal");
								
								$('#arrow318').removeAttr('style');
								$("#arrow318").css("marker-end", "url('#myMarker')");
								TweenMax.to("#arrow318", 1, {attr:{y2 : "84%"}, onComplete:function() {
									
									$('#arrow37').removeAttr('style');
									$('#arrow37').css("marker-end", "url('#myMarker')");
									TweenMax.to("#arrow37", 1, {attr:{y2 : "96%"}, onComplete:function() {
										
										$('#arrow37').css("marker-end", "none");
										$('#arrow38').css("marker-end", "url('#myMarker')");
										arrowReveal("#arrow38", function() {
											$("#responseMove2").removeClass('opacity00');
											$("#response3").css({opacity: 1});
											$("#responseMove2").addClass('opacity00');
											TweenMax.staggerFrom("#response3", 2.5, {opacity:1, x: 504}, 0.5, function() {
												$('#arrow38').css("marker-end", "none");
												arrowReveal("#arrow39", function() {
													arrowReveal("#arrow310", function() {
														$("#text6").fadeTo(1000, 1, function() {
															
															arrowReveal("#arrow311", function() {
																$("#modelThird4").removeClass('opacity00');
																$('#arrow312').css("marker-end", "url('#myMarker')");
																arrowReveal("#arrow312", function() {
																	$('#arrow312').css("marker-end", "none");
																	$('#arrow313').removeAttr('style');
																	$('#arrow313').css("marker-end", "url('#myMarker')");
																	TweenMax.to("#arrow313", 1, {attr:{y2 : "7%"}, onComplete:function() {
																		$('#arrow313').css("marker-end", "none");
																		arrowReveal("#arrow314", function(){
																			freePool(2);
																			intro.nextStep();
																			});
																		}});
																	});
																});
															});
														});
													});
												});
											});
										}});
									}});
								});
							}});
						});
					});
				}});
			});
		});
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
function usingPool(id) {
	$("#threadPool2").css("z-index", "10000000");
	$("#threadPool1").css("z-index", "9999999");
	$(".runningPool").addClass("progress-bar-danger");
	$("#threadPool2").append("<div class='runningPool z-index-1 progress margin-top25 thread-pool-1' style='transform: rotate(90deg);  width: 60px;'>"+
			"<div  style='width: 100%;' aria-valuemax='100' aria-valuemin='0' aria-valuenow='45'"+
			"role='progressbar' class=' z-index-1 progress-bar progress-bar-success progress-bar-striped active'></div></div> ");
	$(".runningPool :eq(0), .runningPool :eq(1)").removeClass("thread-pool-1").addClass("thread-pool-2").addClass("progress-bar-danger");
	var l = $(id).offset();
	$(".runningPool").eq(0).offset({
		"top" : l.top,
		"left" : l.left
	});
	$(id).addClass("opacity00");
	
	TweenMax.to($(".runningPool").eq(0), 1, {top : 0, left : 0, onComplete:function() {
		$(".runningPool > div").addClass("progress-bar-danger");
		
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

function freePool(count) {
	$("#threadPool1").css("z-index", "10000000");
	$("#threadPool2").css("z-index", "9999999");
  
	  for (var i = 0; i < count; i++) {
	      $("#threadPool1").prepend("<div id='runningFreePool" + i + "' class='two-threads-move thread-pool-2  progress margin-top25' style='transform: rotate(90deg);  width: 60px;'>"+
	          "<div  style='width: 100%;' aria-valuemax='100' aria-valuemin='0' aria-valuenow='45' "+
	          "role='progressbar' class=' progress-bar progress-bar-danger progress-bar-striped active'></div></div>");
	  
	      var l = $(".runningPool").eq((count - 1) - i).addClass("opacity00").offset();
	      $("#runningFreePool" + i).offset({
	        top : l.top,
	        left : l.left
	      });
	   	}
		TweenMax.to($(".two-threads-move"), 1, {top : 0, left : 0, onComplete:function() {
		  	$(".runningPool.opacity00").remove();
		  	$(".two-threads-move > div").removeClass("progress-bar-danger").addClass("progress-bar-success");
		    $(".two-threads-move").removeClass("two-threads-move");
		    reArrangeIDs();
		}});
}


function popover(selector, position) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: 'body',
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
	})
}
</script>