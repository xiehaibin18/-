function allowDrop(ev) {
      ev.preventDefault();
    }
 
function drag(ev) {
 	
      ev.dataTransfer.setData("Text", ev.target.id);
    }
 function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      var item = document.getElementById(data).cloneNode();
      ev.target.appendChild(item);
      if (data=="drag1") {
      	document.getElementById("jieshao").innerHTML="大数据技术与应用专业是新兴的“互联网+”专业，大数据技术与应用专业将大数据分析挖掘与处理、移动开发与架构、人软件开发、云计算等前沿技术相结合，并引入企业真实项目演练，依托产学界的雄厚师资，旨在培养适应新形势，具有最新思维和技能的“高层次、实用型、国际化”的复合型大数据专业人才。";
      }else{
      	document.getElementById("jieshao").innerHTML="移动互联网应用技术，就是借助移动互联网终端（如手机、平板等）实现传统的互联网应用或服务，诸如12306手机客户端、CCTV手机网站、微信、QQ手机客户端、支付宝手机客户端、风怒的小鸟手机游戏、当当手机客户端、京东商城手机客户端、百度地图手机客户端等等，还包括手机门禁系统、手机点餐系统、手机扫码支付等典型物联网应用系统。随着，手机本身的便携性和智能化的不断提升，很多原来只在电脑上实现的应用都移植到手机端，手机用户群也渐渐超过了传统的电脑用户群，据估计2015年国内移动端用户将超过12亿！物联网应用更加广泛，包括智能家电，穿戴计算机，工业控制，交通通信等多种领域，就业前景广阔。这些都使得以手机软件开发和物联网开发为代表的移动互联网应用技术成为目前IT最热门的方向。";
      }
    }
function removeElement(id)	{
    var d_node = document.getElementById(id);
    d_node.parentNode.removeChild(d_node);
    document.getElementById("jieshao").innerHTML="";
}