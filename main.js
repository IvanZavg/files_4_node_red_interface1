$( document ).ready(function() {

    let $sideBar = $('#side-bar'),
    	$headerTitels = $('.main-menu-titles'),
    	$mBlockTitle = $('#main-block-title'),
    	$cntr4OutPut = $('#main-block-output');

   	let sideBarIsOpen = 'N';
	let mainMenuData = {
		incomProc : {
			id : "incom-proc",
			infoTitle : "",
			infoBlock : "",
			isOpen : false,
			subTitels : []
		},
		motivTalks : {
			id : "motiv-proc",
			isOpen : false,
			infoTitle : "",
			infoBlock : "",
			subTitels : []
		},
		afterTestTalks :{
			id : "after-test-talks",
			isOpen : false,
			infoTitle : "",
			infoBlock : "",
			subTitels : []
		},
		helpProc : {
			id : "help-proc",
			isOpen : false,
			infoTitle : "",
			infoBlock : "",
			subTitels : []
		}
	};   


	$headerTitels.click(function(){	

		let $that = $(this);
		let menuName = $that.attr('name');
		let menuData = mainMenuData[menuName];

		viewSideBar(menuData);
		
	});



	function viewSideBar(mName){
		if(sideBarIsOpen == 'N'){
			mName.isOpen = true;
			togleSideBar();
			sideBarIsOpen = 'Y';
		}
		else if (sideBarIsOpen == 'Y' && mName.isOpen == true){
			sideBarIsOpen = 'N';
			mName.isOpen == false;
			$sideBar.removeClass('bounceInLeft').addClass('bounceOutLeft');
		}
		else{
			tglMainMenuState();
			mName.isOpen = true;
			togleSideBar();
			setTimeout(togleSideBar, 500);
		}
	}

	function tglMainMenuState(){
		for(key in mainMenuData){
			if(mainMenuData[key].isOpen == true){
				mainMenuData[key].isOpen = false;
			}
		}
	}
	
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

