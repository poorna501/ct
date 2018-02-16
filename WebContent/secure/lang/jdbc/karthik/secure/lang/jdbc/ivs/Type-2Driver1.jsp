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
<script type="text/javascript" src="/secure/lang/jdbc/js/Type-2Driver.js"></script>
<title>JDBC Driver-2</title>
<style>

.main-div {
	border:2px solid transparent;
	border-radius:5px;
}

.margin-top20 {
	margin-top: 20px;
}

.border {
	border: 3px solid gray;
	border-radius: 10px;
}

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 85px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
}

 .oval {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}

.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
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
	padding: 2px 5px;
	cursor: pointer;
}

.tooltip-height {
	height: 20px;
	margin-top: 5px;
}
.arrow {
	top:25% !important;
}

.margin-top-bottom {
	margin: 20px 0;
	line-height: 56px;
}

.oval {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}

.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

.marginBtm {
	margin-bottom: 40px;
}

.javaApp {
	height: 50px;
	line-height: 50px;
}

.padding10 {
	padding: 10px;
}

.rectangle {
	/* border: 1px solid gray;
	height: 56px;
	min-width : 50%;
	display: inline-block; */
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(201, 201, 85) 12%, rgba(255, 255, 61, 0.6) 78%); 
}

.driver {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(92, 203, 187) 12%, rgba(55, 240, 227, 0.7) 78%);
 
}

.dbLibrary {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(196, 173, 197) 12%, rgba(219, 207, 221, 0.7) 78%);
}

.dataBase {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(192, 146, 195) 12%, rgba(255, 255, 255, 0.5) 78%);
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.svg-line {
	stroke: #f53f3f;
	stroke-width: 2;
}

.padding00 {
	padding: 0;
}

.opacity00 {
	opacity: 0;
}

.blinking-border-background-blue {
	/* animation-name: blink-border-background-blue;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: ; */
	animation: blink-border-background-blue 1.0s linear 1;
}

@keyframes blink-border-background-blue {
	
	25% {
		box-shadow:  0 2px 6px 2px blue;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px blue;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}

.svg-revline {
	stroke: #f53f3f;
	stroke-dasharray: 3;
	stroke-width: 2;
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	typeTwoDriverReadyFunction();
})
</script>

</head>
<body>

	<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">JDBC
				Driver-2</span>
		</h2>
	</div>
	
	<div class="col-xs-offset-1 col-xs-9 main-div text margin-top20" id="mainDiv">
		<div class="col-xs-offset-4 col-xs-8 animation-div border  padding00" id="animationDiv">
			<div class="col-xs-12 padding00">
				<svg class="svg-css">
					<marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
               			<path d="M0,0 L5,2.5 L0,5 Z"/>
           			</marker>
           			
           			<marker id="flow5Marker" refX="18" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
               			<path d="M5,0 L5,5.11 L0,2.5 Z"/>
           			</marker>
           			
						<line id="line1" y2="26%" x2="48%" y1="18%" x1="48%" class="svg-line"/> <!-- y1 to y2 -->
						<line id="line2" class="svg-line" x1="26%" y1="39%" x2="26%" y2="47%"/>
						<line id="line3" class="svg-line" x1="22%" y1="60%" x2="22%" y2="68%"/>
						<line id="line4" class="svg-line" x1="74%" y1="39%" x2="74%" y2="47%"/>
						<line id="line5" class="svg-line" x1="77%" y1="59%" x2="77%" y2="68%"/>
						
						<line id="rev1" class="svg-revline" x1="24%" y1="68%" x2="24%" y2="62%"/>
						<line id="rev2" class="svg-revline" x1="28%" y1="47%" x2="28%" y2="41%"/>
						<line id="rev3" y2="19.5%" x2="50%" y1="26%" x1="50%" class="svg-revline"/>
						
						<line id="rev4" class="svg-revline" x1="79%" y1="68%" x2="79%" y2="62%"/>
						<line id="rev5" class="svg-revline" x1="76%" y1="47%" x2="76%" y2="41%"/>
						
						
				</svg>
				
				<div class="col-xs-12 marginBtm" style="margin-top: 35px;">
					<div class="col-xs-offset-4 col-xs-4">
						<!-- <div><img src="index.png" alt="Smiley face" width="42" height="42">
						</div> -->
						<div id="jApp" class="border text-center jvaApp rectangle opacity00" style="padding:5px;">
							<div><img src="index.png" alt="coffeeCup" width="22" height="22"></div>
							<div>Java Application</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-12 marginBtm">
					<div class="col-xs-offset-2 col-xs-8">
						<div id="partial" class="border text-center padding10 driver opacity00">
							<div>JDBC partial</div>
							<div>Type2 Driver</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-12 marginBtm">
					<div class="col-xs-offset-1 col-xs-4">
						<div id="vendorOracle" class="border text-center dbLibrary opacity00">
							<div class="padding10">
								<div>Vendor(Oracle)</div>
								<div>Database library</div>
							</div>
						</div>
					</div>
					
					<div class="col-xs-offset-2 col-xs-4">
						<div id="vendorMySql" class="border text-center padding10 dbLibrary opacity00">
							<div>Vendor(MySQL)</div>
							<div>Database library</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-12 paddig00" style="border-top:2px solid gray;"></div>
				
				<div class="col-xs-12 marginBtmTop">
					<div class="col-xs-12" style="margin: 39px 0px 0px;">
						<div class="col-xs-offset-1 col-xs-3">
							<div id="oracleDB" class="col-xs-12  database-box opacity00">
								<div class="oval dataBase" style="background-color: thistle;"></div>
								<span class="text-font database-text-middle dataBase"
									style="background-color: thistle; border-radius: 8px"> <b>Database</b>
								</span>
							</div>
						</div>
						
						
						<div class="col-xs-offset-4 col-xs-3">
							<div id="sqlDB" class="col-xs-12  database-box opacity00">
								<div class="oval dataBase" style="background-color: thistle;"></div>
								<span class="text-font database-text-middle dataBase"
									style="background-color: thistle; border-radius: 8px"> <b>Database</b>
								</span>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</div>
	</div>	
	
	
	
</body>


</html>