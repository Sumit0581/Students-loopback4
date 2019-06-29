import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './studentdb.datasource.json';

export class StudentdbDataSource extends juggler.DataSource {
  static dataSourceName = 'Studentdb';

  constructor(
    @inject('datasources.config.Studentdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
