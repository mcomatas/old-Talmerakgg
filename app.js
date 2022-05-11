'use strict';

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