"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guia_controller_1 = require("./../controllers/guia.controller");
const router = (0, express_1.Router)();
router.post('/guias', guia_controller_1.createGuia);
router.get('/guias', guia_controller_1.getGuias);
router.get('/guias/:id', guia_controller_1.getGuia);
router.put('/guias/:id', guia_controller_1.updateGuia);
exports.default = router;
