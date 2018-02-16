<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
<script type="text/javascript" src="/secure/lang/jdbc/js/statement.js"></script>
<title>Statement</title>
<style>

.main-div {
	border:2px solid transparent;
	border-radius:5px;
}

.margin-top20 {
	margin-top: 20px;
}

.border {
	border: 3px solid gray;
	border-radius: 10px;
}

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 85px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
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

 .oval {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}

.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}

.popover-content {
	background-color: lightgray;
	color: black;
}

.popover {
	z-index: 99999999;
	width: 215px;
}

.ct-btn-next {
	float: right;
	padding: 2px 5px;
	cursor: pointer;
}

.tooltip-height {
	height: 20px;
	margin-top: 5px;
}
.arrow {
	top:25% !important;
}

.margin-top-bottom {
	margin: 20px 0;
	line-height: 56px;
}

.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

.marginBtm {
	margin-bottom: 60px;
}

.javaApp {
	height: 50px;
	line-height: 50px;
}

.padding10 {
	padding: 10px;
}

.rectangle {
	/* border: 1px solid gray;
	height: 56px;
	min-width : 50%;
	display: inline-block; */
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(201, 201, 85) 12%, rgba(255, 255, 61, 0.6) 78%); 
}

.driver {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(92, 203, 187) 12%, rgba(55, 240, 227, 0.7) 78%);
 
}

.dbLibrary {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(196, 173, 197) 12%, rgba(219, 207, 221, 0.7) 78%);
}

.dataBase {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(192, 146, 195) 12%, rgba(255, 255, 255, 0.5) 78%);
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

.padding00 {
	padding: 0;
}

.opacity00 {
	opacity: 0;
}

.blinking-border-background-blue {
	/* animation-name: blink-border-background-blue;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: ; */
	animation: blink-border-background-blue 1.0s linear 1;
}

