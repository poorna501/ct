
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>Servlets-filters</title>

<style type="text/css">

.border {
	border: 2px solid pink;
	height: 370px;
}

.padding0 {
	padding : 0px;
}

.filter-one {
	height: 100px;
}

.filter-two {
	height: 230px;
}

.filter-three {
	height: 300px;
}

.filter-border {
	background-color: grey;
}

.margin-bottom-30 {
	margin-bottom: 30px;
}


.margin-top-65 {
	margin-top: 65px;
}

.margin-top-50 {
	margin-top: 50px;
}

.margin-top-155 {
	margin-top: 155px;
}

.margin-top-5 {
	margin-top: 5px;
}

.bg-color {
	background-color: #efefd9;
	height :500px;
}

.container-text {
    background-color: #3b8fbf;
    color: #ffffff;
}

.servlet-css {
    background-color: #33b6bc;
    border-radius: 60%;
    color: white;
    text-shadow: 0 2px 5px black;
    padding : 10px;
}

.margin-top-75 {
	margin-top: 75px;
}

.margin-top-10 {
	margin-top: 10px;
}

.fa-9x {
    font-size: 9em;
}

.introjs-button {
	background-color: green;
}

.filter-one > span {
	line-height: 90px;
	color:navy;
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
}

.filter-two > span {
	white-space: pre;
	line-height: 25px;
	color : navy;
	width: 100%;
	left: 0;
	position: absolute;
	top: 0;
}


.filter-three > span {
	white-space: pre;
	line-height: 35px;
	color : navy;
	width: 100%;
	left: 0;
	position: absolute;
	top: 0;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.popover {
	z-index: 10000000;
}

.popover-content {
    color: white;
    font-size: 10px;
}

.text-align {
	text-align: right;
}

.popover {
	max-width: 157px !important;
	/* top: 0px !important;  */
}


</style>

</head>
<body>

<script type="text/javascript">
var intro;
var typingSpeed = 5;
var count = 1;
var web = "google";
$(document).ready(function () {
	$('line').hide();
	$('.ct-box-main ~ div:eq(0)').css('z-index',1000000);
	$('[class*="filter-"]').addClass('filter-border');
	$('[stroke-dasharray]').removeAttr('stroke-dasharray');
	$("#restart").click(function() {
		window.location.search =  "?restart = 1";
	})
	
	
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [
		  {
		    element: '#mainDiv',
		    intro: '',
		    position: 'bottom'
		  }, {
		    element: '#restart',
		    intro: '',
		    position: 'right'
		  }
	]});
	intro.onafterchange(function (targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
		switch (elementId) {
			case 'mainDiv':
				$('.introjs-nextbutton').hide();
				var text = 'In this live demo  you are going to learn how <b class =\'ct-code-b-yellow\'>Servlet-filtes</b> works.';
				typing('.introjs-tooltiptext', text, function () {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn a" onclick="firstClient()">Next &#8594;</a>');
				});
		    	break;
		    
			case "restart":
				$('.popover').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#restart').removeClass("opacity00");
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						console.log("I am in restart");
					});
				});
				break;
		}
	});
	intro.start();
});

function firstClient() {
	$('.introjs-tooltip').hide();
	$('.user-btn').remove();
	var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step1.com</b>';
	popover($('#browser1 > span'),'bottom', text, function () {
		$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="filterOneServletOne()">Next &#8594;</a><div>');
		//inputValidation();
	});
}

function filterOneServletOne() {
	$('.popover').remove();
	arrowReveal('#arrowMark1', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step2.com</b>';
		popover($('img:eq(0)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="filterTwoServletOne()">Next &#8594;</a><div>');
		});
	});
}

function filterTwoServletOne() {
	$('.popover').remove();
	arrowReveal('#arrowMark2', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step3.com</b>';
		popover($('img:eq(1)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="filterThreeServletOne()">Next &#8594;</a><div>');
		});
	});
	
}

function filterThreeServletOne() {
	$('.popover').remove();
	arrowReveal('#arrowMark3', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step4.com</b>';
		popover($('img:eq(2)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="servletOne()">Next &#8594;</a><div>');
		});
	});
}

function servletOne() {
	$('.popover').remove();
	arrowReveal('#arrowMark4', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step5.com</b>';
		popover($('.servlet-css:eq(0)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="firstResponse()">Next &#8594;</a><div>');
		});
	});
}

