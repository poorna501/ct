var typingSpeed = 10;
var tl;
var fileText;
var count = 0;

var tcpIpProtocalReady = function() {
	tl = new TimelineLite();
	$("text").hide();
	
	$("#givenText").on("keydown keyup mouseup mousedown", function(e) {
		var text = "Please type some text (text should be equal to 9 characters) in the input box and click on GO button in the application layer. For ex: How are you. Lets consider this data needs to be sent to some friend at computer2.";
		$("#popover" + count).empty();
		$("#popover" + count).text(text);
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}	
		if ($(this).text().length > max) {
			if(e.which == 8 || e.which == 46){
	   			return true;	
			}
  			e.preventDefault();
	 	} else {
	 		if(e.which == 13 || e.which == 222){
	 			$(".btn-success").click();	
			}
	 	}
	});
	
	popover("#heading", 'right');
	typing('#popover' + count,  "TCP/IP architecture consists of 4 layers which are used to transfer information from one computer to another.Let us understand how this information is transferred.", function() {
		$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="textTransform()">Next →</a>');
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

function textTransform() {
	$(".user-btn").remove();
	$(".popover").hide();
	$("input").prop('disabled', true);
	TweenMax.to("#clientHeading1", 1, {opacity:1, onComplete: function() {
		$("#clientHeading1").removeClass("opacity00");
		$("#appLayerDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#appLayerText").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				$("#appFile").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(".btn-success").removeClass("opacity00");
					popover("#clientHeading1", 'right');
					typing('#popover' + count,  "Please type some text (text should be equal to 9 characters) in the input box " 
							+ " and click on GO button in the application layer. For ex: How are you. Lets consider this data " 
							+ " needs to be sent to some friend at computer2.", function() { 
						$("input").prop('disabled', false);
						$("#givenText").addClass("blinking-orange");
						$("input").focus();
					});
				});
			});
		});
	}});
}

function packetDivision() {
	$(".btn-success").prop('disabled', true);
	count++;
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	$(".user-btn").remove();
	//$(".popover").hide();
	
	fileText = $("#givenText").val();
	$("#packet1").text(fileText.substring(0, 3));
	$("#packet2").text(fileText.substring(3, 6));
	$("#packet3").text(fileText.substring(6));
	var l1 = $("#givenText").offset();
	
	$("#packet1").offset({"top": l1.top, "left": l1.left});
	$("#packet2").offset({"top": l1.top, "left": l1.left});
	$("#packet3").offset({"top": l1.top, "left": l1.left});
	
	$(".svg-css").css("z-index", "100000000");
	$("input").prop('disabled', true);
	arrowReveal(1, 25.4, function() {
		$("#transportLayerDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#transportLayerText").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				popover("#transportLayerDiv", 'right');
				typing('#popover' + count,  '<div style="font-size: 10px; color: black;" class="col-xs-3 padding00 "> ' +
						' <div class="th-bgclr col-xs-5 border text-center padding00 blinking-yellow" style="height: 30px;" id="tooltipTh1"> ' +
				        ' <div class="col-xs-12 padding00"><span id="tHeader">TH</span> </div> ' +
						' <div class="col-xs-12 padding00"><span id="tSequence">1</span> </div> ' +
						'</div>' +
						' <div style="height: 30px; line-height: 30px;" class="col-xs-6 text-center padding00 packet-border border data-bgclr blinking-yellow" id="tooltipTh2"> ' +
						' <span class="" id="thText">'+$("#givenText").val().substring(0,3)+'</span> ' +
						' </div> ' +
						' </div> This data is broken up into smaller chunks/packets and a sequence is added as header to these packets.These sequence numbers are added so that the packets can be reordered at the destination. ', function() { 
					
					TweenMax.to(".packet-move", 1, {opacity:1, top:0, left: 0, onComplete: function() {
						$(".packet-border").addClass("border data-bgclr").removeClass("opacity00");
						$("#tHeader1").removeClass("opacity00").css("opacity", 1);
						TweenMax.from("#tHeader1", 1, {opacity:1, left: -20, onComplete: function() {
							$("#tHeader2").removeClass("opacity00").css("opacity", 1);
							TweenMax.from("#tHeader2", 1, {opacity:1, left: -20, onComplete: function() {
								$("#tHeader3").removeClass("opacity00").css("opacity", 1);
								TweenMax.from("#tHeader3", 1, {opacity:1, left: -20, onComplete: function() {
									$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="networkLayer()">Next →</a>');
									count++;
								}});
							}});
						}});
					}});
				});
			});
		});
	});
}

