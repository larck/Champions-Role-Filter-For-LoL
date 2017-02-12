import React, {Component, PropTypes} from 'react';

class ChampionSearch extends Component {
    constructor(props) {
        super(props);
    }

    updateSearchChampion(e) {
        this.props.onUpdateSearchChampion(e.target.value);
    }

    render() {
        return (
            <div className="champion-search__wrap">
                <input type="text" className="champion-search__input"
                       value={this.props.text || ''} onChange={this.updateSearchChampion.bind(this)}/>
            </div>
        );
    }
}

ChampionSearch.propTypes = {
    onUpdateSearchChampion: PropTypes.func.isRequired
};

export default ChampionSearch;