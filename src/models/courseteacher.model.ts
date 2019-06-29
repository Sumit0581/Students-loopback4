import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'courseteacher'}}
})
export class Courseteacher extends Entity {
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
    postgresql: {"columnName":"teacherid","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  teacherid?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"courseid","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  courseid?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Courseteacher>) {
    super(data);
  }
}

export interface CourseteacherRelations {
  // describe navigational properties here
}

export type CourseteacherWithRelations = Courseteacher & CourseteacherRelations;
