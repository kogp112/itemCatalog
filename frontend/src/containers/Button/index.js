import React from 'react'
import { connect } from 'react-redux'
import GenreButton from '../../components/GenreButton'
import { showItem } from '../../actions'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange() {
        const genre = { genre: this.props.genre }
        this.props.dispatch(showItem(genre))
    }
    
    render() {
        return (
            <GenreButton genre={this.props.genre} onClick={this.handleChange} />
        )
    }
}

export default connect()(Button)
