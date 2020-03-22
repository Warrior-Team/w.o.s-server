import * as fs from 'fs';
import * as _ from 'lodash';
import {resolvers as RealitiesResolvers, typeDefs as RealitiesTypeDefs} from '../realities/realities.schema';
import {resolvers as StatisticsResolvers, typeDefs as StatisticsTypeDefs} from '../statistics/statistics.schema';


export const typeDefs = [fs.readFileSync(__dirname + "/root.gql", "utf8"), RealitiesTypeDefs, StatisticsTypeDefs];

export const resolvers = _.merge( RealitiesResolvers, StatisticsResolvers);