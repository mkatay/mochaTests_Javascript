const chai=window.chai
const expect=chai.expect

//const myLibrary = new Library()
myLibrary.deleteAllBooks()

describe('library registrar', ()=> {

    it('should add a book to the library array', ()=> {
        const book = new Book('Evelyn Hugo hét férje','Taylor Jenkins Reid',1);
        myLibrary.addBook(book);
        //console.log(myLibrary);
        expect(myLibrary.countBooks()).to.equal(1);
    });

    it('should add a book with correct property to the library array', ()=> {
        const book = new Book('Cím','Szerző',2);
        myLibrary.addBook(book);
        const addedBook=myLibrary.getBookById(2)
        expect(addedBook).to.deep.equal({title:'Cím',author:'Szerző',id:2});
  });

  it('Should delete a book ',()=> {
        myLibrary.deleteBook(2);
        expect(myLibrary.countBooks()).to.equal(1);
  });

  it('Should delete the specified a book ',()=> {
    const book = new Book('Cím','Szerző',3);
    myLibrary.addBook(book);
    myLibrary.deleteBook(3);
    const specifiedBook=myLibrary.getBookById(3)
    //console.log(specifiedBook);
    expect(specifiedBook).to.deep.equal(undefined);
});

it('should return the correct a list of books',()=> {
    const book = new Book('Cím','Szerző',3);
    myLibrary.addBook(book);
    expect(myLibrary.listBooks()).to.deep.equal([
        {title:'Evelyn Hugo hét férje',author:'Taylor Jenkins Reid',id:1},
        {title:'Cím',author:'Szerző',id:3}])
})
//vagy:
it('should list books correctly', () => {
    const myLibrary = new Library();
    const book1 = new Book('Evelyn Hugo hét férje', 'Taylor Jenkins Reid', 1);
    const book2 = new Book('Cím', 'Szerző', 2);
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    
    const listedBooks = myLibrary.listBooks();
    
    expect(listedBooks).to.have.lengthOf(2);
    expect(listedBooks[0]).to.deep.equal(book1);
    expect(listedBooks[1]).to.deep.equal(book2);
});


})