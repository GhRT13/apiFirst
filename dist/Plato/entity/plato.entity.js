"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const menu_plato_entity_1 = require("../../menu-plato/entity/menu-plato.entity");
let PlatoEntity = class PlatoEntity extends base_entity_1.BaseEntity {
};
exports.PlatoEntity = PlatoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlatoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], PlatoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], PlatoEntity.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PlatoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => menu_plato_entity_1.MenuPlatoEntity, menuPlato => menuPlato.plato),
    __metadata("design:type", Array)
], PlatoEntity.prototype, "menus", void 0);
exports.PlatoEntity = PlatoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tabla_plato" })
], PlatoEntity);
