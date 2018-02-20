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

<title>Callable Statement</title>

<style type="text/css">
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
    border: 2px dashed green;
}
.elipse-shape {
    border: 2px solid gray;
    border-radius: 50%;
    position: relative;
    background-color: antiquewhite;
    padding: 10px;
}
.margin-12 {
	margin: 12px;
}
#driverManager {
	padding: 10px 20px;
	background-color: rosybrown;
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
	display: table-cell;
	position: absolute;
	width: 97%;
	height: 25px;
	margin-top: -8px;
	margin-left: 3px;
	z-index: 10 !important
}
.padding1 {
	padding: 1px;
}
.data-base-content {
	padding: 0 42px;
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
    z-index: 100000 !important;
}
.y-tube {
  	background: url("/images/pipes.png") -47px 0;
    height: 39px;
    left: 50px;
    position: absolute;
    top: 14px;
    /* transform: rotate(180deg); */
    width: 144px;
    z-index: 100000 !important;
}
.tube.x {
    height: 15px;
    border-color:skyblue white;
    width: 137px;
    top: 63px;
    left: -32px;
    z-index: 6;
}
.tube.y {
    border-color: white skyblue;
    height: 104px;
    left: 112px;
    position: absolute;
    top: -9px;
    width: 15px;
    z-index: 5;
}

</style>
</head>

<body>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#dummyDiv").css("height", $("#mainDiv").height());
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
				<div class="col-xs-8 col-xs-offset-2 margin-top-10 text-center" id="mainDiv">
					<div class="col-xs-12 box-border">
						<div class="col-xs-12">
							<div class="col-xs-3 margin-top-30">
								<div class="col-xs-12 padding00">
									<div class="position margin-top-10 user-box padding00 opacity00" id="userAplication">
										<div class="col-xs-12" style="background-color: khaki"><b>Java Application</b></div>								
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
								<div class="tube x opacity00" id="xPipeLine">
									<div class="water left"></div>
								</div>
							</div>
							<div class="col-xs-6 position padding00">
								<div class="col-xs-12 context margin-top-30 opacity00" id="contextDiv">
									<div class="margin-12 position">
										<div class="elipse-shape opacity00" id="connection">
											<div><b>Connection</b></div>
										</div>
									</div>
									<div class="margin-12 position">
										<div class="elipse-shape opacity00" id="callbleStatmt">
											<div><b>callable statement</b></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="tube y opacity00" id="yPipeLine">
								<div class="water top" style="height: 0%;"></div>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="col-xs-3 margin-top-50">
								<div class="col-xs-12 padding00 margin-top-50 opacity00" id="dataBaseDiv">
									<div class="col-xs-12 padding00">
										<div class="data-base-open" style="background-color: thistle;"></div>
									</div>
									<div class="position padding00 database-box" id="dataBase">
										<div class="col-xs-12 data-base-content margin-top-30">
											<div class="col-xs-12 padding00">
												<div class="user-box padding1">sp1</div>
												<div class="user-box padding1">sp2</div>
												<div class="user-box padding1">sp3</div>
												<div class="">.....</div>
												<div class="user-box padding1">spn</div>
											</div>
											<div class="col-xs-12 margin-top-10"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 margin-top-30"></div>
					</div>
				</div>
				<!-- <div class="col-xs-8 col-xs-offset-2 margin-top-10 text-center bg" id="dummyDiv">
					<img class="x-tube">
					<img class="y-tube"> 
					<div class="tube x" style="width: 200px; top: 20px; left: 20px; z-index: 6;"><div class="water left" style="width: 0%;"></div></div>
					<div class="tube y" style="height: 85px; top: 184px; left: 175px; z-index: 5;"><div class="water top" style="height: 0%;"></div></div>
					<div></div>
				</div> -->
			</div>
		</div>
	</div>

</body>
</html>