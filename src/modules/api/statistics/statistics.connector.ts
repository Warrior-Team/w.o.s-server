import { DbConnector } from '../../db/db-connector';
import { Statistic } from '../../models/statistic';

export class StatisticsConnector{

  public async getStats(statsInfoInput: Statistic) {
    
    let serverId = statsInfoInput.serverId;
    let reality = statsInfoInput.reality;
    try {
      let stats = await DbConnector.query(`SELECT duration_ms,to_char(request_time, 'HH24:MI:SS')  as request_time  FROM reality${reality}.statistics where server_id = ${serverId}`);
      console.log(`Incoming request - Get Stats for server ${serverId} in Reality ${reality}`);
      return {serverId, stats: stats.rows};
    } catch (e) {
      console.log(`Error occurred`);
    }
  }
}