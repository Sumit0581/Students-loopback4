import { Entity } from '@loopback/repository';
export declare class Acl extends Entity {
    model?: String;
    property?: String;
    accesstype?: String;
    permission?: String;
    principaltype?: String;
    principalid?: String;
    id: Number;
    [prop: string]: any;
    constructor(data?: Partial<Acl>);
}
export interface AclRelations {
}
export declare type AclWithRelations = Acl & AclRelations;
