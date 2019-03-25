$(document).ready(function(){
 	$("#Login").click(function(){

 		var username = $("#username").val();
 		var password = $("#password").val();
 		var attempt = 5;
 		var accessDB = true;

 		var storedUserName = localStorage.getItem('username');
 		var storedPassWord = localStorage.getItem('password');

 		$(".message").html("Wrong name or Password Motherfucker");
		$(".message").css({"font-size": "400%"});
		$(".message").css({"color": "red"});
		$("#form").effect("shake");

 			if (storedUserName == username && storedPassWord==password){
				$(location).attr('href', 'Startsiden.html');
				
				
				localStorage.setItem("accessDB", true);

			} else {
 				attempt --;
				alert("You have left "+ attempt +" attempt;");
			
				if( attempt == 0){
					("#username").disabled = true;
					("#password").disabled = true;

				return false;
				}
			}
	});

});