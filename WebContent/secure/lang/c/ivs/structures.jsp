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
	<script src="/secure/lang/c/js-min/s.min.js"></script>
	
	<title>structures</title>
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
	
#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 115px;
    margin-top: 20px;
    color: black;
    padding: 10px;
}
	
.color-rose {
	color:#8B008B;
}
	
.color-yellow {
 	color: yellow;
 }
 	
.introjs-tooltip {
    min-width: 241px;
}
    
#table {
	border: 1px solid Black;
    width: 100px;
    font-size: 15px;
    text-align: center;
}
    
.memory {
	border: 1px solid Black;
}   
	 
.color-green {
	color: green;
}

#declarationDefination {
	position: relative;
	z-index: 9999999;
	font-size: 18px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	text-align: center;
	color: #CD5B45;
}
	
.text-center {
	text-align: center;
}
</style>

<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Structures</span>
</div>

<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-8 col-xs-offset-2 visibility-hidden'></div>
</div>

<div class='col-xs-12'>
	<div class='col-xs-offset-4 col-xs-4 opacity00' style='margin-top: 10px' id='declarationDefination'> Structure Declaration and Definition</div>
</div>

<div class='col-xs-12 col-xs-offset-3 '>
	<div class='col-xs-4' style='margin-top: 10px;'>
		<pre id='exampleOfStudent' style='height: 210px;' class='opacity00'>   
    <span id='studentStruct'>struct <span class='color-rose'>student</span></span>
   <span id='members'>{
          <span id='int'><span class='color-rose'>int</span> a;</span>
          <span id='float'><span class='color-rose'>float</span> b;</span>
          <span id='char'><span class='color-rose'>char</span> c;</span>
   }</span>;
     <span id='studentVariables'>struct student s1, s2, s3;</span></pre>
	</div>
	
<div id='tables' class='col-xs-2' style='margin-top: 2px;'>
	<div id='storeS1' class="col-xs-12 opacity00">
    	<div  class="col-xs-4">
     		<div style="margin-left: 35px;"><b class="color-green">s1</b></div>
     			<div id='border'>
					<table style="border: 1px solid black; height: 15px; margin-left: -16px;" class="" id="table">
						<tbody>
							<tr>
					  			<td class="">a</td>
					  			<td class="">b</td>
					  			<td class="">c</td>
  							</tr>
							<tr>
					  			<td class="memory opacity00">memory</td>
					  			<td class="memory opacity00">memory</td>
					  			<td class="memory opacity00">memory</td>
		  					</tr>
		  					<tr>
					  			<td class="">1024</td>
					  			<td class="">1026</td>
					  			<td class="">1030</td>
		  				  </tr>
        				</tbody>
      				</table>
     			 </div>
 			 </div>
		</div>
		
<div  id='storeS2' class="col-xs-12 opacity00">
	<div  class="col-xs-4">
   		<div style="margin-left: 35px; margin-top: 13px;"><b class="color-green">s2</b></div>
   			<div id='border'>
				<table style="border: 1px solid black; height: 15px; margin-left: -16px;" class="" id="table">
					<tbody>
						<tr>
				  			<td class="">a</td>
				  			<td class="">b</td>
				  			<td class="">c</td>
	  					</tr>
						<tr>
				  			<td class="memory opacity00">memory</td>
				  			<td class="memory opacity00">memory</td>
				  			<td class="memory opacity00">memory</td>
	  					</tr>
			  			<tr>
				  			<td class="">1040</td>
				  			<td class="">1042</td>
				  			<td class="">1046</td>
			  			</tr>
  					</tbody>
  				</table>
  			</div>
		</div>
	</div>
	
<div   id='storeS3' class="col-xs-12 opacity00">	
	<div class="col-xs-4">	
  		<div style="margin-top: 8px; margin-left: 35px;"><b class="color-green">s3</b></div>
  			<div id='border'>
				<table style="border: 1px solid black; height: 15px; margin-left: -14px;" class="" id="table">
					<tbody>
						<tr>
				  			<td class="">a</td>
				  			<td class="">b</td>
				  			<td class="">c</td>
						</tr>
						<tr>
				  			<td class="memory opacity00">memory</td>
				  			<td class="memory opacity00">memory</td>
				  			<td class="memory opacity00">memory</td>
			  			</tr>
			  			<tr>
				  			<td class="">1050</td>
				  			<td class="">1052</td>
				  			<td class="">1056</td>
			  			</tr>
  						</tbody>
  					</table>
  				</div>
			</div>
    	</div>
    </div>
</div>

<div class='col-xs-12 col-xs-offset-3'>
	<div id='structureDeclaration'class='col-xs-3 opacity00' style='margin-top: 10px;'>
		<pre id='declarationSyntax' class=''>     <span id='keyWord'>struct</span> <span id='structureName' class='color-rose'>structure_name</span> 
     <span id='enclosedBraces'>{
	    Data_type1 var1;
	    Data_type2 var2;
            ....
            ....
            Data_typen varn;
     }</span><span id='semicolon'>;</span></pre>
	</div>
	<div  class='col-xs-3' style='margin-top: 10px;'>
	<pre id='exampleStructureDeclaration' class='opacity00'>    <span id='structutreIdentifier'>struct <span class='color-rose'>employee</span></span>
    {
           <span id='name'><span class='color-rose'>char</span> name[20];</span>
           <span id='id'><span class='color-rose'>int</span> id;</span>
           <span id='long'><span class='color-rose'>float</span> salary;</span>
     };
     
     </pre></div>
</div>

<div class='col-xs-12 col-xs-offset-3'>
	<div id='structureDefination' class='col-xs-6'>
			<pre id='definitionSyntax' class='opacity00'>  <span id='keyWord1'>struct</span><span id='structureName1' class='color-rose'> structure_name</span> <span id='structureVariables'>svar1, svar2, ...., svarn;</span></pre>
	</div>
</div>

<div class="button col-xs-12 text-center" id="button">
	<button class="btn btn-success glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>

<script>
	$(document).ready(function() {
		structuresReady();
	});
</script>
</html>