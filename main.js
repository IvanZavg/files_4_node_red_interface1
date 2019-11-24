$( document ).ready(function() {
    let $sideBar = $('#side-bar'),
    	$helpProc = $('#h-d-4');

	$helpProc.click(function () {
		$sideBar.addClass('bounceInLeft').css({
			opacity:1
		});
	});
});