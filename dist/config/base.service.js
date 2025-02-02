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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const config_1 = require("./config");
const ormconfig_1 = __importDefault(require("./ormconfig"));
class BaseService extends config_1.ConfigServer {
    constructor(entity) {
        super();
        this.entity = entity;
        this.execRepository = this.initRepository(this.entity);
    }
    initRepository(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return ormconfig_1.default.getRepository(entity);
        });
    }
}
exports.BaseService = BaseService;
