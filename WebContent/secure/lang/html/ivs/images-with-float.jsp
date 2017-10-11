<!-- =============================================================
TOC-Reference-Name:Images-2
Objective: float property with image 
Coverage: float, border, margin-right, padding styles with images 
Developed By: Padmaja
Developed Date: 29-11-2016 
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
<title>image with float </title>

<style>

.padding0	{
	padding : 0px;
}

.margin20 {
	margin-top : 20px;
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

#imgEnter, #urlEnter, #srcEnter {
	outline: none;
}

.marginleft20 {
	margin-left : 20px !important;
}

.marginleft40 {
	margin-left : 40px !important;
}

#codeDiv {
	background-color : #f4f6f6; 
}

.color-yellow {
	color : yellow;
}

.margin5 {
	margin-left : 5px;
}

#browserDiv {
	border-radius: 8px;
	padding: 0; 
}

#browser {
	border-radius: 8px;
	padding: 0; 
}

#browserText {
 	border: 1px solid black; 
 	padding-left: 8px;
 	height: 250px;
}

#imgDiv {
	width: 100%;
}

#computerDiv {
	height : 50px !important;
	width : 100px !important;
	background-color:pink;
	float:left;
}

.position {
	position: relative;
}

#imgEnter {
	min-width: 15px;
	min-height: 15px;
	display: inline-block; 
	margin-left: 40px;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

[contenteditable="true"] {
    outline: medium none;
}

.margin10 {
	margin-top :10px;
}

.marginleft30 {
	margin-left : 30px;
}

.usr-btn {
	background-color: green;
}

.creamPreTab4 {
    -moz-tab-size: 6;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 13px;
    overflow: -moz-hidden-unscrollable;
    padding: 8px;
    white-space: pre;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 1px solid #ED53E5;
	border-radius: 4px;
}

.marginleft30 {
	margin-left : 30px;
}

.marginleft60 {
	margin-left : 60px;
}

.marginleft20 {
	margin-left : 20px !important;
}

.marginleft10 {
	margin-left : 10px !important;
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
	width : 20% !important;
	background-color:transparent;
}

.usr-text4 {
	width : 25% !important;
	border-width: 0px;
	background-color:transparent;
}

.usr-text5 {
	width : 4% !important;
	margin-left:5px;
	border-width: 0px;
	background-color:transparent;
}

.usr-text6 {
	width : 16% !important;
	border-width: 0px;
	background-color:transparent;
}

.introjs-helperLayer {
	min-height : 22px !important;
}

#position {
	position : relative;
}
</style>

</head>

<body>
	<div class="text-center margin20">
		<h4 class="label ct-demo-heading" id="heading">Images with float</h4>
	</div>
	
	<div class = "col-xs-12">
		<div class = "col-xs-offset-1 col-xs-5 code-div margin20 padding0" id = "codeDiv">
