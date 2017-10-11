<!-- =============================================================
TOC-Reference-Name:Images-3
Objective: clear float property with images 
Coverage: clear float styles with images, opacity 
Developed By: Padmaja
Developed Date: 06-12-2016 
Reviewed by:
Reviewed Date:
Modified Date:  
============================================================= -->

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<title>images</title>
<style>
#main {
 height : 900px;
}

#imgDiv {
	width: 100%;
}

#codeDiv,#browser {
	min-height:400px;
}

.margin20 {
	margin-top:20px !important;
}
.marginleft20 {
	margin-left:20px !important;
}	
#browser {
	border:1px solid;
}

#computerDiv {
	height : 200px !important;
	width : 210px !important;
}

#img1Enter, #img2Enter {
	min-width: 15px;
	min-height: 15px;
	display: inline-block; 
	margin-left: 40px;
	outline:none;
}

.padding0 {
	padding : 0!important;
} 	

#browserDiv {
	height : 400px;
	border:1px solid;	
}

#natureDiv, #nature1Div {
	height : 200px !important;
	width : 210px !important;
}

.outline {
	outline : none;	
}

.usr-text {
	border-width: 0px;
	width : 14% !important;
	background-color:transparent;
}

.usr-text1 {
	border-width: 0px;
	width : 8% !important;
	background-color:transparent;
}

.usr-text2 {
	width : 10% !important;
	border-width: 0px;
	background-color:transparent;
}
.usr-text3 {
	border-width: 0px;
	width : 18% !important;
	background-color:transparent;
}

.usr-text4 {
	width : 25% !important;
	border-width: 0px;
	background-color:transparent;
}

.usr-text5 {
	width : 4% !important;
	border-width: 0px;
	background-color:transparent;
	margin-left:5px;
}

.usr-text6 {
	width : 12% !important;
	border-width: 0px;
	background-color:transparent;
}

.usr-text7 {
	width : 20% !important;
	border-width: 0px;
	background-color:transparent;
}

.usr-btn {
	background-color : green;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 1px solid #ED53E5;
	border-radius: 4px;
}

.padding0	{
	padding : 0;
}

.color-yellow {
	color :yellow;	
}

</style>
</head>
<body>

