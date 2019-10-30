//create a variable that is an array of all the student names
var students =  ["Lina", "Karlo", "Sophia", "Adrienne", "Yasmin", "Katherine", "Oleg", "Jaywhy", "Mikayla", "Siwoo", "Justine", "Andrea", "Kyle", "Alleesa", "Oanh", "Sabrina", "Jillian", "Allison", "Cole", "Christine"]

//creates a variable that is a random integer between 0 and the number of entries in the array above
var rS = Math.floor(Math.random() * students.length)


$(document).keydown(function(event){

	console.log(event.keyCode)
	if (event.keyCode == 74){
		alert("you pressed J");
	} else {
		console.log("not jay, you pressed "+event.keyCode)
	}
	
})

$("body").html(randomColor())

var i = 0;
while (i < students.length){
	console.log(students[i])
		$("<div class='greeting'></div>")
				.attr("id",students[i])
				.text("hello, " + students[i] + "!")
				.appendTo("body")
				// .css({
				// 	"background":randomColor()
				// })
				.draggable()

				.click(function(){
				moveRandomly($(this).attr("id"))
				})
	i = i+1;

// making animation-duration based off of position in array
	 $(".greeting").css({"animation-duration": i/4 + "s"})
}



function moveRandomly(studentID){
	var randomX = Math.floor(Math.random()* $(window).width() )
	var randomY = Math.floor(Math.random()* $(window).height() )

	$("#"+studentID).css({
	"position": "fixed",
	"top":randomY,
	"left":randomX,
	"background": randomColor()
})
}//end moveRandomly


function randomColor (){

	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);

	var rgb = "rgb("+r+","+g+","+b+")";
	return rgb
}






