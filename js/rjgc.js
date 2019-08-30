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
      	document.getElementById("jieshao").innerHTML="软件测试是软件开发中的一个重要环节。国内软件开发与测试人员的比例严重失调，市场对软件测试人员的需求量很大。软件技术（软件测试）专业培养掌握软件开发及软件测试基础知识和基本技能的实用性软件人才，至少熟练掌握业内常用的一种测试工具。可从事计算机初级编码或开发、软件测试、软件技术服务和销售等技术工作。";
      }
      if (data=="drag2") {
      	document.getElementById("jieshao").innerHTML="互联网金融应用与开发是指传统金融机构与互联网企业利用互联网技术和信息通信技术实现资金融通、支付、投资和信息中介服务的新型金融业务模式。在这种背景下，互联网金融专业应运而生并催生了对“既懂IT技术、金融学，又有互联网思维”的交叉综合型人才的巨大需求。";
      }
      if (data=="drag3") {
      	document.getElementById("jieshao").innerHTML="随着计算机应用领域的不断扩大及中国经济建设的不断发展，软件工程专业将成为一个新的热门专业。软件工程专业以计算机科学与技术学科为基础，强调软件开发的工程性，使学生在掌握计算机科学与技术方面知识和技能的基础上熟练掌握从事软件需求分析、软件设计、软件测试、软件维护和软件项目管理等工作所必需的基础知识、基本方法和基本技能，突出对学生专业知识和专业技能的培养，培养能够从事软件开发、测试、维护和软件项目管理的高级专门人才。";
      }
    }
function removeElement(id)	{
    var d_node = document.getElementById(id);
    d_node.remove(d_node);
    document.getElementById("jieshao").innerHTML="";
}