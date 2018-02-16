<html>
<head>
<title>virtual base class</title>
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
<script type="text/javascript" src="/secure/lang/cpp/js/virtual-base-inheritance.js"></script>
<style type="text/css">

pre {
	tab-size: 2;
	font-size: 11px;
}


in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
}

g {
	color: 	rgb(0, 204, 51);
}

r {
	color: red;
	font-weight: bold;
}
/* a:focus {
	outline: none;
} */

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.marginTop20 {
	margin-top: 20px;
}

.displayNone {
	display: none;
}

.padding00 {
	padding: 0;
}

.border1px {
	border: 1px solid gray;
}

.introjs-tooltip {
	min-width: 280px !important;
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

.vertical-align-middle {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.lightGreen {
	background-color: lightgreen;
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

.displayInline {
	/* position: relative; */
	display: inline-block;
}

.singleIn {
	border: 1px solid grey;
	margin-top: 4%;
	margin-bottom: 7%;
	padding: 10px;
	background-color: lightblue;
} 

.gpAge {
	border: 2px solid red;
	margin-top: 4%;
	padding: 2px;
	background-color: lightgreen;
	border-radius: 2px;
	position: relative;
}

.varIn {
	border: 2px solid gray;
	margin-top: 4%;
	/* margin-bottom: 7%; */
	padding: 2px;
	background-color: lightpink;
	border-radius: 2px;
} 

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange {

	50% {
		border-color: white;
		background: orange;
	}
	
}

.input-field {
	displaly: inline-block !important;
	position: relative;
	min-width: 12%;
}

.introjs-fixParent {
	position: relative !important;
}

.initialColor {
	color: initial;
}

.panel-heading {
	padding: 4px 10px !important;
}

.panel-body {
	padding: 10px !important;
	background-color: #bd83b6;
}

.user-btn {
	background-color: green;
}

#Height {
	height: 450px;
}

</style>

<script type="text/javascript">
$(document).ready(function() {
	virtualBaseInheritanceReady();
})
</script>
</head>
<body>
<div class="col-xs-12 text-center marginTop20">
	<div class="label label-default ct-demo-heading" id="heading">Virtual Base Class</div>
</div>
<div class="col-xs-12 marginTop20">
	<div class="col-xs-offset-1 col-xs-4">
<pre class="col-xs-offset-1 col-xs-11 opacity00" id="pre">
<in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;

<span id="gpCls"><go>class</go> GrandParent {
	<go>public:</go>
			<g>int</g> gpAge;
};</span>

<span id="childParent"><span id="p1Cls" class="opacity00"><go>class</go> Parent1 : <go>public <span class="displayNone">virtual</span></go> GrandParent {
 	<go>public:</go>
 			<g>int</g> p1Age;
};</span>

<span id="p2Cls" class="opacity00"><go>class</go> Parent2 : <go>public <span class="displayNone">virtual</span></go> GrandParent {
	<go>public:</go>
			<g>int</g> p2Age;
};</span></span>

<span id="childCls" class="opacity00"><go>class</go> Child : <go>public</go> <span id='supP1'>Parent1</span>, Parent2 {
	<go>public:</go>
		<span id="readMthd"><span><g>void</g> readAge() {
			<span id="textPrint">cout << <ink>"Enter gpAge, p1Age, p2Age :"</ink>;</span>
			<span id="textRead">cin >> gpAge >> p1Age >> p2Age;</span>
		}</span></span>
	
		<span id="printMthd"><g>void</g> printAge() {
			<span id='result'><span>cout << <ink>"The values are :"</ink>;</span>
			<span>cout << gpAge << p1Age << p2Age;</span></span>
		}</span>
};</span>

<span id="mainMthd" class="opacity00"><g>int</g> main() {
	<span id="obj" class="opacity00">Child obj;</span>
	<span id="callRead" class="opacity00">obj.readAge();</span>
	<span id="callWrite" class="opacity00">obj.printAge();</span>
}</span>
</pre>
<div class="col-xs-12" style="margin-top:5px;">
	<div class="col-xs-offset-2 col-xs-10">
		<button type="button" class="btn btn-warning opacity00" id="restart">Restart</button>
	</div>
</div>
</div>
	<div id='animate' class="col-xs-6 border1px padding00 opacity00">
		<div class="col-xs-12 padding00"> <!-- style="height: 650px;" -->
		<div class="col-xs-12 text-center padding00"  style=" margin-top: 4%;"> <!-- style="height:290px;" -->
			<div id="flow4" class="col-xs-12 padding00 vertial-align-middle opacity00 code">
				 <div class="displayInline border1px col-xs-offset-2 col-xs-8" id="Height">
				  <svg class="svg-css">
					<marker id="flow4Marker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
	              			<path d="M0,0 L5,2.5 L0,5 Z"/>
	          		</marker>
					<line class="svg-line" y2="23%" x2="49%" y1="23%" x1="49%"></line> <!-- y2="29%" --> 
					<line class="svg-line" x1="49%" y1="29%" y2="29%" x2="49%"></line> <!-- x2="15%" -->
					<line class="svg-line" x1="15%" y1="29%" x2="15%" y2="29%"></line> <!-- y2="34%" -->
					
					<line class="svg-line" x1="49%" x2="49%" y1="29%" y2="29%"></line> <!-- x2="85%" -->
					<line class="svg-line" x1="85%" x2="85%" y1="29%" y2="29%"></line> <!-- y2="34%" -->
					
					<line class="svg-line" x1="15%" y1="59%" x2="15%" y2="59%"></line> <!-- style="marker-end: url(#flow4Marker);" --><!-- y2="83%" -->
					<line class="svg-line" x1="15%" y1="83%" x2="15%" y2="83%"></line><!-- x2="34%" -->
					
					<line class="svg-line" x1="85%" x2="85%" y1="59%" y2="59%"></line>  <!-- style="marker-end: url(#flow4Marker);" --> <!-- y2="83%" -->
					<line class="svg-line" x1="85%" y1="83%" y2="83%" x2="85%"></line> <!-- x2="66%" -->
				</svg> 
					<div class="col-xs-12 padding00" style="margin-top:20px;">
						<div class="col-xs-offset-4 col-xs-4 padding00 opacity00" id="gp">
							<div class="panel panel-primary">
								<div class="panel-heading">
									<b>GrandParent</b>
								</div>
								<div class="panel-body opacty00" id="">
									<div><div class="gpAge displayInline" id="one"><b>gpAge</b></div></div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-xs-12 padding00" style="margin: 30px 0px 20px 0px;">
						<div class="col-xs-offset-0 col-xs-3 padding00 opacity00" id="p1">
							<div class="panel panel-primary">
								<div class="panel-heading">
									<b>Parent1</b>
								</div>
								<div class="panel-body opacty00" id="">
									<div><div class="gpAge displayInline opacity00"  id="two"><b>gpAge</b></div></div>
									<div class="varIn displayInline"><div><b>p1Age</b></div></div>
								</div>
							</div>
						</div>
						
						<div class="col-xs-offset-6 col-xs-3 padding00 opacity00" id="p2">
							<div class="panel panel-primary">
								<div class="panel-heading">
									<b>Parent2</b>
								</div>
								<div class="panel-body opacty00" id="">
									<div><div class="gpAge displayInline opacity00" id="three"><b>gpAge</b></div></div>
									<div class="varIn displayInline"><div><b>p2Age</b></div></div>
								</div>
							</div>
						</div>
						
					</div>
					<div class="col-xs-12 padding00">
						<div class="col-xs-offset-4 col-xs-4 padding00 opacity00" id="child">
							<div class="panel panel-primary">
								<div class="panel-heading">
									<b>Child</b>
								</div>
								<div class="panel-body opacty00" id="">
									<div id="last" >
										<div class="displayInline"><div class="gpAge displayInline opacity00" id="four"><b>gpAge</b></div></div>
										<div class="displayInline"><div class="gpAge displayInline opacity00" id="five"><b>gpAge</b></div></div>
									</div>
									<div>
										<div class="varIn displayInline"><div><b>p1Age</b></div></div>
										<div class="varIn displayInline"><div><b>p2Age</b></div></div>
									</div>	
								</div>
							</div>
						</div>
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
</div>
</body>
</html>