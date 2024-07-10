const booksContainer = document.querySelector('.books-container');
const addBtn = document.querySelector('.add-book');

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

// Okay this will be a button on a form that calls a new Book() and each input will
// be this. value. we could either make it a modal or a dialog or just display the form
// on the page. we could make it the footer with a sticky position so it's always visible.

function addBookToLibrary() {

}

// I want the books to be displayed in the center of the screen
// In a ladder shapped fasion kind of like amazon
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

addBtn.addEventListener('click',)