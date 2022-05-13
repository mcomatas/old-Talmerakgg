'use strict';

// GET THE TYPE OF DEVICE THE PERSON IS LOADING THE WEBSITE ON
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

console.log( deviceType() );

console.log( document.querySelector('link').href );
document.querySelector('link').href = 'mobile.css';
console.log( document.querySelector('link').href ); 

if( deviceType() === "desktop" )
{
    document.querySelector('link').href = 'main.css';
}
else
{
    document.querySelector('link').href = 'mobile.css';
}

var currentTime = new Date();

var hour = currentTime.getHours();


if ( hour >= 5 && hour < 8 )
{
    document.body.style.background = "url('./pixelDay/dawn.png')";
}
else if ( hour >= 8 && hour < 11 )
{
    document.body.style.background = "url('./pixelDay/early-morning.png')";
}
else if ( hour >= 11 && hour < 14 )
{
    document.body.style.background = "url('./pixelDay/morning.png')";
}
else if ( hour >= 14 && hour < 17 )
{
    document.body.style.background = "url('./pixelDay/afternoon.png')";
}
else if ( hour >= 17 && hour < 20 )
{
    document.body.style.background = "url('./pixelDay/evening.png')";
}
else if ( hour >= 20 && hour < 23 )
{
    document.body.style.background = "url('./pixelDay/dusk.png')";
}
else if ( hour >= 23 || hour < 2 )
{
    document.body.style.background = "url('./pixelDay/midnight.png')";
}
else if ( hour >= 2 && hour < 5 )
{
    document.body.style.background = "url('./pixelDay/night.png')";
}