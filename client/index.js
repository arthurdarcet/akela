import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import App from './components/App';


Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('/graphql'));

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

class RelayRoot extends Relay.Route {
    static routeName = 'RootQuery';
    static queries = {
        user: (Component) => Relay.QL`
            query { user(id: "56066eea11978c460b95285c") {
                ${Component.getFragment('user')}
            } }
        `,
    };
}

ReactDOM.render(
    <Relay.RootContainer Component={App} route={new RelayRoot()} />,
    mountNode
);
