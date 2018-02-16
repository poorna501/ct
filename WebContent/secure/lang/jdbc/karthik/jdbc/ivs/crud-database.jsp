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
<script type="text/javascript" src="/secure/lang/jdbc/js/crud-database.js"></script>
<title>CRUD</title>
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
		background-color : blue;
	}
	
	75% {
		background-color : blue;
	}
	
	100% {
		background-color : blue;
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
	background-color: lightyellow;
	/* height: 110px; */
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
	margin-top: 50px
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

	border: 2px dashed green;
	border-radius: 50%;
	padding: 14px;
	/* background-color: bisque; */
	background-color: rgba(255, 143, 11, 0.15);
	
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

table {
	border: 2px solid gray;
	text-align: center;
}

tr {
	border: 2px solid gray;
}

td {
	border: 2px solid gray;
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

.zIndex {
	background-color: white;
	display: inline-block;
	position: relative;
	z-index: 10000003;
}


.width31 {
	width: 41px;
	position: relative;
	display: inline-block;
}

.width15 {
	width: 15px;
	position: relative;
	display: inline-block;
}


.displayInline {
	display: inline-block;
}

.editBackgd {
	background-color: lightblue;
	border-radius: 1px;
}

.outline-none {
	outline: none;
}

.position-relative {
	position: relative;
}

.conn, .stmt {
	height: 50px;
	width: 100px;
	border: 2px solid gray;
	border-radius: 4px;
	display: inline-block;
	text-align: center;
	line-height: 50px;
	margin: 34px 16px 46px 56px;
}


.update {
	height: 50px;
	width: 100px;
	border: 2px solid gray;
	border-radius: 4px;
	display: inline-block;
	text-align: center;
	line-height: 50px;
	margin-bottom: 20px;
    margin-left: 232px;
    display: inline-block;
}

.query {
	height: 50px;
	width: 100px;
	border: 2px solid gray;
	border-radius: 4px;
	display: inline-block;
	text-align: center;
	line-height: 50px;
	margin-bottom: 20px;
    margin-left: 32px;
    display: inline-block;
}

.displayNone {
	display: none;
}

</style>
</head>
<script type="text/javascript">

	$(document).ready(function() {
		
		crudDatabaseReadyFunction();
		
	})
	
</script>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">CRUD</span>
	</h3>
	
	

<div class="col-xs-12">
	<div class="col-xs-12 padding00" style="margin-top: 25px;">
			<div class="col-xs-6 padding00 boder" style="">
<div id="" class="col-xs-12 marginTop">
<pre id="preCode" class="opcity00">
<span><in>import</in> java.sql.*;</span>
<span><g>public</g> <g>class</g> JdbcDemo</span> {
	<span><g>public</g> <g>static</g> <g>void</g> main(String args[]) <g>throws</g> Exception</span> {
		<span id="common"><span id="dbUrl">String dbUrl = <ink>"jdbc:mysql://localhost:3306/DBName"</ink>;</span>
		<span id="connection">Connection con = DriverManager.getConnection(dbUrl, "", "");</span>
		<span id="stmt">Statement stmt = con.createStatement();</span></span>
		<span id="insert">String insert = insert into emp values ("<div id="empNo" class="displayInline">1</div>","<div id="empName" spellcheck="false" maxlength="4"  placeholder="hii" class="width31 displayInline outline-none">ajay</div>","<div id="empAge" class="width15 displayInline outline-none" placeholder="age" spellcheck="false" maxlength="1">25</div>");</span>
		<span id="update" class="opacity00">String query2 = <ink>"update table emp  set emp_age = <div id="updateAge" spellcheck="false" class="width15 displayInline outline-none" contenteditable="true"  maxlength="1">30</div> where emp_no = 3"</ink>;</span>
		<span id="eu" class="opacity00"><g>int</g> i = stmt.executeUpdate(<span id="change">insert</span>);</span>
		<span id="retrive" class="opacity00">String query1 = <ink>"select * from emp"</ink>;</span>
		<span id="eq" class="opacity00">ResultSet rs = stmt.executeQuery(query1);</span>
		<span id="close">con.close();</span>
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
		</div>
		<div class="col-xs-6 paddng00">
			<div class="col-xs-12 padding00 border" style="height: 480px;" id="animate">
				<div class="col-xs-12 padding00">
					
					<div class="conn displayNone">connection</div>
					<div class="stmt displayNone">statement</div>
				
				</div>
				
				<div class="col-xs-12 padding00">
				
					<div class="update displayNone">ex_update</div>
					<div class="query displayNone">ex_query</div>
				
				</div>
				
				<div class="col-xs-12 padding00">
					<div class="col-xs-offset-3 col-xs-8 text-center displayNone" style="margin-top: 25px;">
						<table>
							<thead>
								<tr>
									<td>emp_no</td>
									<td>emp_name</td>
									<td>emp_age</td>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>