function firstResponse() {
	$( "#browser1 > span").wrapInner("<span></span>");
	$('.popover').remove();
	arrowReveal('#arrowMark5', function () {
		arrowReveal('#arrowMark6', function () {
			arrowReveal('#arrowMark7', function () {
				arrowReveal('#arrowMark8', function () {
					var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step6.com</b>';
					popover($('#browser1 > span > span'),'bottom', text, function () {
						$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="secondClient()">Next &#8594;</a><div>');
					});
				});
			});
		});
	});
}

function secondClient() {
	$('.popover').remove();
	var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.step7.com</b>';
	popover($('#browser2 > span'),'bottom', text, function () {
		$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="filterTwoServletTwo()">Next &#8594;</a><div>');
	});
}

function filterTwoServletTwo() {
	$('.popover').remove();
	$('#arrowMark9').show();
	arrowReveal('#arrowMark9', function () {
		  var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling step8.';
		  popover($('.filter-two'), 'bottom', text, function () {
		    $('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="filterThreeServletTwo()">Next &#8594;</a><div>');
		  });
	});
}

function filterThreeServletTwo()  {
	$('.popover').remove();
	arrowReveal('#arrowMark10', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.google.com</b>';
		popover($('.filter-three'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="servletTwo()">Next &#8594;</a><div>');
		});
	});
}

function servletTwo() {
	$('.popover').remove();
	arrowReveal('#arrowMark11', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.google.com</b>';
		popover($('.servlet-css:eq(1)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="secondResponse()">Next &#8594;</a><div>');
		});
	});
}

function secondResponse() {
	$( "#browser2 > span").wrapInner( "<span></span>" );
	$('.popover').remove();
	arrowReveal('#arrowMark12', function () {
		arrowReveal('#arrowMark13', function () {
			arrowReveal('#arrowMark14', function () {
				
				var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling.';
				popover($('#browser2 > span > span'), 'bottom', text, function () {
					$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="filterThreeServletThree()">Next &#8594;</a><div>');
				});
			});
		});
	});
}

function filterThreeServletThree() {
	$('.popover').remove();
	arrowReveal('#arrowMark15', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling.';
		popover($('.filter-three').parent(),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="servletThree()">Next &#8594;</a><div>');
		});
	});
}

function servletThree() {
	$('.popover').remove();
	arrowReveal('#arrowMark16', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling.';
		popover($('.servlet-css:eq(2)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="thirdResponse()">Next &#8594;</a><div>');
		});
	});
}

function thirdResponse() {
	$( "#browser2 > span > span").wrapInner("<span></span>" );
	$('.popover').remove();
	arrowReveal('#arrowMark17', function () {
		arrowReveal('#arrowMark18', function () {
			var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>This is the last of this demo.';
			popover($('#browser2 > span > span > span'),'bottom', text, function () {
				$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="intro.nextStep()">Next &#8594;</a><div>');
			});
			
		});
	});
	
}

function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y1: y2
	},
	onComplete: function () {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	 }});
}


function popover(selector, position, text, callBackFunction) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: 'focus',
		container: 'body',
		content: '<div id="popover' + count + '">'
		+ text + '</div>',
	 });
		$(selector).popover('show');
		$('#popover' + count).removeClass('opacity00');
		 typing('#popover' + count, text, function () {
		  if (typeof callBackFunction === 'function') {
		    callBackFunction();
		  }
	 	}); 
}

function typing(selector, text, callBackFunction) {
  $(selector).typewriting(text, {
    'typing_interval': typingSpeed,
    'cursor_color': 'white',
  }, function () {
    $(selector).removeClass('typingCursor');
    if (typeof callBackFunction === 'function') {
      callBackFunction();
    }
  });
}


function svgText(x,y,text) {
	$('.svg-css').append("<text id='text"+textCount+"' fill='brown' x = '"+x+"%' y = '"+y+"%' "
			+" style ='display: inline; font-weight: bold; font-size: 12px;'>"+ text +"</text>");
	
} 


