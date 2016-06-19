$(function() {
		var swiper = new Swiper('.swiper-container', {
			autoplay : 3000,
			autoHeight:true,
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			autoplayDisableOnInteraction:false,
			loop: true
		});
		$('.nav a').click(function(){
			$(this).addClass('on').siblings().removeClass('on');
		});
		if(location.hash=="#case"){
			$('.j-case').click();
		}
    });