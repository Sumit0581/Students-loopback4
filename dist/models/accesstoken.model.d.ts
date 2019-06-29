import { Entity } from '@loopback/repository';
export declare class Accesstoken extends Entity {
    id: String;
    ttl?: Number;
    scopes?: String;
    created?: String;
    userid?: String;
    [prop: string]: any;
    constructor(data?: Partial<Accesstoken>);
}
export interface AccesstokenRelations {
}
export declare type AccesstokenWithRelations = Accesstoken & AccesstokenRelations;
