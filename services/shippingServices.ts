import { PaperBook } from "../models";

export class ShippingService {
  static ship(book: PaperBook, address: string): void {
    console.log(
      `Quantum book store: Shipping ${book.getTitle()} to ${address}`
    );
  }
}
