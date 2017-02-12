import React from 'react';
import RoleList from './RoleList';
import ChampionList from './ChampionList';
import Champions from "./Champions.json";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectRole: null,
            champions: Champions
        };

        this.updateRole = this.updateRole.bind(this);
    }

    updateRole (role) {
        this.setState({selectRole: role});
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    <RoleList onUpdateRole={this.updateRole}/>
                </header>
                <ChampionList champions={this.state.champions} selectRole={this.state.selectRole}/>
            </div>
        );
    }
}

export default App;