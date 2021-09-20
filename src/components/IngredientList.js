import React from 'react'

export default class IngredientList extends React.Component {
    render() {
        return (
            <ul className = 'list'>
                <li>
                    {this.props.img}
                {this.props.measure} {this.props.state} of {this.props.item}
                </li>
            </ul>
            
        )
    }
}
