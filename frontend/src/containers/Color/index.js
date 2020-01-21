import React from 'react'
import { connect } from 'react-redux'
import ColorButton from '../../components/ColorButton'
import { showItem } from '../../actions'

class Color extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange() {
        const color = {color: this.props.color}
        this.props.dispatch(showItem(color))
    }
    
    render() {
        return (
            <ColorButton color={this.props.color} onClick={this.handleChange} />
        )
    }
}

export default connect()(Color)
