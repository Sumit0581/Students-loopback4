import { DefaultCrudRepository } from '@loopback/repository';
import { Course, CourseRelations } from '../models';
import { StudentdbDataSource } from '../datasources';
export declare class CourseRepository extends DefaultCrudRepository<Course, typeof Course.prototype.id, CourseRelations> {
    constructor(dataSource: StudentdbDataSource);
}
