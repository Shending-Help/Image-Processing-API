"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import supertest from "supertest";
var processor_1 = __importDefault(require("../middleware/processor"));
describe("Test Image Processor", function () {
    it("the function is working properly", function () {
        expect((0, processor_1.default)("images/fjord.jpg", 200, 200, "output/200_200_fjord.jpg"))
            .toBeTruthy;
    });
});
