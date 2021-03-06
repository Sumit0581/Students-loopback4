import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'role'}}})
export class Role extends Entity {
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
    required: true,
    postgresql: {"columnName":"name","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  name: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"description","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  description?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"created","dataType":"timestamp with time zone","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  created?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"modified","dataType":"timestamp with time zone","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  modified?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