<pre class = creamPreTab4>
<span id = "dochtmlTagDiv"><input type="text" maxlength="15" class="usr-text4 opacity00" id='dochtmlTag'></span>
<span id = "htmlopenTagDiv"><input type="text" maxlength="8" class="usr-text opacity00" id='htmlopenTag'></span>
  <span id = "headopenTagDiv" ><input type="text" maxlength="6" class="usr-text opacity00" id='headopenTag'></span>
	<span id = "styleselectorDiv" ><span id = "styleopenTagDiv"><input type="text" maxlength="7" class="usr-text opacity00" id='styleopenTag'></span>
	<span id = imgselector><span><input type="text" maxlength="5" class="usr-text1 opacity00" id='imgselectoropen'></span><span><input type="text" maxlength="5" class="usr-text5 opacity00" id='imgselectoropenbrace'/></span>
	  <span id = styleTag1Div ><input type="text" maxlength="8" class="usr-text1 opacity00" id='styleTag1'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag1'><input type="text" maxlength="5" class="usr-text1 opacity00" id='stylevalueTag1'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag1'></span>
	  <span id = styleTag2Div ><input type="text" maxlength="8" class="usr-text2 opacity00" id='styleTag2'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag2'><input type="text" maxlength="10" class="usr-text6 opacity00" id='stylevalueTag2'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag2'></span>
	  <span id = styleTag3Div ><input type="text" maxlength="12" class="usr-text3 opacity00" id='styleTag3'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag3'><input type="text" maxlength="5" class="usr-text1 opacity00" id='stylevalueTag3'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag3'></span>
	  <span id = styleTag4Div ><input type="text" maxlength="12" class="usr-text3 opacity00" id='styleTag4'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag4'><input type="text" maxlength="5" class="usr-text1 opacity00" id='stylevalueTag4'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag4'></span>
	  <span id = styleTag5Div ><input type="text" maxlength="10" class="usr-text opacity00" id='styleTag5'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylecolonTag5'><input type="text" maxlength="5" class="usr-text1 opacity00" id='stylevalueTag5'><input type="text" maxlength="2" class="usr-text5 opacity00" id='stylesemicolonTag5'></span>
	<span id = "imgselectorcloseDiv"><input type="text" maxlength="1" class="usr-text5 opacity00" id='imgselectorclose'></span></span>
	<span id = "stylecloseTagDiv"><input type="text" maxlength="8" class="usr-text opacity00" id='stylecloseTag'></span></span>
  <span id = "headcloseTagDiv"><input type="text" maxlength="7" class="usr-text opacity00" id='headcloseTag'></span>
  <span id = "bodyopenTagDiv"><input type="text" maxlength="7" class="usr-text opacity00" id='bodyopenTag'></span>
  	<span id = 'firstDiv'><input type="text" maxlength="6" class="usr-text2 opacity00" id='openDiv'></span>
	<span id="imgEnter" style = "display:inline-block" contenteditable="false" maxlength="7" spellcheck="false"></span>
	<span id = paraDiv class = 'opacity00' style = "display:inline-block" >The IBM Personal Computer XT is a version of the IBM PC
	 with a built-in hard drive. It was released as 
	 IBM Machine Type number 5160 on March 8, 1983.</span>
	<span id = closefirstDiv><input type="text" maxlength="6" class="usr-text2 opacity00" id='closeDiv'></span>
  <span id = "bodycloseTagDiv"><input type="text" maxlength="7" class="usr-text opacity00" id='bodycloseTag'></span>
<span id = "htmlcloseTagDiv"><input type="text" maxlength="7" class="usr-text opacity00" id='htmlcloseTag'></span></pre>		
		</div>
		
		<!-- browser -->
		
		<div class=" col-xs-5 visibility-hidden marginleft20 margin20 " id="browserDiv" style = 'display : inline-block;'>
			<img src="/images/ct.png" id = 'imgDiv'>
			<div class="browser-text opacity00" id = 'browserText'>
				<div id = parDiv><img src = "/images/computer.png" id = computerDiv>
				<div class ='floatopacity opacity00 position'>The IBM Personal Computer XT is a version of the IBM PC with a built-in hard drive. It was released as IBM Machine Type number 5160 on March 8, 1983.</div></div>
				<div class= 'opacityDiv opacity00'>The IBM Personal Computer XT is a version of the IBM PC with a built-in hard drive. It was released as IBM Machine Type number 5160 on March 8, 1983.</div>
			</div>
		</div>
	</div>
	
	<div class = 'buttons-div col-xs-12'>
		<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
	</div> 	
