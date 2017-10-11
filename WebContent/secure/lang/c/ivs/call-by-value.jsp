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
<script src="/secure/lang/c/js-min/cbv.min.js"></script>
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

</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Call By Value</h1>
	</div>
	<div class='buttons-div'>
		<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
		<button type="button" class="btn btn-warning visibility-hidden"
			id="restartBtn">Restart</button>
	</div>

	<div class="col-xs-12">
		<div class='col-xs-12'>
			<div class='col-xs-12'>
				<div class='col-xs-6'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<span id='swapDeclareLine'>void swap(int , int );</span>
<span id='mainMethodBlock'>main()
{
	<span id='aLine'>int a = <span id='valueOfA'>5</span>;</span>
	<span id='bLine'>int b = <span id='valueOfB'>10</span>;</span>
	<span id='printBeforeSwapInMain'>printf("Before swapping in main : a = %d \t b = %d\n", a, b);</span>
	<span id='swapLine'>swap(a, b);</span>
	<span id='printAfterSwapInMain'>printf("After swapping in main : a = %d \t b = %d\n", a, b);</span>
}</span>
<span id='swapMethodBlock'>void swap(int x, int y)
{
	<span id='tDeclareLine'>int t;</span>
	<span id='tAssignLine'>t = x;</span>
	<span id='xLine'>x = y;</span>
	<span id='yLine'>y = t;</span>
	<span id='printAfterSwapInSwap'>printf("After swapping in swap : x = %d \t y = %d\n", x, y);</span>
<span id='swapMethodCloseBrace'>}</span></span>
</pre>
					</div>
				</div>
				<div class='col-xs-6'>
					<div class='col-xs-12 box-border'  id='animationDiv'>
						<div class='col-xs-12 padding10'>
							<div class='col-xs-12 method-box-css' id='mainMethodBox'>
								<div class='method-box-text-css'>main()</div>
								<div class="col-xs-12 padding10">
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='aBox'>
												<div class='col-xs-4 Vertical-text-center'>a</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='aValue'></span></div>
													<div><span id='aAddress'>1111</span></div>
												</div>
											</div>
										</div>
									</div>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='bBox'>
												<div class='col-xs-4 Vertical-text-center'>b</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='bValue'></span></div>
													<div><span id='bAddress'>1234</span></div>
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
													<div class='border-height-css'><span id='xValue'></span></div>
													<div><span id='xAddress'>2222</span></div>
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
													<div class='border-height-css'><span id='yValue'></span></div>
													<div><span id='yAddress'>2345</span></div>
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
													<div class='border-height-css'><span id='tValue'></span></div>
													<div><span id='tAddress'>3333</span></div>
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
							<div class="output-console-title-bar">
								<span>Output</span>
							</div>
<div class="output-console-body"><span class="visibility-hidden">Before swapping in main : a = 5   b = 10</span>
<span class="visibility-hidden">After swapping in swap : x = 10   y = 5</span>
<span class="visibility-hidden">After swapping in main : a = 5   b = 10</span>
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