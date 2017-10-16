window.onload = function(){
	var web = document.documentElement || document.body;
		windowHeight = web.clientHeight,
		btn = document.getElementById("back-top"),
		scrollTop = web.scrollTop || document.body.scrollTop,
		timer = null;

	btn.addEventListener("click", backToTop, false);

	function backToTop(){
		timer = setInterval(function(){
			var newPos = web.scrollTop + (0 - web.scrollTop)/10;

			if(newPos < 10){
				web.scrollTop = 0;
				clearInterval(timer);
			}
			web.scrollTop = newPos;
		}, 17);		
	}

	window.addEventListener("scroll", function(){
		scrollTop = web.scrollTop;
		checkBtn(scrollTop);
	}, false);

	function checkBtn(top){
		if(top < windowHeight){
			btn.style.display = "none";
		}else{
			btn.style.display = "block";
		}
	}

	checkBtn(scrollTop);
}