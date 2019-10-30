
var rX;
var rY;
var quadrant;
movingFly()
// var X;
// var Y;


$(document).click(function(ourEvent){ //what is ourEVENT? It's a new object that I created to 



	var tX = ourEvent.clientX //what are all these vars? it's to locate the user's cursor as well as which quadrarnt they are in!
	var tY = ourEvent.clientY
	var w = $(window).width();
	var h = $(window).height();

	
	// movingFly(tY);
	
	

	if ((tX < w/2) && (tY < h/2)) {
		quadrant = "topleft"

	} else if ((tX < w/2) && (tY > h/2)) {
		quadrant ="bottomleft"
	} else 	if ((tX > w/2) && (tY < h/2)) {
		quadrant = "topright"

	} else if ((tX > w/2) && (tY > h/2)) {
		quadrant ="bottomright"
	}
	
	// var notFly = $(".target")+



// DOO THE SOUND LATER
// var aAudio = new Audio("audio/Kids Saying Yay [Sound Effect].mp3");
// var bAudio = new Audio("audio/fail.mp3");
// var cAudio = new Audio("audio/fail.mp3");
// var dAudio = new Audio("audio/fail.mp3");


// $("#hand-bottom-left")
// 			.css({
// 				"left": tX-817, -1033
// 				"top":tY - 135, +25



if (ourEvent.target.id == "fly") { //THIS IS THE MOMENT WHERE YOUR FLY HAS BEEN CAUGHT
	// aAudio.play();


	if (quadrant == "bottomleft") { //CAUGHT BY THE FROG.
		//sucked into mouth
		
		setTimeout(function (){
		$("#fly")
		.css({
		"left":tX-817,
		"top": tY+25,
		"transition":"all 0.5s"

		})

	}, 700)

		setTimeout(function (){
		$("#fly")
		.css({
		"left": tX+417,
		"top": tY-300,
		"transition":"all 0.5s"

		})

	}, 2000)

		// console.log(randomX)

			
	} else if (quadrant == "topleft") { //CAUGHT BY THE HANDS
		//DISAPPEAR
		setTimeout(function (){
		$("#fly")
		.css({
		"visibility":"hidden"

		})

	}, 750)

		setTimeout(function (){
		$("#fly")
		.css({
		"left":"-3000px",
		"top":"20px",
		"visibility":"visible"
		})

	}, 2000)
		
	setTimeout(function (){
		$("#fly")
		.css({
		
		"left":tX+rX/2,
		"top": tY+rY/2,
		"transition":"all 0.5s"

		})

	}, 2000)	



	} else if (quadrant == "bottomright") { //CAUGHT BY THE swatter.
		//SPLOTCH

		setTimeout(function (){
				$("#fly").attr("src","image/fly2.png");	
			},310)
		// setTimeout(function (){ //GOT THIS FROM: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create
				
		// 		  var x = document.createElement("IMG");
		// 		  x.setAttribute("src", "image/screen.png");
		// 		  x.setAttribute("width", "1300");
		// 		  x.setAttribute("height", "1000");
		// 		  x.setAttribute("fadeOut", "(200)");
		// 		  document.body.appendChild(x);
				
		// 		// .css({
		// 		// "left":"10px",
		// 		// "top":"10px"

		// // })	
		// 	},310)

		setTimeout(function (){
				$("#fly").attr("src","image/Fly-PNG.png");
				}, 2000)


		setTimeout(function (){
		$("#fly")
		.css({
		"left":tX-500,
		"top": tY+30,
		"transition":"all 0.5s"

		})

	}, 3000)


	} else if (quadrant == "topright") { //CAUGHT BY THE tape
		//STUCK TO TAPE

		setTimeout(function (){
		$("#fly")
		.css({
		"left":tX+1002,
		"top": tY,

		})

	}, 1580)

		setTimeout(function (){
		$("#fly")
		.css({
		"left":rX-rX/2,
		"top": rY-rY/2,
		"transition":"all 0.5s"

		})

	},3000)
	}



// } else {
// 	bAudio.play();

// 	setTimeout(function(){
// 		movingFly ();
// }, 3000)
}



// alert(quadrant) //what is this alerting us to? it tells us which quadrant it's located in! According to this, we can attach different kinds of gestures and hands!



// THe code below will make the fly come to where you've clicked

	// $("#target")
	// 	.css({
	// 		"left": tX,
	// 		"top": tY
	// 	})


		if (quadrant == "bottomright") {
			
			$("#hand-bottom-right")
			.css({
				"left": tX - 330,
				"top":tY - 147,

			})
		
			setTimeout(function (){
				$("#hand-bottom-right").addClass("rotation");

			},300)
			
			setTimeout(function (){
				$("#hand-bottom-right").attr("src","image/flynet.png");
				

			},310)

			setTimeout(function (){
				$("#hand-bottom-right").removeClass("rotation");
				$("#hand-bottom-right")
				.css({
				"left":"2800px",
				"top": "2000px"
				})
				.attr("src","image/java-hand.png");
			

			},800) //what does this number mean? 2000 miliseconds, so 2 seconds

		}

if (quadrant == "topleft") {
			
			$("#hand-top-left")
			.css({
				"left": tX-767,
				"top":tY -998

			})

			setTimeout(function (){
				$("#hand-top-left").attr("src","image/clap.png");
				//console.log("clap")

			},800)

			setTimeout(function (){
				$("#hand-top-left")
				.css({
				"left":"-2000px",
				"top": "-2000px"
				})
				.attr("src","image/hand-444.png")

			},1200) //what does this number mean? 2000 miliseconds, so 2 seconds*/

		}

if (quadrant == "topright") {
			
			$("#hand-top-right")
			.css({
				"left": tX - 102,
				"top":tY -375

			})

			setTimeout(function (){
				$("#hand-top-right").attr("src","image/tape2.png");

			},1000)

			setTimeout(function (){
				$("#hand-top-right").attr("src","image/tape3.png");

			},1500)

			setTimeout(function (){
				$("#hand-top-right").attr("src","image/tape4.png");

			},1600)

			setTimeout(function (){
				$("#hand-top-right").attr("src","image/tape5.png");

			},1700)

			setTimeout(function (){
				$("#hand-top-right").attr("src","image/tape6.png");

			},1800)


			setTimeout(function (){
				$("#hand-top-right")
				// .attr("style","") //what does this do? Put an attribute - within style, and then the following!!
				.css({
				"left":"3000px",
				"top": "400px"})
				

			},2100) //what does this number mean? 2000 miliseconds, so 2 seconds


			setTimeout(function (){
			$("#hand-top-right").attr("src","image/tape1.png");

		},2190)

		}



	// $("#fly")
	// 	.css({
	// 		"left": tX,
	// 		"top": tY
	// 	})




		if (quadrant == "bottomleft") {


//immediate: load X image move to mpostion
//300ms: load Y image
//350ms: move to new position of screen


	// setTimeout(function(){},200)
	// setTimeout(function(){},400)
	// setTimeout(function(){},600)

			
			$("#hand-bottom-left")
			.css({
				"left": tX-817,
				"top":tY - 135

			})

			setTimeout(function (){
				$("#hand-bottom-left").attr("src","image/frog2.png");

			},500)

			setTimeout(function (){
				$("#hand-bottom-left").attr("src","image/frog3.png");

			},510)

			setTimeout(function (){
				$("#hand-bottom-left").attr("src","image/frog4.png");

			},520)

			setTimeout(function (){
				$("#hand-bottom-left").attr("src","image/frog3.png");

			},720)

			setTimeout(function (){
				$("#hand-bottom-left").attr("src","image/frog2.png");

			},740)

			setTimeout(function (){
				$("#hand-bottom-left").attr("src","image/frog1.png");

			},760)

			setTimeout(function (){
				$("#hand-bottom-left")
				//.attr("src","img/clap.png")
				.css({
				"left":"-1000px",
				"top": "400px"
				})
	
			},1500) //what does this number mean? 2000 miliseconds, so 2 seconds

		}

});

$ (document).click(function(){
	$(".opening").fadeOut(200)
})



// $("*").not("#fly").click(function(){
// 	myAudioFunction('b');
// })

// function newRandom (){
// 	var newX = Math.floor(Math.random()* $(window).width() )
// 	var newY = Math.floor(Math.random()* $(window).height() )

// 	console.log(newX+" "+newY)


// 	$("#fly").css({
// 		"top":newX,
// 		"left":newY
// 	})
// }

// function myFunction() {
//   $("#fly").getElementById(Math.random()*($(window).width()));
// }



function movingFly() {

	 rX = Math.floor (Math.random()*($(window).width()-500))+200
	 rY = Math.floor (Math.random()*($(window).height()-500))+200
	
	console.log(rX+" "+rY)

	$("#fly").css ({
		"top":rY,
		"left":rX
		})

	// }).click(function(){
	// 	myAudioFunction('a');	
}

// $ (document).click(function(){

// 	var correct = $(this).hasClass("fly")

// 	if (correct == true) {
// 		document.getElementbyId("audio")
	
// 	}
// })