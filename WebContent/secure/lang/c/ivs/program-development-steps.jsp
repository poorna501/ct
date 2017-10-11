<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/animate.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/pds.min.js" type="text/javascript"></script>

<title>Insert title here</title>
<style type="text/css">

.box-shadow {
    box-shadow: 0 5px 6px 0;
    font-weight: bold;
    background-color: rgb(176, 196, 222);
}

.box-border {
    border: 1px solid gray;
    border-radius: 8px;
}

.box-height {
	height: 555px;
}

.user-btn {
	background-color: green;
	margin-top: 2px !important;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.text-font {
	font-size: 12px;'
}

.introjs-tooltip {
	min-width: 300px;
}

.box-padding {
	padding: 12px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
}

.zIndex {
	z-index: 10000000 !important;
	position: relative;
}

</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		programDevelopmentStepsReady();
	});
</script>

<div class="text-center col-xs-12" style="margin-top: 20px;">
		<h1 id="heading" class="label ct-demo-heading text-center">Program Developing Steps</h1>
</div>

	<div class="col-xs-12" style="margin-top: 30px;">
		<div id="phaseDiv" class="col-xs-offset-1 col-xs-4 box-border box-height opacity00">
			<div>
				<div id="phase1" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 15px; line-height: 50px;">
					<span id="step1" class="box-border box-shadow box-padding">Specifying the problem requirements</span>
				</div>

				<div id="phase2" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step2" class="box-border box-shadow box-padding">Anaylysis</span>
				</div>
				
				<div id="phase3" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step3" class="box-border box-shadow box-padding">Design</span>
				</div>
				 
				<div id="phase4" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step4" class="box-border box-shadow box-padding">Coding</span>
				</div>
				
				<div id="phase5" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step5" class="box-border box-shadow box-padding">Testing</span>
				</div>
				<div id="phase6" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step6" class="box-border box-shadow box-padding">Maintenence</span>
				</div>
			</div>
		</div>
		
		<div id="discriptionDiv"
			class="col-xs-offset-1 col-xs-5 box-border box-height opacity00" style="line-height: 1.8;">

			<div id="descriptionPhase1" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Specifying the problem requirements: </h6>
				<div class="text-font">
					In this step we will try to understand the problem statement for which we are trying 
					to design a solution.
				</div>
			</div>

			<div id="descriptionPhase2" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Analysis Phase: </h6>
				<div class="text-font">
					The analysis phase involves identifying in detail the various 
					inputs that are required by the problem and the output that is expected out of the problem.
				</div>
			</div>

			<div id="descriptionPhase3" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Designing Phase: </h6>
				<div class="text-font">
					The design process involves arriving at a step by step process 
					that will allow us to reach the intended goals. Tools like using a flow chart etc may be employed 
					to pictorially represent the step by step solution.
				</div>
			</div>

			<div id="descriptionPhase4" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Coding Phase: </h6>
				<div class="text-font">
					The coding phase involves translating the steps identified in 
					the design phase into a machine readable code which is used eventually for the execution, 
					this is where a programing language is used to translate a solution present in the design 
					to the actual programing solution.
				</div>
			</div>

			<div id="descriptionPhase5" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Testing Phase: </h6>
				<div class="text-font">
					The testing phase involves verifying if the solution will 
					arrive at after the coding phase needs the original requirements by producing desired outputs 
					for the stated inputs.
				</div>
			</div>

			<div id="descriptionPhase6" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Maintenance Phase: </h6>
				<div id="lastPhase" class="text-font">
					Normally any software program that is developed will have a maintenance 
					phase wherein small update to the existing software or changes due to internal or external 
					policies are put into the software to keep it up to date. Here more often small patches to the 
					existing software for undetected erros may also be added.
				</div>
			</div>

		</div>
	</div>
	<div class="col-xs-12 text-center" style="margin-top: 20px;"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
</body>
</html>