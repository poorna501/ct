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
<script src="/js/alertify.js" type="text/javascript" charset="utf-8"></script>
<script src="/secure/lang/servlets/servlets-ajay/js/session-tracking-cookies.js" type="text/javascript"></script>
<title>Cookies</title>
<style type="text/css">

.box-border {
	border: 1px solid;
	border-radius: 8px;
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

.blinking-pink {
	animation-name: blink-border-background-pink ;
	animation-duration: 1s ;
	animation-iteration-count: 1s;
	animation-direction: alternate ;
}

@keyframes blink-border-background-pink { 
	50% {
		border-color: #FF00FF;
		background: #FF00FF;
	}
}

.browser-width {
    width: 9.667%;
}

.browser-border {
    border: 6px solid;
    border-radius: 6px;
}

.svg-text {
	font-size: 11px;
	font-weight: bold;
}

</style>

<script type="text/javascript">

$(document).ready(function() {
	cookies();
});

</script>
</head>
<body>

	<div class="text-center" style="margin-top: 20px;">
		<h1 id="heading" class="label ct-demo-heading text-center">Cookies</h1>
	</div>

	<div id="mainDiv" class="col-xs-12" style="margin-top: 40px;">
		
		<svg class="svg-css">
		
			<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
				<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		    </marker>
	    
	    	<text id="text1" class="svg-text" fill="brown" x="45%" y="24%">Request1</text>
	    	<text id="text2" class="svg-text" fill="brown" y="31%" x="44%">Response + Cookies</text>
			<text id="text3" class="svg-text" fill="brown" x="44%" y="39%">Request 2 + Cookies</text>
			<text id="text4" class="svg-text" fill="brown" y="45.5%" x="45%">Response</text>
			<text id="text5" class="svg-text" fill="brown" y="54%" x="44%">Request 3 + cookies</text>
			<text id="text6" class="svg-text" fill="brown" y="60%" x="45%">Response</text>
	    
			<!-- <line class="line" id="arrow1" x1="29.5%" x2="74%" y1="25.3%" y2="25.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
			<line class="line" id="arrow1" x1="29.5%" x2="29.5%" y1="25.3%" y2="25.3%" style="stroke: #556b2f;"/>
			
			<!-- <line class="line" id="arrow2" x1="73.8%" x2="29.8%" y1="33.5%" y2="31%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
			<line class="line" id="arrow2" x1="73.8%" x2="73.8%" y1="33.5%" y2="33.5%" style="stroke: #556b2f;"/>
			
			<!-- <line class="line" id="arrow3" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="45.3%" y1="37.3%" x2="74%" x1="29.5%"/> -->
			<line class="line" id="arrow3" style="stroke: #556b2f;" y2="37.3%" y1="37.3%" x2="29.5%" x1="29.5%"/>
			
			<!-- <line class="line" id="arrow4" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="44%" y1="52%" x2="29.8%" x1="73.5%"/> -->
			<line class="line" id="arrow4" style="stroke: #556b2f;" y2="52%" y1="52%" x2="73.5%" x1="73.5%"/>
			
			<!-- <line class="line" id="arrow5" x1="29.5%" x2="74%" y1="50.3%" y2="64.6%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
			<line class="line" id="arrow5" x1="29.5%" x2="29.5%" y1="50.3%" y2="50.3%" style="stroke: #556b2f;"/>
			
			<!-- <line class="line" id="arrow6" x1="73.2%" x2="29.8%" y1="70.5%" y2="56%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
			<line class="line" id="arrow6" x1="73.2%" x2="73.2%" y1="70.5%" y2="70.5%" style="stroke: #556b2f;"/>
		
		</svg>
		
		<div class="col-xs-12">
			<div id="browserHeading" class="col-xs-3 col-xs-offset-1 text-center opacity00">
				<span style="font-weight: bold; margin-left: 50px;">Browser</span>
			</div>
		</div>

		<div id="browserIcon" class="col-xs-3 col-xs-offset-2 opacity00" style="margin-top: 80px;">
			<div id="browserIcon2" class="col-xs-12 padding00">
				<div class="col-xs-6 browser-border padding00" style="height: 120px;">
					<div style="margin-top: 20px; font-size: 20px;" class="col-xs-12 text-center"> 
						<span id="browserCookie" class="opacity00"> &#127850; </span> 
					</div>
				</div>
			</div>

			<div id="browserIcon3" class="col-xs-12 padding00" style="margin-top: 5px;">
				<div id="browserIcon4" class="col-xs-6 padding00" style="border: 5px solid; border-radius: 8px;"> </div>
			</div>
		</div>

		<div id="servletEngine" style="height: 360px; background-color: thistle;"
			class="col-xs-3 col-xs-offset-3 box-border padding00 box-shadow opacity00">
			
			<div style="margin-top: 10px;" class="col-xs-12 text-center">
				<span id="webServerHeading" class="opacity00" style="font-weight: bold;"> Web Server </span>
			</div>

			<div class="col-xs-8 col-xs-offset-2 box-border padding00" style="height: 260px; margin-top: 30px;">
				<div class="col-xs-12 text-center padding00">
					<div id="loginServlet"
						style="border-radius: 50%; margin-top: 10px; background-color: wheat; font-size: 10px; font-weight: bold;"
						class="col-xs-8 col-xs-offset-2 box-border padding00 box-shadow opacity00">
						
						<div class="col-xs-12" style="margin-top: 16px;"> Login Items Servlet </div>
  						<div style="font-size: 20px;" class="col-xs-12"> 
  							<span id="cookie1" class="opacity00">&#127850;</span> 
  						</div>
					</div>
				</div>

				<div class="col-xs-12 text-center padding00">
					<div id="displayServlet"
						style="border-radius: 50%; height: 64px; margin-top: 18px; background-color: silver; font-size: 10px; font-weight: bold;"
						class="col-xs-8 col-xs-offset-2 box-border padding00 box-shadow opacity00"> 
						
						<div class="col-xs-12" style="margin-top: 16px;"> Display Items Servlet </div>
  						<div style="font-size: 20px;" class="col-xs-12"> <span id="cookie2" class="opacity00">&#127850;</span> </div>
					</div>
				</div>

				<div class="col-xs-12 text-center padding00">
					<div id="cartServlet"
						style="border-radius: 50%; height: 64px; margin-top: 18px; background-color: rosybrown; font-size: 10px; font-weight: bold;"
						class="col-xs-8 col-xs-offset-2 box-border padding00 box-shadow opacity00">
						
						<div class="col-xs-12" style="margin-top: 16px;"> Cart Servlet </div>
  						<div style="font-size: 20px;" class="col-xs-12"> <span id="cookie3" class="opacity00">&#127850;</span> </div>
					</div>
				</div>
			</div>
			
		</div>
		
		<div style="margin-top: 15px;" class="col-xs-12 text-center padding00">
			<div class="col-xs-offset-8 col-xs-3 padding00">
				<span id="servletEngineHeading" class="opacity00" style="font-weight: bold;"> Servlet Engine </span>
			</div>
		</div>
		
	</div>
	
	<div class="col-xs-12 text-center">
		<span id="restart" class="btn btn-warning opacity00"
			style="margin-top: 20px">Restart</span>
	</div>

</body>
</html>