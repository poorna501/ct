<!-- =============================================================
TOC-Reference-Name: tables-1
Objective: Creating Table, Table Header  &  Basic Styling
Coverage: Table, Row Creation, Border Creation, Border Collapse, BGColor for TH
Developed By: B.Suresh
Developed Date: 29-11-2016
Reviewed by: 
Reviewed Date:
Modified Date:  
============================================================= -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>

<link rel="stylesheet" href="/css/jquery-ui.css">

<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css"/>

<title>Introduction to Tables</title>
</head>

<style>

#totaldiv {
	margin-top: 15px;
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

.color-green {
	color: #13B737;
}

.color-b-yellow {
	color: yellow;
	font-weight: bold;
}

.usr-text {
	border-width: 0px;
	background-color: transparent;
	width: 65px;
}
.usr-text2 {
	border-width: 0px;
	background-color: transparent;
	width: 89px;
}

.usr-text1 {
	border-width: 0px;
	background-color: transparent;
	width: 45px;
}

.usr-text3 {
	border-width: 0px;
	background-color: transparent;
	width: 130px;
}

.usr-text5 {
	border-width: 0px;
	background-color: transparent;
	width: 65px;
}

.usr-text7 {
	border-width: 0px;
	background-color: transparent;
	width: 177px;
}

.errorText {
	color: red;
	font-weight: bold;
}

.usr-text4 {
	border-width: 0px;
	background-color: transparent;
	width: 211px;
}

.usr-text8 {
	border-width: 0px;
	background-color: transparent;
	width: 12px;
}

#tableBox, .tableData, .tablehead, .tableData1 {
	border: 2px solid rgba(192,192,192,0);
	position: relative;
}

.circle-css {
	border: 1px solid;
	border-radius: 2%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 2px solid orange;
	border-radius: 4px;
}

table {
    border-collapse: unset; 
    border-spacing: 2px;
}

body {
    font-size: 12px;
}

.padding-col0 {
	padding-left: 0px;
	padding-right: 0px;
}

.default {
	color: green;
}

#htmlTableCreation {
	font-size: 11px;
}


ul.tabs {
 	display: inline-block;
    line-height: 25px;
    list-style-type: none;
    margin: 0;
    max-height: 26px;
    overflow: hidden;
}

ul.tabs > li.active {
  z-index: 2;
  background: #efefef;
}


ul.tabs > li {
  	border-top-left-radius: 90px;
    border-top-right-radius: 90px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    float: right;
    height: 29px;
    margin: 0 8px;
    min-width: 221px;
    position: relative;
}

#browser {
	margin-top: 3px;
}

.margin-top-2 {
	margin-top: 2%;
}

.arrow {
	color: grey;
	font-size:20px;
	color: lightgray;
    font-size: 15px;
}

.tabs {
  height:45px;
  padding: 0 0 0 0;
  overflow:visible;
}

.usr-text-codetantra {
	border: medium none;
	min-width: 20%; 
	background: none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.usr-text-enter {
	border: medium none;
	background: none;
}

#text7 {
	position: absolute;
	display: inline-block;
	-webkit-transform: perspective(-100px) rotateX(-30deg);
 	-moz-transform: perspective(-100px) rotateX(-30deg);
}

.tab-title {
    background-color: white;
    border: 1px solid gray;
    border-radius: 25px 25px 0 0;
    color: black;
}

.top-border {
	background-color: black;
    height: 30px;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
    margin: 0;
    max-height: 35px;
    padding: 0;
}

#into {
	float: right;
    font-size: 11px;
}

.padding0 {
	padding: 0;
}

</style>

<body>
<div class='container'>
<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Introduction to Tables</span>
</div>
<div class='col-xs-12'>
	<div class='col-xs-5' style='margin-top: 20px;'>
	<pre id='htmlTableCreation'><span id='docType'class="usr-text3 default opacity00">&lt;!DOCTYPE html&gt;</span>
<span id='htmlOpen'class="usr-text5 default opacity00">&lt;html&gt;</span>
<span id='headOpen'class="usr-text5 default opacity00">&lt;head&gt;</span>
<span class='opacity00' id='titleTag'><span id='titleOpen'class="usr-text5 default">&lt;title&gt;</span><span id='titleText'class="usr-text5 default">Introduction to Tables</span><span id='titleClosed'class="usr-text5 default">&lt;/title&gt;</span></span>
<span id='styleOpen'class="usr-text5 default opacity00">&lt;style&gt;</span>  
<span><input type="text" maxlength="15" class="usr-text3 opacity00"  id='border1Px'></span>
   <span><input type="text" maxlength="11" class="usr-text4 opacity00" id='widthAttr'></span>
   <span><input type="text" maxlength="26" class="usr-text4 opacity00" id='borderCollapse'></span>
<span><input type="text" maxlength="1" class="usr-text8 opacity00"  id='closeBraceOftable'></span>	
<span><input type="text" maxlength="8" class="usr-text3 opacity00" id='tdThAttr'></span>
   <span><input type="text" maxlength="20" class="usr-text4 opacity00" id='textalignAttr'></span>
   <span><input type="text" maxlength="13" class="usr-text4 opacity00" id='paddingAttr'></span>
<span><input type="text" maxlength="1" class="usr-text8 opacity00"  id='closedTagForTdTh'></span>
<span><input type="text" maxlength="4" class="usr-text3 opacity00"   id='thAttr'></span>
   <span><input type="text" maxlength="27" class="usr-text4 opacity00" id='backgrouncolorAttr'></span>
