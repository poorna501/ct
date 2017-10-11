   <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
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

<!-- <script type="text/javascript" src="js-min/mt.min.js"></script> -->
<!-- <script type="text/javascript" src="js/multi-threading.js"></script> -->

<title>MultiThreading</title>
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
	stroke:	#556B2F;
	stroke-width: 2;	
}

.z-index {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.user-btn {
	background-color: green;
}

.padding0 {
	padding: 0px;
}

.color {
	color: seagreen;
}

.border-radius5 {
	border-radius: 5px;
}


.font-size {
	font-size: 11px;
}

.progress {
	height: 12px;
}

.margin-top25 {
	margin-top: 22px;
}

.background-color-palegreen {
	background-color: #983232;
	border-radius: 12px;
    box-shadow: 0 0 2px;
    height: 50px;
}

.browser-client {
	font-weight: bold; 
	color: #008080; 
	font-size: 11px;"
}

.color-aquamarine {
	color: #008080; 
}

.transform {
	transform: rotate(90deg); 
	width: 60px;
}

.width {
	width: 100%;
}

.thread-pool-box {
	border: 1px solid grey; 
	background-color: #e3e0cf; 
	border-top: none; 
	padding: 3px; 
	min-height: 66px; 
	display: flex; 
	justify-content: center; 
	align-items: baseline;
}

.eclipse-shape {
	height: 32px; 
	border-radius: 100px / 32px; 
	box-shadow: 0px 0px 5px; 
}

.bg-color-top-1 {
	background-color: #f3acac;
}

.box-text {
	justify-content: center;
	display: flex; 
	margin-top: 5px;"
}

.response-empty {
	box-shadow: 0px 0px 5px;
	width: 12%;
	height: 30px;
	border-radius: 100px / 46px; 
	background-color: white;"
}

.request-top-box {
	box-shadow: 0px 0px 5px; 
	border-radius: 100px / 53px; 
	height: 31px; 
	width: 10%;"
}

.new-servlet-box {
	border-radius: 100px / 32px; 
	height: 50px; 
    width: 22%;
    box-shadow: 0px 0px 2px; 
}

.bg-color-top-2 {
	background-color: #89aeef;
}

.bg-color-top-3 {
	background-color: #f9b0ed;
}

.bg-color-model-second {
	 background-color: #004687; 
}

.bg-color-model-third {
	background-color: #7f2b82;
}

.margin-left30 {
	margin-left: 30.333%;
}

.popover {
	width: 180px !important;
}

.eclipse-shape-small {
	background-color: #d7679e;
    border-radius: 100px / 45px;
    box-shadow: 0 0 5px;
    display: inline-block;
    padding: 5px;
}

.color-font-weight-1 {
	font-size: 12px;
	color: black;
}

.bg-color-white {
	background-color: white;
}

.response-color {
	stroke: #333db7 !important;
}
</style>
<body>

<script type="text/javascript">
var count = 0;
$(document).ready(function() {
	$("line").hide();
	$("text").hide();
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
	});
	$("body").keypress(function(e) {
		if (e.which === 13) {
			 e.preventDefault();
		}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps :	[{
			element :'#architecture',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden'
		},{
			element :'#restartBtn',
			intro :'',
			position:"right" 
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "architecture" :
			$('.introjs-nextbutton').hide();
			$('#architecture').removeClass('opacity00');
			$('#singleThreadModelBox').removeClass('opacity00');
			popover('#architecture', 'bottom');
			typing('#popover' + count, "1.<br>"+
						"", function() { 
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
			 	});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
});
function firstStep() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#webServer").fadeTo(1000, 1, function() {
		popover('#threadPool1', 'right');
		typing('#popover' + count, "free pool.", function() { 
			$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep1()">Next →</a>');
		});
	});
}
function firstStep1() {
	$(".user-btn").remove();
	$(".popover").hide();
	$('#browser1').removeClass('opacity00');
	arrowReveal("#arrow1", function() {
		$("#text1").fadeTo(1000, 1, function() {
			popover('#browser1', 'bottom');
			typing('#popover' + count, "req1.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
			});
		});
	});
}
function firstStep2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#usedPool").fadeTo(1000, 1, function() {
		$("#threadPool2").removeClass('opacity00');
		$("#thread5").addClass("opacity00");
		usingPool("#thread5");
		popover('#threadPool2', 'right');
		typing('#popover' + count, "used pool.", function() {  
			$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
		});
	});
}
function firstStep3() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow2");
	$('#threadModel').removeClass('opacity00');	
	$('#reqRespOne').removeClass('opacity00');	
	TweenMax.staggerFrom("#reqRespOne", 0.8, {opacity:1, x: -155}, 0.1, function() {
	//TweenMax.staggerFrom("#reqRespOne", 0.8, {opacity:1, x: -155});
		arrowReveal("#arrow2000", function() {
			$("#model10").removeClass('opacity00');
		
		/*arrowReveal("#arrow3", function() {
			$("#model11").removeClass('opacity00');*/
			popover('#model10', 'bottom');
			typing('#popover' + count, "servlet instance and config.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
			});
		});
	});
}

