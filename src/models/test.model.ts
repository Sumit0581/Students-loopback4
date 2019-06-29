import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'test'}}})
export class Test extends Entity {
  @property({
    type: String,
    required: true,
    id: 1,
    postgresql: {"columnName":"name","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  name: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Test>) {
    super(data);
  }
}

export interface TestRelations {
  // describe navigational properties here
}

export type TestWithRelations = Test & TestRelations;
