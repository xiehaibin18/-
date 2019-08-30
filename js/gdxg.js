$(document).ready(function(){
function scrollTxt(){
    var controls={}, 
        values={},
        si;
    controls.rollWrap=$("#roll-wrap");
    controls.rollWrapUl=controls.rollWrap.children();
    controls.rollWrapLIs=controls.rollWrapUl.children();
    values.liNums=controls.rollWrapLIs.length;
    values.liHeight=controls.rollWrapLIs.eq(0).height();
    values.ulHeight=controls.rollWrap.height();
    this.init=function(){
        autoPlay();
        pausePlay();
    }
    /*滚动*/
    function play(){
        controls.rollWrapUl.animate({"margin-top" : "-"+values.liHeight},3500, function(){
            $(this).css("margin-top" , "0").children().eq(0).appendTo($(this));
        });
    }
    /*自动滚动*/
    function autoPlay(){
        /*如果所有li标签的高度和大于.roll-wrap的高度则滚动*/
        if(values.liHeight*values.liNums > values.ulHeight){
            si=setInterval(function(){
                play();
            });
        }
    }
}
new scrollTxt().init();
});
