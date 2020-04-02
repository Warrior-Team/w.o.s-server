import * as fs from 'fs';
import {RealitiesConnector} from './realities.connector';

export const typeDefs = fs.readFileSync(__dirname + "/realities.gql", "utf8");

const realitiesConnector = new RealitiesConnector();

export const resolvers = {
    Query: {
        getRealities() {
         return realitiesConnector.getRealities();
        }
    }
}