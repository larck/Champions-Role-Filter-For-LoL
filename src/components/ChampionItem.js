import React from 'react';

class ChampionItem extends React.Component {
    render() {
        let champion = this.props.item;

        return (
            <div className="champion__item">
                <div className="champion__info">
                    <div className="champion__info-image">
                        <img src={champion.imageUrl} alt={champion.name}/>
                    </div>
                    <div className="champion__info-name">{champion.name}</div>
                </div>
            </div>
        );
    }
}

export default ChampionItem;