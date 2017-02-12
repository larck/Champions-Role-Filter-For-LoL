import React from 'react';
import RoleList from './RoleList';
import ChampionSearch from './ChampionSearch';
import ChampionList from './ChampionList';
import Champions from "./Champions.json";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectRole: null,
            searchChampion: null,
            champions: Champions
        };

        this.updateRole = this.updateRole.bind(this);
        this.updateSearchChampion = this.updateSearchChampion.bind(this);
        this.filterChampions = this.filterChampions.bind(this);
    }

    updateRole(role) {
        this.setState({selectRole: role});
    }

    updateSearchChampion(championName) {
        this.setState({searchChampion: championName});
    }

    filterChampions() {
        let role = this.state.selectRole;
        let champions = this.state.champions;

        // 역할군 필터링
        champions = champions.filter((item) => (
            // item.roles.indexOf(role) >= 0 || role === null
            item.role === role || role === null
        ));

        // 검색어 필터링
        if (this.state.searchChampion) {
            champions = champions.filter((item) => (
                (item.name.indexOf(this.state.searchChampion) > -1) || (item.key.indexOf(this.state.searchChampion) > -1)
            ));
        }

        return champions;
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    <RoleList onUpdateRole={this.updateRole}/>
                    <ChampionSearch text={this.state.searchChampion}
                                    onUpdateSearchChampion={this.updateSearchChampion}/>
                </header>
                <ChampionList champions={this.filterChampions}/>
            </div>
        );
    }
}

export default App;