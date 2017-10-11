<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  %>
<!DOCTYPE html>
<html>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>

<title>Page layout using semantic elements</title>
<style>

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.padding00 {
	padding: 0;
}

.creamPreTab {
	tab-size: 2;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 2;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.position {
	position: relative;
	display: inline-block;
}

.margin-top20 {
	margin-top: 20px;
}


.container { /*Browser css  */
	padding: 0px;
	margin-top: 10px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
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

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
	margin: 2px 0 -4px;
	position: relative;
	width: 220px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
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

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	/* height: 100px; */
	border-top: 1px solid gray;
	background: white;
	/* overflow: auto; */
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 15px;
} /* browse css closed */

.style {
	border: 1px solid blue;
    border-radius: 6px;
}

.margin-top-10 {
	margin-top: 10px;
}

/* hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid blue;
    width: 100%;
}
 */

.padding {
	padding-top: 8px;
	padding-bottom: 8px;
}

#content1  pre {
    tab-size: 4px;
    -moz-tab-size: 12px;
    background-color: white;
    border: 0 solid #ccc;
}

#asideDiv {
    margin-top: 135px;
}

#expStruct {
	position: absolute;
}

</style>
<body>
<script type="text/javascript">
	$(document).ready(function() {
		displaybrowser('#browser1', 1);
		displaybrowser('#browser2', 2);
		browser1Text();
		browser2Text();
		introGuide();
		//$('.opacity00').removeClass('opacity00');
		$('#content1  div').not('#abc, #asideSubDiv, #asideDiv').addClass('padding');
	});
	

	function displaybrowser(selector, num) {  
		$(selector).append('<div class="container col-xs-12 padding0 opacity00" id="viewBrowser'+ num +'">'
					+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
					+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Structural Elements</div>'
					+ '<i class="fa fa-times fa-sm margin-top20"></i>'
					+ '</li></ul><span id ="plus"><i class="fa fa-plus"></i></span></div>'
					+ '<div id="browser" class="col-xs-12 padding00"><div class="col-xs-2 padding00 text-center">'
					+ '<span id="arrowCircle" class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-left arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-right arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
					+ '<div class="col-xs-8 padding00 text-center url">'
					+ '<input type="text" maxlength="50" disabled class="usr-text padding00" id="url'+  num +'">'
					+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
					+ '<div class="col-xs-2 padding00 fa-display text-center">'	
					+ '<span class="col-xs-6 padding00 margin-top5"><i class="fa fa-home fa-1x"></i></span>'
					+ '<span class="col-xs-6 padding00 margin-top5"><i  class="fa fa-bars fa-1x"></i></span></div></div>'
					+ '<div class ="col-xs-12 html-body padding00" id = "htmlBody">'
					+ '<div id="content'+ num +'" class="col-xs-12 html-text opacity00">'
					+ '</div></div></div>');
					$('#url' + num).val('http://www.codetantra.com/WebDevelopment/structural-elements.html');
	}
	 function browser1Text() {
		$('#content1').append(''
				+ '<div id="headerDiv" class="style text-center margin-top-10"><span>&lt;header&gt;Header&lt;/header&gt;</span></div>'
				+ '<div id="navDiv" class="style text-center margin-top20"><span>&lt;nav&gt;Navigation link&lt;/nav&gt;</span></div>'
				+ '<div class="col-xs-12 padding00" id="abc"><div class="col-xs-5"><div class="col-xs-12 style" id="sectionDiv1">'
				+ '<pre><span>&lt;section&gt;\n\t<span>&lt;article&gt;\n\t\t<span>&lt;header&gt;\n\t\t&lt;/header&gt;</span>'
				+ '\n\t\t\t<span>...</span><br/>\t\t<span>&lt;footer&gt;\n\t\t&lt;/footer&gt;</span>\n\t&lt;/article&gt;</span>'
				+ '\n&lt;/section&gt;</pre></div></div><div class="col-xs-5"><div class="col-xs-12 style" id="sectionDiv2">'
				+ '<pre><span>&lt;article&gt;\n\t<span>&lt;section&gt;\n'
				+ '\t\t<span>&lt;header&gt;\n\t\t&lt;/header&gt;</span>\n\t\t\t<span>...</span><br/>\t\t<span>&lt;footer&gt;\n\t\t'
				+ '&lt;/footer&gt;</span>\n\t&lt;/section&gt;</span>\n&lt;/article&gt;</pre></div></div>'
				+ '<div id="asideDiv" class="padding00 style col-xs-2 margin-top20">'
				+ '<div class="col-xs-12 padding00" id="asideSubDiv"><pre>&lt;aside&gt;\n\tAside\n&lt;/aside&gt;</pre></div></div>'
				+ '<div class="col-xs-12 style text-center margin-top20" id="footerDiv"><span>&ltfooter&gt;Footer&lt;/footer&gt;'
				+ '</span></div>'); 
	} 
	 function browser2Text() {
		 $('#content2').html('<span id="header"><h1> CodeTantra </h1></span>'
					+ '<span id="navDiv"><a href="about.jsp"> About Us</a>'
					+'<a href="contact.jsp"> Contact Us </a>'
					+ '<a href="courses.jsp"> Courses </a></span>'
					+ '<span id="selectorDiv"><h1> About Courses </h1>'
					+ '<span id="articalDiv1"><h1> Java </h1>'
					+ '<p> This section covers all the fundamentals of Java'
					+ 'programming language.</p></span>'
					+ '<span id="articalDiv2"><h1> Selenium </h1>'
					+ '<p>This section teaches how to write Automated'
					+ 'Test Code using Selenium WebDriver in Java.</p></span></span>'
					+ '<span id="asideDiv"><h1> Price </h1>'
					+ '<p> Java 4999 INR </p>'
					+ '<p> Selenium 3999 INR </p></span>'
					+ '<span id="footerDiv"><p>@CodeTantra.com</p></span>');
	 }
	 
	 function introGuide() {
		 introcode = introJs();
			introcode.setOptions({
				showStepNumbers : false,
				exitOnOverlayClick : false,
				showBullets : false,
				exitOnEsc : false,
				keyboardNavigation : false,
					steps : [{
								element :'#headdingSection',
								intro :'',
								tooltipClass : "hide",
							},{
								element :'#browser1',
								intro :'',
								position : 'right',
								tooltipClass : "hide",
							}]
			});
			introcode.onafterchange(function(targetElement) {
				var elementId = targetElement.id;
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					switch (elementId) {
						case "browser1":
							$('#viewBrowser1, #content1').removeClass('opacity00');
							$('.introjs-tooltip').removeClass('hide');
							var text = "This is the structure of  <b class='ct-code-b-yellow'>Structural Elements</b>.";
							typing($(".introjs-tooltiptext"), text, function() {
								introNextSteps('#headerDiv', "expHeader", "left");
								$('.introjs-nextbutton').show();
							});
						break;
						case "headerDiv" :
							$('..introjs-nextbutton').hide();
							$('.introjs-tooltip').removeClass('hide');
							var text = 'This is <header> element specifies a header for a document or section.'
							
						break;
					}
				});
			});
			introcode.start();
			$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
			$('pre').css({padding: '10px'});
			$('.introjs-tooltip').removeClass('hide');
			var text = "In this live demo we are going to learn about <b class='ct-code-b-yellow'>Structural Elements</b>.";
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-nextbutton').show();
			});
	 }
	 
	 function typing(typingId, typingContent, typingCallbackFunction) {
			$(typingId).typewriting(typingContent, {
				"typing_interval" : 5,
				"cursor_color" : 'white'
			}, function() {
				typingCallbackFunction();
				$('.introjs-tooltip').show();
			});
		}
	 
	 function setTimeToIntroGoNextStep() {
			setTimeout(function() {
				introcode.nextStep();
			}, 1000);
		}

		function introNextSteps(stepName, animatedStep, position) {
			$('.introjs-disabled').removeClass('introjs-disabled');
			var options = {
					element :stepName,
					intro :'',
					position : position,
					tooltipClass : "hide",
					animateStep: animatedStep
			}
			introcode.insertOption(introcode._currentStep + 1, options);
			introcode._options.steps.push({"element" : stepName});
		}


