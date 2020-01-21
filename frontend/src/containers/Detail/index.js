import React from 'react'
import { connect } from 'react-redux'
import ItemDetail from '../../components/ItemDetail'

class Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (this.props.location.query == undefined) {
            return null
        }
        const item_info = this.props.location.query.item
        return (
            <ItemDetail item_info={item_info} />
        )
    }
}

export default connect()(Detail)
