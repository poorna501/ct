var typingSpeed = 10;
var tl;
var count = 0;

var cookies = function() {
	tl = new TimelineLite();
	$("text").hide();
	popover("#heading", 'right');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="request1()">Next →</a>');
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

function request1() {
	$(".user-btn").remove();
	$(".popover").hide();
	TweenMax.to("#browserHeading", 1, {opacity: 1, onComplete: function() {
		$("#browserHeading").removeClass("opacity00");
		$("#browserIcon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#browserIcon", 'left');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginRequest()">Next →</a>');
				count++;
			});
		});
	}});
}

function loginRequest() {
	$(".user-btn").hide();
	$(".popover").hide();
	TweenMax.to("#servletEngineHeading", 1, {opacity: 1, onComplete: function() {
		$("#servletEngineHeading").removeClass("opacity00");
		$("#servletEngine").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			TweenMax.to("#webServerHeading", 1, {opacity: 1, onComplete: function() {
				$("#webServerHeading").removeClass("opacity00");
				$("#loginServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					arrowReveal2(1, 74, function() {
						$("#text1").show();
						popover("#loginServlet", 'left');
						typing('#popover' + count,  "Click Next", function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginResponse()">Next →</a>');
							count++;
						});
					});
				});
			}});
		});
	}});
}

function loginResponse() {
	$(".user-btn").remove();
	$(".popover").hide();
		
	var l1 = $("#cookie1").offset();
	$("#browserCookie").offset({"top": l1.top, "left": l1.left});
	
	TweenMax.to("#cookie1", 1, {opacity: 1, onComplete: function() {
		$("#cookie1").addClass("blinking-pink").removeClass("opacity00");
		arrowReveal2(2, 29.8, function() {
			$("#text2").show();
			$("#cookie1").css("opacity", 0);
			TweenMax.to("#browserCookie", 1.5, {opacity: 1, top: 0, left: 0, onComplete: function() {
				$("#browserCookie").removeClass("opacity00");
				popover("#browserIcon2", 'left');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="displayRequest()">Next →</a>');
					count++;
				});
			}});
		});
	}});
}

function displayRequest() {
	$(".user-btn").remove();
	$(".popover").hide();
	
	var l1 = $("#browserCookie").offset();
	$("#cookie2").offset({"top": l1.top, "left": l1.left});
	
	$("#displayServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		arrowReveal1(3, 74, 45.3, function() {
			$("#text3").show();
			TweenMax.to("#cookie2", 1.5, {opacity: 1, top: 0, left: 0, onComplete: function() {
				popover("#displayServlet", 'left');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="displayResponse()">Next →</a>');
					count++;
				});
			}});
		});
	});
}

function displayResponse() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(4, 29.8, 44, function() {
		$("#text4").show();
		popover("#browserIcon3", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="cartRequest()">Next →</a>');
			count++;
		});
	});
}

function cartRequest() {
	$(".user-btn").remove();
	$(".popover").hide();
	
	var l1 = $("#browserCookie").offset();
	$("#cookie3").offset({"top": l1.top, "left": l1.left});
	
	$("#cartServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		arrowReveal1(5, 74, 64.6, function() {
			$("#text5").show();
			TweenMax.to("#cookie3", 1.5, {opacity: 1, top: 0, left: 0, onComplete: function() {
				popover("#cartServlet", 'left');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="cartResponse()">Next →</a>');
					count++;
				});
			}});
		});
	});
}

function cartResponse() {
	$(".user-btn").remove();
	$(".popover").hide();	
	arrowReveal1(6, 29.8, 56, function() {
		$("#text6").show();
		popover("#browserIcon4", 'left');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
			count++;
		});
	});
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
