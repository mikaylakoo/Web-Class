


var students= ["Lina", "Karlo", "Sophia", "Adrienne", "Yasmin", "Katherine", "Oleg", "Jaywhy", "Mikayla", "Siwoo", "Justine", "Andrea", "Kyle", "Alleesa", "Oanh", "Sabrina", "Jillian", "Allison", "Cole", "Christine"]
var rS = Math.floor (Math.random()*students.length)

console.log(students.length)

var i = 0;
while (i < students.length) {
	console.log(students[i])

	$('<div class="greeting"></div>')
		.attr("id", students[i])
		.text("Hello, "+students[i]+"!")
		.appendTo("body")
		.draggable()
		//.click (function(){
			moveRandomly($(this).attr("id"))
		})

	i = i+1
}

// Explaining RAMDOM.



	$(document).click(function(){
		moveRandomly();
	})


	$(document).keydown(function(g){
		if g.keyCode == 74) {
	
		alert("you pressed");
	} 

	}
	})


	function moveRandomly(studentID) {
		var randomX = Math.floor(Math.random()*$(window).width())
		var randomY = Math.floor(Math.random()*$(window).height())

		$("#"+studentID).css({
			"position":"fixed",
			"top":randomY,
			"left":randomX
			})

	}








