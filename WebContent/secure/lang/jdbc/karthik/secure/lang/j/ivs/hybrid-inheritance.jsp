<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/custom-styles.css" />

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js/hybrid-inheritance.js"></script>

<style type="text/css">

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	/* height: 530px;  */
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 9999999;
	background-color: white;
	position: relative;
}
.displayNone {
	display: none;
}

.panelBodyHeight {
	min-height: 120px;
}

.output-console-body {
	font-size: 11px;
	height: 160px; 
	padding: 5px 20px;
	white-space: normal;
}

.output-console-title-bar {
	background-color: graytext;
}

.padding00 {
	padding: 0;
}

#defination {
	height: 205px;
}

.marginTop {
	margin-top: 5px;
}

.displayInline {
	/* position: relative; */
	display: inline-block;
}

pre {
	tab-size: 2;
}

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(0, 204, 51);
	/* font-weight: bold; */
}

a:focus {
	outline: none;
}

y {
	/* font-family: monospace; */
	font-weight: bold;
	color: yellow;
}

e {
	/*font-family: monospace;*/
	font-weight: bold;
	color: #23527c;
}

.singleIn {
	
	border: 1px solid grey;
	/* margin: 30px; */
	padding: 10px;
	background-color: lightblue;
	margin: 20px 39px 15px;
	
} 

.output-console-body {
	font-size: 11px;
	height: 160px; 
	padding: 5px 20px;
	white-space: normal;
}

.vertical-align-middle {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
}

#next {
	background-color: green !important;
    border-radius: 3px;
    color: white !important;
	border-radius: 3px !important;
	padding: 5px !important;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.svg-line {
	stroke: #f53f3f;
	stroke-width: 2;
}

/* .svg-marker-end {
	marker-end: url(".arrow");
}
 */
.lightGreen {
	background-color: lightgreen;
}

.ct-code-heading {
	background: highlight none repeat scroll 0 0;
	/* border-radius: 10px; */
	font-size: 13px;
}

.introjs-tooltip {
	min-width: 300px;
	max-width: 350px;
}

.margin-top-40 {
	margin-top: 40px;
}



</style>
</head>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Hybrid Inheritance</span>
	</h3>
<div class="col-xs-12 padding00">
	<div class="col-xs-offset-1 col-xs-10 marginTop">
		<div id="first" class="col-xs-12 boder1px oacity00">
			<div class="col-xs-12 " >
				<div id="description" class="col-xs-offset-2 col-xs-8 border1px marginTop opacity00" style="min-height:70px;">
					<div id="textDesc"></div>
				</div>
			</div>
			<div class="col-xs-12" style="margin-bottom: 4px;">
				<div class="col-xs-6">
					<div  id="inheritanceFlow" class="col-xs-12 border1px marginTop opacity00" style="height:520px;margin-top: 15px;">
						<div class="col-xs-12 text-center padding00" style="height:290px;">
							
							 <div id="flow4" class="col-xs-12 padding00 vertical-align-middle hide code">
								
								<svg class="svg-css">
									
									<marker id="flow4Marker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
				               			<path d="M0,0 L5,2.5 L0,5 Z"/>
				           			</marker>
									
									<!-- <line y2="36%" x2="50%" y1="31%" x1="50%" class="svg-line"/> --> <!-- y2 = 40% -->
									<!-- <line y2="36%" x2="50%" y1="36%" x1="32%" class="svg-line "></line> -->
									<line y2="43%" x2="32%" y1="31%" x1="32%" class="svg-line" style="marker-end: url(#flow4Marker);"></line>
									<line y2="65%" x2="32%" y1="57.5%" x1="32%" class="svg-line"></line>
									<line y2="65%" x2="70%" y1="57.5%" x1="70%" class="svg-line"></line>
									<line y2="65%" x2="32%" y1="65%" x1="70%" class="svg-line"></line>
									<line y2="70%" x2="50%" y1="65%" x1="50%" class="svg-line" style="marker-end: url(#flow4Marker);"></line>
									
								</svg>
								
								 <div class="displayInline border1px lightGreen" >
								 	<div>
										<div class="diplayInline singleIn" style="width: 25%"><div><b>Base1</b></div></div> <!-- singleIn -->
									</div>
									<div> <!-- style="margin: 20px;" -->
										<div class="displayInline singleIn"><div><b>Derived1</b></div></div><!-- singleIn -->
										<div class="displayInline singleIn"><div><b>Base2</b></div></div><!-- singleIn -->
									</div>
									<div>
										<div class="displayInline singleIn"><div><b>Derived2</b></div></div> <!-- singleIn -->
									</div>
								</div>
								
							</div>
							
						</div>
						
						<div class="col-xs-12">
							<div class="col-xs-offset-1 col-xs-11">
								<div id="outputBox" class="output-console center opacity00">
									<div class="output-console-title-bar"><span>Output</span></div>
									<div class="output-console-body"></div>
								</div>
							</div>		
						</div>	
					</div>
					<div class="col-xs-12 text-center margin-top-40">
						<span id="restartBtn" class="opacity00 btn btn-warning">Restart</span>
					</div>
				</div>
			<div class="col-xs-6">
			
<div id="preCode" class="col-xs-12 marginTop">
<pre id="code4" class='code opacity00'>
<span id="headerFiles"><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;</span>
<span id="firstClass" ><go>class</go> Base1 {
	<go>public</go>: 
		<span id="display1"><g>void</g> display1() {
			<span id="cout1">cout << <ink>"This is first base class<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="secondClass" class="opacity00"><go>class</go> Derived1 : <go>public</go> Base1 {
	<span id="showMthd1"><go>public</go>: 
		<span id="show1"><g>void</g> show1() {
			<span id="cout2">cout << <ink>"This is first derived class<in>\n</in>"</ink>;</span>
		}</span></span>
};</span>
<span id="thirdClass"  class="opacity00"><go>class</go> Base2 {
	<span id="displayMthd"><go>public</go>: 
		<span id="display2"><g>void</g> display2() {
			<span id="cout3">cout << <ink>"This is second base class<in>\n</in>"</ink>;</span>
		}</span></span>
};</span>
<span id="fourthClass" class="opacity00"><go>class</go> Derived2 : <go>public</go> Derived1, <go>public</go> Base2 {
	<span id="showMthd2"><go>public</go>: 
		<span id="show2"><g>void</g> show2() {
			<span id="cout4">cout << <ink>"This is second derived class<in>\n</in>"</ink>;</span>
		}</span></span>
};</span>

<div id="mainMthd" class="displayInline opacity00"><g>int</g> main() {
	<span id="singleObj">Derived2 obj;</span>
	<span id="print1">obj.display1();</span>
	<span id="print2">obj.show1();</span>
	<span id="print3">obj.display2();</span>
	<span id="print4">obj.show2();</span>
}</div>

</pre>
</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">

$(document).ready(function() {
	hybridInheritanceReady();
})

</script>

</body>
</html>