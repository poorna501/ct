<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>difference-maps</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/jquery.scrollTo.js" type="text/javascript"></script>
<!-- <script src="../js-min/dm.min.js"></script> -->
<script src="/secure/lang/j/js/different-maps.js"></script>

<style>

 #linkedhashmapJar, #treemapJar {
 
	overflow-x: hidden;
	overflow-y: auto;

}

.glyphicon {
    display: inline-block;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 400;
    left: -55px;
    line-height: 1;
    position: relative;
    top: -28px;
}

.innercontainer {
	height: 200px;
	border: 1px solid black;
	border-top: none;
	border-radius: 0px 0px 10px 10px;
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 72px;
	background-color: rgb(246, 248, 220);
}

.mainbox {
	height: 380px;
	border: 1px solid black;
	border-radius: 10px;
	margin-left: 4.8%;
}

.go-btn {
	float:right;
}

.content-area {
	height: 30px;
	margin-top: 20px;
	z-index: 1;
}

#arr,#treearr {
	color : blue; 
	z-index: 9999999;
	position: relative;
 }

@keyframes blinker {  
  50% { opacity: 0.0; }
}

.box-border {
	border: 2px solid gray;
	border-radius: 6px;
	height: 465px;
	margin-left: 2%;
}

[contenteditable=true]:empty:before {
	content: attr(placeholder);
	color: #B8B8A0;
}

.border {
	border: 2px solid gray;
	border-radius: 8px;
	display: inline;
	padding: 4px 6px;
}

.keyDiv, .valDiv {
	display: inline;
	border-radius: 8px;
	padding: 4px 6px;
	border: 2px solid rgba(255,255,255,.1);
}

.keyDiv1,.valDiv1 {
	display: inline;
	border-radius: 8px;
	padding: 4px 6px;
	border: 2px solid gray;
}
  
.arrow {
	vertical-align: middle;
}

.arrowDiv {
	display: inline-block;
	vertical-align: middle;
}

span, div {
	position: relative;
}

.error-msg {
	color:red;
	font-weight: bold;
}

.reveal-left {
	position: relative;
	overflow: hidden;
	float: left;
	-moz-animation: reveal-left 0.5s ease;
	-moz-animation-fill-mode: backwards;
}

@-moz-keyframes reveal-left {
	0%   {width: 0%;}
	100% {width: 100%;}
}

.key {
	outline: none;
	color: #E34E14; 
	font-family: monospace;
}

.value, .duplicateKeyVal1, .duplicateKeyVal2, .duplicateKeyVal3 {
	outline: none;
	font-family: monospace;
	color: #ed138e;
} 

.val-box-width {
	width: 120px;
	position: relative;
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.fade-in {
	border: 2px solid gray;
	positon :relative;
	animation: show-slowly 0.2s 1 ease-in;
}

@keyframes show-slowly {
	0%   { border-color: rgba(128, 128, 128, 0); }
    50% { border-color: rgba(128, 128, 128, 0.5); }
    100%   { border-color: rgba(128, 128, 128, 1); }
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: rgb(124, 255, 2);
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.blinking-border-background-blue {
	animation-name: blink-border-background-blue;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-blue {
	50% {
		border-color: blue;
		background: rgba(102, 175, 233, 0.6);
	}
}

.margin-top-5px {
	margin-top: 5px;
}
</style>
</head>
<body>
<script type="text/javascript">
var intro;
var valueArr = [];
var countBox = 0;
var countmap = 0;
var key;
var value;
var keyArr = [];
var v;
var tl;	
var x = 1;
var y = 1;
var recursionCount = 0;
var repeat1 = 1;
var repeat2 = 1;
var repeat3 = 1;


$(document).ready(function() {
	differentMapsReady();
});



</script>

	<div class='total-div'>
		<div class="text-center" style="margin-top: 30px;">
			<h1 class="label ct-demo-heading" id="heading">Difference
				between HashMap, TreeMap and LinkedHashMap</h1>
		</div>

		<div id="input" class="center form-group"
			style="margin-top: 30px; width: 200px; padding: 5px 0px;">

			<span class="" id="putbox" style="display: -moz-stack;"> put("<span
				contenteditable="true" maxlength="1" placeholder="key" id="putKey"
				class="key" spellcheck="false"></span>", "<span
				contenteditable="true" maxlength="4" placeholder="value" id="putVal"
				class="value ct-pink-color" spellcheck="false"></span>")
			</span> <span class="btn btn-success btn-sm  go-btn" id="putBtn" style="margin-top: -4px;">Go</span>
		</div>

		<div class="row col-xs-12">
			<div class="col-xs-5">
				<div class='mainbox hashmap-div' id="hashmapdiv">
					<h3 class='text-center'>
						<span class="label label-default">HashMap</span>
					</h3>
					<div class="content-area text-center" id="hasharea"></div>
					<div class="innercontainer" id="hashmapJar"></div>
				</div>
			</div>
			<div class="col-xs-3">
				<div class='mainbox linkedhashmap-div' id="linkedhashmapdiv">
					<h3 class='text-center'>
						<span class="label label-default">LinkedHashMap</span>
					</h3>
					<div class="content-area text-center" id="linkedarea"></div>
					<div class="innercontainer" id="linkedhashmapJar">
						<div id="linkedDivs"></div>
					</div>
				</div>
			</div>
			<div class="col-xs-4">
				<div class="mainbox treemap-div" id="treemapdiv">
					<h3 class='text-center'>
						<span class="label label-default">TreeMap</span>
					</h3>
					<div class="content-area text-center" id="treearea"></div>
					<div class="innercontainer" id="treemapJar">
						<div id="treeDivs"></div>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>
