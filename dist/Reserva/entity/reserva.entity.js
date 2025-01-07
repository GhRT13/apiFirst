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
exports.ReservaEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const usuario_entity_1 = require("../../usuario/entity/usuario.entity");
const menu_entity_1 = require("../../menu/entity/menu.entity");
let ReservaEntity = class ReservaEntity extends base_entity_1.BaseEntity {
};
exports.ReservaEntity = ReservaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ReservaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], ReservaEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ReservaEntity.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ReservaEntity.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity, usuario => usuario.reservas),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], ReservaEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ReservaEntity.prototype, "id_menu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.MenuEntity, menu => menu.reservas),
    (0, typeorm_1.JoinColumn)({ name: 'id_menu' }),
    __metadata("design:type", menu_entity_1.MenuEntity)
], ReservaEntity.prototype, "menu", void 0);
exports.ReservaEntity = ReservaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tabla_reserva" })
], ReservaEntity);
