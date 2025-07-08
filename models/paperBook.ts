import { Book } from "./book";

export class PaperBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    year: number,
    price: number,
    public stock: number
  ) {
    super(isbn, title, author, year, price);
  }

  getType(): string {
    return "PAPER";
  }
}
