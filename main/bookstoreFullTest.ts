import { errorFormatter } from "../errorHandler";
import { BookInventory } from "../inventory/bookInventory";
import { EBook, PaperBook, ShowcaseBook } from "../models";

export class BookstoreFullTest {
  private inventory = new BookInventory();
  private currentYear = new Date().getFullYear();

  constructor() {
    this.runTests();
  }

  private runTests(): void {
    this.testAddBooks();
    this.testRemoveOutdatedBooks();
    this.testBuyBooks();
    this.testInvalidPurchases();
  }

  private testAddBooks(): void {
    try {
      this.inventory.addBook(
        new PaperBook("P001", "TypeScript Basics", "John Doe", 2020, 29.99, 10)
      );
    } catch (error) {
      console.error(
        `Error Adding a Paper Book: ${errorFormatter(error as Error)}`
      );
    }

    try {
      this.inventory.addBook(
        new EBook("E001", "Advanced TS", "Jane Smith", 2022, 19.99, 100, "PDF")
      );
    } catch (error) {
      console.error(`Error Adding an EBook: ${errorFormatter(error as Error)}`);
    }

    try {
      this.inventory.addBook(
        new ShowcaseBook("S001", "TS Showcase", "Acme Inc", 2023, 0)
      );
    } catch (error) {
      console.error(
        `Error Adding a Show-Case Book: ${errorFormatter(error as Error)}`
      );
    }

    console.log("Add books test passed");
  }

  private testRemoveOutdatedBooks(): void {
    const outdated = this.inventory.removeOutdatedBooks(this.currentYear, 3);
    for (const outdatedBooks of outdated) {
      console.log(`removed book with ISBN = ${outdatedBooks.getISBN()}`);
    }
    console.log(`Removed ${outdated.length} outdated books`);
  }

  private testBuyBooks(): void {
    try {
      const paperCost = this.inventory.buyBook("P001", 1, {
        address: "123 Main St",
      });
      console.log(`Bought paper book for $${paperCost}`);
    } catch (error) {
      console.error(
        `Error Buying a Paper Book --- ${errorFormatter(error as Error)}`
      );
    }
    try {
      const ebookCost = this.inventory.buyBook("E001", 2, {
        email: "user@example.com",
      });
      console.log(`Bought ebooks for $${ebookCost}`);
    } catch (error) {
      console.error(`Error Buying an Ebook: ${errorFormatter(error as Error)}`);
    }
  }

  private testInvalidPurchases(): void {
    try {
      this.inventory.buyBook("S001", 1, {});
    } catch (error) {
      console.log(
        `Showcase purchase error handled: ${errorFormatter(error as Error)}`
      );
    }
  }
}
