<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js/ct-svg-lines.js"></script>
<title>Transaction</title>
<style>

/****************************** css for ct-svg-lines.js starting **************************/

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke-width: 2; 
	position: relative;
	marker-end: url("#arrowEnd"); 
}

.svg-dotted-line {
	stroke-dasharray: 5;
}

/****************************** css for ct-svg-lines.js Ending **************************/

.margin-top-20 {
	margin-top: 20px;
}
 
th {
	text-align: center;
}

.padding0 {
	padding: 0;
}

.height {
	height: 200px;
}

</style>
</head>
<body>
	<div class="margin-top-20 col-xs-12">
	<div class="col-xs-12 text-center">
			<h1 class="label ct-demo-heading">Transaction Management</h1>
		</div>
		<div class="col-xs-12 margin-top-20 height">
			<div class="col-xs-offset-1 col-xs-10">
				<div class='col-xs-12 text-center margin-top-20'>
					<div class='col-xs-offset-3 col-xs-6' id='topicsDiv'>
						<div class='col-xs-3 padding0'>
							<button id='atomicity' onclick=""
								type="button" class="btn btn-success">Atomicity</button>
						</div>
						<div class='col-xs-3 padding0'>
							<button id='consistency' onclick="" type="button"
								class="btn btn-success">Consistency</button>
						</div>
						<div class='col-xs-3 padding0'>
							<button id='isolation' onclick=""
								type="button" class="btn btn-success">Isolation</button>
						</div>

						<div class='col-xs-3 padding0'>
							<button id='durability' onclick=""
								type="button" class="btn btn-success">Durability</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12">
			<div class="col-xs-offset-1 col-xs-10 text-center">
				<div class="col-xs-6 text-center">
					<div class="col-xs-12">
						<table class="table table-bordered">
						<caption title="This is sender information table caption" class="text-center">Sender</caption>
							<thead><tr>
								<th>A/C</th>
								<th>Name</th>
								<th>Debited</th>
								<th>AvalBal</th>
							</tr></thead>
							<tr>
								<td>10036</td>
								<td>Ravi</td>
								<td>5000</td>
								<td>52000</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="col-xs-6">
					<div class="col-xs-12"><table class="table table-bordered">
					<caption class="text-center">Receiver</caption>
							<thead><tr>
								<th>A/C</th>
								<th>Name</th>
								<th>Credited</th>
								<th>AvalBal</th>
							</tr></thead>
							<tr>
								<td>10039</td>
								<td>Balu</td>
								<td></td>
								<td>25000</td>
							</tr>
						</table></div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>