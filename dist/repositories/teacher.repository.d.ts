import { DefaultCrudRepository } from '@loopback/repository';
import { Teacher, TeacherRelations } from '../models';
import { StudentdbDataSource } from '../datasources';
export declare class TeacherRepository extends DefaultCrudRepository<Teacher, typeof Teacher.prototype.id, TeacherRelations> {
    constructor(dataSource: StudentdbDataSource);
}
