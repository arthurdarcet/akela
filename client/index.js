import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import {IndexRoute, Route, Router} from 'react-router';

import App from './components/App';
import RecieptsList from './components/RecieptsList';


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://www.GraphQLHub.com/graphql')
);

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

class RelayRoute extends Relay.Route {
    static routeName = 'HackerNewsRoute';
    static queries = {
        store: (Component) => Relay.QL`
            query root {
                hn { ${Component.getFragment('store')} },
            }
        `,
    };
}

ReactDOM.render(
    <Relay.RootContainer Component={App} route={new RelayRoute()} />,
    mountNode
);
