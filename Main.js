// Clearing all the boxes from the track

const clearBoxes = () => {
    for (const box of soundBoxes) {
        if (box.children[0]) {
            box.removeChild(box.children[0])
        }
    }
    console.log("All boxes have been cleared!")
}

clearButton.addEventListener('click', () => {
    clearBoxes()
    playEffect(removeEffect, 0.8, 1)
})

// Toggles the main navigation menu

menuToggle.addEventListener('click', () => {
    if(!menuToggled) {
        toggleMenu(true)
    } else {
        hideMenu(true)
        closeAllOptions(true)
    }
})

mainFilter.addEventListener('click', () => {
    if (menuToggled) {
        hideMenu(false)
        closeAllOptions(true)
    } else {
        console.log("Error : Main Filter has been clicked while being hidden.");
    }
})

// Adds hover sound effect

for (const setting of settingsList) {
    setting.addEventListener('mouseenter', () => {
        playEffect(hoverEffect, 0.3, 1)
    })
}

// Allows to close the menu if click on the black background behind

optionsTab.addEventListener('click', () => {
    if (
        !event.target.closest('.main-container .options .audio')
    && !event.target.closest('.main-container .options .graphics')
    && !event.target.closest('.main-container .options .language')
    && !event.target.closest('.main-container .options .tutorial')
    && !event.target.closest('.main-container .options .github')
    ) {
        if (isOptionsActive) {
            playEffect(checkEffect, 0.6, 1)
            closeAllOptions(true)
        }
    }
})

// Function that closes all the option tabs

const closeAllOptions = (variables) => {
    audioOptions.style.display = "none"
    graphicsOptions.style.display = "none"
    languageOptions.style.display = "none"
    tutorialOptions.style.display = "none"
    githubOptions.style.display = "none"
    optionsTab.style.display = "none"
    if (variables) {
        isOptionsActive = false
        audioOptionActive = false
        graphicsOptionActive = false
        languageOptionActive = false
        tutorialOptionActive = false
        githubOptionActive = false
    }
}

// Event listener for all the buttons of the navigation bar, toggles the concerned option menu

audioSettingsButton.addEventListener('click', () => {
    openSetting(audioSettingsButton)
    closeAllOptions(false)

    if (!audioOptionActive) {
        closeAllOptions(true)
        isOptionsActive = true
        audioOptionActive = true
        optionsTab.style.display = "block"
        audioOptions.style.display = "block"
    } else if (audioOptionActive) {
        isOptionsActive = false
        audioOptionActive = false
        audioOptions.style.display = "none"
        optionsTab.style.display = "none"
    }
})

graphicsSettingsButton.addEventListener('click', () => {
    openSetting(graphicsSettingsButton)
    closeAllOptions(false)

    if (!graphicsOptionActive) {
        closeAllOptions(true)
        isOptionsActive = true
        graphicsOptionActive = true
        optionsTab.style.display = "block"
        graphicsOptions.style.display = "block"
    } else if (graphicsOptionActive) {
        isOptionsActive = false
        graphicsOptionActive = false
        graphicsOptions.style.display = "none"
        optionsTab.style.display = "none"
    }
})

languageSettingsButton.addEventListener('click', () => {
    openSetting(languageSettingsButton)
    closeAllOptions(false)

    if (!languageOptionActive) {
        closeAllOptions(true)
        isOptionsActive = true
        languageOptionActive = true
        optionsTab.style.display = "block"
        languageOptions.style.display = "block"
    } else if (languageOptionActive) {
        isOptionsActive = false
        languageOptionActive = false
        languageOptions.style.display = "none"
        optionsTab.style.display = "none"
    }
})

tutorialLaunchButton.addEventListener('click', () => {
    openSetting(tutorialLaunchButton)
    closeAllOptions(false)

    if (!tutorialOptionActive) {
        closeAllOptions(true)
        isOptionsActive = true
        tutorialOptionActive = true
        optionsTab.style.display = "block"
        tutorialOptions.style.display = "block"
    } else if (tutorialOptionActive) {
        isOptionsActive = false
        tutorialOptionActive = false
        tutorialOptions.style.display = "none"
        optionsTab.style.display = "none"
    }
})

