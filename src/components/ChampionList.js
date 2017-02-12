import React from 'react';
import ChampionItem from './ChampionItem';

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let role = this.props.selectRole;
        let champions = this.props.champions.filter((item) => (
            // item.roles.indexOf(role) >= 0 || role === null
            item.role === role || role === null
        ));
        let items = champions.map((item, idx) =>
            <ChampionItem item={item} key={idx}/>
        );

        return (
            <div className="champion__list">
                {items}
            </div>
        );
    }
}

export default ChampionList;