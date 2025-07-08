"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowcaseBook = void 0;
const book_1 = require("./book");
class ShowcaseBook extends book_1.Book {
    getType() {
        return "SHOWCASE";
    }
}
exports.ShowcaseBook = ShowcaseBook;
