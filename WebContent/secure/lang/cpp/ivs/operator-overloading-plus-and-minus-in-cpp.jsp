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
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/cpp/js/operator-overloading-plus-and-minus-in-cpp.js'></script>
<!-- <script src='/secure/lang/c/js-min/uog.min.js'></script> -->
<title>operator-overloading-plus-and-minus-in-cpp</title>
</head>
<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border : 1px solid grey;
	border-radius: 10px;
	font-size: 13px;
	padding: 9px 14px;
	height: 600px;
	min-width: 900px;
}
.creamPreTab1 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}

.creamPreTable2 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}
.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, 
.table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, 
.table-bordered>thead>tr>td, .table-bordered>thead>tr>th {
	border : 2px solid black;
}
#consoleId {
	width : 500px;
}
#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top:10px;
}

#restart {
    margin-top: 13%;
} 

.margin-top-2 {
	margin-top: 2%;
}
.margin-top-25 {
	margin-top: 25px;
}

#line1 {
	color: maroon;
}
.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}
.ct-green-color {
    color: green;
    font-weight: bold;
}
.ct-orange-color {
	color: orange;
	
}
.ct-red-color {
	color: red;
	font-weight: bold;
}
.ct-blue-color {
	color: blue;
	font-weight: bold;
}
.ct-code-b-black {
	font-weight: bold;
	font-family: monospace;
	color: black;
}

.ct-code-b-gold {
	color: gold;
	font-weight: bold;
}
.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
}

.ct-greenyellow-color {
	color: greenyellow;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}
ul.expl {
	list-style-type: square;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	height: 175px; 
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}
.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}
.output-value-circle {
	background : white;
	color : black;
}

.input-char {
	width: 50px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}
.margin-top-4 {
	margin-top: 4%;
}

.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
}

.introjs-tooltip {
	min-width: 220px;
}
.address-box {
	height: 256px;
	border: 1px solid lightgray;
	border-radius: 4px;
}
.padding0 {
	padding: 0px;
}

.panel-heading {
	padding: 2px 40px;
}

.panel-body {
	padding: 12px 44px;
	height: 40px;
}

.panel-group {
	margin-top: 45px;
}
.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
}

.user-btn {
	background-color:green;
}

.blinking {
	animation-name: blink;
	animation-duration: 2s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: orange;
	}
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

@keyframes blinker {  
  100% { opacity: 0.0; }
}

@keyframes myfirst { 0% {
	left: 0px;
	top: 0px;
}
100%{
	left:10px;
	top:0px;
	}
}
.error-text {
	color: red;
	font-weight: bold;
}

