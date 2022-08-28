let canO = document.querySelector(".canO");
let canG = document.querySelector(".canG");
let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");
let productPng = document.querySelector(".productPng");
let ctabtn = document.querySelector(".ctabtn");
let textPng = document.querySelector(".textPng");
let offerPng = document.querySelector(".offerPng");
let bottom = document.querySelector(".bottom");
dragElementLeft(canO);
dragElementRight(canG);

function dragElementLeft(elmnt) {
    var pos1 = 0, pos2 = 0;
    var rElmnt = document.getElementById("canG");
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        animationRotation();

        e = e || window.event;
        e.preventDefault();
        pos2 = e.clientX;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos2 - e.clientX;

        pos2 = e.clientX;
        leftSpace = elmnt.offsetLeft - pos1;
        rLeftSpace = rElmnt.offsetLeft + pos1;

        if (leftSpace < 43) { leftSpace = 43 }
        if (rLeftSpace > 193) { rLeftSpace = 193 }
        if (leftSpace > 72) {
            leftSpace = 72;
            operationSecondSlide();
        }
        elmnt.style.left = leftSpace + "px";
        rElmnt.style.left = rLeftSpace + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        setTimeout(initialPosition, 3000);
    }
}

function initialPosition() {
    canO.className = canO.className.replace('rotateRight', '');
    canG.className = canG.className.replace('rotateLeft', '');
    canO.classList ? canO.classList.add('animation-shake') : canO.className += ' animation-shake';
    canG.classList ? canG.classList.add('animation-shake') : canG.className += ' animation-shake';
}

function operationSecondSlide() {
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
    productPng.classList ? productPng.classList.add('dbcan-animation') : productPng.className += ' dbcan-animation';
    ctabtn.classList ? ctabtn.classList.add('pulse-animation') : ctabtn.className += ' pulse-animation';


}

function animationRotation() {
    canO.className = canO.className.replace('animation-shake', '');
    canG.className = canG.className.replace('animation-shake', '');
    canO.classList ? canO.classList.add('rotateRight') : canO.className += ' rotateRight';
    canG.classList ? canG.classList.add('rotateLeft') : canG.className += ' rotateLeft';
}

function dragElementRight(elmnt) {
    var pos1 = 0, pos2 = 0;
    var lElmnt = document.getElementById("canO");
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        animationRotation();

        e = e || window.event;
        e.preventDefault();
        pos2 = e.clientX;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos2 - e.clientX;

        pos2 = e.clientX;
        leftSpace = elmnt.offsetLeft - pos1;
        lLeftSpace = lElmnt.offsetLeft + pos1;

        console.log(leftSpace);
        if (leftSpace > 193) { leftSpace = 193 }
        if (lLeftSpace < 43) { lLeftSpace = 43 }
        if (leftSpace < 165) {
            leftSpace = 165;
            operationSecondSlide();
        }
        elmnt.style.left = leftSpace + "px";
        lElmnt.style.left = lLeftSpace + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}