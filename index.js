let canO = document.querySelector(".canO");
let canG = document.querySelector(".canG");
let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");
let productPng = document.querySelector(".productPng");
let ctabtn = document.querySelector(".ctabtn");
let textPng = document.querySelector(".textPng");
let offerPng = document.querySelector(".offerPng");
let bottom = document.querySelector(".bottom");
dragElement(canO);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5=0, pos6=0;
    var rElmnt = document.getElementById("canG");
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
        canO.className = canO.className.replace('animation-shake', '');
        canG.className = canG.className.replace('animation-shake', '');
        canO.classList ? canO.classList.add('rotateRight') : canO.className += ' rotateRight';
        canG.classList ? canG.classList.add('rotateLeft') : canG.className += ' rotateLeft';
    //   drag.classList ? drag.classList.add('hidden') : drag.className += ' hidden';
  
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
    //   pos4 = e.clientY;
      document.onmousemove = elementDrag;
      document.onmouseup = closeDragElement;
    }
  
    function elementDrag(e) {    
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
    //   pos2 = pos4 - e.clientY;
      
      pos3 = e.clientX;
    //   pos4 = e.clientY;
    //   topSpace = elmnt.offsetTop - pos2;
      leftSpace = elmnt.offsetLeft - pos1;
      console.log(leftSpace);
      rLeftSpace = rElmnt.offsetLeft + pos1;
    //   console.log(pos2);
    //   if(leftSpace<80){
    //     germImg.classList ? germImg.classList.add('hideZoomOut') : germImg.className += ' hideZoomOut';
    //     germ.classList ? germ.classList.add('fadeInZoom') : germ.className += ' fadeInZoom';
    //     elmnt.classList ? elmnt.classList.add('hideZoomOut') : elmnt.className += ' hideZoomOut';
    //     drag_text.classList ? drag_text.classList.add('hideZoomOut') : drag_text.className += ' hideZoomOut';
    //       slide_2_show();
    //   }
      // if (leftSpace>20) {leftSpace=20}
      if (leftSpace<43) {leftSpace=43}
      if (rLeftSpace>193) {rLeftSpace=193}
      if (leftSpace>72){
        leftSpace=72;
        bg1.classList ? bg1.classList.add('hidden') : bg1.className += ' hidden';
        canO.classList ? canO.classList.add('hidden') : canO.className += ' hidden';
        canG.classList ? canG.classList.add('hidden') : canG.className += ' hidden';
        bottom.classList ? bottom.classList.add('hidden') : bottom.className += ' hidden';
        bg2.className = bg2.className.replace('hidden', '');
        textPng.className = textPng.className.replace('hidden', '');
        offerPng.className = offerPng.className.replace('hidden', '');
        ctabtn.className = ctabtn.className.replace('hidden', '');
        productPng.className = productPng.className.replace('hidden', '');
        textPng.classList ? textPng.classList.add('text-animation') : textPng.className += ' text-animation';
        offerPng.classList ? offerPng.classList.add('text-animation') : offerPng.className += ' text-animation';
        
      }
      // if (leftSpace>230) {leftSpace=230}
      // if (topSpace>155) {topSpace=155}
      // if (topSpace<40) {topSpace=40}
  
    //   elmnt.style.top = "27px";
      elmnt.style.left = leftSpace + "px";
    //   rElmnt.style.top = "27px";
      rElmnt.style.left = rLeftSpace + "px";
      console.log(rLeftSpace);
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }