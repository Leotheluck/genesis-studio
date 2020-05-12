// Simple effect player, used mostly for navigation

const playEffect = (effect, volume, speed) => {
    effect.currentTime = 0
    effect.volume = volume * mainVolume * navigationVolume
    effect.playbackRate = speed
    effect.play()
}

// Playing the background musics, including the one in the tutorial

const playBackgroundEffect = (effect, volume, speed) => {
    effect.currentTime = 0
    effect.volume = volume * mainVolume * backgroundVolume
    effect.playbackRate = speed
    if (effect === tutorialBackground) {
        effect.loop = true
    }
    effect.play()
}

// Stops the effect in parameter

const stopEffect = (effect) => {
    effect.pause()
}

// Play an instrument effect

const playAudioEffect = (effect, volume, speed, duration) => {
    audioPlaying += 1
    // let eval(`audio-${audioPlaying} = new Audio(${effect})`)
    audioPlayingList[audioPlaying] = new Audio(effect)
    const audio = audioPlayingList[audioPlaying]
    audio.volume = volume * mainVolume * instrumentVolume
    audio.playbackRate = speed
    audio.play()
    console.log(duration);
    
    setTimeout(() => {
        // eval("audio" + audioPlaying) = null
        audioPlayingList[audioPlaying] = null
        console.log(audio);
    }, duration)
}

// Play audio effect when in individual mode

const playIndividualAudioEffect = (effect, volume, speed, duration) => {
    individualAudioPlaying += 1
    individualAudioPlayingList[individualAudioPlaying] = new Audio(effect)
    const audio = individualAudioPlayingList[individualAudioPlaying]
    audio.volume = volume * mainVolume * instrumentVolume
    audio.playbackRate = speed
    audio.play()
    console.log(duration);
    
    setTimeout(() => {
        individualAudioPlayingList[individualAudioPlaying] = null
        console.log(audio);
    }, duration)
}