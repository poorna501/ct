<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
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
<!-- <script src="/secure/lang/c/js-min/pi.min.js"></script> -->
<script src="/secure/lang/cpp/js/pointers-introduction1.js"></script>

<title>Pointers Introduction</title>
<style>

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
	tab-size: 4;
	font-family: monospace;
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

.border1 {
	border: 1px solid;
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

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-console {
	width: 250px;
	margin: auto;
}

.margin-top30 {
	margin-top: 30px;
}

.output-console-body {
	padding: 8px 20px;
	font-size: 12px;
}

.color-gray {
	color: rgb();
}

.blinking-border-background-blue {
	animation-name: blink-border-background-blue;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: normal ;
}

@keyframes blink-border-background-blue { 
	50% {
		border-color: blue;
		background: rgb(110, 110, 248);
	}
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

.ct-lime-color {
	color: green;
	font-weight: bold;
}

.ct-blue-color {
	font-weight: bold;
}

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
}


g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}

pi {
	color: fuchsia;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}


</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Pointers Introduction</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12">
		<div class='col-xs-offset-1 col-xs-10'>
			<div class='col-xs-12'>
				<div class='col-xs-5'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<span><in>#include</in> <ink>&lt;iostream&gt;</ink></span>
<span><go><b>using namespace</b></go> std;</span>
<g>int</g> <span>main() {</span>
 <span id='line1'><g>int</g> x = <g><span id='valueOfX'>3</span></g>;</span>
 <span id='line2'><g>int</g> y = x;</span>
 <span id='line3'><g>int</g> *z;</span>
 <span id='line4'>z = &x;</span>
 <span id='printf1'>cout << <ink>"The value of x = "</ink> << x;</span>
 <span id='printf2'>cout << <ink>"The address of x = "</ink> << &x;</span>
 <span id='printf3'>cout << <ink>"The value of y = "</ink> << y;</span>
 <span id='printf4'>cout << <ink>"The address of y = "</ink> << &y;</span>
 <span id='printf5'>cout << <ink>"The value of z = "</ink> << z;</span>
 <span id='printf6'>cout << <ink>"The address of z = "</ink> << &z;</span>
 <span id='printf7'>cout << <ink>"The value of *z = "</ink> << *z;</span>
<span>}</span>
</pre>
					</div>
				</div>
				<div class='col-xs-7'>
					<div class='col-xs-12 box-border' id='animationDiv'>
						<div class="col-xs-12 padding10">
							<div class='col-xs-6'>
								<div class='center width200'>
									<div class='col-xs-12 opacity00' id='xBox'>
										<div class='col-xs-4 Vertical-text-center'>x =</div>
										<div class="col-xs-6 text-center">
											<div><span class='color-gray'>2 bytes</span></div>
											<div class='border1'><span class='visibility-hidden ct-blue-color' id='xValue'>3</span></div>
											<div><span id='xAddress' class='ct-lime-color'>1111</span></div>
										</div>
									</div>
								</div>
							</div>
							<div class='col-xs-6'>
								<div class='center width200'>
									<div class='col-xs-12 opacity00' id='yBox'>
										<div class='col-xs-4 Vertical-text-center'>y =</div>
										<div class="col-xs-6 text-center">
											<div><span class='color-gray'>2 bytes</span></div>
											<div class='border1'><span class='visibility-hidden ct-blue-color' id='yValue'>3</span></div>
											<div><span id='yAddress' class='ct-lime-color'>1234</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 padding10">
							<div class='center width200'>
								<div class='col-xs-12 opacity00' id='zBox'>
									<div class='col-xs-4 Vertical-text-center'>z =</div>
									<div class="col-xs-6 text-center">
										<div><span class='color-gray'>2 bytes</span></div>
										<div class='border1'><span class='visibility-hidden ct-blue-color' id='zValue'>1111</span></div>
										<div><span id='zAddress' class='ct-lime-color'>2222</span></div>
									</div>
								</div>
							</div>
						</div>
						<svg class='svg-css'>
							<marker id="arrowEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
								<path d="M0,0 L5,2.5 L0,5 Z"/>
							</marker>
							<line class="svg-line" x1="47.7%" y1="73%" x2="47.7%" y2="73%"/>
						</svg>
					</div>
					<div class='col-xs-12 margin-top30'>
						<div class="output-console center" id='outputBox'>
							<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><span class='visibility-hidden'>The value of x = <span class='ct-code-b-yellow'>3</span></span>
<span class='visibility-hidden'>The address of x = <span class='ct-code-b-yellow'>1111</span></span>
<span class='visibility-hidden'>The value of y = <span class='ct-code-b-yellow'>3</span></span>
<span class='visibility-hidden'>The address of y = <span class='ct-code-b-yellow'>1234</span></span>
<span class='visibility-hidden'>The value of z = <span class='ct-code-b-yellow'>1111</span></span>
<span class='visibility-hidden'>The address of z = <span class='ct-code-b-yellow'>2222</span></span>
<span class='visibility-hidden'>The value of *z = <span class='ct-code-b-yellow'>3</span></span>
</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(document).ready(function() {
		pointersIntroductionReady();
	});
</script>
</body>
</html>