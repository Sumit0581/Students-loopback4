import {DefaultCrudRepository} from '@loopback/repository';
import {Student, StudentRelations} from '../models';
import {StudentdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {
  constructor(
    @inject('datasources.Studentdb') dataSource: StudentdbDataSource,
  ) {
    super(Student, dataSource);
  }
}
