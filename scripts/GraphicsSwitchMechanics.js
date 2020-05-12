// Switch the graphic mode (Light mode, Dark mode, Red mode)

const switchGraphicsMode = (newMode, oldMode, palette) => {
    playEffect(clickEffect, 0.4, 1)
    playEffect(wooshEffect, 0.5, 1.25)

    newMode.children[1].classList.add('active-checkbox')
    newMode.children[1].children[0].children[0].classList.add('active-triangle')
    newMode.children[1].children[0].children[1].classList.add('active')
    newMode.children[1].children[1].classList.add('active-center')
    newMode.children[1].children[1].children[0].textContent = activeText
    newMode.children[1].children[2].children[0].classList.add('active')
    newMode.children[1].children[2].children[1].classList.add('active-triangle')

    oldMode.children[1].classList.remove('active-checkbox')
    oldMode.children[1].children[0].children[0].classList.remove('active-triangle')
    oldMode.children[1].children[0].children[1].classList.remove('active')
    oldMode.children[1].children[1].classList.remove('active-center')
    oldMode.children[1].children[1].children[0].textContent = activateText
    oldMode.children[1].children[2].children[0].classList.remove('active')
    oldMode.children[1].children[2].children[1].classList.remove('active-triangle')

    document.documentElement.style.setProperty('--main-color-1', palette.mainColor1)
    document.documentElement.style.setProperty('--main-color-2', palette.mainColor2)
    document.documentElement.style.setProperty('--main-color-3', palette.mainColor3)
    document.documentElement.style.setProperty('--main-color-4', palette.mainColor4)
    document.documentElement.style.setProperty('--text-color-1', palette.textColor1)
    document.documentElement.style.setProperty('--text-color-2', palette.textColor2)
    document.documentElement.style.setProperty('--text-color-3', palette.textColor3)
    document.documentElement.style.setProperty('--text-color-4', palette.textColor4)
    document.documentElement.style.setProperty('--time-stamp-color', palette.timeStampColor)
    document.documentElement.style.setProperty('--container-color-1', palette.containerColor1)
    document.documentElement.style.setProperty('--container-color-2', palette.containerColor2)
    document.documentElement.style.setProperty('--container-color-3', palette.containerColor3)
    document.documentElement.style.setProperty('--container-color-4', palette.containerColor4)
}

// Switch the colors of the animated play button

const switchPlayColors = (newMode, oldMode, palette) => {
    playEffect(clickEffect, 0.5, 1)
    
    newMode.children[0].classList.add('active-checkbox')
    newMode.children[0].children[0].children[0].classList.add('active-triangle')
    newMode.children[0].children[0].children[1].classList.add('active')
    newMode.children[0].children[1].classList.add('active-center')
    newMode.children[0].children[2].children[0].classList.add('active')
    newMode.children[0].children[2].children[1].classList.add('active-triangle')

    oldMode.children[0].classList.remove('active-checkbox')
    oldMode.children[0].children[0].children[0].classList.remove('active-triangle')
    oldMode.children[0].children[0].children[1].classList.remove('active')
    oldMode.children[0].children[1].classList.remove('active-center')
    oldMode.children[0].children[2].children[0].classList.remove('active')
    oldMode.children[0].children[2].children[1].classList.remove('active-triangle')

    playerColorOptionsDemo.style.filter = palette.filter
    backgroundPlayer.style.filter = palette.filter
}