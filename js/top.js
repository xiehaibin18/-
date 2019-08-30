  $(document).ready(function(){

    // 回到顶部的功能
    $('.top').on('click',function(){
      $(window).scrollTop(0);  // 设置为0，即回到顶部
    });

    // 窗口滚动时
    $(window).on('scroll',function(){
      
      // 显示或隐藏“回到顶部”的按钮
      if( $(window).scrollTop() > 200 ){  // 向上拉到某个距离时
        $('.top').show();
      }else{
        $('.top').hide();
      }

      // 决定图片是否加载
      var imgs = $('img[data-src]');  // 获取所有未加载的图片
      for(var i=0; i<imgs.length; i++){  // 遍历
        var img = imgs.eq(i);  // 获取其中一幅
        
        // 如果向上拉的距离 + 窗口本身的高度，已经超过了图片离页面顶端的距离，则可以加载该图片。看PPT示意图。
        // +200 是为了方便查看效果，再向上拉多一点才显示。测试后，可把 +200 删除。
        if( $(window).scrollTop() + $(window).height() > img.offset().top + 200 ){
          // 把data-src的值填到src里面，这时候图片有了src值，就会开始加载。最后删除掉data-src属性。
          img.attr('src', img.attr('data-src')).removeAttr('data-src');
        }
      }

    });

  });