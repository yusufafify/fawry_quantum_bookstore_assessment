"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingService = void 0;
class ShippingService {
    static ship(book, address) {
        console.log(`Quantum book store: Shipping ${book.getTitle()} to ${address}`);
    }
}
exports.ShippingService = ShippingService;
