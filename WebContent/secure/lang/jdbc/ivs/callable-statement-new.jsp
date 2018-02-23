<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/animate.css"/>

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/ct-svg-lines.js"></script>

<script type="text/javascript" src="/secure/lang/jdbc/js/callable-statement-new.js"></script>

<title>Callable Statement</title>

<style type="text/css">
.text-right{
	margin-bottom: -10px;
}
.user-btn {
	background-color: green;
	margin: 0px !important;
}
.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}
.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}
div, span {
	position: relative;
}
.padding00 {
	padding: 0;
}
.position {
	position: relative;
	display: inline-block;
}
.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
}
.svg-line	{
	position: relative;
	stroke:	green;
	stroke-width: 2;	
}
.svg-rect {
	position: relative;
	stroke: skyblue;
	width: 5;
	fill-opacity:0.1;
	fill:blue;
}
.popover {
	min-width: 100px !important;
	z-index: 1;
	min-height: 20px !important;
}
.popover-content {
	font-size: 15px;
}
.margin-top-10 {
	margin-top: 10px;
}
.margin-top-30 {
	margin-top: 30px;
}
.margin-top-50 {
	margin-top: 50px;
}
.user-box {
    border: 2px solid gray;
    border-radius: 6px;
    box-shadow: 0 1px 4px 1px gray;
}
.context {
    background-color: rgba(255, 143, 11, 0.15);
    /* border: 2px dashed green; */
    box-shadow: 0 1px 4px 1px gray;
}
.elipse-shape {
    border: 2px solid gray;
    border-radius: 50%;
    position: relative;
    background-color: antiquewhite;
    padding: 15px;
}
.margin-12 {
	 margin: 12px 12px 12px 31px;
}
#driverManager {
	padding: 10px 20px;
	background-color: rosybrown;
	z-index: 10
}
.database-box {
    border: 1px solid gray;
    border-radius: 8px;
    border-top: none;
    background-color: thistle;
}
.data-base-open {
    border: 2px solid gray;
    border-radius: 50%;
    display: inline-block;
    height: 25px;
    margin-top: -8px;
    width: 99%;
    z-index: 10;
}
.padding1 {
	padding: 1px;
}
y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}
.blue {
	background-color: blue;
	font-weight: bold;
	color: white;
}



#dummyDiv {
	position: absolute;
}

.tube {
	background-color: #f3f3f3;
	border: 2px solid skyblue;
}

.x-tube {
  	background:url("/images/pipes.png") -17px -9px;
    height: 39px;
    left: 256px;
    position: absolute;
    top: 141px;
    transform: rotate(180deg);
    width: 144px;
}
.y-tube {
  	background: url("/images/pipes.png") -47px 0;
    height: 39px;
    left: 50px;
    position: absolute;
    top: 14px;
    width: 144px;
}
.x {
    height: 15px;
    width: 0px;
    top: 63px;
    left: -32px;
}
.tube.y-axis {
    border-color: white skyblue;
    height: -20px;
    left: 125px;
    position: absolute;
    top: 90px;
    width: 15px;
}
#yValues span {
	 top: 100px; 
	 left: 2px;
	 position: absolute;
}
#xValues span {
	 top: -5px; 
	 left: -10px;
	 position: absolute;
}
#streProc {
	position: absolute;
	top: 28px;
	color: blue;
	font-weight: bold;
}
#contextDiv {
	z-index: 1000 !important;
	/* background-color: antiquewhite; */
}
.box {
	position: relative;
	display: inline-block;
}
i {
	position: absolute;
	/* top: 5px; */
	left: 1px;
}

</style>
</head>

<body>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#dummyDiv").css("height", $("#mainDiv").height());
			callableStatementAnimation();
			//$(".opacity00").removeClass("opacity00");
			for (var i = 0; i <= 5; i++) {
				$("#yValues").append('<span class="opacity00">'+ i % 2 +'</span>');
				$("#xValues").append('<span class="opacity00">'+ i % 2 +'</span>')
			}
		});
	</script>

	<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="ct-box-main">
		 		<div class="text-center">
					<h1 class="label ct-demo-heading text-center" id="headingSection">Callable Statement</h1>
				</div> 	
			</div>
		</div>
		<div class="col-xs-12">
			<div class="col-xs-12">
				<div class="col-xs-8 col-xs-offset-2 margin-top-10 text-center">
					<div class="col-xs-12 box-border opacity00" id="mainDiv">
						<div class="col-xs-12">
							<div class="col-xs-3 margin-top-30">
								<div class="col-xs-12 padding00">
									<div class="position margin-top-10 user-box padding00 opacity00" id="userAplication">
										<div class="col-xs-12" style="background-color: khaki" id="javaAppli"><b>Java Application</b></div>								
										<div class="col-xs-12 user-box padding00" style = "background-color: sandybrown"><b>JBCD API</b></div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="col-xs-3">
								<div class="col-xs-12 padding00">
									<div class="position margin-top-50 user-box padding00 opacity00" id="driverManager">
										<b>Driver Manager</b>
									</div>
								</div>
							</div>
							<div class="col-xs-2">
								<div class="x opacity00" id="xPipeLine">
									<div id="xValues"></div>
								</div>
							</div>
							
							<div class="col-xs-6 position padding00">
								<div class="col-xs-12 margin-top-30 opacity00" id="contextDiv">
									<div class="position">
										<div class="elipse-shape opacity00" id="connection">
											<div><b>Connection</b></div>
										</div>
									</div>
									<div class="margin-12 position">
										<div class="elipse-shape opacity00" id="callbleStatmt">
											<div><b>callable statement</b></div>
											<span id="streProc" class="opacity00">sp2</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="tube y-axis opacity00" id="yPipeLine">
								<div id="yValues"></div>
							</div>
						</div>
						<div class="col-xs-12 margin-top-50">
							<div class="col-xs-3 margin-top-50" >
							<div class="col-xs-12 padding00 opacity00" id="dataBaseDiv">
									<div class="position padding00 database-box" id="dataBase">
    									<div class="data-base-open" id="dataBaseOpen" style="background-color: thistle;" data-original-title="" title="" aria-describedby="popover890423"></div>
										<div class="col-xs-12 data-base-content margin-top-10 padding00">
											<div class="col-xs-12 padding00">
												<div class="user-box box padding1 opacity00">sp1</div>
												<div class="user-box box padding1 opacity00"><span>sp2</span>
													<i class="fa fa-gear faa-spin animated fa-2x opacity00" id="run"></i>
												</div>
												<div class="box opacity00">.....</div>
												<div class="user-box box padding1 opacity00">spn</div>
											</div>
											<div class="col-xs-12 margin-top-10"></div>
										</div>
									</div>
									<div class="">Data Base</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 margin-top-30"></div>						
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12">
			<div class='buttons-div text-center'>
				<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button></div>
		</div>
		</div>
	</div>

</body>
</html>