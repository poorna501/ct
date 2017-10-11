<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>

<script src="/secure/lang/c/jss/pointers-one-dimensional-array.js"></script>
<!-- <script src="/secure/lang/c/js-min/poda.min.js"></script> -->

<title>Insert title here</title>

<style>

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
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.border-height-css, .td-value-css {
	border: 1px solid;
	height: 22px;
}

.color-gray {
	color: gray;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.width200 {
	width: 200px;
}

.padding10 {
	padding: 10px;
}

div, span {
	position: relative;
}

pre > span {
	position: static;
}

.vertical-align-center {
	align-items: center;
	display: flex;
	font-family: monospace;
}

.table-css {
	text-align: center;
	width: 100%;
}

.output-console {
	margin: auto;
	width: 400px;
}

.margin-top30 {
	margin-top: 30px;
}

.output-console-body {
	font-size: 11px;
	height: 75px;
	padding: 5px 20px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 9999999;
}

.svg-line {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.output-scanf-line {
	font-weight: normal;
	outline: medium none;
}

.output-scanf-line:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.z-index9999999 {
	position: relative;
	z-index: 9999999;
}

</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Pointers with One Dimensional Array</h1>
	</div>
	<div class='buttons-div'>
		<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
		<button type="button" class="btn btn-warning visibility-hidden"
			id="restartBtn">Restart</button>
	</div>
	
	<div class="col-xs-12">
		<div class='col-xs-5'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
void main() {
	<span id='line1'>int *p, i;</span>
	<span id='pLine'>p = (int *)malloc(5 * sizeof(int));</span>
	<span id='printf1'>printf("Enter 5 values : \n");</span>
	<span id='forScanf'><span id='for1'>for (i = 0; i < 5; i++) {</span>
		<span id='scanf'>scanf("%d", (p + i));</span>
	}</span>
	<span id='printf2'>printf("The given array elements are : \n");</span>
	<span id='forPrintf'><span id='for2'>for (i = 0; i < 5; i++) {</span>
		<span id='printf3'>printf("%d ", *(p + i));</span>
	}</span>
}
</pre>
			</div>
		</div>
		<div class='col-xs-7'>
			<div class='col-xs-12 box-border'>
				<div class='col-xs-12 vertical-align-center' id='animationBox'>
					<div class='col-xs-5' id='variablesBox'>
						<div class='center width200'>
							<div class='col-xs-12 visibility-hidden' id='pBox'>
								<div class='col-xs-3 Vertical-text-center'>p</div>
								<div class="col-xs-7 text-center">
									<div><span class='color-gray'>2 bytes</span></div>
									<div class='border-height-css'><span id='pValue'></span></div>
									<div><span id='pAddress'>1111</span></div>
								</div>
							</div>
						</div>
						<!-- <div class='center width200'>
							<div class='col-xs-12 visibility-hidden' id='iBox'>
								<div class='col-xs-3 Vertical-text-center'>i</div>
								<div class="col-xs-7 text-center">
									<div><span class='color-gray'>2 bytes</span></div>
									<div class='border-height-css'><span id='iValue'></span></div>
									<div><span id='iAddress'>2222</span></div>
								</div>
							</div>
						</div> -->
					</div>
					<div class='col-xs-7 visibility-hidden' id='arrayBox'>
						<table class='table-css'>
							<tbody>
								<tr>
									<td class='td-value-css'><span class='arrayValue'></span></td>
									<td class='td-value-css'><span class='arrayValue'></span></td>
									<td class='td-value-css'><span class='arrayValue'></span></td>
									<td class='td-value-css'><span class='arrayValue'></span></td>
									<td class='td-value-css'><span class='arrayValue'></span></td>
								</tr>
								<tr>
									<td><span id='arrayAddress'>1220</span></td>
									<td><span>1222</span></td>
									<td><span>1224</span></td>
									<td><span>1226</span></td>
									<td><span>1228</span></td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<svg class='svg-css' id='svg'>
						<marker id="arrowEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
							<path d="M0,0 L5,2.5 L0,5 Z"/>
						</marker>
									
						<line class="svg-line" x1="27.8%" y1="50%" x2="29%" y2="48%"/>
					</svg>
				</div>
			</div>
				<div class="col-xs-12 margin-top30">
				<div id="outputBox" class="output-console center">
					<div class="output-console-title-bar">
						<span>Output</span>
					</div>
<div class="output-console-body"><span class="visibility-hidden">Enter 5 values : </span>
<span class='output-scanf-line' id='outputScanfLine'></span>
<span class="visibility-hidden">The given array elements are : </span>
<span id='outputPrintfLine'></span>
</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	$(document).ready(function() {
		pointersOneDimensionalArrayReady();
	});
</script>

</body>
</html>