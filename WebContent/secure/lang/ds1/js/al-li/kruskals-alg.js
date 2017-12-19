var introjs;
var count = 0;


function introGuide() {
	$(".btn, #edgeWeight").attr("disabled", "disabled");
	console.log("In intro function")
	introjs = introJs();
	introjs.setOptions({
		steps : [{
				element: "#kruskalHeadding",
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
				element: "#startBtnDiv",
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
			case 'kruskalHeadding':
				$('.introjs-nextbutton').hide();
				var text = "To find the <y>Minimum Spanning Tree (MST)</y> we will start from the <y>smallest weight edge</y> and keep selecting "
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
						+ "<y>vertices</y>, by using <y>From Vertex</y> point and <y>To Vertex</y> point and also give the "
						+ "<y>weight</y> of the <y>edge</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "startBtnDiv" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "After building the <y>graph</y>, click on <y>start</y> button. We will find a <y>shortest path</y> between the" 
							+ " <y>vertices</y> using the <y>Kruskal's</y> algorithm.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "animationDiv":
				$(".introjs-nextbutton").hide();
				$(".btn, #edgeWeight").removeAttr("disabled");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>add vertex</y> is used to add a <y>new vertex</y> into the <y>graph</y>.";
					popover('#addVertexBtnDiv','left', text, function() {
						var text = "Create a <y>connection (egde)</y> between the any two " 
							+ "<y>vertices</y> (<y>From Vertex</y>, <y>To Vertex</y>) give the "
							+ "<y>weight</y> of the <y>edge</y>.";
						popover('#addEdgeDiv', "top", text, function() {
							var text = "Click on <y>start</y> button. We will find a <y>shortest path</y>.";
							popover('#startBtnDiv','top', text, function() {
								
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

function popover(selector, position, text, callBackFunction) {	//display popover
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'">'+ text +'</div>',
		container: '#animationDiv'
	});
	typing('#popover' + count, text, function() {
		count++;
		$(selector).popover('show');
		callBackFunction();
	});
}
























