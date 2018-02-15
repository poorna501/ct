<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Final Keyword in JAVA</title>

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css"/>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet"href="/css/font-awesome-animation.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/secure/lang/java/js/final-keyword.js"></script>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.margin-top25 {
	margin-top: 25px;
}

.opacity00 {
	opacity: 0;
}

.padding00 {
	padding: 0px;
}

.user-btn, .userbtn {
	margin: 1px !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}

div, span {
	position: relative;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.position {
	position: relative;
	display: inline-block;
}

.creamPreTab {
	tab-size: 3;
	margin: 2px;
	padding: 12px;
	font-size: 12px;
	-moz-tab-size: 2;
	white-space: pre;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.darkPink {
	color: #99004d;
}

.green {
	color: green;
}

.blue {
	color: blue;
}

.lightBrown {
	color: #734d26;
}

.lightBlue {
	color: #1a8cff;
}

.fontWeight {
	font-weight: bold;
}

.panel-primary > .panel-heading {
	background-color: lightgray;
	border-color: lightgray;
	color: #000;
}

.panel-heading {
	padding: 2px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.panel-body {
	min-height: 175px;
	padding: 12px;
}

.panel {
	border-radius: 0px;
	background-color: #000;
	border: 1px solid transparent;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
}

.padding10 {
	padding: 10px;
}

y {
	color: yellow;
	font-weight: bold;
}

.blinking {
	/* animation-name: blinker;
	animation-duration: 1s;
	animation-iteration-count: infinity; */
	animation: blinker 1s linear infinite;
 }

@keyframes blinker {
	50% {
		background:  #66a3ff;
	}
}

.animated {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.output {
	color: white;
	font-weight: bold;
}

.lightgreen {
	background-color: #3fd112;
}

</style>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			//$(".opacity00").removeClass("opacity00");
			finalKeywordAnimation();
		});
	</script>

	<div class="col-xs-12">
		<div class="headingSection">
			<div class="ct-box-main">
				 <div class="text-center">
					<h1 class="label ct-demo-heading text-center" id="headingSection">Final Keyword</h1>
				</div> 
			</div>
		</div>
		<div class="col-xs=12 margin-top15">
			<div class="col-xs-6 col-xs-offset-3 box-border opacity00" id="FinalTextDiv">
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 padding10">
						The <span class="green fontWeight">final</span> keyword is used in different contexts. 
						First of all, <span class="green fontWeight">final</span> is a non-access modifier applicable only to a <span class="green fontWeight">variable</span>,
						a <span  class="green fontWeight">method</span> or a <span class="green fontWeight">class</span>.
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top25">
			<div class="col-xs-5 padding00">
				<div class="col-xs-12 padding00 opacity00" id="finalKeywordCodeDiv">
					<pre class="creamPreTab opacity00" id ="preFinalCode">
<span class="fontWeight darkPink">public class</span> FinalKeyword {
	<span class="fontWeight darkPink">public static void</span> main(String[] <span class="fontWeight lightBrown">args</span>) {
		<span id="subInit"><span id="appendFinalKey"></span>String <span class="fontWeight lightBrown" id="strSubject">subject</span> = "<span id="javaText">JAVA</span>";</span>
		<span id="marksInit"><span class="fontWeight darkPink">int</span> <span class="fontWeight lightBrown" id="intmarks">marks</span> = <span id="eighty">80</span>;</span>
		<span id="printBeforeChange">System.<span class="fontWeight blue">out</span>.println("<span id="subjBfre">subject = </span>" + <span class="fontWeight lightBrown" id="subjVarBfre">subject</span> + "<span id="markBfre">, marks = </span>" + <span id="markVarBfre" class="fontWeight lightBrown">marks</span>);</span>
		<span id="reInitOfSub"><b><span class="fontWeight lightBrown" id="strSubject2">subject</span> = "<span id="CText">C</span>";</b></span>
		<span id="reInitOfMarks"><b><span class="fontWeight lightBrown" id="intMarks2">marks</span> = <span id="eightyFive">85;</span></b></span>
		<span id="printAfterChange">System.<span class="fontWeight blue">out</span>.println("<span id="subjaftr">subject = </span>" + <span class="fontWeight lightBrown" id="subjVarAftr">subject</span> + "<span id="markAftr">, marks = </span>" + <span id="markVarAftr" class="fontWeight lightBrown">marks</span>);</span>
	}
}</pre>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="col-xs-12">
					<div id="outputDiv" class="opacity00">
						<div id="outputDiv" class="panel-primary output-div margin-left">
	    					<div id="outputdiv" class="panel-heading text-center">Output</div>
	    					<div class="panel panel-body"><div class="output"></div></div>
	  					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>