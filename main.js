$( document ).ready(function() {
    let $sideBar = $('#side-bar'),
    	$helpProc = $('#h-d-4');

	$helpProc.click(()=>{
		let that = $(this);
		togleSideBar();
	});

	function togleSideBar () {

		if($sideBar.hasClass('hidden')){
			$sideBar.addClass('bounceInLeft').removeClass('hidden');
		}else if (!$sideBar.hasClass('hidden') && $sideBar.hasClass('bounceInLeft')) {
			$sideBar.removeClass('bounceInLeft').addClass('bounceOutLeft');
		}else if($sideBar.hasClass('bounceOutLeft')){
			$sideBar.removeClass('bounceOutLeft').addClass('bounceInLeft');
		}
	}
});

