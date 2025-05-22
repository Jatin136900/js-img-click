let images =["img/two.jpg","img/three.jpg","img/four.jpg","img/five.jpg","img/six.jpg","img/seven.jpg",];
 let button = document.getElementById("btn")
 button.addEventListener("click",()=>{
 let index = Math.floor(Math.random()*images.length);
 photo.src = images[index];
 });