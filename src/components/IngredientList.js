import React from 'react'

export default class IngredientList extends React.Component {
    render() {
        return (
            <ol>
            <ul>
                {this.props.measure} {this.props.state} of {this.props.item}
            </ul>
            </ol>
        )
    }
}