<span><input type="text" maxlength="1" class="usr-text8 opacity00"  id='closedbracketForTh'></span>
<span id='styleClosed'class="usr-text5 default opacity00">&lt;/style&gt;</span>
<span id='headClosed'class="usr-text5 default opacity00">&lt;/head&gt;</span>
<span id='bodyOpen'class="usr-text5 default opacity00">&lt;body&gt;</span>     
<span><input type="text" maxlength="8" class="usr-text opacity00" id='tableOpenTag'></span>
   <span id='head'><input type="text" maxlength="7" class="usr-text opacity00" id='tHeadOpenTag'></span>
     <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='rowOpenTag'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testHeadOpenTag'><input type="text" maxlength="5" class="usr-text2 opacity00" id='testDataEnterTag'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testHeadClosedTag'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testHeadOpenTag1'><input type="text" maxlength="11" class="usr-text2 opacity00" id='testDataEnterTag1'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testHeadClosedTag1'></span>
       <span><input type="text" maxlength="10" class="usr-text1 opacity00" id='testHeadOpenTag2'><input type="text" maxlength="7" class="usr-text2 opacity00" id='testDataEnterTag2'> <input type="text" maxlength="7" class="usr-text1 opacity00" id='testHeadClosedTag2'></span> 
     <span><input type="text" maxlength="5" class="usr-text1 opacity00" id='rowClosedTag'></span>
   <span><input type="text" maxlength="8" class="usr-text opacity00" id='tHeadClosedTag'></span>
   <span><input type="text" maxlength="7" class="usr-text opacity00" id='tbodyOpenTag'></span>
     <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='rowOpenTag1'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testDataOpenTag'><input type="text" maxlength="7" class="usr-text2 opacity00" id='numberOne'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testDataClosedTag'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testDataOpenTag1'><input type="text" maxlength="7" class="usr-text2 opacity00" id='FounderName'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testDataClosedTag1'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testDataOpenTag2'><input type="text" maxlength="5" class="usr-text2 opacity00" id='Founded'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testDataClosedTag2'></span> 
     <span><input type="text" maxlength="5" class="usr-text1 opacity00" id='rowClosedTag1'></span>
     <span><input type="text" maxlength="4" class="usr-text1 opacity00 " id='rowOpenTag2'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testDataOpenTagLast'><input type="text" maxlength="8" class="usr-text2 opacity00" id='numberTwo'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testDataClosedTagLast'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testDataOpenTagLast1'><input type="text" maxlength="11" class="usr-text2 opacity00" id='FounderName1'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testDataClosedTagLast1'></span>
       <span><input type="text" maxlength="4" class="usr-text1 opacity00" id='testDataOpenTagLast2'><input type="text" maxlength="3" class="usr-text2 opacity00" id='Founded1'> <input type="text" maxlength="5" class="usr-text1 opacity00" id='testDataClosedTagLast2'></span> 
     <span><input type="text" maxlength="5" class="usr-text1 opacity00" id='rowClosedTag2'></span>
   <span><input type="text" maxlength="8" class="usr-text opacity00" id='tbodyClosedTag'></span>
<span><input type="text" maxlength="8" class="usr-text opacity00" id='tableClosedTag'></span>
<span id='bodyClosed'class="usr-text5 default opacity00">&lt;/body&gt;</span>     
<span id='htmlClosed'class="usr-text5 default opacity00">&lt;/html&gt;</span></pre>
</div>
<div class='col-xs-7' >
	<div class='padding-col0 opacity00 col-xs-12' id='tableOutPut' style='margin-top: 50px; border: 1px solid black'>
		<div class='col-xs-12 padding-col0'>
		   			<!-- <img src="/images/tables-1.png" style='width: 100%'> -->
			<div id='tableTitleInBrowser' class='container' style="border: 1px solid grey;  padding: 0; width: 100%;">
				<div class='tab-container'>
					<ul class="tabs clearfix" >
						<li class="active" style="display: flex; align-items: center;">
							<div id='tableTitle' class="col-xs-10">Introduction to Tables-2</div>
							<i class="col-xs-2 fa fa-times fa-sm" style="padding: 0px;"></i>
						</li>
					</ul>
					<span style='color: white; font-size: 18px;'><i class="fa fa-plus" aria-hidden="true"></i></span>
				</div>
				<div id='browser' class='col-xs-12' style='padding-bottom: 6px;' >
					<div class='col-xs-2 padding0 text-center'>
						<span id='arrowCircle' class='col-xs-4 padding0'><i  class="fa fa-arrow-left arrow" aria-hidden="true"></i></span>
						<span  class='col-xs-4 padding0'><i class="fa fa-arrow-right arrow" aria-hidden="true"></i></span>
						<span  class='col-xs-4 padding0'><i class="fa fa-rotate-right fa-1x" aria-hidden="true"></i></span>
					</div>
					<div class='col-xs-5 padding0 text-center' style="border: 1px solid; display: flex; align-items: center;">
						<span class='col-xs-1 padding0'><i class="fa fa-search fa-1x" aria-hidden="true" style="font-size: 10px;"></i></span>
						<span class='col-xs-10 padding0'><input type="text" maxlength="100" class="usr-text-codetantra" value='www.codetantra.com/w....' id='edittitle'></span>
						<span class='col-xs-1 padding0'><i class="fa fa-star-o fa-1x" aria-hidden="true"></i></span>
					</div>
					<div class='col-xs-2'>
						<div style='display: flex; align-items: center; border: 1px solid gray;'>
							<span class="col-xs-2 padding0" style=" display: flex; align-items: center;"><i class="fa fa-search fa-1x" aria-hidden="true" ></i></span>
							<span class="col-xs-10 padding0"><input type="text" maxlength="100" class="usr-text-enter" ></span>
						</div>
					</div>
					<div class='col-xs-2 padding0'  style='display: flex; align-items: center;'>	
						<span class='col-xs-4 text-center'><i class="fa fa-arrow-down fa-1x" aria-hidden="true"></i></span>
						<span class='col-xs-4 text-center'><i class="fa fa-home fa-1x" aria-hidden="true"></i></span>
						<span class='col-xs-4 text-center'><i  class="fa fa-bars fa-1x" aria-hidden="true"></i></span>
					</div>
				</div>
			</div>
			
		   </div>
			<div class='col-xs-12' style='margin-top: 10px;'>
				<table id='tableBox'  class=''>
				   <thead>
					  <tr id='row1'>
					    <th id='hash' class='tablehead'><span class='div-border opacity00' id='game'>Game</span></th>
					    <th id='name' class=' tablehead'><div class='div-border opacity00' id='player'>Player Name</div></th>
					    <th id='founded' class=' tablehead'><div class='div-border opacity00' id='country'>Country</div></th>
					  </tr>
				   </thead>
				   <tbody>
					  <tr id='row2'>
					    <td id='oneType' class=' tableData'><div class='div-border opacity00' id='cricket'>Cricket</div></td>
					    <td id='FounderNamesType' class='tableData'><div class='div-border opacity00' id='dhoni'>MSDhoni</div></td>
					    <td id='wikipediainTable' class='tableData'><div class='div-border opacity00' id='india'>India</div></td>
					  </tr>
					  <tr id='row3'>
					    <td id='twoinTable' class=' tableData1'><div class='div-border opacity00' id='football'>Football</div></td>
					    <td id='founderNameInTable' class=' tableData1'><div class='div-border opacity00' id='messi'>LionelMessi</div></td>
					    <td id='mobileInTable' class=' tableData1'><div class='div-border opacity00' id='usa'>USA</div></td>
					  </tr>
				     </tbody>
				</table><br>
			</div> 
		</div>
		<div class="button col-xs-12 text-center " id="button">
			<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
		</div>
	</div>
