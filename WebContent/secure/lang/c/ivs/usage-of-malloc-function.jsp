<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/secure/lang/c/js-min/uomf.min.js"></script>

<title>Insert title here</title>

<style>

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
}

.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 8px;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.introjs-tooltip {
	min-width: 280px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;	
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right;
	padding: 0;
}

.Vertical-variable-text-center  {
	height: 62px;
	line-height: 74px;
	text-align: right; 
}

.small-box {
	border: 1px solid gray;
	padding: 1px;
	text-align: center;
	width: 55px;
	visibility: ;
}

.address-box, .element-box {
	padding: 4px;
	text-align: center;
	width: 55px;
	font-size: 13px;
}

.element-box {
	color: lightslategrey;
}

.ct-color-maroon {
	color: maroon;
}

.ct-color-springgreen {
	color: springgreen;
}

.syntax-class {
	/* font-size: 16px;
	color: seagreen;
	font-family: monospace;
	background-color: wheat; */
	background: black;
	border-radius: 9px;
	color: white;
	padding: 4px;
	font-family: monospace;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 10px;
	margin-bottom: 14px;
	height: 50px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.svg-line-array {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2;
}

.user-btn {
	background-color: green;
}

.ct-color-lime {
	color: lime;
}

.css-circle {
	border-radius: 9px;
	border : 1px solid;
	background-color: white;
	padding: 2px;
	z-index: 9999999;
	background-color: white;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background:  turquoise;
	}
}

div, span {
	position: relative;
}

.display-inline {
	display: inline-block;
}

.value-css {
	color: blue;
	font-family: monospace;
}

.address-css {
	color: green;
	font-family: monospace;
}

.ct-code-b-green {
	color: green;
	font-weight: bold;
}

</style>

</head>
<body>

<div class="main-div col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Usage of malloc( )</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<ul>
			<li class="opacity00" id="list1">The <span class='ct-code-b-green'>malloc( )</span> function is used for memory allocation 
				at the time of execution.</li>
			<li class="opacity00" id="list2">The general format of <span class='ct-code-b-green'>malloc( )</span> is 
			<span class="syntax-class">(void*)malloc(number of bytes);</span></li>
		</ul>
	</div>
	<div class="col-xs-12 margin-top-5">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7"  id="firstDivExample">
				<div class="col-xs-5 border opacity00" id="exampleOne">
<pre class="creamPreTab4 opacity00" id="preCode">
<span id="firstExLine1"><span id="dataTypeFloat1">float</span> *p;</span>
<div id="firstExLine2" class="display-inline">p = <div id="floatSpan" class="display-inline">(<span id="dataTypeFloat2">float*</span>)<div id="mallocSpan1" class="display-inline">malloc(<span id="sizeofSpan">sizeof(float)</span>);</div></div></div>
<span id="firstExLine3">*p = <span class="" id="pValue">20</span>;</span>
<span id="firstExLine4">printf("The value of *p = %d\n", *p);</span>
</pre>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00" id="totalfirstExDiv">
					<div class="col-xs-12 border" id="firstExDiv">
						<div class="col-xs-6 text-center">
							<div class="col-xs-12 opacity00" id="pBox">
								<div class="col-xs-4 Vertical-text-center">int p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox1"><span class="opacity00 value-css" id="cValue">1054</span></div>
									<div><span id="cBoxAddress" class="address-css">1024</span></div>
								</div>
							</div>
						</div>
						
						<div class="col-xs-6">
							<div class="col-xs-12 opacity00" id="newBox">
								<div class="col-xs-4 Vertical-text-center"></div>
								<div class="col-xs-6 text-center">
									<div style="color: lightslategrey;">4 bytes</div>
									<div class=" memory-box" id="memoryBox2"><span class="opacity00 value-css" id="Value">20</span></div>
									<div><span id="newAddress" class="address-css">1054</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-7 col-xs-offset-3">
							<div id="consoleId" class="center"  style="margin-top: 8%">
								<div class="output-console-title-bar">
									<span class="title"><b>Console</b></span>
								</div>
								<div class="output-console-body" id="consoleBodyDiv">
									<span class='visibility-hidden' id="printText">The value of *p = 20</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7">
				<div class="col-xs-4 border opacity00" id="exampleTwo">
<pre class="creamPreTab4 opacity00" id="preCodeTwo">
<span id="secondExLine1"><span id="dataTypeInt1">int</span> *k;</span>
<div id="secondExLine2" class="display-inline">k = (<span id="dataTypeInt2">int*</span>)<div id="mallocSpan2" class="display-inline">malloc(5*(<span id="sizeofSpan2">sizeof(int)</span>);</div></div>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1 border opacity00" id="secondExDiv">
					<div class="col-xs-12">
						<div class="col-xs-5 margin-top-1">
							<div class="col-xs-12 opacity00" id="kBox">
								<div class="col-xs-4 Vertical-text-center">int k</div>
								<div class="col-xs-8 text-center">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" style="border: 1px solid gray;" id="memoryBox3">
										<span class="opacity00 value-css" id="kValue" style="font-size: 13px;">1924</span>
									</div>
									<div class="address-css" style="font-size: 13px; margin-top: 3px;">1234</div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00" id="arrayDiv">
							<div class="col-xs-12">
							<div class="col-xs-1 Vertical-variable-text-center"></div>
							<div class="col-xs-10">
								<table align="center" id="memoryBox4" style="margin-left: 0%;">
									<tr class="" id="elementId">
										<td class="element-box"><span class="" id="element1">0</span></td>
										<td class="element-box"><span class="" id="element2">1</span></td>
										<td class="element-box"><span class="" id="element3">2</span></td>
										<td class="element-box"><span class="" id="element4">3</span></td>
										<td class="element-box"><span class="" id="element5">4</span></td>
									</tr>
									<tr class="" id="smallBox">
										<td class="small-box"><span class="opacity00 value-css" id="valuesId1">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId2">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId3">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId4">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId5">0</span></td>
									</tr>
									<tr class="" id="addressId">
										<td class="address-box address-css"><span id="firstAddressId">1924</span></td>
										<td class="address-box address-css">1926</td>
										<td class="address-box address-css">1928</td>
										<td class="address-box address-css">1930</td>
										<td class="address-box address-css">1932</td>
									</tr>
								</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-5" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>

</body>

<script type="text/javascript">
$(document).ready(function() {
	usageOfmallocFunctionReady();
});

</script>

</html>