<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>function-sample-example</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/fc.min.js"></script>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}

#totalDiv {
	border: 1px solid gray;
	border-radius: 8px;
	height: 230px;
	padding: 10px;
}

.creampretab {
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 12px;
	line-height: 1.42857;
	margin-bottom: 0;
	padding: 7px;
	border: 1px solid gray;
	border-radius: 6px;
}

#outputDiv {
	margin-top: 18px;
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 148px;
	padding: 10px;
	white-space: inherit;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.errMsg {
	color: red;
	font-weight: bold;
	font-family: monospace;
}

.input-val {
	background-color: black;
    border: 1px solid black;
    text-align: center;
    width: 25px;
}

.val-color {
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.relative {
	position: relative;
}

.margin-left {
	margin-left: 412px;
}

.color-red {
	color: red;
}

</style>
</head>
<body>
<script type="text/javascript">

	$(document).ready(function() {
		functionCallReady();
	});

</script>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Function Call</h4>
	</div>
	<div class="col-xs-offset-1 col-xs-10">
		<div class="margin-top-20" id="totalDiv">
			<div id="typingDiv1">
				<ul>
					<li>
						Whenever a function call is made the control automatically transformed from the execution
						function to called function.
					</li>
					<li>
					 	The calling function must be end with a <b>semicolon (;)</b>.
					 </li>
				</ul>
			</div>
				<div class="col-xs-offset-4 col-xs-4 opacity00" id="syntax">
					<div class="text-center">
						<b class="color-red margin-top-10">Syntax of function call</b><br>
						<div>
							<pre><span id="funName">function_name </span><span id="parameters">(parameter_list);</span></pre>
						</div>
					</div>
				</div>
				<div class="col-xs-offset-4 col-xs-4 opacity00" id="example">
					<div class="text-center">
							<b class="color-red margin-top-10">Example of function call</b><br>
						<div>
						<pre><span id="nameFun">printName();</span>
<span id="addFun">int sum = addition(a, b);</span>
<span id="mulFun">int total = mul(a, b, c);</span></pre>
						</div>
					</div>
				</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-offset-1 col-xs-5 margin-top-20">
			<div id="leftDiv" class="opacity00">
			<pre class="creampretab" id="code">#include&lt;stdio.h&gt;
<span id="funDec">void printName();</span>
main () {
  <span id="callingFun">printName();</span>
  <span id="printf2">printf("inside main(), after printName()");</span>
}
<span id="funDef">void printName() {
  <span id="printf1">printf("CodeTantra");</span>
}</span>	
</pre>
			</div>
		</div>
		<div class="col-xs-5">
			<div id="outputDiv" class="opacity00">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body" id="outputBody"></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
</body>
</html>