var series=["GOT" , "True Detective" , "Peaky Blinders" , "This is us" , "Friends"];
series.sort();


function loadSeries(){
	document.getElementById("series").innerHTML = series;
}

function myFunction() {
	var series = prompt("Cual es tu serie favorita?");
series[series.length] = series;	
document.getElementById("series").innerHTML = series;
}

var peliculas = ["Me Before You" , "15 regalos" , "The Gentlemen" , "Green book" , "The Guardian"] ;
peliculas.sort();



function myFunction() {
	var peliculas = prompt("Cual es tu peli favorita?");
peliculas[peliculas.length] = peliculas;	
document.getElementById("peliculas").innerHTML = peliculas;
}

