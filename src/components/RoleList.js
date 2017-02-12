import React, {Component, PropTypes} from 'react';

class RoleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {key: null, text: '전체'},
                {key: 'Assassin', text: '암살자'},
                {key: 'Fighter', text: '전사'},
                {key: 'Mage', text: '마법사'},
                {key: 'Support', text: '서포터'},
                {key: 'Tank', text: '탱커'},
                {key: 'Marksman', text: '원거리 딜러'}
            ]
        };
    }

    updateRole(role) {
        this.props.onUpdateRole(role);
    }

    render() {
        let items = this.state.items.map((item, idx) => (
            <li className="role__item" key={idx}>
                <button className="role__item-button"
                        onClick={this.updateRole.bind(this, item.key)}>{item.text}</button>
            </li>
        ));

        return (
            <ul className="role__list">
                {items}
            </ul>
        );
    }
}

RoleList.propTypes = {
    onUpdateRole: PropTypes.func.isRequired
};

export default RoleList;