<script>
var count = 1;
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
			element : "#dochtmlTagDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#htmlopenTagDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#htmlcloseTagDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#headopenTagDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#headcloseTagDiv",
			intro : "",
			position : "right"
		},	
		{
			element : "#bodyopenTagDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#bodycloseTagDiv",
			intro : "",
			position : "right"
		},
		
		{
			element : "#firstDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#closefirstDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#imgEnter",
			intro : "",
			position : "bottom"
		},
		{
			element : "#paraDiv",
			intro : "",
			position : "right"
		},
		{
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser1'
		},					
		
		{
			element : '#styleopenTagDiv',
			intro : '',
			position : 'bottom'
			
		},
		{
			element : '#stylecloseTagDiv',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#styleselectorDiv',
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
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser2'
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
			position : 'bottom'
		},
		{
			element : '#stylesemicolonTag2',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser3'
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
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser4'
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
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser5'
		},
		{
			element : '#styleTag5',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylecolonTag5',
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylevalueTag5',					
			intro : '',
			position : 'bottom'
		},
		{
			element : '#stylesemicolonTag5',
			intro : '',
			position : 'bottom'
		},
		
		{
			element : '#browserDiv',
			intro : '',
			position : 'bottom',
			animateStep1 : 'Browser6'
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
		case "dochtmlTagDiv":
			$('.introjs-nextbutton').hide();
		break;
		case "htmlopenTagDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			$('#htmlopenTag').removeClass('opacity00');
				typingContent = 'Open html tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#htmlopenTag').focus();
					charvalue('htmlopenTag','<html>');
				});
			});
		break;
		case "htmlcloseTagDiv":
			$('#htmlcloseTag').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Close the html tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#htmlcloseTag').focus();
					charvalue('htmlcloseTag','</html>');
				});
			});
		break;
		case "styleopenTagDiv":
			$('.introjs-nextbutton').hide();
			$('#styleopenTag').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Open style tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleopenTag').focus();
					charvalue('styleopenTag','<style>');
				});
			});
		break;
		case "stylecloseTagDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Close the style tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecloseTag').removeClass('opacity00');
					$('#stylecloseTag').focus();
					charvalue('stylecloseTag','</style>');
				});
			});
		break;
		case "styleselectorDiv":
			introcode.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Let us write an image selector to specify float property to left.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
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
				typingContent = 'Give the name to selector <br/>Hint: <span class = "color-yellow">img</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#imgselectoropen').focus();
					charvalue('imgselectoropen','img');
				});
			});
		break;
		
		case "imgselector":
			$('.introjs-nextbutton').hide();
			$('#imgselector').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'The selector <br/>Hint: <span class = "color-yellow">img</span>'
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
				typingContent = 'Enter float as <span class = "color-yellow">float</span>.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag1').focus();
					charvalue('styleTag1','float');
				});
			});
		break;
		
		case "stylecolonTag1":
			$('#stylecolonTag1').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">:</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecolonTag1').focus();
					charvalue('stylecolonTag1',':');
				});
			});
		break;
		
		case "stylevalueTag1":
			$('#stylevalueTag1').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">left</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag1').focus();
					charvalue('stylevalueTag1','left');
				});
			});
		break;
		
		case "stylesemicolonTag1":
			$('#stylesemicolonTag1').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">;</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylesemicolonTag1').focus();
					charvalue('stylesemicolonTag1',';');
				});
			},1500);
		break;
		
		case "styleTag2":
			$('#styleTag2').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">border</span>.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag2').focus();
					charvalue('styleTag2','border');
				});
			});
		break;
		
		case "stylecolonTag2":
			$('#stylecolonTag2').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">:</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecolonTag2').focus();
					charvalue('stylecolonTag2',':');
				});
			});
		break;
		
		case "stylevalueTag2":
			$('#stylevalueTag2').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">1px solid</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag2').focus();
					charvalue('stylevalueTag2','1px solid');
				});
			});
		break;
		
		case "stylesemicolonTag2":
			$('#stylesemicolonTag2').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">;</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylesemicolonTag2').focus();
					charvalue('stylesemicolonTag2',';');
				});
			});
		break;
		case "styleTag3":
			$('#styleTag3').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">margin-right</span>.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag3').focus();
					charvalue('styleTag3','margin-right');
				});
			});
		break;
		
		case "stylecolonTag3":
			$('#stylecolonTag3').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Enter <span class = "color-yellow">:</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecolonTag3').focus();
					charvalue('stylecolonTag3',':');
				});
			});
		break;
		
		case "stylevalueTag3":
			$('#stylevalueTag3').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">15px</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag3').focus();
					charvalue('stylevalueTag3','15px');
				});
			},1500);
		break;
		
		case "stylesemicolonTag3":
			$('#stylesemicolonTag3').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">;</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylesemicolonTag3').focus();
					charvalue('stylesemicolonTag3',';');
				});
			},1500);
		break;
		case "styleTag4":
			$('#styleTag4').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">margin-top</span>.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag4').focus();
					charvalue('styleTag4','margin-top');
				});
			},1500);
		break;
		
		case "stylecolonTag4":
			$('#stylecolonTag4').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">:</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecolonTag4').focus();
					charvalue('stylecolonTag4',':');
				});
			},1500);
		break;
		
		case "stylevalueTag4":
			$('#stylevalueTag4').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">15px</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag4').focus();
					charvalue('stylevalueTag4','15px');
				});
			},1500);
		break;
		
		case "stylesemicolonTag4":
			$('#stylesemicolonTag4').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">;</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylesemicolonTag4').focus();
					charvalue('stylesemicolonTag4',';');
				});
			},1500);
		break;
		case "styleTag5":
			$('#styleTag5').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">padding</span>.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#styleTag5').focus();
					charvalue('styleTag5','padding');
				});
			},1500);
		break;
		
		case "stylecolonTag5":
			$('#stylecolonTag5').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">:</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylecolonTag5').focus();
					charvalue('stylecolonTag5',':');
				});
			},1500);
		break;
		
		case "stylevalueTag5":
			$('#stylevalueTag5').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">3px</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylevalueTag5').focus();
					charvalue('stylevalueTag5','3px');
				});
			},1500);
		break;
		
		case "stylesemicolonTag5":
			$('#stylesemicolonTag5').removeClass('opacity00');
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				typingContent = 'Enter <span class = "color-yellow">;</span>'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#stylesemicolonTag5').focus();
					charvalue('stylesemicolonTag5',';');
				});
			},1500);
		break;
		case "headopenTagDiv":
			$('.introjs-nextbutton').hide();
			$('#headopenTag').removeClass('opacity00');
			setTimeout(function() {
				typingContent = 'Open head tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#headopenTag').focus();
					charvalue('headopenTag','<head>');
				});
			},1500);
		break;
		case "headcloseTagDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Close the head tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#headcloseTag').removeClass('opacity00');
					$('#headcloseTag').focus();
					charvalue('headcloseTag','</head>');
				});
			});
		break;
		case "bodyopenTagDiv":
			$('.introjs-nextbutton').hide();
			$('#bodyopenTag').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Open body tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#bodyopenTag').focus();
					charvalue('bodyopenTag','<body>');
				});
			});
		break;
		case "bodycloseTagDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Close the body tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#bodycloseTag').removeClass('opacity00');
					$('#bodycloseTag').focus();
					charvalue('bodycloseTag','</body>');
				});
			});
		break;
		case "paraDiv":
			$('#paraDiv').removeClass('opacity00');		
			typingContent = 'Consider the following text.';
			typing('.introjs-tooltiptext', typingContent,function() {
				$('.introjs-nextbutton').show();
			});
		break;
	
		case "firstDiv":
			$('.introjs-nextbutton').hide();
			$('#openDiv').removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Open div tag'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#openDiv').focus();
					charvalue('openDiv','<div>');
				});
			});
		break;
		case "closefirstDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typingContent = 'Close div tag.'
				typing('.introjs-tooltiptext',typingContent,function() {
					$('#closeDiv').removeClass('opacity00');
					$('#closeDiv').focus();
					charvalue('closeDiv','</div>');
				});
			});
		break;
		case "imgEnter":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltiptext').append('<ul><li>');
				var text = "Enter an image tag.<br/>Hint: <span class='ct-code-b-yellow'>&lt;img&gt;</span>";
				typing('.introjs-tooltiptext > ul li:last-child', text, function() {
					spanValidation("#imgEnter", "<img>", 2, 0);
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
					$("#urlEnter").addClass("blink").effect("transfer", {to: $("#computerDiv"), className: "ui-effects-transfer"}, 1500, function() {
						$('#browserText').removeClass('opacity00');
						$("#paraDiv").addClass("blink").effect("transfer", {to: $(".opacityDiv"), className: "ui-effects-transfer"}, 1500, function() {
							$('.opacityDiv').removeClass('opacity00');
							typingContent = 'The text is displayed below the image.'
							typing('.introjs-tooltiptext', typingContent,function() {
								$('.introjs-nextbutton').show();	
							}); 
						});
					});
					});
				break;
				case 'Browser2':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						typingContent = 'When the float left property is applied, the image is floated to the left and the text is displayed at the right.'
						typing('.introjs-tooltiptext', typingContent,function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								$('.floatopacity').removeClass('opacity00');
								fromEffectWithTweenMax(".opacityDiv", ".floatopacity", function() { 
									$('.opacityDiv').addClass('opacity00');
									$('.introjs-nextbutton').show();
								});
							}); 
						});
					});
				break;
				case 'Browser3':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						typingContent = 'Notice the border with style solid, width 1px.'
						typing('.introjs-tooltiptext', typingContent,function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								$("#styleTag2").addClass("blink").effect("transfer", {to: $("#computerDiv"), className: "ui-effects-transfer"}, 1500, function() {
									$('#computerDiv').css('border','1px solid');
									$('.introjs-nextbutton').show();
								}); 
							});
						});
					});
				break;
				case 'Browser4':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						typingContent = 'The style margin with right of 15px is set to the image and the text is moved to right.'
						typing('.introjs-tooltiptext', typingContent,function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								$("#styleTag3").addClass("blink").effect("transfer", {to: $("#computerDiv"), className: "ui-effects-transfer"}, 1500, function() {
									$('#computerDiv').css('margin-right','15px');
									$('.introjs-nextbutton').show();
								}); 
							});
						});
					});
				break;
				case 'Browser5':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						typingContent = 'The style margin with top of 15px is set to the image and the image is moved down.'
						typing('.introjs-tooltiptext', typingContent,function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
								$("#styleTag4").addClass("blink").effect("transfer", {to: $("#computerDiv"), className: "ui-effects-transfer"}, 1500, function() {
									TweenMax.to("#computer",1.5,{ top :0, onComplete:function() {
										$('#computerDiv').css('margin-top','15px');
									}});
									$('.introjs-nextbutton').show();
								}); 
							});
						});
					});
				break;
				case 'Browser6':
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						typingContent = 'Notice the padding set to the image.'
							typing('.introjs-tooltiptext', typingContent,function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$('.animation-nextbtn').remove();
									$("#styleTag5").addClass("blink").effect("transfer", {to: $("#computerDiv"), className: "ui-effects-transfer"}, 1500, function() {
										$('#computerDiv').css('padding','3px');
										$('.introjs-nextbutton').show();
									}); 
								});
							});
						});
					break;
				}
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
		break;
		}
	});		
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typingContent = 'Enter Doctype declaration.<br>Hint: <span class="ct-code-b-yellow">&lt;!DOCTYPE html&gt;</span>'
	typing('.introjs-tooltiptext',typingContent,function() {
		$('#dochtmlTag').removeClass('opacity00');
		$('#dochtmlTag').focus();
		charvalue('dochtmlTag','<!DOCTYPE html>');
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
		$("#imgEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#imgEnter").off();
		var text = "Type <span class='ct-code-b-yellow'>src=\"\"</span><br/>src - source path of an image path.";
		typing('.introjs-tooltiptext', text, function() {
			$('#imgEnter').text('');
			$("#imgEnter").append('&lt;img <span id="srcEnter" contenteditable="false" spellcheck="false" maxlength="7"></span>&gt;');
			introcode.refresh();
			spanValidation("#srcEnter", "src=\"\"", 3, 0);
		});
	} else if (count == 3) {
		$("#imgEnter").removeAttr("contenteditable maxlength spellcheck");
		$("#imgEnter").off();
		var text = "Type <span class='ct-code-b-yellow'>computer.png</span><br/>Value of the source image.";
		typing('.introjs-tooltiptext', text, function() {
			$("#imgEnter").text('');
			$("#imgEnter").append('&lt;img src=\"<span id="urlEnter" contenteditable="false" spellcheck="false" maxlength="26"></span>"&gt;');
			introcode.refresh();
			spanValidation("#urlEnter", "computer.png", 0,1);
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
</body>
</html>