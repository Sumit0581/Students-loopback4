import { juggler } from '@loopback/repository';
export declare class StudentdbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
