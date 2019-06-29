import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'teacher'}}
})
export class Teacher extends Entity {
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

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"experience","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  experience?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"realm","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  realm?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"username","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  username?: String;

  @property({
    type: String,
    required: true,
    postgresql: {"columnName":"password","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  password: String;

  @property({
    type: String,
    required: true,
    postgresql: {"columnName":"email","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  email: String;

  @property({
    type: Boolean,
    required: false,
    postgresql: {"columnName":"emailverified","dataType":"boolean","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  emailverified?: Boolean;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"verificationtoken","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  verificationtoken?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Teacher>) {
    super(data);
  }
}

export interface TeacherRelations {
  // describe navigational properties here
}

export type TeacherWithRelations = Teacher & TeacherRelations;
