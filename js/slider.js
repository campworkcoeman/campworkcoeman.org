if (document.getElementById('sImgNavHolderO')) {
    // Parameters
    var total = 5,
        delay = 5000;
    
    // Variables
    var current = 0,
        previous = total - 1,
        load = 1,
        loaded = [true],
        goToNext = false;
    
    // Initialize
    for (var i = 1; i < total; i++) {
        loaded[i] = false;
    }
    document.getElementById('sImgNavHolderO').style.display = 'block';
    window.addEventListener('load', imgLoad, false);
}

// Load image sequentially after page load
function imgLoad() {
    if (load == 1) {
        setTimeout(nextImg, delay);
    }
    
    var img = document.getElementById('sImg' + load);
    img.onload = function() {
        loaded[load] = true;
        if (goToNext) {
            goToNext = false;
            nextImg();
        }
        load++;
        if (load < total) {
            imgLoad();
        }
    }
    img.src = img.getAttribute('data-src');
}

// Transition to next image
function nextImg() {
    var next = (current + 1) % total;
    if (loaded[next]) {
        //document.getElementById('sImg' + previous).style.opacity = 0;
        document.getElementById('sImgNav' + current).style.opacity = 0.5;
        document.getElementById('sImgNav' + next).style.opacity = 1;
        if (next != 0) {
            document.getElementById('sImg' + next).style.opacity = 1;
        } else {
            document.getElementById('sImg' + current).style.opacity = 0;
        }
        if ( next == total - 1) {
            document.getElementById('sImg0').style.opacity = 1;
        }
        previous = current;
        current = next;
        
        setTimeout(nextImg, delay);
        setTimeout(hidePrevImg, delay / 2);
    } else {
        goToNext = true;
    }
}

// Hide previous image
function hidePrevImg() {
    document.getElementById('sImg' + previous).style.opacity = 0;
}
