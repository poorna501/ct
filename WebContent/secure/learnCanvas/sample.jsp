<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>

<title>Insert title here</title>

<style type="text/css">
#myCanvas {
	border: 2px solid black;
}
</style>

</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	var cid = document.getElementById("myCanvas");
	var idTx = cid.getContext("2d");
	idTx.moveTo(0, 0);
	idTx.lineTo(300, 300);
	idTx.stroke();
	idTx.fillText("Hello!", 10, 50);
	idTx.font = "50px Arial";
});

</script>

<div class="col-xs-12">
	<div class="col-xs-12">
		<canvas id="myCanvas" width="300" height="300" >Hello poorna!</canvas>
	</div>
</div>
</body>
</html>