.position {
	display: inline-block;
	position: relative;
}
[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
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
.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}
.padding00 {
	padding : 0px;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
.bold {
	font-weight: bold;
}
.position {
	position : relative;
}
.displayBlock {
	position: relative;
	display: inline-block;
}

</style>
<script>
	$(document).ready(function() {
		usageOfGetcharReady();
	});
</script>
<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>operator overloading  + and - in c++</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2  infoDiv" id="infoDiv">
		<ul>
		 	<li id="list" class="opacity00">An <span class="ct-code-b-green">operator overloading</span> is nothing but an operator which can be 
		 		used for <span class="ct-code-b-green">multiple operations</span> on <span class="ct-code-b-green"> operands </span> of 
					<span class="ct-code-b-green">user defined data types</span> and <span class="ct-code-b-green">should not 
					change the original meaning of that operator.</span><br>
					<span id='nextButton1' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
			</li>
		
			 <li id="list1" class="opacity00"><span class="ct-Maroon-color">Process of overloading : </span>
			 	<ul class="expl">
			 		<li id="list11" class="opacity00">First create a class that defines the data type i.e to be used in overloading operation.</li>
			 		<li id="list12" class="opacity00">Declare the operator function in public part of the class, it may be either member or friend function.</li>
			 		<li id="list13" class="opacity00">
			 			<span>Define the operator function to implement the required operations.</span><br>
			 			<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
			 		</li>
	 			</ul>
 			</li>
		 	<li id="list2" class="opacity00"><span class="ct-Maroon-color">Rules for overloading : </span>
			 	<ul class="expl2">
			 		<li id="list21" class="opacity00">Only existing operators can be overloaded , new operators can't be created and overloaded.</li>
			 		<li id="list22" class="opacity00">We can't change the basic meaning of an operator i.e we can't redefine the '+' operator to subtract one value from other.</li>
			 		<li id="list23" class="opacity00">The overloaded operator must have at least one operand that is of userdefined datatype. </li>
			 		<li id="list24" class="opacity00">overloaded operators follows the syntax, rules of original operators that can't be overridden</li>
			 		<li id="list25" class="opacity00">There are some operators that can't be overloaded<br>
													  They are<br>
														<table class="table table-bordered table-condensed" style="width: initial">
															<tbody>
																<tr>
																	<th class="text-center"><b>::</b></th>
																	<th class="text-center"><b>scope resolution operator</b></th>
																</tr>
																<tr>
																	<td class="text-center"><b>sizeof</b></td>
																	<td class="text-center"><b>sizeof operator</b></td>
																</tr>
																<tr>
																	<td class="text-center"><b>?:</b></td>
																	<td class="text-center"><b>Ternary operator</b></td>
																</tr>
																<tr>
																	<td class="text-center"><b>.*</b></td>
																	<td class="text-center"><b>ptr to member</b></td>
																</tr>
																</tbody>
														</table></li>
			 		<li id="list26" class="opacity00">There are some operators where the friend function can't be used for those operators.
						<table class="table table-bordered table-condensed" style="width: initial">
							<tbody>
								<tr>
									<th class="text-center"><b>=</b></th>
									<th class="text-center"><b>assignment operator</b></th>
								</tr>
								<tr>
									<td class="text-center"><b>()</b></td>
									<td class="text-center"><b>function call</b></td>
								</tr>
								<tr>
									<td class="text-center"><b>[]</b></td>
									<td class="text-center"><b>subscript operator</b></td>
								</tr>
								<tr>
									<td class="text-center"><b> --></b></td>
									<td class="text-center"><b>class member access operator</b></td>
								</tr>
							</tbody>
						</table><span id='nextButton2' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>  
			 		</li>
	 			</ul>
 			</li>
		</ul>
	</div>
	<div class="col-xs-12 padding00">
		<div class="col-xs-12" id="codeDiv">
			<div class="col-xs-5 padding00">
			<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class">class sample {</span>
	<span id="init">int <span id="real">real</span>, <span id="imag">imag</span>;</span>
	<span id="public">public:</span> 
			<span id="getData">void getdata() {
				<span id="print">cout << "Enter the  real and imaginary parts : ";</span>
				<span id="get">cin >> real >> imag;</span>
			}</span>
		 	<span id="putData">void putdata() {
				<span id="print1">cout << real << "+i" << imag;</span>
			}</span>
		<span id="memberFunction">sample operator+ (sample);</span>
		<span id="friendFunction">friend sample operator-(sample, sample);</span>
};
<span id="memFunAdd">sample sample::operator+(sample s2) {
		<span id="s3Temp">sample s3;</span>
		<span id="s3Real">s3.real = <span id="real">real</span> + <span id="s2Real">s2.real</span>;</span>
		<span id="s3Imag">s3.imag = <span id="imag">imag</span> + <span id="s2Imag">s2.imag</span>;</span>
		<span id="return">return s3;</span>
}</span>
<span id="frndFunSub">sample operator-(sample s1, sample s2) {
		<span id="s3Temp1">sample s3;</span> 
		<span id="s3Real1">s3.real = <span id="s1Real">s1.real</span> - <span id="s2Real1">s2.real</span>;</span>
		<span id="s3Imag1">s3.imag = <span id="s1Imag">s1.imag</span> - <span id="s2Imag1">s2.imag</span>;</span>
		<span id="return1">return s3;</span>
}</span>
<span id="main">main() {
	<span id="sampleinit">sample <span id="s1">s1</span>, <span id="s2">s2</span>, <span id="s3">s3;</span></span>
	<span id="s1GetData">s1.getdata();</span>
	<span id="s2GetData">s2.getdata();</span>
	<span id="s3Sum">s3 = s1 + s2;</span>
	<span id="printSum">cout << "addition of complex no's is : " ;</span>
	<span id="s3PutData">s3.putdata();</span>
	<span id="s3Sub">s3 = s1 - s2;</span>
	<span id="printSub">cout << "\nsubtraction of complex no's is : ";</span>
	<span id="s3PutData1">s3.putdata();</span>
}</span></pre>
			</div>
			<div id="addressDiv" class="col-xs-6 col-xs-offset-1 box-border margin-top-25 opacity00">
				<div class="col-xs-12  opacity00" id="addressAnimationDiv">
					<div class="col-xs-12" style="margin-top: 10px;">
						<div class="col-xs-12 box-Heading text-center opacity00" style="font-weight: bold; color: rgb(47, 79, 79);">
							<div id="boxHeading1" class="col-xs-4">S1</div>
							<div id="boxHeading2" class="col-xs-4 col-xs-offset-2">S2</div>
						</div>
						<div class="col-xs-5 box-border opacity00" id="s1Box">
							<div class="col-xs-12 opacity00" id="s1AnimationDiv">
								<div id="s1RealBox" class="col-xs-6  text-center">
									<div><b style="color: maroon;">real</b></div>
									<div class="box-border" style="height: 50px;">
										<span id="s1RealVal" class="ct-sgreen-color displayBlock arrayValue text-center"></span>
									</div>
									<!-- <div class='opacity00'>2323</div> -->
								</div>
								<div id="s1ImagBox" class="col-xs-6  text-center">
									<!-- <div id="localVal" class="col-xs-7 col-xs-offset-2"> -->
										<div><b style="color: maroon;">imag</b></div>
										<div style="height: 50px;" class="box-border">
											<span id="s1ImagVal" class="ct-sgreen-color arrayValue text-center"></span>
										</div>
										<!-- <div class='opacity00'>2323</div> -->
									<!-- </div> -->
								</div>
							</div>
						</div>
						<div class="col-xs-5 box-border col-xs-offset-1 opacity00" id="s2Box">
							<div class="col-xs-12 opacity00" id="s2AnimationDiv">
								<div id="s2RealBox" class="col-xs-6  text-center">
									<div><b style="color: maroon;">real</b></div>
									<div class="box-border" style="height: 50px;">
										<span id="s2RealVal" class="arrayValue1 ct-sgreen-color text-center"></span>
									</div>
									<!-- <div class='opacity00'>2323</div> -->
								</div>
								<div id="s2ImagBox" class="col-xs-6  text-center">
									<!-- <div id="localVal" class="col-xs-7 col-xs-offset-2"> -->
										<div><b style="color: maroon;">imag</b></div>
										<div style="height: 50px;" class="box-border">
											<span id="s2ImagVal" class=" arrayValue1 ct-sgreen-color text-center"></span>
										</div>
										<!-- <div class='opacity00'>2323</div> -->
									<!-- </div> -->
								</div>
							</div>
						</div>
						<div class="col-xs-6 margin-top-25 col-xs-offset-3 opacity00" id="s3Box">
							<div class="col-xs-12 text-center box-Heading opacity00" style="font-weight: bold; color: rgb(47, 79, 79);">
								<div id="boxHeading3" class="col-xs-4 col-xs-offset-4">S3</div>
							</div>
							<div class="col-xs-12 box-border " id="s3AnimationDiv">
								<div class="col-xs-12  opacity00" id="s3Div">
									<div id="s3RealBox" class="col-xs-6  text-center">
										<div><b style="color: maroon;">real</b></div>
										<div class="box-border" style="height: 50px;">
											<span id="s3RealVal"></span>
										</div>
										<!-- <div class='opacity00'>2323</div> -->
									</div>
									<div id="s3ImagBox" class="col-xs-6  text-center">
										<!-- <div id="localVal" class="col-xs-7 col-xs-offset-2"> -->
											<div><b style="color: maroon;">imag</b></div>
											<div style="height: 50px;" class="box-border">
												<span id="s3ImagVal" ></span>
											</div>
											<!-- <div class='opacity00'>2323</div> -->
										<!-- </div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-4 col-xs-offset-1 margin-top-25">
			<div id="consoleId" class="center opacity00" style="margin-top: 3%; ">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<span id="typeChar"></span>
						<div id="hiddenTypingChar">Enter the  real and imaginary parts : <span id="outputPrintfLine"><div id="inputChar" contenteditable="true"  class="position input-char"></div></span></div>
					<span id="typeChar1"></span>	
						<div id="hiddenTypingChar1" class="opacity00">Enter the  real and imaginary parts : <span id="outputPrintfLine1"><div id="inputChar1" contenteditable="false" maxlength="2" class="position input-char"></div></span></div>
					<span id="printLineInConsole" class="opacity00">addition of complex no's is : </span>
					<span id="printLineInConsole1" class="opacity00">subtraction of complex no's is : </span>
				</div>
			</div>
		</div>
		</div>
	</div>
</div>
</body>
</html>