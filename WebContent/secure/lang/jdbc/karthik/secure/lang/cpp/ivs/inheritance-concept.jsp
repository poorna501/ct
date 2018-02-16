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
<script type="text/javascript" src="/secure/lang/cpp/js/inheritance-concept.js"></script>

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
	font-family: monospace;
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
	margin: 30px;
	padding: 10px;
	background-color: lightblue;
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
	min-width: 315px;
	max-width: 350px;
}
</style>
</head>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Types Of Inheritance</span>
	</h3>
<div class="col-xs-12 padding00">
	<div class="col-xs-12">
		<div id="defination" class="col-xs-offset-2 col-xs-8 border1px padding00 marginTop opacity00">
		<div><ul><li>Inheritance is one of the most important feature of <e>Object Oriented Programming</e>.</li>
		<li>The capability of a class to derive properties and characteristics from another class is called <e>Inheritance</e>.</li>
		<ul><li>The class that <e>inherits</e> properties from another class is called <e>Sub class</e> <b>(or)</b> <e>Derived Class</e>.</li>
		<li>The class whose properties are inherited by sub class is called <e>Base Class</e> <b>(or)</b> <e>Super class</e>.</li>
		</ul>
		<li>
		<b>Types Of Inheritance:</b>
			<ol>
				<li><a href="#" class='btn1' index='1'>Single Inheritance</a></li>
				<li><a href="#" class='btn2' index='2'>Muliple Inheritance</a></li>
				<li><a href="#" class='btn3' index='3'>Multilevel Inheritance</a></li>
				<li><a href="#" class='btn4' index='4'>Hierarchical Inheritance</a></li>
				<li><span class='btn4' ><b>Hybrid Inheritance</b></span></li>
			</ol>
		</li>
		</ul>
		</div></div>
	</div>
	<div class="col-xs-offset-1 col-xs-10 marginTop">
		<div id="first" class="col-xs-12 border1px opacity00">
			<div class="col-xs-12 " >
				<div id="description" class="col-xs-offset-2 col-xs-8 border1px marginTop opacity00" style="min-height:41px;">
					<div class="col-xs-12 padding00">
						<div>
							<h5 id="head1" class="text-center margin-top-20 hide code" >
								<span class="label label-default ct-code-heading" id="heading1">Single Inheritance</span>
							</h5>
						</div>
						<div>
							<h5 id="head2" class="text-center margin-top-20 hide code" >
								<span class="label label-default ct-code-heading" id="heading2">Multiple Inheritance</span>
							</h5>
						</div>
						<div>
							<h5 id="head3" class="text-center margin-top-20 hide code">
								<span class="label label-default ct-code-heading" id="heading3">Multilevel Inheritance</span>
							</h5>
						</div>
						<div>
							<h5 id="head4" class="text-center margin-top-20 hide code">
								<span class="label label-default ct-code-heading" id="heading4">Hierarchical Inheritance</span>
							</h5>
						</div>
					</div>
					<div id="textDesc"></div>
				</div>
			</div>
			<div class="col-xs-12" style="margin-bottom: 4px;">
				<div class="col-xs-6">
					<div  id="inheritanceFlow" class="col-xs-12 border1px marginTop opacity00" style="height:520px;margin-bottom: 15px;">
						<div class="col-xs-12 text-center padding00" style="height:290px;">
							<div id="flow1" class="col-xs-12 padding00 vertical-align-middle hide code">
								<svg class="svg-css">
									<marker id='flow1Marker' refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
				               			<path d="M0,0 L5,2.5 L0,5 Z"/>
				           			</marker>
									<line y2="55%" x2="50%" y1="44%" x1="50%" class="svg-line" style="marker-end: url(#flow1Marker);"/>
								</svg>
								<div class="displaInline border1px lightGreen" style="margin: 20px;">
									<div class="singleIn"><div class="displayInline">class A</div></div>
									<div class="singleIn"><div class="displayInline">class B</div></div>
								</div>
							</div>
							
							<div id="flow2" class="col-xs-12 padding00 vertical-align-middle hide code">
								<svg class="svg-css">
									<marker id='flow2Marker' refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
				               			<path d="M0,0 L5,2.5 L0,5 Z"/>
				           			</marker>
									<line class="svg-line" x1="50%" y1="50%" x2="50%" y2="60%" style="marker-end: url(#flow2Marker);"/>
									<line class="svg-line" x1="50%" y1="50%" x2="64%" y2="50%"/>
									<line class="svg-line" x1="50%" y1="50%" x2="36%" y2="50%"/>
									<line class="svg-line" x1="36%" y1="50%" x2="36%" y2="40%"/>
									<line class="svg-line" x1="64%" y1="50%" x2="64%" y2="40%"/>
								</svg>
								 <div class="displayInline border1px lightGreen" style="margin: 20px;">
								 	<div>
										<div class="singleIn displayInline"><div>class A</div></div>
										<div class="singleIn displayInline"><div>class B</div></div>
									</div>
									<div>
										<div class="singleIn displayInline"><div class="">class C</div></div>
									</div>
								</div>
							</div>
							
							<div id="flow3" class="col-xs-12 padding00 vertical-align-middle hide code">
								<svg class="svg-css">
									<marker id="flow3Marker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
				               			<path d="M0,0 L5,2.5 L0,5 Z"/>
				           			</marker>
									
									<line y2="42%" x2="50%" y1="32%" x1="50%" class="svg-line" style="marker-end: url(#flow3Marker);"/>
									<line y2="67%" x2="50%" y1="57%" x1="50%" class="svg-line" style="marker-end: url(#flow3Marker);"/>
								</svg>
								 <div  class=" displayInline border1px lightGreen" style="margin: 20px;">
									<div class="singleIn"><div class="displayInline">class A</div></div>
									<div class="singleIn"><div class="displayInline">class B</div></div>
									<div class="singleIn"><div class="displayInline">class C</div></div>
								</div>
							</div>
							
							<div id="flow4" class="col-xs-12 padding00 vertical-align-middle hide code">
								<svg class="svg-css">
									<marker id="flow4Marker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
				               			<path d="M0,0 L5,2.5 L0,5 Z"/>
				           			</marker>
									<line y2="48%" x2="50%" y1="32%" x1="50%" class="svg-line"/>
									<line y2="48%" x2="65%" y1="48%" x1="35%" class="svg-line "/>
									<line y2="60%" x2="35%" y1="48%" x1="35%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
									<line y2="60%" x2="65%" y1="48%" x1="65%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
								</svg>
								 <div class="displayInline border1px lightGreen">
								 	
								 	<div>
										<div class="singleIn displayInline"><div>class A</div></div>
									</div>
									
									<div style="margin: 20px;">
										<div class="singleIn displayInline"><div>class B</div></div>
										<div class="singleIn displayInline"><div>class C</div></div>
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
				</div>
			<div class="col-xs-6">
				<div id="preCode" class="col-xs-12 marginTop">
