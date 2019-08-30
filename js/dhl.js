$(document).ready(function(){

		$('.menu > ul > li').hover(
			function(){  /* 鼠标进入时 */
				$('ul:animated').finish();  /* 立即完成正在进行的动画 */
				$(this).children('ul').slideDown();  /* 下滑显示 */
			},
			function(){  /* 鼠标移出时 */
				$(this).children('ul').slideUp();  /* 上滑隐藏 */
			}
		);

	});