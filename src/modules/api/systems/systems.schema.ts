import * as fs from 'fs';
import {SystemsConnector} from './systems.connector';

export const typeDefs = fs.readFileSync(__dirname + "/systems.gql", "utf8");

const systemsConnector = new SystemsConnector();

export const resolvers = {
    Query: {
        getSystems(parent: any, args: any, context: any) {
            return systemsConnector.getSystems(args.reality);
        }
    }, 

    Mutation: {
        addSystem(parent: any, args: any, context: any) {
            return systemsConnector.addSystem(args.reality, args.data);
        },
        updateSystem(parent: any, args: any, context: any) {
            return systemsConnector.updateSystem(args.reality, args.data);
        },
        removeSystem(parent: any, args: any, context: any) {
            return systemsConnector.removeSystem(args.reality, args.id);
        }
    }
}