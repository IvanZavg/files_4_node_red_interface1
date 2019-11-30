$( document ).ready(function() {

    let $sideBar      = $('#side-bar'),
    	$sideBarCntr  = $('#side-bar-cntr'),
    	$headerTitels = $('.main-menu-titles'),
    	$mBlockTitle  = $('#main-block-title'),
    	$cntr4OutPut  = $('#main-block-output');

   	let sideBarIsOpen = 'N';
	let mainMenuData = {
		incomProc : {
			id : "incom-proc",
			infoTitle : "Внутренние процессы Полиграфологической службы",
			infoBlock : "В процессе разработки",
			isOpen : false,
			subTitels : [
				{
					title : "Тест",
					name : "test",
					url : ""
				}
			]
		},
		motivTalks : {
			id : "motiv-proc",
			isOpen : false,
			infoTitle : "Мотивационные беседы перед полиграфом",
			infoBlock : "В процессе разработки",
			subTitels : []
		},
		afterTestTalks :{
			id : "after-test-talks",
			isOpen : false,
			infoTitle : "Беседы по результатам полиграф тестирования",
			infoBlock : "В процессе разработки",
			subTitels : []
		},
		helpProc : {
			id : "help-proc",
			isOpen : false,
			infoTitle : "Вспомогательные процессы",
			infoBlock : "",
			subTitels : [
				{
					title : "Пользовательськая сессия",
					name : "userSID",
					url : ""
				},
				{
					title : "Техничемкая сессия",
					name : "techSID",
					url : ""
				},
				{
					title : "Тест",
					name : "test",
					url : ""
				}
			]
		}
	};   


	$headerTitels.click(function(){	

		let $that    = $(this);
		let menuName = $that.attr('name');
		let menuData = mainMenuData[menuName];
		let subArr   = mainMenuData[menuName].subTitels;
	
		viewSideBar(menuData, subArr);
		
	});




	function clearSideBar(){
		$sideBarCntr.empty();
	}


	function fillSidBar(subArr){
		let ol = $('<ol>');

		if(subArr.length == 0){
			$sideBarCntr.append("<p>данный блок находится в разработке<p>");
		}
		else{
			for (var i = 0; i < subArr.length;  i++) {
				ol.append(`<li>${subArr[i].title}</li>`);
			}
			$sideBarCntr.append(ol);
		}
	}


	function viewSideBar(mData, subArr){
		if(sideBarIsOpen == 'N'){
			mData.isOpen = true;
			togleSideBar(subArr);
			sideBarIsOpen = 'Y';
		}
		else if (sideBarIsOpen == 'Y' && mData.isOpen == true){
			sideBarIsOpen = 'N';
			mData.isOpen = false;
			$sideBar.removeClass('bounceInLeft').addClass('bounceOutLeft');
		}
		else{
			tglMainMenuState();
			mData.isOpen = true;
			togleSideBar(subArr);
			setTimeout(togleSideBar, 500, subArr);
		}
	}


	function tglMainMenuState(subArr){
		for(key in mainMenuData){
			if(mainMenuData[key].isOpen == true){
				mainMenuData[key].isOpen = false;
			}
		}
	}

	
	function togleSideBar (subArr) {
		if($sideBar.hasClass('hidden')){
			fillSidBar(subArr);
			$sideBar.addClass('bounceInLeft').removeClass('hidden');
		}
		else if (!$sideBar.hasClass('hidden') && $sideBar.hasClass('bounceInLeft')) {
			$sideBar.removeClass('bounceInLeft').addClass('bounceOutLeft');

		}
		else if($sideBar.hasClass('bounceOutLeft')){
			clearSideBar();
			fillSidBar(subArr);
			$sideBar.removeClass('bounceOutLeft').addClass('bounceInLeft');
		}
	}
});

