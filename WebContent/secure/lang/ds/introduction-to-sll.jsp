<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/ds/js/introduction-to-sll.js"></script>  -->
<script src="/secure/lang/ds/js-min/idtsll.min.js"></script>

<title>Single linked list</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0px !important;
}

.introjs-duplicate-skipbutton {
	background-color: orange;
	margin: 0 5px !important;
}


.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.div-border {
	display: inline-block;
	padding: 0;
	text-align: center;
	/* width: 55px; */
	margin: 0;
	border: 2px solid gray;
	min-height: 24px;
}

.first-border {
	display: inline-block;
	padding: 0;
	text-align: center;
	border: 2px solid gray;
	border-radius: 5px;
	min-height: 24px;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.creamPreTab, .creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	font-size: 12px;
	-moz-tab-size: 4;
	white-space: pre;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.creamPreTab4 {
	tab-size: 3;
	font-size: 11px;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

[contenteditable="true"] {
	outline: medium none;
}

.padding00 {
	padding: 1px;
}

.margin-top {
	margin-top: 20px;
}

.padding12 {
	padding: 12px;
}

.padding6 {
	padding: 6px;
}

.position {
	display: inline-block;
	position: relative;
}

.left-radius {
	border-bottom-left-radius: 6px;
	border-top-left-radius: 6px;
}

.right-radius {
	border-bottom-right-radius: 6px;
	border-top-right-radius: 6px;
	border-left: none;
}
.no-border {
	/* display: inline-block; */
	padding: 0;
	text-align: center;
	height: 21px;
	margin: 0;
	border: 2px solid transprent;
}

.ct-code-b-red, .ct-code-b-green, .ct-code-b-blue, .ct-code-b-brown  {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-code-b-blue {
	color: blue;
} 

.ct-code-b-brown {
	color: brown;
} 

.ct-code-b-green {
	color: green;
}

.green-border {
	border-color: green;
}

.blue-border {
	border-color: blue;
}

.margin-left {
    margin-left: 65px;
}

.margin-left1 {
    margin-left: 6.5%;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
 	/* margin-top: 20px;  */
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	/* display: none; */
	marker-end: url("#arrowEnd"); 
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

input {
/* 	background: indianred; */
	background: black;
    border: medium;
}

</style>

</head>

<script type="text/javascript">
$(document).ready(function() {
	appendNode();
	introFunction()
});
</script>

<body>
	<div class="col-xs-12 padding00">
		<div class="ct-box-main">
			 <div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">Introduction to Singly Linked List</h1>
			</div> 
		</div>
		<div class='buttons-div'>
			<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
		</div>
		
		<div class="col-xs-12 padding00 opacity00" id="sslAnimationDiv">
			<div class="col-xs-6 padding00">
				<div class="col-xs-12 padding00">
				<pre class="creamPreTab" id="sllProgram">
﻿#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
<span id="structType"><span class="ct-code-b-blue">struct</span> listNode {
	<span class="ct-code-b-blue">int</span> data;
	<span class="ct-code-b-blue">struct</span> listNode *next;
 };</span>
<span id="typeDef"><span class="ct-code-b-blue">typedef</span> struct listNode *node;</span>
<div id="createNode"><span class="ct-code-b-blue">node</span> createNode() {
    <span id="creTemp"><span class="ct-code-b-blue">node</span> temp;</span>
    <span id="credataInfoNode">temp = (<span class="ct-code-b-blue">node</span>) <span id="mallocMemoryAllocation">malloc(sizeof(struct listNode))</span>;</span>
    <span id="tempNext">temp -> next = NULL;</span>
    <span id="returnTemp">return temp;</span>
}</div><div id="mainMethod"><span class="ct-code-b-blue">void</span> main() {
	<span id="xValDec"><span class="ct-code-b-blue">int</span> x;</span>
	<span id="creFirst"><span class="ct-code-b-blue">node</span> first = NULL;</span>
	<span id="callCreateFun1">first = createNode();</span>
	<span id="printf1">printf("Enter element of first node : ");</span>
	<span id="scanf1">scanf("%d", &x);</span>
	<span id="firstData1">first -> data = x;</span>
	<span id="callCreateFun2">first -> next = createNode();</span>
	<span id="printf2">printf("Enter element of second node : ");</span>
	<span id="scanf2">scanf("%d", &x);</span>
	<span id="firstData2">first -> next -> data = x;</span>
	<span id="printf3">printf("<span id="listIs">The list is :</span> <span id="Percen1">%d</span> <span id="pLin1">--></span> <span id="Percen2">%d</span> <span id="pLin2">--></span> <span id="Null">NULL</span>\n", <span id="fData1">first -> data</span>, <span id="fData2">first -> next -> data</span>);</span>
}</div></pre>
				</div>
			</div>
			
			<div class="col-xs-6">
				<div class="col-xs-12">
					<div class="col-xs-12 padding00">
						<div class="col-xs-12 padding00 box-border" id="animationDiv">
							<div class="col-xs-12 text-center">
								<div class="margin-top opacity00" id="declareXVal"><b>x = <span class="box-border padding6"><span class="opacity00" id="xVal">12</span></span></b></div>
							</div>
							
							<div class="col-xs-12 margin-top">
								<div class="col-xs-2 col-xs-offset-1 padding00 opacity00" id="firstNode">
									<div class="col-xs-12 padding00">
										<div class="col-xs-10 no-border ct-code-b-green right-radius">first</div>
									</div>
									<div id="first" class=" col-xs-offset-1 col-xs-10 first-border text-center padding00">
										<span id="firstDiv" class="ct-code-b-green">NULL</span>
									</div>
								</div>
								<div class="col-xs-9 padding00"><div class="col-xs-12 padding00" id="dynamicNodesDiv"></div></div>
							</div>
							
							<div class="col-xs-12 margin-top padding00">
								<div class="col-xs-12 padding00">
									<div class="col-xs-9 col-xs-offset-3 padding00">
										<div class="col-xs-12 padding00">
											<div class="col-xs-4 col-xs-offset-1 padding00 opacity00"  id="temp1">
												<div class=" col-xs-offset-1 col-xs-10 first-border green-border text-center padding00">
													<span class="ct-code-b-green opacity00" id="tempDiv1">5124</span>
												</div>
												<div class="col-xs-12 text-center padding00">
													<div class="col-xs-12 no-border ct-code-b-green right-radius">temp</div>
												</div>
											</div>
											
											<div class="col-xs-3 col-xs-offset-1 padding00 opacity00" id="temp2">
												<div class=" col-xs-offset-1 col-xs-10 first-border green-border text-center padding00">
													<span class="ct-code-b-green opacity00" id="tempDiv2">5224</span>
												</div>
												<div class="col-xs-12 text-center padding00">
													<div class="col-xs-12 no-border ct-code-b-green right-radius">temp</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-12 margin-top" id="outputDiv">
							<div id="consoleId" class="center">
								<div class="output-console-title-bar">
									<span class="title"><b>Console</b></span>
								</div>
								<div class="output-console-body" id="consoleBodyDiv"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>