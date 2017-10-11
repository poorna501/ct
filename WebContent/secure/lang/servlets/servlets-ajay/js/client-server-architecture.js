var typingSpeed = 10;
var tl;
var count = 0;

var clientServer = function () {
	tl = new TimelineLite();
	$("text").hide();
	
	$("#browserText").on("keydown keyup mouseup mousedown", function(e) {
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46) {
	   			return true;	
			}
  			e.preventDefault();
	 	} else {
	 		if(e.which == 13 || e.which == 222) {
	 			$(".user-btn").click();	
			}
	 	}
	});
	
	$(".store-input").on("keydown keyup mouseup mousedown", function(e) {
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46) {
	   			return true;	
			}
  			e.preventDefault();
	 	} else {
	 		if(e.which == 13 || e.which == 222) {
	 			$(".go-btn").click();	
			}
	 	}
	});
	
	popover("#heading", 'right');
	typing('#popover' + count,  "Client Server Architecture is a Client/server architecture is a computing model in which the server stores, delivers and manages the data to be sent to the client when requested. ", function() { 
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="fileStore()">Next →</a>');
		count++;
	});
	
	$("#restart").click(function() {
		location.reload();
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function arrowReveal(num, x, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");  
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x +"%", y2 : y + "%"}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal1(num, y, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");  
	TweenMax.to("#arrow" + num, 1, {attr:{ y2 : y +"%" }, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowReveal2(num, x, callBackFunction) {
	$("#arrow" + num).css("marker-end", "url(#myMarker)");  
	TweenMax.to("#arrow" + num, 1, {attr:{ x2 : x +"%" }, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fileStore() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#textDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$("#fileSystem").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			TweenMax.to("#fileSystemText", 1, {opacity: 1, onComplete: function() {
				$("#fileSystemText").removeClass("opacity00");
				$("#file2").removeClass("opacity00").css("opacity", 1);
				TweenMax.from("#file2", 1, {opacity: 1, top: -120, onComplete: function() {
					$("#file1").removeClass("opacity00").css("opacity", 1);
					TweenMax.from("#file1", 1, {opacity: 1, top: -120, onComplete: function() {
						$("#storeInput1").prop('disabled', false);
						$("#storeInput1").focus();
						popover("#textFields", 'bottom');
						typing('#popover' + count,  "Enter text in both fields and click on Go button.", function() { 
							count++;
						});
					}});
				}});
			}});
		});
	});
}

function browser() {
	$(".user-btn").remove();
	$(".popover").hide();
	TweenMax.to(".browser-reveal", 1, {opacity:1, onComplete: function() {
		$(".browser-reveal").removeClass("opacity00");
		popover("#browserIcon1", 'left');
		typing('#popover' + count,  "At the client computer(which is in some other place in the world), a user wants to view the contents on abc.html or 123.html.He clicks abc.html/123.html in the browser window.", function() { 
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="alertMsg()">Next →</a>');
			$("#browserText").focus();
			$("#browserText").on("keydown keyup mouseup mousedown", function(e) {
				if ($("#browserText").val() == "abc.html" || $("#browserText").val() == "123.html") {
					$(".user-btn").remove();
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="internet()">Next →</a>');
				} else {
					$(".user-btn").remove();
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="alertMsg()">Next →</a>');
				}
			});
		});
	}});
}

function internet() {
	count++;
	$("#browserText").prop('disabled', true);
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal2(1, 46.1, function() {
		$("#cloudIcon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			TweenMax.to("#cloudText", 1, {opacity: 1, onComplete: function() {
				$("#cloudText").removeClass("opacity00");
				popover("#cloudIcon", 'left');
				typing('#popover' + count,  "This request of asking the required html file travels over the internet to the destination computer(here the server using the ip address of the server)", function() { 
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="server()">Next →</a>');
					count++;
				});
			}});
		});
	});
}

function server() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal2(2, 71.6, function() {
		$("#serverIcon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			TweenMax.to("#serverText", 1, {opacity: 1, onComplete: function() {
				$("#serverText").removeClass("opacity00");
				popover("#serverIcon", 'left');
				typing('#popover' + count,  "This request reaches the Server which then reads the request and talks to the underlying file system ", function() { 
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="fileSystem()">Next →</a>');
					count++;
				});
			}});
		});
	});
}

function fileSystem() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(5, 38, function() {
		if ($("#browserText").val() == "abc.html") {
			$("#closeFolder1").remove();
			$("#fileStack1").append('<i class="fa fa-folder-open-o fa-2x" aria-hidden="true"></i>');
		} else {
			$("#closeFolder2").remove();
			$("#fileStack2").append('<i class="fa fa-folder-open-o fa-2x" aria-hidden="true"></i>');
		}
		
		popover("#file1", 'left');
		typing('#popover' + count,  "It picks up the required file, here abc/123.", function() {
			if ($("#browserText").val() == "abc.html") {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="fileResponse1()">Next →</a>');
			} else {
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="fileResponse2()">Next →</a>');
			}
			
			count++;
		});
	});
}

