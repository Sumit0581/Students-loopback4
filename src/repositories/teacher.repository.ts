import {DefaultCrudRepository} from '@loopback/repository';
import {Teacher, TeacherRelations} from '../models';
import {StudentdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TeacherRepository extends DefaultCrudRepository<
  Teacher,
  typeof Teacher.prototype.id,
  TeacherRelations
> {
  constructor(
    @inject('datasources.Studentdb') dataSource: StudentdbDataSource,
  ) {
    super(Teacher, dataSource);
  }
}
