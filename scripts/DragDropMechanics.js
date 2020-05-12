// When the user starts dragging an item

const dragStart = (draggedEffect) => {
    console.log(`${draggedEffect.name} is being dragged`)
    playEffect(pickUpEffect, 0.5, 1)
    
    actualDragged = draggedEffect

    draggedEffect.dom.classList.add("dragged")
    setTimeout(() => {
        draggedEffect.dom.classList.remove("dragged")
        draggedEffect.dom.classList.add("invisible")
    }, 0)
}

// when the user stops dragging an item

const dragEnd = (draggedEffect) => {
    console.log(`${draggedEffect.name} is no more being dragged`)
    actualDragged = null
    for (const box of soundBoxes) {
        box.classList.remove("hovered")
    }
}

// Dragging over boxes

const dragOver = (event) => {
    event.preventDefault()
    console.log("A box is being hovered...");
}

const overBorder = (box) => {
    box.classList.add("hovered")
}

const dragLeave = (box) => {
    console.log("The dragging left a box...")
    box.classList.remove("hovered")
}

const dragEnter = (event) => {
    event.preventDefault()
    playEffect(hoverEffect, 0.2, 1)
    console.log("The dragging is over a new box...");
}

const dragDrop = (box) => {
    loadConfigBox(box, actualDragged)
}

// Create an item inside a box

const loadConfigBox = (box, sound) => {
    playEffect(checkEffect, 0.5, 1)

    if (box.children[0]) {
        box.removeChild(box.children[0])
    } 

    const insideBox = document.createElement('div')
    insideBox.classList.add(`inside-item`)

    insideBox.id = sound.name

    const insidePicture = document.createElement('div')
    insidePicture.classList.add('picture')
    insidePicture.classList.add(`${sound.instrument}`)
    insideBox.appendChild(insidePicture)

    const insideTitle = document.createElement('div')
    insideTitle.classList.add('title')
    //insideTitle.classList.add(`${actualDragged.instrument}-inside`)
    insidePicture.appendChild(insideTitle)

    const insideSuperTitle = document.createElement('h3')
    insideSuperTitle.classList.add('super-title')
    insideSuperTitle.textContent = sound.title
    insideTitle.appendChild(insideSuperTitle)

    const insideButtons = document.createElement('div')
    insideButtons.classList.add('buttons')
    insideBox.appendChild(insideButtons)

    const insidePlay = document.createElement('div')
    insidePlay.classList.add('play')
    insideButtons.appendChild(insidePlay)

    const insidePlayButton = document.createElement('div')
    insidePlayButton.classList.add('button')
    insidePlay.appendChild(insidePlayButton)

    const insidePause = document.createElement('div')
    insidePause.classList.add('pause')
    insideButtons.appendChild(insidePause)

    const insidePauseButton = document.createElement('div')
    insidePauseButton.classList.add('button')
    insidePause.appendChild(insidePauseButton)

    const insideRemove = document.createElement('div')
    insideRemove.classList.add('remove')
    insideButtons.appendChild(insideRemove)

    const insideRemoveButton = document.createElement('div')
    insideRemoveButton.classList.add('button')
    insideRemove.appendChild(insideRemoveButton)

    // insideBox.draggable = false

    box.appendChild(insideBox)

    individualPlayButton(insideBox) // creates a play button fo the new element

    deleteBox(box, insideBox)
}