<script>
var count = 1;
var styleIndex = 1;
function introGuide() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ 
		{
			element : "#codeDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#img1Enter",
			intro : "",
			position : "bottom"
		},
		{
			element : "#browserDiv",
			intro : "",
			position : "bottom",
			tooltipClass:"hide",
			animateStep1 : 'Browser1'
		},
		{
			element : "#img2Enter",
			intro : "",
			position : "bottom"
		},
		{
			element : "#browserDiv",
			intro : "",
			position : "bottom",
			tooltipClass:"hide",
			animateStep1 : 'Browser2'
		},
		{
			element : '#styleTag',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselectoropenbrace',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselectorcloseDiv',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#styleTag1',					
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylecolonTag1',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylevalueTag1',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylesemicolonTag1',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselectoropen',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselector',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#natureDiv',
			intro : '',
			position : 'bottom',
		},
		{
			element : '#styleTag',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselectoropen2brace',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselectorclose2Div',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#styleTag2',					
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylecolonTag2',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylevalueTag2',
			intro : '',
			position : 'bottom',
			animateStep2 : 'style1'
		},
		{
			element : '#stylesemicolonTag2',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselector2open',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#imgselector2',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#nature1Div',
			intro : '',
			position : 'bottom',
		},
		{
			element : '#styleTag3',					
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylecolonTag3',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylevalueTag3',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylesemicolonTag3',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#styleTag3Div',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#nature1Div',
			intro : '',
			position : 'bottom',
		},
		{
			element : '#styleTag4',					
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylecolonTag4',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylevalueTag4',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylesemicolonTag4',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#styleTag4Div',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#nature1Div',
			intro : '',
			position : 'bottom',
		},
		{
			element : '#stylevalueTag2',
			intro : '',
			position : 'bottom',
			animateStep2 : 'style2'
		},
		{
			element : '#styleTag2Div',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#nature1Div',
			intro : '',
			position : 'bottom',
		},
		{
			element : '#stylevalueTag2',
			intro : '',
			position : 'bottom',
			animateStep2 : 'style3'
		},
		{
			element : '#styleTag2Div',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#nature1Div',
			intro : '',
			position : 'bottom',
		},
		{
			element : '#stylevalueTag2',
			intro : '',
			position : 'bottom',
			animateStep2 : 'style4'
		},
		{
			element : '#styleTag2Div',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#nature1Div',
			intro : '',
			position : 'bottom',
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]
	});
	introcode.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) 
		{
		case "codeDiv":
			$('.introjs-nextbutton').hide();
		break;
		
		case "img1Enter":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltiptext').append('<ul><li>');
				var text = "Enter an image tag.<br/>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span>";
				typing('.introjs-tooltiptext > ul li:last-child', text, function() {
					spanValidation("#img1Enter", "<img>", 2, 0);
				});
			});
		break;
		
		case "img2Enter":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltiptext').append('<ul><li>');
				var text = "Enter an image tag.<br/>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span>";
				typing('.introjs-tooltiptext > ul li:last-child', text, function() {
					spanValidation("#img2Enter", "<img>", 6, 0);
				});
			});
		break;
		
		case "styleTag":
			introcode.refresh();
			$('.introjs-nextbutton').hide();
			if(introcode._currentStep == 5) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typingContent = 'Let us write an image selector for nature.jpg using its id(#natureDiv).'
					typing('.introjs-tooltiptext',typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if(introcode._currentStep == 15) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typingContent = 'Let us write an image selector for nature.png using its id(#nature-1Div).'
					typing('.introjs-tooltiptext',typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
		break;
		case "imgselectoropenbrace":
			introcode.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			$('#imgselectoropenbrace').removeClass('opacity00');
			$('#imgselectoropenbrace').focus();
				typingContent = 'Open selector <br/>Hint: <span class = "color-yellow"> {</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					charvalue('imgselectoropenbrace','{');
				});
			});
		break;
		case "imgselectoropen":
			$('.introjs-nextbutton').hide();
			$('#imgselectoropen').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Give the id selector using <br/>Hint: <span class = "color-yellow">#natureDiv</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselectoropen').focus();
					charvalue('imgselectoropen','#natureDiv');
				});
			});
		break;
		
		case "imgselector":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The selector is applied.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "imgselectorcloseDiv":
			$('.introjs-nextbutton').hide();
			$('#imgselectorclose').removeClass('opacity00');
			setTimeout(function() {
				typingContent = 'Close image selector <br/>Hint: <span class = "color-yellow">}</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselectorclose').focus();
					charvalue('imgselectorclose','}');
				});
			},1500);
		break;
		
		case "styleTag1":
			$('#styleTag1').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">opacity</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag1').focus();
					charvalue('styleTag1','opacity');
				});
			});
		break;
		
		case "stylecolonTag"+styleIndex:
			$('#stylecolonTag'+styleIndex).removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">:</span>(colon)'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecolonTag'+styleIndex).focus();
					charvalue('stylecolonTag'+styleIndex,':');
				});
			});
		break;
		
		case "stylevalueTag1":
			$('#stylevalueTag1').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">0.3</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag1').focus();
					charvalue('stylevalueTag1','0.3');
				});
			});
		break;
		
		case "stylesemicolonTag"+styleIndex:
			$('#stylesemicolonTag'+styleIndex).removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">;</span>(semicolon)'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylesemicolonTag'+styleIndex).focus();
					charvalue('stylesemicolonTag'+styleIndex,';');
				});
			},1500);
		break;
		case "imgselectoropen2brace":
			introcode.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			$('#imgselectoropen2brace').removeClass('opacity00');
			$('#imgselectoropen2brace').focus();
				typingContent = 'Open selector <br/>Hint: <span class = "color-yellow"> {</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					charvalue('imgselectoropen2brace','{');
				});
			});
		break;
		case "imgselector2open":
			$('.introjs-nextbutton').hide();
			$('#imgselector2open').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Give the id as name to selector using <br/>Hint: <span class = "color-yellow">#nature-1Div</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselector2open').focus();
					charvalue('imgselector2open','#nature-1Div');
				});
			});
		break;
		
		case "imgselector2":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The selector is applied.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "styleTag3Div":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The id selector is styled with top property.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "styleTag4Div":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The id selector is styled with left property.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "styleTag2Div":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The id selector is styled with position property.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break; 
		case "imgselectorclose2Div":
			$('.introjs-nextbutton').hide();
			$('#imgselectorclose2').removeClass('opacity00');
			setTimeout(function() {
				typingContent = 'Close image selector <br/>Hint: <span class = "color-yellow">}</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselectorclose2').focus();
					charvalue('imgselectorclose2','}');
				});
			},1500);
		break;
		
		case "styleTag2":
			$('#styleTag2').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">position</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag2').focus();
					charvalue('styleTag2','position');
				});
			});
		break;
	
		case "stylevalueTag2":
			$('#stylevalueTag2').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			var animateStep2 = introcode._introItems[introcode._currentStep].animateStep2;
			switch(animateStep2) {
				case 'style1':
				$('.introjs-helperLayer').one('transitionend', function() {
					typingContent = 'position can be <ul><li>relative</li><li>absolute</li><li>fixed</li><li>static</li></ul>'
					typing('.introjs-tooltiptext',typingContent,function() {
						$('.introjs-tooltiptext').append('<span id = "totalpositionDiv"></span>')
						typingContent = 'Enter <span class = "color-yellow" id = positionDiv>relative</span>'
						typing('#totalpositionDiv',typingContent,function() {
							$('#stylevalueTag2').focus();
							charvalue('stylevalueTag2','relative');
						});
					});
				});
				break;
				case 'style2':
					$('#stylevalueTag2').val('');
					$('.introjs-helperLayer').one('transitionend', function() {
						typingContent = 'Let us change the position.'
						typing('.introjs-tooltiptext',typingContent,function() {
							$('.introjs-tooltiptext').append('<br><span id = "totalpositionDiv"></span>')
							typingContent = 'Enter <span class = "color-yellow" id = positionDiv>absolute</span>'
							typing('#totalpositionDiv',typingContent,function() {
								$('#stylevalueTag2').focus();
								charvalue('stylevalueTag2','absolute');
							});
						});
					});
				break;
				case 'style3':
					$('#stylevalueTag2').val('');
					$('.introjs-helperLayer').one('transitionend', function() {
						typingContent = 'Let us change the position.'
						typing('.introjs-tooltiptext',typingContent,function() {
							$('.introjs-tooltiptext').append('<br><span id = "totalpositionDiv"></span>')
							typingContent = 'Enter <span class = "color-yellow" id = positionDiv>fixed</span>'
							typing('#totalpositionDiv',typingContent,function() {
								$('#stylevalueTag2').focus();
								charvalue('stylevalueTag2','fixed');
							});
						});
					});
				break;
				case 'style4':
					$('#stylevalueTag2').val('');
					$('#mainDiv').css({'height': 600});
					$('.introjs-helperLayer').one('transitionend', function() {
						typingContent = 'Let us change the position.'
						typing('.introjs-tooltiptext',typingContent,function() {
							$('.introjs-tooltiptext').append('<br><span id = "totalpositionDiv"></span>')
							typingContent = 'Enter <span class = "color-yellow" id = positionDiv>static</span>'
							typing('#totalpositionDiv',typingContent,function() {
								$('#stylevalueTag2').focus();
								charvalue('stylevalueTag2','static');
							});
						});
					});
				break;
			}
		break;
		
		case "imgselectoropen2brace":
			introcode.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			$('#imgselectoropen2brace').removeClass('opacity00');
			$('#imgselectoropen2brace').focus();
				typingContent = 'Open selector <br/>Hint: <span class = "color-yellow"> {</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					charvalue('imgselectoropen2brace','{');
				});
			});
		break;
		case "imgselector2open":
			$('.introjs-nextbutton').hide();
			$('#imgselector2open').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Give the id as name to selector using <br/>Hint: <span class = "color-yellow">#nature1Div</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselector2open').focus();
					charvalue('imgselector2open','#nature1Div');
				});
			});
		break;
		
		case "imgselector":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The selector is applied.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "imgselectorcloseDiv":
			$('.introjs-nextbutton').hide();
			$('#imgselectorclose3').removeClass('opacity00');
			setTimeout(function() {
				typingContent = 'Close image selector <br/>Hint: <span class = "color-yellow">}</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselectorclose3').focus();
					charvalue('imgselectorclose3','}');
				});
			},1500);
		break;
		
		case "styleTag3":
			$('#styleTag3').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'We can apply the following properties with position relative <ul><li>left</li><li>right</li><li>top</li><li>bottom</li></ul>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-tooltiptext').append('<span id = "totalpositionDiv"></span>')
					typingContent = 'Enter <span class = "color-yellow" id = positionDiv>top</span>'
					typing('#totalpositionDiv',typingContent,function() {
						$('#styleTag3').focus();
						charvalue('styleTag3','top');
					});
				});
			});
		break;

		case "stylevalueTag3":
			$('#stylevalueTag3').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow" id = positionDiv>100px</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag3').focus();
					charvalue('stylevalueTag3','100px');
				});
			});
		break;

		case "styleTag4":
			$('#styleTag4').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow" id = positionDiv>left</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag4').focus();
					charvalue('styleTag4','left');
				});
			});
		break;
		
		case "stylevalueTag4":
			$('#stylevalueTag4').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow" id = positionDiv>50px</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag4').focus();
					charvalue('stylevalueTag4','50px');
				});
			});
		break;
		
		case "browserDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#browserDiv').removeClass('visibility-hidden');
				$('#browserDiv').removeClass('opacity00');
				var animateStep1 = introcode._introItems[introcode._currentStep].animateStep1;
				switch(animateStep1) {
				case 'Browser1':
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#browserText').removeClass('opacity00');
					$("#urlEnter").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
						$('#natureDiv').removeClass('opacity00');
						setTimeout(function() {
							introcode.nextStep();
						}, 1000);
					});
				});
				break;
				case 'Browser2':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#url1Enter").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
							$('#nature1Div').removeClass('opacity00');
							setTimeout(function() {
								introcode.nextStep();
							}, 1000);
						});
					});
				break;
				}
			});
		break;
		case "natureDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typingContent = 'Notice the opacity set to the image.'
				typing('.introjs-tooltiptext', typingContent,function() {
					$("#styleTag1").addClass("blink").effect("transfer", {to: $("#natureDiv"), className: "ui-effects-transfer"}, 1500, function() {
						$('#natureDiv').css('opacity','0.3');
						$('.introjs-nextbutton').show();
						styleIndex++;
					});
				});
			});
		break;
		case "nature1Div" :
			$('.introjs-nextbutton').hide();
			if(introcode._currentStep == 24) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#styleTag2Div").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
						typingContent = 'There is no change in the position of image.'
						typing('.introjs-tooltiptext', typingContent,function() {
							$('#nature1Div').css({'position': 'relative'});
							$('.introjs-nextbutton').show();
							styleIndex++;
						});
					});
				});
			} else if(introcode._currentStep == 30) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typingContent = 'Notice the change in top.'
					typing('.introjs-tooltiptext', typingContent,function() {
						$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
							$('#nature1Div').css({'top': '100px'});
							introcode.refresh();
							$('.introjs-nextbutton').show();
							styleIndex++;
						});
					});
				});
			} else if(introcode._currentStep == 36) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typingContent = 'Notice the change in left.'
					typing('.introjs-tooltiptext', typingContent,function() {
						$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
							$('#nature1Div').css({'left': '50px'});
							introcode.refresh();
							$('.introjs-nextbutton').show();
							styleIndex++;
						});
					});
				});
			} else if(introcode._currentStep == 39) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typingContent = 'Notice the change in position of image when position is absolute.<br>The image is positioned with respect to its ancestor(here browser).'
					typing('.introjs-tooltiptext', typingContent,function() {
						$("#styleTag2").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
							$('#nature1Div').css({'position': 'absolute'});
							$('#nature1Div').css({'top': '50px'});
							$('#nature1Div').css({'left': '0'});
							introcode.refresh();
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								typingContent = 'Notice the change in top when position is absolute.'
								typing('.introjs-tooltiptext', typingContent,function() {
									$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
									$('#nature1Div').css({'top': '100px'});
									introcode.refresh();
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										typingContent = 'Notice the change in left when position is absolute.'
										typing('.introjs-tooltiptext', typingContent,function() {
											$("#styleTag4").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
												$('#nature1Div').css({'left': '50px'});
												introcode.refresh();
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
			} else if(introcode._currentStep == 42) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typingContent = 'Notice the change when the position is fixed.'
					typing('.introjs-tooltiptext', typingContent,function() {
						$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
							$('#mainDiv').css({'height': 2028});
							$('#nature1Div').css({'position': 'fixed'});
							$('#nature1Div').css({'top': '17.5%'});
							$('#nature1Div').css({'left': '52%'});
							introcode.refresh();
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								typingContent = 'Move the scroll bar and see.<br>The position of image is fixed in all pages.'
								typing('.introjs-tooltiptext', typingContent,function() {
									introcode.refresh();
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										typingContent = 'Notice the change in top when position is fixed.'
										typing('.introjs-tooltiptext', typingContent,function() {
											$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
												$('#nature1Div').css({'top': '28%'});
												introcode.refresh();
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
											$('.animation-nextbtn').click(function() { 
												$('.animation-nextbtn').remove();
												typingContent = 'Notice the change in left when position is fixed.'
												typing('.introjs-tooltiptext', typingContent,function() {
													$("#styleTag4").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
														$('#nature1Div').css({'left': '58%'});
														introcode.refresh();
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
			} else if(introcode._currentStep == 45) {
				$('#nature1Div').css({'z-index': '2'});
				$(".introjs-helperLayer").one("transitionend", function() {
					typingContent = 'Notice that there is no change in top when position is static'
					typing('.introjs-tooltiptext', typingContent,function() {
						$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
							$('#nature1Div').css({'position': 'relative'});
							$('#nature1Div').css({'top': '0'});
							$('#nature1Div').css({'left': '0'});
							introcode.refresh();
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								typingContent = 'Notice that there is no change in top when position is static.'
								typing('.introjs-tooltiptext', typingContent,function() {
									$("#styleTag3").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
									introcode.refresh();
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										typingContent = 'Notice that there is no change in left when position is static.'
										typing('.introjs-tooltiptext', typingContent,function() {
											$("#styleTag4").addClass("blink").effect("transfer", {to: $("#nature1Div"), className: "ui-effects-transfer"}, 1500, function() {
												introcode.refresh();
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
			}
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$('#restartBtn').click(function() {
					location.reload();
				});
			});
		break;
		}
	});		
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typingContent = 'Let us revise a basic HTML page syntax which already you are familiar with'
	typing('.introjs-tooltiptext',typingContent,function() {
		$('.introjs-nextbutton').show();
	});
}

$(document).ready(function() {
	$('.usr-text1').empty();
	introGuide();
});

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":20,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function charvalue(elementId,text) {
	$('#' + elementId).keyup(function() {
	 	if($('#'+elementId).val() == text) {
		  	$('.introjs-nextbutton').show();
		  	$('.errorText').empty();
	  	} else {
	  		$('.errorText').html("Please type correctly.");
		  	$('.introjs-nextbutton').hide();
	    }
	});
}
//inputs validation(for basic tags)
function inputsValidation(id, tag, count, val) {
	$(id).removeClass("opacity00");
	$(id).attr("disabled", false);
	$(id).focus();
	
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	});
	
	$(id).off("keyup");
	$(id).on("keyup", function(e) {
		$(".ct-red").remove();
		if ($(id).val() == tag) {
			$(id).attr({"disabled" : true});
			if (val == 1) {
				$(".introjs-nextbutton").show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
			}
		} else {
			$(".introjs-nextbutton, .usr-btn").hide();
			$('.introjs-tooltiptext').append("<div class='ct-red'>write correct text</div>");
		}
	});
}

function userButton(count) {
	$(".usr-btn").remove();
	if (count == 2) {
		$("#img1Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img1Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>src=\"\"</span><br/>src - source path of an image path.";
		typing('.introjs-tooltiptext', text, function() {
			$('#img1Enter').text('');
			$("#img1Enter").append('&lt;img <span id="srcEnter" class = outline contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;');
			introcode.refresh();
			spanValidation("#srcEnter", "src=\"\"", 3, 0);
		});
	} else if (count == 3) {
		$("#img1Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img1Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>nature.jpg</span><br/>Value of the source image.";
		typing('.introjs-tooltiptext', text, function() {
			$("#img1Enter").text('');
			$("#img1Enter").append('&lt;img src=\"<span id="urlEnter" class = outline contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introcode.refresh();
			spanValidation("#urlEnter", "nature.jpg", 4, 0);
		});
	} 
	if (count == 4) {
		$("#img1Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img1Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>id=\"\"</span><br/>id - unique identification for the image";
		typing('.introjs-tooltiptext', text, function() {
			$('#img1Enter').text('');
			$("#img1Enter").append('&lt;img src="nature.jpg" <span id="idEnter" class = outline contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;');
			introcode.refresh();
			spanValidation("#idEnter", "id=\"\"", 5, 0);
		});
	} else if (count == 5) {
		$("#img1Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img1Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>natureDiv</span><br/>Value of the id for the image";
		typing('.introjs-tooltiptext', text, function() {
			$("#img1Enter").text('');
			$("#img1Enter").append('&lt;img src="<span id="urlEnter">nature.jpg</span>" id =\"<span id="idurlEnter" class = outline contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introcode.refresh();
			spanValidation("#idurlEnter", "natureDiv", 0, 1);
		});
	} else if (count == 6) {
		$("#img2Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img2Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>src=\"\"</span><br/>src - source path of an image path.";
		typing('.introjs-tooltiptext', text, function() {
			$('#img2Enter').text('');
			$("#img2Enter").append('&lt;img <span id="src1Enter" class = outline contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;');
			introcode.refresh();
			spanValidation("#src1Enter", "src=\"\"", 7, 0);
		});
	} else if (count == 7) {
		$("#img2Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img2Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>nature.png</span><br/>Value of the source image.";
		typing('.introjs-tooltiptext', text, function() {
			$("#img2Enter").text('');
			$("#img2Enter").append('&lt;img src=\"<span id="url1Enter" class = outline contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introcode.refresh();
			spanValidation("#url1Enter", "nature.png", 8, 0);
		});
	} else if (count == 8) {
		$("#img2Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img2Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>id=\"\"</span><br/>id - unique identification for the image";
		typing('.introjs-tooltiptext', text, function() {
			$('#img2Enter').text('');
			$("#img2Enter").append('&lt;img src="nature.png" <span id="id1Enter" class = outline contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;');
			introcode.refresh();
			spanValidation("#id1Enter", "id=\"\"", 9, 0);
		});
	} else if (count == 9) {
		$("#img2Enter").removeAttr("contenteditable maxlength spellcheck");
		$("#img2Enter").off();
		var text = "Type <span class='ct-code-b-yellow'>nature-1Div</span><br/>Value of the id for the image";
		typing('.introjs-tooltiptext', text, function() {
			$("#img2Enter").text('');
			$("#img2Enter").append('&lt;img src="<span id = "url1Enter">nature.jpg</span>" id =\"<span id="idurl1Enter" class = outline contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introcode.refresh();
			spanValidation("#idurl1Enter", "nature-1Div", 0, 1);
		});
	} 
}

//transfer effect
function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("z-index");
	$(id1).effect("highlight", {color : "yellow"}).effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 1500, function() {
		$(id2).removeClass("opacity00");
		$(id1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//contenteditable validation
function spanValidation(id, tag, count, val) {
	$('[contenteditable = false]').attr('contenteditable', 'true');
	$(id).focus();
	
	//disabled paste option
	$(id).off('paste');
	$(id).on('paste', function(e) {
		e.preventDefault();
	}); 
	
	$(id).on('keyup', function(e) {
		$(".usr-btn").remove();
		$(".ct-red").remove();
		introcode.refresh();
		if ($(id).text() == tag) {
			$('[contenteditable = true]').attr('contenteditable', 'false');
			if (val == 1) {
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(' + count + ')">Next &#8594;</a>');
			}
		} else {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="ct-red">write the above tag / text properly.</div>');
		}
	});
}

</script>	

<div id = mainDiv>
	<div class="text-center margin20">
		<h4 class="label ct-demo-heading" id="heading">Images</h4>
	</div>
	<div class = "col-xs-12">
<pre class = "col-xs-offset-1 col-xs-5 code-div border1 margin20" id = "codeDiv">
<span id = dochtmlDiv class="html-section"> &lt;!DOCTYPE html&gt;</span>
<span id = htmlopenDiv class="html-section"> &lt;html&gt;</span>
<span class="bordering" id="headSection"> &lt;head&gt;
	&lt;title&gt;images&lt;/title&gt; 
<span id="styleTag" style="display: inline-block;"> &lt;style&gt;
 <span id = imgselector><span><input type="text" maxlength="11" class="usr-text3 opacity00" id='imgselectoropen'></span><span><input type="text" maxlength="5" class="usr-text5 opacity00" id='imgselectoropenbrace'/></span>
   <span id = styleTag1Div ><input type="text" maxlength="8" class="usr-text6 opacity00" id='styleTag1'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag1'><input type="text" maxlength="5" class="usr-text1 opacity00" id='stylevalueTag1'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag1'></span>
 <span id = "imgselectorcloseDiv"><input type="text" maxlength="1" class="usr-text5 opacity00" id='imgselectorclose'></span></span>
 
 <span id = imgselector2><span><input type="text" maxlength="13" class="usr-text7 opacity00" id='imgselector2open'></span><span><input type="text" maxlength="5" class="usr-text5 opacity00" id='imgselectoropen2brace'/></span>
  <span id = styleTag2Div ><input type="text" maxlength="9" class="usr-text opacity00" id='styleTag2'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag2'><input type="text" maxlength="9" class="usr-text opacity00" id='stylevalueTag2'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag2'></span>
  <span id = styleTag3Div ><input type="text" maxlength="9" class="usr-text1 opacity00" id='styleTag3'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag3'><input type="text" maxlength="9" class="usr-text1 opacity00" id='stylevalueTag3'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag3'></span>
  <span id = styleTag4Div ><input type="text" maxlength="9" class="usr-text1 opacity00" id='styleTag4'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag4'><input type="text" maxlength="9" class="usr-text1 opacity00" id='stylevalueTag4'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag4'></span>
 <span id = "imgselectorclose2Div"><input type="text" maxlength="1" class="usr-text5 opacity00" id='imgselectorclose2'></span></span>
 &lt;/style&gt;</span> 
 &lt;/head&gt;</span>
<span class="body-div"> &lt;body&gt;</span>
 <span id="img1Enter" style = "display:inline-block" contenteditable="false" maxlength="7" spellcheck="false"></span>
 <span id="img2Enter" style = "display:inline-block" contenteditable="false" maxlength="7" spellcheck="false"></span>
<span>&lt;/body&gt;</span>
<span>&lt;/html&gt;</span>
</pre>
			
		<div class=" col-xs-5 visibility-hidden marginleft20 margin20 padding0" id="browserDiv" style = 'display : inline-block;'>
			<div>
			 <img src="/images/ct.png" id = 'imgDiv'>
			</div>
			<div class="browser-text opacity00 padding0" id = 'browserText'>
				<img src="/images/nature2.jpg" id = 'natureDiv' class = 'opacity00'>
				<img src="/images/nature.png" id = 'nature1Div' class = 'opacity00'>
		   </div> 
		</div>
	</div>
	
	<div class = 'buttons-div col-xs-12 text-center'>
		<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
	</div>	
</div>
</body>
</html>