
import {DbConnector} from '../../db/db-connector';

export class RealitiesConnector{

  public async getRealities() {
    let result = await DbConnector.query('SELECT * FROM public.realities');
    console.log('Incoming request - Get All realities');
    return result.rows;
}

}