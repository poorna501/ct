var structuresReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#informationdiv',
			intro :'',
			tooltipClass: "hide",
			position:"bottom" 
		},{
			element :'#declarationDefination', 
			intro :'',
			position:"bottom"
		},{
			element :'#exampleOfStudent', 
			intro :'',
			tooltipClass: "hide",
			position:"bottom"
		},{
			element :'#members', 
			intro :'',
			position:"bottom"
		},{
			element :'#studentStruct', 
			intro :'',
			position:"bottom"
		},{
			element :'#studentVariables', 
			intro :'',
			position:"bottom"
		},{
			element :'#tables', 
			intro :'',
			position:"bottom"
		},{
			element :'#structureDeclaration', 
			intro :'',
			position:"bottom"
		},{
			element :'#keyWord',
			intro :'',
			position:"bottom"
		},{
			element :'#structureName',
			intro :'',
			position:"bottom"
		},{
			element :'#enclosedBraces',
			intro :'',
			position:"bottom"
		},{
			element :'#semicolon',
			intro :'',
			position:"bottom"
		},{
			element :'#exampleStructureDeclaration',
			intro :'',
			position:"bottom"
		},{
			element :'#structutreIdentifier',
			intro :'',
			position:"bottom"
		},{
			element :'#name',
			intro :'',
			position:"bottom"
		},{
			element :'#id',
			intro :'',
			position:"bottom"
		},{
			element :'#long',
			intro :'',
			position:"bottom"
		},{
			element :'#definitionSyntax',
			intro :'',
			position:"right"
		},{
			element :'#keyWord1',
			intro :'',
			position:"right"
		},{
			element :'#structureName1',
			intro :'',
			position:"right"
		},{
			element :'#structureVariables',
			intro :'',
			position:"right"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "declarationDefination" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#declarationDefination").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"Let us consider example of structure declaration and definition." ,function() {
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "exampleOfStudent" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#exampleOfStudent").removeClass("opacity00");
				setTimeout(function(){
					intro.nextStep();
					}, 800); 
			});
		break;
		case "members" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"These are called <span class='color-yellow'>members</span> (or) <span class='color-yellow'>fields</span>." ,function() {
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "studentStruct" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li><span class='color-yellow'>struct</span> keyword is used to define a structure.</li><li><span class='color-yellow'>struct</span> defines a new user defined datatype.</li></ul>" ,function() {
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "studentVariables" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li>This is called structure definition.</li><li>Here strucutre variables <span class='color-yellow'>s1</span>, <span class='color-yellow'>s2</span> and <span class='color-yellow'>s3</span> are created.</li></ul>" ,function() {
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "tables" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
			$("#storeS1").removeClass("opacity00");
			$("#storeS2").removeClass("opacity00");
			$("#storeS3").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li>The members can be accessed by using dot operator like s1.a s1.b s1.c, s2.a s2.b s2.c, s3.a s3.b s3.c</li><li>Here s1.a <span class='color-yellow'>&#8800;</span> s2.a <span class='color-yellow'>&#8800;</span> s3.a.<br> s1.b <span class='color-yellow'>&#8800;</span> s2.b <span class='color-yellow'>&#8800;</span> s3.b.<br> s1.c <span class='color-yellow'>&#8800;</span> s2.c <span class='color-yellow'>&#8800;</span> s3.c.</li></ul>" ,function() {
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "structureDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#structureDeclaration").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"Now see the declaration of structure." ,function() {
				$('.introjs-nextbutton').show();
				});
			});
		break;
		case "keyWord" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The declaration begins with the keyword <span class='color-yellow'>struct</span>." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structureName" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<ul><li>The <span class='color-yellow'>structure_name</span> is identifier and it is optional.</li>"+
		  		"<li><span class='color-yellow'>structure_name</span> declared by user.</li><li>The declaration of a structure does not reserve any <span class='color-yellow'>storage space</span>.</li></ul>" ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "enclosedBraces" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The list of declaration of its members must be enclosed in braces." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "semicolon" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"Structure declaration ended with <span class='color-yellow'>semicolon(;).</span>" ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "exampleStructureDeclaration" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#exampleStructureDeclaration').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"Let us consider the example of structure declaration." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structutreIdentifier" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<ul><li>The declaration begins with the keyword <span class='color-yellow'>struct</span>.</li><li>The identifier <span class='color-yellow'>employee</span> is the structure identifier.</li></ul>" ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "name" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The name member is a 20-element array with <span class='color-yellow'>char</span> type." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "id" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='color-yellow'>id</span> is simple memeber with <span class='color-yellow'>int</span> type." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "long" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='color-yellow'>salary</span> is simple member with <span class='color-yellow'>float</span> type." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "definitionSyntax" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#definitionSyntax').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"Now see the definition of structure." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "keyWord1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The definition begins with the keyword <span class='color-yellow'>struct</span>." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structureName1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='color-yellow'>structure_name</span> is identifier." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structureVariables" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"Definition of structure creates structure variables." ,function() {
		  		$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			typing('.introjs-tooltiptext', "Click to restart.", function() {
				$("#restartBtn").removeClass("opacity00");
				});
			});
		break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$("#informationdiv").removeClass("visibility-hidden");
 	   typing('#informationdiv', "<ul><li>A <b class='color-green'>Structure</b> is a derived data type to organize a group of related data items of different data types referring to a single entity.</li>"+
 			"<li>keyword <b class='color-green'>struct</b> is used for creating a structure.</li><li>Each data item in a structure is called a <b class='color-green'>member</b>.Sometimes these members are also called fields.</li>"+
 			"<li>The advantage of using a structure is that the accessibility of members becomes easier since all the members of a specific structure gets allocation of continuous memory and therefore minimizing the memory access time.</li></ul>", function() {  
	 		typing('.introjs-tooltiptext',"introduction of structures." ,function() {  
	 			setTimeout(function(){
					intro.nextStep();
					}, 1000); 	
		 		 });
	
 			});	
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 20;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}