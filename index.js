const booksContainer = document.querySelector('.books-container');
const addBtn = document.querySelector('.add-book');
const closeModal = document.querySelector('.close')
const modal = document.querySelector('dialog')
const addBookBtn = document.querySelector('.submit-book')
const titleInput = document.querySelector('#book-title')
const authorInput = document.querySelector('#book-author')
const pagesInput = document.querySelector('#book-pages')
const radioValue = document.querySelectorAll('.radio');


const myLibrary = [
    {
        title: "The War of Art",
        author: "Steven Pressfield",
        pages: "192",
        read: "no"
    },
    {
        title: "The Little Book of Hygge",
        author: "Meik Wiking",
        pages: "240",
        read: "no"
    },
    {
        title: "Between Two Fires",
        author: "Christopher Buehlman",
        pages: "436",
        read: "no"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: "320",
        read: "no"
    }

];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// to get the value of the radio buttons we need to querySelectorAll()
// we for loop through the node list then we check "if" checked then save the
// value in a variable then set the this.read value to that variable?
// save the variable in that for loop
function getRadioValue() {

}
function addBookToLibrary() {
    console.log("start")

    for (let i = 0; i < radioValue.length; i++) {
        if (radioValue[i].checked) {
            console.log(i)
            myLibrary.push(new Book(
                titleInput.value,
                authorInput.value,
                pagesInput.value,
                radioValue[i].value
            ));

        } else if (!radioValue[i].checked) {
            console.log(radioValue[i], "this was not logged")
        }
    }



    console.log(myLibrary)
    console.log("function end")
}


function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const title = document.createElement("span");
        const author = document.createElement('span');
        const pages = document.createElement('span');
        const read = document.createElement('span');
        const bookTitle = document.createElement("span");
        const bookAuthor = document.createElement('span');
        const bookPages = document.createElement('span');
        const bookRead = document.createElement('span');
        read.textContent = `Have you read?`;
        pages.textContent = `Page Count`
        author.textContent = `Author's Name`;
        title.textContent = `Title`;
        bookRead.textContent = `${myLibrary[i].read}`;
        bookPages.textContent = `${myLibrary[i].pages}`
        bookAuthor.textContent = `${myLibrary[i].author}`;
        bookTitle.textContent = `${myLibrary[i].title}`;
        booksContainer.appendChild(bookCard)
        bookCard.append(title, bookTitle, author, bookAuthor, pages, bookPages, read, bookRead);
    }
}

displayBooks()

closeModal.addEventListener('click', () => {
    modal.setAttribute("class", "");
    addBtn.removeAttribute("hidden");
})

addBtn.addEventListener("click", () => {
    modal.setAttribute("class", "modal");
    addBtn.setAttribute('hidden', '');
})

addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
    displayBooks();
    modal.setAttribute("class", "");
    addBtn.removeAttribute("hidden");
})

