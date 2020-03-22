import {Application, Request, Response} from 'express';
import {DbConnector} from '../../db/db-connector';

export class RealitiesApi {
    static init(app: Application) {
        app.get('/realities', RealitiesApi.getRealities);
    }

    static async getRealities(req: Request, res: Response) {
        let result = await DbConnector.query('SELECT * FROM public.realities');
        console.log('Incoming request - Get All realities');
        res.send(result.rows);
    }
}
