  let index=1;
  const imgCount = 5;
function slide()
{
  //debugger;
    const mainContainer = document.getElementById("mainContainer");
    const image = document.getElementById("image");
    let dot = document.getElementById('dot' + " " + index);
    let src = image.src;
    let currentIndex = Number(src.substring(src.indexOf("imgs/")+5,src.indexOf(".jpg")));
    image.setAttribute("src","imgs/" + index + ".jpg");
    //dot.style.backgroundColor = "#404040";
    let i = currentIndex+1;
    if(i > imgCount)
    {
      i = 1;
    }
    document.getElementById('dot' + " " + i).style.backgroundColor = "#404040";
    for(let k =1; k <= imgCount; k++){
      if(k != i){
        document.getElementById('dot' + " " + k).style.backgroundColor = "#bbb";
      }
    }

    index++;
    if(index > imgCount)
    {
    index =1;
    }
}

let interval = setInterval(slide,2000,index);

let playing = true;
let pauseIcon = document.getElementById("pause");

function pause(){
  //debugger;
  let pauseIcon = document.getElementById("pause");
  pauseIcon.className = "fas fa-play";
	playing = false;
	clearInterval(interval);
}

function play(){
	playing = true;
  let pauseIcon = document.getElementById("pause");
  pauseIcon.className = "fas fa-pause";
	interval = setInterval(slide,2000,"index");
}
pauseIcon.onclick = function(){
	if(playing){
    pause();
  }
	else{
     play();
    }
};

function pauseHover(){
  let pauseDiv = document.getElementById("pauseDiv");
  let pauseIcon = document.getElementById("pause");
  pauseDiv.onmouseover = function(){
    pauseDiv.style.opacity = "1";
    pauseIcon.style.fontSize = "70px";
  }

  pauseDiv.onmouseout = function(){
    pauseDiv.style.opacity = "0.2";
    pauseIcon.style.fontSize = "50px";
  }
}
pauseHover();

function showCurrent(index){
  //debugger;
  const image=document.getElementById("image");
  image.setAttribute("src","imgs/" + index + ".jpg");
  document.getElementById("dot" + " " + index).style.backgroundColor = "#404040";
  for(let k =1; k <= imgCount; k++){
    if(k != index){
      document.getElementById('dot' + " " + k).style.backgroundColor = "#bbb";
    }
  }

}

function prev(){
  const image = document.getElementById("image");
  let src = image.src;
  let currentIndex = src.substring(src.indexOf("imgs/")+5,src.indexOf(".jpg"));
  let i = currentIndex-1;
  if(i == 0)
  {
    i = imgCount;
  }
  image.setAttribute("src","imgs/" + i + ".jpg");
  document.getElementById('dot' + " " + i).style.backgroundColor = "#404040";
  for(let k =1; k <= imgCount; k++){
    if(k != i){
      document.getElementById('dot' + " " + k).style.backgroundColor = "#bbb";
    }
  }
}

function next(){
  slide();
}
