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
	<script src="/secure/lang/c/js-min/ns.min.js"></script>
	
	<title>nested structures</title>
</head>
<style>
#totaldiv {
	margin-top: 25px;
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
    border-radius: 0px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 62px;
    margin-top: 30px;
    color: black;
}

.color-yellow {
	color: yellow;
}

.color-green {
	color: green;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;

}
th, td {
    padding: 5px;
    text-align: center;    
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 143px;
    margin-bottom: 14px;
    overflow: auto;
    padding: 17px;
    white-space: pre-line;
}

.accountNumber {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.color-lightblue {
	color: #0095dd;
}

.color-maroon {
	color: #8B0000;
}

.input {
	background-color: #000;
    border-width: 0;
    color: #0f0;
    width: 200px;
 }
 
 #nameBox {
 	width: 160px !important;
 	height: 63px !important;
 }
 
 #cityBox {
 	width: 167px !important;
 	height: 20px !important;
 }
 
 #phoneNoBox {
 	width: 90px !important;
 	height: 20px !important;
 }
 
 #pinNoBox {
 	width: 49px !important;
 	height: 20px !important;
 }
 
.color-blue {
	color: #0000CD;
}

.color-red {
	color: red;
}

.input {
	position: relative;
	display: inline-block;
	height: 20px !important;
}

#outPut {
	color: #0f0;
}
</style>
<body>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Nested Structures</span>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-6 col-xs-offset-3 visibility-hidden'></div>
</div>

<div style='margin-top: 20px; border: 1px solid black; border-radius: 10px; height: 246px;' id='tableDiv' class='col-xs-12 col-xs-offset-2 col-xs-8 visibility-hidden'>
	<div class='col-xs-12'>
		<div class='col-xs-6'>
	<pre>           <span id='structDate' class='opacity00'><span class='color-rose'>struct</span> date
          <span id='structureDateMembers' class=''><span id='openBracket'> {</span>
             <span id='intDay'><span class='color-rose'>int</span> day;</span>
             <span id='intMonth'><span class='color-rose'>int</span> month;</span>
             <span id='intYear'><span class='color-rose'>int</span> year;</span>
          <span id='closedBracket'> };</span></span></span>
           <span id='structAccount' class='opacity00'><span class='color-rose'>struct</span> account
          <span id='strucutreAccountMembers' class=''><span id='openBracket1'> {</span>
             <span id='intAccount'><span class='color-rose'>int</span> accno;</span>
             <span id='charAccountType'><span class='color-rose'>char</span> acctype;</span>
             <span id='structLastPayment'><span class='color-rose'>struct</span> date lastpayment;</span>
          <span id='closedBracket1'> }</span></span></span> <span id='accountVar' class='opacity00'>obj;</span></pre>
    	 </div>
    	 	<div class='col-xs-6' style='margin-top: 40px;'>
    	 		<div id = 'ob1' class='color-green opacity00' style='margin-left: 170px'><b style='position: relative; z-index: 9999999;'>obj</b></div>
    	 		<table style="width:100%;" id='accountVariableTable' class='visibility-hidden'>
					  <tr>
					    <td id='accountNumber0' class='color-blue'>accno.</td>
					    <td id='accountNumber1' class='color-blue'>acctype</td>
						<td id='accountNumber2' class='color-blue'>lastpayment</td>
					  </tr>
					  <tr>
					    <th rowspan="2" id='acctno'></th>
					   	<th rowspan="2" id='accttype'></th>
					  <td id='lastpayment'>
						<table style="width:100%">
							  <tr>
									<td>day</td>
									<td>month</td>
									<td>year</td>
							 </tr>
							<tr>
							<td></td>
							<td></td>
							<td></td>
							</tr>
					 	</table>
					 </td>
							<tr></tr>
				</table>
    	 		
    	  </div>
     </div>
</div>
<div class='col-xs-12 col-xs-offset-1 col-xs-10 visibility-hidden' id='tableDiv1' style='border: 1px solid black; margin-top: 15px; height: 377px; border-radius: 10px;'>
	<div class='col-xs-6'>
		<pre id='structEmployee'><span id='structEmployeeE'><span class='color-rose'>struct</span> employee
