<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Memory Allocation</title>
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
<script type="text/javascript" src="/secure/lang/cpp/js/object-memory-allocation.js"></script>
<style type="text/css">
.creamPreTab4, pre {
	tab-size: 2;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 10px;
	margin: 5px;
	padding: 10px;
	font-family: monospace;
}

pre {
	tab-size: 2;
}

.padding00 {
	padding: 0px;
}

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	min-height: 260px;
}

.memory-box {
	border: 1px solid gray;
	height: 200px;
}

.output-console-body {
	font-size: 11px;
	/* height: 75px; */
	padding: 5px 20px;
	white-space: normal;
}

.elementBorder {
	border: 1px solid gray;
}

.marginTop {
	margin-top: 22%;
	padding : 10px;
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 10000000;
	position: relative;
	background-color: #fffae6;
}

.panel-heading {
	padding: 4px 15px;
}

.panel-body {
	padding: 13px;
}

.margin-top {
	margin-top: 15px
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
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
}

.displayInline {
	position: relative;
	display: inline-block;
}

.introjs-tooltip {
	min-width: 300px;
	max-width: 350px;
}
</style>
<script type="text/javascript">

$(document).ready(function() {
	objectMemoryAllocationReady();
})

</script>
</head>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Memory Allocation To Objects</span>
	</h3>
	<div class="col-xs-12 margin-top">
<div  class="col-xs-offset-1 col-xs-3">	
<pre class="col-xs-12 opacity00" id="pre">
<span id="headerFile"><span><in>#include</in> <ink>&lt;iostream&gt;</ink></span>
<span><go>using namespace</go> std;</span></span>
<div id="classDecl"><span><go>class</go> Item </span>{
		<span id="privateVariable"><span><g>int</g> itemNo;</span>
		<span><g>float</g> price;</span></span>
		<span id="putData"><span><go>public:</go>
				<span id='toolTipSet'><g>void</g> setData(<g>int</g> i, <g>float</g> j)<span> {</span>
					<span>itemNo = i;</span>
					<span>price = j;</span>
				<span>}</span></span></span></span>
				<span id="getData"><span><g>void</g> display()</span> <span>{</span>
					<span>cout << <ink>"Items :"</ink> << itemno <<"\n";</span>
					<span>cout << <ink>"Price :"</ink> << price <<"\n";</span>
				<span>}</span></span>
<span>};</span></div>

<div id="mainMthd"><span><g>int</g> main() </span>{
		<span id="objDec">Item s1, s2;</span>
		<span id="putIn1">s1.setData(<ink>1001</ink>, <ink>17.2</ink>);</span>
		<span id="putIn2">s2.setData(<ink>1002</ink>, <ink>18.5</ink>);</span>
		<span id="getIn1">s1.display();</span>
		<span id="getIn2">s2.display();</span>
<span>}</span></div>
</pre>
</div>
<div class="col-xs-offset-1 col-xs-6 bo1px oity00">

	<div class="col-xs-12 padding00 border1px opacity00" id="fullStack" style="margin-top: 5px;">
		<div id="objMemory" class="col-xs-12 padding00" style="min-height:180px;"><!-- border-bottom:1px solid gray; -->
			<div style="margin-top:2%;">
				<div class="objMemory opacity00 col-xs-offset-1 col-xs-4 padding00">
					<div id="s1" class="panel panel-primary text-center padding00">
						<div class="panel-heading"><b>s1</b></div>
						<div class="panel-body">
							<div class="panel panel-primary col-xs-5 padding00">
								<div class="panel-heading">itemno</div>
								<div class="panel-body itemNoS1"><span id='s1Item' class='displayInline opacity00 zIndex'>1001</span></div>
							</div>
							<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
								<div class="panel-heading">price</div>
								<div class="panel-body priceNoS1"><span id='s1Price' class='displayInline zIndex opacity00'>17.2</span></div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="objMemory opacity00 col-xs-offset-1 col-xs-4 padding00">
					<div id="s2" class="panel panel-primary text-center padding00">
						<div class="panel-heading"><b>s2</b></div>
						<div class="panel-body">
							<div class="panel panel-primary col-xs-5 padding00">
								<div class="panel-heading">itemno</div>
								<div class="panel-body itemNoS2"><span id='s2Item' class='displayInline opacity00 zIndex'>1002</span></div>
							</div>
							<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
								<div class="panel-heading">price</div>
								<div class="panel-body priceNoS2"><span id='s2Price' class='displayInline opacity00 zIndex'>18.5</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 padding00 text-center" style="margin-top:2%;">
			<div class="col-xs-12 padding00 opacity00" id='setMthd'><b>void setData (int i, float j);</b></div>
			<div class="col-xs-12 padding00 opacity00" id='dispMthd'><b>void display();</b></div>
		</div>
	</div>
	<div class="col-xs-12 padding00">
		<div class="col-xs-6">
			<div id="outputBox" class="output-console center opacity00">
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
				<div class="output-console-body">
					<div id="s1OutPut" class="opacity00">
						<div><span>Items : </span><span>1001</span></div>
						<div><span>Price : </span><span>17.2</span></div>
					</div>
					<div id="s2OutPut" class="opacity00">
						<div><span>Items : </span><span>1002</span></div>
						<div><span>Price : </span><span>18.2</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
			</div>
