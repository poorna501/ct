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

<link rel="stylesheet" href="/css/alertify/alertify.core.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.default.css"/>

<link href="/css/introjs-ct.css" rel="stylesheet">
<!-- <link href="/css/data-structures-css.css" rel="stylesheet"> -->

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/alertify/alertify.js" type="text/javascript"></script>

 <script src ="/secure/lang/jdbc/js/callable-statement.js"text/javascript"></script>
 
<title>callable-st</title>
<style type="text/css">
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 250px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
}

.main-box-border {
	border: 2px solid transparent;
	border-radius: 10px;
	height: 564px;
	background-color: #fcf4e8;
}
.popover-content {
	background-color: lightgray;
	color: black;
}

.popover {
	z-index: 99999999;
	width: 215px;
}
.tooltip-height {
	height: 20px;
	margin-top: 5px;
}
.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
.svg-line {
	stroke: gray;
	stroke-width: 2;
}

.button {
	 background-image: none !important;
	 color: white !important;
	 padding: 2px !important;
	 text-shadow: none !important;
	 background-color: green !important;
	border-radius: 3px;
	color: white;
	cursor: pointer;
	display: inline-block;
	float: right;
   }
   
.display {
	 display:none!important;
  }
.border {
	border: 2px solid gray;
	border-radius: 6px;
	box-shadow: 0 1px 4px 1px gray;
}
.text-center {
	 justify-content: center;
	 align-items: center;
}
.box-border {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 55px;
    justify-content: center;
    text-align: center;
}
.database-box2 {
	border: 1px solid gray;
	border-radius: 8px;
	height: 53px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:86px;
	margin-top: 35px;
}
.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}

.oval1 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 25px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}

 .oval4 {
	border: 2px solid gray;
    border-radius: 50%;
   display: inline-flex;
    height: 45px;
    position: relative;
  	 width:96px;
    margin-top: 2px;
	/* background-color: antiquewhite; */
} 

.text-font {
	font-size: 12px;
	}
	.context {
	/* background-color: rgba(255, 143, 11, 0.15);
    border: 2px dashed green; */
    border-radius: 0;
    height: 91px;
    width: 39.667%;
    margin-top:30px;
   /*  margin-left:230px; */
   /*  padding: 28px; */
    }

.blinking-border-background-green {
	animation: blink-border-background-green 3.10s linear 1;
}

@keyframes blink-border-background-green {
	
	25% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}
.zclass {
	z-index: 10000000;
}
y {
background-color: yellow;
}
.square {
  height: 50px;
  width: 10px;
  background-color: gray;
}
.popover-content {
	background-color: lightgray;
	color: black;
}

.popover {
	z-index: 99999999;
	width: 215px;
}

.ct-btn-next {
	float: right;
	padding: 1px 3px;
	cursor: pointer;
}

