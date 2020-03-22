import {Application, Request, Response} from 'express';
import {DbConnector} from '../../db/db-connector';

export class StatisticsApi {
    static init(app: Application) {
        app.post('/statistic', StatisticsApi.getStats);
    }

    static async getStats(req: Request, res: Response) {
        try {
            let reality = req.headers.reality;
            let serverId = parseInt(req.body.serverId);
            let stats = await DbConnector.query(`SELECT duration_ms,to_char(request_time, 'HH24:MI:SS')  as request_time  FROM reality${reality}.statistics where server_id = ${serverId}`);
            console.log(`Incoming request - Get Stats for server ${serverId} in Reality ${reality}`);
            const answer = {serverId, stats: stats.rows};
            res.send(answer);
        } catch (e) {
            console.log(`Error occurred`);
        }
    }
}
