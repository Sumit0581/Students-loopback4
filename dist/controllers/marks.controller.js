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
let MarksController = class MarksController {
    constructor(marksRepository) {
        this.marksRepository = marksRepository;
    }
    async create(marks) {
        return await this.marksRepository.create(marks);
    }
    async count(where) {
        return await this.marksRepository.count(where);
    }
    async find(filter) {
        return await this.marksRepository.find(filter);
    }
    async updateAll(marks, where) {
        return await this.marksRepository.updateAll(marks, where);
    }
    async findById(id) {
        return await this.marksRepository.findById(id);
    }
    async updateById(id, marks) {
        await this.marksRepository.updateById(id, marks);
    }
    async replaceById(id, marks) {
        await this.marksRepository.replaceById(id, marks);
    }
    async deleteById(id) {
        await this.marksRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/marks', {
        responses: {
            '200': {
                description: 'Marks model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Marks } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Marks]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "create", null);
__decorate([
    rest_1.get('/marks/count', {
        responses: {
            '200': {
                description: 'Marks model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Marks))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "count", null);
__decorate([
    rest_1.get('/marks', {
        responses: {
            '200': {
                description: 'Array of Marks model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Marks } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Marks))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "find", null);
__decorate([
    rest_1.patch('/marks', {
        responses: {
            '200': {
                description: 'Marks PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Marks))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Marks, Object]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/marks/{id}', {
        responses: {
            '200': {
                description: 'Marks model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Marks } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "findById", null);
__decorate([
    rest_1.patch('/marks/{id}', {
        responses: {
            '204': {
                description: 'Marks PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Marks]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "updateById", null);
__decorate([
    rest_1.put('/marks/{id}', {
        responses: {
            '204': {
                description: 'Marks PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Marks]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/marks/{id}', {
        responses: {
            '204': {
                description: 'Marks DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "deleteById", null);
MarksController = __decorate([
    __param(0, repository_1.repository(repositories_1.MarksRepository)),
    __metadata("design:paramtypes", [repositories_1.MarksRepository])
], MarksController);
exports.MarksController = MarksController;
//# sourceMappingURL=marks.controller.js.map