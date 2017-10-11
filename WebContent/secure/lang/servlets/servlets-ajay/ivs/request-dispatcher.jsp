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
<script src="/secure/lang/servlets/servlets-ajay/js/request-dispatcher.js" type="text/javascript"></script>
<title>Request Dispatcher</title>
<style type="text/css">

.box-border {
	border: 1px solid;
	border-radius: 8px;
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
}


.line {
	marker-end: url("#arrow");
	stroke: gray;
	stroke-width: 2;
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

.blinking-yellow {
	animation-name: blink-border-background-yellow ;
	animation-duration: 2s ;
	animation-iteration-count: 2s;
	animation-direction: alternate ;
}

@keyframes blink-border-background-yellow { 
	50% {
		border-color: yellow;
		background: yellow;
	}
}

.svg-text {
	font-size: 11px;
	font-weight: bold;
}

.rhombus {
    height: 70px;
    width: 70px;
    margin: 30px 0; 
    transform : rotate(45deg) skew(15deg, 15deg);
	display: inline-block;
	border: 2px solid gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(255, 192, 192) 12%, rgba(255, 192, 201, 0.66) 78%);
	box-shadow: 0 2px 2px 0 gray;
}

.rmbsText {
	display: inline-block;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	line-height: 70px;
	transform: rotate(-45deg);
}

.parallelogram {
	height: 56px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	transform: skew(-36deg);
	display: inline-block;
	border: 2px solid gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 141, 255, 0.85) 12%, rgba(0, 115, 255, 0.21) 78%);
	box-shadow: 0 2px 2px 0 gray;
	font-size: 10px;
	font-weight: bold;
}

.transform-text {
    display: inline-block;
    transform: skew(28deg);
}

.btn-primary {
    background: rgba(0, 0, 0, 0) linear-gradient(0deg, #2a70ad 30%, #59b2ff 70%) repeat scroll 0 0;
    font-size: 10px;
}

.col-xs-offset-3 {
    margin-left: 22%;
}

.col-xs-1 {
    width: 6.333%;
}

</style>
</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	requestDispatcher();
});
	
</script>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">Request Dispatcher</h1>
</div>

