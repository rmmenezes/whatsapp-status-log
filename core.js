setInterval(function(){
    var userName = document.getElementById("main").getElementsByClassName("_19RFN")[0].innerHTML
    var status = document.getElementById("main").getElementsByClassName("_315-i")[0].innerHTML
    if (status == "online"){
	alert("The user: " + userName + " is " + status);
    }
}, 2000);

