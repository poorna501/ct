<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="/secure/ds1/js/circular-queue-linked-list.js"></script>


<!-- Javascript for the actual visualization code -->
<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>
<script type="text/javascript" src="js/al-li/algorithm.js"></script>
<!-- <script type="text/javascript" src="js/al-li/CQLL-Dummy.js"></script> -->


<script type="text/javascript" src="js/al-li/circular-queueLL.js"></script>

<style type="text/css">
.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
	position: relative;
}

.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 3px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.introjs-tooltiptext li span {
	display: inline-block;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.background-color-yellow {
	background-color: yellow;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

#outputDiv {
	position: relative;
	z-index: 9999999;
}

.input-group-addon {
	padding: 4px 6px;
}

.btn-sm, .btn-group-sm>.btn {
	padding: 0 6px;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
}

.padding-col0 {
	padding: 0;
}

y, r {
	font-family: monospace;
	font-weight: bold;
}

y {
	color: yellow;
}

r {
	color: red;
}

.user-btn {
	background-color: green;
}

.introjs-tooltiptext>ul>li {
	font-family: monospace;
}

/* #mainCalls {
	 overflow-y: auto;
	 height: 80px;
} */
</style>

<script type="text/javascript">
	$(document).ready(function() { 
		queueLinkedListReady();
	});
</script>
</head>
<body onload='init()' class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading'>Circular Queue using Linked List</h1>
			<!-- <span class='btn btn-xs btn-warning' onclick='reloadIntro(true)' style="z-index: 100000000; position: relative;">Reload</span> -->
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
		
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border'>
					<pre class='creampretab4' id='queueInit' style="margin-top: 10px;"><span id="strcutSpan">struct queue {
	int info;
	struct queue *next;
};</span>

<span id="typeDefDec">typedef struct queue *CircularQueue;</span>
<span id="declareFirstAndRearNode">CircularQueue front = NULL, rear = NULL;</span>
</pre>

					<pre class='creampretab4 hide' id='mainFun'>
void main() {<div id='mainCalls'></div>
}
</pre>

					<pre class='creampretab4 hide' id='enqueueFun'
						style="margin-top: 10px;">
void enqueue(<span id='enqueueParameter'>int element</span>) {
	<span id='enqueueTempDef'>Q temp = NULL;</span>
	<span id='initTemp'>temp = (Q)malloc(sizeof(struct queue));</span>
	<span id="enqueueBlk1"><span id='enqueueIf'>if(<span id='enqueueFirstIfCndtn'>temp == NULL</span>) {</span>
		<span id='enqueueIfPrintf'>printf("Queue is overflow.");</span>
	} else {
		<span id='tempInfoInit'>temp -> info = element;</span>
		<span id='tempNextInit'>temp -> next = NULL;</span>
		
		<span id='enqueueElseIfElseBlk'><span id='enqueueElseIf'>if(<span id='enqueueSecondIfCndtn'>front == NULL</span>) {</span>
			<span id='enqueueFrontInit'>front = temp;</span>
		} else {
			<span id='enqueueRearNextInit'>rear -> next = temp;</span>
		}</span>
		<span id='queueElsePrintfBlk'><span id='enqueueRearInit'>rear = temp;</span>
		<span id='enqueueRearNextFirstInit'>rear -> next = front;</span>
		<span id='enqueueElsePrintf'>printf("Successfully inserted.");</span></span>
	}</span>
}
					</pre>

					<pre class='creampretab4 hide' id='dequeueFun'
						style="margin-top: 10px;">
void dequeue() {
	<span id='dequeueTempDef'>Q temp = NULL;</span>
	<span id="dequeueBlk1"><span id='dequeueIf'>if(<span id='dequeuIfCndtn'>front == NULL</span>) {</span>
		<span id='dequeueIfPrintf'>printf("Queue is underflow.");</span>
	} else {
		<span id='dequeueTempInit'>temp = front;</span>
		<span id='dequeueElseIfElseBlk'><span id='dequeueElseIf'>if (<span id='dequeuElseIfCndtn'>front == rear</span>) {</span>
			<span id='dequeuRearFrontInit'>front = rear = NULL;</span>
		} else {
			<span id='dequeueFrontInit'>front = front -> next;</span>
		}</span>
		<span id='dequeueElsePrintfBlk'><span id='dequeueElsePrintf'>printf("Deleted value = "
		"%d.", temp -> next);</span>
		<span id='dequeueRemoveTemp'>free(temp);</span></span>
	}</span>
}
					</pre>
					<pre class='creampretab4 hide' id='displayFun' style="margin-top: 10px;">
void display() {
	<span id='displayBlk1'><span id='displayIf'>if(<span id='displayIfCndtn'>first == NULL</span>) {</span>
		<span id='displayIfPrintf'>printf("Queue is empty.");</span> 
	} else {
		<span id='displayFrontToTemp'>Q temp = front;</span>
		<span id='displayElsePrintf'>printf("Elements are : ");</span>
		<span id='displayBlk2'>do {
			<span id='displayWhilePrintf'>printf("%d ", temp -&gt; info);</span>
			<span id='displayTempNext'>temp = temp -&gt; next;</span>
			<span id='displayWhile'>} while(<span id='displayWhileCndtn'>temp != first</span>); </span></span>
	}</span>
}
</pre>
					
					
				</div>			
			
			<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div><div class="output-console-body"><span id="output"></span>
					</div>
				</div>
			
			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center'
					id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-offset-2 col-xs-8 padding0' id='btnsDiv'>
							<div class='col-sm-3'>
								<div class='col-sm-12 padding-col0' id='enqueueDiv'>
									<div class="input-group">
										<input class="form-control input-sm" id="enqueueText"
											name="enqueue" type="text" /> <span
											class="input-group-addon"> <span id="enqueueBtn"
											class="btn btn-sm btn-success">EnQueue</span>
										</span>
									</div>
								</div>
							</div>

							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='popDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="dequeueBtn" class="btn btn-sm btn-success">DeQueue</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='displayQueueDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="displayBtn" class="btn btn-sm btn-success">Display</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='clearQueueDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="clearBtn" class="btn btn-sm btn-success">Clear Queue</span>
										</span>
									</div>
								</div>
							</div>
						</div>

					</div>
					<canvas id="canvas" width="800" height="500" class='opacity00'></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>
