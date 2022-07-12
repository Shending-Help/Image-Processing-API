"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var processing_1 = __importDefault(require("./api/processing"));
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.use('/teachers', processing_1.default);
exports.default = routes;
