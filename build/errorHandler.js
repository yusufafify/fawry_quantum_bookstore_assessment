"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFormatter = void 0;
const errorFormatter = (error) => {
    return error instanceof Error ? error.message : String(error);
};
exports.errorFormatter = errorFormatter;