function networkLayer() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	$("#networkPacket1").text(fileText.substring(0, 3));
	$("#networkPacket2").text(fileText.substring(3, 6));
	$("#networkPacket3").text(fileText.substring(6));
	
	var l1 = $("#packetDiv1").offset();
	var l2 = $("#packetDiv2").offset();
	var l3 = $("#packetDiv3").offset();
	var l4 = $("#tHeader1").offset();
	var l5 = $("#tHeader2").offset();
	var l6 = $("#tHeader3").offset();
	
	$("#networkPacketDiv1").offset({"top": l1.top, "left": l1.left});
	$("#networkPacketDiv2").offset({"top": l2.top, "left": l2.left});
	$("#networkPacketDiv3").offset({"top": l3.top, "left": l3.left});
	$("#th1").offset({"top": l4.top, "left": l4.left});
	$("#th2").offset({"top": l5.top, "left": l5.left});
	$("#th3").offset({"top": l6.top, "left": l6.left});
	
	arrowReveal(2, 47.5, function() {
		$("#networkLayerDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#networkLayerText").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				popover("#networkLayerDiv", 'right');
				typing('#popover' + count,  '<div style="color: black; font-size: 10px;" class="col-xs-5 padding00">' +
						'<div class="nh-bgclr col-xs-5 border text-center padding00 blinking-yellow" style="height: 30px; color: black; font-size: 10px;" id="tooltipNh"> <div class="col-xs-12 padding00"><span id="tooltipNhHeader">NH</span> </div><div class="col-xs-12 padding00"><span style="font-size: 7px;" id="tooltipNhSequence">11.44.12.3</span> </div></div>' +
						'<div style="height: 30px;" class="th-bgclr col-xs-3 border network-border text-center padding00">' +
							'<div class="col-xs-12 padding00"><span>TH</span></div>' + 
							'<div class="col-xs-12 padding00"><span>1</span></div>' +
						'</div>' +
						  '<div style="height: 30px; line-height: 30px;" class="col-xs-4 data-bgclr network-border border text-center padding00">' +
								'<span class="" id="networkPacket1">'+$("#givenText").val().substring(0,3)+'</span>' +
							'</div> </div> '+ ' In the Network Layer these packets are added with information like the destination ip address, ' 
											+ ' shortest route for that packet to travel to reach its destination in this layer.', function() {
												
					TweenMax.to(".network-border", 1, {opacity:1, top:0, left: 0, onComplete: function() {
						$("#nh1").removeClass("opacity00").css("opacity", 1);
						TweenMax.from("#nh1", 1, {opacity:1, left: -20, onComplete: function() {
							$("#nh2").removeClass("opacity00").css("opacity", 1);
							TweenMax.from("#nh2", 1, {opacity:1, left: -20, onComplete: function() {
								$("#nh3").removeClass("opacity00").css("opacity", 1);
								TweenMax.from("#nh3", 1, {opacity:1, left: -20, onComplete: function() {
									$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="dataLinkLayer()">Next →</a>');
									count++;
								}});
							}});
						}});
					}});
				});
			});
		});
	});
}

