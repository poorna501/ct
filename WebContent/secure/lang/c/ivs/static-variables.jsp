<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/sv.min.js" type="text/javascript"></script>

<title>Static Variables</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.center {
	margin-left: auto !important;
	margin-right: auto !important;
	display: block;
}

.output-console-body {
	height: 80px;
	white-space: initial;
	padding: 15px;
}

.creampretab4 {
	font-size: 13px;
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	line-height: 1.75;
}

#outputDiv {
	margin-top: 45px;
}

.introjs-tooltip {
	min-width: 300px;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: orange;
		background: orange;
	}
}

.padding0 {
	padding: 0;
}
</style>
</head>
<body>

	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Static Variables</h1>
	</div>
	<div id="mainDiv" class="col-xs-12" style="margin-top: 45px;">
		<div class="col-xs-12">
			<div class="col-xs-4 col-xs-offset-1" id="codeBox">
				<pre id="codeAnimation" class="creampretab4 box-border code-div opacity00">
	#include&lt;stdio.h&gt;
	<span id="functionDec">void display();</span>
	<span id="mainFunction"><span id="startMain">main() {</span>
		<span id="functionCall1">display();</span>
		<span id="functionCall2">display();</span>
		<span id="functionCall3">display();</span>
	<span id="endMain">}</span></span>
	<div id="functionDef" style="display:inline-block; position:relative;">void display() {
		<div id="varDec" style="display:inline-block; position:relative;">int i = 1;</div>
		<span id="printf">printf("i = %d\n", <span id="iInc">i++</span>);</span>
	<span id="endFunc">}</span>
</pre>
			</div>
			<div id="animationBox" class="col-xs-4 col-xs-offset-2 box-border opacity00" style="height: 255px;">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); margin-top: 55px;">
					<div id="boxHeading" class="col-xs-6 col-xs-offset-3 opacity00">In display()</div>
				</div>
				<div class="col-xs-12">
					<div id="functionBox" style="margin-top: 10px;" class="box-border col-xs-6 col-xs-offset-3  text-center opacity00">
						<div id="localVal" class="col-xs-8 col-xs-offset-2">
							<div><b style="color: maroon;">i</b></div>
							<div style="line-height: 50px; height: 50px;" class="box-border">
								<span id="lVal" class="opacity00" style="display:inline-block; position:relative;">1</span>
							</div>
							<div id="address">1012</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="margin-top: 40px;" class="col-xs-12">
			<div id="consoleId" class="padding0 opacity00 col-xs-4 col-xs-offset-4">
				<div class="output-console-title-bar"><span class="title">Output</span></div>
				<div style="color: white;" class="output-console-body">
					<div id="runEditor1" class="console-print"></div>
					<div id="runEditor2" class="console-print"></div>
					<div id="runEditor3" class="console-print"></div>
					<div id="runEditor4" class="console-print"></div>
					<div id="runEditor5"></div>
					<div id="runEditor6"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
	
	<script type="text/javascript">
		$(document).ready(function() {
			staticVariablesReady();
		});
	</script>
</body>
</html>