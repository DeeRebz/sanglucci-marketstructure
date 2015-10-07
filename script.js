$(document).ready(function(){

	$("video").click(function() {
	    if (this.paused) {
	        this.play();
	    } else { 
	        this.pause();
	    }
	    return false;
	});

	$("#wrapper #about-haim").click(function() {
    var navId= $(this).attr("href");
    $("html, body").animate({scrollTop: $(navId).offset(100)},500);
    return false;
	});
});