.btn-success{
	background-color:green;
}
.tooltip-height {
	height: 20px;
	margin-top: 5px;
}
</style>
</head>
<body>
<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Callable-statement</span>
		</h2>
		<div class='buttons-div text-center'>
				<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
		</div>
	
	<div class="col-xs-12" style = "margin-top:10px;">
		<div class="main-box-border" id="mainBox">
			<div class = col-xs-12>
			
				<div class = col-xs-4>
				</div> 
				<div class = "col-xs-8" id = "callable" style = "padding-left:0px;padding-right:0px; ">
				<svg class ="svg-css">
					<marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: green;">
               			<path d="M0,0 L5,2.5 L0,5 Z"/>
           			</marker>
           			<line stroke-dasharray= "5"class="svg-line" id = "line1" x1="33%" y1="65%" x2="33%" y2="56%" style="marker-end: url(#flow4Marker);"/>
           			<line stroke-dasharray= "5" class="svg-line" id = "line2" x1="33%" y1="65%" x2="33%" y2="62%" style="marker-end: url(#flow4Marker);"/>
           			<line stroke-dasharray= "5"class="svg-line" id = "line3" x1="33%" y1="64.5%" x2="33%" y2="67%" style="marker-end: url(#flow4Marker);"/>
           			<defs>
    					<filter id="f1" x="0" y="0" id="solid" width="1" height="1">
     							 <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
     							 <feFlood flood-color="yellow"/>
     							  <feComposite in="SourceGraphic"/>
    					</filter>
					  </defs>
           			 <line class="svg-line" id = "line4" x1="19%" y1="10%" x2="19%" y2="10%" style="marker-end: url(#flow4Marker);"/>
           			 <line class="svg-line" id = "line5" x1="19%" y1="48%" x2="19%" y2="48%" style="marker-end: url(#flow4Marker);"/>
           			 <line class="svg-line" id = "line6" x1="19%" y1="69%" x2="19%" y2="70%" style="marker-end: url(#flow4Marker);"/>
           			 <line class="svg-line" id = "line7" x1="20%" y1="81%" x2="20%" y2="80%" style="marker-end: url(#flow4Marker);"/>
           			 <line class="svg-line" id = "line8" x1="20%" y1="62%" x2="20%" y2="62%" style="marker-end: url(#flow4Marker);"/>
           			 <line class="svg-line" id = "line9" x1="32%" y1="45%" x2="32%" y2="45%"/>
           			 <line class="svg-line" id ="line10" x1="44%" y1="45%" x2="44%" y2="45%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			 <line class="svg-line" id ="line11" x1="44%" y1="16%" x2="44%" y2="16%"/>
           			 <line class="svg-line" id ="line12" y2="6%"  x2="44%" y1="6%"  x1="44%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			 <line class="svg-line" id ="line13" y2="4%"  x2="33%" y1="4%"  x1="33%"/>
           			 <line class="svg-line"id ="line14" x1="46%" y1="4%" x2="46%" y2="5%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			 <line class="svg-line"id ="line15" x1="50%" y1="24.5%" x2="41%" y2="24.5%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			 <line class="svg-line" id="line16" x1="62%" y1="16%" x2="62%" y2="16%"></line>
           			 <line class="svg-line"id ="line17" x1="62%" y1="8%" x2="62%" y2="8%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			 <line class="svg-line" id ="line18" y2="4%"  x2="33%" y1="4%"  x1="33%"/>
           			 <line class="svg-line"id ="line19" x1="64%" y1="4%" x2="64%" y2="4%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			  <line class="svg-line"id ="line20" x1="57%" y1="24.5%" x2="56%" y2="24.5%" style="marker-end: url(&quot;#flow4Marker&quot;); display: inline;"/>
           			 <rect id = "rect1" class = "rect" width = "10" height = "73" x= "344" y = "180" rx = "0" ry ="0" filter="" style = "stroke-width:0;stroke:gray;fill:#E0E0E0;"/>
           			 <!-- <tspan x="346" y="198" fill="red"class = "text"> 1</tspan>
           			 <tspan x="346" y="198" fill="red"class = "text"> 0</tspan>
           			 <tspan x="346" y="198" fill="red"class = "text"> 1</tspan></text> -->
           			 <text x="345" y="183" fill="red" id="1" class = "text g">0 </text>
           			 <text x="345" y="171" fill="red" id="2" class = "text g">1</text>
           			 <text x="345" y="160" fill="red" id="3" class = "text g">0</text>
           			 <text x="345" y="150" fill="red" id="4" class = "text g">0</text>
           			 <text x="345" y="140" fill="red" id="5" class = "text g">1</text>
           			 <text x="345" y="130" fill="red" id="6" class = "text g">1</text>
           			
           			 <rect id = "rect2" class = "rect" width = "87" height = "9.5" x= "267" y = "244" rx = "0" ry ="0" style = "stroke-width:0;stroke:gray;fill:#E0E0E0;"/>
           			 <rect id = "rect3" class = "rect" width = "10" height = "75" x= "153" y = "269" rx = "0" ry ="0" filter="" style = "stroke-width:0;stroke:gray;fill:#E0E0E0;"/>
           			 <rect id = "rect4" class = "rect" width = "10" height = "75" x= "153" y = "384" rx = "0" ry ="0" filter="" style = "stroke-width:0;stroke:gray;fill:#E0E0E0;"/>
           			 <text x="304" y="250" fill="red" id="7" class = "text g1">0 </text>
           			 <text x="312" y="250" fill="red" id="8" class = "text g1">1</text>
           			 <text x="321" y="250" fill="red" id="9" class = "text g1">0</text>
           			 <text x="332" y="250" fill="red" id="10" class = "text g1">0</text>
           			 <text x="339" y="250" fill="red" id="11" class = "text g1">1</text>
           			 <text x="347" y="250" fill="red" id="12" class = "text g1">1</text>
           			 
           			 <text x="168" y="266" fill="red" id="13" class = "text g2">0 </text>
           			 <text x="168" y="256" fill="red" id="14" class = "text g2">1</text>
           			 <text x="168" y="244" fill="red" id="15" class = "text g2">0</text>
           			 <text x="168" y="234" fill="red" id="16" class = "text g2">0</text>
           			 <text x="168" y="224" fill="red" id="17" class = "text g2">1</text>
           			 <text x="168" y="214" fill="red" id="18" class = "text g2">1</text>
           			 
           			 <text x="256" y="253" fill="red" id="19" class = "text g3">0 </text>
           			 <text x="250" y="253" fill="red" id="20" class = "text g3">1</text>
           			 <text x="245" y="253" fill="red" id="21" class = "text g3">0</text>
           			     
					    
           			 
           			  
           			 
           			  
				<div class = col-xs-12>
				<div class = col-xs-12 style = "margin-top:10px;">
				<div class=" col-xs-4">
					<div class="border shadow text-center opacity00" id="JavaBox"
						style="background-color: khaki;;">
					<div>
						<b> Java Application</b>
					</div>
					<div class="border  shadow text-center margin-top20" id="jdbcApiBox"
						style="background-color: sandybrown;">
						<b>JDBC API</b>
					</div>
					</div>
				</div>
				</div>
				<div class = col-xs-12>
				<div class= "col-xs-offset-4 col-xs-8 context opacity00" id = "context">
					<div class = col-xs-3>
						<div class="oval4 col-xs-3 opacity00" id = "connection"style="background-color:  #8ce884;position:realative;
   																			 margin-top: 24px; line-height:37px;"> Connection
						</div> 
					</div>
					<div class = col-xs-3 style = "margin-left:60px;">
						<div class="oval4 col-xs-3 opacity00" id = "statement"style="background-color:  #8ce884;position:realative;
   																			 margin-top: 24px; line-height:37px;margin-left:25px;">callable-st
						</div> 
					</div>
				</div>
				</div>
				<div class = col-xs-12>
					<div class = col-xs-4>
		   				 <div style="background-color:rosybrown;height:40px;margin-left:3px; margin-top:50px;"
								class=" box-border padding0 opacity00" id="driver">
								<div class="text-font"><b>Driver Manager</b></div>
						</div>
					</div>
				</div>
				<div class = col-xs-12>
					<div class = col-xs-4>
		   				 <div style="background-color:rosybrown;height:40px;margin-left:3px; margin-top:75px;"
								class=" box-border padding0 opacity00" id="engine">
								<div class="text-font"><b>Database Engine</b></div>
						</div>
					</div>
					<div class = "col-xs-3" id = sp>
					<div class = col-xs-1>
						<div class = "col-xs-1 box-border opacity00" id = "sp1" style = "background-color:pink;margin-top: 35px;height:25px; font-size:12px;margin-left:58px;">Sp1</div>
					</div>
					<div class = col-xs-1>
						<div class = "col-xs-1 box-border opacity00" id = "sp2" style = "background-color:pink;margin-top: 63px;height:25px; font-size:12px;margin-left:29px;">Sp2</div>
					</div>  
					<div class = col-xs-1>
						<div class = "col-xs-1 box-border opacity00" id = "sp3" style = "background-color:pink;margin-top: 90px;height:25px; font-size:12px;">Sp3</div>
					</div> 
					</div>
				</div>
				<div class = col-xs-12>
					<div class= "col-xs-3 database-box2 opacity00" id = db2 style = "height:70px; margin-top:77px; margin-left:84px">
						<div class="oval1" style="background-color: thistle;"></div>
							<span class="text-font database-text-middle"
								style="background-color: thistle; border-radius: 8px"> <b>D/B</b>
							</span>
			</div>
				</div>
				</div>
				</svg>
				</div>
				
			</div>
			
		</div>
	</div>
<script>
		$(document).ready(function() {
			//$(".svg-line").hide();
			callablestatement();
			//$('[data-toggle="popover"]').popover(); 
		})
</script> 
</body>
</html>