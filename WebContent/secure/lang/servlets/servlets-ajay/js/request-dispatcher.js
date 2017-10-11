var typingSpeed = 10;
var tl;
var count = 0;

var requestDispatcher = function() {
	tl = new TimelineLite();
	$("text").hide();
	popover("#heading", 'right');
	typing('#popover' + count,  "Click Next", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginPage()">Next →</a>');
		count++;
	});
	
	$("#restart").click(function() {
		location.reload();
	});
}

function loginPage() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#monitor").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		popover("#loginHeading", 'right');
		typing('#popover' + count,  "Please enter user name as user1 and password as pwd1 <br> <span id='errMsg' style='font-weight: bold; font-family: monospace; color: red'></span>", function() {
			
		});
	});
}

function verifyUser() {
	if( ( $("#userName").val() == "user1" ) && ( $("#password").val() == "pwd1" ) ) {
		$("#errMsg").empty();
		$("#loginError").addClass("opacity00");
		$("input").prop('disabled', true);
		$(".btn-primary").prop('disabled', true);
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginServlet()">Next →</a>');
	} else {
		$("#errMsg").empty();
		$("#errMsg").text("Please enter correct user name or password.")
	}
}

function loginServlet() {
	$(".user-btn").remove();
	$(".popover").hide();
	count++;
	arrowReveal1(1, 42.8, function() {
		$("#loginServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#loginServlet", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="rDispatcher()">Next →</a>');
				count++;
			});
		});
	});
}

function rDispatcher() {
	$(".user-btn").remove();
	$(".popover").hide();
	var l1 = $("#loginServlet").offset();
	$("#requestDispatcher").offset({"top": l1.top, "left": l1.left});
	TweenMax.to("#requestDispatcher", 1.5, { opacity:1, top:0, left: 0, onComplete: function() {
		$("#requestDispatcher").removeClass("opacity00");
		arrowReveal2(2, 49.5, function() {
			popover("#requestDispatcher", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="welcomeServlet()">Next →</a>');
				count++;
			});
		});
	}});
}

function welcomeServlet() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#welcomeServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		var l1 = $("#requestDispatcher").offset();
		$("#object1").offset({"top": l1.top, "left": l1.left});
		
		$("#arrow5").css("marker-end", "url(#myMarker)");
		TweenMax.to("#arrow5", 1, {attr:{ x2 : "57%"}, onComplete: function() {
			$("#text1").show();
			$("#arrow5").css("marker-end", ""); 
			$("#arrow6").css("marker-end", "url(#myMarker)");
			TweenMax.to("#arrow6", 1, {attr:{ y2 : "81%"}, onComplete: function() {
				popover("#welcomeServlet", 'right');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="welcomePage()">Next →</a>');
					count++;
				});
			}});
		}});
		
		TweenMax.to("#object1", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
			TweenMax.to("#object1", 1, {opacity: 1, top: 90, onComplete: function() {
				$("#object1").css("opacity", 0);
			}});
		}});
	});
}

function welcomePage() {
	$(".user-btn").remove();
	$(".popover").hide();
	var l1 = $("#welcomeServlet").offset();
	$("#object2").offset({"top": l1.top, "left": l1.left});
	
	$("#arrow7").css("marker-end", "url(#myMarker2)");
	TweenMax.to("#arrow7", 1, {attr:{ x2 : "16%"}, onComplete: function() {
		$("#arrow7").css("marker-end", ""); 
		$("#arrow8").css("marker-end", "url(#myMarker2)");
		TweenMax.to("#arrow8", 1, {attr:{ y2 : "69.5%"}, onComplete: function() {
			$("#loginPage").addClass("hide");
			$("#welcomePage").removeClass("hide");
			$("#pageWindow").addClass("padding00");
			popover("#monitor", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="errorLogin()">Next →</a>');
				count++;
			});
		}});
	}});
	
	TweenMax.to("#object2", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
		TweenMax.to("#object2", 1, {opacity: 1, top: -65, onComplete: function() {
			$("#object2").css("opacity", 0);
		}});
	}});
}

