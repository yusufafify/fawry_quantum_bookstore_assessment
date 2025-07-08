import { EBook } from "../models";

export class MailService {
  static send(book: EBook, email: string): void {
    console.log(
      `Quantum book store: Sending ${book.getTitle()} (${
        book.fileType
      }) to ${email}`
    );
  }
}
