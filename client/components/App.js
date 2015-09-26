import React from 'react';

import RecieptsList from './components/RecieptsList';


const user = {
    name: 'Arthur',
    id: 'ida',
    teams: [
        {name: 'team a', id: 'ta'},
        {name: 'team b', id: 'tb'}
    ]
};

class App extends React.Component {
    selectTeam = (team) => {
        console.log(team);
        this.setState({team: team});
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                <div>
                    <h1>Compta (user: {user.name})</h1>
                    <select onChange={this.selectTeam}>
                        {user.teams.map((team) =>
                            <option value={team.id}>{team.name}</option>
                        )}
                    </select>
                </div>
                <RecieptsList team={this.state.team} />
            </div>
        );
    }
}

export default App;
