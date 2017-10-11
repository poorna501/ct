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
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/js/alertify.js" type="text/javascript" charset="utf-8"></script>
<script src="js/tcp-ip-protocol.js" type="text/javascript"></script>
<script src="/secure/lang/servlets/servlets-ajay/js/tcp-ip-protocol.js" type="text/javascript"></script>
<title>TCP/IP Protocol</title>
<style type="text/css">

.box-border {
	border: 1px solid gray;
	border-radius: 6px;
	box-shadow: 0 5px 6px 0;
}

.opacity00 {
	opacity: 1;
}

.svg-css {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.zIndex {
	z-index: 10000000;
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
	min-height: 100px;
}

.popover {
	min-height: 100px;
	width: 210px !important;
	font-size: 15px !important;
	z-index: 1000000000 !important;
}

.user-btn {
	background-color: green;
}

.opacity00 {
	opacity: 0;
}

[contenteditable=true] {
	outline: none;
}

.fa-5x {
    font-size: 8em;
}

.border {
	border: 1px solid gray;
}

.layer-heading {
	font-size: 13px;
    font-weight: bold;
}

.th-bgclr {
	background-color: #8FBC8F;
}

.nh-bgclr {
	background-color: #DDA0DD;
}

.dh-bgclr {
	background-color: #4682B4;
}

.dt-bgclr {
	background-color: #90EE90;
}

.data-bgclr {
	background-color: #fffacd;
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: 2s;
	animation-direction: alternate ;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: orange;
		background: orange;
	}
}

