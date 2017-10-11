<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link type="text/css" rel="stylesheet" href="/css/alertify/alertify.core.css">
<link type="text/css" rel="stylesheet" href="/css/alertify/alertify.default.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/js/alertify.js" type="text/javascript" charset="utf-8"></script>
<script src="/secure/lang/servlets/js-min/csa.min.js" type="text/javascript"></script>

<title>Client-Server Architecture</title>
<style type="text/css">

.box-border {
	border: 2px solid gray;
	border-radius: 6px;
}

.browser-border {
	border: 6px solid;
	border-radius: 6px;
}

.border {
	border: 2px solid;
}

.box-shadow {
	box-shadow: 0 5px 6px 0;
}

.svg-css {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	/* z-index: 10000000; */
}


.line {
	marker-end: url("#arrow");
	stroke: gray;
	stroke-width: 2;
}

.padding00 {
	padding: 0;
}

.opacity00 {
	opacity: 0;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
	z-index: 100000000;
}

.user-btn {
	background-color: green;
}

.browser-width {
    width: 10.667%;
}

.blinking-green {
	animation-name: blink-border-background-green ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-green { 
	50% {
		border-color: green;
		background: green;
	}
}

.headings {
	font-weight: bold;
}

.btn-success {
	font-size: 10px;
	font-weight: bold;
	padding: 4px 7px;
}

.ui-effects-transfer {
	border: 2px solid blue;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

</style>

<script type="text/javascript">

$(document).ready(function() {
	clientServer();
});

</script>
</head>
<body>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">Client - Server Architecture</h1>
</div>

<div id="mainDiv" class="col-xs-12" style="margin-top: 45px;">
	<svg class="svg-css">
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	    </marker>
	 
		<!-- <line x1="27%" x2="45.3%" y1="10.3%" y2="10.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" class="line" id="arrow1"/> -->
		<line id="arrow1" class="line" style="stroke: #556b2f;" y2="10.3%" y1="10.3%" x2="28%" x1="28%"/>
		
		<!-- <line x1="48.8%" x2="70.6%" y1="10.3%" y2="10.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" class="line" id="arrow2"/> -->
		<line id="arrow2" class="line" style="stroke: #556b2f;" y2="10.3%" y1="10.3%" x2="48.8%" x1="48.8%"/>
		
		<!-- <line x1="44.7%" x2="27.5%" y1="18%" y2="18%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" class="line" id="arrow3"/> -->
		<line id="arrow3" class="line" style="stroke: #556b2f;" y2="16%" y1="16%" x2="45.7%" x1="45.7%"/>
		
		<!-- <line x1="71%" x2="50%" y1="18%" y2="18%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" class="line" id="arrow4"/> -->
		<line id="arrow4" class="line" style="stroke: #556b2f;" y2="16%" y1="16%" x2="72%" x1="72%"/>
		
		<!-- <line y2="34.3%" y1="20.3%" x2="73.5%" x1="73.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" class="line" id="arrow5"/> -->
		<line id="arrow5" class="line" style="stroke: #556b2f;" x1="74.5%" x2="74.5%" y1="18.3%" y2="18.3%"/>
		
		<!-- <line y2="20.3%" y1="34.3%" x2="73.5%" x1="73.5%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);" class="line" id="arrow6"/> -->
		<line id="arrow6" class="line" style="stroke: #556b2f;" x1="74.5%" x2="74.5%" y1="38%" y2="38%"/>
		
		<!-- <line id="arrow7" class="line" style="stroke: #556b2f; marker-end: url('#myMarker');" x1="76.5%" x2="79.5%" y1="20.3%" y2="65.3%"/> -->
		<line id="arrow7" class="line" style="stroke: #556b2f;" x1="76.5%" x2="76.5%" y1="20.3%" y2="20.3%"/>
		
		<!-- <line id="arrow8" class="line" style="stroke: #556b2f; marker-end: url('#myMarker');" x1="79.5%" x2="76.5%" y1="57.3%" y2="22.3%"/> -->
		<line id="arrow8" class="line" style="stroke: #556b2f;" x1="79.5%" x2="79.5%" y1="57.3%" y2="57.3%"/>
		
	</svg>
		
	<div class="col-xs-12">
		<div id="browserIcon1" class="col-xs-2 col-xs-offset-2 text-center browser-width browser-reveal padding00 opacity00 headings">
			Browser
		</div>
		
		<div id="cloudText" class="col-xs-1 text-center col-xs-offset-2 padding00 opacity00 headings">
			Internet
		</div>
		
		<div id="serverText" class="col-xs-2 text-center col-xs-offset-2 padding00 opacity00 headings" style="width: 13%;">
			HTTP Server
		</div>
	</div>
	
	<div class="col-xs-12" style="margin-top: 10px;">
		<div id="browserIcon2"
			class="col-xs-2 col-xs-offset-2 browser-reveal browser-border browser-width padding00 opacity00 browser-reveal"
			style="height: 100px;">
			
			<div class="col-xs-12 padding00"> 
				<input id="browserText" type="text"
				style="width: 100%; font-size: 10px;" maxlength="20"
				class="browser-text" spellcheck="false">
			</div>
			
			<div style="font-size: 20px; margin-top: 10px;" class="col-xs-12 padding00"> 
				<div id="webPage" class="col-xs-12 opacity00 padding00" style="font-size: 9px;"></div>
	  		</div>
		</div>

		<div id="cloudIcon" class="col-xs-1 text-center col-xs-offset-2 padding00 opacity00" style="color: #b0c4de;">
			<i id="internetIcon" class="fa fa-cloud fa-5x" aria-hidden="true"></i>
		</div>
		
		<div id="serverIcon" class="col-xs-2 text-center col-xs-offset-2 server-icon opacity00" style="width: 13%; color: navy;">
			<i id="httpSeverIcon" class="fa fa-tasks fa-5x" aria-hidden="true"></i>
		</div>
	</div>
	
	<div class="col-xs-12">
		<div id="browserIcon3"
			style="border: 3px solid; border-radius: 6px; margin-top: 4px;"
			class="col-xs-2 col-xs-offset-2 browser-reveal padding00 browser-width opacity00"></div>
			
		<div id="fileSystem"
			style="margin-top: 60px; margin-left: 43.667%; border: 1px solid gray; height: 215px; width: 9%; background-color: #D3D3D3;"
			class="file-system col-xs-2 col-xs-offset-5 text-center padding00 opacity00 box-shadow">

			<div style="margin-top: 12px;" class="col-xs-12 text-center"> 
				<div class="col-xs-10 col-xs-offset-1 border"> </div>
			</div>
			
			<div style="margin-top: 12px;" class="col-xs-12 text-center"> 
				<div class="col-xs-10 col-xs-offset-1 border"> </div>
			</div>

			<div style="margin-top: 12px;" class="col-xs-12 text-center"> 
				<div class="col-xs-10 col-xs-offset-1 border"> </div>
			</div>
  
  			<div id="file1" class="col-xs-12 text-center opacity00" style="margin-top: 12px;"> 
  				<div class="col-xs-12 padding00">
  					<div class="col-xs-8 col-xs-offset-2 padding00">
  						<span id="fileStack1" class="fa-stack fa-2x">
  							<i id="filePage1" class="fa fa-file-text-o fa-stack-1x" aria-hidden="true" style="color: green;"></i>
							<i class="fa fa-file-text-o fa-stack-1x" aria-hidden="true" style="color: green;"></i>
	                		<i id="closeFolder1" class="fa fa-folder-o fa-stack-2x"></i>
	            		</span>
  					</div>
	            	
				</div> 
				
				<div class="col-xs-12 padding00" style="font-weight: bold; font-size: 8px;">
  					<div class="col-xs-8 col-xs-offset-2 padding00">abc.html</div>
				</div>
  			</div>
  			
  			<div id="file2" class="col-xs-12 text-center opacity00" style="margin-top: 12px;"> 
  				<div class="col-xs-12 padding00">
  					<div class="col-xs-8 col-xs-offset-2 padding00">
  						<span id="fileStack2" class="fa-stack fa-2x">
  							<i id="filePage2" class="fa fa-file-text-o fa-stack-1x" aria-hidden="true" style="color: red;"></i>
							<i aria-hidden="true" class="fa fa-file-text-o fa-stack-1x" style="color: red;"></i>
	                		<i id="closeFolder2" class="fa fa-folder-o fa-stack-2x"></i>
	            		</span>
  					</div>
				</div> 
				
				<div class="col-xs-12 padding00" style="font-weight: bold; font-size: 8px;">
  					<div class="col-xs-8 col-xs-offset-2 padding00">123.html</div>
				</div>
  			</div>
		</div>

		<div id="textDiv"
			class="col-xs-1 col-xs-offset-1 box-border padding00 opacity00"
			style="border-radius: 6px; margin-top: 125px; height: 130px;">
			
			<div class="col-xs-12 padding00">
				<div style="font-weight: bold; font-size: 9px; margin-top: 5px;"
				class="col-xs-12 padding00 text-center">abc.html</div>
				<div class="col-xs-12 padding00">
					<input type="text" class="store-input" id="storeInput1"
						spellcheck="false" maxlength="20"
						style="width: 100%; font-size: 10px;" disabled="">
				</div>
	
				<div class="col-xs-12 padding00 text-center" style="font-weight: bold; font-size: 9px; margin-top: 10px;">123.html</div>
	
				<div class="col-xs-12 padding00">
					<input type="text" class="store-input" id="storeInput2"
						spellcheck="false" maxlength="20"
						style="width: 100%; font-size: 10px;" disabled="">
				</div>
	
				<div id="btnAppend" class="col-xs-12 text-center" style="margin-top: 10px;">
					<button class="btn btn-success go-btn" type="button"
						onclick="storeFile1()">Go</button>
				</div>
			
			</div>
			
			<div id="textFields" class="col-xs-12"> </div>
			
		</div>

	</div>
	
	<div class="col-xs-12" style="margin-top: 10px;">
		<div class="col-xs-2 col-xs-offset-2 text-center browser-width padding00"></div>
		<div class="col-xs-1 text-center col-xs-offset-2 padding00"></div>
		
		<div id="fileSystemText" class="col-xs-2 text-center col-xs-offset-2 opacity00 file-system headings" style="width: 13%;">
			File System
		</div>
	</div>

	<div class="col-xs-12 text-center">
		<span id="restart" class="btn btn-warning opacity00"
			style="margin-top: 20px">Restart</span>
	</div>

</div>

</body>
</html> 