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
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src='/js/jquery.scrollTo.js'></script>
<script src="../js/ct-svg-lines.js"></script>
<title>driver-1-with-browser</title>
<style>

/* *********************** starting of the browser styles ********************* */
.container {
	padding: 0px;
	margin-top: 30px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 0px;
}

#browser1 {
	padding-bottom: 6px;
	padding-top: 6px;
} 

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

.padding00 {
	padding: 0;
}

ul.tabs > li.active {
  background: #efefef;
}

ul.tabs > li {
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: saddlebrown;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
  height:25px;
  padding: 0;
  overflow:visible;
}

#browser .usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}


p {
	margin: 0 !important;
}


/************************ Ending of the browser styles **********************/

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

.margin-top-10 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-50 {
	margin-top: 50px;
}

.margin-top-100 {
	margin-top: 100px;
}

.margin-top-200 {
	margin-top: 50px;
}

.border-radius {
	border: 2px solid grey;
	border-radius: 8px;
	font-family: monospace;
}

.database-box {
	border-top: none;
	border-radius: 0 0 8px 8px;
	min-height: 50px;
}

.oval-shape {
	height: 22px;
	border-radius: 50%;
	border: 2px solid grey;
	top : 10px;
	z-index : 10;
	
}

.popover-content {
    color: black;
    font-size: 12px;
    background: #ccc;
}

.popover {
	width :215px;
}

.popover {
	z-index: 10000000;
}


.text-color {
	color: #008080;
}

.ct-btn-next {
	background: green;
	margin: 0;
}

.z-index {
	z-index: 10000000000 !important;
}

.bg-white {
	background: white;
}


.display-css {
	display: inline-block;
}

#javaApp ,#jDriveManager {
	background: lightyellow;
}

#jAPI {
	background: sandybrown;
}

#bridge , #oDriver {
	background: turquoise;
}

#DLApi, .database-box, #ovalShape {
	background: thistle;
} 

th,tr {
	text-align: center;
}

caption, table.table-bordered, table.table-bordered > thead > tr > th, table.table-bordered > tbody > tr > td {
    border:1px solid blue;
}

.dash {
  border: 0 none;
  border-top: 2px dashed #322f32;
  background: none;
  height:0;
}

.rounded-top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.rounded-bottom {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}


#BrowserTableDiv {
	background: lightblue;
}


:FOCUS {
	background: yellow;
}

.errMsg {
	color: red;
	font-weight: bold;
}

.user-btn {
	background: green;
}

.z-index-css {
	z-index : 9999999999;
	background: white;
	position : relative;
}

.quadrat {
  -webkit-animation: blinking 1s infinite; 
  -moz-animation: blinking 1s infinite; 
}

@-webkit-keyframes blinking {
  0%, 49% {
    background-color: 	rgb(255,255,0);
    border: 3px solid #e50000;
  }
  50%, 100% {
    background-color: rgb(154,205,50);
    border: 3px solid rgb(117, 209, 63);
  }
}

#browserText {
	height: 100px;
}

.bg-blue-cl-white {
	background: #003399;
	color: white;
}
y {
	color: green ;
	font-weight : bold;
	font-family : monospace;
}

.introjs-tooltiptext {
	font-size: 12px;
}

.introjs-tooltiptext y {
	color:  yellow;
}

</style>
</head>
<body>
<script type="text/javascript">
var count = 1;
var introjs;
var arr = ['10030','10031','10032'];
$(document).ready(function() {
	$('#browserTable *').css('padding','0');
	$('#browserTable').css('margin-bottom','0px').addClass('opacity00');
	//$('.opacity00').removeClass('opacity00');
	svgAppend("#svgParent","totalSvg","","grey");
	svgLineRightAndLeft("#svgParent", "#span1", "#span2", "line111","grey", "left","right", "","", true);
	svgLineRightAndLeft("#svgParent", "#span3", "#span4", "line112","grey", "left","right", "","", true);
	svgLineRightAndLeft("#svgParent", "#span5", "#span6", "line113","grey", "left","right", "","", true);
	$('#line111, #line112, #line113').css({'marker-end' : '', 'opacity' : '0'});
	$('#restart').click(function() {
		location.reload();
	});
	initIntroJs();
});


