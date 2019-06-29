import { Entity } from '@loopback/repository';
export declare class Rolemapping extends Entity {
    id: Number;
    principaltype?: String;
    principalid?: String;
    roleid?: Number;
    [prop: string]: any;
    constructor(data?: Partial<Rolemapping>);
}
export interface RolemappingRelations {
}
export declare type RolemappingWithRelations = Rolemapping & RolemappingRelations;
