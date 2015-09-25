import React from 'react';


export default class TeamSelector extends React.Component {
    render() {
        return (
            <ul>
                {this.props.user.teams.map((team) => <li>{team.name}</li>)}
            </ul>
        );
    }
}