function fileResponse1() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(6, 18.3, function() {
		var l1 = $("#serverIcon").offset();
		var l2 = $("#filePage1").offset();

		var x = l1.top - l2.top;
		tl.to("#filePage1", 1, {opacity: 1, top: x});
		
		popover("#serverText", 'left');
		typing('#popover' + count,  "The picked up file is then added with the client address and is sent over the internet.", function() { 
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="httpResponse()">Next →</a>');
			count++;
		});
	});
}

function fileResponse2() {
	$(".user-btn").remove();
	$(".popover").hide();
	arrowReveal1(6, 18.3, function() {
		var l1 = $("#serverIcon").offset();
		var l2 = $("#filePage2").offset();

		var x = l1.top - l2.top;
		tl.to("#filePage2", 1, {opacity: 1, top: x});
		
		popover("#serverText", 'left');
		typing('#popover' + count,  "This picked up file is added information of the client address and sent over the internet to the requested client. ", function() { 
			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="httpResponse()">Next →</a>');
			count++;
		});
	});
}

function httpResponse() {
	$(".user-btn").remove();
	$(".popover").hide();
	
	arrowReveal2(4, 51, function() {
		if ($("#browserText").val() == "abc.html") {
			var l1 = $("#filePage1").offset();
		} else {
			var l1 = $("#filePage2").offset();
		}
		
		var l2 = $("#internetIcon").offset();

		var y = l1.left - l2.left;
		if ($("#browserText").val() == "abc.html") {
			tl.to("#filePage1", 1, {opacity: 1, left: -y, onComplete: function() {
				webPage();
			}});
		} else {
			tl.to("#filePage2", 1, {opacity: 1, left: -y, onComplete: function() {
				webPage();
			}});
		}
	});
	
}

function webPage() {
	arrowReveal2(3, 28.5, function() {
		var l1 = $("#internetIcon").offset();
		var l2 = $("#webPage").offset();

		var y = l1.left - l2.left;
		
		if ($("#browserText").val() == "abc.html") {
			tl.to("#filePage1", 1, {opacity: 1, left: -700, onComplete: function() {
				$("#filePage1").css("opacity", 0);
				$("#webPage").css("color", "green");
				$("#webPage").text($("#storeInput1").val());
				$("#webPage").css("opacity", 1);
				popover("#browserIcon2", 'left');
				typing('#popover' + count,  "The file once received by the client's browser opens it to be viewed by the user who requested it.", function() { 
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
					count++;
				});
			}});
		} else {
			tl.to("#filePage2", 1, {opacity: 1, left: -700, onComplete: function() {
				$("#filePage2").css("opacity", 0);
				$("#webPage").css("color", "red");
				$("#webPage").text($("#storeInput2").val());
				$("#webPage").css("opacity", 1);
				popover("#browserIcon2", 'left');
				typing('#popover' + count,  "The file once received by the client's browser opens it to be viewed by the user who requested it.", function() { 
					$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
					count++;
				});
			}});
		}
	});
}

function alertMsg() {
	$(".alertify-log-error").remove();
	alertify.error('Please type abc.html or 123.html', 1000);
}

function restart() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("#restart").removeClass("opacity00");
	popover("#restart", 'right');
	typing('#popover' + count,  "Click to restart", function() {
		
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

function storeFile1() {
	if( $("#storeInput1").val().length == 0 ) {
		$(".alertify-log-error").remove();
		alertify.error('Please enter some text', 1000);
	} else {
		$('#storeInput1').effect( "transfer", { to: $("#closeFolder1"), className: "ui-effects-transfer" }, 1000, function() {
			$("#storeInput1").prop("disabled", true);
			$("#storeInput2").prop("disabled", false);
			$(".go-btn").remove();
			$("#storeInput2").focus();
			$("#btnAppend").append('<button class="btn btn-success go-btn" type="button" onclick="storeFile2()">Go</button>');
		});
	}
}

function storeFile2() {
	if( $("#storeInput2").val().length == 0 ) {
		$(".alertify-log-error").remove();
		alertify.error('Please enter some text', 1000);
	} else {
		$("#storeInput2").prop("disabled", true);
		$(".go-btn").prop('disabled', true);
		$('#storeInput2').effect( "transfer", { to: $("#closeFolder2"), className: "ui-effects-transfer" }, 1000, function() {
			$("#textDiv").addClass("opacity00");
			$(".popover").hide();
			popover("#fileSystem", 'left');
			typing('#popover' + count,  "Consider a database/file system that resides at the server(is also a computer).It contains two files abc.html,123.html", function() { 
				$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="browser()">Next →</a>');
				count++;
			});
		});
	}
}

	