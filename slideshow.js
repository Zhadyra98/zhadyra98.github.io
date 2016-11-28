var myImage=document.getElementById("images");

var imageArray=["1.jpeg","2.jpg","3.jpg","4.jpg","5.jpg"];
var imageIndex=0;
function changeImage (){
	images.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}

var intervalHandle=setInterval(changeImage,2000);
images.onclick=function(){
	clearInterval(intervalHandle);
}