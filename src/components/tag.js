import React from 'react';

const tags = {
    'car': {
        'color': 'primary',
        'name': 'Car'
    },
    'insurance': {
        'color': 'success',
        'name': 'Insurance'
    }
}

export default class Tag extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            color: 'primary'
        }
    }

    render() {
        return (
            <span className={`badge badge-pill badge-${tags[this.state.name].color} ml-1 float-left d-block`}>{tags[this.state.name].name}</span>
        )
    }
}