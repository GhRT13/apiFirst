"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaController = void 0;
class AreaController {
    getAreas(req, res) {
        res.status(200).json({
            area: "area",
        });
    }
    getAllAreas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({
                area: "Listado de areas",
            });
        });
    }
}
exports.AreaController = AreaController;
