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
<!-- <script type="text/javascript" src="/secure/lang/cpp/js/object-memory-allocation.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js/virtual-base-inheritance.js"></script> -->
<script type="text/javascript" src="/secure/lang/cpp/js/constructor-invoke-virtual-function.js"></script>
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
	height: 100px; 
	padding: 5px 20px;
	white-space: normal;
	
}

.output-console {
	margin: 0px;
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


.zIndex {
	z-index: 9999999;
}


.panel-body {
	padding: 6px;
}

</style>

<script type="text/javascript">

$(document).ready(function() {
	/* constructorDestructorVirtual(); */
	constructorInvokeVirtualFunction();
})

</script>
</head>
<body>
<div class="col-xs-12 text-center marginTop20">
	<div class="label label-default ct-demo-heading" id="heading">Constructors and Virtual Function</div>
</div>

<div class="col-xs-12 marginTop20">
	<div class="col-xs-offset-1 col-xs-4">
<pre class="col-xs-offset-1 col-xs-11 opacity00" id="pre">
<in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;

<span id="baseClass" class="opacity00"><span><go>class</go> Base</span> {
	<span><g><b>int</b></g> k;</span>
	<span><go>public</go>: 
		<span id="invokeSecond"><span>Base(<g><b>int</b></g> x)</span> {
			<span id="kVal">k = x;</span>
		}</span></span>
	
		<span id="baseShow" class="oacity00"><span><span id="virtual" class="displayNone opacity00"><go>virtual</go></span> <g><b>void</b></g> show()</span> {
			<span id="kDisp">cout << <ink>"This is base class show:"</ink> << k;</span>
		}</span>
<span>};</span></span>
	
<span id="deriveClass" class="opacity00"><span><go>class</go> Derived : <go>public</go> Base</span> {
	<span>int h;</span>
	<span><go>public</go>: 
		<span id="invokeFirst" class="oacity00"><span>Derived(<g><b>int</b></g> x, <g><b>int</b></g> y) : <span id="superConst">Base(x)</span></span> {
			<span id="hVal">h = y;</span>
			<span id="baseP">Base *p;</span>
			<span id="pCurrent">p = <go>this</go>;</span>
			<span id="pShowMthd">p -> show();</span>
		<span>}</span></span>
	</span>
		<span id="parentShow"><span><g><b>void</b></g> show() </span>{
			<span id="hDisp">cout <<<ink>"This is derived class show:"</ink><< h;</span>
		<span>}</span></span>
<span>};</span></span>		
	
	<span id="main" class="opacity00">main() {
		<span id="objCreation">Derived obj(<ink>2</ink>, <ink>3</ink>);</span>
	<span>}</span>
	</span>
</pre>

		<div class="col-xs-12">
			<div class="col-xs-offset-1 col-xs-11">
				<div id="outputBox" class="output-console center opacity00">
					<div class="output-console-title-bar"><span>Output</span></div>
					<div class="output-console-body"></div>
				</div>
			</div>
		</div>


<!-- <div class="col-xs-6 col-xs-offset-4" style="margin-top: 10px;">
	<button type="button" class="btn btn-warning opacity00" id="restart">Restart</button>
</div> -->

</div>
<div id='animate' class="col-xs-6 border1px padding00 opacity00">
	<div class="col-xs-12 padding00"> <!-- style="height: 650px;" -->
		<div class="col-xs-12 text-center padding00"  style="margin-top: 4%;"> <!-- style="height:290px;" -->
			<div class="col-xs-offset-2 col-xs-8 padding00">
				<div class="panel panel-primary bottomMargin opacity00" id="obj">
				
					<div class="panel-heading"><b>obj</b></div>
					<div class="panel-body">
					
						<div class="col-xs-12 padding00" style="border-bottom:2px solid gray;">
							<div class="col-xs-5 padding00 opacity00" id="h">
								<div class="panel panel-primary">
									<div class="panel-heading">
										<b>h</b>
									</div>
									<div class="panel-body"><span class="opacity00 displayInline zIndex" id="val2">3</span></div>
								</div>
							</div>
							<div class=" col-xs-offset-1 col-xs-6 padding00">
								<div class="panel panel-primary opacity00" id="k">
									<div class="panel-heading"><b>(Base : k)<br> k</b></div>
									<div class="panel-body padding00" > <!-- style="height: 10%; padding: 7%;" -->
										 
										<span class="opacity00 displayInline zIndex" id="val1">2</span>
										<div class="col-xs-12 padding00" style="border-top: 2px solid gray;"></div>
										<div class="col-xs-12 padding00 opacity00" id='show1' ">
											<div class="panel  panel-primary" style="margin-top:15px;">
												
												<div class="panel-heading"><b>sum()</b></div>
												<div class="panel-body">
												
													<span><b>print</b></span>
													
												</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
						
						
						<div class="col-xs-12 padding00" style="margin-top:25px;">
							<!-- <div class="col-xs-2 padding00">Derived(..)</div> -->
							<div class="col-xs-offset-1 col-xs-9 padding00">
							
								<div class="col-xs-12 padding00">
								
								<div class="">
									
									<div class="panel panel-primary">
											<div class="panel-heading"><b>Derived()</b></div>
											<div class="panel-body">
									
									<div class="col-xs-4 opacity00" id="x">
										<div class="panel panel-primary">
											<div class="panel-heading"><b>x</b></div>
											<div class="panel-body"><span class="displayInline" id="xVal">2</span></div>
										</div>
									</div>
									
									<div class="col-xs-4 opacity00" id="y">
										<div class="panel panel-primary">
											<div class="panel-heading"><b>y</b></div>
											<div class="panel-body"><span class="displayInline" id="yVal">3</span></div>
										</div>
									</div>
									
									<div class="col-xs-4 opacity00" id="p">
										<div class="panel panel-primary">
											<div class="panel-heading"><b>*p</b></div>
											<div class="panel-body"><span class="displayInline opacity00" id="pVal">1264</span></div>
										</div>
									</div>
									
									<div class="col-xs-12" style="border-top:2px solid gray;"></div>
									
									<div class="col-xs-12 opacity00" id="show2">
									
									<div id="" class="col-xs-offset-2 col-xs-8 padding00" style="margin-top: 9px;">
										<div class="panel panel-primary">
											<div class="panel-heading"><b>show()</b></div>
											<div class="panel-body"><span><b>print</b></span></div>
										</div>
									</div>
										
									</div>
								</div>
								</div>	
								</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class ="text-center opacity00" id="ddr"><b>1264</b></div>
			</div>
			
			
			<!-- <div class="col-xs-6 padding00">
				<div class="col-xs-offset-3 col-xs-4">
					<div class="panel panel-primary opacity00" id="p">
						<div class="panel-heading"><b>*p</b></div>
						<div class="panel-body opacity00" id="val3">1264</div>
					</div>	
				</div>
			</div> -->
			
			
		</div>
	</div>
</div>
<div class="col-xs-12" style="margin-top: 10px;">
	<div class="col-xs-offset-6 col-xs-4">
		<button type="button" class="btn btn-warning opacity00" id="restart">Restart</button>
	</div>
		
	</div>


</div>


</body>
</html>
