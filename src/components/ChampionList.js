import React from 'react';
import ChampionItem from './ChampionItem';

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let champions = this.props.champions();
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