// Switching the audio track size

const switchActiveConfig = (
    newConfigID, // ID for the new config
    newConfigButton, // DOM element for the new config's button
    newConfig, // new config's track DOM element
    newConfigTitle, // String : will be the new name displayed 
    newConfigWidth, // String : new config's width
    newConfigTimeStamp, // Time Stamp used for the new config
    newBoxesLength, // new config's number of horizontal boxes
    newBoxesDuration, // Length of each box in the new config
    newTrackDuration, // Global duration for one entire track
    oldConfigButton, // DOM element for the old config button
    oldConfig, // DOM element of the old config track
    sound // Boolean : Checks if button should or not play a sound
    ) => 
{
    activeConfig = newConfigID
    console.log(`////////////////////////`);
    console.log(`Switching to version ${newConfigTitle}...`)
    closeBarMenu(sound)
    stopMusic()
    clearBoxes()
    oldConfigButton.classList.remove("active-bar")
    newConfigButton.classList.add("active-bar")
    soundPlayBarOptionTitle.textContent = newConfigTitle

    oldConfig.style.display = "none"
    newConfig.style.display = "block"

    soundPlayBar.style.width = newConfigWidth
    timeStampActual = newConfigTimeStamp

    boxesLength = newBoxesLength
    boxesDuration = newBoxesDuration
    trackDuration = newTrackDuration
}

const alreadyActiveConfig = (
    configTitle, // String : Logs a message saying config is already active
    sound // Boolean : defines if it should or not play a sound
) => 
{
    console.log(`////////////////////////`);
    console.log(`${configTitle} version is already active !`)
    closeBarMenu(sound)
}