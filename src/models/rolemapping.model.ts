import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'rolemapping'}}
})
export class Rolemapping extends Entity {
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
    postgresql: {"columnName":"principaltype","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  principaltype?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"principalid","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  principalid?: String;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"roleid","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  roleid?: Number;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Rolemapping>) {
    super(data);
  }
}

export interface RolemappingRelations {
  // describe navigational properties here
}

export type RolemappingWithRelations = Rolemapping & RolemappingRelations;
