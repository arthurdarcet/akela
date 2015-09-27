import React from 'react';
import Relay from 'react-relay';


const reciepts = [
    {amount: 3},
    {amount: 13},
    {amount: 33},
    {amount: 23}
];
class RecieptsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Ticket pour {this.props.team.name}</h2>
                <ul>
                    {reciepts.map((r, idx) => <li key={idx}>{r.amount}</li>)}
                </ul>
            </div>
        );
    }
}

export default Relay.createContainer(RecieptsList, {
    fragments: {
        team: () => Relay.QL`
            fragment on Team {
                id,
                name,
            }
        `
    }
});
