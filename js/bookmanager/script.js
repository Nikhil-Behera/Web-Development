const name = document.getElementById('.book_name');
const genre = document.getElementById('.genre');
const pages = document.getElementById('.pages');
const author = document.getElementById('.author');

document.getElementById("submit").addEventListener("click", () => {
    addBook(name.value, genre.value, pages.value, author.value);
});

function addBook(name,genre,pages,author){

    if(!name||!genre||!pages||!author){
        alert("Please Fill out all the fields!!");
    }

    const added = document.createElement("div");
    added.id = "added_books";
    
    const text = document.createTextNode(` 📚 Name :  ${name}, Genre : ${genre}, Pages : ${pages}, Author : ${author}`);
    added.appendChild(text);

    added.style.border = "1px solid white";
    added.style.padding = "8px";
    added.style.marginTop = "10px";
    added.style.color = "white";

    document.body.appendChild(added);

    name.value = "";
    genre.value = "";
    pages.value = "";
    author.value = "";
}