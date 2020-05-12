// Main player mechanic, uses the size of the track to define how much time it should set as interval

const globalMusicPlayer = () => {

    if (isMainPlaying) {

        audioPlayingList = ([])
        console.log(audioPlayingList)

        loopCounter += 1
        let loopCounterInside = loopCounter

        for (const box of soundBoxes) {
            for (let i = 1; i <= boxesLength; i++) {
                globalPlay(box, i, (i*boxesDuration) - boxesDuration, loopCounter)
            }
        }

        // backgroundMusicPlay(loopCounter)
        
        if (trackDuration === 8000) {
            backgroundMusicPlay(loopCounter)
        } else if (trackDuration === 16000) {
            backgroundMusicPlay32X(loopCounter)
        }

        timeStampActual.style.display = "block"

        setTimeout(() => {
            if (loopCounterInside == loopCounter) {
                globalMusicPlayer()
            }
        }, trackDuration)
    }
}

// Toggled if you click the pause button

const stopMusic = () => {
    playAllButton.style.backgroundImage = "url(./img/play-button.png)"
    isMainPlaying = false
    loopCounter += 1
    backgroundMusicList.forEach(element => {
        element.pause()
    })
    audioPlayingList.forEach(element => {
        console.log(element)
        
        if (element != null) {
            element.pause()
        }
    })
    // for (let i = 0; i < audioPlaying; i++) {

    // }
    musicLoop16x = 0
    timeStamp.style.display = "none"
    timeStamp16X.style.display = "none"
    timeStamp32X.style.display = "none"
}

// Stops an individual effect

const stopIndividualEffect = () => {
    individualAudioPlayingList.forEach(element => {
        console.log(element)
        
        if (element != null) {
            element.pause()
            individualAudioPlayingList = ([])
        }
    })
}

// When clicking the play button

playAllToggle.addEventListener('click', () => {
    playEffect(clickEffect, 0.3, 1)
    playAllTopBlock.style.width = "3vw"
    playAllFooterBlock.style.width = "3vw"
    setTimeout(() => {
        playAllFooterBlock.style.width = ""
        playAllTopBlock.style.width = ""
    }, 200)

    if (!isMainPlaying) {
        playAllButton.style.backgroundImage = "url(./img/pause-button.png)"
        isMainPlaying = true
        globalMusicPlayer()
    } else {
        stopMusic()
    }
})