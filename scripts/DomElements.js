// Principal Containers

const mainContainer = document.querySelector('.main-container')
const leftContainer = document.querySelector('.left-container')

// Menu interation buttons

const menuToggle = leftContainer.querySelector('.absolute-menu') 
const menuClose = leftContainer.querySelector('.close-menu')
const navBar = mainContainer.querySelector('.absolute-nav')
const mainFilter = mainContainer.querySelector('.main-filter')

// Navigation Bar buttons

const navButtons = mainContainer.querySelector('.nav-buttons')

const audioSettingsButton = navButtons.querySelector('.nav-audio')
const graphicsSettingsButton = navButtons.querySelector('.nav-graphics')
const languageSettingsButton = navButtons.querySelector('.nav-language')
const tutorialLaunchButton = navButtons.querySelector('.nav-tutorial')
const githubPageButton = navButtons.querySelector('.nav-github')

const settingsList = Array.from([
    audioSettingsButton, 
    graphicsSettingsButton, 
    languageSettingsButton, 
    tutorialLaunchButton, 
    githubPageButton
])

// Menu settings & audio options

const optionsTab = document.querySelector('.main-container .options')
const navBarOptions = document.querySelector('.main-container .options')
const audioOptions = navBarOptions.querySelector('.audio')
const graphicsOptions = navBarOptions.querySelector('.graphics')
const languageOptions = navBarOptions.querySelector('.language')
const tutorialOptions = navBarOptions.querySelector('.tutorial')
const githubOptions = navBarOptions.querySelector('.github')
const globalVolumeSwitch = audioOptions.querySelector('.inner .content-wrapper .content .volume')
const navigationVolumeSwitch = audioOptions.querySelector('.inner .content-wrapper .content .nav-volume')
const instrumentVolumeSwitch = audioOptions.querySelector('.inner .content-wrapper .content .instrument-volume')
const backgroundVolumeSwitch = audioOptions.querySelector('.inner .content-wrapper .content .background-volume')
const audioOptionsVolumeIndicator = audioOptions.querySelector('.inner .content-wrapper .volume-title .title')

// Graphics options

const graphicsModeOptions = graphicsOptions.querySelector('.inner .content-wrapper .content-top')
const lightMode = graphicsModeOptions.children[0]
const darkMode = graphicsModeOptions.children[1]
const redMode = graphicsModeOptions.children[2]
const playerColorOptions = graphicsOptions.querySelector('.inner .content-wrapper .content')
const playerColorOptionsDemo = graphicsOptions.querySelector('.inner .content-wrapper .content-right .player-still')
const blackWhitePlayer = playerColorOptions.children[1]
const whiteBlackPlayer = playerColorOptions.children[2]
const whiteRedPlayer = playerColorOptions.children[3]
const blackYellowPlayer = playerColorOptions.children[4]

// Language options

const languageOptionsContainer = languageOptions.querySelector('.inner .content')
const frenchLanguage = languageOptionsContainer.children[0]
const englishLanguage = languageOptionsContainer.children[1]
const japaneseLanguage = languageOptionsContainer.children[2]

// Tutorial elements

const tutorialOptionsContainer = tutorialOptions.querySelector('.inner .content')
const tutorialNoButton = tutorialOptionsContainer.children[0].children[1]
const tutorialYesButton = tutorialOptionsContainer.children[0].children[2]

const tutorialViews = mainContainer.querySelector('.tutorial-views')
const tutorialCharacters = tutorialViews.querySelector('.tutorial-characters')
const tutorialSkip = tutorialViews.querySelector('.tutorial-skip')

const tutorial1Message = tutorialViews.querySelector('.tutorial-1-message')
const tutorial1Filter = tutorialViews.querySelector('.tutorial-1')
const tutorial1NextButton = tutorial1Message.children[1].children[1].children[0]

const tutorial2Message = tutorialViews.querySelector('.tutorial-2-message')
const tutorial2Filter = tutorialViews.querySelector('.tutorial-2')
const tutorial2BeforeButton = tutorial2Message.children[1].children[1].children[0]
const tutorial2NextButton = tutorial2Message.children[1].children[1].children[1]

const tutorial3Message = tutorialViews.querySelector('.tutorial-3-message')
const tutorial3Filter = tutorialViews.querySelector('.tutorial-3')
const tutorial3BeforeButton = tutorial3Message.children[1].children[1].children[0]
const tutorial3NextButton = tutorial3Message.children[1].children[1].children[1]

