// Navigation effects

const clickEffect = new Audio("./audio/click.mp3")
const wooshEffect = new Audio("./audio/woosh.mp3")
const checkEffect = new Audio("./audio/check.mp3")
const hoverEffect = new Audio("./audio/hover.mp3")
const pickUpEffect = new Audio("./audio/pickup.mp3")
const removeEffect = new Audio("./audio/remove.mp3")
const glitchEffect = new Audio("./audio/glitch.mp3")

// Background musics

const background01 = new Audio("./audio/background-01.mp3")
const background02 = new Audio("./audio/background-02.mp3")
const background03 = new Audio("./audio/background-03.mp3")
const background04 = new Audio("./audio/background-04.mp3")
const background05 = new Audio("./audio/background-05.mp3")
const background06 = new Audio("./audio/background-06.mp3")
const background07 = new Audio("./audio/background-07.mp3")
const background08 = new Audio("./audio/background-08.mp3")
const background09 = new Audio("./audio/background-09.mp3")
const background10 = new Audio("./audio/background-10.mp3")
const background11 = new Audio("./audio/background-11.mp3")

// Voices for the tutorial

const tutorial01 = new Audio("./audio/tutorial-01.mp3")
const tutorial02 = new Audio("./audio/tutorial-02.mp3")
const tutorial03 = new Audio("./audio/tutorial-03.mp3")
const tutorial04 = new Audio("./audio/tutorial-04.mp3")
const tutorial05 = new Audio("./audio/tutorial-05.mp3")
const tutorialBackground = new Audio("./audio/tutorial-background.mp3")


// Create the DOM elements for the sounds in the list

const drumLength = 11

for (let i = 1; i <= drumLength; i++) {
    if (i<10) {
        i = `0${i}`
    } else {
        i = `${i}`
    }

    const drumSoundItem = document.createElement('div')
    drumSoundItem.classList.add("item")
    drumSoundItem.classList.add(`item-${i}`)
    drumSoundItem.id = `drum${i}`
    drumSoundItem.draggable = true

    const drumSoundItemPicture = document.createElement('div')
    drumSoundItemPicture.classList.add("picture")
    drumSoundItemPicture.classList.add("drum")
    drumSoundItem.appendChild(drumSoundItemPicture)

    const drumSoundItemPictureTitle = document.createElement('div')
    drumSoundItemPictureTitle.classList.add("title")
    drumSoundItemPicture.appendChild(drumSoundItemPictureTitle)

    const drumSoundItemPictureSuperTitle = document.createElement('h3')
    drumSoundItemPictureSuperTitle.classList.add("super-title")
    drumSoundItemPictureSuperTitle.textContent = `Drum ${i}`
    drumSoundItemPictureTitle.appendChild(drumSoundItemPictureSuperTitle)

    const drumSoundItemButtons = document.createElement('div')
    drumSoundItemButtons.classList.add("buttons")
    drumSoundItem.appendChild(drumSoundItemButtons)

    const drumSoundItemButtonsPlay = document.createElement('div')
    drumSoundItemButtonsPlay.classList.add("play")
    drumSoundItemButtons.appendChild(drumSoundItemButtonsPlay)

    const drumSoundItemButtonsPlayButton = document.createElement('div')
    drumSoundItemButtonsPlayButton.classList.add("button")
    drumSoundItemButtonsPlay.appendChild(drumSoundItemButtonsPlayButton)

    const drumSoundItemButtonsPause = document.createElement('div')
    drumSoundItemButtonsPause.classList.add("pause")
    drumSoundItemButtons.appendChild(drumSoundItemButtonsPause)

    const drumSoundItemButtonsPauseButton = document.createElement('div')
    drumSoundItemButtonsPauseButton.classList.add("button")
    drumSoundItemButtonsPause.appendChild(drumSoundItemButtonsPauseButton)

    const drumSoundItemButtonsMove = document.createElement('div')
    drumSoundItemButtonsMove.classList.add("move")
    drumSoundItemButtons.appendChild(drumSoundItemButtonsMove)

    const drumSoundItemButtonsMoveButton = document.createElement('div')
    drumSoundItemButtonsMoveButton.classList.add("button")
    drumSoundItemButtonsMove.appendChild(drumSoundItemButtonsMoveButton)

    document.querySelector('.sound-list').appendChild(drumSoundItem)
}

const cymbalLength = 6

