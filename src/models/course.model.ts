import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'course'}}
})
export class Course extends Entity {
  @property({
    type: String,
    required: true,
    id: 1,
    postgresql: {"columnName":"id","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  id: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"name","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  name?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Course>) {
    super(data);
  }
}

export interface CourseRelations {
  // describe navigational properties here
}

export type CourseWithRelations = Course & CourseRelations;
