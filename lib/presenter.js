"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.present = exports.USED_IN_MODULE = void 0;
var chalk_1 = __importDefault(require("chalk"));
exports.USED_IN_MODULE = ' (used in module)';
var formatOutput = function (file, result) {
    var name = result.name, line = result.line, usedInModule = result.usedInModule;
    return chalk_1.default.green(file) + ":" + chalk_1.default.yellow(line) + " - " + chalk_1.default.cyan(name) + (usedInModule ? "" + chalk_1.default.grey(exports.USED_IN_MODULE) : '');
};
var present = function (state) {
    var unused2D = state
        .definitelyUnused()
        .map(function (result) { return ({
        file: result.file.replace(process.cwd(), "").replace(new RegExp("^/"), ""),
        symbols: result.symbols
    }); })
        .map(function (_a) {
        var file = _a.file, symbols = _a.symbols;
        return symbols.map(function (sym) { return formatOutput(file, sym); });
    });
    return [].concat.apply([], unused2D);
};
exports.present = present;
//# sourceMappingURL=presenter.js.map