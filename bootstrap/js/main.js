function helloWord(){
	var n = prompt("votre nom")
	alert("hello"+" "+n)
	

	}

$(document).ready(function(){
	
	$("p").css("background","red")

	$(".koto").css("background","blue")

	$("#soa").css({
		"color":"white",
		"font-size":"25px"
	})

	$(".geeka").click(function()
	{
		$("body").css("background","black")
	})

	$("document").on("click","geeka",function()
	{
		$("body").css("background","black")
	})

	$(".geek").click(function()
	{
		var membre = prompt("entrer nom ")
		$("#ajout").append('<li>'+membre+'</li>')
	})

})