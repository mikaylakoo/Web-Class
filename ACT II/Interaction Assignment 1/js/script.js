
//variables
	//boolean - can only be true or false
	//string variables
	//number variable

//events
	//click
	//scroll

//conditionals
	//if else statements

//addClass
//removeClass

$(".elem").hover(function(){
	//$(this).addClass("active");

	var isActive = $(this).hasClass("active");
	var elemText = $(this).text()

	// alert(elemText)

	//alert (isActive)

	if (isActive == false) {
	$(".elem").removeClass("active")
	$(this).addClass("active")
	} else {
	$(this).removeClass("active")
	 }

	if (elemText == "make all blue") {
		$(".elem").addClass("blue")
	}

	if (elemText == "make just this blue") {
		$(this).addClass("blue")
	}

	if (elemText == "make this purple") {
		$(this).addClass("purple")
	}

	if (elemText == "hide all") {
		$(".elem, .circle").fadeOut(500)

	}

})

$(document).scroll(function(){
	
	var scrolledSoFar = $(document).scrollTop()

	var totalHeight = $(document).height()-$(window).height();

	var scrollPercentage = scrolledSoFar / totalHeight;

	var scrollDegree = scrollPercentage * 360

	$(".circle").css({
		"transform":"rotate("+scrollDegree+"deg)"
	})

	console.log(scrollDegree)

})








