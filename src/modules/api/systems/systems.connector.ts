import {DbConnector} from '../../db/db-connector';

export class SystemsConnector {

  public async getSystems(reality: number) {

    let result = await DbConnector.query(`SELECT id, name, team, details, icon, "isAlive", to_char("lastAlive", 'HH24:MI:SS DD/MM/YYYY') as "lastAlive" FROM reality${reality}.servers`);
    console.log('Incoming request - Get All systems, Reality:', reality);
    return result.rows;
}
}