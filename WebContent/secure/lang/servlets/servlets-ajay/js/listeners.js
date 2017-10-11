var typingSpeed = 10;
var count = 0;

var listeners = function() {
	$("text").hide();
	popover("#heading", 'right');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="listenerTypes()">Next →</a>');
		count++;
	});
	
	$("#restart").click(function() {
		location.reload();
	});
}

function listenerTypes() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#requestListener").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$("#contextListener").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#sessionListener").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				popover("#sessionListener", 'right');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="requestListener()">Next →</a>');
					count++;
				});
			});
		});
	});
}

function requestListener() {
	$(".user-btn").remove();
	$(".popover").hide();
	popover("#requestListener", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="requestTypes()">Next →</a>');
		count++;
	});
}

function requestTypes() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal3(1, 57.3, function() {
		arrowReveal2(2, 24.8, function() {
			$("#text1").fadeIn("1000" , function() {
				arrowReveal2(3, 24.8, function() {
					$("#text2").fadeIn("1000", function() {
						popover("#text1", 'bottom');
						typing('#popover' + count,  "Click Next", function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="text2()">Next →</a>');
							count++;
						});
					});
				});
			});
			
		});
	});
}

function text2() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#text2", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="contextListener()">Next →</a>');
		count++;
	});
}

function contextListener() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#contextListener", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="contextTypes()">Next →</a>');
		count++;
	});
}

function contextTypes() {
	$(".user-btn").remove();
	$(".popover").last().hide();
	arrowReveal3(4, 57.3, function() {
		arrowReveal1(5, 48.8, function() {
			$("#text3").fadeIn("1000", function() {
				arrowReveal1(6, 48.8, function() {
					$("#text4").fadeIn("1000", function() {
						popover("#text3", 'bottom');
						typing('#popover' + count,  "Click Next", function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="text4()">Next →</a>');
							count++;
						});
					});
				});
			});
		});
	});
}

function text4() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#text4", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionListener()">Next →</a>');
		count++;
	});
}

function sessionListener() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#sessionListenerName", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionTypes()">Next →</a>');
		count++;
	});
}

function sessionTypes() {
	$(".user-btn").remove();
	$(".popover").last().hide();
	arrowReveal3(7, 86.5, function() {
		arrowReveal2(8, 72.8, function() {
			$("#text5").fadeIn("1000", function() {
				arrowReveal2(9, 72.8, function() {
					$("#text6").fadeIn("1000", function() {
						arrowReveal2(10, 72.8, function() {
							$("#text7").fadeIn("1000", function() {
								arrowReveal2(11, 72.8, function() {
									$("#text8").fadeIn("1000", function() {
										popover("#text5", 'bottom');
										typing('#popover' + count,  "Click Next", function() {
											$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="text6()">Next →</a>');
											count++;
										});
									});
								});
							});
						});
					});
				});
			});			
		});
	});
}

function text6() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#text6", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="text7()">Next →</a>');
		count++;
	});
}

function text7() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#text7", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="text8()">Next →</a>');
		count++;
	});
}

function text8() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	popover("#text8", 'bottom');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
		count++;
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function restart() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	$("#restart").removeClass("opacity00");
	popover("#restart", 'right');
	typing('#popover' + count,  "Click to Restart", function() {
		
	});
}

function popover(selector, position) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'"></div>',
		container: '#mainDiv'
	});
	$(selector).popover('show');
}

function arrowReveal1(num, x, callBackFunction) {
	TweenMax.to("#arrow" + num, 1, {attr:{ x1 : x + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal2(num, x, callBackFunction) {
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal3(num, y, callBackFunction) {
	TweenMax.to("#arrow" + num, 1, {attr:{ y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}
