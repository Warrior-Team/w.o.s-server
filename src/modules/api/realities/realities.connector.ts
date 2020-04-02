
import {DbConnector} from '../../db/db-connector';

export class RealitiesConnector{

  async getRealities() {
    let result = await DbConnector.query('SELECT * FROM public.realities');
    console.log('Incoming request - Get All realities');

   return result.rows.map(data => {
      return { 
        ...data,
        foodDemands: data.attackDemands,
        plans: data.operationalPlans
      }
    })
  }
}