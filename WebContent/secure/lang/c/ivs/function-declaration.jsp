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
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/js/typewriting.min.js"></script>
	<script src="/secure/lang/c/js-min/fd.min.js"></script>
	
<title>function declaration</title>
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
	color: #8B008B;
	}

#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 150px;
    margin-top: 20px;
    color: black;
    padding: 6px 2px;
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
		<span class=''>Function Declaration</span>
	</div>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-6 col-xs-offset-3 opacity00'>
</div>
</div>
<div class='col-xs-12' id=''>
	<div class='col-xs-offset-4 text-center	col-xs-4 ' id='declaration3'>
		<pre id='format' class='opacity00' style='margin-top: 20px'><span id='returnType3' class='color-rose'><b>return_type</b></span><span id='functionName3'> function_name</span><span id='argument3'>(<span class='color-rose'><b>parameter_types</b></span>)</span><span id='semicolon3'>;</span></pre>
	</div>
</div> 
<div class='col-xs-12' id='firstDeclarationdiv'>
	<div class='col-xs-offset-4 text-center	col-xs-4 visibility-hidden' id='declaration1'>
		<pre id='example1' style='margin-top: 25px'><span id='returnType' class='color-rose'><b>int </b></span><span id='functionName'> sum</span><span id='argument'> (<b class='color-rose'>int</b>, <b class='color-rose'>int</b>)</span><span id='semicolon'>;</span></pre>
		<pre id='example2' style='margin-top: 20px'><span id='returnType1'><b class='color-rose'>void </b></span><span id='functionName1'> display</span><span id='argument1'> (<b class='color-rose'>void</b>)</span><span id='semicolon1'>;</span></pre>	
		<pre id='example3' style='margin-top: 20px'><span id='returnType2'><b class='color-rose'>int </b></span><span id='functionName2'> gettime</span><span id='argument2'> (<b class='color-rose'>void</b>)</span><span id='semicolon2'>;</span></pre>
	</div>
</div>
<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-success glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>
<script>

	$(document).ready(function() {
		functionDeclarationReady();
	});

</script>
</html>