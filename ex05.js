var book = function(title, genre, author, read, readDate){
    this.title = title || "unknown title";
    this.genre = genre || "unknown genre";
    this.author = author || "unknown author";
    this.read = read || False
    this.readDate = readDate || ""
}

var bookList = function() {
    this.booksRead = 
    this.bookShelf = []
    
    this.addBook = function (bookInstance){}
}


var newbook1 = book('Thrive','Self-Help','Huffington',True,"Date");
