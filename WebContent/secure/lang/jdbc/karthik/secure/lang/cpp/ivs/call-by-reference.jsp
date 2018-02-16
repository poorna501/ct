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
<script src="/secure/lang/cpp/js/call-by-reference.js"></script>
<!-- <script src="/secure/lang/c/js-min/cbv.min.js"></script> -->
<title>Call By Reference</title>

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
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	font-famlity: monospace;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.width200 {
	width: 190px;
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

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.color-gray {
	color: gray;
}

.output-console {
	margin: auto;
	width: 350px;
}

.margin-top30 {
	margin-top: 30px;
}

.output-console-body {
	padding: 5px 20px;
	white-space: initial;
}

.method-box-css {
	border: 1px solid;
	border-radius: 8px;
	padding: 0px;
	opacity: 0;
}

.method-box-text-css {
	background: lightblue none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	padding: 5px;
	text-align: center;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.ct-lime-color {
	color: lime;
	font-weight: bold;
}

.ct-blue-color {
	font-weight: bold;
}

.visibility-hidden {
	visibility: hidden;
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
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Call By Reference</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>

	<div class="col-xs-12">
		<div class='col-xs-12'>
			<div class='col-xs-12'>
				<div class='col-xs-7'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<in>#include</in> <ink>&lt;iostream&gt;</ink>
<go><span><b>using namespace</b></go> std;</span>
<span id='swapDeclareLine'><g>int</g> <span>swap(<g>int</g> &, <g>int</g> &)</span>;</span>
<span id='mainMethodBlock'><b class="ct-blue-color">main()</b> {
	<span id='aLine'><g>int</g> a = <ink><span id='valueOfA'>5</span></ink>;</span>
	<span id='bLine'><g>int</g> b = <ink><span id='valueOfB'>10</span></ink>;</span>
	<span id='printBeforeSwapInMain'>cout << <ink>"Before swapping in main : a = "</ink> << a << "<g>\t</g>" << <ink>"b = "</ink> << b << "\n";</span>
	<span id='swapLine'>swap(a, b);</span>
	<span id='printAfterSwapInMain'>cout << <ink>"After swapping in main : a = "</ink> << a << "<g>\t</g>" << <ink>"b = "</ink> << b << "\n";</span>
}</span>
<span id='swapMethodBlock'><g>int</g> <span>swap(<g>int</g> &x, <g>int</g> &y)</span> {
	<span id='tDeclareLine'><g>int</g> t;</span>
	<span id='tAssignLine'>t = x;</span>
	<span id='xLine'>x = y;</span>
	<span id='yLine'>y = t;</span>
	<span id='printAfterSwapInSwap'>cout << <ink>"After swapping in swap : x = "</ink> << x << "<g>\t</g>" << <ink>"y = "</ink> << y << "\n";</span>
<span id='swapMethodCloseBrace'>}</span></span>
</pre>
					</div>
				</div>
				<div class='col-xs-5'>
					<div class='col-xs-12 box-border'  id='animationDiv'>
						<div class='col-xs-12 padding10'>
							<div class='col-xs-12 method-box-css' id='mainMethodBox'>
								<div class='method-box-text-css'>main()</div>
								<div class="col-xs-12 padding10">
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 opacity00' id='aBox'>
												<div class='col-xs-4 Vertical-text-center'>a</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='aValue' class='ct-blue-color'></span></div>
													<div><span id='aAddress' class="ct-lime-color">1111</span></div>
												</div>
											</div>
										</div>
									</div>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 opacity00' id='bBox'>
												<div class='col-xs-4 Vertical-text-center'>b</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='bValue' class='ct-blue-color'></span></div>
													<div><span id='bAddress' class="ct-lime-color">1234</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='col-xs-12 padding10'>
							<div class='col-xs-12 method-box-css' id='swapMethodBox'>
								<div class='method-box-text-css'>swap()</div>
								<div class="col-xs-12 padding10" id='swapAnimationDiv'>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='xBox'>
												<div class='col-xs-4 Vertical-text-center'>x</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='xValue' class='ct-blue-color'></span></div>
													<div><span id='xAddress' class="ct-lime-color">2222</span></div>
												</div>
											</div>
										</div>
									</div>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='yBox'>
												<div class='col-xs-4 Vertical-text-center'>y</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='yValue' class='ct-blue-color'></span></div>
													<div><span id='yAddress' class="ct-lime-color">2345</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-12 padding10">
									<div class='col-xs-12'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='tBox'>
												<div class='col-xs-4 Vertical-text-center'>t</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='tValue' class='ct-blue-color'></span></div>
													<div><span id='tAddress' class='ct-lime-color'>3333</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-xs-12 margin-top30">
						<div id="outputBox" class="output-console center">
							<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><div class="visibility-hidden">Before swapping in main : a = <span class='ct-blue-color'>5</span>   
		b = <span class='ct-blue-color'>10</span></div>
<div class="visibility-hidden">After swapping in swap : x = <span class='ct-blue-color'>10</span>   y = <span class='ct-blue-color'>5</span></div>
<div class="visibility-hidden">After swapping in main : a = <span class='ct-blue-color'>5</span>   b = <span class='ct-blue-color'>10</span></div>
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
		callByValueReady();
	});
</script>

</body>
</html>