function initIntroJs() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [{
			    element: '#driverOne',
			    intro: '',
			    tooltipClass: 'hide',
			    position: 'right',
		  	}, {
			    element: '#htmlBody',
			    intro: '',
			}, {
			    element: '#arrowAnimationDiv',
			    intro: '',
			    position: 'bottom',
			} , {
			    element: '#browser',
			    intro: '',
			    position : 'left',
			}, {
			    element: '#restart',
			    intro: 'Click to restart.',
			    position: 'right'
		  	}]
	});
	
	introjs.onafterchange (function(targetElement) {
		$('.introjs-button').hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case "driverOne":
			var text = "The JDBC Type-1 driver is also known as the <b>JDBC-ODBC Bridge Driver.</b><br> <span><span id ='jdbc'>Here,<br> "
						+"<ul><li>The acronym <b>JDBC  </b>is for - Java Database Connectivity.</span><br><span id = 'odbc'><b>ODBC for </b> "+
						"- Open Database Connectivity.<br></span></span></li> "+
						"<li>This driver gets its name, as it was the first driver that was created in <y>Java.<y></li> "+
						"<li>It was used to talk to the underlying database through the <y>JDBC-ODBC</y> bridge.</li><li>This bridge connected this driver to the ODBC driver that"+
						"was built by <y>Microsoft</y>.</li><li>The <y>ODBC</y> driver could talk to the databases and get data.</li></ul>"+
						"<br/> Let  us understand how this driver works in detail.";
						
			popover("#totalPopoverDiv", "right", text,function() {
				$('#popover1').parents(".popover-content").append('<div class = "text-right">'
				+'<span class="introjs-button ct-btn-next" onclick="totalAnimation();">Next &#8594;</span><div>');	
			});
			break;
		case "htmlBody":
			$('.introjs-helperLayer').one('transitionend', function () {
				introjs.refresh();
				var text = "This input is taken from the browser(client side application), here a valid student id to get the student details from the databse";
				typing(".introjs-tooltiptext", text, function() {
					validation("#sId");
				});
			});
			break;
		case "arrowAnimationDiv":
			$('#sId').attr('disabled','disabled');
			$('.introjs-helperLayer').one('transitionend', function () {
				introjs.refresh();
				var text = "The input is then used inside the jdbc call, which is written "+
				"using the <y>Jdbc API</y>. <br>Let us see how the flow happens  ";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').append('<a class="user-btn introjs-button" onClick="arrowAnimation()">Next &#8594;</a>');
				});
			});
			break;
			
		case "browser":
			popoverGrayOut();
			$('.introjs-tooltip').css({'min-width':'200px','overflow-y':'','height':''});
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "The Client app using the JDBC API, gets the result data that was sent by the Driver and displays it in the browser.";
				typing(".introjs-tooltiptext", text, function() {
					var id = $('#sId').val().trim();
					$('tr.hide:eq('+id[id.length-1]+')').removeClass('hide').addClass('temp');
					zoomInEffect('#browserTable',function() {
						$('.quadrat').removeClass('quadrat');
						$('.temp').addClass('quadrat');
						setTimeout(function() {
							$('.temp').removeClass('quadrat');
							$('#restartDiv').removeClass('hide');
							introjs.refresh();
							$('.introjs-nextbutton').show();
						}, 2000);
						
					});
					introjs.refresh();
				});
			});
			break;
			
		case "restart":
			$('.introjs-tooltip').css('min-width','125px');
			$('#restartDiv').removeClass('introjs-fixParent opacity00');
			$('.introjs-helperLayer').one('transitionend', function () {
				
			});
			break;
		}
	});
	introjs.start();
}

