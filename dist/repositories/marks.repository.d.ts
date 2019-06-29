import { DefaultCrudRepository } from '@loopback/repository';
import { Marks, MarksRelations } from '../models';
import { StudentdbDataSource } from '../datasources';
export declare class MarksRepository extends DefaultCrudRepository<Marks, typeof Marks.prototype.id, MarksRelations> {
    constructor(dataSource: StudentdbDataSource);
}