githubPageButton.addEventListener('click', () => {
    openSetting(githubPageButton)
    closeAllOptions(false)

    if (!githubOptionActive) {
        closeAllOptions(true)
        isOptionsActive = true
        githubOptionActive = true
        optionsTab.style.display = "block"
        githubOptions.style.display = "block"
    } else if (githubOptionActive) {
        isOptionsActive = false
        githubOptionActive = false
        githubOptions.style.display = "none"
        optionsTab.style.display = "none"
    }
})

// Function & event listener for when the user decides to modify the volume

globalVolumeSwitch.children[1].addEventListener('input', () => {
    if (isMainPlaying) {
        stopMusic()
    }
    if (activeAudioSwitch != 0) {
        if (activeAudioSwitch === 1) {
            navigationVolumeSwitch.children[0].classList.remove('active')
            navigationVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 2) {
            instrumentVolumeSwitch.children[0].classList.remove('active')
            instrumentVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 3) {
            backgroundVolumeSwitch.children[0].classList.remove('active')
            backgroundVolumeSwitch.children[1].classList.remove('active-slider')
        }
        playEffect(clickEffect, 0.5, 1)
        globalVolumeSwitch.children[0].classList.add('active')
        globalVolumeSwitch.children[1].classList.add('active-slider')
        activeAudioSwitch = 0
    }
    playEffect(hoverEffect, 0.5, 1)
    audioOptionsVolumeIndicator.textContent = globalVolumeSwitch.children[1].value
    mainVolume = globalVolumeSwitch.children[1].value / 100
})

navigationVolumeSwitch.children[1].addEventListener('input', () => {
    if (activeAudioSwitch != 1) {
        if (activeAudioSwitch === 0) {
            globalVolumeSwitch.children[0].classList.remove('active')
            globalVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 2) {
            instrumentVolumeSwitch.children[0].classList.remove('active')
            instrumentVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 3) {
            backgroundVolumeSwitch.children[0].classList.remove('active')
            backgroundVolumeSwitch.children[1].classList.remove('active-slider')
        }
        playEffect(clickEffect, 0.5, 1)
        navigationVolumeSwitch.children[0].classList.add('active')
        navigationVolumeSwitch.children[1].classList.add('active-slider')
        activeAudioSwitch = 1
    }
    playEffect(hoverEffect, 0.5, 1)
    audioOptionsVolumeIndicator.textContent = navigationVolumeSwitch.children[1].value
    navigationVolume = navigationVolumeSwitch.children[1].value / 100
})

instrumentVolumeSwitch.children[1].addEventListener('input', () => {
    if (activeAudioSwitch != 2) {
        if (activeAudioSwitch === 0) {
            globalVolumeSwitch.children[0].classList.remove('active')
            globalVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 1) {
            navigationVolumeSwitch.children[0].classList.remove('active')
            navigationVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 3) {
            backgroundVolumeSwitch.children[0].classList.remove('active')
            backgroundVolumeSwitch.children[1].classList.remove('active-slider')
        }
        playEffect(clickEffect, 0.5, 1)
        instrumentVolumeSwitch.children[0].classList.add('active')
        instrumentVolumeSwitch.children[1].classList.add('active-slider')
        activeAudioSwitch = 2
    }
    playEffect(hoverEffect, 0.5, 1)
    audioOptionsVolumeIndicator.textContent = instrumentVolumeSwitch.children[1].value
    instrumentVolume = instrumentVolumeSwitch.children[1].value / 100
})

