function getRandomDarkColor() {
    const letters = '01234567' 
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)]
    }
    return color
}

// for random color part.

let interval_id
document.querySelector(".start").addEventListener("click",()=>{
    interval_id = setInterval(()=>{
        document.body.style.backgroundColor=getRandomDarkColor()
    },500)
})

document.querySelector(".stop").addEventListener("click",()=>{
    clearInterval(interval_id)
})

// for the text part 

// document.querySelector(".submit").addEventListener("click",()=>{
//     const titletoBeSaved =  document.createElement("div")
//     const title_got = document.querySelector(".note_title")
//     titletoBeSaved.textContent = title_got.value
//     document.body.appendChild(titletoBeSaved)

//     const textToBeSaved = document.createElement("div")
//     const text_got = document.querySelector(".note_text")
//     textToBeSaved.textContent = text_got.value
//     document.body.appendChild(textToBeSaved)
// })

function getNotes() {
    const notesString = localStorage.getItem('my-notes')
    return notesString ? JSON.parse(notesString) : []
}

function saveNotes(notesArray) {
    localStorage.setItem('my-notes', JSON.stringify(notesArray))
}

document.querySelector(".submit").addEventListener("click",()=>{
    const titleinput = document.querySelector(".note-title")
    const textinput = document.querySelector(".note_text")

    const note = {
        id:Date.now(),
        title:titleinput.value,
        text:textinput.value
    }

    saveNotes(note)

    
})

