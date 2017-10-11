<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/av.min.js"></script>
<title>automatic variable</title>

<style type="text/css">

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 8px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
}

.creamPreTab4 {
    padding: 5px;
    font-size: 12px;
    white-space: pre;
	tab-size: 6;
	margin : 5px;
    border-radius: 8px;
    background-color: #fffae6;
    overflow: hidden;
}

#animationDiv {
    height: 280px;
}

[contenteditable="true"] {
    outline: medium none;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 150px;
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.panel-primary > .panel-heading {
    color: #000;
    border-color: lightgray;
    background-color: lightgray;
}

.number-div > .number-div {
	color: white;
	font-width: bold;
	background-color: #337ab7;
}

.number-div > .number-body {
	color: black;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
}
 
 .output {
    color: white;
}

#outputDiv {
    margin-top: 12px;
}

.address-text {
	margin-top: -13px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }
 
 .blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: blue;
	}
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.circle-css {
	border: 1px solid #ff66b3;
	border-radius: 50%;
	padding: 1px;
	position: relative;
	z-index: 9999999;
}

#aValueAnimation, #bValueAnimation {
    left: 54px;
    top: 22px;
    z-index: 1000000;
    color: red;
}

#mainMemory {
	height: 100px;
}

#functionMemory {
	height: 100px;
}

.padding0 {
	padding: 0;
}

.color-yellow {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.margin10 {
	margin-top: 10px!important;
}

</style>
</head>

<body>
	<div class = "col-xs-12">
		<div class = "ct-box-main">
			<div class = "text-center">
				<h1 class = "label ct-demo-heading text-center">Automatic variables</h1>
			</div> 
			<div class = 'buttons-div'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
			<div id="printDefinition" class="col-xs-8 col-xs-offset-2 box-border visibility-hidden padding0" style='margin-bottom:20px; margin-top:10px;'>
				<ul style='list-style: none;'><li id=line1 class='opacity00'><span class = 'ct-code-b-green'>Automatic or local variables</span> are declared inside the function.</li>
				<li id=line2 class='opacity00'><span class = 'ct-code-b-green'>Automatic variables</span> are created when the function is called and destroyed automatically when the function is closed.</li>
				<li id=line3 class='opacity00'>The <span class = 'ct-code-b-green'>scope</span> of a local variable is only within the <span class = 'ct-code-b-green'>function</span>.
				<span id=button1><a style="background-color:green" class="introjs-button animation-btn" onclick="animate1()">Next &#8594;</a></span></li></ul></div>
			</div>
			<div class = "col-xs-12">
				<div class = "col-xs-6 padding0">
					<div id = "codeDiv"  class = "box-border margin-top">
						<pre class = 'creamPreTab4'>
<span id = 'functionDeclaration'>void ganga();</span>						
<span id = "mainDeclaration">void main()</span>						
<span id = "openBrace">{</span>
    <span id = "automainDeclaration"><span id = "autoDeclaration">auto </span><span id = 'autoDeclaration1'>int <span id = "value1">a,b;</span></span></span>						
    <span id = 'variableDeclaration1'>a =<span id = "number1"> 10</span>;</span>
    <span id = 'functionDeclaration1'>ganga();</span>
    <span id = "sopLine1">printf("The local variable value within main() = <span id = "percentage1">%d</span>\n"<span id = "comma1">,</span><span id = "aValue1">a</span>);</span>
<span id = "closeBrace">}</span><br>
<span id = "mainfunctionDeclaration">void ganga()</span>
<span id = "openBrace1">{</span>
    <span id = 'variableDeclaration2'>int a = <span id = "number3">15</span>;</span>
    <span id = "sopLine2">printf("The local variable value within ganga() = <span id = "percentage2">%d</span>\n"<span id = "comma2">, </span><span id = "aValue2">a</span>);</span>
<span id = "closeBrace1">}</span></pre>
					</div>
				</div>
				<div class = "col-xs-5">
					<div class = "col-xs-10 box-border opacity00" id = "animationDiv">
						<div class = "col-xs-12 padding0">
						<span class = "col-xs-offset-2 col-xs-8 opacity00" id = "memoryheading">memory</span>
							<div id = "mainmemoryheading" class = 'col-xs-offset-2 col-xs-5 opacity00'>In main()</div>
							<div class = "col-xs-12 padding0 visibility-hidden" id = "mainMemory">
							
								<div id="numberDiv1" class="col-xs-4 margin10" style='margin-left:10px;'>
					    			<div class="panel-primary number-div visibility-hidden"  id = "addressDiv1">
	    								<div class="panel-heading text-center number-div"><span id = "aheading1">a</span></div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue1"></span>
	    								</div>
					    			</div>
					    			<div id="address1" class="address-text text-center visibility-hidden">1025</div>
					    		</div>
					    		<div id="numberDiv2" class="col-xs-offset-2 col-xs-4 margin10"> 
					    		<span id="bValueAnimation" class = ""></span>
					    			<div class="panel-primary number-div visibility-hidden" id = "addressDiv2">
	    								<div class="panel-heading text-center number-div">b</div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue2"></span>
	    								</div>
					    			</div>
					    			<div id="address2" class="address-text text-center visibility-hidden">2450</div>
					    		</div>
					    	</div>
				
					    	<div class = "col-xs-12 padding0 visibility-hidden" id = "functionMemory">
					    	<div id = "functionmemoryheading" class = 'col-xs-offset-2 col-xs-5'>In ganga()</div>
					    		<div id="numberDiv3" class="col-xs-offset-2 col-xs-4 margin10"> 
					    		<span id="aValueAnimation" class = "visibility-hidden"></span>
					    			<div class="panel-primary number-div visibility-hidden margin10" id = "addressDiv3">
	    								<div class="panel-heading text-center number-div"><span id = "aheading">a</span></div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue3"></span>
	    								</div>
					    			</div>
					    			<div id="address3" class="address-text text-center ">2398</div>
					    		</div>
							</div>
						</div>
					</div>
				</div>	
				<div class = "col-xs-offset-3 col-xs-5">
		  			<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
	    				<div class="panel-heading text-center" id="outputDiv">Output</div>
	    				<div class="panel panel-body">
	    					<div class="output col-xs-12">
	    						<div id = "appendDiv1"><span id = "outputAValue1"></span></div>
	    						<div id = "appendDiv2"><span id = "outputAValue2"></span></div>
	    					</div>
	    				</div>
	  				</div>
	 			</div>
			</div>
		</div>
<script>
	$(document).ready(function() {
		automaticVarReady();
	});
</script>
</body>
</html>