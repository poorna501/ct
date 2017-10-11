
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
<title>testing</title>
<style type="text/css">
.border {
	border: 2px solid black;
	height: 600px;
}

.top-div-height {
	height : 90px;
}
.padding0 {
	padding: 0px;
}

.margin-top-100 {
	margin-top: 100px;
}

.margin-top-20 {
	margin-top: 20px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.user-btn {
	background-color: green;
}

.text-align {
	text-align: right;
}

.color-grey {
	background: grey;
}

.completed {
	color: #8f8f8f;
}

.popover {
	max-width: 157px !important;
	/* top: 0px !important;  */
}

.bg-info {
	background-color: #f5f5f5;	
}

.text-color {
	color: #008080;
}

.laptop {
	background: white;
    border: 6px solid black;
    border-radius: 6px;
    height: 100px;
    margin-top: 25px;
}

.laptop-bottom {
    border: 6px solid black;
    border-radius: 6px;
    margin-top: 10px;
}

.background-yellow {
	background-color: yellow;
}

.popover-content {
    color: white;
    font-size: 10px;
}

.popover {
	z-index: 10000000;
}

.error-msg {
	color: red;
	font-weight: bold;
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
	
	$("#restart").click(function() {
		window.location.search =  "?restart = 1";
	})
	
	$("input").prop('disabled', true);
	$('line').hide();
	$('.fa-server:not(:eq(0),:eq(1))').parent().addClass('opacity00');
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
				var text = 'In this live demo  you are going to learn how <b class =\'ct-code-b-yellow\'>Domain name System</b> works.';
				typing('.introjs-tooltiptext', text, function () {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn a" onclick="client()">Next &#8594;</a>');
				});
		    	break;
		    
			case "restart":
				$('#popover10').parent().addClass('color-grey');
				$('.user-btn').remove();
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
	 }
});
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

function client() {
	$('.introjs-tooltip').hide();
	$('.user-btn').remove();
	var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.google.com</b>';
	popover($('.text-color').eq(0),'bottom', text, function () {
		inputValidation();
	});
}

function inputValidation() {
	$("input").prop('disabled', false).focus().addClass('background-yellow');
	$('input').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('input').val().substring(4,($('input').val().lastIndexOf('.'))) == web && $('input').val() == "www.google.com") {
			$('.error-msg').remove();
			 $(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolving()">Next &#8594;</a><div>');
		} else {
			if ($('.error-msg').length == 0) {
				var text = $(this).val();
				if (text.split(".").length > 2 && !(text.substring(text.indexOf(".") + 1, text.lastIndexOf(".")).toLowerCase() == "google")) {
					$('#popover' + count).append('<div class="text-align error-msg">We have entered other than google server address.<div>');
				}
		  	}
		$('.user-btn').remove();
		}
	});
}

function resolving() {
  $("input").prop('disabled', true).removeClass('background-yellow');
  $('.user-btn').remove();
  $('div[class="popover-content"]').addClass('color-grey');
  $('.popover').not($('.color-grey').parents('.popover')).remove();
  arrowReveal('#arrowMark1', function () {
    $('#text4').css('opacity', 1);
    var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>fist time  callingfist time callingfist time callingfist time.';
    popover($('.fa-server').eq(0).parent(), 'top', text, function () {
      $('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="rootName()">Next &#8594;</a><div>');
    });
  });
}

function rootName() {
	$('div[class="popover-content"]').addClass('color-grey');
	$('.user-btn').remove();
	$('.fa-server').eq(2).parent().removeClass('opacity00');
	$('.popover').not($('.color-grey').parents('.popover')).remove();
	$('#arrowMark2').show().css('marker-end', 'url(\'#arrow\')');
	TweenMax.to('#arrowMark2', 1, {
	  attr: {
	    y2: '75%',
	    x2: '31%'
	  },
		onComplete: function () {
		  var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling.';
		  popover($('.fa-server').eq(2).parent(), 'bottom', text, function () {
		    $('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolvingTwo()">Next &#8594;</a><div>');
		  });
		}
	});
}

function resolvingTwo() {
  $('.fa-server').eq(2).addClass('completed');
  $('.user-btn').remove();
  $('.popover').eq(2).css({'margin':'4px',"background-color":'#4C0000'});
  $('div[class="popover-content"]').addClass('color-grey');
  $('.popover').not($('.color-grey').parents('.popover')).remove();
  $('#arrowMark3').show().css('marker-end', 'url(\'#arrow\')');
  TweenMax.to('#arrowMark3', 1, {
    attr: {
      y2: '44%',
      x2: '49%'
    },
    onComplete: function () {
      var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling this popover.';
      popover($('.top-div-height'), 'right', text, function () {
        $('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="TLDNameServer()">Next &#8594;</a><div>');
      });
    }
  });
}

