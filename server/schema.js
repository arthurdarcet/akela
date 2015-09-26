import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
} from 'graphql/type';

import Team from './models/Team';
import User from './models/User';


var teamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: GraphQLString},
        users: {
            type: new GraphQLList(userType),
            resolve: (team, params) => team.map((_id) => User.findOne({_id: _id}))
        }
    })
});

var userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: GraphQLString},
        teams: {
            type: new GraphQLList(teamType),
            resolve: (user, params) => Team.find({users: user.id})
        }
    })
});

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            user: {
                type: userType,
                args: {
                    id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (root, {id}) => User.findById(id)
            }
        }
    })
});
