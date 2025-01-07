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
exports.MenuEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const reserva_entity_1 = require("../../reserva/entity/reserva.entity");
const menu_plato_entity_1 = require("../../menu-plato/entity/menu-plato.entity");
let MenuEntity = class MenuEntity extends base_entity_1.BaseEntity {
};
exports.MenuEntity = MenuEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MenuEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "cantidadDisponible", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserva_entity_1.ReservaEntity, reserva => reserva.menu),
    __metadata("design:type", Array)
], MenuEntity.prototype, "reservas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => menu_plato_entity_1.MenuPlatoEntity, menuPlato => menuPlato.menu),
    __metadata("design:type", Array)
], MenuEntity.prototype, "platos", void 0);
exports.MenuEntity = MenuEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tabla_menu" })
], MenuEntity);
