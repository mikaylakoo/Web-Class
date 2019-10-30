$(document).click(function(ourEvent){ //what is ourEVENT? It's a new object that I created to 
	var tX = ourEvent.clientX //what are all these vars? it's to locate the user's cursor as well as which quadrarnt they are in!
	var tY = ourEvent.clientY
	var w = $(window).width();
	var h = $(window).height();
	
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
	




// alert(quadrant) //what is this alerting us to? it tells us which quadrant it's located in! According to this, we can attach different kinds of gestures and hands!



	$("#target")
		.css({
			"left": tX,
			"top": tY
		})


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

			},2000) //what does this number mean? 2000 miliseconds, so 2 seconds

		}

if (quadrant == "topleft") {
			
			$("#hand-top-left")
			.css({
				"left": tX-567,
				"top":tY -658

			})

			setTimeout(function (){
				$("#hand-top-left")
				.css({
				"left":"-2000px",
				"top": "0px"

			})

			},2000) //what does this number mean? 2000 miliseconds, so 2 seconds

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

			},2000) //what does this number mean? 2000 miliseconds, so 2 seconds

		}



	// $(".target")
	// 	.css({
	// 		"left": tX,
	// 		"top": tY
	// 	})


		if (quadrant == "bottomleft") {
			
			$("#hand-bottom-left")
			.css({
				"left": tX-677,
				"top":tY - 215

			})

			setTimeout(function (){
				$("#hand-bottom-left")
				.css({
				"left":"-100px",
				"top": "2000px"

			})

			},2000) //what does this number mean? 2000 miliseconds, so 2 seconds

		}

		})


$ (document).click(function(){
	$(".opening").fadeOut(200)
})





	