for (let i = 1; i <= cymbalLength; i++) {
    if (i<10) {
        i = `0${i}`
    } else {
        i = `${i}`
    }

    const cymbalSoundItem = document.createElement('div')
    cymbalSoundItem.classList.add("item")
    cymbalSoundItem.classList.add(`item-${eval(i)+drumLength}`)
    cymbalSoundItem.id = `cymbal${i}`
    cymbalSoundItem.draggable = true

    const cymbalSoundItemPicture = document.createElement('div')
    cymbalSoundItemPicture.classList.add("picture")
    cymbalSoundItemPicture.classList.add("cymbal")
    cymbalSoundItem.appendChild(cymbalSoundItemPicture)

    const cymbalSoundItemPictureTitle = document.createElement('div')
    cymbalSoundItemPictureTitle.classList.add("title")
    cymbalSoundItemPicture.appendChild(cymbalSoundItemPictureTitle)

    const cymbalSoundItemPictureSuperTitle = document.createElement('h3')
    cymbalSoundItemPictureSuperTitle.classList.add("super-title")
    cymbalSoundItemPictureSuperTitle.textContent = `cymbal ${i}`
    cymbalSoundItemPictureTitle.appendChild(cymbalSoundItemPictureSuperTitle)

    const cymbalSoundItemButtons = document.createElement('div')
    cymbalSoundItemButtons.classList.add("buttons")
    cymbalSoundItem.appendChild(cymbalSoundItemButtons)

    const cymbalSoundItemButtonsPlay = document.createElement('div')
    cymbalSoundItemButtonsPlay.classList.add("play")
    cymbalSoundItemButtons.appendChild(cymbalSoundItemButtonsPlay)

    const cymbalSoundItemButtonsPlayButton = document.createElement('div')
    cymbalSoundItemButtonsPlayButton.classList.add("button")
    cymbalSoundItemButtonsPlay.appendChild(cymbalSoundItemButtonsPlayButton)

    const cymbalSoundItemButtonsPause = document.createElement('div')
    cymbalSoundItemButtonsPause.classList.add("pause")
    cymbalSoundItemButtons.appendChild(cymbalSoundItemButtonsPause)

    const cymbalSoundItemButtonsPauseButton = document.createElement('div')
    cymbalSoundItemButtonsPauseButton.classList.add("button")
    cymbalSoundItemButtonsPause.appendChild(cymbalSoundItemButtonsPauseButton)

    const cymbalSoundItemButtonsMove = document.createElement('div')
    cymbalSoundItemButtonsMove.classList.add("move")
    cymbalSoundItemButtons.appendChild(cymbalSoundItemButtonsMove)

    const cymbalSoundItemButtonsMoveButton = document.createElement('div')
    cymbalSoundItemButtonsMoveButton.classList.add("button")
    cymbalSoundItemButtonsMove.appendChild(cymbalSoundItemButtonsMoveButton)

    document.querySelector('.sound-list').appendChild(cymbalSoundItem)
}

const kotoLength = 9

for (let i = 1; i <= kotoLength; i++) {
    if (i<10) {
        i = `0${i}`
    } else {
        i = `${i}`
    }

    const kotoSoundItem = document.createElement('div')
    kotoSoundItem.classList.add("item")
    kotoSoundItem.classList.add(`item-${eval(i)+drumLength+cymbalLength}`)
    kotoSoundItem.id = `koto${i}`
    kotoSoundItem.draggable = true

    const kotoSoundItemPicture = document.createElement('div')
    kotoSoundItemPicture.classList.add("picture")
    kotoSoundItemPicture.classList.add("koto")
    kotoSoundItem.appendChild(kotoSoundItemPicture)

    const kotoSoundItemPictureTitle = document.createElement('div')
    kotoSoundItemPictureTitle.classList.add("title")
    kotoSoundItemPicture.appendChild(kotoSoundItemPictureTitle)

    const kotoSoundItemPictureSuperTitle = document.createElement('h3')
    kotoSoundItemPictureSuperTitle.classList.add("super-title")
    kotoSoundItemPictureSuperTitle.textContent = `koto ${i}`
    kotoSoundItemPictureTitle.appendChild(kotoSoundItemPictureSuperTitle)

    const kotoSoundItemButtons = document.createElement('div')
    kotoSoundItemButtons.classList.add("buttons")
    kotoSoundItem.appendChild(kotoSoundItemButtons)

    const kotoSoundItemButtonsPlay = document.createElement('div')
    kotoSoundItemButtonsPlay.classList.add("play")
    kotoSoundItemButtons.appendChild(kotoSoundItemButtonsPlay)

    const kotoSoundItemButtonsPlayButton = document.createElement('div')
    kotoSoundItemButtonsPlayButton.classList.add("button")
    kotoSoundItemButtonsPlay.appendChild(kotoSoundItemButtonsPlayButton)

    const kotoSoundItemButtonsPause = document.createElement('div')
    kotoSoundItemButtonsPause.classList.add("pause")
    kotoSoundItemButtons.appendChild(kotoSoundItemButtonsPause)

    const kotoSoundItemButtonsPauseButton = document.createElement('div')
    kotoSoundItemButtonsPauseButton.classList.add("button")
    kotoSoundItemButtonsPause.appendChild(kotoSoundItemButtonsPauseButton)

    const kotoSoundItemButtonsMove = document.createElement('div')
    kotoSoundItemButtonsMove.classList.add("move")
    kotoSoundItemButtons.appendChild(kotoSoundItemButtonsMove)

    const kotoSoundItemButtonsMoveButton = document.createElement('div')
    kotoSoundItemButtonsMoveButton.classList.add("button")
    kotoSoundItemButtonsMove.appendChild(kotoSoundItemButtonsMoveButton)

    document.querySelector('.sound-list').appendChild(kotoSoundItem)
}