//http://www.wiris.com/editor/demo/en/mathml-latex	
//mathematics symbols for html.

	</script>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">Servlets
					Filters</h1>
			</div>
		</div>

		<div class='col-xs-12 text-center'>
			<span class='container-text'>Server</span>
		</div>
		<div id='mainDiv' class="col-xs-12 padding0 bg-color margin-top-10">

			<svg class='svg-css'> <marker refX="4" refY="2.5"
				markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;"
				id="arrow"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow-one" />
			</marker> 
			
				<line id="arrowMark1" class="line" x1="17%" y1="26%" x2="28%"
				y2="26%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark2" class="line" x1="34%" y1="26%" x2="41%"
				y2="26%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark3" class="line" x1="47%" y1="26%" x2="53%"
				y2="26%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark4" class="line" x1="59%" y1="26%" x2="73%"
				y2="26%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark5" class="line" x1="73%" y1="29%" x2="59%"
					y2="29%" stroke-dasharray="5, 5"
					style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
						
				<line id="arrowMark6" class="line" x1="53%" y1="29%" x2="47%"
				y2="29%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark7" class="line" x1="41%" y1="29%" x2="34%"
				y2="29%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark8" class="line" x1="28%" y1="29%" x2="17%"
				y2="29%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark9" class="line" x1="17%" y1="65%" x2="41%"
				y2="65%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark10" class="line" x1="47%" y1="65%" x2="53%"
				y2="65%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark11" class="line" x1="59%" y1="65%" x2="73%"
				y2="65%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark12" class="line" x1="73%" y1="68%" x2="59%"
				y2="68%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark13" class="line" x1="53%" y1="68%" x2="47%"
				y2="68%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark14" class="line" x1="41%" y1="68%" x2="17%"
				y2="68%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark15" class="line" x1="17%" y1="74%" x2="53%"
				y2="74%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark16" class="line" x1="59%" y1="74%" x2="73%"
				y2="74%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark17" class="line" x1="73%" y1="77%" x2="59%"
				y2="77%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<line id="arrowMark18" class="line" x1="53%" y1="77%" x2="17%"
				y2="77%" stroke-dasharray="5, 5"
				style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
				
				<text id="text0" fill="brown" y="31%" x="60%"
				style="display: inline; opacity: 0; font-weight: bold; font-size: 12px;">response</text>
				
				
						
			</svg>


			<div class="col-xs-3  padding0">
				<div class="col-xs-12 margin-top-75 text-center padding0">
					<i class="fa fa-laptop fa-9x" aria-hidden="true"></i>
					<div class="text-color" id="browser1"><span>Browser/Client</span></div>
				</div>

				<div class="col-xs-12 margin-top-75 text-center padding0">
					<i class="fa fa-laptop fa-9x" aria-hidden="true"></i>
					<div class="text-color" id="browser2"><span>Browser/Client</span></div>
				</div>

			</div>
			<div class="col-xs-9 padding0 text-center border margin-top-65">
				<div class='col-xs-12 padding0 margin-bottom-30'>
					<span class='container-text'>Servlet Containers</span>
				</div>
				<div class='col-xs-2 padding0'>
					<div class="col-xs-offset-4 col-xs-4 padding0 filter-one">
					<img src="/images/filter.jpeg" alt="Smiley face" width="100%" height="100%">
						<span>filter 1</span>
					</div>
				</div>
				<div class='col-xs-2 padding0'>
					<div class="col-xs-offset-4 col-xs-4 padding0 filter-two">
					<img src="/images/filter.jpeg" alt="Smiley face" width="100%" height="100%">
					
						<span> F
I
L
T
E 
R
 
2 </span>
					</div>
				</div>
				<div class='col-xs-2 padding0'>
					<div class="col-xs-offset-4 col-xs-4 padding0 filter-three">
					<img src="/images/filter.jpeg" alt="Smiley face" width="100%" height="100%">
<span> F
I
L
T
E 
R
 
3 </span>
					</div>
				</div>
				<div class='col-xs-6 padding0'>
					<div class='col-xs-offset-2 col-xs-8 padding0'>
						<div class='col-xs-offset-2 col-xs-8 servlet-css padding0'>Servlet 1</div>
						<div
							class='col-xs-offset-2 col-xs-8 servlet-css padding0 margin-top-155'>Servlet 2</div>
						<div
							class='col-xs-offset-2 col-xs-8 servlet-css padding0 margin-top-5'>Servlet 3</div>


					</div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top-10 text-center'>
			<span id='restart' class='btn btn-warning btn-sm'><i
				class='fa fa-refresh'></i>&nbsp;Restart</span>
		</div>
	</div>

</body>
</html>