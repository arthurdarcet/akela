import React from 'react';


const reciepts = [
    {amount: 3},
    {amount: 13},
    {amount: 33},
    {amount: 23}
];
export default class TeamSelector extends React.Component {
    render() {
        return (
            <ul>
                {reciepts.map((r) => <li>{r.amount}</li>)}
            </ul>
        );
    }
}