function TLDNameServer() {
  intro.refresh();
  $('.user-btn').remove();
  
  $('.popover').eq(3).css({'margin':'4px',"background-color":'#4c0000'});
  $('div[class="popover-content"]').addClass('color-grey');
  $('.popover').not($('.color-grey').parents('.popover')).remove();
  $('.fa-server').eq(3).parent().removeClass('opacity00');
  $('#arrowMark4').show().css('marker-end', 'url(\'#arrow\')');
  $('.popover').not($('.color-grey').parents('.popover')).remove();
  TweenMax.to('#arrowMark4', 1, {
    attr: {
      y2: '76%'
    },
    onComplete: function () {
      var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>tlp name server tlp name server tlp name server tlp name server tlp name server tlp name server .';
      popover($('.fa-server').eq(3).parent(), 'bottom', text, function () {
        $('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolvingThree()">Next &#8594;</a><div>');
      });
    }
  });
}

function resolvingThree() {
	$('.fa-server').eq(3).addClass('completed');
	$('.user-btn').remove();
	$('.popover').eq(4).css({'margin':'4px',"background-color":'#C63D0F'});
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark5').show().css('marker-end', 'url(\'#arrow\')');
	TweenMax.to('#arrowMark5', 1, {
		attr: {
	  		y2: '43%'
		},
		onComplete: function () {
	    var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br> This is third calling for resolving name div';
	    popover($('.top-div-height > div'),'left', text, function () {
	    	$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="authoritative()">Next &#8594;</a><div>');
	    });
	  }
	});
}

function authoritative() {
	$('.fa-server').eq(4).parent().removeClass('opacity00');
	$('.user-btn').remove();
	$('.popover').eq(5).css({'margin':'4px',"background-color":'#C63D0F'});
	$('div[class="popover-content"]').addClass('color-grey');
	$('.popover').not($('.color-grey').parents('.popover')).remove();
	$('#arrowMark7').show().css('marker-end', 'url(\'#arrow\')');
	TweenMax.to('#arrowMark7', 1, {
	  attr: {
	  	x2: '66%',
	 	y2: '76%'
	  },
	  onComplete: function () {
	    var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>This is third time calling this funciton .';
	    popover($('.text-color:eq(5) > span'), 'right', text, function () {
	      $('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolvingFour()">Next &#8594;</a><div>');
	    });
	  }
	});
}

function resolvingFour() {
	$('.fa-server').eq(4).addClass('completed');
	$('.user-btn').remove();
	$('.popover').eq(6).css({'margin':'4px',"background-color":'#f2b632'});
	$('div[class="popover-content"]').addClass('color-grey');
	$('.popover').not($('.color-grey').parents('.popover')).remove();
	$('#arrowMark6').show().css('marker-end', 'url(\'#arrow\')');
	TweenMax.to('#arrowMark6', 1, {
		attr: {
			x2: '55%',
			y2: '36%'
		},
		onComplete: function () {
			var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>This is fourth time calling for Resolving name server.';
			popover($('.fa-internet-explorer.opacity00'), 'bottom', text, function () {
				$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="clientTwo()">Next &#8594;</a><div>');
			});
		}
 	});
}

function clientTwo() {
	$('.user-btn').remove();
	$('.popover').eq(7).css({'margin':'4px',"background-color":'#f2b632'});
	$('.fa-server').eq(0).addClass('completed');
	$('div[class="popover-content"]').addClass('color-grey');
	$('.popover').not($('.color-grey').parents('.popover')).remove();
	arrowReveal('#arrowMark8', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling of client server.';
		popover($('.laptop'), 'left', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="server()">Next &#8594;</a><div>');
		});
	});
}

function server() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('.popover').not($('.color-grey').parents('.popover')).remove();
	arrowReveal('#arrowMark9', function () {
		 var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br> This is final response.';
		popover($('.text-color:eq(2) > span'), 'right', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="finalStep()">Next &#8594;</a><div>');
		}); 
		
	});
}

function finalStep() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('.popover').not($('.color-grey').parents('.popover')).remove();
	arrowReveal('#arrowMark10', function () {
		$('#text5').css('opacity', 1);
		$(".laptop,input").effect('highlight',{color:'blue'}, 1000, function() {
			$('input').remove();
			$("#googleHomePage").removeClass("hide");
			$('#popover10').parent().removeClass('color-grey');
			$('.user-btn:eq(0)').remove();
			$('#popover' + (count-1)).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="intro.nextStep()">Next &#8594;</a><div>');
		});
	});
}



/* var myString = "www.facebook.in"


	($('input').val().match(/'.'/g) || []).length;




	str.substring(4,(str.lastIndexOf('.')));





	if(myString.indexOf('.', myString.indexOf('.') + 1) != -1) {
	    System.out.print("it works"); //there are two or more dots in this string
	}
 */
//javascript: $('.popover').eq(3).css({'margin':'4px',"background-color":'red'});
//http://www.wiris.com/editor/demo/en/mathml-latex	
//mathematics symbols for html.

