export abstract class Book {
  constructor(
    protected readonly isbn: string,
    protected readonly title: string,
    protected readonly author: string,
    protected readonly year: number,
    protected readonly price: number
  ) {}

  abstract getType(): string;

  getISBN(): string {
    return this.isbn;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getYear(): number {
    return this.year;
  }

  getPrice(): number {
    return this.price;
  }
}
