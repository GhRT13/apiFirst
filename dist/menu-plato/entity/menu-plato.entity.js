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
exports.MenuPlatoEntity = void 0;
const typeorm_1 = require("typeorm");
const menu_entity_1 = require("../../menu/entity/menu.entity");
const plato_entity_1 = require("../../plato/entity/plato.entity");
const base_entity_1 = require("../../config/base.entity");
let MenuPlatoEntity = class MenuPlatoEntity extends base_entity_1.BaseEntity {
};
exports.MenuPlatoEntity = MenuPlatoEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], MenuPlatoEntity.prototype, "id_menu", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], MenuPlatoEntity.prototype, "id_plato", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.MenuEntity, menu => menu.platos, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_menu' }),
    __metadata("design:type", menu_entity_1.MenuEntity)
], MenuPlatoEntity.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plato_entity_1.PlatoEntity, plato => plato.menus, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_plato' }),
    __metadata("design:type", plato_entity_1.PlatoEntity)
], MenuPlatoEntity.prototype, "plato", void 0);
exports.MenuPlatoEntity = MenuPlatoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "menu_plato" })
], MenuPlatoEntity);
