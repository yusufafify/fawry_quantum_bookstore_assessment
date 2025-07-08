"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
class MailService {
    static send(book, email) {
        console.log(`Quantum book store: Sending ${book.getTitle()} (${book.fileType}) to ${email}`);
    }
}
exports.MailService = MailService;
