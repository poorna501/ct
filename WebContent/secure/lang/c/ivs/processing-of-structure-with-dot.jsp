<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/poswd.min.js"></script>

<title>processing of structure with dot operator</title>
<style>

.border-div {
	border:2px solid gray;
	border-radius: 11px;
	/* height: 658px; */
}

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	z-index: 9999999;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	/* padding:14px 42px; */
	/* width: 54%; */
	width: 12%;
	height: 26px;
}

.output-table-border {
	border: 2px solid transparent;
	text-align: center;
	width: 12%;
	height: 26px;
}

.creampretab4 {
	-moz-tab-size: 2;
	background-color: lavender !important;
	font-size: 11px;
	font-style: inherit;
	line-height: 1.5;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
	position: relative;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px; 
	border-bottom-right-radius: 6px;
	height: 135px;
	padding: 10px;
	white-space: normal;
}

.output {
	font-size: 14px;
	font-weight: bold;
}

.margin-top20 {
	margin-top: 20px;
}

.cursor-wait {
    cursor: wait !important;
}

.padding3 {
	padding: 3px 9px 0 3px;
}

.ct-code-b-green {
	color: green;
}

</style>
</head>
<body>
	<script>
		$(document).ready(function() {
			processingOfStructureWithDotReady();
		});
	</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id = "heading">Processing of structure using dot(.) operator</span>
	</h2>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-8 information-div margin-top20">
		<div class="col-xs-12 margin-top20" id="text">
		<ul>
		<li>Processing of structure refers to the ways of accessing the members of structure.</li>
		<li>Basically there are two operators available for accessing the members of a structure
		depending on whether a variable or a pointer variable is declared to the structure.</li>
		<ol>
		<li>Dot(.) operator: it is used to access member of a structure variable.</li>
		<li>Arrow(->) operator: it is used to access member of a structure pointer variable (We will discuss later).</li>
		</ol>
	<li>To reference a member of a structure using dot operator, the syntax is,<br>
				<span class="col-xs-offset-2 ct-code-b-green">struct_variable . member</span></li>
		</ul></div>
	</div>
	<div class="col-xs-12 margin-top20">
		<div class="col-xs-5">
			<pre class="code-div creampretab4 opacity00" id="codeDiv">
 <span id="declaration">struct employeerecord
 {
 char name [20];
 int age;
 float sal ;
 } ;</span>
 
 main() {
   <span id="variableDefinition">struct employeerecord <span
					id="s1">S1</span>, <span id="s2">S2</span>, <span id="s3">S3</span>;</span>
   <span id="firstRecord">printf(“Enter details of first record name, age and salary \n”);</span>
   
   <span id="name1">printf("Enter name:\t");</span>
   <span id="readName1">gets(S1.name);</span>
   <span id="age1">printf ("\n Enter age:\t");</span>
   <span id="readAge1">scanf("%d", &S1.age);</span>
   <span id="salary1">printf("\n Enter salary:\t");</span>
   <span id="readSalary1">scanf("%f",&S1.sal);</span>
   <span id="secondRecord">printf("Enter details of second record name, age and salary \n");</span>
   
   <span id="name2">printf("Enter name: \t");</span>
   <span id="readName2">gets(S2.name);</span>
   <span id="age2">printf("\n Enter age:\t");</span>
   <span id="readAge2">scanf("%d",&S2.age);</span>
   <Span id="salary2">printf("\n Enter salary:\t");</Span>
   <span id="readSalary2">scanf("%f",&S2.sal);</span>
   <span id="thirdRecord">printf("Enter details of third record name, age and salary \n");</span>
   
   <span id="name3">printf("Enter name:\t");</span>
   <span id="readName3">gets(S3.name);</span>
   <span id="age3">printf("\n Enter age:\t");</span>
   <span id="readAge3">scanf("% d", &S3.age);</span>
   <span id="salary3">printf("\n Enter salary:\t");</span>
   <span id="readSalary3">scanf("%f",&S3.sal);</span>
   <span id="titles">printf("\n%7s%15s%15s","AGE","Name","SALARY");</span>
   <span id="printRecord1">printf(“\n%8d%15s%15f”, S1.age, S1. name,S1.sal);</span>
   <span id="printRecord2">printf(“\n%8d%15s %15f”, S2.age, S2.name,S2.sal);</span>
   <span id="printRecord3">printf(“\n %8d%15s%15f”, S3.age, S3.name,S3.sal);</span>
 }
</pre>
		</div>

		<div class="col-xs-6">
			<!-- <div class="col-xs-12"> -->
			<div class="col-xs-12 opacity00" id="animationDiv1">
				<div class="col-xs-offset-6" style="color: blue">
					<b>S1</b>
				</div>
				<div class="col-xs-offset-3 col-xs-6 border-div">
					<table align="center">
						<tr>
							<td style="text-align: center;">name</td>
							<td style="text-align: center;">age</td>
							<td style="text-align: center;">sal</td>
						</tr>
						<tr>
							<td class="table-border" id="s1name"></td>
							<td class="table-border" id="s1age"></td>
							<td class="table-border" id="s1sal"></td>
						</tr>
						<tr>
							<td style="text-align: center; color: violet">1024</td>
							<td style="text-align: center; color: violet;">1044</td>
							<td style="text-align: center; color: violet;">1046</td>
						</tr>

					</table>
				</div>
			</div>
			<div class="col-xs-12 margin-top20 opacity00" id="animationDiv2">
				<div class="col-xs-offset-6" style="color: blue">
					<b>S2</b>
				</div>
				<div id="animationDiv2" class="col-xs-offset-3 col-xs-6 border-div">
					<table align="center">
						<tr>
							<td style="text-align: center;">name</td>
							<td style="text-align: center;">age</td>
							<td style="text-align: center;">sal</td>
						</tr>
						<tr>
							<td class="table-border" id="s2name"></td>
							<td class="table-border" id="s2age"></td> 
							<td class="table-border" id="s2sal"></td> 
						</tr>
						<tr>
							<td style="text-align: center; color: violet">3470</td>
							<td style="text-align: center; color: violet;">3490</td>
							<td style="text-align: center; color: violet;">3492</td>
						</tr>

					</table>
				</div>
			</div>
			<div class="col-xs-12 margin-top20 opacity00" id="animationDiv3">
				<div class="col-xs-offset-6" style="color: blue">
					<b>S3</b>
				</div>
				<div id="animationDiv3" class="col-xs-offset-3 col-xs-6 border-div">
					<table align="center">
						<tr>
							<td style="text-align: center;">name</td>
							<td style="text-align: center;">age</td>
							<td style="text-align: center;">sal</td>
						</tr>
						<tr>
							<td class="table-border" id="s3name"></td>
							<td class="table-border" id="s3age"></td>
							<td class="table-border" id="s3sal"></td>
						</tr>
						<tr>
							<td style="text-align: center; color: violet">4526</td>
							<td style="text-align: center; color: violet;">4546</td>
							<td style="text-align: center; color: violet;">4548</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 output-div opacity00" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body">
				<span class="output" id="output"></span>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>

</body>
</html>