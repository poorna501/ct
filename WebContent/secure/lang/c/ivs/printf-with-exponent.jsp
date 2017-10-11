<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/pwe.min.js"></script>

<title>printf.jsp</title>
<style type="text/css">
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0 5px !important;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
}

#animationDiv {
    min-height: 100px;
    background-color: #f5f5f0;
}

#printfDefinition {
	min-height: 65px;
	margin-bottom: 12px;
}

[contenteditable="true"] {
    outline: medium none;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 90px;
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-bottom: 0;
}

.panel-primary > .panel-heading {
    color: #000;
    border-color: lightgray;
    background-color: lightgray;
}

.number-div > .number-div {
	color: white;
	font-width: bold;
	background-color: #337ab7;
}

.number-div > .number-body {
	color: black;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
}
 
 .output {
    color: white;
    font-family: monospace;
}

.margin-top {
    margin-top: 12px;
}

#appendDiv3, #appendDiv4 {
    margin: 0 0 0 -14px;
}

.address-text {
	margin-top: -13px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }
 
 .blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: lightblue;
	}
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.ct-code-b-white {
	font-weight: bold;
	font-family: monospace;
	color: white;
}

.ct-code-b-gray {
	font-weight: bold;
	font-family: monospace;
	background-color: #A9A9A9;
	border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.circle-css {
	border: 1px solid #ff66b3;
	border-radius: 10%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

.bottom-border {
    border-bottom: 1px solid green;
    margin: 0.6px;
}

.opacity00 {
	opacity: 0;
}

.padding00 {
	padding: 0px;
}

#example {
    border-radius: 4px;
    padding: 2px;
     white-space: nowrap;
}

#number4 {
	background: yellow;
}

.introjs-fixParent {
	position: relative !important;
}

</style>

</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		introFunction()
	});
</script>



<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Additional Features of printf()</h1>
			</div>
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden"
					id="restartBtn">Restart</button>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-6 col-xs-offset-3 box-border margin-top" id="printfDefinition">
				<ul><li id="text1" class="opacity00">The <span class="ct-code-b-green">printf()</span> function allows for printing a
							<span class="ct-code-b-green">float number</span> using an exponent format character
							 <span class="ct-code-b-green">%e</span>. We can also provide the 
							 <span class="ct-code-b-green">field width</span> while using the
							  <span class="ct-code-b-green">%e</span> format character.</li>
						<li id="text2" class="opacity00">For example,  we are trying to 
						print <span class="ct-code-b-green">69.3486</span>, using a field width
						<span class="ct-code-b-green">12.3</span> specified by 
						<span class="ct-code-b-green">%12.3e</span>, we get the output as:<span class="ct-code-b-white">
						<span id="example" style="background: black">_ _ _6.9349E+1</span></span>
						<a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-3">
					<div id="codeDiv" class="margin-top">
						<pre class='creamPreTab4' id ="program">
<span id='VariableDeclararion'>float <span id="value1">a</span> = <span id='number1'>98.7654f</span>;</span>
<span id = "sopLine1">printf("\n<span id = "persentageD1" >%<span id = 'number1'><span id="seven1">10</span>.2</span>e</span>",<span id = "aValue1">a</span>);</span></pre>
					</div>
				</div>
				<div class="col-xs-4 box-border padding00 opacity00" id="animationDiv">
					<div class="col-xs-12 ct-code-b-gray ct-code-b-white text-center" id="stepsTitle">Steps for Calculating an Exponent Number</div>
					<div class="col-xs-12 padding00" id="exponentSteps"></div>					
				</div>
				<div class="col-xs-4">
					<div class="panel-primary output-div" id="outputDiv">
						<div class="panel-heading text-center" id="outputDiv">Output</div>
						<div class="panel panel-body">
							<div class="output col-xs-12">
								<div id="appendDiv1" class="visibility-hidden">_ _ _ 9.88E+1</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</body>
</html>