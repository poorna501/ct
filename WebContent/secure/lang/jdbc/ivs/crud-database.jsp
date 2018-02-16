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
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/jdbc/js/crud.js"></script>
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
	background-color:powderblue;
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
	background-color: yellow;
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
.options {
margin-right:10px;
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
.btn {
	padding:6px 20px;
}
 .blinking-orange {
	animation-name: blink-background-orange ;
	animation-duration: 5s;
	animation-iteration-count: 5s;
	animation-direction: alternate;
}

@keyframes blink-background-orange { 
	50% {
		background-color: orange;
	}
}
 in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}
if {
 color:#800033
}
blue {
  color:#1a8cff
}
obj{
	color:#ce954b
}
r{
	color:red;
}
</style>
</head>
<script type="text/javascript">

	$(document).ready(function() {
		
		crudDatabaseReadyFunction();
		//$(".options").addClass("z-index1000000")
		$("#outputBox").addClass("z-index1000000")
	})
	
</script>
<body>
	<div>
		<h3 class="col-xs-12 text-center margin-top-20">
			<span class="label label-default ct-demo-heading" id="heading">CRUD</span>
		</h3>
			 <div class='buttons-div text-center'>
				<button type="button" class="btn btn-warning visibility-hidden displayInline" id="restartBtn" style = "margin-top:10px;margin-bottom:10px;">Restart</button>
			</div>
			<div class = "col-xs-10">
				<div class='col-xs-5 col-xs-offset-5 buttons-div text-center' id = "buttons" style = "padding:0px;">
					<button type="button" class="btn btn-success options" id="insert">Insert</button>
					<button type="button" class="btn btn-success options" id="update">Update</button>
					<button type="button" class="btn btn-success options" id="delete">Delete</button>
					<button type="button" class="btn btn-success options" id="select">Select</button>
				</div>
			</div>
	</div>
	

<div class="col-xs-12">
	<div class="col-xs-12 padding00" style="margin-top: 25px;">
			<div class="col-xs-6 padding00 boder" style="">
<div id="" class="col-xs-12" style = "margin-top:10px;">
<pre id="preCode" class="opcity00">

<span id = "basicode"><if>import</if> java.sql.*;
<span><if>public class</if> JdbcDemo</span> {
		<span><if>public static void</if> main(String <obj>args</obj>[]) <if>throws</if> Exception</span> {
			<span id="common"><span id="dbUrl">String <obj>dbUrl</obj> = <in>"jdbc:mysql://localhost:3306/DBName"</in>;</span>
			<span id="connection">Connection <obj>con</obj> = DriverManager.getConnection(<obj>dbUrl</obj>, "", "");</span>
			<span id="stmt">Statement <obj>stmt</obj> = <obj>con</obj>.createStatement();</span></span></span>
			<span id = "loop"><if>for</if> (<if>int</if> <obj>i</obj> = <span id = "forinit">1</span>; <obj>i</obj> <= 4; <obj>i</obj>++)</span> {
			<span id="insertquery">String <obj>insert</obj> = <in>"insert into emp values ('<div id="empNo" class="displayInline">1</div>','<div id="empName" spellcheck="false" maxlength="4"  placeholder="name" class="width31 displayInline outline-none">rohan</div>','<div id="empAge" class="width15 displayInline outline-none" placeholder="age" spellcheck="false" maxlength="1">25</div>')"</in>;</span>
			<span id="eu" class=""><if>int</if> <obj>x</obj> = <obj>stmt</obj>.executeUpdate(<obj>insert</obj>);</span>
			<span id ="printf1" class = "">System.<in>out</in>.println(<span id = "sop1"><obj>x</obj> +" "+ "row(s) inserted"</span>);</span>
		}
	  <span id="updatequery" class="">String <obj>update</obj> = <in>"update table emp  set emp_age = <div id="updateAge" spellcheck="false" class="width15 displayInline outline-none" contenteditable="false"  maxlength="1">10</div> where emp_id = <div id="empid" spellcheck="false" class="width15 displayInline outline-none" contenteditable="false"  maxlength="0" >4</div>"</in>;</span>
		<span id="eu1" class=""><if>int</if> <obj>j</obj> = <obj>stmt</obj>.executeUpdate(<span id="updatechange"><obj>update</obj></span>);</span>
		<span id ="printf2" class = "">System.<in>out</in>.println(<span id = "sop2"><span><obj>j</obj></span> +" "+ "row(s) are updated"</span>);</span>
		<span id="deletequery" class="">String <obj>delete</obj> = <in>"Delete from emp where  emp_id = <div id="deleteage" spellcheck="false" class="width15 displayInline outline-none" contenteditable="false"  maxlength="0">3</div>"</in>;</span>
		<span id="excutedelete" class=""><if>int</if> <obj>k</obj> = <obj>stmt</obj>.executeUpadate(<span id="deletechange"><obj>delete</obj></span>);</span>
		<span id ="printf3" class = "">System.<in>out</in>.println(<span id = "sop3"><span><obj>k</obj></span> +" "+"row(s) are deleted"</span>);</span>
		<span id="retrive" class="">String <obj>query</obj> = <in>"select * from emp"</in>;</span>
		<span id="exute" class="">ResultSet <obj>rs</obj> = <obj>stmt</obj>.executeQuery(<obj>query</obj>);</span>
		<span id ="printf4" class = "">System.<in>out</in>.println(<span id = "sop4"><span><obj>rs</obj></span> +" "+ "records in the table"</span>);</span>
		<span id="close"><obj>con.</obj>close();</span>
	}
}
</pre>			
</div>
	
		</div>
		<div class="col-xs-6 paddng00">
			<div class="col-xs-12 padding00 border" style="height: 290px; margin-top: 10px" id="animate">
				<div class="col-xs-12 padding00">
					<div id = "tablel" class="col-xs-offset-3 col-xs-5 text-center displayNone" style="margin-top: 25px;">
					<h6><b>TABLE:EMPLOYEE</b></h6>
						<table>
							<thead>
								<tr>
									<td>emp_id</td>
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
			<div class="col-xs-12">
		<div class="col-xs-offset-1 col-xs-11">
			<div id="outputBox" class="output-console center opcity00">
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
