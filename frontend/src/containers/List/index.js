import { connect } from 'react-redux'
import ItemList from '../../components/ItemList'
import { showItem, hideItem } from '../../actions'

const mapStateToProps = state => {
    const itemsArray = state.changeButton.items
    return { items: itemsArray }
}

const mapDispatchToProps = dispatch => {
    return {
        showItemList: () => dispatch(showItem('')),
        hideItemList: () => dispatch(hideItem(''))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)