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
const repository_1 = require("@loopback/repository");
let Student = class Student extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: String,
        required: true,
        id: 1,
        postgresql: { "columnName": "id", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "NO" },
    }),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: false,
        postgresql: { "columnName": "name", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: Number,
        required: false,
        scale: 0,
        postgresql: { "columnName": "age", "dataType": "integer", "dataLength": null, "dataPrecision": null, "dataScale": 0, "nullable": "YES" },
    }),
    __metadata("design:type", Number)
], Student.prototype, "age", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: false,
        postgresql: { "columnName": "realm", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", String)
], Student.prototype, "realm", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: false,
        postgresql: { "columnName": "username", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", String)
], Student.prototype, "username", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: true,
        postgresql: { "columnName": "password", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "NO" },
    }),
    __metadata("design:type", String)
], Student.prototype, "password", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: true,
        postgresql: { "columnName": "email", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "NO" },
    }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: Boolean,
        required: false,
        postgresql: { "columnName": "emailverified", "dataType": "boolean", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", Boolean)
], Student.prototype, "emailverified", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: false,
        postgresql: { "columnName": "verificationtoken", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", String)
], Student.prototype, "verificationtoken", void 0);
Student = __decorate([
    repository_1.model({
        settings: { idInjection: false, postgresql: { schema: 'public', table: 'student' } }
    }),
    __metadata("design:paramtypes", [Object])
], Student);
exports.Student = Student;
//# sourceMappingURL=student.model.js.map