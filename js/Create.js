$(document).ready(function(){
	$("#Create").click(function(){

brugernavnDB = $("#username").val();
passwordDB = $("#password").val();

localStorage.setItem("username", brugernavnDB);
localStorage.setItem("password", passwordDB);

$(location).attr('href', 'Forsiden.html');

});

});