backgroundVolumeSwitch.children[1].addEventListener('input', () => {
    if (activeAudioSwitch != 3) {
        if (activeAudioSwitch === 0) {
            globalVolumeSwitch.children[0].classList.remove('active')
            globalVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 1) {
            navigationVolumeSwitch.children[0].classList.remove('active')
            navigationVolumeSwitch.children[1].classList.remove('active-slider')
        } else if (activeAudioSwitch === 2) {
            instrumentVolumeSwitch.children[0].classList.remove('active')
            instrumentVolumeSwitch.children[1].classList.remove('active-slider')
        }
        playEffect(clickEffect, 0.5, 1)
        backgroundVolumeSwitch.children[0].classList.add('active')
        backgroundVolumeSwitch.children[1].classList.add('active-slider')
        activeAudioSwitch = 3
    }
    playEffect(hoverEffect, 0.5, 1)
    audioOptionsVolumeIndicator.textContent = backgroundVolumeSwitch.children[1].value
    backgroundVolume = backgroundVolumeSwitch.children[1].value / 100
})

// Changing the color mode of the website

lightMode.children[1].addEventListener('click', () => {
    if (activeGraphicsMode === 0) {
        console.log("Already active mode !");
    } else if (activeGraphicsMode === 1) {
        activeGraphicsMode = 0
        switchGraphicsMode(lightMode, darkMode, lightModeColors)
    } else if (activeGraphicsMode === 2) {
        activeGraphicsMode = 0
        switchGraphicsMode(lightMode, redMode, lightModeColors)
    }
})

darkMode.children[1].addEventListener('click', () => {
    if (activeGraphicsMode === 0) {
        activeGraphicsMode = 1
        switchGraphicsMode(darkMode, lightMode, darkModeColors)
    } else if (activeGraphicsMode === 1) {
        console.log("Already active mode !");
    } else if (activeGraphicsMode === 2) {
        activeGraphicsMode = 1
        switchGraphicsMode(darkMode, redMode, darkModeColors)
    }
})

redMode.children[1].addEventListener('click', () => {
    if (activeGraphicsMode === 0) {
        activeGraphicsMode = 2
        switchGraphicsMode(redMode, lightMode, redModeColors)
    } else if (activeGraphicsMode === 1) {
        activeGraphicsMode = 2
        switchGraphicsMode(redMode, darkMode, redModeColors)
    } else if (activeGraphicsMode === 2) {
        console.log("Already active mode !")
    }
})

// Change the color of the music player

blackWhitePlayer.addEventListener('click', () => {
    if (activePlayerColors === 0) {
        console.log("Already active colors !")
    } else if (activePlayerColors === 1) {
        activePlayerColors = 0
        activePlayerPalette = blackWhitePlayerColors
        activePlayerInvert = "0%"
        switchPlayColors(blackWhitePlayer, whiteBlackPlayer, blackWhitePlayerColors)
    } else if (activePlayerColors === 2) {
        activePlayerColors = 0
        activePlayerPalette = blackWhitePlayerColors
        activePlayerInvert = "0%"
        switchPlayColors(blackWhitePlayer, whiteRedPlayer, blackWhitePlayerColors)
    } else if (activePlayerColors === 3) {
        activePlayerColors = 0
        activePlayerPalette = blackWhitePlayerColors
        activePlayerInvert = "0%"
        switchPlayColors(blackWhitePlayer, blackYellowPlayer, blackWhitePlayerColors)
    }
})

whiteBlackPlayer.addEventListener('click', () => {
    if (activePlayerColors === 0) {
        activePlayerColors = 1
        activePlayerPalette = whiteBlackPlayerColors
        activePlayerInvert = "100%"
        switchPlayColors(whiteBlackPlayer, blackWhitePlayer, whiteBlackPlayerColors)
    } else if (activePlayerColors === 1) {
        console.log("Already active colors !")
    } else if (activePlayerColors === 2) {
        activePlayerColors = 1
        activePlayerPalette = whiteBlackPlayerColors
        activePlayerInvert = "100%"
        switchPlayColors(whiteBlackPlayer, whiteRedPlayer, whiteBlackPlayerColors)
    } else if (activePlayerColors === 3) {
        activePlayerColors = 1
        activePlayerPalette = whiteBlackPlayerColors
        activePlayerInvert = "100%"
        switchPlayColors(whiteBlackPlayer, blackYellowPlayer, whiteBlackPlayerColors)
    }
})

