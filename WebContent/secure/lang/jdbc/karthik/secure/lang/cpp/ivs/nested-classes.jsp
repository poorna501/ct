<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/custom-styles.css" />

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js/nested-classes.js"></script>
<style type="text/css">
.creamPreTab4, pre {
	tab-size: 2;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	font-family: monospace;
}

.padding00 {
	padding: 0px;
}

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	min-height: 530px; 
}

.marginTop10 {
	margin-top: 10px;
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 9999999;
	background-color: white;
	position: relative;
}
.displayNone {
	display: none;
}

.panelBodyHeight {
	min-height: 120px;
}

.output-console-body {
	font-size: 11px;
	height: 130px; 
	padding: 5px 20px;
	white-space: normal;
}

.output-console-title-bar {
	background-color: graytext;
}

.error {
	color: red;
}

.opacity55 {
	opacity: 0.55;
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

.margin-top-20 {
	margin-top: 20px;
}
.introjs-fixParent {
	position: relative !important;
}

.introjs-tooltip {
	min-width: 320px;
}

.displayNone {
	display: none;
}

#outerClass {
	background-color: #e5eecc;
}

#innerClass {
	background-color: #c9e0ff;
}

.panel-body {
	padding: 7px;
}

.padding10 {
	padding: 10px 10px;
}

#description {
	border: 2px solid gray;
	height: 90px;
	z-index: 99999999;
	background-color: white;
	border-radius: 4px;
	font-size: 12px;
}

.user-btn {
	background-color: green;
	border: 1px solid white;
	border-radius: 3px;
	color: grenn;
	font: 11px sans-serif;
	padding: 4px;
	cursor: pointer;
	margin-bottom: 2px;
	display:inline-block;
}

ul {
	margin-top: 10px;
}

</style>
<script type="text/javascript">

$(document).ready(function() {
	nestedClassesReadyFunction();
})

</script>

</head>
<body>
	<h3 class="col-xs-12 text-center ">
		<span class="label label-default ct-demo-heading" id="heading">Nested Class</span>
	</h3>
	<div class="col-xs-12 padding00" style="top: 15px;">
		<div id="description" class="col-xs-offset-2 col-xs-8"></div>
	</div>
<div class="col-xs-12 margin-top-20">
<div class="col-xs-5">
<div class="col-xs-12">
<pre id="preCode" class="col-xs-12 opacity00">
<div id="headers" class="opcity00"><span><in>#include</in> <ink>&lt;iostream&gt;</ink></span>
<span><go>using namespace</go> std;</span>

<div id="outerClass"><span><go>class</go> Outer {</span>
		<span id="iValue" class="opcity00 outerProperty"><g>int</g> i;</span><div id="innerClass" class="opcity00">	<span><go>public: </go></span>
		 		<span><span><go>class</go> Inner </span>{
			     <span><g>int</g> s;</span>
			    <span id="disp2"><span> <go>public:</go>
									<g>void</g> display2() </span>{
										<div id='printStmt' style="display:inline-block;"><span>cout << <pi>"CodeTantra inner class"</pi> << "\n";</span><br><span>cout << s << "\n";</span></div>
										<span id="error1"><span id="errOut" class="opacity00"><span id="comment" class="opacity00">//</span>cout << <pi>"i = "</pi> << i << "\n";</span> <r><b class="displayNone">//Error !! i is private to outer</b></r></span>
									}</span>
				};</span></div>
	<span id="voidSecond" class="oacity00 outerProperty"><span><go>public:</go></span>
				<span><g>void</g> display1() {</span>
						<span id="objInner2">Inner obj;</span>
						<span id="objDisp2">obj.display2();</span>
				}</span>
<span>};</span></div>

<div><span class="opacity00" id="mainMthd"><span><g>int</g> main() </span>{
  <span id="outerId"><span id="outerObj" class="opacity00">Outer out;</span>
  <span id="error2"><span id="errInner" class="opacity00">Inner obj;</span></span>
  <span id="otDisp1" class="opacity00">out.display1();</span>    
  <span id="twoObj" class="opacity00"><span>Outer :: Inner obj;</span>
  <span>obj.display2();</span></span>
<span>}</span></span></div></div>
</pre>
</div>
</div>
<div id="memoryBox" class="col-xs-6 border1px opacity00">
	<div class="col-xs-12 padding00 marginTop10">
		<div id="parentPanel" class="panel panel-primary col-xs-offset-1 col-xs-10 padding00  visibility-hidden ">
			<div class="panel-heading text-center"><b>out</b></div>
			<div class="panel-body panelBodyHeight">
				<div class="col-xs-12">
					<div class="col-xs-offset-0 col-xs-4">
						<div id="varI" class="panel panel-primary padding00">
							<div class="panel-heading text-center"><b>i</b></div>
							<div class="panel-body text-center">1</div>
						</div>
					</div>
					<div class="col-xs-8">
						<div id="panel1" class="panel panel-primary padding00 opacity00">
							<div class="panel-heading text-center"><b>display1()</b></div>
							<div class="panel-body text-center">
								<div id="childPanelOfOuter" class="panel panel-primary padding00 opacity00" style="height:160px;">
									<div class="panel-heading text-center"><b>obj</b></div>
									<div class="panel-body text-center">
										<div id="childPanel" class="panel col-xs-offset-1 col-xs-5 panel-primary padding00 opacity00">
											<div class="panel-heading text-center"><b>s</b></div>
											<div class="panel-body text-center">0</div>
										</div>
										<div id="subpanel" class="panel col-xs-offset-1 col-xs-5 panel-primary padding00 opacity00">
											<div class="panel-heading text-center padding10"><b>display2()</b></div>
											<div class="panel-body text-center"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12">
			<div id="outputBox" class="output-console center opacity00">
				<div class="output-console-title-bar"><span>Output</span></div>
				<div class="output-console-body"></div>
			</div>
		</div>		
	</div>
</div>
</div>
		<div class="col-xs-12 text-center margin-top-20">
			<div><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
		</div>
</body>
</html>