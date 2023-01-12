function toggleVisibility () {
    let button = document.querySelectorAll(".btn.btn-secondary")[0]
    let section = document.querySelectorAll(".row.favorite-albums")[0]
    console.log(button)
    button.addEventListener("click", function()
    {
        section.classList.toggle("invisible")
    }
    )
}

toggleVisibility ()

function albumCounter () {
    let albums = document.querySelectorAll("img")
    let counter = document.getElementById("album-counter")
    counter.innerText = albums.length
}

albumCounter ()

function deleteTrack () {
    let button = document.querySelectorAll(".btn.btn-danger")
    for (let i = 0; i<button.length; i++)
    {
        button[i].addEventListener("click", (event)=>{
            event.target.closest('tbody > tr').classList.toggle("invis")
            event.target.classList.remove("invis")
        })
    }
}
deleteTrack ()

function deleteTrackNew () {
    setInterval(deleteTrack, 500)
}
deleteTrackNew ()

function addTrack () {
    let parent = document.getElementById("tracklist")

    let trackNumber = document.getElementById("track-number");
    let trackTitle = document.getElementById("track-title");
    let artistName = document.getElementById("artist-name");
    let trackDuration = document.getElementById("track-duration")

    let newTR = document.createElement("tr")

    let newTrackNumber = document.createElement("th")
    newTrackNumber.scope = "row";

    let newTrackTitle = document.createElement("td")
    let newartistName = document.createElement("td")
    let newtrackDuration = document.createElement("td")
    let newButton = document.createElement("td")

    newTrackNumber.innerText = trackNumber.value
    newTrackTitle.innerText = trackTitle.value
    newartistName.innerText = artistName.value
    newtrackDuration.innerText = trackDuration.value
    newButton.innerHTML = `
    <button type="button" class="btn btn-danger">DELETE</button>
  `


    newTR.appendChild(newTrackNumber)
    newTR.appendChild(newTrackTitle)
    newTR.appendChild(newartistName )
    newTR.appendChild(newtrackDuration)
    newTR.appendChild(newButton)
    parent.appendChild(newTR)
    alert(trackTitle.value)
}

function alertUser() {
    if (
        document.getElementById("artist-name").value === "taylor" || 
        document.getElementById("artist-name").value === "Taylor")
             {
    document.getElementById("artist-name").value = "";
    alert("Really?")
    }
}
alertUser() 

function userAlerter() {
    setInterval(alertUser, 500)
}
userAlerter()