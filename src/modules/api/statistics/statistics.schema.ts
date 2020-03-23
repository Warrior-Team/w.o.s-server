import * as fs from 'fs';
import {StatisticsConnector} from './statistics.connector'

export const typeDefs = fs.readFileSync(__dirname + "/statistics.gql", "utf8");

const statisticsConnector = new StatisticsConnector();

export const resolvers = {
    Query: {
        getStats(parent: any, args: any, context: any) {

            return statisticsConnector.getStats(args.statsInfoInput);
        }
    
    }
}