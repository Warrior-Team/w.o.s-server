import {Application, Request, Response} from 'express';
import {DbConnector} from '../../db/db-connector';

export class SystemsApi {
    static init(app: Application) {
        app.post('/systems', SystemsApi.getSystems);
        app.post('/systems/message', SystemsApi.systems);
        app.put('/systems', SystemsApi.addSystem);
        app.delete('/systems', SystemsApi.removeSystem);
        app.post('/systems/update', SystemsApi.updateSystem);
    }

    static async getSystems(req: Request, res: Response) {
        let reality = req.headers.reality;
        let result = await DbConnector.query(`SELECT id, name, team, details, url, icon, "isAlive", to_char("lastAlive", 'HH24:MI:SS DD/MM/YYYY') as "lastAlive" FROM reality${reality}.servers`);
        console.log('Incoming request - Get All systems, Reality:', reality);
        res.send(result.rows);
    }

    static async systems(req: Request, res: Response) {
        let data = req.body.data;
        console.log(`Incoming request - with payload: ${data}`);
        res.send(JSON.stringify({data: 'hello'}));
    }

    static async addSystem(req: Request, res: Response) {
        try {
            let data = req.body.system;
            let reality = req.headers.reality;
            console.log(`Incoming request - adding system with payload: ${data}`);
            let query = `INSERT INTO reality${reality}.servers (name, team, details, icon, url) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
            let newServer = await DbConnector.query(query, [data.name, data.team, data.details, data.icon, data.url]);
            res.send(newServer.rows);
        } catch (error) {
            res.send(error);
        }
    }

    static async updateSystem(req: Request, res: Response) {
        try {
            let data = req.body.system;
            let reality = req.headers.reality;
            console.log(`Incoming request - updating system with payload: ${data}`);
            let query = `UPDATE reality${reality}.servers SET name = $1, team = $2, details = $3, icon = $4, url = $5 where id = $6 RETURNING *`;
            let newServer = await DbConnector.query(query, [data.name, data.team, data.details, data.icon, data.url, data.id]);
            res.send(newServer.rows);
        } catch (error) {
            console.error('Error Occurred while updating system, error:', error);
            res.send(error);
        }
    }

    static async removeSystem(req: Request, res: Response) {
        try {
            let data = req.body.system;
            let reality = req.headers.reality;
            let query = `DELETE FROM reality${reality}.servers WHERE id = $1`;
            await DbConnector.query(query, [data.id]);
            query = `DELETE FROM reality${reality}.statistics WHERE server_id = $1`;
            await DbConnector.query(query, [data.id]);
            res.send({id: data.id});
        } catch (e) {
            console.log('Error occurred: ', e);
        }
    }
}