<pre id='code1' class='code opacity00'>
<span id="headerFiles1"><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;</span>
<span id="firstClass1"><go>class</go> A {
	<go>public</go>: 
		<span id="display1"><g>void</g> display() {
			<span id='cout11'>cout << <ink>"Base Class A<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="secondClass1"><go>class</go> B : <span id="inheritA" class="opacity00 hide" style="display:inline-block; position:relative;"><go>public</go></span> A {
	<go>public</go>: 
		<span id="show1"><g>void</g> show() {
			<span id="cout21">cout << <ink>"Derived Class B<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<div id="mainMthd1" class="displayInline"><g>int</g> main() {
	<span id="singleObj1">B obj1;</span>
	<span id="print11">obj1.display();</span>
	<span id="print21">obj1.show();</span>
}</div></div>
</pre>

<pre id='code2' class='hide code opacity00'>
<span id="headerFiles2"><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;</span>
<span id="firstClass2"><go>class</go> A {
	<go>public</go>: 
		<span id="display2"><g>void</g> display() {
			<span id="cout12">cout << <ink>"Base Class A<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="secondClass2"><go>class</go> B {
	<go>public</go>: 
		<span id="show2"><g>void</g> show() {
			<span id="cout22">cout << <ink>"Base Class B<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="thirdClass2"><go>class</go> C : <go>public</go> A, <go>public</go> B {

};</span>
<div id="mainMthd2" class="displayInline"><g>int</g> main() {
	<span id="singleObj2">C obj1;</span>
	<span id="print12">obj1.display();</span>
	<span id="print22">obj1.show();</span>
}</div>
</pre>

<pre id='code3' class='hide code opacity00'>
<span id="headerFiles3"><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;</span>
<span id="firstClass3"><go>class</go> A {
	<span id="showMthd3"><go>public</go>: 
		<span id="display3"><g>void</g> display() {
			<span id="cout13">cout << <ink>"Base Class A<in>\n</in>"</ink>;</span>
		}</span></span>
};</span>
<span id="secondClass3"><go>class</go> B : <go>public</go> A {
	<go>public</go>: 
		<span id="show3"><g>void</g> show() {
			<span id="cout23">cout << <ink>"Base Class B<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="thirdClass3"><go>class</go> C : <go>public</go> B {
	<go>public</go>: 
		<span id="print3"><g>void</g> print() {
			<span id="callShow3">display();</span>
		}</span>
};</span>
<div id="mainMthd3" class="displayInline"><g>int</g> main() {
	<span id="singleObj3">C obj1;</span>
	<span id="print13">obj1.print();</span>
	<span id="print23">obj1.show();</span>
}</div>
</pre>
<pre id='code4' class='hide code opacity00'>
<span id="headerFiles4"><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;</span>
<span id="firstClass4"><go>class</go> A {
	<go>public</go>: 
		<span id="display4"><g>void</g> display() {
			<span id="cout14">cout << <ink>"Base Class A<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="secondClass4"><go>class</go> B : <go>public</go> A {
	<span id="showMthd4"><go>public</go>: 
		<span id="show4"><g>void</g> show() {
			<span id="cout34">cout << <ink>"Base Class B<in>\n</in>"</ink>;</span>
		}</span></span>
};</span>
<span id="thirdClass4"><go>class</go> C : <go>public</go> A {
	<span><go>public</go>:
		<span id="print4"><g>void</g> print() {
			<span id="objB">B objB;</span>
			<span id="callShow4">objB.show();</span>
		}</span></span> 
};</span>
<div id="mainMthd4" class="displayInline"><g>int</g> main() {
	<span id="singleObj4">B obj1; <br>&nbsp;&nbsp;C obj2;</span>
	<span id="print14">obj1.display();</span>
	<span id="print24">obj2.display();</span>
	<span id="print34">obj2.print();</span>
}</div>
</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">

$(document).ready(function() {
	inheritanceConceptReady();
})

</script>
</body>
</html>