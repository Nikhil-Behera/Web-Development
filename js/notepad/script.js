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


function display_notes(){
    
    const notes = getNotes()
    const note_container = document.querySelector(".notes_container")
    
    note_container.innerHTML = '';
    
    notes.forEach(note => {
        const display_div = document.createElement("div")
        const display_title = document.createElement("h3")
        display_title.textContent = note.title
        const display_content = document.createElement("p")
        display_content.textContent = note.text
        
        display_div.appendChild(display_title)
        display_div.appendChild(display_content)
        note_container.appendChild(display_div)
    })
}
document.querySelector(".submit").addEventListener("click",()=>{
    const titleinput = document.querySelector(".note-title")
    const textinput = document.querySelector(".note_text")

    const note = {
        id:Date.now(),
        title:titleinput.value,
        text:textinput.value
    }

    const notes = getNotes();
    notes.push(note);

    saveNotes(notes)

    titleinput.value = "";
    textinput.value = "";

    display_notes()
})

display_notes()