</div>
<!-- <div class="col-xs-offset-1 col-xs-8 border1px opacity00">
			<div class="col-xs-12 padding00" id="fullStack" style="margin-top: 5px;">
			<div id="objMemory" class="col-xs-8 col-xs-offset-1" style="min-height:180px;">
				<div class="col-xs-4 pading00">
					<div class="col-xs-12 padding00">
						<div class="objMemory opacity00">
							<div id="s1" class="panel panel-primary text-center padding00">
								<div class="panel-heading"><b>s1</b></div>
								<div class="panel-body">
									<div class="panel panel-primary col-xs-5 padding00">
										<div class="panel-heading">itemno</div>
										<div class="panel-body itemNoS1 opacity00">1001</div>
									</div>
									<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
										<div class="panel-heading">price</div>
										<div class="panel-body priceNoS1 opacity00">17.2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-4 paddig00">
					<div class="col-xs-12 padding00">
						<div id="s2" class="col-xs-offset-0 col-xs-0 objMemory opacity00">
							<div class="panel panel-primary text-center padding00">
								<div class="panel-heading"><b>s2</b></div>
								<div class="panel-body">
									<div class="panel panel-primary col-xs-5 padding00  ">
										<div class="panel-heading">itemno</div>
										<div class="panel-body itemNoS2 opacity00">1002</div>
									</div>
									<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00  ">
										<div class="panel-heading">price</div>
										<div class="panel-body priceNoS2 opacity00">18.5</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				</div>
				<div class="col-xs-4 pading00">
					<div class="col-xs-12 padding00">
						<div id = "memoPutData" class="opacity00">
							<div  class="panel panel-primary text-center padding00">
								<div class="panel-heading"><b>putData()</b></div>
								<div class="panel-body">
									<div class="panel panel-primary col-xs-5 padding00 ">
										<div class="panel-heading">itemno</div>
										<div class="panel-body">i</div>
									</div>
									<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
										<div class="panel-heading">price</div>
										<div class="panel-body">j</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 
				
			</div>
			<div class="col-xs-12 padding00">
				<div class="col-xs-6">
					<div class="col-xs-offset-2 col-xs-9 padding00">
						<div id="memoGetData" class="panel panel-primary text-center padding00 opacity00">
							<div class="panel-heading"><b>getData()</b></div>
							<div class="panel-body">
								<div class="panel panel-primary col-xs-5 padding00 ">
									<div class="panel-heading">itemno</div>
									<div class="panel-body">i</div>
								</div>
								<div
									class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
									<div class="panel-heading">price</div>
									<div class="panel-body">j</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-6">
					<div id="outputBox" class="output-console center opacity00">
						<div class="output-console-title-bar">
							<span>Output</span>
						</div>
						<div class="output-console-body">
							<div id="s1OutPut" class="opacity00">
								<div><span>Items : </span><span>1001</span></div>
								<div><span>Price : </span><span>17.2</span></div>
							</div>
							<div id="s2OutPut" class="opacity00">
								<div><span>Items : </span><span>1002</span></div>
								<div><span>Price : </span><span>18.2</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="col-xs-12 text-center">
			<div><button type="button" class="btn btn-warning visibility-hidden margin-top" id="restartBtn">Restart</button></div>
		</div>
</body>
</html>