function errorLogin() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#arrow1").hide();
	$("#arrow2").hide();
	$("#arrow7").hide();
	$("#arrow8").hide();
	$("input").prop('disabled', false);
	$(".btn-primary").prop('disabled', false);
	$("input").val('');
	$("#welcomePage").addClass("hide");
	$("#pageWindow").removeClass("padding00");
	$("#loginPage").removeClass("hide");
	popover("#btnAppend", 'right');
	typing('#popover' + count,  "Now enter wrong password or user name <br> <span id='errMsg2' style='font-weight: bold; font-family: monospace; color: red'></span>", function() {
		$("#loginBtn").remove();
		$("#btnAppend").append('<a id="loginBtn" class="btn btn-primary" onclick="verifyUser2()">Sign In</a>');
	});
}

function verifyUser2() {
	$(".user-btn").remove();
	//$(".popover").hide();
	if( ( ($("#userName").val() != "") && ($("#password").val() != "") ) && ( ( $("#password").val() != "pwd1") && ($("#userName").val() != "user1") ) ) {
		$("#errMsg2").empty();
		$("input").prop('disabled', true);
		$(".btn-primary").prop('disabled', true);
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginServlet2()">Next →</a>');
	} else if ( ( $("#userName").val() == "user1" ) && ( $("#password").val() == "pwd1" ) ) {
		$("#errMsg2").empty();
		$("#errMsg2").text("Please enter wrong password for user name user1.");
	} else if ( ( $("#userName").val() == "") || ($("#password").val() == "") ) {
		$("#errMsg2").empty();
		$("#errMsg2").text("Please enter user name or password.");
	}
}

function loginServlet2() {
	$(".user-btn").remove();
	$(".popover").hide();
	count++;
	arrowReveal1(11, 42.8, function() {
		popover("#loginServletName", 'right');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="rDispatcher2()">Next →</a>');
			count++;
		});
	});
}

function rDispatcher2() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal2(12, 49.5, function() {
		popover("#rdName", 'right');
		typing('#popover' + count,  "Click Next", function() {
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginForm()">Next →</a>');
			count++;
		});
	});
}

function loginForm() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#loginForm").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		var l1 = $("#requestDispatcher").offset();
		$("#object3").offset({"top": l1.top, "left": l1.left});
		$("#arrow3").css("marker-end", "url(#myMarker)");
		TweenMax.to("#arrow3", 1, {attr:{ x2 : "39%"}, onComplete: function() {
			$("#text2").show();
			$("#arrow3").css("marker-end", ""); 
			$("#arrow4").css("marker-end", "url(#myMarker)");
			TweenMax.to("#arrow4", 1, {attr:{ y2 : "81%"}, onComplete: function() {
				popover("#loginForm", 'right');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="errorLoginPage()">Next →</a>');
					count++;
				});
			}});
		}});
		
		TweenMax.to("#object3", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
			TweenMax.to("#object3", 1, {opacity: 1, top: 65, onComplete: function() {
				$("#object3").css("opacity", 0);
			}});
		}});
	});
}

function errorLoginPage() {
	$(".user-btn").remove();
	$(".popover").hide();
	var l1 = $("#loginForm").offset();
	$("#object2").offset({"top": l1.top, "left": l1.left});
	
	$("#arrow9").css("marker-end", "url(#myMarker2)");
	TweenMax.to("#arrow9", 1, {attr:{ x2 : "16%"}, onComplete: function() {
		$("#arrow9").css("marker-end", ""); 
		$("#arrow10").css("marker-end", "url(#myMarker2)");
		TweenMax.to("#arrow10", 1, {attr:{ y2 : "69.5%"}, onComplete: function() {
			$("#loginError").addClass("blinking-yellow");
			$("#loginError").removeClass("opacity00");
			popover("#pageWindow", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
				count++;
			});
		}});
	}});
	
	TweenMax.to("#object2", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
		TweenMax.to("#object2", 1, {opacity: 1, top: -65, onComplete: function() {
			$("#object2").css("opacity", 0);
		}});
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
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal2(num, y, callBackFunction) {
	if( (num == 2) || (num == 12)) {
		$("#arrow" + num).css("marker-end", "url(#myMarker3)");
	} else {
		$("#arrow" + num).css("marker-end", "url(#myMarker)");
	}
	TweenMax.to("#arrow" + num, 1, {attr:{ y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}
