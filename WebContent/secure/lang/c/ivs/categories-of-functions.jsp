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
<script src="/secure/lang/c/js-min/cof.min.js"></script>

<title>Function categories</title>

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

pre {
	-moz-tab-size: 4;
	tab-size: 4;
	font-family: monospace;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.padding0 {
	padding: 0;
}

.center {
	margin-left: auto;
	margin-right: auto;
	display: block;
}

.btn-color {
	background-color: #90EE90;
	background: linear-gradient(0deg, #90ee90 30%, 4CAF50 70%);
	font-weight: bold;
	font-size: 13px;
}

.btn:hover {
	background-color: #4CAF50 !important;
	color: white;
}

.btn:active{
	background-color: #2E8B57 !important;
	color: white;
}

.box-shadow {
	box-shadow: 1px 2px 4px 0;
}

.output-console {
	margin: 0px !important;
}

div, span {
	position: relative;
}

.blinking-white {
	z-index: 10000000;
	animation-name: blink-background-white;
	animation-duration: 1.2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-background-white { 
	50% {
		background-color: white;
	}
}

.func-heading {
    color: yellow;
    font-weight: bold;
    z-index: 1000000;
}

.introjs-tooltip {
	min-width: 300px;
}

.disabled {
	pointer-events: none;
}

#description {
    border: 1px solid gray;
}

.introjs-fixParent {
	position: relative !important;
}

#description ul {
	font-family: monospace;
}

.output-console-body {
	padding: 10px;
	color: white;
	height: 150px;
}
</style>
</head>

<body>
	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Different
			Categories of Functions</h1>
	</div>
	<div class="col-xs-12"  style="margin-top: 50px;">
		<div class="function-box col-xs-3">
			<div id="functionBox" class="box-border opacity00" style="height: 375px;">
				<h4 class="text-center">Function Categories</h4>
				<div class="text-center">
					<span id="type1" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						No return type and No Arguments
					</span>
				</div>
				<div class="text-center">
					<span id="type2" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						No return type and With Arguments
					</span>
				</div>
				<div class="text-center">
					<span id="type3" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						With return type and No Arguments
					</span>
				</div>
				<div class="text-center">
					<span id="type4" class="btn text-center btn-color box-shadow fun-btn disabled" style="margin-top: 35px;" onclick="dynamicSteps()">
						With return type and With Arguments
					</span>
				</div>
			</div>
		</div>
		
		<div id="actionBox" class="col-xs-9 box-border opacity00" style="height: 455px;">
			<div class='col-xs-12' style="margin-top: 10px;">
				<div id="funcHeading"
					class="text-center opacity00 func-heading">No return type No Arguments</div>
			</div>
			<div id="descriptionDiv" class="col-xs-12 margin-top-20">
				<div class="col-xs-12">
					<div id="description" class="box-border opacity00" style="min-height: 90px;"></div>
				</div>
			</div>
			<div id="animationDiv" class="col-xs-12 animation-div" style="margin-top: 50px;">
				<div class="col-xs-6">
<pre id="funcType1" class="creampretab hide opacity00" id="code">#include&lt;stdio.h&gt;
<span id="funDec1">void getName(void);</span>
<div id="main1" style="display: inline-block;"><span>main() {</span>
	<span id="callingFun1">getName();</span>
	<span id="mainPrintf1">printf("Inside main()");</span>
<span id="endMain1">}</span></div>
<div id="funDef1" style="display: inline-block;">void getName() {
	<span id="userPrintf1">printf("Inside getName()");</span>
<span id="endFunction1">}</span></div>
</pre>
<pre id="funcType2" class="creampretab hide opacity00" id="code">#include&lt;stdio.h&gt;
<span id="funDec2">void getValue(int);</span>
<div id="main2" style="display: inline-block;">main() {
	<span id="callingFun2">getValue(123);</span>
	<span id="mainPrintf2">printf("inside main(), after getValue()");</span>
<span id="endMain2">}</span></div>
<div id="funDef2" style="display: inline-block;">void getValue(int b) {
	<span id="userPrintf2">printf("%d printed in getValue()\n", b);</span>
<span id="endFunction2">}</span></div>	
</pre>
<pre id="funcType3" class="creampretab hide opacity00" id="code">#include&lt;stdio.h&gt;
<span id="funDec3">int calculateSum();</span>
<div id="main3" style="display: inline-block;">main() {
	<span id="varInMain3">int addition;</span>
	<span id="callingFun3">addition = calculateSum();</span>
	<span id="mainPrintf3">printf("Sum = %d", addition);</span>
<span id="endMain3">}</span></div>
<div id="funDef3" style="display: inline-block;">int calculateSum() {
	<span id="varInit3">int a = 10, b = 20, sum;</span>
	<span id="varDec3">sum = a + b;</span>
	<span id="returnVal3">return sum;</span>
<span id="endFunction3">}</span></div>	
</pre>
<pre id="funcType4" class="creampretab hide opacity00" id="code">#include&lt;stdio.h&gt;
<span id="funDec4">int calculateSum(int, int);</span>
<div id="main4" style="display: inline-block;">main() {
	<span id="varInMain4">int a = 10, b = 20, addition;</span>
	<span id="callingFun4">addition = calculateSum(a, b);</span>
	<span id="mainPrintf4">printf("Sum = %d", addition);</span>
<span id="endMain4">}</span></div>
<div id="funDef4" style="display: inline-block;">int calculateSum(int x, int y) {
	<span id="varInit4">int sum;</span>
	<span id="varDec4">sum = x + y;</span>
	<span id="returnVal4">return sum;</span>
<span id="endFunction4">}</span></div>	
</pre>
				</div>
				<div class="col-xs-6">
					<div class="output-console padding0 opacity00" id="consoleId">
						<div class="output-console-title-bar"><span class="title">Output</span></div>
						<div id="outputPrint" class="output-console-body"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
		$(document).ready(function() {
			categoriesOfFunctions();
		});
	</script>
</body>
</html>
