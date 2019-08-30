		var t=document.getElementById('myCanvas');
		var ctx=t.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(122/6,342/6);
		ctx.bezierCurveTo(60/6,80/6,350/6,10/6,460/6,90/6);
		ctx.bezierCurveTo(510/6,130/6,475/6,175/6,460/6,185/6);
		ctx.bezierCurveTo(445/6,200/6,400/6,220/6,360/6,200/6);
		ctx.bezierCurveTo(270/6,110/6,110/6,170/6,122/6,342/6);
		
		var Colordiagonal=ctx.createLinearGradient(120/6,340/6,360/6,250/6);
		Colordiagonal.addColorStop(0,"black");
		Colordiagonal.addColorStop(0.8,"blue");
		ctx.fillStyle=Colordiagonal;
		ctx.fill();
		ctx.strokeStyle=Colordiagonal;
		ctx.stroke();
	
		var l=document.getElementById('myCanvas');
		var ctx=l.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(150/6,130/6);
		ctx.bezierCurveTo(100/6,180/6,60/6,300/6,135/6,375/6);
		ctx.bezierCurveTo(125/6,415/6,130/6,415/6,145/6,430/6);
		ctx.bezierCurveTo(50/6,400/6,50/6,200/6,150/6,130/6);

		var Colordiagonal=ctx.createLinearGradient(150/6,130/6,145/6,430/6);
 		Colordiagonal.addColorStop(0.75,"yellow");
		Colordiagonal.addColorStop(0.5,"orange");
 		ctx.fillStyle=Colordiagonal;
 		ctx.fill();
 		ctx.strokeStyle=Colordiagonal;
		ctx.stroke();

		var d=document.getElementById('myCanvas');
		var ctx=d.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(110/6,435/6);
		ctx.bezierCurveTo(200/6,480/6,380/6,450/6,380/6,250/6);
		ctx.bezierCurveTo(450/6,250/6,480/6,210/6,510/6,180/6);
		ctx.bezierCurveTo(530/6,410/6,350/6,550/6,110/6,435/6);

		var Colordiagonal=ctx.createLinearGradient(510/6,180/6,110/6,435/6);
		ctx.strokeStyle=Colordiagonal;
		ctx.fillStyle=Colordiagonal;
 		Colordiagonal.addColorStop(0.3,"orange");
		Colordiagonal.addColorStop(0.8,"red");
 		ctx.fill();
		ctx.stroke();

		var g=document.getElementById('myCanvas');
		var ctx=g.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle="White";
		ctx.font="30pt 隶书";
  		ctx.fillText("广州大学华软软件学院",100,50);
  		ctx.font="12pt 仿宋";
  		ctx.fillText("South China Institute of Software Engineering.gu",110,70);
  		ctx.font="20pt 微软雅黑";
  		ctx.fillText("— 软件工程系官网 —",650,80);
  		ctx.stroke();
