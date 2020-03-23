import {DbConnector} from '../../db/db-connector';

export class StatisticsConnector{

  public async getStats(statsInfoInput: any) {
    
    let serverId = statsInfoInput.serverId;
    let reality = statsInfoInput.reality;
    try {
      let stats = await DbConnector.query(`SELECT duration_ms,to_char(request_time, 'HH24:MI:SS')  as request_time  FROM reality${reality}.statistics where server_id = ${serverId}`);
      console.log(`Incoming request - Get Stats for server ${serverId} in Reality ${reality}`);
      const answer = {serverId, stats: stats.rows};
      return answer;
    } catch (e) {
      console.log(`Error occurred`);
    }
  }
}