</div>
</div>
</body>
<script type="text/javascript">
 $(document).ready(function() {
	intro = introJs();
	//$(".default").attr("disabled", true);
	$('#restartBtn').click(function() {
		 window.location.search = "?restart=1";
	});
/* 	 $('body').on('drop', function(event) {
	    event.preventDefault();
	 });
	$('body').on('copy paste', 'input', function (e) {
	e.preventDefault(); 
	});  */
	$("body").keypress(function(e) {
		/*  if (e.which === 13) {
			 e.preventDefault();
			} */
	}); 
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#htmlTableCreation',
			intro :'',
			position:"right"
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableClosedTag',
			intro :'',
			position:"right" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom", 
			tooltipClass:"hidden"
		},{
			element :'#tHeadOpenTag',
			intro :'',
			position:"bottom"
		},{
			element :'#tHeadClosedTag',
			intro :'',
			position:"right" 
		},{
			element :'#rowOpenTag',
			intro :'',
			position:"bottom"
		},{
			element :'#rowClosedTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag',
			intro :'',
			position:"bottom"   
		},{
			element :'#testHeadClosedTag',
			intro :'',
			position:"bottom"  
		},{
			element :'#testDataEnterTag',
			intro :'',
			position:"bottom",
		},{
			element :'#game',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#testHeadClosedTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataEnterTag1',
			intro :'',
			position:"bottom",
		},{
			element :'#player',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testHeadOpenTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#testHeadClosedTag2',
			intro :'',
			position:"bottom"   
		},{
			element :'#testDataEnterTag2',
			intro :'',
			position:"bottom",
		},{
			element :'#country',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#tbodyOpenTag',
			intro :'',
			position:"bottom"  
		},{
			element :'#tbodyClosedTag',
			intro :'',
			position:"right"  
		},{
			element :'#rowOpenTag1',
			intro :'',
			position:"bottom"  
		},{
			element :'#rowClosedTag1',
			intro :'',
			position:"bottom"  
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#testDataClosedTag',
			intro :'',
			position:"bottom" 
		},{
			element :'#numberOne',
			intro :'',
			position:"bottom",
		},{
			element :'#cricket',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag1',
			intro :'',
			position:"bottom" 
		},{
			element :'#testDataClosedTag1',
			intro :'',
			position:"bottom"
		},{
			element :'#FounderName',
			intro :'',
			position:"bottom",
		},{
			element :'#dhoni',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataClosedTag2',
			intro :'',
			position:"bottom"
		},{
			element :'#Founded',
			intro :'',
			position:"bottom"  
		},{
			element :'#india',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#rowOpenTag2',
			intro :'',
			position:"bottom" 
		},{
			element :'#rowClosedTag2',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTagLast',
			intro :'',
			position:"bottom" 
		},{
			element :'#testDataClosedTagLast',
			intro :'',
			position:"bottom"
		},{
			element :'#numberTwo',
			intro :'',
			position:"bottom",
		},{
			element :'#football',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTagLast1',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataClosedTagLast1',
			intro :'',
			position:"bottom"
		},{
			element :'#FounderName1',
			intro :'',
			position:"bottom",
		},{
			element :'#messi',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#testDataOpenTagLast2',
			intro :'',
			position:"bottom"
		},{
			element :'#testDataClosedTagLast2',
			intro :'',
			position:"bottom"
		},{
			element :'#Founded1',
			intro :'',
			position:"bottom",
		},{
			element :'#usa',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"  
		},{
			element :'#tableBox',
			intro :'',
			position:"bottom", 
		},{
			element :'#border1Px',
			intro :'',
			position:"right" 
		},{
			element :'#closeBraceOftable',
			intro :'',
			position:"right"
		},{
			element :'#widthAttr',
			intro :'',
			position:"right",
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#borderCollapse',
			intro :'',
			position:"right" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		 },{
			element :'#tdThAttr',
			intro :'',
			position:"right" 
		 },{
			element :'#closedTagForTdTh',
			intro :'',
			position:"right" 
		 },{
			element :'#textalignAttr',
			intro :'',
			position:"bottom"
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#paddingAttr',
			intro :'',
			position:"bottom"
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden" 
		},{
			element :'#thAttr',
			intro :'',
			position:"right" 
		},{
			element :'#closedbracketForTh',
			intro :'',
			position:"right"
		},{
			element :'#backgrouncolorAttr',
			intro :'',
			position:"bottom" 
		},{
			element :'#tableOutPut',
			intro :'',
			position:"bottom",
			tooltipClass:"hidden"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "tableOutPut" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				$('#tableOutPut').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"The given title displays here" ,function() { 
		  			$('.introjs-nextbutton').show();
		  	  	});
			} else if (intro._currentStep == 4) {
				scrollTop();
				TweenLite.to($("#tableBox"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$("#tableBox").effect('highlight',  {color: "#ff9900"}, 2000);
					 setTimeout(function(){
						intro.nextStep();
						}, 500); 
				}});
			} else if (intro._currentStep == 9) {
				scrollTop();
				TweenLite.to($(".tablehead"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$("#row1").effect('highlight',  {color: "#ff9900"}, 2000);
					 setTimeout(function(){
						intro.nextStep();
						}, 500); 
				}});
			} else if (intro._currentStep == 26) {
				scrollTop();
				TweenLite.to($(".tableData"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$("#row2").effect('highlight',  {color: "#ff9900"}, 2000);
					 setTimeout(function(){
						intro.nextStep();
						}, 500); 
				}});
			} else if (intro._currentStep == 41) {
				TweenLite.to($(".tableData1"), 1, {css:{borderColor: "rgba(192,192,192,3);"}, onComplete:function() {
					$("#row3").effect('highlight',  {color: "#ff9900"}, 2000);
					 setTimeout(function(){
						intro.nextStep();
						}, 500); 
				}});
		  		} else	if (intro._currentStep == 58) {
						intro.refresh();
						$(".introjs-helperLayer").one("transitionend", function() {
							typing('.introjs-tooltiptext',"sdf" ,function() {
								$('#widthAttr').addClass('circle-css');
								$("#widthAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
									TweenMax.to("#tableBox", 2,{css: {width:"82%"}});
									$('#widthAttr').removeClass('circle-css');
									setTimeout(function(){
										intro.nextStep();
										}, 3000);
								});
							});
						 });
			  		} else if (intro._currentStep == 60) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#borderCollapse').addClass('circle-css');
							$("#borderCollapse").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
							TweenMax.to("#tableBox",1,{delay:0.5,css:{borderCollapse:"collapse"}});
								typing('.introjs-tooltiptext',"padding" ,function() {
									$('#borderCollapse').removeClass('circle-css');
									 setTimeout(function(){
										intro.nextStep();
										}, 2500);
								});
							});
						 });
					} else if (intro._currentStep == 64) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#textalignAttr').addClass('circle-css');	
							$("#textalignAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
								TweenMax.to("#tableBox, .tablehead",1,{delay:0.5,css:{textAlign:"center"}});
					  			intro.refresh();
								typing('.introjs-tooltiptext',"padding" ,function() {
									$('#textalignAttr').removeClass('circle-css');
									setTimeout(function(){
										intro.nextStep();
										}, 2400);
								});
							});
						 });
					} else if (intro._currentStep == 66) {
						$(".introjs-helperLayer").one("transitionend", function() {
							typing('.introjs-tooltiptext',"padding" ,function() {
								$('#paddingAttr').addClass('circle-css');
								$("#paddingAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
						  			TweenMax.to("#tableBox, .tablehead, .tableData",1,{delay:0.3,css:{color:"green"}});
									intro.refresh();
						  			$('#paddingAttr').removeClass('circle-css');
						  			setTimeout(function(){
										intro.nextStep();
									}, 2800);
								});
							 });
						});
					} else if (intro._currentStep == 70) {
						intro.refresh();
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#backgrouncolorAttr').addClass('circle-css');
								$("#backgrouncolorAttr").addClass("blink").effect("transfer", {to: $("#tableBox"), className: "ui-effects-transfer"}, 1500, function() {
									TweenMax.to(".tablehead",1,{delay:0.5,css:{backgroundColor:"yellow"}});
									typing('.introjs-tooltiptext',"padding" ,function() {
										$('#backgrouncolorAttr').removeClass('circle-css');
										 setTimeout(function(){
											intro.nextStep();
											}, 3700); 
									});
								});
						 });
					}
			break;
		case "tableOpenTag" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableOpenTag').removeClass('opacity00');
				$('#tableOpenTag').focus();
		  		typing('.introjs-tooltiptext',"Open a table tag here i.e. <span class='color-b-yellow'>&lt;table&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#tableOpenTag", "<table>");
		  			});
				});
			break;
		case "tableClosedTag" :
			$("#tableOpenTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableClosedTag').removeClass('opacity00');
				$('#tableClosedTag').focus();
		  		typing('.introjs-tooltiptext',"Close table tag here i.e. <span class='color-b-yellow'>&lt;/table&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#tableClosedTag", "</table>");
		  			});
				});
			break;
		case "tHeadOpenTag" :
			$("#tableClosedTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tHeadOpenTag').removeClass('opacity00');
				$('#tHeadOpenTag').focus();
		  		typing('.introjs-tooltiptext',"Open a tablehead tag here i.e. <span class='color-b-yellow'>&lt;thead&gt;</span>"+
		  		"<ul><li>The <span class='color-b-yellow'>&lt;thead&gt;</span> tag is used to group header content in "+
		  		"<span class='color-b-yellow'>HTML</span> table.</li></ul><span class='errorText'></span>" ,function() { 
		  			textenter("#tHeadOpenTag", "<thead>");
		  			});
				});
			break;
		case "tHeadClosedTag" :
			$("#tHeadOpenTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tHeadClosedTag').removeClass('opacity00');
				$('#tHeadClosedTag').focus();
		  		typing('.introjs-tooltiptext',"Close a tablehead tag here i.e. <span class='color-b-yellow'>&lt;/thead&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#tHeadClosedTag", "</thead>");
		  			});
				});
			break;
		case "rowOpenTag" :
			$("#tHeadClosedTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowOpenTag').removeClass('opacity00');
				$('#rowOpenTag').focus();
				var text = "Open a tablerow tag here i.e. <span class='color-b-yellow'>&lt;tr&gt;</span>." 
							+ "<ul><li>The <span class='color-b-yellow'>&lt;tr&gt;</span> defines a row in " 
							+ "<span class='color-b-yellow'>HTML</span> table.</li>" 
							+ "<li>A <span class='color-b-yellow'>&lt;tr&gt;</span> element contains one or more" 
							+ " <span class='color-b-yellow'>&lt;th&gt;</span> or <span class='color-b-yellow'>&lt;td&gt;</span> " 
							+ "elements.</li></ul><span class='errorText'></span>"
		  		typing('.introjs-tooltiptext', text, function() {
		  			textenter("#rowOpenTag", "<tr>");
		  			});
				});
			break;
		case "rowClosedTag" :
			$("#rowOpenTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowClosedTag').removeClass('opacity00');
				$('#rowClosedTag').focus();
		  		typing('.introjs-tooltiptext',"Close the tablerow tag here i.e. <span class='color-b-yellow'>&lt;/tr&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#rowClosedTag", "</tr>");
		  			});
				});
			break;
		case "testHeadOpenTag" :
			$("#rowClosedTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testHeadOpenTag').removeClass('opacity00');
				$('#testHeadOpenTag').focus();
		  		typing('.introjs-tooltiptext',"Open header cell tag here i.e. <span class='color-b-yellow'>&lt;th&gt;</span>."+
		  		"<ul><li>The <span class='color-b-yellow'>&lt;th&gt;</span> tag defines a header cell in  "+
		  		"<span class='color-b-yellow'>HTML</span> table.</li><li>The text in <span class='color-b-yellow'>&lt;th&gt;</span>"+
		  		" elements are bold.</li></ul><span class='errorText'></span>" ,function() { 
		  			textenter("#testHeadOpenTag", "<th>");
		  			});
				});
			break;  
		case "testHeadClosedTag" :
			$("#testHeadOpenTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testHeadClosedTag').removeClass('opacity00');
				$('#testHeadClosedTag').focus();
		  		typing('.introjs-tooltiptext',"Close the header cell tag here i.e. <span class='color-b-yellow'>&lt;/th&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testHeadClosedTag", "</th>");
		  			});
				});
			break; 
		case "testDataEnterTag" :
			$("#testHeadClosedTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataEnterTag').removeClass('opacity00');
				$('#testDataEnterTag').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>Game</span><br>"+
		  				"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataEnterTag", "Game");
				  	});
				});
			break;
		case "game" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#testDataEnterTag").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#game').removeClass('opacity00');
	       		var l = $("#testDataEnterTag").offset();
				$("#game").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#game", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);		
						});
		            }});
				});
			break;
		case "testHeadOpenTag1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testHeadOpenTag1').removeClass('opacity00');
				$('#testHeadOpenTag1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open header cell tag here i.e. <span class='color-b-yellow'>&lt;th&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testHeadOpenTag1", "<th>");
		  			});
				});
			break;
		case "testHeadClosedTag1" :
			$("#testHeadOpenTag1").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testHeadClosedTag1').removeClass('opacity00');
				$('#testHeadClosedTag1').focus();
		  		typing('.introjs-tooltiptext',"Close the header cell tag here i.e. <span class='color-b-yellow'>&lt;/th&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testHeadClosedTag1", "</th>");
		  			});
				});
			break;
		case "testDataEnterTag1" :
			$("#testHeadClosedTag1").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataEnterTag1').removeClass('opacity00');
				$('#testDataEnterTag1').focus();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>Player Name</span><br>"+
						"<span class='errorText'></span>" ,function() {
					textenter("#testDataEnterTag1", "Player Name");
				  	});
				});
			break;
		case "player" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#testDataEnterTag1").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#player').removeClass('opacity00');
				 var l = $("#testDataEnterTag1").offset();
					$("#player").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#player", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
								}, 500);		
						});
					}});
				});
			break;
		case "testHeadOpenTag2" :
			$('.introjs-nextbutton').hide();
			$("#name").removeClass("display-block");
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testHeadOpenTag2').removeClass('opacity00');
				$('#testHeadOpenTag2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open header cell tag here i.e. <span class='color-b-yellow'>&lt;th&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testHeadOpenTag2", "<th>");
		  			});
				});
			break;
		case "testHeadClosedTag2" :
			$("#testHeadOpenTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testHeadClosedTag2').removeClass('opacity00');
				$('#testHeadClosedTag2').focus();
		  		typing('.introjs-tooltiptext',"Close header cell tag here i.e. <span class='color-b-yellow'>&lt;/th&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testHeadClosedTag2", "</th>");
		  			});
				});
			break;
		case "testDataEnterTag2" :
			$("#testHeadClosedTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataEnterTag2').removeClass('opacity00');
				$('#testDataEnterTag2').focus();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>Country</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#testDataEnterTag2", "Country");
		  			});
				});
			break;
		case "country" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#testDataEnterTag2").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#country').removeClass('opacity00');
				var l = $("#testDataEnterTag2").offset();
				$("#country").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#country", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);
						});
					}});
				});
			break;
		case "tbodyOpenTag" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tbodyOpenTag').removeClass('opacity00');
				$('#tbodyOpenTag').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tablebody tag here i.e. <span class='color-b-yellow'>&lt;tbody&gt;</span>."+
		  		"<ul><li>The &lt;tbody&gt; tag is used to group the body content in  <span class='color-b-yellow'>HTML</span> table</li>"+
		  		"</ul><span class='errorText'></span>" ,function() { 
		  			textenter("#tbodyOpenTag", "<tbody>");
		  			});
				});
			break;
		case "tbodyClosedTag" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tbodyClosedTag').removeClass('opacity00');
				$('#tbodyClosedTag').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tablebody tag here i.e. <span class='color-b-yellow'>&lt;/tbody&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#tbodyClosedTag", "</tbody>");
		  			});
				});
			break;
		case "rowOpenTag1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowOpenTag1').removeClass('opacity00');
				$('#rowOpenTag1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tablerow tag here i.e. <span class='color-b-yellow'>&lt;tr&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#rowOpenTag1", "<tr>");
		  			});
				});
			break;
		case "rowClosedTag1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowClosedTag1').removeClass('opacity00');
				$('#rowClosedTag1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tablerow tag here i.e. <span class='color-b-yellow'>&lt;/tr&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#rowClosedTag1", "</tr>");	
		  			});
				});
			break;
		case "testDataOpenTag" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataOpenTag').removeClass('opacity00');
				$('#testDataOpenTag').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tabledata tag here i.e. <span class='color-b-yellow'>&lt;td&gt;</span>."+
		  		"<ul><li>The <span class='color-b-yellow'>&lt;td&gt;</span> tag defines a standard cell in "+
		  		"<span class='color-b-yellow'>HTML</span> table.</li></ul><span class='errorText'></span>" ,function() { 
		  			textenter("#testDataOpenTag", "<td>");
		  			});
				});
			break;
		case "testDataClosedTag" :
			$("#testDataOpenTag").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataClosedTag').removeClass('opacity00');
				$('#testDataClosedTag').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tabledata tag here i.e. <span class='color-b-yellow'>&lt;/td&gt;</span>."+
		  		"<br><span class='errorText'></span>" ,function() { 
		  			textenter("#testDataClosedTag", "</td>");
		  			});
				});
			break;
		case "numberOne" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberOne').removeClass('opacity00');
				$('#numberOne').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>Cricket</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#numberOne", "Cricket");	
				  	});
				});
			break;
		case "cricket" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#cricket').removeClass('opacity00');
				var l = $("#numberOne").offset();
				$("#cricket").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#cricket", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);	
						});
					}});
				});
			break;
		case "testDataOpenTag1" :
			$("#testDataClosedTag").attr("disabled", true);
			$("#oneType").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataOpenTag1').removeClass('opacity00');
				$('#testDataOpenTag1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tabledata tag here i.e. <span class='color-b-yellow'>&lt;td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataOpenTag1", "<td>");
		  			});
				});
			break;
		case "testDataClosedTag1" :
			$("#testDataOpenTag1").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataClosedTag1').removeClass('opacity00');
				$('#testDataClosedTag1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tabledata tag here i.e. <span class='color-b-yellow'>&lt;/td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataClosedTag1", "</td>");
		  			});
				});
			break;
		case "FounderName" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#FounderName').removeClass('opacity00');
				$('#FounderName').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>MSDhoni</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#FounderName", "MSDhoni");		
				  	});
				});
			break;
		case "dhoni" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#FounderName").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#dhoni').removeClass('opacity00');
				var l = $("#FounderName").offset();
				$("#dhoni").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#dhoni", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);	
						});
					}});
				});
			break;
		case "testDataOpenTag2" :
			$("#testDataClosedTag1").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataOpenTag2').removeClass('opacity00');
				$('#testDataOpenTag2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tabledata tag here i.e. <span class='color-b-yellow'>&lt;td&gt;</span>."+
		  		"<br><span class='errorText'></span>" ,function() { 
		  			textenter("#testDataOpenTag2", "<td>");
		  			});
				});
			break;
		case "testDataClosedTag2" :
			$("#testDataOpenTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataClosedTag2').removeClass('opacity00');
				$('#testDataClosedTag2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tabledata tag here i.e. <span class='color-b-yellow'>&lt;/td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataClosedTag2", "</td>");
		  			});
				});
			break;
		case "Founded" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#Founded').removeClass('opacity00');
				$('#Founded').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>India</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#Founded", "India");		
				  	});
				});
			break;
		case "india" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#Founded").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#india').removeClass('opacity00');
				 var l = $("#Founded").offset();
					$("#india").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#india", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);	
						});
					}});
				});
			break;
		case "rowOpenTag2" :
			$("#testDataClosedTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowOpenTag2').removeClass('opacity00');
				$('#rowOpenTag2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tablerow tag here i.e. <span class='color-b-yellow'>&lt;tr&gt;</span>."+
		  		"<br><span class='errorText'></span>" ,function() { 
		  			textenter("#rowOpenTag2", "<tr>");
		  			});
				});
			break;
		case "rowClosedTag2" :
			$("#rowOpenTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#rowClosedTag2').removeClass('opacity00');
				$('#rowClosedTag2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tablerow tag here i.e. <span class='color-b-yellow'>&lt;/tr&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#rowClosedTag2", "</tr>");
		  			});
				});
			break;
		case "testDataOpenTagLast" :
			$("#rowClosedTag2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataOpenTagLast').removeClass('opacity00');
				$('#testDataOpenTagLast').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tabledata tag here i.e. <span class='color-b-yellow'>&lt;td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataOpenTagLast", "<td>");
		  			});
				});
			break;
		case "testDataClosedTagLast" :
			$("#testDataOpenTagLast").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataClosedTagLast').removeClass('opacity00');
				$('#testDataClosedTagLast').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tabledata tag here i.e. <span class='color-b-yellow'>&lt;/td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataClosedTagLast", "</td>");
		  			});
				});
			break;
		case "numberTwo" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberTwo').removeClass('opacity00');
				$('#numberTwo').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>Football</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#numberTwo", "Football");		
				  	});
				});
			break;
		case "football" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#numberTwo").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#football').removeClass('opacity00');
				 var l = $("#numberTwo").offset();
					$("#football").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#football", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);	
						});
					}});
				});
			break;
		case "testDataOpenTagLast1" :
			$("#testDataClosedTagLast").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataOpenTagLast1').removeClass('opacity00');
				$('#testDataOpenTagLast1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tabledata tag here i.e. <span class='color-b-yellow'>&lt;td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataOpenTagLast1", "<td>");
		  			});
				});
			break;
		case "testDataClosedTagLast1" :
			$("#testDataOpenTagLast1").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataClosedTagLast1').removeClass('opacity00');
				$('#testDataClosedTagLast1').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tabledata tag here i.e. <span class='color-b-yellow'>&lt;/td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataClosedTagLast1", "</td>");
		  			});
				});
			break;
		case "FounderName1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#FounderName1').removeClass('opacity00');
				$('#FounderName1').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>LionelMessi</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#FounderName1", "LionelMessi");		
			  		});
			  	});
			break;
		case "messi" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#founderNameInTable").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#messi').removeClass('opacity00');
				 var l = $("#FounderName1").offset();
					$("#messi").offset({"top": l.top,"left": l.left});
		       		TweenMax.to("#messi", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500);
						});
					}});
				});
			break;
		case "testDataOpenTagLast2" :
			$("#testDataClosedTagLast1").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataOpenTagLast2').removeClass('opacity00');
				$('#testDataOpenTagLast2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Open tabledata tag here i.e. <span class='color-b-yellow'>&lt;td&gt;</span>.<br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#testDataOpenTagLast2", "<td>");
		  			});
				});
			break;
		case "testDataClosedTagLast2" :
			$("#testDataOpenTagLast2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#testDataClosedTagLast2').removeClass('opacity00');
				$('#testDataClosedTagLast2').focus();
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Close tabledata tag here i.e. <span class='color-b-yellow'>&lt;/td&gt;</span>."+
		  		"<br><span class='errorText'></span>" ,function() { 
		  			textenter("#testDataClosedTagLast2", "</td>");
		  			});
				});
			break;
		case "Founded1" :
			$("#testDataClosedTagLast2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#Founded1').removeClass('opacity00');
				$('#Founded1').focus();
				intro.refresh();
				typing('.introjs-tooltiptext',"Type text here i.e. <span class='color-b-yellow'>USA</span><br>"+
						"<span class='errorText'></span>" ,function() {
		  			textenter("#Founded1", "USA");		
				  	});
				});
			break;
		case "usa" :
			$('.introjs-nextbutton').hide();
			scrollTop();
			$("#Founded1").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#usa').removeClass('opacity00');
				var l = $("#Founded1").offset();
				$("#usa").offset({"top": l.top,"left": l.left});
	       		TweenMax.to("#usa", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					intro.refresh();
			  		typing('.introjs-tooltiptext',"Text." ,function() { 
			  			setTimeout(function(){
							intro.nextStep();
							}, 500); 
						});
					}});
				});
			break;  
		case "tableBox" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
		  		typing('.introjs-tooltiptext',"Let us apply the style properties to basic html table." ,function() { 
			  		$('.introjs-nextbutton').show();	
					});
				});
			break;
		case "border1Px" : 
			$('.introjs-nextbutton').hide();
			scrollTop();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#border1Px').removeClass('opacity00');
				$('#border1Px').focus();
		  		typing('.introjs-tooltiptext',"Type the selectors and Open curly braces i.e.<br>"+
		  				"<span class='color-b-yellow'>table, th, td {</span><br><span class='errorText'></span>" ,function() { 
		  			textenter("#border1Px", "table, th, td {");	
					});
				});
			break;
		case "closeBraceOftable" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				$('#closeBraceOftable').removeClass('opacity00');
				$('#closeBraceOftable').focus();
		  		typing('.introjs-tooltiptext',"Close curly braces , i.e. <span class='color-b-yellow'> }</span><br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#closeBraceOftable", "}");		
					});
				});
			break;
		case "widthAttr" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#widthAttr').removeClass('opacity00');
				$('#widthAttr').focus();
		  		typing('.introjs-tooltiptext',"Type a width property i.e. <br><span class='color-b-yellow'>width: 80%;</span><br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#widthAttr", "width: 80%;");	
		  			});
				});
			break; 
		case "borderAttr" :
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#borderAttr').removeClass('opacity00');
				$('#borderAttr').focus();
		  		typing('.introjs-tooltiptext',"Type a border property i.e. <span class='color-b-yellow'>border: 1px solid grey;</span>"+
		  		"<br><span class='errorText'></span>" ,function() { 
		  			textenter("#borderAttr", "border: 1px solid grey;");	
		  			});
				});
			break;
		case "borderCollapse" :
			$('.introjs-nextbutton').hide();
			$("#borderAttr").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#borderCollapse').removeClass('opacity00');
				$('#borderCollapse').focus();
		  		typing('.introjs-tooltiptext',"Type a bordercollapse property i.e.<br><span class='color-b-yellow'>border-collapse: collapse;</span>"+
		  		"<br><span class='errorText'></span>" ,function() { 
		  			textenter("#borderCollapse", "border-collapse: collapse;");
				  	});
				});
			break;
		case "tdThAttr" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				$('#tdThAttr').removeClass('opacity00');
				$('#tdThAttr').focus();
		  		typing('.introjs-tooltiptext',"Type selectors and open a curly brace, i.e.<br>"+
		  				"<span class='color-b-yellow'>th, td {</span><br><span class='errorText'></span>" ,function() { 
		  			textenter("#tdThAttr", "th, td {");		
					});
				});
			break;
		case "closedTagForTdTh" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				$('#closedTagForTdTh').removeClass('opacity00');
				$('#closedTagForTdTh').focus();
		  		typing('.introjs-tooltiptext',"Close curly brace i.e. <span class='color-b-yellow'> }</span><br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#closedTagForTdTh", "}");		
					});
				});
			break;
		case "textalignAttr" :
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#textalignAttr').removeClass('opacity00');
				$('#textalignAttr').focus();
				typing('.introjs-tooltiptext',"Type a text-align property i.e<br>"+
						"<span class='color-b-yellow'>text-align: center;</span><br><span class='errorText'></span>" ,function() { 
					textenter("#textalignAttr", "text-align: center;");	
					});
				});
			break;
		case "paddingAttr" :
			$('.introjs-nextbutton').hide();
			$("#textalignAttr").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				$('#paddingAttr').removeClass('opacity00');
				$('#paddingAttr').focus();
				typing('.introjs-tooltiptext',"Type a color property i.e<br><span class='color-b-yellow'>color: green;</span>"+
				"<br><span class='errorText'></span>" ,function() { 
					textenter("#paddingAttr", "color: green;");	
					});
				});
			break; 
		case "thAttr" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				$('#thAttr').removeClass('opacity00');
				$('#thAttr').focus();
		  		typing('.introjs-tooltiptext',"Type selector and open a curly brace , i.e.<br>"+
		  				"<span class='color-b-yellow'>th {</span><br><span class='errorText'></span>" ,function() { 
		  			textenter("#thAttr", "th {");		
					});
				});
			break;
		case "closedbracketForTh" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				$('#closedbracketForTh').removeClass('opacity00');
				$('#closedbracketForTh').focus();
		  		typing('.introjs-tooltiptext',"Close the curly brace, i.e. <span class='color-b-yellow'>}</span><br>"+
		  		"<span class='errorText'></span>" ,function() { 
		  			textenter("#closedbracketForTh", "}");		
					});
				});
			break;
		case "backgrouncolorAttr" :
			$("#paddingAttr").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#backgrouncolorAttr').removeClass('opacity00');
				$('#backgrouncolorAttr').focus();
				typing('.introjs-tooltiptext',"Type a background property i.e<br><span class='color-b-yellow'>background-color: yellow;</span>"+
				"<br><span class='errorText'></span>" ,function() { 
					textenter("#backgrouncolorAttr", "background-color: yellow;");		
					});
				});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$("#backgrouncolorAttr").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
			typing('.introjs-tooltiptext', "Click to restart.", function() {
				$("#restartBtn").removeClass("opacity00");
				});
			});
			break;
			}
		});
		intro.start();
		scrollTop();
		$('.introjs-skipbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-nextbutton').hide();
			basicTags();
			
			});
 
 
