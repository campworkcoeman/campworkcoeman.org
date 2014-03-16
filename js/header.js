// Sun and moon
var sun = document.getElementById('sun'),
    moon = document.getElementById('moon');

// Get current date and time
var date = new Date();

// Calculate sun and moon positions
var lat = 41.887,
    lon = -73.043;
var sunTimes = SunCalc.getTimes(date, lat, lon),
    moonPos = SunCalc.getMoonPosition(date, lat, lon);

// Position sun and moon
if (date - sunTimes.sunrise > 0 && date - sunTimes.sunset < 0) {
    sunPos = (date - sunTimes.sunrise) / (sunTimes.sunset - sunTimes.sunrise) * 120 + 30;
    sun.style.webkitTransform='rotate(' + sunPos + 'deg)';
    sun.style.transform='rotate(' + sunPos + 'deg)';
} else {
    // Night
    document.getElementById('cw-header').className += ' cw-header-n';
    document.getElementById('hill-center').className += ' hill-center-n';
    document.getElementById('hills-right').className += ' hills-n';
    document.getElementById('hills-left').className += ' hills-n';
    document.getElementById('trees0r').className += ' trees0-n';
    document.getElementById('trees1r').className += ' trees1-n';
    document.getElementById('trees2r').className += ' trees2-n';
    document.getElementById('trees0l').className += ' trees0-n';
    document.getElementById('trees1l').className += ' trees1-n';
    document.getElementById('trees2l').className += ' trees2-n';
    document.getElementById('lake').className += ' lake-n';
}
if (moonPos.altitude > 0) {
    moon.style.top = (125 - Math.sin(moonPos.altitude)*150) + 'px';
    moon.style.left = (225 + Math.sin(moonPos.azimuth)*225) + 'px';
}

// Moon phase
var moonIllum = SunCalc.getMoonIllumination(date);
var crescent, amount;
// Not a new moon
if (moonIllum.fraction > 0.05) {
    if (moonIllum.fraction < 0.5) {
        crescent = '1';
        amount = 100 - moonIllum.fraction * 200;
    } else {
        crescent = '0';
        amount = moonIllum.fraction * 200 - 100;
    }
    moon.style.webkitTransform='rotate(' + moonIllum.angle + 'rad)';
    moon.style.transform='rotate(' + moonIllum.angle + 'rad)';
    var path = 'M100,0 a100,100 0 1,0 0,200 a' + String(amount) + ',100 0 1,' + crescent + '0,-200 z';
    document.getElementById('phase').setAttribute('d', path);
}

// Fire
if (date - sunTimes.sunset > 0 && (date.getUTCHours() < 3 || date.getUTCHours() > 12)) {
    document.getElementById('fire').className += ' fire';
}

// Sunfish
if (date.getUTCHours() > 12 && date.getUTCHours() < 21) {
    document.getElementById('sunfish').className += ' sunfish';
}
