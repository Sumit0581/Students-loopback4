import {DefaultCrudRepository} from '@loopback/repository';
import {Course, CourseRelations} from '../models';
import {StudentdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CourseRepository extends DefaultCrudRepository<
  Course,
  typeof Course.prototype.id,
  CourseRelations
> {
  constructor(
    @inject('datasources.Studentdb') dataSource: StudentdbDataSource,
  ) {
    super(Course, dataSource);
  }
}
