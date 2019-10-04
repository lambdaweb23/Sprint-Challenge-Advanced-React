import React from 'react';

class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log(this.props.player);
        return (
            <div className="container">
                <div className="player-card">
                    <p>Name: {this.props.player.name}</p>
                    <p>Country: {this.props.player.country}</p>
                </div>
            </div>
        )
    }
}

export default PlayerCard;