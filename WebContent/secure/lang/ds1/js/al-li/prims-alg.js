var introjs;
var count = 0;


function introGuide() {
	$(".btn, #edgeWeight").attr("disabled", "disabled");
	console.log("In intro function")
	introjs = introJs();
	introjs.setOptions({
		steps : [{
				element: "#primsHeadding",
				intro : ""
			},{
				element: "#addVertexBtnDiv",
				intro: "",
				position: "left"
			},{
				element: "#addEdgeDiv",
				intro: "",
				position: "left"
			},{
				element: "#bfsBtnDiv",
				intro: "",
				position: "left"
			},{
				element: "#animationDiv",
				intro: "",
				position: "left",
				tooltipClass : "hide"
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$(".introjs-nextbutton").hide();
		switch (elementId) {
			case 'primsHeadding':
				$('.introjs-nextbutton').hide();
				var text = "To find the <y>Minimum Spanning Tree (MST)</y> we will start from the <y>selected vertex</y> and keep selecting "
					+ "edges that does not have from any <y>circle (Loop/Circle)</y> with the previously selected edges.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case "addVertexBtnDiv":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "By using <y>add vertex</y> operation we can add a <y>new vertex</y> into the <y>graph</y>, with an "
						+"<y>adjacent matrix</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "addEdgeDiv":
				$(".btn, #edgeWeight").attr("disabled", "disabled");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, we will create a <y>connection (egde)</y> between the any two " 
						+ "<y>vertices</y>, using <y>From Vertex</y> point and <y>To Vertex</y> point and also give the "
						+ "<y>weight</y> of the <y>edge</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "bfsBtnDiv" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "After building the <y>graph</y>, select the <y>vertex</y> them click on <y>start</y> button.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "animationDiv":
				$(".introjs-nextbutton").hide();
				$(".btn, #edgeWeight").removeAttr("disabled");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<b>First Step: </b><br/><br/> The <y>add vertex</y> is used to add a <y>new vertex</y> into the <y>graph</y>.";
					popover('#addVertexBtnDiv','left', text, function() {
						var text = "<b>Second Step: <br/><br/> Create a <y>connection (egde)</y> between the any two " 
							+ "<y>vertices</y> (<y>From Vertex</y>, <y>To Vertex</y>) give the "
							+ "<y>weight</y> of the <y>edge</y>.";
						popover('#addEdgeDiv', "top", text, function() {
							var text = "<b>Third Step: </b><br/><br/> Select the <y>vertex</y> then click on <y>start</y> button. "
										+" and see the working of <y>prim's</y> algorithm.";
							popover('#bfsBtnDiv','top', text, function() {
								$("#addEdgeBtn").attr("disabled", "disabled");
								events("#edgeWeight");
								
							});
						});
					});
				});
			break;
		}
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function popover(selector, position, text, callBackFunction) {
	//doPlayPause();
	$(selector).popover({
		viewport: selector,
		placement: position,
		html: true,
		trigger: 'focus',
		container : $("canvas").parent(),
		content: '<div class="customPopover'+ count +'">' + text + '</div>'
	}).popover('show').css("top", "0");
	
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			count++;
			callBackFunction();
		}
	});
}

function events(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).val().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		if ($(selector).val() != "") {
			$("#addEdgeBtn").removeAttr("disabled");
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter any integer.</div>');
			$("#addEdgeBtn").attr("disabled", "disabled");
		}
	});
}
























