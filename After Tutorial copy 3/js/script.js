
movingFly()


$(document).click(function(ourEvent){ //what is ourEVENT? It's a new object that I created to 
	
	
	var tX = ourEvent.clientX //what are all these vars? it's to locate the user's cursor as well as which quadrarnt they are in!
	var tY = ourEvent.clientY
	var w = $(window).width();
	var h = $(window).height();

	
	// movingFly(tY);
	
	
	var quadrant;

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
				"left": tX - 46,
				"top":tY - 267

			})

			setTimeout(function (){
				$("#hand-bottom-right")
				.css({
				"left":"2800px",
				"top": "2000px"

			})

			},3000) //what does this number mean? 2000 miliseconds, so 2 seconds

		}

if (quadrant == "topleft") {
			
			$("#hand-top-left")
			.css({
				"left": tX-567,
				"top":tY -658

			})

			setTimeout(function (){
				$("#hand-top-left").attr("src","image/clap.png");
				//console.log("clap")

			},1500)

			setTimeout(function (){
				$("#hand-top-left")
				.css({
				"left":"-2000px",
				"top": "0px"
				})
				.attr("src","image/hand-444.png")

			},3000) //what does this number mean? 2000 miliseconds, so 2 seconds*/

		}

if (quadrant == "topright") {
			
			$("#hand-top-right")
			.css({
				"left": tX - 269,
				"top":tY -98

			})

			setTimeout(function (){
				$("#hand-top-right")
				// .attr("style","") //what does this do? Put an attribute - within style, and then the following!!
				.css({
				"left":"2800px",
				"top": "0px"

			})

			},3000) //what does this number mean? 2000 miliseconds, so 2 seconds

		}



	// $("#fly")
	// 	.css({
	// 		"left": tX,
	// 		"top": tY
	// 	})

setTimeout(function(){
		movingFly ();
}, 3000)


		if (quadrant == "bottomleft") {


//immediate: load X image move to mpostion
//300ms: load Y image
//350ms: move to new position of screen


	// setTimeout(function(){},200)
	// setTimeout(function(){},400)
	// setTimeout(function(){},600)

			
			$("#hand-bottom-left")
			.css({
				"left": tX-677,
				"top":tY - 215

			})

			setTimeout(function (){
				$("#hand-bottom-left")
				//.attr("src","img/clap.png")
				.css({
				"left":"-100px",
				"top": "2000px"

			})

			},3000) //what does this number mean? 2000 miliseconds, so 2 seconds

		}

		if ($(".fly") == true){
			$
		}

		})


$ (document).click(function(){
	$(".opening").fadeOut(200)
})



$("*").not("#fly").click(function(){
	myAudioFunction('b');
})

function movingFly() {

	var rX = Math.floor (Math.random()*($(window).width()-500))+200
	var rY = Math.floor (Math.random()*($(window).height()-500))+200
	
	$("#fly").css ({
		"top":rX,
		"left":rY


	}).click(function(){
		myAudioFunction('a');
		
	})
}


	var aAudio = new Audio("audio/Kids Saying Yay [Sound Effect].mp3");
    var bAudio = new Audio("audio/fail.mp3");
     
     function myAudioFunction(letter) {
         
         if(letter == 'a') {
             aAudio.play();

         } else if(letter == 'b') {
             bAudio.play();
         }
     }

	