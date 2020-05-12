// Switches all the text to the new language, function is getting called in the main.js

const switchActiveLanguage = (newLanguage, oldLanguage, languageFile) => {
    playEffect(clickEffect, 0.5, 1)

    newLanguage.children[1].classList.add('active-checkbox')
    newLanguage.children[1].children[0].children[0].classList.add('active-triangle')
    newLanguage.children[1].children[0].children[1].classList.add('active')
    newLanguage.children[1].children[1].classList.add('active-center')
    newLanguage.children[1].children[1].children[0].textContent = activeText
    newLanguage.children[1].children[2].children[0].classList.add('active')
    newLanguage.children[1].children[2].children[1].classList.add('active-triangle')

    oldLanguage.children[1].classList.remove('active-checkbox')
    oldLanguage.children[1].children[0].children[0].classList.remove('active-triangle')
    oldLanguage.children[1].children[0].children[1].classList.remove('active')
    oldLanguage.children[1].children[1].classList.remove('active-center')
    oldLanguage.children[1].children[1].children[0].textContent = activateText
    oldLanguage.children[1].children[2].children[0].classList.remove('active')
    oldLanguage.children[1].children[2].children[1].classList.remove('active-triangle')

    document.querySelector('.nav-super-title').textContent = languageFile.settingsTitle

    document.querySelector('.nav-audio .nav-button-title').textContent = languageFile.navAudioTitle
    document.querySelector('.nav-graphics .nav-button-title').textContent = languageFile.navGraphicsTitle
    document.querySelector('.nav-language .nav-button-title').textContent = languageFile.navLanguageTitle
    document.querySelector('.nav-tutorial .nav-button-title').textContent = languageFile.navTutorialTitle
    document.querySelector('.nav-github .nav-button-title').textContent = languageFile.navGithubTitle

    document.querySelector('.sound-list-super-title').textContent = languageFile.instrumentChoice
    document.querySelector('.sound-play-bar-super-title-text').textContent = languageFile.audioTrack
    document.querySelector('.background-music-super-title').textContent = languageFile.backgroundMusics
    document.querySelector('.clear .button .title').textContent = languageFile.clearButton
    
    if (document.querySelector('.center .light-mode-activate')) {
        document.querySelector('.center .light-mode-activate').textContent = languageFile.activate
    }
    if (document.querySelector('.active-center .light-mode-activate')) {
        document.querySelector('.active-center .light-mode-activate').textContent = languageFile.active
    }
    if (document.querySelector('.center .dark-mode-activate')) {
        document.querySelector('.center .dark-mode-activate').textContent = languageFile.activate
    }
    if (document.querySelector('.active-center .dark-mode-activate')) {
        document.querySelector('.active-center .dark-mode-activate').textContent = languageFile.active
    }
    if (document.querySelector('.center .red-mode-activate')) {
        document.querySelector('.center .red-mode-activate').textContent = languageFile.activate
    }
    if (document.querySelector('.active-center .red-mode-activate')) {
        document.querySelector('.active-center .red-mode-activate').textContent = languageFile.active
    }

    if (document.querySelector('.center .english-activate')) {
        document.querySelector('.center .english-activate').textContent = languageFile.activate
    }
    if (document.querySelector('.active-center .english-activate')) {
        document.querySelector('.active-center .english-activate').textContent = languageFile.active
    }
    if (document.querySelector('.center .french-activate')) {
        document.querySelector('.center .french-activate').textContent = languageFile.activate
    }
    if (document.querySelector('.active-center .french-activate')) {
        document.querySelector('.active-center .french-activate').textContent = languageFile.active
    }
    if (document.querySelector('.center .japanese-activate')) {
        document.querySelector('.center .japanese-activate').textContent = languageFile.activate
    }
    if (document.querySelector('.active-center .japanese-activate')) {
        document.querySelector('.active-center .japanese-activate').textContent = languageFile.active
    }

    activateText = languageFile.activate
    activeText = languageFile.active

    audioOptions.querySelector('.inner .header .title').textContent = languageFile.audioSettingsTitle
    graphicsOptions.querySelector('.inner .header .title').textContent = languageFile.graphicsSettingsTitle
    languageOptions.querySelector('.inner .header .title').textContent = languageFile.languageSettingsTitle
    tutorialOptions.querySelector('.inner .header .title').textContent = languageFile.tutorialSettingsTitle
    githubOptions.querySelector('.inner .header .title').textContent = languageFile.githubSettingsTitle

    globalVolumeSwitch.querySelector('.title').textContent = languageFile.globalVolumeSwitchTitle
    navigationVolumeSwitch.querySelector('.title').textContent = languageFile.navigationVolumeSwitchTitle
    instrumentVolumeSwitch.querySelector('.title').textContent = languageFile.instrumentVolumeSwitchTitle
    backgroundVolumeSwitch.querySelector('.title').textContent = languageFile.backgroundVolumeSwitchTitle

    blackWhitePlayer.querySelector('.title').textContent = languageFile.blackWhitePlayerTitle
    whiteBlackPlayer.querySelector('.title').textContent = languageFile.whiteBlackPlayerTitle
    whiteRedPlayer.querySelector('.title').textContent = languageFile.whiteRedPlayerTitle
    blackYellowPlayer.querySelector('.title').textContent = languageFile.blackYellowPlayerTitle

    graphicsOptions.querySelector('.inner .content .big-title').textContent = languageFile.graphicsPlayerCustomTitle

    mainContainer.querySelector('.tutorial-1-message').children[0].children[1].textContent = languageFile.kotomiName
    mainContainer.querySelector('.tutorial-2-message').children[0].children[1].textContent = languageFile.kotomiName
    mainContainer.querySelector('.tutorial-3-message').children[0].children[1].textContent = languageFile.kotomiName
    mainContainer.querySelector('.tutorial-4-message').children[0].children[1].textContent = languageFile.kotomiName
    mainContainer.querySelector('.tutorial-5-message').children[0].children[1].textContent = languageFile.kotomiName

    mainContainer.querySelector('.tutorial-1-message').children[1].children[0].textContent = languageFile.tutorialMessage1
    mainContainer.querySelector('.tutorial-2-message').children[1].children[0].textContent = languageFile.tutorialMessage2
    mainContainer.querySelector('.tutorial-3-message').children[1].children[0].textContent = languageFile.tutorialMessage3
    mainContainer.querySelector('.tutorial-4-message').children[1].children[0].textContent = languageFile.tutorialMessage4
    mainContainer.querySelector('.tutorial-5-message').children[1].children[0].textContent = languageFile.tutorialMessage5

    mainContainer.querySelector('.tutorial-1-message .content .checkbox-container').children[0].children[1].children[0].textContent = languageFile.next

    mainContainer.querySelector('.tutorial-2-message .content .checkbox-container').children[0].children[1].children[0].textContent = languageFile.last
    mainContainer.querySelector('.tutorial-2-message .content .checkbox-container').children[1].children[1].children[0].textContent = languageFile.next

    mainContainer.querySelector('.tutorial-3-message .content .checkbox-container').children[0].children[1].children[0].textContent = languageFile.last
    mainContainer.querySelector('.tutorial-3-message .content .checkbox-container').children[1].children[1].children[0].textContent = languageFile.next

    mainContainer.querySelector('.tutorial-4-message .content .checkbox-container').children[0].children[1].children[0].textContent = languageFile.last
    mainContainer.querySelector('.tutorial-4-message .content .checkbox-container').children[1].children[1].children[0].textContent = languageFile.next

    mainContainer.querySelector('.tutorial-5-message .content .checkbox-container').children[0].children[1].children[0].textContent = languageFile.last
    mainContainer.querySelector('.tutorial-5-message .content .checkbox-container').children[1].children[1].children[0].textContent = languageFile.finish

    tutorialOptions.querySelector('.inner .content .tutorial-container').children[0].textContent = languageFile.shouldStartTutorial
    tutorialOptions.querySelector('.inner .content .tutorial-container').children[1].children[1].children[0].textContent = languageFile.no
    tutorialOptions.querySelector('.inner .content .tutorial-container').children[2].children[1].children[0].textContent = languageFile.yes

    githubOptions.querySelector('.inner .content .github-container').children[0].textContent = languageFile.shouldStartGithub
    githubOptions.querySelector('.inner .content .github-container').children[1].children[1].children[0].textContent = languageFile.no
    githubOptions.querySelector('.inner .content .github-container').children[2].children[1].children[0].textContent = languageFile.yes

    tutorialSkip.children[0].children[1].children[0].textContent = languageFile.skip

    document.querySelector('.more-soon').textContent = languageFile.moreSoon
    document.querySelector('.bottom-right-container .content .header .title').textContent = languageFile.configs
}