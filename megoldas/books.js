class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

deleteBook(id) {
    this.books = this.books.filter(book => book.id !== id);
  }

listBooks() {
    return this.books;
  }
countBooks(){
  return this.books.length
}
getBookById(id) {
  return this.books.find(obj=>obj.id==id)
}
deleteAllBooks(){
  this.books=[]
}
}

//renderelés:
const myLibrary = new Library()
const book1 = new Book('Evelyn Hugo hét férje','Taylor Jenkins Reid',1);
myLibrary.addBook(book1);
const book2=new Book('Cím','Szerző',2);
myLibrary.addBook(book2);
myLibrary.listBooks().forEach(obj=>
  document.querySelector('ul').innerHTML+=`<li id=${obj.id}>${obj.title} - ${obj.author}</li>`
  )