function dataLinkLayer() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	$("#dataPacket1").text(fileText.substring(0, 3));
	$("#dataPacket2").text(fileText.substring(3, 6));
	$("#dataPacket3").text(fileText.substring(6));
	
	var l1 = $("#networkPacketDiv1").offset();
	var l2 = $("#networkPacketDiv2").offset();
	var l3 = $("#networkPacketDiv3").offset();
	var l4 = $("#th1").offset();
	var l5 = $("#th2").offset();
	var l6 = $("#th3").offset();
	var l7 = $("#nh1").offset();
	var l8 = $("#nh2").offset();
	var l9 = $("#nh3").offset();
	
	$("#dataPacketDiv1").offset({"top": l1.top, "left": l1.left});
	$("#dataPacketDiv2").offset({"top": l2.top, "left": l2.left});
	$("#dataPacketDiv3").offset({"top": l3.top, "left": l3.left});
	$("#dth1").offset({"top": l4.top, "left": l4.left});
	$("#dth2").offset({"top": l5.top, "left": l5.left});
	$("#dth3").offset({"top": l6.top, "left": l6.left});
	$("#dnh1").offset({"top": l7.top, "left": l7.left});
	$("#dnh2").offset({"top": l8.top, "left": l8.left});
	$("#dnh3").offset({"top": l9.top, "left": l9.left});
	
	arrowReveal(3, 70, function() {
		$("#dataLayerDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#dataLayerText").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				
				popover("#dataLayerDiv", 'right');
				typing('#popover' + count,  '<div style="font-size: 10px; color: black" class="col-xs-6 padding00"> ' +
	  					' <div class="dh-bgclr col-xs-2 border text-center padding00 blinking-yellow" style="height: 30px;"> ' +
						' <div class="col-xs-12 padding00"><span>DH</span> </div> ' +
						' <div class="col-xs-12 padding00"><span>1</span> </div> ' +
						' </div> ' +

						' <div class="nh-bgclr col-xs-2 border data-border text-center padding00" style="height: 30px; line-height: 30px;"> '
				        + ' <div class="col-xs-12 padding00"><span>NH</span> </div> '
				
						+ ' </div> '
			
				+ ' <div class="th-bgclr col-xs-2 border data-border text-center padding00" style="height: 30px;" id="dth1"> '
				+ ' <div class="col-xs-12 padding00"><span>TH</span> </div> '
				+ ' <div class="col-xs-12 padding00"><span>1</span> </div> '
				+ ' </div> '
			
				+ ' <div style="height: 30px; line-height: 30px;" class="col-xs-3 data-bgclr data-border border text-center padding00"> '
				+ ' <span>'+$("#givenText").val().substring(0,3)+'</span> '
				+ ' </div> '
			
					+ ' <div class="dt-bgclr col-xs-2 border text-center padding00 blinking-yellow" style="height: 30px;"> '
				+ '	<div class="col-xs-12 padding00"><span>DT</span> </div> '
				+ '	<div class="col-xs-12 padding00"><span>1</span> </div> '
				+ ' </div> '
					+ '</div>' + ' The actual physical address is added to the packet in this ' 
						+ ' layer and it is here the packets are sent over the routes specified in transport ' 
						+ ' layer either over ethernet,wifi or cables to the intended destination', function() {
						
					TweenMax.to(".data-border", 1, {opacity:1, top:0, left: 0, onComplete: function() {
						$("#dh1").removeClass("opacity00").css("opacity", 1);
						TweenMax.from("#dh1", 1, {opacity:1, left: -20, onComplete: function() {
							$("#dh2").removeClass("opacity00").css("opacity", 1);
							TweenMax.from("#dh2", 1, {opacity:1, left: -20, onComplete: function() {
								$("#dh3").removeClass("opacity00").css("opacity", 1);
								TweenMax.from("#dh3", 1, {opacity:1, left: -20, onComplete: function() {
									$("#dataTailer1").removeClass("opacity00").css("opacity", 1);
									TweenMax.from("#dataTailer1", 1, {opacity:1, left: -20, onComplete: function() {
										$("#dataTailer2").removeClass("opacity00").css("opacity", 1);
										TweenMax.from("#dataTailer2", 1, {opacity:1, left: -20, onComplete: function() {
											$("#dataTailer3").removeClass("opacity00").css("opacity", 1);
											TweenMax.from("#dataTailer3", 1, {opacity:1, left: -20, onComplete: function() {
												$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="ethernet()">Next →</a>');
												count++;
											}});
										}});
									}});
								}});
							}});
						}});
					}});
				});
			});
		});
	});
}

