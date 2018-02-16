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
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/jdbc/js/batchupdate.js"></script>
<title>Batch-Update</title>
<style type="text/css">
.border {
	border: 3px solid gray;
	border-radius: 10px;
}
.padding00 {
	padding: 0;
}
pre {
	-moz-tab-size: 2;
	tab-size: 2;
	font-size: 12px;
	background-color: #ffffff;
	/* height: 110px; */
}
querycolor {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}
keyword {
 color:#800033
}
blue {
  color:#1a8cff
}
object{
	color:#b47b31
}
y {
 color:yellow
}
 .java{
    border: 2px solid gray;
    border-radius: 6px;
    box-shadow: 0 1px 4px 1px gray;
 }
 .context {
    height: 160px;
    width: 70%;
    margin-top:35px;
    background-color: rgba(255, 143, 11, 0.15);
    border: 2px dashed green;
  }
  .oval{
	border: 2px solid gray;
    border-radius: 50%;
    display: inline-flex;
    height: 37px;
    position: relative;
  	width:99px;
    margin-top: 25px;
    background-color: #8ce884;
    line-height:33px;
	/* background-color: antiquewhite; */
} 
.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
.databaseovel {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 25px;
    position: absolute;
	background-color: thistle; 
	width:81px;
	margin-top: -7px;
    background-color: thistle;
}
	.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 53px;
	border-top:none;
	display: table;
	padding:0;
	width:86px;
	background-color: thistle; 
	
}
.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}
table {
	border: 2px solid gray;
	text-align: center;
	background-color:powderblue;
	border-collapse: collapse;
	width:100%;
}

tr {
	border: 2px solid gray;
	border-collapse: collapse;
}

td {
	border: 2px solid gray;
	font-size: 12px;
	padding:4px;
	 border-collapse: collapse;
	
}
.svg-line {
	stroke: green;
	stroke-width: 2;
}
.svg-arrow  {
	marker-end: url("#arrowEnd");
}
.listbox{
	height:107px;
	border:2px solid gray;
	border-radius: 8px;
	margin-top:10px;

}  
.font {
	text-align: center;
    font-size: 15px;
    
    font-style: italic;
    font-family: cursive;
}
.insertstyle{
	text-align: center;
    color: blue;
}
.output-console-body {
	font-size: 13px;
	height: 40px; 
	padding: 5px 20px;
	white-space: normal;
}

.output-console-title-bar {
	background-color: graytext;
	padding:1px 0;s
}
.blinking-border-background-green {
	animation: blink-border-background-green 1.0s linear 1;
}

@keyframes blink-border-background-green {
	
	25% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}
.zIndex {
	background-color: yellow;
	z-index: 10000003;
}
.position {
	display:inline;
	position:relative;
}
.driverfont {
	font-size:13px;
}
</style>
</head>
<script type="text/javascript">
$(document).ready(function() {
	
	BatchUpadateFunction();
	
})
</script>
<body>
	<div>
		<h3 class="col-xs-12 text-center margin-top-20">
			<span class="label label-default ct-demo-heading" id="heading">Batch-update</span>
		</h3>
			 <div class='buttons-div text-center'>
				<button type="button" class="btn btn-warning visibility-hidden displayInline" id="restartBtn" style = "margin-top:10px;">Restart</button>
			</div>
	</div>
		<div class = col-xs-12>
			<div class="col-xs-12 padding00" style="margin-top: 25px;">