whiteRedPlayer.addEventListener('click', () => {
    if (activePlayerColors === 0) {
        activePlayerColors = 2
        activePlayerPalette = whiteRedPlayerColors
        activePlayerInvert = "100%"
        switchPlayColors(whiteRedPlayer, blackWhitePlayer, whiteRedPlayerColors)
    } else if (activePlayerColors === 1) {
        activePlayerColors = 2
        activePlayerPalette = whiteRedPlayerColors
        activePlayerInvert = "100%"
        switchPlayColors(whiteRedPlayer, whiteBlackPlayer, whiteRedPlayerColors)
    } else if (activePlayerColors === 2) {
        console.log("Already active colors !")
    } else if (activePlayerColors === 3) {
        activePlayerColors = 2
        activePlayerPalette = whiteRedPlayerColors
        activePlayerInvert = "100%"
        switchPlayColors(whiteRedPlayer, blackYellowPlayer, whiteRedPlayerColors)
    }
})

blackYellowPlayer.addEventListener('click', () => {
    if (activePlayerColors === 0) {
        activePlayerColors = 3
        activePlayerPalette = blackYellowPlayerColors
        activePlayerInvert = "0%"
        switchPlayColors(blackYellowPlayer, blackWhitePlayer, blackYellowPlayerColors)
    } else if (activePlayerColors === 1) {
        activePlayerColors = 3
        activePlayerPalette = blackYellowPlayerColors
        activePlayerInvert = "0%"
        switchPlayColors(blackYellowPlayer, whiteBlackPlayer, blackYellowPlayerColors)
    } else if (activePlayerColors === 2) {
        activePlayerColors = 3
        activePlayerPalette = blackYellowPlayerColors
        activePlayerInvert = "0%"
        switchPlayColors(blackYellowPlayer, whiteRedPlayer, blackYellowPlayerColors)
    } else if (activePlayerColors === 3) {
        console.log("Already active colors !")
    }
})

// Change the language of the website

frenchLanguage.children[1].addEventListener('click', () => {
    if (activeLanguage === 0) {
        console.log("Already active language !")
    } else if (activeLanguage === 1) {
        activeLanguage = 0
        switchActiveLanguage(frenchLanguage, englishLanguage, frFR)
    } else if (activeLanguage === 2) {
        activeLanguage = 0
        switchActiveLanguage(frenchLanguage, japaneseLanguage, frFR)
    }
})

englishLanguage.children[1].addEventListener('click', () => {
    if (activeLanguage === 0) {
        activeLanguage = 1
        switchActiveLanguage(englishLanguage, frenchLanguage, enUS)
    } else if (activeLanguage === 1) {
        console.log("Already active language !")
    } else if (activeLanguage === 2) {
        activeLanguage = 1
        switchActiveLanguage(englishLanguage, japaneseLanguage, enUS)
    }
})

japaneseLanguage.children[1].addEventListener('click', () => {
    if (activeLanguage === 0) {
        activeLanguage = 2
        switchActiveLanguage(japaneseLanguage, frenchLanguage, jpJP)
    } else if (activeLanguage === 1) {
        activeLanguage = 2
        switchActiveLanguage(japaneseLanguage, englishLanguage, jpJP)
    } else if (activeLanguage === 2) {
        console.log("Already active language !")
    }
})

// Mechanics for the tutorial (different slides)

const switchTutorialSlide = (newSlide, newSlideFilter, oldSlide, oldSlideFilter) => {
    playEffect(glitchEffect, 0.2, 1)
    playEffect(clickEffect, 0.4, 1)
    oldSlide.style.display = "none"
    oldSlideFilter.style.display = "none"
    newSlide.style.display = "block"
    newSlideFilter.style.display = "flex"
}

