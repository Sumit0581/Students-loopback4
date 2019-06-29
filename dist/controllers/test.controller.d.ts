import { Count, Filter, Where } from '@loopback/repository';
import { Test } from '../models';
import { TestRepository } from '../repositories';
export declare class TestController {
    testRepository: TestRepository;
    constructor(testRepository: TestRepository);
    create(test: Test): Promise<Test>;
    count(where?: Where<Test>): Promise<Count>;
    find(filter?: Filter<Test>): Promise<Test[]>;
    updateAll(test: Test, where?: Where<Test>): Promise<Count>;
    findById(id: string): Promise<Test>;
    updateById(id: string, test: Test): Promise<void>;
    replaceById(id: string, test: Test): Promise<void>;
    deleteById(id: string): Promise<void>;
}
