<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/coas.min.js"></script> -->
<script type="text/javascript" src="/secure/lang/cpp/js/copy-of-a-string.js"></script>

<title>Copy of a string</title>
</head>
<style>

.margin-top-25 {
	margin-top: 25px;
}

.margin-top-40 {
	margin-top: 40px;
}

.margin0 {
	margin: 0px;
}

pre {
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	tab-size: 3;
    border-radius: 8px;
    background-color: lavander;
}

.memory-css {
	border: 1px solid lightgray;
	border-radius: 8px;
	height: 175px;
}

table {
	margin-top: 20px;
	width: 100%;
	text-align: center;
	table-layout: fixed;
}

.td-border {
	padding: 4px;
	text-align: center;
	border: 1px solid lightgray;
}

.output-css {
	height: 129px;
	border-radius: 15px;
	border: 1px solid lightgray;
}

.padding0 {
	padding: 0;
}

.panel-heading {
	padding: 3px;
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.panel {
	border-radius: 0px;
}

.panel-body {
	padding: 15px;
	letter-spacing: 1px;
	background-color: black;
	color: white;
	height: 100px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}

.input {
	background-color: black;
	border: medium none;
	letter-spacing: 1px;
}

.style-css {
	font-family: monospace;
	font-weight: bold;
	color: green;
	font-size: 14px;
}

.ct-red {
	font-family: monospace;
	font-weight: bold;
	color: red;
}

.fa {
	color: white;
}

.value {
     font-size: 12px;
	color: black;
	display: block;
	font-weight: bold;
	margin: -24px 0 0;
	position: relative;
	text-align: center;
	z-index: 9;
}

.cup-css {
	background-color: #003399;
	border: 1px solid white;
	border-radius: 7px;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
	height: 30px;
	left: 353px;
	position: absolute;
	top: 70px;
	width: 54px;
}

.i-position {
	color: white;
	position: relative;
	display: inline-block;
	bottom: 6px;
}

.z-index {
	z-index: 9999999;
}

.ui-effects-transfer {
	z-index: 999999;
	border: 1px solid #003399;
	border-radius: 5px;
}

b {
	font-family: monospace;
}

.ct-green {
	color: green;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
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
	color: 	rgb(0, 204, 51);
	font-weight: bold;
}

r {
	color: red;
}

.displayInline {
	position: relative;
	display: inline-block;
}

</style>
<script>
	$(document).ready(function() {
		copyOfStringReady();
	});
</script>
<body>
	<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Sample program on Strings</h4>
	</div>
	<div class="col-xs-12 margin-top-40">
		<div class="col-xs-12">
			<div class="col-xs-5 padding0" id="program">
<pre class="margin0"><span id="cup" class="opacity00 cup-css"><span class="i-position">i=</span><i class="fa fa-coffee fa-2x sm"></i><span class="value opacity00"><span id="iSpan"></span></span></span><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go><span><b>using namespace</b></go> std;</span>
<g>int</g> main() {
	<span id="intDec"><g>int<g> i;</span>
	<span id="charDec"><g>char</g> a[<ink>20</ink>], b[<ink>20</ink>];</span>
	<span id="enterString">cout << <ink>"Enter a string :"</ink>;</span>
	<span id="scanf">cin >> a;</span>
	<span id="forLoop">for (<span id="iInitialization">i = <ink><span class="zero">0</span></ink></span>; <span id="condition">a[i] <b class='ct-green'>!=</b> <ink><b>'\0'</b></ink></span>; <span id="increment">i++</span>) {</span>
		<span id="line1">b[i] = a[i];</span>
	}
	<span id="delimeter">b[i] = <ink>'\0'</ink>;</span>
	<span id="stringLength">cout << <ink>"The copied string :"</ink><< b << "<in>\n</in>";</span>
}</pre>
			</div>
			<div class="col-xs-7">
				<div class="col-xs-12 opacity00 memory-css" id="memory">
					<table id="tableId1" class="opacity00" align="center">
						<tbody>
							<tr id="addres1Id">
								<td><b class="ct-blue-color">a</b></td>
								<td>0</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
							</tr>
							<tr id="userString" class="style-css">
								<td><div class="td-border opacity00">00</div></td>
							</tr>
							</tbody>
						</table>
						
						<table id="tableId2" class="opacity00" id="zeroAppend" align="center">
						<tbody>
							<tr id="addres2Id">
								<td><b class="ct-blue-color">b</b></td>
								<td>0</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
							</tr>
							<tr id="copyString" class="style-css">
								<td><div class="td-border opacity00">00</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		
		<div class="col-xs-5 col-xs-offset-1 margin-top-25 padding0 output-css opacity00" id="output">
			<div class="panel-heading text-center">Output</div>
			<div class="panel panel-body">
				<div class="firstLine"></div>
				<div class="secondLine"></div>
				<div class="thirdLine"></div>
			</div>
		</div></div>
		<div class="col-xs-12 text-center margin-top-40">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>
</body>
</html>