tutorial1NextButton.addEventListener('click', () => {    
    switchTutorialSlide(tutorial2Message, tutorial2Filter, tutorial1Message, tutorial1Filter)
    playEffect(tutorial02, 0.9, 1)
    stopEffect(tutorial01)
})

tutorial2BeforeButton.addEventListener('click', () => {
    switchTutorialSlide(tutorial1Message, tutorial1Filter, tutorial2Message, tutorial2Filter)
    playEffect(tutorial01, 0.9, 1)
    stopEffect(tutorial02)
})

tutorial2NextButton.addEventListener('click', () => {    
    switchTutorialSlide(tutorial3Message, tutorial3Filter, tutorial2Message, tutorial2Filter)
    playEffect(tutorial03, 0.9, 1)
    stopEffect(tutorial02)
})

tutorial3BeforeButton.addEventListener('click', () => {
    switchTutorialSlide(tutorial2Message, tutorial2Filter, tutorial3Message, tutorial3Filter)
    playEffect(tutorial02, 0.9, 1)
    stopEffect(tutorial03)
})

tutorial3NextButton.addEventListener('click', () => {
    switchTutorialSlide(tutorial4Message, tutorial4Filter, tutorial3Message, tutorial3Filter)
    tutorialCharacters.children[0].style.marginRight = "40vw"
    tutorialCharacters.children[0].style.transform = "rotateY(180deg)"
    playEffect(tutorial04, 0.9, 1)
    stopEffect(tutorial03)
})

tutorial4BeforeButton.addEventListener('click', () => {
    switchTutorialSlide(tutorial3Message, tutorial3Filter, tutorial4Message, tutorial4Filter)
    tutorialCharacters.children[0].style.marginRight = "10vw"
    tutorialCharacters.children[0].style.transform = "rotateY(0deg)"
    playEffect(tutorial03, 0.9, 1)
    stopEffect(tutorial04)
})

tutorial4NextButton.addEventListener('click', () => {
    switchTutorialSlide(tutorial5Message, tutorial5Filter, tutorial4Message, tutorial4Filter)
    playEffect(tutorial05, 0.9, 1)
    stopEffect(tutorial04)
    tutorialSkip.style.display = "none"
})

tutorial5BeforeButton.addEventListener('click', () => {
    switchTutorialSlide(tutorial4Message, tutorial4Filter, tutorial5Message, tutorial5Filter)
    playEffect(tutorial04, 0.9, 1)
    stopEffect(tutorial05)
    tutorialSkip.style.display = "flex"
})

tutorial5NextButton.addEventListener('click', () => {    
    closeTutorial()
})

const beginTutorial = () => {
    tutorialViews.style.display = "block"
    tutorial1Message.style.display = "block"
    tutorial1Filter.style.display = "flex"
    playEffect(tutorial01, 0.9, 1)
    stopMusic()
    playBackgroundEffect(tutorialBackground, 0.2, 1)
}

const closeTutorial = () => {
    tutorialViews.style.display = "none"
    tutorialCharacters.children[0].style.marginRight = "10vw"
    tutorialCharacters.children[0].style.transform = "rotateY(0deg)"
    tutorialSkip.style.display = "flex"
    stopEffect(tutorialBackground)
    stopEffect(tutorial01)
    stopEffect(tutorial02)
    stopEffect(tutorial03)
    stopEffect(tutorial04)
    stopEffect(tutorial05)
    playEffect(glitchEffect, 0.2, 1)
    playEffect(clickEffect, 0.4, 1)
    tutorial1Message.style.display = "none"
    tutorial1Filter.style.display = "none"
    tutorial2Message.style.display = "none"
    tutorial2Filter.style.display = "none"
    tutorial3Message.style.display = "none"
    tutorial3Filter.style.display = "none"
    tutorial4Message.style.display = "none"
    tutorial4Filter.style.display = "none"
    tutorial5Message.style.display = "none"
    tutorial5Filter.style.display = "none"
}

tutorialSkip.children[0].addEventListener('click', () => {
    closeTutorial()
})