function firstStep4() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow3", function() {
		$("#model11").removeClass('opacity00');
		$("#servletConfig").removeClass('opacity00');
		TweenMax.staggerTo("#servletConfig", 0.8, {opacity:1, y: 80}, 0.1, function() {
			$("#servletConfig").removeAttr("style");
			$(".configColor").css("background-color", "wheat");
			$(".configColor").css("color", "#004687;");
			$("#arrow13").removeAttr("style");
			$('#arrow13').css("marker-end", "url('#myMarker')");
			arrowRevealVertical("#arrow13", function() {
				popover('#model11', 'bottom');
				typing('#popover' + count, "config.", function() {  
					$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep5()">Next →</a>');
				}); 
			});
		});
	});
}
function firstStep5() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow4", function() {
		$("#model12").removeClass('opacity00');
		$("#request").removeClass('opacity00');
		$("#request").addClass("opacity00");
		TweenMax.staggerTo("#request", 0.8, {opacity:1, y: 80}, 0.1, function() {
			$("#request").removeAttr("style");
			$("#request").removeClass('opacity00');
			$(".reqColor").css("background-color", "wheat");
			$(".reqColor").css("color", "#004687;");
			
			$('#arrow14').removeAttr('style');
			$("#arrow14").css("marker-end", "url('#myMarker')");
			arrowRevealVertical("#arrow14", function() {
			
				$("#emptyResponse").removeClass('opacity00');
				$("#emptyResponse").addClass("opacity00");
				TweenMax.staggerTo("#emptyResponse", 0.8, {opacity:1, y: 80}, 0.1, function() {
					$("#emptyResponse").removeAttr("style");
					$("#emptyResponse").removeClass('opacity00');
					$(".resColor").css("background-color", "wheat");
					$(".resColor").css("color", "#004687;");
				
					$('#arrow15').removeAttr('style');
					$("#arrow15").css("marker-end", "url('#myMarker')");
					arrowRevealVertical("#arrow15", function() {
					
						popover('#model12', 'bottom');
						typing('#popover' + count, "animation req response.", function() {  
							$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep9()">Next →</a>');
						});
					});
				});
			});
		});
	});
}

function firstStep9() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow11").removeAttr("style");
	$('#arrow11').css("marker-end", "url('#myMarker')");
	arrowRevealVertical("#arrow11", function() {
		$('#arrow11').css("marker-end", "none");
		$('#arrow110').css("marker-end", "url('#myMarker')");
		arrowReveal("#arrow110", function() {
			$("#responseMove").removeClass('opacity00');
			$("#response1").css({opacity: 1});
			$("#responseMove").addClass('opacity00');
			TweenMax.staggerFrom("#response1", 0.8, {opacity:1, x: 504});
				$('#arrow110').css("marker-end", "none");
				arrowReveal("#arrow12", function() {
					arrowReveal("#arrow6", function() {
						$("#text2").fadeTo(1000, 1, function() {
							$("#arrow522").removeAttr("style");
							$('#arrow522').css("marker-end", "url('#myMarker')");
							arrowRevealVertical("#arrow522", function() {
								$('#arrow522').css("marker-end", "none");
								arrowReveal("#arrow5", function() {
									freePool(1);
									popover('#response1', 'bottom');
									typing('#popover' + count, "response move.", function() {  
										$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep10()">Next →</a>');
									//});
								});
							});
						});
					});
				});
			});
		});
	});
}

