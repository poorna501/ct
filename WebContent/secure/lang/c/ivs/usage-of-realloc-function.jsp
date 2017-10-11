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
<script src='/secure/lang/c/js-min/uorf.min.js'></script>

<title>Insert title here</title>

<style type="text/css">

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

.margin-top-4 {
	margin-top: 4%;
}

.introjs-tooltip {
	min-width: 250px;
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
	padding: 1px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
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
	/* width: 55px; */
	visibility: ;
}

.address-box, .element-box {
	padding: 4px;
	text-align: center;
	width: 55px;
	font-size: 12px;
}

.border-invisible {
	border: 1px;
	visibility: ;
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

.ct-color-lime {
	color: lime;
}

.ct-color-teal {
	color: teal;
}

.box {
	border: 1px solid;
	height: 20px;
	width: 20px;
}

.syntax-class {
	font-size: 15px;
	color: seagreen;
	font-family: monospace;
	/* background-color: wheat; */
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

div, span {
	position: relative;
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

.user-btn {
	background-color: green;
}

.animated-border {
	border-color: rgba(255, 255, 255, 0);
    animation: 2s ease 0s normal none 1 running animated-border;
}

@keyframes animated-border {  
  100% { border-color: gray; }
}

.display-inline {
	display: inline-block;
}

.ct-code-b-green {
	color: green;
	font-weight: bold;
}

/* .syntax-class {
	background: black;
	border-radius: 9px;
	color: white;
	padding: 4px;
	font-family: monospace;
} */

.address-css {
	color: green;
	font-family: monospace;
}

.value-css {
	color: blue;
	font-family: monospace;
}

</style>

</head>

<body>

<div class="main-div col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Usage of realloc( )</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">The <span class='ct-code-b-green'>realloc( )</span> is capable of increasing or decreasing the 
			space that has been created by <span class='ct-code-b-green'>malloc( )</span>, <span class='ct-code-b-green'>calloc( )</span>.</li>
		</ul>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 col-xs-offset-3 text-center margin-top-2 border opacity00" id="syntax">
			<div class="syntax-class display-inline">(<span id="voidType">void*</span>)<div id="realloc" class="display-inline">realloc(<span id="pointer">pointer variable</span>, <span id="size">number of bytes</span>);</div></div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-11">
			<div class="col-xs-12 margin-top-7"  id="firstDivExample">
				<div class="col-xs-4 border opacity00" id="exampleOne">
<pre class="creamPreTab4 opacity00" id="preCode">
<span id="firstExLine1">int *p;</span>
<span id="firstExLine2">P = (int*)malloc(3*sizeof(int));</span>
<span id="firstExLine3">P = (int*)realloc(p, 12);</span>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1 opacity00" id="totalfirstExDiv">
					<div class="col-xs-12 border" id="firstExDiv">
						<div class="col-xs-5 text-center">
							<div class="col-xs-12 margin-top-4 opacity00" id="pBox">
								<div class="col-xs-4 Vertical-text-center">int p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox1">
										<span class="opacity00 value-css" id="pValue" style="font-size: 13px">1924</span>
									</div>
									<div><span id="pBoxAddress" class="address-css">1024</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-7" id="arrayDiv">
							<div class="col-xs-12">
							<div class="col-xs-1 Vertical-variable-text-center"></div>
							<div class="col-xs-10 opacity00" id="firstMemoryAllocation">
								<table align="center">
									<tr class="" id="elementId">
										<td class="element-box"><span class="" id="element1">0</span></td>
										<td class="element-box"><span class="" id="element2">1</span></td>
										<td class="element-box"><span class="" id="element3">2</span></td>
										<td class="element-box"><span class="opacity00" id="element4">3</span></td>
										<td class="element-box"><span class="opacity00" id="element5">4</span></td>
										<td class="element-box"><span class="opacity00" id="element6">5</span></td>
									</tr>
									<tr class="" id="trBox1">
										<td class="small-box"><span class="opacity00 value-css" id="valuesId1">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId2">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId3">0</span></td>
										<td class="small-box border-invisible" id="smallBox4"><span class="opacity00 value-css" id="valuesId4">0</span></td>
										<td class="small-box border-invisible" id="smallBox5"><span class="opacity00 value-css" id="valuesId5">0</span></td>
										<td class="small-box border-invisible" id="smallBox6"><span class="opacity00 value-css" id="valuesId6">0</span></td>
									</tr>
									<tr class="" id="addressId">
										<td class="address-box address-css"><span id="firstAddressId">1924</span></td>
										<td class="address-box address-css">1926</td>
										<td class="address-box address-css">1928</td>
										<td class="address-box address-css opacity00" id="addressBox4">1930</td>
										<td class="address-box address-css opacity00" id="addressBox5">1932</td>
										<td class="address-box address-css opacity00" id="addressBox6">1934</td>
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
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-11">
			<div class="col-xs-12 margin-top-4"  id="secondDivExample">
				<div class="col-xs-4 border opacity00" id="exampleTwo">
<pre class="creamPreTab4 opacity00" id="preCodeTwo">
<span id="secondExLine1">int *p;</span>
<span id="secondExLine2">P = (int*)malloc(7*sizeof(int));</span>
<span id="secondExLine3">P = (int*)realloc(p, 10);</span>
</pre>
				</div>
				<div class="col-xs-7 col-xs-offset-1 opacity00" id="totalSecondExDiv">
					<div class="col-xs-12 border" id="secondExDiv">
						<div class="col-xs-5 text-center">
							<div class="col-xs-12 margin-top-4 opacity00" id="pBoxSecond">
								<div class="col-xs-4 Vertical-text-center">int p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox2">
										<span class="opacity00 value-css" id="pValueSecond" style="font-size: 13px">2012</span>
									</div>
									<div><span id="pBoxSecondAddress" class="address-css">1024</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00" id="arraySecondDiv">
							<div class="col-xs-12">
							<div class="col-xs-1 Vertical-variable-text-center"></div>
							<div class="col-xs-10" id="">
								<table align="center">
									<tr class="" id="elementId">
										<td class="element-box"><span class="" id="SecondExElement1">0</span></td>
										<td class="element-box"><span class="" id="SecondExElement2">1</span></td>
										<td class="element-box"><span class="" id="SecondExElement3">2</span></td>
										<td class="element-box"><span class="" id="SecondExElement4">3</span></td>
										<td class="element-box"><span class="" id="SecondExElement5">4</span></td>
										<td class="element-box"><span class="" id="SecondExElement6">5</span></td>
										<td class="element-box"><span class="" id="SecondExElement7">6</span></td>
									</tr>
									<tr class="" id="trBox2">
										<td class="small-box"><span class="opacity00 value-css" id="valuesId1">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId2">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId3">0</span></td>
										<td class="small-box"><span class="opacity00 value-css" id="valuesId4">0</span></td>
										<td class="small-box"><span class="opacity00" id="valuesId5">0</span></td>
										<td class="small-box" id="secondExBox6"><span class="opacity00 value-css" id="valuesId5">0</span></td>
										<td class="small-box" id="secondExBox7"><span class="opacity00 value-css" id="valuesId5">0</span></td>
									</tr>
									<tr class="" id="addressId">
										<td class="address-box address-css"><span id="secondAddressId">2012</span></td>
										<td class="address-box address-css">2014</td>
										<td class="address-box address-css">2016</td>
										<td class="address-box address-css">2018</td>
										<td class="address-box address-css">2020</td>
										<td class="address-box address-css" id="secondExAddressBox6">2022</td>
										<td class="address-box address-css" id="secondExAddressBox7">2024</td>
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
		<div class="text-center margin-top-4" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>

<script type="text/javascript">
$(document).ready(function() {
	usageOfreallocFunctionReady();
});

</script>
</html>
