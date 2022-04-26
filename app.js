'use strict';

var currentTime = new Date();

var hour = currentTime.getHours();
/* console.log( hour );
console.log( document.body.className );*/

if ( hour >= 5 && hour < 8 )
{
    document.body.classList.toggle('dawn');
}
else if ( hour >= 8 && hour < 11 )
{
    document.body.classList.toggle('early-morning');
}
else if ( hour >= 11 && hour < 14 )
{
    document.body.classList.toggle('morning');
}
else if ( hour >= 14 && hour < 17 )
{
    document.body.classList.toggle('afternoon');
}
else if ( hour >= 17 && hour < 20 )
{
    document.body.classList.toggle('evening');
}
else if ( hour >= 20 && hour < 23 )
{
    document.body.classList.toggle('dusk');
}
else if ( hour >= 23 && hour < 2 )
{
    document.body.classList.toggle('midnight');
}
else if ( hour >= 2 && hour < 5 )
{
    document.body.classList.toggle('night');
}

// console.log( document.body.className );