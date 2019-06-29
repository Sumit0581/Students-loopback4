import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'studentcourse'}}
})
export class Studentcourse extends Entity {
  @property({
    type: Number,
    required: true,
    scale: 0,
    id: 1,
    postgresql: {"columnName":"id","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"NO"},
  })
  id: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"courseid","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  courseid?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"studentid","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  studentid?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Studentcourse>) {
    super(data);
  }
}

export interface StudentcourseRelations {
  // describe navigational properties here
}

export type StudentcourseWithRelations = Studentcourse & StudentcourseRelations;
