$(document).ready(function(){
  $("#slider-one").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
        dotsEach: true,
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			}
		},
        navText : ['<img src="images/arrow-left.png">',
                  '<img src="images/arrow-right.png">']
	});

	$("#slider-two").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //включить навигацию
        dots:false,
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:4000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			768:{
				items:3
			},
			992:{
				items:5
			}
		},
       navText : ['<img src="images/arrow-left.png">',
                  '<img src="images/arrow-right.png">'] 
	});
    $("#slider-three").owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //включить навигацию
        dots:false,
		autoplay:true, //Автозапуск слайдера
		smartSpeed:2000, //Время движения слайда
		autoplayTimeout:3000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			768:{
				items:3
			},
			992:{
				items:5
			}
		},
       navText : ['<img src="images/arrow-left.png">',
                  '<img src="images/arrow-right.png">'] 
	});
    
});

