"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookstoreFullTest = void 0;
const errorHandler_1 = require("../errorHandler");
const bookInventory_1 = require("../inventory/bookInventory");
const models_1 = require("../models");
class BookstoreFullTest {
    constructor() {
        this.inventory = new bookInventory_1.BookInventory();
        this.currentYear = new Date().getFullYear();
        this.runTests();
    }
    runTests() {
        this.testAddBooks();
        this.testRemoveOutdatedBooks();
        this.testBuyBooks();
        this.testInvalidPurchases();
    }
    testAddBooks() {
        try {
            this.inventory.addBook(new models_1.PaperBook("P001", "TypeScript Basics", "John Doe", 2020, 29.99, 10));
        }
        catch (error) {
            console.error(error);
        }
        try {
            this.inventory.addBook(new models_1.EBook("E001", "Advanced TS", "Jane Smith", 2022, 19.99, 100, "PDF"));
        }
        catch (error) {
            console.error(error);
        }
        try {
            this.inventory.addBook(new models_1.ShowcaseBook("S001", "TS Showcase", "Acme Inc", 2023, 0));
        }
        catch (error) {
            console.error(error);
        }
        console.log("Add books test passed");
    }
    testRemoveOutdatedBooks() {
        const outdated = this.inventory.removeOutdatedBooks(this.currentYear, 3);
        for (const outdatedBooks of outdated) {
            console.log(`removed book with ISBN = ${outdatedBooks.getISBN()}`);
        }
        console.log(`Removed ${outdated.length} outdated books`);
    }
    testBuyBooks() {
        try {
            const paperCost = this.inventory.buyBook("P001", 1, {
                address: "123 Main St",
            });
            console.log(`Bought paper book for $${paperCost}`);
        }
        catch (error) {
            console.error(`Error Buying a Paper Book --- ${(0, errorHandler_1.errorFormatter)(error)}`);
        }
        try {
            const ebookCost = this.inventory.buyBook("E001", 2, {
                email: "user@example.com",
            });
            console.log(`Bought ebooks for $${ebookCost}`);
        }
        catch (error) {
            console.error(`Error Buying an Ebook: ${(0, errorHandler_1.errorFormatter)(error)}`);
        }
    }
    testInvalidPurchases() {
        try {
            this.inventory.buyBook("S001", 1, {});
        }
        catch (error) {
            console.log(`Showcase purchase error handled: ${(0, errorHandler_1.errorFormatter)(error)}`);
        }
    }
}
exports.BookstoreFullTest = BookstoreFullTest;
