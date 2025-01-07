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
exports.EstudianteEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const usuario_entity_1 = require("../../usuario/entity/usuario.entity");
let EstudianteEntity = class EstudianteEntity extends base_entity_1.BaseEntity {
};
exports.EstudianteEntity = EstudianteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false }),
    __metadata("design:type", Boolean)
], EstudianteEntity.prototype, "becado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "cuarto", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.UsuarioEntity),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], EstudianteEntity.prototype, "usuario", void 0);
exports.EstudianteEntity = EstudianteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tabla_estudiante" })
], EstudianteEntity);