function firstStep10() {
	$(".user-btn").remove();
	$(".popover").hide();
	$('#browser2').removeClass('opacity00');
	arrowReveal("#arrow20", function() {
		$("#text3").fadeTo(1000, 1, function() {
			$("#thread3").addClass("opacity00");
			usingPool("#thread3");
			$('#browser3').removeClass('opacity00');
			arrowReveal("#arrow30", function() {
				$("#text5").fadeTo(1000, 1, function() {
					$("#thread2").addClass("opacity00");
					usingPool("#thread2");
					popover('#browser3', 'bottom');
					typing('#popover' + count, "req2.", function() {  
						$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep11()">Next →</a>');
					});
				});
			});
		});
	});
}

function firstStep11() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal("#arrow21");
		$("#reqRespTwo").removeClass("opacity00");
		TweenMax.staggerFrom("#reqRespTwo", 0.8, {opacity:1, x: -500}, 0.1, function() {
		arrowReveal("#arrow2100", function() {
			$('#arrow2100').css("marker-end", "none");
			arrowRevealVertical("#arrow22", function() {
				arrowRevealVertical("#arrow28", function() {
					$('#arrow28').css("marker-end", "none");
					arrowReveal("#arrow280", function() {
						$("#response2").removeClass("opacity00");
						TweenMax.staggerFrom("#response2", 0.8, {opacity:1, x: 570});
							$('#arrow280').css("marker-end", "none");
							arrowReveal("#arrow210", function() {
							arrowReveal("#arrow211", function() {
								$("#text4").fadeTo(1000, 1, function() {
									arrowRevealVertical("#arrow51", function() {
										$('#arrow51').css("marker-end", "none");
										arrowReveal("#arrow511", function() {
											
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
	
	arrowReveal("#arrow31");
		$("#reqRespThree").removeClass("opacity00");
		TweenMax.staggerFrom("#reqRespThree", 0.8, {opacity:1, x: -500}, 0.1, function() {
		arrowReveal("#arrow3100", function() {
			$('#arrow3100').css("marker-end", "none");
			arrowRevealVertical("#arrow32", function() {
				arrowRevealVertical("#arrow37", function() {
					$('#arrow37').css("marker-end", "none");
					arrowReveal("#arrow370", function() {
						$("#response3").removeClass("opacity00");
						TweenMax.staggerFrom("#response3", 0.8, {opacity:1, x: 570});
							$('#arrow370').css("marker-end", "none");
							arrowReveal("#arrow39", function() {
							arrowReveal("#arrow310", function() {
								$("#text6").fadeTo(1000, 1, function() {
									arrowRevealVertical("#arrow52", function() {
										$('#arrow52').css("marker-end", "none");
										arrowReveal("#arrow510", function() {
											freePool(2);
											popover('#response3', 'bottom');
											typing('#popover' + count, "response move.", function() {  
												$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep14()">Next →</a>');
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
function firstStep14() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#model13").removeClass('opacity00');
	
	$("#browser").fadeTo(1000, 0);
	$("line").not("#arrow9, #arrow10").fadeTo(1000, 0);
	$("text").fadeTo(1000, 0);
	$("#model10, #model11, #model12, #servletConfig, #request, #emptyResponse").fadeTo(1000, 0);
	$("#response1, #response2, #response3").fadeTo(1000, 0);
	$("#reqRespOne, #reqRespTwo, #reqRespThree").fadeTo(1000, 0);
	
	$('#arrow9').removeAttr('style');
	$("#arrow9").css("marker-end", "url('#myMarker')");
	arrowRevealVertical("#arrow9", function() {
		$("#arrow9").css("marker-end", "none");
		arrowReveal("#arrow10", function() {
			popover('#model13', 'bottom');
			typing('#popover' + count, "destroy.", function() {  
				$("#popover" + count +"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep15()">Next →</a>');
			});
		});
	});
}

function firstStep15() {
	$(".user-btn").remove();
	$(".popover").hide();
	intro.nextStep();
}
function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr("x2");
	var y2 = $(lineId).attr("y2");
	$(lineId).attr("x2", $(lineId).attr("x1"));
	$(lineId).attr("y2", $(lineId).attr("y1"));
	$(lineId).show();
	TweenMax.to(lineId, 1, {attr:{x2 : x2, y1 : y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowRevealVertical(lineId, callBackFunction) {
	 var x2 = $(lineId).attr('x2');
	 var y2 = $(lineId).attr('y2');
	 $(lineId).attr('x2', $(lineId).attr('x1'));
	 $(lineId).attr('y2', $(lineId).attr('y1'));
	 $(lineId).show();
	 TweenMax.to(lineId, 1, {
	   attr: {
	     x2: x2,
	     y2: y2
	   },
	   onComplete: function () {
	     if (typeof callBackFunction === 'function') {
	       callBackFunction();
	     }
	   }
	});
}

function usingPool(id) {
	$("#threadPool2").css("z-index", "10000000");
	$("#threadPool1").css("z-index", "9999999");
	$(".runningPool").addClass("progress-bar-danger");
	$("#threadPool2").append("<div class='runningPool z-index-1 progress margin-top25 thread-pool-1' style='transform: rotate(90deg);  width: 60px;'>"+
			"<div  style='width: 100%;' aria-valuemax='100' aria-valuemin='0' aria-valuenow='45'"+
			"role='progressbar' class=' z-index-1 progress-bar progress-bar-success progress-bar-striped active'></div></div> ");
	$(".runningPool :eq(0), .runningPool :eq(1)").removeClass("thread-pool-1").addClass("thread-pool-2").addClass("progress-bar-danger");
	var l = $(id).offset();
	$(".runningPool").eq(0).offset({
		"top" : l.top,
		"left" : l.left
	});
	$(id).addClass("opacity00");
	
	TweenMax.to($(".runningPool").eq(0), 1, {top : 0, left : 0, onComplete:function() {
		$(".runningPool > div").addClass("progress-bar-danger");
		
		TweenMax.to(id, 1, {"width" : "0%", onComplete:function() {
			$(id).remove();
			reArrangeIDs();
		}});
	}});
}
function reArrangeIDs() {
	$(".thread-pool-1").removeAttr("id");
	$.each($(".thread-pool-1"), function(index) {
		$(this).attr("id", "thread" + (index + 1));
	});
}

function freePool(count) {
	$("#threadPool1").css("z-index", "10000000");
	$("#threadPool2").css("z-index", "9999999");
  
	  for (var i = 0; i < count; i++) {
	      $("#threadPool1").prepend("<div id='runningFreePool" + i + "' class='two-threads-move thread-pool-2  progress margin-top25' style='transform: rotate(90deg);  width: 60px;'>"+
	          "<div  style='width: 100%;' aria-valuemax='100' aria-valuemin='0' aria-valuenow='45' "+
	          "role='progressbar' class=' progress-bar progress-bar-danger progress-bar-striped active'></div></div>");
	  
	      var l = $(".runningPool").eq((count - 1) - i).addClass("opacity00").offset();
	      $("#runningFreePool" + i).offset({
	        top : l.top,
	        left : l.left
	      });
	   	}
		TweenMax.to($(".two-threads-move"), 1, {top : 0, left : 0, onComplete:function() {
		  	$(".runningPool.opacity00").remove();
		  	$(".two-threads-move > div").removeClass("progress-bar-danger").addClass("progress-bar-success");
		    $(".two-threads-move").removeClass("two-threads-move");
		    reArrangeIDs();
		}});
}
function popover(selector, position) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'"></div>',
		container: '#architecture'
	});
	$(selector).popover('show');
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
</script>

<div id ='totaldiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>MultiThreading</span>
</div>
<div id="architecture" class="col-xs-offset-1 col-xs-10 z-index introjs-showElement padding0" 
		style="border: 1px solid grey; margin-top: 30px;">

<div style="background-color: #fff6ea; min-height: 607px;" class="col-xs-12 padding0" id='totalDiv'>
	<div class="col-xs-2 padding0" id="browser" style=''>
		<div class='col-xs-12'>
			<div id="browser1" class="opacity00" style='margin-top: 235px; display: inline-block; text-align: 
				center;'>
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div>
			</div>
		</div>
		<div class='col-xs-12'>
			<div id="browser2" style="margin-top:35px; display: inline-block; text-align: center;" id="browser2" 
					class="opacity00"> 
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div> 
			</div>
		</div>
		<div class='col-xs-12'>
			<div style="margin-top: 45px; display: inline-block; text-align: center;" id="browser3" class='opacity00'> 
				<i aria-hidden="true" class="fa fa-laptop fa-4x"></i>
				<div class='browser-client'>Browser/Client</div> 
			</div>	
		</div>			
	</div>
	<div id='singleThreadModelBox' class='col-xs-10 opacity00 border-radius5 opacity00' 
			style='border: 2px solid green; margin-top: 23px; min-height: 564px; background-color: #efe5d9;'>
		
		<div class="col-xs-4 padding0">
			<div class="col-xs-12 padding0 text-center opacity00" id="webServer" style="min-height: 300px;">
				<div class='color-aquamarine'>Free pool</div>
				<div id='threadPool1' class="col-xs-12 padding0 border-radius5 thread-pool-box">
					<div id='thread1' class="progress thread-pool-1 transform">
						<div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread2' class="progress margin-top25 thread-pool-1 transform">
						<div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread3' class="progress margin-top25 thread-pool-1 transform">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread4' class="progress margin-top25 thread-pool-1 transform">
						<div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div>
					<div id='thread5' class="progress margin-top25 thread-pool-1 transform">
						<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" 
							 role="progressbar" class="progress-bar progress-bar-success progress-bar-striped active width">
						</div>
					</div> 
				</div>
				<div style='margin-top: 10px;' class='opacity00 color-aquamarine' id='usedPool'>Used pool</div>
				
				<div  id='threadPool2' class="col-xs-12 padding0 border-radius5 opacity00 z-index-1 thread-pool-box"></div>
				
				<div id='reqRespOne' class="col-xs-offset-5 col-xs-7 padding0 text-center opacity00" style='margin-top: 38px;'>
				  	<div class="eclipse-shape-small padding0 text-center" id="lifeCycleBox8">
				     	<div class='color-font-weight-1'>request</div>
				     </div>
				     <div class="eclipse-shape-small padding0 text-center bg-color-white" id="lifeCycleBox9">
						<div class='color-font-weight-1'>response</div>
					</div>
				</div>
				<div class="col-xs-12 padding0">
				  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-1" id="response1"><span class='box-text'>response</span></div>
				</div>
				<div class="col-xs-12 padding0" style="margin-top: 79px;">
				  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-2" id="response2"><span class='box-text'>response</span></div>
				</div>
				<div class="col-xs-12 padding0" style="margin-top: 83px;">
				  	<div class="col-xs-4 padding0 opacity00 eclipse-shape bg-color-top-3" id="response3">
				  	<span class='box-text'>response</span></div>
				</div>
			</div>
		</div>
	
	<div id="threadModel" class="padding0 col-xs-8 border-radius5">
				 
		 <div class="col-xs-12 padding0" style='margin-top: 117px;'>
		  	<div class="margin-left30 col-xs-2 eclipse-shape bg-color-top-1 opacity00" id="servletConfig">
	  			<span class='box-text'>ServletConfig</span></div>
			  	<div class="col-xs-offset-1 col-xs-1 eclipse-shape-small text-center opacity00" id="request">
			     	<div class='color-font-weight-1'>request</div>
			     </div>
			     <div class="eclipse-shape-small text-center bg-color-white opacity00" id="emptyResponse">
					<div class='color-font-weight-1'>response</div>
				</div>
			</div>
		<div style="margin-top: 46px;" class="col-xs-12 padding0 font-size" id="model1">
	    	<div class="col-xs-2 padding0 text-center new-servlet-box opacity00" style="background-color:  #983232;" id="model10">
	    		<span style="display: flex; color: white; font-weight: bold; justify-content: center; margin-top: 17px;">New servlet instance</span></div>
	     	<div class="background-color-palegreen col-xs-offset-1 col-xs-2 padding0 text-center opacity00 width18" id="model11">
	     		<span style="color: white; font-weight: bold;">Invoke init(<span class='configColor'>ServletConfig</span>) method</span></div>
			<div class="background-color-palegreen col-xs-offset-1  col-xs-3 padding0 text-center opacity00" id="model12">
	    		<span style="color: white; font-weight: bold; justify-content: center; padding: 9px;">
	    		Invoke service(<span class='reqColor'>request</span>, <span class='resColor'>response</span>)</span></div>
			<div class="background-color-palegreen col-xs-offset-1 col-xs-1 padding0 text-center opacity00" id="model13">
	    		<span style="margin-top: 9px; display: flex; justify-content: center; color: white; font-weight: bold;">Invoke destroy</span></div>
	    </div>
	    <div class="col-xs-12 padding0" style="margin-top: 0px;">
			<div class="opacity00 col-xs-offset-5 col-xs-2 padding0 eclipse-shape bg-color-top-1" id="responseMove"><span class='box-text'>response</span></div>
		</div>
		<div id='reqRespTwo' class="col-xs-12  col-xs-offset-1 col-xs-7  margin-top10 padding0 text-center opacity00" style='margin-top: 35px;'>
		  	<div class="eclipse-shape-small padding0 text-center" id="lifeCycleBox8">
		     	<div class='color-font-weight-1'>request</div>
		     </div>
		     <div class="eclipse-shape-small padding0 text-center bg-color-white" id="lifeCycleBox9">
				<div class='color-font-weight-1'>response</div>
			</div>
		</div>
	    <div class="col-xs-12 padding0" style="margin-top: 0px;">
			<div class="opacity00 col-xs-offset-5 col-xs-2 padding0 eclipse-shape bg-color-top-2" id="responseMove1"><span class='box-text'>response</span></div>
		</div>
		
		<div id='reqRespThree' class="col-xs-12  col-xs-offset-1 col-xs-7  padding0 text-center opacity00" style='margin-top: 63px;'>
		  	<div class="eclipse-shape-small padding0 text-center" id="lifeCycleBox8">
		     	<div class='color-font-weight-1'>request</div>
		     </div>
		     <div class="eclipse-shape-small padding0 text-center bg-color-white" id="lifeCycleBox9">
				<div class='color-font-weight-1'>response</div>
			</div>
		</div>
		
	    <div class="col-xs-12 padding0" style="margin-top: 0px;">
			<div class="opacity00 col-xs-offset-5 col-xs-2 padding0 eclipse-shape" id="responseMove2"><span class='box-text'>response</span></div>
		</div>
	    
		</div>
	</div>
</div>

<svg class="svg-css">
	<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #213700;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
		
	<line x1="8%" y1="41%" x2="16%" y2="41%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow1"/>
	<line x1="17%" y1="41%" x2="32%" y2="41%" style="display: inline; opacity: 1; marker-end: url('#myMarker');" class="svg-line" id="arrow2"/>
	<line x1="42%" y1="41%" x2="45%" y2="41%" style="display: inline; opacity: 1; marker-end: url('#myMarker');" class="svg-line" id="arrow2000"/>
	
	<line id="arrow3" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="41%" x2="61%" y1="41%" x1="57%"/>
	<line id="arrow4" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="41%" x2="74%" y1="41%" x1="70%"/>
	
	<line x1="87%" y1="10%" x2="46%" y2="10%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="arrow510"/>
	<line id="arrow511" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="13%" x2="46%" y1="13%" x1="86%"/>
	
	<line id="arrow5" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="17%" x2="46%" y1="17%" x1="85%"/>
	<line x1="85%" y1="36%" x2="85%" y2="17%" class="svg-line" id="arrow522" style="marker-end: url('#myMarker'); display: inline;"/>

	<line id="arrow51" class="svg-line" y2="13%" x2="86%" y1="36%" x1="86%" style="marker-end: url('#myMarker');"/>
	<line id="arrow52" class="svg-line" y2="10%" x2="87%" y1="36%" x1="87%" style="marker-end: url('#myMarker');"/>
	
	<line id="arrow6" class="svg-line response-color" style="marker-end: url('#myMarker'); display: inline;" y2="46%" x2="8%" y1="46%" x1="16%" stroke-dasharray="9, 5"/>
	<line id="arrow9" class="svg-line" y2="8%" x2="95%" y1="36%" x1="95%" style="marker-end: url('#myMarker');"/>
	<line id="arrow10" class="svg-line" style="marker-end: url('#myMarker'); display: inline;" y2="8%" x2="46%" y1="8%" x1="95%"/>
	
	<line x1="76%" y1="44%" x2="76%" y2="46%" class="svg-line response-color" id="arrow11"/>
	<line style="marker-end: none; display: inline;" x1="76%" y1="46%" x2="74%" y2="46%" class="svg-line response-color" id="arrow110" stroke-dasharray="9, 5"/>

	<line id="arrow12" class="svg-line response-color" style="opacity: 1; marker-end: url('#myMarker'); display: inline;" stroke-dasharray="9, 5" y2="46%" x2="27%" y1="46%" x1="74%"/>
	<line x1="66%" y1="29%" x2="66%" y2="36%" class="svg-line" id="arrow13" style="marker-end: url('#myMarker');"/>
	<line id="arrow14" class="svg-line" y2="36%" x2="77%" y1="28%" x1="77%" style="marker-end: url('#myMarker');"/>
	<line id="arrow15" class="svg-line" y2="36%" x2="82%" y1="28%" x1="82%" style="marker-end: url('#myMarker');"/>
	
	<text id="text1" fill="brown" y="40%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">first request</text>
	<text id="text2" fill="brown" y="45%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
	
	<line style="marker-end: url('#myMarker'); display: inline;" id="arrow20" class="svg-line" y2="58%" x2="16%" y1="58%" x1="8%"/>
	<line x1="17%" y1="58%" x2="60%" y2="58%" style="display: inline; opacity: 1; marker-end: url('#myMarker');"  class="svg-line" id="arrow21"/>
	<line x1="70%" y1="58%" x2="78%" y2="58%" style="display: inline; opacity: 1; marker-end: url('#myMarker');"  class="svg-line" id="arrow2100"/>
	<line x1="78%" y1="58%" x2="78%" y2="45%" class="svg-line" id="arrow22" style="marker-end: url('#myMarker');"/>

	<line x1="81%" y1="44%" x2="81%" y2="64%" class="svg-line response-color" id="arrow28" stroke-dasharray="9, 5" style="marker-end: url('#myMarker');"/>
	<line x1="81%" y1="64%" x2="74%" y2="64%" class="svg-line response-color" id="arrow280" style="display: inline; marker-end: url('#myMarker');" stroke-dasharray="9, 5"/>
	
	<line id="arrow210" class="svg-line response-color" style="display: inline; opacity: 1; marker-end: url('#myMarker');" stroke-dasharray="9, 5" y2="64%" x2="27%" y1="64%" x1="74%"/>
	
	<line x1="16%" y1="64%" x2="8%" y2="64%" class="svg-line response-color" id="arrow211" style="marker-end: url('#myMarker'); display: inline;" stroke-dasharray="9, 5"/>
	
	<text style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;" x="8%" y="57%" fill="brown" id="text3">second request</text>
	<text id="text4" fill="brown" y="63%" x="9%" style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;">response</text>
	
	<line x1="8%" y1="78%" x2="16%" y2="78%" class="svg-line" id="arrow30" style="marker-end: url('#myMarker'); display: inline;"/>
	<line id="arrow31" class="svg-line" style="opacity: 1; display: inline; marker-end: url('#myMarker');" y2="78%" x2="60%" y1="78%" x1="17%"/>
	<line id="arrow3100" class="svg-line" style="opacity: 1; display: inline; marker-end: url('#myMarker');" y2="78%" x2="84%" y1="78%" x1="70%"/>
	<line id="arrow32" class="svg-line" y2="45%" x2="84%" y1="78%" x1="84%" style="marker-end: url('#myMarker');"/>
	
	<line x1="87%" y1="45%" x2="87%" y2="83%" class="svg-line response-color" id="arrow37" stroke-dasharray="9, 5" style="marker-end: url('#myMarker');"/>
	<line x1="87%" y1="83%" x2="74%" y2="83%" class="svg-line response-color" id="arrow370" style="display: inline; marker-end: url('#myMarker');" stroke-dasharray="9, 5"/>
	
	<line x1="74%" y1="83%" x2="27%" y2="83%" stroke-dasharray="9, 5" style="opacity: 1; marker-end: url('#myMarker'); display: inline;" class="response-color svg-line" id="arrow39"/>
	
	<line style="marker-end: url('#myMarker'); display: inline;" id="arrow310" class="svg-line response-color" y2="83%" x2="8%" y1="83%" x1="16%" stroke-dasharray="9, 5"/>
	
	<text style="display: inline; opacity: 1; font-weight: bold; font-size: 12px;" x="8%" y="77%" fill="brown" id="text5">third request</text>
	<text id="text6" fill="brown" y="82%" x="9%" style="opacity: 1; font-weight: bold; font-size: 12px; display: inline;">response</text>
</svg>
</div>
	<div class="button col-xs-12 text-center " id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</body>
