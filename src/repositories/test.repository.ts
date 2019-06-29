import {DefaultCrudRepository} from '@loopback/repository';
import {Test, TestRelations} from '../models';
import {StudentdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype.name,
  TestRelations
> {
  constructor(
    @inject('datasources.Studentdb') dataSource: StudentdbDataSource,
  ) {
    super(Test, dataSource);
  }
}
