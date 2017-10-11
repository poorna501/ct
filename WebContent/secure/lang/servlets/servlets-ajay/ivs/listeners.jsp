<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
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
<script src="/secure/lang/servlets/js/listeners.js" type="text/javascript"></script>
<title>Listener Types</title>
<style type="text/css">

#mainDiv {
	height: 500px;
}

.box-border {
	border: 1px solid;
	border-radius: 8px;
	height: 50px;
	line-height: 50px;
	font-weight: bold;
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
	stroke-width: 3;
}

.padding00 {
	padding: 0;
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

.svg-text {
	font-size: 12px;
	font-weight: bold;
}

.popover-gray-out {
	line-height: 1.1;
	background-color: gray;
	font-size: 11px;
	min-height: 0px;
}

</style>
</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	listeners();
});

</script>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">Listeners</h1>
</div>

<div id="mainDiv" class="col-xs-12" style="margin-top: 40px;">

	<svg class="svg-css">
	
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		</marker>
			    
    	<text id="text1" class="svg-text" fill="#008080" x="25.2%" y="24%" style="">Servlet Request Listener</text>
    	<text id="text2" class="svg-text" fill="#008080" x="25.2%" y="58%" style="">Servlet Request Attribute Listener</text>
    	<text id="text3" class="svg-text" fill="#008080" x="49.2%" y="24%" style="">Servlet Context Listener</text>
    	<text id="text4" class="svg-text" fill="#008080" x="49.2%" y="58%" style="">Servlet Context Attribute Listener</text>
    	<text id="text5" class="svg-text" fill="#008080" x="73.2%" y="24%" style="">HTTP Session Listener</text>
    	<text id="text6" class="svg-text" fill="#008080" x="73.2%" y="45%" style="">HTTP Session Attribute Listener</text>
    	<text id="text7" class="svg-text" fill="#008080" x="73.2%" y="66%" style="">HTTP Session Binding Listener</text>
    	<text id="text8" class="svg-text" fill="#008080" x="73.2%" y="87%" style="">HTTP Session Activation Listener</text>
			
		<!-- <line id="arrow1" class="line" x1="21.8%" x2="21.8%" y1="10.3%" y2="57.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow1" class="line" x1="21.8%" x2="21.8%" y1="10.3%" y2="10.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow2" class="line" x1="21.8%" x2="24.8%" y1="23.3%" y2="23.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow2" class="line" x1="21.8%" x2="21.8%" y1="23.3%" y2="23.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow3" class="line" x1="21.8%" x2="24.8%" y1="57.3%" y2="57.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow3" class="line" x1="21.8%" x2="21.8%" y1="57.3%" y2="57.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow4" class="line" x1="45.8%" x2="45.8%" y1="10.3%" y2="57.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow4" class="line" x1="45.8%" x2="45.8%" y1="10.3%" y2="10.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow5" class="line" x1="48.8%" x2="45.8%" y1="23.3%" y2="23.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow5" class="line" x1="45.8%" x2="45.8%" y1="23.3%" y2="23.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow6" class="line" x1="48.8%" x2="45.8%" y1="57.3%" y2="57.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow6" class="line" x1="45.8%" x2="45.8%" y1="57.3%" y2="57.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow7" class="line" x1="69.8%" x2="69.8%" y1="10.3%" y2="86.5%" style="stroke: #556b2f;"/> -->
		<line id="arrow7" class="line" x1="69.8%" x2="69.8%" y1="10.3%" y2="10.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow8" class="line" x1="69.8%" x2="72.8%" y1="23.3%" y2="23.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow8" class="line" x1="69.8%" x2="69.8%" y1="23.3%" y2="23.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow9" class="line" x1="69.8%" x2="72.8%" y1="40.3%" y2="40.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow9" class="line" x1="69.8%" x2="69.8%" y1="44.3%" y2="44.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow10" class="line" x1="69.8%" x2="72.8%" y1="57.3%" y2="57.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow10" class="line" x1="69.8%" x2="69.8%" y1="65.3%" y2="65.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow11" class="line" x1="69.8%" x2="72.8%" y1="74.3%" y2="74.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow11" class="line" x1="69.8%" x2="69.8%" y1="86.3%" y2="86.3%" style="stroke: #556b2f;"/>
		
	</svg>
		
	`<div id="requestListener" class="col-xs-2 col-xs-offset-2 box-border text-center box-shadow opacity00" style="background-color: plum;">
		Request Listeners
	</div>
	
	<div id="contextListener" class="col-xs-2 col-xs-offset-1 box-border text-center box-shadow opacity00" style="background-color: tan;">
		Context Listeners
	</div>
	
	<div id="sessionListener" class="col-xs-2 col-xs-offset-1 box-border text-center box-shadow opacity00" style="background-color: #8fbc8f;">
		<span id="sessionListenerName">Session Listeners</span>
	</div>
	
</div>

<div class="col-xs-12 text-center">
	<span id="restart" class="btn btn-warning opacity00"
		style="margin-top: 20px">Restart</span>
</div>

</body>
</html>