const kickLength = 13

for (let i = 1; i <= kickLength; i++) {
    if (i<10) {
        i = `0${i}`
    } else {
        i = `${i}`
    }

    const kickSoundItem = document.createElement('div')
    kickSoundItem.classList.add("item")
    kickSoundItem.classList.add(`item-${eval(i)+drumLength+cymbalLength+kotoLength}`)
    kickSoundItem.id = `kick${i}`
    kickSoundItem.draggable = true
    

    const kickSoundItemPicture = document.createElement('div')
    kickSoundItemPicture.classList.add("picture")
    kickSoundItemPicture.classList.add("kick")
    kickSoundItem.appendChild(kickSoundItemPicture)

    const kickSoundItemPictureTitle = document.createElement('div')
    kickSoundItemPictureTitle.classList.add("title")
    kickSoundItemPicture.appendChild(kickSoundItemPictureTitle)

    const kickSoundItemPictureSuperTitle = document.createElement('h3')
    kickSoundItemPictureSuperTitle.classList.add("super-title")
    kickSoundItemPictureSuperTitle.textContent = `kick ${i}`
    kickSoundItemPictureTitle.appendChild(kickSoundItemPictureSuperTitle)

    const kickSoundItemButtons = document.createElement('div')
    kickSoundItemButtons.classList.add("buttons")
    kickSoundItem.appendChild(kickSoundItemButtons)

    const kickSoundItemButtonsPlay = document.createElement('div')
    kickSoundItemButtonsPlay.classList.add("play")
    kickSoundItemButtons.appendChild(kickSoundItemButtonsPlay)

    const kickSoundItemButtonsPlayButton = document.createElement('div')
    kickSoundItemButtonsPlayButton.classList.add("button")
    kickSoundItemButtonsPlay.appendChild(kickSoundItemButtonsPlayButton)

    const kickSoundItemButtonsPause = document.createElement('div')
    kickSoundItemButtonsPause.classList.add("pause")
    kickSoundItemButtons.appendChild(kickSoundItemButtonsPause)

    const kickSoundItemButtonsPauseButton = document.createElement('div')
    kickSoundItemButtonsPauseButton.classList.add("button")
    kickSoundItemButtonsPause.appendChild(kickSoundItemButtonsPauseButton)

    const kickSoundItemButtonsMove = document.createElement('div')
    kickSoundItemButtonsMove.classList.add("move")
    kickSoundItemButtons.appendChild(kickSoundItemButtonsMove)

    const kickSoundItemButtonsMoveButton = document.createElement('div')
    kickSoundItemButtonsMoveButton.classList.add("button")
    kickSoundItemButtonsMove.appendChild(kickSoundItemButtonsMoveButton)

    document.querySelector('.sound-list').appendChild(kickSoundItem)
}

// Sound objects, with url to the instrument audio

const drum01 = {
    dom: document.querySelector('.sound-list .item-01'),
    url: "./audio/drum-01.mp3",
    volume: 1,
    name: "drum01",
    instrument: "drum",
    title: "Drum 01",
    duration: 500
}

const drum02 = {
    dom: document.querySelector('.sound-list .item-02'),
    url: "./audio/drum-02.mp3",
    volume: 1,
    name: "drum02",
    instrument: "drum",
    title: "Drum 02",
    duration: 500
}

const drum03 = {
    dom: document.querySelector('.sound-list .item-03'),
    url: "./audio/drum-03.mp3",
    volume: 1,
    name: "drum03",
    instrument: "drum",
    title: "Drum 03",
    duration: 500
}

const drum04 = {
    dom: document.querySelector('.sound-list .item-04'),
    url: "./audio/drum-04.mp3",
    volume: 1,
    name: "drum04",
    instrument: "drum",
    title: "Drum 04",
    duration: 500
}

