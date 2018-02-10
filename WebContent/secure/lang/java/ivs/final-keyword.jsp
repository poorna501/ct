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

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/secure/lang/java/js/final-keyword.js"></script>

<style type="text/css">

.margin-top15 {
	margin-top: 15px;
}

.opacity00 {
	opacity: 0;
}

.padding00 {
	padding: 0px;
}

.userbtn {
	margin: 1px !important;
}

.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}

div, span {
	position: relative;
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
	min-height: 77px;
	padding: 15px 0 0;
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

</style>

</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			$(".opacity00").removeClass("opacity00")
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
			<div class="col-xs-6 col-xs-offset-3 box-border">
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 padding10">
						The <span class="green fontWeight">final</span> keyword is used in different contexts. 
						First of all, <span class="green fontWeight">final</span> is a non-access modifier applicable only to a <span class="green fontWeight">variable</span>,
						a <span  class="green fontWeight">method</span> or a <span class="green fontWeight">class</span>.
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top15">
			<div class="col-xs-5 padding00">
				<div class="col-xs-12 padding00" id="FinalProgramCodeDiv">
					<pre class="creamPreTab" id ="preFinalCode">
<span class="fontWeight darkPink">public class</span> FinalKeyword {
	<span class="fontWeight darkPink">public static void</span> main(String[] <span class="fontWeight lightBrown">args</span>) {
		String <span class="fontWeight lightBrown">subject</span> = "JAVA";
		<span class="fontWeight darkPink">int</span> <span class="fontWeight lightBrown">marks</span> = 80;
		System.<span class="fontWeight blue">out</span>.println("subject = " + <span class="fontWeight lightBrown">subject</span> + " marks = " + <span class="fontWeight lightBrown">marks</span>);
		<span class="fontWeight lightBrown">subject</span> = "C";
		<span class="fontWeight lightBrown">marks</span> = 85;
		System.<span class="fontWeight blue">out</span>.println("subject = " + <span class="fontWeight lightBrown">subject</span> + " marks = " + <span class="fontWeight lightBrown">marks</span>);
	}
}</pre>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="col-xs-12">
					<div id="outputDiv">
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