.blinking-yellow {
	animation-name: blink-border-background-yellow ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-yellow { 
	50% {
		border-color: yellow;
		background: yellow;
	}
}

.user-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 2px solid blue;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

.ct-demo-heading {
    background: maroon none repeat scroll 0 0;
}

.btn {
	padding: 5px 7px;
	font-size: 10px;
}

.popover-gray-out {
	line-height: 1.1;
	background-color: gray;
	font-size: 11px;
	min-height: 0px;
}

</style>
</head>

<body>

<script type="text/javascript">

$(document).ready(function() {
	tcpIpProtocalReady();
});

</script> 

<div class="text-center" style="margin-top: 20px;">
	<h1 id="heading" class="label ct-demo-heading text-center">TCP/IP Protocol</h1>
</div>

<div class="col-xs-12">
	<div class="col-xs-4 text-center">
		<h5 id="clientHeading1" class="opacity00">Client1 <i aria-hidden="true" class="fa fa-laptop fa-2x"></i></h5>
	</div>
	<div class="col-xs-4 col-xs-offset-4 text-center">
		<h5 id="clientHeading2" class="opacity00">Client2 <i aria-hidden="true" class="fa fa-laptop fa-2x"></i></h5>
	</div>
</div>

<div id="mainBox" class="col-xs-12" style="font-weight: bold;">
	
	<svg class="svg-css">
				
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	    </marker>
	    
	    <marker id="myMarker2" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" fill="green"/>
	    </marker>
	    
	    <marker id="myMarker3" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
			<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" fill="red"/>
	    </marker>
	 
		<!-- <line y2="25.4%" y1="18.3%" x2="26%" x1="26%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow1" class="line"/> -->
		<line y2="18.3%" y1="18.3%" x2="18%" x1="18%" style="stroke: #556b2f;" id="arrow1" class="line"/>
		
		<!-- <line y2="47.5%" y1="40.5%" x2="26%" x1="26%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow2" class="line"/> -->
		<line y2="40.5%" y1="40.5%" x2="18%" x1="18%" style="stroke: #556b2f;" id="arrow2" class="line"/>
		
		<!-- <line y2="70%" y1="62.8%" x2="26%" x1="26%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow3" class="line"/> -->
		<line y2="62.8%" y1="62.8%" x2="18%" x1="18%" style="stroke: #556b2f;" id="arrow3" class="line"/>
		
		<!-- <line y2="92%" y1="85%" x2="31%" x1="31%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow4" class="line"/> -->
		<line y2="85%" y1="85%" x2="18%" x1="18%" style="stroke: #556b2f;" id="arrow4" class="line"/>
		
		<!-- <line y2="18.3%" y1="25.4%" x2="74%" x1="74%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow5" class="line"/> -->
		<line y2="25.4%" y1="25.4%" x2="74%" x1="74%" style="stroke: #556b2f;" id="arrow5" class="line"/>
		
		<!-- <line y2="40.5%" y1="47.5%" x2="74%" x1="74%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow6" class="line"/> -->
		<line y2="47.5%" y1="47.5%" x2="82%" x1="82%" style="stroke: #556b2f;" id="arrow6" class="line"/>
		
		<!-- <line y2="62.8%" y1="70%" x2="74%" x1="74%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow7" class="line"/> -->
		<line y2="70%" y1="70%" x2="82%" x1="82%" style="stroke: #556b2f;" id="arrow7" class="line"/>
		
		<!-- <line y2="85%" y1="92%" x2="67.5%" x1="67.5%" style="stroke: #556b2f; marker-end: url('#myMarker');" id="arrow8" class="line"/> -->
		<line y2="92%" y1="92%" x2="82%" x1="82%" style="stroke: #556b2f;" id="arrow8" class="line"/>
		
		<!-- <line y2="47.5%" y1="40.5%" x2="63%" x1="63%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow9" class="line"/> -->
		<line y2="40.5%" y1="40.5%" x2="72%" x1="72%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow9" class="line"/>
		
		<!-- <line y2="70%" y1="62.8%" x2="63%" x1="63%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow10" class="line"/> -->
		<line y2="62.8%" y1="62.8%" x2="72%" x1="72%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow10" class="line"/>
		
		<!-- <line y2="92%" y1="85%" x2="63%" x1="63%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow11" class="line"/> -->
		<line y2="85%" y1="85%" x2="72%" x1="72%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow11" class="line"/>
		
		<!-- <line x1="37%" x2="37%" y1="92%" y2="85%" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" stroke-dasharray="9, 3" id="arrow13"  class="line"/> -->
		<line x1="28%" x2="28%" y1="92%" y2="92%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow12"  class="line"/>
		
		<!-- <line x1="37%" x2="37%" y1="70%" y2="62.8%" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" stroke-dasharray="9, 3" id="arrow14"  class="line"/> -->
		<line x1="28%" x2="28%" y1="70%" y2="70%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow13"  class="line"/>
		
		<!-- <line x1="37%" x2="37%" y1="47.5%" y2="40.5%" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" stroke-dasharray="9, 3" id="arrow15"  class="line"/> -->
		<line x1="28%" x2="28%" y1="47.5%" y2="47.5%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow14"  class="line"/>
		
		<!-- <line y2="47.5%" y1="40.5%" x2="80%" x1="80%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow17" class="line"/> -->
		<line y2="40.5%" y1="40.5%" x2="89%" x1="89%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow15" class="line"/>
		
		<!-- <line y2="70%" y1="62.8%" x2="80%" x1="80%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow18" class="line"/> -->
		<line y2="62.8%" y1="62.8%" x2="89%" x1="89%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow16" class="line"/>
		
		<!-- <line y2="92%" y1="85%" x2="80%" x1="80%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow19" class="line"/> -->
		<line y2="85%" y1="85%" x2="89%" x1="89%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow17" class="line"/>
		
		<!-- <line class="line" id="arrow20" stroke-dasharray="9, 3" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" y2="85%" y1="92%" x2="20%" x1="20%"/> -->
		<line class="line" id="arrow18" stroke-dasharray="9, 3" style="stroke: green;" y2="92%" y1="92%" x2="11%" x1="11%"/>
		
		<!-- <line class="line" id="arrow21" stroke-dasharray="9, 3" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" y2="62.8%" y1="70%" x2="20%" x1="20%"/> -->
		<line class="line" id="arrow19" stroke-dasharray="9, 3" style="stroke: green;" y2="70%" y1="70%" x2="11%" x1="11%"/>
		
		<!-- <line class="line" id="arrow22" stroke-dasharray="9, 3" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" y2="40.5%" y1="47.5%" x2="20%" x1="20%"/> -->
		<line class="line" id="arrow20" stroke-dasharray="9, 3" style="stroke: green;" y2="47.5%" y1="47.5%" x2="11%" x1="11%"/>
	
		<!-- <line id="arrow21" class="line" x1="23%" x2="23%" y1="40.5%" y2="47.5%" style="stroke: green; marker-end: url(&quot;#myMarker2&quot;);" stroke-dasharray="9, 3"/> -->
		<line id="arrow21" class="line" x1="15%" x2="15%" y1="40.5%" y2="40.5%" style="stroke: red;" stroke-dasharray="9, 3"/>
		
		<!-- <line id="arrow22" class="line" x1="23%" x2="23%" y1="62.5%" y2="69.5%" style="stroke: green; marker-end: url(&quot;#myMarker2&quot;);" stroke-dasharray="9, 3"/> -->
		<line id="arrow22" class="line" x1="15%" x2="15%" y1="62.5%" y2="62.5%" style="stroke: red;" stroke-dasharray="9, 3"/>
		
		<!-- <line id="arrow23" class="line" x1="23%" x2="23%" y1="84.5%" y2="91.5%" style="stroke: green; marker-end: url(&quot;#myMarker2&quot;);" stroke-dasharray="9, 3"/> -->
		<line id="arrow23" class="line" x1="15%" x2="15%" y1="84.5%" y2="84.5%" style="stroke: red;" stroke-dasharray="9, 3"/>
		
		<!-- <line id="arrow24" class="line" y2="85%" y1="92%" x2="72%" x1="72%" style="stroke: green; marker-end: url(&quot;#myMarker2&quot;);" stroke-dasharray="9, 3"/> -->
		<line id="arrow24" class="line" y2="92%" y1="92%" x2="80%" x1="80%" style="stroke: red;" stroke-dasharray="9, 3"/>
		
		<!-- <line id="arrow25" class="line" y2="63%" y1="70%" x2="72%" x1="72%" style="stroke: green; marker-end: url(&quot;#myMarker2&quot;);" stroke-dasharray="9, 3"/> -->
		<line id="arrow25" class="line" y2="70%" y1="70%" x2="80%" x1="80%" style="stroke: red;" stroke-dasharray="9, 3"/>
		
		<!-- <line id="arrow25" class="line" y2="41%" y1="48%" x2="72%" x1="72%" style="stroke: green; marker-end: url(&quot;#myMarker2&quot;);" stroke-dasharray="9, 3"/> -->
		<line id="arrow26" class="line" y2="48%" y1="48%" x2="80%" x1="80%" style="stroke: red;" stroke-dasharray="9, 3"/>
		
		<!-- <line class="line" id="arrow0" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" x1="74%" x2="74%" y1="26%" y2="18.5%"/> -->
		<line class="line" id="arrow0" style="stroke: rgb(85, 107, 47);" x1="82%" x2="82%" y1="26%" y2="26%"/>
		
		<!-- <line y2="47.5%" y1="40.5%" x2="63%" x1="63%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow9" class="line"/> -->
		<line y2="40.5%" y1="40.5%" x2="78%" x1="78%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow27" class="line"/>
		
		<!-- <line y2="70%" y1="62.8%" x2="63%" x1="63%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow10" class="line"/> -->
		<line y2="62.8%" y1="62.8%" x2="78%" x1="78%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow28" class="line"/>
		
		<!-- <line y2="92%" y1="85%" x2="63%" x1="63%" style="stroke: #556b2f; marker-end: url('#myMarker');" stroke-dasharray="9, 3" id="arrow11" class="line"/> -->
		<line y2="85%" y1="85%" x2="78%" x1="78%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow29" class="line"/>
		
		<!-- <line x1="37%" x2="37%" y1="92%" y2="85%" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" stroke-dasharray="9, 3" id="arrow13"  class="line"/> -->
		<line x1="20%" x2="20%" y1="92%" y2="92%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow30"  class="line"/>
		
		<!-- <line x1="37%" x2="37%" y1="70%" y2="62.8%" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" stroke-dasharray="9, 3" id="arrow14"  class="line"/> -->
		<line x1="20%" x2="20%" y1="70%" y2="70%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow31"  class="line"/>
		
		<!-- <line x1="37%" x2="37%" y1="47.5%" y2="40.5%" style="stroke: rgb(85, 107, 47); marker-end: url(&quot;#myMarker&quot;);" stroke-dasharray="9, 3" id="arrow15"  class="line"/> -->
		<line x1="20%" x2="20%" y1="47.5%" y2="47.5%" style="stroke: green;" stroke-dasharray="9, 3" id="arrow32"  class="line"/>
		
	</svg>
	
	<div class="col-xs-12">
		<div id="client1Box" class="col-xs-4">
			<div style="height: 75px;  margin-top: 20px; background-color: thistle;" class="col-xs-12 box-border opacity00" id="appLayerDiv">
				<div style="padding: 0px; margin-top: 21px; font-weight: normal;" class="col-xs-3 opacity00" id="appFile">
					<input type='text' id='givenText' spellcheck='false' class='given-text data-bgclr form-control medium-text-field' maxlength="9" style="width: 100%; font-size: 12px;" />
				</div>
				<div class="col-xs-2" style="padding: 0px; margin-top: 25px;">
					<button class="btn btn-success opacity00" type="button"
						style="margin-left: 9px;" onclick="alertMsg()">Go</button>
				</div>
				<div class="col-xs-5 layer-heading opacity00" id="appLayerText" style="margin-top: 28px;">Application Layer</div>
			</div>
			
			<div id="transportLayerDiv" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: silver;">

				<div class="col-xs-12">
					<div class="col-xs-2 text-center padding00 opacity00 ack-transfer" id="ack1">
						<div class="col-xs-12" style="font-weight: bold; font-size: 10px;">ack1</div>
						<div class="col-xs-12">
							<i aria-hidden="true" class="fa fa-envelope-o"></i>
						</div>
					</div>

					<div class="col-xs-5 col-xs-offset-1 layer-heading opacity00"
					id="transportLayerText">Transport Layer</div>

					<div class="col-xs-2 text-center padding00 opacity00 ack-transfer" id="ack3">
						<div class="col-xs-12" style="font-weight: bold; font-size: 10px;">ack3</div>
						<div class="col-xs-12">
							<i aria-hidden="true" class="fa fa-envelope-o"></i>
						</div>
					</div>
					
					<div class="col-xs-2"> <i id="clock" class="fa fa-clock-o fa-2x opacity00" aria-hidden="true"></i> </div>
				</div>

				<div class="col-xs-12">
					<div class="col-xs-4 padding00" style="margin-top: 4px; font-size: 10px;">
						<div id="tHeader1" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="tHeaderText1">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="sequence1">1</span> </div>
						</div>
						<div id="packetDiv1" class="col-xs-4 padding00 text-center packet-border" style="height: 30px; line-height: 30px;">
							<span id="packet1" class="opacity00 packet-move"> </span>
						</div>
					</div>
					
					<div id="missingPacket1" class="col-xs-4 padding00" style="margin-top: 4px; font-size: 10px;">
						<div id="tHeader2" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="tHeaderText2">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="sequence2">2</span> </div>
						</div>
						<div id="packetDiv2" class="col-xs-4 text-center padding00 packet-border" style="height: 30px; line-height: 30px;">
							<span id="packet2" class="opacity00 packet-move"> </span>
						</div>
						<div id="ack2" class="col-xs-3 text-center padding00 opacity00">
							<div style="font-weight: bold; font-size: 10px;" class="col-xs-12 padding00">ack2</div>
							<div class="col-xs-12 padding00">
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					
					<div class="col-xs-4 padding00" style="margin-top: 4px; font-size: 10px;">
						<div id="tHeader3" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="tHeaderText3">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="sequence3">3</span> </div>
						</div>
						<div id="packetDiv3" class="col-xs-4 text-center padding00 packet-border" style="height: 30px; line-height: 30px;">
							<span id="packet3" class="opacity00 packet-move"> </span>
						</div>
					</div>
				</div>
			</div>
			
			<div id="networkLayerDiv" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: rosybrown;">
				<div class="col-xs-12">
					<div id="networkLayerText" class="col-xs-offset-4 col-xs-7 layer-heading opacity00">
						Network Layer
					</div>
				</div>
				
				<div class="col-xs-12">
					<div class="col-xs-4 padding00" style="margin-top: 10px; font-size: 10px;">
						<div id="nh1" style="height: 30px;" class="nh-bgclr col-xs-4 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="nhText1">NH</span> </div>
							<div class="col-xs-12 padding00"><span id="nhSequence1" style="font-size: 7px;">11.44.12.3</span> </div>
						</div>
						<div id="th1" style="height: 30px;" class="th-bgclr col-xs-2 border network-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="thText1">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="thSequence1">1</span> </div>
						</div>
						<div id="networkPacketDiv1" class="col-xs-3 data-bgclr network-border border text-center padding00 opacity00" style="height: 30px; line-height: 30px;">
							<span id="networkPacket1" class=""> </span>
						</div>
					</div>
					
					<div id="missingPacket2" class="col-xs-4 padding00" style="margin-top: 10px; font-size: 10px;">
						<div id="nh2" style="height: 30px;" class="nh-bgclr col-xs-4 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="nhText2">NH</span> </div>
							<div class="col-xs-12 padding00"><span id="nhSequence2" style="font-size: 7px;">11.44.12.3</span> </div>
						</div>
						<div id="th2" style="height: 30px;" class="th-bgclr col-xs-2 border network-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="thText2">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="thSequence2">2</span> </div>
						</div>
						<div id="networkPacketDiv2" class="col-xs-3 data-bgclr network-border border text-center padding00 opacity00" style="height: 30px; line-height: 30px;">
							<span id="networkPacket2" class=""> </span>
						</div>
					</div>
					
					<div class="col-xs-4 padding00" style="margin-top: 10px; font-size: 10px;">
						<div id="nh3" style="height: 30px;" class="nh-bgclr col-xs-4 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="nhText3">NH</span> </div>
							<div class="col-xs-12 padding00"><span id="nhSequence3" style="font-size: 7px;">11.44.12.3</span> </div>
						</div>
						<div id="th3" style="height: 30px;" class="th-bgclr col-xs-2 border network-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="thText3">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="thSequence3">3</span> </div>
						</div>
						<div id="networkPacketDiv3" class="col-xs-3 data-bgclr network-border border text-center padding00 opacity00" style="height: 30px; line-height: 30px;">
							<span id="networkPacket3" class=""> </span>
						</div>
					</div>
				</div>
			</div>
			
			<div id="dataLayerDiv" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: palegoldenrod;">
			
				<div class="col-xs-12">
					<div id="dataLayerText" class="col-xs-offset-4 col-xs-7 layer-heading opacity00">
						Data Link Layer
					</div>
				</div>
				
				<div class="col-xs-12">
					<div id="dataAck1" class="col-xs-4 padding00" style="margin-top: 10px; font-size: 10px;">
	  					<div id="dh1" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dhText1">DH</span> </div>
							<div class="col-xs-12 padding00"><span id="dhSequence1">1</span> </div>
						</div>
	 
						<div id="dnh1" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border data-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dnhText2">NH</span> </div>
							<!-- <div class="col-xs-12 padding00"><span id="dnhSequence2">1</span> </div> -->
						</div>
						
						<div id="dth1" style="height: 30px;" class="th-bgclr col-xs-2 border data-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dthText1">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="dthSequence1">1</span> </div>
						</div>
						
						<div id="dataPacketDiv1" class="col-xs-3 data-bgclr data-border border text-center padding00 opacity00" style="height: 30px; line-height: 30px;">
							<span id="dataPacket1" class=""></span>
						</div>
						
	   					<div id="dataTailer1" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dtText1">DT</span> </div>
							<div class="col-xs-12 padding00"><span id="dtSequence1">1</span> </div>
						</div>
					</div>
					
					<div id="dataAck2" class="col-xs-4 padding00" style="margin-top: 10px; font-size: 10px;">
	  					<div id="dh2" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dhText2">DH</span> </div>
							<div class="col-xs-12 padding00"><span id="dhSequence2">2</span> </div>
						</div>
	 
						<div id="dnh2" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border data-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dnhText2">NH</span> </div>
							<!-- <div class="col-xs-12 padding00"><span id="dnhSequence2">2</span> </div> -->
						</div>
						
						<div id="dth2" style="height: 30px;" class="th-bgclr col-xs-2 border data-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dthText2">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="dthSequence2">2</span> </div>
						</div>
						
						<div id="dataPacketDiv2" class="col-xs-3 data-bgclr data-border border text-center padding00 opacity00" style="height: 30px; line-height: 30px;">
							<span id="dataPacket2" class=""></span>
						</div>
						
	   					<div id="dataTailer2" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dtText2">DT</span> </div>
							<div class="col-xs-12 padding00"><span id="dtSequence2">2</span> </div>
						</div>
					</div>
					
					<div id="dataAck3" class="col-xs-4 padding00" style="margin-top: 10px; font-size: 10px;">
	  					<div id="dh3" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dhText3">DH</span> </div>
							<div class="col-xs-12 padding00"><span id="dhSequence3">3</span> </div>
						</div>
	 
						<div id="dnh3" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border data-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dnhText3">NH</span> </div>
						</div>
						
						<div id="dth3" style="height: 30px;" class="th-bgclr col-xs-2 border data-border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dthText3">TH</span> </div>
							<div class="col-xs-12 padding00"><span id="dthSequence3">3</span> </div>
						</div>
						
						<div id="dataPacketDiv3" class="col-xs-3 data-bgclr data-border border text-center padding00 opacity00" style="height: 30px; line-height: 30px;">
							<span id="dataPacket3" class=""></span>
						</div>
						
	   					<div id="dataTailer3" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00 opacity00">
							<div class="col-xs-12 padding00"><span id="dtText3">DT</span> </div>
							<div class="col-xs-12 padding00"><span id="dtSequence3">3</span> </div>
						</div>
					</div>
				</div>
			</div> 
		</div>
	
	<div id="client2Box" class="col-xs-4 col-xs-offset-4">
		<div style="height: 75px;  margin-top: 20px; background-color: thistle;" class="col-xs-12 box-border opacity00" id="appLayerDiv2">
			<div style="padding: 5px; margin-top: 25px; font-weight: normal;" class="col-xs-3 data-bgclr" id="appFile2">
				<span id="recp1" class="recipient opacity00"></span><span class="recipient opacity00" id="recp2"></span><span class="recipient opacity00" id="recp3"></span>
			</div>
			
			<div class="col-xs-7 layer-heading col-xs-offset-1 opacity00" id="appLayerText2" style="margin-top: 28px;">Application Layer</div>
		</div>
		
		<div id="transportLayerDiv2" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: silver;">
			<div class="col-xs-12">
				<div id="transportLayerText2" class="col-xs-offset-4 col-xs-7 layer-heading opacity00">
					Transport Layer
				</div>
			</div>
			
			<div class="col-xs-12">
				<div id="tlPacket1" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
					<div id="tHeader21" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"> <span id="tHeaderText21">TH</span> </div>
						<div class="col-xs-12 padding00"> <span id="sequence21">1</span> </div>
					</div>
					
					<div id="packetDiv21" class="col-xs-4 padding00 text-center" style="height: 30px; line-height: 30px;">
						<span id="packet21" class=""> </span>
					</div>
				</div>
				
				<div id="tlPacket2" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
					<div id="tHeader22" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="tHeaderText22">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="sequence22">2</span> </div>
					</div>
					
					<div id="packetDiv22" class="col-xs-4 text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="packet22" class=""> </span>
					</div>
				</div>
				
				<div id="tlPacket3" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
					<div id="tHeader23" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="tHeaderText23">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="sequence23">3</span> </div>
					</div>
					
					<div id="packetDiv23" class="col-xs-4 text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="packet23" class=""> </span>
					</div>
				</div>
			</div>
		</div>
		
		<div id="networkLayerDiv2" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: rosybrown;">
			<div class="col-xs-12">
				<div id="networkLayerText2" class="col-xs-offset-4 col-xs-7 layer-heading opacity00">
					Network Layer
				</div>
			</div>
			
			<div class="col-xs-12">
				<div id="nlPacket1" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
					<div id="nh21" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="nhText1">NH</span> </div>
						<!-- <div class="col-xs-12 padding00"><span id="nhSequence1">1</span> </div> -->
					</div>
					
					<div id="th21" style="height: 30px;" class="th-bgclr col-xs-3 border  text-center padding00">
						<div class="col-xs-12 padding00"><span id="thText21">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="thSequence21">1</span> </div>
					</div>
					
					<div id="networkPacketDiv21" class="col-xs-4 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="networkPacket21" class=""> </span>
					</div>
				</div>
				
				<div id="nlPacket2" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
					<div id="nh22" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="nhText22">NH</span> </div>
						<!-- <div class="col-xs-12 padding00"><span id="nhSequence22">2</span> </div> -->
					</div>
					
					<div id="th22" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="thText22">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="thSequence22">2</span> </div>
					</div>
					
					<div id="networkPacketDiv22" class="col-xs-4 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="networkPacket22" class=""> </span>
					</div>
				</div>
				
				<div id="nlPacket3" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
					<div id="nh23" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="nhText23">NH</span> </div>
					</div>
					
					<div id="th23" style="height: 30px;" class="th-bgclr col-xs-3 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="thText23">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="thSequence23">3</span> </div>
					</div>
					
					<div id="networkPacketDiv23" class="col-xs-4 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="networkPacket23" class=""> </span>
					</div>
				</div>
			</div>
		</div>
		
		<div id="dataLayerDiv2" class="col-xs-12 box-border opacity00" style="height: 75px; margin-top: 40px; background-color: palegoldenrod;">
		
			<div class="col-xs-12">
				<div id="dataLayerText2" class="col-xs-offset-4 col-xs-7 layer-heading opacity00">
					Data Link Layer
				</div>
			</div>
			
			<div class="col-xs-12">
				<div id="client2Packet1" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
				
  					<div id="dh21" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"> <span id="dhText21">DH</span> </div>
						<div class="col-xs-12 padding00"> <span id="dhSequence21">1</span> </div>
					</div>
 
					<div id="dnh21" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"> <span id="dnhText22">NH</span> </div>
						<!-- <div class="col-xs-12 padding00"> <span id="dnhSequence22">1</span> </div> -->
					</div>
					
					<div id="dth21" style="height: 30px;" class="th-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"> <span id="dthText21">TH</span> </div>
						<div class="col-xs-12 padding00"> <span id="dthSequence21">1</span> </div>
					</div>
					
					<div id="dataPacketDiv21" class="col-xs-3 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="dataPacket21" class=""></span>
					</div>
					
   					<div id="dataTailer21" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"> <span id="dtText21">DT</span> </div>
						<div class="col-xs-12 padding00"> <span id="dtSequence21">1</span> </div>
					</div>
					
				</div>
				
				<div id="client2Packet2" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
				
  					<div id="dh22" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dhText22">DH</span> </div>
						<div class="col-xs-12 padding00"><span id="dhSequence22">2</span> </div>
					</div>
 
					<div id="dnh22" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dnhText22">NH</span> </div>
						<!-- <div class="col-xs-12 padding00"><span id="dnhSequence22">2</span> </div> -->
					</div>
					
					<div id="dth22" style="height: 30px;" class="th-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dthText22">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="dthSequence22">2</span> </div>
					</div>
					
					<div id="dataPacketDiv22" class="col-xs-3 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="dataPacket22" class=""></span>
					</div>
					
   					<div id="dataTailer22" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"> <span id="dtText22">DT</span> </div>
						<div class="col-xs-12 padding00"> <span id="dtSequence22">2</span> </div>
					</div>
					
				</div>
				
				<div id="client2Packet3" class="col-xs-4 padding00 opacity00" style="margin-top: 10px; font-size: 10px;">
				
  					<div id="dh23" style="height: 30px;" class="dh-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dhText23">DH</span> </div>
						<div class="col-xs-12 padding00"><span id="dhSequence23">3</span> </div>
					</div>
 
					<div id="dnh23" style="height: 30px; line-height: 30px;" class="nh-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dnhText23">NH</span> </div>
						<!-- <div class="col-xs-12 padding00"><span id="dnhSequence23">3</span> </div> -->
					</div>
					
					<div id="dth23" style="height: 30px;" class="th-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dthText23">TH</span> </div>
						<div class="col-xs-12 padding00"><span id="dthSequence23">3</span> </div>
					</div>
					
					<div id="dataPacketDiv23" class="col-xs-3 data-bgclr border text-center padding00" style="height: 30px; line-height: 30px;">
						<span id="dataPacket23" class=""></span>
					</div>
					
   					<div id="dataTailer23" style="height: 30px;" class="dt-bgclr col-xs-2 border text-center padding00">
						<div class="col-xs-12 padding00"><span id="dtText23">DT</span> </div>
						<div class="col-xs-12 padding00"><span id="dtSequence23">3</span> </div>
					</div>
					
				</div>
			</div>
		</div> 
	</div>
</div>

		<div class="col-xs-12" style="margin-top: 40px;">
			<div id="ethernetDiv" class="col-xs-offset-1 box-border col-xs-10 text-center opacity00"
				style="height: 40px; background-color: slategray; line-height: 40px; font-weight: bold;">
				<div id="ackPopover1" class="col-xs-3 text-center padding00">
					<span id="biteTransfer1" class="opacity00" style="font-size: 10px;">1000101001101001110101001011</span>
				</div>
				<div class="col-xs-4 col-xs-offset-1 text-center">Physical Media (Ethernet/Wi-Fi/etc) </div>
				<div id="ackPopover2" class="col-xs-3 col-xs-offset-1 padding00 text-center">
					<span id="biteTransfer2" class="opacity00" style="font-size: 10px;">1000101001101001110101001011</span>
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