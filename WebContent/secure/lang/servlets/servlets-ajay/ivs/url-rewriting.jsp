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
<script src="/js/alertify.js" type="text/javascript" charset="utf-8"></script>
<script src="/secure/lang/servlets/servlets-ajay/js/url-rewriting.js" type="text/javascript"></script>
<title>URL Rewriting</title>
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

.blinking-pink {
	animation-name: blink-border-background-pink;
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

</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		urlRewriting();
	});
</script>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">URL Rewriting</h1>
</div>

<svg class="svg-css">

	<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
    </marker>
    
	<!-- <line class="line" id="arrow1" x1="25.5%" x2="50%" y1="30.3%" y2="30.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
	<line class="line" id="arrow1" x1="25.5%" x2="25.5%" y1="30.3%" y2="30.3%" style="stroke: #556b2f;"/>
	<!-- <line class="line" id="arrow2" x1="50%" x2="25.5%" y1="48.3%" y2="48.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;)"/> -->
	<line class="line" id="arrow2" x1="50%" x2="50%" y1="48.3%" y2="48.3%" style="stroke: #556b2f;"/>
	
</svg>

<div id="mainDiv" class="col-xs-12" style="margin-top: 40px;">

	<div class="col-xs-2 col-xs-offset-1 padding00" style="margin-top: 25px;">
		<div id="monitor1" class="col-xs-12 padding00 opacity00">
			<div id="pageWindow1" class="col-xs-12" style="border: 6px solid; border-radius: 8px; height: 190px; font-size: 13px;">
				<div id="loginPage1" class="col-xs-12 padding00">
					<div id="loginHeading1" class="col-xs-12 padding00 text-center">
	    				<span style="font-weight: bold; font-family: sans-serif; color: teal;"> Login Form </span>
	 		 		</div>
			
					<div class="col-xs-12 padding00" style="margin-top: 25px;">
						<div class="col-xs-5 padding00"> User Name: </div>
	
						<div class="col-xs-7 padding00">
							<input id='userName1' type='text' spellcheck='false'
								class='given-text form-control medium-text-field input1' maxlength="15"
								style="width: 100%; font-size: 12px;" />
						</div>
					</div>
					
					<div class="col-xs-12 padding00" style="margin-top: 10px;">
						<div class="col-xs-5 padding00"> Password: </div>
								
						<div class="col-xs-7 padding00">
							<input id='password1' type='password' spellcheck='false'
								class='given-text form-control medium-text-field input1' maxlength="15"
								style="width: 100%; font-size: 12px;" />
						</div>
					</div>
								
					<div id="btnAppend1" style="float: right; margin-top: 10px;" class="form-group">
						<a id="loginBtn1" class="btn btn-primary" onclick="verifyUser1()">Sign In</a>
					</div>
					
				</div>
			</div>
			
			<div class="col-xs-12" style="border: 5px solid; border-radius: 8px; margin-top: 5px;"> </div>
			
		</div>
		
		<div id="monitor2" class="col-xs-12 padding00 opacity00" style="margin-top: 25px;">
			<div id="pageWindow2" class="col-xs-12" style="border: 6px solid; border-radius: 8px; height: 190px; font-size: 13px;">
				<div id="loginPage2" class="col-xs-12 padding00">
					<div id="loginHeading2" class="col-xs-12 padding00 text-center">
	    				<span style="font-weight: bold; font-family: sans-serif; color: teal;"> Login Form </span>
	 		 		</div>
			
					<div class="col-xs-12 padding00" style="margin-top: 25px;">
						<div class="col-xs-5 padding00"> User Name: </div>
	
						<div class="col-xs-7 padding00">
							<input id='userName2' type='text' spellcheck='false'
								class='given-text form-control medium-text-field input2' maxlength="15"
								style="width: 100%; font-size: 12px;" />
						</div>
					</div>
					
					<div class="col-xs-12 padding00" style="margin-top: 10px;">
						<div class="col-xs-5 padding00"> Password: </div>
								
						<div class="col-xs-7 padding00">
							<input id='password2' type='password' spellcheck='false'
								class='given-text form-control medium-text-field input2' maxlength="15"
								style="width: 100%; font-size: 12px;" />
						</div>
					</div>
								
					<div id="btnAppend2" style="float: right; margin-top: 10px;" class="form-group">
						<a id="loginBtn2" class="btn btn-primary" onclick="verifyUser2()">Sign In</a>
					</div>
				</div>
			</div>
			
			<div class="col-xs-12" style="border: 5px solid; border-radius: 8px; margin-top: 5px;"> </div>
			
		</div>
		
	</div>
	
	<div class="col-xs-1 col-xs-offset-1">
		<div id="cookie1" class="col-xs-12 padding00 box-border box-shadow text-center opacity00" style="height: 45px; line-height: 45px; 
			margin-top: 50px; background-color: wheat;"> Cookie </div>
			
		<div id="cookie2" class="col-xs-12 padding00 box-border box-shadow text-center opacity00" style="height: 45px; line-height: 45px; 
			margin-top: 50px; background-color: wheat;"> Cookie </div>
	</div>
		
	<div id="serverBox" class="col-xs-3 col-xs-offset-1 padding00 box-shadow opacity00" style="border: 2px solid gray; border-radius: 8px; 
			height: 450px; background-color: thistle; margin-top: 15px;">
	
		<div id="serverHeading" class="col-xs-12 padding00 text-center">
			<div class="col-xs-3 col-xs-offset-4 padding00 text-center" style="margin-top: 10px; font-weight: bold;"> Server </div>
		</div>
			
		<div id="webContainer1" class="col-xs-12 padding00">
			<div class="col-xs-3 col-xs-offset-4 padding00 box-border box-shadow text-center web-container opacity00"
			style="height: 120px; margin-top: 30px; background-color: #8fbc8f;"> </div>
		</div>
		
		<div class="col-xs-12 padding00">
			<div class="col-xs-3 col-xs-offset-4 padding00 text-center web-container opacity00"
				style="margin-top: 10px; font-weight: bold; font-size: 10px;"> Web Container </div>
		</div>
		
		<div id="webContainer2" class="col-xs-12 padding00">
			<div class="col-xs-3 col-xs-offset-4 padding00 opacity00 box-border box-shadow text-center web-container2"
					style="height: 120px; margin-top: 65px; background-color: #8fbc8f;"> </div>
		</div>
		
		<div class="col-xs-12 padding00">
			<div class="col-xs-3 col-xs-offset-4 padding00 opacity00 text-center web-container2"
				style="margin-top: 10px; font-weight: bold; font-size: 10px;"> Web Container </div>
		</div>
				
	</div>
	
</div>

<div class="col-xs-12 text-center">
	<span id="restart" class="btn btn-warning opacity00"
		style="margin-top: 20px">Restart</span>
</div>
	
</body>
</html>