const drum05 = {
    dom: document.querySelector('.sound-list .item-05'),
    url: "./audio/drum-05.mp3",
    volume: 1,
    name: "drum05",
    instrument: "drum",
    title: "Drum 05",
    duration: 500
}

const drum06 = {
    dom: document.querySelector('.sound-list .item-06'),
    url: "./audio/drum-06.mp3",
    volume: 1,
    name: "drum06",
    instrument: "drum",
    title: "Drum 06",
    duration: 500
}

const drum07 = {
    dom: document.querySelector('.sound-list .item-07'),
    url: "./audio/drum-07.mp3",
    volume: 1,
    name: "drum07",
    instrument: "drum",
    title: "Drum 07",
    duration: 500
}

const drum08 = {
    dom: document.querySelector('.sound-list .item-08'),
    url: "./audio/drum-08.mp3",
    volume: 1,
    name: "drum08",
    instrument: "drum",
    title: "Drum 08",
    duration: 3000
}

const drum09 = {
    dom: document.querySelector('.sound-list .item-09'),
    url: "./audio/drum-09.mp3",
    volume: 1,
    name: "drum09",
    instrument: "drum",
    title: "Drum 09",
    duration: 500
}

const drum10 = {
    dom: document.querySelector('.sound-list .item-10'),
    url: "./audio/drum-10.mp3",
    volume: 1,
    name: "drum10",
    instrument: "drum",
    title: "Drum 10",
    duration: 500
}

const drum11 = {
    dom: document.querySelector('.sound-list .item-11'),
    url: "./audio/drum-11.mp3",
    volume: 1,
    name: "drum11",
    instrument: "drum",
    title: "Drum 11",
    duration: 500
}

const cymbal01 = {
    dom: document.querySelector('.sound-list .item-12'),
    url: "./audio/cymbal-01.mp3",
    volume: 1,
    name: "cymbal01",
    instrument: "cymbal",
    title: "Cymbal 01",
    duration: 500
}

const cymbal02 = {
    dom: document.querySelector('.sound-list .item-13'),
    url: "./audio/cymbal-02.mp3",
    volume: 1,
    name: "cymbal02",
    instrument: "cymbal",
    title: "Cymbal 02",
    duration: 500
}

const cymbal03 = {
    dom: document.querySelector('.sound-list .item-14'),
    url: "./audio/cymbal-03.mp3",
    volume: 1,
    name: "cymbal03",
    instrument: "cymbal",
    title: "Cymbal 03",
    duration: 500
}

const cymbal04 = {
    dom: document.querySelector('.sound-list .item-15'),
    url: "./audio/cymbal-04.mp3",
    volume: 1,
    name: "cymbal04",
    instrument: "cymbal",
    title: "Cymbal 04",
    duration: 500
}

const cymbal05 = {
    dom: document.querySelector('.sound-list .item-16'),
    url: "./audio/cymbal-05.mp3",
    volume: 1,
    name: "cymbal05",
    instrument: "cymbal",
    title: "Cymbal 05",
    duration: 500
}

const cymbal06 = {
    dom: document.querySelector('.sound-list .item-17'),
    url: "./audio/cymbal-06.mp3",
    volume: 1,
    name: "cymbal06",
    instrument: "cymbal",
    title: "Cymbal 06",
    duration: 500
}

const koto01 = {
    dom: document.querySelector('.sound-list .item-18'),
    url: "./audio/koto-01.mp3",
    volume: 0.8,
    name: "koto01",
    instrument: "koto",
    title: "Koto 01",
    duration: 2000
}

const koto02 = {
    dom: document.querySelector('.sound-list .item-19'),
    url: "./audio/koto-02.mp3",
    volume: 0.8,
    name: "koto02",
    instrument: "koto",
    title: "Koto 02",
    duration: 2000
}

const koto03 = {
    dom: document.querySelector('.sound-list .item-20'),
    url: "./audio/koto-03.mp3",
    volume: 0.8,
    name: "koto03",
    instrument: "koto",
    title: "Koto 03",
    duration: 2000
}

const koto04 = {
    dom: document.querySelector('.sound-list .item-21'),
    url: "./audio/koto-04.mp3",
    volume: 0.8,
    name: "koto04",
    instrument: "koto",
    title: "Koto 04",
    duration: 2000
}

const koto05 = {
    dom: document.querySelector('.sound-list .item-22'),
    url: "./audio/koto-05.mp3",
    volume: 0.8,
    name: "koto05",
    instrument: "koto",
    title: "Koto 05",
    duration: 2000
}

