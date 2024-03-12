var element = 0;
var toggle = false;

function myMenu() {
    var element = document.getElementById("myMenu");
    element.classList.toggle("myMenuSwitch");

    var element = document.getElementById("toggleMenuTextOn");
    element.classList.toggle("toggleMenuTextOff");
}

function darkLight() {
    var element = document.getElementById("myMenu");
    element.classList.toggle("darkLightMenu");

    var element = document.getElementById("layerBlue");
    element.classList.toggle("darkLightBlue");

    var element = document.getElementById("layerDarkBlue");
    element.classList.toggle("darkLightDarkBlue");
  
    var element = document.getElementById("layerBlue2");
    element.classList.toggle("darkLightBlue");

    if (toggle === true) {
        document.getElementById('liDark').src  = './img/linkedin.png';
    } else {
       document.getElementById('liDark').src = './img/linkedinDark.png';
    }

    if (toggle === true) {
        document.getElementById('instaDark').src  = './img/instagram.png';
    } else {
       document.getElementById('instaDark').src = './img/instagramDark.png';
    }

    if (toggle === true) {
        document.getElementById('mailDark').src  = './img/mail.png';
    } else {
       document.getElementById('mailDark').src = './img/mailDark.png';
    }
    toggle = !toggle;
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

