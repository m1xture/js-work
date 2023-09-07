class Book {
    constructor(title = "", author = "", price = 0) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class BookStore {
    constructor(books = [], ) {
        this.books = books;
    }
    addBook(newBook) {
        this.books.push(newBook);
        return this.books;
    }
    removeBook(bookToRemove) {
        const indexToRemove = this.books.findIndex(currentBook => currentBook === bookToRemove);
        this.books.splice(indexToRemove, indexToRemove);
        return this.books;
    }
    listBooks() {
        return this.books;
    }
}

const myBookstore = new BookStore();
const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 10);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12);
const book3 = new Book('1984', 'George Orwell', 8);
console.log(myBookstore.addBook(book1));
console.log(myBookstore.addBook(book2));
console.log(myBookstore.addBook(book3));


console.log(myBookstore.listBooks()); // виведе всі книги у книжковому магазині

console.log(myBookstore.removeBook(book2));

// виведе всі книги у книжковому магазині (без book2)
console.log(myBookstore.listBooks());

//todo: this
//? Він спрацьовує в момент виклику методу об'єкта
//? Контекст виклику можемо примусово прив'язати до певного об'єкта через методи call, apply, bind
//? Стрілкові функції беруть контекст виклику this у місці створення. Саме тому їх не використовують як методи об'єкту


class User {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
}

const user1 = new User("lalala");
console.log(user1.getUsername());
console.log(user1.getUsername());


//?


const s = function (a, b) {
    return a * b;
}

const test1 = {
    a: 7,
    b: 9,
}

console.log(s);
s.call(test1, 75, 2);
s.apply(test1, [789, 1])
s.bind()

//? Bind прив'язує контекст виклику функції до певного об'єкта

const d = {
    d: 0,
}

s.bind(d)


//desc

// const text = document.querySelector("[data-text]");
// text.value = "lalala";

// console.log(text);
// let clicks = 0;
// window.addEventListener("click", () => {
//     clicks++;
//     console.log(clicks);
//     text.value = clicks.textContent;
// })