tutorialYesButton.addEventListener('click', () => {
    closeAllOptions(true)
    hideMenu(true)
    playEffect(wooshEffect, 0.5, 1)
    beginTutorial()
})

tutorialNoButton.addEventListener('click', () => {
    closeAllOptions(true)
    playEffect(clickEffect, 0.4, 1)
})

// Gestion of the parallax effect in the tutorial

document.addEventListener('mousemove', (event) => {
    tutorialCharacters.style.left = `${event.clientX / 200}vw`
    tutorialCharacters.style.top = `${event.clientY / 200}vh`
    tutorialCharacters.style.transform = `rotateY(${(event.clientX / 60) - 20}deg)`

    tutorialSkip.style.left = `${event.clientX / 800}vw`
    tutorialSkip.style.top = `${event.clientY / 800}vh`

    tutorial1Message.style.left = `${event.clientX / 300}vw`
    tutorial1Message.style.top = `${event.clientY / 300}vh`
    tutorial1Message.style.transform = `translateX(50vw) translateY(60vh) rotateY(${(event.clientX / 60) - 20}deg)`

    tutorial2Message.style.left = `${event.clientX / 300}vw`
    tutorial2Message.style.top = `${event.clientY / 300}vh`
    tutorial2Message.style.transform = `translateX(50vw) translateY(60vh) rotateY(${(event.clientX / 60) - 20}deg)`

    tutorial3Message.style.left = `${event.clientX / 300}vw`
    tutorial3Message.style.top = `${event.clientY / 300}vh`
    tutorial3Message.style.transform = `translateX(50vw) translateY(60vh) rotateY(${(event.clientX / 60) - 20}deg)`

    tutorial4Message.style.left = `${event.clientX / 300}vw`
    tutorial4Message.style.top = `${event.clientY / 300}vh`
    tutorial4Message.style.transform = `translateX(30vw) translateY(60vh) rotateY(${(event.clientX / 60) - 20}deg)`

    tutorial5Message.style.left = `${event.clientX / 300}vw`
    tutorial5Message.style.top = `${event.clientY / 300}vh`
    tutorial5Message.style.transform = `translateX(30vw) translateY(60vh) rotateY(${(event.clientX / 60) - 20}deg)`
})

// If you decide to not visit the github page

githubNoButton.addEventListener('click', () => {
    closeAllOptions(true)
    playEffect(clickEffect, 0.4, 1)
})

// Mexhanics for the configurations ( pre-made musics )

configuration1.children[0].addEventListener('click', () => {
    switchActiveConfig(0, version8toggle, version8, "8x-8s", "64vw", timeStamp, 8, 1000, 8000, version16toggle, version16, false)
    switchActiveConfig(0, version8toggle, version8, "8x-8s", "64vw", timeStamp, 8, 1000, 8000, version32toggle, version32, false)

    for (const music of backgroundMusics) {
        music.classList.remove("selected")
        music.children[1].children[2].style.display = "flex"
        music.children[1].children[3].style.display = "none"
    }

    document.querySelector('#background06').classList.add("selected")
    document.querySelector('#background06').children[1].children[2].style.display = "none"
    document.querySelector('#background06').children[1].children[3].style.display = "flex"
    document.querySelector('#background07').classList.add("selected")
    document.querySelector('#background07').children[1].children[2].style.display = "none"
    document.querySelector('#background07').children[1].children[3].style.display = "flex"

    loadConfigBox(document.querySelector('.box-1-1'), cymbal04)
    loadConfigBox(document.querySelector('.box-1-3'), kick12)
    loadConfigBox(document.querySelector('.box-3-2'), kick11)
    loadConfigBox(document.querySelector('.box-5-2'), kick12)
    loadConfigBox(document.querySelector('.box-5-3'), drum04)
    loadConfigBox(document.querySelector('.box-7-2'), kick11)
})

