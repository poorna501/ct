var typingSpeed = 10;
var tl;
var count = 0;

var httpSession = function() {
	tl = new TimelineLite();
	$("text").hide();
	popover("#heading", 'right');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client1()">Next →</a>');
		count++;
	});
	
	$("#restart").click(function() {
		location.reload();
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

function client1() {
	$(".user-btn").remove();
	$(".popover").hide();
	TweenMax.to("#client1Heading", 1, {opacity: 1, onComplete: function() {
		$("#client1Icon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#client1Icon", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client1Request1()">Next →</a>');
				count++;
			});
		});
	}});
}

function client1Request1() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#servletEngine").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$("#loginServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			arrowReveal1(1, 64, 41.5, function() {
				$("#text1").show();
				popover("#servletEngine", 'left');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionId1()">Next →</a>');
					count++;
				});
			});
		});
	});
}

function sessionId1() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(9, 69.5, 29.6, function() {
		$("#sessionId2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#webServerText", 'left');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client1Response1()">Next →</a>');
				count++;
			});
		});
	});
}

function client1Response1() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(2, 42.7, 18.5, function() {
		$("#text2").show();
		popover("#tootipText", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client1Request2()">Next →</a>');
			count++;
		});
	});
}

function client1Request2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#displayServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		arrowReveal1(3, 65, 67, function() {
			$("#text3").show();
			popover("#client1Heading", 'left');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionId1Arrow()">Next →</a>');
				count++;
			});
		});
	});
}

function sessionId1Arrow() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(10, 70, 70, function() {
		popover("#displayServlet", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client1Response2()">Next →</a>');
			count++;
		});
	});
}

function client1Response2() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(4, 42.7, 32.5, function() {
		$("#text4").show();
		popover("#displayPopover", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client2()">Next →</a>');
			count++;
		});
	});
}

function client2() {
	$(".line").fadeOut("500");
	$(".svg-text").fadeOut("500");
	$(".user-btn").remove();
	$(".popover").hide();
	TweenMax.to("#client2Heading", 1, {opacity: 1, onComplete: function() {
		$("#client2Icon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#client2Icon", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client2Request1()">Next →</a>');
				count++;
			});
		});
	}});
}

function client2Request1() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow5").show();
	arrowReveal1(5, 64, 41.5, function() {
		$("#text5").show();
		popover("#loginServlet", 'right');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionId2()">Next →</a>');
			count++;
		});
	});
}

function sessionId2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow11").show();
	arrowReveal1(11, 65, 29, function() {
		$("#sessionId1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#loginPopover", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client2Response1()">Next →</a>');
				count++;
			});
		});
	});
}

function client2Response1() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow6").show();
	arrowReveal1(6, 42.7, 65.5, function() {
		$("#text6").show();
		popover("#webServerPopover", 'right');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client2Request2()">Next →</a>');
			count++;
		});
	});
}

function client2Request2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow7").show();
	arrowReveal1(7, 63.5, 72.3, function() {
		$("#text7").show();
		popover("#client2Popover1", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionId2Arrow()">Next →</a>');
			count++;
		});
	});
}

function sessionId2Arrow() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow12").show();
	arrowReveal1(12, 64.2, 68.5, function() {
		popover("#client2Popover2", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client2Response2()">Next →</a>');
			count++;
		});
	});
}

function client2Response2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow8").show();
	arrowReveal1(8, 42.7, 77.5, function() {
		$("#text8").show();
		popover("#client2Heading", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
			count++;
		});
	});
}

function restart() {
	$(".user-btn").remove();
	$(".popover").hide();
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

function arrowReveal1(num, x, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");  
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x +"%", y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal2(num, x, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal3(num, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, {attr:{ y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

