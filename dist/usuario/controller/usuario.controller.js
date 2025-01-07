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
exports.UsuarioController = void 0;
const usuario_service_1 = require("../service/usuario.service");
class UsuarioController {
    constructor() {
        this.usuarioService = new usuario_service_1.UsuarioService();
    }
    // Obtener todos los usuarios
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield this.usuarioService.findAllUsuarios(); // {{ edit_1 }}
                res.status(200).json(usuarios);
            }
            catch (error) {
                console.error('Error en getUsuarios:', error); // Registra el error completo
                res.status(500).json({ message: "Error al obtener usuarios", error: error.message }); // Incluye el mensaje de error
            }
        });
    }
    // Obtener un usuario por ID
    getUsuarioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const usuario = yield this.usuarioService.findUsuarioById(id);
                if (usuario) {
                    res.status(200).json(usuario);
                }
                else {
                    res.status(404).json({ message: "Usuario no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en getUsuarioById:', error);
                res.status(500).json({ message: "Error al obtener el usuario" });
            }
        });
    }
    // Crear nuevo usuario
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioData = req.body; // {{ edit_3 }}
            try {
                const newUsuario = yield this.usuarioService.createUsuario(usuarioData); // {{ edit_4 }}
                res.status(201).json(newUsuario);
            }
            catch (error) {
                console.error('Error en createUsuario:', error);
                res.status(500).json({ message: "Error al crear el usuario" });
            }
        });
    }
    // Actualizar un usuario
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuarioData = req.body; // {{ edit_5 }}
            try {
                const updatedUsuario = yield this.usuarioService.updateUsuario(id, usuarioData); // {{ edit_6 }}
                if (updatedUsuario) {
                    res.status(200).json(updatedUsuario);
                }
                else {
                    res.status(404).json({ message: "Usuario no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en updateUsuario:', error);
                res.status(500).json({ message: "Error al actualizar el usuario" });
            }
        });
    }
    // Eliminar un usuario
    deleteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.usuarioService.deleteUsuario(id); // {{ edit_1 }}
                if (result && result.affected && result.affected > 0) { // {{ edit_2 }} Verifica que result no sea null y que affected esté definido
                    res.status(204).send(); // Usuario eliminado
                }
                else {
                    res.status(404).json({ message: "Usuario no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en deleteUsuario:', error);
                res.status(500).json({ message: "Error al eliminar el usuario" });
            }
        });
    }
}
exports.UsuarioController = UsuarioController;
