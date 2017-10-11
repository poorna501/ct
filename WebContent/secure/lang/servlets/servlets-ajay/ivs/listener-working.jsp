<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src="/js/alertify.js" type="text/javascript"></script>
<script src="/secure/lang/servlets/js/listener-working.js" type="text/javascript"></script>
<title>Listeners</title>
<style type="text/css">

.box-border {
	border: 1px solid;
	border-radius: 8px;
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
}

.line {
	marker-end: url("#arrow");
	stroke: gray;
	stroke-width: 2;
}

.padding00 {
	padding: 0;
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

.btn-success {
	font-size: 10px;
	font-weight: bold;
	padding: 4px 7px;
}

table, th, td {
    border: 2px solid teal;
}

td, th {
    padding: 5px;
}

.transform {
    transform: rotate(90deg);
    width: 48px;
}

.width {
	width: 100%;
}

</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	listener();
});

</script>

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">Listener</h1>
</div>

<div id="mainDiv" class="col-xs-12 padding00">

	<svg class="svg-css">
	
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
		</marker>
		
		<!-- <line id="arrow1" class="line" x1="25.5%" x2="35.5%" y1="36.3%" y2="36.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow1" class="line" x1="25.5%" x2="25.5%" y1="36.3%" y2="36.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow2" class="line" x1="35.7%" x2="25.6%" y1="42.3%" y2="42.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow2" class="line" x1="35.7%" x2="35.7%" y1="42.3%" y2="42.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow3" class="line" x1="48.5%" x2="52.9%" y1="39.3%" y2="39.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow3" class="line" x1="48.5%" x2="48.5%" y1="39.3%" y2="39.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow4" class="line" x1="60%" x2="60%" y1="55.3%" y2="63.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow4" class="line" x1="60%" x2="60%" y1="55.3%" y2="55.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow5" class="line" x1="60%" x2="60%" y1="72%" y2="79.3%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow5" class="line" x1="60%" x2="60%" y1="72%" y2="72%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow6" class="line" x1="66.7%" x2="72%" y1="19.3%" y2="19.3%" style="stroke: rgb(85, 107, 47);"/> -->
		<line id="arrow6" class="line" x1="66.7%" x2="66.7%" y1="19.3%" y2="19.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow7" class="line" x1="72%" x2="72%" y1="19.2%" y2="68.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow7" class="line" x1="72%" x2="72%" y1="19.2%" y2="19.2%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow8" class="line" x1="72%" x2="67%" y1="68.2%" y2="68.2%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow8" class="line" x1="72%" x2="72%" y1="68.2%" y2="68.2%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow9" class="line" x1="25.5%" x2="37.5%" y1="64.3%" y2="44.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow9" class="line" x1="25.5%" x2="25.5%" y1="64.3%" y2="64.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow2" class="line" x1="41.7%" x2="25.7%" y1="45.3%" y2="74.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow10" class="line" x1="41.7%" x2="41.7%" y1="45.3%" y2="45.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow11" class="line" x1="66.7%" x2="72%" y1="19.3%" y2="19.3%" style="stroke: rgb(85, 107, 47);"/> -->
		<line id="arrow11" class="line" x1="66.7%" x2="66.7%" y1="19.3%" y2="19.3%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow12" class="line" x1="72%" x2="72%" y1="19.2%" y2="68.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow12" class="line" x1="72%" x2="72%" y1="19.2%" y2="19.2%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow13" class="line" x1="72%" x2="67%" y1="68.2%" y2="68.2%" style="stroke: #556b2f; marker-end: url(&quot;#myMarker&quot;);"/> -->
		<line id="arrow13" class="line" x1="72%" x2="72%" y1="68.2%" y2="68.2%" style="stroke: #556b2f;"/>
		
		<!-- <line id="arrow14" class="line" x1="47.5%" x2="48.9%" y1="42.3%" y2="46.3%" style="stroke: #556b2f;"/> -->
		<line id="arrow14" class="line" x1="47.5%" x2="47.5%" y1="42.3%" y2="42.3%" style="stroke: #556b2f;"/>
		
	</svg>
	
	<div class="col-xs-12">
		<div id="monitors" class="col-xs-2 col-xs-offset-1 padding00">
			<div id="monitor1" class="col-xs-12 padding00 opacity00">
				<div id="pageWindow1" class="col-xs-12" style="border: 6px solid; border-radius: 8px; height: 190px; margin-top: 80px; font-size: 13px;">
					<div id="loginPage1" class="col-xs-12 padding00">
						<div id="loginHeading1" class="col-xs-12 padding00 text-center">
		    				<span style="font-weight: bold; font-family: sans-serif; color: teal;">Login Form</span>
		 		 		</div>
				
						<div class="col-xs-12 padding00" style="margin-top: 25px;">
							<div class="col-xs-5 padding00"> User Name: </div>
		
							<div class="col-xs-7 padding00">
								<input id='userName1' type='text' spellcheck='false'
									class='given-text form-control medium-text-field input1' maxlength="15"
									style="width: 100%; font-size: 12px;" />
							</div>
						</div>
						
						<div class="col-xs-12 padding00" style="margin-top: 10px;">
							<div class="col-xs-5 padding00"> Password: </div>
									
							<div class="col-xs-7 padding00">
								<input type='password' id='password1' spellcheck='false'
									class='given-text form-control medium-text-field input1' maxlength="15"
									style="width: 100%; font-size: 12px;" />
							</div>
						</div>
									
						<div id="btnAppend1" style="float: right; margin-top: 10px;" class="form-group">
							<a id="loginBtn1" class="btn btn-primary" onclick="verifyUser1()">Sign In</a>
						</div>
					</div>
				</div>
			
				<div class="col-xs-12" style="border: 5px solid; border-radius: 8px; margin-top: 5px;"> </div>
			</div>
			
			<div id="monitor2" class="col-xs-12 padding00 opacity00">
				<div id="pageWindow2" class="col-xs-12" style="border: 6px solid; border-radius: 8px; height: 190px; margin-top: 50px; font-size: 13px;">
					<div id="loginPage2" class="col-xs-12 padding00">
						<div id="loginHeading2" class="col-xs-12 padding00 text-center">
		    				<span style="font-weight: bold; font-family: sans-serif; color: teal;">Login Form</span>
		 		 		</div>
				
						<div class="col-xs-12 padding00" style="margin-top: 25px;">
							<div class="col-xs-5 padding00"> User Name: </div>
		
							<div class="col-xs-7 padding00">
								<input id='userName2' type='text' spellcheck='false'
									class='given-text form-control medium-text-field input2' maxlength="15"
									style="width: 100%; font-size: 12px;" />
							</div>
						</div>
						
						<div class="col-xs-12 padding00" style="margin-top: 10px;">
							<div class="col-xs-5 padding00"> Password: </div>
									
							<div class="col-xs-7 padding00">
								<input type='password' id='password2' spellcheck='false'
									class='given-text form-control medium-text-field input2' maxlength="15"
									style="width: 100%; font-size: 12px;" />
							</div>
						</div>
									
						<div id="btnAppend2" style="float: right; margin-top: 10px;" class="form-group">
							<a id="loginBtn2" class="btn btn-primary" onclick="verifyUser2()">Sign In</a>
						</div>
					</div>
				</div>
			
				<div class="col-xs-12" style="border: 5px solid; border-radius: 8px; margin-top: 5px;"> </div>
			</div>
		</div>
		
		<div id="servletEngine" class="col-xs-7 col-xs-offset-1 opacity00" style="margin-top: 40px; 
				border: 2px solid darkgreen; border-radius: 8px; height: 560px;">
			
			<div class="col-xs-12 padding00">
				<div class="col-xs-3 text-center opacity00 free-thread-pool" style="margin-top: 10px; color: purple;">Free Pool</div>
				<div class="col-xs-3 col-xs-offset-1 text-center opacity00 used-thread-pool" style="margin-top: 10px; color: purple;">Used Pool</div>
			</div>
			
			<div class="col-xs-12 padding00">
			
				<div class="col-xs-3 padding00 opacity00 free-thread-pool" style="margin-top: 10px; border: 1px solid teal; background-color: #EDF8FE;
					height: 70px; border-radius: 6px; border-top: none; display: flex; align-items: center;"> 
					
					<div id="thread1" class="progress thread-pool-1 transform" id="thread1" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					
					<div id="thread2" class="progress thread-pool-1 transform" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					
					<div id="thread3" class="progress thread-pool-1 transform" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					
					<div id="thread4" class="progress thread-pool-1 transform" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
				</div>
				
				<div class="col-xs-3 col-xs-offset-1 padding00 opacity00 used-thread-pool opacity00" style="margin-top: 10px; border: 1px solid teal;
					 background-color: #EDF8FE; height: 70px; border-radius: 6px; border-top: none; display: flex; align-items: center;"> 
					
					<div id="usedThread1" class="progress thread-pool-2 transform opacity00" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					
					<div id="usedThread2" class="progress thread-pool-2 transform opacity00" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					
					<div id="usedThread3" class="progress thread-pool-2 transform opacity00" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					
					<div id="usedThread4" class="progress thread-pool-2 transform opacity00" style="height: 12px;">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" role="progressbar" class="progress-bar 
								progress-bar-success progress-bar-striped active width">
						</div>
					</div>
				</div>
				
			</div>
						
			<div class="col-xs-12 text-center padding00">
				<div id="loginServlet" class="col-xs-3 box-border padding00 box-shadow opacity00"
					style="border-radius: 50%; background-color: wheat; font-size: 10px; font-weight: bold; height: 70px; 
					line-height: 70px; margin-top: 50px;">
					<span id="loginServletName">Login Servlet</span>
				</div>
				
				<div id="sessionObj1" class="col-xs-1 col-xs-offset-1 box-border padding00 box-shadow opacity00"
					style="border-radius: 50%; background-color: #80c0c0; font-size: 8px; font-weight: bold; height: 40px; 
					line-height: 40px; margin-top: 64px; width: 5%;">
					<span id="session1Name">session1</span>
				</div>
			</div>
			
			<div class="col-xs-12 text-center padding00">
				<div id="sessionObj2" class="col-xs-1 col-xs-offset-3 box-border padding00 box-shadow opacity00"
					style="border-radius: 50%; background-color: #80c0c0; font-size: 8px; font-weight: bold; height: 40px; 
					line-height: 40px; width: 5%;">
					<span id="session2Name">session2</span>
				</div>
				
				<div id="httpSessionListener" class="col-xs-1 col-xs-offset-1 padding00 box-shadow opacity00"
					style="font-size: 10px; font-weight: bold; height: 50px; font-size: 9px; margin-left: 86px;
					margin-top: 12px; background-color: thistle; border: 1px dashed black; border-radius: 8px;">
					  <div style="margin-top: 4px;">Http</div>
					  <div>Session</div>
					  <div>Listener</div>
				</div>
			</div>
			
			<div class="col-xs-12 text-center padding00">
				<div id="sessionListener" class="col-xs-3 padding00 col-xs-offset-4 box-shadow box-border opacity00"
					style="font-size: 10px; font-weight: bold; height: 50px; 
					line-height: 50px; margin-top: 50px; background-color: darkseagreen;">Session Listener</div>
			</div>
			
			<div class="col-xs-12 padding00">
				<div class="col-xs-4 padding00 col-xs-offset-4" style="font-size: 10px; margin-top: 45px;">
					<table id="table" class="opacity00" style="width:100%">
						<tr id="tr1" style="color: darkslategray;">
							<th>Session Id</th>
						    <th>Created Time</th> 
						    <th>Expected Time</th>
						</tr>
						
						<tr id="tr2">
						    <td id="td1">1</td>
						    <td id="td2"></td>
						    <td id="td3"></td>
						</tr>
						
					</table>
				</div>
			</div>
			
		</div>
	</div>
</div>

<div class="col-xs-12 text-center">
	<span id="restart" class="btn btn-warning opacity00"
		style="margin-top: 20px">Restart</span>
</div>

</body>
</html>