<span>{</span>
        <span id='subStructOfEmployee'><span class='color-rose'>char</span> name[20];
        <span class='color-rose'>struct</span> address
        {
            <span class='color-rose'>char</span> city[25];
            <span class='color-rose'>char</span> phone[10];
            <span class='color-rose'>int</span> pin;
        }<span class='color-rose'>a</span>;</span>
  }<span class='color-rose'>e</span>;</span>
  <span id='printf1'><span class='color-maroon'>printf</span>(<span class='color-lightblue'>"enter employee name"</span>);</span>
  <span id='scanf1'><span class='color-maroon'>scanf</span>(<span class='color-lightblue'><span id='percentiles1'>"%s"</span></span>, <span id='name1'>e.name</span>);</span>
  <span id='printf2'><span class='color-maroon'>printf</span>(<span class='color-lightblue'>"enter employee city"</span>);</span>
  <span id='scanf2'><span class='color-maroon'>scanf</span>(<span class='color-lightblue'><span id='percentiles2'>"%s"</span></span>, <span id='city1'>e.a.city</span>);</span>
  <span id='printf3'><span class='color-maroon'>printf</span>(<span class='color-lightblue'>"enter employee phoneNo."</span>);</span>
  <span  id='scanf3'><span class='color-maroon'>scanf</span>(<span class='color-lightblue'><span id='percentiles3'>"%s"</span></span>, <span id='phone1'>e.a.phone</span>);</span>
  <span id='printf4'><span class='color-maroon'>printf</span>(<span class='color-lightblue'>"enter employee pinNo."</span>);</span>
  <span id='scanf4'><span class='color-maroon'>scanf</span>(<span class='color-lightblue'><span id='percentiled'>"%d"</span></span>, <span id='pin'>&e.a.pin</span>);</span>
  <span id='printf5'><span class='color-maroon'>printf</span>(<span class='color-lightblue'>"%s %s %s %d"</span>, e.name, e.a.city, e.a.phone, e.a.pin);</span></pre>
</div>
	<div class='col-xs-6' >
		<div style='margin-left: 183px; color: green' ><span id='divE' class='opacity00' style='position: relative; z-index: 9999999;'> e </span></div>
	 	 <table style="width:100%; margin-top: 10px;" id='TableBox' class ='visibility-hidden'>
			  <tr>
			    <td class='color-blue' id='divName' style='position: relative; z-index: 9999999;'>name</td>
				<td class='color-green' id='divA' style='position: relative; z-index: 9999999;'>a</td>
			  </tr>
			  <tr>
			    <td id='nameBox' class='opacity00' rowspan="2" ></td>
			  <td>
				<table style="width:100%">
					  <tr>
						<td class='color-blue' id='subcity' style='position: relative; z-index: 9999999;'>city</td>
						<td class='color-blue' id='subphone' style='position: relative; z-index: 9999999;'>phone</td>
						<td class='color-blue' id='subpin' style='position: relative; z-index: 9999999;'>pin</td>
					 </tr>
					<tr>
						<td class='opacity00' id='cityBox'></td>
						<td class='opacity00' id='phoneNoBox'></td>
						<td class='opacity00' id='pinNoBox'></td>
					</tr>
			 	</table>
			 </td>
				  <tr>
				  </tr>
		</table>
		
		<div id="consoleId" class="center opacity00" style="margin-top: 66px;">
			<div class="output-console-title-bar">
				<span class="title"><b>Console</b></span>
			</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<span class='opacity00 inputDiv' id='nameSpan'>Enter employee name : <span id='nameEnterspan'><input class="index-textbox-size input"  type="text" id='nameInput' Maxlength='15'></span></span>
					<span class='opacity00 inputDiv' id='citySpan'>Enter employee city : <span id='cityEnterspan'><input class="index-textbox-size input"  type="text" id='cityInput' Maxlength='15'></span></span>
					<span class='opacity00 inputDiv' id='phoneNumberSpan'>Enter employee phoneNo.: <span id='phoneNoEnterspan'><input class="index-textbox-size input"  type="text" id='phoneNumberInput' Maxlength='10'></span></span>
					<span class='opacity00 inputDiv' id='pinNumberSpan'>Enter employee pinNo. : <span id='pinNoEnterspan'><input class="index-textbox-size input"  type="text" id='pinNumberInput' Maxlength='4'></span></span>
					<span class='opacity00' id='outPut'></span>
				</div>
		</div>
	</div>
</div>

<div style='margin-top: 8px' id='tableDiv1' class='col-xs-12 col-xs-offset-3 col-xs-6'>
	<pre id='embeddedFormat' class='opacity00'>          external_<span class='color-rose'>struct</span>_variable . internal_<span class='color-rose'>struct</span>_variable . member</pre>
</div>

<div class="button col-xs-12 text-center " id="button">
	<button class="btn btn-success glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>
<script>
	$(document).ready(function() {
		nestedStructuresReady();
	});
</script>
</html>