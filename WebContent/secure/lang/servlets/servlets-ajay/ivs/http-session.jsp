<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link type="text/css" rel="stylesheet" href="/css/alertify/alertify.core.css">
<link type="text/css" rel="stylesheet" href="/css/alertify/alertify.default.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/js/alertify.js" type="text/javascript"></script>
<script src="/secure/lang/servlets/servlets-ajay/js/http-session.js" type="text/javascript"></script>
<title>Http Session</title>
<style type="text/css">

.box-border {
	border: 2px solid gray;
	border-radius: 6px;
}

.browser-border {
	border: 6px solid;
	border-radius: 6px;
}

.border {
	border: 2px solid;
}

.box-shadow {
	box-shadow: 0 5px 6px 0;
}

.svg-css {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 10000000;
}


.line {
	marker-end: url("#arrow");
	stroke: gray;
	stroke-width: 2;
}

.padding00 {
	padding: 0;
}

.opacity00 {
	opacity: 0;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
	z-index: 100000000;
}

.user-btn {
	background-color: green;
}

.blinking-green {
	animation-name: blink-border-background-green ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-green { 
	50% {
		border-color: green;
		background: green;
	}
}

.headings {
	font-weight: bold;
}

.btn-success {
	font-size: 10px;
	font-weight: bold;
	padding: 4px 7px;
}

.ui-effects-transfer {
	border: 2px solid blue;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

</style>

<script type="text/javascript">

$(document).ready(function() {
	httpSession();
});

</script>
</head>
<body>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">HTTP Session</h1>
</div>

<div id="mainDiv" class="col-xs-12" style="margin-top: 20px;">

	<svg class="svg-css">
	
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	    </marker>
    
    	<text id="text1" class="svg-text" y="22%" x="51%" fill="brown" style="font-weight: bold; font-size: 11px;">Request1</text>
    	<text id="text2" class="svg-text" fill="brown" y="37%" x="51%" style="font-weight: bold; font-size: 11px;">Response</text>
		<text id="text3" class="svg-text" fill="brown" y="47%" x="54.5%" style="font-weight: bold; font-size: 11px;">Request2</text>
		<text id="text4" class="svg-text" fill="brown" y="48.5%" x="46%" style="font-weight: bold; font-size: 11px;">Response</text>
		<text id="text5" class="svg-text" fill="brown" y="49%" x="50%" style="font-weight: bold; font-size: 11px;">Request1</text>
		<text id="text6" class="svg-text" fill="brown" y="62%" x="50%" style="font-weight: bold; font-size: 11px;">Response</text>
		<text id="text7" class="svg-text" fill="brown" y="70%" x="50%" style="font-weight: bold; font-size: 11px;">Request2</text>
		<text id="text8" class="svg-text" fill="brown" x="50%" y="81%" style="font-weight: bold; font-size: 11px;">Response</text>
    
		<!-- <line id="arrow1" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="41.5%" y1="11.3%" x2="64%" x1="42.3%"/> -->
		<line id="arrow1" class="line" style="stroke: #556b2f;" y2="11.3%" y1="11.3%" x2="42.3%" x1="42.3%"/>
		
		<!-- <line id="arrow2" class="line" x1="63.6%" x2="42.7%" y1="47.3%" y2="18.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow2" class="line" x1="63.6%" x2="63.6%" y1="47.3%" y2="47.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow3" class="line" x1="42.5%" x2="65%" y1="26%" y2="67%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow3" class="line" x1="42.5%" x2="42.5%" y1="26%" y2="26%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow4" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="32.5%" y1="72%" x2="42.7%" x1="63.6%"/> -->
		<line id="arrow4" class="line" style="stroke: #556b2f;" y2="72%" y1="72%" x2="63.6%" x1="63.6%"/>
		
		<!-- <line id="arrow5" class="line" x1="42.3%" x2="64%" y1="59.3%" y2="41.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow5" class="line" x1="42.3%" x2="42.3%" y1="59.3%" y2="59.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow6" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="65.5%" y1="47.3%" x2="42.7%" x1="63.6%"/> -->
		<line id="arrow6" class="line" style="stroke: #556b2f;" y2="47.3%" y1="47.3%" x2="63.6%" x1="63.6%"/>
		
		<!-- <line id="arrow7" class="line" x1="42.5%" x2="63.5%" y1="72.3%" y2="72.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow7" class="line" x1="42.5%" x2="42.5%" y1="72.3%" y2="72.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow8" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="77.5%" y1="77.5%" x2="42.7%" x1="63.6%"/> -->
		<line id="arrow8" class="line" style="stroke: #556b2f;" y2="77.5%" y1="77.5%" x2="63.6%" x1="63.6%"/>
		
		<!-- <line id="arrow9" class="line" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" y2="29.6%" y1="39.5%" x2="69.5%" x1="68.5%"/> -->
		<line id="arrow9" class="line" style="stroke: #556b2f;" y2="39.5%" y1="39.5%" x2="68.5%" x1="68.5%"/>
		
		<!-- <line id="arrow3" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" y2="70%" y1="26%" x2="70%" x1="71.3%" /> -->
		<line id="arrow10" class="line" style="stroke: #556b2f;" y2="26%" y1="26%" x2="71.3%" x1="71.3%" />
		
		<!-- <line class="line" id="arrow5" style="stroke: rgb(85, 107, 47); display: inline; marker-end: url(&quot;#myMarker&quot;);" y2="29%" y1="39.3%" x2="65%" x1="66.3%"/> -->
		<line id="arrow11" class="line"  style="stroke: #556b2f;" y2="39.3%" y1="39.3%" x2="66.3%" x1="66.3%"/>
		
		<!-- <line id="arrow6" class="line" x1="62.7%" x2="64.2%" y1="25.7%" y2="68.5%" style="stroke: #556b2f;"/> -->
		<line id="arrow12" class="line" x1="62.7%" x2="62.7%" y1="25.7%" y2="25.7%" style="stroke: #556b2f;"/>
		
	</svg>

	<div class="col-xs-2 col-xs-offset-4 padding00" style="width: 9%; margin-top: 45px;">
	
		<div id="client1Icon" class="col-xs-12 padding00 opacity00">
			<div class="col-xs-12 padding00 browser-border" style="height: 82px;"> </div>
			<div class="col-xs-12 padding00" style="margin-top: 5px; border: 4px solid; border-radius: 6px"> </div>
		</div>
		
		<div id="client1Heading" style="margin-top: 10px;" class="col-xs-12 padding00 headings text-center opacity00"> Client1 </div>
		
		<div id="client2Icon" class="col-xs-12 padding00 opacity00">
			<div id="client2Popover1" class="col-xs-12 padding00 browser-border" style="height: 82px; margin-top: 75px;"> </div>
			<div id="client2Popover2" class="col-xs-12 padding00" style="margin-top:5px; border: 4px solid; border-radius: 6px"> </div>
		</div>
		
		<div id="client2Heading" style="margin-top: 10px;" class="col-xs-12 padding00 headings text-center opacity00"> Client2 </div>
		
	</div>

	<div class="col-xs-2 col-xs-offset-2 box-border padding00 box-shadow opacity00"
		style="height: 400px; background-color: thistle; margin-top: 20px;" id="servletEngine">

		<div id="webServerText" class="col-xs-12 text-center padding00" style="margin-top: 10px;">
			<span style="font-weight: bold;" id="webServerHeading"> Web Server </span>
		</div>

		<div id="webServerPopover" style="height: 300px; margin-top: 30px;"
			class="col-xs-8 col-xs-offset-2 box-border padding00">
			
			<div style="margin-top: 10px; font-size: 8px; font-weight: bold;" class="col-xs-12 padding00 text-center"
				id="sessionIds">
				
				<div id="sessionId1" style="border: 1px solid gray; border-radius: 50%; height: 28px; line-height: 28px; background-color: skyblue;"
					class="col-xs-4 col-xs-offset-1 padding00 opacity00">
					<span> Session Id </span>
				</div>
					
				<div id="sessionId2" class="col-xs-4 col-xs-offset-2 padding00 opacity00"
					style="border: 1px solid gray; border-radius: 50%; height: 28px; line-height: 28px; background-color: skyblue;">
					<span> Session Id </span>
				</div>
				
			</div>
			
			<div id="loginPopover" class="col-xs-12 text-center padding00" style="margin-top: 30px;">
			
				<div class="col-xs-8 col-xs-offset-2 box-border padding00 box-shadow opacity00"
					style="border-radius: 50%; height: 64px; margin-top: 10px; background-color: wheat; font-size: 10px; font-weight: bold;"
					id="loginServlet">

					<div class="col-xs-12" style="margin-top: 15px;">Login Items Servlet</div>
				</div>
				
			</div>

			<div id="displayPopover" class="col-xs-12 text-center padding00"  style="margin-top: 35px;">
			
				<div class="col-xs-8 col-xs-offset-2 box-border padding00 box-shadow opacity00"
					style="border-radius: 50%; height: 64px; margin-top: 18px; 
					background-color: silver; font-size: 10px; font-weight: bold;" id="displayServlet">

					<div class="col-xs-12" style="margin-top: 8px;">Display Items Servlet</div>
				</div>
				
			</div>
			
		</div>

		<div style="margin-top: 10px;"
			class="col-xs-12 text-center padding00" id="tootipText">
		</div>

	</div>
	
</div>

<div class="col-xs-12 text-center" style="margin-top: 20px">
	<span id="restart" class="btn btn-warning opacity00">Restart</span>
</div>

</body>
</html>