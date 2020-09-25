import React, { Component } from "react";

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teams: null,
            troops: null,
        }
    }
    
    componentDidMount() {
        fetch("https://lukabombala.pythonanywhere.com/hlm/teams?format=json")
        .then(response => response.json())
        .then(data => this.setState({ teams: data.results }))

        fetch("https://lukabombala.pythonanywhere.com/hlm/troops?format=json")
        .then(response => response.json())
        .then(data => this.setState({ troops: data.results }))
    }

    render(){
        const teams = this.state.teams;
        const troops = this.state.troops;
        return(
            <div>
            {this.state.troops !== null ? 

            <React.Fragment>
            <h3>Lista zastępów</h3>
            <ul>
            {troops.map((troop) => {
                return (
                    <li>
                    <div key={troop.id} className="list">
                        <h3 className="team-text">{troop.troop_name}</h3>
                        <span className="team-description">{troop.troop_description}</span>
                    </div>
                    </li>
                );
            })}
            </ul>
            </React.Fragment> 

                : <div></div>
            }
            <hr/>
            
            </div>
        );
    }
}

export default Test;
