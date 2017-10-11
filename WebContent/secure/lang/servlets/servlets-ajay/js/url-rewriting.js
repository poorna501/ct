var typingSpeed = 10;
var count = 0;

var urlRewriting = function() {
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

function client1() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#monitor1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		popover("#loginHeading1", 'right');
		typing('#popover' + count,  "Please enter user name as user1 and password as pwd1 <br> " +
				"<span id='errMsg' style='font-weight: bold; font-family: monospace; color: red'></span>", function() {
			
		});
	});
}

function verifyUser1() {
	if( ($("#userName1").val() == "user1") && ($("#password1").val() == "pwd1") ) {
		$("#errMsg").empty();
		$(".input1").prop('disabled', true);
		$("#loginBtn1").prop('disabled', true);
		$("#loginBtn1").css("pointer-events", "none");
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="server()">Next →</a>');
	} else {
		$("#errMsg").empty();
		$("#errMsg").text("Please enter correct user name or password.");
	}
}

function server() {
	count++;
	$(".user-btn").remove();
	$(".popover").hide();
	TweenMax.to("#serverBox", 1, {opacity: 1, onComplete: function() {
		TweenMax.to(".web-container", 1, {opacity: 1, onComplete: function() {
			popover("#serverHeading", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="httpRequest()">Next →</a>');
				count++;
			});
		}});
	}});
}

function httpRequest() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#cookie1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		arrowReveal1(1, 50, function() {
			popover("#cookie1", 'bottom');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="httpResponse()">Next →</a>');
				count++;
			});
		});
	});
}

function httpResponse() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#cookie2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		arrowReveal1(2, 25.5, function() {
			popover("#cookie2", 'bottom');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="monitor2()">Next →</a>');
				count++;
			});
		});
	});
}

function verifyUser2() {
	if( ($("#userName2").val() == "user2") && ($("#password2").val() == "pwd2") ) {
		$("#errMsg").empty();
		$(".input2").prop('disabled', true);
		$("#loginBtn2").prop('disabled', true);
		$("#loginBtn2").css("pointer-events", "none");
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="webContainer2()">Next →</a>');
	} else {
		$("#errMsg").empty();
		$("#errMsg").text("Please enter correct user name or password.");
	}
}

function monitor2() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#monitor2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		popover("#loginHeading2", 'right');
		typing('#popover' + count,  "Please enter user name as user2 and password as pwd2 <br> " +
				"<span id='errMsg' style='font-weight: bold; font-family: monospace; color: red'></span>", function() {
		});
	});
}

function webContainer2() {
	count++;
	$(".user-btn").remove();
	$(".popover").hide();
	TweenMax.to(".web-container2", 1, {opacity: 1, onComplete: function() {
		popover("#webContainer2", 'right');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="httpRequest()">Next →</a>');
			count++;
		});
	}});
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
	$("#popover" + count).addClass("opacity00")
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
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, { attr:{ x2 : x + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal2(num, y, callBackFuncton) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, { attr:{ y2 : y + "%"}, onComplete: function() {
		if(typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal3(num, x, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, { attr:{ x2 : x + "%", y2 : y + "%"}, onComplete: function() {
		if(typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}
