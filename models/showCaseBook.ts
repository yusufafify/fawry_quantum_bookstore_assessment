import { Book } from "./book";

export class ShowcaseBook extends Book {
  getType(): string {
    return "SHOWCASE";
  }
}
