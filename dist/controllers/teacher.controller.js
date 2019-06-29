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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TeacherController = class TeacherController {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async create(teacher) {
        return await this.teacherRepository.create(teacher);
    }
    async count(where) {
        return await this.teacherRepository.count(where);
    }
    async find(filter) {
        return await this.teacherRepository.find(filter);
    }
    async updateAll(teacher, where) {
        return await this.teacherRepository.updateAll(teacher, where);
    }
    async findById(id) {
        return await this.teacherRepository.findById(id);
    }
    async updateById(id, teacher) {
        await this.teacherRepository.updateById(id, teacher);
    }
    async replaceById(id, teacher) {
        await this.teacherRepository.replaceById(id, teacher);
    }
    async deleteById(id) {
        await this.teacherRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/teachers', {
        responses: {
            '200': {
                description: 'Teacher model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Teacher } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Teacher]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "create", null);
__decorate([
    rest_1.get('/teachers/count', {
        responses: {
            '200': {
                description: 'Teacher model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Teacher))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "count", null);
__decorate([
    rest_1.get('/teachers', {
        responses: {
            '200': {
                description: 'Array of Teacher model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Teacher } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Teacher))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "find", null);
__decorate([
    rest_1.patch('/teachers', {
        responses: {
            '200': {
                description: 'Teacher PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Teacher))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Teacher, Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/teachers/{id}', {
        responses: {
            '200': {
                description: 'Teacher model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Teacher } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "findById", null);
__decorate([
    rest_1.patch('/teachers/{id}', {
        responses: {
            '204': {
                description: 'Teacher PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Teacher]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "updateById", null);
__decorate([
    rest_1.put('/teachers/{id}', {
        responses: {
            '204': {
                description: 'Teacher PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Teacher]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/teachers/{id}', {
        responses: {
            '204': {
                description: 'Teacher DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "deleteById", null);
TeacherController = __decorate([
    __param(0, repository_1.repository(repositories_1.TeacherRepository)),
    __metadata("design:paramtypes", [repositories_1.TeacherRepository])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map