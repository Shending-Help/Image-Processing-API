"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs = require("fs");
//import { promises as fsPromises } from "fs";
var processing = express_1.default.Router();
//const inputFile = "images/fjord.jpg";
//const outputFile = inputFile.substring(7);
processing.get("/", function (req, res) {
    var inputFile = "images/" + req.query.filename;
    // const outputFile = inputFile.substring(7);
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    var outputFile = "output/".concat(width, "_").concat(height, "_") + req.query.filename;
    fs.access(outputFile, function (err) {
        if (err) {
            (0, sharp_1.default)(inputFile)
                .resize(width, height, {
                fit: "fill",
            })
                .toFile(outputFile, function (err) { })
                .toBuffer()
                .then(function (data) {
                res.sendFile(path_1.default.normalize(__dirname + "../../../../" + outputFile));
            })
                .catch(function (err) {
                res.send("image couldn't be retreived: " + err);
            });
        }
        else {
            res.sendFile(path_1.default.normalize(__dirname + "../../../../" + outputFile));
        }
    });
});
exports.default = processing;
