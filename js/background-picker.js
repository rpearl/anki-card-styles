function pickBackground() {                                     
    var backgroundsArray = ["RikugienLeaves", "YoyogiParkLeaves", "KoshikawaSkyline"];
    var numBackgrounds = backgroundsArray.length;            
                                                                
    //returns time in milliseconds, so to get it to the actual number i want, divide by 1000*1000
    //number should increment every ~16 minutes
    var nonRandomNumber = Math.floor(((new Date).getTime())/1000000);
    var backgroundIndex = nonRandomNumber % numBackgrounds;

    return ("_".concat(backgroundsArray[backgroundIndex], ".jpg"));
}

function setBackground() {
    var background = 'url("'+pickBackground()+'")';

    if (document.body.style.backgroundImage != background) {
        document.body.style.backgroundImage = background;
    }
}

setBackground();
