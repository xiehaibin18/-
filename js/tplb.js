$(document).ready(function(){
		/**
		 * 移动图片，实现动画效果
		 * @param  {String} direction 'left'为向左移动，'right'为向右移动
		 * @param  {Number} toIndex   指定动画结束后显示第几幅图片（以0开始的索引）
		 */
		function move( direction , toIndex ){

			var from;  /* 动画开始前，图片的位置 */
			var to;    /* 动画结束时，图片的位置 */

			if (direction == 'left'){
				from = '1000px';
				to = '-=1000';  /* jQuery的相对值设置方法 */
			}else if (direction == 'right'){
				from = '-1000px';
				to = '+=1000';
			}

			$('.slide1 > .item1').eq(toIndex)  /* 将要显示的图片 */
				/* 先定位 */
				.css({
					'left': from,
					'display': 'block'
				})
			.add('.slide1 > .active1')  /* 再加上正在显示的图片 */
				/* 两幅图片一起移动 */
				.animate({
					left: to
				},500,function(){  /* 动画结束后做的收尾工作，恢复到正常状态，使下一次动画能正确进行 */
					/* 移除之前的active类，给当前的加上active类 */
					$('.slide1 .active1').removeClass('active1');
					$('.slide1 > .item1').eq(toIndex).addClass('active1');
					$('.slide1 > .pager1 > .round1').eq(toIndex).addClass('active1');
					$(this).removeAttr('style');  /* 移除animate动画产生的临时的style属性 */
				})
		}

		/* 点击上一幅、下一幅按钮 */
		$('.slide1 > .control1').on('click',function(){
			$(':animated').finish();  /* 开始新动画前，立即完成正在进行中的动画 */
			
			/* 获取当前显示的图片的索引 */
			var current = $('.slide1 > .item1.active1').index('.slide1 > .item1');
			var i;

			if( $(this).is('.prev1') ){
				i = current - 1;  /* 当前索引减1，得到上一幅的索引 */
				if( i < 0 ){
					i = 4;  /* 第一幅继续减，则回到最后一幅 */
				}
				move('right', i);
			}else if( $(this).is('.next1') ){
				i = current + 1;  /* 当前索引加1，得到下一幅的索引 */
				if( i > 4 ){
					i = 0;  /* 最后一幅继续加，则回到第一幅 */
				}
				move('left', i);
			}
		});

		/* 点击圆圈 */
		$('.slide1 > .pager1 > .round1').on('click',function(){
			$(':animated').finish();
			/* 当前第几幅 */
			var current = $('.slide1 > .item1.active1').index('.slide1 > .item1');
			/* 点击的是第几幅 */
			var clicked = $(this).index('.slide1 > .pager1 > .round1');

			if( current < clicked ){
				/* 点击的图片比当前图片的索引更大，说明要显示的图片在后面，要往左移才能显示出来 */
				move('left', clicked);
			}else if( current > clicked ){
				/* 与上相反 */
				move('right', clicked);
			}

		});

		/* 自动轮播 */
		var id;  /* 定时器id，用于标识定时器 */
		$('.slide1')
			.on('mouseleave',function(){  /* 鼠标移出容器时 */
				id = window.setInterval(function(){  /* 每隔3秒重复执行 */
					$('.slide1 > .next1').trigger('click');  /* 模拟点击下一幅按钮 */
				}, 3000);
			})
			.on('mouseenter',function(){
				window.clearInterval(id);  /* 鼠标移入时，根据id清除相应的定时器 */
			})
			.trigger('mouseleave');  /* 进入页面时，手动触发鼠标移出事件，使定时器生效 */

	});