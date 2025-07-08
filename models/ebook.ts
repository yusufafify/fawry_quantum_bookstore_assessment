import { Book } from "./book";

export class EBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    year: number,
    price: number,
    public stock: number,
    public fileType: string
  ) {
    super(isbn, title, author, year, price);
  }

  getType(): string {
    return "EBOOK";
  }
}
