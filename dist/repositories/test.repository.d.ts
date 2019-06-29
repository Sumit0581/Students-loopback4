import { DefaultCrudRepository } from '@loopback/repository';
import { Test, TestRelations } from '../models';
import { StudentdbDataSource } from '../datasources';
export declare class TestRepository extends DefaultCrudRepository<Test, typeof Test.prototype.name, TestRelations> {
    constructor(dataSource: StudentdbDataSource);
}
