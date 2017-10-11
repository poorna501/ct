<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<script src="/js/jquery-latest.js"></script>
	<script src="/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/css/introjs.css">
	<link rel="stylesheet" href="/css/introjs-ct.css">
	<link rel="stylesheet" href="/css/animate.css"/>
	<link rel="stylesheet" href="/css/jquery-ui.css"/>
	<script src="/js/gs/TweenMax.min.js"></script>
	<script src='/js/intro.js'></script>
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<script src="/js/typewriting.min.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/secure/lang/c/js-min/fdf.min.js"></script>
	
	<title>function definition</title>
</head>
<style>
#totaldiv {
	margin-top: 20px;
	}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	}

.color-rose {
	color:#8B008B;
	}

#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 92px;
    margin-top: 20px;
    color: black;
    padding: 10px;
	}

.introjs-tooltip {
    min-width: 241px;
    }
  
 .color-yellow {
 	color: yellow;
 }
 
 .color-green {
 	color: green;
 }
</style>
<body>
<div id ='totaldiv' class='totaldivclass'>
	<div id='title' class='label ct-demo-heading col-xs-offset-5'>
		<span class=''>Function Definition</span>
	</div>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-6 col-xs-offset-3 opacity00'>
	</div>
</div>
<div class='col-xs-12' >
		<div class='col-xs-offset-4  col-xs-4 ' id='declaration2'>
			<pre id='format' style='margin-top: 25px;' class='opacity00'><span id='returnType1' class='color-rose'> <b>return_type </b></span><span id='functionName1'> function_name</span><span id='argument1'> (<b class='color-rose'>parameters</b>)</span><span id='openbrace'> { </span>
     	      <span id='functionBody'><span>declaration part;</span> 
      	      <span id='functionBody1'>executable statements;</span></span>
              <span id='returnValue'>return value </span>;
  }</pre>
	</div>
</div>
	<div class='col-xs-12' id='firstDeclarationdiv'>
		<div class='col-xs-offset-4  col-xs-4 opacity00' id='declaration1'>
			<pre style='margin-top: 25px;'><span id='functionDeclaration'><span id='returnType' class='color-rose'> <b>int </b></span><span id='functionName'> sum</span><span id='argument'> (<b class='color-rose'>int </b>a, <b class='color-rose'> int </b>b)</span></span><span id='openbrace'> { </span>
     <span id='functionBody3'><span><b class='color-rose'> int </b></span> s<span>;</span>
      s = a + b;</span>
     <span id='returnS'><b class='color-rose'> return </b> s;</span>
  }</pre>
		</div>
	</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-success glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>

</body>
<script>
	$(document).ready(function() {
		functionDefinitionReady();
	});
</script>
</html>