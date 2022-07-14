"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var processor_1 = __importDefault(require("../../middleware/processor"));
var path_1 = __importDefault(require("path"));
var fs = require("fs");
//import { promises as fsPromises } from "fs";
var processing = express_1.default.Router();
//const inputFile = "images/fjord.jpg";
//const outputFile = inputFile.substring(7);
processing.get("/", function (req, res) {
    var inputFile = "images/" + req.query.filename;
    //const outputFile = inputFile.substring(7);
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    var outputFile = "output/".concat(width, "_").concat(height, "_") + req.query.filename;
    var avaialabeImages = [
        "encenadaport.jpg",
        "fjord.jpg",
        "icelandwaterfall.jpg",
        "palmtunnel.jpg",
        "santamonica.jpg",
    ];
    if (isNaN(Number(req.query.width)) ||
        isNaN(Number(req.query.height)) ||
        !avaialabeImages.includes(inputFile.substring(7))) {
        res.send("incorrect width, height or filename");
    }
    else {
        fs.access(outputFile, function (err) {
            if (err) {
                console.log("the error was: " + err);
                (0, processor_1.default)(inputFile, width, height, outputFile).then(function () {
                    res.sendFile(path_1.default.normalize(__dirname + "../../../../" + outputFile));
                });
            }
            else {
                res.sendFile(path_1.default.normalize(__dirname + "../../../../" + outputFile));
            }
        });
    }
});
exports.default = processing;
