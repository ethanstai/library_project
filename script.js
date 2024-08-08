const myLibrary = [];

let form = document.querySelector(".form");
let submit = document.querySelector(".submit-btn");
let table = document.querySelector(".table");
let newBook = document.querySelector(".newBook");

window.onload = () => {
    form.style.display = "none" 
    table.style.display = "none";
}

//Object contructor for new books
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

newBook.addEventListener('click', ()=> {
   form.style.display = "block";
});

form.addEventListener('submit', (event)=> {
    form.style.display = "none";
    event.preventDefault();
    table.style.display = "block";

    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector('#read');
    
    let newBook;
    if (read.checked == true) {
        newBook = new Book(title.value, author.value, pages.value, "YES");
    } 
    else {
        newBook = new Book(title.value, author.value, pages.value, "NO");      
    }
    myLibrary.push(newBook);
    addBookToLibrary(newBook);

    form.reset();
});

function addBookToLibrary(book) {
    table.insertRow(-1); 
    let row = document.querySelector("tbody tr:last-child");

    let title = row.insertCell(-1);
    title.innerText = book.title;

    let author = row.insertCell(-1);
    author.innerText = book.author;

    let pages = row.insertCell(-1);
    pages.innerText = book.pages;

    let read = row.insertCell(-1);
    read.innerText = book.read;
    
    //Add delete button
    let dltBtn = document.createElement('button');
    dltBtn.textContent = "delete";
    let dlt = row.insertCell(-1);
    dlt.appendChild(dltBtn);

    dltBtn.addEventListener('click', () => {
        row.remove();
    });

    //Add read button
    let readBtn = document.createElement('input');
    readBtn.setAttribute('type', 'checkbox');
    read.appendChild(readBtn);

    console.log(read.textContent);

    if (read == "YES") {
        readBtn.setAttribute('checked','true');
    }
    else {
        readBtn.setAttribute('checked', 'false');
    }

    readBtn.addEventListener('click', () => {
        if (read.textContent == "YES") {
            readBtn.setAttribute('checked', "false");
            read.innerText = "NO";
            read.appendChild(readBtn);
        }
        else {
            readBtn.setAttribute('checked', "true");
            read.innerText = "YES";
            read.appendChild(readBtn);
        }
    });
}

/* 
Write a function that loops through the array and 
displays each book on the page. You can display them 
in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to
your array so you can see the display.

add newBook to library during the for loop so newBook will 
change before it is added
*/