function ethernet() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	$("#dataPacketDiv21").text(fileText.substring(0, 3));
	$("#dataPacketDiv22").text(fileText.substring(3, 6));
	$("#dataPacketDiv23").text(fileText.substring(6));
	
	var l1 = $("#biteTransfer1").offset();
	var l2 = $("#dataAck2").offset();
	$("#biteTransfer2").offset({"top": l1.top, "left": l1.left});
	$("#biteTransfer1").offset({"top": l2.top, "left": l2.left});
	
	arrowReveal(4, 92, function() {
		$("#ethernetDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			TweenMax.to("#biteTransfer1", 1, {opacity: 1, top : 0, left: 0, onComplete: function() {
				$("#biteTransfer1").css("opacity", 0);
				$("#biteTransfer2").removeClass("opacity00");
				TweenMax.to("#biteTransfer2", 1, {opacity: 1, top : 0, left: 0, onComplete: function() {
					arrowReveal(8, 85, function() {
						TweenMax.to("#clientHeading2", 1, {opacity:1, onComplete: function() {
							$("#clientHeading2").removeClass("opacity00");
							$("#dataLayerDiv2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#dataLayerText2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									popover("#dataLayerDiv2", 'left');
									typing('#popover' + count,  "At the destination computer, the data link layer receives the packet, removes the data added by the data link layer at source and the packets are sent to its Network layer.", function() { 
										TweenMax.to("#biteTransfer2", 1, {opacity: 0, top : -50, onComplete: function() {
											TweenMax.to("#client2Packet1", 1, {opacity:1, onComplete: function() {
												$("#client2Packet1").removeClass("opacity00");
												TweenMax.to("#client2Packet3", 1, {opacity:1, onComplete: function() {
													$("#client2Packet3").removeClass("opacity00");
													$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="networkLayer2()">Next →</a>');
													count++;
												}});
											}});
										}});
									});
								});
							});
						}});
					});
				}});
			}});
		});
	});
}

function networkLayer2() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	$("#networkPacketDiv21").text(fileText.substring(0, 3));
	$("#networkPacketDiv22").text(fileText.substring(3, 6));
	$("#networkPacketDiv23").text(fileText.substring(6));
	
	var l1 = $("#client2Packet1").offset();
	var l2 = $("#client2Packet3").offset();
	
	$("#nlPacket1").offset({"top": l1.top, "left": l1.left});
	$("#nlPacket3").offset({"top": l2.top, "left": l2.left});
	arrowReveal(7, 62.8, function() {
		$("#networkLayerDiv2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#networkLayerText2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				popover("#networkLayerDiv2", 'left');
				typing('#popover' + count,  "The Network layer removes the headers and trailers set by source and sends the packets to its Transport layer.", function() { 
					TweenMax.to("#nlPacket1", 1, {opacity:1, top:0, left: 0, onComplete: function() {
						TweenMax.to("#nlPacket3", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="transportLayer2()">Next →</a>');
							count++;
						}});
					}});
				});
			});
		});
	});
}

function transportLayer2() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	$("#packetDiv21").text(fileText.substring(0, 3));
	$("#packetDiv22").text(fileText.substring(3, 6));
	$("#packetDiv23").text(fileText.substring(6));
	
	var l1 = $("#nlPacket1").offset();
	var l2 = $("#nlPacket3").offset();
	
	$("#tlPacket1").offset({"top": l1.top, "left": l1.left});
	$("#tlPacket3").offset({"top": l2.top, "left": l2.left});
	arrowReveal(6, 40.5, function() {
		$("#transportLayerDiv2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#transportLayerText2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				popover("#transportLayerDiv2", 'left');
				typing('#popover' + count,  "In this layer the data packets are checked for sequence,an acknowledgement is sent to the source that the packet has received.If no packet is received no acknowledgement is sent.", function() { 
					$("#packetDiv21").addClass("border data-bgclr");
					$("#packetDiv23").addClass("border data-bgclr");
					TweenMax.to("#tlPacket1", 1, {opacity:1, top:0, left: 0, onComplete: function() {
						TweenMax.to("#tlPacket3", 1, {opacity:1, top:0, left: 0, onComplete: function() {
							$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="acknowledgement1()">Next →</a>');
							count++;
						}});
					}});
				});
			});
		});
	});
}

