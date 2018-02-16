<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>JDBC Index</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>

<style type="text/css">
.fa-check {
	color: green;
}
</style>

<script type="text/javascript">

	function opendialog(className, url, width, height) {
		if (width == undefined) {
			width = 600;
		} else {
			width = jQuery(window).width() * width;
		}
		if (height == undefined) {
			height = 400;
		} else {
			height = jQuery(window).height() * height;
		}
		var $dialog = $('#javaDocBrowserDiv').html(
				'<iframe id="javaDocIFrame" style="border: 0px; " src="' + url
						+ '" width="100%" height="100%"></iframe>').dialog({
			title : className,
			autoOpen : false,
			dialogClass : 'dialog_fixed ui-widget-header jqueryUIPopupDialog',
			modal : false,
			height : height,
			minWidth : width,
			minHeight : height,
			draggable : true
		});
		$dialog.dialog('open');
		$dialog.closest('.ui-dialog').css("z-index", "1043");
	}
</script>
</head>

<body>
	<div id="javaDocBrowserDiv"></div>
	<div class='container'>

		<div class='well text-center' style='margin-top: 40px;'>
			<h1>JDBC Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1: Basics</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
				
					<tr>
						<td>1</td>
						<td>JDBC Architecture</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('JDBC Architecture', 'jdbc.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">JDBC Architecture</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Type1 Driver</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Type one Driver', 'type-one-driver-interactive.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Type1 Driver</span></td>
						<td>NO NEED</td>
						<td>MAHESH</td>
						<td></td>
						<td></td>
					</tr>


					<tr>
						<td>3</td>
						<td>Type2 Driver</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Jdbc type 2 driver', 'Type-2DriverCopy.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Type2 Driver</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Type3 Driver</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('C++ program life cycle', 'c-plus-pus-program-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Type3 Driver</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Type4 Driver</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('C++ program life cycle', 'c-plus-pus-program-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Type4 Driver</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>All Drivers</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('All drivers', 'jdbc-drivers.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">All Drivers</span></td>
						<td>NO NEED</td>
						<td>KARTHIK</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>		
		
		
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-2: Connection to Database</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>connection</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Get Conncection JDBC', 'get-connection.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">connection</span></td>
						<td></td>
						<td>Swathi</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Result set</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Result set', 'result-set.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Result set</span></td>
						<td></td>
						<td>Ramya</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>CRUD</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('CRUD', 'crud-database.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">CRUD</span></td>
						<td></td>
						<td>Swathi</td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
			</table>
		</div>
		
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-3: Types of Statements</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Prepared Statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Prepared Statement', 'prepared-statement.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : black">Prepared Statement</span></td>
						<td></td>
						<td>Karthik</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Callable Statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Callable Statement', 'callable-statement.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : black">Callable Statement</span></td>
						<td></td>
						<td>Swathi</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Batch Update</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Batch Updates', 'batch-update.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : black">Batch Update</span></td>
						<td></td>
						<td>Swathi</td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
			</table>
		</div>
		
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-4: Adavanced Topics</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-5">Details</th>
					<th class="col-xs-1">Back Button</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Transaction Management</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Transaction Management', 'transaction-management.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : black">Transaction Management</span></td>
						<td></td>
						<td>Swathi</td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
			</table>
		</div>
		
			
	</div>
	
</body>
</html>