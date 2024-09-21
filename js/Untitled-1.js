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

	var imgArr = ["pics/1.jpg","pics/2.jpg","pics/3.jpg","pics/4.jpg","pics/5.jpg",
		"pics/6.jpg","pics/7.jpg","pics/8.jpg","pics/9.jpg","pics/10.jpg",
		"pics/11.jpg","pics/12.jpg","pics/13.jpg","pics/14.jpg","pics/15.jpg",
		"pics/16.jpg","pics/17.jpg","pics/18.jpg","pics/19.jpg","pics/20.jpg","pics/21.jpg"];
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
