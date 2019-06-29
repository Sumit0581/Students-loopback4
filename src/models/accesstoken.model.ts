import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'accesstoken'}}
})
export class Accesstoken extends Entity {
  @property({
    type: String,
    required: true,
    id: 1,
    postgresql: {"columnName":"id","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"NO"},
  })
  id: String;

  @property({
    type: Number,
    required: false,
    scale: 0,
    postgresql: {"columnName":"ttl","dataType":"integer","dataLength":null,"dataPrecision":null,"dataScale":0,"nullable":"YES"},
  })
  ttl?: Number;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"scopes","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  scopes?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"created","dataType":"timestamp with time zone","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  created?: String;

  @property({
    type: String,
    required: false,
    postgresql: {"columnName":"userid","dataType":"text","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"YES"},
  })
  userid?: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Accesstoken>) {
    super(data);
  }
}

export interface AccesstokenRelations {
  // describe navigational properties here
}

export type AccesstokenWithRelations = Accesstoken & AccesstokenRelations;
