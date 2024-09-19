function left(){
	document.getElementById(id[n]).style.display = "none";
	n = n-1<0 ? 6 : n-1;
	document.getElementById(id[n]).style.display = dis[n];
}

function right(){
	document.getElementById(id[n]).style.display = "none";
	n = n+1>6 ? 0 : n+1;
	document.getElementById(id[n]).style.display = dis[n];;
}
window.onload = function(){
	//获取两个按钮
	var prev = document.getElementById("left");
	var next = document.getElementById("right");

	var imgArr = ["pics/1.png","pics/2.png","pics/3.png","pics/4.png","pics/5.png",
		"pics/6.png","pics/7.png","pics/8.png","pics/9.png","pics/10.png",
		"pics/11.png","pics/12.png","pics/13.png","pics/14.png","pics/15.png",
		"pics/16.png","pics/17.png","pics/18.png","pics/19.png","pics/20.png","pics/21.png"];
	var imgs = document.getElementsByTagName("img");
	var index = 0;
	//分别为两个按钮绑定单击响应函数
	
	prev.onclick = function(){
		if(--index < 0){
			alert("当前已是第一张图片！");
			index++;
		}else{
			imgs[0].src = imgArr[index];
		}
	};
	next.onclick = function(){
		if(++index >20){
			alert("当前已是最后一张图片！");
			index=0;
			imgs[0].src = imgArr[index];
		}
	    else{
		imgs[0].src = imgArr[index];
	    }
	};
	/* 
		要切换图片就是要修改img的src属性
	 */
};