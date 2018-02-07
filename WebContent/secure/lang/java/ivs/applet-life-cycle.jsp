<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Life Cycle of an Applet</title>


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
<script type="text/javascript" src="/secure/lang/java/js/applet-life-cycle.js"></script>

<style type="text/css">
.introjs-tooltip {
	min-width: 350px;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}

div, span {
	position: relative;
}

.padding00 {
	padding: 0;
}

.padding50 {
	padding: 50px;
}

.position {
	position: relative;
	display: inline-block;
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
	stroke:	green;
	stroke-width: 2;	
}

.popover {
	min-width: 100px !important;
	z-index: 10000000 !important;
	min-height: 20px !important;
}

.popover-content {
	font-size: 14px;
}

.margin-top5 {
	margin-top: 5px; 
}

.margin-top80 {
	margin-top: 80px; 
}

.circle {
	padding: 12px;
	border-radius: 50px;
	box-shadow: 2px 2px gray;
}

.blue-background {
	background-color: blue;
}

.green-background {
	background-color: green;
}

.orange-background {
	background-color: orange;
}

.red-background {
	background-color: red;
}

.stateText {
	color: white;
	font-weight: bold;
}

y {
	color: yellow;
	font-weight: bold;
}

</style>

</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			//$(".opacity00").removeClass("opacity00");
			appletLifeCycleIntro();			
		});
	</script>

	<div class="col-xs-12">
		<div class="headingSection">
			<div class="ct-box-main">
				 <div class="text-center">
					<h1 class="label ct-demo-heading text-center" id="headingSection">Applet Life Cycle</h1>
				</div> 
			</div>
		</div>
		<div class="col-xs-12">
			<div class='col-xs-12 text-center margin-top5'>
				<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
			</div>
		</div>
		
		<div class="col-xs-12">
			<div class="col-xs-12" id="animationDiv">
				<div class="col-xs-6 col-xs-offset-3 box-border margin-top5 padding50 position opacity00" id="mainDiv">
					<div class="col-xs-12">
						<div class="box-border circle position opacity00 blue-background" id="newState">
							<span class="stateText" id="bornText">Initial</span>
						</div>
						<div class="box-border circle position opacity00 green-background" id="runningState" style="margin-left: 95px;">
							<span class="stateText" id="runningText">Running</span>
						</div>
					</div>
					<div class="col-xs-12 margin-top80">
						<div class="box-border circle position opacity00 orange-background" id="stopState" style="margin-left: 208px;">
							<span class="stateText" id="stopText">Stopped</span>
						</div>
						<div class="box-border circle position pull-right opacity00 red-background" id="destroyState">
							<span class="stateText" id="destroyText">Destroyed</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>