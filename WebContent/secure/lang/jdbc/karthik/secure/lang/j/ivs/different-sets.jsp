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
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<!-- <script src="../js-min/ds.min.js"></script> -->
<script src="/secure/lang/j/js/different-sets.js"></script>
<title>different-sets.jsp</title>
<style type="text/css">
.row {
	margin-right: 0.5%;
	margin-left: 0.5%;
}

.border {
	border: 2px solid grey;
	border-radius: 6px;
}

[contenteditable=true]:empty:before, [contenteditable=false]:empty:before {
	color: #cbcbcb !important;
	content: attr(placeholder);
}

#addMethod {
	font-size: 125%;
	margin-bottom: 2%;
	position: relative;
	width: 24%;
}

.go-button {
	float: right;
	font-size: 10px;
}

.animation-jar {
	border-image: none;
	border-radius: 0 0 20px 20px;
	border-style: none solid solid;
	border-width: medium 1px 1px;
	height: 200px;
	margin: 40px 7px 10px;
	background-color: rgb(246, 248, 220);
}

div, span {
	position: relative;
}

.input-box {
	font-size: 14px;
	font-weight: normal;
	outline: medium none;
}

 .value-append-div {
	margin-top: 30px;
	height: 30px;
	z-index: 1;
} 

 .value-append-box {
    border-radius: 8px;
    padding: 4px 6px;
 	border: 2px solid rgba(255, 255, 255, 0);
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

.margin-top-10 {
	height: 33px;
}

.introjs-tooltip {
	min-width: 350px;
}

#arrow {
	z-index: 9999999;
	position: relative;
}
 
 .user-btn {
	background-color: green;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.zIndex {
	z-index: 9999999;
	position: relative;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
}

.blinking-border-background-red {
	animation-name: blink-border-background-red;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-red { 
	50% {
		border-color: red;
		background: rgba(255, 0, 0, 0.38);
	}
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
		background: rgba(102, 175, 233, .6);
	}
}

 #linkedHashSetAnimationJar, #treeSetAnimationJar {
    overflow: auto;
    max-height: 200px;
}

#linkedHashSetAnimationJar > div > div, #treeSetAnimationJar > div > div {
	height: 30px;
	margin: 2px 0;
	padding-top: 5px;
}

.introjs-tooltiptext br {
	margin-bottom: 15px;
}

</style>
</head>
<body>
<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">
		Difference between HashSet, LinkedHashSet and TreeSet</span>
	</h2>
	<br>
	<div class="col-xs-offset-5 ">
		<div id="addMethod" class="col-xs-4">
			<span id="addMethods" class="methods"> add("<span contenteditable="true"
				class='input-box ct-pink-color' id="addByElementMethodValue" methodId="0" placeholder="element" maxlength='4' spellcheck="false"></span>");
			</span>
			<span type="button"
				class="btn btn-success  btn-sm go-button disabled opacity40 "
				id="addElementBtn" methodId="0">Go</span>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4">
			<div id="hashSet" class="border">
				<h3 class="text-center">
					<span class="label label-default">HashSet</span>
				</h3>
				<div class='value-append-div text-center' id="setHash"></div>
				<div class='animation-jar' id='hashSetAnimationJar'></div>
			</div>
		</div>
		<div class="col-xs-4">
			<div id="linkedHashSet" class="border">
				<h3 class="text-center">
					<span class="label label-default">LinkedHashSet</span>
				</h3>
				<div class='value-append-div text-center' id="lHashSet"></div>
				<div class='animation-jar center' id='linkedHashSetAnimationJar'><div></div></div>
			
			</div>
		</div>
		<div class="col-xs-4">
			<div id="treeSet" class="border">
				<h3 class="text-center">
					<span class="label label-default">TreeSet</span>
				</h3>
				<div class='value-append-div text-center' id="tSet"></div>
				<div class='animation-jar center' id='treeSetAnimationJar'><div></div></div>
			</div>
		</div>
	</div>
<script type="text/javascript">


$(document).ready(function() {
	differentSetsReady();
});
		 

</script>
</body>
</html>