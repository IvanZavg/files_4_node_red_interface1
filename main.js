$( document ).ready(function() {
    let $sideBar = $('#side-bar'),
    	$processes = $('.hd-titels'),
    	sideBarIsOpen = 'N';

	$processes.click(()=>{	
		let that = $(this);

		if(sideBarIsOpen == 'N'){
			togleSideBar();
			sideBarIsOpen = 'Y';
		}else{
			togleSideBar();
			setTimeout(togleSideBar, 500);
		}
		
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

