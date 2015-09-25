import React from 'react';

import TeamSelector from './TeamSelector';


const user = {
    name: 'Arthur',
    id: 'ida',
    teams: [
        {name: 'team a', id: 'ta'},
        {name: 'team b', id: 'tb'}
    ]
};

class App extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <h1>Compta (user: {user.name})</h1>
                <TeamSelector user={user} />
                <div>{children}</div>
            </div>
        );
    }
}

export default App;
