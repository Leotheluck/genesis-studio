// Plays the audio, taking in parameter the time before it should be played

const globalPlay = (box, number, time, loop) => {
    setTimeout(() => {
        if (isMainPlaying) {
            if ((box.className.includes(`box-${number}-1`)) || (box.className.includes(`box-${number}-2`)) || (box.className.includes(`box-${number}-3`))) {
                if (box.children[0]) {
                    if (loop == loopCounter) {

                        const effect = eval(box.children[0].id)

                        playAudioEffect(effect.url, effect.volume, 1, effect.duration)

                        if (effect.instrument === "koto") {
                            backgroundPlayer.style.filter = `invert(${activePlayerInvert}) saturate(100%) hue-rotate(0deg)`
                        } else if (effect.instrument === "cymbal") {
                            backgroundPlayer.style.filter = `invert(${activePlayerInvert}) saturate(100%) hue-rotate(150deg)`
                        } else if (effect.instrument === "drum") {
                            backgroundPlayer.style.filter = `invert(${activePlayerInvert}) saturate(100%) hue-rotate(250deg)`
                        } else if (effect.instrument === "kick") {
                            backgroundPlayer.style.filter = `invert(${activePlayerInvert}) saturate(100%) hue-rotate(-110deg)`
                        }

                        setTimeout(() => {
                            backgroundPlayer.style.filter = activePlayerPalette.filter
                        }, effect.duration)
                    }
                }
            }
        }
    }, time)
}

// plays the background music

const backgroundMusicPlay = (x) => {
    for (const music of backgroundMusics) {
        if (music.id) {
            if (x == loopCounter) {
                if (music.className.includes("selected")) {
                    playBackgroundEffect(eval(music.id), 1, 1)
                    console.log(x);
                }
            }
        }
    }
}

// If track size is 32x and 16s, plays 2 times the background music

const backgroundMusicPlay32X = (x) => {
    for (const music of backgroundMusics) {
        if (music.id) {
            if (x == loopCounter) {
                if (music.className.includes("selected")) {
                    playBackgroundEffect(eval(music.id), 1, 1)
                    console.log(x);

                    setTimeout(() => {
                        if (x == loopCounter) {
                            playBackgroundEffect(eval(music.id), 1, 1)
                            console.log(x);
                        }
                    }, trackDuration/2)
                }
            }
        }
    }
}