$('#testDataEnterTag').keyup(function() {
	if($('#testDataEnterTag').val() > 1) {
	  	$('.introjs-nextbutton').show();
	  	$('.errorText').empty();
	 	} else {
	 		$('.errorText').html("Please type above tag correctly.");
	  	$('.introjs-nextbutton').hide();
	   }
		});
function textenter(selector, value) {
	$(selector).keyup(function(e) {
		if (e.altKey && e.keyCode == 77) {
			$(this).val(value);
		}
		if ($(selector).val() == value.toLowerCase() || $(selector).val() == value.toUpperCase() || $(selector).val() == value.trim()) {
		  	$('.introjs-nextbutton').show();
		  	$('.errorText').empty();
	  	} else {
	  		$('.errorText').html("Please type correctly.");
		  	$('.introjs-nextbutton').hide();
	    }
	});
}
function zoomInEffect(id, callBackFunction) {
$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
	$(this).removeClass("animated zoomIn");
	if (typeof callBackFunction === "function") {
		callBackFunction();
		} 
	})
}
function basicTags() {
	zoomInEffect("#docType", function() {
		zoomInEffect("#htmlOpen", function() {
			console.log("htmleeeeeeeeeeeeeeeee");
			zoomInEffect("#htmlClosed", function() {
				zoomInEffect("#headOpen", function() {
					zoomInEffect("#headClosed", function() {
						zoomInEffect("#titleTag", function() {
							zoomInEffect("#styleOpen", function() {
								zoomInEffect("#styleClosed", function() {
									zoomInEffect("#bodyOpen", function() {
										zoomInEffect("#bodyClosed", function() {
											$('.introjs-tooltip').removeClass("hide");
											var text = "Basic html page";
											typing('.introjs-tooltiptext', text, function() {
												$('.introjs-nextbutton').show();
											});									
										});
									});
								});
							});
						});
					});
				});
			}); 
		});
	});
}
function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
} 

function scrollTop() {
    window.scrollTo(0, 0);
}
	
</script>
</html>