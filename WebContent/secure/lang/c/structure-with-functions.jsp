<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css"/>
<link rel="stylesheet" href="/css/jquery-ui.css"/>
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src='/js/intro.js'></script>
<script src="/js/typewriting.min.js"></script>
<script src="js/structure-with-functions.js"></script>
<!-- <script src="/secure/lang/c/js-min/swf.min.js"></script> -->
<title>structures with functions</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

#informationdiv {
	background-color: rgb(243, 235, 212);
    border-radius: 0px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 42px;
    margin-top: 30px;
    color: black;
}

.color-rose {
	color:#8B008B;
}
.color-green {
	color: green;
}
.color-red {
	color: red;
}

.color-blue {
	color:#339;
}

.color-brown {
	color: #b85c00;
}

.color-yellow {
	color: yellow;
}
#tableDiv {
	border-radius: 5px;
	background-color: rgb(243, 235, 235);
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

#memoryStoreB {
    width: 325px;
    font-size: 15px;
    text-align: center;
}

#memoryStoreX {
	width: 325px;
    font-size: 15px;
    text-align: center;
}

.memory {
	border: 1px solid Black;
    width: 50px;
    font-size: 15px;
    text-align: center;
}  

.array {
	width: 50px;
    font-size: 15px;
    text-align: center;
    color: #b85c00;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.color-maroon {
	color: #85144b;
}

.color-purple {
	color: #B10DC9;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 90px;
    margin-bottom: 14px;
    overflow: auto;
    padding: 17px;
    white-space: pre-line;
}

.color-palegreen {
	color: #0f0;
}

pre {
    padding: 9.5px;
    margin: 10px 0px;
    -moz-tab-size: 2;
    border-radius: 4px;
    border: 1px solid #ccc;
	background-color: #fffae6;
}
</style>
<body>
	<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Structure with Functions</span>
	</div>
	<div class='col-xs-12'>
		<div id='informationdiv' class='col-xs-6 col-xs-offset-3 visibility-hidden'>
			<ul id='defination'><li>A structure variable can also be passed through a function. User may 
				either pass individual structure element or the entire structure at once.</li></ul>
		</div>
	</div>
	<div id='tableDiv' style='border: 1px solid black; margin-top: 20px' class='col-xs-offset-1 col-xs-10 visibility-hidden'>
		<div class='col-xs-8'>
		<pre id="programExp">
<span id='errorVoidDisplay'><span class='color-rose'>void</span> <span class='color-brown'>display</span>(<span class='color-rose'>struct</span> book);</span>

<span id='structBook'><span class='color-rose'>struct</span> book
{
	<span class='color-rose'>char</span> name[20];
	<span class='color-rose'>float</span> price;
	<span class='color-rose'>int</span> page;
};</span>

<span id='voidMain'><span id='voidDisplay'><span class='color-rose'>void</span> <span class='color-brown'>display</span>(<span class='color-rose'>struct</span> book);</span></span>
<span id='mainFunction'><span class='color-rose'>void</span> <span class='color-brown'>main</span>()</span>
{
	<span id='bookB'><span id='memoryBookB'><span class='color-rose'>struct</span> book b = {"<span id='name'>C LANGUAGE</span>", <span id='price'>125.5</span>, <span id='pages'>315</span>};</span></span>
	<span id='displayOfB'><span class='color-brown'>display</span>(<span class='color-green'>b</span>);</span>
}

<span id='voidPrintFunction'><span id='voidDispalyX'><span class='color-rose'>void</span> <span class='color-brown'>display</span>(<span class='color-rose'>struct</span> book <span class='color-green'>x</span>)</span>
{
	<span id='printF'>printf(<span class='color-blue'>"NAME:%s \t price: %f\t page:%d"</span>, x.name, x.price, x.page);</span>	
}</span></pre>
	</div>
		<div class='col-xs-4' style='margin-top: 30px;'>
			<div>
				<span id='bArrow' style='margin-left: 180px; position: relative; z-index: 9999999;' class='opacity00'><span class='color-green'>b</span></span>
					<table  id='memoryStoreB' class="opacity00"  style='border: 1px solid black'>
						<tbody>
							<tr>
					  			<td class="color-purple">name</td>
					  			<td class="color-purple">price</td>
					  			<td class="color-purple">pages</td>
			 				</tr>
							<tr>
					  			<td id='memory0' class="memory opacity00" style='width: 150px;'>C LANGUAGE</td>
					  			<td id='memory1' class="memory opacity00" style='width: 90px'>125.5</td>
					  			<td id='memory2' class="memory opacity00">315</td>
		 					</tr>
		 					<tr>
					  			<td class="color-maroon">2024</td>
					  			<td class="color-maroon">2044</td>
					  			<td class="color-maroon">2048</td>
		 					</tr>
		       		</tbody>
		    	</table>
		    </div>
		    <div>
		    	<div id='xArrow' style='margin-left: 180px; margin-top: 99px;  position: relative; z-index: 9999999;' class='opacity00'><span class='color-green'>x</span></div>	
		    		<table id='memoryStoreX'  style='margin-top: 0; border: 1px solid black;' class="opacity00" >
						<tbody>
							<tr>
					  			<td class="color-purple">name</td>
					  			<td class="color-purple">price</td>
					  			<td class="color-purple">pages</td>
			 				</tr>
							<tr>
					  			<td id='memory01' class="memory opacity00" style='width: 150px;'>C LANGUAGE</td>
					  			<td id='memory11' class="memory opacity00">125.500000</td>
					  			<td id='memory21' class="memory opacity00">315</td>
		 					</tr>
		 					<tr>
					  			<td class="color-maroon">2054</td>
					  			<td class="color-maroon">2074</td>
					  			<td class="color-maroon">2078</td>
		 					</tr>
		       		</tbody>
		    	</table>
		    </div>
		</div>
	</div>

<div class='col-xs-offset-4 col-xs-4' style='margin-top: 15px;'>
	<div id="consoleId" class="center opacity00">
		<div class="output-console-title-bar">
			<span class="title"><b>Console</b></span>
		</div>
		<div class="output-console-body" id="consoleBodyDiv">
			<span id='outPut'></span> 
		</div>
	</div>
</div>
		
<div class="button col-xs-12 text-center" id="button">
	<button class="btn btn-success glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>

</body>
<script>
	$(document).ready(function() {
		structureWithFunctionsReady();
	});
</script>
</html>