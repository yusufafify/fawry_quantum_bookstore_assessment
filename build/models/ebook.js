"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBook = void 0;
const book_1 = require("./book");
class EBook extends book_1.Book {
    constructor(isbn, title, author, year, price, stock, fileType) {
        super(isbn, title, author, year, price);
        this.stock = stock;
        this.fileType = fileType;
    }
    getType() {
        return "EBOOK";
    }
}
exports.EBook = EBook;