</script> 

	<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="ct-box-main">
				<div class="text-center">
					<h1 class="label ct-demo-heading text-center" id="headdingSection">Web Page Layout</h1>
				</div> 
			</div>
			<div class="col-xs-12 margin-top20" id="expStruct">
				<div class="col-xs-6 col-xs-offset-3" id="browserDiv1">
						<div class="col-xs-12 padding00" id="browser1"></div>
						<div class="col-xs-12 margin-top20"></div>
					</div>
			</div>
			<div class="col-xs-12 margin-top20">
				<div class="col-xs-12" id="struElemntDiv">
					<div class="col-xs-6 opacity00" id="codeDiv">
					<pre class="creamPreTab">&lt;!Doctype&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Structural Elements&lt;/title&gt;
	<span id="headClose">&lt;/head&gt;</span>
	
	&lt;body&gt;
		<div id="inHeadMainDiv" class="position"><span id="inHeaderDiv">&lt;h1&gt; CodeTantra &lt;/h1&gt;</span></div>
		<div id="inNavMainDiv" class="position"><span id="inNavDiv">&lt;a href="about.jsp"&gt; About Us&lt;/a&gt;
&lt;a href="contact.jsp"&gt; Contact Us &lt;/a&gt;
&lt;a href="courses.jsp"&gt; Courses &lt;/a&gt;</span></div>
		<div id="inSectionDiv" class="position"><span id="inSectionDiv">&lt;h1&gt; About Courses &lt;/h1&gt;
<div id="articleMainDiv1" class="position"><span id="inArticleDiv1">&lt;h1&gt; Java &lt;/h1&gt;
&lt;p&gt; This section covers all the fundamentals of Java 
			programming language.&lt;/p&gt;</span></div>
<div id="articleMainDiv2" class="position"><span id="inArticleDiv2">&lt;h1&gt; Selenium &lt;/h1&gt;
&lt;p&gt;This section teaches how to write Automated 
				Test Code using Selenium WebDriver in Java.&lt;/p&gt;</span></div>
</span></div>			
<div id="asideMainDiv" class="position">		<span id="inAsideDiv">&lt;h1&gt; Price &lt;/h1&gt;
		&lt;p&gt; Java 4999 INR &lt;/p&gt;
		&lt;p&gt; Selenium 3999 INR &lt;/p&gt;</span></div>
		<div id='footerMainDiv' class="position"><span id="inFooterDiv">&lt;p&gt; @CodeTantra.com &gt;p&gt;</span></div>
	&lt;/body&gt;
&lt;/html&gt;
					</pre>
					</div>
					<div class="col-xs-6">
						<div class="col-xs-12" id="browserDiv2">
							<div class="col-xs-12 padding00" id="browser2"></div>
							<div class="col-xs-12 margin-top20"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>
 