<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/animate.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/faoc.min.js" type="text/javascript"></script>

<title>Insert title here</title>
<style type="text/css">

.box-border {
    border: 1px solid gray;
    border-radius: 8px;
}

.box-height {
	height: 500px;
}

.algorithm-height {
	height: 195px;
}

.parallelogram {
	height: 56px;
	width: 164px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	-o-transform: skew(-36deg);
	border: 2px solid gray;
}

.oval {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	-webkit-border-radius: 100px/35px;
	border-radius: 100px/35px;
	height: 56px;
	width: 168px;
}

.rectangle {
	border: 2px solid gray;
	height: 56px;
	width: 168px;
}

.center {
	margin-left: auto;
	margin-right: auto;
}

.transform-text {
    display: inline-block;
    transform: skew(28deg);
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
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.int-num {
	border-width: 0;
	background-color: black;
}

.user-btn {
	background-color: green;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

</style>
</head>
<body>
<script type="text/javascript">

	$(document).ready(function() {
		flowchartAreaOfCircleReady();
	});

</script>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">Area of a circle</h1>
</div>

<div id="description" class="col-xs-6 col-xs-offset-3 box-border opacity00" style="margin-top: 20px; height: 90px;">
	<ul style="line-height: 2; margin-top: 12px;">
    	<li id="desList1" class="opacity00"></li>
    	<li id="desList2" class="opacity00"></li>
  	</ul>
</div>

<div class="col-xs-12">
	<div class="col-xs-12 text-center" style="z-index: 1000000; color: black; margin-top: 10px;">
		<div id="heading1" class="col-xs-2 col-xs-offset-2 opacity00">
			<h4>Algorithm</h4>
		</div>
		<div id="heading2" class="col-xs-3 col-xs-offset-3 opacity00">
			<h4>Flowchart</h4>
		</div>
	</div>

	<div id="algorithmBox" class="col-xs-offset-1 col-xs-4 box-border algorithm-height opacity00">
		<ol id="algorithmPoints"
			style="margin-top: 15px; font-size: 15px; line-height: 32px;">
			<li id="point1" class="opacity00"></li>
			<li id="point2" class="opacity00"></li>
			<li id="point3" class="opacity00"></li>
			<li id="point4" class="opacity00"></li>
			<li id="point5" class="opacity00"></li>
		</ol>
		
		<div class="col-xs-12" style="margin-top: 50px;">
  <div class="output-console center opacity00" id="consoleId">
						<div id="outputDiv" class="output-console-title-bar">
								<span class="title">Output</span>
						</div>
								
<div class="output-console-body" style="color:white; height: 120px;">
<span id="runEditor1"></span>
<span id="runEditor2"></span>
</div>
				</div>
  </div>
	</div>

	<div id="flowChartBox"
		class="col-xs-offset-1 col-xs-5 box-border box-height opacity00">
		<div id="step1" class="center text-center oval opacity00"
			style="margin-top: 10px; line-height: 56px;">Start</div>
			
		<div id="step2" class="center text-center parallelogram opacity00"
			style="margin-top: 50px; line-height: 56px;">
			<span class="transform-text">Read Radius</span>
		</div>
		
		<div id="step3" class="center text-center rectangle opacity00"
			style="margin-top: 50px; line-height: 56px;">Area = 3.14 * r *
			r</div>
			
		<div id="step4" class="center text-center parallelogram opacity00"
			style="margin-top: 50px; line-height: 56px;">
			<span class="transform-text">Print Area</span>
		</div>
		
		<div id="step5" class="center text-center oval opacity00"
			style="margin-top: 50px; line-height: 56px;">Stop</div>
	</div>
</div>
<div class="col-xs-12 text-center" style="margin-top: 20px;"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
</body>
</html>