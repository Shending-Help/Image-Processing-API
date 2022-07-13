"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var processing_1 = __importDefault(require("./api/processing"));
//import searcher from "./api/searcher";
var express_1 = __importDefault(require("express"));
var fs = require("fs");
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res.send("main route");
});
routes.use("/processing", processing_1.default);
//routes.use("/processing", searcher);
exports.default = routes;
