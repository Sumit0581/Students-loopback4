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
let Rolemapping = class Rolemapping extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: Number,
        required: true,
        scale: 0,
        id: 1,
        postgresql: { "columnName": "id", "dataType": "integer", "dataLength": null, "dataPrecision": null, "dataScale": 0, "nullable": "NO" },
    }),
    __metadata("design:type", Number)
], Rolemapping.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: false,
        postgresql: { "columnName": "principaltype", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", String)
], Rolemapping.prototype, "principaltype", void 0);
__decorate([
    repository_1.property({
        type: String,
        required: false,
        postgresql: { "columnName": "principalid", "dataType": "text", "dataLength": null, "dataPrecision": null, "dataScale": null, "nullable": "YES" },
    }),
    __metadata("design:type", String)
], Rolemapping.prototype, "principalid", void 0);
__decorate([
    repository_1.property({
        type: Number,
        required: false,
        scale: 0,
        postgresql: { "columnName": "roleid", "dataType": "integer", "dataLength": null, "dataPrecision": null, "dataScale": 0, "nullable": "YES" },
    }),
    __metadata("design:type", Number)
], Rolemapping.prototype, "roleid", void 0);
Rolemapping = __decorate([
    repository_1.model({
        settings: { idInjection: false, postgresql: { schema: 'public', table: 'rolemapping' } }
    }),
    __metadata("design:paramtypes", [Object])
], Rolemapping);
exports.Rolemapping = Rolemapping;
//# sourceMappingURL=rolemapping.model.js.map