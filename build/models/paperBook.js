"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperBook = void 0;
const book_1 = require("./book");
class PaperBook extends book_1.Book {
    constructor(isbn, title, author, year, price, stock) {
        super(isbn, title, author, year, price);
        this.stock = stock;
    }
    getType() {
        return "PAPER";
    }
}
exports.PaperBook = PaperBook;