<div id="mainDiv" class="col-xs-12 padding00">
	<svg class="svg-css">
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		</marker>
		
		<marker id="myMarker2" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: green;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		</marker>
		
		<marker id="myMarker3" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #c0c0c0;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		</marker>
	    
    	<text id="text1" class="svg-text" fill="brown" x="51.5%" y="55%">forward()</text>
    	<text id="text2" class="svg-text" fill="brown" y="55%" x="41.5%">include()</text>
			
		<!-- <line id="arrow1" class="line" x1="25%" x2="42.8%" y1="22.3%" y2="22.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow1" class="line" x1="25%" x2="25%" y1="22.3%" y2="22.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow2" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="49.5%" y1="32.5%" x2="48%" x1="48%"/> -->
		<line id="arrow2" class="line" style="stroke: #c0c0c0;" stroke-dasharray="9, 3" y2="32.5%" y1="32.5%" x2="48.5%" x1="48.5%"/>
		
		<!-- <line id="arrow3" class="line" style="stroke: #556b2f;" y2="57.5%" y1="57.5%" x2="46.2%" x1="39%"/> -->
		<line id="arrow3" class="line" style="stroke: #556b2f;" y2="57.5%" y1="57.5%" x2="47%" x1="47%"/>
		
		<!-- <line id="arrow4" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="81%" y1="57.3%" x2="39%" x1="39%" /> -->
		<line id="arrow4" class="line" style="stroke: #556b2f;" y2="57.3%" y1="57.3%" x2="39%" x1="39%" />
		
		<!-- <line id="arrow5" class="line" style="stroke: #556b2f;" y2="57.5%" y1="57.5%" x2="57%" x1="49.8%"/> -->
		<line id="arrow5" class="line" style="stroke: #556b2f;" y2="57.5%" y1="57.5%" x2="49.8%" x1="49.8%"/>
		
		<!-- <line id="arrow6" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="81%" y1="57.3%" x2="57%" x1="57%"/> -->
		<line id="arrow6" class="line" style="stroke: #556b2f;" y2="57.3%" y1="57.3%" x2="57%" x1="57%"/>
		
		<!-- <line id="arrow7" class="line" x1="53%" x2="16%" y1="90.5%" y2="90.5%" style="stroke: #556b2f;"/> -->
		<line id="arrow7" class="line" x1="53%" x2="53%" y1="90.5%" y2="90.5%" style="stroke: green;"/>
		
		<!-- <line id="arrow8" class="line" x1="16%" x2="16%" y1="90.7%" y2="69.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow8" class="line" x1="16%" x2="16%" y1="90.7%" y2="90.7%" style="stroke: green;"/>
		
		<!-- <line id="arrow9" class="line" x1="16%" x2="33.2%" y1="90.5%" y2="90.5%" style="stroke: #556b2f;"/> -->
		<line id="arrow9" class="line" x1="33.2%" x2="33.2%" y1="90.5%" y2="90.5%" style="stroke: green;"/>
		
		<!-- <line id="arrow10" class="line" x1="16%" x2="16%" y1="90.7%" y2="69.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow10" class="line" x1="16%" x2="16%" y1="90.7%" y2="90.7%" style="stroke: green;"/>
		
		<!-- <line id="arrow1" class="line" x1="25%" x2="42.8%" y1="22.3%" y2="22.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
		<line id="arrow11" class="line" x1="25%" x2="25%" y1="22.3%" y2="22.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow2" class="line" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)" y2="49.5%" y1="32.5%" x2="48%" x1="48%"/> -->
		<line id="arrow12" class="line" style="stroke: #c0c0c0;" stroke-dasharray="9, 3" y2="32.5%" y1="32.5%" x2="48.5%" x1="48.5%"/>
			
	</svg>

	<div id="monitor" class="col-xs-2 col-xs-offset-1 padding00 opacity00">
		<div id="pageWindow" class="col-xs-12" style="border: 6px solid; border-radius: 8px; height: 190px; margin-top: 40px;">
			<div id="loginPage" class="col-xs-12 padding00">
				<div id="loginHeading" class="col-xs-12 padding00 text-center">
    				<span style="font-weight: bold; font-family: sans-serif; color: teal;">Login Form</span>
 		 		</div>
		
				<div class="col-xs-12 padding00" style="margin-top: 25px;">
					<div class="col-xs-5 padding00"> User Name: </div>

					<div class="col-xs-7 padding00">
						<input type='text' id='userName' spellcheck='false'
							class='given-text form-control medium-text-field' maxlength="15"
							style="width: 100%; font-size: 12px;" />
					</div>
				</div>
				
				<div class="col-xs-12 padding00" style="margin-top: 10px;">
					<div class="col-xs-5 padding00"> Password: </div>
							
					<div class="col-xs-7 padding00">
						<input type='password' id='password' spellcheck='false'
							class='given-text form-control medium-text-field' maxlength="15"
							style="width: 100%; font-size: 12px;" />
					</div>
				</div>
				
				<div class="col-xs-12 padding00"> 
  					<span id="loginError" class="opacity00" style="font-size: 10px; color: red;">Invalid User Name or Password</span>
				</div>
				
				<div id="btnAppend" style="float: right; margin-top: 3px" class="form-group">
					<a id="loginBtn" class="btn btn-primary" onclick="verifyUser()">Sign In</a>
				</div>
			</div>
			
			<div id="welcomePage" class="col-xs-12 padding00 hide" style="height: 100%;">
				<img src="/secure/lang/servlets/servlets-ajay/images/webpage.png" style="width: 100%; height: 100%;">
			</div>
		</div>
		
		<div class="col-xs-12" style="border: 5px solid; border-radius: 8px; margin-top: 5px;"> </div>

		<div class="col-xs-12 padding00">
			<div id="object2" class="col-xs-3 col-xs-offset-4 text-center padding00 opacity00"
				style="border: 1px solid; border-radius: 50%; font-weight: bold; font-size: 10px; 
				background-color: rosybrown; margin-top: 60px; height: 25px; line-height: 25px;">
				response</div>
		</div>
	</div>

	<div class="col-xs-offset-1 col-xs-7 padding00" style="margin-top: 40px;">
		<div class="col-xs-12 text-center padding00" style="margin-top: 10px;">
			<div id="loginServlet" class="col-xs-2 col-xs-offset-2 box-border padding00 box-shadow opacity00"
				style="border-radius: 50%; background-color: wheat; font-size: 10px; font-weight: bold; height: 65px; 
				line-height: 65px;">
				<span id="loginServletName">Login Servlet</span>
			</div>
		</div>
						
		<div class="col-xs-12 padding00" style="margin-top: 65px;">
			<div id="object3" style="border: 1px solid; border-radius: 50%; font-weight: bold; 
				height: 25px; line-height: 25px; font-size: 10px; background-color: rosybrown;"
				class=" col-xs-1 col-xs-offset-1 text-center padding00 opacity00">response</div>

			<div style="background-color: plum; font-size: 10px; font-weight: bold; line-height: 50px; height: 50px; border-radius: 50%; 
			border: 1px solid;" class="col-xs-1 col-xs-offset-1 padding00 box-shadow text-center opacity00"
			id="requestDispatcher"><span id="rdName">RD</span></div>

			<div id="object1" class="col-xs-1 col-xs-offset-1 opacity00 padding00"
					style="border: 1px solid; border-radius: 50%; background-color: #4169e1; 
					font-size: 10px; font-weight: bold; height: 25px; line-height: 25px;">response</div>
		</div>
		
		<div class="col-xs-12 text-center padding00" style="margin-top: 60px;">
			<div id="loginForm" class=" col-xs-2 text-center parallelogram opacity00" style="line-height: 56px;">
				<span class="transform-text">Login Form</span>
			</div>
			
			<div id="welcomeServlet" class="col-xs-2 col-xs-offset-2 box-border padding00 box-shadow opacity00"
				style="border-radius: 50%; background-color: silver; font-size: 10px; font-weight: bold; height: 65px; 
				line-height: 65px;">
				Welcome Servlet
			</div>
		</div>
	</div>
</div>

<div class="col-xs-12 text-center">
	<span id="restart" class="btn btn-warning opacity00"
		style="margin-top: 20px">Restart</span>
</div>

</body>
</html>