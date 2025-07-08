"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookInventory = void 0;
const services_1 = require("../services");
class BookInventory {
    constructor() {
        this.books = new Map();
    }
    addBook(book) {
        if (this.books.has(book.getISBN())) {
            throw new Error(`Book with ISBN ${book.getISBN()} already exists`);
        }
        this.books.set(book.getISBN(), book);
    }
    removeOutdatedBooks(currentYear, maxAge) {
        const outdated = [];
        this.books.forEach((book) => {
            if (currentYear - book.getYear() > maxAge) {
                outdated.push(book);
                this.books.delete(book.getISBN());
            }
        });
        return outdated;
    }
    buyBook(isbn, quantity, delivery) {
        const book = this.books.get(isbn);
        if (!book)
            throw new Error(`Book not found: ${isbn}`);
        switch (book.getType()) {
            case "PAPER":
                return this.processPaperBook(book, quantity, delivery);
            case "EBOOK":
                return this.processEBook(book, quantity, delivery);
            case "SHOWCASE":
                throw new Error("Showcase books cannot be purchased");
            default:
                throw new Error("Unsupported book type");
        }
    }
    processPaperBook(book, quantity, delivery) {
        if (!delivery.address)
            throw new Error("Shipping address required");
        if (book.stock < quantity)
            throw new Error("Insufficient stock");
        book.stock -= quantity;
        services_1.ShippingService.ship(book, delivery.address);
        return book.getPrice() * quantity;
    }
    processEBook(book, quantity, delivery) {
        if (!delivery.email)
            throw new Error("Email address required");
        if (book.stock < quantity)
            throw new Error("Insufficient stock");
        book.stock -= quantity;
        services_1.MailService.send(book, delivery.email);
        return book.getPrice() * quantity;
    }
}
exports.BookInventory = BookInventory;
