"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var generate_1 = require("./generate");
Object.defineProperty(exports, "generate", { enumerable: true, get: function () { return generate_1.generate; } });
if (typeof window !== 'undefined' && window.ColorsGenerate) {
    window.ColorsGenerate = generate_1.generate;
}
