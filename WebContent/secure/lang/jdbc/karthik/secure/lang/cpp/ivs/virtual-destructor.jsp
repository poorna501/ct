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
<script type="text/javascript" src="/secure/lang/cpp/js/virtual-destructor.js"></script>
<style type="text/css">

pre {
	tab-size: 2;
	font-size: 10px;
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
	color: 	rgb(64, 130, 65);
}


r {
	color: red;
}

/*a:focus {
	outline: none;
}*/

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

.lightGreen {
	background-color: lightgreen;
}

.panel-heading {
	padding: 4px 15px;
}

.panel-body {
	padding: 13px;
}

.bottomMargin  {
	margin-bottom: 0px !important;
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
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

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
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

</style>

<script type="text/javascript">
$(document).ready(function() {
	/* constructorDestructorVirtual(); */
	virtualDestructorFunction();
})
</script>
</head>
<body>
<div class="col-xs-12 text-center marginTop20">
	<div class="label label-default ct-demo-heading" id="heading">Virtual Destructor</div>
</div>

<div class="col-xs-12 marginTop20">
	<div class="col-xs-offset-1 col-xs-4">
<pre class="col-xs-offset-1 col-xs-11 opacity00" id="pre">
<in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;

<span id="baseClass" class="opacity00"><span><go>class</go> Base</span> {
	<span id="invokeSecond"><span><go>public</go>:</span>
		<span>Base()</span> {
			<span id="baseCon">cout << <ink>"Base class constructor"</ink>;</span>
		}</span>
	
		<span id="baseShow"><span><go>virtual</go> ~Base()</span> {
			<span id="baseDes">cout << <ink>"Base class destructor"</ink>;</span>
		}</span>
	<span>};</span></span>
	
<span id="deriveClass" class="opacity00"><span><go>class</go> Derived : <go>public</go> Base</span> {
	<span id="invokeFirst"><span><go>public</go>:
		<span>Derived() {</span>
			<span id="deriveCon">cout << <ink>"Derived class constructor"</ink>;</span>
		<span>}</span>
		</span></span>
	<span id="parentShow" ><span> ~Derived() </span>{
			<span id="deriveDes">cout <<<ink>"Derived class destructor"</ink>;</span>
		<span>}</span></span>
<span>};</span></span>		
	
	<span id="main" class="opacity00">int main() {
		<span id="objCreation">Base *p = <go>new</go> Derived;</span>
		<span id="memoryRemove"><go>delete</go> p;</span>
		<span id="return">return 0;</span>
	<span>}</span>
	</span>
</pre>
</div>
<div class="col-xs-6 border1px opacity00" id="animate">
	<div class="col-xs-12 padding00">
		<div class="col-xs-offset-1 col-xs-5 padding00" style="margin-top: 4%;">
			
				<div class="panel panel-primary bottomMargin opacity00" id="obj">
					<div class="panel-heading text-center"><b>Derived</b></div>
					<div class="panel-body">
						<div class="col-xs-12 padding00" style="background-color: lightyellow">
							
							
							<div class="text-center" style="border: 1px dashed gray;">
								<div><b>Derived();</b></div>
								<div><b>~Derived();</b></div>
							</div>
							
							
							
							<!-- <div class="col-xs-5 padding00 opacity00" id="derive">
								<div class="panel panel-primary">
									<div class="panel-heading">
										<b>Derived()</b>
									</div>
									<div class="panel-body opacity00 text-center" id="val2">
										<div><b>print</b></div>
										<div></div>
									</div>
								</div>
							</div> -->
							
							<!-- <div class=" col-xs-offset-1 col-xs-6 padding00">
								<div class="panel panel-primary opacity00" id="k">
									<div class="panel-heading"><b>~Derived()</b></div>
									<div class="panel-body opaity00 text-center" id="val1" > style="height: 10%; padding: 7%;"
										<div><b>print</b></div>
										<div></div>
									</div>
								</div>
							</div> -->
							
							
						</div>
					</div>
				</div>
				<div class ="text-center"><span class= "opacity00" id="addr2"><b>1274</b></span></div>
			</div>
			
			<div class="col-xs-6 padding00 text-center" style="margin-top: 4%;">
				<svg class="svg-css">
				<marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
               			<path d="M0,0 L5,2.5 L0,5 Z"/>
           		</marker>
           		<!-- <line style="marker-end: url(#flow4Marker);" class="svg-line" x1="19%" y1="60.5%" x2="19%" y2="74%" id=""/> -->
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="30%" y1="23%" x2="1%" y2="23%" id=""></line>
			</svg>
			
				<div class="col-xs-offset-3 col-xs-4">
					<div class="panel panel-primary opacity00" id="p">
						<div class="panel-heading"><b>*p</b></div>
						<div class="panel-body" id="val3"><span id="addr1" class="relative"></span></div>
					</div>	
				</div>
			</div>
	</div>
	
	<div class="col-xs-12 padding00">
		<div class="col-xs-offset-1 col-xs-11">
			<div id="outputBox" class="output-console center opacity00">
				<div class="output-console-title-bar"><span>Output</span></div>
				<div class="output-console-body">
					<div class="opacity00">Base class constructor.</div>
					<div class="opacity00">Derived class constructor.</div>
					<div class="opacity00">Derived class destructor.</div>
					<div class="opacity00">Base class destructor.</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-xs-6 col-xs-offset-6">
	<button type="button" class="btn btn-warning opacity00" id="restart">Restart</button>
</div>

</div>
</body>
</html>