const tutorial4Message = tutorialViews.querySelector('.tutorial-4-message')
const tutorial4Filter = tutorialViews.querySelector('.tutorial-4')
const tutorial4BeforeButton = tutorial4Message.children[1].children[1].children[0]
const tutorial4NextButton = tutorial4Message.children[1].children[1].children[1]

const tutorial5Message = tutorialViews.querySelector('.tutorial-5-message')
const tutorial5Filter = tutorialViews.querySelector('.tutorial-5')
const tutorial5BeforeButton = tutorial5Message.children[1].children[1].children[0]
const tutorial5NextButton = tutorial5Message.children[1].children[1].children[1]

// GitHub

const githubOptionsContainer = githubOptions.querySelector('.inner .content')
const githubNoButton = githubOptionsContainer.children[0].children[1]

// Sound Boxes

const soundBoxes = document.querySelectorAll('.sound-box')
const backgroundMusics = document.querySelectorAll('.background-music-item')

// Options for the audio track size

const barOptionToggle = document.querySelector('.sound-play-bar-options-change')
const barOptionMenu = document.querySelector('.sound-play-bar-menu')

// Versions for the audio track size

const version8 = document.querySelector('.sound-play-bar-version-8')
const version16 = document.querySelector('.sound-play-bar-version-16')
const version32 = document.querySelector('.sound-play-bar-version-32')
const version8toggle = document.querySelector('.box-8x')
const version16toggle = document.querySelector('.box-16x')
const version32toggle = document.querySelector('.box-32x')
const soundPlayBar = document.querySelector('.sound-play-bar')
const soundPlayBarOptionTitle = document.querySelector('.sound-play-bar-options-title')
const clearButton = document.querySelector('.sound-play-bar .clear')

// Different time stamps

const timeStamp = document.querySelector('.time-stamp')
const timeStamp16X = document.querySelector('.time-stamp-16X')
const timeStamp32X = document.querySelector('.time-stamp-32X')

// Different items 

const soundList = document.querySelectorAll('.sound-list .item')

// Background player

const backgroundPlayer = document.querySelector('.player-background-animated')

// Background musics array

const backgroundMusicList = Array.from([
    background01, background02, background03, background04, background05,
    background06, background07, background08, background09, background10, background11
])

// Global play

const playAllToggle = document.querySelector('.main-player-button-container')
const playAllButton = document.querySelector('.main-player-button')
const playAllTopBlock = document.querySelector('.main-player-button-container-top-block')
const playAllFooterBlock = document.querySelector('.main-player-button-container-footer-block')

// Configurations 

const configurationsList = document.querySelector('.bottom-right-container .content .configurations')
const configuration1 = configurationsList.querySelector('.configuration-1')
const configuration2 = configurationsList.querySelector('.configuration-2')

// Colors

const lightModeColors = {
    mainColor1: "#ffffff",
    mainColor2: "#ffdb35",
    mainColor3: "#f79071",
    mainColor4: "#000000",
    textColor1: "#000000",
    textColor2: "#ffffff",
    textColor3: "#000000",
    textColor4: "#ffffff",
    timeStampColor: "#ffdb35",
    containerColor1: "#dedede",
    containerColor2: "#6f6f6f",
    containerColor3: "#b3b3b3",
    containerColor4: "#a1a1a1"
}

const darkModeColors = {
    mainColor1: "#272727",
    mainColor2: "#ffdb35",
    mainColor3: "#f79071",
    mainColor4: "#ffffff",
    textColor1: "#000000",
    textColor2: "#000000",
    textColor3: "#ffffff",
    textColor4: "#ffffff",
    timeStampColor: "#ffffff",
    containerColor1: "#131313",
    containerColor2: "#2c2c2c",
    containerColor3: "#464646",
    containerColor4: "#363636"
}

const redModeColors = {
    mainColor1: "#ffffff",
    mainColor2: "#f64b3c",
    mainColor3: "#d9455f",
    mainColor4: "#000000",
    textColor1: "#000000",
    textColor2: "#ffffff",
    textColor3: "#000000",
    textColor4: "#ffffff",
    timeStampColor: "#f64b3c",
    containerColor1: "#84142d",
    containerColor2: "#212121",
    containerColor3: "#464646",
    containerColor4: "#58464c"
}

const blackWhitePlayerColors = {
    filter: "saturate(0%) hue-rotate(0deg) invert(0%)"
}

const whiteBlackPlayerColors = {
    filter: "saturate(0%) hue-rotate(0deg) invert(100%)"
}

const whiteRedPlayerColors = {
    filter: "saturate(100%) hue-rotate(170deg) invert(100%)"
}

const blackYellowPlayerColors = {
    filter: "saturate(100%) hue-rotate(60deg) invert(0%)"
}