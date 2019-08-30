
function getLocation()
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position){

    //返回用户位置
               //经度
               var longitude =position.coords.longitude;
               //纬度
               var latitude = position.coords.latitude;

               //使用百度地图API
               //创建地图实例  
               var map =new BMap.Map("mapholder");

               //创建一个坐标
               var point =new BMap.Point(longitude,latitude);
               //地图初始化，设置中心点坐标和地图级别  
               map.centerAndZoom(point,15);

  };

