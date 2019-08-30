$(document).ready(function(){

		$('.video-content').hover(
			function(){
				this.controls = true;
			},
			function(){
				this.controls = false;
			}
		);


		$('.video-play-button').on('click',function(){
			$(this).prev('.video-content').get(0).play();
		});

		$('.video-content')
			.on('play',function(){
				$(this).next('.video-play-button').hide();
			})
			.on('ended',function(){
				this.load();
				$(this).next('.video-play-button').show();
			});

		var videoTop = $('.video-container').offset().top;
		$(window).on('scroll',function(){
			if( $(window).scrollTop() > videoTop + 100 ){
				if(!$('.video-content').get(0).paused){		
					$('[class^=video]').addClass('mini');
				}
			}else{
				$('[class^=video]').removeClass('mini');
			}
		});
	});