configuration2.children[0].addEventListener('click', () => {
    switchActiveConfig(0, version8toggle, version8, "8x-8s", "64vw", timeStamp, 8, 1000, 8000, version16toggle, version16, false)
    switchActiveConfig(0, version8toggle, version8, "8x-8s", "64vw", timeStamp, 8, 1000, 8000, version32toggle, version32, false)

    for (const music of backgroundMusics) {
        music.classList.remove("selected")
        music.children[1].children[2].style.display = "flex"
        music.children[1].children[3].style.display = "none"
    }

    document.querySelector('#background04').classList.add("selected")
    document.querySelector('#background04').children[1].children[2].style.display = "none"
    document.querySelector('#background04').children[1].children[3].style.display = "flex"

    loadConfigBox(document.querySelector('.box-1-1'), koto03)
    loadConfigBox(document.querySelector('.box-2-1'), cymbal05)
    loadConfigBox(document.querySelector('.box-3-1'), koto05)
    loadConfigBox(document.querySelector('.box-6-1'), koto04)
    loadConfigBox(document.querySelector('.box-2-2'), koto04)
    loadConfigBox(document.querySelector('.box-5-2'), koto02)
    loadConfigBox(document.querySelector('.box-7-2'), cymbal04)
    loadConfigBox(document.querySelector('.box-1-3'), kick12)
    loadConfigBox(document.querySelector('.box-5-3'), kick12)
})

// Creates a button that allows you to play the sound individually for each element

const individualPlayButton = (x) => {
    if (x.children[1]) {
        x.children[1].children[0].addEventListener('click', () => {
            const effect = eval(x.id)
            playIndividualAudioEffect(effect.url, effect.volume, 1, effect.duration)
            x.children[1].children[0].style.display = 'none'
            x.children[1].children[1].style.display = 'flex'
            console.log(eval(x.id).duration);
            
            setTimeout(() => {
                x.children[1].children[0].style.display = 'flex'
                x.children[1].children[1].style.display = 'none'
            }, effect.duration)
        })
        x.children[1].children[1].addEventListener('click', () => {
            stopIndividualEffect()
            x.children[1].children[0].style.display = 'flex'
            x.children[1].children[1].style.display = 'none'
        })
    }
}

const individualBackgroundPlayButton = (x) => {
    if (x.children[1]) {
        x.children[1].children[0].addEventListener('click', () => {
            playEffect(eval(x.id), 1, 1)
            x.children[1].children[0].style.display = 'none'
            x.children[1].children[1].style.display = 'flex'

            setTimeout(() => {
                x.children[1].children[0].style.display = 'flex'
                x.children[1].children[1].style.display = 'none'
            }, eval(x.id).duration * 1000)
        })
        x.children[1].children[1].addEventListener('click', () => {
            stopEffect(eval(x.id))
            x.children[1].children[0].style.display = 'flex'
            x.children[1].children[1].style.display = 'none'
        })
    }
}

// Delete a sound from a box in the track

const deleteBox = (x, y) => {
    y.children[1].children[2].addEventListener('click', () => {
        x.removeChild(y)
        playEffect(removeEffect, 0.4, 1)
        console.log(`${y.id} has been removed from ${x.className}.`);
    })
}

// Toggle or not the menu for track size

barOptionToggle.addEventListener('mouseenter', () => {
    playEffect(hoverEffect, 0.2, 1)
})

const openBarMenu = (sound) => {
    if (sound) {
        playEffect(clickEffect, 0.4, 1)
    }
    barOptionMenuOpen = true
    barOptionMenu.style.display = "block"
    barOptionMenu.style.opacity = "0%"
    setTimeout(() => {
        barOptionMenu.style.opacity = "100%"
    }, 1)
    barOptionToggle.children[0].style.backgroundImage = "url(./img/store-back-button.png)"
}

const closeBarMenu = (sound) => {
    if (sound) {
        playEffect(clickEffect, 0.4, 1)
    }
    barOptionMenuOpen = false
    barOptionMenu.style.opacity = "100%"
    setTimeout(() => {
        barOptionMenu.style.opacity = "0%"
    }, 1);
    setTimeout(() => {
        barOptionMenu.style.display = "none"
    }, 200);
    barOptionToggle.children[0].style.backgroundImage = "url(./img/drop-down-button.png)"
}

