import { Book, EBook, PaperBook } from "../models";
import { MailService, ShippingService } from "../services";

type DeliveryInfo = {
  email?: string;
  address?: string;
};

export class BookInventory {
  private books: Map<string, Book> = new Map();

  addBook(book: Book): void {
    if (this.books.has(book.getISBN())) {
      throw new Error(`Book with ISBN ${book.getISBN()} already exists`);
    }
    this.books.set(book.getISBN(), book);
  }

  removeOutdatedBooks(currentYear: number, maxAge: number): Book[] {
    const outdated: Book[] = [];
    this.books.forEach((book) => {
      if (currentYear - book.getYear() > maxAge) {
        outdated.push(book);
        this.books.delete(book.getISBN());
      }
    });
    return outdated;
  }

  buyBook(isbn: string, quantity: number, delivery: DeliveryInfo): number {
    const book = this.books.get(isbn);
    if (!book) throw new Error(`Book not found: ${isbn}`);

    switch (book.getType()) {
      case "PAPER":
        return this.processPaperBook(book as PaperBook, quantity, delivery);
      case "EBOOK":
        return this.processEBook(book as EBook, quantity, delivery);
      case "SHOWCASE":
        throw new Error("Showcase books cannot be purchased");
      default:
        throw new Error("Unsupported book type");
    }
  }

  private processPaperBook(
    book: PaperBook,
    quantity: number,
    delivery: DeliveryInfo
  ): number {
    if (!delivery.address) throw new Error("Shipping address required");
    if (book.stock < quantity) throw new Error("Insufficient stock");

    book.stock -= quantity;
    ShippingService.ship(book, delivery.address);
    return book.getPrice() * quantity;
  }

  private processEBook(
    book: EBook,
    quantity: number,
    delivery: DeliveryInfo
  ): number {
    if (!delivery.email) throw new Error("Email address required");
    if (book.stock < quantity) throw new Error("Insufficient stock");

    book.stock -= quantity;
    MailService.send(book, delivery.email);
    return book.getPrice() * quantity;
  }
}
