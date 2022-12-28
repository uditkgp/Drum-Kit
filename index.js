//Event listener of button click

for (var i = 0; i < 7; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonValue = this.innerHTML;
        
        pressedValue(buttonValue);

        buttonAnimation(buttonValue);
    });
}

//Event listener of key pressed

document.addEventListener("keydown",function(keyboardEvent)
{
    pressedValue(keyboardEvent.key);

    buttonAnimation(keyboardEvent.key);
});

//play sound based on event - clicked or pressed

function pressedValue(inputKey){
    switch (inputKey) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');                        //var audio = new Audio('sounds/tom-1.mp3');
            tom1.play();                                                     //audio.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:console.log(inputKey);
            break;
    }
}

//show the button that has been pressed

function buttonAnimation(key){

    var activebutton = document.querySelector("."+key);

    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100)
}


