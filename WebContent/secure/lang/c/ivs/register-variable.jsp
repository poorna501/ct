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
<script src="/secure/lang/c/js-min/rv.min.js" type="text/javascript"></script>

<title>register variable</title>

<style type="text/css">

.color-red {
 	color:red;
}

.introjs-tooltip {
	min-width: 250px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 12px;
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
    margin: 8px;
    padding: 5px;
    font-size: 13px;
    white-space: pre;
	tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
    overflow: hidden;
}

#animationDiv {
    height: 130px;
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
    min-height: 280px;
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

.mleft {
	margin-left : 10px;
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
	height : 100px;
}

#functionMemory {
	height : 100px;
}

.padding0 {
	padding : 0;
}

.color-yellow {
	color : yellow;
	font-family: monospace;
	font-weight: bold;
}

.color-white {
	color : white;	
}

#numberDiv1, #numberDiv3 {
	margin-top : 10px;
}

#numberDiv3 {
	height:100px;
}

#addressDiv3 {
	margin-top : 10px;
}

.margin20 {
	margin-top : 20px;
}


.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

</style>
</head>

<body>
	<div class = "col-xs-12">
		<div class = "ct-box-main">
			<div class = "text-center">
				<h1 class = "label ct-demo-heading text-center">Register variable</h1>
			</div> 
			<div class = 'buttons-div'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
			<div class="col-xs-12">
				<div id="printDefinition" class="col-xs-8 col-xs-offset-2 box-border visibility-hidden padding0" style='margin-bottom:20px; margin-top:10px;'>
					<ul style='list-style: none;'><li id=line1 class='opacity00'><span class = 'ct-code-b-green'>Register variables</span> are stored in the CPU by the <span class = 'ct-code-b-green'>compiler</span>, unlike normal variables.</li>
					<li id=line2 class='opacity00'><span class = 'ct-code-b-green'>Register variables</span> are accessed faster than the normal variables.</li>
					<li id=line3 class='opacity00'>The frequently accessed variables are stored in the registers for <span class = 'ct-code-b-green'>faster execution</span> of programs.
					<span id=button1><a style="background-color:green" class="introjs-button animation-btn" onclick="animate1()">Next &#8594;</a></span></li></ul></div>
				</div>
			</div>
			<div class = "col-xs-12">
				<div class = "col-xs-offset-1 col-xs-4 padding0">
					<div id = "codeDiv"  class = "box-border margin-top">
						<pre class = 'creamPreTab4'>
<div style="display: inline-block;"><span id = "mainDeclaration">void main()</span>						
<span id = "openBrace">{</span>
    <div id = "registermainDeclaration" style="display: inline-block;"><span id = "registerDeclaration">register </span><span id = 'registerDeclaration1'>int <span id = "value1">i;</span></span></div>						
    <div id = 'formainDeclaration' style="display: inline-block;"><span id = 'forDeclaration'>for(<span id = 'i1'>i = <span id = 'one'>1</span></span>;<span id = 'iCondition'> i <= 10</span>;<span id = 'iIncrement'> i++</span>)</span></div>
    <span id = "openBrace1">{</span>
	 <div style="display: inline-block;"><span id="sopLine1" class=" introjs-showElement">printf("%d\n", i);</span></div>
    <span id = "closeBrace1">}</span>
<span id = "closeBrace">}</span></div><br>
</pre>
					</div>
					<div class = " col-xs-offset-1 col-xs-10 opacity00 margin20" id = "animationDiv">
						<div class = "col-xs-12 padding0">
							<div id = "mainmemoryheading" class = 'col-xs-offset-2 col-xs-8 opacity00'>In register</div>
							<div class = "col-xs-offset-2 col-xs-8 padding0 visibility-hidden" id = "mainMemory">
								<div id="numberDiv1" class="col-xs-offset-2 col-xs-6" >
					    			<div class="panel-primary number-div visibility-hidden"  id = "addressDiv1">
	    								<div class="panel-heading text-center number-div"><span id = "aheading1">i</span></div>
	    								<div class="panel panel-body number-body text-center">
	    									<span class="text-center" id="addressValue1"></span>
	    								</div>
					    			</div>
					    		</div>
					    	</div>
						</div>
					</div>	
				</div>
				<div class = "col-xs-5">
					<div class = "col-xs-12 padding0">
						<div class = "col-xs-offset-2 col-xs-8">
				  		<div class="panel-primary output-div margin-left opacity00" id="outputDiv">
		    				<div class="panel-heading text-center" id="outputDiv">Output</div>
		    				<div class="panel panel-body">
			    					<div class="output col-xs-12">
			    						<div id = "appendDiv1"><span id = "outputAValue1"></span></div>
			    						<div id = "appendDiv2"><span id = "outputAValue2"></span></div>
			    						<div id = "appendDiv3"><span id = "outputAValue3"></span></div>
			    					</div>
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
		registerVariableReady();
	});
</script>
</body>
</html>