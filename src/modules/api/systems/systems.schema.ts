import * as fs from 'fs';
import {SystemsConnector} from './systems.connector';

export const typeDefs = fs.readFileSync(__dirname + "/systems.gql", "utf8");

const systemsConnector = new SystemsConnector();

export const resolvers = {
    Query: {
        getSystems(parent: any, args: any, context: any) {
            return systemsConnector.getSystems(args.reality);
        }
    }
}