//$('.popover').css('top',parseInt($('.popover').css('top')) + 22 + 'px')
	</script>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">DNS</h1>
			</div>
		</div>

		<div class="col-xs-12">
			<div id="mainDiv" class="col-xs-offset-1 col-xs-10 bg-info border">
				<div class='col-xs-offset-1 col-xs-10' id='innerMainDiv'>
					<svg class='svg-css'> <marker refX="4" refY="2.5"
						markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;"
						id="arrow"> <path d="M0,0 L5,2.5 L0,5 Z"
						class="arrow-one" /> </marker> 
					<line id="arrowMark1" class="line" x1="18%"
						y1="30%" x2="45%" y2="30%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<text id="text4" fill="brown" y="29%" x="18%"
						style="display: inline; opacity: 0; font-weight: bold; font-size: 12px;">ask
					for IP</text> 
					<text id="text5" fill="brown" y="31%" x="60%"
						style="display: inline; opacity: 0; font-weight: bold; font-size: 12px;">response</text>

					<line id="arrowMark2" class="line" x1="47%" y1="43%" x2="47%"
						y2="43%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline;" /> <line
						id="arrowMark3" class="line" x1="34%" y1="75%" x2="34%" y2="75%"
						stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark4" class="line" x1="50%" y1="43%" x2="50%"
						y2="43%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark5" class="line" x1="52%" y1="76%" x2="52%"
						y2="76%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark6" class="line" x1="68%" y1="77%" x2="68%"
						y2="77%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark7" class="line" x1="55%" y1="40%" x2="55%"
						y2="40%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark8" class="line" x1="45%" y1="40%" x2="19%"
						y2="40%" stroke-dasharray="5, 5"
						style="stroke: grey; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark9" class="line" x1="18%" y1="33%" x2="84%"
						y2="33%"
						style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					<line id="arrowMark10" class="line" x1="84%" y1="37%" x2="19%"
						y2="37%"
						style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');" />

					</svg>
					<div class="col-xs-offset-4 col-xs-4 top-div-height padding0"><div class='col-xs-12'></div></div>
					<div class='col-xs-12 padding0'>
						<div class="col-xs-2 text-center00 padding0">
							<div class="col-xs-12 padding0 laptop">
								<div class='col-xs-12 padding0'>
									<input id='myInput' type="text" class="col-xs-12 padding0">
									<img alt="google" src="/images/google-home-page.png" id='googleHomePage' class='hide' width="100%">
								</div>
								
								
							</div>
							<div class="col-xs-12 laptop-bottom"></div>
							<div class='text-center text-color col-xs-12 padding0'>Browser/client</div>
						</div>
						<div
							class="col-xs-offset-2 col-xs-4 margin-top-20 text-center padding0">
							<div id='resolvingName'>
								<span><span class='text-color'><span>Resolving</span> name
										server</span></span>
							</div>
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
						</div>
						<div
							class="col-xs-offset-2 margin-top-20 col-xs-2 padding0 text-center">
							<div class='text-color'><span>google.com server</span></div>
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
							<i class="fa fa-internet-explorer fa-5x opacity00" aria-hidden="true"></i>
						</div>
					</div>

					<div class="col-xs-offset-1 col-xs-10 bg-info margin-top-100 padding0">
						<div class="col-xs-offset-2 col-xs-8 text-center padding0">
							<div class="padding0 col-xs-4">
								<i class="fa fa-server fa-5x" aria-hidden="true"></i>        
								<div class='text-color'>Root name server</div>
							</div>
							<div class="padding0 col-xs-4">
								<i class="fa fa-server fa-5x" aria-hidden="true"></i>
								<div class='text-color'>TLD name server</div>
							</div>
							<div class="padding0 col-xs-4">
								<i class="fa fa-server fa-5x" aria-hidden="true"></i>
								<div class='text-color'><span>authoritative name</span> server</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top-20 text-center'>
			<span id='restart' class='btn btn-warning btn-sm opacity00'><i
				class='fa fa-refresh'></i>&nbsp;Restart</span>
		</div>
	</div>
	<!-- <div>
		<math xmlns="http://www.w3.org/1998/Math/MathML" > <msubsup>
		<mo>&#x222B;</mo>
		<mn>0</mn>
		<mrow>
		<mi mathvariant="normal">&#x3C0;</mi>
		<mo>/</mo>
		<mn>6</mn></mrow></msubsup>
		<msup>
		<mi>cos</mi>
		<mn>4</mn></msup>
		<mn>3</mn>
		<mi>&#x3B8;</mi>
		<msup>
		<mi>sin</mi>
		<mn>2</mn></msup>
		<mn>6</mn>
		<mi>&#x3B8;</mi>
		<mi>d</mi>
		<mi>&#x3B8;</mi></math>
	</div> -->
</body>
</html>