function missingPacket() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	arrowReveal(21, 47.5, function() {
		$('#missingPacket1').effect( "transfer", { to: $("#missingPacket2"), className: "ui-effects-transfer" }, 1000, function() {
			arrowReveal(22, 69.5, function() {
				$('#missingPacket2').effect( "transfer", { to: $("#dataAck2"), className: "ui-effects-transfer" }, 1000, function() {
					arrowReveal(23, 91.5, function() {
						arrowReveal(24, 85, function() {
							$("#client2Packet2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								arrowReveal(25, 63, function() {
									$("#nlPacket2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
										arrowReveal(26, 41, function() {
											$("#packetDiv22").addClass("border data-bgclr");
											$("#tlPacket2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
												$("#clock").removeClass("fa-spin");
												popover("#ackPopover2", 'bottom');
												typing('#popover' + count,  "If a packet has arrived late at destination,and since the source did not get an acknowledgement  it resends the packet.The destination now has two packets of the same data,so it ignores the resent data packet and uses the first packet and sends an acknowledgement.", function() { 
													$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="acknowledgement2()">Next →</a>');
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
		});
	});
}

function arrowReveal(num, y, callBackFunction) {
	if(num > 8 && num < 21 || num > 26 && num < 33) {
		$("#arrow" + num).css("marker-end", "url(#myMarker2)");  
	} else if(num > 20 && num < 27) {
		$("#arrow" + num).css("marker-end", "url(#myMarker3)");  
	} else {
		$("#arrow" + num).css("marker-end", "url(#myMarker)");
	}
	
	TweenMax.to("#arrow" + num, 0.5, {attr:{ y2 : y +"%" }, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function ackArrow(num1, num2, y1, y2, callBackFunction) {
	
	$("#arrow" + num1).css("marker-end", "url(#myMarker2)");
	$("#arrow" + num2).css("marker-end", "url(#myMarker2)"); 
	
	TweenMax.to("#arrow" + num1, 0.5, {attr:{ y2 : y1 +"%" }, onComplete: function() {
		
	}});
	
	TweenMax.to("#arrow" + num2, 0.5, {attr:{ y2 : y2 +"%" }, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function acknowledgement1() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	var l0 = $("#networkLayerDiv2").offset();
	var l1 = $("#dataLayerDiv2").offset();
	var l2 = $("#ethernetDiv").offset();
	var l3 = $("#dataLayerDiv").offset();
	var l4 = $("#networkLayerDiv").offset();
	
	var l5 = $("#networkLayerDiv2").offset();
	var l6 = $("#dataLayerDiv2").offset();
	var l7 = $("#ethernetDiv").offset();
	var l8 = $("#dataLayerDiv").offset();
	var l9 = $("#networkLayerDiv").offset();
	
	$("#ack3").offset({"top": l5.top - 35, "left": l6.left + 274});
	
	$("#ack1").offset({"top": l0.top - 35, "left": l0.left + 43});
	$("#clock").addClass("fa-spin").removeClass("opacity00");
	
	ackArrow(9, 15, 47.5, 47.5, function() {
		TweenMax.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
			ackArrow(10, 16, 70, 70, function() {
				$("#ack1").css("opacity", 0);
				$("#ack1").offset({"top": l1.top - 35});
				$("#ack3").css("opacity", 0);
				$("#ack3").offset({"top": l6.top - 35});
				TweenMax.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
					ackArrow(11, 17, 92, 92, function() {
						$("#ack1").css("opacity", 0);
						$("#ack1").offset({"top": l2.top - 35});
						$("#ack3").css("opacity", 0);
						$("#ack3").offset({"top": l7.top - 35});
						TweenMax.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
							ackArrow(18, 12, 85, 85, function() {
								$("#ack1").css("opacity", 0);
								$("#ack1").offset({"left": l3.left + 71});
								$("#ack3").css("opacity", 0);
								$("#ack3").offset({"left": l8.left + 290});
								TweenMax.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
									ackArrow(19, 13, 62.8, 62.8, function() {
										$("#ack1").css("opacity", 0);
										$("#ack1").offset({"top": l3.top - 35});
										$("#ack3").css("opacity", 0);
										$("#ack3").offset({"top": l8.top - 35});
										TweenMax.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
											ackArrow(20, 14, 40.5, 40.5, function() {
												$("#ack1").css("opacity", 0);
												$("#ack1").offset({"top": l4.top - 35});
												$("#ack3").css("opacity", 0);
												$("#ack3").offset({"top": l9.top - 35});
												TweenMax.to(".ack-transfer", 1, {opacity:1, onComplete: function() {
													TweenMax.to(".ack-transfer", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
														$("#clock").removeClass("fa-spin");
														popover("#ackPopover1", 'bottom');
														typing('#popover' + count,  "If an acknowledgement is not received by the transport layer at source from the destination, it assumes the packet is not received and resends the packet,which travels through the source and destination layers.", function() { 
															$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="missingPacket()">Next →</a>');
															count++;
														});
													}});
												}});
											});
										}});
									});
								}});
							});
						}});
					});
				}});
			});
		}});
	});
}

function acknowledgement2() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	//$(".popover").hide();
	
	$("#clock").addClass("fa-spin");

	var l5 = $("#networkLayerDiv2").offset();
	var l6 = $("#dataLayerDiv2").offset();
	var l7 = $("#ethernetDiv").offset();
	var l8 = $("#dataLayerDiv").offset();
	var l9 = $("#networkLayerDiv").offset();
		
	$("#ack2").offset({"top": l5.top - 35, "left": l5.left + 90});
	
	arrowReveal(27, 47.5, function() {
		TweenMax.to("#ack2", 1, {opacity:1, onComplete: function() {
			arrowReveal(28, 70, function() {
				$("#ack2").css("opacity", 0);
				$("#ack2").offset({"top": l6.top - 35});
				TweenMax.to("#ack2", 1, {opacity:1, onComplete: function() {
					arrowReveal(29, 92, function() {
						$("#ack2").css("opacity", 0);
						$("#ack2").offset({"top": l7.top - 35});
						TweenMax.to("#ack2", 1, {opacity:1, onComplete: function() {
							arrowReveal(30, 85, function() {
								$("#ack2").css("opacity", 0);
								$("#ack2").offset({"left": l8.left + 232});
								TweenMax.to("#ack2", 1, {opacity:1, onComplete: function() {
									arrowReveal(31, 62.8, function() {
										$("#ack2").css("opacity", 0);
										$("#ack2").offset({"top": l8.top - 35});
										TweenMax.to("#ack2", 1, {opacity:1, onComplete: function() {
											arrowReveal(32, 40.5, function() {
												$("#ack2").css("opacity", 0);
												$("#ack2").offset({"top": l9.top - 35});
												TweenMax.to("#ack2", 1, {opacity:1, onComplete: function() {
													TweenMax.to("#ack2", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
														$("#clock").removeClass("fa-spin");
														arrowReveal(0, 18.5, function() {
															$("#appLayerDiv2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
																$("#recp1").text(fileText.substring(0, 3));
																$("#recp2").text(fileText.substring(3, 6));
																$("#recp3").text(fileText.substring(6));
																var l1 = $("#packetDiv21").offset();
																var l2 = $("#packetDiv22").offset();
																var l3 = $("#packetDiv23").offset();
																	
																$("#recp1").offset({"top": l1.top, "left": l1.left});
																$("#recp2").offset({"top": l2.top, "left": l2.left});
																$("#recp3").offset({"top": l3.top, "left": l3.left});
																	
																$("#appLayerText2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
																	popover("#appLayerDiv2", 'left');
																	typing('#popover' + count,  "Once all the packets are received,the sequence and port no and any other information added are removed, and the information sent by the source computer is sent to the appplication layer which displays the information in the sent format.", function() { 
																		TweenMax.to(".recipient", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
																			$(".recipient").removeClass("opacity00");
																			$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="restart()">Next →</a>');
																			count++;
																		}});
																	});
																});
															});
														});
													}});
												}});
											});
										}});
									});
								}});
							});
						}});
					});
				}});
			});
		}});
	});
}

function alertMsg() {
	if ($("#givenText").val().length < 9) {
		var text = "Please type some text (text should be equal to 9 characters) in the input box and click on GO button in the application layer. For ex: How are you. Lets consider this data needs to be sent to some friend at computer2.";
		$("#popover" + count).empty();
		$("#popover" + count).text(text);
		$(".alertify-log-error").remove();
		alertify.error('Please enter text with 9 characters', 1000);
	} else if ($("#givenText").val().length == 9) {
		packetDivision();
	}
}

function restart() {
	$(".user-btn").remove();
	$("#popover"+(count-1)+", .popover-content").addClass("popover-gray-out");
	$("#popover"+(count-1)+", .popover").css("min-height", "0px");
	$("#restart").removeClass("opacity00");
	popover("#restart", 'right');
	$(".popover").css({"min-height": 0 +"px"});
	$(".popover-content").css({"min-height": 0 +"px"});
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
		container: '#mainBox'
	});
	$(selector).popover('show');
}
