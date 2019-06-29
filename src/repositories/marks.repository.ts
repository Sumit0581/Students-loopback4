import {DefaultCrudRepository} from '@loopback/repository';
import {Marks, MarksRelations} from '../models';
import {StudentdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MarksRepository extends DefaultCrudRepository<
  Marks,
  typeof Marks.prototype.id,
  MarksRelations
> {
  constructor(
    @inject('datasources.Studentdb') dataSource: StudentdbDataSource,
  ) {
    super(Marks, dataSource);
  }
}
