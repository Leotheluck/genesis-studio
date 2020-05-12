// Shows the main menu

const toggleMenu = (withClick) => {
    if (withClick) {
        playEffect(clickEffect, 0.5, 1)
    }
    playEffect(wooshEffect, 0.5, 1.7)
    menuToggled = true
    navBar.style.transform = "translateX(0vw)"
    mainFilter.style.display = "block"
    menuToggle.children[0].style.display = "none"
    menuToggle.children[1].style.display = "none"
    menuToggle.children[2].style.display = "none"
    menuClose.style.display = "flex"
    setTimeout(()=> {
        mainFilter.style.opacity = "75%"
    }, 10)
}

// Hides the main menu

const hideMenu = (withClick) => {
    if (withClick) {
        playEffect(clickEffect, 0.5, 1)   
    }
    playEffect(wooshEffect, 0.5, 1.7)
    menuToggled = false
    navBar.style.transform = "translateX(-31vw)"
    mainFilter.style.opacity = "0%"
    menuToggle.children[0].style.display = "flex"
    menuToggle.children[1].style.display = "flex"
    menuToggle.children[2].style.display = "flex"
    menuClose.style.display = "none"
    setTimeout(()=> {
        mainFilter.style.display = "none"
    }, 310)
}

// Click effect when clicking a specific button

const openSetting = (button) => {
    playEffect(clickEffect, 0.3, 1)
    button.style.transform = "translateX(70px)"
    setTimeout(() => {
        button.style.transform = ""
    }, 200)
}