<div class = "col-xs-5 padding00 boder">
<div class="col-xs-12" style = "margin-top:10px;">
<pre id="preCode" class="opacity00">
<span id = basiccode>
<span id = "public"><keyword>public class</keyword>  BatchUpdate</span> {
	<span id = "main"><keyword>public static void</keyword> main(String[] <object>args</object>)</span> {
		<span id = "try"><keyword>try</keyword></span> {
		<span id = "dburl">String <object>dbURL</object> = <querycolor>"jdbc:derby:sample;create=true"</querycolor>;</span></span>
		<span id = "con">Connection <object>con</object> = DriverManager.getConnection(<object>dbURL</object>);</span>
		<span id = condition><keyword>if</keyword> (<object>con</object> != <keyword>null</keyword>)</span> {
		<span id = "stmt">Statement <object>stmt</object> = <object>con</object>.createStatement();</span>	
		<span id = "date"> java.sql.Date <object>date</object> = <keyword>new</keyword> Date(System.currentTimeMillis());</span>
		<span id = "string1">String <object>insert1</object> = <querycolor>"INSERT INTO students(name,address,date) " + 
								   		 "VALUES(<span id = "name">'vishnu'</span>,'g1504','" + <object>date</object> + "')"</querycolor>;</span>
		<span id = "string2">String <object>insert2</object> = <querycolor>"INSERT INTO students(name,address,date) " + 
									     "VALUES(<span id = "name1">'lakshmi'</span>,'g1504','" + <object>date</object> + "')"</querycolor>;</span>	
   <span id = "update"> String <object>update</object> = <querycolor>"UPDATE students SET adress = 'hyderabad' 
															where name = 'lakshmi'"</querycolor></span>						     
		<span id = "string3">String <object>insert3</object> = <querycolor>"INSERT INTO students(name,address,date) " + 
									     "VALUES('ganesh','g1504','" +<object> date</object> + "')"</querycolor>;</span>
   <span id = "delete"> String <object>delete</object> = <querycolor>delete from students where name = <span id = "name2">'vishnu'</span></querycolor></span>	
			<span id = "stmt1"><object>stmt</object>.addBatch(<object>insert1</object>);</span>					     
			<span id = "stmt2"><object>stmt</object>.addBatch(<object>insert2</object>);</span>
			<span id = "ustmt"><object>stmt</object>.addBatch(<object>update</object>);</span>
			<span id = "stmt3"><object>stmt</object>.addBatch(<object>insert3</object>);</span>
			<span id = "dstmt"><object>stmt</object>.addBatch(<object>delete</object>);</span>
			<span id = "exucte"><keyword>int</keyword>[] <object>output</object> = <object>stmt</object>.executeBatch();</span>
			<span id = "forloop"><keyword>for</keyword> (<keyword>int</keyword> <object>i</object> : <object>output</object>)</span> {
				<span id = "sop">System.<querycolor>out</querycolor>.println(<object>i</object>);</span>
					}
				}
	<span id = "catch">
			} <span > catch (SQLException <object>ex</object>)</span> {
			  	<span ><object>ex</object>.printStackTrace();</span>
			}
		}
	}