barOptionToggle.addEventListener('click',() => {
    if (!barOptionMenuOpen) {
        openBarMenu(true)
    } else {
        closeBarMenu(true)
    }
})

document.addEventListener('click', function (event) {
    if (!event.target.closest('.sound-play-bar-options-change')) {
        if (!event.target.closest('.sound-play-bar-menu')) {
            closeBarMenu(false)
        }
    }
})

// Change the size of the audio track

version8toggle.addEventListener('click', () => {
    if (activeConfig === 0) {
        alreadyActiveConfig("8x-8s", true)
    } else if (activeConfig === 1) {
        switchActiveConfig(0, version8toggle, version8, "8x-8s", "64vw", timeStamp, 8, 1000, 8000, version16toggle, version16, true)
    } else if (activeConfig === 2) {
        switchActiveConfig(0, version8toggle, version8, "8x-8s", "64vw", timeStamp, 8, 1000, 8000, version32toggle, version32, true)
    }
})

version16toggle.addEventListener('click', () => {
    if (activeConfig === 0) {
        switchActiveConfig(1, version16toggle, version16, "16x-8s", "128vw", timeStamp16X, 16, 500, 8000, version8toggle, version8, true)
    } else if (activeConfig === 1) {
        alreadyActiveConfig("16x-8s", true)
    } else if (activeConfig === 2) {
        switchActiveConfig(1, version16toggle, version16, "16x-8s", "128vw", timeStamp16X, 16, 500, 8000, version32toggle, version32, true)
    }
})

version32toggle.addEventListener('click', () => {
    if (activeConfig === 0) {
        switchActiveConfig(2, version32toggle, version32, "32x-16s", "256vw", timeStamp32X, 32, 500, 16000, version8toggle, version8, true)
    } else if (activeConfig === 1) {
        switchActiveConfig(2, version32toggle, version32, "32x-16s", "256vw", timeStamp32X, 32, 500, 16000, version16toggle, version16, true)
    } else if (activeConfig === 2) {
        alreadyActiveConfig("32x-16s", true)
    }
})

// Creates the individual play button for each sound

for (const soundItem of soundList) {
    individualPlayButton(soundItem)
}

// Detects dragging

for (const box of soundBoxes) {
    box.addEventListener('dragover', dragOver)

    box.addEventListener('dragover', () => {
        overBorder(box)
    })

    box.addEventListener('dragleave', () => {
        dragLeave(box)
    })

    box.addEventListener('dragenter', dragEnter)

    box.addEventListener('drop', () => {
        dragDrop(box)
    })
}

for (const item of soundListing) { 

    item.dom.addEventListener('dragstart', () => {
        dragStart(item)
    })
    
    item.dom.addEventListener('dragend', () => {
        dragEnd(item)
    })

    if (item.dom.children[1]) {       
        item.dom.children[1].children[0].addEventListener('mouseenter', () => {
            playEffect(hoverEffect, 0.1, 1)
        })

        item.dom.children[1].children[2].addEventListener('mouseenter', () => {
            playEffect(hoverEffect, 0.1, 1)
        })
    }
}

// System for background musics

for (const music of backgroundMusics) {
    if (music.id) {
        individualBackgroundPlayButton(music)
        music.children[1].children[2].addEventListener('click', () => {
            playEffect(clickEffect, 0.5, 1)
            music.classList.add("selected")
            music.children[1].children[2].style.display = "none"
            music.children[1].children[3].style.display = "flex"
        })
        music.children[1].children[3].addEventListener('click', () => {
            playEffect(clickEffect, 0.5, 1)
            music.classList.remove("selected")
            music.children[1].children[2].style.display = "flex"
            music.children[1].children[3].style.display = "none"
            stopEffect(eval(music.id))
        })
    }
}