const koto06 = {
    dom: document.querySelector('.sound-list .item-23'),
    url: "./audio/koto-06.mp3",
    volume: 0.8,
    name: "koto06",
    instrument: "koto",
    title: "Koto 06",
    duration: 2000
}

const koto07 = {
    dom: document.querySelector('.sound-list .item-24'),
    url: "./audio/koto-07.mp3",
    volume: 0.8,
    name: "koto07",
    instrument: "koto",
    title: "Koto 07",
    duration: 2000
}

const koto08 = {
    dom: document.querySelector('.sound-list .item-25'),
    url: "./audio/koto-08.mp3",
    volume: 0.8,
    name: "koto08",
    instrument: "koto",
    title: "Koto 08",
    duration: 2000
}

const koto09 = {
    dom: document.querySelector('.sound-list .item-26'),
    url: "./audio/koto-spe.mp3",
    volume: 0.8,
    name: "koto09",
    instrument: "koto",
    title: "Koto 09",
    duration: 3000
}

const kick01 = {
    dom: document.querySelector('.sound-list .item-27'),
    url: "./audio/kick-01.mp3",
    volume: 1,
    name: "kick01",
    instrument: "kick",
    title: "Kick 01",
    duration: 500
}

const kick02 = {
    dom: document.querySelector('.sound-list .item-28'),
    url: "./audio/kick-02.mp3",
    volume: 1,
    name: "kick02",
    instrument: "kick",
    title: "Kick 02",
    duration: 500
}

const kick03 = {
    dom: document.querySelector('.sound-list .item-29'),
    url: "./audio/kick-03.mp3",
    volume: 1,
    name: "kick03",
    instrument: "kick",
    title: "Kick 03",
    duration: 500
}

const kick04 = {
    dom: document.querySelector('.sound-list .item-30'),
    url: "./audio/kick-04.mp3",
    volume: 1,
    name: "kick04",
    instrument: "kick",
    title: "Kick 04",
    duration: 500
}

const kick05 = {
    dom: document.querySelector('.sound-list .item-31'),
    url: "./audio/kick-05.mp3",
    volume: 1,
    name: "kick05",
    instrument: "kick",
    title: "Kick 05",
    duration: 500
}

const kick06 = {
    dom: document.querySelector('.sound-list .item-32'),
    url: "./audio/kick-06.mp3",
    volume: 1,
    name: "kick06",
    instrument: "kick",
    title: "Kick 06",
    duration: 500
}

const kick07 = {
    dom: document.querySelector('.sound-list .item-33'),
    url: "./audio/kick-07.mp3",
    volume: 1,
    name: "kick07",
    instrument: "kick",
    title: "Kick 07",
    duration: 500
}

const kick08 = {
    dom: document.querySelector('.sound-list .item-34'),
    url: "./audio/kick-08.mp3",
    volume: 1,
    name: "kick08",
    instrument: "kick",
    title: "Kick 08",
    duration: 500
}

const kick09 = {
    dom: document.querySelector('.sound-list .item-35'),
    url: "./audio/kick-09.mp3",
    volume: 1,
    name: "kick09",
    instrument: "kick",
    title: "Kick 09",
    duration: 500
}

const kick10 = {
    dom: document.querySelector('.sound-list .item-36'),
    url: "./audio/kick-10.mp3",
    volume: 1,
    name: "kick10",
    instrument: "kick",
    title: "Kick 10",
    duration: 500
}

const kick11 = {
    dom: document.querySelector('.sound-list .item-37'),
    url: "./audio/kick-11.mp3",
    volume: 1,
    name: "kick11",
    instrument: "kick",
    title: "Kick 11",
    duration: 500
}

const kick12 = {
    dom: document.querySelector('.sound-list .item-38'),
    url: "./audio/kick-12.mp3",
    volume: 1,
    name: "kick12",
    instrument: "kick",
    title: "Kick 12",
    duration: 500
}

const kick13 = {
    dom: document.querySelector('.sound-list .item-39'),
    url: "./audio/kick-13.mp3",
    volume: 1,
    name: "kick13",
    instrument: "kick",
    title: "Kick 13",
    duration: 500
}

// Array that lists all the sound objects

const soundListing = Array.from([drum01, drum02, drum03, drum04, drum05, drum06, drum07, drum08, drum09, drum10, drum11, 
    cymbal01, cymbal02, cymbal03, cymbal04, cymbal05, cymbal06, 
    koto01, koto02, koto03, koto04, koto05, koto06, koto07, koto08, koto09,
    kick01, kick02, kick03, kick04, kick05, kick06, kick07, kick08, kick09, kick10, kick11, kick12, kick13
])

