// Pour changer img et lancer la chanson
function TogglePlayPause() {
    var img = document.getElementById('pp')
    var audio = document.getElementById('Code')

    if (img.src.includes('Images/Pause.png')) {
        img.src = 'Images/Play.png'
        audio.play()
    }
    else {
        img.src = 'Images/Pause.png'
        audio.pause()
    }
}


// Pour recommencer la musique
function RestartMusic() {
    var audio = document.getElementById('Code')

    audio.currentTime = 0
    audio.pause()
    document.getElementById('pp').src = 'Images/Pause.png'
}


// Pour recommencer en boucle la musique
function BoucleMusic() {
    var audio = document.getElementById('Code')
    var img = document.getElementById('Boucle')

    audio.loop = !audio.loop

    if (img.src.includes('Images/Boucle.png')) {

        img.src = 'Images/Boucle - Click.png'

    }
    else {

        img.src = 'Images/Boucle.png'

    }
}