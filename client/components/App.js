import React from 'react';
import Relay from 'react-relay';

import RecieptsList from './RecieptsList';


class App extends React.Component {
    selectTeam = (el) => {
        var team = this.props.user.teams.find(t => t.id == el.currentTarget.value);
        this.setState({team: team});
    }

    render() {
        const {children, user} = this.props;
        return (
            <div>
                <div>
                    <h1>Compta (user: {user.name})</h1>
                    <select onChange={this.selectTeam}>
                        {user.teams.map((team) =>
                            <option key={team.id} value={team.id}>{team.name}</option>
                        )}
                    </select>
                </div>
                {this.state && this.state.team &&
                <RecieptsList team={this.state.team} />}
            </div>
        );
    }
}

export default Relay.createContainer(App, {
    fragments: {
        user: () => Relay.QL`
            fragment on User {
                name,
                teams {
                    id,
                    name,
                    ${RecieptsList.getFragment('team')}
                }
            }
        `
    }
});
