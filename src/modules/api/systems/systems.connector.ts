import {DbConnector} from '../../db/db-connector';
import { System } from '../../models/system';

export class SystemsConnector {

  public async getSystems(reality: number) {
    let result = await DbConnector.query(`SELECT id, name, team, details, icon, "isAlive", to_char("lastAlive", 'HH24:MI:SS DD/MM/YYYY') as "lastAlive" FROM reality${reality}.servers`);
    console.log('Incoming request - Get All systems, Reality:', reality);
    return result.rows;
}

  public async addSystem(reality: number, data: System) {
    try {
        let dataAsString = JSON.stringify(data);
        console.log(`Incoming request - adding system with payload: ${dataAsString}`);
        let query = `INSERT INTO reality${reality}.servers (name, team, details, icon, url) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        let newServer = await DbConnector.query(query, [data.name, data.team, data.details, data.icon, data.url]);
        console.log(newServer.rows);
        return newServer.rows;
    } catch (error) {
      return error;
    }
  }

  public async updateSystem(reality: number, data: System) {
    try {
        let dataAsString = JSON.stringify(data);
        console.log(`Incoming request - updating system with payload: ${dataAsString}`);
        let query = `UPDATE reality${reality}.servers SET name = $1, team = $2, details = $3, icon = $4, url = $5 where id = $6 RETURNING *`;
        let newServer = await DbConnector.query(query, [data.name, data.team, data.details, data.icon, data.url, data.id]);
        return newServer.rows;
    } catch (error) {
        console.error('Error Occurred while updating system, error:', error);
        return error;
    }
  }

  public async removeSystem(reality: number, id: number) {
    try {
        let query = `DELETE FROM reality${reality}.servers WHERE id = $1`;
        await DbConnector.query(query, [id]);
        query = `DELETE FROM reality${reality}.statistics WHERE server_id = $1`;
        await DbConnector.query(query, [id]);
        return id;
    } catch (e) {
        console.log('Error occurred: ', e);
    }
  }
}