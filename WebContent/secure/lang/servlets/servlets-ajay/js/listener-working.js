var typingSpeed = 10;
var count = 0;

var listener = function() {
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
		typing('#popover' + count,  "Please enter user name as user1 and password as pwd1 <br> <span id='errMsg' style='font-weight: bold; font-family: monospace; color: red'></span>", function() {
			
		});
	});
}

function verifyUser1() {
	if( ($("#userName1").val() == "user1") && ($("#password1").val() == "pwd1") ) {
		$("#errMsg").empty();
		$(".input1").prop('disabled', true);
		$("#loginBtn1").prop('disabled', true);
		$("#loginBtn1").css("pointer-events", "none");
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginServlet()">Next →</a>');
	} else {
		$("#errMsg").empty();
		$("#errMsg").text("Please enter correct user name or password.");
	}
}

function loginServlet() {
	count++;
	$(".user-btn").remove();
	$(".popover").hide();
	$("#servletEngine").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		arrowReveal1(1, 35.5, function() {
			$("#loginServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				var l1 = $("#thread1").offset();
				$("#usedThread1").offset({"top": l1.top, "left": l1.left});
				TweenMax.to(".free-thread-pool", 1, { opacity:1, onComplete: function() { 
					
				}});
				
				TweenMax.to(".used-thread-pool", 1, { opacity:1, onComplete: function() {
					$("#thread1").hide();
					TweenMax.to("#usedThread1", 1, { opacity:1, top:0, left: 0, onComplete: function() {
						popover("#loginServlet", 'right');
						typing('#popover' + count,  "Click Next", function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionObject()">Next →</a>');
							count++;
						});
					}});
				}});
			});
		});
	});
}


function sessionObject() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(3, 52.9, function() {
		$("#sessionObj1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#sessionObj1", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionListener()">Next →</a>');
				count++;
			});
		});
	});
}

function sessionListener() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(2, 25.6, function() {
		$("#thread1").show();
		$("#thread1").css("opacity", 0);
		var l1 = $("#usedThread1").offset();
		$("#thread1").offset({"top": l1.top, "left": l1.left});
		$("#usedThread1").hide();
		TweenMax.to("#thread1", 1, { opacity:1, top:0, left: 0, onComplete: function() {
			$("#httpSessionListener").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				arrowReveal2(4, 63.3, function() {
					$("#sessionListener").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						popover("#sessionListener", 'right');
						typing('#popover' + count,  "Click Next", function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="threadPool()">Next →</a>');
							count++;
						});
					});
				});
			});
		}});
	});
}

function threadPool() {
	$(".user-btn").remove();
	$(".popover").hide();
	var l1 = $("#thread2").offset();
	$("#usedThread2").offset({"top": l1.top, "left": l1.left});
	TweenMax.to(".free-thread-pool", 1, { opacity:1, onComplete: function() {
		
	}});
	
	TweenMax.to(".used-thread-pool", 1, { opacity:1, onComplete: function() {
		$("#thread2").hide();
		TweenMax.to("#usedThread2", 1, { opacity:1, top:0, left: 0, onComplete: function() {
			arrowReveal1(6, 72, function() {
				$("#arrow6").css("marker-end", "");
				arrowReveal2(7, 68.3, function() {
					$("#arrow7").css("marker-end", "");
					arrowReveal1(8, 67, function() {
						var l2 = $("#sessionListener").offset();
						$("#table").offset({"top": l2.top, "left": l2.left});
						var currentTime = new Date().toLocaleTimeString();
						$("#td2").text(currentTime);
						$("#td3").text(currentTime);
						TweenMax.to("#table", 1, { opacity:1, top:0, left: 0, onComplete: function() {
							popover("#table", 'right');
							typing('#popover' + count,  "Click Next", function() {
								$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="client2()">Next →</a>');
								count++;
							});
						}});
					});
				});
			});
		}});
	}});
}

function client2() {
	$("#arrow6").hide();
	$("#arrow7").hide();
	$("#arrow8").hide();
	$("#thread2").show();
	$("#usedThread2").css("opacity", 0);
	$("#usedThread1").show();
	$("#usedThread1").css("opacity", 0);
	
	$(".user-btn").remove();
	$(".popover").hide();
	$("#monitor2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		popover("#loginHeading2", 'right');
		typing('#popover' + count,  "Please enter user name as user2 and password as pwd2 <br> <span id='errMsg2' style='font-weight: bold; font-family: monospace; color: red'></span>", function() {
			
		});
	});
}

function verifyUser2() {
	if( ($("#userName2").val() == "user2") && ($("#password2").val() == "pwd2") ) {
		$("#errMsg2").empty();
		$(".input2").prop('disabled', true);
		$("#loginBtn2").prop('disabled', true);
		$("#loginBtn2").css("pointer-events", "none");
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="loginServlet2()">Next →</a>');
	} else {
		$("#errMsg2").empty();
		$("#errMsg2").text("Please enter correct user name or password.");
	}
}

function loginServlet2() {
	count++;
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal3(9, 37.5, 44.3, function() {
		var l1 = $("#thread1").offset();
		$("#usedThread1").offset({"top": l1.top, "left": l1.left});
		TweenMax.to(".free-thread-pool", 1, { opacity:1, onComplete: function() { 
			
		}});
		
		TweenMax.to(".used-thread-pool", 1, { opacity:1, onComplete: function() {
			$("#thread1").hide();
			TweenMax.to("#usedThread1", 1, { opacity:1, top:0, left: 0, onComplete: function() {
				popover("#loginServletName", 'right');
				typing('#popover' + count,  "Click Next", function() {
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="sessionObject2()">Next →</a>');
					count++;
				});
			}});
		}});
	});
}

function sessionObject2() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal3(14, 48.9, 46.3, function() {
		$("#sessionObj2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			popover("#sessionObj2", 'right');
			typing('#popover' + count,  "Click Next", function() {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="threadPool2()">Next →</a>');
				count++;
			});
		});
	});
}

function threadPool2() {
	$(".user-btn").remove();
	$(".popover").hide();
	
	$("#thread1").show();
	$("#thread1").css("opacity", 0);
	var l1 = $("#usedThread1").offset();
	$("#thread1").offset({"top": l1.top, "left": l1.left});
	$("#usedThread1").hide();
	TweenMax.to("#thread1", 1, { opacity:1, top:0, left: 0, onComplete: function() {
		var l2 = $("#thread2").offset();
		$("#usedThread2").offset({"top": l2.top, "left": l2.left});
		arrowReveal3(10, 25.7, 74.3, function() {
			$("#thread2").hide();
			TweenMax.to("#usedThread2", 1, { opacity:1, top:0, left: 0, onComplete: function() {
				arrowReveal1(11, 72, function() {
					$("#arrow11").css("marker-end", "");
					arrowReveal2(12, 68.3, function() {
						$("#arrow12").css("marker-end", "");
						arrowReveal1(13, 67, function() {
							var currentTime = new Date().toLocaleTimeString();
							$("#table").append("<tr id='tr3'> <td id='td4'>2</td> <td id='td5'>"+currentTime+"</td> <td id='td6'>"+currentTime+"</td> </tr>");
							popover("#tr2", 'right');
							typing('#popover' + count,  "Click Next", function() {
								$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
								count++;
							});
						});
					});
				});
			}});
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

function arrowReveal2(num, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, {attr:{ y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal3(num, x, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x + "%", y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction == "function") {
			callBackFunction();
		}
	}});
}

