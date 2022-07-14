"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var resize = function (inputFile, width, height, outputFile) {
    return (0, sharp_1.default)(inputFile)
        .resize(width, height, {
        fit: "fill"
    })
        .toFile(outputFile, function (err) {
        console.log(err);
    })
        .toBuffer();
};
/*     */
exports.default = resize;
