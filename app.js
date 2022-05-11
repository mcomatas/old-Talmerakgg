'use strict';

var currentTime = new Date();

var hour = currentTime.getHours();
/* console.log( hour );
console.log( document.body.className );*/

// console.log( Date.now() );

// console.log( document.querySelector('.midnight') );

if ( hour >= 5 && hour < 8 )
{
    document.body.style.background = "url('./pixelDay/dawn.png')";
    // document.body.classList.toggle('dawn');
}
else if ( hour >= 8 && hour < 11 )
{
    document.body.style.background = "url('./pixelDay/early-morning.png')";
    // document.body.classList.toggle('early-morning');
}
else if ( hour >= 11 && hour < 14 )
{
    document.body.style.background = "url('./pixelDay/morning.png')";
    // document.body.classList.toggle('morning');
}
else if ( hour >= 14 && hour < 17 )
{
    document.body.style.background = "url('./pixelDay/afternoon.png')";
    // document.body.classList.toggle('afternoon');
}
else if ( hour >= 17 && hour < 20 )
{
    document.body.style.background = "url('./pixelDay/evening.png')";
    // document.body.classList.toggle('evening');
}
else if ( hour >= 20 && hour < 23 )
{
    document.body.style.background = "url('./pixelDay/dusk.png')";
    // document.body.classList.toggle('dusk');
}
else if ( hour >= 23 || hour < 2 )
{
    document.body.style.background = "url('./pixelDay/midnight.png')";
    // document.body.classList.toggle('midnight');
}
else if ( hour >= 2 && hour < 5 )
{
    document.body.style.background = "url('./pixelDay/night.png')";
    // document.body.classList.toggle('night');
}