import React, {Component, PropTypes} from 'react';

class RoleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {role: null, text: '전체'},
                {role: 'Assassin', text: '암살자'},
                {role: 'Fighter', text: '전사'},
                {role: 'Mage', text: '마법사'},
                {role: 'Support', text: '서포터'},
                {role: 'Tank', text: '탱커'},
                {role: 'Marksman', text: '원거리 딜러'}
            ],
            activeRole: null,
            activeClass: 'role__item--active'
        };
    }

    updateRole(role) {
        this.setState({activeRole: role});
        this.props.onUpdateRole(this.state.activeRole);
    }

    activeClass(role) {
        let className = '';
        if (
            (this.state.activeRole === role) || (this.state.activeRole === '')
        ) {
            className = this.state.activeClass;
        }
        return className;
    }

    render() {
        let items = this.state.items.map((item, idx) => (
            <li className={'role__item ' + this.activeClass(item.role)} key={idx}>
                <button className="role__item-button"
                        onClick={this.updateRole.bind(this, item.role)}>{item.text}</button>
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