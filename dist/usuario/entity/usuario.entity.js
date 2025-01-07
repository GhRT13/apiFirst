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
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const area_entity_1 = require("../../area/entity/area.entity");
const reserva_entity_1 = require("../../reserva/entity/reserva.entity");
let UsuarioEntity = class UsuarioEntity extends base_entity_1.BaseEntity {
};
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "contrasena", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'uuid' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id_area", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => area_entity_1.AreaEntity, area => area.usuarios),
    (0, typeorm_1.JoinColumn)({ name: 'id_area' }),
    __metadata("design:type", area_entity_1.AreaEntity)
], UsuarioEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserva_entity_1.ReservaEntity, reserva => reserva.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "reservas", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tabla_usuario" })
], UsuarioEntity);