</span>
</pre>
</div>
		</div>
		<div class = "col-xs-7">
		
		<div class="col-xs-12 padding00 border opacity00 " id = "animate" style = "height: 330px; margin-top: 12px" >
		<svg class = "svg-css">
			<marker id="flow4Marker" refX="3" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: red;">
               			<path d="M0,0 L5,2.5 L0,5 Z"/>
           		 </marker>
           		 <line class="svg-line" id = "line1" x1="17%" y1="8%" x2="27%" y2="8%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line2" x1="61%" y1="8%" x2="61%" y2="8%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line3" x1="72%" y1="15%" x2="70%" y2="15%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line4" x1="55%" y1="15%" x2="55%" y2="15%" style="display:inline;"/>
           		 <line class="svg-line" id ="line5" x1="28%" y1="15%" x2="27%" y2="15%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line6" x1="18%" y1="18%" x2="18%" y2="18%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line7" x1="35%" y1="15%" x2="35%" y2="21%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line8" x1="45%" y1="33%" x2="45%" y2="33%" style="display:inline;"/>
           		 <line class="svg-line" id ="line9" x1="45%" y1="20%" x2="45%" y2="20%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line10" x1="61%" y1="20%" x2="61%" y2="20%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line11" x1="18%" y1="47%" x2="11%" y2="47%" style="marker-end: url(#flow4Marker);display:inline;"/> 
           		 <line class="svg-line" id ="line12" x1="18%" y1="52%" x2="11%" y2="52%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line13" x1="18%" y1="58%" x2="11%" y2="58%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line14" x1="18%" y1="64%" x2="11%" y2="64%" style="marker-end: url(#flow4Marker);display:inline;"/> 
           		 <line class="svg-line" id ="line15" x1="18%" y1="72%" x2="11%" y2="72%" style="marker-end: url(#flow4Marker);display:inline;"/>
           		 <line class="svg-line" id ="line16" x1="18%" y1="58%" x2="11%" y2="58%" style="marker-end: url(#flow4Marker);display:inline;"/>    
		<div class = "col-xs-2 padding00 opacity00" id = "jp" style = "height:240px; margin-left: 10px; margin-top: 15px;">
			<div class = "col-xs-12 padding00 java" >
				<div class="col-xs-8 padding00">
					<div class=" shadow text-center" id="JavaBox"style="background-color: lightyellow;height:240px;width:76px;font-size:16px;">
						<div><br>
						<br>
						<br>
						<b>Java Client App</b> </div>
						
						<span id = "java1" class = "font opacity00"> insert1</span><br>
						<span id = "java2" class = "font opacity00"> insert2</span><br>
						<span id = "java3" class = "font opacity00"> update</span><br>
						<span id = "java4" class = "font opacity00"> insert3</span><br>
						<span id = "java5" class = "font opacity00"> delete</span><br>
					</div>
					
				</div>
				<div class=" col-xs-4 shadow text-center" id="jdbcApiBox"style="background-color: sandybrown;height:240px;">
				                <br>
				                <br>
								<b>J</b>
								<b>D</b>
								<b>B</b>
								<b>C</b>
								<b>A</b>
								<b>P</b>
								<b>I</b>
								
			  </div>
	    	</div>
		</div>
		<div class = "col-xs-4 padding00" style="margin-top:10px;">
		<div class = "col-xs-12">
			<div class = "col-xs-10">
				<div class = "col-xs-offset-2 col-xs-10">
					<div class="oval col-xs-9 col-xs-3 opacity00" id="conobj">
						<div style="vertical-align: middle">Connection</div>
						</div>
						</div>
				</div>
		</div>
			<div class = col-xs-12>
				<div class = "col-xs-offset-4 col-xs-8 opacity00 context" id = "context">
				<span class = "font opacity00" id = "list"><b>Statement</b></span>
				<div class = "listbox">
				<div class = "insertstyle">
				<span id ="insert1" class = "font opacity00" style ="font-weight:700px;"> insert</span><br>
				<span id ="insert2" class = "font opacity00"> insert </span><br>
				<span id ="insert3" class = "font opacity00"> update </span><br>
				<span id ="insert4" class = "font opacity00"> insert </span><br>
				<span id ="insert5" class = "font opacity00"> delete </span><br>
				
				</div>
				</div>
				</div>
			</div>
		</div>
		
		
		<div class = "col-xs-1 padding00" style = "margin-left: 10px;margin-top: 10px;">
			<div class = "col-xs-offset-3 col-xs-8 padding00">
			<div class=" col-xs-12 java text-center driverfont opacity00" id="drivermanager"style="background-color:rgba(249, 145, 145, 0.26);height:242spx;">
								<b>D</b>
								<b>R</b>
								<b>I</b>
								<b>V</b>
								<b>E</b>
								<b>R</b>
								<br>
								<br>
								<b>M</b>
								<b>A</b>
								<b>N</b>
								<b>G</b>
								<b>E</b>
								<b>R</b>
								 </div>
		
		</div>
		
		</div>
		
		<div class = "col-xs-4 padding00">
			<div class=" col-xs-12 text" style = "display:inline-block;position:relative;margin-top:20px;">
				<div class= "col-xs-offset-3 col-xs-4 database-box opacity00" id="databaseBox" style ="height:80px; width:81px;">
					<div class="databaseovel oval1style"></div>
						<span class="database-text-middle databasestyle"> <b>D/B</b></span>
					</div>
				</div>
		 <div class="col-xs-12 padding00">
			<div id = "tablel" class="col-xs-offset-1 col-xs-11 padding00 opacity00" style="margin-top: 25px;">
				<div style = "text-align:center;"><h6><b> TABLE:Student</b></h6></div>
					<table>
						<thead>
							<tr>
								<td>Name</td>
								<td>Address</td>
								<td> &nbsp;Date &nbsp; </td>
								</tr>
								<tr>
								
						</thead>
						<tbody>
						
						</tbody>
						</table>
				</div>
			</div>
		
		</div>
		</svg>
		</div>
		     <div class="col-xs-12">
				<div class="col-xs-offset-1 col-xs-11">
					<div id="outputBox" class="output-console center opacity00">
						<div class="output-console-title-bar"><span>Console</span></div>
							<div class="output-console-body">
							<div id = "op1" class = "opacity00"> <y> batch updated successfully</y></div>
							</div>
					</div>
				</div>
		</div>
		</div>
		
		</div>
		
		</div>
</body>
</html>