@keyframes blink-border-background-blue {
	25% {
		box-shadow:  0 2px 6px 2px blue;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px blue;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}

.svg-revline {
	stroke: #f53f3f;
	stroke-dasharray: 3;
	stroke-width: 2;
}

pre {
	-moz-tab-size: 2;
	tab-size: 2;
	font-size: 12px;
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
	font-weight: bold;
	color: yellow;
}

e {
	font-weight: bold;
	color: #23527c;
}

.displayNone {
	display: none;
}

.border {
	border: 2px solid gray;
}

.margin-top5 {
	margin-top: 5px
}

.margin-top50 {
	margin-top: 75px
}

.svg-revline {
	stroke: gray;
	stroke-dasharray: 4;
	stroke-width: 2;
}


.circle {
	border: 2px solid green;	 
	width: 70px; 
	height: 70px; 
	-moz-border-radius: 50px; 
	-webkit-border-radius: 50px;
	border-radius: 50px;
} 

body {
	font-size: 12px;
}


.obj {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    width: 100%;
}

.context {
	/* border: 2px dashed green; */
	border-radius: 0%;
	padding: 14px;
	/* background-color: bisque; */
	/* background-color: rgba(255, 143, 11, 0.15); */
}


.rectangle {
    background: yellow;
    box-shadow: 0 1px 4px 1px gray;
}

.driver {
    background: rgba(55, 240, 227, 0.7);
    box-shadow: 0 1px 4px 1px gray;
}

.objCreated {
	background-color: #cafbff
}



.displayInline {
	display:inline-block;
	margin-left: 28px;
}

</style>

<script type="text/javascript">
$(document).ready(function() {
	statementReadyFunction();
})
</script>
</head>
<body>

<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Get Data From DataBase By JDBC</span>
</h3>


<div class="col-xs-12" style="margin-top: 50px;">
	<div class="col-xs-6 padding00">
		<div id="" class="col-xs-12 marginTop">
<pre id="preCode" class="opacity00">
<span><in>import</in> java.sql.*;</span>
<span><g>public</g> <g>class</g> JdbcDemo</span> {
	<span><g>public</g> <g>static</g> <g>void</g> main(String args[])</span> {
		<span><go>try</go> {
			<span id="dbUrl">String dbUrl = <ink>"jdbc:mysql://localhost:3306/DBName"</ink>;</span>
			<span id="connection">Connection con = DriverManager.getConnection(dbUrl, "", "");</span>
			<span id="connOutPut">System.out.println("Connection Established");</span>
			<span id="ifCond" class="opaity00"><span><go>if</go> (con != null) {</span>
				<span id="stmt" class="oacity00">Statement stmt = con.createStatement();</span>
				<span id="query1" class="oacity00">String query1 = <ink>"select * from emp"</ink>;</span>
				<span id="eq" class="opaciy00">ResultSet rs = stmt.executeQuery(query1);</span>
				<span id="rsOutPut">System.out.println(rs);</span>
				<span id="query2" class="oacity00">String query2 = <ink>"update emp table set salary = 400 where empid = 10"</ink>;</span>
				<span id="eu" class="opaity00"><g>int</g> i = stmt.executeUpdate(query2);</span>
				<span id="euOutPut">System.out.println(i);</span>
				<span id="close" class="pacity00">con.close();</span>
			}</span>
		}</span><span> <go>catch</go> (SQLException se) {
			se.printStackTrace();
		}</span>
	}
}
</pre>			
</div>

<div class="col-xs-12">
	<div class="col-xs-offset-1 col-xs-11">
		<div id="outputBox" class="output-console center opcity00">
			<div class="output-console-title-bar"><span>Output</span></div>
			<div class="output-console-body"></div>
		</div>
	</div>		
</div>

<!-- <div class="col-xs-12 text-center margin-top-40">
	<span id="restartBtn" class="opacity00 btn btn-warning">Restart</span>
</div> -->
</div>
	<div class="col-xs-6">
		<div id="animation" class="col-xs-12 padding00 border opcity00" style="height: 600px;">
			<!-- <svg class="svg-css">
			
				 <marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
               			<path d="M0,0 L5,2.5 L0,5 Z"/>
           		</marker>
           		
           		<line style="marker-end: url(#flow4Marker);" id="firstLine" y2="55%" x2="16%" y1="13.5%" x1="16%" class="svg-line"/>
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="19%" y1="60.5%" x2="19%" y2="74%" id=""/>
           		
           		<line id="" y2="75%" x2="97%" y1="75%" x1="3%" class="svg-revline"/>
           		
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="22%" y1="75%" x2="22%" y2="61%" id=""/>
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="23%" y1="56%" x2="23%" y2="44%" id=""/>
           		
           		<line id="" y2="36%" x2="41%" y1="36%" x1="36.5%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="22%" y1="26.5%" x2="22%" y2="15%" id=""/>
           		
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="29%" y1="14%" x2="29%" y2="26%" id=""/>
           		<line id="" y2="34%" x2="42%" y1="34%" x1="36.5%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		
           		<line id="" y2="37%" x2="38%" y1="37%" x1="43%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		
           		<line id="" y2="10%" x2="47%" y1="27%" x1="47%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		<line id="" y2="10%" x2="35.5%" y1="10%" x1="47%" class="svg-line" style="marker-end: url(#flow4Marker);"/> result - japp
           		
           		<line id="" y2="56%" x2="26%" y1="44%" x1="26%" class="svg-revline" style="marker-end: url(#flow4Marker);"/>
           		
           		<line id="" y2="74.5%" x2="26%" y1="61%" x1="26%" class="svg-revline" style="marker-end: url(#flow4Marker);"/>
           		
           		
           		<line id="" y2="35%" x2="57.5%" y1="35%" x1="53%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		
           		<line id="" y2="10%" x2="64%" y1="27%" x1="64%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		<line id="" y2="10%" x2="35.5%" y1="10%" x1="64%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		
           		<line id="" y2="10%" x2="47%" y1="27%" x1="47%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		<line id="" y2="10%" x2="35.5%" y1="10%" x1="47%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
           		
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="35%" y1="10%" x2="48%" y2="10%" id=""/>
           		<line style="marker-end: url(#flow4Marker);" class="svg-line" x1="48%" y1="10%" x2="48%" y2="26%" id=""/>
           		
           		<tspan x="10" y="45">First line.</tspan>
			</svg> -->
			
			
			 <svg class="svg-css">
				 <marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
               			<path d="M0,0 L5,2.5 L0,5 Z"></path>
           		</marker>
    
				<rect x="10%" y="10%" width="150" height="54" rx="5" ry="5" style="fill:yellow; stroke: gray;stroke-width: 3px;"></rect>
				<rect style="fill: orange;stroke-width: 3px;" height="24" width="147" y="14.75%" x="10.2%"></rect>
				<rect style="fill: violet;stroke-width: 2px;stroke: gray;" height="22" width="170" y="60%" x="10%" rx="10" ry="10"></rect>
				
				<rect style="fill: rgba(255, 143, 11, 0.15);stroke-width: 2px;stroke: blue;stroke-dasharray: 5;" height="20%" width="54%" y="30%" x="22%"></rect>
				<rect style="fill: orange;stroke-width: 3px;" height="24" width="147" y="14.75%" x="10.2%"></rect>
				
				
				<circle cx="31%" cy="40%" r="5%" style="stroke: green;stroke-width: 3;fill: lightblue;"></circle>
				<circle cx="46%" cy="40%" r="5%" style="stroke: green;stroke-width: 3;fill: lightblue;"></circle>
				<circle cx="61%" cy="40%" r="5%" style="stroke: green;stroke-width: 3;fill: lightblue;"></circle>
				
				<!-- <line x1="15%" y1="19%" x2="15%" y2="59%" class="svg-line" style="marker-end: url(#flow4Marker);"></line> -->
				
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="59%" x2="15%" y1="19%" x1="15%"/>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="76.3%" x2="15%" y1="63.5%" x1="15%"/>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="64.3%" x2="22%"  y1="76.5%" x1="22%"/>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="51%" x2="27%"  y1="60.3%" x1="27%"/>
				<line x1="29%" y1="30%" x2="29%" y2="20%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="29.5%" x2="29%" y1="19%" x1="29%"/>
				
				<!-- Conn To Stmt -->
				<line x1="36%" y1="40%" x2="40.5%" y2="40%" class="svg-line" style="marker-end: url(#flow4Marker);"/>	
				<!-- Conn To Stmt -->
				
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="16%" x2="45%" y1="30%" x1="45%"></line>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="16%" x2="37%" y1="16%" x1="45%"></line>
				
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="16%" x2="45%" y1="16%" x1="36%"></line>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="29%" x2="45%" y1="16%" x1="45%"></line>
				<line x1="41%" y1="40%" x2="37%" y2="40%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
				
				<!-- Dashed Arrows -->
				<line style="marker-end: url(#flow4Marker);" class="svg-revline" y2="59.5%" x2="27%" y1="50%" x1="27%"/> 
				<line x1="22%" y1="63.5%" x2="22%" y2="76.5%" class="svg-revline" style="marker-end: url(#flow4Marker);"/>
				<!-- Dashed Arrows -->
				
				<line x1="51%" y1="40%" x2="55%" y2="40%" class="svg-line" style="marker-end: url(#flow4Marker);"></line>
				
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="16%" x2="58%" y1="30%" x1="58%"></line>
				<line style="marker-end: url(#flow4Marker);" class="svg-line" y2="16%" x2="37%" y1="16%" x1="58%"></line>
										
				<!-- horizontal line -->
				<line y2="77%" x2="98%" y1="77%" x1="2%" style="stroke:gray; stroke-width: 2px;"/>
				
				<text style="font-size: 10px;" text-anchor="middle" x="31%" y="40%" fille="gray">Connection</text>
				<text fille="gray" y="40%" x="46%" text-anchor="middle" style="font-size: 10px;">Statement</text>
				<text fille="gray" y="40%" x="61%" text-anchor="middle" style="font-size: 10px;">ResultSet</text>
				
			</svg>
			
			<div class="col-xs-12 col-sm-12 col-md-12" style="margin-top:496px;">
				<div class="col-xs-6 padding00">
					<div id="oracleDB" class="col-sm-3 col-md-3 col-xs-offset-3 col-xs-3 database-box opacity00">
						<div class="oval dataBase" style="background-color: thistle;"></div>
						<span class="text-font database-text-middle dataBase"
							style="background-color: thistle; border-radius: 8px"><b>Database</b>
						</span>
					</div>
				</div>
				<div class="col-xs-offset-1 col-xs-5 padding00"></div>
			</div>
			
			
			
			
			<!-- <div class="padding00" style="padding: 15px;height: 450px">
			
				<div class="col-xs-12">
					<div id="jApp" class="border col-xs-offset-1 col-xs-3 padding00 opacity00 text-center rectangle">
						<div style="padding: 12px;">Java App</div>
						<div class="" style="border-top: 2px solid gray; padding: 2px;background-color:sandybrown;"><b>JDBC API</b></div>
					</div>
				</div>
				
				<div class="col-xs-12 col-sm-12 col-md-12 margin-top50">
					<div class="col-xs-8 col-sm-8 col-md-8 padding00 context opaity00" style="margin-left: 100px;"> width:390px;
						<div id="conObj"  class="objCreated circle displayInline padding00 text-center opacity00"><div style="padding: 3px; line-height: 60px;">Connection</div></div>
						<div id="stmtObj" class="objCreated circle displayInline padding00 text-center opacity00"><div style="padding: 3px; line-height: 60px;">Statement</div></div>
						<div id="rsObj"   class="objCreated circle displayInline padding00 text-center opacity00"><div style="padding: 3px; line-height: 60px;" id="rs">ResultSet</div></div>
					</div>
				</div>
				
				<div class="col-xs-12 margin-top50"> 
					<div id ="driverMng" class="border col-xs-offset-1 col-xs-3 padding00 text-center opacity00 driver"><div style="padding: 3px;">Driver Manager</div></div>
				</div>
				
				<div class="col-xs-12 col-sm-12 col-md-12" style="margin-top:100px;">
					<div class="col-xs-6 padding00">
						<div id="oracleDB" class="col-sm-3 col-md-3 col-xs-offset-3 col-xs-3 database-box opacity00">
							<div class="oval dataBase" style="background-color: thistle;"></div>
							<span class="text-font database-text-middle dataBase"
								style="background-color: thistle; border-radius: 8px"> <b>Database</b>
							</span>
						</div>
					</div>
					<div class="col-xs-offset-1 col-xs-5 padding00"></div>
				</div>
				
			</div> -->
		</div>
	</div>
</div>


</body>
</html>