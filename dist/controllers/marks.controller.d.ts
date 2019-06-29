import { Count, Filter, Where } from '@loopback/repository';
import { Marks } from '../models';
import { MarksRepository } from '../repositories';
export declare class MarksController {
    marksRepository: MarksRepository;
    constructor(marksRepository: MarksRepository);
    create(marks: Marks): Promise<Marks>;
    count(where?: Where<Marks>): Promise<Count>;
    find(filter?: Filter<Marks>): Promise<Marks[]>;
    updateAll(marks: Marks, where?: Where<Marks>): Promise<Count>;
    findById(id: number): Promise<Marks>;
    updateById(id: number, marks: Marks): Promise<void>;
    replaceById(id: number, marks: Marks): Promise<void>;
    deleteById(id: number): Promise<void>;
}
