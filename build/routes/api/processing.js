"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var processing = express_1.default.Router();
var inputFile = 'images\fjord.jpg';
var outputFile = 'output\output.jpg';
processing.get('/processing', function (req, res) {
    res.send('resizing your picture xD');
    (0, sharp_1.default)(inputFile)
        .resize(300, 200)
        .toFile(outputFile, function (err) {
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
    });
});
exports.default = processing;