function totalAnimation() {
	count++;
	$('.text-right').remove();
	zoomInEffect("#DLApi");
	zoomInEffect("#database",function() {
		$('#sId').attr('disabled','disabled');
		zoomInEffect('#databaseTable',function() {
			var text = "<span class='start-text'>This is the <y>database</y>. <br/><br/>Let us assume we are using an <y>RDBMS</y> like <y>Oracle</y>.</span>"+
			"<span class='end-text'>"+
			" In <y>RDBMS</y> the data is stored in tables.<br/><br/>Consider, we have a <y>STUDENT</y> TABLE that has details of Students in a class."+
			"<br/><br/>Every database has a <y>database engine</y> which takes the input, queries the database and returns the results.</span>";
			popover("#database", "left", text,function() {
				$('#popover2').parents(".popover-content").append('<div class = "text-right">'
				+'<span class="introjs-button ct-btn-next" onclick="client();">Next &#8594;</span><div>');	
			});
		});
	});
}

function arrowAnimation() {
	$('.introjs-tooltip').css({'min-width':'350px','overflow-y':'auto'});
	count++;
	$('.user-btn').remove();
	svgLineTopAndBottom("#svgParent","#javaApp","#bridge" ,"line1","grey", "bottom","top", "left", "left", "", function() {
		var text = "<li>The first call is to the <y>JDBC-ODBC Bridge Driver</y>, which takes the JDBC API calls "+
		"and coverts it into <y>Odbc driver</y> calls.</li>";
		$('.introjs-tooltiptext').append("<ul></ul>");
		typing(".introjs-tooltiptext > ul", text, function() {
			appendUserButton('.introjs-tooltipbuttons',function() {
				svgLineTopAndBottom("#svgParent","#bridge","#oDriver" ,"line2","grey", "bottom","top", "left", "left", "", function() {
					$('.introjs-tooltiptext > ul').append("<li></li>");
					$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons',{duration:'slow', offset :{left:'left', top:'top' }});
					var text = "The converted <y>odbc</y> calls are sent to the <y>ODBC driver</y> which understands what these calls are"+ 
					" for and now converts them into a language the database engine understands";
					$('.introjs-tooltip').css('height','100px');
					typing(".introjs-tooltiptext > ul li:last", text, function() {
						appendUserButton('.introjs-tooltipbuttons',function() {
							svgLineTopAndBottom("#svgParent","#oDriver","#DLApi" ,"line3","grey", "bottom","top", "left", "left", "", function() {
								$('.introjs-tooltiptext > ul').append("<li></li>");
								$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons',{duration:'slow', offset :{left:'left', top:'top' }});
								var text = "The database engine receives these calls.";
								typing(".introjs-tooltiptext > ul li:last", text, function() {
									appendUserButton('.introjs-tooltipbuttons',function() {
										svgLineTopAndBottom("#svgParent","#DLApi","#ovalShape" ,"line4","grey", "bottom","top", "left", "left", "", function() {
											$('.introjs-tooltiptext > ul').append("<li></li>");
											$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons',{duration:'slow', offset :{left:'left', top:'top' }});
											var text = " The DBEngine than talks to the database by passing the query to the database"+
											" and gets the results.";
											typing(".introjs-tooltiptext > ul li:last", text, function() {
												appendUserButton('.introjs-tooltipbuttons',function() {
													$('table:eq(1),caption:eq(1)').addClass('z-index-css');
													var text = "<span class='start-text'>The database is queried for the specific records that match the query.</span>";
													popover("#DLApi", "right", text,function() {
													$('#popover6').parent().addClass('bg-blue-cl-white');
													$('#popover6').parents(".popover-content").append('<div class = "text-right">'
													+'<span class="introjs-button ct-btn-next" onclick="responseArrowAnimaiton();">Next &#8594;</span><div>');
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
		});
		
	});
}

function appendUserButton(id, callBackFunction) {
	$(id).append("<div class='text-right'><a class='user-btn introjs-button'>Next &#8594;</a></div>");
	$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons',{duration:'slow', offset :{left:'left', top:'top' }});
	$('.text-right').click(function() {
		$(this).remove();
		callBackFunction();
	});
}


function responseArrowAnimaiton() {
	var id1 = +$('#sId').val().trim()[4];
	$('#tableBody > tr:eq('+id1+')').addClass('quadrat');
	$('.text-right').remove();
	$('#popover6').append('<ul class="end-text"></ul>');
	svgLineTopAndBottom("#svgParent","#ovalShape","#DLApi" ,"line5","grey", "top","bottom", "right", "right", "", function() {
		var text = "<li>Here the specific student record is picked ie <y></y>and sent to the db engine</li>";
		typing("#popover6 > ul", text, function() {
			var pid = $('#popover6').parents(".popover-content");
			appendUserButton(pid,function() {
				svgLineTopAndBottom("#svgParent","#DLApi","#oDriver" ,"line6","grey", "top","bottom", "right", "right", "", function() {
					$('#popover6 > ul').append('<li></li>');
					var text = "This data is now sent to the ODBC driver.";
					typing("#popover6 > ul li:last", text, function() {
						pid = $('#popover6').parents(".popover-content");
							appendUserButton(pid,function() {
								svgLineTopAndBottom("#svgParent","#oDriver","#bridge" ,"line7","grey", "top","bottom", "right", "right", "", function() {
								$('#popover6 > ul').append('<li></li>');
								var text = "The ODBC driver changes this data into its own format and sends it to the bridge driver";
								typing("#popover6 > ul li:last", text, function() {
									appendUserButton(pid,function() {
										svgLineTopAndBottom("#svgParent","#bridge","#javaApp" ,"line8","grey", "top","bottom", "right", "right", "", function() {
											$('#popover6 > ul').append('<li></li>');
											var text = "The bridge now converts the ODBC format result data into a format that the client application can understand.";
											typing("#popover6 > ul li:last", text, function() {
												appendUserButton(pid,function() {
													$('.bg-blue-cl-white').removeClass('bg-blue-cl-white');
													introjs.nextStep();
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
	});
	
}

function client() {
	popoverGrayOut();
	count++;
	$('.text-right').remove();
	zoomInEffect('#javaApp',function() {
		$('#browserHead').removeClass('opacity00');
		zoomInEffect("#browser",function() {
			$('#line111').css('opacity', '');
			svgText('#line111', 'Application layer');
			var text = "<span class='start-text'>This is the <y>Client side Application</y> that needs to display the student "+
						"data</span><span class='end-text'> that is stored in the database."+
						" A client side application can be a <y>jsp</y> which, <ul><li> Using the <y>Jdbc API</y> talks to the jdbc driver</li>"+
						"<li>And gets the needed data from the driver.</li><li>It then displays the data on the browser.</li></ul></span>";
			popover("#javaApp", "left", text,function() {
				$('#popover3').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="bridge();">Next &#8594;</span><div>');
			});
		});
	});
}

 function oDriver() {
	 popoverGrayOut();
	count++;
	$('.text-right').remove();
	zoomInEffect('#oDriver',function() {
		$('#line113').css('opacity', '');
		svgText('#line113', 'Database layer');
		var text = "<span class='start-text'><b>ODBC Driver</b> : This driver was developed by </span><span class='end-text'><y>Microsoft</y> long before <y>JDBC</y> driver was developed."+
					"<br/><br/> The <y>ODBC</y> driver takes the calls that are made and converts them "+
					"to the language that is understood by the <y>Database engine.</y></span>"
		popover("#oDriver", "right", text,function() {
			$('#popover5').parents(".popover-content").append('<div class = "text-right">'
					+'<span class="introjs-button ct-btn-next" onclick="inputIntroStep();">Next &#8594;</span><div>');
		});
	});
}
 
 function bridge() {
	 popoverGrayOut();
	 count++;
	 $('.text-right').remove();
	 zoomInEffect('#bridge',function() {
		$('#line112').css('opacity', '');
		svgText('#line112', 'Middle / Service layer');
		var text = "<span class='start-text'>The <y>Type-1 </y> driver also known as the <y>JDBC-ODBC Bridge driver</y>,</span>"+
		"<span class='end-text'> takes the jdbc calls and converts them to ODBC calls ."+
		"<br/><br/>These <y>ODBC</y> calls are sent  to the ODBC driver to communicate to the database.</span>"		
		popover("#bridge", "left", text,function() {
			$('#popover4').parents(".popover-content").append('<div class = "text-right">'
					+'<span class="introjs-button ct-btn-next" onclick="oDriver();">Next &#8594;</span><div>');
		});
	 });
	 
 }
 
 function inputIntroStep() {
	 popoverGrayOut();
	 introjs.nextStep();
	 introjs.refresh();
	 $('.text-right').remove();
	 var text = "Enter valid student id";
 }
 


function nextStep() {
	$('#driverOne').addClass('z-index bg-white');
	$('.text-right').remove();
	introjs.nextStep();
}

function popover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: 'focus',
		container: selector,
		content: '<div id="popover' + count + '">'
		+ text + '</div>',
	 });
	$(selector).popover('show');
	$('#popover' + count).removeClass('opacity00');
	$(".popover").css("top" , "0");
	typing('#popover' + count, text, function () {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}); 
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
	'typing_interval': 1,
	'cursor_color': 'white',
	}, function () {
	$(selector).removeClass('typingCursor');
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function mouseEvents() {
	$('.popover-gray-out > div').mouseover(function () {
		var t = this.id;
		$('#' + t + ' .more').css({'display': 'none'});
		
		if ( t == "popover6") {
			$('#' + t + ' .end-text').css({'display': 'block'});
		} else {
			$('#' + t + ' .end-text').css({'display': 'inline'});
		}
		
		$(this).parents('.popover').addClass('z-index');
	});
	
	$('.popover-gray-out > div').mouseout(function () {
		var t = this.id;
		$('#' + t + ' .end-text').not('#popover' + count).css({'display': 'none'});
		$('#' + t + ' .more').not('#popover' + count).css({'display': 'inline'});
		$(this).parents('.popover').removeClass('z-index');
	});
}

function popoverGrayOut() {
	$('.text-right').remove();
	$("#popover"+ count).parent().addClass("popover-gray-out");
	$('#popover' + count + ' .end-text').css({'display' : 'none'});
	$('#popover' + count + ' .start-text').after('<span class="more" style="display: inline">.....</span>');
	mouseEvents();
	//count++;
} 

function svgText(lineId, textValue) {
	var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.setAttribute('x', +$(lineId).attr('x1') + 10);
	text.setAttribute('y', +$(lineId).attr('y1') + 20);
	text.setAttribute('fill', 'blue');
	text.textContent = textValue;
	text.setAttribute('style', 'font-family: monospace;');
	$('#totalSvg').append(text);
	
	TweenMax.to($("text").last(), 1, {opacity : "1", onComplete:function() {
		$("text").last().removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function result() {
	var id = $('#sId').val().trim();
	if (($.inArray(id, arr) !== -1)) {
		$('button').attr('disabled','disabled');
		$('tr.hide:eq('+id[id.length-1]+')').removeClass('hide');
		zoomInEffect('#browserTable');
	} else {
		alert("Enter valid sid");
	}
}

function validation(selector) {
	$('#sId').removeAttr('disabled');
	$(selector).effect('highlight', {color: 'yellow'}, 500).focus();
	$(selector).on('keydown', function(e) {
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96 || e.keyCode > 105) || (e.keyCode == 13 || e.keyCode == 9))) {
			e.preventDefault();
		}
		
	});
	$(selector).on('keyup', function(e) {
		if ($(this).val().length != 0) {
			$('.error-text').remove();
		}
		if ($(selector).val().length == 5) {
			$('.errMsg').remove();
			var id = $('#sId').val().trim();
			if (($.inArray(id, arr) !== -1)) {
				$('.introjs-nextbutton').show();
				if ( e.keyCode == 13) {
					introjs.nextStep();
				}
			} else {
				$('.introjs-tooltiptext').append('<div class="error-text ct-fonts errMsg">Invaid student id.</div>');	
			}
		
		} else {
			$('.introjs-nextbutton').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts errMsg">Student id must be 5 digit number.</div>');
		}
	});
}


</script>
	<div class="col-xs-12 margin-top-20">
		<div class="col-xs-12 text-center">
			<h1 class="label ct-demo-heading">JDBC Driver - 1</h1>
		</div>
		<div class="col-xs-12 margin-top-20">
			<div class="col-xs-10 border-radius" id="driverOne">
				<div id="arrowAnimationDiv" class="col-xs-7">
					<div class="col-xs-12" id="svgParent">
						<div class="col-xs-12 margin-top-10 padding00">
							<span class="col-xs-1 text-left padding00"><div
									class="display-css" id="span1"></div></span> <span
								class="col-xs-1 col-xs-offset-10 text-right padding00"><div
									class="display-css" id="span2"></div></span>
						</div>
						<div class="col-xs-12 margin-top-20">
							<div class="col-xs-offset-4 col-xs-4 border-radius padding00 opacity00"
								id="javaApp">
								<div class="col-xs-12  text-center rounded-top padding00">
									Client App</div>
								<div class="col-xs-12 dash"></div>
								<div id="jAPI"
									class="col-xs-12  text-center rounded-bottom padding00">JDBC
									API</div>
							</div>
						</div>
						
						<div class="col-xs-12 margin-top-20 padding00">
							<span class="col-xs-1 text-left padding00"><div
									class="display-css" id="span3"></div></span> <span
								class="col-xs-1 col-xs-offset-10 text-right padding00"><div
									class="display-css" id="span4"></div></span>
						</div>
						
						<div class="col-xs-12 margin-top-50">
							<div id="bridge"
								class="col-xs-offset-4 col-xs-4 border-radius text-center opacity00">JDBC-ODBC
								Bridge (Type-1 Driver)</div>
						</div>
						<div class="col-xs-12 margin-top-50">
							<div id="oDriver"
								class="col-xs-offset-4 col-xs-4 border-radius text-center opacity00">
								ODBC Driver</div>
						</div>
						<div class="col-xs-12 margin-top-20 padding00">
							<span class="col-xs-1 text-left padding00"><div
									class="display-css" id="span5"></div></span> <span
								class="col-xs-1 col-xs-offset-10 text-right padding00"><div
									class="display-css" id="span6"></div></span>
						</div>
						<div class="col-xs-12 margin-top-20">
							<div id="DLApi"
								class="margin-top-10 col-xs-offset-4 col-xs-4 border-radius text-center opacity00">
								D/B Engine</div>
						</div>
						<div class="col-xs-12 margin-top-50">
							<div id="database"
								class="col-xs-offset-4 col-xs-4 text-center opacity00 padding00">
								<div id="ovalShape" class="col-xs-12 oval-shape"></div>
								<div id="databaseDiv" class="col-xs-12 database-box border-radius">
									<div class="margin-top-20">
										<span>Database</span>
										<div></div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 margin-top-20"></div>
					</div>
				</div>
				<div class="col-xs-5 padding00" id="BrowserTableDiv">
					<div id ="totalPopoverDiv" class="col-xs-12 padding00"><div id='browserHead' class="col-xs-12 text-center opacity00">Browser</div></div>
					<div class="col-xs-12">
						<div class='col-xs-12 opacity00 container' id='browser'>
							<div class='tab-container'>
								<ul class="tabs clearfix">
									<li class="active">
										<div class="col-xs-10 margin-top-20 padding00">JDBC</div> <i
										class="col-xs-2 fa fa-times fa-sm margin-top-20"></i>
									</li>
								</ul>
								<span id="plus"><i class="fa fa-plus"></i></span>
							</div>
							<div id='browser1' class='col-xs-12 padding00'>
								<div class='col-xs-2 padding00 text-center'>
									<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i
										class="fa fa-arrow-left arrow"></i></span> <span
										class='col-xs-4 padding00 margin-top5'><i
										class="fa fa-arrow-right arrow"></i></span> <span
										class='col-xs-4 padding00 margin-top5'><i
										class="fa fa-rotate-right fa-1x"></i></span>
								</div>
								<div class='col-xs-8 padding00 text-center url'>
									<input type="text" maxlength="100" class="usr-text"
										class="padding00" disabled="disabled" value="students.jsp">
									<span class='col-xs-1 padding00'><i
										class="fa fa-star-o fa-1x"></i></span>
								</div>
								<div class='col-xs-2 padding00 fa-display text-center'>
									<span class='col-xs-6 padding00 margin-top5'><i
										class="fa fa-home fa-1x"></i></span> <span
										class='col-xs-6 padding00 margin-top5'><i
										class="fa fa-bars fa-1x"></i></span>
								</div>
							</div>
							<div class="col-xs-12 html-body padding00" id="htmlBody">
								<div id='browserText'
									class="col-xs-12 padding00 margin-top-20 text-center">
										<input maxlength="5" id="sId" placeholder="Enter student id"
											type="text" />
									<div class="col-xs-12 margin-top-10">
										<table id="browserTable" class="table table-bordered opacity00">
											<caption class="text-center">Student Details</caption>
											<thead>
												<tr>
													<th>Sid</th>
													<th>SName</th>
													<th>SBranch</th>
													<th>SmobNo</th>
												</tr>
											</thead>
											<tbody>
												<tr class="hide">
													<td>10030</td>
													<td>Balu</td>
													<td>EEE</td>
													<td>9030162854</td>
												</tr>
												<tr class="hide">
													<td>10031</td>
													<td>Raju</td>
													<td>ECE</td>
													<td>9849892007</td>
												</tr>
												<tr class="hide">
													<td>10032</td>
													<td>Ramu</td>
													<td>CSE</td>
													<td>9849526378</td>
												</tr>
											</tbody>

										</table>
									</div>
								</div>
								<div id="data"
									class="col-xs-12 margin-top-10 text-center opacity00"></div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 margin-top-100 opacity00" id="databaseTable">
					<div class="col-xs-12"><table class="table table-bordered" >
					<caption class="text-center">Student Details</caption>
							<thead><tr>
								<th>Sid</th>
								<th>SName</th>
								<th>SBranch</th>
								<th>SmobNo</th>
							</tr></thead>
							<tbody id="tableBody"><tr>
								<td>10030</td>
								<td>Balu</td>
								<td>EEE</td>
								<td>9030162854</td>
							</tr>
							<tr>
								<td>10031</td>
								<td>Raju</td>
								<td>ECE</td>
								<td>9849892007</td>
							</tr>
							<tr>
								<td>10032</td>
								<td>Ramu</td>
								<td>CSE</td>
								<td>9849526378</td>
							</tr></tbody>
						</table></div>
					</div>
				</div>
			</div>
		</div>
		<div id="restartDiv" class="col-xs-12 margin-top-20 text-center hide opacity00">
				<span id='restart' class='btn btn-warning btn-sm'> <i
					class='fa fa-refresh'></i>&nbsp;Restart
				</span>
			</div>
	</div>
</body>
</html>